package com.soywiz.ktcc

import com.soywiz.ktcc.util.*
import java.util.*

data class PToken(var str: String = "<EOF>", val range: IntRange = 0 until 0) {
    var replacement: String? = null
    var keep = true
    val start get() = range.start
    val end get() = range.endInclusive + 1
}

class PreprocessorContext(
    val initial: Map<String, String> = mapOf(),
    val includeProvider: (file: String, kind: IncludeKind) -> String = { file, kind -> error("Can't find file=$file, kind=$kind") }
) {
    val defines = LinkedHashMap<String, String>(initial)

    fun defined(name: String) = name in defines

    fun define(name: String, replacement: String) {
        defines[name] = replacement
    }

    fun undefine(name: String) {
        defines.remove(name)
    }

    var pif = PIfCtx(true)
}

fun ListReader<PToken>.expectAny(vararg expect: String): PToken {
    val actual = readOutside()
    if (actual.str !in expect) throw ExpectException("Expected ${expect.toList()} but found '$actual'")
    return actual
}

fun ListReader<PToken>.skipSpaces(skipEOL: Boolean = false): ListReader<PToken> = this.apply {
    while (peekOutside().str.isBlank() && (skipEOL || peekOutside().str != "\n")) {
        readOutside()
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
        val tokens = doTokenize(fstr, PToken(range = fstr.length until fstr.length), include = IncludeMode.ALL) { str, pos -> PToken(str, (pos until (pos + str.length))) }
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
                        skipSpaces().expectAny("\n", "<EOF>")
                        ctx.undefine(name)
                        removeChunk()
                    }
                    "#ifdef" -> {
                        val name = skipSpaces().read().str
                        skipSpaces().expectAny("\n", "<EOF>")
                        val success = ctx.defined(name)
                        ctx.pif = ctx.pif.copy(success = success, parent = ctx.pif)
                        removeChunk()
                    }
                    "#elsif" -> {
                        ctx.pif = ctx.pif.copy(success = !ctx.pif.success)
                        removeChunk()
                    }
                    "#endif" -> {
                        ctx.pif = ctx.pif.parent ?: error("No #if* matching #endif")
                        removeChunk()
                    }
                    "#include" -> {
                        skipSpaces()
                        when (val peek = peekOutside().str) {
                            "<" -> {
                                expectAny("<")
                                var name = ""
                                while (peekOutside().str != ">") name += readOutside().str
                                expectAny(">")
                                removeChunk()
                                tokens.items[spos].replacement = ctx.includeProvider(name, IncludeKind.GLOBAL).preprocess(ctx)
                                replacements++
                            }
                            else -> {
                                if (peek.startsWith('"')) {
                                    readOutside()
                                    removeChunk()
                                    val file = peek.cunquoted
                                    tokens.items[spos].replacement = ctx.includeProvider(file, IncludeKind.LOCAL).preprocess(ctx)
                                    replacements++
                                } else {
                                    error("Invalid #include $peek")
                                }
                            }
                        }
                    }
                    else -> {
                        if (tok.keep) {
                            val replaced = ctx.defines[tok.str]
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