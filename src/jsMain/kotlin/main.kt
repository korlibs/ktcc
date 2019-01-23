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

        sourcesEditor.asDynamic().keyBinding.addKeyboardHandler { data: KeyData, hash: Int, keyString: String, keyCode: Int, event: dynamic ->
            if (hash == -1 && (keyString == "." || keyString == ">")) {
                //println("should startAutocomplete")
                window.setTimeout({
                    data.editor.execCommand("startAutocomplete")
                }, 50)
            }
            val cur = data.editor.getCursorPosition()
            window.localStorage["row0"] = cur.row.toString()
            window.localStorage["column"] = cur.column.toString()
            Unit
            //console.log(data, hash, keyString, keyCode, event)
        }

        //sourcesEditor.asDynamic().commands.addCommand(jsObject(
        //    "name" to "dotPress",
        //    "bindKey" to jsObject("win" to ".", "mac" to "@"),
        //    "exec" to { editor: Editor ->
        //        println("Typed .")
        //        editor.execCommand("startAutocomplete")
        //    }
        //))

        //val transpiledEditor = ace.edit("transpiled", jsObject("maxLines" to 30, "minLines" to 2)).apply {
        val preprocessorEditor = ace.edit("preprocessor").apply {
            setTheme("ace/theme/monokai")
            setOptions(jsObject())
            session.setMode("ace/mode/c_cpp")
        }

        val transpiledEditor = ace.edit("transpiled").apply {
            setTheme("ace/theme/monokai")
            setOptions(jsObject())
            session.setMode("ace/mode/kotlin")
        }

        window.asDynamic().sourcesEditor = sourcesEditor
        window.asDynamic().preprocessorEditor = preprocessorEditor
        window.asDynamic().transpiledEditor = transpiledEditor

        fun compile() {
            val sources = sourcesEditor.getValue()

            window.localStorage["ktccProgram"] = sources

            files.clear()

            //println("sources=$sources")
            files["main.c"] = utf8Encode(sources)

            try {
                val cfile = CCompiler.preprocess(listOf("main.c"))
                preprocessorEditor.setValue(cfile, -1)
                try {
                    val compilation = CCompiler.compileKotlin(cfile, includeRuntimeNode.checked)
                    val ktfile = compilation.source
                    val warnings = compilation.warnings.map { "// WARNING: $it" }.joinToString("\n")
                    val errors = compilation.errors.map { "// ERROR: $it" }.joinToString("\n")

                    if (compilation.warnings.isNotEmpty() || compilation.errors.isNotEmpty()) {
                        fun ProgramMessage.toAceAnnotation(type: String) = AceAnnotation(message, row0, column = columnStart, type = type)

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
                }
            } catch (e: Throwable) {
                preprocessorEditor.setValue("${e.asDynamic().stack ?: e}", -1)
                transpiledEditor.setValue("", -1)
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

        val row0 = window.localStorage["row0"]?.toIntOrNull() ?: 0
        val column = window.localStorage["column"]?.toIntOrNull() ?: 0

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

        //sourcesEditor.selection.moveTo(row, column)
        window.setTimeout({
            sourcesEditor.gotoLine(row0 + 1, column, false)
            sourcesEditor.scrollToLine(row0 + 1, true)
        }, 0)

        compile()
    })
}

class CCompletion : AceCompleter {
    val completionNode by lazy { document.getElementById("completion").unsafeCast<HTMLInputElement>() }
    val debugNode by lazy { document.getElementById("debug").unsafeCast<HTMLInputElement>() }

