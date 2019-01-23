package com.soywiz.ktcc

import com.soywiz.ktcc.util.*

data class PToken(var str: String = "<EOF>", val range: IntRange = 0 until 0, val file: String, val nline: Int) {
    var replacement: String? = null
    var keep = true
    val start get() = range.start
    val end get() = range.endInclusive + 1
}

class PreprocessorContext(
        val initialDefines: Map<String, String> = mapOf(),
        var file: String = "unknown",
        var optimization: Int = 0,
        val includeLines: Boolean = true,
        val includeProvider: (file: String, kind: IncludeKind) -> String = { file, kind -> error("Can't find file=$file, kind=$kind") }
) {
    private val defines = LinkedHashMap<String, String>(initialDefines)

    private var counter = 0
    private var includeLevel = 0

    fun <T> includeBlock(newFile: String, callback: () -> T): T {
        val oldFile = file
        file = newFile
        includeLevel++
        try {
            return callback()
        } finally {
            includeLevel--
            file = oldFile
        }
    }

    // https://gcc.gnu.org/onlinedocs/cpp/Standard-Predefined-Macros.html#Standard-Predefined-Macros
    // https://gcc.gnu.org/onlinedocs/cpp/Common-Predefined-Macros.html#Common-Predefined-Macros
    fun defines(name: String): String? {
        return when (name) {
            "__FILE__" -> file.cquoted
            "__LINE__" -> "-1".cquoted
            "__STDC__" -> "1"
            "__DATE__" -> "??? ?? ????"
            "__TIME__" -> "??:??:??"
            "__TIMESTAMP__" -> "??? ??? ?? ??:??:?? ????"
            "__STDC_VERSION__" -> "201710L"
            "__COUNTER__" -> "${counter++}"
            "__unix__" -> "1"
            "__INCLUDE_LEVEL__" -> "$includeLevel"
            "__OPTIMIZE__" -> if (optimization > 0) "1" else null
            else -> defines[name]
        }
    }

    fun defined(name: String) = defines(name) != null

    fun define(name: String, replacement: String) {
        defines[name] = replacement
    }

    fun undefine(name: String) {
        defines.remove(name)
    }

    var pif = PIfCtx(true)
}

fun ListReader<PToken>.expectEOL(): PToken = expectAny("\n", "<EOF>")

fun ListReader<PToken>.expectAny(vararg expect: String): PToken {
    val actual = readOutside()
    if (actual.str !in expect) throw ExpectException("Expected ${expect.toList()} but found '$actual'")
    return actual
}

private fun String._isSpace() = this.isBlank() && this != "\n"

fun <T> ListReader<T>.skipSpaces(skipEOL: Boolean = false, skipComments: Boolean = true, getStr: (T) -> String): ListReader<T> = this.apply {
    while (true) {
        val peek = getStr(peekOutside())
        if (peek._isSpace()) {
            readOutside()
            continue
        }
        if (peek == "\n" && skipEOL) {
            readOutside()
            continue
        }
        if (skipComments && (peek.startsWith("//") || peek.startsWith("/*"))) {
            readOutside()
            continue
        }
        break
    }
}

data class PIfCtx(
        var success: Boolean = true,
        val parent: PIfCtx? = null
) {
    val renderFinal: Boolean get() = success && (parent?.renderFinal ?: true)
}

enum class IncludeKind { GLOBAL, LOCAL }

class PreprocessorReader(val tokens: List<PToken>) : ListReader<String>(tokens.map { it.str }, "<EOF>") {
    val lastToken = tokens.lastOrNull()
    val lastPos = lastToken?.end ?: 0
    val lastLine = lastToken?.nline?.plus(1) ?: 0
    fun peekToken(): PToken = tokens.getOrNull(pos) ?: PToken("<EOF>", lastPos..lastPos, "<undefined file>", lastLine)
}

fun PreprocessorReader.skipSpaces(skipEOL: Boolean = false, skipComments: Boolean = true): PreprocessorReader = this.apply { skipSpaces(skipEOL, skipComments) { it } }
fun PreprocessorReader.skipSpacesAndEOLS(): PreprocessorReader = this.apply { skipSpaces(skipEOL = true) { it } }

class CPreprocessor(val ctx: PreprocessorContext, val input: String, val out: StringBuilder) {
    val nlines = input.lines().size
    val tokens = PreprocessorReader(doTokenize(
            input, PToken(range = input.length until input.length, file = ctx.file, nline = nlines),
            include = IncludeMode.ALL
    ) { PToken(str, (pos until (pos + str.length)), ctx.file, nline) }.items)

    fun preprocess() = tokens.preprocess()

    fun PreprocessorReader.readId(): String {
        return read()
    }

    fun PreprocessorReader.readPPtokens(): List<String> {
        val out = arrayListOf<String>()
        while (!eof && peek() != "\n") out += read()
        return out
    }

    fun PreprocessorReader.preprocess() {
        if (ctx.includeLines) out.append("# 1 ${ctx.file.cquoted}\n")
        while (!eof) {
            val tok = read()
            if (tok == "#") {
                val ntok = skipSpaces().read()
                when (ntok) {
                    "define" -> {
                        val id = skipSpaces().readId()
                        out.append("\n")
                        skipSpaces()
                        val replacement = readPPtokens()
                        ctx.define(id, replacement.joinToString(""))
                        if (!eof) expect("\n")
                    }
                    "undef" -> {
                        val id = skipSpaces().readId()
                        skipSpaces()
                        if (!eof) expect("\n")
                        ctx.undefine(id)
                    }
                    "include" -> {
                        val ptokens = skipSpaces().readPPtokens()
                        var eol = false
                        //println("TOKEN AFTER INCLUDE: '${peekOutside()}'")
                        if (!eof) {
                            expect("\n")
                            eol = true
                        }
                        //println("TOKEN AFTER INCLUDE LB: '${peekOutside()}'")

                        val include = ptokens.joinToString("")
                        val includeName = include.substring(1, include.length - 1)
                        val kind = when (include[0]) {
                            '<' -> IncludeKind.GLOBAL
                            '"' -> IncludeKind.LOCAL
                            else -> error("Not a '<' or '\"' in include")
                        }
                        val fileContent = ctx.includeProvider(includeName, kind)
                        //println("TOKEN AFTER INCLUDE LB2: '${peekOutside()}'")
                        ctx.includeBlock(includeName) {
                            CPreprocessor(ctx, fileContent, out).preprocess()
                        }
                        //println("TOKEN AFTER INCLUDE LB3: '${peekOutside()}'")
                        if (!fileContent.endsWith("\n") && eol) {
                            out.append("\n")
                        }
                        //println("TOKEN AFTER INCLUDE LB4: '${peekOutside()}'")
                        if (ctx.includeLines) out.append("# ${this.peekToken().nline} ${ctx.file.cquoted}\n")
                        //println("TOKEN AFTER INCLUDE LB5: '${peekOutside()}'")

                    }
                    else -> error("Unsupported preprocessor '$ntok'")
                }
            } else {
                if (ctx.defined(tok)) {
                    out.append(ctx.defines(tok))
                } else {
                    out.append(tok)
                }
            }
        }
    }
}

fun String.preprocess(ctx: PreprocessorContext = PreprocessorContext()): String {
    val sb = StringBuilder()
    CPreprocessor(ctx, this, sb).preprocess()
    return sb.toString()
}
