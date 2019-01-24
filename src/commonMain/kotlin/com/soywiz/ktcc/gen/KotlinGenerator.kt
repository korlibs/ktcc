package com.soywiz.ktcc.gen

import com.soywiz.ktcc.*
import com.soywiz.ktcc.parser.*
import com.soywiz.ktcc.transform.*
import com.soywiz.ktcc.util.*

class KotlinGenerator {
    //val analyzer = ProgramAnalyzer()
    lateinit var program: Program
    val parser get() = program.parser
    val strings get() = parser.strings

    fun generate(program: Program, includeErrorsInSource: Boolean = false) = Indenter {
        this@KotlinGenerator.program = program
        if (includeErrorsInSource) {
            for (msg in program.parser.errors) line("// ERROR: $msg")
            for (msg in program.parser.warnings) line("// WARNING: $msg")
        }
        //analyzer.visit(program)
        line("//ENTRY Program")
        //for (str in strings) line("// $str")
        line("class Program(HEAP_SIZE: Int = 0) : Runtime(HEAP_SIZE)") {
            val mainFunc = program.getFunctionOrNull("main")
            if (mainFunc != null) {
                if (mainFunc.params.isEmpty()) {
                    line("companion object { @JvmStatic fun main(args: Array<String>): Unit = run { Program().main() } }")
                } else {
                    line("companion object { @JvmStatic fun main(args: Array<String>): Unit = run { val rargs = arrayOf(\"program\") + args; Program().apply { main(rargs.size, rargs.ptr) } } }")
                }
                line("")
            }

            for (decl in program.decls) {
                generate(decl, isTopLevel = true)
            }

            if (parser.structTypesByName.isNotEmpty()) {
                line("")
                line("//////////////////")
                line("// C STRUCTURES //")
                line("//////////////////")
                line("")
            }

            for (type in parser.structTypesByName.values) {
                val typeName = type.name
                val typeNameAlloc = "${typeName}Alloc"
                val typeFields = type.fieldsByName.values
                //val params = typeFields.map { it.name + ": " + it.type.str() + " = " + it.type.defaultValue() }
                val params = typeFields.map { it.name + ": " + it.type.str() }
                val fields = typeFields.map { it.name + ": " + it.type.str() }
                val fieldsSet = typeFields.map { "this." + it.name + " = " + it.name }
                line("/*!inline*/ class $typeName(val ptr: Int) {")
                indent {
                    line("companion object {")
                    indent {
                        line("const val SIZE_BYTES = ${type.size}")
                        for (field in typeFields) {
                            // OFFSET_
                            line("const val ${field.offsetName} = ${field.offset}")
                        }
                    }
                    line("}")
                }
                line("}")

                if (params.isNotEmpty()) {
                    line("fun $typeNameAlloc(): $typeName = $typeName(alloca($typeName.SIZE_BYTES).ptr)")
                }
                line("fun $typeNameAlloc(${params.joinToString(", ")}): $typeName = $typeNameAlloc().apply { ${fieldsSet.joinToString("; ")} }")
                line("fun $typeName.copyFrom(src: $typeName): $typeName = this.apply { memcpy(CPointer<Unit>(this.ptr), CPointer<Unit>(src.ptr), $typeName.SIZE_BYTES) }")
                line("val CPointer<$typeName>.value: $typeName get() = $typeName(lw(this.ptr))")

                for (field in typeFields) {
                    val ftype = field.type
                    val foffsetName = "$typeName.${field.offsetName}"
                    when (ftype) {
                        is IntFType -> {
                            val ftypeSize = ftype.typeSize
                            when (ftypeSize) {
                                4 -> line("var $typeName.${field.name}: ${ftype.str()} get() = lw(ptr + $foffsetName); set(value) = sw(ptr + $foffsetName, value)")
                                else -> line("var $typeName.${field.name}: ${ftype.str()} get() = TODO(\"ftypeSize=$ftypeSize\"); set(value) = TODO()")
                            }
                        }
                        is FloatFType -> {
                            line("var $typeName.${field.name}: ${ftype.str()} get() = flw(ptr + $foffsetName); set(value) = fsw(ptr + $foffsetName, value)")
                        }
                        is BasePointerFType -> {
                            line("var $typeName.${field.name}: ${ftype.str()} get() = CPointer(lw(ptr + $foffsetName)); set(value) = run { sw(ptr + $foffsetName, value.ptr) }")
                        }
                        else -> line("var $typeName.${field.name}: ${ftype.str()} get() = TODO(\"ftype=$ftype\"); set(value) = TODO(\"ftype=$ftype\")")
                    }
                }
            }
        }
    }

