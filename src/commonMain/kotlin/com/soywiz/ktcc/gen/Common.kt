package com.soywiz.ktcc.gen

import com.soywiz.ktcc.parser.*
import com.soywiz.ktcc.transform.*
import com.soywiz.ktcc.types.*
import com.soywiz.ktcc.util.*

abstract class BaseTarget(val name: String) {
    abstract val runtime: String
    abstract fun generator(parsedProgram: ParsedProgram): BaseGenerator
    fun generator(program: Program, parser: ProgramParser): BaseGenerator = generator(ParsedProgram(program, parser))
}

open class BaseGenerator(val target: BaseTarget, val parsedProgram: ParsedProgram) {
    val program = parsedProgram.program
    val parser = parsedProgram.parser
    val strings get() = parser.strings

    open val fixedSizeArrayTypes: Set<ArrayType> by lazy {
        //program.getAllTypes(program.parser).filterIsInstance<ArrayType>().filter { it.numElements != null && it.elementType is ArrayType }.toSet()
        program.getAllTypes(parser).filterIsInstance<ArrayType>().toSet()
    }

    open fun Type.resolve(): Type = this.resolve(parser)

    open val Type.requireRefStackAlloc
        get() = when (this) {
            is StructType -> false
            else -> true
        }

    open class BreakScope(val name: String, val kind: Kind, val node: Loop, val parent: BreakScope? = null) {
        enum class Kind {
            WHEN, WHILE
        }

        val level: Int = if (parent != null) parent.level + 1 else 1
        val scopeForContinue: BreakScope? get() = if (kind == Kind.WHILE) this else parent?.scopeForContinue
    }

    private var breakScope: BreakScope? = null

    val breakScopeForContinue: BreakScope? get() = breakScope?.scopeForContinue

