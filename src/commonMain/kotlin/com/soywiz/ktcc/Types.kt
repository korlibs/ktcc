package com.soywiz.ktcc

open class FType {
    companion object {
        val VOID = IntFType(null, 0, null)
        val BOOL = BoolFType
        val CHAR = IntFType(null, 0, 1)
        val INT = IntFType(null, 0, 4)
        val FLOAT = FloatFType(4)
        val DOUBLE = FloatFType(8)
        val CHAR_PTR = PointerFType(CHAR, false)
    }
}
object BoolFType : FType() {
    override fun toString(): String = "Bool"
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

data class PointerFType(val type: FType, val const: Boolean) : FType() {
    //override fun toString(): String = "$type*"
    override fun toString(): String = "CPointer<$type>"
}

class StructFType(val spec: StructUnionTypeSpecifier) : FType() {
    override fun toString(): String = "UnknownStruct${spec.id}"
}

class UnknownFType(val reason: Any?) : FType() {
    override fun toString(): String = "UnknownFType($reason)"
}

class TypedefFTypeRef(val id: String) : FType() {
    override fun toString(): String = id
}

class TypedefFTypeName(val id: String) : FType() {
    override fun toString(): String = id
}

class ArrayFType(val type: FType, val declarator: ArrayDeclarator) : FType() {
    override fun toString(): String = "$type[${declarator.expr?.constantEvaluate()}]"
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
    }
    TODO("${type::class}: $type")
}

fun generatePointerType(type: FType, pointer: Pointer): FType {
    val base = PointerFType(type, false)
    return if (pointer.parent != null) generatePointerType(base, pointer.parent) else base
}

fun generateFinalType(type: FType, declarator: Declarator): FType {
    when (declarator) {
        is DeclaratorWithPointer -> {
            val pointer = declarator.pointer
            val decl = generateFinalType(type, declarator.declarator)
            return generatePointerType(decl, pointer)
        }
        is IdentifierDeclarator -> {
            return type
        }
        is ParameterDeclarator -> {
            return UnknownFType(declarator)
        }
        is ArrayDeclarator -> {
            return if (declarator.base != null) {
                ArrayFType(generateFinalType(type, declarator.base!!), declarator)
            } else {
                ArrayFType(type, declarator)
            }
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
    else -> TODO("TypeSpecifier.getName: $this")
}