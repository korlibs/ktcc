package com.soywiz.ktcc.cli

import com.soywiz.ktcc.*
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

    fun showHelp() {
        println("ktcc [-e] [-p] file.c")
        println("")
        println(" -p - Print")
        println(" -e - Execute")
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

    val cSources = sourceFiles.map { File(it).readText() }
    val finalCSource = cSources.joinToString("\n")

    val finalKtSource = ckEval.generateKotlinCodeWithRuntime(finalCSource)

    if (!execute || print) {
        println(finalKtSource)
    }

    if (execute) {
        val result = ckEval.evaluateKotlinRaw("$finalKtSource\nmain()")
        if (result is Int) {
            System.exit(result)
        }
    }
}
