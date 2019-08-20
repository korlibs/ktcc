package com.soywiz.ktcc.parser

import com.soywiz.ktcc.serializable.*
import com.soywiz.ktcc.types.*
import com.soywiz.ktcc.util.*

@Serializable
abstract class Node {
    var tagged = false
    var pos: Int = -1
    var endPos: Int = -1
    var func: FunctionScope? = null
    abstract fun visitChildren(visit: ChildrenVisitor)
}

@Serializable
data class DummyNode(val dummy: Boolean) : Node() {
    override fun visitChildren(visit: ChildrenVisitor) = Unit
}

@Serializable
data class IdDecl(val name: String) : Node() {
    override fun toString(): String = name
    override fun visitChildren(visit: ChildrenVisitor) = Unit
}

//data class Local(val id: Id, override val type: FType) : Expr() {
//    override fun visitChildren(visit: ChildrenVisitor) = visit(id)
//
//}
//data class Global(val id: Id, override val type: FType) : Expr() {
//    override fun visitChildren(visit: ChildrenVisitor) = visit(id)
//}

@Serializable
data class Id(
    val name: String,
    val symbol: SymbolInfo?,
    override val type: Type = symbol?.type ?: Type.UNRESOLVED,
    val isGlobal: Boolean = symbol?.scope?.parent == null
) : Expr() {
    init {
        validate(name)
    }

    companion object {
        fun isValid(name: String): Boolean = isValidMsg(name) == null
        fun isValidMsg(name: String): String? {
            //if (name in keywords) return "Id can't be a keyword"
            if (name.isEmpty()) return "Empty is not a valid identifier"
            if (!name[0].isAlphaOrUnderscore()) return "Identifier must start with a-zA-Z_"
            if (!name.all { it.isAlnumOrUnderscore() }) return "Identifier can only contain a-zA-Z0-9_"
            return null
        }

        fun validate(name: String): String {
            throw ExpectException(isValidMsg(name) ?: return name)
        }
    }

    override fun visitChildren(visit: ChildrenVisitor) = Unit
    override fun toString(): String = name
}

@Serializable
data class StringConstant(val raw: String) : Expr() {
    override val type get() = Type.CHAR_PTR
    val value get() = raw.cunquoted

    init {
        validate(raw)
    }

    companion object {
        fun isValid(data: String): Boolean = isValidMsg(data) == null
        fun isValidMsg(data: String): String? {
            if (!data.startsWith('"')) return "Not starting with '\"'"
            return null
        }

        fun validate(data: String) {
            throw ExpectException(isValidMsg(data) ?: return)
        }
    }

    override fun visitChildren(visit: ChildrenVisitor) = Unit
}

@Serializable
data class CharConstant(val raw: String) : Expr() {
    override val type get() = Type.CHAR

    val value get() = raw.cunquoted.getOrElse(0) { '\u0000' }

    init {
        validate(raw)
    }

    companion object {
        fun isValid(data: String): Boolean = isValidMsg(data) == null
        fun isValidMsg(data: String): String? {
            if (!data.startsWith('\'')) return "Not starting with \"\'\""
            return null
        }

        fun validate(data: String) {
            throw ExpectException(isValidMsg(data) ?: return)
        }
    }

    override fun visitChildren(visit: ChildrenVisitor) = Unit
}

@Serializable
abstract class NumericConstant : Expr() {
    abstract val nvalue: Number
    override fun visitChildren(visit: ChildrenVisitor) = Unit
}

@Serializable
class NumberConstant(override val nvalue: Number, override val type: Type) : NumericConstant() {
}

fun IntConstant(value: Int): IntConstant = IntConstant("$value")

@Serializable
data class IntConstant(val data: String) : NumericConstant() {
    override val type get() = Type.INT

    val dataWithoutSuffix = data.removeSuffix("u").removeSuffix("l").removeSuffix("L")

    val value
        get() = when {
            dataWithoutSuffix.startsWith("0x") || dataWithoutSuffix.startsWith("0X") -> dataWithoutSuffix.substring(2).toInt(16)
            dataWithoutSuffix.startsWith("0") -> dataWithoutSuffix.toInt(8)
            else -> dataWithoutSuffix.toInt()
        }

    override val nvalue: Number = value

    init {
        validate(data)
    }

