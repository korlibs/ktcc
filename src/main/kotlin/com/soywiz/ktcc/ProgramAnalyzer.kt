package com.soywiz.ktcc

class ProgramAnalyzer : NodeVisitor() {
    val POINTER_SIZE = 4
    var structId = 0
    val strings = arrayListOf<String>()
    val structTypesByName = LinkedHashMap<String, ProgramType>()
    val structTypesBySpecifier = LinkedHashMap<StructUnionTypeSpecifier, ProgramType>()

    fun FType.getSize(): Int = when (this) {
        is IntFType -> size ?: 4
        is PointerFType -> POINTER_SIZE
        else -> error("${this::class.java}: $this")
    }

    fun getType(name: String): ProgramType {
        return structTypesByName[name] ?: error("Can't find type by name $name")
    }

    fun getType(spec: StructUnionTypeSpecifier): ProgramType {
        return structTypesBySpecifier[spec] ?: error("Can't find type by spec $spec")
    }

    val typedefAliases = LinkedHashMap<String, FType>()

    override fun visit(it: ListTypeSpecifier) {
        super.visit(it)
        if (it.hasTypedef) {
            typedefAliases[it.typedefId!!] = ListTypeSpecifier(it.items.withoutTypedefs()).toFinalType()
        }
    }

    override fun visit(it: StructUnionTypeSpecifier) {
        super.visit(it)
        val structName = it.id?.name ?: "Unknown${structId++}"
        val structType = ProgramType(structName, it)
        structTypesByName[structName] = structType
        structTypesBySpecifier[it] = structType
        var offset = 0
        for (decl in it.decls) {
            val ftype = decl.specifiers.toFinalType()
            for (dtors in decl.declarators) {
                val name = dtors.declarator?.getName() ?: "unknown"
                val rftype = ftype.withDeclarator(dtors.declarator)
                val rsize = rftype.getSize()
                structType.fields += StructField(name, rftype, offset, rsize)
                offset += rsize
            }
        }
        structType.size = offset
    }

    override fun visit(it: StringConstant) {
        super.visit(it)
        strings += it.raw
    }
}

data class StructField(val name: String, var type: FType, val offset: Int, val size: Int) {
    val offsetName = "OFFSET_$name"
}

data class ProgramType(
        var name: String,
        val spec: StructUnionTypeSpecifier,
        var size: Int = 0
) {
    val fields = arrayListOf<StructField>()
}
