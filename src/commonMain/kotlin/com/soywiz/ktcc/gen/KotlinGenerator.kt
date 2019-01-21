package com.soywiz.ktcc.gen

import com.soywiz.ktcc.*
import com.soywiz.ktcc.util.*

class KotlinGenerator {
    //val analyzer = ProgramAnalyzer()
    lateinit var program: Program
    val parser get() = program.parser
    val strings get() = parser.strings

    fun generate(program: Program) = Indenter {
        this@KotlinGenerator.program = program
        //analyzer.visit(program)

        for (str in strings) {
            line("// $str")
        }

        for (decl in program.decls) {
            generate(decl)
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
            val typeFields = type.fieldsByName.values
            line("/*!inline*/ class $typeName(val ptr: Int) {")
            indent {
                line("companion object {")
                indent {
                    val fields = typeFields.map { it.name + ": " + it.type.str() }
                    val fieldsSet = typeFields.map { "this." + it.name + " = " + it.name }
                    line("operator fun invoke(${fields.joinToString(", ")}): $typeName = $typeName(alloca(SIZE_BYTES)).also { ${fieldsSet.joinToString("; ")} }")
                    line("const val SIZE_BYTES = ${type.size}")
                    for (field in typeFields) {
                        // OFFSET_
                        line("const val ${field.offsetName} = ${field.offset}")
                    }
                }
                line("}")
                for (field in typeFields) {
                    val ftype = field.type
                    val foffsetName = "$typeName.${field.offsetName}"
                    when (ftype) {
                        is IntFType -> {
                            val ftypeSize = ftype.typeSize
                            when (ftypeSize) {
                                4 -> line("var ${field.name}: $ftype get() = lw(ptr + $foffsetName); set(value) = sw(ptr + $foffsetName, value)")
                                else -> line("var ${field.name}: $ftype get() = TODO(\"ftypeSize=$ftypeSize\"); set(value) = TODO()")
                            }
                        }
                        is FloatFType -> {
                            line("var ${field.name}: $ftype get() = flw(ptr + $foffsetName); set(value) = fsw(ptr + $foffsetName, value)")
                        }
                        is PointerFType -> {
                            line("var ${field.name}: $ftype get() = CPointer(lw(ptr + $foffsetName)); set(value) = run { sw(ptr + $foffsetName, value.ptr) }")
                        }
                        else -> line("var ${field.name}: $ftype get() = TODO(\"ftype=$ftype\"); set(value) = TODO(\"ftype=$ftype\")")
                    }
                }
            }
            line("}")
        }
    }

    fun Indenter.generate(it: Decl): Unit {
        when (it) {
            is FuncDecl -> {
                line("fun ${it.name.name}(${it.params.map { generateParam(it) }.joinToString(", ")}): ${generate(it.rettype)} = stackFrame {")
                indent {
                    generate(it.body)
                }
                line("}")
            }
            is Declaration -> {
                val ftype = it.specs.toFinalType()
                for (init in it.initDeclaratorList) {
                    if (init.decl is ParameterDeclarator) continue // Do not include empty/external functions

                    val varType = ftype.withDeclarator(init.decl).resolve()
                    val name = init.decl.getName()
                    val varInit = init.initializer
                    if (varInit != null) {
                        line("var $name: ${varType.str()} = ${(varInit.castTo(varType)).generate(leftType = varType)}")
                    } else {
                        line("var $name: ${varType.str()}")
                    }
                }
            }
            else -> error("Don't know how to generate decl $it")
        }
    }

    fun FType.resolve(): FType = when {
        this is TypedefFTypeRef -> parser.typedefAliases[this.id]?.resolve() ?: error("Can't find type with id=$id")
        else -> this
    }

    fun FType.str(): String = when (this) {
        is PointerFType -> "CPointer<${this.type.str()}>"
        is StructFType -> parser.getStructTypeInfo(this.spec).name
        else -> this.toString()
    }

    class BreakScope(val name: String, val kind: Kind, val parent: BreakScope? = null) {
        enum class Kind {
            WHEN, WHILE
        }
        val level: Int = if (parent != null) parent.level + 1 else 1
        val scopeForContinue: BreakScope? get() = if (kind == Kind.WHILE) this else parent?.scopeForContinue
    }

    private var breakScope: BreakScope? = null