    fun Indenter.generate(it: Decl, isTopLevel: Boolean): Unit {
        when (it) {
            is FuncDecl -> {
                line("fun ${it.name.name}(${it.paramsWithVariadic.joinToString(", ") { generateParam(it) }}): ${generate(it.rettype)} = stackFrame {")
                val func = it.func ?: error("Can't get FunctionScope in function")
                indent {
                    val assignNames = linkedSetOf<String>()
                    it.body.visitAllDescendants {
                        when {
                            it is AssignExpr && it.l is Id -> assignNames += it.l.name
                            it is BaseUnaryOp && it.operand is Id && (it.op == "++" || it.op == "--") -> assignNames += (it.operand as Id).name
                        }
                    }

                    for (param in it.params) {
                        val name = param.name.name
                        if (name in assignNames) {
                            line("var $name = $name // Mutating parameter")
                        }
                    }

                    if (func.hasGoto) {
                        val output = StateMachineLowerer.lower(it.body)
                        for (decl in output.decls) {
                            generate(decl)
                        }
                        line("$__smLabel = -1")
                        line("__sm@while (true)") {
                            line("when ($__smLabel)") {
                                line("-1 -> {")
                                indent()
                                for (stm in output.stms) {
                                    generate(stm)
                                }
                                unindent()
                                line("}")
                            }
                        }
                    } else {
                        for (stm in it.body.stms) {
                            generate(stm)
                        }
                    }
                }
                line("}")
            }
            is Declaration -> {
                val ftype = it.specifiers.toFinalType()
                for (init in it.initDeclaratorList) {
                    val isFunc = init.type is FunctionFType
                    val prefix = if (isFunc && isTopLevel) "// " else ""

                    val varType = ftype.withDeclarator(init.declarator)
                    val resolvedVarType = varType.resolve()
                    val name = init.declarator.getName()
                    val varInit = init.initializer
                    val varInitStr = varInit?.castTo(resolvedVarType)?.generate(leftType = resolvedVarType) ?: init.type.defaultValue()

                    val varInitStr2 = if (resolvedVarType is StructFType && varInit !is ArrayInitExpr) "${resolvedVarType.Alloc}().copyFrom($varInitStr)" else varInitStr
                    line("${prefix}var $name: ${resolvedVarType.str()} = $varInitStr2")
                }
            }
            else -> error("Don't know how to generate decl $it")
        }
    }

    val StructFType.Alloc get() = "${this.finalName}Alloc"

    fun Expr.castTo(type: FType?) = if (type != null && this.type.resolve() != type.resolve()) CastExpr(this, type) else this

    fun FType.resolve(): FType = parser.resolve(this)

    fun FType.str(): String {
        val res = this.resolve()
        return when (res) {
            is PointerFType -> "CPointer<${res.elementType.str()}>"
            is ArrayFType -> {
                if (res.size == null) {
                    "CPointer<${res.elementType.str()}>"
                } else {
                    "CPointer<${res.elementType.str()} /*${res.size}*/>"
                    //res.toString()
                }
            }
            is StructFType -> parser.getStructTypeInfo(res.spec).name
            else -> res.toString()
        }
    }

    class BreakScope(val name: String, val kind: Kind, val node: Loop, val parent: BreakScope? = null) {
        enum class Kind {
            WHEN, WHILE
        }
        val level: Int = if (parent != null) parent.level + 1 else 1
        val scopeForContinue: BreakScope? get() = if (kind == Kind.WHILE) this else parent?.scopeForContinue
    }

