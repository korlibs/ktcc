package com.soywiz.ktcc.compiler

import com.soywiz.ktcc.*
import com.soywiz.ktcc.gen.*
import com.soywiz.ktcc.internal.*
import com.soywiz.ktcc.runtime.*
import com.soywiz.ktcc.util.*

object CCompiler {
    fun preprocess(
            sourceFiles: List<String>,
            defines: List<String> = listOf(),
            includeFolders: List<String> = listOf(),
            optimizeLevel: Int = 0,
            fileReader: (String) -> ByteArray? = { readFile(it) }
    ): String {
        fun getIncludeResource(file: String): String? = CStdIncludes[file]

        val cSources = sourceFiles.map {
            val file = it
            val folder = it.substringBefore('/', ".")
            val includeProvider = { fname: String, kind: IncludeKind ->
                when (kind) {
                    IncludeKind.GLOBAL -> {
                        var result: String? = null
                        for (includeFolder in includeFolders) {
                            val f = fileReader("$includeFolder/$fname")
                            if (f != null) {
                                result = f.toStringUtf8()
                                break
                            }
                        }
                        result ?: getIncludeResource(fname)
                    }
                    IncludeKind.LOCAL -> {
                        fileReader("$folder/$fname")?.toStringUtf8()
                    }
                } ?: error("Can't find file=$fname, kind=$kind")
            }
            val fileBytes = fileReader(file) ?: error("Source file $file not found")
            fileBytes.toStringUtf8().preprocess(PreprocessorContext(
                    initialMacros = defines.map { Macro(it) },
                    file = file,
                    optimization = optimizeLevel,
                    includeProvider = includeProvider
            ))
        }
        return cSources.joinToString("\n")
    }

    fun parse(preprocessedSource: String): Program {
        return preprocessedSource.programParser().program()
    }

    class Compilation(
            val source: String,
            val program: Program
    ) : ProgramParserRef {
        override val parser get() = program.parser
    }

    fun compileKotlin(preprocessedSource: String, includeRuntime: Boolean = true): Compilation {
        val program = parse(preprocessedSource)
        val out = KotlinGenerator().generate(program)
        val source = if (includeRuntime) "$out\n\n$RuntimeCode" else "$out"
        return Compilation(source, program)
    }
}