package com.soywiz.ktcc.cli

import com.soywiz.ktcc.CKotlinEvaluator
import com.soywiz.ktcc.IncludeKind
import com.soywiz.ktcc.PreprocessorContext
import com.soywiz.ktcc.internal.readFile
import com.soywiz.ktcc.preprocess
import com.soywiz.ktcc.runtime.CStdIncludes
import com.soywiz.ktcc.util.ListReader
import com.soywiz.ktcc.util.toStringUtf8
import kotlin.jvm.JvmStatic

object CLI {
    @JvmStatic
    fun main(args: Array<String>) {
        val argsReader = ListReader(args.toList(), "")
        var execute = false
        var print = false
        val sourceFiles = arrayListOf<String>()
        val defines = arrayListOf<String>()
        val includeFolders = arrayListOf<String>()
        val libFolders = arrayListOf<String>()
        val libs = arrayListOf<String>()
        var debugLevel = 0
        var compileOnly: Boolean? = null
        var optimizeLevel = 0
        var outputFile: String? = null
        var preprocessOnly = false

        fun showHelp() {
            println("ktcc [-e] [-p] file.c")
            println("")
            println(" -p - Print")
            println(" -e - Execute")
            println(" -g[0123] - Debug level")
            println(" -O[0123|fast|s] - Optimization level")
            println(" -E - Preprocess only")
            println(" -Dname - Add define")
            println(" -Ipath - Add include folder")
            println(" -Lpath - Add lib folder")
            println(" -lname - Add lib")
        }

        while (!argsReader.eof) {
            val v = argsReader.read()
            when {
                v in setOf("-?", "/?", "-h", "-H") -> return showHelp()
                v == "-o" -> outputFile = argsReader.read()
                v == "-p" -> print = true
                v == "-e" -> execute = true
                v == "-E" -> preprocessOnly = true
                v == "-c" -> compileOnly = true
                v == "-O" -> optimizeLevel = when (v.substring(2)) {
                    "", "1" -> 1
                    "2" -> 2
                    "3" -> 3
                    "fast" -> 0
                    "s" -> 0
                    else -> error("Unknown optimization level $v")
                }
                v.startsWith("-g") -> debugLevel = v.substring(2).toIntOrNull() ?: 3
                v.startsWith("-D") -> defines += v.substring(2)
                v.startsWith("-I") -> includeFolders += v.substring(2)
                v.startsWith("-L") -> libFolders += v.substring(2)
                v.startsWith("-l") -> libs += v.substring(2)
                else -> sourceFiles += v
            }
        }

        if (sourceFiles.isEmpty()) {
            return showHelp()
        }

        val ckEval = CKotlinEvaluator()

        //println("args=${args.toList()}, execute=$execute, sourceFiles=$sourceFiles")

        val definesMap = defines.associate {
            val parts = it.split("=")
            parts[0] to parts.getOrElse(1) { parts[0] }
        }

        fun getIncludeResource(file: String): String? = CStdIncludes[file]

        val cSources = sourceFiles.map {
            val file = it
            val folder = it.substringBefore('/', ".")
            val includeProvider = { fname: String, kind: IncludeKind ->
                when (kind) {
                    IncludeKind.GLOBAL -> {
                        var result: String? = null
                        for (includeFolder in includeFolders) {
                            val f = readFile("$includeFolder/$fname")
                            if (f != null) {
                                result = f.toStringUtf8()
                                break
                            }
                        }
                        result ?: getIncludeResource(fname)
                    }
                    IncludeKind.LOCAL -> {
                        readFile("$folder/$fname")?.toStringUtf8()
                    }
                } ?: error("Can't find file=$fname, kind=$kind")
            }
            val fileBytes = readFile(file) ?: error("Source file $file not found")
            fileBytes.toStringUtf8().preprocess(PreprocessorContext(
                    initialDefines = definesMap, file = file,
                    optimization = optimizeLevel,
                    includeProvider = includeProvider
            ))
        }
        val finalCSource = cSources.joinToString("\n")

        if (preprocessOnly) {
            println(finalCSource)
        } else {

            val finalKtSource = ckEval.generateKotlinCodeWithRuntime(finalCSource)

            if (!execute || print) {
                println(finalKtSource)
            }

            if (execute) {
                val result = ckEval.evaluateKotlinRaw(finalKtSource)
                if (result is Int) {
                    //System.exit(result)
                    if (result != 0) {
                        throw Exception("Program exited with $result code")
                    }
                }
            }
        }
    }

}