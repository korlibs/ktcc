package com.soywiz.ktcc.cli

import com.soywiz.ktcc.*
import com.soywiz.ktcc.compiler.*
import com.soywiz.ktcc.eval.*
import com.soywiz.ktcc.gen.*
import com.soywiz.ktcc.util.*
import kotlin.jvm.*

object CLI {
    @JvmStatic
    fun main(args: Array<String>) {
        val argsReader = ListReader(args.toList(), "")
        var execute = false
        var print = false
        val sourceFiles = arrayListOf<String>()
        val execArgs = arrayListOf<String>()
        val defines = arrayListOf<String>()
        val includeFolders = arrayListOf<String>()
        val libFolders = arrayListOf<String>()
        val libs = arrayListOf<String>()
        var debugLevel = 0
        var compileOnly: Boolean? = null
        var optimizeLevel = 0
        var outputFile: String? = null
        var preprocessOnly = false
        val warnings = arrayListOf<String>()
        val extra = arrayListOf<String>()
        var targetName = Targets.default.name

        fun showHelp() {
            println("ktcc [-e] [-p] file.c")
            println("")
            println(" -p - Print")
            println(" -W* - GCC-compatible warnings (ignored)")
            println(" -e - Execute")
            println(" -version - Prints version")
            println(" -Ttarget - Selects the output target. One of [${Targets.all.joinToString(", ") { it.name } }]")
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
                v.startsWith("-O") -> optimizeLevel = when (v.substring(2)) {
                    "", "1" -> 1
                    "2" -> 2
                    "3" -> 3
                    "fast" -> 0
                    "s" -> 0
                    else -> error("Unknown optimization level $v")
                }
                v == "-version" -> {
                    println("KTCC ${KTCC.VERSION}")
                    return
                }
                v.startsWith("-T") -> targetName = v.substring(2)
                v.startsWith("-W") -> warnings += v.substring(2)
                v.startsWith("-f") -> extra += v.substring(2)
                v.startsWith("-g") -> debugLevel = v.substring(2).toIntOrNull() ?: 3
                v.startsWith("-D") -> defines += v.substring(2)
                v.startsWith("-I") -> includeFolders += v.substring(2)
                v.startsWith("-L") -> libFolders += v.substring(2)
                v.startsWith("-l") -> libs += v.substring(2)
                else -> {
                    if (execute) {
                        execArgs += v
                    } else {
                        sourceFiles += v
                    }
                }
            }
        }

        if (sourceFiles.isEmpty()) {
            return showHelp()
        }

        //println("args=${args.toList()}, execute=$execute, sourceFiles=$sourceFiles")

        val finalCOutput = CCompiler.preprocess(sourceFiles, defines, includeFolders, optimizeLevel)
        val finalCSource = finalCOutput.code

        if (preprocessOnly) {
            println(finalCSource)
        } else {
            val ckEval = CKotlinEvaluator(Targets[targetName])
            val finalKtSource = ckEval.generateKotlinCodeWithRuntime(finalCSource, finalCOutput.info)

            if (!execute || print) {
                println(finalKtSource)
            }

            if (execute) {
                val result = ckEval.evaluateKotlinRaw(finalKtSource, execArgs.toTypedArray())
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
