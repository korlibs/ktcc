package com.soywiz.ktcc.cli

import com.soywiz.ktcc.*
import com.soywiz.ktcc.runtime.*
import com.soywiz.ktcc.util.*
import java.io.*

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
        val file = File(it).absoluteFile
        val folder = file.parentFile
        val includeProvider = { fname: String, kind: IncludeKind ->
            when (kind) {
                IncludeKind.GLOBAL -> {
                    var result: String? = null
                    for (includeFolder in includeFolders) {
                        val f = File(includeFolder, fname)
                        if (f.exists()) {
                            result = f.readText()
                            break
                        }
                    }
                    result ?: getIncludeResource(fname)
                }
                IncludeKind.LOCAL -> {
                    File(folder, fname).takeIf { it.exists() }?.readText()
                }
            } ?: error("Can't find file=$fname, kind=$kind")
        }
        file.readText().preprocess(PreprocessorContext(
                initialDefines = definesMap, file = file.absolutePath,
                optimization = optimizeLevel,
                includeProvider = includeProvider
        ) )
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
                System.exit(result)
            }
        }
    }
}