    private var breakScope: BreakScope? = null

    val breakScopeForContinue: BreakScope? get() = breakScope?.scopeForContinue

    fun <T> breakScope(name: String, kind: BreakScope.Kind, node: Loop, callback: (BreakScope) -> T): T {
        val old = breakScope
        breakScope = BreakScope("$name${breakScope?.level ?: 0}", kind, node, old)
        try {
            return callback(breakScope!!)
        } finally {
            breakScope = old
        }
    }

    private val __smLabel = "__smLabel"
    private val tempContext = TempContext()

    fun Indenter.generate(it: Stm): Unit = when (it) {
        is LowGoto -> {
            line("$__smLabel = ${it.label.id}; continue@__sm")
        }
        is LowLabel -> {
            line("$__smLabel = ${it.label.id}")
            unindent()
            line("}")
            line("${it.label.id} -> {")
            indent()
        }
        is LowIfGoto -> {
            line("if (${it.cond.generate(par = false)}) { $__smLabel = ${it.label.id}; continue@__sm }")
        }
        is LowSwitchGoto -> {
            line("$__smLabel = when (${it.subject.generate(par = false)})") {
                for ((expr, label) in it.map) {
                    if (expr != null) {
                        line("${expr.generate(par = false)} -> ${label.id}")
                    } else {
                        line("else -> ${label.id}")
                    }
                }
            }
            line("continue@__sm")
        }
        is EmptyStm -> Unit
        is Stms -> {
            val hasDeclarations = it.stms.any { it is Decl }
            if (hasDeclarations) {
                lineStackFrame(it) {
                    for (s in it.stms) generate(s)
                }
            } else {
                for (s in it.stms) generate(s)
            }
        }
        is RawStm -> {
            line(it.raw)
        }
        is CommentStm -> {
            if (it.multiline) {
                line("/* ${it.comment} */")
            } else {
                line("// ${it.comment}")
            }
        }
        is Return -> {
            val func = it.func ?: error("Return doesn't have linked a function scope")
            if (it.expr != null) line("return ${(it.expr.castTo(func.rettype)).generate(par = false)}") else line("return")
        }
        is ExprStm -> {
            val expr = it.expr
            if (expr != null) {
                when {
                    expr is AssignExpr -> line(expr.genAssignBase(expr.l.generate(), expr.rightCasted().generate(), expr.l.type.resolve()))
                    expr is BaseUnaryOp && expr.op in setOf("++", "--") -> {
                        val e = expr.operand.generate()
                        line("$e = $e.${opName(expr.op)}(1)")
                    }
                    else -> line(expr.generate(par = false))
                }
            }
            Unit
        }
        is While -> {
            if (it.containsBreakOrContinue()) {
                breakScope("while", BreakScope.Kind.WHILE, it) { scope ->
                    line("${scope.name}@while (${(it.cond).castTo(FType.BOOL).generate(par = false)}) {")
                    indent {
                        generate(it.body)
                    }
                    line("}")
                }
            } else {
                line("while (${(it.cond).castTo(FType.BOOL).generate(par = false)}) {")
                indent {
                    generate(it.body)
                }
                line("}")
            }
        }
        is DoWhile -> {
            breakScope("do", BreakScope.Kind.WHILE, it) { scope ->
                line("${scope.name}@do {")
                indent {
                    generate(it.body)
                }
                line("} while (${(it.cond).castTo(FType.BOOL).generate(par = false)})")
            }
        }
        is For -> generate(it.lower())
        is SwitchWithoutFallthrough -> {
            //breakScope("when", BreakScope.Kind.WHEN) { scope ->
                //line("${scope.name}@when (${it.subject.generate(par = false)})") {
                line("when (${it.subject.generate(par = false)})") {
                    for (stm in it.bodyCases) {
                        when (stm) {
                            is CaseStm -> line("${stm.expr.generate(par = false)} ->") { generate(stm.stm) }
                            is DefaultStm -> line("else ->") { generate(stm.stm) }
                        }
                    }
                }
            //}
        }
        is Switch -> generate(it.removeFallthrough(tempContext))
        // @TODO: Fallthrough!
        is CaseStm -> line("// unexpected outer CASE ${it.expr.generate()}").apply { generate(it.stm) }
        is DefaultStm -> line("// unexpected outer DEFAULT").apply { generate(it.stm) }
        is LabeledStm -> {
            line("${it.id}@run {")
            indent {
                generate(it.stm)
            }
            line("}")
        }
        is Goto -> {
            line("goto@${it.id} /* @TODO: goto must convert the function into a state machine */")
        }
        is Continue, is Break -> {
            val scope = if (it is Continue) breakScopeForContinue else breakScope
            val keyword = if (it is Continue) "continue" else "break"
            val gen = if (it is Continue) scope?.node?.onContinue else scope?.node?.onBreak
            if (gen != null) {
                line("run") {
                    generate(gen())
                    line("$keyword@${scope?.name}")
                }
            } else {
                line("$keyword@${scope?.name}")
            }
        }
        is IfElse -> {
            line("if (${it.cond.castTo(FType.BOOL).generate(par = false)}) {")
            indent {
                generate(it.strue)
            }
            if (it.sfalse != null) {
                line("} else {")
                indent {
                    generate(it.sfalse)
                }
                line("}")
            } else {
                line("}")
            }
        }
        is Decl -> generate(it, isTopLevel = false)
        else -> error("Don't know how to generate stm $it")
    }

