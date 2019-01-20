import com.soywiz.ktcc.compiler.*
import com.soywiz.ktcc.js.*
import org.khronos.webgl.*
import org.w3c.dom.*
import kotlin.browser.*

fun main(args: Array<String>) {
    //println("// args=${args.toList()}")
    //CLI.main(args)
    println("Waiting for DOMContentLoaded...")
    document.addEventListener("DOMContentLoaded", { e ->
        println("READY")

        //val sourcesNode = (document.getElementById("sources") as? HTMLTextAreaElement)
        //val transpiledNode = (document.getElementById("transpiled") as? HTMLTextAreaElement)

        val autocompileNode = document.getElementById("autocompile").unsafeCast<HTMLInputElement>()
        val includeRuntimeNode = document.getElementById("include-runtime").unsafeCast<HTMLInputElement>()

        //val sourcesEditor = ace.edit("sources", jsObject("maxLines" to 30, "minLines" to 2)).apply {
        val sourcesEditor = ace.edit("sources").apply {
            setTheme("ace/theme/monokai")
            session.setMode("ace/mode/c_cpp")
        }

        //val transpiledEditor = ace.edit("transpiled", jsObject("maxLines" to 30, "minLines" to 2)).apply {
        val transpiledEditor = ace.edit("transpiled").apply {
            setTheme("ace/theme/monokai")
            session.setMode("ace/mode/kotlin")
        }

        fun compile() {
            val sources = sourcesEditor.getValue()

            window.localStorage["ktccProgram"] = sources

            files.clear()

            println("sources=$sources")
            files["main.c"] = utf8Encode(sources)

            try {
                val cfile = CCompiler.preprocess(listOf("main.c"))
                val ktfile = CCompiler.compileKotlin(cfile, includeRuntimeNode.checked)
                transpiledEditor.setValue(ktfile, -1)
            } catch (e: Throwable) {
                transpiledEditor.setValue("${e.asDynamic().stack ?: e}", -1)
                console.error(e)
            }
        }

        var timeout = 0

        includeRuntimeNode.addEventListener("change", {
            compile()
        })

        sourcesEditor.on("change") { e ->
            window.clearTimeout(timeout)
            timeout = window.setTimeout({
                if (autocompileNode.checked) {
                    compile()
                }
            }, 500)
        }

        document.getElementById("compile")?.addEventListener("click", { e ->
            println("CLICKED!")
            compile()
        })

        sourcesEditor.setValue(window.localStorage["ktccProgram"] ?: """
            #include <stdio.h>

            typedef struct {
                int a;
                union {
                    float f;
                    long int l;
                } u;
            } A;

            int main() {
                A a = {1};
                return 0;
            }
        """.trimIndent(), -1)
        sourcesEditor.focus()
        compile()
    })
}

external class EditSession {
    fun setValue(content: String)
    fun setMode(mode: String)
}

external class Editor {
    val session: EditSession
    fun setTheme(theme: String)
    fun setValue(content: String, cursorPos: Int)
    fun getValue(): String
    fun focus()
    fun on(event: String, listener: (e: dynamic) -> Unit)
}

fun Editor.setValue(content: String) = setValue(content, 0)

external class Ace {
    fun edit(name: String, props: dynamic = definedExternally): Editor
}

external var ace: Ace

external class TextEncoder(charset: String) {
    fun encode(str: String): Uint8Array
}

fun utf8Encode(str: String): ByteArray = Int8Array(TextEncoder("utf-8").encode(str).buffer).unsafeCast<ByteArray>()

fun jsObject(vararg pairs: Pair<dynamic, dynamic>): dynamic {
    val obj = js("({})")
    for ((k, v) in pairs) obj[k] = v
    return obj
}
