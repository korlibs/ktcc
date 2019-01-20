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

fun ListReader<PToken>.skipSpaces(skipEOL: Boolean = false, skipComments: Boolean = true): ListReader<PToken> = this.apply {
    while (true) {
        val peek = peekOutside().str
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

fun String.preprocess(ctx: PreprocessorContext = PreprocessorContext()): String {
    var fstr = this

    do {
        val lines = fstr.lines()
        val tokens = doTokenize(
                fstr, PToken(range = fstr.length until fstr.length, file = ctx.file, nline = lines.size),
                include = IncludeMode.ALL
        ) { PToken(str, (pos until (pos + str.length)), ctx.file, nline) }
        //val replaceRanges = arrayListOf<PReplaceRange>()
        var replacements = 0
        tokens.apply {
            loop@while (!eof) {
                val spos = pos
                val tok = read()
                tok.keep = ctx.pif.renderFinal

                fun removeChunk(start: Int = spos, end: Int = pos) {
                    for (n in start until end) {
                        tokens.items.getOrNull(n)?.replacement = ""
                    }
                }

                when (tok.str) {
                    "#define" -> {
                        val name = skipSpaces().read()
                        when (peekOutside().str) {
                            "(" -> {
                                skipSpaces().expectAny("(")
                                val ids = arrayListOf<String>()
                                while (skipSpaces().peekOutside().str != ")") {
                                    ids += skipSpaces().readOutside().str
                                    val after = skipSpaces().peekOutside().str
                                    if (after == ",") {
                                        readOutside()
                                        continue
                                    }
                                    if (after == ")") break
                                }
                                skipSpaces().expectAny(")")
                            }
                            "\n", "<EOF>" -> {
                                skipSpaces().readOutside()
                                ctx.define(name.str, name.str)
                            }
                            else -> {
                                val value = skipSpaces().read()
                                ctx.define(name.str, value.str)
                            }
                        }
                        removeChunk()
                        //replaceRanges += PReplaceRange(spos until epos, "")
                    }
                    "#undef" -> {
                        val name = skipSpaces().read().str
                        skipSpaces().expectEOL()
                        ctx.undefine(name)
                        removeChunk()
                    }
                    "#ifdef", "#ifndef" -> {
                        val negate = tok.str == "#ifndef"
                        val name = skipSpaces().read().str
                        skipSpaces().expectEOL()
                        var success = ctx.defined(name)
                        if (negate) success = !success
                        ctx.pif = ctx.pif.copy(success = success, parent = ctx.pif)
                        removeChunk()
                    }
                    "#elsif" -> {
                        skipSpaces().expectEOL()
                        ctx.pif = ctx.pif.copy(success = !ctx.pif.success)
                        removeChunk()
                    }
                    "#endif" -> {
                        skipSpaces().expectEOL()
                        ctx.pif = ctx.pif.parent ?: error("No #if* matching #endif at $tok")
                        removeChunk()
                    }
                    "#include" -> {
                        skipSpaces()

                        when (val peek = peekOutside().str) {
                            "<" -> {
                                expectAny("<")
                                var fileName = ""
                                while (peekOutside().str != ">") fileName += readOutside().str
                                expectAny(">")
                                removeChunk()
                                ctx.includeBlock(fileName) {
                                    tokens.items[spos].replacement = ctx.includeProvider(fileName, IncludeKind.GLOBAL).preprocess(ctx)
                                }
                                replacements++
                            }
                            else -> {
                                if (peek.startsWith('"')) {
                                    readOutside()
                                    removeChunk()
                                    val fileName = peek.cunquoted
                                    ctx.includeBlock(fileName) {
                                        tokens.items[spos].replacement = ctx.includeProvider(fileName, IncludeKind.LOCAL).preprocess(ctx)
                                    }
                                    replacements++
                                } else {
                                    error("Invalid #include $peek")
                                }
                            }
                        }

                    }
                    else -> {
                        if (tok.keep) {
                            val replaced = ctx.defines(tok.str)
                            if (replaced != null) {
                                //println("$v in $defines")
                                if (tok.str != replaced) {
                                    tok.replacement = replaced
                                    replacements++
                                    //replaceRanges += PReplaceRange(tok.range, replaced)
                                }
                            }
                        } else {
                            tok.replacement = ""
                        }
                    }
                }
            }
        }
        fstr = tokens.items.map { it.replacement ?: it.str }.joinToString("")
        //fstr = fstr.replaceAtOnce(replaceRanges)
    } while (replacements != 0)

    return fstr
}