    private var oldPosIndex = 0

    private fun Indenter.lineStackFrame(node: Stm, code: () -> Unit) {
        if (node.containsBreakOrContinue()) {
            val oldPos = "__oldPos${oldPosIndex++}"
            line("val $oldPos = STACK_PTR")
            line("try") {
                code()
            }
            line("finally") {
                line("STACK_PTR = $oldPos")
            }
        } else {
            line("stackFrame") {
                code()
            }
        }
    }

    fun generateParam(it: CParamBase): String = when (it) {
        is CParam -> generateParam(it)
        is CParamVariadic -> "vararg __VA__: Any?"
        else -> TODO()
    }
    fun generateParam(it: CParam): String = "${it.name}: ${it.type.resolve().str()}"

    fun ListTypeSpecifier.toKotlinType(): String {
        var void = false
        var static = false
        var unsigned = false
        var integral = false
        var longCount = 0
        var intSize = 4
        var float = false
        for (spec in items) {
            when (spec) {
                is BasicTypeSpecifier -> {
                    when (spec.id) {
                        BasicTypeSpecifier.Kind.VOID -> void = true
                        BasicTypeSpecifier.Kind.INT -> integral = true
                        BasicTypeSpecifier.Kind.CHAR -> {
                            intSize = 1
                            integral = true
                        }
                        BasicTypeSpecifier.Kind.UNSIGNED -> run { unsigned = true; integral = true }
                        BasicTypeSpecifier.Kind.FLOAT -> float = true
                        else -> TODO("${spec.id}")
                    }
                }
                is StorageClassSpecifier -> {
                    when (spec.kind) {
                        StorageClassSpecifier.Kind.STATIC -> static = true
                    }
                }
                is TypedefTypeSpecifierRef -> {
                    Unit // @TODO
                }
                is TypeQualifier -> {
                    Unit // @TODO
                }
                else -> TODO("toKotlinType: $spec")
            }
        }
        return when {
            void -> "Unit"
            integral -> when (intSize) {
                1 -> "Byte"
                else -> "Int"
            }
            float -> "Float"
            //else -> TODO("toKotlinType")
            else -> "Unknown"
        }
    }

    fun generate(it: ListTypeSpecifier): String = it.toKotlinType()

    fun AssignExpr.rightCasted(): Expr = when {
        (op == "+=" || op == "-=") && l.type is PointerFType -> r.castTo(FType.INT)
        else -> r.castTo(l.type)
    }