    override fun getCompletions(editor: Editor, session: EditSession, pos: Pos, prefix: String, callback: (unk: Any?, completions: Array<AceCompletion>) -> Unit) {
        if (!completionNode.checked) return

        try {
            files["main.c"] = utf8Encode(editor.getValue())
            val cfile = CCompiler.preprocess(listOf("main.c"))
            val compilation = CCompiler.compileKotlin(cfile, includeRuntime = false)
            val parser = compilation.parser
            val originalPos = ProgramParser.PosWithFile(pos.row1, pos.column, "main.c")
            val translatedPos = parser.translatePos(originalPos) ?: ProgramParser.Pos(1, 0)
            val foundToken = compilation.parser.findNearToken(translatedPos.row1, translatedPos.column0)
            //println("translatedPos=$translatedPos, pos=(${pos.row}, ${pos.column})")
            //println("token=$foundToken")
            val foundNodeTree = foundToken?.let { compilation.parser.findNodeTreeAtToken(compilation.program, it) } ?: listOf()
            //val expr = foundNodeTree.filterIsInstance<FieldAccessExpr>().lastOrNull()?.expr ?: foundNodeTree.filterIsInstance<Expr>().lastOrNull()
            val expr = foundNodeTree.filterIsInstance<FieldAccessExpr>().lastOrNull()?.expr
            //println("foundNodeTree=$foundNodeTree")

            if (debugNode.checked) {
                println("expr=$expr, originalPos=$originalPos, translatedPos=$translatedPos")

                if (expr == null) {
                    for (node in foundNodeTree) {
                        println("  -> $node")
                    }
                }
            }

            val symbolInfos: List<SymbolInfo> = if (expr != null) {
                val exprType = expr.type
                val resolvedExprType2 = parser.resolve(exprType)
                val resolvedExprType = if (resolvedExprType2 is BasePointerFType) resolvedExprType2.elementType else resolvedExprType2
                //println("resolvedExprType2: $resolvedExprType2")
                //println("resolvedExprType: $resolvedExprType")
                if (resolvedExprType is StructFType) {
                    val structTypeInfo = resolvedExprType.getStructTypeInfo(compilation.parser)
                    //println("structTypeInfo : $structTypeInfo ")
                    structTypeInfo.fields.map { SymbolInfo(SymbolScope(null), it.name, it.type, it.node, CToken("")) }
                } else {
                    listOf()
                }
            } else {
                val scope = compilation.parser.getInnerSymbolsScopeAt(foundToken)
                val allSymbolNames = scope.getAllSymbolNames()
                val filteredSymbolNames = allSymbolNames.filter { it.contains(prefix, ignoreCase = true) }
                val symbolNames = if (filteredSymbolNames.isNotEmpty()) filteredSymbolNames else allSymbolNames
                symbolNames.map { scope[it] }.filterNotNull().filter { it.token.pos < 0 || (foundToken?.pos ?: 0) >= it.token.pos }
            }

            //println("token=$foundToken, node=$foundNodeTree")
            //println("token=$foundToken, scope=$scope, symbolNames=$symbolNames, symbolInfos=$symbolInfos")
            //println(scope)

            callback(null, symbolInfos.map {
                val typeStr = try {
                    //compilation.parser.resolve(it.type).toString()
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

data class Pos(val row: Int, val column: Int)

val Pos.row1 get() = row + 1

external interface AceCompleter {
    fun getCompletions(editor: Editor, session: EditSession, pos: Pos, prefix: String, callback: (unk: Any?, completions: Array<AceCompletion>) -> Unit)
}

data class AceAnnotation(val text: String, val row: Int = 1, val column: Int = 0, val type: String = "error")

external class KeyData {
    val editor: Editor
}

external class EditSession {
    fun setValue(content: String)
    fun setMode(mode: String)
    fun clearAnnotations()
    fun setAnnotations(annotations: Array<AceAnnotation>)
}

external class Selection {
    fun moveTo(row: Int, column: Int = definedExternally)
}

external class Editor {
    val selection: Selection
    val session: EditSession
    fun setTheme(theme: String)
    fun execCommand(cmd: String)
    fun setOptions(options: dynamic)
    fun setValue(content: String, cursorPos: Int)
    fun getValue(): String
    fun getCursorPosition(): Pos
    //fun setCursorPosition(pos: Pos)
    fun gotoLine(lineNumber: Int, column: Int = definedExternally, animate: Boolean = definedExternally)
    fun scrollToLine(line: Int, center: Boolean = definedExternally, animate: Boolean = definedExternally, callback: () -> Unit = definedExternally)
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
