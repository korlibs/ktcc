package com.soywiz.ktcc.transform

import com.soywiz.ktcc.*

open class NodeVisitor {
    open fun visit(it: List<Node>?) {
        if (it != null) for (v in it) visit(v)
    }

    open fun visit(it: Node?) {
        when (it) {
            null -> Unit
            // Base
            is Decl -> visit(it)
            is Stm -> visit(it)
            is Expr -> visit(it)
            is Declarator -> visit(it)
            // Extended
            is TypeSpecifier -> visit(it)
            is CParam -> visit(it)
            is Pointer -> visit(it)
            is StructDeclaration -> visit(it)
            is DesignOptInit -> visit(it)
            is DesignatorList -> visit(it)
            is FieldAccessDesignator -> visit(it)
            is ArrayAccessDesignator -> visit(it)
            is ParameterDecl -> visit(it)
            is IdDecl -> visit(it)
            is InitDeclarator -> visit(it)
            is AbstractDeclarator -> visit(it)
            is StructDeclarator -> visit(it)
            else -> error("Unknown node ${it::class}: $it")
        }
    }

    open fun visit(it: Stm) {
        when (it) {
            is Decl -> visit(it)
            is Stms -> visit(it)
            is For -> visit(it)
            is While -> visit(it)
            is DoWhile -> visit(it)
            is IfElse -> visit(it)
            is Return -> visit(it)
            is Declaration -> visit(it)
            is ExprStm -> visit(it)
            is FuncDecl -> visit(it)
            is Break -> visit(it)
            is Continue -> visit(it)
            is Goto -> visit(it)
            is LabeledStm -> visit(it)
            is SwitchBase -> visit(it)
            is CaseStm -> visit(it)
            is DefaultStm -> visit(it)
            else -> error("Unknown stm ${it::class}: $it")
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
            is DoubleConstant -> visit(it)
            is CharConstant -> visit(it)
            is StringConstant -> visit(it)
            is ArrayInitExpr -> visit(it)
            is ConstExpr -> visit(it)
            is CommaExpr -> visit(it)
            is AssignExpr -> visit(it)
            is ConditionalExpr -> visit(it)
            is FieldAccessExpr -> visit(it)
            is SizeOfAlignTypeExpr -> visit(it)
            is SizeOfAlignExprExpr -> visit(it)
            else -> error("Unknown expr ${it::class}: $it")
        }
    }

    open fun visit(it: SizeOfAlignExprExpr) {
        visit(it.expr)
    }

    open fun visit(it: SizeOfAlignTypeExpr) {
        visit(it.typeName)
        visit(it.ftype)
    }

    open fun visit(it: Declarator) {
        when (it) {
            is ParameterDeclarator -> visit(it)
            is DeclaratorWithPointer -> visit(it)
            is IdentifierDeclarator -> visit(it)
            is ArrayDeclarator -> visit(it)
            else -> error("Unknown expr ${it::class}: $it")
        }
    }

    open fun visit(it: ArrayDeclarator) {
        visit(it.base)
        visit(it.expr)
        visit(it.typeQualifiers)
    }

    open fun visit(it: FieldAccessExpr) {
        visit(it.expr)
        visit(it.id)
    }

    open fun visit(it: ConditionalExpr) {
        visit(it.cond)
        visit(it.etrue)
        visit(it.efalse)
    }

    open fun visit(it: AssignExpr) {
        visit(it.l)
        visit(it.r)
    }

    open fun visit(it: CommaExpr) {
        visit(it.exprs)
    }

    open fun visit(it: ConstExpr) {
        visit(it.expr)
    }

    open fun visit(it: IdDecl) {
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

    open fun visit(it: FType) {
        when (it) {
            is IntFType -> visit(it)
            is FloatFType -> visit(it)
            is PointerFType -> visit(it)
            is TypedefFTypeRef -> visit(it)
            else -> error("Unknown ftype ${it::class}: $it")
        }
    }

    open fun visit(it: FloatFType) {
    }

    open fun visit(it: TypedefFTypeRef) {
    }

    open fun visit(it: TypeSpecifier) {
        //when (it) {
        //    is ListTypeSpecifier -> visit(it)
        //    is BasicTypeSpecifier -> visit(it)
        //    is TypeName -> visit(it)
        //    is StructUnionTypeSpecifier -> visit(it)
        //    is StorageClassSpecifier -> visit(it)
        //    is TypedefTypeSpecifierName -> visit(it)
        //    is TypedefTypeSpecifierRef -> visit(it)
        //    else -> error("Unknown TypeSpecifier ${it::class}: $it")
        //}
    }

    //open fun visit(it: TypedefTypeSpecifierName) {
    //}
    //
    //open fun visit(it: TypedefTypeSpecifierRef) {
    //}
    //
    //open fun visit(it: StorageClassSpecifier) {
    //}
    //
    //open fun visit(it: StructUnionTypeSpecifier) {
    //    visit(it.decls)
    //    visit(it.id)
    //}

    open fun visit(it: CaseStm) {
        visit(it.expr)
        visit(it.stm)
    }

    open fun visit(it: DefaultStm) {
        visit(it.stm)
    }

    open fun visit(it: SwitchBase) {
        visit(it.subject)
        visit(it.body)
    }

    open fun visitLabel(it: String) {
    }

    open fun visit(it: LabeledStm) {
        visitLabel(it.id.name)
        visit(it.stm)
    }

    open fun visit(it: Goto) {
        visitLabel(it.id.name)
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
        visit(it.elementType)
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

    open fun visit(it: DoubleConstant) {
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
        visit(it.rvalue)
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

    open fun visit(it: DoWhile) {
        visit(it.body)
        visit(it.cond)
    }

    open fun visit(it: IfElse) {
        visit(it.cond)
        visit(it.strue)
        visit(it.sfalse)
    }

    open fun visit(it: Break) {
    }

    open fun visit(it: Continue) {
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
            else -> error("Unknown decl ${it::class}: $it")
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
