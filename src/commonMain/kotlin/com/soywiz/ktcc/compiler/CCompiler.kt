package com.soywiz.ktcc.compiler

import com.soywiz.ktcc.gen.BaseTarget
import com.soywiz.ktcc.gen.kotlin.*
import com.soywiz.ktcc.headers.*
import com.soywiz.ktcc.internal.*
import com.soywiz.ktcc.parser.*
import com.soywiz.ktcc.preprocessor.*
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
            val folder = it.substringBefore('/', DOT)
            val includeProvider = { fname: String, kind: IncludeKind ->
                val finalIncludeFolders = if (kind == IncludeKind.LOCAL) listOf(folder) + includeFolders else includeFolders

                var result: String? = null
                for (includeFolder in finalIncludeFolders) {
                    val f = fileReader("$includeFolder/$fname")
                    if (f != null) {
                        result = f.toStringUtf8()
                        break
                    }
                }
                result
                        ?: getIncludeResource(fname)
                        ?: error("Can't find file=$fname, kind=$kind (in finalIncludeFolders=$finalIncludeFolders)")
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

    fun parse(preprocessedSource: String): Pair<Program, ProgramParser> {
        val parser = preprocessedSource.programParser()
        return parser.program() to parser
    }

    class Compilation(
            val source: String,
            val program: Program,
            override val parser: ProgramParser
    ) : ProgramParserRef {
    }

    fun compile(preprocessedSource: String, target: BaseTarget = KotlinTarget, includeRuntime: Boolean = true): Compilation {
        val (program, parser) = parse(preprocessedSource)
        val generator = target.createGenerator(program, parser)
        val out = generator.generate()
        val source = if (includeRuntime) "$out\n\n${generator.target.runtime}" else "$out"
        return Compilation(source, program, parser)
    }
}