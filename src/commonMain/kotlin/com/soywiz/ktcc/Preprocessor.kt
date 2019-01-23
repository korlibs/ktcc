package com.soywiz.ktcc

import com.soywiz.ktcc.util.*

// https://gcc.gnu.org/onlinedocs/cpp/index.html#SEC_Contents

data class PToken(var str: String = "<EOF>", val range: IntRange = 0 until 0, val file: String, val nline: Int) {
    var replacement: String? = null
    var keep = true
    val start get() = range.start
    val end get() = range.endInclusive + 1
}

data class DefineFunction(val id: String, val args: List<String>, val replacement: List<String>)

class PreprocessorContext(
        val initialDefines: Map<String, String> = mapOf(),
        var file: String = "unknown",
        var optimization: Int = 0,
        val includeLines: Boolean = true,
        val includeProvider: (file: String, kind: IncludeKind) -> String = { file, kind -> error("Can't find file=$file, kind=$kind") }
) : EvalContext() {
    private val defines = LinkedHashMap<String, String>(initialDefines)
    val definesFunction = LinkedHashMap<String, DefineFunction>()

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
            "__KTCC__" -> "1"
            "__FILE__" -> file.cquoted
            "__LINE__" -> "-1"
            "__STDC__" -> "1"
            "__DATE__" -> "??? ?? ????".cquoted
            "__TIME__" -> "??:??:??".cquoted
            "__TIMESTAMP__" -> "??? ??? ?? ??:??:?? ????".cquoted
            "__STDC_VERSION__" -> "201710L".cquoted
            "__COUNTER__" -> "${counter++}"
            "__unix__" -> "1"
            "__INCLUDE_LEVEL__" -> "$includeLevel"
            "__OPTIMIZE__" -> if (optimization > 0) "1" else null
            "__OBJC__" -> null
            "__ASSEMBLER__" -> null
            else -> defines[name]
        }
    }

    fun defined(name: String) = defines(name) != null

    fun define(name: String, replacement: String) {
        defines[name] = replacement
    }

    fun undefine(name: String) {
        defines.remove(name)
        definesFunction.remove(name)
    }

    override fun resolveId(id: String): Any? {
        val result = defines(id)
        //println("CALLED resolveId: '$id' -> $result")
        return result
    }

    override fun callFunction(id: String, args: Array<Any?>): Any? {
        return when (id) {
            "defined" -> {
                val value = args.getOrNull(0)
                val result = value != null
                //println("CALLED defined('$value') -> $result")
                result
            }
            else -> super.callFunction(id, args)
        }
    }
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

enum class IncludeKind { GLOBAL, LOCAL }

class PreprocessorReader(val tokens: List<PToken>) : ListReader<String>(tokens.map { it.str }, "<EOF>") {
    val lastToken = tokens.lastOrNull()
    val lastPos = lastToken?.end ?: 0
    val lastLine = lastToken?.nline?.plus(1) ?: 0
    fun peekToken(): PToken = tokens.getOrNull(pos) ?: PToken("<EOF>", lastPos..lastPos, "<undefined file>", lastLine)
}

fun <T : ListReader<String>> T.skipSpaces(skipEOL: Boolean = false, skipComments: Boolean = true): T = this.apply { skipSpaces(skipEOL, skipComments) { it } }
fun <T : ListReader<String>> T.skipSpacesAndEOLS(): T = this.apply { skipSpaces(skipEOL = true) { it } }
fun <T : ListReader<String>> T.peekWithoutSpaces(offset: Int = 0) = keepPos { skipSpaces().peek(offset) }

class CPreprocessor(val ctx: PreprocessorContext, val input: String, val out: StringBuilder) {
    val nlines = input.lines().size
    val tokens = PreprocessorReader(doTokenize(
            input, PToken(range = input.length until input.length, file = ctx.file, nline = nlines),
            include = IncludeMode.ALL
    ) { PToken(str, (pos until (pos + str.length)), ctx.file, nline) }.items)

    fun preprocess() = tokens.preprocess()

    fun PreprocessorReader.id(): String {
        return read()
    }

    fun PreprocessorReader.readPPtokens(): List<String> {
        val out = arrayListOf<String>()
        while (!eof && peek() != "\n") out += read()
        return out
    }

    fun PreprocessorReader.expectEOL() {
        if (!eof) expect("\n")
    }

    fun PreprocessorReader.readDirective(): String {
        skipSpacesAndEOLS()
        if (peekOutside() != "#") {
            error("Not a directive '${peekOutside()}'")
        }
        expect("#")
        return skipSpaces().read()
    }

