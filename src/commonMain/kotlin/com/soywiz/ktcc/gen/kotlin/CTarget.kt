package com.soywiz.ktcc.gen.kotlin

import com.soywiz.ktcc.gen.BaseGenerator
import com.soywiz.ktcc.gen.BaseTarget
import com.soywiz.ktcc.parser.ParsedProgram
import com.soywiz.ktcc.parser.Program
import com.soywiz.ktcc.parser.ProgramParser

class CGenerator(parsedProgram: ParsedProgram) : BaseGenerator(CTarget, parsedProgram)

object CTarget : BaseTarget("c") {
    override val runtime: String = ""
    override fun generator(parsedProgram: ParsedProgram): BaseGenerator = CGenerator(parsedProgram)
}