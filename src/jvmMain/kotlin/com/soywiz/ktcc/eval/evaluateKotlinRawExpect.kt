package com.soywiz.ktcc.eval

import javax.script.*
import kotlin.script.experimental.jsr223.*

private val manager by lazy { ScriptEngineManager() }
private val ktScript by lazy { manager.getEngineByName("kotlin") }
actual fun evaluateKotlinRawExpect(ktprogram: String, args: Array<String>): Any? {
    //println(ktprogram)

    return ktScript.eval("$ktprogram\nmain((bindings[\"args\"] as Array<String>))", SimpleBindings(mutableMapOf<String, Any?>("args" to args)))
}