    companion object {
        fun isValid(data: String): Boolean = isValidMsg(data) == null
        fun isValidMsg(data: String): String? {
            if (data.contains(DOT)) return "Decimal"
            if (data.startsWith('-')) return null // Negated number
            if (data.startsWith("0x")) return null // Hex
            if (data.startsWith("0")) return null // Octal
            if (data.firstOrNull() in '0'..'9' && !data.contains('.') && !data.endsWith('f')) return null
            return "Constant can only contain digits"
        }

        fun validate(data: String) {
            throw ExpectException(isValidMsg(data) ?: return)
        }
    }

    override fun toString(): String = data
}

fun DecimalConstant(value: Double) = DecimalConstant("$value")

@Serializable
data class DecimalConstant(val data: String) : NumericConstant() {
    val dataWithoutSuffix = data.removeSuffix("f")
    val value get() = dataWithoutSuffix.toDouble()

    override val type = if (data.endsWith("f")) Type.FLOAT else Type.DOUBLE

    override val nvalue: Number = value

    init {
        validate(data)
    }

    companion object {
        fun isValid(data: String): Boolean = isValidMsg(data) == null
        fun isValidMsg(data: String): String? {
            if (data.firstOrNull() in '0'..'9' || data.firstOrNull() == '.') return null
            return "Constant can only contain digits"
        }

        fun validate(data: String) {
            throw ExpectException(isValidMsg(data) ?: return)
        }
    }

    override fun visitChildren(visit: ChildrenVisitor) = Unit
    override fun toString(): String = data
}

@Serializable
abstract class Expr : Node() {
    abstract val type: Type
}

fun Expr.not() = Unop("!", this)

abstract class LValue : Expr()

@Serializable
data class CommaExpr(val exprs: List<Expr>) : Expr() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(exprs)
    override val type: Type get() = exprs.last().type
}

@Serializable
data class ConstExpr(val expr: Expr) : Expr() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(expr)
    override val type: Type get() = expr.type
}

@Serializable
abstract class SingleOperandExpr() : Expr() {
    abstract val operand: Expr
}

@Serializable
abstract class BaseUnaryOp() : SingleOperandExpr() {
    abstract val op: String
}

@Serializable
data class Unop(override val op: String, val rvalue: Expr) : BaseUnaryOp() {
    override val operand get() = rvalue

    val rvalueType = rvalue.type

    val extypeR = when (op) {
        "!" -> Type.BOOL
        else -> null
    }

    override fun visitChildren(visit: ChildrenVisitor) = visit(rvalue)

    override val type: Type = when (op) {
        "*" -> if (rvalueType is BasePointerType) rvalueType.elementType else rvalueType
        "&" -> PointerType(rvalueType, false)
        else -> extypeR ?: rvalueType
    }
}

@Serializable
data class PostfixExpr(val lvalue: Expr, override val op: String) : BaseUnaryOp() {
    override val operand get() = lvalue
    override val type: Type get() = lvalue.type // @TODO: Fix Type
    override fun visitChildren(visit: ChildrenVisitor) = visit(lvalue)
}

@Serializable
data class AssignExpr(val l: Expr, val op: String, val r: Expr) : Expr() {
    override val type: Type get() = l.type // @TODO: Fix Type
    override fun visitChildren(visit: ChildrenVisitor) = visit(l, r)
}

// @TODO: avoid executing functions several times
fun AssignExpr.toSimpleAssignExpr(): SimpleAssignExpr = when (op) {
    "=" -> SimpleAssignExpr(l, r, this)
    else -> SimpleAssignExpr(l, Binop(l, op.substring(0, op.length - 1), r), this)
}

@Serializable
data class SimpleAssignExpr(val l: Expr, val r: Expr, val base: AssignExpr? = null) : Expr() {
    override val type: Type get() = l.type // @TODO: Fix Type
    override fun visitChildren(visit: ChildrenVisitor) = visit(l, r)
}

@Serializable
data class ArrayAccessExpr(val expr: Expr, val index: Expr, val isDeref: Boolean = false) : LValue() {
    val arrayType = expr.type
    override fun visitChildren(visit: ChildrenVisitor) = visit(expr, index)
    override val type: Type
        get() = when (arrayType) {
            is PointerType -> arrayType.elementType
            is ArrayType -> arrayType.elementType
            else -> Type.INT
        }
}

@Serializable
data class FieldAccessExpr(val left: Expr, val id: IdDecl, val indirect: Boolean, override val type: Type, val leftType: Type) : LValue() {
    val structType = if (leftType is PointerType) leftType.elementType as? StructType? else leftType as? StructType
    override fun visitChildren(visit: ChildrenVisitor) = visit(left)
}

