package com.soywiz.ktcc.compiler

import com.soywiz.ktcc.gen.*
import com.soywiz.ktcc.headers.*
import com.soywiz.ktcc.internal.*
import com.soywiz.ktcc.parser.*
import com.soywiz.ktcc.preprocessor.*
import com.soywiz.ktcc.util.*

class PreprocessOutput(val code: String, val info: PreprocessorInfo)

object CCompiler {
    fun preprocess(
        sourceFiles: List<String>,
        defines: List<String> = listOf(),
        includeFolders: List<String> = listOf(),
        optimizeLevel: Int = 0,
        fileReader: (String) -> ByteArray? = { readFile(it) }
    ): PreprocessOutput {
        val nativeIncludes = linkedSetOf<Include>()

        fun getIncludeResource(file: String): String? {
            val include = CStdIncludes[file] ?: return null
            nativeIncludes += include
            return include.cHeader
        }

        val gctx = PreprocessorGlobalContext()
        val cSources = sourceFiles.map {
            val file = it
            val folder = it.substringBeforeLast('/', DOT)
            //println("$file - $folder")
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
            val ctx = PreprocessorContext(
                global = gctx,
                initialMacros = defines.map { Macro(it) },
                file = file,
                optimization = optimizeLevel,
                includeProvider = includeProvider
            )
            fileBytes.toStringUtf8().preprocess(ctx)
        }
        return PreprocessOutput((cSources + nativeIncludes.map { it.cImpl }).joinToString("\n"), gctx.info().copy(nativeIncludes = nativeIncludes.toList()))
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

    fun compile(preprocessedSource: String, info: PreprocessorInfo, target: BaseTarget = Targets.kotlin, includeRuntime: Boolean = true): Compilation {
        val (program, parser) = parse(preprocessedSource)
        val generator = target.generator(program, parser, info)
        val source = generator.generate(includeRuntime = includeRuntime)
        return Compilation(source, program, parser)
    }
}