    open fun <T> breakScope(name: String, kind: BreakScope.Kind, node: Loop, callback: (BreakScope) -> T): T {
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

    private var oldPosIndex = 0

    protected open fun Indenter.lineStackFrame(node: Stm, code: () -> Unit) {
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

    open fun Indenter.generate(it: LowGoto): Unit = line("$__smLabel = ${it.label.id}; continue@__sm")
    open fun Indenter.generate(it: LowLabel): Unit {
        line("$__smLabel = ${it.label.id}")
        unindent()
        line("}")
        line("${it.label.id} -> {")
        indent()
    }

    open fun Indenter.generate(it: LowIfGoto): Unit = line("if (${it.cond.generate(par = false)}) { $__smLabel = ${it.label.id}; continue@__sm }")
    open fun Indenter.generate(it: LowSwitchGoto): Unit {
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

    open fun Indenter.generate(it: Stms): Unit {
        val hasDeclarations = it.stms.any { it is Decl }
        if (hasDeclarations) {
            lineStackFrame(it) {
                for (s in it.stms) generate(s)
            }
        } else {
            for (s in it.stms) generate(s)
        }
    }

    open fun Indenter.generate(it: RawStm): Unit = line(it.raw)

    open fun Indenter.generate(it: CommentStm): Unit {
        if (it.multiline) {
            line("/* ${it.comment} */")
        } else {
            line("// ${it.comment}")
        }
    }

    open fun Indenter.generate(it: Return): Unit {
        val func = it.func ?: error("Return doesn't have linked a function scope")
        if (it.expr != null) line("return ${(it.expr.castTo(func.rettype)).generate(par = false)}") else line("return")
    }

    open fun Indenter.generate(it: ExprStm): Unit {
        val expr = it.expr
        if (expr != null) {
            when {
                //expr is AssignExpr -> line(expr.genAssignBase(expr.l.generate(), expr.rightCasted().generate(), expr.l.type.resolve()))
                expr is SimpleAssignExpr -> {
                    line(generateAssign(expr.l, expr.r.castTo(expr.l.type).generate(par = false)))
                }
                expr is BaseUnaryOp && expr.op in setOf("++", "--") -> {
                    val e = expr.operand.generate()
                    line("$e ${expr.op[0]}= ${expr.operand.type.one()}")
                    //line("$e ${expr.op} = ${expr.operand.type.one()}")
                }
                else -> line(expr.generate(par = false))
            }
        }
    }

    open fun Indenter.generate(it: While): Unit {
        if (it.containsBreakOrContinue()) {
            breakScope("while", BreakScope.Kind.WHILE, it) { scope ->
                line("${scope.name}@while (${(it.cond).castTo(Type.BOOL).generate(par = false)}) {")
                indent {
                    generate(it.body)
                }
                line("}")
            }
        } else {
            line("while (${(it.cond).castTo(Type.BOOL).generate(par = false)}) {")
            indent {
                generate(it.body)
            }
            line("}")
        }
    }

    open fun Indenter.generate(it: DoWhile): Unit {
        breakScope("do", BreakScope.Kind.WHILE, it) { scope ->
            line("${scope.name}@do {")
            indent {
                generate(it.body)
            }
            line("} while (${(it.cond).castTo(Type.BOOL).generate(par = false)})")
        }
    }

    open fun Indenter.generate(it: EmptyStm): Unit = Unit
    open fun Indenter.generate(it: For): Unit = generate(it.lower())
    open fun Indenter.generate(it: SwitchWithoutFallthrough): Unit {
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

    open fun Indenter.generate(it: Switch): Unit {
        generate(it.removeFallthrough(tempContext))
    }

    open fun Indenter.generate(it: CaseStm): Unit {
        line("// unexpected outer CASE ${it.expr.generate()}").apply { generate(it.stm) }
    }

    open fun Indenter.generate(it: DefaultStm): Unit {
        line("// unexpected outer DEFAULT").apply { generate(it.stm) }
    }

    open fun Indenter.generate(it: LabeledStm): Unit {
        line("${it.id}@run {")
        indent {
            generate(it.stm)
        }
        line("}")
    }

    open fun Indenter.generate(it: Goto): Unit {
        line("goto@${it.id} /* @TODO: goto must convert the function into a state machine */")
    }

    open fun Indenter.generateBreakContinue(it: Stm): Unit {
        val scope = if (it is Continue) breakScopeForContinue else breakScope
        val keyword = if (it is Continue) "continue" else "break"
        val gen = if (it is Continue) scope?.node?.onContinue else scope?.node?.onBreak
        if (gen != null) generate(gen())
        line("$keyword@${scope?.name}")
    }

    open fun Indenter.generate(it: Break): Unit {
        generateBreakContinue(it)
    }

    open fun Indenter.generate(it: Continue): Unit {
        generateBreakContinue(it)
    }

    open fun Indenter.generate(it: IfElse): Unit {
        line("if (${it.cond.castTo(Type.BOOL).generate(par = false)}) {")
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

    open fun Expr.castTo(_dstType: Type?): Expr {
        val dstType = _dstType?.resolve()
        val srcType = this.type.resolve()
        return when {
            dstType != null && srcType != dstType -> CastExpr(this, dstType)
            else -> this
        }
    }

    var genFunctionScope: GenFunctionScope = GenFunctionScope(null)

    open fun Indenter.generateErrorComments() {
        for (msg in parser.errors) line("// ERROR: $msg")
        for (msg in parser.warnings) line("// WARNING: $msg")
    }

    open fun Indenter.generateProgramStructure(block: Indenter.() -> Unit) {
        block()
    }

    open fun Indenter.generateStructures() {
    }

    open fun Indenter.generateFixedSizeArrayTypes() {
    }

    open fun Indenter.generateMainEntryPoint(mainFunc: FuncDeclaration) {
    }

    open fun generate(includeErrorsInSource: Boolean = false) = Indenter {
        if (includeErrorsInSource) {
            generateErrorComments()
        }
        generateProgramStructure {
            val mainFunc = program.getFunctionOrNull("main")
            if (mainFunc != null) {
                generateMainEntryPoint(mainFunc)
            }

            for (decl in program.decls) {
                generate(decl, isTopLevel = true)
            }

            generateStructures()
            generateFixedSizeArrayTypes()
        }
    }

    open class GenFunctionScope(val parent: GenFunctionScope? = null) {
        var localSymbolsStackAllocNames = setOf<String>()
        var localSymbolsStackAlloc = setOf<Id>()
    }

    open fun <T> functionScope(callback: () -> T): T {
        val old = genFunctionScope
        genFunctionScope = GenFunctionScope(old)
        try {
            return callback()
        } finally {
            genFunctionScope = old
        }
    }

    open fun Indenter.generate(it: FuncDeclaration, isTopLevel: Boolean): Unit {
        line("fun ${it.name.name}(${it.paramsWithVariadic.joinToString(", ") { generateParam(it) }}): ${it.funcType.retType.resolve().str} = stackFrame") {
            functionScope {
                val func = it.func ?: error("Can't get FunctionScope in function")
                genFunctionScope.localSymbolsStackAlloc = it.findSymbolsRequiringStackAlloc()
                genFunctionScope.localSymbolsStackAllocNames = genFunctionScope.localSymbolsStackAlloc.map { it.name }.toSet()
                val localSymbolsStackAlloc = genFunctionScope.localSymbolsStackAlloc
                for (symbol in localSymbolsStackAlloc) {
                    line("// Require alloc in stack to get pointer: $symbol")
                }

                val assignNames = it.body.getMutatingVariables()

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
        }
    }

    open fun Indenter.generate(it: VarDeclaration, isTopLevel: Boolean): Unit {
        if (!it.specifiers.hasTypedef) {
            for (init in it.parsedList) {
                val isFunc = init.type is FunctionType
                val prefix = if (isFunc && isTopLevel) "// " else ""

                val varType = init.type.resolve()
                val name = init.name
                val varInit2 = init.init
                val varSize = varType.getSize(parser)
                val varInit = when {
                    //resolvedVarType is ArrayType && varInit2 != null && varInit2 !is ArrayInitExpr -> ArrayInitExpr(listOf(DesignOptInit(null, varInit2)), init.type) // This seems to be an error on GCC
                    varInit2 == null && varType is ArrayType -> ArrayInitExpr(listOf(DesignOptInit(null, IntConstant(0))), init.type)
                    varInit2 != null -> varInit2
                    else -> varInit2
                }

                //println("varInit=$varInit : resolvedVarType=$resolvedVarType")
                val varInitStr = when {
                    varInit != null -> varInit.castTo(varType).generate()
                    else -> init.type.defaultValue()
                }

                val varInitStr2 = when {
                    varType is StructType && varInit !is ArrayInitExpr -> "${varType.Alloc}().copyFrom($varInitStr)"
                    else -> varInitStr
                }
                val varTypeName = varType.str
                if (name in genFunctionScope.localSymbolsStackAllocNames && varType.requireRefStackAlloc) {
                    line("${prefix}var $name: CPointer<$varTypeName> = alloca($varSize).toCPointer<$varTypeName>().also { it.${varType.valueProp} = $varInitStr2 }")
                } else {
                    line("${prefix}var $name: $varTypeName = $varInitStr2")
                }
            }
        } else {
            for (init in it.parsedList) {
                line("// typealias ${init.name} = ${init.type.resolve().str}")
            }
        }
    }

    open val StructType.Alloc get() = "${this.str}Alloc"

    open val Type.str: String
        get() {
            val res = this.resolve()
            return when {
                res is BasePointerType && res.actsAsPointer -> "CPointer<${res.elementType.str}>"
                res is ArrayType -> "Array${(res.numElements ?: "")}" + res.elementType.str.replace("[", "").replace("]", "_").replace("<", "_").replace(
                    ">",
                    "_"
                ).trimEnd('_')
                res is StructType -> res.info.name
                res is FunctionType -> res.toString()
                else -> res.toString()
            }
        }

    open fun Type.one(): String = when (this) {
        is IntType -> "1${if (signed) "" else "u"}"
        else -> "1"
    }

    open fun generateParam(it: CParamBase): String = when (it) {
        is CParam -> generateParam(it)
        is CParamVariadic -> "vararg __VA__: Any?"
        else -> TODO()
    }

    open fun generateParam(it: CParam): String = "${it.name}: ${it.type.resolve().str}"

    //open fun ListTypeSpecifier.toKotlinType(): String {
    //    var void = false
    //    var static = false
    //    var unsigned = false
    //    var integral = false
    //    var longCount = 0
    //    var intSize = 4
    //    var float = false
    //    for (spec in items) {
    //        when (spec) {
    //            is BasicTypeSpecifier -> {
    //                when (spec.id) {
    //                    BasicTypeSpecifier.Kind.VOID -> void = true
    //                    BasicTypeSpecifier.Kind.INT -> integral = true
    //                    BasicTypeSpecifier.Kind.CHAR -> {
    //                        intSize = 1
    //                        integral = true
    //                    }
    //                    BasicTypeSpecifier.Kind.UNSIGNED -> run { unsigned = true; integral = true }
    //                    BasicTypeSpecifier.Kind.FLOAT -> float = true
    //                    else -> TODO("${spec.id}")
    //                }
    //            }
    //            is StorageClassSpecifier -> {
    //                when (spec.kind) {
    //                    StorageClassSpecifier.Kind.STATIC -> static = true
    //                }
    //            }
    //            is RefTypeSpecifier -> {
    //                Unit // @TODO
    //            }
    //            is TypeQualifier -> {
    //                Unit // @TODO
    //            }
    //            else -> TODO("toKotlinType: $spec")
    //        }
    //    }
    //    return when {
    //        void -> "Unit"
    //        integral -> when (intSize) {
    //            1 -> "Byte"
    //            else -> "Int"
    //        }
    //        float -> "Float"
    //        else -> "Unknown"
    //    }
    //}

    open fun opName(op: String) = when (op) {
        "+", "++", "+=" -> "plus"
        "-", "--", "-=" -> "minus"
        else -> op
    }

    private val __it = "`\$`"

    open fun Id.isGlobalDeclFuncRef() = type is FunctionType && isGlobal && name in program.funcDeclByName

    open val Type.valueProp: String
        get() = when {
            //this is BasePointerType && this.elementType is IntType && !this.elementType.signed -> VALUEU
            else -> KotlinConsts.VALUE
        }

    open fun ConstExpr.generate(par: Boolean = true): String = this.expr.generate(par = par)
    open fun NumericConstant.generate(par: Boolean = true): String = when (type) {
        Type.CHAR -> "${nvalue.toByte()}"
        Type.SHORT -> "${nvalue.toShort()}"
        Type.INT -> "${nvalue}"
        Type.LONG -> "${nvalue}L"

        Type.UCHAR -> "${nvalue.toInt().toUByte()}u"
        Type.USHORT -> "${nvalue.toInt().toUShort()}u"
        Type.UINT -> "${nvalue.toInt().toUInt()}u"
        Type.ULONG -> "${nvalue.toLong().toULong()}uL"

        Type.FLOAT -> "${nvalue}f"
        Type.DOUBLE -> "${nvalue}"
        else -> "$nvalue"
    }

    open fun Binop.generate(par: Boolean = true): String = run {
        val ll = l.castTo(extypeL).generate()
        val rr = r.castTo(extypeR).generate()

        //println("Binop: op=$op, extypeL=$extypeL, extypeR=$extypeR, type=$type")

        val base = when (op) {
            "+", "-" -> if (l.type is BasePointerType) {
                //"$ll.${opName(op)}($rr)"
                "$ll $op $rr"
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

    open fun SimpleAssignExpr.generate(par: Boolean = true): String = run {
        val rbase: String = generateAssignExpr(this)
        if (par) "($rbase)" else rbase
    }

    open fun Id.generate(par: Boolean = true): String = run {
        val rtype = this.type.resolve()
        when {
            isGlobalDeclFuncRef() -> "::$name.cfunc"
            name in genFunctionScope.localSymbolsStackAllocNames && rtype !is StructType -> "$name.${rtype.valueProp}"
            else -> name
        }
    }

    open fun PostfixExpr.generate(par: Boolean = true): String = run {
        val left = lvalue.generate()
        when (op) {
            "++", "--" -> {
                if (lvalue.type is PointerType) {
                    "$left.also { $left ${op[0]}= ${lvalue.type.one()} }"
                    //"$left$op"
                } else {
                    "$left$op"
                }
            }
            else -> TODO("Don't know how to generate postfix operator '$op'")
        }
    }

    open fun CallExpr.generate(par: Boolean = true): String = run {
        val etype = expr.type.resolve()
        val typeArgs = if (etype is FunctionType) etype.args else listOf()
        val callPart = if (expr is Id && expr.isGlobalDeclFuncRef()) expr.name else expr.generate()
        val argsStr = args.withIndex().map { (index, arg) ->
            val ltype = typeArgs.getOrNull(index)?.type
            arg.castTo(ltype).generate()
        }
        "$callPart(${argsStr.joinToString(", ")})"
    }

    open fun StringConstant.generate(par: Boolean = true): String = run {
        "$raw.ptr"
    }

    open fun CharConstant.generate(par: Boolean = true): String = run {
        "$raw.toInt()"
    }

    open fun CastExpr.generate(par: Boolean = true): String = run {
        val newType = this.type.resolve()
        val oldType = expr.type.resolve()

        //println("CastExpr: oldType=$oldType -> newType=$newType")

        val base = expr.generate()
        val res = when {
            oldType is BoolType && newType is IntType -> {
                if (newType != Type.INT) "$base.toInt().to${newType.str}()" else "$base.toInt().to${newType.str}()"
            }
            else -> {
                val rbase = when (oldType) {
                    //is PointerFType -> "$base.ptr"
                    is ArrayType -> "($base).ptr"
                    is PointerType -> "($base).ptr"
                    is StructType -> "($base).ptr"
                    is FunctionType -> "($base).ptr"
                    else -> base
                }
                when (newType) {
                    is BasePointerType -> "${newType.str}($rbase)"
                    is StructType -> "${newType.str}($rbase)"
                    is FunctionType -> "${newType.str}($rbase)"
                    else -> "$base.to${newType.str}()"
                }
            }
        }
        if (par) "($res)" else res
    }

    open fun ArrayAccessExpr.generate(par: Boolean = true): String = run {
        val ll = this.expr.generate()
        val idx = this.index.castTo(Type.INT).generate(par = false)
        val aaExprType = this.expr.type
        when {
            //aaExprType is BasePointerType && aaExprType.actsAsPointer && aa.type.resolve().unsigned -> "$ll.getu($idx)"
            (idx == "0") && this.isDeref -> "$ll.value"
            else -> "$ll[$idx]"
        }
    }

    open fun Unop.generate(par: Boolean = true): String = run {
        val e by lazy { rvalue.castTo(this.extypeR).generate(par = true) }
        val res = when (op) {
            //"*" -> {
            //    ArrayAccessExpr(rvalue, IntConstant(0)).generate()
            //    //"($e).${rvalueType.valueProp}"
            //}
            "&" -> {
                // Reference
                when (rvalue) {
                    is FieldAccessExpr -> "CPointer((" + rvalue.left.generate(par = false) + ").ptr + ${rvalue.structType?.str}.OFFSET_${rvalue.id.name})"
                    is ArrayAccessExpr -> "((" + rvalue.expr.generate(par = false) + ") + (" + rvalue.index.generate(par = false) + "))"
                    is Id -> if (type.resolve() is StructType) "${rvalue.name}.ptr" else "CPointer<${rvalueType.resolve().str}>((${rvalue.name}).ptr)"
                    else -> "&$e /*TODO*/"
                }
            }
            "-" -> "-$e"
            "+" -> "+$e"
            "!" -> "!$e"
            "~" -> "($e).inv()"
            "++", "--" -> {
                if (rvalue.type is PointerType) {
                    "$e.${opName(op)}(1).also { $__it -> $e = $__it }"
                    //"$op$e"
                } else {
                    "$op$e"
                }
            }
            else -> TODO("Don't know how to generate unary operator '$op'")
        }
        if (par) "($res)" else res
    }

    open fun ArrayInitExpr.generate(par: Boolean = true): String = run {
        val ltype = ltype.resolve()
        when (ltype) {
            is StructType -> {
                val structType = ltype.getProgramType()
                val structName = structType.name
                val inits = LinkedHashMap<String, String>()
                var index = 0
                for (item in this.items) {
                    val field = structType.fields.getOrNull(index++)
                    if (field != null) {
                        inits[field.name] = item.initializer.castTo(field.type).generate()
                    }
                }
                val setFields = structType.fields.associate { it.name to (inits[it.name] ?: it.type.defaultValue()) }
                "${structName}Alloc(${setFields.map { "${it.key} = ${it.value}" }.joinToString(", ")})"
            }
            is BasePointerType -> {
                val itemsStr = items.joinToString(", ") { it.initializer.castTo(ltype.elementType).generate() }
                val numElements = if (ltype is ArrayType) ltype.numElements else null
                val relements = numElements ?: items.size
                when {
                    ltype is ArrayType && !ltype.actsAsPointer -> "${ltype.str}Alloc($itemsStr)"
                    else -> "fixedArrayOf${ltype.elementType.str}($relements, $itemsStr)"
                }
            }
            else -> {
                "/*not a valid array init type: $ltype} */ listOf(" + this.items.joinToString(", ") { it.initializer.generate() } + ")"
            }
        }
    }

    open fun TenaryExpr.generate(par: Boolean = true): String = run {
        "(if (${this.cond.castTo(Type.BOOL).generate(par = false)}) ${this.etrue.castTo(this.type).generate()} else ${this.efalse.castTo(this.type).generate()})"
    }

    open fun FieldAccessExpr.generate(par: Boolean = true): String = run {
        val ltype = left.type.resolve()
        if (indirect) {
            "${this.left.generate()}.${ltype.valueProp}.${this.id}"
        } else {
            "${this.left.generate()}.${this.id}"
        }
    }

    open fun CommaExpr.generate(par: Boolean = true): String = run {
        "run { ${this.exprs.joinToString("; ") { it.generate(par = false) }} }"
    }

    open fun SizeOfAlignExprBase.generate(par: Boolean = true): String = run {
        if (this is SizeOfAlignExprExpr && this.expr is StringConstant) {
            val computed = this.expr.value.length + 1
            "$computed"
        } else {
            val ftype = this.ftype.resolve()
            val computedSize = ftype.getSize(parser)
            when (ftype) {
                is ArrayType -> "$computedSize"
                else -> "${this.ftype.str}.SIZE_BYTES"
            }
            //this.kind + "(" + this.ftype +  ")"
        }
    }

    open fun generateAssign(l: Expr, r: String): String {
        val ltype = l.type.resolve()
        return when {
            l is ArrayAccessExpr -> {
                val lexpr = l.expr
                val index = l.index.generate()
                val ll = lexpr.generate()
                val lexprType = lexpr.type
                when {
                    //lexprType is BasePointerType && lexprType.actsAsPointer && l.type.resolve().unsigned -> "$ll.setu($index, $r)"
                    //else -> "$ll.set($index, $r)"
                    (index == "0") && l.isDeref -> "$ll.value = $r"
                    else -> "$ll[$index] = $r"
                }
            }
            ltype is StructType || ltype is ArrayType -> "${l.generate()}.copyFrom($r)"
            else -> "${l.generate()} = $r"
        }
    }

    open fun generateAssignExpr(e: SimpleAssignExpr): String {
        val rr = e.r.castTo(e.l.type).generate(par = false)
        return "run { $rr }.also { `\$` -> ${generateAssign(e.l, "`\$`")} }"
    }

    open fun Type.defaultValue(): String = when (this) {
        is IntType -> (if (signed) "0" else "0u").let { if (size == 8) "${it}L" else it }
        is FloatType -> "0f"
        is DoubleType -> "0.0"
        is PointerType -> "CPointer(0)"
        is RefType -> this.resolve().defaultValue()
        is StructType -> "${this.getProgramType().name}Alloc()"
        is ArrayType -> "0 /*$this*/"
        is FunctionType -> "0 /*$this*/"
        else -> "0 /*Unknown defaultValue for ${this::class}: $this*/"
    }

    open fun StructType.getProgramType() = parser.getStructTypeInfo(this.spec)
    open fun Type.getProgramType() = when (this) {
        is StructType -> getProgramType()
        is RefType -> parser.getStructTypeInfo(this.id)
        else -> error("$this")
    }

    //////////////////////////////////////////////////
    //////////////////////////////////////////////////

    open fun Indenter.generate(it: Stm): Unit = when (it) {
        is LowGoto -> generate(it)
        is LowLabel -> generate(it)
        is LowIfGoto -> generate(it)
        is LowSwitchGoto -> generate(it)
        is EmptyStm -> generate(it)
        is Stms -> generate(it)
        is RawStm -> generate(it)
        is CommentStm -> generate(it)
        is Return -> generate(it)
        is ExprStm -> generate(it)
        is While -> generate(it)
        is DoWhile -> generate(it)
        is For -> generate(it)
        is SwitchWithoutFallthrough -> generate(it)
        is Switch -> generate(it)
        is CaseStm -> generate(it)
        is DefaultStm -> generate(it)
        is LabeledStm -> generate(it)
        is Goto -> generate(it)
        is Continue -> generate(it)
        is Break -> generate(it)
        is IfElse -> generate(it)
        is Decl -> generate(it, isTopLevel = false)
        else -> error("Don't know how to generate stm $it")
    }

    open fun Indenter.generate(it: Decl, isTopLevel: Boolean): Unit {
        when (it) {
            is FuncDeclaration -> generate(it, isTopLevel)
            is VarDeclaration -> generate(it, isTopLevel)
            else -> error("Don't know how to generate decl $it")
        }
    }

    @Suppress("RemoveCurlyBracesFromTemplate")
    open fun Expr.generate(par: Boolean = true): String = when (this) {
        is ConstExpr -> this.generate(par)
        is NumericConstant -> this.generate(par)
        is Binop -> this.generate(par)
        is SimpleAssignExpr -> this.generate(par)
        is Id -> this.generate(par)
        is PostfixExpr -> this.generate(par)
        is CallExpr -> this.generate(par)
        is StringConstant -> this.generate(par)
        is CharConstant -> this.generate(par)
        is CastExpr -> this.generate(par)
        is ArrayAccessExpr -> this.generate(par)
        is Unop -> this.generate(par)
        is ArrayInitExpr -> this.generate(par)
        is TenaryExpr -> this.generate(par)
        is FieldAccessExpr -> this.generate(par)
        is CommaExpr -> this.generate(par)
        is SizeOfAlignExprBase -> this.generate(par)
        else -> error("Don't know how to generate expr $this (${this::class})")
    }
}