@Serializable
data class CallExpr(val expr: Expr, val args: List<Expr>) : Expr() {
    override val type: Type
        get() {
            val etype = expr.type
            return when (etype) {
                is FunctionType -> etype.retType
                else -> etype
            }
        }

    override fun visitChildren(visit: ChildrenVisitor) = run { visit(expr); visit(args) }
}

@Serializable
data class BinOperatorsExpr(val exprs: List<Expr>, val ops: List<String>) : Expr() {
    override val type: Type get() = exprs.first().type

    companion object {
        val precedences = listOf(
            "*", "/", "%",
            "+", "-",
            "<<", ">>",
            "<", "<=", ">", ">=",
            "==", "!=",
            "&",
            "|",
            "&&",
            "||",
            "=", "*=", "/=", "%=", "+=", "-=", "<<=", ">>=", "&=", "^=", "|="
        ).withIndex().associate { it.value to it.index }

        fun compareOps(l: String, r: String): Int = (precedences[l] ?: -1).compareTo(precedences[r] ?: -1)
    }

    override fun visitChildren(visit: ChildrenVisitor) = run { visit(exprs) }

    class MutBinop(var l: Expr, val op: String, var r: Expr) : Expr() {
        val rightmost: MutBinop get() = if (r is MutBinop) (r as MutBinop).rightmost else this
        override fun visitChildren(visit: ChildrenVisitor) = TODO()
        override val type: Type get() = TODO()
        override fun toString(): String = "($l $op $r)"
        fun Expr.toBinopI(): Expr = if (this is MutBinop) Binop(l.toBinopI(), op, r.toBinopI()) else this
        fun toBinop() = this.toBinopI()
    }

    //private fun expandRec(out: Binop, exprs: ListReader<Expr>, ops: ListReader<String>): Binop {
    //    if (exprs.eof || ops.eof) return out
    //    val next = exprs.read()
    //    val op = ops.read()
    //    return if (compareOps(out.op, op) > 0) Binop(out, op, expandRec(next, exprs, ops)) else Binop(out, op, next)
    //}
    //fun expand(): Expr = expandRec(Binop(exprs[0], ops[0], exprs[1]), exprs.drop(2).reader(IntConstant(0)), ops.drop(1).reader(""))

    fun expand(): Expr {
        var out = MutBinop(exprs[0], ops[0], exprs[1])
        for ((next, op) in exprs.drop(2).zip(ops.drop(1))) {
            if (compareOps(out.op, op) > 0) {
                out.rightmost.r = MutBinop(out.rightmost.r, op, next)
            } else {
                out = MutBinop(out, op, next)
            }
        }
        return out.toBinop()
        //return out

        //var out = exprs.first()
        //var first = true
        //for ((next, op) in exprs.drop(1).zip(ops)) {
        //    if (!first && out is Binop && compareOps(out.op, op) > 0) {
        //        //println("prevL=${out.l}, prevR=${out.r}, prevOP=${out.op}, nextOP=${op}, next=${next}")
        //        out = Binop(out.l, out.op, Binop(out.r, op, next))
        //        //println(" ---> $out")
        //    } else {
        //        out = Binop(out, op, next)
        //    }
        //    first = false
        //}
        //return out
    }
}

@Serializable
data class Binop(val l: Expr, val op: String, val r: Expr) : Expr() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(l, r)

    val computed = Type.binop(l.type, op, r.type)
    val extypeL = computed.l
    val extypeR = computed.r
    override val type: Type = computed.out

    override fun toString(): String = "($l $op $r)"
}

@Serializable
abstract class Stm : Node()

@Serializable
data class RawStm(val raw: String) : Stm() {
    override fun visitChildren(visit: ChildrenVisitor) = Unit
}

@Serializable
data class CommentStm(val comment: String) : Stm() {
    val multiline = comment.contains('\n')
    override fun visitChildren(visit: ChildrenVisitor) = Unit
}

@Serializable
data class EmptyStm(val reason: String) : Stm() {
    override fun visitChildren(visit: ChildrenVisitor) = Unit
}

@Serializable
data class IfElse(val cond: Expr, val strue: Stm, val sfalse: Stm?) : Stm() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(cond, strue).also { if (sfalse != null) visit(sfalse) }
}

@Serializable
abstract class Loop : Stm() {
    abstract val body: Stm
    var addScope = true
    var onBreak: (() -> Stm)? = null
    var onContinue: (() -> Stm)? = null
}

@Serializable
data class While(val cond: Expr, override val body: Stm) : Loop() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(cond, body)
}

