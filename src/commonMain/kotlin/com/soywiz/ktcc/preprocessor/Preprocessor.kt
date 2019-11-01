package com.soywiz.ktcc.preprocessor

import com.soywiz.ktcc.headers.*
import com.soywiz.ktcc.parser.*
import com.soywiz.ktcc.tokenizer.*
import com.soywiz.ktcc.util.*
import kotlin.math.*

// https://gcc.gnu.org/onlinedocs/cpp/index.html#SEC_Contents

data class PToken(var str: String = "<EOF>", val range: IntRange = 0 until 0, val file: String, val nline: Int) {
    var comment: String = ""
    var replacement: String? = null
    var keep = true
    val start get() = range.start
    val end get() = range.endInclusive + 1
}

data class DefineFunction(val id: String, val args: List<String>, val replacement: List<String>)

data class PreprocessorInfo(
    val moduleName: String = "Program",
    val packageName: String = "",
    val constantDecls: Map<String, Int> = mapOf(),
    val nativeIncludes: List<Include> = listOf(),
    val runtime: Boolean = true
)

class PreprocessorGlobalContext() {
    var moduleName = "Program"
    var packageName = ""
    val constantDecls = LinkedHashMap<String, Int>()
    fun info() = PreprocessorInfo(moduleName = moduleName, packageName = packageName, constantDecls = constantDecls.toMap())
}

