package com.soywiz.ktcc.transform

import com.soywiz.ktcc.parser.*

fun Node?.containsBreakOrContinue(): Boolean {
    var has = false
    this?.visitAllDescendants {
        if (it is Continue || it is Break) {
            has = true
        }
    }
    return has
}