@Serializable
data class DoWhile(override val body: Stm, val cond: Expr) : Loop() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(body, cond)
}

@Serializable
data class For(val init: Node?, val cond: Expr?, val post: Expr?, override val body: Stm) : Loop() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(init).also { visit(cond) }.also { visit(post) }.also { visit(body) }
}

@Serializable
data class Goto(val id: IdDecl) : Stm() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(id)
}

@Serializable
data class Continue(val dummy: Boolean = true) : Stm() {
    override fun visitChildren(visit: ChildrenVisitor) = Unit
}

@Serializable
data class Break(val dummy: Boolean = true) : Stm() {
    override fun visitChildren(visit: ChildrenVisitor) = Unit
}

@Serializable
data class Return(val expr: Expr?) : Stm() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(expr)
}

@Serializable
abstract class SwitchBase() : Stm() {
    abstract val subject: Expr
    abstract val body: Stms
    val bodyCases by lazy { body.stms.filterIsInstance<DefaultCaseStm>().sortedBy { if (it is CaseStm) -1 else +1 } }
    override fun visitChildren(visit: ChildrenVisitor) = visit(subject, body)
}

@Serializable
data class Switch(override val subject: Expr, override val body: Stms) : SwitchBase()

@Serializable
data class SwitchWithoutFallthrough(override val subject: Expr, override val body: Stms) : SwitchBase()

@Serializable
data class ExprStm(val expr: Expr?) : Stm() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(expr)
}

@Serializable
data class LabeledStm(val id: IdDecl, val stm: Stm) : Stm() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(id, stm)
}

@Serializable
abstract class DefaultCaseStm() : Stm() {
    abstract val optExpr: Expr?
    abstract val stm: Stms
}

@Serializable
data class CaseStm(val expr: ConstExpr, override val stm: Stms) : DefaultCaseStm() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(expr, stm)
    override val optExpr: Expr? get() = expr
}

@Serializable
data class DefaultStm(override val stm: Stms) : DefaultCaseStm() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(stm)
    override val optExpr: Expr? get() = null
}

@Serializable
data class Stms(val stms: List<Stm>) : Stm() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(stms)
}

fun Stm.stms(): Stms = if (this is Stms) this else Stms(listOf(this))

@Serializable
abstract class CParamBase() : Node() {
    abstract val type: Type
}

@Serializable
data class CParamVariadic(val dummy: Unit = Unit) : CParamBase() {
    override val type: Type = VariadicType
    override fun visitChildren(visit: ChildrenVisitor) = Unit
    override fun toString(): String = "..."
}

@Serializable
data class CParam(val decl: ParameterDecl, override val type: Type, val nameId: IdentifierDeclarator) : CParamBase() {
    val name get() = nameId.id

    override fun visitChildren(visit: ChildrenVisitor) = visit(decl, nameId)
    override fun toString(): String = "$type $name"
}

@Serializable
abstract class Decl : Stm()

@Serializable
data class ParsedDeclaration(val name: String, val type: Type, val init: Expr?)

@Serializable
data class VarDeclaration(val specifiers: ListTypeSpecifier, val initDeclaratorList: List<InitDeclarator>) : Decl() {
    val parsedBaseType = specifiers.toFinalType()
    val parsedList = initDeclaratorList.map { ParsedDeclaration(it.declarator.getName(), parsedBaseType.withDeclarator(it.declarator), it.initializer) }

    override fun visitChildren(visit: ChildrenVisitor) = visit(specifiers).also { visit(initDeclaratorList) }
}

@Serializable
data class FuncDeclaration(
    val rettype: ListTypeSpecifier,
    val name: IdDecl,
    val params: List<CParam>,
    val body: Stms,
    val varargs: Boolean,
    val funcType: FunctionType
) : Decl() {
    val paramsWithVariadic: List<CParamBase> = if (varargs) params + listOf(CParamVariadic()) else params
    override fun visitChildren(visit: ChildrenVisitor) = visit(name, rettype, body)
}

@Serializable
data class CastExpr(val expr: Expr, override val type: Type) : Expr() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(expr)
}

@Serializable
abstract class SizeOfAlignExprBase() : Expr() {
    abstract val ftype: Type
}

@Serializable
data class SizeOfAlignTypeExpr(val kind: String, val typeName: TypeName) : SizeOfAlignExprBase() {
    override val type: Type get() = Type.INT
    override val ftype by lazy { typeName.specifiers.toFinalType().withDeclarator(typeName.abstractDecl) }
    override fun visitChildren(visit: ChildrenVisitor) = visit(typeName)
}

