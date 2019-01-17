package com.soywiz.ktcc.cli

import com.soywiz.ktcc.*
import com.soywiz.ktcc.util.*
import java.io.*

fun main(args: Array<String>) {
    val argsReader = ListReader(args.toList(), "")
    var execute = false
    var print = false
    val sourceFiles = arrayListOf<String>()

    fun showHelp() {
        println("ktcc [-e] [-p] file.c")
        println("")
        println(" -p - Print")
        println(" -e - Execute")
    }

    while (!argsReader.eof) {
        when (val v = argsReader.read()) {
            "-?", "/?", "-h", "-H" -> return showHelp()
            "-p" -> print = true
            "-e" -> execute = true
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
