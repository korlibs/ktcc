package com.soywiz.ktcc.gen

import com.soywiz.ktcc.parser.*
import com.soywiz.ktcc.transform.*
import com.soywiz.ktcc.types.*
import com.soywiz.ktcc.util.*

class KotlinGenerator(parsedProgram: ParsedProgram) : BaseGenerator(KotlinTarget, parsedProgram) {
    //val analyzer = ProgramAnalyzer()

    override val EOL_SC = ""

    override fun StringConstant.generate(par: Boolean): String = "$raw.ptr"
    override fun CharConstant.generate(par: Boolean): String = "$raw.toInt()"
    override val supportsGoto: Boolean = false
    override val STRUCTURES_FIRST = false

    override val Type.str: String
        get() {
            val res = this.resolve()
            return when {
                res is BasePointerType && res.actsAsPointer -> "CPointer<${res.elementType.str}>"
                res is ArrayType -> "Array${(res.numElements ?: "")}" + res.elementType.str.replace("[", "").replace("]", "_").replace("<", "_").replace(">", "_").trimEnd('_')
                res is StructType -> res.info.name
                res is FunctionType -> res.toString()
                else -> res.toString()
            }
        }

    override fun genVarDecl(name: String, varTypeName: String): String {
        return "var $name: $varTypeName"
    }

    override fun Expr.castToStrict(_dstType: Type?): Expr {
        return castTo(_dstType)
    }

    private var oldPosIndex = 0

    override fun Indenter.generate(it: For): Unit = generate(it.lower())

