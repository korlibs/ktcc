import com.soywiz.ktcc.*
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
            setOptions(jsObject(
                    "enableBasicAutocompletion" to true,
                    "enableLiveAutocompletion" to true
            ))
            session.setMode("ace/mode/c_cpp")
        }

        //val transpiledEditor = ace.edit("transpiled", jsObject("maxLines" to 30, "minLines" to 2)).apply {
        val transpiledEditor = ace.edit("transpiled").apply {
            setTheme("ace/theme/monokai")
            setOptions(jsObject())
            session.setMode("ace/mode/kotlin")
        }

        fun compile() {
            val sources = sourcesEditor.getValue()

            window.localStorage["ktccProgram"] = sources

            files.clear()

            //println("sources=$sources")
            files["main.c"] = utf8Encode(sources)

            try {
                val cfile = CCompiler.preprocess(listOf("main.c"))
                val compilation = CCompiler.compileKotlin(cfile, includeRuntimeNode.checked)
                val ktfile = compilation.source
                val warnings = compilation.warnings.map { "// WARNING: $it" }.joinToString("\n")
                val errors = compilation.errors.map { "// ERROR: $it" }.joinToString("\n")

                if (compilation.warnings.isNotEmpty() || compilation.errors.isNotEmpty()) {
                    fun ProgramMessage.toAceAnnotation(type: String) = AceAnnotation(message, token.row - 1, column = token.columnStart, type = type)

                    val warningAnnotations = compilation.warnings.map { it.toAceAnnotation("warning") }
                    val errorAnnotations = compilation.errors.map { it.toAceAnnotation("error") }

                    sourcesEditor.session.setAnnotations(
                            (errorAnnotations + warningAnnotations).toTypedArray()
                    )
                } else {
                    sourcesEditor.session.clearAnnotations()
                }

                transpiledEditor.setValue("$warnings\n$errors\n$ktfile".trim(), -1)
            } catch (e: Throwable) {
                transpiledEditor.setValue("${e.asDynamic().stack ?: e}", -1)
                //console.error(e)
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

        val langTools = ace.require("ace/ext/language_tools")
        langTools.setCompleters(arrayOf(CCompletion()))
        //langTools.addCompleter()

        sourcesEditor.setValue(window.localStorage["ktccProgram"] ?: """
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

class CCompletion : AceCompleter {
    val completionNode by lazy { document.getElementById("completion").unsafeCast<HTMLInputElement>() }

    override fun getCompletions(editor: Editor, session: EditSession, pos: Pos, prefix: String, callback: (unk: Any?, completions: Array<AceCompletion>) -> Unit) {
        if (!completionNode.checked) return

        try {
            val compilation = CCompiler.compileKotlin(editor.getValue(), includeRuntime = false)
            val foundToken = compilation.parser.findNearToken(pos.row1, pos.column)
            val scope = compilation.parser.getInnerSymbolsScopeAt(foundToken)
            val allSymbolNames = scope.getAllSymbolNames()
            val filteredSymbolNames = allSymbolNames.filter { it.contains(prefix, ignoreCase = true) }
            val symbolNames = if (filteredSymbolNames.isNotEmpty()) filteredSymbolNames else allSymbolNames
            val symbolInfos = symbolNames.map { scope[it] }.filterNotNull()
                    .filter {
                        it.token.pos < 0 || (foundToken?.pos ?: 0) >= it.token.pos
                    }

            //println("token=$foundToken, scope=$scope, symbolNames=$symbolNames, symbolInfos=$symbolInfos")
            //println(scope)

            callback(null, symbolInfos.map {
                val typeStr = try {
                    it.type.toString()
                } catch (e: Throwable) {
                    e.message ?: "Error Unknown"
                }
                val scoreMult = when {
                    it.name.startsWith(prefix) -> 20
                    it.name.startsWith(prefix, ignoreCase = true) -> 10
                    else -> 1
                }
                AceCompletion(it.name, it.name, typeStr, it.scope.level * scoreMult)
            }.toTypedArray())
        } catch (e: Throwable) {
            console.log(e)
        }
    }

}

data class AceCompletion(
        val caption: String,
        val value: String,
        val meta: String,
        val score: Int
)

external interface Pos {
    var row: Int
    var column: Int
}

val Pos.row1 get() = row + 1

external interface AceCompleter {
    fun getCompletions(editor: Editor, session: EditSession, pos: Pos, prefix: String, callback: (unk: Any?, completions: Array<AceCompletion>) -> Unit)
}

data class AceAnnotation(val text: String, val row: Int = 1, val column: Int = 0, val type: String = "error")

external class EditSession {
    fun setValue(content: String)
    fun setMode(mode: String)
    fun clearAnnotations()
    fun setAnnotations(annotations: Array<AceAnnotation>)
}

external class Editor {
    val session: EditSession
    fun setTheme(theme: String)
    fun setOptions(options: dynamic)
    fun setValue(content: String, cursorPos: Int)
    fun getValue(): String
    fun focus()
    fun on(event: String, listener: (e: dynamic) -> Unit)
}

fun Editor.setValue(content: String) = setValue(content, 0)

external class Ace {
    fun edit(name: String, props: dynamic = definedExternally): Editor
    fun require(module: String): dynamic
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
