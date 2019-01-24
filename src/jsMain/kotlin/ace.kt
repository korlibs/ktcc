import org.khronos.webgl.*
import org.w3c.dom.events.*

data class AceCompletion(
        val caption: String,
        val value: String,
        val meta: String,
        val score: Int
)

data class Pos(val row: Int, val column: Int)

val Pos.row0 get() = row
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
    fun selectDown()
    fun on(event: String, listener: dynamic)
}

fun Selection.onChangeCursor(callback: (event: Event, selection: Selection) -> Unit) {
    on("changeCursor", callback)
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
    fun setReadOnly(value: Boolean)
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