    fun PreprocessorReader.expectDirective(name: String) {
        val tname = name.trimStart('#')
        val directive = peekDirective()
        if (directive != tname) {
            error("Expected #$tname but found #$directive")
        } else {
            readDirective()
        }
    }

    fun PreprocessorReader.peekDirective(): String? = keepPos {
        skipSpaces()
        if (peekOutside() == "#") {
            read()
            skipSpaces()
            return read()
        }
        return null
    }

    fun PreprocessorReader.ifGroup(): Boolean {
        val result = when (val directive = readDirective()) {
            "if" -> {
                val expr = readPTokensEolStr().programParser().expression()
                val result = expr.constantEvaluate(ctx)
                //println("$expr -> '$result'")
                result.toBool()
                //val success = result.toInt() != 0
            }
            "ifdef", "ifndef" -> {
                val id = readPTokensEolStr().trim()
                val resultRaw = ctx.defined(id)
                if (directive == "ifdef") resultRaw else !resultRaw
                //val success = result.toInt() != 0
            }
            else -> error("#$directive not #if, #ifdef or #ifndef")
        }
        return result
    }

    fun PreprocessorReader.tryElifGroup(): Boolean? {
        val directive = peekDirective()
        if (directive == "elif") {
            expectDirective(directive)
            val expr = readPTokensEolStr().programParser().expression()
            val result = expr.constantEvaluate(ctx).toBool()
            return result
        } else {
            return null
        }
    }

    fun PreprocessorReader.tryElseGroup(): Boolean {
        val directive = peekDirective()
        if (directive == "else") {
            expectDirective(directive)
            return true
        } else {
            return false
        }
    }

    fun PreprocessorReader.endif() {
        expectDirective("#endif")
    }

    fun PreprocessorReader.ifSection(baseShow: Boolean) {
        var showAny = false
        run {
            val show = ifGroup()
            showAny = showAny or show
            tryGroup(error = false, show = baseShow && show)
        }
        while (true) {
            val show = tryElifGroup() ?: break
            showAny = showAny or show
            tryGroup(error = false, show = baseShow && show)
        }
        if (tryElseGroup()) {
            tryGroup(error = false, show = baseShow && !showAny)
        }
        endif()
    }

    fun PreprocessorReader.readPTokensEol(skipSpaces: Boolean = true): List<String> {
        val ptokens = if (skipSpaces) skipSpaces().readPPtokens() else readPPtokens()
        var eol = false
        //println("TOKEN AFTER INCLUDE: '${peekOutside()}'")
        if (!eof) {
            expect("\n")
            eol = true
        }
        return ptokens
    }

    fun PreprocessorReader.readPTokensEolStr() = readPTokensEol().joinToString("")

    fun List<String>.preprocessTokens(level: Int = 0): List<String> {
        if (level > 100) error("Too much preprocessing stuff")
        val out = arrayListOf<String>()
        val reader = this.reader("")
        var replacement = false
        reader.apply {
            while (!eof) {
                val tok = read()
                val func = ctx.definesFunction[tok]
                when {
                    func != null && peekWithoutSpaces() == "(" -> {
                        replacement = true
                        skipSpaces().expect("(")
                        var inLevel = 0
                        val groups = arrayListOf<List<String>>()
                        val current = arrayListOf<String>()
                        fun flush() {
                            groups += current.toList()
                            current.clear()
                        }
                        skipSpaces()
                        loop@ while (!eof && peek() != "\n") {
                            val rtok = read()
                            when (rtok) {
                                "[" -> inLevel++
                                "]" -> inLevel--
                                "{" -> inLevel++
                                "}" -> inLevel--
                                "(" -> inLevel++
                                ")" -> {
                                    if (inLevel == 0) {
                                        flush()
                                        break@loop
                                    }
                                    inLevel--
                                }
                                "," -> {
                                    flush()
                                    skipSpaces()
                                }
                                else -> {
                                    current += rtok
                                }
                            }
                        }

                        val argToGroup = func.args.zip(groups).toMap().toMutableMap()

                        if (func.args.contains("...")) {
                            val startVararg = func.args.size - 1
                            argToGroup["__VA_ARGS__"] = listOf(groups.drop(startVararg).map { it.joinToString("") }.joinToString(", "))
                        }

                        val replacements = func.replacement.reader("")
                        while (!replacements.eof) {
                            if (replacements.peekWithoutSpaces() == "##") {
                                replacements.skipSpaces()
                            }
                            val repl = replacements.read()
                            when (repl) {
                                "#" -> {
                                    val a = replacements.read()
                                    val b = argToGroup[a]?.joinToString("") ?: a
                                    out += b.cquoted
                                }
                                "##" -> {
                                    replacements.skipSpaces()
                                }
                                in argToGroup -> out += argToGroup[repl]!!.preprocessTokens(level + 1)
                                else -> out += repl
                            }
                        }
                    }
                    ctx.defined(tok) -> {
                        val repl = ctx.defines(tok) ?: ""
                        if (repl != tok) replacement = true
                        out += repl
                    }
                    else -> {
                        if (tok.startsWith("//") || tok.startsWith("/*")) {
                            replacement = true
                            out += " ".repeat(tok.length)
                        } else {
                            out += tok
                        }
                    }
                }
            }
        }
        return if (replacement) out.preprocessTokens(level + 1) else out
    }

