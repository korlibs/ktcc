package com.soywiz.ktcc.cli

import com.soywiz.ktcc.*
import com.soywiz.ktcc.gen.*
import com.soywiz.ktcc.util.*
import java.io.*
import javax.script.*

fun main(args: Array<String>) {
    val argsReader = ListReader(args.toList(), "")
    var execute = false
    val sourceFiles = arrayListOf<String>()

    fun showHelp() {
        println("ktcc [-e] file.c")
        println("")
        println(" -e - Execute")
    }

    while (!argsReader.eof) {
        when (val v = argsReader.read()) {
            "-?", "/?", "-h", "-H" -> {
                return showHelp()
            }
            "-e" -> {
                execute = true
            }
            else -> {
                sourceFiles += v
            }
        }
    }

    if (sourceFiles.isEmpty()) {
        return showHelp()
    }

    val gen = KotlinGenerator()

    //println("args=${args.toList()}, execute=$execute, sourceFiles=$sourceFiles")

    var finalKtSource = ::main.javaClass.getResource("/runtime.kt").readText() + "\n\n"
    for (sourceFile in sourceFiles) {
        finalKtSource += gen.generate(File(sourceFile).readText().programParser().program())
    }
    if (execute) {
        val manager = ScriptEngineManager()
        val ktScript = manager.getEngineByName("kotlin")
        val result = ktScript.eval("$finalKtSource\nmain()")
        if (result is Int) {
            System.exit(result)
        }
    } else {
        println(finalKtSource)
    }
}
