package com.soywiz.ktcc

open class FType {
    companion object {
        val VOID = IntFType(null, 0, null)
        val VOID_PTR = PointerFType(VOID, false)
        val BOOL = BoolFType
        val CHAR = IntFType(null, 0, 1)
        val INT = IntFType(null, 0, 4)
        val FLOAT = FloatFType(4)
        val DOUBLE = FloatFType(8)
        val CHAR_PTR = PointerFType(CHAR, false)
        val UNKNOWN = UnknownFType("unknown")
        val UNRESOLVED = UnknownFType("unresolved")
    }

    var resolved: FType? = null
}
object BoolFType : FType() {
    override fun toString(): String = "Bool"
}
object VariadicFType : FType() {
    override fun toString(): String = "Any?"
}
object DummyFType : FType()
data class IntFType(val signed: Boolean?, val long: Int, var size: Int?) : FType() {
    val rsigned get() = signed ?: true

    val typeSize = when (size ?: 4) {
        1 -> 1
        2 -> 2
        4 -> if (long >= 1) 8 else 4
        else -> TODO("IntFType")
    }

    override fun toString(): String {
        if (signed == null && long == 0 && size == null) return "Unit"
        return when (typeSize) {
            1 -> if (rsigned) "Byte" else "UByte"
            2 -> if (rsigned) "Short" else "UShort"
            4 -> if (rsigned) "Int" else "UInt"
            8 -> if (rsigned) "Long" else "ULong"
            else -> TODO("IntFType")
        }
    }
}

data class FloatFType(val size: Int) : FType() {
    override fun toString(): String = when (size) {
        4 -> "Float"
        8 -> "Double"
        //12 -> "Real"
        else -> TODO("FloatFType")
    }
}

abstract class BasePointerFType() : FType() {
    abstract val elementType: FType
}

data class PointerFType(override val elementType: FType, val const: Boolean) : BasePointerFType() {
    //override fun toString(): String = "$type*"
    override fun toString(): String = "CPointer<$elementType>"
}

data class ArrayFType(override val elementType: FType, val size: Int?) : BasePointerFType() {
    var declarator: ArrayDeclarator? = null
    override fun toString(): String = if (size != null) "$elementType[$size]" else "$elementType[]"
}

fun StructFType.getStructTypeInfo(parser: ProgramParser): StructTypeInfo {
    return parser.getStructTypeInfo(this.spec)
}

data class StructFType(val spec: StructUnionTypeSpecifier) : FType() {
    override fun toString(): String = "struct ${spec.id}"
}

data class UnknownFType(val reason: Any?) : FType() {
    override fun toString(): String = "UnknownFType($reason)"
}

data class TypedefFTypeRef(val id: String) : FType() {
    override fun toString(): String = id
}

data class TypedefFTypeName(val id: String) : FType() {
    override fun toString(): String = id
}

fun combine(l: FType, r: FType): FType {
    if (l is IntFType && r is IntFType) {
        return IntFType(r.signed ?: l.signed, l.long + r.long, r.size ?: l.size)
    } else {
        return r
    }
}

fun generateFinalType(type: TypeSpecifier): FType {
    when (type) {
        is ListTypeSpecifier -> {
            val items = type.items
            var res: FType = generateFinalType(items.first())
            for (n in 1 until items.size) res = combine(res, generateFinalType(items[n]))
            return res
        }
        is BasicTypeSpecifier -> {
            when (type.id) {
                BasicTypeSpecifier.Kind.VOID -> return IntFType(null, 0, null)
                BasicTypeSpecifier.Kind.UNSIGNED -> return IntFType(false, 0, null)
                BasicTypeSpecifier.Kind.SIGNED -> return IntFType(true, 0, null)
                BasicTypeSpecifier.Kind.CHAR -> return IntFType(null, 0, 1)
                BasicTypeSpecifier.Kind.SHORT -> return IntFType(null, 0, 2)
                BasicTypeSpecifier.Kind.INT -> return IntFType(null, 0, 4)
                BasicTypeSpecifier.Kind.LONG -> return IntFType(null, +1, null)
                BasicTypeSpecifier.Kind.FLOAT -> return FloatFType(4)
                BasicTypeSpecifier.Kind.DOUBLE -> return FloatFType(8)
                else -> error("${type.id}")
            }
        }
        is StructUnionTypeSpecifier -> {
            return StructFType(type)
        }
        is StorageClassSpecifier -> {
            return IntFType(null, 0, null)
        }
        is TypedefTypeSpecifierName -> {
            return TypedefFTypeName(type.id)
        }
        is TypedefTypeSpecifierRef -> {
            return TypedefFTypeRef(type.id)
        }
        is TypeQualifier -> {
            return IntFType(null, 0, null)
        }
        is TypeName -> {
            if (type.abstractDecl != null) TODO("type.abstractDecl != null")
            return type.specifiers.toFinalType()
        }
        is VariadicTypeSpecifier -> {
            return VariadicFType
        }
    }
    TODO("${type::class}: $type")
}

