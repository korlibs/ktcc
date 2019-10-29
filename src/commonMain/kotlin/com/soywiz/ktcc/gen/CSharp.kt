package com.soywiz.ktcc.gen

import com.soywiz.ktcc.parser.*
import com.soywiz.ktcc.util.*

class CSharpGenerator(parsedProgram: ParsedProgram) : BaseGenerator(CSharpTarget, parsedProgram) {
    override fun Indenter.generateProgramStructure(block: Indenter.() -> Unit) {
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
}

object CSharpTarget : BaseTarget("c#", "cs") {
    override val runtime: String = ""
    override fun generator(parsedProgram: ParsedProgram): BaseGenerator = CSharpGenerator(parsedProgram)

}