    fun PreprocessorReader.tryGroupPart(error: Boolean = true, show: Boolean = true): Boolean {
        val startToken = peekToken()
        val directive = peekDirective()
        when (directive) {
            // (6.10) text-line:
            null -> {
                val tokens = readPTokensEol(skipSpaces = false)
                if (show) {
                    for (token in tokens.preprocessTokens()) {
                        out.append(token)
                    }
                }
                if (!eof) out.append("\n")
            }
            "if", "ifdef", "ifndef" -> {
                ifSection(baseShow = show)
            }
            "define" -> {
                expectDirective("define")
                val id = skipSpaces().id()
                out.append("\n")
                if (peekOutside() == "(") {
                    val ids = arrayListOf<String>()
                    skipSpaces().expect("(")
                    while (!eof && skipSpaces().peek() != ")") {
                        ids += id()
                        if (skipSpaces().peek() == ",") {
                            skipSpaces().expect(",")
                            continue
                        }
                    }
                    skipSpaces().expect(")")
                    val replacement = skipSpaces().readPPtokens()
                    ctx.definesFunction[id] = DefineFunction(id, ids, replacement)
                } else {
                    val replacement = readPPtokens()
                    ctx.define(id, replacement.joinToString("").trim())
                }
                expectEOL()
            }
            "undef" -> {
                expectDirective("undef")
                val id = skipSpaces().id()
                skipSpaces()
                expectEOL()
                ctx.undefine(id)
            }
            "line", "pragma", "error", "include" -> {
                expectDirective(directive)
                val ptokens = readPTokensEol()
                val ptks = ptokens.filter { it.isNotBlank() }

                //println("TOKEN AFTER INCLUDE LB: '${peekOutside()}'")
                when (directive) {
                    "include" -> {
                        val include = ptokens.joinToString("")
                        val includeName = include.substring(1, include.length - 1)
                        val kind = when (include[0]) {
                            '<' -> IncludeKind.GLOBAL
                            '"' -> IncludeKind.LOCAL
                            else -> error("Not a '<' or '\"' in include")
                        }
                        val fileContent = if (show) ctx.includeProvider(includeName, kind) else ""
                        //println("TOKEN AFTER INCLUDE LB2: '${peekOutside()}'")
                        if (show) {
                            ctx.includeBlock(includeName) {
                                CPreprocessor(ctx, fileContent, out).preprocess()
                            }
                        }
                        //println("TOKEN AFTER INCLUDE LB3: '${peekOutside()}'")
                        if (!fileContent.endsWith("\n")) {
                            out.append("\n")
                        }
                        //println("TOKEN AFTER INCLUDE LB4: '${peekOutside()}'")
                        if (show && ctx.includeLines) {
                            out.append("# ${startToken.nline + 1} ${ctx.file.cquoted}\n")
                        }
                        //println("TOKEN AFTER INCLUDE LB5: '${peekOutside()}'")
                    }
                    "line" -> {
                        val line = ptks.getOrNull(0)?.toIntOrNull() ?: 0
                        val file = ptks.getOrNull(1)?.cunquoted ?: ctx.file
                        if (show) {
                            out.append("# $line ${file.cquoted}\n")
                        }
                    }
                    "error" -> {
                        if (show) {
                            error("Preprocessor error: ${ptokens.joinToString("")}")
                        }
                    }
                    else -> TODO("$directive")
                }
            }
            else -> {
                if (error) error("Unknown directive #$directive")
                return false
            }
        }
        return true
    }

    fun PreprocessorReader.tryGroup(error: Boolean = true, show: Boolean = true) {
        while (!eof) {
            if (!tryGroupPart(error, show)) break
        }
    }

    fun PreprocessorReader.preprocess() {
        if (ctx.includeLines) out.append("# 1 ${ctx.file.cquoted}\n")
        tryGroup(error = true)
    }
}

fun String.preprocess(ctx: PreprocessorContext = PreprocessorContext()): String {
    val sb = StringBuilder()
    CPreprocessor(ctx, this, sb).preprocess()
    return sb.toString()
}