fun generatePointerType(type: FType, pointer: Pointer): FType {
    val base = PointerFType(type, false)
    return if (pointer.parent != null) generatePointerType(base, pointer.parent) else base
}

data class FunctionFType(val name: String, val retType: FType, val args: List<CParam>, var variadic: Boolean) : FType() {
    override fun toString(): String {
        val args2 = if (variadic) args + listOf("...") else args
        return "$retType $name(${args2.joinToString(", ")})"
    }
}

fun generateFinalType(type: FType, declarator: Declarator): FType {
    when (declarator) {
        is DeclaratorWithPointer -> {
            val pointer = declarator.pointer
            val decl = generateFinalType(type, declarator.declarator)
            if (decl is FunctionFType) {
                return FunctionFType(decl.name, generatePointerType(decl.retType, pointer), decl.args, decl.variadic)
            } else {
                return generatePointerType(decl, pointer)
            }
        }
        is IdentifierDeclarator -> {
            return type
        }
        is ParameterDeclarator -> {
            if (declarator.base !is IdentifierDeclarator) error("Unsupported: declarator.base !is IdentifierDeclarator")
            return FunctionFType(declarator.base.id.name, type, declarator.declsWithoutVariadic.map { it.toCParam() }, declarator.variadic)
        }
        is ArrayDeclarator -> {
            return ArrayFType(generateFinalType(type, declarator.base), declarator.expr?.constantEvaluate()?.toInt()).apply {
                this.declarator = declarator
            }
        }
        is VarargDeclarator -> {
            return VariadicFType
        }
        else -> TODO("declarator: $declarator")
    }
    return type
}

fun generateFinalType(type: TypeSpecifier, declarator: Declarator): FType = generateFinalType(generateFinalType(type), declarator)

fun FType.withDeclarator(declarator: Declarator?): FType = if (declarator != null) generateFinalType(this, declarator) else this

fun FType.withDeclarator(declarator: AbstractDeclarator?): FType {
    if (declarator == null) return this
    if (declarator.ptr == null) return this
    return generatePointerType(this, declarator.ptr)
}

fun TypeSpecifier.toFinalType() = generateFinalType(this)
fun TypeSpecifier.toFinalType(declarator: Declarator?) = if (declarator != null) {
    generateFinalType(this, declarator)
} else {
    generateFinalType(this)
}

fun Declarator.getName(): String = getNameId().id.name

fun Declarator.getNameId(): IdentifierDeclarator = when (this) {
    is IdentifierDeclarator -> this
    is DeclaratorWithPointer -> declarator.getNameId()
    is ParameterDeclarator -> base.getNameId()
    is ArrayDeclarator -> base.getNameId()
    is VarargDeclarator -> id
    else -> TODO("TypeSpecifier.getName: $this")
}
interface FTypeResolver {
    fun resolve(type: FType): FType
}

fun FType.canAssignTo(dst: FType, resolver: FTypeResolver): Boolean {
    val src = resolver.resolve(this)
    val dst = resolver.resolve(dst)

    if (src == dst) return true
    if (src == FType.VOID || dst == FType.VOID && src != dst) return false

    if (dst is BasePointerFType && src is IntFType) return true // Increment pointer etc.

    if (src is BasePointerFType && src.elementType == FType.VOID) return true
    if (dst is BasePointerFType && dst.elementType == FType.VOID) return true
    if (src is BasePointerFType && dst is PointerFType) {
        return src.elementType == dst.elementType // Ignore const
    }
    if (src is IntFType && dst is IntFType) {
        return true // @TODO: warnings for long to shorter types
    }
    val srcIsNumber = src is IntFType || src is BoolFType || src is FloatFType
    val dstIsNumber = dst is IntFType || dst is BoolFType || dst is FloatFType
    if (srcIsNumber && dstIsNumber) return true
    if (src is ArrayFType && dst is PointerFType && src.elementType == dst.elementType) return true
    return src == dst
}