@Serializable
data class SizeOfAlignExprExpr(val expr: Expr) : SizeOfAlignExprBase() {
    override val ftype = expr.type
    override val type: Type get() = Type.INT
    override fun visitChildren(visit: ChildrenVisitor) = visit(expr)
}

@Serializable
data class TenaryExpr(val cond: Expr, val etrue: Expr, val efalse: Expr) : Expr() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(cond, etrue, efalse)
    override val type: Type get() = Type.common(etrue.type, efalse.type)
}

data class ParsedProgram(val program: Program, val parser: ProgramParser)

@Serializable
data class Program(val decls: List<Decl>) : Node() {
    val declarations = decls.filterIsInstance<VarDeclaration>()
    val funcDecl = decls.filterIsInstance<FuncDeclaration>()
    val funcDeclByName = funcDecl.associateBy { it.name.name }
    fun getFunctionOrNull(name: String): FuncDeclaration? = funcDeclByName[name]
    fun getFunction(name: String): FuncDeclaration = getFunctionOrNull(name) ?: error("Can't find function named '$name'")
    override fun visitChildren(visit: ChildrenVisitor) = visit(decls)
}

@Serializable
data class DesignOptInit(val design: DesignatorList?, val initializer: Expr) : Node() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(design, initializer)
}

@Serializable
data class ArrayInitExpr(val items: List<DesignOptInit>, val ltype: Type) : Expr() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(items)
    override val type: Type get() = ltype
}

@Serializable
abstract class Declarator : Node()

@Serializable
data class ParameterDecl(val specs: ListTypeSpecifier, val declarator: Declarator) : Node() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(specs, declarator)
}

@Serializable
data class StructDeclarator(val declarator: Declarator?, val bit: ConstExpr?) : Node() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(declarator, bit)
}

@Serializable
data class StructDeclaration(val specifiers: ListTypeSpecifier, val declarators: List<StructDeclarator>) : Node() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(specifiers).also { visit(declarators) }
}

@Serializable
data class Pointer(val qualifiers: List<TypeQualifier>, val parent: Pointer?) : Node() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(qualifiers).also { visit(parent) }
}

@Serializable
data class VarargDeclarator(val id: IdentifierDeclarator) : Declarator() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(id)
}

@Serializable
data class DeclaratorWithPointer(val pointer: Pointer, val declarator: Declarator) : Declarator() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(pointer, declarator)
}

@Serializable
data class IdentifierDeclarator(val id: IdDecl) : Declarator() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(id)
}

@Serializable
data class CompoundDeclarator(val decls: List<Declarator>) : Declarator() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(decls)
}

@Serializable
data class ParameterDeclarator(val base: Declarator, val decls: List<ParameterDecl>) : Declarator() {
    val variadic = decls.any { it.declarator is VarargDeclarator }
    val declsWithoutVariadic = decls.filter { it.declarator !is VarargDeclarator }
    override fun visitChildren(visit: ChildrenVisitor) = visit(base).also { visit(decls) }
}

@Serializable
data class ArrayDeclarator(val base: Declarator, val typeQualifiers: List<TypeQualifier>, val expr: Expr?, val static0: Boolean, val static1: Boolean) :
    Declarator() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(base).also { visit(typeQualifiers) }.also { visit(expr) }
}

@Serializable
abstract class DeclaratorPostfix : Node() {
    abstract fun toDeclarator(base: Declarator): Declarator
}

@Serializable
data class ParamDeclaratorPostfix(val params: List<ParameterDecl>) : DeclaratorPostfix() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(params)
    override fun toDeclarator(base: Declarator): Declarator = ParameterDeclarator(base, params)
}

@Serializable
data class ArrayDeclaratorPostfix(val typeQualifiers: List<TypeQualifier>, val expr: Expr?, val static0: Boolean, val static1: Boolean) : DeclaratorPostfix() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(typeQualifiers).also { visit(expr) }
    override fun toDeclarator(base: Declarator): Declarator = ArrayDeclarator(base, typeQualifiers, expr, static0, static1)
}

@Serializable
abstract class Designator : Node()

@Serializable
data class ArrayAccessDesignator(val constant: ConstExpr) : Designator() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(constant)
}

@Serializable
data class FieldAccessDesignator(val field: Id) : Designator() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(field)
}

@Serializable
data class DesignatorList(val list: List<Designator>) : Node() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(list)
}

