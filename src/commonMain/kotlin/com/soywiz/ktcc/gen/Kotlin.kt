package com.soywiz.ktcc.gen

import com.soywiz.ktcc.parser.*
import com.soywiz.ktcc.preprocessor.*
import com.soywiz.ktcc.transform.*
import com.soywiz.ktcc.types.*
import com.soywiz.ktcc.util.*
import kotlin.jvm.*

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
                res is ArrayType -> "Array${(res.numElements ?: "")}" + res.elementType.str.replace("[", "").replace("]", "_").replace("<", "_").replace(
                    ">",
                    "_"
                ).trimEnd('_')
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

    protected override fun Indenter.lineStackFrame(node: Stm, alreadyInBlock: Boolean, code: Indenter.() -> Unit) {
        val oldAllocs = numAllocs
        numAllocs = 0
        val indentedCode = Indenter {
            code()
        }
        val blockAllocs = numAllocs
        numAllocs = oldAllocs
        if (node.containsBreakOrContinue()) {
            val oldPos = "__oldPos${oldPosIndex++}"
            line("val $oldPos = STACK_PTR")
            line("try") {
                line(indentedCode)
            }
            line("finally") {
                line("STACK_PTR = $oldPos")
            }
        } else {
            if (blockAllocs > 0) {
                line("stackFrame") {
                    line(indentedCode)
                }
            } else {
                if (alreadyInBlock) {
                    line(indentedCode)
                } else {
                    line("run") {
                        line(indentedCode)
                    }
                }
            }
        }
    }

    override fun ArrayInitExpr.generate(par: Boolean): String {
        val ltype = ltype.resolve()
        return when (ltype) {
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
                numAllocs++
                "${structName}Alloc(${setFields.map { "${it.key} = ${it.value}" }.joinToString(", ")})"
            }
            is BasePointerType -> {
                val elementType = ltype.elementType
                val itemsArray = items.map {
                    it.initializer.castTo(elementType).generate()
                }
                val numElements = if (ltype is ArrayType) ltype.numElements else null
                val relements = numElements ?: items.size
                val noPointer = ltype is ArrayType && !ltype.actsAsPointer

                if (
                    elementType == Type.UCHAR
                        || elementType == Type.USHORT
                        || elementType == Type.UINT
                        || elementType == Type.CHAR
                        || elementType == Type.SHORT
                        || elementType == Type.INT
                        || elementType == Type.FLOAT
                        || elementType == Type.DOUBLE
                ) {
                    val itemsStr = items.map {
                        val init = it.initializer
                        if (init is NumericConstant) {
                            if (elementType is FloatingType) {
                                it.initializer.castTo(elementType).generate()
                            } else if (elementType.unsigned) {
                                "${init.nvalue.toLong()}u"
                            } else {
                                "${init.nvalue.toLong()}"
                            }
                        } else {
                            init.castTo(elementType).generate()
                        }
                    } .joinToString(", ")
                    val addSizeExtra = items.size != relements
                    val extra = if (addSizeExtra) ", size = $relements" else ""
                    val str = "fixedArrayOf${elementType.str}($itemsStr$extra)"
                    if (noPointer) {
                        "${ltype.str}($str.ptr)"
                    } else {
                        str
                    }

                } else {
                    val itemsSetStr = itemsArray.withIndex().joinToString("; ") { "this[${it.index}] = ${it.value}" }
                    when {
                        noPointer -> {
                            numAllocs++
                            "${ltype.str}Alloc { $itemsSetStr }"
                        }
                        else -> {
                            numAllocs++
                            //val type = ltype.elementType.resolve()
                            "fixedArrayOf${elementType.str}($relements) { $itemsSetStr }"
                        }
                    }
                }
            }
            else -> {
                "/*not a valid array init type: $ltype} */ listOf(" + this.items.joinToString(", ") { it.initializer.generate() } + ")"
            }
        }
    }

    override fun CastExpr.generate(par: Boolean): String {
        val newType = this.type.resolve()
        val oldType = this.expr.type.resolve()

        //println("CastExpr: oldType=$oldType -> newType=$newType")

        val base = expr.generate()
        val res = when {
            oldType is BoolType && newType is IntType -> {
                if (newType != Type.INT) "($base).toInt().to${newType.str}()" else "($base).toInt().to${newType.str}()"
            }
            else -> {
                val rbase = when (oldType) {
                    //is PointerFType -> "$base.ptr"
                    is ArrayType -> "($base).ptr"
                    is PointerType -> "($base).ptr"
                    is StructType -> "($base).ptr"
                    is FunctionType -> "($base).ptr"
                    else -> "($base)"
                }
                when (newType) {
                    is BasePointerType, is StructType, is FunctionType -> {
                        val cbase = if (oldType == Type.INT) rbase else "($rbase).toInt()"
                        "${newType.str}($cbase)"
                    }
                    Type.USHORT -> "($base).toInt().toUShort()"
                    Type.SHORT -> "($base).toInt().toShort()"
                    else -> "($base).to${newType.str}()"
                }
            }
        }
        return if (par) "($res)" else res
    }

    private val __it = "`\$`"

    fun ptrName(type: Type): String {
        if (type is PointerType) return "Ptr"
        return type.str
    }

    override fun Binop.generate(par: Boolean): String {
        val ll = l.castTo(extypeL).generate()
        val rr = r.castTo(extypeR).generate()

        //println("Binop: op=$op, extypeL=$extypeL, extypeR=$extypeR, type=$type")

        val base = when (op) {
            "+", "-" -> if (l.type is BasePointerType) {
                if (op == "-" && r.type is BasePointerType) {
                    "$ll.${opName(op)}Ptr${ptrName(r.type.elementType)}($rr)"
                } else {
                    "$ll $op ($rr)"
                }
                //"$ll $op $rr"
            } else {
                "$ll $op $rr"
            }
            "*", "/", "%" -> "$ll $op $rr"
            "==", "!=", "<", ">", "<=", ">=" -> "$ll $op $rr"
            "&&", "||" -> "$ll $op $rr"
            "^" -> "$ll xor $rr"
            "&" -> "$ll and $rr"
            "|" -> "$ll or $rr"
            "<<", ">>" -> {
                val rop = if (op == "<<") "shl" else "shr"
                "$ll $rop $rr"
            }
            else -> TODO("Binop $op")
        }
        return if (par) "($base)" else base
    }

    override fun PostfixExpr.generate(par: Boolean): String {
        val left = lvalue.generate()
        return when (op) {
            "++", "--" -> {
                if (lvalue.type is PointerType) {
                    // @TODO: This might have effects
                    "$left.also { $left = ${Binop(lvalue, op.substring(0, 1), lvalue.type.oneExpr()).generate(false)} }"
                } else {
                    "$left$op"
                }
            }
            else -> TODO("Don't know how to generate postfix operator '$op'")
        }
    }

    override fun Unop.generate(par: Boolean): String {
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
        return if (par) "($res)" else res
    }

    override fun Indenter.genFuncDeclaration(it: FuncDeclaration, block: Indenter.() -> Unit) {
        numAllocs = 0
        val body = Indenter {
            block()
        }
        val allocs = numAllocs

        val stackFrame = if (allocs > 0) " = stackFrame" else ""

        line("fun ${it.name.name}(${it.paramsWithVariadic.joinToString(", ") { generateParam(it) }}): ${it.funcType.retType.resolve().str}$stackFrame") {
            line(body)
        }
    }

    override fun Indenter.generateProgramStructure(includeRuntime: Boolean, block: Indenter.() -> Unit) {
        if (preprocessorInfo.packageName != "") {
            line("package ${preprocessorInfo.packageName}")
            line("")
        }
        if (includeRuntime) {
            line(target.getRuntimeImports(preprocessorInfo))
        }
        line("//ENTRY Program")
        line("//Program.main(arrayOf())")
        //for (str in strings) line("// $str")
        line(KotlinTarget.KotlinSupressions)
        line("@OptIn(ExperimentalUnsignedTypes::class)")
        line(
            "public/*!*/ open class ${preprocessorInfo.moduleName}(HEAP_SIZE: Int = 0) : ${preprocessorInfo.runtimeClass
                ?: if (preprocessorInfo.subTarget == "jvm") "RuntimeJvm" else "Runtime"}(HEAP_SIZE)"
        ) {
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
        //    line("@JvmStatic fun main(args: Array<String>): Unit { ${preprocessorInfo.moduleName}().main() }")
        //} else {
        //    line("@JvmStatic fun main(args: Array<String>): Unit { val rargs = arrayOf(\"program\") + args; ${preprocessorInfo.moduleName}().apply { main(rargs.size, rargs.ptr) } }")
        //}
    }

    override fun Indenter.generateMainEntryPointOutside(mainFunc: FuncDeclaration) {
        if (mainFunc.params.isEmpty()) {
            line("fun main(args: Array<String>): Unit { ${preprocessorInfo.moduleName}().main() }")
        } else {
            line("fun main(args: Array<String>): Unit { val rargs = arrayOf(\"program\") + args; ${preprocessorInfo.moduleName}().apply { main(rargs.size, rargs.ptr) } }")
        }
    }

    override fun Indenter.generateStructures() {
        generateStructuresBase(false)
    }

    override fun Indenter.generateStructuresOutside() {
        generateStructuresBase(true)
    }

    fun Indenter.generateStructuresBase(kind: Boolean) {
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
            if (kind) {
                line("public/*!*/ inline/*!*/ class $typeName(val ptr: Int) : AbstractRuntime.IStruct") {
                    line("companion object : AbstractRuntime.IStructCompanion<$typeName> ") {
                        line("const val SIZE_BYTES = ${type.size}")
                        line("override val SIZE = SIZE_BYTES")
                        for (field in typeFields) {
                            // OFFSET_
                            line("const val ${field.offsetName} = ${field.offset}")
                        }
                    }
                }
            } else {
                if (params.isNotEmpty()) {
                    line("fun $typeNameAlloc(): $typeName = $typeName(alloca($typeSize).ptr)")
                }
                line("fun $typeNameAlloc(${params.joinToString(", ")}): $typeName = $typeNameAlloc().apply { ${fieldsSet.joinToString("; ")} }")
                line("fun $typeName.copyFrom(src: $typeName): $typeName = this.apply { memcpy(CPointer<Unit>(this.ptr), CPointer<Unit>(src.ptr), $typeSize) }")
                line("inline fun fixedArrayOf$typeName(size: Int, setItems: CPointer<$typeName>.() -> Unit): CPointer<$typeName> = alloca_zero(size * $typeSize).toCPointer<$typeName>().apply(setItems)")
                line("@$JvmName(\"get$typeName\") operator fun CPointer<$typeName>.get(index: Int): $typeName = $typeName(this.ptr + index * $typeSize)")
                line("operator fun CPointer<$typeName>.set(index: Int, value: $typeName) = $typeName(this.ptr + index * $typeSize).copyFrom(value)")
                line("@$JvmName(\"plus$typeName\") operator fun CPointer<$typeName>.plus(offset: Int): CPointer<$typeName> = CPointer(this.ptr + offset * $typeSize)")
                line("@$JvmName(\"minus$typeName\") operator fun CPointer<$typeName>.minus(offset: Int): CPointer<$typeName> = CPointer(this.ptr - offset * $typeSize)")
                line("fun CPointer<$typeName>.minusPtr$typeName(other: CPointer<$typeName>) = (this.ptr - other.ptr) / $typeSize")
                line("@get:$JvmName(\"get$typeName\") var CPointer<$typeName>.${type.type.valueProp}: $typeName get() = this[0]; set(value) { this[0] = value }")

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
                        is StructType -> line("$base get() = ${ftype.str}($addr); set(value) { ${ftype.str}($addr).copyFrom(value) }")
                        is PointerType -> line("$base get() = CPointer(lw($addr)); set(value) { sw($addr, value.ptr) }")
                        is ArrayType -> line("$base get() = ${ftype.str}($addr); set(value) { TODO(\"Unsupported setting ftype=$ftype\") }")
                        else -> line("$base get() = TODO(\"ftype=$ftype ${ftype::class}\"); set(value) = TODO(\"ftype=$ftype ${ftype::class}\")")
                    }
                }
            }
        }
    }

    override fun Indenter.generateFixedSizeArrayTypes() {
        generateFixedSizeArrayTypesBase(false)
    }

    override fun Indenter.generateFixedSizeArrayTypesOutside() {
        generateFixedSizeArrayTypesBase(true)
    }

    fun Indenter.generateFixedSizeArrayTypesBase(kind: Boolean) {
        for (type in fixedSizeArrayTypes.distinctBy { it.str }.filter { !it.actsAsPointer }) { // To prevent CONST * issues
            val typeNumElements = type.numElements ?: 0
            val typeName = type.str
            val elementType = type.elementType.resolve()
            val elementTypeName = elementType.str
            val elementSize = elementType.getSize(parser)
            val CPointer_elementTypeName = "CPointer<$elementTypeName>"
            if (kind) {
                line("const val ${typeName}__NUM_ELEMENTS = $typeNumElements")
                line("const val ${typeName}__ELEMENT_SIZE_BYTES = $elementSize")
                line("const val ${typeName}__TOTAL_SIZE_BYTES = ${typeNumElements * elementSize}")
                line("public/*!*/ inline/*!*/ class $typeName(val ptr: Int)") {
                    //line("companion object { @JvmStatic const val NUM_ELEMENTS = $typeNumElements; @JvmStatic const val ELEMENT_SIZE_BYTES = $elementSize; @JvmStatic const val TOTAL_SIZE_BYTES = /*${typeNumElements * elementSize}*/ (NUM_ELEMENTS * ELEMENT_SIZE_BYTES) }")
                    line("fun addr(index: Int) = ptr + index * ${typeName}__ELEMENT_SIZE_BYTES")
                }
            } else {
                line("/////////////")
                //fun addr(index: String) = "ptr + $index * $elementSize"
                fun addr(index: String) = "addr($index)"
                val ktype = KotlinConsts.ktypesFromCType[elementType]
                val getBase = "operator fun $typeName.get(index: Int): $elementTypeName"
                when {
                    ktype != null -> line("$getBase = ${ktype.load(addr("index"))}")
                    elementType is StructType || elementType is ArrayType -> line("$getBase = $elementTypeName(${addr("index")})")
                    elementType is PointerType -> line("$getBase = CPointer(${addr("index")})")
                    else -> line("$getBase = TODO(\"$elementTypeName(addr(index))\")")
                }
                val setBase = "operator fun $typeName.set(index: Int, value: $elementTypeName): Unit"
                when {
                    ktype != null -> line("$setBase { ${ktype.store(addr("index"), "value")} }")
                    elementType is ArrayType || elementType is BasePointerType -> line("$setBase { memcpy(CPointer(addr(index)), CPointer(value.ptr), ${typeName}__ELEMENT_SIZE_BYTES) }")
                    else -> line("$setBase { $elementTypeName(addr(index)).copyFrom(value) }")
                }
                line("var $typeName.${type.valueProp} get() = this[0]; set(value) { this[0] = value }")

                //when {
                //    ktype != null -> line("var $typeName.${type.valueProp}: $elementTypeName get() = ${ktype.load("ptr")}; set(value) { ${ktype.store("ptr", "value")} }")
                //    elementType is StructType || elementType is ArrayType -> line("var $typeName.${type.valueProp}: $elementTypeName get() = $elementTypeName(ptr); set(value) { memcpy(CPointer(ptr), CPointer(value.ptr), $typeName.ELEMENT_SIZE_BYTES) }")
                //    else -> line("var $typeName.${type.valueProp}: $elementTypeName get() = TODO(); set(value) { TODO() }")
                //}
                line("inline fun ${typeName}Alloc(setItems: $typeName.() -> Unit): $typeName = $typeName(alloca_zero(${typeName}__TOTAL_SIZE_BYTES).ptr).apply(setItems)")
                line("operator fun $typeName.plus(offset: Int): $CPointer_elementTypeName = $CPointer_elementTypeName(${addr("offset")})")
                line("operator fun $typeName.minus(offset: Int): $CPointer_elementTypeName = $CPointer_elementTypeName(${addr("-offset")})")
            }
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

        add(KType(Type.FLOAT, "Float", 4, { addr -> "lwf($addr)" }, { addr, v -> "swf($addr, ($v))" }, default = "0f"))
        add(KType(Type.DOUBLE, "Double", 4, { addr -> "ldf($addr)" }, { addr, v -> "sdf($addr, ($v))" }, default = "0.0"))
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

    val runtimeJvmImports: String by lazy { KotlinRuntimeJvm.lines().takeWhile { it.startsWith("import ") }.joinToString("\n") }
    val runtimeJvm: String by lazy { KotlinRuntimeJvm.lines().dropWhile { it.startsWith("import ") }.joinToString("\n") }

    override fun getRuntimeImports(info: PreprocessorInfo): String {
        return buildString {
            appendln(runtimeImports)
            if (info.subTarget == "jvm") {
                appendln(runtimeJvmImports)
            }
        }
    }

    override fun getRuntime(info: PreprocessorInfo): String {
        return buildString {
            appendln(runtime)
            if (info.subTarget == "jvm") {
                appendln(runtimeJvm)
            }
        }
    }

    @JvmStatic
    fun main(args: Array<String>) {
        println(generatedRuntime)
    }

    val generatedRuntime: String by lazy {
        buildString {
            for (ft in KotlinConsts.funcTypes) {
                appendln("inline/*!*/ class ${ft.cname}<${ft.targs}>(val ptr: Int)")
            }
            appendln("")
            for (ktype in KotlinConsts.ktypes) ktype.apply {
                val valueProp = ctype.ptr().valueProp
                if (ctype.signed) {
                    appendln("@$JvmName(\"getter$name\") operator fun CPointer<$name>.get(offset: Int): $name = ${load("this.ptr + offset * $size")}")
                    appendln(
                        "@$JvmName(\"setter$name\") operator fun CPointer<$name>.set(offset: Int, value: $name): Unit = ${store(
                            "this.ptr + offset * $size",
                            "value"
                        )}"
                    )
                    appendln("@set:$JvmName(\"setter_${name}_value\") @get:$JvmName(\"getter_${name}_value\") var CPointer<$name>.$valueProp: $name get() = this[0]; set(value): Unit { this[0] = value }")
                } else {
                    //appendln("@$JvmName(\"inc$name\") @InlineOnly inline operator fun CPointer<$name>.inc() = (this + 1)") // @TODO: We might need @InlineOnly?
                    appendln("operator fun CPointer<$name>.get(offset: Int): $name = ${load("this.ptr + offset * $size")}")
                    appendln("operator fun CPointer<$name>.set(offset: Int, value: $name): Unit = ${store("this.ptr + offset * $size", "value")}")
                    appendln("var CPointer<$name>.$valueProp: $name get() = this[0]; set(value): Unit { this[0] = value }")
                }
                appendln("@$JvmName(\"plus$name\") operator fun CPointer<$name>.plus(offset: Int): CPointer<$name> = addPtr<$name>(offset, $size)")
                appendln("@$JvmName(\"minus$name\") operator fun CPointer<$name>.minus(offset: Int): CPointer<$name> = addPtr<$name>(-offset, $size)")
                appendln("fun CPointer<$name>.minusPtr$name(other: CPointer<$name>): Int = (this.ptr - other.ptr) / $size")
                // fun fixedArrayOfByte(size: Int, setItems: CPointer<Byte>.() -> Unit): CPointer<Byte> = alloca_zero(size * 1).toCPointer<Byte>().apply(setItems)
                appendln(
                    "inline fun fixedArrayOf$name(size: Int, setItems: CPointer<$name>.() -> Unit): CPointer<$name> = alloca_zero(size * $size).toCPointer<$name>().apply(setItems)"
                )
                appendln("")
            }
            appendln("")
            appendln("val FUNCTION_ADDRS: LinkedHashMap<kotlin.reflect.KFunction<*>, Int> = LinkedHashMap<kotlin.reflect.KFunction<*>, Int>()")
            appendln("")
            for (ft in KotlinConsts.funcTypes) {
                ft.apply {
                    appendln("operator fun <$targs> $cname<$targs>.invoke($vargs): TR = (FUNCTIONS[this.ptr] as (($targsNR) -> TR)).invoke($cargs)")
                    appendln("@get:kotlin.jvm.JvmName(\"cfunc${ft.n}\") val <$targs> $kname<$targs>.cfunc get() = $cname<$targs>(FUNCTION_ADDRS.getOrPut(this) { FUNCTIONS.add(this); FUNCTIONS.size - 1 })")
                }
            }
        }
    }
}

@PublishedApi
internal val JvmName = "kotlin.jvm.JvmName"
