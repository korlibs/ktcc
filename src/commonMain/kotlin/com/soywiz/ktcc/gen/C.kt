package com.soywiz.ktcc.gen

import com.soywiz.ktcc.parser.*

class CGenerator(parsedProgram: ParsedProgram) : BaseGenerator(CTarget, parsedProgram)

object CTarget : BaseTarget("c", "c") {
    override val runtime: String = ""
    override fun generator(parsedProgram: ParsedProgram): BaseGenerator = CGenerator(parsedProgram)
}