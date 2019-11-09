package com.soywiz.ktcc.gen

import com.soywiz.ktcc.parser.*
import com.soywiz.ktcc.util.*

class CSharpGenerator(parsedProgram: ParsedProgram) : BaseGenerator(CSharpTarget, parsedProgram) {
    override fun Indenter.generateProgramStructure(includeRuntime: Boolean, block: Indenter.() -> Unit) {
        line("using System;")
        line("using System.Runtime.InteropServices;")
        if (includeRuntime) {
            line(target.getRuntimeImports(preprocessorInfo))
        }

        fun rblock() {
            line("public unsafe class ${preprocessorInfo.moduleName}") {
                block()
            }
        }
        if (preprocessorInfo.packageName.isNotEmpty()) {
            line("namespace ${preprocessorInfo.packageName}") {
                rblock()
            }
        } else {
            rblock()
        }
    }

    override fun Indenter.generateStructures() {
        for (type in parser.structTypesByName.values) {
            line("struct ${type.name}") {
                for (field in type.fields) {
                    val ftype = field.type.resolve()
                    line("[FieldOffset(${field.offset})] ${ftype.str} ${field.name};")
                }
            }
        }
    }
}

object CSharpTarget : BaseTarget("c#", "cs") {
    override val runtime: String = ""
    override fun generator(parsedProgram: ParsedProgram): BaseGenerator = CSharpGenerator(parsedProgram)

}