@Serializable
data class InitDeclarator(val declarator: Declarator, val initializer: Expr?, val type: Type) : Node() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(declarator, initializer)
}

@Serializable
abstract class TypeSpecifier : Node()

@Serializable
data class VariadicTypeSpecifier(val id: IdDecl) : TypeSpecifier() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(id)
}

//fun List<TypeSpecifier>.withoutTypedefs() = this.filter { ((it !is StorageClassSpecifier) || it.kind != StorageClassSpecifier.Kind.TYPEDEF) && it !is TypedefTypeSpecifierName }
@Serializable
data class ListTypeSpecifier(val items: List<TypeSpecifier>) : TypeSpecifier() {
    fun isEmpty() = items.isEmpty()
    override fun visitChildren(visit: ChildrenVisitor) = visit(items)
    val hasTypedef = items.any { it is StorageClassSpecifier && it.kind == StorageClassSpecifier.Kind.TYPEDEF }
    //val typedefId = items.filterIsInstance<TypedefTypeSpecifierName>().firstOrNull()?.id
}

@Serializable
data class AtomicTypeSpecifier(val id: Node) : TypeSpecifier() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(id)
}

@Serializable
data class BasicTypeSpecifier(val id: Kind) : TypeSpecifier() {
    override fun visitChildren(visit: ChildrenVisitor) = Unit
    enum class Kind(override val keyword: String) : KeywordEnum {
        VOID("void"), CHAR("char"), SHORT("short"), INT("int"), LONG("long"), FLOAT("float"), DOUBLE("double"), SIGNED("signed"), UNSIGNED("unsigned"), BOOL("_Bool"), COMPLEX(
            "_Complex"
        );

        companion object : KeywordEnum.Companion<Kind>({ values() })
    }
}
//data class TypedefTypeSpecifierName(val id: String): TypeSpecifier() {
//    override fun visitChildren(visit: ChildrenVisitor) = Unit
//}

@Serializable
data class RefTypeSpecifier(val id: String, val type: Type) : TypeSpecifier() {
    override fun visitChildren(visit: ChildrenVisitor) = Unit
}

@Serializable
data class AnonymousTypeSpecifier(val kind: String, val id: Id?) : TypeSpecifier() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(id)
}

@Serializable
data class StructUnionTypeSpecifier(val kind: String, val id: IdDecl?, val decls: List<StructDeclaration>) : TypeSpecifier() {
    lateinit var info: StructTypeInfo
    override fun visitChildren(visit: ChildrenVisitor) = visit(id).also { visit(decls) }
}

@Serializable
data class StructUnionRefTypeSpecifier(val kind: String, val id: IdDecl?) : TypeSpecifier() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(id)
}

@Serializable
data class StorageClassSpecifier(val kind: Kind) : TypeSpecifier() {
    override fun visitChildren(visit: ChildrenVisitor) = Unit
    enum class Kind(override val keyword: String) : KeywordEnum {
        TYPEDEF("typedef"), EXTERN("extern"), STATIC("static"), THREAD_LOCAL("_Thread_local"), AUTO("auto"), REGISTER("register");

        companion object : KeywordEnum.Companion<Kind>({ values() })
    }
}

@Serializable
data class TypeQualifier(val kind: Kind) : TypeSpecifier() {
    override fun visitChildren(visit: ChildrenVisitor) = Unit
    enum class Kind(override val keyword: String) : KeywordEnum {
        CONST("const"), RESTRICT("restrict"), VOLATILE("volatile"), ATOMIC("_Atomic");

        companion object : KeywordEnum.Companion<Kind>({ values() })
    }
}

@Serializable
data class FunctionSpecifier(val kind: String) : TypeSpecifier() {
    override fun visitChildren(visit: ChildrenVisitor) = Unit
}

@Serializable
data class AlignAsSpecifier(val info: Node) : TypeSpecifier() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(info)
}

@Serializable
data class TypeName(val specifiers: ListTypeSpecifier, val abstractDecl: AbstractDeclarator?) : TypeSpecifier() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(specifiers, abstractDecl)
}

@Serializable
open class AbstractDeclarator(val ptr: Pointer?, val adc: Node?) : Node() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(ptr, adc)
}

@Serializable
class EnumTypeSpecifier(val id: String?, val items: List<EnumItemDef>?) : TypeSpecifier() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(items)//.also { visit(id) }
}

@Serializable
class EnumItemDef(val id: IdDecl, val expr: Expr?) : Node() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(id, expr)
}