class PreprocessorContext(
    val initialMacros: List<Macro> = listOf(),
    var file: String = "unknown",
    var optimization: Int = 0,
    val includeLines: Boolean = true,
    val global: PreprocessorGlobalContext = PreprocessorGlobalContext(),
    val includeProvider: (file: String, kind: IncludeKind) -> String = { file, kind -> error("Can't find file=$file, kind=$kind") }
) : EvalContext() {
    var fileId = "<entry>"
    val includeFilesOnce = LinkedHashSet<String>()
    val defines = NamedMap<Macro> { it.name }.apply { addAll(initialMacros) }


    private var counter = 0
    private var includeLevel = 0

    fun <T> includeBlock(newFile: String, newFileId: String, callback: () -> T): T {
        val oldFile = file
        val oldFileId = fileId
        file = newFile
        fileId = newFileId
        includeLevel++
        try {
            return callback()
        } finally {
            includeLevel--
            fileId = oldFileId
            file = oldFile
        }
    }

    var ifLevel = 0

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
            else -> defines[name]?.bodyStr
        }
    }

    fun defined(name: String) = defines(name) != null

    fun define(macro: Macro) {
        defines[macro.name] = macro
    }

    fun define(name: String, replacement: String) {
        define(Macro(name, replacement))
    }

    fun undefine(name: String) {
        defines.remove(name)
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

data class Macro(val name: String, val body: List<String>, val args: List<String>?, val constantResult: Int? = null) {
    val isFunction get() = args != null
    val isVariadic get() = args?.lastOrNull() == "..."
    val numArgsIncludingVariadic get() = args?.size ?: 0
    val numNonVariadicArgs get() = if (isVariadic) numArgsIncludingVariadic - 1 else numArgsIncludingVariadic
    val bodyStr by lazy { body.joinToString("").trim() }

    companion object {
        operator fun invoke(arg: String): Macro = arg.split("=", limit = 2).let { parts -> Macro(parts[0], parts.getOrElse(1) { "1" }) }
        operator fun invoke(name: String, body: String): Macro = Macro(name, body.tokenize(IncludeMode.ALL).items.map { it.str })
        operator fun invoke(nameBody: Pair<String, String>): Macro = Macro(nameBody.first, nameBody.second)
        operator fun invoke(name: String, tokens: List<String>, constantResult: Int? = null): Macro {
            var isFunction = false
            val args = arrayListOf<String>()
            val body = arrayListOf<String>()
            tokens.reader("").apply {
                // Arguments
                if (peekOutside() == "(") {
                    isFunction = true
                    expect("(")
                    while (!eof && peekOutside() != ")") {
                        val arg = skipSpaces().read()
                        args += arg

                        if (peekOutside() == ")") break
                        expect(",")
                    }
                    expect(")")
                }
                skipSpaces()
                while (!eof) {
                    body += read()
                }
            }
            return Macro(name, body, if (isFunction) args else null, constantResult = constantResult)
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
    while (!eof) {
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

enum class IncludeKind(val ch: Char) { GLOBAL('<'), LOCAL('"') }

class PreprocessorReader(val tokens: List<PToken>) : ListReader<String>(tokens.map { it.str }, "<EOF>") {
    val lastToken = tokens.lastOrNull()
    val lastPos = lastToken?.end ?: 0
    val lastLine = lastToken?.nline?.plus(1) ?: 0
    fun peekToken(): PToken = tokens.getOrNull(pos) ?: PToken("<EOF>", lastPos..lastPos, "<undefined file>", lastLine)
}

fun <T : ListReader<String>> T.skipSpaces(skipEOL: Boolean = false, skipComments: Boolean = true): T = this.apply { skipSpaces(skipEOL, skipComments) { it } }
fun <T : ListReader<String>> T.skipSpacesAndEOLS(): T = this.apply { skipSpaces(skipEOL = true) { it } }
fun <T : ListReader<String>> T.peekWithoutSpaces(offset: Int = 0) = keepPos { skipSpaces().peekOutside(offset) }

open class PNode

class PLiterals(val list: List<String>) : PNode()
class PIf(val parts: List<Pair<Expr, PNode>>, val default: PNode?) : PNode()
class PDefine(val parts: List<String>) : PNode()
class PInclude(val parts: List<String>) : PNode()
class PPragma(val parts: List<String>) : PNode()
class PError(val parts: List<String>) : PNode()
class PLine(val parts: List<String>) : PNode()
class PUndef(val parts: List<String>) : PNode()

class CPreprocessor(val ctx: PreprocessorContext, val input: String, val out: StringBuilder) {
    val nlines = input.lines().size

    fun String.internalTokenize(): ListReader<PToken> {
        val input = this
        return doTokenize(
            input, PToken(range = input.length until input.length, file = ctx.file, nline = nlines),
            include = IncludeMode.ALL
        ) {
            PToken(str, (pos until (pos + str.length)), ctx.file, nline).also { it.comment = comment }
        }
    }

    val prePreprocessor = buildString {
        val sb = this
        val tokens = input.internalTokenize()
        tokens.apply {
            var addLines = 0
            while (!eof) {
                val tok = read()
                when {
                    tok.str.startsWith("/*") || tok.str.startsWith("//") -> {
                        for (c in tok.str) {
                            if (c == '\n') {
                                sb.append('\n')
                            } else {
                                sb.append(' ')
                            }
                        }
                    }
                    tok.str == "\\" && peekOutside().str == "\n" -> {
                        read()
                        addLines++
                    }
                    tok.str == "\n" -> {
                        repeat(addLines + 1) {
                            sb.append("\n")
                        }
                        addLines = 0
                    }
                    else -> sb.append(tok.str)
                }
            }
        }
    }

    val filteredTokens: List<PToken> = prePreprocessor.internalTokenize().items

    val tokens = PreprocessorReader(filteredTokens)

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

    fun PreprocessorReader.expectDirective(name: String, message: () -> String = { "" }) {
        val tname = name.trimStart('#')
        val directive = peekDirective()
        if (directive != tname) {
            error("Expected #$tname but found #$directive : ${message()}")
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
                out.append("\n")
                val result = expr.constantEvaluate(ctx)
                //println("$ifIndent#if $expr")
                //println("$expr -> '$result'")
                result.toBool()
                //val success = result.toInt() != 0
            }
            "ifdef", "ifndef" -> {
                val id = readPTokensEolStr().trim()
                out.append("\n")
                val resultRaw = ctx.defined(id)
                //println("$ifIndent#$directive $id")
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
            out.append("\n")
            //println("$ifIndent#elif $expr")
            val result = expr.constantEvaluate(ctx).toBool()
            return result
        } else {
            return null
        }
    }

    fun PreprocessorReader.tryElseGroup(): Boolean {
        val directive = peekDirective()
        if (directive == "else") {
            //println("$ifIndent#else")
            expectDirective(directive)
            val skip = readPTokensEolStr()
            out.append("\n")
            return true
        } else {
            return false
        }
    }

    private val ifIndent get() = Indenter.Indents[max(0, ctx.ifLevel - 1)]

    private inline fun <T> ifLevel(callback: () -> T): T {
        ctx.ifLevel++
        try {
            return callback()
        } finally {
            ctx.ifLevel--
        }
    }

    fun PreprocessorReader.ifSection(baseShow: Boolean) {
        ifLevel {
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
            //println("$ifIndent#endif")
            expectDirective("#endif")
            val skip = readPTokensEolStr()
            out.append("\n")
        }
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

    fun List<String>.preprocessTokens(level: Int = 0, original: List<String> = this): List<String> {
        if (level > 300) error("Too much preprocessing stuff level=$level ::: original=$original, this=$this")
        val out = arrayListOf<String>()
        val reader = this.reader("")
        var replacement = false
        var replacementFunction = false
        var replacementMacro = false
        reader.apply {
            while (!eof) {
                val tok = read()
                val macro = ctx.defines[tok]
                when {
                    macro != null && macro.isFunction && peekWithoutSpaces() == "(" -> {
                        val macroArgs = macro.args ?: listOf()
                        replacement = true
                        replacementFunction = true
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
                                    if (inLevel == 0) {
                                        flush()
                                        skipSpaces()
                                        continue@loop
                                    }
                                }
                            }
                            current += rtok
                        }

                        val argToGroup = macroArgs.zip(groups).toMap().toMutableMap()

                        if (macro.isVariadic) {
                            val startVararg = macro.numNonVariadicArgs
                            argToGroup["__VA_ARGS__"] = listOf(groups.drop(startVararg).joinToString(", ") { it.joinToString("") })
                        }

                        val replacements = macro.body.reader("")
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
                                in argToGroup -> {
                                    val argUnprocessed = argToGroup[repl]!!
                                    //println("REPL: $repl: argUnprocessed=$argUnprocessed")
                                    val argPreprocessed = argUnprocessed.preprocessTokens(level + 1)
                                    //println("REPL: $repl: argUnprocessed=$argPreprocessed")
                                    //println(argPreprocessed)
                                    out += argPreprocessed
                                }
                                else -> out += repl
                            }
                        }
                    }
                    macro != null -> {
                        if (macro.bodyStr != tok) {
                            replacementMacro = true
                            replacement = true
                        }
                        out += macro.body
                    }
                    else -> {
                        out += tok
                    }
                }
            }
        }
        if (replacement && level > 100) {
            //error("Too much preprocessing stuff level=$level ::: original=$original, this=$this, replacementMacro=$replacementMacro, replacementFunction=$replacementFunction")
            return out
        } else {
            return if (replacement) out.preprocessTokens(level + 1, original) else out
        }
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
                val replacement = readPPtokens()
                expectEOL()
                out.append("\n")

                if (show) {
                    val constantResult = kotlin.runCatching {
                        val expr = replacement.joinToString("").programParser().expression()
                        val result = expr.constantEvaluate(object : EvalContext() {
                            override fun resolveId(id: String): Any? = ctx.global.constantDecls[id] ?: error("Unknown identifier $id")
                        })
                        ctx.global.constantDecls[id] = result.toInt()
                        result.toInt()
                    }

                    ctx.define(Macro(id, replacement, constantResult.getOrNull()))
                }
            }
            "undef" -> {
                expectDirective("undef")
                val id = skipSpaces().id()
                skipSpaces()
                expectEOL()
                if (show) {
                    ctx.undefine(id)
                }
            }
            "line", "pragma", "error", "include" -> {
                expectDirective(directive)
                val ptokens = readPTokensEol()
                val ptks = ptokens.filter { it.isNotBlank() }

                //println("TOKEN AFTER INCLUDE LB: '${peekOutside()}'")
                when (directive) {
                    "include" -> {
                        val include = ptokens.joinToString("").trim()
                        val includeName = include.substring(1, include.length - 1)
                        val kind = when (include[0]) {
                            '<' -> IncludeKind.GLOBAL
                            '"' -> IncludeKind.LOCAL
                            else -> error("Not a '<' or '\"' in include")
                        }
                        val includeId = "$includeName:$kind"
                        val fileContent = if (show) ctx.includeProvider(includeName, kind) else ""

                        //val regexHead = Regex("^\\s*#ifndef\\s+(\\w+)\n#define\\s+(\\w+)", RegexOption.MULTILINE)
                        //val regexTail = Regex("#endif\\s*\\$", RegexOption.MULTILINE)
                        //val resultHead = regexHead.find(fileContent)
                        ////val resultTail = regexTail.find(fileContent)
                        //val resultTail = if (fileContent.trimEnd().endsWith("#endif")) Unit else null
                        //val includeOnce = (resultHead != null && resultHead.groupValues[1] == resultHead.groupValues[2] && resultTail != null)
                        //println("resultHead=$resultHead, resultTail=$resultTail, includeOnce=$includeOnce")
                        //println("TOKEN AFTER INCLUDE LB2: '${peekOutside()}'")

                        var placed = false

                        if (show && (includeId !in ctx.includeFilesOnce)) {
                            ctx.includeBlock(includeName, includeId) {
                                placed = true
                                CPreprocessor(ctx, fileContent, out).preprocess()
                            }
                        }
                        //println("TOKEN AFTER INCLUDE LB3: '${peekOutside()}'")
                        if (!fileContent.endsWith("\n")) {
                            out.append("\n")
                        }
                        //println("TOKEN AFTER INCLUDE LB4: '${peekOutside()}'")
                        if (placed && ctx.includeLines) {
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
                        out.append("\n")
                        if (show) {
                            error("Preprocessor error: ${ptokens.joinToString("")}")
                        }
                    }
                    "pragma" -> {
                        out.append("\n")
                        when {
                            ptokens.firstOrNull() == "once" -> {
                                ctx.includeFilesOnce += ctx.fileId
                            }
                            ptokens.firstOrNull() == "module_name" -> {
                                ctx.global.moduleName = ptokens.drop(1).joinToString("").trim()
                            }
                            ptokens.firstOrNull() == "package_name" -> {
                                ctx.global.packageName = ptokens.drop(1).joinToString("").trim()
                            }
                            else -> error("Unsupported #pragma ${ptokens.joinToString("")}")
                        }
                    }
                    else -> TODO("$directive")
                }
            }
            else -> {
                //expectDirective(directive)
                if (error) {
                    val ptokens = readPTokensEol()
                    val ptks = ptokens.filter { it.isNotBlank() }
                    error("Unknown directive #$directive")
                }
                //return true
                //return true
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