    fun AssignExpr.genAssignBase(ll: String, rr: String, ltype: FType, rtype: FType = ltype) = when (op) {
        "=" -> {
            //println("genAssignBase: $ll, $rr, $ltype : ${ltype}")
            if (ltype is StructFType && rtype is StructFType) {
                "$ll.copyFrom($rr)"
            } else {
                "$ll = $rr"
            }
        }
        "+=", "-=", "*=", "/=", "%=" -> "$ll $op $rr"
        "&=" -> "$ll = $ll and $rr"
        "|=" -> "$ll = $ll or $rr"
        "^=" -> "$ll = $ll xor $rr"

        "&&=" -> "$ll = $ll && $rr"
        "||=" -> "$ll = $ll || $rr"
        "<<=" -> "$ll = $ll shl $rr"
        ">>=" -> "$ll = $ll shr $rr"

        else -> TODO("AssignExpr $op")
    }

    private val __tmp = "`$`"

    fun opName(op: String) = when (op) {
        "+", "++" -> "plus"
        "-", "--" -> "minus"
        else -> op
    }

    private val __it = "`\$`"

    fun Id.isGlobalDeclFuncRef() = type is FunctionFType && isGlobal && name in program.funcDeclByName

    fun Expr.generate(par: Boolean = true, leftType: FType? = null): String = when (this) {
        is ConstExpr -> this.expr.generate(par = par, leftType = leftType)
        is IntConstant -> "$value"
        is DoubleConstant -> "$value"
        is Binop -> {
            val ll = l.generate()
            val rr = r.generate()
            val base = when (op) {
                "+", "-" -> if (l.type is PointerFType) {
                    "$ll.${opName(op)}($rr)"
                } else {
                    "$ll $op $rr"
                }
                "*", "/", "%" -> "$ll $op $rr"
                "==", "!=", "<", ">", "<=", ">=" -> "$ll $op $rr"
                "&&", "||" -> "$ll $op $rr"
                "^" -> "$ll xor $rr"
                "&" -> "$ll and $rr"
                "|" -> "$ll or $rr"
                "<<" -> "$ll shl ($rr).toInt()"
                ">>" -> "$ll shr ($rr).toInt()"
                else -> TODO("Binop $op")
            }
            if (par) "($base)" else base
        }
        is AssignExpr -> {
            val ll = l.generate(par = false)
            val rr2 = rightCasted().generate()
            val base = genAssignBase(ll, rr2, l.type.resolve())
            val rbase = "run { $base }.let { $ll }"
            if (par) "($rbase)" else rbase
        }
        is Id -> {
            if (isGlobalDeclFuncRef()) {
                "::$name.cfunc"
            } else {
                name
            }
        }
        is PostfixExpr -> {
            val left = lvalue.generate()
            when (op) {
                "++", "--" -> {
                    if (lvalue.type is PointerFType) {
                        "$left.also { $left = $left.${opName(op)}(1) }"
                    } else {
                        "$left$op"
                    }
                }
                else -> TODO("Don't know how to generate postfix operator '$op'")
            }
        }
        is CallExpr -> {
            val etype = expr.type.resolve()
            val typeArgs = if (etype is FunctionFType) etype.args else listOf()
            val callPart = if (expr is Id && expr.isGlobalDeclFuncRef()) expr.name else expr.generate()
            val argsStr = args.withIndex().map { (index, arg) ->
                val ltype = typeArgs.getOrNull(index)?.type
                arg.castTo(ltype).generate(leftType = ltype)
            }
            "$callPart(${argsStr.joinToString(", ")})"
        }
        is StringConstant -> "$raw.ptr"
        is CharConstant -> "$raw.toInt()"
        is CastExpr -> {
            val type = this.type.resolve()
            val exprType = expr.type
            val exprResolvedType = exprType.resolve()
            val base = expr.generate(leftType = leftType)
            val rbase = when (exprResolvedType) {
                //is PointerFType -> "$base.ptr"
                is StructFType -> "$base.ptr"
                is FunctionFType -> "$base.ptr"
                else -> base
            }
            when (type) {
                //is PointerFType -> "$type($base)"
                is StructFType -> "${type.finalName}($rbase)"
                is FunctionFType -> "${type.typeName}($rbase)"
                else -> "$base.to$type()"
            }
        }
        is ArrayAccessExpr -> "${expr.generate()}[${index.generate(par = false)}]"
        is UnaryExpr -> {
            val e = rvalue.generate()
            when (op) {
                "*" -> "(($e)[0])"
                "&" -> "&$e" // Reference
                "-" -> "-$e"
                "+" -> "+$e"
                "!" -> "!($e)"
                "~" -> "($e).inv()"
                "++", "--" -> {
                    if (rvalue.type is PointerFType) {
                        "$e.${opName(op)}(1).also { $__it -> $e = $__it }"
                    } else {
                        "$op$e"
                    }

                }
                else -> TODO("Don't know how to generate unary operator '$op'")
            }
        }
        is ArrayInitExpr -> {
            val ltype = leftType?.resolve()
            when (ltype) {
                is StructFType -> {
                    val structType = ltype.getProgramType()
                    val structName = structType.name
                    val inits = LinkedHashMap<String, String>()
                    var index = 0
                    for (item in this.items) {
                        val field = structType.fields.getOrNull(index++)
                        if (field != null) {
                            inits[field.name] = item.initializer.generate(leftType = field.type)
                        }
                    }
                    val setFields = structType.fields.associate { it.name to (inits[it.name] ?: it.type.defaultValue()) }
                    "${structName}Alloc(${setFields.map { "${it.key} = ${it.value}" }.joinToString(", ")})"
                }
                is PointerFType -> {
                    "listOf(" + this.items.joinToString(", ") { it.initializer.generate(leftType = ltype.elementType) } + ")"
                }
                is ArrayFType -> {
                    "listOf(" + this.items.joinToString(", ") { it.initializer.generate(leftType = ltype.elementType) } + ")"
                }
                else -> {
                    "/*not a valid array init type: $ltype */ listOf(" + this.items.joinToString(", ") { it.initializer.generate() } + ")"
                }
            }
        }
        is ConditionalExpr -> {
            "(if (${this.cond.castTo(FType.BOOL).generate(par = false)}) ${this.etrue.generate()} else ${this.efalse.generate()})"
        }
        is FieldAccessExpr -> {
            if (indirect) {
                "${this.expr.generate()}.value.${this.id}"
            } else {
                "${this.expr.generate()}.${this.id}"
            }
        }
        is CommaExpr -> {
            "run { ${this.exprs.joinToString("; ") { it.generate(par = false) }} }"
        }
        is SizeOfAlignExprBase -> {
            "" + this.ftype + ".SIZE_BYTES"
            //this.kind + "(" + this.ftype +  ")"
        }
        else -> error("Don't know how to generate expr $this (${this::class})")
    }

    val StructFType.finalName: String get() = getProgramType()?.name ?: this.spec.id?.name ?: "unknown"
    val FunctionFType.typeName: String get() = this.toString()

    fun FType.defaultValue(): String = when (this) {
        is IntFType -> {
            val res = if (signed != false) "0" else "0u"
            if (size == 8) "${res}L" else res
        }
        is FloatFType -> if (size == 8) "0.0" else "0f"
        is PointerFType -> "CPointer(0)"
        is TypedefFTypeRef -> this.resolve().defaultValue()
        is StructFType -> "${this.getProgramType().name}Alloc()"
        is ArrayFType -> "0 /*$this*/"
        is FunctionFType -> "0 /*$this*/"
        else -> "0 /*Unknown defaultValue for ${this::class}: $this*/"
    }

    fun StructFType.getProgramType() = parser.getStructTypeInfo(this.spec)
    fun FType.getProgramType() = when (this) {
        is StructFType -> getProgramType()
        is TypedefFTypeRef -> parser.getStructTypeInfo(this.id)
        else -> error("$this")
    }
}
