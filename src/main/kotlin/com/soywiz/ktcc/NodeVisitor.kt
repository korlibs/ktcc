package com.soywiz.ktcc

open class NodeVisitor {
    open fun visit(it: Node?) {
        when (it) {
            null -> Unit
            is Stm -> visit(it)
            is Expr -> visit(it)
            is Decl -> visit(it)
            is CType -> visit(it)
            is TypeSpecifier -> visit(it)
            is CParam -> visit(it)
            is InitDeclarator -> visit(it)
            is DeclaratorWithPointer -> visit(it)
            is IdentifierDeclarator -> visit(it)
            is AbstractDeclarator -> visit(it)
            is Pointer -> visit(it)
            is StructDeclaration -> visit(it)
            is StructDeclarator -> visit(it)
            is DesignOptInit -> visit(it)
            is DesignatorList -> visit(it)
            is FieldAccessDesignator -> visit(it)
            is ArrayAccessDesignator -> visit(it)
            is ParameterDeclarator -> visit(it)
            is ParameterDecl -> visit(it)
            else -> error("Unknown node ${it::class.java}: $it")
        }
    }

    open fun visit(it: ParameterDecl) {
        visit(it.declarator)
        visit(it.specs)
    }

    open fun visit(it: ParameterDeclarator) {
        visit(it.base)
        visit(it.decls)
    }

    open fun visit(it: FieldAccessDesignator) {
        visit(it.field)
    }

    open fun visit(it: ArrayAccessDesignator) {
        visit(it.constant)
    }

    open fun visit(it: DesignatorList) {
        visit(it.list)
    }

    open fun visit(it: DesignOptInit) {
        visit(it.design)
        visit(it.initializer)
    }

    open fun visit(it: StructDeclaration) {
        visit(it.declarators)
        visit(it.specifiers)
    }

    open fun visit(it: StructDeclarator) {
        visit(it.declarator)
        visit(it.bit)
    }

    open fun visit(it: CType) {
        when (it) {
            is CTypeWithSpecifiers -> visit(it.specs)
            else -> error("Unknown ctype ${it::class.java}: $it")
        }
    }

    open fun visit(it: FType) {
        when (it) {
            is IntFType -> visit(it)
            is PointerFType -> visit(it)
            else -> error("Unknown ftype ${it::class.java}: $it")
        }
    }

    open fun visit(it: TypeSpecifier) {
        when (it) {
            is ListTypeSpecifier -> visit(it)
            is BasicTypeSpecifier -> visit(it)
            is TypeName -> visit(it)
            is StructUnionTypeSpecifier -> visit(it)
            is StorageClassSpecifier -> visit(it)
            is TypedefTypeSpecifier -> visit(it)
            else -> error("Unknown TypeSpecifier ${it::class.java}: $it")
        }
    }

    open fun visit(it: TypedefTypeSpecifier) {
    }

    open fun visit(it: StorageClassSpecifier) {
    }

    open fun visit(it: List<Node>?) {
        if (it != null) for (v in it) visit(v)
    }

    open fun visit(it: StructUnionTypeSpecifier) {
        visit(it.decls)
        visit(it.id)
    }

    open fun visit(it: Stm) {
        when (it) {
            is Stms -> visit(it)
            is For -> visit(it)
            is While -> visit(it)
            is IfElse -> visit(it)
            is Break -> visit(it)
            is Return -> visit(it)
            is Declaration -> visit(it)
            is ExprStm -> visit(it)
            is FuncDecl -> visit(it)
            else -> error("Unknown stm ${it::class.java}: $it")
        }
    }

    open fun visit(it: Expr) {
        when (it) {
            is Binop -> visit(it)
            is UnaryExpr -> visit(it)
            is Id -> visit(it)
            is CallExpr -> visit(it)
            is PostfixExpr -> visit(it)
            is CastExpr -> visit(it)
            is ArrayAccessExpr -> visit(it)
            is IntConstant -> visit(it)
            is CharConstant -> visit(it)
            is StringConstant -> visit(it)
            is ArrayInitExpr -> visit(it)
            else -> error("Unknown expr ${it::class.java}: $it")
        }
    }

    open fun visit(it: ArrayInitExpr) {
        visit(it.items)
    }

    open fun visit(it: ListTypeSpecifier) {
        visit(it.items)
    }

    open fun visit(it: TypeName) {
        visit(it.abstractDecl)
        visit(it.specifiers)
    }

    open fun visit(it: IntFType) {
    }

    open fun visit(it: PointerFType) {
        visit(it.type)
    }

    open fun visit(it: CParam) {
        visit(it.type)
        //visit(it.name)
    }

    open fun visit(it: CharConstant) {
    }

    open fun visit(it: StringConstant) {
    }

    open fun visit(it: IntConstant) {
    }

    open fun visit(it: CallExpr) {
        visit(it.expr)
        visit(it.args)
    }

    open fun visit(it: CastExpr) {
        visit(it.type)
        visit(it.expr)
    }

    open fun visit(it: ArrayAccessExpr) {
        visit(it.expr)
        visit(it.index)
    }

    open fun visit(it: Binop) {
        visit(it.l)
        visit(it.r)
    }

    open fun visit(it: PostfixExpr) {
        visit(it.lvalue)
    }

    open fun visit(it: UnaryExpr) {
        visit(it.expr)
    }

    open fun visit(it: Id) {
    }

    open fun visit(it: BasicTypeSpecifier) {
    }

    open fun visit(it: Stms) {
        visit(it.stms)
    }

    open fun visit(it: For) {
        visit(it.init)
        visit(it.cond)
        visit(it.post)
        visit(it.body)
    }

    open fun visit(it: While) {
        visit(it.cond)
        visit(it.body)
    }

    open fun visit(it: IfElse) {
        visit(it.cond)
        visit(it.strue)
        visit(it.sfalse)
    }

    open fun visit(it: Break) {
    }

    open fun visit(it: Return) {
        visit(it.expr)
    }

    open fun visit(it: ExprStm) {
        visit(it.expr)
    }

    open fun visit(it: Decl) {
        when (it) {
            is FuncDecl -> visit(it)
            is Declaration -> visit(it)
            else -> error("Unknown decl ${it::class.java}: $it")
        }
    }

    open fun visit(it: Declaration) {
        visit(it.specs)
        visit(it.initDeclaratorList)
    }

    open fun visit(it: FuncDecl) {
        visit(it.rettype)
        visit(it.params)
        visit(it.body)
    }

    open fun visit(it: DeclaratorWithPointer) {
        visit(it.declarator)
        visit(it.pointer)
    }

    open fun visit(it: Pointer) {
        visit(it.parent)
        visit(it.qualifiers)
    }

    open fun visit(it: InitDeclarator) {
        visit(it.decl)
        visit(it.initializer)
    }

    open fun visit(it: IdentifierDeclarator) {
        visit(it.id)
    }

    open fun visit(it: AbstractDeclarator) {
        visit(it.ptr)
    }

    open fun visit(it: Program) {
        visit(it.decls)
    }
}