    val breakScopeForContinue: BreakScope? get() = breakScope?.scopeForContinue

    fun <T> breakScope(name: String, kind: BreakScope.Kind, callback: (BreakScope) -> T): T {
        val old = breakScope
        breakScope = BreakScope("$name${breakScope?.level ?: 0}", kind, old)
        try {
            return callback(breakScope!!)
        } finally {
            breakScope = old
        }
    }

    fun Indenter.generate(it: Stm): Unit = when (it) {
        is EmptyStm -> Unit
        is Stms -> {
            for (s in it.stms) generate(s)
        }
        is Return -> {
            val func = it.func ?: error("Return doesn't have linked function scope")
            if (it.expr != null) line("return ${(it.expr.castTo(func.rettype)).generate(par = false)}") else line("return")
        }
        is ExprStm -> {
            if (it.expr != null) {
                line(it.expr.generate(par = false))
            }
            Unit
        }
        is While -> {
            breakScope("while", BreakScope.Kind.WHILE) { scope ->
                line("${scope.name}@while (${(it.cond).castTo(FType.BOOL).generate(par = false)}) {")
                indent {
                    generate(it.body)
                }
                line("}")
            }
        }
        is DoWhile -> {
            breakScope("do", BreakScope.Kind.WHILE) { scope ->
                line("${scope.name}@do {")
                indent {
                    generate(it.body)
                }
                line("} while (${(it.cond).castTo(FType.BOOL).generate(par = false)})")
            }
        }
        is For -> {
            if (it.init != null) {
                val init = it.init
                when (init) {
                    is Decl -> generate(init)
                    is Expr -> line(init.generate(par = false))
                    else -> error("Not a Decl or Expr in for init init=$init (${init::class})")
                }
            }
            line("while (${(it.cond ?: IntConstant("1")).castTo(FType.BOOL).generate(par = false)}) {")
            indent {
                generate(it.body)
                if (it.post != null) {
                    line(it.post.generate())
                }
            }
            line("}")
        }
        is Switch -> {
            breakScope("when", BreakScope.Kind.WHEN) { scope ->
                val labelName = scope.name
                val tempVar = "${scope.name}_case"
                val filteredStms = it.body.stms.filter { it is DefaultCaseStm }
                line("var $tempVar = when (${it.expr.generate(par = false)})") {
                    for ((index, stm) in filteredStms.withIndex().sortedBy { if (it.value is CaseStm) -1 else +1 }) {
                        when (stm) {
                            is CaseStm -> line("${stm.expr.generate()} -> $index")
                            is DefaultStm -> line("else -> $index")
                        }
                    }
                }
                line("$labelName@while (true)") {
                    line("when ($tempVar)") {
                        for ((index, stm) in filteredStms.withIndex()) {
                            when (stm) {
                                is CaseStm -> {
                                    line("$index ->") {
                                        generate(stm.stm)
                                        line("$tempVar = ${index + 1}; continue@$labelName")
                                    }
                                }
                                is DefaultStm -> {
                                    line("$index ->") {
                                        generate(stm.stm)
                                        line("$tempVar = ${index + 1}; continue@$labelName")
                                    }
                                }
                            }
                        }
                    }
                    line("break")
                }
            }
        }
        // @TODO: Fallthrough!
        is CaseStm -> {
            line("// unexpected outer CASE ${it.expr.generate()}")
            generate(it.stm)
        }
        is DefaultStm -> {
            line("// unexpected outer DEFAULT")
            generate(it.stm)
        }
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
        is Continue -> {
            line("continue@${breakScopeForContinue?.name}")
        }
        is Break -> {
            line("break@${breakScope?.name}")
        }
        is IfElse -> {
            line("if (${it.cond.castTo(FType.BOOL).generate()}) {")
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
        is Decl -> generate(it)
        else -> error("Don't know how to generate stm $it")
    }

    fun generateParam(it: CParam): String = "${it.name}: ${it.type}"

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

    fun Expr.generate(par: Boolean = true, leftType: FType? = null): String = when (this) {
        is ConstExpr -> this.expr.generate(par = par, leftType = leftType)
        is IntConstant -> "$value"
        is DoubleConstant -> "$value"
        is Binop -> {
            val ll = l.generate()
            val rr = r.generate()
            val base = when (op) {
                "+", "-", "*", "/", "%" -> "$ll $op $rr"
                "==", "!=", "<", ">", "<=", ">=" -> "$ll $op $rr"
                "&&", "||" -> "$ll $op $rr"
                "^" -> "$ll xor $rr"
                "&" -> "$ll and $rr"
                "|" -> "$ll or $rr"
                "<<" -> "$ll shl $rr"
                ">>" -> "$ll shr $rr"
                else -> TODO("Binop $op")
            }
            if (par) "($base)" else base
        }
        is AssignExpr -> {
            val ll = l.generate()
            val rr = r.castTo(l.type).generate()
            val base = when (op) {
                "=", "+=", "-=", "*=", "/=", "%=" -> "$ll $op $rr"
                "&=" -> "$ll = $ll and $rr"
                "|=" -> "$ll = $ll or $rr"
                "^=" -> "$ll = $ll xor $rr"

                "&&=" -> "$ll = $ll && $rr"
                "||=" -> "$ll = $ll || $rr"
                "<<=" -> "$ll = $ll shl $rr"
                ">>=" -> "$ll = $ll shr $rr"

                else -> TODO("AssignExpr $op")
            }
            if (par) "($base)" else base
        }
        is Id -> name
        is PostfixExpr -> {
            val left = lvalue.generate()
            when (op) {
                "++" -> "$left = $left + 1"
                "--" -> "$left = $left - 1"
                else -> TODO("Don't know how to generate postfix operator '$op'")
            }
        }
        is CallExpr -> expr.generate() + "(" + args.joinToString(", ") { it.generate() } + ")"
        is StringConstant -> "$raw.ptr"
        is CharConstant -> "$raw.toInt()"
        is CastExpr -> "${expr.generate(leftType = leftType)}.to$type()"
        is ArrayAccessExpr -> "${expr.generate()}[${index.generate(par = false)}]"
        is UnaryExpr -> {
            when (op) {
                "*" -> "((${expr.generate()})[0])"
                "&" -> "&${expr.generate()}" // Reference
                "-" -> "-${expr.generate()}"
                "+" -> "+${expr.generate()}"
                "!" -> "!(${expr.generate()})"
                "~" -> "(${expr.generate()}).inv()"
                "--" -> "--${expr.generate()}"
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
                        val field = structType.fields[index++]
                        inits[field.name] = item.initializer.generate(leftType = field.type)
                    }
                    val setFields = structType.fields.associate { it.name to (inits[it.name] ?: it.type.defaultValue()) }
                    "$structName(${setFields.map { "${it.key} = ${it.value}" }.joinToString(", ")})"
                }
                is PointerFType -> {
                    "listOf(" + this.items.joinToString(", ") { it.initializer.generate(leftType = ltype.type) } + ")"
                }
                is ArrayFType -> {
                    "listOf(" + this.items.joinToString(", ") { it.initializer.generate(leftType = ltype.type) } + ")"
                }
                else -> {
                    "/*not a valid array init type: $ltype */ listOf(" + this.items.joinToString(", ") { it.initializer.generate() } + ")"
                }
            }
        }
        is ConditionalExpr -> {
            "(if (${this.cond.generate()}) ${this.etrue.generate()} else ${this.efalse.generate()})"
        }
        is FieldAccessExpr -> {
            "${this.expr.generate()}.${this.id}"
        }
        is CommaExpr -> {
            "run { ${this.exprs.joinToString("; ") { it.generate(par = false) }} }"
        }
        is SizeOfAlignTypeExpr -> {
            "" + this.ftype + ".SIZE_BYTES"
            //this.kind + "(" + this.ftype +  ")"
        }
        else -> error("Don't know how to generate expr $this (${this::class})")
    }

    fun FType.defaultValue(): String = when (this) {
        is IntFType -> "0"
        is FloatFType -> "0.0"
        is PointerFType -> "CPointer(0)"
        is TypedefFTypeRef -> this.resolve().defaultValue()
        is StructFType -> "${this.getProgramType().name}()"
        else -> error("Unknown defaultValue for ${this::class}: $this")
    }

    fun StructFType.getProgramType() = parser.getStructTypeInfo(this.spec)
    fun FType.getProgramType() = when (this) {
        is StructFType -> getProgramType()
        is TypedefFTypeRef -> parser.getStructTypeInfo(this.id)
        else -> error("$this")
    }
}