    override fun Indenter.generate(it: SwitchWithoutFallthrough): Unit {
        //breakScope("when", BreakScope.Kind.WHEN) { scope ->
        //line("${scope.name}@when (${it.subject.generate(par = false)})") {
        displayComments(it)
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

    override fun Indenter.generate(it: Switch): Unit {
        generate(it.removeFallthrough(tempContext))
    }

    override fun Indenter.generate(it: CaseStm): Unit {
        line("// unexpected outer CASE ${it.expr.generate()}").apply { generate(it.stm) }
    }

    override fun Indenter.generate(it: DefaultStm): Unit {
        line("// unexpected outer DEFAULT").apply { generate(it.stm) }
    }

    override fun Indenter.generateBreakContinue(it: Stm): Unit {
        val scope = if (it is Continue) breakScopeForContinue else breakScope
        val keyword = if (it is Continue) "continue" else "break"
        val gen = if (it is Continue) scope?.node?.onContinue else scope?.node?.onBreak
        if (gen != null) generate(gen())
        line("$keyword@${scope?.name}")
    }

    override fun Indenter.generate(it: LabeledStm): Unit {
        line("${it.id}@run {")
        indent {
            generate(it.stm)
        }
        line("}")
    }

    override fun Indenter.generate(it: Goto): Unit {
        line("goto@${it.id} /* @TODO: goto must convert the function into a state machine */")
    }

    protected override fun Indenter.lineStackFrame(node: Stm, code: () -> Unit) {
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

    override fun ArrayInitExpr.generate(par: Boolean): String = run {
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

    override fun CastExpr.generate(par: Boolean): String = run {
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

    private val __it = "`\$`"

    override fun Binop.generate(par: Boolean): String = run {
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


    override fun Unop.generate(par: Boolean): String = run {
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

    override fun genFuncDeclaration(it: FuncDeclaration): String {
        return "fun ${it.name.name}(${it.paramsWithVariadic.joinToString(", ") { generateParam(it) }}): ${it.funcType.retType.resolve().str} = stackFrame"
    }

    override fun Indenter.generateProgramStructure(includeRuntime: Boolean, block: Indenter.() -> Unit) {
        if (preprocessorInfo.packageName != "") {
            line("package ${preprocessorInfo.packageName}")
            line("")
        }
        if (includeRuntime) {
            line(target.runtimeImports)
        }
        line("//ENTRY Program")
        line("//Program.main(arrayOf())")
        //for (str in strings) line("// $str")
        line(KotlinTarget.KotlinSupressions)
        line("@UseExperimental(ExperimentalUnsignedTypes::class)")
        line("class ${preprocessorInfo.moduleName}(HEAP_SIZE: Int = 0) : Runtime(HEAP_SIZE)") {
            block()
        }
    }

    override fun Indenter.generateStaticCode(callback: Indenter.() -> Unit): Unit {
        val indenter = Indenter().apply { callback() }

        if (indenter.cmds.isNotEmpty()) {
            line("companion object") {
                line(indenter)
            }
            line("")
        } else {
            line(indenter)
        }
    }

    override fun Indenter.generateDefineConstants() {
        for ((name, value) in preprocessorInfo.constantDecls) {
            line("const val $name = $value")
        }
    }

    override fun Indenter.generateMainEntryPoint(mainFunc: FuncDeclaration) {
        //if (mainFunc.params.isEmpty()) {
        //    line("@JvmStatic fun main(args: Array<String>): Unit = run { ${preprocessorInfo.moduleName}().main() }")
        //} else {
        //    line("@JvmStatic fun main(args: Array<String>): Unit = run { val rargs = arrayOf(\"program\") + args; ${preprocessorInfo.moduleName}().apply { main(rargs.size, rargs.ptr) } }")
        //}
    }

    override fun Indenter.generateMainEntryPointOutside(mainFunc: FuncDeclaration) {
        if (mainFunc.params.isEmpty()) {
            line("fun main(args: Array<String>): Unit = run { ${preprocessorInfo.moduleName}().main() }")
        } else {
            line("fun main(args: Array<String>): Unit = run { val rargs = arrayOf(\"program\") + args; ${preprocessorInfo.moduleName}().apply { main(rargs.size, rargs.ptr) } }")
        }
    }

    override fun Indenter.generateStructures() {
        if (parser.structTypesByName.isEmpty()) return

        line("")
        line("//////////////////")
        line("// C STRUCTURES //")
        line("//////////////////")
        line("")
        for (type in parser.structTypesByName.values) {
            val typeName = type.name
            val typeNameAlloc = "${typeName}Alloc"
            val typeSize = "$typeName.SIZE_BYTES"
            val typeFields = type.fieldsByName.values
            //val params = typeFields.map { it.name + ": " + it.type.str + " = " + it.type.defaultValue() }
            val params = typeFields.map { it.name + ": " + it.type.str }
            val fields = typeFields.map { it.name + ": " + it.type.str }
            val fieldsSet = typeFields.map { "this." + it.name + " = " + it.name }
            line("/*!inline*/ class $typeName(val ptr: Int) : IStruct") {
                line("companion object : IStructCompanion<$typeName> ") {
                    line("const val SIZE_BYTES = ${type.size}")
                    line("override val SIZE = SIZE_BYTES")
                    for (field in typeFields) {
                        // OFFSET_
                        line("const val ${field.offsetName} = ${field.offset}")
                    }
                }
            }

            if (params.isNotEmpty()) {
                line("fun $typeNameAlloc(): $typeName = $typeName(alloca($typeSize).ptr)")
            }
            line("fun $typeNameAlloc(${params.joinToString(", ")}): $typeName = $typeNameAlloc().apply { ${fieldsSet.joinToString("; ")} }")
            line("fun $typeName.copyFrom(src: $typeName): $typeName = this.apply { memcpy(CPointer<Unit>(this.ptr), CPointer<Unit>(src.ptr), $typeSize) }")
            line("fun fixedArrayOf$typeName(size: Int, vararg items: $typeName): CPointer<$typeName> = alloca_zero(size * $typeSize).toCPointer<$typeName>().also { for (n in 0 until items.size) $typeName(it.ptr + n * $typeSize).copyFrom(items[n]) }")
            line("operator fun CPointer<$typeName>.get(index: Int): $typeName = $typeName(this.ptr + index * $typeSize)")
            line("operator fun CPointer<$typeName>.set(index: Int, value: $typeName) = $typeName(this.ptr + index * $typeSize).copyFrom(value)")
            line("@JvmName(\"plus$typeName\") operator fun CPointer<$typeName>.plus(offset: Int): CPointer<$typeName> = CPointer(this.ptr + offset * $typeSize)")
            line("@JvmName(\"minus$typeName\") operator fun CPointer<$typeName>.minus(offset: Int): CPointer<$typeName> = CPointer(this.ptr - offset * $typeSize)")
            line("@JvmName(\"minusPtr$typeName\") operator fun CPointer<$typeName>.minus(other: CPointer<$typeName>) = (this.ptr - other.ptr) / $typeSize")
            line("var CPointer<$typeName>.${type.type.valueProp}: $typeName get() = this[0]; set(value) = run { this[0] = value }")

            for (field in typeFields) {
                val ftype = field.type.resolve()
                val foffsetName = "$typeName.${field.offsetName}"

                val base = "var $typeName.${field.name}: ${ftype.str}"
                val addr = "ptr + $foffsetName"

                when (ftype) {
                    is PrimType -> {
                        val ktype = KotlinConsts.ktypesFromCType[ftype]
                        when {
                            ktype != null -> line("$base get() = ${ktype.load(addr)}; set(value) = ${ktype.store(addr, "value")}")
                            else -> line("$base get() = TODO(\"ftypeSize=${ftype.getSize(parser)}\"); set(value) = TODO()")
                        }
                    }
                    is StructType -> line("$base get() = ${ftype.str}($addr); set(value) = run { ${ftype.str}($addr).copyFrom(value) }")
                    is PointerType -> line("$base get() = CPointer(lw($addr)); set(value) = run { sw($addr, value.ptr) }")
                    is ArrayType -> line("$base get() = ${ftype.str}($addr); set(value) = run { TODO(\"Unsupported setting ftype=$ftype\") }")
                    else -> line("$base get() = TODO(\"ftype=$ftype ${ftype::class}\"); set(value) = TODO(\"ftype=$ftype ${ftype::class}\")")
                }
            }
        }
    }

    override fun Indenter.generateFixedSizeArrayTypes() {
        for (type in fixedSizeArrayTypes.distinctBy { it.str }.filter { !it.actsAsPointer }) { // To prevent CONST * issues
            val typeNumElements = type.numElements ?: 0
            val typeName = type.str
            val elementType = type.elementType.resolve()
            val elementTypeName = elementType.str
            val elementSize = elementType.getSize(parser)
            line("/*!inline*/ class $typeName(val ptr: Int)") {
                line("companion object") {
                    line("const val NUM_ELEMENTS = $typeNumElements")
                    line("const val ELEMENT_SIZE_BYTES = $elementSize")
                    line("const val TOTAL_SIZE_BYTES = /*${typeNumElements * elementSize}*/ (NUM_ELEMENTS * ELEMENT_SIZE_BYTES)")
                }
                line("fun addr(index: Int) = ptr + index * ELEMENT_SIZE_BYTES")
            }
            val ktype = KotlinConsts.ktypesFromCType[elementType]
            val getBase = "operator fun $typeName.get(index: Int): $elementTypeName"
            when {
                ktype != null -> line("$getBase = ${ktype.load("addr(index)")}")
                elementType is StructType -> line("$getBase = $elementTypeName(addr(index))")
                elementType is ArrayType -> line("$getBase = $elementTypeName(addr(index))")
                elementType is PointerType -> line("$getBase = CPointer(addr(index))")
                else -> line("$getBase = TODO(\"$elementTypeName(addr(index))\")")
            }
            val setBase = "operator fun $typeName.set(index: Int, value: $elementTypeName): Unit"
            when {
                ktype != null -> line("$setBase = run { ${ktype.store("addr(index)", "value")} }")
                elementType is ArrayType -> line("$setBase = run { memcpy(CPointer(addr(index)), CPointer(value.ptr), $typeName.ELEMENT_SIZE_BYTES) }")
                elementType is BasePointerType -> line("$setBase = run { memcpy(CPointer(addr(index)), CPointer(value.ptr), $typeName.ELEMENT_SIZE_BYTES) }")
                else -> line("$setBase = run { $elementTypeName(addr(index)).copyFrom(value) }")
            }
            line("var $typeName.${type.valueProp} get() = this[0]; set(value) = run { this[0] = value }")
            line("fun ${typeName}Alloc(vararg items: $elementTypeName): $typeName = $typeName(alloca_zero($typeName.TOTAL_SIZE_BYTES).ptr).also { for (n in 0 until items.size) it[n] = items[n] }")
            line("operator fun $typeName.plus(offset: Int): CPointer<$elementTypeName> = CPointer<$elementTypeName>(addr(offset))")
            line("operator fun $typeName.minus(offset: Int): CPointer<$elementTypeName> = CPointer<$elementTypeName>(addr(-offset))")
            //line("fun $typeName.copyFrom(other: $typeName): $typeName = run { memcpy(CPointer<Unit>(this.ptr), CPointer<Unit>(other.ptr), $typeName.TOTAL_SIZE_BYTES); }")
            //line("fun $typeName.copyFrom(other: CPointer<*>): $typeName = run { memcpy(CPointer<Unit>(this.ptr), CPointer<Unit>(other.ptr), $typeName.TOTAL_SIZE_BYTES); }")
        }
    }
}

object KotlinConsts {
    const val VALUE = "value"
    const val VALUEU = "valueu"

    data class KType(
        val ctype: Type,
        val name: String,
        val size: Int,
        val load: (addr: String) -> String,
        val store: (addr: String, value: String) -> String,
        val default: String = "0",
        val unsigned: Boolean = false
    ) {
        val dummy = if (unsigned) "dummy: $name = $default, unsignedDummy: Unit = Unit" else "dummy: $name = $default"
    }

    data class FuncType(val n: Int) {
        val cname = "CFunction$n"
        val kname = "kotlin.reflect.KFunction$n"
        val targsNR = (0 until n).map { "T$it" }.joinToString(", ")
        val targs = ((0 until n).map { "T$it" } + listOf("TR")).joinToString(", ")
        val vargs = ((0 until n).map { "v$it: T$it" }).joinToString(", ")
        val cargs = ((0 until n).map { "v$it" }).joinToString(", ")
    }

    val funcTypes = (0 until 8).map { FuncType(it) }

    val ktypes = ArrayList<KType>().apply {
        add(KType(Type.CHAR, "Byte", 1, { addr -> "lb($addr)" }, { addr, v -> "sb($addr, $v)" }))
        add(KType(Type.SHORT, "Short", 2, { addr -> "lh($addr)" }, { addr, v -> "sh($addr, $v)" }))
        add(KType(Type.INT, "Int", 4, { addr -> "lw($addr)" }, { addr, v -> "sw($addr, $v)" }))
        add(KType(Type.LONG, "Long", 8, { addr -> "ld($addr)" }, { addr, v -> "sd($addr, $v)" }, default = "0L"))

        add(KType(Type.UCHAR, "UByte", 1, { addr -> "lb($addr).toUByte()" }, { addr, v -> "sb($addr, ($v).toByte())" }, default = "0u", unsigned = true))
        add(KType(Type.USHORT, "UShort", 2, { addr -> "lh($addr).toUShort()" }, { addr, v -> "sh($addr, ($v).toShort())" }, default = "0u", unsigned = true))
        add(KType(Type.UINT, "UInt", 4, { addr -> "lw($addr).toUInt()" }, { addr, v -> "sw($addr, ($v).toInt())" }, default = "0u", unsigned = true))
        add(KType(Type.ULONG, "ULong", 8, { addr -> "ld($addr).toULong()" }, { addr, v -> "sd($addr, ($v).toLong())" }, default = "0uL", unsigned = true))

        add(KType(Type.FLOAT, "Float", 4, { addr -> "Float.fromBits(lw($addr))" }, { addr, v -> "sw($addr, ($v).toBits())" }, default = "0f"))
        add(KType(Type.DOUBLE, "Double", 4, { addr -> "Double.fromBits(ld($addr))" }, { addr, v -> "sd($addr, ($v).toBits())" }, default = "0.0"))
    }.toList()

    val ktypesFromCType = ktypes.associateBy { it.ctype }
}

object KotlinTarget : BaseTarget("kotlin", "kt") {
    override fun generator(parsedProgram: ParsedProgram): BaseGenerator = KotlinGenerator(parsedProgram)

    val KotlinSupressions =
        """@Suppress("MemberVisibilityCanBePrivate", "FunctionName", "CanBeVal", "DoubleNegation", "LocalVariableName", "NAME_SHADOWING", "VARIABLE_WITH_REDUNDANT_INITIALIZER", "RemoveRedundantCallsOfConversionMethods", "EXPERIMENTAL_IS_NOT_ENABLED", "RedundantExplicitType", "RemoveExplicitTypeArguments", "RedundantExplicitType", "unused", "UNCHECKED_CAST", "UNUSED_VARIABLE", "UNUSED_PARAMETER", "NOTHING_TO_INLINE", "PropertyName", "ClassName", "USELESS_CAST", "PrivatePropertyName", "CanBeParameter", "UnusedMainParameter")"""

    val Type.valueProp: String
        get() = when {
            //this is BasePointerType && this.elementType is IntType && !this.elementType.signed -> VALUEU
            else -> KotlinConsts.VALUE
        }

    override val runtimeImports: String by lazy { KotlinRuntime.lines().takeWhile { it.startsWith("import ") }.joinToString("\n") }
    override val runtime: String by lazy { KotlinRuntime.lines().dropWhile { it.startsWith("import ") }.joinToString("\n") }

    val generatedRuntime: String = buildString {
        for (ft in KotlinConsts.funcTypes) {
            appendln("/*!!inline*/ class ${ft.cname}<${ft.targs}>(val ptr: Int)")
        }
        appendln("")
        for (ktype in KotlinConsts.ktypes) ktype.apply {
            val valueProp = ctype.ptr().valueProp
            if (ctype.signed) {
                appendln("@JvmName(\"getter$name\") operator fun CPointer<$name>.get(offset: Int): $name = ${load("this.ptr + offset * $size")}")
                appendln(
                    "@JvmName(\"setter$name\") operator fun CPointer<$name>.set(offset: Int, value: $name) = ${store(
                        "this.ptr + offset * $size",
                        "value"
                    )}"
                )
                appendln("@set:JvmName(\"setter_${name}_value\") @get:JvmName(\"getter_${name}_value\") var CPointer<$name>.$valueProp: $name get() = this[0]; set(value): Unit = run { this[0] = value }")
            } else {
                //appendln("@JvmName(\"inc$name\") @InlineOnly inline operator fun CPointer<$name>.inc() = (this + 1)") // @TODO: We might need @InlineOnly?
                appendln("operator fun CPointer<$name>.get(offset: Int): $name = ${load("this.ptr + offset * $size")}")
                appendln("operator fun CPointer<$name>.set(offset: Int, value: $name) = ${store("this.ptr + offset * $size", "value")}")
                appendln("var CPointer<$name>.$valueProp: $name get() = this[0]; set(value): Unit = run { this[0] = value }")
            }
            appendln("@JvmName(\"plus$name\") operator fun CPointer<$name>.plus(offset: Int) = addPtr<$name>(offset, $size)")
            appendln("@JvmName(\"minus$name\") operator fun CPointer<$name>.minus(offset: Int) = addPtr<$name>(-offset, $size)")
            appendln("@JvmName(\"minus${name}Ptr\") operator fun CPointer<$name>.minus(other: CPointer<$name>) = (this.ptr - other.ptr) / $size")
            appendln(
                "fun fixedArrayOf$name(size: Int, vararg values: $name): CPointer<$name> = alloca_zero(size * $size).toCPointer<$name>().also { for (n in 0 until values.size) ${store(
                    "it.ptr + n * $size",
                    "values[n]"
                )} }"
            )
            appendln("")
        }
        appendln("")
        appendln("val FUNCTION_ADDRS = LinkedHashMap<kotlin.reflect.KFunction<*>, Int>()")
        appendln("")
        for (ft in KotlinConsts.funcTypes) {
            ft.apply {
                appendln("operator fun <$targs> $cname<$targs>.invoke($vargs): TR = (FUNCTIONS[this.ptr] as (($targsNR) -> TR)).invoke($cargs)")
                appendln("val <$targs> $kname<$targs>.cfunc get() = $cname<$targs>(FUNCTION_ADDRS.getOrPut(this) { FUNCTIONS.add(this); FUNCTIONS.size - 1 })")
            }
        }

        appendln("}")
    }
}
