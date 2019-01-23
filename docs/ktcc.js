(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'ktcc'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ktcc'.");
    }
    root.ktcc = factory(typeof ktcc === 'undefined' ? {} : ktcc, kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var ensureNotNull = Kotlin.ensureNotNull;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var Unit = Kotlin.kotlin.Unit;
  var equals = Kotlin.equals;
  var startsWith = Kotlin.kotlin.text.startsWith_sgbm27$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var reversed = Kotlin.kotlin.collections.reversed_7wnvza$;
  var toString = Kotlin.toString;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var unboxChar = Kotlin.unboxChar;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var toInt_0 = Kotlin.kotlin.text.toInt_6ic1pp$;
  var startsWith_0 = Kotlin.kotlin.text.startsWith_7epoxm$;
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  var CharRange = Kotlin.kotlin.ranges.CharRange;
  var firstOrNull = Kotlin.kotlin.text.firstOrNull_gw00vp$;
  var contains_0 = Kotlin.kotlin.text.contains_sgbm27$;
  var endsWith = Kotlin.kotlin.text.endsWith_sgbm27$;
  var removeSuffix = Kotlin.kotlin.text.removeSuffix_gsj5wt$;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var withIndex = Kotlin.kotlin.collections.withIndex_7wnvza$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var drop = Kotlin.kotlin.collections.drop_ba2ldo$;
  var zip = Kotlin.kotlin.collections.zip_45mdf7$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_mh5how$;
  var plus = Kotlin.kotlin.collections.plus_mydzjv$;
  var getCallableRef = Kotlin.getCallableRef;
  var firstOrNull_0 = Kotlin.kotlin.collections.firstOrNull_2p1efm$;
  var throwCCE = Kotlin.throwCCE;
  var setOf = Kotlin.kotlin.collections.setOf_i5x0yv$;
  var Throwable = Error;
  var plus_0 = Kotlin.kotlin.collections.plus_khz7k3$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_73mtqc$;
  var contains_1 = Kotlin.kotlin.collections.contains_mjy6jw$;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  var lastOrNull = Kotlin.kotlin.collections.lastOrNull_2p1efm$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var endsWith_0 = Kotlin.kotlin.text.endsWith_7epoxm$;
  var lines = Kotlin.kotlin.text.lines_gw00vp$;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var numberToInt = Kotlin.numberToInt;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var substringBefore = Kotlin.kotlin.text.substringBefore_8cymmc$;
  var throwUPAE = Kotlin.throwUPAE;
  var trimIndent = Kotlin.kotlin.text.trimIndent_pdl1vz$;
  var toMap = Kotlin.kotlin.collections.toMap_abgq59$;
  var toMap_0 = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var Exception = Kotlin.kotlin.Exception;
  var getOrNull_0 = Kotlin.kotlin.collections.getOrNull_8ujjk8$;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init;
  var RuntimeException = Kotlin.kotlin.RuntimeException;
  var Any = Object;
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var max = Kotlin.kotlin.collections.max_exjks8$;
  var toChar = Kotlin.toChar;
  var filterNotNull = Kotlin.kotlin.collections.filterNotNull_m3lr2h$;
  ProgramMessage$Level.prototype = Object.create(Enum.prototype);
  ProgramMessage$Level.prototype.constructor = ProgramMessage$Level;
  ExpectException.prototype = Object.create(Exception.prototype);
  ExpectException.prototype.constructor = ExpectException;
  ParserException.prototype = Object.create(ExpectException.prototype);
  ParserException.prototype.constructor = ParserException;
  ProgramParser.prototype = Object.create(ListReader.prototype);
  ProgramParser.prototype.constructor = ProgramParser;
  IdDecl.prototype = Object.create(Node.prototype);
  IdDecl.prototype.constructor = IdDecl;
  Expr.prototype = Object.create(Node.prototype);
  Expr.prototype.constructor = Expr;
  Id.prototype = Object.create(Expr.prototype);
  Id.prototype.constructor = Id;
  StringConstant.prototype = Object.create(Expr.prototype);
  StringConstant.prototype.constructor = StringConstant;
  CharConstant.prototype = Object.create(Expr.prototype);
  CharConstant.prototype.constructor = CharConstant;
  IntConstant_0.prototype = Object.create(Expr.prototype);
  IntConstant_0.prototype.constructor = IntConstant_0;
  DoubleConstant.prototype = Object.create(Expr.prototype);
  DoubleConstant.prototype.constructor = DoubleConstant;
  LValue.prototype = Object.create(Expr.prototype);
  LValue.prototype.constructor = LValue;
  CommaExpr.prototype = Object.create(Expr.prototype);
  CommaExpr.prototype.constructor = CommaExpr;
  ConstExpr.prototype = Object.create(Expr.prototype);
  ConstExpr.prototype.constructor = ConstExpr;
  SingleOperandExpr.prototype = Object.create(Expr.prototype);
  SingleOperandExpr.prototype.constructor = SingleOperandExpr;
  BaseUnaryOp.prototype = Object.create(SingleOperandExpr.prototype);
  BaseUnaryOp.prototype.constructor = BaseUnaryOp;
  UnaryExpr.prototype = Object.create(BaseUnaryOp.prototype);
  UnaryExpr.prototype.constructor = UnaryExpr;
  PostfixExpr.prototype = Object.create(BaseUnaryOp.prototype);
  PostfixExpr.prototype.constructor = PostfixExpr;
  AssignExpr.prototype = Object.create(Expr.prototype);
  AssignExpr.prototype.constructor = AssignExpr;
  ArrayAccessExpr.prototype = Object.create(LValue.prototype);
  ArrayAccessExpr.prototype.constructor = ArrayAccessExpr;
  FieldAccessExpr.prototype = Object.create(LValue.prototype);
  FieldAccessExpr.prototype.constructor = FieldAccessExpr;
  CallExpr.prototype = Object.create(Expr.prototype);
  CallExpr.prototype.constructor = CallExpr;
  OperatorsExpr.prototype = Object.create(Expr.prototype);
  OperatorsExpr.prototype.constructor = OperatorsExpr;
  Binop.prototype = Object.create(Expr.prototype);
  Binop.prototype.constructor = Binop;
  Stm.prototype = Object.create(Node.prototype);
  Stm.prototype.constructor = Stm;
  RawStm.prototype = Object.create(Stm.prototype);
  RawStm.prototype.constructor = RawStm;
  CommentStm.prototype = Object.create(Stm.prototype);
  CommentStm.prototype.constructor = CommentStm;
  EmptyStm.prototype = Object.create(Stm.prototype);
  EmptyStm.prototype.constructor = EmptyStm;
  IfElse.prototype = Object.create(Stm.prototype);
  IfElse.prototype.constructor = IfElse;
  Loop.prototype = Object.create(Stm.prototype);
  Loop.prototype.constructor = Loop;
  While.prototype = Object.create(Loop.prototype);
  While.prototype.constructor = While;
  DoWhile.prototype = Object.create(Loop.prototype);
  DoWhile.prototype.constructor = DoWhile;
  For.prototype = Object.create(Loop.prototype);
  For.prototype.constructor = For;
  Goto.prototype = Object.create(Stm.prototype);
  Goto.prototype.constructor = Goto;
  Continue.prototype = Object.create(Stm.prototype);
  Continue.prototype.constructor = Continue;
  Break.prototype = Object.create(Stm.prototype);
  Break.prototype.constructor = Break;
  Return.prototype = Object.create(Stm.prototype);
  Return.prototype.constructor = Return;
  SwitchBase.prototype = Object.create(Stm.prototype);
  SwitchBase.prototype.constructor = SwitchBase;
  Switch.prototype = Object.create(SwitchBase.prototype);
  Switch.prototype.constructor = Switch;
  SwitchWithoutFallthrough.prototype = Object.create(SwitchBase.prototype);
  SwitchWithoutFallthrough.prototype.constructor = SwitchWithoutFallthrough;
  ExprStm.prototype = Object.create(Stm.prototype);
  ExprStm.prototype.constructor = ExprStm;
  LabeledStm.prototype = Object.create(Stm.prototype);
  LabeledStm.prototype.constructor = LabeledStm;
  DefaultCaseStm.prototype = Object.create(Stm.prototype);
  DefaultCaseStm.prototype.constructor = DefaultCaseStm;
  CaseStm.prototype = Object.create(DefaultCaseStm.prototype);
  CaseStm.prototype.constructor = CaseStm;
  DefaultStm.prototype = Object.create(DefaultCaseStm.prototype);
  DefaultStm.prototype.constructor = DefaultStm;
  Stms.prototype = Object.create(Stm.prototype);
  Stms.prototype.constructor = Stms;
  Decl.prototype = Object.create(Stm.prototype);
  Decl.prototype.constructor = Decl;
  CParamBase.prototype = Object.create(Node.prototype);
  CParamBase.prototype.constructor = CParamBase;
  CParamVariadic.prototype = Object.create(CParamBase.prototype);
  CParamVariadic.prototype.constructor = CParamVariadic;
  CParam.prototype = Object.create(CParamBase.prototype);
  CParam.prototype.constructor = CParam;
  FuncDecl.prototype = Object.create(Decl.prototype);
  FuncDecl.prototype.constructor = FuncDecl;
  Program.prototype = Object.create(Node.prototype);
  Program.prototype.constructor = Program;
  CastExpr.prototype = Object.create(Expr.prototype);
  CastExpr.prototype.constructor = CastExpr;
  SizeOfAlignExprBase.prototype = Object.create(Expr.prototype);
  SizeOfAlignExprBase.prototype.constructor = SizeOfAlignExprBase;
  SizeOfAlignTypeExpr.prototype = Object.create(SizeOfAlignExprBase.prototype);
  SizeOfAlignTypeExpr.prototype.constructor = SizeOfAlignTypeExpr;
  SizeOfAlignExprExpr.prototype = Object.create(SizeOfAlignExprBase.prototype);
  SizeOfAlignExprExpr.prototype.constructor = SizeOfAlignExprExpr;
  ConditionalExpr.prototype = Object.create(Expr.prototype);
  ConditionalExpr.prototype.constructor = ConditionalExpr;
  TypeSpecifier.prototype = Object.create(Node.prototype);
  TypeSpecifier.prototype.constructor = TypeSpecifier;
  VariadicTypeSpecifier.prototype = Object.create(TypeSpecifier.prototype);
  VariadicTypeSpecifier.prototype.constructor = VariadicTypeSpecifier;
  ListTypeSpecifier.prototype = Object.create(TypeSpecifier.prototype);
  ListTypeSpecifier.prototype.constructor = ListTypeSpecifier;
  BasicTypeSpecifier$Kind$Companion.prototype = Object.create(KeywordEnum$Companion.prototype);
  BasicTypeSpecifier$Kind$Companion.prototype.constructor = BasicTypeSpecifier$Kind$Companion;
  BasicTypeSpecifier$Kind.prototype = Object.create(Enum.prototype);
  BasicTypeSpecifier$Kind.prototype.constructor = BasicTypeSpecifier$Kind;
  BasicTypeSpecifier.prototype = Object.create(TypeSpecifier.prototype);
  BasicTypeSpecifier.prototype.constructor = BasicTypeSpecifier;
  TypedefTypeSpecifierName.prototype = Object.create(TypeSpecifier.prototype);
  TypedefTypeSpecifierName.prototype.constructor = TypedefTypeSpecifierName;
  TypedefTypeSpecifierRef.prototype = Object.create(TypeSpecifier.prototype);
  TypedefTypeSpecifierRef.prototype.constructor = TypedefTypeSpecifierRef;
  StructUnionTypeSpecifier.prototype = Object.create(TypeSpecifier.prototype);
  StructUnionTypeSpecifier.prototype.constructor = StructUnionTypeSpecifier;
  StorageClassSpecifier$Kind$Companion.prototype = Object.create(KeywordEnum$Companion.prototype);
  StorageClassSpecifier$Kind$Companion.prototype.constructor = StorageClassSpecifier$Kind$Companion;
  StorageClassSpecifier$Kind.prototype = Object.create(Enum.prototype);
  StorageClassSpecifier$Kind.prototype.constructor = StorageClassSpecifier$Kind;
  StorageClassSpecifier.prototype = Object.create(TypeSpecifier.prototype);
  StorageClassSpecifier.prototype.constructor = StorageClassSpecifier;
  TypeQualifier$Kind$Companion.prototype = Object.create(KeywordEnum$Companion.prototype);
  TypeQualifier$Kind$Companion.prototype.constructor = TypeQualifier$Kind$Companion;
  TypeQualifier$Kind.prototype = Object.create(Enum.prototype);
  TypeQualifier$Kind.prototype.constructor = TypeQualifier$Kind;
  TypeQualifier.prototype = Object.create(TypeSpecifier.prototype);
  TypeQualifier.prototype.constructor = TypeQualifier;
  FunctionSpecifier.prototype = Object.create(TypeSpecifier.prototype);
  FunctionSpecifier.prototype.constructor = FunctionSpecifier;
  AlignAsSpecifier.prototype = Object.create(TypeSpecifier.prototype);
  AlignAsSpecifier.prototype.constructor = AlignAsSpecifier;
  TypeName.prototype = Object.create(TypeSpecifier.prototype);
  TypeName.prototype.constructor = TypeName;
  AbstractDeclarator.prototype = Object.create(Node.prototype);
  AbstractDeclarator.prototype.constructor = AbstractDeclarator;
  StructDeclarator.prototype = Object.create(Node.prototype);
  StructDeclarator.prototype.constructor = StructDeclarator;
  StructDeclaration.prototype = Object.create(Node.prototype);
  StructDeclaration.prototype.constructor = StructDeclaration;
  Pointer.prototype = Object.create(Node.prototype);
  Pointer.prototype.constructor = Pointer;
  ParameterDecl.prototype = Object.create(Node.prototype);
  ParameterDecl.prototype.constructor = ParameterDecl;
  Declarator.prototype = Object.create(Node.prototype);
  Declarator.prototype.constructor = Declarator;
  VarargDeclarator.prototype = Object.create(Declarator.prototype);
  VarargDeclarator.prototype.constructor = VarargDeclarator;
  DeclaratorWithPointer.prototype = Object.create(Declarator.prototype);
  DeclaratorWithPointer.prototype.constructor = DeclaratorWithPointer;
  IdentifierDeclarator.prototype = Object.create(Declarator.prototype);
  IdentifierDeclarator.prototype.constructor = IdentifierDeclarator;
  ParameterDeclarator.prototype = Object.create(Declarator.prototype);
  ParameterDeclarator.prototype.constructor = ParameterDeclarator;
  ArrayDeclarator.prototype = Object.create(Declarator.prototype);
  ArrayDeclarator.prototype.constructor = ArrayDeclarator;
  Designator.prototype = Object.create(Node.prototype);
  Designator.prototype.constructor = Designator;
  ArrayAccessDesignator.prototype = Object.create(Designator.prototype);
  ArrayAccessDesignator.prototype.constructor = ArrayAccessDesignator;
  FieldAccessDesignator.prototype = Object.create(Designator.prototype);
  FieldAccessDesignator.prototype.constructor = FieldAccessDesignator;
  DesignatorList.prototype = Object.create(Node.prototype);
  DesignatorList.prototype.constructor = DesignatorList;
  DesignOptInit.prototype = Object.create(Node.prototype);
  DesignOptInit.prototype.constructor = DesignOptInit;
  ArrayInitExpr.prototype = Object.create(Expr.prototype);
  ArrayInitExpr.prototype.constructor = ArrayInitExpr;
  InitDeclarator.prototype = Object.create(Node.prototype);
  InitDeclarator.prototype.constructor = InitDeclarator;
  Declaration.prototype = Object.create(Decl.prototype);
  Declaration.prototype.constructor = Declaration;
  IncludeKind.prototype = Object.create(Enum.prototype);
  IncludeKind.prototype.constructor = IncludeKind;
  PreprocessorReader.prototype = Object.create(ListReader.prototype);
  PreprocessorReader.prototype.constructor = PreprocessorReader;
  IncludeMode.prototype = Object.create(Enum.prototype);
  IncludeMode.prototype.constructor = IncludeMode;
  BoolFType.prototype = Object.create(FType.prototype);
  BoolFType.prototype.constructor = BoolFType;
  VariadicFType.prototype = Object.create(FType.prototype);
  VariadicFType.prototype.constructor = VariadicFType;
  DummyFType.prototype = Object.create(FType.prototype);
  DummyFType.prototype.constructor = DummyFType;
  IntFType.prototype = Object.create(FType.prototype);
  IntFType.prototype.constructor = IntFType;
  FloatFType.prototype = Object.create(FType.prototype);
  FloatFType.prototype.constructor = FloatFType;
  BasePointerFType.prototype = Object.create(FType.prototype);
  BasePointerFType.prototype.constructor = BasePointerFType;
  PointerFType.prototype = Object.create(BasePointerFType.prototype);
  PointerFType.prototype.constructor = PointerFType;
  ArrayFType.prototype = Object.create(BasePointerFType.prototype);
  ArrayFType.prototype.constructor = ArrayFType;
  StructFType.prototype = Object.create(FType.prototype);
  StructFType.prototype.constructor = StructFType;
  UnknownFType.prototype = Object.create(FType.prototype);
  UnknownFType.prototype.constructor = UnknownFType;
  TypedefFTypeRef.prototype = Object.create(FType.prototype);
  TypedefFTypeRef.prototype.constructor = TypedefFTypeRef;
  TypedefFTypeName.prototype = Object.create(FType.prototype);
  TypedefFTypeName.prototype.constructor = TypedefFTypeName;
  FunctionFType.prototype = Object.create(FType.prototype);
  FunctionFType.prototype.constructor = FunctionFType;
  KotlinGenerator$BreakScope$Kind.prototype = Object.create(Enum.prototype);
  KotlinGenerator$BreakScope$Kind.prototype.constructor = KotlinGenerator$BreakScope$Kind;
  StateMachineLowerer$lower$ObjectLiteral.prototype = Object.create(NodeVisitor.prototype);
  StateMachineLowerer$lower$ObjectLiteral.prototype.constructor = StateMachineLowerer$lower$ObjectLiteral;
  LowLabel.prototype = Object.create(Stm.prototype);
  LowLabel.prototype.constructor = LowLabel;
  LowGoto.prototype = Object.create(Stm.prototype);
  LowGoto.prototype.constructor = LowGoto;
  LowIfGoto.prototype = Object.create(Stm.prototype);
  LowIfGoto.prototype.constructor = LowIfGoto;
  LowSwitchGoto.prototype = Object.create(Stm.prototype);
  LowSwitchGoto.prototype.constructor = LowSwitchGoto;
  containsBreakOrContinue$ObjectLiteral.prototype = Object.create(NodeVisitor.prototype);
  containsBreakOrContinue$ObjectLiteral.prototype.constructor = containsBreakOrContinue$ObjectLiteral;
  EOFException.prototype = Object.create(RuntimeException.prototype);
  EOFException.prototype.constructor = EOFException;
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  function SymbolInfo(scope, name, type, node, token) {
    this.scope = scope;
    this.name = name;
    this.type = type;
    this.node = node;
    this.token = token;
  }
  SymbolInfo.$metadata$ = {kind: Kind_CLASS, simpleName: 'SymbolInfo', interfaces: []};
  SymbolInfo.prototype.component1 = function () {
    return this.scope;
  };
  SymbolInfo.prototype.component2 = function () {
    return this.name;
  };
  SymbolInfo.prototype.component3 = function () {
    return this.type;
  };
  SymbolInfo.prototype.component4 = function () {
    return this.node;
  };
  SymbolInfo.prototype.component5 = function () {
    return this.token;
  };
  SymbolInfo.prototype.copy_bv95ew$ = function (scope, name, type, node, token) {
    return new SymbolInfo(scope === void 0 ? this.scope : scope, name === void 0 ? this.name : name, type === void 0 ? this.type : type, node === void 0 ? this.node : node, token === void 0 ? this.token : token);
  };
  SymbolInfo.prototype.toString = function () {
    return 'SymbolInfo(scope=' + Kotlin.toString(this.scope) + (', name=' + Kotlin.toString(this.name)) + (', type=' + Kotlin.toString(this.type)) + (', node=' + Kotlin.toString(this.node)) + (', token=' + Kotlin.toString(this.token)) + ')';
  };
  SymbolInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.scope) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.node) | 0;
    result = result * 31 + Kotlin.hashCode(this.token) | 0;
    return result;
  };
  SymbolInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.scope, other.scope) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.type, other.type) && Kotlin.equals(this.node, other.node) && Kotlin.equals(this.token, other.token)))));
  };
  function SymbolScope(parent, start, end) {
    if (start === void 0)
      start = -1;
    if (end === void 0)
      end = -1;
    this.parent = parent;
    this.start = start;
    this.end = end;
    this.level = this.parent != null ? this.parent.level + 1 | 0 : 0;
    this.children = ArrayList_init();
    this.symbols = LinkedHashMap_init();
    var tmp$, tmp$_0;
    (tmp$_0 = (tmp$ = this.parent) != null ? tmp$.children : null) != null ? tmp$_0.add_11rb$(this) : null;
  }
  SymbolScope.prototype.createInfo_m9p0fr$ = function (name, type, node, token) {
    return new SymbolInfo(this, name, type, node, token);
  };
  SymbolScope.prototype.registerInfo_m9p0fr$ = function (name, type, node, token) {
    this.register_q34drf$(this.createInfo_m9p0fr$(name, type, node, token));
  };
  SymbolScope.prototype.register_q34drf$ = function (symbol) {
    var $receiver = this.symbols;
    var key = symbol.name;
    $receiver.put_xwzc9p$(key, symbol);
  };
  SymbolScope.prototype.get_61zpoe$ = function (symbol) {
    var tmp$, tmp$_0;
    return (tmp$_0 = this.getHere_61zpoe$(symbol)) != null ? tmp$_0 : (tmp$ = this.parent) != null ? tmp$.get_61zpoe$(symbol) : null;
  };
  SymbolScope.prototype.getHere_61zpoe$ = function (symbol) {
    return this.symbols.get_11rb$(symbol);
  };
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  SymbolScope.prototype.getAllSymbolNames_wzgf5y$ = function (out) {
    if (out === void 0) {
      out = LinkedHashSet_init();
    }
    var tmp$;
    addAll(out, this.symbols.keys);
    (tmp$ = this.parent) != null ? tmp$.getAllSymbolNames_wzgf5y$(out) : null;
    return out;
  };
  SymbolScope.prototype.toString = function () {
    return 'SymbolScope(level=' + this.level + ', symbols=' + this.symbols.keys + ', children=' + this.children.size + ', parent=' + (this.parent != null) + ', start=' + this.start + ', end=' + this.end + ')';
  };
  SymbolScope.$metadata$ = {kind: Kind_CLASS, simpleName: 'SymbolScope', interfaces: []};
  function ProgramMessage(message, token, pos, marker, level) {
    this.message = message;
    this.token = token;
    this.pos = pos;
    this.marker = marker;
    this.level = level;
  }
  function ProgramMessage$Level(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ProgramMessage$Level_initFields() {
    ProgramMessage$Level_initFields = function () {
    };
    ProgramMessage$Level$WARNING_instance = new ProgramMessage$Level('WARNING', 0);
    ProgramMessage$Level$ERROR_instance = new ProgramMessage$Level('ERROR', 1);
  }
  var ProgramMessage$Level$WARNING_instance;
  function ProgramMessage$Level$WARNING_getInstance() {
    ProgramMessage$Level_initFields();
    return ProgramMessage$Level$WARNING_instance;
  }
  var ProgramMessage$Level$ERROR_instance;
  function ProgramMessage$Level$ERROR_getInstance() {
    ProgramMessage$Level_initFields();
    return ProgramMessage$Level$ERROR_instance;
  }
  ProgramMessage$Level.$metadata$ = {kind: Kind_CLASS, simpleName: 'Level', interfaces: [Enum]};
  function ProgramMessage$Level$values() {
    return [ProgramMessage$Level$WARNING_getInstance(), ProgramMessage$Level$ERROR_getInstance()];
  }
  ProgramMessage$Level.values = ProgramMessage$Level$values;
  function ProgramMessage$Level$valueOf(name) {
    switch (name) {
      case 'WARNING':
        return ProgramMessage$Level$WARNING_getInstance();
      case 'ERROR':
        return ProgramMessage$Level$ERROR_getInstance();
      default:throwISE('No enum constant com.soywiz.ktcc.ProgramMessage.Level.' + name);
    }
  }
  ProgramMessage$Level.valueOf_61zpoe$ = ProgramMessage$Level$valueOf;
  Object.defineProperty(ProgramMessage.prototype, 'file', {get: function () {
    return this.marker.translatedFile;
  }});
  Object.defineProperty(ProgramMessage.prototype, 'row1', {get: function () {
    return this.token.row - this.marker.rowDiff | 0;
  }});
  Object.defineProperty(ProgramMessage.prototype, 'row0', {get: function () {
    return this.row1 - 1 | 0;
  }});
  Object.defineProperty(ProgramMessage.prototype, 'columnStart', {get: function () {
    return this.token.columnStart;
  }});
  ProgramMessage.$metadata$ = {kind: Kind_CLASS, simpleName: 'ProgramMessage', interfaces: []};
  ProgramMessage.prototype.component1 = function () {
    return this.message;
  };
  ProgramMessage.prototype.component2 = function () {
    return this.token;
  };
  ProgramMessage.prototype.component3 = function () {
    return this.pos;
  };
  ProgramMessage.prototype.component4 = function () {
    return this.marker;
  };
  ProgramMessage.prototype.component5 = function () {
    return this.level;
  };
  ProgramMessage.prototype.copy_tuqor5$ = function (message, token, pos, marker, level) {
    return new ProgramMessage(message === void 0 ? this.message : message, token === void 0 ? this.token : token, pos === void 0 ? this.pos : pos, marker === void 0 ? this.marker : marker, level === void 0 ? this.level : level);
  };
  ProgramMessage.prototype.toString = function () {
    return 'ProgramMessage(message=' + Kotlin.toString(this.message) + (', token=' + Kotlin.toString(this.token)) + (', pos=' + Kotlin.toString(this.pos)) + (', marker=' + Kotlin.toString(this.marker)) + (', level=' + Kotlin.toString(this.level)) + ')';
  };
  ProgramMessage.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.message) | 0;
    result = result * 31 + Kotlin.hashCode(this.token) | 0;
    result = result * 31 + Kotlin.hashCode(this.pos) | 0;
    result = result * 31 + Kotlin.hashCode(this.marker) | 0;
    result = result * 31 + Kotlin.hashCode(this.level) | 0;
    return result;
  };
  ProgramMessage.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.message, other.message) && Kotlin.equals(this.token, other.token) && Kotlin.equals(this.pos, other.pos) && Kotlin.equals(this.marker, other.marker) && Kotlin.equals(this.level, other.level)))));
  };
  function ParserException(info) {
    ExpectException.call(this, info.message);
    this.info = info;
    this.name = 'ParserException';
  }
  ParserException.$metadata$ = {kind: Kind_CLASS, simpleName: 'ParserException', interfaces: [ExpectException]};
  function ProgramParserRef() {
  }
  ProgramParserRef.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'ProgramParserRef', interfaces: []};
  function FunctionScope() {
    this.name = '';
    this.type = null;
    this.hasGoto = false;
  }
  Object.defineProperty(FunctionScope.prototype, 'rettype', {get: function () {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.type) != null ? tmp$.retType : null) != null ? tmp$_0 : FType$Companion_getInstance().UNRESOLVED;
  }});
  FunctionScope.$metadata$ = {kind: Kind_CLASS, simpleName: 'FunctionScope', interfaces: []};
  function ProgramParser(items, tokens, pos) {
    if (pos === void 0)
      pos = 0;
    ListReader.call(this, items, '<eof>', pos);
    this.tokens = tokens;
    var tmp$;
    tmp$ = items.size;
    for (var n = 0; n < tmp$; n++)
      this.tokens.get_za3lpa$(n).tokenIndex = n;
    this.parser_krs5mn$_0 = this;
    this.POINTER_SIZE = 4;
    this.typedefTypes = LinkedHashMap_init();
    this.typedefAliases = LinkedHashMap_init();
    this.strings = LinkedHashSet_init();
    this.structId = 0;
    this.structTypesByName = LinkedHashMap_init();
    this.structTypesBySpecifier = LinkedHashMap_init();
    this.symbols = new SymbolScope(null, 0, this.tokens.size);
    this._functionScope = null;
    this.warnings = ArrayList_init();
    this.errors = ArrayList_init();
    this.markers = ArrayList_init();
    this.currentMarker = new ProgramParser$Marker();
  }
  Object.defineProperty(ProgramParser.prototype, 'parser', {get: function () {
    return this.parser_krs5mn$_0;
  }});
  Object.defineProperty(ProgramParser.prototype, 'current', {get: function () {
    return this.peek_za3lpa$();
  }});
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  Object.defineProperty(ProgramParser.prototype, 'functionScope', {get: function () {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = this._functionScope) != null)
      tmp$_0 = tmp$;
    else {
      throw IllegalStateException_init('Not inside a function'.toString());
    }
    return tmp$_0;
  }});
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  ProgramParser.prototype.token_za3lpa$ = function (pos) {
    var $receiver = this.tokens;
    return pos >= 0 && pos <= get_lastIndex($receiver) ? $receiver.get_za3lpa$(pos) : new CToken('');
  };
  ProgramParser.prototype.token_2q70oh$ = function (node) {
    return this.token_za3lpa$(node.pos);
  };
  ProgramParser.prototype.reportWarning_bm4lxs$ = function (msg, pos) {
    if (pos === void 0)
      pos = this.pos;
    var $receiver = this.warnings;
    var element = new ProgramMessage(msg, this.token_za3lpa$(pos), pos, this.currentMarker, ProgramMessage$Level$WARNING_getInstance());
    $receiver.add_11rb$(element);
  };
  ProgramParser.prototype.reportError_bm4lxs$ = function (msg, pos) {
    if (pos === void 0)
      pos = this.pos;
    var $receiver = this.errors;
    var element = new ProgramMessage(msg, this.token_za3lpa$(pos), pos, this.currentMarker, ProgramMessage$Level$ERROR_getInstance());
    $receiver.add_11rb$(element);
  };
  ProgramParser.prototype.reportError_pum0tb$ = function (exception) {
    var $receiver = this.errors;
    var element = exception.info;
    $receiver.add_11rb$(element);
  };
  ProgramParser.prototype.parserException_bm4lxs$ = function (message, pos) {
    if (pos === void 0)
      pos = this.pos;
    throw new ParserException(new ProgramMessage(message, this.token_za3lpa$(pos), pos, this.currentMarker, ProgramMessage$Level$ERROR_getInstance()));
  };
  ProgramParser.prototype.createExpectException_61zpoe$ = function (message) {
    return this.parserException_bm4lxs$(message);
  };
  ProgramParser.prototype.scopeFunction_klfg04$ = defineInlineFunction('ktcc.com.soywiz.ktcc.ProgramParser.scopeFunction_klfg04$', wrapFunction(function () {
    var FunctionScope_init = _.com.soywiz.ktcc.FunctionScope;
    return function (callback) {
      var old = this._functionScope;
      this._functionScope = new FunctionScope_init();
      try {
        return callback();
      }
      finally {
        this._functionScope = old;
      }
    };
  }));
  ProgramParser.prototype.scopeSymbols_klfg04$ = defineInlineFunction('ktcc.com.soywiz.ktcc.ProgramParser.scopeSymbols_klfg04$', wrapFunction(function () {
    var SymbolScope_init = _.com.soywiz.ktcc.SymbolScope;
    return function (callback) {
      var tmp$;
      var old = this.symbols;
      try {
        this.symbols = new SymbolScope_init(old, this.pos, this.pos);
        tmp$ = callback();
      }
      finally {
        this.symbols.end = this.pos;
        this.symbols = old;
      }
      return tmp$;
    };
  }));
  ProgramParser.prototype.resolve_de2dm9$ = function (type) {
    return this.fresolve_q1l7zo$(type);
  };
  ProgramParser.prototype.fresolve_q1l7zo$ = function ($receiver, default_0) {
    if (default_0 === void 0)
      default_0 = null;
    if ($receiver.resolved == null) {
      $receiver.resolved = this.fresolveUncached_q1l7zo$($receiver, default_0);
    }
    return ensureNotNull($receiver.resolved);
  };
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  ProgramParser.prototype.fresolveUncached_q1l7zo$ = function ($receiver, default_0) {
    if (default_0 === void 0)
      default_0 = null;
    var tmp$, tmp$_0;
    if (Kotlin.isType($receiver, TypedefFTypeRef))
      return this.fresolve_q1l7zo$((tmp$_0 = (tmp$ = this.typedefAliases.get_11rb$($receiver.id)) != null ? tmp$ : default_0) != null ? tmp$_0 : new UnknownFType("Can't resolve type '" + $receiver.id + "'"), default_0);
    else if (Kotlin.isType($receiver, FunctionFType)) {
      var tmp$_1 = $receiver.name;
      var tmp$_2 = this.fresolve_q1l7zo$($receiver.retType, default_0);
      var $receiver_0 = $receiver.args;
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_3;
      tmp$_3 = $receiver_0.iterator();
      while (tmp$_3.hasNext()) {
        var item = tmp$_3.next();
        destination.add_11rb$(new CParam(item.decl, this.fresolve_q1l7zo$(item.type, default_0), item.nameId));
      }
      return new FunctionFType(tmp$_1, tmp$_2, destination, $receiver.variadic);
    }
     else if (Kotlin.isType($receiver, PointerFType))
      return new PointerFType(this.fresolve_q1l7zo$($receiver.elementType, default_0), $receiver.const);
    else if (Kotlin.isType($receiver, ArrayFType))
      return new ArrayFType(this.fresolve_q1l7zo$($receiver.elementType, default_0), $receiver.size);
    else if (Kotlin.isType($receiver, IntFType))
      return $receiver;
    else if (Kotlin.isType($receiver, FloatFType))
      return $receiver;
    else if (Kotlin.isType($receiver, BoolFType))
      return $receiver;
    else if (Kotlin.isType($receiver, DummyFType))
      return $receiver;
    else if (Kotlin.isType($receiver, UnknownFType))
      return $receiver;
    else if (Kotlin.isType($receiver, StructFType))
      return $receiver;
    else {
      throw IllegalStateException_init(('Unsupported resolving type ' + $receiver).toString());
    }
  };
  ProgramParser.prototype.getSize_b2mlnm$ = function ($receiver) {
    if (Kotlin.isType($receiver, IntFType))
      return $receiver.typeSize;
    else if (Kotlin.isType($receiver, FloatFType))
      return $receiver.size;
    else if (Kotlin.isType($receiver, PointerFType))
      return this.POINTER_SIZE;
    else if (Kotlin.isType($receiver, TypedefFTypeRef))
      return this.getSize_b2mlnm$(this.fresolve_q1l7zo$($receiver));
    else if (Kotlin.isType($receiver, StructFType))
      return this.getStructTypeInfo_me841z$($receiver.spec).size;
    else if (Kotlin.isType($receiver, ArrayFType))
      if ($receiver.size != null) {
        return Kotlin.imul(this.getSize_b2mlnm$($receiver.elementType), $receiver.size);
      }
       else {
        return this.POINTER_SIZE;
      }
     else {
      throw IllegalStateException_init((Kotlin.getKClassFromExpression($receiver).toString() + ': ' + $receiver).toString());
    }
  };
  ProgramParser.prototype.getStructTypeInfo_61zpoe$ = function (name) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = this.structTypesByName.get_11rb$(name)) != null)
      tmp$_0 = tmp$;
    else {
      throw IllegalStateException_init(("Can't find type by name " + name).toString());
    }
    return tmp$_0;
  };
  ProgramParser.prototype.getStructTypeInfo_me841z$ = function (spec) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = this.structTypesBySpecifier.get_11rb$(spec)) != null)
      tmp$_0 = tmp$;
    else {
      throw IllegalStateException_init(("Can't find type by spec " + spec).toString());
    }
    return tmp$_0;
  };
  ProgramParser.prototype.findNearToken_vux9f0$ = function (row, column) {
    var toIndex = this.size;
    var genericBinarySearch$result;
    genericBinarySearch$break: do {
      var low = 0;
      var high = toIndex - 1 | 0;
      while (low <= high) {
        var mid = (low + high | 0) / 2 | 0;
        var token = this.tokens.get_za3lpa$(mid);
        var comp1 = Kotlin.primitiveCompareTo(token.row, row);
        var mval = comp1 === 0 ? Kotlin.primitiveCompareTo(token.columnMiddle, column) : comp1;
        if (mval < 0)
          low = mid + 1 | 0;
        else if (mval > 0)
          high = mid - 1 | 0;
        else {
          genericBinarySearch$result = mid;
          break genericBinarySearch$break;
        }
      }
      genericBinarySearch$result = low;
    }
     while (false);
    var testIndex = genericBinarySearch$result;
    return getOrNull(this.tokens, testIndex);
  };
  ProgramParser.prototype.contains_pi8gah$ = function ($receiver, token) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = $receiver.start;
    tmp$_0 = $receiver.end;
    tmp$_1 = token.tokenIndex;
    return tmp$ <= tmp$_1 && tmp$_1 <= tmp$_0;
  };
  ProgramParser.prototype.getInnerSymbolsScopeAt_t0suth$ = function (token, scope) {
    if (scope === void 0)
      scope = this.symbols;
    var tmp$;
    if (token != null) {
      tmp$ = scope.children.iterator();
      while (tmp$.hasNext()) {
        var childScope = tmp$.next();
        if (this.contains_pi8gah$(childScope, token))
          return this.getInnerSymbolsScopeAt_t0suth$(token, childScope);
      }
    }
    return scope;
  };
  ProgramParser.prototype.findNodeTreeAtIndex_msjftb$ = function (root, pos, out) {
    if (out === void 0) {
      out = ArrayList_init();
    }
    out.add_11rb$(root);
    var tmp$;
    var visitor = new ChildrenVisitor();
    root.visitChildren_7xaucg$(visitor);
    tmp$ = visitor.out.iterator();
    while (tmp$.hasNext()) {
      var node = tmp$.next();
      var tmp$_0, tmp$_1;
      tmp$_0 = node.pos;
      tmp$_1 = node.endPos;
      if (tmp$_0 <= pos && pos <= tmp$_1) {
        return this.findNodeTreeAtIndex_msjftb$(node, pos, out);
      }
    }
    return out;
  };
  ProgramParser.prototype.findNodeTreeAtToken_p4dkeq$ = function (root, foundToken, out) {
    if (out === void 0) {
      out = ArrayList_init();
    }
    return this.findNodeTreeAtIndex_msjftb$(root, foundToken.tokenIndex, out);
  };
  function ProgramParser$Marker(originalPos, originalRow1, translatedFile, translatedRow1) {
    if (originalPos === void 0)
      originalPos = 0;
    if (originalRow1 === void 0)
      originalRow1 = 0;
    if (translatedFile === void 0)
      translatedFile = '';
    if (translatedRow1 === void 0)
      translatedRow1 = 0;
    this.originalPos = originalPos;
    this.originalRow1 = originalRow1;
    this.translatedFile = translatedFile;
    this.translatedRow1 = translatedRow1;
    this.rowDiff = this.originalRow1 - this.translatedRow1 | 0;
  }
  ProgramParser$Marker.$metadata$ = {kind: Kind_CLASS, simpleName: 'Marker', interfaces: []};
  ProgramParser$Marker.prototype.component1 = function () {
    return this.originalPos;
  };
  ProgramParser$Marker.prototype.component2 = function () {
    return this.originalRow1;
  };
  ProgramParser$Marker.prototype.component3 = function () {
    return this.translatedFile;
  };
  ProgramParser$Marker.prototype.component4 = function () {
    return this.translatedRow1;
  };
  ProgramParser$Marker.prototype.copy_17rbv4$ = function (originalPos, originalRow1, translatedFile, translatedRow1) {
    return new ProgramParser$Marker(originalPos === void 0 ? this.originalPos : originalPos, originalRow1 === void 0 ? this.originalRow1 : originalRow1, translatedFile === void 0 ? this.translatedFile : translatedFile, translatedRow1 === void 0 ? this.translatedRow1 : translatedRow1);
  };
  ProgramParser$Marker.prototype.toString = function () {
    return 'Marker(originalPos=' + Kotlin.toString(this.originalPos) + (', originalRow1=' + Kotlin.toString(this.originalRow1)) + (', translatedFile=' + Kotlin.toString(this.translatedFile)) + (', translatedRow1=' + Kotlin.toString(this.translatedRow1)) + ')';
  };
  ProgramParser$Marker.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.originalPos) | 0;
    result = result * 31 + Kotlin.hashCode(this.originalRow1) | 0;
    result = result * 31 + Kotlin.hashCode(this.translatedFile) | 0;
    result = result * 31 + Kotlin.hashCode(this.translatedRow1) | 0;
    return result;
  };
  ProgramParser$Marker.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.originalPos, other.originalPos) && Kotlin.equals(this.originalRow1, other.originalRow1) && Kotlin.equals(this.translatedFile, other.translatedFile) && Kotlin.equals(this.translatedRow1, other.translatedRow1)))));
  };
  ProgramParser.prototype.consumeLineMarkers = function () {
    var tmp$, tmp$_0, tmp$_1;
    if (equals(this.peekOutside_za3lpa$(), '#')) {
      this.expect_11rb$('#');
      var row = this.read();
      var fileQuoted = this.read();
      if (!startsWith(fileQuoted, 34)) {
        throw IllegalStateException_init(('Invalid # ' + row + ' ' + fileQuoted).toString());
      }
      tmp$ = this.pos;
      tmp$_0 = this.token_za3lpa$(this.pos).row;
      tmp$_1 = toInt(row);
      this.currentMarker = new ProgramParser$Marker(tmp$, tmp$_0, get_cunquoted(fileQuoted), tmp$_1);
      var $receiver = this.markers;
      var element = this.currentMarker;
      $receiver.add_11rb$(element);
    }
  };
  function ProgramParser$Pos(row1, column0) {
    this.row1 = row1;
    this.column0 = column0;
  }
  ProgramParser$Pos.$metadata$ = {kind: Kind_CLASS, simpleName: 'Pos', interfaces: []};
  ProgramParser$Pos.prototype.component1 = function () {
    return this.row1;
  };
  ProgramParser$Pos.prototype.component2 = function () {
    return this.column0;
  };
  ProgramParser$Pos.prototype.copy_vux9f0$ = function (row1, column0) {
    return new ProgramParser$Pos(row1 === void 0 ? this.row1 : row1, column0 === void 0 ? this.column0 : column0);
  };
  ProgramParser$Pos.prototype.toString = function () {
    return 'Pos(row1=' + Kotlin.toString(this.row1) + (', column0=' + Kotlin.toString(this.column0)) + ')';
  };
  ProgramParser$Pos.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.row1) | 0;
    result = result * 31 + Kotlin.hashCode(this.column0) | 0;
    return result;
  };
  ProgramParser$Pos.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.row1, other.row1) && Kotlin.equals(this.column0, other.column0)))));
  };
  function ProgramParser$PosWithFile(row1, column0, file) {
    this.row1 = row1;
    this.column0 = column0;
    this.file = file;
  }
  ProgramParser$PosWithFile.$metadata$ = {kind: Kind_CLASS, simpleName: 'PosWithFile', interfaces: []};
  ProgramParser$PosWithFile.prototype.component1 = function () {
    return this.row1;
  };
  ProgramParser$PosWithFile.prototype.component2 = function () {
    return this.column0;
  };
  ProgramParser$PosWithFile.prototype.component3 = function () {
    return this.file;
  };
  ProgramParser$PosWithFile.prototype.copy_98i29q$ = function (row1, column0, file) {
    return new ProgramParser$PosWithFile(row1 === void 0 ? this.row1 : row1, column0 === void 0 ? this.column0 : column0, file === void 0 ? this.file : file);
  };
  ProgramParser$PosWithFile.prototype.toString = function () {
    return 'PosWithFile(row1=' + Kotlin.toString(this.row1) + (', column0=' + Kotlin.toString(this.column0)) + (', file=' + Kotlin.toString(this.file)) + ')';
  };
  ProgramParser$PosWithFile.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.row1) | 0;
    result = result * 31 + Kotlin.hashCode(this.column0) | 0;
    result = result * 31 + Kotlin.hashCode(this.file) | 0;
    return result;
  };
  ProgramParser$PosWithFile.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.row1, other.row1) && Kotlin.equals(this.column0, other.column0) && Kotlin.equals(this.file, other.file)))));
  };
  ProgramParser.prototype.translatePos_4ld8hy$ = function (pos) {
    throw new NotImplementedError_init();
  };
  ProgramParser.prototype.translatePos_y26shw$ = function (pos) {
    var tmp$;
    tmp$ = reversed(this.markers).iterator();
    while (tmp$.hasNext()) {
      var marker = tmp$.next();
      if (equals(marker.translatedFile, pos.file) && pos.row1 >= marker.translatedRow1) {
        return new ProgramParser$Pos(pos.row1 + marker.rowDiff | 0, pos.column0);
      }
    }
    return null;
  };
  ProgramParser.prototype.toString = function () {
    return "ProgramParser(current='" + this.peekOutside_za3lpa$() + "', pos=" + this.pos + ', token=' + toString(getOrNull(this.tokens, this.pos)) + ', marker=' + this.currentMarker + ')';
  };
  ProgramParser.$metadata$ = {kind: Kind_CLASS, simpleName: 'ProgramParser', interfaces: [FTypeResolver, ProgramParserRef, ListReader]};
  function ChildrenVisitor(out) {
    if (out === void 0) {
      out = ArrayList_init();
    }
    this.out = out;
  }
  ChildrenVisitor.prototype.clear = function () {
    this.out.clear();
  };
  ChildrenVisitor.prototype.invoke_dixj5a$ = function (a) {
    if (a != null) {
      this.out.add_11rb$(a);
    }
  };
  ChildrenVisitor.prototype.invoke_pdej7n$ = function (items) {
    var tmp$;
    tmp$ = items.iterator();
    while (tmp$.hasNext()) {
      var it = tmp$.next();
      this.invoke_dixj5a$(it);
    }
  };
  ChildrenVisitor.prototype.invoke_487qa8$ = function (a, b) {
    this.invoke_dixj5a$(a);
    this.invoke_dixj5a$(b);
  };
  ChildrenVisitor.prototype.invoke_3rml6a$ = function (a, b, c) {
    this.invoke_dixj5a$(a);
    this.invoke_dixj5a$(b);
    this.invoke_dixj5a$(c);
  };
  ChildrenVisitor.$metadata$ = {kind: Kind_CLASS, simpleName: 'ChildrenVisitor', interfaces: []};
  function StructField(name, type, offset, size, node) {
    this.name = name;
    this.type = type;
    this.offset = offset;
    this.size = size;
    this.node = node;
    this.offsetName = 'OFFSET_' + this.name;
  }
  StructField.$metadata$ = {kind: Kind_CLASS, simpleName: 'StructField', interfaces: []};
  StructField.prototype.component1 = function () {
    return this.name;
  };
  StructField.prototype.component2 = function () {
    return this.type;
  };
  StructField.prototype.component3 = function () {
    return this.offset;
  };
  StructField.prototype.component4 = function () {
    return this.size;
  };
  StructField.prototype.component5 = function () {
    return this.node;
  };
  StructField.prototype.copy_8vqiwd$ = function (name, type, offset, size, node) {
    return new StructField(name === void 0 ? this.name : name, type === void 0 ? this.type : type, offset === void 0 ? this.offset : offset, size === void 0 ? this.size : size, node === void 0 ? this.node : node);
  };
  StructField.prototype.toString = function () {
    return 'StructField(name=' + Kotlin.toString(this.name) + (', type=' + Kotlin.toString(this.type)) + (', offset=' + Kotlin.toString(this.offset)) + (', size=' + Kotlin.toString(this.size)) + (', node=' + Kotlin.toString(this.node)) + ')';
  };
  StructField.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.offset) | 0;
    result = result * 31 + Kotlin.hashCode(this.size) | 0;
    result = result * 31 + Kotlin.hashCode(this.node) | 0;
    return result;
  };
  StructField.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.type, other.type) && Kotlin.equals(this.offset, other.offset) && Kotlin.equals(this.size, other.size) && Kotlin.equals(this.node, other.node)))));
  };
  function StructTypeInfo(name, spec, size) {
    if (size === void 0)
      size = 0;
    this.name = name;
    this.spec = spec;
    this.size = size;
    this._fieldsByName_0 = LinkedHashMap_init();
    this._fields_0 = ArrayList_init();
  }
  Object.defineProperty(StructTypeInfo.prototype, 'fields', {get: function () {
    return this._fields_0;
  }});
  Object.defineProperty(StructTypeInfo.prototype, 'fieldsByName', {get: function () {
    return this._fieldsByName_0;
  }});
  StructTypeInfo.prototype.addField_1laady$ = function (field) {
    this._fields_0.add_11rb$(field);
    var $receiver = this._fieldsByName_0;
    var key = field.name;
    $receiver.put_xwzc9p$(key, field);
  };
  StructTypeInfo.$metadata$ = {kind: Kind_CLASS, simpleName: 'StructTypeInfo', interfaces: []};
  StructTypeInfo.prototype.component1 = function () {
    return this.name;
  };
  StructTypeInfo.prototype.component2 = function () {
    return this.spec;
  };
  StructTypeInfo.prototype.component3 = function () {
    return this.size;
  };
  StructTypeInfo.prototype.copy_jwwz7r$ = function (name, spec, size) {
    return new StructTypeInfo(name === void 0 ? this.name : name, spec === void 0 ? this.spec : spec, size === void 0 ? this.size : size);
  };
  StructTypeInfo.prototype.toString = function () {
    return 'StructTypeInfo(name=' + Kotlin.toString(this.name) + (', spec=' + Kotlin.toString(this.spec)) + (', size=' + Kotlin.toString(this.size)) + ')';
  };
  StructTypeInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.spec) | 0;
    result = result * 31 + Kotlin.hashCode(this.size) | 0;
    return result;
  };
  StructTypeInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.spec, other.spec) && Kotlin.equals(this.size, other.size)))));
  };
  function Node() {
    this.tagged = false;
    this.pos = -1;
    this.endPos = -1;
    this.func = null;
  }
  Node.$metadata$ = {kind: Kind_CLASS, simpleName: 'Node', interfaces: []};
  function IdDecl(name) {
    Node.call(this);
    this.name = name;
  }
  IdDecl.prototype.toString = function () {
    return this.name;
  };
  IdDecl.prototype.visitChildren_7xaucg$ = function (visit) {
  };
  IdDecl.$metadata$ = {kind: Kind_CLASS, simpleName: 'IdDecl', interfaces: [Node]};
  IdDecl.prototype.component1 = function () {
    return this.name;
  };
  IdDecl.prototype.copy_61zpoe$ = function (name) {
    return new IdDecl(name === void 0 ? this.name : name);
  };
  IdDecl.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    return result;
  };
  IdDecl.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.name, other.name))));
  };
  function Id(name, type) {
    Id$Companion_getInstance();
    Expr.call(this);
    this.name = name;
    this.type_f8jl24$_0 = type;
    Id$Companion_getInstance().validate_61zpoe$(this.name);
  }
  Object.defineProperty(Id.prototype, 'type', {get: function () {
    return this.type_f8jl24$_0;
  }});
  function Id$Companion() {
    Id$Companion_instance = this;
  }
  Id$Companion.prototype.isValid_61zpoe$ = function (name) {
    return this.isValidMsg_61zpoe$(name) == null;
  };
  var toBoxedChar = Kotlin.toBoxedChar;
  Id$Companion.prototype.isValidMsg_61zpoe$ = function (name) {
    if (name.length === 0)
      return 'Empty is not a valid identifier';
    if (!isAlphaOrUnderscore(name.charCodeAt(0)))
      return 'Identifier must start with a-zA-Z_';
    var all$result;
    all$break: do {
      var tmp$;
      tmp$ = iterator(name);
      while (tmp$.hasNext()) {
        var element = unboxChar(tmp$.next());
        if (!isAlnumOrUnderscore(unboxChar(toBoxedChar(element)))) {
          all$result = false;
          break all$break;
        }
      }
      all$result = true;
    }
     while (false);
    if (!all$result)
      return 'Identifier can only contain a-zA-Z0-9_';
    return null;
  };
  Id$Companion.prototype.validate_61zpoe$ = function (name) {
    var tmp$;
    tmp$ = this.isValidMsg_61zpoe$(name);
    if (tmp$ == null) {
      return name;
    }
    throw new ExpectException(tmp$);
  };
  Id$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Id$Companion_instance = null;
  function Id$Companion_getInstance() {
    if (Id$Companion_instance === null) {
      new Id$Companion();
    }
    return Id$Companion_instance;
  }
  Id.prototype.visitChildren_7xaucg$ = function (visit) {
  };
  Id.prototype.toString = function () {
    return this.name;
  };
  Id.$metadata$ = {kind: Kind_CLASS, simpleName: 'Id', interfaces: [Expr]};
  Id.prototype.component1 = function () {
    return this.name;
  };
  Id.prototype.component2 = function () {
    return this.type;
  };
  Id.prototype.copy_eupt6l$ = function (name, type) {
    return new Id(name === void 0 ? this.name : name, type === void 0 ? this.type : type);
  };
  Id.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    return result;
  };
  Id.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.type, other.type)))));
  };
  function StringConstant(raw) {
    StringConstant$Companion_getInstance();
    Expr.call(this);
    this.raw = raw;
    StringConstant$Companion_getInstance().validate_61zpoe$(this.raw);
  }
  Object.defineProperty(StringConstant.prototype, 'type', {get: function () {
    return FType$Companion_getInstance().CHAR_PTR;
  }});
  function StringConstant$Companion() {
    StringConstant$Companion_instance = this;
  }
  StringConstant$Companion.prototype.isValid_61zpoe$ = function (data) {
    return this.isValidMsg_61zpoe$(data) == null;
  };
  StringConstant$Companion.prototype.isValidMsg_61zpoe$ = function (data) {
    if (!startsWith(data, 34))
      return "Not starting with '\"'";
    return null;
  };
  StringConstant$Companion.prototype.validate_61zpoe$ = function (data) {
    var tmp$;
    tmp$ = this.isValidMsg_61zpoe$(data);
    if (tmp$ == null) {
      return;
    }
    throw new ExpectException(tmp$);
  };
  StringConstant$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var StringConstant$Companion_instance = null;
  function StringConstant$Companion_getInstance() {
    if (StringConstant$Companion_instance === null) {
      new StringConstant$Companion();
    }
    return StringConstant$Companion_instance;
  }
  StringConstant.prototype.visitChildren_7xaucg$ = function (visit) {
  };
  StringConstant.$metadata$ = {kind: Kind_CLASS, simpleName: 'StringConstant', interfaces: [Expr]};
  StringConstant.prototype.component1 = function () {
    return this.raw;
  };
  StringConstant.prototype.copy_61zpoe$ = function (raw) {
    return new StringConstant(raw === void 0 ? this.raw : raw);
  };
  StringConstant.prototype.toString = function () {
    return 'StringConstant(raw=' + Kotlin.toString(this.raw) + ')';
  };
  StringConstant.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.raw) | 0;
    return result;
  };
  StringConstant.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.raw, other.raw))));
  };
  function CharConstant(raw) {
    CharConstant$Companion_getInstance();
    Expr.call(this);
    this.raw = raw;
    CharConstant$Companion_getInstance().validate_61zpoe$(this.raw);
  }
  Object.defineProperty(CharConstant.prototype, 'type', {get: function () {
    return FType$Companion_getInstance().CHAR;
  }});
  function CharConstant$Companion() {
    CharConstant$Companion_instance = this;
  }
  CharConstant$Companion.prototype.isValid_61zpoe$ = function (data) {
    return this.isValidMsg_61zpoe$(data) == null;
  };
  CharConstant$Companion.prototype.isValidMsg_61zpoe$ = function (data) {
    if (!startsWith(data, 39))
      return 'Not starting with "\'"';
    return null;
  };
  CharConstant$Companion.prototype.validate_61zpoe$ = function (data) {
    var tmp$;
    tmp$ = this.isValidMsg_61zpoe$(data);
    if (tmp$ == null) {
      return;
    }
    throw new ExpectException(tmp$);
  };
  CharConstant$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var CharConstant$Companion_instance = null;
  function CharConstant$Companion_getInstance() {
    if (CharConstant$Companion_instance === null) {
      new CharConstant$Companion();
    }
    return CharConstant$Companion_instance;
  }
  CharConstant.prototype.visitChildren_7xaucg$ = function (visit) {
  };
  CharConstant.$metadata$ = {kind: Kind_CLASS, simpleName: 'CharConstant', interfaces: [Expr]};
  CharConstant.prototype.component1 = function () {
    return this.raw;
  };
  CharConstant.prototype.copy_61zpoe$ = function (raw) {
    return new CharConstant(raw === void 0 ? this.raw : raw);
  };
  CharConstant.prototype.toString = function () {
    return 'CharConstant(raw=' + Kotlin.toString(this.raw) + ')';
  };
  CharConstant.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.raw) | 0;
    return result;
  };
  CharConstant.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.raw, other.raw))));
  };
  function IntConstant(value) {
    return new IntConstant_0(value.toString());
  }
  function IntConstant_0(data) {
    IntConstant$Companion_getInstance();
    Expr.call(this);
    this.data = data;
    this.dataWithoutSuffix = removeSuffix(removeSuffix(removeSuffix(this.data, 'u'), 'l'), 'L');
    IntConstant$Companion_getInstance().validate_61zpoe$(this.data);
  }
  Object.defineProperty(IntConstant_0.prototype, 'type', {get: function () {
    return FType$Companion_getInstance().INT;
  }});
  Object.defineProperty(IntConstant_0.prototype, 'value', {get: function () {
    if (startsWith_0(this.dataWithoutSuffix, '0x') || startsWith_0(this.dataWithoutSuffix, '0X')) {
      return toInt_0(this.dataWithoutSuffix.substring(2), 16);
    }
     else if (startsWith_0(this.dataWithoutSuffix, '0'))
      return toInt_0(this.dataWithoutSuffix, 8);
    else
      return toInt(this.dataWithoutSuffix);
  }});
  function IntConstant$Companion() {
    IntConstant$Companion_instance = this;
  }
  IntConstant$Companion.prototype.isValid_61zpoe$ = function (data) {
    return this.isValidMsg_61zpoe$(data) == null;
  };
  IntConstant$Companion.prototype.isValidMsg_61zpoe$ = function (data) {
    if (contains(data, '.'))
      return 'Decimal';
    if (startsWith(data, 45))
      return null;
    if (startsWith_0(data, '0x'))
      return null;
    if (startsWith_0(data, '0'))
      return null;
    var $receiver = new CharRange(48, 57);
    var element = firstOrNull(data);
    if (element != null && $receiver.contains_mef7kx$(element) && !contains_0(data, 46) && !endsWith(data, 102))
      return null;
    return 'Constant can only contain digits';
  };
  IntConstant$Companion.prototype.validate_61zpoe$ = function (data) {
    var tmp$;
    tmp$ = this.isValidMsg_61zpoe$(data);
    if (tmp$ == null) {
      return;
    }
    throw new ExpectException(tmp$);
  };
  IntConstant$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var IntConstant$Companion_instance = null;
  function IntConstant$Companion_getInstance() {
    if (IntConstant$Companion_instance === null) {
      new IntConstant$Companion();
    }
    return IntConstant$Companion_instance;
  }
  IntConstant_0.prototype.visitChildren_7xaucg$ = function (visit) {
  };
  IntConstant_0.prototype.toString = function () {
    return this.data;
  };
  IntConstant_0.$metadata$ = {kind: Kind_CLASS, simpleName: 'IntConstant', interfaces: [Expr]};
  IntConstant_0.prototype.component1 = function () {
    return this.data;
  };
  IntConstant_0.prototype.copy_61zpoe$ = function (data) {
    return new IntConstant_0(data === void 0 ? this.data : data);
  };
  IntConstant_0.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.data) | 0;
    return result;
  };
  IntConstant_0.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.data, other.data))));
  };
  function DoubleConstant(data) {
    DoubleConstant$Companion_getInstance();
    Expr.call(this);
    this.data = data;
    this.dataWithoutSuffix = removeSuffix(this.data, 'f');
    DoubleConstant$Companion_getInstance().validate_61zpoe$(this.data);
  }
  Object.defineProperty(DoubleConstant.prototype, 'type', {get: function () {
    return FType$Companion_getInstance().DOUBLE;
  }});
  Object.defineProperty(DoubleConstant.prototype, 'value', {get: function () {
    return toDouble(this.dataWithoutSuffix);
  }});
  function DoubleConstant$Companion() {
    DoubleConstant$Companion_instance = this;
  }
  DoubleConstant$Companion.prototype.isValid_61zpoe$ = function (data) {
    return this.isValidMsg_61zpoe$(data) == null;
  };
  DoubleConstant$Companion.prototype.isValidMsg_61zpoe$ = function (data) {
    var $receiver = new CharRange(48, 57);
    var element = firstOrNull(data);
    if (element != null && $receiver.contains_mef7kx$(element) || firstOrNull(data) === 46)
      return null;
    return 'Constant can only contain digits';
  };
  DoubleConstant$Companion.prototype.validate_61zpoe$ = function (data) {
    var tmp$;
    tmp$ = this.isValidMsg_61zpoe$(data);
    if (tmp$ == null) {
      return;
    }
    throw new ExpectException(tmp$);
  };
  DoubleConstant$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var DoubleConstant$Companion_instance = null;
  function DoubleConstant$Companion_getInstance() {
    if (DoubleConstant$Companion_instance === null) {
      new DoubleConstant$Companion();
    }
    return DoubleConstant$Companion_instance;
  }
  DoubleConstant.prototype.visitChildren_7xaucg$ = function (visit) {
  };
  DoubleConstant.prototype.toString = function () {
    return this.data;
  };
  DoubleConstant.$metadata$ = {kind: Kind_CLASS, simpleName: 'DoubleConstant', interfaces: [Expr]};
  DoubleConstant.prototype.component1 = function () {
    return this.data;
  };
  DoubleConstant.prototype.copy_61zpoe$ = function (data) {
    return new DoubleConstant(data === void 0 ? this.data : data);
  };
  DoubleConstant.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.data) | 0;
    return result;
  };
  DoubleConstant.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.data, other.data))));
  };
  function Expr() {
    Node.call(this);
  }
  Expr.$metadata$ = {kind: Kind_CLASS, simpleName: 'Expr', interfaces: [Node]};
  function not($receiver) {
    return new UnaryExpr('!', $receiver);
  }
  function LValue() {
    Expr.call(this);
  }
  LValue.$metadata$ = {kind: Kind_CLASS, simpleName: 'LValue', interfaces: [Expr]};
  function CommaExpr(exprs) {
    Expr.call(this);
    this.exprs = exprs;
  }
  CommaExpr.prototype.visitChildren_7xaucg$ = function (visit) {
    visit.invoke_pdej7n$(this.exprs);
  };
  Object.defineProperty(CommaExpr.prototype, 'type', {get: function () {
    return last(this.exprs).type;
  }});
  CommaExpr.$metadata$ = {kind: Kind_CLASS, simpleName: 'CommaExpr', interfaces: [Expr]};
  CommaExpr.prototype.component1 = function () {
    return this.exprs;
  };
  CommaExpr.prototype.copy_fcq9q1$ = function (exprs) {
    return new CommaExpr(exprs === void 0 ? this.exprs : exprs);
  };
  CommaExpr.prototype.toString = function () {
    return 'CommaExpr(exprs=' + Kotlin.toString(this.exprs) + ')';
  };
  CommaExpr.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.exprs) | 0;
    return result;
  };
  CommaExpr.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.exprs, other.exprs))));
  };
  function ConstExpr(expr) {
    Expr.call(this);
    this.expr = expr;
  }
  ConstExpr.prototype.visitChildren_7xaucg$ = function (visit) {
    visit.invoke_dixj5a$(this.expr);
  };
  Object.defineProperty(ConstExpr.prototype, 'type', {get: function () {
    return this.expr.type;
  }});
  ConstExpr.$metadata$ = {kind: Kind_CLASS, simpleName: 'ConstExpr', interfaces: [Expr]};
  ConstExpr.prototype.component1 = function () {
    return this.expr;
  };
  ConstExpr.prototype.copy_2q1gro$ = function (expr) {
    return new ConstExpr(expr === void 0 ? this.expr : expr);
  };
  ConstExpr.prototype.toString = function () {
    return 'ConstExpr(expr=' + Kotlin.toString(this.expr) + ')';
  };
  ConstExpr.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.expr) | 0;
    return result;
  };
  ConstExpr.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.expr, other.expr))));
  };
  function SingleOperandExpr() {
    Expr.call(this);
  }
  SingleOperandExpr.$metadata$ = {kind: Kind_CLASS, simpleName: 'SingleOperandExpr', interfaces: [Expr]};
  function BaseUnaryOp() {
    SingleOperandExpr.call(this);
  }
  BaseUnaryOp.$metadata$ = {kind: Kind_CLASS, simpleName: 'BaseUnaryOp', interfaces: [SingleOperandExpr]};
  function UnaryExpr(op, rvalue) {
    BaseUnaryOp.call(this);
    this.op_ym2neo$_0 = op;
    this.rvalue = rvalue;
    this.rvalueType = this.rvalue.type;
  }
  Object.defineProperty(UnaryExpr.prototype, 'op', {get: function () {
    return this.op_ym2neo$_0;
  }});
  Object.defineProperty(UnaryExpr.prototype, 'operand', {get: function () {
    return this.rvalue;
  }});
  UnaryExpr.prototype.visitChildren_7xaucg$ = function (visit) {
    visit.invoke_dixj5a$(this.rvalue);
  };
  Object.defineProperty(UnaryExpr.prototype, 'type', {get: function () {
    switch (this.op) {
      case '*':
        return Kotlin.isType(this.rvalueType, BasePointerFType) ? this.rvalueType.elementType : this.rvalueType;
      case '&':
        return new PointerFType(this.rvalueType, false);
      default:return this.rvalueType;
    }
  }});
  UnaryExpr.$metadata$ = {kind: Kind_CLASS, simpleName: 'UnaryExpr', interfaces: [BaseUnaryOp]};
  UnaryExpr.prototype.component1 = function () {
    return this.op;
  };
  UnaryExpr.prototype.component2 = function () {
    return this.rvalue;
  };
  UnaryExpr.prototype.copy_e865ym$ = function (op, rvalue) {
    return new UnaryExpr(op === void 0 ? this.op : op, rvalue === void 0 ? this.rvalue : rvalue);
  };
  UnaryExpr.prototype.toString = function () {
    return 'UnaryExpr(op=' + Kotlin.toString(this.op) + (', rvalue=' + Kotlin.toString(this.rvalue)) + ')';
  };
  UnaryExpr.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.op) | 0;
    result = result * 31 + Kotlin.hashCode(this.rvalue) | 0;
    return result;
  };
  UnaryExpr.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.op, other.op) && Kotlin.equals(this.rvalue, other.rvalue)))));
  };
  function PostfixExpr(lvalue, op) {
    BaseUnaryOp.call(this);
    this.lvalue = lvalue;
    this.op_e4ea6e$_0 = op;
  }
  Object.defineProperty(PostfixExpr.prototype, 'op', {get: function () {
    return this.op_e4ea6e$_0;
  }});
  Object.defineProperty(PostfixExpr.prototype, 'operand', {get: function () {
    return this.lvalue;
  }});
  Object.defineProperty(PostfixExpr.prototype, 'type', {get: function () {
    return this.lvalue.type;
  }});
  PostfixExpr.prototype.visitChildren_7xaucg$ = function (visit) {
    visit.invoke_dixj5a$(this.lvalue);
  };
  PostfixExpr.$metadata$ = {kind: Kind_CLASS, simpleName: 'PostfixExpr', interfaces: [BaseUnaryOp]};
  PostfixExpr.prototype.component1 = function () {
    return this.lvalue;
  };
  PostfixExpr.prototype.component2 = function () {
    return this.op;
  };
  PostfixExpr.prototype.copy_uwweuu$ = function (lvalue, op) {
    return new PostfixExpr(lvalue === void 0 ? this.lvalue : lvalue, op === void 0 ? this.op : op);
  };
  PostfixExpr.prototype.toString = function () {
    return 'PostfixExpr(lvalue=' + Kotlin.toString(this.lvalue) + (', op=' + Kotlin.toString(this.op)) + ')';
  };
  PostfixExpr.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.lvalue) | 0;
    result = result * 31 + Kotlin.hashCode(this.op) | 0;
    return result;
  };
  PostfixExpr.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.lvalue, other.lvalue) && Kotlin.equals(this.op, other.op)))));
  };
  function AssignExpr(l, op, r) {
    Expr.call(this);
    this.l = l;
    this.op = op;
    this.r = r;
  }
  Object.defineProperty(AssignExpr.prototype, 'type', {get: function () {
    return this.l.type;
  }});
  AssignExpr.prototype.visitChildren_7xaucg$ = function (visit) {
    visit.invoke_487qa8$(this.l, this.r);
  };
  AssignExpr.$metadata$ = {kind: Kind_CLASS, simpleName: 'AssignExpr', interfaces: [Expr]};
  AssignExpr.prototype.component1 = function () {
    return this.l;
  };
  AssignExpr.prototype.component2 = function () {
    return this.op;
  };
  AssignExpr.prototype.component3 = function () {
    return this.r;
  };
  AssignExpr.prototype.copy_m5l5wm$ = function (l, op, r) {
    return new AssignExpr(l === void 0 ? this.l : l, op === void 0 ? this.op : op, r === void 0 ? this.r : r);
  };
  AssignExpr.prototype.toString = function () {
    return 'AssignExpr(l=' + Kotlin.toString(this.l) + (', op=' + Kotlin.toString(this.op)) + (', r=' + Kotlin.toString(this.r)) + ')';
  };
  AssignExpr.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.l) | 0;
    result = result * 31 + Kotlin.hashCode(this.op) | 0;
    result = result * 31 + Kotlin.hashCode(this.r) | 0;
    return result;
  };
  AssignExpr.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.l, other.l) && Kotlin.equals(this.op, other.op) && Kotlin.equals(this.r, other.r)))));
  };
  function ArrayAccessExpr(expr, index) {
    LValue.call(this);
    this.expr = expr;
    this.index = index;
    this.arrayType = this.expr.type;
  }
  ArrayAccessExpr.prototype.visitChildren_7xaucg$ = function (visit) {
    visit.invoke_487qa8$(this.expr, this.index);
  };
  Object.defineProperty(ArrayAccessExpr.prototype, 'type', {get: function () {
    var tmp$;
    tmp$ = this.arrayType;
    if (Kotlin.isType(tmp$, PointerFType))
      return this.arrayType.elementType;
    else if (Kotlin.isType(tmp$, ArrayFType))
      return this.arrayType.elementType;
    else
      return FType$Companion_getInstance().INT;
  }});
  ArrayAccessExpr.$metadata$ = {kind: Kind_CLASS, simpleName: 'ArrayAccessExpr', interfaces: [LValue]};
  ArrayAccessExpr.prototype.component1 = function () {
    return this.expr;
  };
  ArrayAccessExpr.prototype.component2 = function () {
    return this.index;
  };
  ArrayAccessExpr.prototype.copy_kh1b2s$ = function (expr, index) {
    return new ArrayAccessExpr(expr === void 0 ? this.expr : expr, index === void 0 ? this.index : index);
  };
  ArrayAccessExpr.prototype.toString = function () {
    return 'ArrayAccessExpr(expr=' + Kotlin.toString(this.expr) + (', index=' + Kotlin.toString(this.index)) + ')';
  };
  ArrayAccessExpr.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.expr) | 0;
    result = result * 31 + Kotlin.hashCode(this.index) | 0;
    return result;
  };
  ArrayAccessExpr.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.expr, other.expr) && Kotlin.equals(this.index, other.index)))));
  };
  function FieldAccessExpr(expr, id, indirect, type) {
    LValue.call(this);
    this.expr = expr;
    this.id = id;
    this.indirect = indirect;
    this.type_5b7vbq$_0 = type;
  }
  Object.defineProperty(FieldAccessExpr.prototype, 'type', {get: function () {
    return this.type_5b7vbq$_0;
  }});
  FieldAccessExpr.prototype.visitChildren_7xaucg$ = function (visit) {
    visit.invoke_dixj5a$(this.expr);
  };
  FieldAccessExpr.$metadata$ = {kind: Kind_CLASS, simpleName: 'FieldAccessExpr', interfaces: [LValue]};
  FieldAccessExpr.prototype.component1 = function () {
    return this.expr;
  };
  FieldAccessExpr.prototype.component2 = function () {
    return this.id;
  };
  FieldAccessExpr.prototype.component3 = function () {
    return this.indirect;
  };
  FieldAccessExpr.prototype.component4 = function () {
    return this.type;
  };
  FieldAccessExpr.prototype.copy_h0a234$ = function (expr, id, indirect, type) {
    return new FieldAccessExpr(expr === void 0 ? this.expr : expr, id === void 0 ? this.id : id, indirect === void 0 ? this.indirect : indirect, type === void 0 ? this.type : type);
  };
  FieldAccessExpr.prototype.toString = function () {
    return 'FieldAccessExpr(expr=' + Kotlin.toString(this.expr) + (', id=' + Kotlin.toString(this.id)) + (', indirect=' + Kotlin.toString(this.indirect)) + (', type=' + Kotlin.toString(this.type)) + ')';
  };
  FieldAccessExpr.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.expr) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.indirect) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    return result;
  };
  FieldAccessExpr.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.expr, other.expr) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.indirect, other.indirect) && Kotlin.equals(this.type, other.type)))));
  };
  function CallExpr(expr, args) {
    Expr.call(this);
    this.expr = expr;
    this.args = args;
  }
  Object.defineProperty(CallExpr.prototype, 'type', {get: function () {
    var tmp$;
    var etype = this.expr.type;
    if (Kotlin.isType(etype, FunctionFType))
      tmp$ = etype.retType;
    else
      tmp$ = etype;
    return tmp$;
  }});
  CallExpr.prototype.visitChildren_7xaucg$ = function (visit) {
    visit.invoke_dixj5a$(this.expr);
    visit.invoke_pdej7n$(this.args);
  };
  CallExpr.$metadata$ = {kind: Kind_CLASS, simpleName: 'CallExpr', interfaces: [Expr]};
  CallExpr.prototype.component1 = function () {
    return this.expr;
  };
  CallExpr.prototype.component2 = function () {
    return this.args;
  };
  CallExpr.prototype.copy_s85wwf$ = function (expr, args) {
    return new CallExpr(expr === void 0 ? this.expr : expr, args === void 0 ? this.args : args);
  };
  CallExpr.prototype.toString = function () {
    return 'CallExpr(expr=' + Kotlin.toString(this.expr) + (', args=' + Kotlin.toString(this.args)) + ')';
  };
  CallExpr.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.expr) | 0;
    result = result * 31 + Kotlin.hashCode(this.args) | 0;
    return result;
  };
  CallExpr.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.expr, other.expr) && Kotlin.equals(this.args, other.args)))));
  };
  function OperatorsExpr(exprs, ops) {
    OperatorsExpr$Companion_getInstance();
    Expr.call(this);
    this.exprs = exprs;
    this.ops = ops;
  }
  Object.defineProperty(OperatorsExpr.prototype, 'type', {get: function () {
    return first(this.exprs).type;
  }});
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var LinkedHashMap_init_1 = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  function OperatorsExpr$Companion() {
    OperatorsExpr$Companion_instance = this;
    var $receiver = withIndex(listOf(['*', '/', '%', '+', '-', '<<', '>>', '<', '<=', '>', '>=', '==', '!=', '&', '|', '&&', '||', '=', '*=', '/=', '%=', '+=', '-=', '<<=', '>>=', '&=', '^=', '|=']));
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault($receiver, 10)), 16);
    var destination = LinkedHashMap_init_1(capacity);
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var pair = to(element.value, element.index);
      destination.put_xwzc9p$(pair.first, pair.second);
    }
    this.precedences = destination;
  }
  OperatorsExpr$Companion.prototype.compareOps_puj7f4$ = function (l, r) {
    var tmp$, tmp$_0;
    return Kotlin.primitiveCompareTo((tmp$ = this.precedences.get_11rb$(l)) != null ? tmp$ : -1, (tmp$_0 = this.precedences.get_11rb$(r)) != null ? tmp$_0 : -1);
  };
  OperatorsExpr$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var OperatorsExpr$Companion_instance = null;
  function OperatorsExpr$Companion_getInstance() {
    if (OperatorsExpr$Companion_instance === null) {
      new OperatorsExpr$Companion();
    }
    return OperatorsExpr$Companion_instance;
  }
  OperatorsExpr.prototype.visitChildren_7xaucg$ = function (visit) {
    visit.invoke_pdej7n$(this.exprs);
  };
  OperatorsExpr.prototype.expand = function () {
    var tmp$, tmp$_0;
    var out = new Binop(this.exprs.get_za3lpa$(0), this.ops.get_za3lpa$(0), this.exprs.get_za3lpa$(1));
    tmp$ = zip(drop(this.exprs, 2), drop(this.ops, 1)).iterator();
    while (tmp$.hasNext()) {
      var tmp$_1 = tmp$.next();
      var next = tmp$_1.component1(), op = tmp$_1.component2();
      if (OperatorsExpr$Companion_getInstance().compareOps_puj7f4$(out.op, op) > 0) {
        tmp$_0 = new Binop(out.l, out.op, new Binop(out.r, op, next));
      }
       else {
        tmp$_0 = new Binop(out, op, next);
      }
      out = tmp$_0;
    }
    return out;
  };
  OperatorsExpr.$metadata$ = {kind: Kind_CLASS, simpleName: 'OperatorsExpr', interfaces: [Expr]};
  OperatorsExpr.prototype.component1 = function () {
    return this.exprs;
  };
  OperatorsExpr.prototype.component2 = function () {
    return this.ops;
  };
  OperatorsExpr.prototype.copy_awyua6$ = function (exprs, ops) {
    return new OperatorsExpr(exprs === void 0 ? this.exprs : exprs, ops === void 0 ? this.ops : ops);
  };
  OperatorsExpr.prototype.toString = function () {
    return 'OperatorsExpr(exprs=' + Kotlin.toString(this.exprs) + (', ops=' + Kotlin.toString(this.ops)) + ')';
  };
  OperatorsExpr.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.exprs) | 0;
    result = result * 31 + Kotlin.hashCode(this.ops) | 0;
    return result;
  };
  OperatorsExpr.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.exprs, other.exprs) && Kotlin.equals(this.ops, other.ops)))));
  };
  function Binop(l, op, r) {
    Expr.call(this);
    this.l = l;
    this.op = op;
    this.r = r;
  }
  Binop.prototype.visitChildren_7xaucg$ = function (visit) {
    visit.invoke_487qa8$(this.l, this.r);
  };
  Object.defineProperty(Binop.prototype, 'type', {get: function () {
    switch (this.op) {
      case '==':
      case '!=':
      case '<':
      case '<=':
      case '>':
      case '>=':
        return FType$Companion_getInstance().BOOL;
      default:if (Kotlin.isType(this.l.type, BasePointerFType)) {
          if (equals(this.op, '-'))
            return FType$Companion_getInstance().INT;
          else
            return this.l.type;
        }
         else
          return this.l.type;
    }
  }});
  Binop.$metadata$ = {kind: Kind_CLASS, simpleName: 'Binop', interfaces: [Expr]};
  Binop.prototype.component1 = function () {
    return this.l;
  };
  Binop.prototype.component2 = function () {
    return this.op;
  };
  Binop.prototype.component3 = function () {
    return this.r;
  };
  Binop.prototype.copy_m5l5wm$ = function (l, op, r) {
    return new Binop(l === void 0 ? this.l : l, op === void 0 ? this.op : op, r === void 0 ? this.r : r);
  };
  Binop.prototype.toString = function () {
    return 'Binop(l=' + Kotlin.toString(this.l) + (', op=' + Kotlin.toString(this.op)) + (', r=' + Kotlin.toString(this.r)) + ')';
  };
  Binop.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.l) | 0;
    result = result * 31 + Kotlin.hashCode(this.op) | 0;
    result = result * 31 + Kotlin.hashCode(this.r) | 0;
    return result;
  };
  Binop.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.l, other.l) && Kotlin.equals(this.op, other.op) && Kotlin.equals(this.r, other.r)))));
  };
  function Stm() {
    Node.call(this);
  }
  Stm.$metadata$ = {kind: Kind_CLASS, simpleName: 'Stm', interfaces: [Node]};
  function RawStm(raw) {
    Stm.call(this);
    this.raw = raw;
  }
  RawStm.prototype.visitChildren_7xaucg$ = function (visit) {
  };
  RawStm.$metadata$ = {kind: Kind_CLASS, simpleName: 'RawStm', interfaces: [Stm]};
  RawStm.prototype.component1 = function () {
    return this.raw;
  };
  RawStm.prototype.copy_61zpoe$ = function (raw) {
    return new RawStm(raw === void 0 ? this.raw : raw);
  };
  RawStm.prototype.toString = function () {
    return 'RawStm(raw=' + Kotlin.toString(this.raw) + ')';
  };
  RawStm.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.raw) | 0;
    return result;
  };
  RawStm.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.raw, other.raw))));
  };
  function CommentStm(comment) {
    Stm.call(this);
    this.comment = comment;
    this.multiline = contains_0(this.comment, 10);
  }
  CommentStm.prototype.visitChildren_7xaucg$ = function (visit) {
  };
  CommentStm.$metadata$ = {kind: Kind_CLASS, simpleName: 'CommentStm', interfaces: [Stm]};
  CommentStm.prototype.component1 = function () {
    return this.comment;
  };
  CommentStm.prototype.copy_61zpoe$ = function (comment) {
    return new CommentStm(comment === void 0 ? this.comment : comment);
  };
  CommentStm.prototype.toString = function () {
    return 'CommentStm(comment=' + Kotlin.toString(this.comment) + ')';
  };
  CommentStm.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.comment) | 0;
    return result;
  };
  CommentStm.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.comment, other.comment))));
  };
  function EmptyStm(reason) {
    Stm.call(this);
    this.reason = reason;
  }
  EmptyStm.prototype.visitChildren_7xaucg$ = function (visit) {
  };
  EmptyStm.$metadata$ = {kind: Kind_CLASS, simpleName: 'EmptyStm', interfaces: [Stm]};
  EmptyStm.prototype.component1 = function () {
    return this.reason;
  };
  EmptyStm.prototype.copy_61zpoe$ = function (reason) {
    return new EmptyStm(reason === void 0 ? this.reason : reason);
  };
  EmptyStm.prototype.toString = function () {
    return 'EmptyStm(reason=' + Kotlin.toString(this.reason) + ')';
  };
  EmptyStm.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.reason) | 0;
    return result;
  };
  EmptyStm.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.reason, other.reason))));
  };
  function IfElse(cond, strue, sfalse) {
    Stm.call(this);
    this.cond = cond;
    this.strue = strue;
    this.sfalse = sfalse;
  }
  IfElse.prototype.visitChildren_7xaucg$ = function (visit) {
    visit.invoke_487qa8$(this.cond, this.strue);
    if (this.sfalse != null)
      visit.invoke_dixj5a$(this.sfalse);
  };
  IfElse.$metadata$ = {kind: Kind_CLASS, simpleName: 'IfElse', interfaces: [Stm]};
  IfElse.prototype.component1 = function () {
    return this.cond;
  };
  IfElse.prototype.component2 = function () {
    return this.strue;
  };
  IfElse.prototype.component3 = function () {
    return this.sfalse;
  };
  IfElse.prototype.copy_pkm7pj$ = function (cond, strue, sfalse) {
    return new IfElse(cond === void 0 ? this.cond : cond, strue === void 0 ? this.strue : strue, sfalse === void 0 ? this.sfalse : sfalse);
  };
  IfElse.prototype.toString = function () {
    return 'IfElse(cond=' + Kotlin.toString(this.cond) + (', strue=' + Kotlin.toString(this.strue)) + (', sfalse=' + Kotlin.toString(this.sfalse)) + ')';
  };
  IfElse.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.cond) | 0;
    result = result * 31 + Kotlin.hashCode(this.strue) | 0;
    result = result * 31 + Kotlin.hashCode(this.sfalse) | 0;
    return result;
  };
  IfElse.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.cond, other.cond) && Kotlin.equals(this.strue, other.strue) && Kotlin.equals(this.sfalse, other.sfalse)))));
  };
  function Loop() {
    Stm.call(this);
    this.addScope = true;
    this.onBreak = null;
    this.onContinue = null;
  }
  Loop.$metadata$ = {kind: Kind_CLASS, simpleName: 'Loop', interfaces: [Stm]};
  function While(cond, body) {
    Loop.call(this);
    this.cond = cond;
    this.body_zinuc$_0 = body;
  }
  Object.defineProperty(While.prototype, 'body', {get: function () {
    return this.body_zinuc$_0;
  }});
  While.prototype.visitChildren_7xaucg$ = function (visit) {
    visit.invoke_487qa8$(this.cond, this.body);
  };
  While.$metadata$ = {kind: Kind_CLASS, simpleName: 'While', interfaces: [Loop]};
  While.prototype.component1 = function () {
    return this.cond;
  };
  While.prototype.component2 = function () {
    return this.body;
  };
  While.prototype.copy_t4kivp$ = function (cond, body) {
    return new While(cond === void 0 ? this.cond : cond, body === void 0 ? this.body : body);
  };
  While.prototype.toString = function () {
    return 'While(cond=' + Kotlin.toString(this.cond) + (', body=' + Kotlin.toString(this.body)) + ')';
  };
  While.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.cond) | 0;
    result = result * 31 + Kotlin.hashCode(this.body) | 0;
    return result;
  };
  While.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.cond, other.cond) && Kotlin.equals(this.body, other.body)))));
  };
  function DoWhile(body, cond) {
    Loop.call(this);
    this.body_x0qnlr$_0 = body;
    this.cond = cond;
  }
  Object.defineProperty(DoWhile.prototype, 'body', {get: function () {
    return this.body_x0qnlr$_0;
  }});
  DoWhile.prototype.visitChildren_7xaucg$ = function (visit) {
    visit.invoke_487qa8$(this.body, this.cond);
  };
  DoWhile.$metadata$ = {kind: Kind_CLASS, simpleName: 'DoWhile', interfaces: [Loop]};
  DoWhile.prototype.component1 = function () {
    return this.body;
  };
  DoWhile.prototype.component2 = function () {
    return this.cond;
  };
  DoWhile.prototype.copy_f9r1kd$ = function (body, cond) {
    return new DoWhile(body === void 0 ? this.body : body, cond === void 0 ? this.cond : cond);
  };
  DoWhile.prototype.toString = function () {
    return 'DoWhile(body=' + Kotlin.toString(this.body) + (', cond=' + Kotlin.toString(this.cond)) + ')';
  };
  DoWhile.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.body) | 0;
    result = result * 31 + Kotlin.hashCode(this.cond) | 0;
    return result;
  };
  DoWhile.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.body, other.body) && Kotlin.equals(this.cond, other.cond)))));
  };
  function For(init, cond, post, body) {
    Loop.call(this);
    this.init = init;
    this.cond = cond;
    this.post = post;
    this.body_34p4rg$_0 = body;
  }
  Object.defineProperty(For.prototype, 'body', {get: function () {
    return this.body_34p4rg$_0;
  }});
  For.prototype.visitChildren_7xaucg$ = function (visit) {
    visit.invoke_dixj5a$(this.init);
    visit.invoke_dixj5a$(this.cond);
    visit.invoke_dixj5a$(this.post);
    visit.invoke_dixj5a$(this.body);
  };
  For.$metadata$ = {kind: Kind_CLASS, simpleName: 'For', interfaces: [Loop]};
  For.prototype.component1 = function () {
    return this.init;
  };
  For.prototype.component2 = function () {
    return this.cond;
  };
  For.prototype.component3 = function () {
    return this.post;
  };
  For.prototype.component4 = function () {
    return this.body;
  };
  For.prototype.copy_u0q08z$ = function (init, cond, post, body) {
    return new For(init === void 0 ? this.init : init, cond === void 0 ? this.cond : cond, post === void 0 ? this.post : post, body === void 0 ? this.body : body);
  };
  For.prototype.toString = function () {
    return 'For(init=' + Kotlin.toString(this.init) + (', cond=' + Kotlin.toString(this.cond)) + (', post=' + Kotlin.toString(this.post)) + (', body=' + Kotlin.toString(this.body)) + ')';
  };
  For.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.init) | 0;
    result = result * 31 + Kotlin.hashCode(this.cond) | 0;
    result = result * 31 + Kotlin.hashCode(this.post) | 0;
    result = result * 31 + Kotlin.hashCode(this.body) | 0;
    return result;
  };
  For.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.init, other.init) && Kotlin.equals(this.cond, other.cond) && Kotlin.equals(this.post, other.post) && Kotlin.equals(this.body, other.body)))));
  };
  function Goto(id) {
    Stm.call(this);
    this.id = id;
  }
  Goto.prototype.visitChildren_7xaucg$ = function (visit) {
    visit.invoke_dixj5a$(this.id);
  };
  Goto.$metadata$ = {kind: Kind_CLASS, simpleName: 'Goto', interfaces: [Stm]};
  Goto.prototype.component1 = function () {
    return this.id;
  };
  Goto.prototype.copy_9fn3fw$ = function (id) {
    return new Goto(id === void 0 ? this.id : id);
  };
  Goto.prototype.toString = function () {
    return 'Goto(id=' + Kotlin.toString(this.id) + ')';
  };
  Goto.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    return result;
  };
  Goto.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.id, other.id))));
  };
  function Continue(dummy) {
    if (dummy === void 0)
      dummy = true;
    Stm.call(this);
    this.dummy = dummy;
  }
  Continue.prototype.visitChildren_7xaucg$ = function (visit) {
  };
  Continue.$metadata$ = {kind: Kind_CLASS, simpleName: 'Continue', interfaces: [Stm]};
  Continue.prototype.component1 = function () {
    return this.dummy;
  };
  Continue.prototype.copy_6taknv$ = function (dummy) {
    return new Continue(dummy === void 0 ? this.dummy : dummy);
  };
  Continue.prototype.toString = function () {
    return 'Continue(dummy=' + Kotlin.toString(this.dummy) + ')';
  };
  Continue.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.dummy) | 0;
    return result;
  };
  Continue.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.dummy, other.dummy))));
  };
  function Break(dummy) {
    if (dummy === void 0)
      dummy = true;
    Stm.call(this);
    this.dummy = dummy;
  }
  Break.prototype.visitChildren_7xaucg$ = function (visit) {
  };
  Break.$metadata$ = {kind: Kind_CLASS, simpleName: 'Break', interfaces: [Stm]};
  Break.prototype.component1 = function () {
    return this.dummy;
  };
  Break.prototype.copy_6taknv$ = function (dummy) {
    return new Break(dummy === void 0 ? this.dummy : dummy);
  };
  Break.prototype.toString = function () {
    return 'Break(dummy=' + Kotlin.toString(this.dummy) + ')';
  };
  Break.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.dummy) | 0;
    return result;
  };
  Break.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.dummy, other.dummy))));
  };
  function Return(expr) {
    Stm.call(this);
    this.expr = expr;
  }
  Return.prototype.visitChildren_7xaucg$ = function (visit) {
    visit.invoke_dixj5a$(this.expr);
  };
  Return.$metadata$ = {kind: Kind_CLASS, simpleName: 'Return', interfaces: [Stm]};
  Return.prototype.component1 = function () {
    return this.expr;
  };
  Return.prototype.copy_de5dwb$ = function (expr) {
    return new Return(expr === void 0 ? this.expr : expr);
  };
  Return.prototype.toString = function () {
    return 'Return(expr=' + Kotlin.toString(this.expr) + ')';
  };
  Return.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.expr) | 0;
    return result;
  };
  Return.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.expr, other.expr))));
  };
  function SwitchBase() {
    Stm.call(this);
    this.bodyCases_7fckvn$_0 = lazy(SwitchBase$bodyCases$lambda(this));
  }
  Object.defineProperty(SwitchBase.prototype, 'bodyCases', {get: function () {
    return this.bodyCases_7fckvn$_0.value;
  }});
  SwitchBase.prototype.visitChildren_7xaucg$ = function (visit) {
    visit.invoke_487qa8$(this.subject, this.body);
  };
  function SwitchBase$bodyCases$lambda$lambda(it) {
    return Kotlin.isType(it, CaseStm) ? -1 : 1;
  }
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var compareBy$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  var Comparator = Kotlin.kotlin.Comparator;
  function Comparator$ObjectLiteral(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  function SwitchBase$bodyCases$lambda(this$SwitchBase) {
    return function () {
      var $receiver = this$SwitchBase.body.stms;
      var destination = ArrayList_init();
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (Kotlin.isType(element, DefaultCaseStm))
          destination.add_11rb$(element);
      }
      return sortedWith(destination, new Comparator$ObjectLiteral(compareBy$lambda(SwitchBase$bodyCases$lambda$lambda)));
    };
  }
  SwitchBase.$metadata$ = {kind: Kind_CLASS, simpleName: 'SwitchBase', interfaces: [Stm]};
  function Switch(subject, body) {
    SwitchBase.call(this);
    this.subject_rhi6pl$_0 = subject;
    this.body_q7wlkj$_0 = body;
  }
  Object.defineProperty(Switch.prototype, 'subject', {get: function () {
    return this.subject_rhi6pl$_0;
  }});
  Object.defineProperty(Switch.prototype, 'body', {get: function () {
    return this.body_q7wlkj$_0;
  }});
  Switch.$metadata$ = {kind: Kind_CLASS, simpleName: 'Switch', interfaces: [SwitchBase]};
  Switch.prototype.component1 = function () {
    return this.subject;
  };
  Switch.prototype.component2 = function () {
    return this.body;
  };
  Switch.prototype.copy_kgsgaq$ = function (subject, body) {
    return new Switch(subject === void 0 ? this.subject : subject, body === void 0 ? this.body : body);
  };
  Switch.prototype.toString = function () {
    return 'Switch(subject=' + Kotlin.toString(this.subject) + (', body=' + Kotlin.toString(this.body)) + ')';
  };
  Switch.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.subject) | 0;
    result = result * 31 + Kotlin.hashCode(this.body) | 0;
    return result;
  };
  Switch.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.subject, other.subject) && Kotlin.equals(this.body, other.body)))));
  };
  function SwitchWithoutFallthrough(subject, body) {
    SwitchBase.call(this);
    this.subject_2pr2on$_0 = subject;
    this.body_umzk9d$_0 = body;
  }
  Object.defineProperty(SwitchWithoutFallthrough.prototype, 'subject', {get: function () {
    return this.subject_2pr2on$_0;
  }});
  Object.defineProperty(SwitchWithoutFallthrough.prototype, 'body', {get: function () {
    return this.body_umzk9d$_0;
  }});
  SwitchWithoutFallthrough.$metadata$ = {kind: Kind_CLASS, simpleName: 'SwitchWithoutFallthrough', interfaces: [SwitchBase]};
  SwitchWithoutFallthrough.prototype.component1 = function () {
    return this.subject;
  };
  SwitchWithoutFallthrough.prototype.component2 = function () {
    return this.body;
  };
  SwitchWithoutFallthrough.prototype.copy_kgsgaq$ = function (subject, body) {
    return new SwitchWithoutFallthrough(subject === void 0 ? this.subject : subject, body === void 0 ? this.body : body);
  };
  SwitchWithoutFallthrough.prototype.toString = function () {
    return 'SwitchWithoutFallthrough(subject=' + Kotlin.toString(this.subject) + (', body=' + Kotlin.toString(this.body)) + ')';
  };
  SwitchWithoutFallthrough.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.subject) | 0;
    result = result * 31 + Kotlin.hashCode(this.body) | 0;
    return result;
  };
  SwitchWithoutFallthrough.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.subject, other.subject) && Kotlin.equals(this.body, other.body)))));
  };
  function ExprStm(expr) {
    Stm.call(this);
    this.expr = expr;
  }
  ExprStm.prototype.visitChildren_7xaucg$ = function (visit) {
    visit.invoke_dixj5a$(this.expr);
  };
  ExprStm.$metadata$ = {kind: Kind_CLASS, simpleName: 'ExprStm', interfaces: [Stm]};
  ExprStm.prototype.component1 = function () {
    return this.expr;
  };
  ExprStm.prototype.copy_de5dwb$ = function (expr) {
    return new ExprStm(expr === void 0 ? this.expr : expr);
  };
  ExprStm.prototype.toString = function () {
    return 'ExprStm(expr=' + Kotlin.toString(this.expr) + ')';
  };
  ExprStm.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.expr) | 0;
    return result;
  };
  ExprStm.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.expr, other.expr))));
  };
  function LabeledStm(id, stm) {
    Stm.call(this);
    this.id = id;
    this.stm = stm;
  }
  LabeledStm.prototype.visitChildren_7xaucg$ = function (visit) {
    visit.invoke_487qa8$(this.id, this.stm);
  };
  LabeledStm.$metadata$ = {kind: Kind_CLASS, simpleName: 'LabeledStm', interfaces: [Stm]};
  LabeledStm.prototype.component1 = function () {
    return this.id;
  };
  LabeledStm.prototype.component2 = function () {
    return this.stm;
  };
  LabeledStm.prototype.copy_1m4pmj$ = function (id, stm) {
    return new LabeledStm(id === void 0 ? this.id : id, stm === void 0 ? this.stm : stm);
  };
  LabeledStm.prototype.toString = function () {
    return 'LabeledStm(id=' + Kotlin.toString(this.id) + (', stm=' + Kotlin.toString(this.stm)) + ')';
  };
  LabeledStm.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.stm) | 0;
    return result;
  };
  LabeledStm.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.stm, other.stm)))));
  };
  function DefaultCaseStm() {
    Stm.call(this);
  }
  DefaultCaseStm.$metadata$ = {kind: Kind_CLASS, simpleName: 'DefaultCaseStm', interfaces: [Stm]};
  function CaseStm(expr, stm) {
    DefaultCaseStm.call(this);
    this.expr = expr;
    this.stm_s1441d$_0 = stm;
  }
  Object.defineProperty(CaseStm.prototype, 'stm', {get: function () {
    return this.stm_s1441d$_0;
  }});
  CaseStm.prototype.visitChildren_7xaucg$ = function (visit) {
    visit.invoke_487qa8$(this.expr, this.stm);
  };
  Object.defineProperty(CaseStm.prototype, 'optExpr', {get: function () {
    return this.expr;
  }});
  CaseStm.$metadata$ = {kind: Kind_CLASS, simpleName: 'CaseStm', interfaces: [DefaultCaseStm]};
  CaseStm.prototype.component1 = function () {
    return this.expr;
  };
  CaseStm.prototype.component2 = function () {
    return this.stm;
  };
  CaseStm.prototype.copy_asp97q$ = function (expr, stm) {
    return new CaseStm(expr === void 0 ? this.expr : expr, stm === void 0 ? this.stm : stm);
  };
  CaseStm.prototype.toString = function () {
    return 'CaseStm(expr=' + Kotlin.toString(this.expr) + (', stm=' + Kotlin.toString(this.stm)) + ')';
  };
  CaseStm.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.expr) | 0;
    result = result * 31 + Kotlin.hashCode(this.stm) | 0;
    return result;
  };
  CaseStm.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.expr, other.expr) && Kotlin.equals(this.stm, other.stm)))));
  };
  function DefaultStm(stm) {
    DefaultCaseStm.call(this);
    this.stm_ufyzha$_0 = stm;
  }
  Object.defineProperty(DefaultStm.prototype, 'stm', {get: function () {
    return this.stm_ufyzha$_0;
  }});
  DefaultStm.prototype.visitChildren_7xaucg$ = function (visit) {
    visit.invoke_dixj5a$(this.stm);
  };
  Object.defineProperty(DefaultStm.prototype, 'optExpr', {get: function () {
    return null;
  }});
  DefaultStm.$metadata$ = {kind: Kind_CLASS, simpleName: 'DefaultStm', interfaces: [DefaultCaseStm]};
  DefaultStm.prototype.component1 = function () {
    return this.stm;
  };
  DefaultStm.prototype.copy_w5zual$ = function (stm) {
    return new DefaultStm(stm === void 0 ? this.stm : stm);
  };
  DefaultStm.prototype.toString = function () {
    return 'DefaultStm(stm=' + Kotlin.toString(this.stm) + ')';
  };
  DefaultStm.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.stm) | 0;
    return result;
  };
  DefaultStm.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.stm, other.stm))));
  };
  function Stms(stms) {
    Stm.call(this);
    this.stms = stms;
  }
  Stms.prototype.visitChildren_7xaucg$ = function (visit) {
    visit.invoke_pdej7n$(this.stms);
  };
  Stms.$metadata$ = {kind: Kind_CLASS, simpleName: 'Stms', interfaces: [Stm]};
  Stms.prototype.component1 = function () {
    return this.stms;
  };
  Stms.prototype.copy_by0ryk$ = function (stms) {
    return new Stms(stms === void 0 ? this.stms : stms);
  };
  Stms.prototype.toString = function () {
    return 'Stms(stms=' + Kotlin.toString(this.stms) + ')';
  };
  Stms.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.stms) | 0;
    return result;
  };
  Stms.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.stms, other.stms))));
  };
  function Decl() {
    Stm.call(this);
  }
  Decl.$metadata$ = {kind: Kind_CLASS, simpleName: 'Decl', interfaces: [Stm]};
  function CParamBase() {
    Node.call(this);
  }
  CParamBase.$metadata$ = {kind: Kind_CLASS, simpleName: 'CParamBase', interfaces: [Node]};
  function CParamVariadic(dummy) {
    CParamBase.call(this);
    this.dummy = dummy;
  }
  CParamVariadic.prototype.visitChildren_7xaucg$ = function (visit) {
  };
  CParamVariadic.prototype.toString = function () {
    return '...';
  };
  CParamVariadic.$metadata$ = {kind: Kind_CLASS, simpleName: 'CParamVariadic', interfaces: [CParamBase]};
  CParamVariadic.prototype.component1 = function () {
    return this.dummy;
  };
  CParamVariadic.prototype.copy_6taknv$ = function (dummy) {
    return new CParamVariadic(dummy === void 0 ? this.dummy : dummy);
  };
  CParamVariadic.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.dummy) | 0;
    return result;
  };
  CParamVariadic.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.dummy, other.dummy))));
  };
  function CParam(decl, type, nameId) {
    CParamBase.call(this);
    this.decl = decl;
    this.type = type;
    this.nameId = nameId;
  }
  Object.defineProperty(CParam.prototype, 'name', {get: function () {
    return this.nameId.id;
  }});
  CParam.prototype.visitChildren_7xaucg$ = function (visit) {
    visit.invoke_487qa8$(this.decl, this.nameId);
  };
  CParam.prototype.toString = function () {
    return this.type.toString() + ' ' + this.name;
  };
  CParam.$metadata$ = {kind: Kind_CLASS, simpleName: 'CParam', interfaces: [CParamBase]};
  CParam.prototype.component1 = function () {
    return this.decl;
  };
  CParam.prototype.component2 = function () {
    return this.type;
  };
  CParam.prototype.component3 = function () {
    return this.nameId;
  };
  CParam.prototype.copy_osguyc$ = function (decl, type, nameId) {
    return new CParam(decl === void 0 ? this.decl : decl, type === void 0 ? this.type : type, nameId === void 0 ? this.nameId : nameId);
  };
  CParam.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.decl) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.nameId) | 0;
    return result;
  };
  CParam.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.decl, other.decl) && Kotlin.equals(this.type, other.type) && Kotlin.equals(this.nameId, other.nameId)))));
  };
  function FuncDecl(rettype, name, params, body, varargs) {
    Decl.call(this);
    this.rettype = rettype;
    this.name = name;
    this.params = params;
    this.body = body;
    this.varargs = varargs;
    this.paramsWithVariadic = this.varargs ? plus(this.params, listOf_0(new CParamVariadic(true))) : this.params;
  }
  FuncDecl.prototype.visitChildren_7xaucg$ = function (visit) {
    visit.invoke_3rml6a$(this.name, this.rettype, this.body);
  };
  FuncDecl.$metadata$ = {kind: Kind_CLASS, simpleName: 'FuncDecl', interfaces: [Decl]};
  FuncDecl.prototype.component1 = function () {
    return this.rettype;
  };
  FuncDecl.prototype.component2 = function () {
    return this.name;
  };
  FuncDecl.prototype.component3 = function () {
    return this.params;
  };
  FuncDecl.prototype.component4 = function () {
    return this.body;
  };
  FuncDecl.prototype.component5 = function () {
    return this.varargs;
  };
  FuncDecl.prototype.copy_8n3y1y$ = function (rettype, name, params, body, varargs) {
    return new FuncDecl(rettype === void 0 ? this.rettype : rettype, name === void 0 ? this.name : name, params === void 0 ? this.params : params, body === void 0 ? this.body : body, varargs === void 0 ? this.varargs : varargs);
  };
  FuncDecl.prototype.toString = function () {
    return 'FuncDecl(rettype=' + Kotlin.toString(this.rettype) + (', name=' + Kotlin.toString(this.name)) + (', params=' + Kotlin.toString(this.params)) + (', body=' + Kotlin.toString(this.body)) + (', varargs=' + Kotlin.toString(this.varargs)) + ')';
  };
  FuncDecl.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.rettype) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.params) | 0;
    result = result * 31 + Kotlin.hashCode(this.body) | 0;
    result = result * 31 + Kotlin.hashCode(this.varargs) | 0;
    return result;
  };
  FuncDecl.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.rettype, other.rettype) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.params, other.params) && Kotlin.equals(this.body, other.body) && Kotlin.equals(this.varargs, other.varargs)))));
  };
  function get_warnings($receiver) {
    return $receiver.parser.warnings;
  }
  function get_errors($receiver) {
    return $receiver.parser.errors;
  }
  function Program(decls, parser) {
    Node.call(this);
    this.decls = decls;
    this.parser_r6rny6$_0 = parser;
  }
  Object.defineProperty(Program.prototype, 'parser', {get: function () {
    return this.parser_r6rny6$_0;
  }});
  Program.prototype.getFunctionOrNull_61zpoe$ = function (name) {
    var $receiver = this.decls;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (Kotlin.isType(element, FuncDecl))
        destination.add_11rb$(element);
    }
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_0;
      tmp$_0 = destination.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        if (equals(element_0.name.name, name)) {
          firstOrNull$result = element_0;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    return firstOrNull$result;
  };
  Program.prototype.getFunction_61zpoe$ = function (name) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = this.getFunctionOrNull_61zpoe$(name)) != null)
      tmp$_0 = tmp$;
    else {
      throw IllegalStateException_init(("Can't find function named '" + name + "'").toString());
    }
    return tmp$_0;
  };
  Program.prototype.visitChildren_7xaucg$ = function (visit) {
    visit.invoke_pdej7n$(this.decls);
  };
  Program.$metadata$ = {kind: Kind_CLASS, simpleName: 'Program', interfaces: [ProgramParserRef, Node]};
  Program.prototype.component1 = function () {
    return this.decls;
  };
  Program.prototype.component2 = function () {
    return this.parser;
  };
  Program.prototype.copy_ngetmi$ = function (decls, parser) {
    return new Program(decls === void 0 ? this.decls : decls, parser === void 0 ? this.parser : parser);
  };
  Program.prototype.toString = function () {
    return 'Program(decls=' + Kotlin.toString(this.decls) + (', parser=' + Kotlin.toString(this.parser)) + ')';
  };
  Program.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.decls) | 0;
    result = result * 31 + Kotlin.hashCode(this.parser) | 0;
    return result;
  };
  Program.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.decls, other.decls) && Kotlin.equals(this.parser, other.parser)))));
  };
  function list($receiver, end, separator, consumeEnd, tailingSeparator, gen) {
    if (separator === void 0)
      separator = null;
    if (consumeEnd === void 0)
      consumeEnd = false;
    if (tailingSeparator === void 0)
      tailingSeparator = false;
    var out = ArrayList_init();
    if (!equals($receiver.peek_za3lpa$(), end)) {
      while (true) {
        if (out.size >= 16384) {
          throw IllegalStateException_init('Array too big'.toString());
        }
        var element = gen();
        out.add_11rb$(element);
        if (equals($receiver.peek_za3lpa$(), separator)) {
          $receiver.read();
          if (tailingSeparator) {
            if (equals($receiver.peek_za3lpa$(), end)) {
              break;
            }
          }
          continue;
        }
         else if (equals($receiver.peek_za3lpa$(), end)) {
          break;
        }
      }
    }
    if (consumeEnd)
      $receiver.expect_11rb$(end);
    return out;
  }
  function identifier($receiver) {
    var tmp$;
    var name = Id$Companion_getInstance().validate_61zpoe$($receiver.peek_za3lpa$());
    var symbol = $receiver.symbols.get_61zpoe$(name);
    if (symbol == null) {
      $receiver.reportWarning_bm4lxs$("Can't find identifier '" + name + "'. Asumed as int.");
    }
    $receiver.read();
    return new Id(name, (tmp$ = symbol != null ? symbol.type : null) != null ? tmp$ : FType$Companion_getInstance().INT);
  }
  function identifierDecl($receiver) {
    return new IdDecl($receiver.read());
  }
  function primaryExpr($receiver) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = tryPrimaryExpr($receiver)) != null)
      tmp$_0 = tmp$;
    else {
      throw new NotImplementedError_init('An operation is not implemented: ' + getCallableRef('primaryExpr', function ($receiver) {
        return primaryExpr($receiver);
      }.bind(null, $receiver)).callableName);
    }
    return tmp$_0;
  }
  function tryPrimaryExpr($receiver) {
    var startPos = $receiver.pos;
    var callback$result;
    callback$break: do {
      var v = $receiver.peek_za3lpa$();
      switch (v) {
        case '+':
        case '-':
          var op = $receiver.read();
          callback$result = new UnaryExpr(op, primaryExpr($receiver));
          break callback$break;
        case '(':
          $receiver.expect_11rb$('(');
          var expr = expression($receiver);
          $receiver.expect_11rb$(')');
          callback$result = expr;
          break callback$break;
        case '_Generic':
          $receiver.expect_7l2mas$(['_Generic', '(']);
          throw new NotImplementedError_init('An operation is not implemented: ' + '_Generic');
        default:if (Id$Companion_getInstance().isValid_61zpoe$(v)) {
            callback$result = identifier($receiver);
            break callback$break;
          }
           else if (StringConstant$Companion_getInstance().isValid_61zpoe$(v)) {
            var $receiver_0 = $receiver.read();
            $receiver.strings.add_11rb$($receiver_0);
            callback$result = new StringConstant($receiver_0);
            break callback$break;
          }
           else if (CharConstant$Companion_getInstance().isValid_61zpoe$(v)) {
            callback$result = new CharConstant($receiver.read());
            break callback$break;
          }
           else if (IntConstant$Companion_getInstance().isValid_61zpoe$(v)) {
            callback$result = new IntConstant_0($receiver.read());
            break callback$break;
          }
           else if (DoubleConstant$Companion_getInstance().isValid_61zpoe$(v)) {
            callback$result = new DoubleConstant($receiver.read());
            break callback$break;
          }
           else {
            callback$result = null;
            break callback$break;
          }

      }
    }
     while (false);
    var $receiver_1 = callback$result;
    if (($receiver_1 != null ? $receiver_1.tagged : null) !== true) {
      $receiver_1 != null ? ($receiver_1.tagged = true) : null;
      $receiver_1 != null ? ($receiver_1.pos = startPos) : null;
      $receiver_1 != null ? ($receiver_1.endPos = $receiver.pos) : null;
      if (($receiver_1 != null ? $receiver_1.func : null) == null) {
        $receiver_1 != null ? ($receiver_1.func = $receiver._functionScope) : null;
      }
    }
    return $receiver_1;
  }
  function tryPostFixExpression$lambda(this$tryPostFixExpression) {
    return function () {
      return assignmentExpr(this$tryPostFixExpression);
    };
  }
  var Math_0 = Math;
  function tryPostFixExpression($receiver) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    tmp$ = tryPrimaryExpr($receiver);
    if (tmp$ == null) {
      return null;
    }
    var expr = tmp$;
    loop: while (!$receiver.eof) {
      switch ($receiver.peek_za3lpa$()) {
        case '[':
          $receiver.expect_11rb$('[');
          var index = expression($receiver);
          $receiver.expect_11rb$(']');
          if (!Kotlin.isType(expr.type, PointerFType) && !Kotlin.isType(expr.type, ArrayFType)) {
            $receiver.reportWarning_bm4lxs$("Can't array-access a non-pointer type " + expr.type);
          }

          tmp$_6 = new ArrayAccessExpr(expr, index);
          break;
        case '(':
          var exprType = expr.type;
          if (!Kotlin.isType(exprType, FunctionFType)) {
            $receiver.reportError_bm4lxs$('Not calling a function (' + exprType + ')');
          }

          $receiver.expect_11rb$('(');
          var args = list($receiver, ')', ',', void 0, void 0, tryPostFixExpression$lambda($receiver));
          $receiver.expect_11rb$(')');
          if (Kotlin.isType(exprType, FunctionFType)) {
            var func = exprType;
            var funcName = func.name;
            var funcParams = exprType.args;
            var a = args.size;
            var b = funcParams.size;
            tmp$_0 = Math_0.max(a, b);
            for (var n = 0; n < tmp$_0; n++) {
              var exType = (tmp$_1 = getOrNull(exprType.args, n)) != null ? tmp$_1.type : null;
              var arg = getOrNull(args, n);
              if (arg == null) {
                $receiver.reportError_bm4lxs$('Expected parameter at ' + n + ' for ' + funcName);
              }
              if (arg != null && (exType != null && !canAssignTo(arg.type, exType, $receiver))) {
                $receiver.reportError_bm4lxs$("Can't assign " + arg.type + ' to ' + toString(exType) + ' of parameter ' + n + ' of ' + funcName);
              }
              if (exType == null && !func.variadic) {
                $receiver.reportError_bm4lxs$('Unexpected argument ' + n + " calling '" + funcName + "'. Function only have " + funcParams.size + ' parameters and it is not variadic');
              }
            }
          }

          tmp$_6 = new CallExpr(expr, args);
          break;
        case '.':
        case '->':
          var indirect = equals($receiver.read(), '->');
          if (Id$Companion_getInstance().isValid_61zpoe$($receiver.peek_za3lpa$()))
            tmp$_2 = identifierDecl($receiver);
          else {
            $receiver.reportError_bm4lxs$('Expected identifier after field access');
            tmp$_2 = new IdDecl('<unknown>');
          }

          var id = tmp$_2;
          var _type = expr.type;
          if (Kotlin.isType(_type, PointerFType)) {
            tmp$_3 = _type.elementType;
          }
           else {
            tmp$_3 = _type;
          }

          var type = tmp$_3;
          var expectedIndirect = Kotlin.isType(_type, PointerFType) || Kotlin.isType(_type, ArrayFType);
          if (indirect !== expectedIndirect) {
            if (indirect) {
              $receiver.reportError_bm4lxs$('Expected . but found ->');
            }
             else {
              $receiver.reportError_bm4lxs$('Expected -> but found .');
            }
          }

          var resolvedType2 = $receiver.fresolve_q1l7zo$(type);
          var resolvedType = Kotlin.isType(resolvedType2, BasePointerFType) ? resolvedType2.elementType : resolvedType2;
          if (Kotlin.isType(resolvedType, StructFType)) {
            var struct = $receiver.structTypesBySpecifier.get_11rb$(resolvedType.spec);
            if (struct != null) {
              var ftype = (tmp$_4 = struct.fieldsByName.get_11rb$(id.name)) != null ? tmp$_4.type : null;
              if (ftype == null) {
                $receiver.reportError_bm4lxs$("Struct '" + type + "' doesn't contain field '" + id.name + "'");
              }
              tmp$_5 = ftype;
            }
             else {
              $receiver.reportError_bm4lxs$("Can't find struct of " + toString(resolvedType.spec.id) + ' : ' + $receiver.structTypesByName.keys);
              tmp$_5 = null;
            }
          }
           else {
            $receiver.reportError_bm4lxs$("Can't get field '" + id.name + "' from non struct type '" + type + "'");
            tmp$_5 = null;
          }

          var ftype_0 = tmp$_5;
          tmp$_6 = new FieldAccessExpr(expr, id, indirect, ftype_0 != null ? ftype_0 : FType$Companion_getInstance().INT);
          break;
        case '++':
        case '--':
          var op = $receiver.read();
          tmp$_6 = new PostfixExpr(expr, op);
          break;
        default:break loop;
      }
      expr = tmp$_6;
    }
    return expr;
  }
  function CastExpr(expr, type) {
    Expr.call(this);
    this.expr = expr;
    this.type_hss5qt$_0 = type;
  }
  Object.defineProperty(CastExpr.prototype, 'type', {get: function () {
    return this.type_hss5qt$_0;
  }});
  CastExpr.prototype.visitChildren_7xaucg$ = function (visit) {
    visit.invoke_dixj5a$(this.expr);
  };
  CastExpr.$metadata$ = {kind: Kind_CLASS, simpleName: 'CastExpr', interfaces: [Expr]};
  CastExpr.prototype.component1 = function () {
    return this.expr;
  };
  CastExpr.prototype.component2 = function () {
    return this.type;
  };
  CastExpr.prototype.copy_4lsy5l$ = function (expr, type) {
    return new CastExpr(expr === void 0 ? this.expr : expr, type === void 0 ? this.type : type);
  };
  CastExpr.prototype.toString = function () {
    return 'CastExpr(expr=' + Kotlin.toString(this.expr) + (', type=' + Kotlin.toString(this.type)) + ')';
  };
  CastExpr.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.expr) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    return result;
  };
  CastExpr.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.expr, other.expr) && Kotlin.equals(this.type, other.type)))));
  };
  function SizeOfAlignExprBase() {
    Expr.call(this);
  }
  SizeOfAlignExprBase.$metadata$ = {kind: Kind_CLASS, simpleName: 'SizeOfAlignExprBase', interfaces: [Expr]};
  function SizeOfAlignTypeExpr(kind, typeName) {
    SizeOfAlignExprBase.call(this);
    this.kind = kind;
    this.typeName = typeName;
    this.ftype_6sbvfp$_0 = lazy(SizeOfAlignTypeExpr$ftype$lambda(this));
  }
  Object.defineProperty(SizeOfAlignTypeExpr.prototype, 'type', {get: function () {
    return FType$Companion_getInstance().INT;
  }});
  Object.defineProperty(SizeOfAlignTypeExpr.prototype, 'ftype', {get: function () {
    return this.ftype_6sbvfp$_0.value;
  }});
  SizeOfAlignTypeExpr.prototype.visitChildren_7xaucg$ = function (visit) {
    visit.invoke_dixj5a$(this.typeName);
  };
  function SizeOfAlignTypeExpr$ftype$lambda(this$SizeOfAlignTypeExpr) {
    return function () {
      return toFinalType(this$SizeOfAlignTypeExpr.typeName);
    };
  }
  SizeOfAlignTypeExpr.$metadata$ = {kind: Kind_CLASS, simpleName: 'SizeOfAlignTypeExpr', interfaces: [SizeOfAlignExprBase]};
  SizeOfAlignTypeExpr.prototype.component1 = function () {
    return this.kind;
  };
  SizeOfAlignTypeExpr.prototype.component2 = function () {
    return this.typeName;
  };
  SizeOfAlignTypeExpr.prototype.copy_mv9dfi$ = function (kind, typeName) {
    return new SizeOfAlignTypeExpr(kind === void 0 ? this.kind : kind, typeName === void 0 ? this.typeName : typeName);
  };
  SizeOfAlignTypeExpr.prototype.toString = function () {
    return 'SizeOfAlignTypeExpr(kind=' + Kotlin.toString(this.kind) + (', typeName=' + Kotlin.toString(this.typeName)) + ')';
  };
  SizeOfAlignTypeExpr.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.kind) | 0;
    result = result * 31 + Kotlin.hashCode(this.typeName) | 0;
    return result;
  };
  SizeOfAlignTypeExpr.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.kind, other.kind) && Kotlin.equals(this.typeName, other.typeName)))));
  };
  function SizeOfAlignExprExpr(expr) {
    SizeOfAlignExprBase.call(this);
    this.expr = expr;
    this.ftype_ahy8w0$_0 = this.expr.type;
  }
  Object.defineProperty(SizeOfAlignExprExpr.prototype, 'ftype', {get: function () {
    return this.ftype_ahy8w0$_0;
  }});
  Object.defineProperty(SizeOfAlignExprExpr.prototype, 'type', {get: function () {
    return FType$Companion_getInstance().INT;
  }});
  SizeOfAlignExprExpr.prototype.visitChildren_7xaucg$ = function (visit) {
    visit.invoke_dixj5a$(this.expr);
  };
  SizeOfAlignExprExpr.$metadata$ = {kind: Kind_CLASS, simpleName: 'SizeOfAlignExprExpr', interfaces: [SizeOfAlignExprBase]};
  SizeOfAlignExprExpr.prototype.component1 = function () {
    return this.expr;
  };
  SizeOfAlignExprExpr.prototype.copy_2q1gro$ = function (expr) {
    return new SizeOfAlignExprExpr(expr === void 0 ? this.expr : expr);
  };
  SizeOfAlignExprExpr.prototype.toString = function () {
    return 'SizeOfAlignExprExpr(expr=' + Kotlin.toString(this.expr) + ')';
  };
  SizeOfAlignExprExpr.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.expr) | 0;
    return result;
  };
  SizeOfAlignExprExpr.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.expr, other.expr))));
  };
  function tryUnaryExpression($receiver) {
    var startPos = $receiver.pos;
    var callback$result;
    callback$break: do {
      var tmp$, tmp$_0;
      switch ($receiver.peek_za3lpa$()) {
        case '++':
        case '--':
          var op = $receiver.read();
          var expr = tryUnaryExpression($receiver);
          callback$result = new UnaryExpr(op, ensureNotNull(expr));
          break callback$break;
        case '&':
        case '*':
        case '+':
        case '-':
        case '~':
        case '!':
          var op_0 = $receiver.read();
          var expr_0 = (tmp$ = tryCastExpression($receiver)) != null ? tmp$ : $receiver.parserException_bm4lxs$('Cast expression expected');
          callback$result = new UnaryExpr(op_0, expr_0);
          break callback$break;
        case 'sizeof':
        case 'Alignof':
          var kind = $receiver.expectAny_7l2mas$(['sizeof', 'Alignof']);
          if (equals($receiver.peek_za3lpa$(), '(')) {
            $receiver.expect_11rb$('(');
            var type = tryTypeName($receiver);
            var expr_1 = type == null ? ensureNotNull(tryUnaryExpression($receiver)) : null;
            $receiver.expect_11rb$(')');
            callback$result = (tmp$_0 = expr_1 != null ? new SizeOfAlignExprExpr(expr_1) : null) != null ? tmp$_0 : new SizeOfAlignTypeExpr(kind, ensureNotNull(type));
            break callback$break;
          }
           else {
            callback$result = ensureNotNull(tryUnaryExpression($receiver));
            break callback$break;
          }

        default:callback$result = tryPostFixExpression($receiver);
          break callback$break;
      }
    }
     while (false);
    var $receiver_0 = callback$result;
    if (($receiver_0 != null ? $receiver_0.tagged : null) !== true) {
      $receiver_0 != null ? ($receiver_0.tagged = true) : null;
      $receiver_0 != null ? ($receiver_0.pos = startPos) : null;
      $receiver_0 != null ? ($receiver_0.endPos = $receiver.pos) : null;
      if (($receiver_0 != null ? $receiver_0.func : null) == null) {
        $receiver_0 != null ? ($receiver_0.func = $receiver._functionScope) : null;
      }
    }
    return $receiver_0;
  }
  function tryCastExpression($receiver) {
    var startPos = $receiver.pos;
    var callback$result;
    var tmp$;
    if (equals($receiver.peek_za3lpa$(), '(')) {
      var oldPos = $receiver.pos;
      var callback$result_0;
      callback$break: do {
        var tmp$_0;
        $receiver.expect_11rb$('(');
        tmp$_0 = tryTypeName($receiver);
        if (tmp$_0 == null) {
          callback$result_0 = null;
          break callback$break;
        }
        var tname = tmp$_0;
        $receiver.expect_11rb$(')');
        var expr = tryCastExpression($receiver);
        var ftype = withDeclarator_0(toFinalType(tname.specifiers), tname.abstractDecl);
        callback$result_0 = new CastExpr(ensureNotNull(expr), ftype);
      }
       while (false);
      var result = callback$result_0;
      if (result == null) {
        $receiver.pos = oldPos;
      }
      callback$result = (tmp$ = result) != null ? tmp$ : tryUnaryExpression($receiver);
    }
     else {
      callback$result = tryUnaryExpression($receiver);
    }
    var $receiver_0 = callback$result;
    if (($receiver_0 != null ? $receiver_0.tagged : null) !== true) {
      $receiver_0 != null ? ($receiver_0.tagged = true) : null;
      $receiver_0 != null ? ($receiver_0.pos = startPos) : null;
      $receiver_0 != null ? ($receiver_0.endPos = $receiver.pos) : null;
      if (($receiver_0 != null ? $receiver_0.func : null) == null) {
        $receiver_0 != null ? ($receiver_0.func = $receiver._functionScope) : null;
      }
    }
    return $receiver_0;
  }
  function tryBinopExpr($receiver) {
    var startPos = $receiver.pos;
    var callback$result;
    var exprs = ArrayList_init();
    var ops = ArrayList_init();
    while (!$receiver.eof) {
      var tmp$;
      tmp$ = tryCastExpression($receiver);
      if (tmp$ == null) {
        return null;
      }
      exprs.add_11rb$(tmp$);
      if (!$receiver.eof && binaryOperators.contains_11rb$($receiver.peek_za3lpa$())) {
        var element = $receiver.read();
        ops.add_11rb$(element);
        continue;
      }
       else {
        break;
      }
    }
    if (exprs.size === 0)
      $receiver.parserException_bm4lxs$('Not a expression! at ' + $receiver);
    if (exprs.size === 1) {
      callback$result = first(exprs);
    }
     else {
      callback$result = (new OperatorsExpr(exprs, ops)).expand();
    }
    var $receiver_0 = callback$result;
    if (($receiver_0 != null ? $receiver_0.tagged : null) !== true) {
      $receiver_0 != null ? ($receiver_0.tagged = true) : null;
      $receiver_0 != null ? ($receiver_0.pos = startPos) : null;
      $receiver_0 != null ? ($receiver_0.endPos = $receiver.pos) : null;
      if (($receiver_0 != null ? $receiver_0.func : null) == null) {
        $receiver_0 != null ? ($receiver_0.func = $receiver._functionScope) : null;
      }
    }
    return $receiver_0;
  }
  function ConditionalExpr(cond, etrue, efalse) {
    Expr.call(this);
    this.cond = cond;
    this.etrue = etrue;
    this.efalse = efalse;
  }
  ConditionalExpr.prototype.visitChildren_7xaucg$ = function (visit) {
    visit.invoke_3rml6a$(this.cond, this.etrue, this.efalse);
  };
  Object.defineProperty(ConditionalExpr.prototype, 'type', {get: function () {
    return this.etrue.type;
  }});
  ConditionalExpr.$metadata$ = {kind: Kind_CLASS, simpleName: 'ConditionalExpr', interfaces: [Expr]};
  ConditionalExpr.prototype.component1 = function () {
    return this.cond;
  };
  ConditionalExpr.prototype.component2 = function () {
    return this.etrue;
  };
  ConditionalExpr.prototype.component3 = function () {
    return this.efalse;
  };
  ConditionalExpr.prototype.copy_f427fo$ = function (cond, etrue, efalse) {
    return new ConditionalExpr(cond === void 0 ? this.cond : cond, etrue === void 0 ? this.etrue : etrue, efalse === void 0 ? this.efalse : efalse);
  };
  ConditionalExpr.prototype.toString = function () {
    return 'ConditionalExpr(cond=' + Kotlin.toString(this.cond) + (', etrue=' + Kotlin.toString(this.etrue)) + (', efalse=' + Kotlin.toString(this.efalse)) + ')';
  };
  ConditionalExpr.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.cond) | 0;
    result = result * 31 + Kotlin.hashCode(this.etrue) | 0;
    result = result * 31 + Kotlin.hashCode(this.efalse) | 0;
    return result;
  };
  ConditionalExpr.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.cond, other.cond) && Kotlin.equals(this.etrue, other.etrue) && Kotlin.equals(this.efalse, other.efalse)))));
  };
  function tryConditionalExpr($receiver) {
    var startPos = $receiver.pos;
    var callback$result;
    var expr = tryBinopExpr($receiver);
    if (expr != null && !$receiver.eof && equals($receiver.peek_za3lpa$(), '?')) {
      $receiver.expect_11rb$('?');
      var etrue = expression($receiver);
      $receiver.expect_11rb$(':');
      var efalse = ensureNotNull(tryConditionalExpr($receiver));
      callback$result = new ConditionalExpr(expr, etrue, efalse);
    }
     else {
      callback$result = expr;
    }
    var $receiver_0 = callback$result;
    if (($receiver_0 != null ? $receiver_0.tagged : null) !== true) {
      $receiver_0 != null ? ($receiver_0.tagged = true) : null;
      $receiver_0 != null ? ($receiver_0.pos = startPos) : null;
      $receiver_0 != null ? ($receiver_0.endPos = $receiver.pos) : null;
      if (($receiver_0 != null ? $receiver_0.func : null) == null) {
        $receiver_0 != null ? ($receiver_0.func = $receiver._functionScope) : null;
      }
    }
    return $receiver_0;
  }
  function tryAssignmentExpr($receiver) {
    var startPos = $receiver.pos;
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = tryConditionalExpr($receiver);
    if (tmp$ == null) {
      return null;
    }
    var left = tmp$;
    if (!$receiver.eof && assignmentOperators.contains_11rb$($receiver.peek_za3lpa$())) {
      var op = $receiver.read();
      var right = (tmp$_0 = tryAssignmentExpr($receiver)) != null ? tmp$_0 : $receiver.parserException_bm4lxs$('Expected value after assignment');
      if (!canAssignTo(right.type, left.type, $receiver)) {
        $receiver.reportWarning_bm4lxs$("Can't assign " + right.type + ' to ' + left.type + ' (' + $receiver.fresolve_q1l7zo$(right.type) + ' != ' + $receiver.fresolve_q1l7zo$(left.type) + ')');
      }
      tmp$_1 = new AssignExpr(left, op, right);
    }
     else {
      tmp$_1 = left;
    }
    return tmp$_1;
  }
  function assignmentExpr($receiver) {
    var tmp$;
    return (tmp$ = tryAssignmentExpr($receiver)) != null ? tmp$ : $receiver.parserException_bm4lxs$('Not an assignment-expression at ' + $receiver);
  }
  function tryExpression($receiver) {
    var tmp$;
    var exprs = ArrayList_init();
    while (!$receiver.eof) {
      var tmp$_0;
      tmp$_0 = tryAssignmentExpr($receiver);
      if (tmp$_0 == null) {
        break;
      }
      exprs.add_11rb$(tmp$_0);
      if (equals($receiver.peekOutside_za3lpa$(), ',')) {
        $receiver.read();
        continue;
      }
       else {
        break;
      }
    }
    if (exprs.isEmpty())
      tmp$ = null;
    else if (exprs.size === 1)
      tmp$ = first(exprs);
    else
      tmp$ = new CommaExpr(exprs);
    return tmp$;
  }
  function expression($receiver) {
    var tmp$;
    return (tmp$ = tryExpression($receiver)) != null ? tmp$ : $receiver.parserException_bm4lxs$('Not an expression at ' + $receiver);
  }
  function constantExpression($receiver) {
    return new ConstExpr(expression($receiver));
  }
  function stringLiteral($receiver) {
    return new ConstExpr(expression($receiver));
  }
  function blockItem$lambda$lambda(this$blockItem) {
    return function () {
      return declaration(this$blockItem, true);
    };
  }
  function blockItem$lambda$lambda_0(this$blockItem) {
    return function () {
      return statement(this$blockItem);
    };
  }
  function blockItem($receiver) {
    var startPos = $receiver.pos;
    var callback$result;
    callback$break: do {
      loop_label: switch ($receiver.peek_za3lpa$()) {
        case 'if':
        case 'switch':
        case 'while':
        case 'do':
        case 'for':
        case 'goto':
        case 'continue':
        case 'break':
        case 'return':
        case '{':
        case 'case':
        case 'default':
          callback$result = statement($receiver);
          break callback$break;
        default:var name = 'block-item';
          var callbacks = [blockItem$lambda$lambda($receiver), blockItem$lambda$lambda_0($receiver)];
          var tryBlocks_uu91qr$result;
          tryBlocks_uu91qr$break: do {
            var tmp$;
            var errors = ArrayList_init();
            for (tmp$ = 0; tmp$ !== callbacks.length; ++tmp$) {
              var callback = callbacks[tmp$];
              var tmp$_0;
              var oldPos = $receiver.pos;
              try {
                tmp$_0 = callback();
              }
               catch (e) {
                if (Kotlin.isType(e, ExpectException)) {
                  tmp$_0 = e;
                }
                 else
                  throw e;
              }
              var result = tmp$_0;
              if (Kotlin.isType(result, ExpectException))
                $receiver.pos = oldPos;
              var result_0 = new ItemOrError(result);
              if (!result_0.isError) {
                tryBlocks_uu91qr$result = result_0.value;
                break tryBlocks_uu91qr$break;
              }
               else {
                var element = result_0.error;
                errors.add_11rb$(element);
              }
            }
            if (false) {
              throw last(errors);
            }
             else {
              throw $receiver.createExpectException_61zpoe$('Tried to parse ' + name + ' but failed with ' + errors + ' in ' + toString($receiver));
            }
          }
           while (false);
          callback$result = tryBlocks_uu91qr$result;
          break callback$break;
      }
    }
     while (false);
    var $receiver_0 = callback$result;
    if (($receiver_0 != null ? $receiver_0.tagged : null) !== true) {
      $receiver_0 != null ? ($receiver_0.tagged = true) : null;
      $receiver_0 != null ? ($receiver_0.pos = startPos) : null;
      $receiver_0 != null ? ($receiver_0.endPos = $receiver.pos) : null;
      if (($receiver_0 != null ? $receiver_0.func : null) == null) {
        $receiver_0 != null ? ($receiver_0.func = $receiver._functionScope) : null;
      }
    }
    return $receiver_0;
  }
  function statement$lambda$lambda(this$statement) {
    return function () {
      var id = identifierDecl(this$statement);
      this$statement.expect_11rb$(':');
      var stm = statement(this$statement);
      return new LabeledStm(id, stm);
    };
  }
  function statement$lambda$lambda_0(this$statement) {
    return function () {
      var tmp$;
      var expr = tryExpression(this$statement);
      if (!equals(this$statement.peekOutside_za3lpa$(), ';')) {
        this$statement.reportError_bm4lxs$('Expected ; after expression');
        tmp$ = this$statement.peekOutside_za3lpa$();
        if (!keywords.contains_11rb$(tmp$))
          if (!equals(tmp$, '}'))
            this$statement.skip_za3lpa$();
      }
       else {
        this$statement.expect_11rb$(';');
      }
      return new ExprStm(expr);
    };
  }
  function statement($receiver) {
    var startPos = $receiver.pos;
    var callback$result;
    callback$break: do {
      var tmp$, tmp$_0, tmp$_1;
      $receiver.consumeLineMarkers();
      loop_label: switch ($receiver.peek_za3lpa$()) {
        case 'if':
          $receiver.expect_7l2mas$(['if', '(']);
          var expr = expression($receiver);
          $receiver.expect_11rb$(')');
          var strue = statement($receiver);
          var sfalse = $receiver.tryExpect_11rb$('else') != null ? statement($receiver) : null;
          callback$result = new IfElse(expr, strue, sfalse);
          break callback$break;
        case 'switch':
          $receiver.expect_7l2mas$(['switch', '(']);
          var expr_0 = expression($receiver);
          $receiver.expect_11rb$(')');
          var body = compoundStatement($receiver);
          callback$result = new Switch(expr_0, body);
          break callback$break;
        case 'while':
          $receiver.expect_7l2mas$(['while', '(']);
          var expr_1 = expression($receiver);
          $receiver.expect_11rb$(')');
          var body_0 = statement($receiver);
          callback$result = new While(expr_1, body_0);
          break callback$break;
        case 'do':
          $receiver.expect_11rb$('do');
          var body_1 = statement($receiver);
          $receiver.expect_11rb$('while');
          $receiver.expect_11rb$('(');
          var expr_2 = expression($receiver);
          $receiver.expect_11rb$(')');
          $receiver.expect_11rb$(';');
          callback$result = new DoWhile(body_1, expr_2);
          break callback$break;
        case 'for':
          $receiver.expect_7l2mas$(['for', '(']);
          var initDecl = tryDeclaration($receiver);
          if (initDecl == null) {
            var expr_3 = tryExpression($receiver);
            $receiver.expect_11rb$(';');
            tmp$ = expr_3;
          }
           else {
            tmp$ = initDecl;
          }

          var init = tmp$;
          var cond = tryExpression($receiver);
          $receiver.expect_11rb$(';');
          var post = tryExpression($receiver);
          $receiver.expect_11rb$(')');
          var body_2 = statement($receiver);
          callback$result = new For(init, cond, post, body_2);
          break callback$break;
        case 'goto':
          var tmp$_2;
          (tmp$_2 = $receiver._functionScope) != null ? (tmp$_2.hasGoto = true) : null;
          $receiver.expect_11rb$('goto');
          var id = identifierDecl($receiver);
          $receiver.expect_11rb$(';');
          callback$result = new Goto(id);
          break callback$break;
        case 'continue':
          $receiver.expect_7l2mas$(['continue', ';']);
          callback$result = new Continue();
          break callback$break;
        case 'break':
          $receiver.expect_7l2mas$(['break', ';']);
          callback$result = new Break();
          break callback$break;
        case 'return':
          $receiver.expect_11rb$('return');
          var expr_4 = tryExpression($receiver);
          if (expr_4 == null && !equals($receiver.functionScope.rettype, FType$Companion_getInstance().VOID))
            $receiver.reportError_bm4lxs$('Return must return ' + $receiver.functionScope.rettype);
          else if (expr_4 != null && !canAssignTo(expr_4.type, $receiver.functionScope.rettype, $receiver)) {
            $receiver.reportError_bm4lxs$('Returned ' + expr_4.type + ' but must return ' + $receiver.functionScope.rettype + ' (' + $receiver.fresolve_q1l7zo$(expr_4.type, FType$Companion_getInstance().INT) + ' != ' + toString((tmp$_1 = (tmp$_0 = $receiver._functionScope) != null ? tmp$_0.rettype : null) != null ? $receiver.fresolve_q1l7zo$(tmp$_1, FType$Companion_getInstance().INT) : null) + ')');
          }

          $receiver.expect_11rb$(';');
          callback$result = new Return(expr_4);
          break callback$break;
        case '{':
          callback$result = compoundStatement($receiver);
          break callback$break;
        case 'case':
        case 'default':
          var isDefault = equals($receiver.peek_za3lpa$(), 'default');
          $receiver.read();
          var expr_5 = isDefault ? null : constantExpression($receiver);
          $receiver.expect_11rb$(':');
          var stms = ArrayList_init();
          while (!$receiver.eof && !equals($receiver.peek_za3lpa$(), 'case') && !equals($receiver.peek_za3lpa$(), 'default') && !equals($receiver.peek_za3lpa$(), '}')) {
            var element = blockItem($receiver);
            stms.add_11rb$(element);
          }

          var stm = new Stms(stms);
          if (expr_5 != null) {
            callback$result = new CaseStm(expr_5, stm);
            break callback$break;
          }
           else {
            callback$result = new DefaultStm(stm);
            break callback$break;
          }

        default:var name = 'expression-statement';
          var callbacks = [statement$lambda$lambda($receiver), statement$lambda$lambda_0($receiver)];
          var tryBlocks_uu91qr$result;
          tryBlocks_uu91qr$break: do {
            var tmp$_3;
            var errors = ArrayList_init();
            for (tmp$_3 = 0; tmp$_3 !== callbacks.length; ++tmp$_3) {
              var callback = callbacks[tmp$_3];
              var tmp$_4;
              var oldPos = $receiver.pos;
              try {
                tmp$_4 = callback();
              }
               catch (e) {
                if (Kotlin.isType(e, ExpectException)) {
                  tmp$_4 = e;
                }
                 else
                  throw e;
              }
              var result = tmp$_4;
              if (Kotlin.isType(result, ExpectException))
                $receiver.pos = oldPos;
              var result_0 = new ItemOrError(result);
              if (!result_0.isError) {
                tryBlocks_uu91qr$result = result_0.value;
                break tryBlocks_uu91qr$break;
              }
               else {
                var element_0 = result_0.error;
                errors.add_11rb$(element_0);
              }
            }
            if (false) {
              throw last(errors);
            }
             else {
              throw $receiver.createExpectException_61zpoe$('Tried to parse ' + name + ' but failed with ' + errors + ' in ' + toString($receiver));
            }
          }
           while (false);
          var result_1 = tryBlocks_uu91qr$result;
          callback$result = result_1;
          break callback$break;
      }
    }
     while (false);
    var $receiver_0 = callback$result;
    if (($receiver_0 != null ? $receiver_0.tagged : null) !== true) {
      $receiver_0 != null ? ($receiver_0.tagged = true) : null;
      $receiver_0 != null ? ($receiver_0.pos = startPos) : null;
      $receiver_0 != null ? ($receiver_0.endPos = $receiver.pos) : null;
      if (($receiver_0 != null ? $receiver_0.func : null) == null) {
        $receiver_0 != null ? ($receiver_0.func = $receiver._functionScope) : null;
      }
    }
    return $receiver_0;
  }
  function TypeSpecifier() {
    Node.call(this);
  }
  TypeSpecifier.$metadata$ = {kind: Kind_CLASS, simpleName: 'TypeSpecifier', interfaces: [Node]};
  function VariadicTypeSpecifier(id) {
    TypeSpecifier.call(this);
    this.id = id;
  }
  VariadicTypeSpecifier.prototype.visitChildren_7xaucg$ = function (visit) {
    visit.invoke_dixj5a$(this.id);
  };
  VariadicTypeSpecifier.$metadata$ = {kind: Kind_CLASS, simpleName: 'VariadicTypeSpecifier', interfaces: [TypeSpecifier]};
  VariadicTypeSpecifier.prototype.component1 = function () {
    return this.id;
  };
  VariadicTypeSpecifier.prototype.copy_9fn3fw$ = function (id) {
    return new VariadicTypeSpecifier(id === void 0 ? this.id : id);
  };
  VariadicTypeSpecifier.prototype.toString = function () {
    return 'VariadicTypeSpecifier(id=' + Kotlin.toString(this.id) + ')';
  };
  VariadicTypeSpecifier.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    return result;
  };
  VariadicTypeSpecifier.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.id, other.id))));
  };
  function withoutTypedefs($receiver) {
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if ((!Kotlin.isType(element, StorageClassSpecifier) || element.kind !== StorageClassSpecifier$Kind$TYPEDEF_getInstance()) && !Kotlin.isType(element, TypedefTypeSpecifierName))
        destination.add_11rb$(element);
    }
    return destination;
  }
  function ListTypeSpecifier(items) {
    TypeSpecifier.call(this);
    this.items = items;
  }
  ListTypeSpecifier.prototype.isEmpty = function () {
    return this.items.isEmpty();
  };
  ListTypeSpecifier.prototype.visitChildren_7xaucg$ = function (visit) {
    visit.invoke_pdej7n$(this.items);
  };
  var Collection = Kotlin.kotlin.collections.Collection;
  Object.defineProperty(ListTypeSpecifier.prototype, 'hasTypedef', {get: function () {
    var $receiver = this.items;
    var any$result;
    any$break: do {
      var tmp$;
      if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
        any$result = false;
        break any$break;
      }
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (Kotlin.isType(element, StorageClassSpecifier) && element.kind === StorageClassSpecifier$Kind$TYPEDEF_getInstance()) {
          any$result = true;
          break any$break;
        }
      }
      any$result = false;
    }
     while (false);
    return any$result;
  }});
  Object.defineProperty(ListTypeSpecifier.prototype, 'typedefId', {get: function () {
    var tmp$, tmp$_0;
    var $receiver = this.items;
    var destination = ArrayList_init();
    var tmp$_1;
    tmp$_1 = $receiver.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      if (Kotlin.isType(element, TypedefTypeSpecifierName))
        destination.add_11rb$(element);
    }
    return (tmp$_0 = (tmp$ = destination) != null ? firstOrNull_0(tmp$) : null) != null ? tmp$_0.id : null;
  }});
  ListTypeSpecifier.$metadata$ = {kind: Kind_CLASS, simpleName: 'ListTypeSpecifier', interfaces: [TypeSpecifier]};
  ListTypeSpecifier.prototype.component1 = function () {
    return this.items;
  };
  ListTypeSpecifier.prototype.copy_6jhrb0$ = function (items) {
    return new ListTypeSpecifier(items === void 0 ? this.items : items);
  };
  ListTypeSpecifier.prototype.toString = function () {
    return 'ListTypeSpecifier(items=' + Kotlin.toString(this.items) + ')';
  };
  ListTypeSpecifier.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.items) | 0;
    return result;
  };
  ListTypeSpecifier.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.items, other.items))));
  };
  function BasicTypeSpecifier(id) {
    TypeSpecifier.call(this);
    this.id = id;
  }
  BasicTypeSpecifier.prototype.visitChildren_7xaucg$ = function (visit) {
  };
  function BasicTypeSpecifier$Kind(name, ordinal, keyword) {
    Enum.call(this);
    this.keyword_akjmma$_0 = keyword;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function BasicTypeSpecifier$Kind_initFields() {
    BasicTypeSpecifier$Kind_initFields = function () {
    };
    BasicTypeSpecifier$Kind$VOID_instance = new BasicTypeSpecifier$Kind('VOID', 0, 'void');
    BasicTypeSpecifier$Kind$CHAR_instance = new BasicTypeSpecifier$Kind('CHAR', 1, 'char');
    BasicTypeSpecifier$Kind$SHORT_instance = new BasicTypeSpecifier$Kind('SHORT', 2, 'short');
    BasicTypeSpecifier$Kind$INT_instance = new BasicTypeSpecifier$Kind('INT', 3, 'int');
    BasicTypeSpecifier$Kind$LONG_instance = new BasicTypeSpecifier$Kind('LONG', 4, 'long');
    BasicTypeSpecifier$Kind$FLOAT_instance = new BasicTypeSpecifier$Kind('FLOAT', 5, 'float');
    BasicTypeSpecifier$Kind$DOUBLE_instance = new BasicTypeSpecifier$Kind('DOUBLE', 6, 'double');
    BasicTypeSpecifier$Kind$SIGNED_instance = new BasicTypeSpecifier$Kind('SIGNED', 7, 'signed');
    BasicTypeSpecifier$Kind$UNSIGNED_instance = new BasicTypeSpecifier$Kind('UNSIGNED', 8, 'unsigned');
    BasicTypeSpecifier$Kind$BOOL_instance = new BasicTypeSpecifier$Kind('BOOL', 9, '_Bool');
    BasicTypeSpecifier$Kind$COMPLEX_instance = new BasicTypeSpecifier$Kind('COMPLEX', 10, '_Complex');
    BasicTypeSpecifier$Kind$Companion_getInstance();
  }
  Object.defineProperty(BasicTypeSpecifier$Kind.prototype, 'keyword', {get: function () {
    return this.keyword_akjmma$_0;
  }});
  var BasicTypeSpecifier$Kind$VOID_instance;
  function BasicTypeSpecifier$Kind$VOID_getInstance() {
    BasicTypeSpecifier$Kind_initFields();
    return BasicTypeSpecifier$Kind$VOID_instance;
  }
  var BasicTypeSpecifier$Kind$CHAR_instance;
  function BasicTypeSpecifier$Kind$CHAR_getInstance() {
    BasicTypeSpecifier$Kind_initFields();
    return BasicTypeSpecifier$Kind$CHAR_instance;
  }
  var BasicTypeSpecifier$Kind$SHORT_instance;
  function BasicTypeSpecifier$Kind$SHORT_getInstance() {
    BasicTypeSpecifier$Kind_initFields();
    return BasicTypeSpecifier$Kind$SHORT_instance;
  }
  var BasicTypeSpecifier$Kind$INT_instance;
  function BasicTypeSpecifier$Kind$INT_getInstance() {
    BasicTypeSpecifier$Kind_initFields();
    return BasicTypeSpecifier$Kind$INT_instance;
  }
  var BasicTypeSpecifier$Kind$LONG_instance;
  function BasicTypeSpecifier$Kind$LONG_getInstance() {
    BasicTypeSpecifier$Kind_initFields();
    return BasicTypeSpecifier$Kind$LONG_instance;
  }
  var BasicTypeSpecifier$Kind$FLOAT_instance;
  function BasicTypeSpecifier$Kind$FLOAT_getInstance() {
    BasicTypeSpecifier$Kind_initFields();
    return BasicTypeSpecifier$Kind$FLOAT_instance;
  }
  var BasicTypeSpecifier$Kind$DOUBLE_instance;
  function BasicTypeSpecifier$Kind$DOUBLE_getInstance() {
    BasicTypeSpecifier$Kind_initFields();
    return BasicTypeSpecifier$Kind$DOUBLE_instance;
  }
  var BasicTypeSpecifier$Kind$SIGNED_instance;
  function BasicTypeSpecifier$Kind$SIGNED_getInstance() {
    BasicTypeSpecifier$Kind_initFields();
    return BasicTypeSpecifier$Kind$SIGNED_instance;
  }
  var BasicTypeSpecifier$Kind$UNSIGNED_instance;
  function BasicTypeSpecifier$Kind$UNSIGNED_getInstance() {
    BasicTypeSpecifier$Kind_initFields();
    return BasicTypeSpecifier$Kind$UNSIGNED_instance;
  }
  var BasicTypeSpecifier$Kind$BOOL_instance;
  function BasicTypeSpecifier$Kind$BOOL_getInstance() {
    BasicTypeSpecifier$Kind_initFields();
    return BasicTypeSpecifier$Kind$BOOL_instance;
  }
  var BasicTypeSpecifier$Kind$COMPLEX_instance;
  function BasicTypeSpecifier$Kind$COMPLEX_getInstance() {
    BasicTypeSpecifier$Kind_initFields();
    return BasicTypeSpecifier$Kind$COMPLEX_instance;
  }
  function BasicTypeSpecifier$Kind$Companion() {
    BasicTypeSpecifier$Kind$Companion_instance = this;
    KeywordEnum$Companion.call(this, BasicTypeSpecifier$Kind$BasicTypeSpecifier$Kind$Companion_init$lambda);
  }
  function BasicTypeSpecifier$Kind$BasicTypeSpecifier$Kind$Companion_init$lambda() {
    return BasicTypeSpecifier$Kind$values();
  }
  BasicTypeSpecifier$Kind$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [KeywordEnum$Companion]};
  var BasicTypeSpecifier$Kind$Companion_instance = null;
  function BasicTypeSpecifier$Kind$Companion_getInstance() {
    BasicTypeSpecifier$Kind_initFields();
    if (BasicTypeSpecifier$Kind$Companion_instance === null) {
      new BasicTypeSpecifier$Kind$Companion();
    }
    return BasicTypeSpecifier$Kind$Companion_instance;
  }
  BasicTypeSpecifier$Kind.$metadata$ = {kind: Kind_CLASS, simpleName: 'Kind', interfaces: [KeywordEnum, Enum]};
  function BasicTypeSpecifier$Kind$values() {
    return [BasicTypeSpecifier$Kind$VOID_getInstance(), BasicTypeSpecifier$Kind$CHAR_getInstance(), BasicTypeSpecifier$Kind$SHORT_getInstance(), BasicTypeSpecifier$Kind$INT_getInstance(), BasicTypeSpecifier$Kind$LONG_getInstance(), BasicTypeSpecifier$Kind$FLOAT_getInstance(), BasicTypeSpecifier$Kind$DOUBLE_getInstance(), BasicTypeSpecifier$Kind$SIGNED_getInstance(), BasicTypeSpecifier$Kind$UNSIGNED_getInstance(), BasicTypeSpecifier$Kind$BOOL_getInstance(), BasicTypeSpecifier$Kind$COMPLEX_getInstance()];
  }
  BasicTypeSpecifier$Kind.values = BasicTypeSpecifier$Kind$values;
  function BasicTypeSpecifier$Kind$valueOf(name) {
    switch (name) {
      case 'VOID':
        return BasicTypeSpecifier$Kind$VOID_getInstance();
      case 'CHAR':
        return BasicTypeSpecifier$Kind$CHAR_getInstance();
      case 'SHORT':
        return BasicTypeSpecifier$Kind$SHORT_getInstance();
      case 'INT':
        return BasicTypeSpecifier$Kind$INT_getInstance();
      case 'LONG':
        return BasicTypeSpecifier$Kind$LONG_getInstance();
      case 'FLOAT':
        return BasicTypeSpecifier$Kind$FLOAT_getInstance();
      case 'DOUBLE':
        return BasicTypeSpecifier$Kind$DOUBLE_getInstance();
      case 'SIGNED':
        return BasicTypeSpecifier$Kind$SIGNED_getInstance();
      case 'UNSIGNED':
        return BasicTypeSpecifier$Kind$UNSIGNED_getInstance();
      case 'BOOL':
        return BasicTypeSpecifier$Kind$BOOL_getInstance();
      case 'COMPLEX':
        return BasicTypeSpecifier$Kind$COMPLEX_getInstance();
      default:throwISE('No enum constant com.soywiz.ktcc.BasicTypeSpecifier.Kind.' + name);
    }
  }
  BasicTypeSpecifier$Kind.valueOf_61zpoe$ = BasicTypeSpecifier$Kind$valueOf;
  BasicTypeSpecifier.$metadata$ = {kind: Kind_CLASS, simpleName: 'BasicTypeSpecifier', interfaces: [TypeSpecifier]};
  BasicTypeSpecifier.prototype.component1 = function () {
    return this.id;
  };
  BasicTypeSpecifier.prototype.copy_ybnq4j$ = function (id) {
    return new BasicTypeSpecifier(id === void 0 ? this.id : id);
  };
  BasicTypeSpecifier.prototype.toString = function () {
    return 'BasicTypeSpecifier(id=' + Kotlin.toString(this.id) + ')';
  };
  BasicTypeSpecifier.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    return result;
  };
  BasicTypeSpecifier.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.id, other.id))));
  };
  function TypedefTypeSpecifierName(id) {
    TypeSpecifier.call(this);
    this.id = id;
  }
  TypedefTypeSpecifierName.prototype.visitChildren_7xaucg$ = function (visit) {
  };
  TypedefTypeSpecifierName.$metadata$ = {kind: Kind_CLASS, simpleName: 'TypedefTypeSpecifierName', interfaces: [TypeSpecifier]};
  TypedefTypeSpecifierName.prototype.component1 = function () {
    return this.id;
  };
  TypedefTypeSpecifierName.prototype.copy_61zpoe$ = function (id) {
    return new TypedefTypeSpecifierName(id === void 0 ? this.id : id);
  };
  TypedefTypeSpecifierName.prototype.toString = function () {
    return 'TypedefTypeSpecifierName(id=' + Kotlin.toString(this.id) + ')';
  };
  TypedefTypeSpecifierName.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    return result;
  };
  TypedefTypeSpecifierName.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.id, other.id))));
  };
  function TypedefTypeSpecifierRef(id) {
    TypeSpecifier.call(this);
    this.id = id;
  }
  TypedefTypeSpecifierRef.prototype.visitChildren_7xaucg$ = function (visit) {
  };
  TypedefTypeSpecifierRef.$metadata$ = {kind: Kind_CLASS, simpleName: 'TypedefTypeSpecifierRef', interfaces: [TypeSpecifier]};
  TypedefTypeSpecifierRef.prototype.component1 = function () {
    return this.id;
  };
  TypedefTypeSpecifierRef.prototype.copy_61zpoe$ = function (id) {
    return new TypedefTypeSpecifierRef(id === void 0 ? this.id : id);
  };
  TypedefTypeSpecifierRef.prototype.toString = function () {
    return 'TypedefTypeSpecifierRef(id=' + Kotlin.toString(this.id) + ')';
  };
  TypedefTypeSpecifierRef.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    return result;
  };
  TypedefTypeSpecifierRef.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.id, other.id))));
  };
  function StructUnionTypeSpecifier(kind, id, decls) {
    TypeSpecifier.call(this);
    this.kind = kind;
    this.id = id;
    this.decls = decls;
  }
  StructUnionTypeSpecifier.prototype.visitChildren_7xaucg$ = function (visit) {
    visit.invoke_dixj5a$(this.id);
    visit.invoke_pdej7n$(this.decls);
  };
  StructUnionTypeSpecifier.$metadata$ = {kind: Kind_CLASS, simpleName: 'StructUnionTypeSpecifier', interfaces: [TypeSpecifier]};
  StructUnionTypeSpecifier.prototype.component1 = function () {
    return this.kind;
  };
  StructUnionTypeSpecifier.prototype.component2 = function () {
    return this.id;
  };
  StructUnionTypeSpecifier.prototype.component3 = function () {
    return this.decls;
  };
  StructUnionTypeSpecifier.prototype.copy_xb49f0$ = function (kind, id, decls) {
    return new StructUnionTypeSpecifier(kind === void 0 ? this.kind : kind, id === void 0 ? this.id : id, decls === void 0 ? this.decls : decls);
  };
  StructUnionTypeSpecifier.prototype.toString = function () {
    return 'StructUnionTypeSpecifier(kind=' + Kotlin.toString(this.kind) + (', id=' + Kotlin.toString(this.id)) + (', decls=' + Kotlin.toString(this.decls)) + ')';
  };
  StructUnionTypeSpecifier.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.kind) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.decls) | 0;
    return result;
  };
  StructUnionTypeSpecifier.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.kind, other.kind) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.decls, other.decls)))));
  };
  function KeywordEnum() {
  }
  function KeywordEnum$Companion(gen) {
    this.gen = gen;
    var $receiver = this.gen();
    var capacity = coerceAtLeast(mapCapacity($receiver.length), 16);
    var destination = LinkedHashMap_init_1(capacity);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      destination.put_xwzc9p$(element.keyword, element);
    }
    this.BY_KEYWORD = destination;
  }
  KeywordEnum$Companion.prototype.get_61zpoe$ = function (keyword) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = this.BY_KEYWORD.get_11rb$(keyword)) != null)
      tmp$_0 = tmp$;
    else {
      throw IllegalStateException_init(("Can't find enum entry with keyword '" + keyword + "'").toString());
    }
    return tmp$_0;
  };
  KeywordEnum$Companion.$metadata$ = {kind: Kind_CLASS, simpleName: 'Companion', interfaces: []};
  KeywordEnum.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'KeywordEnum', interfaces: []};
  function StorageClassSpecifier(kind) {
    TypeSpecifier.call(this);
    this.kind = kind;
  }
  StorageClassSpecifier.prototype.visitChildren_7xaucg$ = function (visit) {
  };
  function StorageClassSpecifier$Kind(name, ordinal, keyword) {
    Enum.call(this);
    this.keyword_nq4w29$_0 = keyword;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function StorageClassSpecifier$Kind_initFields() {
    StorageClassSpecifier$Kind_initFields = function () {
    };
    StorageClassSpecifier$Kind$TYPEDEF_instance = new StorageClassSpecifier$Kind('TYPEDEF', 0, 'typedef');
    StorageClassSpecifier$Kind$EXTERN_instance = new StorageClassSpecifier$Kind('EXTERN', 1, 'extern');
    StorageClassSpecifier$Kind$STATIC_instance = new StorageClassSpecifier$Kind('STATIC', 2, 'static');
    StorageClassSpecifier$Kind$THREAD_LOCAL_instance = new StorageClassSpecifier$Kind('THREAD_LOCAL', 3, '_Thread_local');
    StorageClassSpecifier$Kind$AUTO_instance = new StorageClassSpecifier$Kind('AUTO', 4, 'auto');
    StorageClassSpecifier$Kind$REGISTER_instance = new StorageClassSpecifier$Kind('REGISTER', 5, 'register');
    StorageClassSpecifier$Kind$Companion_getInstance();
  }
  Object.defineProperty(StorageClassSpecifier$Kind.prototype, 'keyword', {get: function () {
    return this.keyword_nq4w29$_0;
  }});
  var StorageClassSpecifier$Kind$TYPEDEF_instance;
  function StorageClassSpecifier$Kind$TYPEDEF_getInstance() {
    StorageClassSpecifier$Kind_initFields();
    return StorageClassSpecifier$Kind$TYPEDEF_instance;
  }
  var StorageClassSpecifier$Kind$EXTERN_instance;
  function StorageClassSpecifier$Kind$EXTERN_getInstance() {
    StorageClassSpecifier$Kind_initFields();
    return StorageClassSpecifier$Kind$EXTERN_instance;
  }
  var StorageClassSpecifier$Kind$STATIC_instance;
  function StorageClassSpecifier$Kind$STATIC_getInstance() {
    StorageClassSpecifier$Kind_initFields();
    return StorageClassSpecifier$Kind$STATIC_instance;
  }
  var StorageClassSpecifier$Kind$THREAD_LOCAL_instance;
  function StorageClassSpecifier$Kind$THREAD_LOCAL_getInstance() {
    StorageClassSpecifier$Kind_initFields();
    return StorageClassSpecifier$Kind$THREAD_LOCAL_instance;
  }
  var StorageClassSpecifier$Kind$AUTO_instance;
  function StorageClassSpecifier$Kind$AUTO_getInstance() {
    StorageClassSpecifier$Kind_initFields();
    return StorageClassSpecifier$Kind$AUTO_instance;
  }
  var StorageClassSpecifier$Kind$REGISTER_instance;
  function StorageClassSpecifier$Kind$REGISTER_getInstance() {
    StorageClassSpecifier$Kind_initFields();
    return StorageClassSpecifier$Kind$REGISTER_instance;
  }
  function StorageClassSpecifier$Kind$Companion() {
    StorageClassSpecifier$Kind$Companion_instance = this;
    KeywordEnum$Companion.call(this, StorageClassSpecifier$Kind$StorageClassSpecifier$Kind$Companion_init$lambda);
  }
  function StorageClassSpecifier$Kind$StorageClassSpecifier$Kind$Companion_init$lambda() {
    return StorageClassSpecifier$Kind$values();
  }
  StorageClassSpecifier$Kind$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [KeywordEnum$Companion]};
  var StorageClassSpecifier$Kind$Companion_instance = null;
  function StorageClassSpecifier$Kind$Companion_getInstance() {
    StorageClassSpecifier$Kind_initFields();
    if (StorageClassSpecifier$Kind$Companion_instance === null) {
      new StorageClassSpecifier$Kind$Companion();
    }
    return StorageClassSpecifier$Kind$Companion_instance;
  }
  StorageClassSpecifier$Kind.$metadata$ = {kind: Kind_CLASS, simpleName: 'Kind', interfaces: [KeywordEnum, Enum]};
  function StorageClassSpecifier$Kind$values() {
    return [StorageClassSpecifier$Kind$TYPEDEF_getInstance(), StorageClassSpecifier$Kind$EXTERN_getInstance(), StorageClassSpecifier$Kind$STATIC_getInstance(), StorageClassSpecifier$Kind$THREAD_LOCAL_getInstance(), StorageClassSpecifier$Kind$AUTO_getInstance(), StorageClassSpecifier$Kind$REGISTER_getInstance()];
  }
  StorageClassSpecifier$Kind.values = StorageClassSpecifier$Kind$values;
  function StorageClassSpecifier$Kind$valueOf(name) {
    switch (name) {
      case 'TYPEDEF':
        return StorageClassSpecifier$Kind$TYPEDEF_getInstance();
      case 'EXTERN':
        return StorageClassSpecifier$Kind$EXTERN_getInstance();
      case 'STATIC':
        return StorageClassSpecifier$Kind$STATIC_getInstance();
      case 'THREAD_LOCAL':
        return StorageClassSpecifier$Kind$THREAD_LOCAL_getInstance();
      case 'AUTO':
        return StorageClassSpecifier$Kind$AUTO_getInstance();
      case 'REGISTER':
        return StorageClassSpecifier$Kind$REGISTER_getInstance();
      default:throwISE('No enum constant com.soywiz.ktcc.StorageClassSpecifier.Kind.' + name);
    }
  }
  StorageClassSpecifier$Kind.valueOf_61zpoe$ = StorageClassSpecifier$Kind$valueOf;
  StorageClassSpecifier.$metadata$ = {kind: Kind_CLASS, simpleName: 'StorageClassSpecifier', interfaces: [TypeSpecifier]};
  StorageClassSpecifier.prototype.component1 = function () {
    return this.kind;
  };
  StorageClassSpecifier.prototype.copy_2v49ao$ = function (kind) {
    return new StorageClassSpecifier(kind === void 0 ? this.kind : kind);
  };
  StorageClassSpecifier.prototype.toString = function () {
    return 'StorageClassSpecifier(kind=' + Kotlin.toString(this.kind) + ')';
  };
  StorageClassSpecifier.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.kind) | 0;
    return result;
  };
  StorageClassSpecifier.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.kind, other.kind))));
  };
  function TypeQualifier(kind) {
    TypeSpecifier.call(this);
    this.kind = kind;
  }
  TypeQualifier.prototype.visitChildren_7xaucg$ = function (visit) {
  };
  function TypeQualifier$Kind(name, ordinal, keyword) {
    Enum.call(this);
    this.keyword_1406te$_0 = keyword;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function TypeQualifier$Kind_initFields() {
    TypeQualifier$Kind_initFields = function () {
    };
    TypeQualifier$Kind$CONST_instance = new TypeQualifier$Kind('CONST', 0, 'const');
    TypeQualifier$Kind$RESTRICT_instance = new TypeQualifier$Kind('RESTRICT', 1, 'restrict');
    TypeQualifier$Kind$VOLATILE_instance = new TypeQualifier$Kind('VOLATILE', 2, 'volatile');
    TypeQualifier$Kind$ATOMIC_instance = new TypeQualifier$Kind('ATOMIC', 3, '_Atomic');
    TypeQualifier$Kind$Companion_getInstance();
  }
  Object.defineProperty(TypeQualifier$Kind.prototype, 'keyword', {get: function () {
    return this.keyword_1406te$_0;
  }});
  var TypeQualifier$Kind$CONST_instance;
  function TypeQualifier$Kind$CONST_getInstance() {
    TypeQualifier$Kind_initFields();
    return TypeQualifier$Kind$CONST_instance;
  }
  var TypeQualifier$Kind$RESTRICT_instance;
  function TypeQualifier$Kind$RESTRICT_getInstance() {
    TypeQualifier$Kind_initFields();
    return TypeQualifier$Kind$RESTRICT_instance;
  }
  var TypeQualifier$Kind$VOLATILE_instance;
  function TypeQualifier$Kind$VOLATILE_getInstance() {
    TypeQualifier$Kind_initFields();
    return TypeQualifier$Kind$VOLATILE_instance;
  }
  var TypeQualifier$Kind$ATOMIC_instance;
  function TypeQualifier$Kind$ATOMIC_getInstance() {
    TypeQualifier$Kind_initFields();
    return TypeQualifier$Kind$ATOMIC_instance;
  }
  function TypeQualifier$Kind$Companion() {
    TypeQualifier$Kind$Companion_instance = this;
    KeywordEnum$Companion.call(this, TypeQualifier$Kind$TypeQualifier$Kind$Companion_init$lambda);
  }
  function TypeQualifier$Kind$TypeQualifier$Kind$Companion_init$lambda() {
    return TypeQualifier$Kind$values();
  }
  TypeQualifier$Kind$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [KeywordEnum$Companion]};
  var TypeQualifier$Kind$Companion_instance = null;
  function TypeQualifier$Kind$Companion_getInstance() {
    TypeQualifier$Kind_initFields();
    if (TypeQualifier$Kind$Companion_instance === null) {
      new TypeQualifier$Kind$Companion();
    }
    return TypeQualifier$Kind$Companion_instance;
  }
  TypeQualifier$Kind.$metadata$ = {kind: Kind_CLASS, simpleName: 'Kind', interfaces: [KeywordEnum, Enum]};
  function TypeQualifier$Kind$values() {
    return [TypeQualifier$Kind$CONST_getInstance(), TypeQualifier$Kind$RESTRICT_getInstance(), TypeQualifier$Kind$VOLATILE_getInstance(), TypeQualifier$Kind$ATOMIC_getInstance()];
  }
  TypeQualifier$Kind.values = TypeQualifier$Kind$values;
  function TypeQualifier$Kind$valueOf(name) {
    switch (name) {
      case 'CONST':
        return TypeQualifier$Kind$CONST_getInstance();
      case 'RESTRICT':
        return TypeQualifier$Kind$RESTRICT_getInstance();
      case 'VOLATILE':
        return TypeQualifier$Kind$VOLATILE_getInstance();
      case 'ATOMIC':
        return TypeQualifier$Kind$ATOMIC_getInstance();
      default:throwISE('No enum constant com.soywiz.ktcc.TypeQualifier.Kind.' + name);
    }
  }
  TypeQualifier$Kind.valueOf_61zpoe$ = TypeQualifier$Kind$valueOf;
  TypeQualifier.$metadata$ = {kind: Kind_CLASS, simpleName: 'TypeQualifier', interfaces: [TypeSpecifier]};
  TypeQualifier.prototype.component1 = function () {
    return this.kind;
  };
  TypeQualifier.prototype.copy_y2ujzz$ = function (kind) {
    return new TypeQualifier(kind === void 0 ? this.kind : kind);
  };
  TypeQualifier.prototype.toString = function () {
    return 'TypeQualifier(kind=' + Kotlin.toString(this.kind) + ')';
  };
  TypeQualifier.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.kind) | 0;
    return result;
  };
  TypeQualifier.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.kind, other.kind))));
  };
  function FunctionSpecifier(kind) {
    TypeSpecifier.call(this);
    this.kind = kind;
  }
  FunctionSpecifier.prototype.visitChildren_7xaucg$ = function (visit) {
  };
  FunctionSpecifier.$metadata$ = {kind: Kind_CLASS, simpleName: 'FunctionSpecifier', interfaces: [TypeSpecifier]};
  FunctionSpecifier.prototype.component1 = function () {
    return this.kind;
  };
  FunctionSpecifier.prototype.copy_61zpoe$ = function (kind) {
    return new FunctionSpecifier(kind === void 0 ? this.kind : kind);
  };
  FunctionSpecifier.prototype.toString = function () {
    return 'FunctionSpecifier(kind=' + Kotlin.toString(this.kind) + ')';
  };
  FunctionSpecifier.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.kind) | 0;
    return result;
  };
  FunctionSpecifier.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.kind, other.kind))));
  };
  function AlignAsSpecifier(info) {
    TypeSpecifier.call(this);
    this.info = info;
  }
  AlignAsSpecifier.prototype.visitChildren_7xaucg$ = function (visit) {
    visit.invoke_dixj5a$(this.info);
  };
  AlignAsSpecifier.$metadata$ = {kind: Kind_CLASS, simpleName: 'AlignAsSpecifier', interfaces: [TypeSpecifier]};
  AlignAsSpecifier.prototype.component1 = function () {
    return this.info;
  };
  AlignAsSpecifier.prototype.copy_2q70oh$ = function (info) {
    return new AlignAsSpecifier(info === void 0 ? this.info : info);
  };
  AlignAsSpecifier.prototype.toString = function () {
    return 'AlignAsSpecifier(info=' + Kotlin.toString(this.info) + ')';
  };
  AlignAsSpecifier.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.info) | 0;
    return result;
  };
  AlignAsSpecifier.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.info, other.info))));
  };
  function TypeName(specifiers, abstractDecl) {
    TypeSpecifier.call(this);
    this.specifiers = specifiers;
    this.abstractDecl = abstractDecl;
  }
  TypeName.prototype.visitChildren_7xaucg$ = function (visit) {
    visit.invoke_487qa8$(this.specifiers, this.abstractDecl);
  };
  TypeName.$metadata$ = {kind: Kind_CLASS, simpleName: 'TypeName', interfaces: [TypeSpecifier]};
  TypeName.prototype.component1 = function () {
    return this.specifiers;
  };
  TypeName.prototype.component2 = function () {
    return this.abstractDecl;
  };
  TypeName.prototype.copy_ejikw8$ = function (specifiers, abstractDecl) {
    return new TypeName(specifiers === void 0 ? this.specifiers : specifiers, abstractDecl === void 0 ? this.abstractDecl : abstractDecl);
  };
  TypeName.prototype.toString = function () {
    return 'TypeName(specifiers=' + Kotlin.toString(this.specifiers) + (', abstractDecl=' + Kotlin.toString(this.abstractDecl)) + ')';
  };
  TypeName.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.specifiers) | 0;
    result = result * 31 + Kotlin.hashCode(this.abstractDecl) | 0;
    return result;
  };
  TypeName.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.specifiers, other.specifiers) && Kotlin.equals(this.abstractDecl, other.abstractDecl)))));
  };
  function tryTypeName($receiver) {
    var startPos = $receiver.pos;
    var tmp$;
    tmp$ = declarationSpecifiers($receiver);
    if (tmp$ == null) {
      return null;
    }
    var specifiers = tmp$;
    var absDecl = tryAbstractDeclarator($receiver);
    var $receiver_0 = new TypeName(specifiers, absDecl);
    if (($receiver_0 != null ? $receiver_0.tagged : null) !== true) {
      $receiver_0 != null ? ($receiver_0.tagged = true) : null;
      $receiver_0 != null ? ($receiver_0.pos = startPos) : null;
      $receiver_0 != null ? ($receiver_0.endPos = $receiver.pos) : null;
      if (($receiver_0 != null ? $receiver_0.func : null) == null) {
        $receiver_0 != null ? ($receiver_0.func = $receiver._functionScope) : null;
      }
    }
    return $receiver_0;
  }
  function tryDirectAbstractDeclarator($receiver) {
    var out = null;
    loop: while (true) {
      switch ($receiver.peek_za3lpa$()) {
        case '(':
          throw new NotImplementedError_init('An operation is not implemented: ' + ('tryDirectAbstractDeclarator at ' + $receiver));
        case '[':
          throw new NotImplementedError_init('An operation is not implemented: ' + ('tryDirectAbstractDeclarator at ' + $receiver));
        default:break loop;
      }
    }
    return out;
  }
  function AbstractDeclarator(ptr, adc) {
    Node.call(this);
    this.ptr = ptr;
    this.adc = adc;
  }
  AbstractDeclarator.prototype.visitChildren_7xaucg$ = function (visit) {
    visit.invoke_487qa8$(this.ptr, this.adc);
  };
  AbstractDeclarator.$metadata$ = {kind: Kind_CLASS, simpleName: 'AbstractDeclarator', interfaces: [Node]};
  function tryAbstractDeclarator($receiver) {
    var startPos = $receiver.pos;
    var pointer = tryPointer($receiver);
    var adc = tryDirectAbstractDeclarator($receiver);
    if (pointer == null && adc == null)
      return null;
    var $receiver_0 = new AbstractDeclarator(pointer, adc);
    if (($receiver_0 != null ? $receiver_0.tagged : null) !== true) {
      $receiver_0 != null ? ($receiver_0.tagged = true) : null;
      $receiver_0 != null ? ($receiver_0.pos = startPos) : null;
      $receiver_0 != null ? ($receiver_0.endPos = $receiver.pos) : null;
      if (($receiver_0 != null ? $receiver_0.func : null) == null) {
        $receiver_0 != null ? ($receiver_0.func = $receiver._functionScope) : null;
      }
    }
    return $receiver_0;
  }
  function declarationSpecifiers($receiver, sure) {
    if (sure === void 0)
      sure = false;
    var tmp$, tmp$_0;
    $receiver.consumeLineMarkers();
    var out = ArrayList_init();
    var hasTypedef = false;
    while (true) {
      if ($receiver.eof) {
        throw IllegalStateException_init('eof found'.toString());
      }
      tmp$ = tryDeclarationSpecifier($receiver, hasTypedef, !out.isEmpty(), sure);
      if (tmp$ == null) {
        break;
      }
      var spec = tmp$;
      if (Kotlin.isType(spec, StorageClassSpecifier) && spec.kind === StorageClassSpecifier$Kind$TYPEDEF_getInstance())
        hasTypedef = true;
      out.add_11rb$(spec);
    }
    var result = out.isEmpty() ? null : new ListTypeSpecifier(out);
    if (hasTypedef) {
      ensureNotNull(result);
      var tmp$_1;
      var destination = ArrayList_init();
      var tmp$_2;
      tmp$_2 = out.iterator();
      while (tmp$_2.hasNext()) {
        var element = tmp$_2.next();
        if (Kotlin.isType(element, TypedefTypeSpecifierName))
          destination.add_11rb$(element);
      }
      if ((tmp$_0 = firstOrNull_0(destination)) != null)
        tmp$_1 = tmp$_0;
      else {
        throw IllegalStateException_init("Typedef doesn't include a name".toString());
      }
      var name = tmp$_1;
      var $receiver_0 = $receiver.typedefTypes;
      var key = name.id;
      $receiver_0.put_xwzc9p$(key, result);
      var $receiver_1 = $receiver.typedefAliases;
      var key_0 = name.id;
      var value = toFinalType(new ListTypeSpecifier(withoutTypedefs(result.items)));
      $receiver_1.put_xwzc9p$(key_0, value);
      var destination_0 = ArrayList_init();
      var tmp$_3;
      tmp$_3 = out.iterator();
      while (tmp$_3.hasNext()) {
        var element_0 = tmp$_3.next();
        if (Kotlin.isType(element_0, StructUnionTypeSpecifier))
          destination_0.add_11rb$(element_0);
      }
      var structTypeSpecifier = firstOrNull_0(destination_0);
      if (structTypeSpecifier != null) {
        var structType = $receiver.getStructTypeInfo_me841z$(structTypeSpecifier);
        $receiver.structTypesByName.remove_11rb$(structType.name);
        structType.name = name.id;
        var $receiver_2 = $receiver.structTypesByName;
        var key_1 = structType.name;
        $receiver_2.put_xwzc9p$(key_1, structType);
      }
    }
    return result;
  }
  function tryTypeQualifier($receiver) {
    var startPos = $receiver.pos;
    var callback$result;
    callback$break: do {
      switch ($receiver.peek_za3lpa$()) {
        case 'const':
        case 'restrict':
        case 'volatile':
        case '_Atomic':
          callback$result = new TypeQualifier(TypeQualifier$Kind$Companion_getInstance().get_61zpoe$($receiver.read()));
          break callback$break;
        default:callback$result = null;
          break callback$break;
      }
    }
     while (false);
    var $receiver_0 = callback$result;
    if (($receiver_0 != null ? $receiver_0.tagged : null) !== true) {
      $receiver_0 != null ? ($receiver_0.tagged = true) : null;
      $receiver_0 != null ? ($receiver_0.pos = startPos) : null;
      $receiver_0 != null ? ($receiver_0.endPos = $receiver.pos) : null;
      if (($receiver_0 != null ? $receiver_0.func : null) == null) {
        $receiver_0 != null ? ($receiver_0.func = $receiver._functionScope) : null;
      }
    }
    return $receiver_0;
  }
  function StructDeclarator(declarator, bit) {
    Node.call(this);
    this.declarator = declarator;
    this.bit = bit;
  }
  StructDeclarator.prototype.visitChildren_7xaucg$ = function (visit) {
    visit.invoke_487qa8$(this.declarator, this.bit);
  };
  StructDeclarator.$metadata$ = {kind: Kind_CLASS, simpleName: 'StructDeclarator', interfaces: [Node]};
  StructDeclarator.prototype.component1 = function () {
    return this.declarator;
  };
  StructDeclarator.prototype.component2 = function () {
    return this.bit;
  };
  StructDeclarator.prototype.copy_29em8t$ = function (declarator, bit) {
    return new StructDeclarator(declarator === void 0 ? this.declarator : declarator, bit === void 0 ? this.bit : bit);
  };
  StructDeclarator.prototype.toString = function () {
    return 'StructDeclarator(declarator=' + Kotlin.toString(this.declarator) + (', bit=' + Kotlin.toString(this.bit)) + ')';
  };
  StructDeclarator.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.declarator) | 0;
    result = result * 31 + Kotlin.hashCode(this.bit) | 0;
    return result;
  };
  StructDeclarator.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.declarator, other.declarator) && Kotlin.equals(this.bit, other.bit)))));
  };
  function StructDeclaration(specifiers, declarators) {
    Node.call(this);
    this.specifiers = specifiers;
    this.declarators = declarators;
  }
  StructDeclaration.prototype.visitChildren_7xaucg$ = function (visit) {
    visit.invoke_dixj5a$(this.specifiers);
    visit.invoke_pdej7n$(this.declarators);
  };
  StructDeclaration.$metadata$ = {kind: Kind_CLASS, simpleName: 'StructDeclaration', interfaces: [Node]};
  StructDeclaration.prototype.component1 = function () {
    return this.specifiers;
  };
  StructDeclaration.prototype.component2 = function () {
    return this.declarators;
  };
  StructDeclaration.prototype.copy_1pk4mj$ = function (specifiers, declarators) {
    return new StructDeclaration(specifiers === void 0 ? this.specifiers : specifiers, declarators === void 0 ? this.declarators : declarators);
  };
  StructDeclaration.prototype.toString = function () {
    return 'StructDeclaration(specifiers=' + Kotlin.toString(this.specifiers) + (', declarators=' + Kotlin.toString(this.declarators)) + ')';
  };
  StructDeclaration.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.specifiers) | 0;
    result = result * 31 + Kotlin.hashCode(this.declarators) | 0;
    return result;
  };
  StructDeclaration.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.specifiers, other.specifiers) && Kotlin.equals(this.declarators, other.declarators)))));
  };
  function structDeclarator($receiver) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = tryStructDeclarator($receiver)) != null)
      tmp$_0 = tmp$;
    else {
      throw IllegalStateException_init('Not a struct declarator!'.toString());
    }
    return tmp$_0;
  }
  function tryStructDeclarator($receiver) {
    var startPos = $receiver.pos;
    var callback$result;
    callback$break: do {
      var tmp$;
      var declarator = tryDeclarator($receiver);
      if (declarator == null || equals($receiver.peek_za3lpa$(), ':')) {
        if (declarator == null && !equals($receiver.peek_za3lpa$(), ':')) {
          callback$result = null;
          break callback$break;
        }
        $receiver.expect_11rb$(':');
        tmp$ = constantExpression($receiver);
      }
       else {
        tmp$ = null;
      }
      var bitExpr = tmp$;
      callback$result = new StructDeclarator(declarator, bitExpr);
    }
     while (false);
    var $receiver_0 = callback$result;
    if (($receiver_0 != null ? $receiver_0.tagged : null) !== true) {
      $receiver_0 != null ? ($receiver_0.tagged = true) : null;
      $receiver_0 != null ? ($receiver_0.pos = startPos) : null;
      $receiver_0 != null ? ($receiver_0.endPos = $receiver.pos) : null;
      if (($receiver_0 != null ? $receiver_0.func : null) == null) {
        $receiver_0 != null ? ($receiver_0.func = $receiver._functionScope) : null;
      }
    }
    return $receiver_0;
  }
  function tryStructDeclaration$lambda$lambda(this$tryStructDeclaration) {
    return function () {
      return structDeclarator(this$tryStructDeclaration);
    };
  }
  function tryStructDeclaration($receiver) {
    var startPos = $receiver.pos;
    var tmp$;
    if (equals($receiver.peek_za3lpa$(), '_Static_assert')) {
      tmp$ = staticAssert($receiver);
    }
     else {
      var specifiers = declarationSpecifiers($receiver);
      var declarators = list($receiver, ';', ',', void 0, void 0, tryStructDeclaration$lambda$lambda($receiver));
      $receiver.expect_11rb$(';');
      var tmp$_0;
      if (specifiers != null)
        tmp$_0 = specifiers;
      else {
        throw IllegalStateException_init((toString(specifiers) + ' ' + declarators + ' at ' + $receiver).toString());
      }
      tmp$ = new StructDeclaration(tmp$_0, declarators);
    }
    return tmp$;
  }
  function tryDeclarationSpecifier$lambda$lambda(this$tryDeclarationSpecifier) {
    return function () {
      var tmp$;
      var tmp$_0;
      if ((tmp$ = tryStructDeclaration(this$tryDeclarationSpecifier)) != null)
        tmp$_0 = tmp$;
      else {
        throw IllegalStateException_init('No a struct-declaration'.toString());
      }
      return tmp$_0;
    };
  }
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var Map = Kotlin.kotlin.collections.Map;
  function tryDeclarationSpecifier($receiver, hasTypedef, hasMoreSpecifiers, sure) {
    if (sure === void 0)
      sure = false;
    var startPos = $receiver.pos;
    var callback$result;
    callback$break: do {
      var tmp$, tmp$_0;
      var v = $receiver.peek_za3lpa$();
      switch (v) {
        case 'typedef':
        case 'extern':
        case 'static':
        case '_Thread_local':
        case 'auto':
        case 'register':
          callback$result = new StorageClassSpecifier(ensureNotNull(StorageClassSpecifier$Kind$Companion_getInstance().get_61zpoe$($receiver.read())));
          break callback$break;
        case 'const':
        case 'restrict':
        case 'volatile':
        case '_Atomic':
          callback$result = new TypeQualifier(TypeQualifier$Kind$Companion_getInstance().get_61zpoe$($receiver.read()));
          break callback$break;
        case 'inline':
        case '_Noreturn':
          callback$result = new FunctionSpecifier($receiver.read());
          break callback$break;
        case '_Alignas':
          $receiver.expect_11rb$('_Alignas');
          $receiver.expect_11rb$('(');
          var node = (tmp$ = tryTypeName($receiver)) != null ? tmp$ : constantExpression($receiver);
          $receiver.expect_11rb$(')');
          callback$result = new AlignAsSpecifier(node);
          break callback$break;
        case 'void':
        case 'char':
        case 'short':
        case 'int':
        case 'long':
        case 'float':
        case 'double':
        case 'signed':
        case 'unsigned':
        case '_Bool':
        case '_Complex':
          callback$result = new BasicTypeSpecifier(BasicTypeSpecifier$Kind$Companion_getInstance().get_61zpoe$($receiver.read()));
          break callback$break;
        case 'enum':
          var kind = $receiver.read();
          var id = !equals($receiver.peek_za3lpa$(), '{') ? identifier($receiver) : null;
          if (!equals($receiver.peek_za3lpa$(), '{')) {
            $receiver.expect_11rb$('{');
            throw new NotImplementedError_init('An operation is not implemented: ' + 'enum');
          }

          throw new NotImplementedError_init('An operation is not implemented: ' + 'enum');
        case 'struct':
        case 'union':
          var kind_0 = $receiver.read();
          var id_0 = !equals($receiver.peek_za3lpa$(), '{') ? identifierDecl($receiver) : null;
          if (equals($receiver.peek_za3lpa$(), '{')) {
            $receiver.expect_11rb$('{');
            var decls = list($receiver, '}', null, void 0, void 0, tryDeclarationSpecifier$lambda$lambda($receiver));
            $receiver.expect_11rb$('}');
            tmp$_0 = decls;
          }
           else {
            tmp$_0 = null;
          }

          var decls_0 = tmp$_0;
          var struct = new StructUnionTypeSpecifier(kind_0, id_0, decls_0 != null ? decls_0 : emptyList());
          var tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
          var it = struct;
          var isUnion = equals(struct.kind, 'union');
          var structName = (tmp$_3 = (tmp$_1 = it.id) != null ? tmp$_1.name : null) != null ? tmp$_3 : 'Anonymous' + (tmp$_2 = $receiver.structId, $receiver.structId = tmp$_2 + 1 | 0, tmp$_2);
          var structType = new StructTypeInfo(structName, it);
          $receiver.structTypesByName.put_xwzc9p$(structName, structType);
          $receiver.structTypesBySpecifier.put_xwzc9p$(it, structType);
          var offset = 0;
          var maxSize = 0;
          tmp$_4 = it.decls.iterator();
          while (tmp$_4.hasNext()) {
            var decl = tmp$_4.next();
            var ftype = toFinalType(decl.specifiers);
            tmp$_5 = decl.declarators.iterator();
            while (tmp$_5.hasNext()) {
              var dtors = tmp$_5.next();
              var name = (tmp$_7 = (tmp$_6 = dtors.declarator) != null ? getName(tmp$_6) : null) != null ? tmp$_7 : 'unknown';
              var rftype = withDeclarator(ftype, dtors.declarator);
              var rsize = $receiver.getSize_b2mlnm$(rftype);
              structType.addField_1laady$(new StructField(name, rftype, offset, rsize, decl));
              var a = maxSize;
              maxSize = Math_0.max(a, rsize);
              if (!isUnion) {
                offset = offset + rsize | 0;
              }
            }
          }

          structType.size = isUnion ? maxSize : offset;
          callback$result = struct;
          break callback$break;
        default:var $receiver_0 = $receiver.typedefTypes;
          var tmp$_8;
          if ((Kotlin.isType(tmp$_8 = $receiver_0, Map) ? tmp$_8 : throwCCE()).containsKey_11rb$(v)) {
            callback$result = new TypedefTypeSpecifierRef($receiver.read());
            break callback$break;
          }
           else if (hasTypedef && Id$Companion_getInstance().isValid_61zpoe$(v)) {
            callback$result = new TypedefTypeSpecifierName($receiver.read());
            break callback$break;
          }
           else if (hasMoreSpecifiers) {
            callback$result = null;
            break callback$break;
          }
           else if (sure)
            throw new ExpectException("'" + v + "' is not a valid type");
          else {
            callback$result = null;
            break callback$break;
          }

      }
    }
     while (false);
    var $receiver_1 = callback$result;
    if (($receiver_1 != null ? $receiver_1.tagged : null) !== true) {
      $receiver_1 != null ? ($receiver_1.tagged = true) : null;
      $receiver_1 != null ? ($receiver_1.pos = startPos) : null;
      $receiver_1 != null ? ($receiver_1.endPos = $receiver.pos) : null;
      if (($receiver_1 != null ? $receiver_1.func : null) == null) {
        $receiver_1 != null ? ($receiver_1.func = $receiver._functionScope) : null;
      }
    }
    return $receiver_1;
  }
  function Pointer(qualifiers, parent) {
    Node.call(this);
    this.qualifiers = qualifiers;
    this.parent = parent;
  }
  Pointer.prototype.visitChildren_7xaucg$ = function (visit) {
    visit.invoke_pdej7n$(this.qualifiers);
    visit.invoke_dixj5a$(this.parent);
  };
  Pointer.$metadata$ = {kind: Kind_CLASS, simpleName: 'Pointer', interfaces: [Node]};
  Pointer.prototype.component1 = function () {
    return this.qualifiers;
  };
  Pointer.prototype.component2 = function () {
    return this.parent;
  };
  Pointer.prototype.copy_ksu54d$ = function (qualifiers, parent) {
    return new Pointer(qualifiers === void 0 ? this.qualifiers : qualifiers, parent === void 0 ? this.parent : parent);
  };
  Pointer.prototype.toString = function () {
    return 'Pointer(qualifiers=' + Kotlin.toString(this.qualifiers) + (', parent=' + Kotlin.toString(this.parent)) + ')';
  };
  Pointer.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.qualifiers) | 0;
    result = result * 31 + Kotlin.hashCode(this.parent) | 0;
    return result;
  };
  Pointer.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.qualifiers, other.qualifiers) && Kotlin.equals(this.parent, other.parent)))));
  };
  function tryPointer($receiver) {
    var startPos = $receiver.pos;
    var tmp$;
    var pointer = null;
    while (true) {
      if (equals($receiver.peek_za3lpa$(), '*')) {
        $receiver.expect_11rb$('*');
        var $receiver_0 = ArrayList_init();
        while (true) {
          var tmp$_0;
          $receiver_0.size;
          tmp$_0 = tryTypeQualifier($receiver);
          if (tmp$_0 == null) {
            break;
          }
          $receiver_0.add_11rb$(tmp$_0);
        }
        tmp$ = new Pointer($receiver_0, pointer);
      }
       else {
        break;
      }
      pointer = tmp$;
    }
    var $receiver_1 = pointer;
    if (($receiver_1 != null ? $receiver_1.tagged : null) !== true) {
      $receiver_1 != null ? ($receiver_1.tagged = true) : null;
      $receiver_1 != null ? ($receiver_1.pos = startPos) : null;
      $receiver_1 != null ? ($receiver_1.endPos = $receiver.pos) : null;
      if (($receiver_1 != null ? $receiver_1.func : null) == null) {
        $receiver_1 != null ? ($receiver_1.func = $receiver._functionScope) : null;
      }
    }
    return $receiver_1;
  }
  function ParameterDecl(specs, declarator) {
    Node.call(this);
    this.specs = specs;
    this.declarator = declarator;
  }
  ParameterDecl.prototype.visitChildren_7xaucg$ = function (visit) {
    visit.invoke_487qa8$(this.specs, this.declarator);
  };
  ParameterDecl.$metadata$ = {kind: Kind_CLASS, simpleName: 'ParameterDecl', interfaces: [Node]};
  ParameterDecl.prototype.component1 = function () {
    return this.specs;
  };
  ParameterDecl.prototype.component2 = function () {
    return this.declarator;
  };
  ParameterDecl.prototype.copy_24xqej$ = function (specs, declarator) {
    return new ParameterDecl(specs === void 0 ? this.specs : specs, declarator === void 0 ? this.declarator : declarator);
  };
  ParameterDecl.prototype.toString = function () {
    return 'ParameterDecl(specs=' + Kotlin.toString(this.specs) + (', declarator=' + Kotlin.toString(this.declarator)) + ')';
  };
  ParameterDecl.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.specs) | 0;
    result = result * 31 + Kotlin.hashCode(this.declarator) | 0;
    return result;
  };
  ParameterDecl.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.specs, other.specs) && Kotlin.equals(this.declarator, other.declarator)))));
  };
  function Declarator() {
    Node.call(this);
  }
  Declarator.$metadata$ = {kind: Kind_CLASS, simpleName: 'Declarator', interfaces: [Node]};
  function VarargDeclarator(id) {
    Declarator.call(this);
    this.id = id;
  }
  VarargDeclarator.prototype.visitChildren_7xaucg$ = function (visit) {
    visit.invoke_dixj5a$(this.id);
  };
  VarargDeclarator.$metadata$ = {kind: Kind_CLASS, simpleName: 'VarargDeclarator', interfaces: [Declarator]};
  VarargDeclarator.prototype.component1 = function () {
    return this.id;
  };
  VarargDeclarator.prototype.copy_bvybc9$ = function (id) {
    return new VarargDeclarator(id === void 0 ? this.id : id);
  };
  VarargDeclarator.prototype.toString = function () {
    return 'VarargDeclarator(id=' + Kotlin.toString(this.id) + ')';
  };
  VarargDeclarator.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    return result;
  };
  VarargDeclarator.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.id, other.id))));
  };
  function DeclaratorWithPointer(pointer, declarator) {
    Declarator.call(this);
    this.pointer = pointer;
    this.declarator = declarator;
  }
  DeclaratorWithPointer.prototype.visitChildren_7xaucg$ = function (visit) {
    visit.invoke_487qa8$(this.pointer, this.declarator);
  };
  DeclaratorWithPointer.$metadata$ = {kind: Kind_CLASS, simpleName: 'DeclaratorWithPointer', interfaces: [Declarator]};
  DeclaratorWithPointer.prototype.component1 = function () {
    return this.pointer;
  };
  DeclaratorWithPointer.prototype.component2 = function () {
    return this.declarator;
  };
  DeclaratorWithPointer.prototype.copy_igcmqq$ = function (pointer, declarator) {
    return new DeclaratorWithPointer(pointer === void 0 ? this.pointer : pointer, declarator === void 0 ? this.declarator : declarator);
  };
  DeclaratorWithPointer.prototype.toString = function () {
    return 'DeclaratorWithPointer(pointer=' + Kotlin.toString(this.pointer) + (', declarator=' + Kotlin.toString(this.declarator)) + ')';
  };
  DeclaratorWithPointer.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.pointer) | 0;
    result = result * 31 + Kotlin.hashCode(this.declarator) | 0;
    return result;
  };
  DeclaratorWithPointer.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.pointer, other.pointer) && Kotlin.equals(this.declarator, other.declarator)))));
  };
  function IdentifierDeclarator(id) {
    Declarator.call(this);
    this.id = id;
  }
  IdentifierDeclarator.prototype.visitChildren_7xaucg$ = function (visit) {
    visit.invoke_dixj5a$(this.id);
  };
  IdentifierDeclarator.$metadata$ = {kind: Kind_CLASS, simpleName: 'IdentifierDeclarator', interfaces: [Declarator]};
  IdentifierDeclarator.prototype.component1 = function () {
    return this.id;
  };
  IdentifierDeclarator.prototype.copy_9fn3fw$ = function (id) {
    return new IdentifierDeclarator(id === void 0 ? this.id : id);
  };
  IdentifierDeclarator.prototype.toString = function () {
    return 'IdentifierDeclarator(id=' + Kotlin.toString(this.id) + ')';
  };
  IdentifierDeclarator.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    return result;
  };
  IdentifierDeclarator.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.id, other.id))));
  };
  function ParameterDeclarator(base, decls) {
    Declarator.call(this);
    this.base = base;
    this.decls = decls;
    var $receiver = this.decls;
    var any$result;
    any$break: do {
      var tmp$;
      if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
        any$result = false;
        break any$break;
      }
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (Kotlin.isType(element.declarator, VarargDeclarator)) {
          any$result = true;
          break any$break;
        }
      }
      any$result = false;
    }
     while (false);
    this.variadic = any$result;
    var $receiver_0 = this.decls;
    var destination = ArrayList_init();
    var tmp$_0;
    tmp$_0 = $receiver_0.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      if (!Kotlin.isType(element_0.declarator, VarargDeclarator))
        destination.add_11rb$(element_0);
    }
    this.declsWithoutVariadic = destination;
  }
  ParameterDeclarator.prototype.visitChildren_7xaucg$ = function (visit) {
    visit.invoke_dixj5a$(this.base);
    visit.invoke_pdej7n$(this.decls);
  };
  ParameterDeclarator.$metadata$ = {kind: Kind_CLASS, simpleName: 'ParameterDeclarator', interfaces: [Declarator]};
  ParameterDeclarator.prototype.component1 = function () {
    return this.base;
  };
  ParameterDeclarator.prototype.component2 = function () {
    return this.decls;
  };
  ParameterDeclarator.prototype.copy_lkuflr$ = function (base, decls) {
    return new ParameterDeclarator(base === void 0 ? this.base : base, decls === void 0 ? this.decls : decls);
  };
  ParameterDeclarator.prototype.toString = function () {
    return 'ParameterDeclarator(base=' + Kotlin.toString(this.base) + (', decls=' + Kotlin.toString(this.decls)) + ')';
  };
  ParameterDeclarator.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.base) | 0;
    result = result * 31 + Kotlin.hashCode(this.decls) | 0;
    return result;
  };
  ParameterDeclarator.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.base, other.base) && Kotlin.equals(this.decls, other.decls)))));
  };
  function ArrayDeclarator(base, typeQualifiers, expr, static0, static1) {
    Declarator.call(this);
    this.base = base;
    this.typeQualifiers = typeQualifiers;
    this.expr = expr;
    this.static0 = static0;
    this.static1 = static1;
  }
  ArrayDeclarator.prototype.visitChildren_7xaucg$ = function (visit) {
    visit.invoke_dixj5a$(this.base);
    visit.invoke_pdej7n$(this.typeQualifiers);
    visit.invoke_dixj5a$(this.expr);
  };
  ArrayDeclarator.$metadata$ = {kind: Kind_CLASS, simpleName: 'ArrayDeclarator', interfaces: [Declarator]};
  ArrayDeclarator.prototype.component1 = function () {
    return this.base;
  };
  ArrayDeclarator.prototype.component2 = function () {
    return this.typeQualifiers;
  };
  ArrayDeclarator.prototype.component3 = function () {
    return this.expr;
  };
  ArrayDeclarator.prototype.component4 = function () {
    return this.static0;
  };
  ArrayDeclarator.prototype.component5 = function () {
    return this.static1;
  };
  ArrayDeclarator.prototype.copy_gnxh2l$ = function (base, typeQualifiers, expr, static0, static1) {
    return new ArrayDeclarator(base === void 0 ? this.base : base, typeQualifiers === void 0 ? this.typeQualifiers : typeQualifiers, expr === void 0 ? this.expr : expr, static0 === void 0 ? this.static0 : static0, static1 === void 0 ? this.static1 : static1);
  };
  ArrayDeclarator.prototype.toString = function () {
    return 'ArrayDeclarator(base=' + Kotlin.toString(this.base) + (', typeQualifiers=' + Kotlin.toString(this.typeQualifiers)) + (', expr=' + Kotlin.toString(this.expr)) + (', static0=' + Kotlin.toString(this.static0)) + (', static1=' + Kotlin.toString(this.static1)) + ')';
  };
  ArrayDeclarator.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.base) | 0;
    result = result * 31 + Kotlin.hashCode(this.typeQualifiers) | 0;
    result = result * 31 + Kotlin.hashCode(this.expr) | 0;
    result = result * 31 + Kotlin.hashCode(this.static0) | 0;
    result = result * 31 + Kotlin.hashCode(this.static1) | 0;
    return result;
  };
  ArrayDeclarator.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.base, other.base) && Kotlin.equals(this.typeQualifiers, other.typeQualifiers) && Kotlin.equals(this.expr, other.expr) && Kotlin.equals(this.static0, other.static0) && Kotlin.equals(this.static1, other.static1)))));
  };
  function parameterDeclaration($receiver) {
    var startPos = $receiver.pos;
    var callback$result;
    var tmp$;
    if (equals($receiver.peek_za3lpa$(), '...')) {
      var startPos_0 = $receiver.pos;
      var $receiver_0 = new IdDecl($receiver.read());
      if (($receiver_0 != null ? $receiver_0.tagged : null) !== true) {
        $receiver_0 != null ? ($receiver_0.tagged = true) : null;
        $receiver_0 != null ? ($receiver_0.pos = startPos_0) : null;
        $receiver_0 != null ? ($receiver_0.endPos = $receiver.pos) : null;
        if (($receiver_0 != null ? $receiver_0.func : null) == null) {
          $receiver_0 != null ? ($receiver_0.func = $receiver._functionScope) : null;
        }
      }
      var id = $receiver_0;
      callback$result = new ParameterDecl(new ListTypeSpecifier(listOf_0(new VariadicTypeSpecifier(id))), new VarargDeclarator(new IdentifierDeclarator(id)));
    }
     else {
      var tmp$_0;
      if ((tmp$ = declarationSpecifiers($receiver)) != null)
        tmp$_0 = tmp$;
      else {
        throw IllegalStateException_init(('Expected declaration specifiers at ' + $receiver).toString());
      }
      var specs = tmp$_0;
      var decl = declarator($receiver);
      callback$result = new ParameterDecl(specs, decl);
    }
    var $receiver_1 = callback$result;
    if (($receiver_1 != null ? $receiver_1.tagged : null) !== true) {
      $receiver_1 != null ? ($receiver_1.tagged = true) : null;
      $receiver_1 != null ? ($receiver_1.pos = startPos) : null;
      $receiver_1 != null ? ($receiver_1.endPos = $receiver.pos) : null;
      if (($receiver_1 != null ? $receiver_1.func : null) == null) {
        $receiver_1 != null ? ($receiver_1.func = $receiver._functionScope) : null;
      }
    }
    return $receiver_1;
  }
  function declarator($receiver) {
    var tmp$;
    tmp$ = tryDeclarator($receiver);
    if (tmp$ == null) {
      throw new ExpectException('Not a declarator at ' + $receiver);
    }
    return tmp$;
  }
  function tryDeclarator$lambda$lambda$lambda(this$tryDeclarator) {
    return function () {
      return parameterDeclaration(this$tryDeclarator);
    };
  }
  function tryDeclarator($receiver) {
    var startPos = $receiver.pos;
    var tmp$, tmp$_0;
    var pointer = tryPointer($receiver);
    var out = {v: null};
    loop: while (true) {
      switch ($receiver.peek_za3lpa$()) {
        case '(':
          var startPos_0 = $receiver.pos;
          var callback$result;
          var tmp$_1;
          if (out.v == null) {
            $receiver.expect_11rb$('(');
            var decl = declarator($receiver);
            $receiver.expect_11rb$(')');
            callback$result = decl;
          }
           else {
            $receiver.expect_11rb$('(');
            var params = list($receiver, ')', ',', void 0, void 0, tryDeclarator$lambda$lambda$lambda($receiver));
            $receiver.expect_11rb$(')');
            callback$result = new ParameterDeclarator(Kotlin.isType(tmp$_1 = out.v, Declarator) ? tmp$_1 : throwCCE(), params);
          }

          var $receiver_0 = callback$result;
          if (($receiver_0 != null ? $receiver_0.tagged : null) !== true) {
            $receiver_0 != null ? ($receiver_0.tagged = true) : null;
            $receiver_0 != null ? ($receiver_0.pos = startPos_0) : null;
            $receiver_0 != null ? ($receiver_0.endPos = $receiver.pos) : null;
            if (($receiver_0 != null ? $receiver_0.func : null) == null) {
              $receiver_0 != null ? ($receiver_0.func = $receiver._functionScope) : null;
            }
          }

          tmp$ = $receiver_0;
          break;
        case '[':
          if (out.v == null)
            break loop;
          var startPos_1 = $receiver.pos;
          $receiver.expect_11rb$('[');
          var static0 = $receiver.tryExpect_11rb$('static') != null;
          var $receiver_1 = ArrayList_init();
          while (true) {
            var tmp$_2;
            $receiver_1.size;
            tmp$_2 = tryTypeQualifier($receiver);
            if (tmp$_2 == null) {
              break;
            }
            $receiver_1.add_11rb$(tmp$_2);
          }

          var typeQualifiers = $receiver_1;
          var static1 = $receiver.tryExpect_11rb$('static') != null;
          var expr = tryExpression($receiver);
          $receiver.expect_11rb$(']');
          var $receiver_2 = new ArrayDeclarator(ensureNotNull(out.v), typeQualifiers, expr, static0, static1);
          if (($receiver_2 != null ? $receiver_2.tagged : null) !== true) {
            $receiver_2 != null ? ($receiver_2.tagged = true) : null;
            $receiver_2 != null ? ($receiver_2.pos = startPos_1) : null;
            $receiver_2 != null ? ($receiver_2.endPos = $receiver.pos) : null;
            if (($receiver_2 != null ? $receiver_2.func : null) == null) {
              $receiver_2 != null ? ($receiver_2.func = $receiver._functionScope) : null;
            }
          }

          tmp$ = $receiver_2;
          break;
        default:if (Id$Companion_getInstance().isValid_61zpoe$($receiver.peek_za3lpa$())) {
            var startPos_2 = $receiver.pos;
            var $receiver_3 = new IdentifierDeclarator(identifierDecl($receiver));
            if (($receiver_3 != null ? $receiver_3.tagged : null) !== true) {
              $receiver_3 != null ? ($receiver_3.tagged = true) : null;
              $receiver_3 != null ? ($receiver_3.pos = startPos_2) : null;
              $receiver_3 != null ? ($receiver_3.endPos = $receiver.pos) : null;
              if (($receiver_3 != null ? $receiver_3.func : null) == null) {
                $receiver_3 != null ? ($receiver_3.func = $receiver._functionScope) : null;
              }
            }
            tmp$ = $receiver_3;
          }
           else {
            break loop;
          }

          break;
      }
      out.v = tmp$;
    }
    if (out.v == null)
      tmp$_0 = null;
    else if (pointer != null)
      tmp$_0 = new DeclaratorWithPointer(pointer, out.v);
    else
      tmp$_0 = out.v;
    return tmp$_0;
  }
  function Designator() {
    Node.call(this);
  }
  Designator.$metadata$ = {kind: Kind_CLASS, simpleName: 'Designator', interfaces: [Node]};
  function ArrayAccessDesignator(constant) {
    Designator.call(this);
    this.constant = constant;
  }
  ArrayAccessDesignator.prototype.visitChildren_7xaucg$ = function (visit) {
    visit.invoke_dixj5a$(this.constant);
  };
  ArrayAccessDesignator.$metadata$ = {kind: Kind_CLASS, simpleName: 'ArrayAccessDesignator', interfaces: [Designator]};
  ArrayAccessDesignator.prototype.component1 = function () {
    return this.constant;
  };
  ArrayAccessDesignator.prototype.copy_a9sg5z$ = function (constant) {
    return new ArrayAccessDesignator(constant === void 0 ? this.constant : constant);
  };
  ArrayAccessDesignator.prototype.toString = function () {
    return 'ArrayAccessDesignator(constant=' + Kotlin.toString(this.constant) + ')';
  };
  ArrayAccessDesignator.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.constant) | 0;
    return result;
  };
  ArrayAccessDesignator.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.constant, other.constant))));
  };
  function FieldAccessDesignator(field) {
    Designator.call(this);
    this.field = field;
  }
  FieldAccessDesignator.prototype.visitChildren_7xaucg$ = function (visit) {
    visit.invoke_dixj5a$(this.field);
  };
  FieldAccessDesignator.$metadata$ = {kind: Kind_CLASS, simpleName: 'FieldAccessDesignator', interfaces: [Designator]};
  FieldAccessDesignator.prototype.component1 = function () {
    return this.field;
  };
  FieldAccessDesignator.prototype.copy_ny89hm$ = function (field) {
    return new FieldAccessDesignator(field === void 0 ? this.field : field);
  };
  FieldAccessDesignator.prototype.toString = function () {
    return 'FieldAccessDesignator(field=' + Kotlin.toString(this.field) + ')';
  };
  FieldAccessDesignator.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.field) | 0;
    return result;
  };
  FieldAccessDesignator.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.field, other.field))));
  };
  function DesignatorList(list) {
    Node.call(this);
    this.list = list;
  }
  DesignatorList.prototype.visitChildren_7xaucg$ = function (visit) {
    visit.invoke_pdej7n$(this.list);
  };
  DesignatorList.$metadata$ = {kind: Kind_CLASS, simpleName: 'DesignatorList', interfaces: [Node]};
  DesignatorList.prototype.component1 = function () {
    return this.list;
  };
  DesignatorList.prototype.copy_ft4arc$ = function (list) {
    return new DesignatorList(list === void 0 ? this.list : list);
  };
  DesignatorList.prototype.toString = function () {
    return 'DesignatorList(list=' + Kotlin.toString(this.list) + ')';
  };
  DesignatorList.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.list) | 0;
    return result;
  };
  DesignatorList.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.list, other.list))));
  };
  function tryDesignator($receiver) {
    var startPos = $receiver.pos;
    var callback$result;
    callback$break: do {
      switch ($receiver.peek_za3lpa$()) {
        case '.':
          $receiver.expect_11rb$('.');
          callback$result = new FieldAccessDesignator(identifier($receiver));
          break callback$break;
        case '[':
          $receiver.expect_11rb$('[');
          var expr = constantExpression($receiver);
          $receiver.expect_11rb$(']');
          callback$result = new ArrayAccessDesignator(expr);
          break callback$break;
        default:callback$result = null;
          break callback$break;
      }
    }
     while (false);
    var $receiver_0 = callback$result;
    if (($receiver_0 != null ? $receiver_0.tagged : null) !== true) {
      $receiver_0 != null ? ($receiver_0.tagged = true) : null;
      $receiver_0 != null ? ($receiver_0.pos = startPos) : null;
      $receiver_0 != null ? ($receiver_0.endPos = $receiver.pos) : null;
      if (($receiver_0 != null ? $receiver_0.func : null) == null) {
        $receiver_0 != null ? ($receiver_0.func = $receiver._functionScope) : null;
      }
    }
    return $receiver_0;
  }
  function designatorList($receiver) {
    var $receiver_0 = ArrayList_init();
    while (true) {
      var tmp$;
      $receiver_0.size;
      tmp$ = tryDesignator($receiver);
      if (tmp$ == null) {
        break;
      }
      $receiver_0.add_11rb$(tmp$);
    }
    return $receiver_0;
  }
  function tryDesignation($receiver) {
    var startPos = $receiver.pos;
    var callback$result;
    var design = designatorList($receiver);
    if (!design.isEmpty()) {
      $receiver.expect_11rb$('=');
      callback$result = new DesignatorList(design);
    }
     else {
      callback$result = null;
    }
    var $receiver_0 = callback$result;
    if (($receiver_0 != null ? $receiver_0.tagged : null) !== true) {
      $receiver_0 != null ? ($receiver_0.tagged = true) : null;
      $receiver_0 != null ? ($receiver_0.pos = startPos) : null;
      $receiver_0 != null ? ($receiver_0.endPos = $receiver.pos) : null;
      if (($receiver_0 != null ? $receiver_0.func : null) == null) {
        $receiver_0 != null ? ($receiver_0.func = $receiver._functionScope) : null;
      }
    }
    return $receiver_0;
  }
  function DesignOptInit(design, initializer) {
    Node.call(this);
    this.design = design;
    this.initializer = initializer;
  }
  DesignOptInit.prototype.visitChildren_7xaucg$ = function (visit) {
    visit.invoke_487qa8$(this.design, this.initializer);
  };
  DesignOptInit.$metadata$ = {kind: Kind_CLASS, simpleName: 'DesignOptInit', interfaces: [Node]};
  DesignOptInit.prototype.component1 = function () {
    return this.design;
  };
  DesignOptInit.prototype.component2 = function () {
    return this.initializer;
  };
  DesignOptInit.prototype.copy_59h1wy$ = function (design, initializer) {
    return new DesignOptInit(design === void 0 ? this.design : design, initializer === void 0 ? this.initializer : initializer);
  };
  DesignOptInit.prototype.toString = function () {
    return 'DesignOptInit(design=' + Kotlin.toString(this.design) + (', initializer=' + Kotlin.toString(this.initializer)) + ')';
  };
  DesignOptInit.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.design) | 0;
    result = result * 31 + Kotlin.hashCode(this.initializer) | 0;
    return result;
  };
  DesignOptInit.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.design, other.design) && Kotlin.equals(this.initializer, other.initializer)))));
  };
  function designOptInitializer($receiver) {
    var startPos = $receiver.pos;
    var designationOpt = tryDesignation($receiver);
    var initializer_0 = initializer($receiver, FType$Companion_getInstance().UNKNOWN);
    var $receiver_0 = new DesignOptInit(designationOpt, initializer_0);
    if (($receiver_0 != null ? $receiver_0.tagged : null) !== true) {
      $receiver_0 != null ? ($receiver_0.tagged = true) : null;
      $receiver_0 != null ? ($receiver_0.pos = startPos) : null;
      $receiver_0 != null ? ($receiver_0.endPos = $receiver.pos) : null;
      if (($receiver_0 != null ? $receiver_0.func : null) == null) {
        $receiver_0 != null ? ($receiver_0.func = $receiver._functionScope) : null;
      }
    }
    return $receiver_0;
  }
  function ArrayInitExpr(items, ltype) {
    Expr.call(this);
    this.items = items;
    this.ltype = ltype;
  }
  ArrayInitExpr.prototype.visitChildren_7xaucg$ = function (visit) {
    visit.invoke_pdej7n$(this.items);
  };
  Object.defineProperty(ArrayInitExpr.prototype, 'type', {get: function () {
    return this.ltype;
  }});
  ArrayInitExpr.$metadata$ = {kind: Kind_CLASS, simpleName: 'ArrayInitExpr', interfaces: [Expr]};
  ArrayInitExpr.prototype.component1 = function () {
    return this.items;
  };
  ArrayInitExpr.prototype.component2 = function () {
    return this.ltype;
  };
  ArrayInitExpr.prototype.copy_tnlzb4$ = function (items, ltype) {
    return new ArrayInitExpr(items === void 0 ? this.items : items, ltype === void 0 ? this.ltype : ltype);
  };
  ArrayInitExpr.prototype.toString = function () {
    return 'ArrayInitExpr(items=' + Kotlin.toString(this.items) + (', ltype=' + Kotlin.toString(this.ltype)) + ')';
  };
  ArrayInitExpr.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.items) | 0;
    result = result * 31 + Kotlin.hashCode(this.ltype) | 0;
    return result;
  };
  ArrayInitExpr.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.items, other.items) && Kotlin.equals(this.ltype, other.ltype)))));
  };
  function initializer$lambda$lambda(this$initializer) {
    return function () {
      return designOptInitializer(this$initializer);
    };
  }
  function initializer($receiver, ltype) {
    var startPos = $receiver.pos;
    var callback$result;
    var tmp$;
    if (equals($receiver.peek_za3lpa$(), '{')) {
      $receiver.expect_11rb$('{');
      var items = list($receiver, '}', ',', void 0, true, initializer$lambda$lambda($receiver));
      $receiver.expect_11rb$('}');
      callback$result = new ArrayInitExpr(items, ltype);
    }
     else {
      var tmp$_0;
      if ((tmp$ = tryAssignmentExpr($receiver)) != null)
        tmp$_0 = tmp$;
      else {
        throw IllegalStateException_init('Not an assignment-expression'.toString());
      }
      callback$result = tmp$_0;
    }
    var $receiver_0 = callback$result;
    if (($receiver_0 != null ? $receiver_0.tagged : null) !== true) {
      $receiver_0 != null ? ($receiver_0.tagged = true) : null;
      $receiver_0 != null ? ($receiver_0.pos = startPos) : null;
      $receiver_0 != null ? ($receiver_0.endPos = $receiver.pos) : null;
      if (($receiver_0 != null ? $receiver_0.func : null) == null) {
        $receiver_0 != null ? ($receiver_0.func = $receiver._functionScope) : null;
      }
    }
    return $receiver_0;
  }
  function InitDeclarator(decl, initializer, type) {
    Node.call(this);
    this.decl = decl;
    this.initializer = initializer;
    this.type = type;
  }
  InitDeclarator.prototype.visitChildren_7xaucg$ = function (visit) {
    visit.invoke_487qa8$(this.decl, this.initializer);
  };
  InitDeclarator.$metadata$ = {kind: Kind_CLASS, simpleName: 'InitDeclarator', interfaces: [Node]};
  InitDeclarator.prototype.component1 = function () {
    return this.decl;
  };
  InitDeclarator.prototype.component2 = function () {
    return this.initializer;
  };
  InitDeclarator.prototype.component3 = function () {
    return this.type;
  };
  InitDeclarator.prototype.copy_g2gbys$ = function (decl, initializer, type) {
    return new InitDeclarator(decl === void 0 ? this.decl : decl, initializer === void 0 ? this.initializer : initializer, type === void 0 ? this.type : type);
  };
  InitDeclarator.prototype.toString = function () {
    return 'InitDeclarator(decl=' + Kotlin.toString(this.decl) + (', initializer=' + Kotlin.toString(this.initializer)) + (', type=' + Kotlin.toString(this.type)) + ')';
  };
  InitDeclarator.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.decl) | 0;
    result = result * 31 + Kotlin.hashCode(this.initializer) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    return result;
  };
  InitDeclarator.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.decl, other.decl) && Kotlin.equals(this.initializer, other.initializer) && Kotlin.equals(this.type, other.type)))));
  };
  function initDeclarator($receiver, specsType) {
    var startPos = $receiver.pos;
    var decl = declarator($receiver);
    var ftype = withDeclarator(specsType, decl);
    var initializer_0 = $receiver.tryExpect_11rb$('=') != null ? initializer($receiver, ftype) : null;
    if (initializer_0 != null) {
      if (!canAssignTo(initializer_0.type, ftype, $receiver)) {
        $receiver.reportWarning_bm4lxs$("Can't assign " + initializer_0.type + ' to ' + ftype + ' (' + $receiver.fresolve_q1l7zo$(initializer_0.type) + ' != ' + $receiver.fresolve_q1l7zo$(ftype) + ')');
      }
    }
    var $receiver_0 = new InitDeclarator(decl, initializer_0, ftype);
    if (($receiver_0 != null ? $receiver_0.tagged : null) !== true) {
      $receiver_0 != null ? ($receiver_0.tagged = true) : null;
      $receiver_0 != null ? ($receiver_0.pos = startPos) : null;
      $receiver_0 != null ? ($receiver_0.endPos = $receiver.pos) : null;
      if (($receiver_0 != null ? $receiver_0.func : null) == null) {
        $receiver_0 != null ? ($receiver_0.func = $receiver._functionScope) : null;
      }
    }
    return $receiver_0;
  }
  function staticAssert($receiver) {
    $receiver.expect_7l2mas$(['_Static_assert', '(']);
    var expr = constantExpression($receiver);
    $receiver.expect_11rb$(',');
    var str = stringLiteral($receiver);
    $receiver.expect_11rb$(')');
    throw new NotImplementedError_init('An operation is not implemented: ' + '_Static_assert');
  }
  function tryDeclaration$lambda$lambda(closure$specsType, this$tryDeclaration) {
    return function () {
      return initDeclarator(this$tryDeclaration, closure$specsType);
    };
  }
  function tryDeclaration($receiver, sure) {
    if (sure === void 0)
      sure = false;
    var startPos = $receiver.pos;
    var callback$result;
    callback$break: do {
      var tmp$, tmp$_0;
      if (equals($receiver.peek_za3lpa$(), '_Static_assert')) {
        callback$result = staticAssert($receiver);
      }
       else {
        tmp$ = declarationSpecifiers($receiver, sure);
        if (tmp$ == null) {
          callback$result = null;
          break callback$break;
        }
        var specs = tmp$;
        if (specs.isEmpty()) {
          callback$result = null;
          break callback$break;
        }
        var specsType = toFinalType(specs);
        var initDeclaratorList = list($receiver, ';', ',', void 0, void 0, tryDeclaration$lambda$lambda(specsType, $receiver));
        $receiver.expect_11rb$(';');
        tmp$_0 = initDeclaratorList.iterator();
        while (tmp$_0.hasNext()) {
          var item = tmp$_0.next();
          var nameId = getNameId(item.decl);
          var token = $receiver.token_za3lpa$(nameId.pos);
          $receiver.symbols.registerInfo_m9p0fr$(nameId.id.name, toFinalType_0(specs, item.decl), nameId, token);
        }
        callback$result = new Declaration(specs, initDeclaratorList);
      }
    }
     while (false);
    var $receiver_0 = callback$result;
    if (($receiver_0 != null ? $receiver_0.tagged : null) !== true) {
      $receiver_0 != null ? ($receiver_0.tagged = true) : null;
      $receiver_0 != null ? ($receiver_0.pos = startPos) : null;
      $receiver_0 != null ? ($receiver_0.endPos = $receiver.pos) : null;
      if (($receiver_0 != null ? $receiver_0.func : null) == null) {
        $receiver_0 != null ? ($receiver_0.func = $receiver._functionScope) : null;
      }
    }
    return $receiver_0;
  }
  function Declaration(specs, initDeclaratorList) {
    Decl.call(this);
    this.specs = specs;
    this.initDeclaratorList = initDeclaratorList;
  }
  Declaration.prototype.visitChildren_7xaucg$ = function (visit) {
    visit.invoke_dixj5a$(this.specs);
    visit.invoke_pdej7n$(this.initDeclaratorList);
  };
  Declaration.$metadata$ = {kind: Kind_CLASS, simpleName: 'Declaration', interfaces: [Decl]};
  Declaration.prototype.component1 = function () {
    return this.specs;
  };
  Declaration.prototype.component2 = function () {
    return this.initDeclaratorList;
  };
  Declaration.prototype.copy_szmz2o$ = function (specs, initDeclaratorList) {
    return new Declaration(specs === void 0 ? this.specs : specs, initDeclaratorList === void 0 ? this.initDeclaratorList : initDeclaratorList);
  };
  Declaration.prototype.toString = function () {
    return 'Declaration(specs=' + Kotlin.toString(this.specs) + (', initDeclaratorList=' + Kotlin.toString(this.initDeclaratorList)) + ')';
  };
  Declaration.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.specs) | 0;
    result = result * 31 + Kotlin.hashCode(this.initDeclaratorList) | 0;
    return result;
  };
  Declaration.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.specs, other.specs) && Kotlin.equals(this.initDeclaratorList, other.initDeclaratorList)))));
  };
  function Declaration_0(type, name, init) {
    if (init === void 0)
      init = null;
    return new Declaration(new ListTypeSpecifier(listOf_0(new BasicTypeSpecifier(BasicTypeSpecifier$Kind$INT_getInstance()))), listOf_0(new InitDeclarator(new IdentifierDeclarator(new IdDecl(name)), init, type)));
  }
  function declaration($receiver, sure) {
    if (sure === void 0)
      sure = true;
    var tmp$;
    return (tmp$ = tryDeclaration($receiver, sure)) != null ? tmp$ : $receiver.parserException_bm4lxs$('TODO: ProgramParser.declaration');
  }
  function recovery($receiver, tokens) {
    if ($receiver.eof) {
      throw IllegalStateException_init('EOF'.toString());
    }
    var spos = $receiver.pos;
    while (!$receiver.eof && !tokens.contains_11rb$($receiver.peek_za3lpa$()))
      $receiver.read();
    var epos = $receiver.pos;
    if (!$receiver.eof && spos === epos) {
      $receiver.read();
    }
  }
  var compoundStatementRecoveryTokens;
  function compoundStatement$lambda$lambda(this$compoundStatement) {
    return function () {
      this$compoundStatement.expect_11rb$('{');
      var stms = ArrayList_init();
      while (!this$compoundStatement.eof && !equals(this$compoundStatement.peekOutside_za3lpa$(), '}')) {
        var spos = this$compoundStatement.pos;
        try {
          var element = blockItem(this$compoundStatement);
          stms.add_11rb$(element);
        }
         catch (e) {
          if (Kotlin.isType(e, ParserException)) {
            this$compoundStatement.pos = spos;
            this$compoundStatement.reportError_pum0tb$(e);
            recovery(this$compoundStatement, compoundStatementRecoveryTokens);
            if (equals(this$compoundStatement.peekOutside_za3lpa$(), ';'))
              this$compoundStatement.expect_11rb$(';');
          }
           else
            throw e;
        }
      }
      this$compoundStatement.expect_11rb$('}');
      return new Stms(stms);
    };
  }
  function compoundStatement($receiver) {
    var startPos = $receiver.pos;
    var tmp$;
    var old = $receiver.symbols;
    try {
      $receiver.symbols = new SymbolScope(old, $receiver.pos, $receiver.pos);
      tmp$ = compoundStatement$lambda$lambda($receiver)();
    }
    finally {
      $receiver.symbols.end = $receiver.pos;
      $receiver.symbols = old;
    }
    if ((tmp$ != null ? tmp$.tagged : null) !== true) {
      tmp$ != null ? (tmp$.tagged = true) : null;
      tmp$ != null ? (tmp$.pos = startPos) : null;
      tmp$ != null ? (tmp$.endPos = $receiver.pos) : null;
      if ((tmp$ != null ? tmp$.func : null) == null) {
        tmp$ != null ? (tmp$.func = $receiver._functionScope) : null;
      }
    }
    return tmp$;
  }
  function toCParam($receiver) {
    return new CParam($receiver, withDeclarator(toFinalType($receiver.specs), $receiver.declarator), getNameId($receiver.declarator));
  }
  function extractParameter($receiver) {
    if (Kotlin.isType($receiver, DeclaratorWithPointer))
      return extractParameter($receiver.declarator);
    else if (Kotlin.isType($receiver, ParameterDeclarator))
      return $receiver;
    else {
      throw IllegalStateException_init(('Not a DeclaratorWithPointer ' + $receiver).toString());
    }
  }
  function functionDefinition$lambda$lambda$lambda(closure$params, this$functionDefinition, closure$rettype, closure$name, closure$variadic) {
    return function () {
      var tmp$;
      tmp$ = closure$params.iterator();
      while (tmp$.hasNext()) {
        var param = tmp$.next();
        this$functionDefinition.symbols.registerInfo_m9p0fr$(param.name.name, param.type, param.nameId, this$functionDefinition.token_za3lpa$(param.nameId.pos));
      }
      var body = compoundStatement(this$functionDefinition);
      var $receiver = new FuncDecl(closure$rettype, closure$name, closure$params, body, closure$variadic);
      $receiver.func = this$functionDefinition._functionScope;
      return $receiver;
    };
  }
  function functionDefinition$lambda$lambda(this$functionDefinition, closure$name, closure$funcType, closure$params, closure$rettype, closure$variadic) {
    return function () {
      var tmp$;
      if ((tmp$ = this$functionDefinition._functionScope) != null) {
        var closure$name_0 = closure$name;
        var closure$funcType_0 = closure$funcType;
        tmp$.name = closure$name_0.name;
        tmp$.type = closure$funcType_0;
      }
      var $this = this$functionDefinition;
      var callback = functionDefinition$lambda$lambda$lambda(closure$params, this$functionDefinition, closure$rettype, closure$name, closure$variadic);
      var tmp$_0;
      var old = $this.symbols;
      try {
        $this.symbols = new SymbolScope(old, $this.pos, $this.pos);
        tmp$_0 = callback();
      }
      finally {
        $this.symbols.end = $this.pos;
        $this.symbols = old;
      }
      return tmp$_0;
    };
  }
  function functionDefinition($receiver) {
    var startPos = $receiver.pos;
    var tmp$, tmp$_0;
    try {
      var rettype = (tmp$ = declarationSpecifiers($receiver)) != null ? tmp$ : $receiver.parserException_bm4lxs$("Can't declarationSpecifiers " + $receiver);
      var decl = declarator($receiver);
      var paramDecl = extractParameter(decl);
      if (!Kotlin.isType(paramDecl.base, IdentifierDeclarator))
        $receiver.parserException_bm4lxs$('Function without name at ' + $receiver + ' but decl.base=' + paramDecl.base);
      var name = paramDecl.base.id;
      var $receiver_0 = paramDecl.decls;
      var any$result;
      any$break: do {
        var tmp$_1;
        if (Kotlin.isType($receiver_0, Collection) && $receiver_0.isEmpty()) {
          any$result = false;
          break any$break;
        }
        tmp$_1 = $receiver_0.iterator();
        while (tmp$_1.hasNext()) {
          var element = tmp$_1.next();
          if (Kotlin.isType(element.declarator, VarargDeclarator)) {
            any$result = true;
            break any$break;
          }
        }
        any$result = false;
      }
       while (false);
      var variadic = any$result;
      var $receiver_1 = paramDecl.decls;
      var destination = ArrayList_init();
      var tmp$_2;
      tmp$_2 = $receiver_1.iterator();
      while (tmp$_2.hasNext()) {
        var element_0 = tmp$_2.next();
        if (!Kotlin.isType(element_0.declarator, VarargDeclarator))
          destination.add_11rb$(element_0);
      }
      var destination_0 = ArrayList_init_0(collectionSizeOrDefault(destination, 10));
      var tmp$_3;
      tmp$_3 = destination.iterator();
      while (tmp$_3.hasNext()) {
        var item = tmp$_3.next();
        destination_0.add_11rb$(toCParam(item));
      }
      var params = destination_0;
      var funcType = Kotlin.isType(tmp$_0 = toFinalType_0(rettype, decl), FunctionFType) ? tmp$_0 : throwCCE();
      $receiver.symbols.registerInfo_m9p0fr$(name.name, funcType, name, $receiver.token_2q70oh$(name));
      var scopeFunction_klfg04$result;
      var old = $receiver._functionScope;
      $receiver._functionScope = new FunctionScope();
      try {
        scopeFunction_klfg04$result = functionDefinition$lambda$lambda($receiver, name, funcType, params, rettype, variadic)();
      }
      finally {
        $receiver._functionScope = old;
      }
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        throw e;
      }
       else
        throw e;
    }
    if ((scopeFunction_klfg04$result != null ? scopeFunction_klfg04$result.tagged : null) !== true) {
      scopeFunction_klfg04$result != null ? (scopeFunction_klfg04$result.tagged = true) : null;
      scopeFunction_klfg04$result != null ? (scopeFunction_klfg04$result.pos = startPos) : null;
      scopeFunction_klfg04$result != null ? (scopeFunction_klfg04$result.endPos = $receiver.pos) : null;
      if ((scopeFunction_klfg04$result != null ? scopeFunction_klfg04$result.func : null) == null) {
        scopeFunction_klfg04$result != null ? (scopeFunction_klfg04$result.func = $receiver._functionScope) : null;
      }
    }
    return scopeFunction_klfg04$result;
  }
  function tryExternalDeclaration$lambda$lambda(this$tryExternalDeclaration) {
    return function () {
      this$tryExternalDeclaration.consumeLineMarkers();
      return declaration(this$tryExternalDeclaration, false);
    };
  }
  function tryExternalDeclaration$lambda$lambda_0(this$tryExternalDeclaration) {
    return function () {
      this$tryExternalDeclaration.consumeLineMarkers();
      return functionDefinition(this$tryExternalDeclaration);
    };
  }
  function tryExternalDeclaration($receiver) {
    var startPos = $receiver.pos;
    var callback$result;
    callback$break: do {
      try {
        $receiver.consumeLineMarkers();
        if (!$receiver.eof) {
          var name = 'external-declaration';
          var callbacks = [tryExternalDeclaration$lambda$lambda($receiver), tryExternalDeclaration$lambda$lambda_0($receiver)];
          var tryBlocks_uu91qr$result;
          tryBlocks_uu91qr$break: do {
            var tmp$;
            var errors = ArrayList_init();
            for (tmp$ = 0; tmp$ !== callbacks.length; ++tmp$) {
              var callback = callbacks[tmp$];
              var tmp$_0;
              var oldPos = $receiver.pos;
              try {
                tmp$_0 = callback();
              }
               catch (e) {
                if (Kotlin.isType(e, ExpectException)) {
                  tmp$_0 = e;
                }
                 else
                  throw e;
              }
              var result = tmp$_0;
              if (Kotlin.isType(result, ExpectException))
                $receiver.pos = oldPos;
              var result_0 = new ItemOrError(result);
              if (!result_0.isError) {
                tryBlocks_uu91qr$result = result_0.value;
                break tryBlocks_uu91qr$break;
              }
               else {
                var element = result_0.error;
                errors.add_11rb$(element);
              }
            }
            if (true) {
              throw last(errors);
            }
             else {
              throw $receiver.createExpectException_61zpoe$('Tried to parse ' + name + ' but failed with ' + errors + ' in ' + toString($receiver));
            }
          }
           while (false);
          callback$result = tryBlocks_uu91qr$result;
        }
         else {
          callback$result = null;
        }
      }
       catch (e_0) {
        if (Kotlin.isType(e_0, ParserException)) {
          $receiver.reportError_pum0tb$(e_0);
          $receiver.skip_za3lpa$(1);
          callback$result = null;
          break callback$break;
        }
         else
          throw e_0;
      }
    }
     while (false);
    var $receiver_0 = callback$result;
    if (($receiver_0 != null ? $receiver_0.tagged : null) !== true) {
      $receiver_0 != null ? ($receiver_0.tagged = true) : null;
      $receiver_0 != null ? ($receiver_0.pos = startPos) : null;
      $receiver_0 != null ? ($receiver_0.endPos = $receiver.pos) : null;
      if (($receiver_0 != null ? $receiver_0.func : null) == null) {
        $receiver_0 != null ? ($receiver_0.func = $receiver._functionScope) : null;
      }
    }
    return $receiver_0;
  }
  function translationUnits($receiver) {
    var startPos = $receiver.pos;
    var decls = ArrayList_init();
    try {
      while (true) {
        $receiver.consumeLineMarkers();
        if ($receiver.eof)
          break;
        var tmp$;
        tmp$ = tryExternalDeclaration($receiver);
        if (tmp$ == null) {
          continue;
        }
        decls.add_11rb$(tmp$);
      }
    }
     catch (eof) {
      if (!Kotlin.isType(eof, EOFException))
        throw eof;
    }
    var $receiver_0 = new Program(decls, $receiver);
    if (($receiver_0 != null ? $receiver_0.tagged : null) !== true) {
      $receiver_0 != null ? ($receiver_0.tagged = true) : null;
      $receiver_0 != null ? ($receiver_0.pos = startPos) : null;
      $receiver_0 != null ? ($receiver_0.endPos = $receiver.pos) : null;
      if (($receiver_0 != null ? $receiver_0.func : null) == null) {
        $receiver_0 != null ? ($receiver_0.func = $receiver._functionScope) : null;
      }
    }
    return $receiver_0;
  }
  function program($receiver) {
    return translationUnits($receiver);
  }
  function programParser($receiver) {
    var $receiver_0 = $receiver.items;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.str);
    }
    return new ProgramParser(destination, $receiver.items, $receiver.pos);
  }
  function programParser_0($receiver) {
    return programParser(tokenize($receiver));
  }
  function times($receiver, other) {
    if (typeof $receiver === 'number' && typeof other === 'number')
      return Kotlin.imul($receiver, other);
    throw new NotImplementedError_init('An operation is not implemented: ' + ('Number.times ' + $receiver.toString() + ' (' + Kotlin.getKClassFromExpression($receiver) + '), ' + other.toString() + ' (' + Kotlin.getKClassFromExpression(other) + ')'));
  }
  function plus_1($receiver, other) {
    if (typeof $receiver === 'number' && typeof other === 'number')
      return $receiver + other | 0;
    throw new NotImplementedError_init('An operation is not implemented: ' + ('Number.times ' + $receiver.toString() + ' (' + Kotlin.getKClassFromExpression($receiver) + '), ' + other.toString() + ' (' + Kotlin.getKClassFromExpression(other) + ')'));
  }
  function constantEvaluate($receiver) {
    if (Kotlin.isType($receiver, Binop)) {
      var lv = constantEvaluate($receiver.l);
      var rv = constantEvaluate($receiver.r);
      switch ($receiver.op) {
        case '*':
          return times(lv, rv);
        case '+':
          return plus_1(lv, rv);
        default:throw new NotImplementedError_init('An operation is not implemented: ' + $receiver.op);
      }
    }
     else if (Kotlin.isType($receiver, IntConstant_0))
      return $receiver.value;
    else {
      throw IllegalStateException_init(("Don't know how to constant-evaluate " + Kotlin.getKClassFromExpression($receiver) + " '" + $receiver + "'").toString());
    }
  }
  var keywords;
  var storageClassSpecifiers;
  var typeSpecifier_0;
  var unaryOperators;
  var assignmentOperators;
  var binaryOperators;
  var ternaryOperators;
  var postPreFixOperators;
  var allOperators;
  function PToken(str, range, file, nline) {
    if (str === void 0)
      str = '<EOF>';
    if (range === void 0)
      range = until(0, 0);
    this.str = str;
    this.range = range;
    this.file = file;
    this.nline = nline;
    this.replacement = null;
    this.keep = true;
  }
  Object.defineProperty(PToken.prototype, 'start', {get: function () {
    return this.range.start;
  }});
  Object.defineProperty(PToken.prototype, 'end', {get: function () {
    return this.range.endInclusive + 1 | 0;
  }});
  PToken.$metadata$ = {kind: Kind_CLASS, simpleName: 'PToken', interfaces: []};
  PToken.prototype.component1 = function () {
    return this.str;
  };
  PToken.prototype.component2 = function () {
    return this.range;
  };
  PToken.prototype.component3 = function () {
    return this.file;
  };
  PToken.prototype.component4 = function () {
    return this.nline;
  };
  PToken.prototype.copy_yxq51$ = function (str, range, file, nline) {
    return new PToken(str === void 0 ? this.str : str, range === void 0 ? this.range : range, file === void 0 ? this.file : file, nline === void 0 ? this.nline : nline);
  };
  PToken.prototype.toString = function () {
    return 'PToken(str=' + Kotlin.toString(this.str) + (', range=' + Kotlin.toString(this.range)) + (', file=' + Kotlin.toString(this.file)) + (', nline=' + Kotlin.toString(this.nline)) + ')';
  };
  PToken.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.str) | 0;
    result = result * 31 + Kotlin.hashCode(this.range) | 0;
    result = result * 31 + Kotlin.hashCode(this.file) | 0;
    result = result * 31 + Kotlin.hashCode(this.nline) | 0;
    return result;
  };
  PToken.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.str, other.str) && Kotlin.equals(this.range, other.range) && Kotlin.equals(this.file, other.file) && Kotlin.equals(this.nline, other.nline)))));
  };
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  function PreprocessorContext(initialDefines, file, optimization, includeLines, includeProvider) {
    if (initialDefines === void 0) {
      initialDefines = emptyMap();
    }
    if (file === void 0)
      file = 'unknown';
    if (optimization === void 0)
      optimization = 0;
    if (includeLines === void 0)
      includeLines = true;
    if (includeProvider === void 0)
      includeProvider = PreprocessorContext_init$lambda;
    this.initialDefines = initialDefines;
    this.file = file;
    this.optimization = optimization;
    this.includeLines = includeLines;
    this.includeProvider = includeProvider;
    this.defines_0 = LinkedHashMap_init_0(this.initialDefines);
    this.counter_0 = 0;
    this.includeLevel_0 = 0;
    this.pif = new PIfCtx(true);
  }
  PreprocessorContext.prototype.includeBlock_85cpgq$ = function (newFile, callback) {
    var oldFile = this.file;
    this.file = newFile;
    this.includeLevel_0 = this.includeLevel_0 + 1 | 0;
    try {
      return callback();
    }
    finally {
      this.includeLevel_0 = this.includeLevel_0 - 1 | 0;
      this.file = oldFile;
    }
  };
  PreprocessorContext.prototype.defines_61zpoe$ = function (name) {
    var tmp$, tmp$_0;
    switch (name) {
      case '__FILE__':
        tmp$_0 = get_cquoted(this.file);
        break;
      case '__LINE__':
        tmp$_0 = get_cquoted('-1');
        break;
      case '__STDC__':
        tmp$_0 = '1';
        break;
      case '__DATE__':
        tmp$_0 = '??? ?? ????';
        break;
      case '__TIME__':
        tmp$_0 = '??:??:??';
        break;
      case '__TIMESTAMP__':
        tmp$_0 = '??? ??? ?? ??:??:?? ????';
        break;
      case '__STDC_VERSION__':
        tmp$_0 = '201710L';
        break;
      case '__COUNTER__':
        tmp$_0 = (tmp$ = this.counter_0, this.counter_0 = tmp$ + 1 | 0, tmp$).toString();
        break;
      case '__unix__':
        tmp$_0 = '1';
        break;
      case '__INCLUDE_LEVEL__':
        tmp$_0 = this.includeLevel_0.toString();
        break;
      case '__OPTIMIZE__':
        tmp$_0 = this.optimization > 0 ? '1' : null;
        break;
      default:tmp$_0 = this.defines_0.get_11rb$(name);
        break;
    }
    return tmp$_0;
  };
  PreprocessorContext.prototype.defined_61zpoe$ = function (name) {
    return this.defines_61zpoe$(name) != null;
  };
  PreprocessorContext.prototype.define_puj7f4$ = function (name, replacement) {
    this.defines_0.put_xwzc9p$(name, replacement);
  };
  PreprocessorContext.prototype.undefine_61zpoe$ = function (name) {
    this.defines_0.remove_11rb$(name);
  };
  function PreprocessorContext_init$lambda(file, kind) {
    throw IllegalStateException_init(("Can't find file=" + file + ', kind=' + kind).toString());
  }
  PreprocessorContext.$metadata$ = {kind: Kind_CLASS, simpleName: 'PreprocessorContext', interfaces: []};
  function _isSpace($receiver) {
    return isBlank($receiver) && !equals($receiver, '\n');
  }
  function skipSpaces($receiver, skipEOL, skipComments, getStr) {
    if (skipEOL === void 0)
      skipEOL = false;
    if (skipComments === void 0)
      skipComments = true;
    while (true) {
      var peek = getStr($receiver.peekOutside_za3lpa$());
      if (_isSpace(peek)) {
        $receiver.readOutside();
        continue;
      }
      if (equals(peek, '\n') && skipEOL) {
        $receiver.readOutside();
        continue;
      }
      if (skipComments && (startsWith_0(peek, '//') || startsWith_0(peek, '/*'))) {
        $receiver.readOutside();
        continue;
      }
      break;
    }
    return $receiver;
  }
  function PIfCtx(success, parent) {
    if (success === void 0)
      success = true;
    if (parent === void 0)
      parent = null;
    this.success = success;
    this.parent = parent;
  }
  Object.defineProperty(PIfCtx.prototype, 'renderFinal', {get: function () {
    var tmp$, tmp$_0;
    return this.success && ((tmp$_0 = (tmp$ = this.parent) != null ? tmp$.renderFinal : null) != null ? tmp$_0 : true);
  }});
  PIfCtx.$metadata$ = {kind: Kind_CLASS, simpleName: 'PIfCtx', interfaces: []};
  PIfCtx.prototype.component1 = function () {
    return this.success;
  };
  PIfCtx.prototype.component2 = function () {
    return this.parent;
  };
  PIfCtx.prototype.copy_or0rff$ = function (success, parent) {
    return new PIfCtx(success === void 0 ? this.success : success, parent === void 0 ? this.parent : parent);
  };
  PIfCtx.prototype.toString = function () {
    return 'PIfCtx(success=' + Kotlin.toString(this.success) + (', parent=' + Kotlin.toString(this.parent)) + ')';
  };
  PIfCtx.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.success) | 0;
    result = result * 31 + Kotlin.hashCode(this.parent) | 0;
    return result;
  };
  PIfCtx.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.success, other.success) && Kotlin.equals(this.parent, other.parent)))));
  };
  function IncludeKind(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function IncludeKind_initFields() {
    IncludeKind_initFields = function () {
    };
    IncludeKind$GLOBAL_instance = new IncludeKind('GLOBAL', 0);
    IncludeKind$LOCAL_instance = new IncludeKind('LOCAL', 1);
  }
  var IncludeKind$GLOBAL_instance;
  function IncludeKind$GLOBAL_getInstance() {
    IncludeKind_initFields();
    return IncludeKind$GLOBAL_instance;
  }
  var IncludeKind$LOCAL_instance;
  function IncludeKind$LOCAL_getInstance() {
    IncludeKind_initFields();
    return IncludeKind$LOCAL_instance;
  }
  IncludeKind.$metadata$ = {kind: Kind_CLASS, simpleName: 'IncludeKind', interfaces: [Enum]};
  function IncludeKind$values() {
    return [IncludeKind$GLOBAL_getInstance(), IncludeKind$LOCAL_getInstance()];
  }
  IncludeKind.values = IncludeKind$values;
  function IncludeKind$valueOf(name) {
    switch (name) {
      case 'GLOBAL':
        return IncludeKind$GLOBAL_getInstance();
      case 'LOCAL':
        return IncludeKind$LOCAL_getInstance();
      default:throwISE('No enum constant com.soywiz.ktcc.IncludeKind.' + name);
    }
  }
  IncludeKind.valueOf_61zpoe$ = IncludeKind$valueOf;
  function PreprocessorReader(tokens) {
    var destination = ArrayList_init_0(collectionSizeOrDefault(tokens, 10));
    var tmp$;
    tmp$ = tokens.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.str);
    }
    ListReader.call(this, destination, '<EOF>');
    this.tokens = tokens;
    this.lastToken = lastOrNull(this.tokens);
    var tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    this.lastPos = (tmp$_1 = (tmp$_0 = this.lastToken) != null ? tmp$_0.end : null) != null ? tmp$_1 : 0;
    this.lastLine = (tmp$_4 = (tmp$_3 = (tmp$_2 = this.lastToken) != null ? tmp$_2.nline : null) != null ? tmp$_3 + 1 | 0 : null) != null ? tmp$_4 : 0;
  }
  PreprocessorReader.prototype.peekToken = function () {
    var tmp$;
    return (tmp$ = getOrNull(this.tokens, this.pos)) != null ? tmp$ : new PToken('<EOF>', new IntRange(this.lastPos, this.lastPos), '<undefined file>', this.lastLine);
  };
  PreprocessorReader.$metadata$ = {kind: Kind_CLASS, simpleName: 'PreprocessorReader', interfaces: [ListReader]};
  function skipSpaces$lambda$lambda(it) {
    return it;
  }
  function skipSpaces_0($receiver, skipEOL, skipComments) {
    if (skipEOL === void 0)
      skipEOL = false;
    if (skipComments === void 0)
      skipComments = true;
    skipSpaces($receiver, skipEOL, skipComments, skipSpaces$lambda$lambda);
    return $receiver;
  }
  function CPreprocessor(ctx, input, out) {
    this.ctx = ctx;
    this.input = input;
    this.out = out;
    this.nlines = lines(this.input).size;
    this.tokens = new PreprocessorReader(doTokenize(this.input, new PToken(void 0, until(this.input.length, this.input.length), this.ctx.file, this.nlines), IncludeMode$ALL_getInstance(), CPreprocessor$tokens$lambda(this)).items);
  }
  CPreprocessor.prototype.preprocess = function () {
    this.preprocess_v2ydta$(this.tokens);
  };
  CPreprocessor.prototype.readId_v2ydta$ = function ($receiver) {
    return $receiver.read();
  };
  CPreprocessor.prototype.readPPtokens_v2ydta$ = function ($receiver) {
    var out = ArrayList_init();
    while (!$receiver.eof && !equals($receiver.peek_za3lpa$(), '\n')) {
      var element = $receiver.read();
      out.add_11rb$(element);
    }
    return out;
  };
  function CPreprocessor$preprocess$lambda(this$CPreprocessor, closure$fileContent) {
    return function () {
      (new CPreprocessor(this$CPreprocessor.ctx, closure$fileContent, this$CPreprocessor.out)).preprocess();
      return Unit;
    };
  }
  CPreprocessor.prototype.preprocess_v2ydta$ = function ($receiver) {
    var tmp$;
    if (this.ctx.includeLines)
      this.out.append_gw00v9$('# 1 ' + get_cquoted(this.ctx.file) + '\n');
    while (!$receiver.eof) {
      var tok = $receiver.read();
      if (equals(tok, '#')) {
        var ntok = skipSpaces_0($receiver).read();
        switch (ntok) {
          case 'define':
            var id = this.readId_v2ydta$(skipSpaces_0($receiver));
            this.out.append_gw00v9$('\n');
            skipSpaces_0($receiver);
            var replacement = this.readPPtokens_v2ydta$($receiver);
            this.ctx.define_puj7f4$(id, joinToString(replacement, ''));
            if (!$receiver.eof)
              $receiver.expect_11rb$('\n');
            break;
          case 'undef':
            var id_0 = this.readId_v2ydta$(skipSpaces_0($receiver));
            skipSpaces_0($receiver);
            if (!$receiver.eof)
              $receiver.expect_11rb$('\n');
            this.ctx.undefine_61zpoe$(id_0);
            break;
          case 'include':
            var ptokens = this.readPPtokens_v2ydta$(skipSpaces_0($receiver));
            var eol = false;
            if (!$receiver.eof) {
              $receiver.expect_11rb$('\n');
              eol = true;
            }

            var include = joinToString(ptokens, '');
            var endIndex = include.length - 1 | 0;
            var includeName = include.substring(1, endIndex);
            switch (include.charCodeAt(0)) {
              case 60:
                tmp$ = IncludeKind$GLOBAL_getInstance();
                break;
              case 34:
                tmp$ = IncludeKind$LOCAL_getInstance();
                break;
              default:throw IllegalStateException_init("Not a '<' or '\"' in include".toString());
            }

            var kind = tmp$;
            var fileContent = this.ctx.includeProvider(includeName, kind);
            this.ctx.includeBlock_85cpgq$(includeName, CPreprocessor$preprocess$lambda(this, fileContent));
            if (!endsWith_0(fileContent, '\n') && eol) {
              this.out.append_gw00v9$('\n');
            }

            if (this.ctx.includeLines)
              this.out.append_gw00v9$('# ' + $receiver.peekToken().nline + ' ' + get_cquoted(this.ctx.file) + '\n');
            break;
          default:throw IllegalStateException_init(("Unsupported preprocessor '" + ntok + "'").toString());
        }
      }
       else {
        if (this.ctx.defined_61zpoe$(tok)) {
          this.out.append_gw00v9$(this.ctx.defines_61zpoe$(tok));
        }
         else {
          this.out.append_gw00v9$(tok);
        }
      }
    }
  };
  function CPreprocessor$tokens$lambda(this$CPreprocessor) {
    return function ($receiver) {
      return new PToken($receiver.str, until($receiver.pos, $receiver.pos + $receiver.str.length | 0), this$CPreprocessor.ctx.file, $receiver.nline);
    };
  }
  CPreprocessor.$metadata$ = {kind: Kind_CLASS, simpleName: 'CPreprocessor', interfaces: []};
  function preprocess($receiver, ctx) {
    if (ctx === void 0)
      ctx = new PreprocessorContext();
    var sb = StringBuilder_init();
    (new CPreprocessor(ctx, $receiver, sb)).preprocess();
    return sb.toString();
  }
  var allSymbols;
  function sym3$lambda() {
    var $receiver = allSymbols;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.length === 3)
        destination.add_11rb$(element);
    }
    return new StrReader$MatchSet(destination);
  }
  var sym3;
  function get_sym3() {
    return sym3.value;
  }
  function sym2$lambda() {
    var $receiver = allSymbols;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.length === 2)
        destination.add_11rb$(element);
    }
    return new StrReader$MatchSet(destination);
  }
  var sym2;
  function get_sym2() {
    return sym2.value;
  }
  function sym1$lambda() {
    var $receiver = allSymbols;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.length === 1)
        destination.add_11rb$(element);
    }
    return new StrReader$MatchSet(destination);
  }
  var sym1;
  function get_sym1() {
    return sym1.value;
  }
  function CToken(str, pos, row, lineStart) {
    if (pos === void 0)
      pos = -1;
    if (row === void 0)
      row = 0;
    if (lineStart === void 0)
      lineStart = -1;
    this.str = str;
    this.pos = pos;
    this.row = row;
    this.lineStart = lineStart;
    this.tokenIndex = -1;
  }
  Object.defineProperty(CToken.prototype, 'columnStart', {get: function () {
    return this.pos - this.lineStart | 0;
  }});
  Object.defineProperty(CToken.prototype, 'columnEnd', {get: function () {
    return this.columnStart + this.str.length | 0;
  }});
  Object.defineProperty(CToken.prototype, 'columnMiddle', {get: function () {
    return (this.columnStart + this.columnEnd | 0) / 2 | 0;
  }});
  CToken.$metadata$ = {kind: Kind_CLASS, simpleName: 'CToken', interfaces: []};
  CToken.prototype.component1 = function () {
    return this.str;
  };
  CToken.prototype.component2 = function () {
    return this.pos;
  };
  CToken.prototype.component3 = function () {
    return this.row;
  };
  CToken.prototype.component4 = function () {
    return this.lineStart;
  };
  CToken.prototype.copy_wfrsr4$ = function (str, pos, row, lineStart) {
    return new CToken(str === void 0 ? this.str : str, pos === void 0 ? this.pos : pos, row === void 0 ? this.row : row, lineStart === void 0 ? this.lineStart : lineStart);
  };
  CToken.prototype.toString = function () {
    return 'CToken(str=' + Kotlin.toString(this.str) + (', pos=' + Kotlin.toString(this.pos)) + (', row=' + Kotlin.toString(this.row)) + (', lineStart=' + Kotlin.toString(this.lineStart)) + ')';
  };
  CToken.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.str) | 0;
    result = result * 31 + Kotlin.hashCode(this.pos) | 0;
    result = result * 31 + Kotlin.hashCode(this.row) | 0;
    result = result * 31 + Kotlin.hashCode(this.lineStart) | 0;
    return result;
  };
  CToken.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.str, other.str) && Kotlin.equals(this.pos, other.pos) && Kotlin.equals(this.row, other.row) && Kotlin.equals(this.lineStart, other.lineStart)))));
  };
  function tokenize$lambda($receiver) {
    return new CToken($receiver.str, $receiver.pos, $receiver.nline, $receiver.lineStart);
  }
  function tokenize($receiver) {
    return doTokenize($receiver, new CToken('', $receiver.length, -1, -1), void 0, tokenize$lambda);
  }
  function IncludeMode(name, ordinal, eol, spaces, comments) {
    if (eol === void 0)
      eol = false;
    if (spaces === void 0)
      spaces = false;
    if (comments === void 0)
      comments = false;
    Enum.call(this);
    this.eol = eol;
    this.spaces = spaces;
    this.comments = comments;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function IncludeMode_initFields() {
    IncludeMode_initFields = function () {
    };
    IncludeMode$NORMAL_instance = new IncludeMode('NORMAL', 0);
    IncludeMode$EOL_instance = new IncludeMode('EOL', 1, true);
    IncludeMode$ALL_instance = new IncludeMode('ALL', 2, true, true, true);
  }
  var IncludeMode$NORMAL_instance;
  function IncludeMode$NORMAL_getInstance() {
    IncludeMode_initFields();
    return IncludeMode$NORMAL_instance;
  }
  var IncludeMode$EOL_instance;
  function IncludeMode$EOL_getInstance() {
    IncludeMode_initFields();
    return IncludeMode$EOL_instance;
  }
  var IncludeMode$ALL_instance;
  function IncludeMode$ALL_getInstance() {
    IncludeMode_initFields();
    return IncludeMode$ALL_instance;
  }
  IncludeMode.$metadata$ = {kind: Kind_CLASS, simpleName: 'IncludeMode', interfaces: [Enum]};
  function IncludeMode$values() {
    return [IncludeMode$NORMAL_getInstance(), IncludeMode$EOL_getInstance(), IncludeMode$ALL_getInstance()];
  }
  IncludeMode.values = IncludeMode$values;
  function IncludeMode$valueOf(name) {
    switch (name) {
      case 'NORMAL':
        return IncludeMode$NORMAL_getInstance();
      case 'EOL':
        return IncludeMode$EOL_getInstance();
      case 'ALL':
        return IncludeMode$ALL_getInstance();
      default:throwISE('No enum constant com.soywiz.ktcc.IncludeMode.' + name);
    }
  }
  IncludeMode.valueOf_61zpoe$ = IncludeMode$valueOf;
  function doTokenize(file, default_0, include, gen) {
    if (include === void 0)
      include = IncludeMode$NORMAL_getInstance();
    return doTokenize_0(new StrReader(file), default_0, include, gen);
  }
  function MutableTokenInfo(reader) {
    this.reader = reader;
    this.str = '';
    this.pos = 0;
    this.nline = 1;
    this.lineStart = 0;
  }
  Object.defineProperty(MutableTokenInfo.prototype, 'column', {get: function () {
    return this.pos - this.lineStart | 0;
  }});
  MutableTokenInfo.$metadata$ = {kind: Kind_CLASS, simpleName: 'MutableTokenInfo', interfaces: []};
  function Tokenizer(reader, gen) {
    this.reader = reader;
    this.gen = gen;
    this.out = ArrayList_init();
    var $receiver = new MutableTokenInfo(this.reader);
    $receiver.lineStart = 0;
    this.info = $receiver;
    this.spos = this.reader.pos;
  }
  Tokenizer.prototype.doTokenize_3one53$ = function (default_0, include) {
    if (include === void 0)
      include = IncludeMode$NORMAL_getInstance();
    this.doTokenize_aspgpr$(this.reader, default_0, include);
    return reader(this.out, default_0);
  };
  Tokenizer.prototype.rgen_0 = function (str, pos) {
    if (pos === void 0)
      pos = this.spos;
    this.info.str = str;
    this.info.pos = pos;
    return this.gen(this.info);
  };
  Tokenizer.prototype.doTokenize_aspgpr$ = function ($receiver, default_0, include) {
    if (include === void 0)
      include = IncludeMode$NORMAL_getInstance();
    while (!$receiver.eof) {
      var v = unboxChar($receiver.peek());
      this.spos = $receiver.pos;
      if (v === 10) {
        $receiver.read();
        this.info.lineStart = $receiver.pos;
        var tmp$;
        tmp$ = this.info;
        tmp$.nline = tmp$.nline + 1 | 0;
        if (include.eol) {
          var $receiver_0 = this.out;
          var element = this.rgen_0(String.fromCharCode(v));
          $receiver_0.add_11rb$(element);
        }
        continue;
      }
      if (isWhitespaceFast(v) || v === 13) {
        $receiver.read();
        if (include.spaces) {
          var $receiver_1 = this.out;
          var element_0 = this.rgen_0(String.fromCharCode(v));
          $receiver_1.add_11rb$(element_0);
        }
        continue;
      }
      if (v === 34 || v === 39) {
        var startPos = $receiver.pos;
        var start = v;
        $receiver.read();
        while (!$receiver.eof && unboxChar($receiver.peek()) !== start) {
          var c = unboxChar($receiver.read());
          if (c === 92) {
            $receiver.read();
          }
        }
        if (!$receiver.eof)
          $receiver.read();
        var $receiver_2 = $receiver.str;
        var endIndex = $receiver.pos;
        var literal = $receiver_2.substring(startPos, endIndex);
        var $receiver_3 = this.out;
        var element_1 = this.rgen_0(literal);
        $receiver_3.add_11rb$(element_1);
        continue;
      }
      if ($receiver.tryPeek_61zpoe$('//')) {
        var startPos_0 = $receiver.pos;
        $receiver.expect_61zpoe$('//');
        while (!$receiver.eof && unboxChar($receiver.peek()) !== 10)
          $receiver.read();
        if (!$receiver.eof) {
          $receiver.expect_61zpoe$('\n');
          this.info.lineStart = $receiver.pos;
          var tmp$_0;
          tmp$_0 = this.info;
          tmp$_0.nline = tmp$_0.nline + 1 | 0;
        }
        var $receiver_4 = $receiver.str;
        var endIndex_0 = $receiver.pos;
        var comment = $receiver_4.substring(startPos_0, endIndex_0);
        if (include.comments) {
          var $receiver_5 = this.out;
          var element_2 = this.rgen_0(comment);
          $receiver_5.add_11rb$(element_2);
        }
        continue;
      }
      if ($receiver.tryPeek_61zpoe$('/*')) {
        var startPos_1 = $receiver.pos;
        $receiver.expect_61zpoe$('/*');
        while (!$receiver.eof && !equals($receiver.peek_za3lpa$(2), '*/')) {
          if (unboxChar($receiver.peek()) === 10) {
            $receiver.expect_s8itvh$(10);
            this.info.lineStart = $receiver.pos;
            var tmp$_1;
            tmp$_1 = this.info;
            tmp$_1.nline = tmp$_1.nline + 1 | 0;
          }
           else {
            $receiver.read();
          }
        }
        if (!$receiver.eof)
          $receiver.expect_61zpoe$('*/');
        var $receiver_6 = $receiver.str;
        var endIndex_1 = $receiver.pos;
        var comment_0 = $receiver_6.substring(startPos_1, endIndex_1);
        if (include.comments) {
          var $receiver_7 = this.out;
          var element_3 = this.rgen_0(comment_0);
          $receiver_7.add_11rb$(element_3);
        }
        continue;
      }
      var number = this.tryReadNumber_0($receiver);
      if (number != null) {
        var $receiver_8 = this.out;
        var element_4 = this.rgen_0(number);
        $receiver_8.add_11rb$(element_4);
      }
       else if ($receiver.tryPeek_ky89ak$(get_sym3()) === 3) {
        var $receiver_9 = this.out;
        var element_5 = this.rgen_0($receiver.read_za3lpa$(3));
        $receiver_9.add_11rb$(element_5);
      }
       else if ($receiver.tryPeek_ky89ak$(get_sym2()) === 2) {
        var $receiver_10 = this.out;
        var element_6 = this.rgen_0($receiver.read_za3lpa$(2));
        $receiver_10.add_11rb$(element_6);
      }
       else if ($receiver.tryPeek_ky89ak$(get_sym1()) === 1) {
        var $receiver_11 = this.out;
        var element_7 = this.rgen_0($receiver.read_za3lpa$(1));
        $receiver_11.add_11rb$(element_7);
      }
       else if (isDigit(v)) {
        var tmp$_2 = this.out;
        var startPos_2 = $receiver.pos;
        while (!$receiver.eof && isDigit(unboxChar($receiver.peek())) || (new CharRange(65, 70)).contains_mef7kx$(unboxChar($receiver.peek())) || (new CharRange(97, 102)).contains_mef7kx$(unboxChar($receiver.peek())) || unboxChar($receiver.peek()) === 120 || unboxChar($receiver.peek()) === 88 || unboxChar($receiver.peek()) === 101)
          $receiver.read();
        var $receiver_12 = $receiver.str;
        var endIndex_2 = $receiver.pos;
        var element_8 = this.rgen_0($receiver_12.substring(startPos_2, endIndex_2));
        tmp$_2.add_11rb$(element_8);
      }
       else if (isAlphaOrUnderscore(v)) {
        var tmp$_3 = this.out;
        var startPos_3 = $receiver.pos;
        while (!$receiver.eof && isAlnumOrUnderscore(unboxChar($receiver.peek())))
          $receiver.read();
        var $receiver_13 = $receiver.str;
        var endIndex_3 = $receiver.pos;
        var element_9 = this.rgen_0($receiver_13.substring(startPos_3, endIndex_3));
        tmp$_3.add_11rb$(element_9);
      }
       else {
        throw IllegalStateException_init(("Unknown symbol: '" + String.fromCharCode(v) + "'").toString());
      }
    }
  };
  Tokenizer.prototype.skipNumbers_0 = function ($receiver, isHex) {
    var ndigits = 0;
    while (!$receiver.eof) {
      var c = unboxChar($receiver.peek());
      if (isHex && !isHexDigit(c))
        break;
      if (!isHex && !isDigit(c))
        break;
      $receiver.skip_za3lpa$(1);
      ndigits = ndigits + 1 | 0;
    }
    return ndigits;
  };
  Tokenizer.prototype.tryReadNumber_0 = function ($receiver) {
    var old = $receiver.pos;
    var callback$result;
    var start = $receiver.pos;
    var isHex = false;
    var isDecimal = false;
    if ($receiver.tryPeek_61zpoe$('0x') || $receiver.tryPeek_61zpoe$('0X')) {
      isHex = true;
      $receiver.skip_za3lpa$(2);
    }
    var ndigits = this.skipNumbers_0($receiver, isHex);
    if (ndigits > 0 || unboxChar($receiver.peek()) === 46) {
      var ndecdigits = 0;
      if (!isHex) {
        if ($receiver.tryPeek_61zpoe$('.')) {
          $receiver.skip_za3lpa$(1);
          isDecimal = true;
          ndecdigits = this.skipNumbers_0($receiver, false);
        }
        if ($receiver.tryPeek_61zpoe$('e') || $receiver.tryPeek_61zpoe$('E')) {
          $receiver.skip_za3lpa$(1);
          isDecimal = true;
          if ($receiver.tryPeek_61zpoe$('-') || $receiver.tryPeek_61zpoe$('+'))
            $receiver.skip_za3lpa$(1);
          ndecdigits = ndecdigits + this.skipNumbers_0($receiver, false) | 0;
        }
      }
      if (!isDecimal) {
        while (true) {
          var c = unboxChar($receiver.peek());
          if (c === 117 || c === 85 || c === 108 || c === 76) {
            $receiver.skip_za3lpa$(1);
            continue;
          }
          break;
        }
      }
      if (isDecimal && ndigits > 0 || ndecdigits > 0) {
        while (true) {
          var c_0 = unboxChar($receiver.peek());
          if (c_0 === 102) {
            $receiver.skip_za3lpa$(1);
            continue;
          }
          break;
        }
      }
      if (ndigits > 0 || ndecdigits > 0) {
        var end = $receiver.pos;
        var res = $receiver.str.substring(start, end);
        callback$result = res;
      }
       else {
        callback$result = null;
      }
    }
     else {
      callback$result = null;
    }
    var result = callback$result;
    if (result == null)
      $receiver.pos = old;
    return result;
  };
  Tokenizer.$metadata$ = {kind: Kind_CLASS, simpleName: 'Tokenizer', interfaces: []};
  function doTokenize_0(file, default_0, include, gen) {
    if (include === void 0)
      include = IncludeMode$NORMAL_getInstance();
    return (new Tokenizer(file, gen)).doTokenize_3one53$(default_0, include);
  }
  function FType() {
    FType$Companion_getInstance();
    this.resolved = null;
  }
  function FType$Companion() {
    FType$Companion_instance = this;
    this.VOID = new IntFType(null, 0, null);
    this.VOID_PTR = new PointerFType(this.VOID, false);
    this.BOOL = BoolFType_getInstance();
    this.CHAR = new IntFType(null, 0, 1);
    this.INT = new IntFType(null, 0, 4);
    this.FLOAT = new FloatFType(4);
    this.DOUBLE = new FloatFType(8);
    this.CHAR_PTR = new PointerFType(this.CHAR, false);
    this.UNKNOWN = new UnknownFType('unknown');
    this.UNRESOLVED = new UnknownFType('unresolved');
  }
  FType$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var FType$Companion_instance = null;
  function FType$Companion_getInstance() {
    if (FType$Companion_instance === null) {
      new FType$Companion();
    }
    return FType$Companion_instance;
  }
  FType.$metadata$ = {kind: Kind_CLASS, simpleName: 'FType', interfaces: []};
  function BoolFType() {
    BoolFType_instance = this;
    FType.call(this);
  }
  BoolFType.prototype.toString = function () {
    return 'Bool';
  };
  BoolFType.$metadata$ = {kind: Kind_OBJECT, simpleName: 'BoolFType', interfaces: [FType]};
  var BoolFType_instance = null;
  function BoolFType_getInstance() {
    if (BoolFType_instance === null) {
      new BoolFType();
    }
    return BoolFType_instance;
  }
  function VariadicFType() {
    VariadicFType_instance = this;
    FType.call(this);
  }
  VariadicFType.prototype.toString = function () {
    return 'Any?';
  };
  VariadicFType.$metadata$ = {kind: Kind_OBJECT, simpleName: 'VariadicFType', interfaces: [FType]};
  var VariadicFType_instance = null;
  function VariadicFType_getInstance() {
    if (VariadicFType_instance === null) {
      new VariadicFType();
    }
    return VariadicFType_instance;
  }
  function DummyFType() {
    DummyFType_instance = this;
    FType.call(this);
  }
  DummyFType.$metadata$ = {kind: Kind_OBJECT, simpleName: 'DummyFType', interfaces: [FType]};
  var DummyFType_instance = null;
  function IntFType(signed, long, size) {
    FType.call(this);
    this.signed = signed;
    this.long = long;
    this.size = size;
    var tmp$, tmp$_0;
    switch ((tmp$ = this.size) != null ? tmp$ : 4) {
      case 1:
        tmp$_0 = 1;
        break;
      case 2:
        tmp$_0 = 2;
        break;
      case 4:
        tmp$_0 = this.long >= 1 ? 8 : 4;
        break;
      default:throw new NotImplementedError_init('An operation is not implemented: ' + 'IntFType');
    }
    this.typeSize = tmp$_0;
  }
  Object.defineProperty(IntFType.prototype, 'rsigned', {get: function () {
    var tmp$;
    return (tmp$ = this.signed) != null ? tmp$ : true;
  }});
  IntFType.prototype.toString = function () {
    var tmp$;
    if (this.signed == null && this.long === 0 && this.size == null)
      return 'Unit';
    switch (this.typeSize) {
      case 1:
        tmp$ = this.rsigned ? 'Byte' : 'UByte';
        break;
      case 2:
        tmp$ = this.rsigned ? 'Short' : 'UShort';
        break;
      case 4:
        tmp$ = this.rsigned ? 'Int' : 'UInt';
        break;
      case 8:
        tmp$ = this.rsigned ? 'Long' : 'ULong';
        break;
      default:throw new NotImplementedError_init('An operation is not implemented: ' + 'IntFType');
    }
    return tmp$;
  };
  IntFType.$metadata$ = {kind: Kind_CLASS, simpleName: 'IntFType', interfaces: [FType]};
  IntFType.prototype.component1 = function () {
    return this.signed;
  };
  IntFType.prototype.component2 = function () {
    return this.long;
  };
  IntFType.prototype.component3 = function () {
    return this.size;
  };
  IntFType.prototype.copy_a9za4l$ = function (signed, long, size) {
    return new IntFType(signed === void 0 ? this.signed : signed, long === void 0 ? this.long : long, size === void 0 ? this.size : size);
  };
  IntFType.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.signed) | 0;
    result = result * 31 + Kotlin.hashCode(this.long) | 0;
    result = result * 31 + Kotlin.hashCode(this.size) | 0;
    return result;
  };
  IntFType.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.signed, other.signed) && Kotlin.equals(this.long, other.long) && Kotlin.equals(this.size, other.size)))));
  };
  function FloatFType(size) {
    FType.call(this);
    this.size = size;
  }
  FloatFType.prototype.toString = function () {
    switch (this.size) {
      case 4:
        return 'Float';
      case 8:
        return 'Double';
      default:throw new NotImplementedError_init('An operation is not implemented: ' + 'FloatFType');
    }
  };
  FloatFType.$metadata$ = {kind: Kind_CLASS, simpleName: 'FloatFType', interfaces: [FType]};
  FloatFType.prototype.component1 = function () {
    return this.size;
  };
  FloatFType.prototype.copy_za3lpa$ = function (size) {
    return new FloatFType(size === void 0 ? this.size : size);
  };
  FloatFType.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.size) | 0;
    return result;
  };
  FloatFType.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.size, other.size))));
  };
  function BasePointerFType() {
    FType.call(this);
  }
  BasePointerFType.$metadata$ = {kind: Kind_CLASS, simpleName: 'BasePointerFType', interfaces: [FType]};
  function PointerFType(elementType, const_0) {
    BasePointerFType.call(this);
    this.elementType_a3wyhs$_0 = elementType;
    this.const = const_0;
  }
  Object.defineProperty(PointerFType.prototype, 'elementType', {get: function () {
    return this.elementType_a3wyhs$_0;
  }});
  PointerFType.prototype.toString = function () {
    return 'CPointer<' + this.elementType + '>';
  };
  PointerFType.$metadata$ = {kind: Kind_CLASS, simpleName: 'PointerFType', interfaces: [BasePointerFType]};
  PointerFType.prototype.component1 = function () {
    return this.elementType;
  };
  PointerFType.prototype.component2 = function () {
    return this.const;
  };
  PointerFType.prototype.copy_op6c3a$ = function (elementType, const_0) {
    return new PointerFType(elementType === void 0 ? this.elementType : elementType, const_0 === void 0 ? this.const : const_0);
  };
  PointerFType.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.elementType) | 0;
    result = result * 31 + Kotlin.hashCode(this.const) | 0;
    return result;
  };
  PointerFType.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.elementType, other.elementType) && Kotlin.equals(this.const, other.const)))));
  };
  function ArrayFType(elementType, size) {
    BasePointerFType.call(this);
    this.elementType_3j7vss$_0 = elementType;
    this.size = size;
    this.declarator = null;
  }
  Object.defineProperty(ArrayFType.prototype, 'elementType', {get: function () {
    return this.elementType_3j7vss$_0;
  }});
  ArrayFType.prototype.toString = function () {
    return this.size != null ? this.elementType.toString() + '[' + toString(this.size) + ']' : this.elementType.toString() + '[]';
  };
  ArrayFType.$metadata$ = {kind: Kind_CLASS, simpleName: 'ArrayFType', interfaces: [BasePointerFType]};
  ArrayFType.prototype.component1 = function () {
    return this.elementType;
  };
  ArrayFType.prototype.component2 = function () {
    return this.size;
  };
  ArrayFType.prototype.copy_4i4h2a$ = function (elementType, size) {
    return new ArrayFType(elementType === void 0 ? this.elementType : elementType, size === void 0 ? this.size : size);
  };
  ArrayFType.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.elementType) | 0;
    result = result * 31 + Kotlin.hashCode(this.size) | 0;
    return result;
  };
  ArrayFType.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.elementType, other.elementType) && Kotlin.equals(this.size, other.size)))));
  };
  function getStructTypeInfo($receiver, parser) {
    return parser.getStructTypeInfo_me841z$($receiver.spec);
  }
  function StructFType(spec) {
    FType.call(this);
    this.spec = spec;
  }
  StructFType.prototype.toString = function () {
    return 'struct ' + toString(this.spec.id);
  };
  StructFType.$metadata$ = {kind: Kind_CLASS, simpleName: 'StructFType', interfaces: [FType]};
  StructFType.prototype.component1 = function () {
    return this.spec;
  };
  StructFType.prototype.copy_me841z$ = function (spec) {
    return new StructFType(spec === void 0 ? this.spec : spec);
  };
  StructFType.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.spec) | 0;
    return result;
  };
  StructFType.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.spec, other.spec))));
  };
  function UnknownFType(reason) {
    FType.call(this);
    this.reason = reason;
  }
  UnknownFType.prototype.toString = function () {
    return 'UnknownFType(' + toString(this.reason) + ')';
  };
  UnknownFType.$metadata$ = {kind: Kind_CLASS, simpleName: 'UnknownFType', interfaces: [FType]};
  UnknownFType.prototype.component1 = function () {
    return this.reason;
  };
  UnknownFType.prototype.copy_s8jyv4$ = function (reason) {
    return new UnknownFType(reason === void 0 ? this.reason : reason);
  };
  UnknownFType.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.reason) | 0;
    return result;
  };
  UnknownFType.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.reason, other.reason))));
  };
  function TypedefFTypeRef(id) {
    FType.call(this);
    this.id = id;
  }
  TypedefFTypeRef.prototype.toString = function () {
    return this.id;
  };
  TypedefFTypeRef.$metadata$ = {kind: Kind_CLASS, simpleName: 'TypedefFTypeRef', interfaces: [FType]};
  TypedefFTypeRef.prototype.component1 = function () {
    return this.id;
  };
  TypedefFTypeRef.prototype.copy_61zpoe$ = function (id) {
    return new TypedefFTypeRef(id === void 0 ? this.id : id);
  };
  TypedefFTypeRef.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    return result;
  };
  TypedefFTypeRef.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.id, other.id))));
  };
  function TypedefFTypeName(id) {
    FType.call(this);
    this.id = id;
  }
  TypedefFTypeName.prototype.toString = function () {
    return this.id;
  };
  TypedefFTypeName.$metadata$ = {kind: Kind_CLASS, simpleName: 'TypedefFTypeName', interfaces: [FType]};
  TypedefFTypeName.prototype.component1 = function () {
    return this.id;
  };
  TypedefFTypeName.prototype.copy_61zpoe$ = function (id) {
    return new TypedefFTypeName(id === void 0 ? this.id : id);
  };
  TypedefFTypeName.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    return result;
  };
  TypedefFTypeName.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.id, other.id))));
  };
  function combine(l, r) {
    var tmp$, tmp$_0;
    if (Kotlin.isType(l, IntFType) && Kotlin.isType(r, IntFType)) {
      return new IntFType((tmp$ = r.signed) != null ? tmp$ : l.signed, l.long + r.long | 0, (tmp$_0 = r.size) != null ? tmp$_0 : l.size);
    }
     else {
      return r;
    }
  }
  function generateFinalType(type) {
    var tmp$;
    if (Kotlin.isType(type, ListTypeSpecifier)) {
      var items = type.items;
      var res = generateFinalType(first(items));
      tmp$ = items.size;
      for (var n = 1; n < tmp$; n++)
        res = combine(res, generateFinalType(items.get_za3lpa$(n)));
      return res;
    }
     else if (Kotlin.isType(type, BasicTypeSpecifier)) {
      switch (type.id.name) {
        case 'VOID':
          return new IntFType(null, 0, null);
        case 'UNSIGNED':
          return new IntFType(false, 0, null);
        case 'SIGNED':
          return new IntFType(true, 0, null);
        case 'CHAR':
          return new IntFType(null, 0, 1);
        case 'SHORT':
          return new IntFType(null, 0, 2);
        case 'INT':
          return new IntFType(null, 0, 4);
        case 'LONG':
          return new IntFType(null, 1, null);
        case 'FLOAT':
          return new FloatFType(4);
        case 'DOUBLE':
          return new FloatFType(8);
        default:throw IllegalStateException_init(type.id.toString().toString());
      }
    }
     else if (Kotlin.isType(type, StructUnionTypeSpecifier))
      return new StructFType(type);
    else if (Kotlin.isType(type, StorageClassSpecifier))
      return new IntFType(null, 0, null);
    else if (Kotlin.isType(type, TypedefTypeSpecifierName))
      return new TypedefFTypeName(type.id);
    else if (Kotlin.isType(type, TypedefTypeSpecifierRef))
      return new TypedefFTypeRef(type.id);
    else if (Kotlin.isType(type, TypeQualifier))
      return new IntFType(null, 0, null);
    else if (Kotlin.isType(type, TypeName)) {
      if (type.abstractDecl != null) {
        throw new NotImplementedError_init('An operation is not implemented: ' + 'type.abstractDecl != null');
      }
      return toFinalType(type.specifiers);
    }
     else if (Kotlin.isType(type, VariadicTypeSpecifier))
      return VariadicFType_getInstance();
    throw new NotImplementedError_init('An operation is not implemented: ' + (Kotlin.getKClassFromExpression(type).toString() + ': ' + type));
  }
  function generatePointerType(type, pointer) {
    var base = new PointerFType(type, false);
    return pointer.parent != null ? generatePointerType(base, pointer.parent) : base;
  }
  function FunctionFType(name, retType, args, variadic) {
    FType.call(this);
    this.name = name;
    this.retType = retType;
    this.args = args;
    this.variadic = variadic;
  }
  FunctionFType.prototype.toString = function () {
    var args2 = this.variadic ? plus(this.args, listOf_0('...')) : this.args;
    return this.retType.toString() + ' ' + this.name + '(' + joinToString(args2, ', ') + ')';
  };
  FunctionFType.$metadata$ = {kind: Kind_CLASS, simpleName: 'FunctionFType', interfaces: [FType]};
  FunctionFType.prototype.component1 = function () {
    return this.name;
  };
  FunctionFType.prototype.component2 = function () {
    return this.retType;
  };
  FunctionFType.prototype.component3 = function () {
    return this.args;
  };
  FunctionFType.prototype.component4 = function () {
    return this.variadic;
  };
  FunctionFType.prototype.copy_z25ib0$ = function (name, retType, args, variadic) {
    return new FunctionFType(name === void 0 ? this.name : name, retType === void 0 ? this.retType : retType, args === void 0 ? this.args : args, variadic === void 0 ? this.variadic : variadic);
  };
  FunctionFType.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.retType) | 0;
    result = result * 31 + Kotlin.hashCode(this.args) | 0;
    result = result * 31 + Kotlin.hashCode(this.variadic) | 0;
    return result;
  };
  FunctionFType.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.retType, other.retType) && Kotlin.equals(this.args, other.args) && Kotlin.equals(this.variadic, other.variadic)))));
  };
  function generateFinalType_0(type, declarator) {
    var tmp$, tmp$_0;
    if (Kotlin.isType(declarator, DeclaratorWithPointer)) {
      var pointer = declarator.pointer;
      var decl = generateFinalType_0(type, declarator.declarator);
      if (Kotlin.isType(decl, FunctionFType)) {
        return new FunctionFType(decl.name, generatePointerType(decl.retType, pointer), decl.args, decl.variadic);
      }
       else {
        return generatePointerType(decl, pointer);
      }
    }
     else if (Kotlin.isType(declarator, IdentifierDeclarator))
      return type;
    else if (Kotlin.isType(declarator, ParameterDeclarator)) {
      if (!Kotlin.isType(declarator.base, IdentifierDeclarator)) {
        throw IllegalStateException_init('Unsupported: declarator.base !is IdentifierDeclarator'.toString());
      }
      var tmp$_1 = declarator.base.id.name;
      var $receiver = declarator.declsWithoutVariadic;
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
      var tmp$_2;
      tmp$_2 = $receiver.iterator();
      while (tmp$_2.hasNext()) {
        var item = tmp$_2.next();
        destination.add_11rb$(toCParam(item));
      }
      return new FunctionFType(tmp$_1, type, destination, declarator.variadic);
    }
     else if (Kotlin.isType(declarator, ArrayDeclarator)) {
      var $receiver_0 = new ArrayFType(generateFinalType_0(type, declarator.base), (tmp$_0 = (tmp$ = declarator.expr) != null ? constantEvaluate(tmp$) : null) != null ? numberToInt(tmp$_0) : null);
      $receiver_0.declarator = declarator;
      return $receiver_0;
    }
     else if (Kotlin.isType(declarator, VarargDeclarator))
      return VariadicFType_getInstance();
    else {
      throw new NotImplementedError_init('An operation is not implemented: ' + ('declarator: ' + declarator));
    }
  }
  function generateFinalType_1(type, declarator) {
    return generateFinalType_0(generateFinalType(type), declarator);
  }
  function withDeclarator($receiver, declarator) {
    return declarator != null ? generateFinalType_0($receiver, declarator) : $receiver;
  }
  function withDeclarator_0($receiver, declarator) {
    if (declarator == null)
      return $receiver;
    if (declarator.ptr == null)
      return $receiver;
    return generatePointerType($receiver, declarator.ptr);
  }
  function toFinalType($receiver) {
    return generateFinalType($receiver);
  }
  function toFinalType_0($receiver, declarator) {
    if (declarator != null) {
      return generateFinalType_1($receiver, declarator);
    }
     else {
      return generateFinalType($receiver);
    }
  }
  function getName($receiver) {
    return getNameId($receiver).id.name;
  }
  function getNameId($receiver) {
    if (Kotlin.isType($receiver, IdentifierDeclarator))
      return $receiver;
    else if (Kotlin.isType($receiver, DeclaratorWithPointer))
      return getNameId($receiver.declarator);
    else if (Kotlin.isType($receiver, ParameterDeclarator))
      return getNameId($receiver.base);
    else if (Kotlin.isType($receiver, ArrayDeclarator))
      return getNameId($receiver.base);
    else if (Kotlin.isType($receiver, VarargDeclarator))
      return $receiver.id;
    else {
      throw new NotImplementedError_init('An operation is not implemented: ' + ('TypeSpecifier.getName: ' + $receiver));
    }
  }
  function FTypeResolver() {
  }
  FTypeResolver.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'FTypeResolver', interfaces: []};
  function canAssignTo($receiver, dst, resolver) {
    var src = resolver.resolve_de2dm9$($receiver);
    var dst_0 = resolver.resolve_de2dm9$(dst);
    if (equals(src, dst_0))
      return true;
    if (equals(src, FType$Companion_getInstance().VOID) || (equals(dst_0, FType$Companion_getInstance().VOID) && !equals(src, dst_0)))
      return false;
    if (Kotlin.isType(dst_0, BasePointerFType) && Kotlin.isType(src, IntFType))
      return true;
    if (Kotlin.isType(src, BasePointerFType) && equals(src.elementType, FType$Companion_getInstance().VOID))
      return true;
    if (Kotlin.isType(dst_0, BasePointerFType) && equals(dst_0.elementType, FType$Companion_getInstance().VOID))
      return true;
    if (Kotlin.isType(src, BasePointerFType) && Kotlin.isType(dst_0, PointerFType)) {
      return equals(src.elementType, dst_0.elementType);
    }
    if (Kotlin.isType(src, IntFType) && Kotlin.isType(dst_0, IntFType)) {
      return true;
    }
    var srcIsNumber = Kotlin.isType(src, IntFType) || Kotlin.isType(src, BoolFType) || Kotlin.isType(src, FloatFType);
    var dstIsNumber = Kotlin.isType(dst_0, IntFType) || Kotlin.isType(dst_0, BoolFType) || Kotlin.isType(dst_0, FloatFType);
    if (srcIsNumber && dstIsNumber)
      return true;
    if (Kotlin.isType(src, ArrayFType) && Kotlin.isType(dst_0, PointerFType) && equals(src.elementType, dst_0.elementType))
      return true;
    return equals(src, dst_0);
  }
  var CLI_instance = null;
  function CCompiler() {
    CCompiler_instance = this;
  }
  function CCompiler$preprocess$lambda(it) {
    return readFile(it);
  }
  function CCompiler$preprocess$getIncludeResource(file) {
    return CStdIncludes.get_11rb$(file);
  }
  function CCompiler$preprocess$lambda$lambda(closure$includeFolders, closure$fileReader, closure$getIncludeResource, closure$folder) {
    return function (fname, kind) {
      var tmp$, tmp$_0, tmp$_1;
      switch (kind.name) {
        case 'GLOBAL':
          var result = null;
          tmp$ = closure$includeFolders.iterator();
          while (tmp$.hasNext()) {
            var includeFolder = tmp$.next();
            var f = closure$fileReader(includeFolder + '/' + fname);
            if (f != null) {
              result = toStringUtf8(f);
              break;
            }
          }

          tmp$_1 = result != null ? result : closure$getIncludeResource(fname);
          break;
        case 'LOCAL':
          tmp$_1 = (tmp$_0 = closure$fileReader(closure$folder + '/' + fname)) != null ? toStringUtf8(tmp$_0) : null;
          break;
        default:tmp$_1 = Kotlin.noWhenBranchMatched();
          break;
      }
      var tmp$_2;
      if (tmp$_1 != null)
        tmp$_2 = tmp$_1;
      else {
        throw IllegalStateException_init(("Can't find file=" + fname + ', kind=' + kind).toString());
      }
      return tmp$_2;
    };
  }
  CCompiler.prototype.preprocess_ji1ias$ = function (sourceFiles, defines, includeFolders, optimizeLevel, fileReader) {
    if (defines === void 0) {
      defines = emptyList();
    }
    if (includeFolders === void 0) {
      includeFolders = emptyList();
    }
    if (optimizeLevel === void 0)
      optimizeLevel = 0;
    if (fileReader === void 0)
      fileReader = CCompiler$preprocess$lambda;
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(defines, 10)), 16);
    var destination = LinkedHashMap_init_1(capacity);
    var tmp$;
    tmp$ = defines.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var parts = split(element, ['=']);
      var pair = to(parts.get_za3lpa$(0), 1 >= 0 && 1 <= get_lastIndex(parts) ? parts.get_za3lpa$(1) : parts.get_za3lpa$(0));
      destination.put_xwzc9p$(pair.first, pair.second);
    }
    var definesMap = destination;
    var getIncludeResource = CCompiler$preprocess$getIncludeResource;
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault(sourceFiles, 10));
    var tmp$_0;
    tmp$_0 = sourceFiles.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      var tmp$_1 = destination_0.add_11rb$;
      var tmp$_2;
      var file = item;
      var folder = substringBefore(item, 47, '.');
      var includeProvider = CCompiler$preprocess$lambda$lambda(includeFolders, fileReader, getIncludeResource, folder);
      var tmp$_3;
      if ((tmp$_2 = fileReader(file)) != null)
        tmp$_3 = tmp$_2;
      else {
        throw IllegalStateException_init(('Source file ' + file + ' not found').toString());
      }
      var fileBytes = tmp$_3;
      tmp$_1.call(destination_0, preprocess(toStringUtf8(fileBytes), new PreprocessorContext(definesMap, file, optimizeLevel, void 0, includeProvider)));
    }
    var cSources = destination_0;
    return joinToString(cSources, '\n');
  };
  CCompiler.prototype.parse_61zpoe$ = function (preprocessedSource) {
    return program(programParser_0(preprocessedSource));
  };
  function CCompiler$Compilation(source, program) {
    this.source = source;
    this.program = program;
  }
  Object.defineProperty(CCompiler$Compilation.prototype, 'parser', {get: function () {
    return this.program.parser;
  }});
  CCompiler$Compilation.$metadata$ = {kind: Kind_CLASS, simpleName: 'Compilation', interfaces: [ProgramParserRef]};
  CCompiler.prototype.compileKotlin_ivxn3r$ = function (preprocessedSource, includeRuntime) {
    if (includeRuntime === void 0)
      includeRuntime = true;
    var program = this.parse_61zpoe$(preprocessedSource);
    var out = (new KotlinGenerator()).generate_unjmr9$(program);
    var source = includeRuntime ? out + '\n' + '\n' + RuntimeCode : out;
    return new CCompiler$Compilation(source, program);
  };
  CCompiler.$metadata$ = {kind: Kind_OBJECT, simpleName: 'CCompiler', interfaces: []};
  var CCompiler_instance = null;
  function CCompiler_getInstance() {
    if (CCompiler_instance === null) {
      new CCompiler();
    }
    return CCompiler_instance;
  }
  function KotlinGenerator() {
    this.program_ndpup$_0 = this.program_ndpup$_0;
    this.breakScope_0 = null;
    this.__smLabel_0 = '__smLabel';
    this.tempContext_0 = new TempContext();
    this.oldPosIndex_0 = 0;
    this.__tmp_0 = '`$`';
    this.__it_0 = '`$`';
  }
  Object.defineProperty(KotlinGenerator.prototype, 'program', {get: function () {
    if (this.program_ndpup$_0 == null)
      return throwUPAE('program');
    return this.program_ndpup$_0;
  }, set: function (program) {
    this.program_ndpup$_0 = program;
  }});
  Object.defineProperty(KotlinGenerator.prototype, 'parser', {get: function () {
    return this.program.parser;
  }});
  Object.defineProperty(KotlinGenerator.prototype, 'strings', {get: function () {
    return this.parser.strings;
  }});
  KotlinGenerator.prototype.generate_unjmr9$ = function (program) {
    var $receiver = new Indenter_0();
    this.program = program;
    $receiver.line_61zpoe$('//ENTRY Program');
    $receiver.line_61zpoe$('class Program(HEAP_SIZE: Int = 0) : Runtime(HEAP_SIZE)' + ' {');
    var $receiver_0 = $receiver.cmds;
    var element = Indenter_0.Indent;
    $receiver_0.add_11rb$(element);
    try {
      var tmp$, tmp$_0, tmp$_1;
      $receiver.line_61zpoe$('companion object { @JvmStatic fun main(args: Array<String>): Unit = run { Program().main() } }');
      $receiver.line_61zpoe$('');
      tmp$ = program.decls.iterator();
      while (tmp$.hasNext()) {
        var decl = tmp$.next();
        this.generate_wyqb1q$($receiver, decl);
      }
      if (!this.parser.structTypesByName.isEmpty()) {
        $receiver.line_61zpoe$('');
        $receiver.line_61zpoe$('//////////////////');
        $receiver.line_61zpoe$('// C STRUCTURES //');
        $receiver.line_61zpoe$('//////////////////');
        $receiver.line_61zpoe$('');
      }
      tmp$_0 = this.parser.structTypesByName.values.iterator();
      while (tmp$_0.hasNext()) {
        var type = tmp$_0.next();
        var typeName = type.name;
        var typeNameAlloc = typeName + 'Alloc';
        var typeFields = type.fieldsByName.values;
        var destination = ArrayList_init_0(collectionSizeOrDefault(typeFields, 10));
        var tmp$_2;
        tmp$_2 = typeFields.iterator();
        while (tmp$_2.hasNext()) {
          var item = tmp$_2.next();
          destination.add_11rb$(item.name + ': ' + this.str_b2mlnm$(item.type));
        }
        var params = destination;
        var destination_0 = ArrayList_init_0(collectionSizeOrDefault(typeFields, 10));
        var tmp$_3;
        tmp$_3 = typeFields.iterator();
        while (tmp$_3.hasNext()) {
          var item_0 = tmp$_3.next();
          destination_0.add_11rb$(item_0.name + ': ' + this.str_b2mlnm$(item_0.type));
        }
        var fields = destination_0;
        var destination_1 = ArrayList_init_0(collectionSizeOrDefault(typeFields, 10));
        var tmp$_4;
        tmp$_4 = typeFields.iterator();
        while (tmp$_4.hasNext()) {
          var item_1 = tmp$_4.next();
          destination_1.add_11rb$('this.' + item_1.name + ' = ' + item_1.name);
        }
        var fieldsSet = destination_1;
        $receiver.line_61zpoe$('/*!inline*/ class ' + typeName + '(val ptr: Int) {');
        var $receiver_1 = $receiver.cmds;
        var element_0 = Indenter_0.Indent;
        $receiver_1.add_11rb$(element_0);
        try {
          $receiver.line_61zpoe$('companion object {');
          var $receiver_2 = $receiver.cmds;
          var element_1 = Indenter_0.Indent;
          $receiver_2.add_11rb$(element_1);
          try {
            var tmp$_5;
            $receiver.line_61zpoe$('const val SIZE_BYTES = ' + type.size);
            tmp$_5 = typeFields.iterator();
            while (tmp$_5.hasNext()) {
              var field = tmp$_5.next();
              $receiver.line_61zpoe$('const val ' + field.offsetName + ' = ' + field.offset);
            }
          }
          finally {
            var $receiver_3 = $receiver.cmds;
            var element_2 = Indenter_0.Unindent;
            $receiver_3.add_11rb$(element_2);
          }
          $receiver.line_61zpoe$('}');
        }
        finally {
          var $receiver_4 = $receiver.cmds;
          var element_3 = Indenter_0.Unindent;
          $receiver_4.add_11rb$(element_3);
        }
        $receiver.line_61zpoe$('}');
        if (!params.isEmpty()) {
          $receiver.line_61zpoe$('fun ' + typeNameAlloc + '(): ' + typeName + ' = ' + typeName + '(alloca(' + typeName + '.SIZE_BYTES).ptr)');
        }
        $receiver.line_61zpoe$('fun ' + typeNameAlloc + '(' + joinToString(params, ', ') + '): ' + typeName + ' = ' + typeNameAlloc + '().apply { ' + joinToString(fieldsSet, '; ') + ' }');
        $receiver.line_61zpoe$('fun ' + typeName + '.copyFrom(src: ' + typeName + '): ' + typeName + ' = this.apply { memcpy(CPointer<Unit>(this.ptr), CPointer<Unit>(src.ptr), ' + typeName + '.SIZE_BYTES) }');
        tmp$_1 = typeFields.iterator();
        while (tmp$_1.hasNext()) {
          var field_0 = tmp$_1.next();
          var ftype = field_0.type;
          var foffsetName = typeName + '.' + field_0.offsetName;
          if (Kotlin.isType(ftype, IntFType)) {
            var ftypeSize = ftype.typeSize;
            if (ftypeSize === 4)
              $receiver.line_61zpoe$('var ' + typeName + '.' + field_0.name + ': ' + ftype + ' get() = lw(ptr + ' + foffsetName + '); set(value) = sw(ptr + ' + foffsetName + ', value)');
            else
              $receiver.line_61zpoe$('var ' + typeName + '.' + field_0.name + ': ' + ftype + ' get() = TODO(' + '"' + 'ftypeSize=' + ftypeSize + '"' + '); set(value) = TODO()');
          }
           else if (Kotlin.isType(ftype, FloatFType))
            $receiver.line_61zpoe$('var ' + typeName + '.' + field_0.name + ': ' + ftype + ' get() = flw(ptr + ' + foffsetName + '); set(value) = fsw(ptr + ' + foffsetName + ', value)');
          else if (Kotlin.isType(ftype, PointerFType))
            $receiver.line_61zpoe$('var ' + typeName + '.' + field_0.name + ': ' + ftype + ' get() = CPointer(lw(ptr + ' + foffsetName + ')); set(value) = run { sw(ptr + ' + foffsetName + ', value.ptr) }');
          else
            $receiver.line_61zpoe$('var ' + typeName + '.' + field_0.name + ': ' + ftype + ' get() = TODO(' + '"' + 'ftype=' + ftype + '"' + '); set(value) = TODO(' + '"' + 'ftype=' + ftype + '"' + ')');
        }
      }
    }
    finally {
      var $receiver_5 = $receiver.cmds;
      var element_4 = Indenter_0.Unindent;
      $receiver_5.add_11rb$(element_4);
    }
    $receiver.line_61zpoe$('}');
    return $receiver.toString();
  };
  function KotlinGenerator$generate$lambda(this$KotlinGenerator) {
    return function (it) {
      return this$KotlinGenerator.generateParam_2npoom$(it);
    };
  }
  KotlinGenerator.prototype.generate_wyqb1q$ = function ($receiver, it) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (Kotlin.isType(it, FuncDecl)) {
      $receiver.line_61zpoe$('fun ' + it.name.name + '(' + joinToString(it.paramsWithVariadic, ', ', void 0, void 0, void 0, void 0, KotlinGenerator$generate$lambda(this)) + '): ' + this.generate_ojkvrr$(it.rettype) + ' = stackFrame {');
      var tmp$_3;
      if ((tmp$ = it.func) != null)
        tmp$_3 = tmp$;
      else {
        throw IllegalStateException_init("Can't get FunctionScope in function".toString());
      }
      var func = tmp$_3;
      var $receiver_0 = $receiver.cmds;
      var element = Indenter_0.Indent;
      $receiver_0.add_11rb$(element);
      try {
        var tmp$_4, tmp$_5;
        if (func.hasGoto) {
          var output = StateMachineLowerer_getInstance().lower_2qabjq$(it.body);
          tmp$_4 = output.decls.iterator();
          while (tmp$_4.hasNext()) {
            var decl = tmp$_4.next();
            this.generate_wyqb1q$($receiver, decl);
          }
          $receiver.line_61zpoe$('__smLabel = -1');
          $receiver.line_61zpoe$('__sm@while (true)' + ' {');
          var $receiver_1 = $receiver.cmds;
          var element_0 = Indenter_0.Indent;
          $receiver_1.add_11rb$(element_0);
          try {
            $receiver.line_61zpoe$('when (__smLabel)' + ' {');
            var $receiver_2 = $receiver.cmds;
            var element_1 = Indenter_0.Indent;
            $receiver_2.add_11rb$(element_1);
            try {
              var tmp$_6;
              $receiver.line_61zpoe$('-1 -> {');
              var $receiver_3 = $receiver.cmds;
              var element_2 = Indenter_0.Indent;
              $receiver_3.add_11rb$(element_2);
              tmp$_6 = output.stms.iterator();
              while (tmp$_6.hasNext()) {
                var stm = tmp$_6.next();
                this.generate_a880qk$($receiver, stm);
              }
              var $receiver_4 = $receiver.cmds;
              var element_3 = Indenter_0.Unindent;
              $receiver_4.add_11rb$(element_3);
              $receiver.line_61zpoe$('}');
            }
            finally {
              var $receiver_5 = $receiver.cmds;
              var element_4 = Indenter_0.Unindent;
              $receiver_5.add_11rb$(element_4);
            }
            $receiver.line_61zpoe$('}');
          }
          finally {
            var $receiver_6 = $receiver.cmds;
            var element_5 = Indenter_0.Unindent;
            $receiver_6.add_11rb$(element_5);
          }
          $receiver.line_61zpoe$('}');
        }
         else {
          tmp$_5 = it.body.stms.iterator();
          while (tmp$_5.hasNext()) {
            var stm_0 = tmp$_5.next();
            this.generate_a880qk$($receiver, stm_0);
          }
        }
      }
      finally {
        var $receiver_7 = $receiver.cmds;
        var element_6 = Indenter_0.Unindent;
        $receiver_7.add_11rb$(element_6);
      }
      $receiver.line_61zpoe$('}');
    }
     else if (Kotlin.isType(it, Declaration)) {
      var ftype = toFinalType(it.specs);
      tmp$_0 = it.initDeclaratorList.iterator();
      while (tmp$_0.hasNext()) {
        var init = tmp$_0.next();
        if (Kotlin.isType(init.decl, ParameterDeclarator))
          continue;
        var varType = withDeclarator(ftype, init.decl);
        var resolvedVarType = this.resolve_b2mlnm$(varType);
        var name = getName(init.decl);
        var varInit = init.initializer;
        var varInitStr = (tmp$_2 = (tmp$_1 = varInit != null ? this.castTo_8k3vt3$(varInit, resolvedVarType) : null) != null ? this.generate_heq7lg$(tmp$_1, void 0, resolvedVarType) : null) != null ? tmp$_2 : this.defaultValue_b2mlnm$(init.type);
        var varInitStr2 = Kotlin.isType(resolvedVarType, StructFType) ? this.get_Alloc_m0fxnx$(resolvedVarType) + '().copyFrom(' + varInitStr + ')' : varInitStr;
        $receiver.line_61zpoe$('var ' + name + ': ' + this.str_b2mlnm$(resolvedVarType) + ' = ' + varInitStr2);
      }
    }
     else {
      throw IllegalStateException_init(("Don't know how to generate decl " + it).toString());
    }
  };
  KotlinGenerator.prototype.get_Alloc_m0fxnx$ = function ($receiver) {
    return this.get_finalName_m0fxnx$($receiver) + 'Alloc';
  };
  KotlinGenerator.prototype.castTo_8k3vt3$ = function ($receiver, type) {
    return type != null && !equals(this.resolve_b2mlnm$($receiver.type), this.resolve_b2mlnm$(type)) ? new CastExpr($receiver, type) : $receiver;
  };
  KotlinGenerator.prototype.resolve_b2mlnm$ = function ($receiver) {
    return this.parser.resolve_de2dm9$($receiver);
  };
  KotlinGenerator.prototype.str_b2mlnm$ = function ($receiver) {
    if (Kotlin.isType($receiver, PointerFType))
      return 'CPointer<' + this.str_b2mlnm$($receiver.elementType) + '>';
    else if (Kotlin.isType($receiver, StructFType))
      return this.parser.getStructTypeInfo_me841z$($receiver.spec).name;
    else
      return $receiver.toString();
  };
  function KotlinGenerator$BreakScope(name, kind, node, parent) {
    if (parent === void 0)
      parent = null;
    this.name = name;
    this.kind = kind;
    this.node = node;
    this.parent = parent;
    this.level = this.parent != null ? this.parent.level + 1 | 0 : 1;
  }
  function KotlinGenerator$BreakScope$Kind(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function KotlinGenerator$BreakScope$Kind_initFields() {
    KotlinGenerator$BreakScope$Kind_initFields = function () {
    };
    KotlinGenerator$BreakScope$Kind$WHEN_instance = new KotlinGenerator$BreakScope$Kind('WHEN', 0);
    KotlinGenerator$BreakScope$Kind$WHILE_instance = new KotlinGenerator$BreakScope$Kind('WHILE', 1);
  }
  var KotlinGenerator$BreakScope$Kind$WHEN_instance;
  function KotlinGenerator$BreakScope$Kind$WHEN_getInstance() {
    KotlinGenerator$BreakScope$Kind_initFields();
    return KotlinGenerator$BreakScope$Kind$WHEN_instance;
  }
  var KotlinGenerator$BreakScope$Kind$WHILE_instance;
  function KotlinGenerator$BreakScope$Kind$WHILE_getInstance() {
    KotlinGenerator$BreakScope$Kind_initFields();
    return KotlinGenerator$BreakScope$Kind$WHILE_instance;
  }
  KotlinGenerator$BreakScope$Kind.$metadata$ = {kind: Kind_CLASS, simpleName: 'Kind', interfaces: [Enum]};
  function KotlinGenerator$BreakScope$Kind$values() {
    return [KotlinGenerator$BreakScope$Kind$WHEN_getInstance(), KotlinGenerator$BreakScope$Kind$WHILE_getInstance()];
  }
  KotlinGenerator$BreakScope$Kind.values = KotlinGenerator$BreakScope$Kind$values;
  function KotlinGenerator$BreakScope$Kind$valueOf(name) {
    switch (name) {
      case 'WHEN':
        return KotlinGenerator$BreakScope$Kind$WHEN_getInstance();
      case 'WHILE':
        return KotlinGenerator$BreakScope$Kind$WHILE_getInstance();
      default:throwISE('No enum constant com.soywiz.ktcc.gen.KotlinGenerator.BreakScope.Kind.' + name);
    }
  }
  KotlinGenerator$BreakScope$Kind.valueOf_61zpoe$ = KotlinGenerator$BreakScope$Kind$valueOf;
  Object.defineProperty(KotlinGenerator$BreakScope.prototype, 'scopeForContinue', {get: function () {
    var tmp$;
    return this.kind === KotlinGenerator$BreakScope$Kind$WHILE_getInstance() ? this : (tmp$ = this.parent) != null ? tmp$.scopeForContinue : null;
  }});
  KotlinGenerator$BreakScope.$metadata$ = {kind: Kind_CLASS, simpleName: 'BreakScope', interfaces: []};
  Object.defineProperty(KotlinGenerator.prototype, 'breakScopeForContinue', {get: function () {
    var tmp$;
    return (tmp$ = this.breakScope_0) != null ? tmp$.scopeForContinue : null;
  }});
  KotlinGenerator.prototype.breakScope_rgnlr$ = function (name, kind, node, callback) {
    var tmp$, tmp$_0;
    var old = this.breakScope_0;
    this.breakScope_0 = new KotlinGenerator$BreakScope(name + ((tmp$_0 = (tmp$ = this.breakScope_0) != null ? tmp$.level : null) != null ? tmp$_0 : 0), kind, node, old);
    try {
      return callback(ensureNotNull(this.breakScope_0));
    }
    finally {
      this.breakScope_0 = old;
    }
  };
  function KotlinGenerator$generate$lambda_0(closure$it, this$KotlinGenerator, this$generate) {
    return function () {
      var tmp$;
      tmp$ = closure$it.stms.iterator();
      while (tmp$.hasNext()) {
        var s = tmp$.next();
        this$KotlinGenerator.generate_a880qk$(this$generate, s);
      }
      return Unit;
    };
  }
  function KotlinGenerator$generate$lambda_1(closure$it, this$KotlinGenerator, this$generate) {
    return function (scope) {
      this$generate.line_61zpoe$(scope.name + '@while (' + this$KotlinGenerator.generate_heq7lg$(this$KotlinGenerator.castTo_8k3vt3$(closure$it.cond, FType$Companion_getInstance().BOOL), false) + ') {');
      var $this = this$generate;
      var $receiver = $this.cmds;
      var element = Indenter_0.Indent;
      $receiver.add_11rb$(element);
      try {
        var closure$it_0 = closure$it;
        this$KotlinGenerator.generate_a880qk$(this$generate, closure$it_0.body);
      }
      finally {
        var $receiver_0 = $this.cmds;
        var element_0 = Indenter_0.Unindent;
        $receiver_0.add_11rb$(element_0);
      }
      this$generate.line_61zpoe$('}');
      return Unit;
    };
  }
  function KotlinGenerator$generate$lambda_2(this$generate, closure$it, this$KotlinGenerator) {
    return function (scope) {
      this$generate.line_61zpoe$(scope.name + '@do {');
      var $this = this$generate;
      var $receiver = $this.cmds;
      var element = Indenter_0.Indent;
      $receiver.add_11rb$(element);
      try {
        var closure$it_0 = closure$it;
        this$KotlinGenerator.generate_a880qk$(this$generate, closure$it_0.body);
      }
      finally {
        var $receiver_0 = $this.cmds;
        var element_0 = Indenter_0.Unindent;
        $receiver_0.add_11rb$(element_0);
      }
      this$generate.line_61zpoe$('} while (' + this$KotlinGenerator.generate_heq7lg$(this$KotlinGenerator.castTo_8k3vt3$(closure$it.cond, FType$Companion_getInstance().BOOL), false) + ')');
      return Unit;
    };
  }
  KotlinGenerator.prototype.generate_a880qk$ = function ($receiver, it) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (Kotlin.isType(it, LowGoto))
      $receiver.line_61zpoe$(this.__smLabel_0 + ' = ' + it.label.id + '; continue@__sm');
    else if (Kotlin.isType(it, LowLabel)) {
      $receiver.line_61zpoe$(this.__smLabel_0 + ' = ' + it.label.id);
      var $receiver_0 = $receiver.cmds;
      var element = Indenter_0.Unindent;
      $receiver_0.add_11rb$(element);
      $receiver.line_61zpoe$('}');
      $receiver.line_61zpoe$(it.label.id.toString() + ' -> {');
      var $receiver_1 = $receiver.cmds;
      var element_0 = Indenter_0.Indent;
      $receiver_1.add_11rb$(element_0);
    }
     else if (Kotlin.isType(it, LowIfGoto))
      $receiver.line_61zpoe$('if (' + this.generate_heq7lg$(it.cond, false) + ') { ' + this.__smLabel_0 + ' = ' + it.label.id + '; continue@__sm }');
    else if (Kotlin.isType(it, LowSwitchGoto)) {
      $receiver.line_61zpoe$(this.__smLabel_0 + ' = when (' + this.generate_heq7lg$(it.subject, false) + ')' + ' {');
      var $receiver_2 = $receiver.cmds;
      var element_1 = Indenter_0.Indent;
      $receiver_2.add_11rb$(element_1);
      try {
        var tmp$_3;
        tmp$_3 = it.map.entries.iterator();
        while (tmp$_3.hasNext()) {
          var tmp$_4 = tmp$_3.next();
          var expr = tmp$_4.key;
          var label = tmp$_4.value;
          if (expr != null) {
            $receiver.line_61zpoe$(this.generate_heq7lg$(expr, false) + ' -> ' + label.id);
          }
           else {
            $receiver.line_61zpoe$('else -> ' + label.id);
          }
        }
      }
      finally {
        var $receiver_3 = $receiver.cmds;
        var element_2 = Indenter_0.Unindent;
        $receiver_3.add_11rb$(element_2);
      }
      $receiver.line_61zpoe$('}');
      $receiver.line_61zpoe$('continue@__sm');
    }
     else if (!Kotlin.isType(it, EmptyStm))
      if (Kotlin.isType(it, Stms)) {
        var $receiver_4 = it.stms;
        var any$result;
        any$break: do {
          var tmp$_5;
          if (Kotlin.isType($receiver_4, Collection) && $receiver_4.isEmpty()) {
            any$result = false;
            break any$break;
          }
          tmp$_5 = $receiver_4.iterator();
          while (tmp$_5.hasNext()) {
            var element_3 = tmp$_5.next();
            if (Kotlin.isType(element_3, Decl)) {
              any$result = true;
              break any$break;
            }
          }
          any$result = false;
        }
         while (false);
        var hasDeclarations = any$result;
        if (hasDeclarations) {
          this.lineStackFrame_0($receiver, it, KotlinGenerator$generate$lambda_0(it, this, $receiver));
        }
         else {
          tmp$ = it.stms.iterator();
          while (tmp$.hasNext()) {
            var s = tmp$.next();
            this.generate_a880qk$($receiver, s);
          }
        }
      }
       else if (Kotlin.isType(it, RawStm))
        $receiver.line_61zpoe$(it.raw);
      else if (Kotlin.isType(it, CommentStm))
        if (it.multiline) {
          $receiver.line_61zpoe$('/* ' + it.comment + ' */');
        }
         else {
          $receiver.line_61zpoe$('// ' + it.comment);
        }
       else if (Kotlin.isType(it, Return)) {
        var tmp$_6;
        if ((tmp$_0 = it.func) != null)
          tmp$_6 = tmp$_0;
        else {
          throw IllegalStateException_init("Return doesn't have linked a function scope".toString());
        }
        var func = tmp$_6;
        it.expr != null ? $receiver.line_61zpoe$('return ' + this.generate_heq7lg$(this.castTo_8k3vt3$(it.expr, func.rettype), false)) : $receiver.line_61zpoe$('return');
      }
       else if (Kotlin.isType(it, ExprStm)) {
        var expr_0 = it.expr;
        if (expr_0 != null) {
          if (Kotlin.isType(expr_0, AssignExpr))
            $receiver.line_61zpoe$(this.genAssignBase_vr6w72$(expr_0, this.generate_heq7lg$(expr_0.l), this.generate_heq7lg$(this.castTo_8k3vt3$(expr_0.r, expr_0.l.type)), this.resolve_b2mlnm$(expr_0.l.type)));
          else if (Kotlin.isType(expr_0, BaseUnaryOp) && setOf(['++', '--']).contains_11rb$(expr_0.op)) {
            var e = this.generate_heq7lg$(expr_0.operand);
            $receiver.line_61zpoe$(e + ' = ' + e + '.' + this.opName_61zpoe$(expr_0.op) + '(1)');
          }
           else
            $receiver.line_61zpoe$(this.generate_heq7lg$(expr_0, false));
        }
      }
       else if (Kotlin.isType(it, While))
        if (containsBreakOrContinue(it)) {
          this.breakScope_rgnlr$('while', KotlinGenerator$BreakScope$Kind$WHILE_getInstance(), it, KotlinGenerator$generate$lambda_1(it, this, $receiver));
        }
         else {
          $receiver.line_61zpoe$('while (' + this.generate_heq7lg$(this.castTo_8k3vt3$(it.cond, FType$Companion_getInstance().BOOL), false) + ') {');
          var $receiver_5 = $receiver.cmds;
          var element_4 = Indenter_0.Indent;
          $receiver_5.add_11rb$(element_4);
          try {
            this.generate_a880qk$($receiver, it.body);
          }
          finally {
            var $receiver_6 = $receiver.cmds;
            var element_5 = Indenter_0.Unindent;
            $receiver_6.add_11rb$(element_5);
          }
          $receiver.line_61zpoe$('}');
        }
       else if (Kotlin.isType(it, DoWhile))
        this.breakScope_rgnlr$('do', KotlinGenerator$BreakScope$Kind$WHILE_getInstance(), it, KotlinGenerator$generate$lambda_2($receiver, it, this));
      else if (Kotlin.isType(it, For))
        this.generate_a880qk$($receiver, lower(it));
      else if (Kotlin.isType(it, SwitchWithoutFallthrough)) {
        $receiver.line_61zpoe$('when (' + this.generate_heq7lg$(it.subject, false) + ')' + ' {');
        var $receiver_7 = $receiver.cmds;
        var element_6 = Indenter_0.Indent;
        $receiver_7.add_11rb$(element_6);
        try {
          var tmp$_7;
          tmp$_7 = it.bodyCases.iterator();
          while (tmp$_7.hasNext()) {
            var stm = tmp$_7.next();
            if (Kotlin.isType(stm, CaseStm)) {
              $receiver.line_61zpoe$(this.generate_heq7lg$(stm.expr, false) + ' ->' + ' {');
              var $receiver_8 = $receiver.cmds;
              var element_7 = Indenter_0.Indent;
              $receiver_8.add_11rb$(element_7);
              try {
                this.generate_a880qk$($receiver, stm.stm);
              }
              finally {
                var $receiver_9 = $receiver.cmds;
                var element_8 = Indenter_0.Unindent;
                $receiver_9.add_11rb$(element_8);
              }
              $receiver.line_61zpoe$('}');
            }
             else if (Kotlin.isType(stm, DefaultStm)) {
              $receiver.line_61zpoe$('else ->' + ' {');
              var $receiver_10 = $receiver.cmds;
              var element_9 = Indenter_0.Indent;
              $receiver_10.add_11rb$(element_9);
              try {
                this.generate_a880qk$($receiver, stm.stm);
              }
              finally {
                var $receiver_11 = $receiver.cmds;
                var element_10 = Indenter_0.Unindent;
                $receiver_11.add_11rb$(element_10);
              }
              $receiver.line_61zpoe$('}');
            }
          }
        }
        finally {
          var $receiver_12 = $receiver.cmds;
          var element_11 = Indenter_0.Unindent;
          $receiver_12.add_11rb$(element_11);
        }
        $receiver.line_61zpoe$('}');
      }
       else if (Kotlin.isType(it, Switch))
        this.generate_a880qk$($receiver, removeFallthrough(it, this.tempContext_0));
      else if (Kotlin.isType(it, CaseStm)) {
        $receiver.line_61zpoe$('// unexpected outer CASE ' + this.generate_heq7lg$(it.expr));
        this.generate_a880qk$($receiver, it.stm);
      }
       else if (Kotlin.isType(it, DefaultStm)) {
        $receiver.line_61zpoe$('// unexpected outer DEFAULT');
        this.generate_a880qk$($receiver, it.stm);
      }
       else if (Kotlin.isType(it, LabeledStm)) {
        $receiver.line_61zpoe$(it.id.toString() + '@run {');
        var $receiver_13 = $receiver.cmds;
        var element_12 = Indenter_0.Indent;
        $receiver_13.add_11rb$(element_12);
        try {
          this.generate_a880qk$($receiver, it.stm);
        }
        finally {
          var $receiver_14 = $receiver.cmds;
          var element_13 = Indenter_0.Unindent;
          $receiver_14.add_11rb$(element_13);
        }
        $receiver.line_61zpoe$('}');
      }
       else if (Kotlin.isType(it, Goto))
        $receiver.line_61zpoe$('goto@' + it.id + ' /* @TODO: goto must convert the function into a state machine */');
      else if (Kotlin.isType(it, Continue) || Kotlin.isType(it, Break)) {
        var scope = Kotlin.isType(it, Continue) ? this.breakScopeForContinue : this.breakScope_0;
        var keyword = Kotlin.isType(it, Continue) ? 'continue' : 'break';
        var gen = Kotlin.isType(it, Continue) ? (tmp$_1 = scope != null ? scope.node : null) != null ? tmp$_1.onContinue : null : (tmp$_2 = scope != null ? scope.node : null) != null ? tmp$_2.onBreak : null;
        if (gen != null) {
          $receiver.line_61zpoe$('run' + ' {');
          var $receiver_15 = $receiver.cmds;
          var element_14 = Indenter_0.Indent;
          $receiver_15.add_11rb$(element_14);
          try {
            this.generate_a880qk$($receiver, gen());
            $receiver.line_61zpoe$(keyword + '@' + toString(scope != null ? scope.name : null));
          }
          finally {
            var $receiver_16 = $receiver.cmds;
            var element_15 = Indenter_0.Unindent;
            $receiver_16.add_11rb$(element_15);
          }
          $receiver.line_61zpoe$('}');
        }
         else {
          $receiver.line_61zpoe$(keyword + '@' + toString(scope != null ? scope.name : null));
        }
      }
       else if (Kotlin.isType(it, IfElse)) {
        $receiver.line_61zpoe$('if (' + this.generate_heq7lg$(this.castTo_8k3vt3$(it.cond, FType$Companion_getInstance().BOOL), false) + ') {');
        var $receiver_17 = $receiver.cmds;
        var element_16 = Indenter_0.Indent;
        $receiver_17.add_11rb$(element_16);
        try {
          this.generate_a880qk$($receiver, it.strue);
        }
        finally {
          var $receiver_18 = $receiver.cmds;
          var element_17 = Indenter_0.Unindent;
          $receiver_18.add_11rb$(element_17);
        }
        if (it.sfalse != null) {
          $receiver.line_61zpoe$('} else {');
          var $receiver_19 = $receiver.cmds;
          var element_18 = Indenter_0.Indent;
          $receiver_19.add_11rb$(element_18);
          try {
            this.generate_a880qk$($receiver, it.sfalse);
          }
          finally {
            var $receiver_20 = $receiver.cmds;
            var element_19 = Indenter_0.Unindent;
            $receiver_20.add_11rb$(element_19);
          }
          $receiver.line_61zpoe$('}');
        }
         else {
          $receiver.line_61zpoe$('}');
        }
      }
       else if (Kotlin.isType(it, Decl))
        this.generate_wyqb1q$($receiver, it);
      else {
        throw IllegalStateException_init(("Don't know how to generate stm " + it).toString());
      }
  };
  KotlinGenerator.prototype.lineStackFrame_0 = function ($receiver, node, code) {
    var tmp$;
    if (containsBreakOrContinue(node)) {
      var oldPos = '__oldPos' + (tmp$ = this.oldPosIndex_0, this.oldPosIndex_0 = tmp$ + 1 | 0, tmp$);
      $receiver.line_61zpoe$('val ' + oldPos + ' = STACK_PTR');
      $receiver.line_61zpoe$('try' + ' {');
      var $receiver_0 = $receiver.cmds;
      var element = Indenter_0.Indent;
      $receiver_0.add_11rb$(element);
      try {
        code();
      }
      finally {
        var $receiver_1 = $receiver.cmds;
        var element_0 = Indenter_0.Unindent;
        $receiver_1.add_11rb$(element_0);
      }
      $receiver.line_61zpoe$('}');
      $receiver.line_61zpoe$('finally' + ' {');
      var $receiver_2 = $receiver.cmds;
      var element_1 = Indenter_0.Indent;
      $receiver_2.add_11rb$(element_1);
      try {
        $receiver.line_61zpoe$('STACK_PTR = ' + oldPos);
      }
      finally {
        var $receiver_3 = $receiver.cmds;
        var element_2 = Indenter_0.Unindent;
        $receiver_3.add_11rb$(element_2);
      }
      $receiver.line_61zpoe$('}');
    }
     else {
      $receiver.line_61zpoe$('stackFrame' + ' {');
      var $receiver_4 = $receiver.cmds;
      var element_3 = Indenter_0.Indent;
      $receiver_4.add_11rb$(element_3);
      try {
        code();
      }
      finally {
        var $receiver_5 = $receiver.cmds;
        var element_4 = Indenter_0.Unindent;
        $receiver_5.add_11rb$(element_4);
      }
      $receiver.line_61zpoe$('}');
    }
  };
  KotlinGenerator.prototype.generateParam_2npoom$ = function (it) {
    if (Kotlin.isType(it, CParam))
      return this.generateParam_ckdxgn$(it);
    else if (Kotlin.isType(it, CParamVariadic))
      return 'vararg __VA__: Any?';
    else {
      throw new NotImplementedError_init();
    }
  };
  KotlinGenerator.prototype.generateParam_ckdxgn$ = function (it) {
    return it.name.toString() + ': ' + it.type;
  };
  KotlinGenerator.prototype.toKotlinType_kh98so$ = function ($receiver) {
    var tmp$, tmp$_0;
    var void_0 = false;
    var static_0 = false;
    var unsigned = {v: false};
    var integral = {v: false};
    var longCount = 0;
    var intSize = 4;
    var float = false;
    tmp$ = $receiver.items.iterator();
    while (tmp$.hasNext()) {
      var spec = tmp$.next();
      if (Kotlin.isType(spec, BasicTypeSpecifier)) {
        switch (spec.id.name) {
          case 'VOID':
            void_0 = true;
            break;
          case 'INT':
            integral.v = true;
            break;
          case 'CHAR':
            intSize = 1;
            integral.v = true;
            break;
          case 'UNSIGNED':
            unsigned.v = true;
            integral.v = true;
            break;
          case 'FLOAT':
            float = true;
            break;
          default:throw new NotImplementedError_init('An operation is not implemented: ' + spec.id.toString());
        }
      }
       else if (Kotlin.isType(spec, StorageClassSpecifier)) {
        if (equals(spec.kind, StorageClassSpecifier$Kind$STATIC_getInstance()))
          static_0 = true;
      }
       else if (!Kotlin.isType(spec, TypedefTypeSpecifierRef))
        if (!Kotlin.isType(spec, TypeQualifier)) {
          throw new NotImplementedError_init('An operation is not implemented: ' + ('toKotlinType: ' + spec));
        }
    }
    if (void_0)
      tmp$_0 = 'Unit';
    else if (integral.v) {
      if (intSize === 1)
        tmp$_0 = 'Byte';
      else
        tmp$_0 = 'Int';
    }
     else if (float)
      tmp$_0 = 'Float';
    else
      tmp$_0 = 'Unknown';
    return tmp$_0;
  };
  KotlinGenerator.prototype.generate_ojkvrr$ = function (it) {
    return this.toKotlinType_kh98so$(it);
  };
  KotlinGenerator.prototype.genAssignBase_vr6w72$ = function ($receiver, ll, rr, ltype, rtype) {
    if (rtype === void 0)
      rtype = ltype;
    switch ($receiver.op) {
      case '=':
        if (Kotlin.isType(ltype, StructFType) && Kotlin.isType(rtype, StructFType)) {
          return ll + '.copyFrom(' + rr + ')';
        }
         else {
          return ll + ' = ' + rr;
        }

      case '+=':
      case '-=':
      case '*=':
      case '/=':
      case '%=':
        return ll + ' ' + $receiver.op + ' ' + rr;
      case '&=':
        return ll + ' = ' + ll + ' and ' + rr;
      case '|=':
        return ll + ' = ' + ll + ' or ' + rr;
      case '^=':
        return ll + ' = ' + ll + ' xor ' + rr;
      case '&&=':
        return ll + ' = ' + ll + ' && ' + rr;
      case '||=':
        return ll + ' = ' + ll + ' || ' + rr;
      case '<<=':
        return ll + ' = ' + ll + ' shl ' + rr;
      case '>>=':
        return ll + ' = ' + ll + ' shr ' + rr;
      default:throw new NotImplementedError_init('An operation is not implemented: ' + ('AssignExpr ' + $receiver.op));
    }
  };
  KotlinGenerator.prototype.opName_61zpoe$ = function (op) {
    switch (op) {
      case '+':
      case '++':
        return 'plus';
      case '-':
      case '--':
        return 'minus';
      default:return op;
    }
  };
  function KotlinGenerator$generate$lambda_3(closure$typeArgs, this$KotlinGenerator) {
    return function (f) {
      var index = f.component1(), arg = f.component2();
      var tmp$;
      var ltype = (tmp$ = getOrNull(closure$typeArgs, index)) != null ? tmp$.type : null;
      return this$KotlinGenerator.generate_heq7lg$(this$KotlinGenerator.castTo_8k3vt3$(arg, ltype), void 0, ltype);
    };
  }
  function KotlinGenerator$generate$lambda_4(closure$ltype, this$KotlinGenerator) {
    return function (it) {
      return this$KotlinGenerator.generate_heq7lg$(it.initializer, void 0, closure$ltype.elementType);
    };
  }
  function KotlinGenerator$generate$lambda_5(closure$ltype, this$KotlinGenerator) {
    return function (it) {
      return this$KotlinGenerator.generate_heq7lg$(it.initializer, void 0, closure$ltype.elementType);
    };
  }
  function KotlinGenerator$generate$lambda_6(this$KotlinGenerator) {
    return function (it) {
      return this$KotlinGenerator.generate_heq7lg$(it.initializer);
    };
  }
  function KotlinGenerator$generate$lambda_7(this$KotlinGenerator) {
    return function (it) {
      return this$KotlinGenerator.generate_heq7lg$(it, false);
    };
  }
  KotlinGenerator.prototype.generate_heq7lg$ = function ($receiver, par, leftType) {
    if (par === void 0)
      par = true;
    if (leftType === void 0)
      leftType = null;
    var tmp$, tmp$_0, tmp$_1;
    if (Kotlin.isType($receiver, ConstExpr))
      return this.generate_heq7lg$($receiver.expr, par, leftType);
    else if (Kotlin.isType($receiver, IntConstant_0))
      return $receiver.value.toString();
    else if (Kotlin.isType($receiver, DoubleConstant))
      return $receiver.value.toString();
    else if (Kotlin.isType($receiver, Binop)) {
      var ll = this.generate_heq7lg$($receiver.l);
      var rr = this.generate_heq7lg$($receiver.r);
      switch ($receiver.op) {
        case '+':
        case '-':
          if (Kotlin.isType($receiver.l.type, PointerFType)) {
            tmp$ = ll + '.' + this.opName_61zpoe$($receiver.op) + '(' + rr + ')';
          }
           else {
            tmp$ = ll + ' ' + $receiver.op + ' ' + rr;
          }

          break;
        case '*':
        case '/':
        case '%':
          tmp$ = ll + ' ' + $receiver.op + ' ' + rr;
          break;
        case '==':
        case '!=':
        case '<':
        case '>':
        case '<=':
        case '>=':
          tmp$ = ll + ' ' + $receiver.op + ' ' + rr;
          break;
        case '&&':
        case '||':
          tmp$ = ll + ' ' + $receiver.op + ' ' + rr;
          break;
        case '^':
          tmp$ = ll + ' xor ' + rr;
          break;
        case '&':
          tmp$ = ll + ' and ' + rr;
          break;
        case '|':
          tmp$ = ll + ' or ' + rr;
          break;
        case '<<':
          tmp$ = ll + ' shl ' + rr;
          break;
        case '>>':
          tmp$ = ll + ' shr ' + rr;
          break;
        default:throw new NotImplementedError_init('An operation is not implemented: ' + ('Binop ' + $receiver.op));
      }
      var base = tmp$;
      return par ? '(' + base + ')' : base;
    }
     else if (Kotlin.isType($receiver, AssignExpr)) {
      var ll_0 = this.generate_heq7lg$($receiver.l, false);
      var rr2 = this.generate_heq7lg$(this.castTo_8k3vt3$($receiver.r, $receiver.l.type));
      var base_0 = this.genAssignBase_vr6w72$($receiver, ll_0, rr2, this.resolve_b2mlnm$($receiver.l.type));
      var rbase = 'run { ' + base_0 + ' }.let { ' + ll_0 + ' }';
      return par ? '(' + rbase + ')' : rbase;
    }
     else if (Kotlin.isType($receiver, Id))
      return $receiver.name;
    else if (Kotlin.isType($receiver, PostfixExpr)) {
      var left = this.generate_heq7lg$($receiver.lvalue);
      switch ($receiver.op) {
        case '++':
        case '--':
          if (Kotlin.isType($receiver.lvalue.type, PointerFType)) {
            return left + '.also { ' + left + ' = ' + left + '.' + this.opName_61zpoe$($receiver.op) + '(1) }';
          }
           else {
            return left + $receiver.op;
          }

        default:throw new NotImplementedError_init('An operation is not implemented: ' + ("Don't know how to generate postfix operator '" + $receiver.op + "'"));
      }
    }
     else if (Kotlin.isType($receiver, CallExpr)) {
      var etype = this.resolve_b2mlnm$($receiver.expr.type);
      var typeArgs = Kotlin.isType(etype, FunctionFType) ? etype.args : emptyList();
      return this.generate_heq7lg$($receiver.expr) + '(' + joinToString(withIndex($receiver.args), ', ', void 0, void 0, void 0, void 0, KotlinGenerator$generate$lambda_3(typeArgs, this)) + ')';
    }
     else if (Kotlin.isType($receiver, StringConstant))
      return $receiver.raw + '.ptr';
    else if (Kotlin.isType($receiver, CharConstant))
      return $receiver.raw + '.toInt()';
    else if (Kotlin.isType($receiver, CastExpr)) {
      var type = $receiver.type;
      var exprType = $receiver.expr.type;
      var exprResolvedType = this.resolve_b2mlnm$(exprType);
      var base_1 = this.generate_heq7lg$($receiver.expr, void 0, leftType);
      var rbase_0 = Kotlin.isType(exprResolvedType, StructFType) ? base_1 + '.ptr' : base_1;
      if (Kotlin.isType(type, StructFType))
        return this.get_finalName_m0fxnx$(type) + '(' + rbase_0 + ')';
      else
        return base_1 + '.to' + type + '()';
    }
     else if (Kotlin.isType($receiver, ArrayAccessExpr))
      return this.generate_heq7lg$($receiver.expr) + '[' + this.generate_heq7lg$($receiver.index, false) + ']';
    else if (Kotlin.isType($receiver, UnaryExpr)) {
      var e = this.generate_heq7lg$($receiver.rvalue);
      switch ($receiver.op) {
        case '*':
          return '((' + e + ')[0])';
        case '&':
          return '&' + e;
        case '-':
          return '-' + e;
        case '+':
          return '+' + e;
        case '!':
          return '!(' + e + ')';
        case '~':
          return '(' + e + ').inv()';
        case '++':
        case '--':
          if (Kotlin.isType($receiver.rvalue.type, PointerFType)) {
            return e + '.' + this.opName_61zpoe$($receiver.op) + '(1).also { ' + this.__it_0 + ' -> ' + e + ' = ' + this.__it_0 + ' }';
          }
           else {
            return $receiver.op + e;
          }

        default:throw new NotImplementedError_init('An operation is not implemented: ' + ("Don't know how to generate unary operator '" + $receiver.op + "'"));
      }
    }
     else if (Kotlin.isType($receiver, ArrayInitExpr)) {
      var ltype = leftType != null ? this.resolve_b2mlnm$(leftType) : null;
      if (Kotlin.isType(ltype, StructFType)) {
        var structType = this.getProgramType_m0fxnx$(ltype);
        var structName = structType.name;
        var inits = LinkedHashMap_init();
        var index = 0;
        tmp$_0 = $receiver.items.iterator();
        while (tmp$_0.hasNext()) {
          var item = tmp$_0.next();
          var field = getOrNull(structType.fields, (tmp$_1 = index, index = tmp$_1 + 1 | 0, tmp$_1));
          if (field != null) {
            var key = field.name;
            var value = this.generate_heq7lg$(item.initializer, void 0, field.type);
            inits.put_xwzc9p$(key, value);
          }
        }
        var $receiver_0 = structType.fields;
        var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault($receiver_0, 10)), 16);
        var destination = LinkedHashMap_init_1(capacity);
        var tmp$_2;
        tmp$_2 = $receiver_0.iterator();
        while (tmp$_2.hasNext()) {
          var element = tmp$_2.next();
          var tmp$_3;
          var pair = to(element.name, (tmp$_3 = inits.get_11rb$(element.name)) != null ? tmp$_3 : this.defaultValue_b2mlnm$(element.type));
          destination.put_xwzc9p$(pair.first, pair.second);
        }
        var setFields = destination;
        var tmp$_4 = structName + 'Alloc(';
        var destination_0 = ArrayList_init_0(setFields.size);
        var tmp$_5;
        tmp$_5 = setFields.entries.iterator();
        while (tmp$_5.hasNext()) {
          var item_0 = tmp$_5.next();
          destination_0.add_11rb$(item_0.key + ' = ' + item_0.value);
        }
        return tmp$_4 + joinToString(destination_0, ', ') + ')';
      }
       else if (Kotlin.isType(ltype, PointerFType))
        return 'listOf(' + joinToString($receiver.items, ', ', void 0, void 0, void 0, void 0, KotlinGenerator$generate$lambda_4(ltype, this)) + ')';
      else if (Kotlin.isType(ltype, ArrayFType))
        return 'listOf(' + joinToString($receiver.items, ', ', void 0, void 0, void 0, void 0, KotlinGenerator$generate$lambda_5(ltype, this)) + ')';
      else {
        return '/*not a valid array init type: ' + toString(ltype) + ' */ listOf(' + joinToString($receiver.items, ', ', void 0, void 0, void 0, void 0, KotlinGenerator$generate$lambda_6(this)) + ')';
      }
    }
     else if (Kotlin.isType($receiver, ConditionalExpr))
      return '(if (' + this.generate_heq7lg$($receiver.cond) + ') ' + this.generate_heq7lg$($receiver.etrue) + ' else ' + this.generate_heq7lg$($receiver.efalse) + ')';
    else if (Kotlin.isType($receiver, FieldAccessExpr))
      return this.generate_heq7lg$($receiver.expr) + '.' + $receiver.id;
    else if (Kotlin.isType($receiver, CommaExpr))
      return 'run { ' + joinToString($receiver.exprs, '; ', void 0, void 0, void 0, void 0, KotlinGenerator$generate$lambda_7(this)) + ' }';
    else if (Kotlin.isType($receiver, SizeOfAlignExprBase))
      return '' + toString($receiver.ftype) + '.SIZE_BYTES';
    else {
      throw IllegalStateException_init(("Don't know how to generate expr " + $receiver + ' (' + Kotlin.getKClassFromExpression($receiver) + ')').toString());
    }
  };
  KotlinGenerator.prototype.get_finalName_m0fxnx$ = function ($receiver) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    return (tmp$_2 = (tmp$_1 = (tmp$ = this.getProgramType_m0fxnx$($receiver)) != null ? tmp$.name : null) != null ? tmp$_1 : (tmp$_0 = $receiver.spec.id) != null ? tmp$_0.name : null) != null ? tmp$_2 : 'unknown';
  };
  KotlinGenerator.prototype.defaultValue_b2mlnm$ = function ($receiver) {
    if (Kotlin.isType($receiver, IntFType))
      return '0';
    else if (Kotlin.isType($receiver, FloatFType))
      return '0.0';
    else if (Kotlin.isType($receiver, PointerFType))
      return 'CPointer(0)';
    else if (Kotlin.isType($receiver, TypedefFTypeRef))
      return this.defaultValue_b2mlnm$(this.resolve_b2mlnm$($receiver));
    else if (Kotlin.isType($receiver, StructFType))
      return this.getProgramType_m0fxnx$($receiver).name + 'Alloc()';
    else if (Kotlin.isType($receiver, ArrayFType))
      return '0 /*' + $receiver + '*/';
    else if (Kotlin.isType($receiver, FunctionFType))
      return '0 /*' + $receiver + '*/';
    else
      return '0 /*Unknown defaultValue for ' + Kotlin.getKClassFromExpression($receiver) + ': ' + $receiver + '*/';
  };
  KotlinGenerator.prototype.getProgramType_m0fxnx$ = function ($receiver) {
    return this.parser.getStructTypeInfo_me841z$($receiver.spec);
  };
  KotlinGenerator.prototype.getProgramType_b2mlnm$ = function ($receiver) {
    if (Kotlin.isType($receiver, StructFType))
      return this.getProgramType_m0fxnx$($receiver);
    else if (Kotlin.isType($receiver, TypedefFTypeRef))
      return this.parser.getStructTypeInfo_61zpoe$($receiver.id);
    else {
      throw IllegalStateException_init($receiver.toString().toString());
    }
  };
  KotlinGenerator.$metadata$ = {kind: Kind_CLASS, simpleName: 'KotlinGenerator', interfaces: []};
  function CIncludes() {
    this.map = LinkedHashMap_init();
  }
  CIncludes.prototype.FILE_6hosri$ = function (file, include, implementation) {
    if (implementation === void 0)
      implementation = '';
    this.map.put_xwzc9p$(file, include);
  };
  CIncludes.$metadata$ = {kind: Kind_CLASS, simpleName: 'CIncludes', interfaces: []};
  var CStdIncludes;
  var RuntimeCode;
  function StmBuilder() {
    StmBuilder$Companion_getInstance();
    this.stms_0 = ArrayList_init();
  }
  function StmBuilder$Companion() {
    StmBuilder$Companion_instance = this;
  }
  StmBuilder$Companion.prototype.invoke_2hzs7r$ = function (callback) {
    var $receiver = new StmBuilder();
    callback($receiver);
    return new Stms($receiver.stms_0);
  };
  StmBuilder$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var StmBuilder$Companion_instance = null;
  function StmBuilder$Companion_getInstance() {
    if (StmBuilder$Companion_instance === null) {
      new StmBuilder$Companion();
    }
    return StmBuilder$Companion_instance;
  }
  StmBuilder.prototype.STM_mjju9d$ = function (stm) {
    this.stms_0.add_11rb$(stm);
    return stm;
  };
  StmBuilder.prototype.STM_2q1gro$ = function (expr) {
    return this.STM_mjju9d$(new ExprStm(expr));
  };
  StmBuilder.prototype.STMS_2hzs7r$ = function (block) {
    return this.STM_mjju9d$(StmBuilder$Companion_getInstance().invoke_2hzs7r$(block));
  };
  StmBuilder.prototype.SWITCH_NO_FALLTHROUGH_3pfy6b$ = function (subject, block) {
    return this.STM_mjju9d$(SwitchBuilder$Companion_getInstance().invoke_3pfy6b$(subject, block));
  };
  StmBuilder.prototype.WHILE_bnyr5d$ = function (cond, block) {
    return this.STM_mjju9d$(new While(cond, StmBuilder$Companion_getInstance().invoke_2hzs7r$(block)));
  };
  StmBuilder.prototype.BREAK = function () {
    return this.STM_mjju9d$(new Break());
  };
  StmBuilder.prototype.CONTINUE = function () {
    return this.STM_mjju9d$(new Continue());
  };
  StmBuilder.$metadata$ = {kind: Kind_CLASS, simpleName: 'StmBuilder', interfaces: []};
  function SwitchBuilder() {
    SwitchBuilder$Companion_getInstance();
    this.stms_0 = ArrayList_init();
  }
  function SwitchBuilder$Companion() {
    SwitchBuilder$Companion_instance = this;
  }
  SwitchBuilder$Companion.prototype.invoke_3pfy6b$ = function (subject, callback) {
    var $receiver = new SwitchBuilder();
    callback($receiver);
    return new SwitchWithoutFallthrough(subject, new Stms($receiver.stms_0));
  };
  SwitchBuilder$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var SwitchBuilder$Companion_instance = null;
  function SwitchBuilder$Companion_getInstance() {
    if (SwitchBuilder$Companion_instance === null) {
      new SwitchBuilder$Companion();
    }
    return SwitchBuilder$Companion_instance;
  }
  SwitchBuilder.prototype.CASE_bnyr5d$ = function (expr, body) {
    this.CASE_asp97q$(new ConstExpr(expr), StmBuilder$Companion_getInstance().invoke_2hzs7r$(body));
  };
  SwitchBuilder.prototype.DEFAULT_2hzs7r$ = function (body) {
    this.DEFAULT_w5zual$(StmBuilder$Companion_getInstance().invoke_2hzs7r$(body));
  };
  SwitchBuilder.prototype.CASE_asp97q$ = function (expr, body) {
    var $receiver = this.stms_0;
    var element = new CaseStm(expr, body);
    $receiver.add_11rb$(element);
  };
  SwitchBuilder.prototype.DEFAULT_w5zual$ = function (body) {
    var $receiver = this.stms_0;
    var element = new DefaultStm(body);
    $receiver.add_11rb$(element);
  };
  SwitchBuilder.$metadata$ = {kind: Kind_CLASS, simpleName: 'SwitchBuilder', interfaces: []};
  function lower$lambda$lambda(closure$it) {
    return function ($receiver) {
      $receiver.STM_mjju9d$(closure$it.body);
      if (closure$it.post != null) {
        $receiver.STM_2q1gro$(closure$it.post);
      }
      return Unit;
    };
  }
  function lower$lambda$lambda$lambda$lambda(closure$it) {
    return function ($receiver) {
      $receiver.STM_2q1gro$(closure$it.post);
      return Unit;
    };
  }
  function lower$lambda$lambda$lambda(closure$it) {
    return function () {
      return StmBuilder$Companion_getInstance().invoke_2hzs7r$(lower$lambda$lambda$lambda$lambda(closure$it));
    };
  }
  function lower$lambda(this$lower) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      var it = this$lower;
      tmp$ = it.init;
      if (tmp$ != null)
        if (Kotlin.isType(tmp$, Decl))
          $receiver.STM_mjju9d$(it.init);
        else if (Kotlin.isType(tmp$, Expr))
          $receiver.STM_2q1gro$(it.init);
        else {
          throw IllegalStateException_init(('Not a Decl or Expr in for init init=' + toString(it.init) + ' (' + Kotlin.getKClassFromExpression(it.init) + ')').toString());
        }
      var $receiver_0 = $receiver.WHILE_bnyr5d$((tmp$_0 = it.cond) != null ? tmp$_0 : IntConstant(1), lower$lambda$lambda(it));
      if (it.post != null) {
        $receiver_0.onContinue = lower$lambda$lambda$lambda(it);
      }
      return Unit;
    };
  }
  function lower($receiver) {
    return StmBuilder$Companion_getInstance().invoke_2hzs7r$(lower$lambda($receiver));
  }
  function NodeVisitor() {
  }
  NodeVisitor.prototype.visit_pdej6t$ = function (it) {
    var tmp$;
    if (it != null) {
      tmp$ = it.iterator();
      while (tmp$.hasNext()) {
        var v = tmp$.next();
        this.visit_dixj5a$(v);
      }
    }
  };
  NodeVisitor.prototype.visit_dixj5a$ = function (it) {
    if (it != null)
      if (Kotlin.isType(it, Decl))
        this.visit_2q0fdl$(it);
      else if (Kotlin.isType(it, Stm))
        this.visit_w5zual$(it);
      else if (Kotlin.isType(it, Expr))
        this.visit_2q1gro$(it);
      else if (Kotlin.isType(it, Declarator))
        this.visit_oov7xc$(it);
      else if (Kotlin.isType(it, TypeSpecifier))
        this.visit_oeligb$(it);
      else if (Kotlin.isType(it, CParam))
        this.visit_ckdxgn$(it);
      else if (Kotlin.isType(it, Pointer))
        this.visit_t58ii6$(it);
      else if (Kotlin.isType(it, StructDeclaration))
        this.visit_5dk7l6$(it);
      else if (Kotlin.isType(it, DesignOptInit))
        this.visit_1rc0hi$(it);
      else if (Kotlin.isType(it, DesignatorList))
        this.visit_8z4nun$(it);
      else if (Kotlin.isType(it, FieldAccessDesignator))
        this.visit_ahev19$(it);
      else if (Kotlin.isType(it, ArrayAccessDesignator))
        this.visit_pvb936$(it);
      else if (Kotlin.isType(it, ParameterDecl))
        this.visit_ir5e3o$(it);
      else if (Kotlin.isType(it, IdDecl))
        this.visit_9fn3fw$(it);
      else if (Kotlin.isType(it, InitDeclarator))
        this.visit_fqs1cg$(it);
      else if (Kotlin.isType(it, AbstractDeclarator))
        this.visit_d6yb6m$(it);
      else if (Kotlin.isType(it, StructDeclarator))
        this.visit_rbltp1$(it);
      else {
        throw IllegalStateException_init(('Unknown node ' + Kotlin.getKClassFromExpression(it) + ': ' + toString(it)).toString());
      }
  };
  NodeVisitor.prototype.visit_w5zual$ = function (it) {
    if (Kotlin.isType(it, Decl))
      this.visit_2q0fdl$(it);
    else if (Kotlin.isType(it, Stms))
      this.visit_2qabjq$(it);
    else if (Kotlin.isType(it, For))
      this.visit_w5zkje$(it);
    else if (Kotlin.isType(it, While))
      this.visit_dnrbhe$(it);
    else if (Kotlin.isType(it, DoWhile))
      this.visit_57b4tl$(it);
    else if (Kotlin.isType(it, IfElse))
      this.visit_9eipp7$(it);
    else if (Kotlin.isType(it, Return))
      this.visit_54tppd$(it);
    else if (Kotlin.isType(it, Declaration))
      this.visit_fxcnl7$(it);
    else if (Kotlin.isType(it, ExprStm))
      this.visit_e4ejjc$(it);
    else if (Kotlin.isType(it, FuncDecl))
      this.visit_4sbxkz$(it);
    else if (Kotlin.isType(it, Break))
      this.visit_dcdxo0$(it);
    else if (Kotlin.isType(it, Continue))
      this.visit_y1rfiu$(it);
    else if (Kotlin.isType(it, Goto))
      this.visit_2q2k5u$(it);
    else if (Kotlin.isType(it, LabeledStm))
      this.visit_dcohhk$(it);
    else if (Kotlin.isType(it, Switch))
      this.visit_4e2ul9$(it);
    else if (Kotlin.isType(it, CaseStm))
      this.visit_q3090z$(it);
    else if (Kotlin.isType(it, DefaultStm))
      this.visit_j9bqhy$(it);
    else {
      throw IllegalStateException_init(('Unknown stm ' + Kotlin.getKClassFromExpression(it) + ': ' + it).toString());
    }
  };
  NodeVisitor.prototype.visit_2q1gro$ = function (it) {
    if (Kotlin.isType(it, Binop))
      this.visit_dc8dsp$(it);
    else if (Kotlin.isType(it, UnaryExpr))
      this.visit_czcxyt$(it);
    else if (Kotlin.isType(it, Id))
      this.visit_ny89hm$(it);
    else if (Kotlin.isType(it, CallExpr))
      this.visit_ugotem$(it);
    else if (Kotlin.isType(it, PostfixExpr))
      this.visit_gtket7$(it);
    else if (Kotlin.isType(it, CastExpr))
      this.visit_r0z3wd$(it);
    else if (Kotlin.isType(it, ArrayAccessExpr))
      this.visit_4j96w3$(it);
    else if (Kotlin.isType(it, IntConstant_0))
      this.visit_e8khgc$(it);
    else if (Kotlin.isType(it, DoubleConstant))
      this.visit_xpyqrg$(it);
    else if (Kotlin.isType(it, CharConstant))
      this.visit_xpvu0n$(it);
    else if (Kotlin.isType(it, StringConstant))
      this.visit_x3nwhw$(it);
    else if (Kotlin.isType(it, ArrayInitExpr))
      this.visit_cftk5r$(it);
    else if (Kotlin.isType(it, ConstExpr))
      this.visit_a9sg5z$(it);
    else if (Kotlin.isType(it, CommaExpr))
      this.visit_s2wk11$(it);
    else if (Kotlin.isType(it, AssignExpr))
      this.visit_dj24y5$(it);
    else if (Kotlin.isType(it, ConditionalExpr))
      this.visit_59yewk$(it);
    else if (Kotlin.isType(it, FieldAccessExpr))
      this.visit_8b5cak$(it);
    else if (Kotlin.isType(it, SizeOfAlignTypeExpr))
      this.visit_k15le5$(it);
    else if (Kotlin.isType(it, SizeOfAlignExprExpr))
      this.visit_ls56g$(it);
    else {
      throw IllegalStateException_init(('Unknown expr ' + Kotlin.getKClassFromExpression(it) + ': ' + it).toString());
    }
  };
  NodeVisitor.prototype.visit_ls56g$ = function (it) {
    this.visit_2q1gro$(it.expr);
  };
  NodeVisitor.prototype.visit_k15le5$ = function (it) {
    this.visit_w8onf8$(it.typeName);
    this.visit_de2dm9$(it.ftype);
  };
  NodeVisitor.prototype.visit_oov7xc$ = function (it) {
    if (Kotlin.isType(it, ParameterDeclarator))
      this.visit_uyn3o5$(it);
    else if (Kotlin.isType(it, DeclaratorWithPointer))
      this.visit_xofas7$(it);
    else if (Kotlin.isType(it, IdentifierDeclarator))
      this.visit_bvybc9$(it);
    else if (Kotlin.isType(it, ArrayDeclarator))
      this.visit_t7y1gb$(it);
    else {
      throw IllegalStateException_init(('Unknown expr ' + Kotlin.getKClassFromExpression(it) + ': ' + it).toString());
    }
  };
  NodeVisitor.prototype.visit_t7y1gb$ = function (it) {
    this.visit_oov7xc$(it.base);
    this.visit_dixj5a$(it.expr);
    this.visit_pdej6t$(it.typeQualifiers);
  };
  NodeVisitor.prototype.visit_8b5cak$ = function (it) {
    this.visit_2q1gro$(it.expr);
    this.visit_9fn3fw$(it.id);
  };
  NodeVisitor.prototype.visit_59yewk$ = function (it) {
    this.visit_2q1gro$(it.cond);
    this.visit_2q1gro$(it.etrue);
    this.visit_2q1gro$(it.efalse);
  };
  NodeVisitor.prototype.visit_dj24y5$ = function (it) {
    this.visit_2q1gro$(it.l);
    this.visit_2q1gro$(it.r);
  };
  NodeVisitor.prototype.visit_s2wk11$ = function (it) {
    this.visit_pdej6t$(it.exprs);
  };
  NodeVisitor.prototype.visit_a9sg5z$ = function (it) {
    this.visit_2q1gro$(it.expr);
  };
  NodeVisitor.prototype.visit_9fn3fw$ = function (it) {
  };
  NodeVisitor.prototype.visit_ir5e3o$ = function (it) {
    this.visit_oov7xc$(it.declarator);
    this.visit_ojkvrr$(it.specs);
  };
  NodeVisitor.prototype.visit_uyn3o5$ = function (it) {
    this.visit_oov7xc$(it.base);
    this.visit_pdej6t$(it.decls);
  };
  NodeVisitor.prototype.visit_ahev19$ = function (it) {
    this.visit_ny89hm$(it.field);
  };
  NodeVisitor.prototype.visit_pvb936$ = function (it) {
    this.visit_a9sg5z$(it.constant);
  };
  NodeVisitor.prototype.visit_8z4nun$ = function (it) {
    this.visit_pdej6t$(it.list);
  };
  NodeVisitor.prototype.visit_1rc0hi$ = function (it) {
    this.visit_dixj5a$(it.design);
    this.visit_2q1gro$(it.initializer);
  };
  NodeVisitor.prototype.visit_5dk7l6$ = function (it) {
    this.visit_pdej6t$(it.declarators);
    this.visit_ojkvrr$(it.specifiers);
  };
  NodeVisitor.prototype.visit_rbltp1$ = function (it) {
    this.visit_dixj5a$(it.declarator);
    this.visit_dixj5a$(it.bit);
  };
  NodeVisitor.prototype.visit_de2dm9$ = function (it) {
    if (Kotlin.isType(it, IntFType))
      this.visit_inm5vk$(it);
    else if (Kotlin.isType(it, FloatFType))
      this.visit_nc0zhv$(it);
    else if (Kotlin.isType(it, PointerFType))
      this.visit_9tchiq$(it);
    else if (Kotlin.isType(it, TypedefFTypeRef))
      this.visit_e3ywc1$(it);
    else {
      throw IllegalStateException_init(('Unknown ftype ' + Kotlin.getKClassFromExpression(it) + ': ' + it).toString());
    }
  };
  NodeVisitor.prototype.visit_nc0zhv$ = function (it) {
  };
  NodeVisitor.prototype.visit_e3ywc1$ = function (it) {
  };
  NodeVisitor.prototype.visit_oeligb$ = function (it) {
  };
  NodeVisitor.prototype.visit_q3090z$ = function (it) {
    this.visit_a9sg5z$(it.expr);
    this.visit_w5zual$(it.stm);
  };
  NodeVisitor.prototype.visit_j9bqhy$ = function (it) {
    this.visit_w5zual$(it.stm);
  };
  NodeVisitor.prototype.visit_4e2ul9$ = function (it) {
    this.visit_2q1gro$(it.subject);
    this.visit_2qabjq$(it.body);
  };
  NodeVisitor.prototype.visitLabel_61zpoe$ = function (it) {
  };
  NodeVisitor.prototype.visit_dcohhk$ = function (it) {
    this.visitLabel_61zpoe$(it.id.name);
    this.visit_w5zual$(it.stm);
  };
  NodeVisitor.prototype.visit_2q2k5u$ = function (it) {
    this.visitLabel_61zpoe$(it.id.name);
  };
  NodeVisitor.prototype.visit_cftk5r$ = function (it) {
    this.visit_pdej6t$(it.items);
  };
  NodeVisitor.prototype.visit_ojkvrr$ = function (it) {
    this.visit_pdej6t$(it.items);
  };
  NodeVisitor.prototype.visit_w8onf8$ = function (it) {
    this.visit_dixj5a$(it.abstractDecl);
    this.visit_ojkvrr$(it.specifiers);
  };
  NodeVisitor.prototype.visit_inm5vk$ = function (it) {
  };
  NodeVisitor.prototype.visit_9tchiq$ = function (it) {
    this.visit_de2dm9$(it.elementType);
  };
  NodeVisitor.prototype.visit_ckdxgn$ = function (it) {
    this.visit_de2dm9$(it.type);
  };
  NodeVisitor.prototype.visit_xpvu0n$ = function (it) {
  };
  NodeVisitor.prototype.visit_x3nwhw$ = function (it) {
  };
  NodeVisitor.prototype.visit_e8khgc$ = function (it) {
  };
  NodeVisitor.prototype.visit_xpyqrg$ = function (it) {
  };
  NodeVisitor.prototype.visit_ugotem$ = function (it) {
    this.visit_2q1gro$(it.expr);
    this.visit_pdej6t$(it.args);
  };
  NodeVisitor.prototype.visit_r0z3wd$ = function (it) {
    this.visit_de2dm9$(it.type);
    this.visit_2q1gro$(it.expr);
  };
  NodeVisitor.prototype.visit_4j96w3$ = function (it) {
    this.visit_2q1gro$(it.expr);
    this.visit_2q1gro$(it.index);
  };
  NodeVisitor.prototype.visit_dc8dsp$ = function (it) {
    this.visit_2q1gro$(it.l);
    this.visit_2q1gro$(it.r);
  };
  NodeVisitor.prototype.visit_gtket7$ = function (it) {
    this.visit_2q1gro$(it.lvalue);
  };
  NodeVisitor.prototype.visit_czcxyt$ = function (it) {
    this.visit_2q1gro$(it.rvalue);
  };
  NodeVisitor.prototype.visit_ny89hm$ = function (it) {
  };
  NodeVisitor.prototype.visit_la2m85$ = function (it) {
  };
  NodeVisitor.prototype.visit_2qabjq$ = function (it) {
    this.visit_pdej6t$(it.stms);
  };
  NodeVisitor.prototype.visit_w5zkje$ = function (it) {
    this.visit_dixj5a$(it.init);
    this.visit_dixj5a$(it.cond);
    this.visit_dixj5a$(it.post);
    this.visit_w5zual$(it.body);
  };
  NodeVisitor.prototype.visit_dnrbhe$ = function (it) {
    this.visit_2q1gro$(it.cond);
    this.visit_w5zual$(it.body);
  };
  NodeVisitor.prototype.visit_57b4tl$ = function (it) {
    this.visit_w5zual$(it.body);
    this.visit_2q1gro$(it.cond);
  };
  NodeVisitor.prototype.visit_9eipp7$ = function (it) {
    this.visit_2q1gro$(it.cond);
    this.visit_w5zual$(it.strue);
    this.visit_dixj5a$(it.sfalse);
  };
  NodeVisitor.prototype.visit_dcdxo0$ = function (it) {
  };
  NodeVisitor.prototype.visit_y1rfiu$ = function (it) {
  };
  NodeVisitor.prototype.visit_54tppd$ = function (it) {
    this.visit_dixj5a$(it.expr);
  };
  NodeVisitor.prototype.visit_e4ejjc$ = function (it) {
    this.visit_dixj5a$(it.expr);
  };
  NodeVisitor.prototype.visit_2q0fdl$ = function (it) {
    if (Kotlin.isType(it, FuncDecl))
      this.visit_4sbxkz$(it);
    else if (Kotlin.isType(it, Declaration))
      this.visit_fxcnl7$(it);
    else {
      throw IllegalStateException_init(('Unknown decl ' + Kotlin.getKClassFromExpression(it) + ': ' + it).toString());
    }
  };
  NodeVisitor.prototype.visit_fxcnl7$ = function (it) {
    this.visit_ojkvrr$(it.specs);
    this.visit_pdej6t$(it.initDeclaratorList);
  };
  NodeVisitor.prototype.visit_4sbxkz$ = function (it) {
    this.visit_ojkvrr$(it.rettype);
    this.visit_pdej6t$(it.params);
    this.visit_2qabjq$(it.body);
  };
  NodeVisitor.prototype.visit_xofas7$ = function (it) {
    this.visit_oov7xc$(it.declarator);
    this.visit_t58ii6$(it.pointer);
  };
  NodeVisitor.prototype.visit_t58ii6$ = function (it) {
    this.visit_dixj5a$(it.parent);
    this.visit_pdej6t$(it.qualifiers);
  };
  NodeVisitor.prototype.visit_fqs1cg$ = function (it) {
    this.visit_oov7xc$(it.decl);
    this.visit_dixj5a$(it.initializer);
  };
  NodeVisitor.prototype.visit_bvybc9$ = function (it) {
    this.visit_9fn3fw$(it.id);
  };
  NodeVisitor.prototype.visit_d6yb6m$ = function (it) {
    this.visit_dixj5a$(it.ptr);
  };
  NodeVisitor.prototype.visit_unjmr9$ = function (it) {
    this.visit_pdej6t$(it.decls);
  };
  NodeVisitor.$metadata$ = {kind: Kind_CLASS, simpleName: 'NodeVisitor', interfaces: []};
  function StateMachineLowerer() {
    StateMachineLowerer_instance = this;
  }
  function StateMachineLowerer$Output() {
    this.decls = ArrayList_init();
    this.stms = ArrayList_init();
    this.nlabel = 0;
    this.labelsByName = LinkedHashMap_init();
  }
  StateMachineLowerer$Output.prototype.label = function () {
    var tmp$;
    return new Label((tmp$ = this.nlabel, this.nlabel = tmp$ + 1 | 0, tmp$));
  };
  StateMachineLowerer$Output.prototype.label_61zpoe$ = function (it) {
    var $receiver = this.labelsByName;
    var tmp$;
    var value = $receiver.get_11rb$(it);
    if (value == null) {
      var answer = this.label();
      $receiver.put_xwzc9p$(it, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    return tmp$;
  };
  StateMachineLowerer$Output.prototype.add_2q0fdl$ = function (it) {
    this.decls.add_11rb$(it);
  };
  StateMachineLowerer$Output.prototype.add_fxcnl7$ = function (it) {
    var tmp$;
    var tmp$_0 = this.decls;
    var tmp$_1 = it.specs;
    var $receiver = it.initDeclaratorList;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$_2;
    tmp$_2 = $receiver.iterator();
    while (tmp$_2.hasNext()) {
      var item = tmp$_2.next();
      destination.add_11rb$(item.copy_g2gbys$(void 0, null));
    }
    var element = new Declaration(tmp$_1, destination);
    tmp$_0.add_11rb$(element);
    tmp$ = it.initDeclaratorList.iterator();
    while (tmp$.hasNext()) {
      var i = tmp$.next();
      if (i.initializer != null) {
        this.add_w5zual$(new ExprStm(new AssignExpr(new Id(getName(i.decl), i.type), '=', i.initializer)));
      }
    }
  };
  StateMachineLowerer$Output.prototype.add_w5zual$ = function (it) {
    if (Kotlin.isType(it, Declaration)) {
      this.add_fxcnl7$(it);
    }
     else {
      this.stms.add_11rb$(it);
    }
  };
  StateMachineLowerer$Output.prototype.add_vivee5$ = function (label) {
    this.add_w5zual$(new LowLabel(label));
  };
  StateMachineLowerer$Output.$metadata$ = {kind: Kind_CLASS, simpleName: 'Output', interfaces: []};
  function StateMachineLowerer$lower$ObjectLiteral(closure$out) {
    this.closure$out = closure$out;
    NodeVisitor.call(this);
  }
  StateMachineLowerer$lower$ObjectLiteral.prototype.visit_dcohhk$ = function (it) {
    this.closure$out.label_61zpoe$(it.id.name);
  };
  StateMachineLowerer$lower$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [NodeVisitor]};
  StateMachineLowerer.prototype.lower_2qabjq$ = function (stms) {
    var tmp$;
    var out = new StateMachineLowerer$Output();
    (new StateMachineLowerer$lower$ObjectLiteral(out)).visit_2qabjq$(stms);
    tmp$ = stms.stms.iterator();
    while (tmp$.hasNext()) {
      var s = tmp$.next();
      this.processStm_0(out, s);
    }
    return out;
  };
  StateMachineLowerer.prototype.processStm_0 = function ($receiver, it) {
    var tmp$, tmp$_0;
    if (Kotlin.isType(it, Declaration))
      $receiver.add_fxcnl7$(it);
    else if (Kotlin.isType(it, Stms)) {
      tmp$ = it.stms.iterator();
      while (tmp$.hasNext()) {
        var s = tmp$.next();
        this.processStm_0($receiver, s);
      }
    }
     else if (Kotlin.isType(it, IfElse)) {
      var elseLabel = $receiver.label();
      var endLabel = it.sfalse != null ? $receiver.label() : null;
      $receiver.add_w5zual$(new LowIfGoto(not(it.cond), elseLabel));
      this.processStm_0($receiver, it.strue);
      if (endLabel != null) {
        $receiver.add_w5zual$(new LowGoto(endLabel));
      }
      $receiver.add_vivee5$(elseLabel);
      if (endLabel != null && it.sfalse != null) {
        this.processStm_0($receiver, it.sfalse);
        $receiver.add_vivee5$(endLabel);
      }
    }
     else if (Kotlin.isType(it, Switch)) {
      var $receiver_0 = it.bodyCases;
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_1;
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var item = tmp$_1.next();
        destination.add_11rb$(to(item.optExpr, $receiver.label()));
      }
      var labeledCases = destination;
      $receiver.add_w5zual$(new LowSwitchGoto(it.subject, toMap_0(labeledCases)));
      tmp$_0 = zip(it.bodyCases, labeledCases).iterator();
      while (tmp$_0.hasNext()) {
        var tmp$_2 = tmp$_0.next();
        var case_0 = tmp$_2.component1(), lc = tmp$_2.component2();
        var label = lc.component2();
        $receiver.add_vivee5$(label);
        $receiver.add_w5zual$(case_0.stm);
      }
    }
     else if (Kotlin.isType(it, While)) {
      var condLabel = $receiver.label();
      var endLabel_0 = $receiver.label();
      $receiver.add_vivee5$(condLabel);
      $receiver.add_w5zual$(new LowIfGoto(not(it.cond), endLabel_0));
      this.processStm_0($receiver, it.body);
      $receiver.add_w5zual$(new LowGoto(condLabel));
      $receiver.add_vivee5$(endLabel_0);
    }
     else if (Kotlin.isType(it, For))
      this.processStm_0($receiver, lower(it));
    else if (Kotlin.isType(it, LabeledStm)) {
      $receiver.add_w5zual$(new LowLabel($receiver.label_61zpoe$(it.id.name)));
      this.processStm_0($receiver, it.stm);
    }
     else if (Kotlin.isType(it, Goto)) {
      var $receiver_1 = $receiver.labelsByName;
      var key = it.id.name;
      var tmp$_3;
      if ((Kotlin.isType(tmp$_3 = $receiver_1, Map) ? tmp$_3 : throwCCE()).containsKey_11rb$(key)) {
        $receiver.add_w5zual$(new LowGoto($receiver.label_61zpoe$(it.id.name)));
      }
       else {
        $receiver.add_w5zual$(new RawStm('error(' + get_cquoted('label ' + it.id.name + " doesn't exist") + ')'));
      }
    }
     else if (Kotlin.isType(it, ExprStm))
      $receiver.add_w5zual$(it);
    else if (Kotlin.isType(it, Return))
      $receiver.add_w5zual$(it);
    else {
      $receiver.add_w5zual$(new CommentStm('TODO ' + it));
    }
  };
  StateMachineLowerer.$metadata$ = {kind: Kind_OBJECT, simpleName: 'StateMachineLowerer', interfaces: []};
  var StateMachineLowerer_instance = null;
  function StateMachineLowerer_getInstance() {
    if (StateMachineLowerer_instance === null) {
      new StateMachineLowerer();
    }
    return StateMachineLowerer_instance;
  }
  function Label(id, name) {
    if (name === void 0)
      name = 'label' + id;
    this.id = id;
    this.name = name;
  }
  Label.$metadata$ = {kind: Kind_CLASS, simpleName: 'Label', interfaces: []};
  Label.prototype.component1 = function () {
    return this.id;
  };
  Label.prototype.component2 = function () {
    return this.name;
  };
  Label.prototype.copy_19mbxw$ = function (id, name) {
    return new Label(id === void 0 ? this.id : id, name === void 0 ? this.name : name);
  };
  Label.prototype.toString = function () {
    return 'Label(id=' + Kotlin.toString(this.id) + (', name=' + Kotlin.toString(this.name)) + ')';
  };
  Label.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    return result;
  };
  Label.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.name, other.name)))));
  };
  function LowLabel(label) {
    Stm.call(this);
    this.label = label;
  }
  LowLabel.prototype.visitChildren_7xaucg$ = function (visit) {
  };
  LowLabel.$metadata$ = {kind: Kind_CLASS, simpleName: 'LowLabel', interfaces: [Stm]};
  LowLabel.prototype.component1 = function () {
    return this.label;
  };
  LowLabel.prototype.copy_vivee5$ = function (label) {
    return new LowLabel(label === void 0 ? this.label : label);
  };
  LowLabel.prototype.toString = function () {
    return 'LowLabel(label=' + Kotlin.toString(this.label) + ')';
  };
  LowLabel.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.label) | 0;
    return result;
  };
  LowLabel.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.label, other.label))));
  };
  function LowGoto(label) {
    Stm.call(this);
    this.label = label;
  }
  LowGoto.prototype.visitChildren_7xaucg$ = function (visit) {
  };
  LowGoto.$metadata$ = {kind: Kind_CLASS, simpleName: 'LowGoto', interfaces: [Stm]};
  LowGoto.prototype.component1 = function () {
    return this.label;
  };
  LowGoto.prototype.copy_vivee5$ = function (label) {
    return new LowGoto(label === void 0 ? this.label : label);
  };
  LowGoto.prototype.toString = function () {
    return 'LowGoto(label=' + Kotlin.toString(this.label) + ')';
  };
  LowGoto.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.label) | 0;
    return result;
  };
  LowGoto.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.label, other.label))));
  };
  function LowIfGoto(cond, label) {
    Stm.call(this);
    this.cond = cond;
    this.label = label;
  }
  LowIfGoto.prototype.visitChildren_7xaucg$ = function (visit) {
    visit.invoke_dixj5a$(this.cond);
  };
  LowIfGoto.$metadata$ = {kind: Kind_CLASS, simpleName: 'LowIfGoto', interfaces: [Stm]};
  LowIfGoto.prototype.component1 = function () {
    return this.cond;
  };
  LowIfGoto.prototype.component2 = function () {
    return this.label;
  };
  LowIfGoto.prototype.copy_gw32e3$ = function (cond, label) {
    return new LowIfGoto(cond === void 0 ? this.cond : cond, label === void 0 ? this.label : label);
  };
  LowIfGoto.prototype.toString = function () {
    return 'LowIfGoto(cond=' + Kotlin.toString(this.cond) + (', label=' + Kotlin.toString(this.label)) + ')';
  };
  LowIfGoto.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.cond) | 0;
    result = result * 31 + Kotlin.hashCode(this.label) | 0;
    return result;
  };
  LowIfGoto.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.cond, other.cond) && Kotlin.equals(this.label, other.label)))));
  };
  function LowSwitchGoto(subject, map) {
    Stm.call(this);
    this.subject = subject;
    this.map = map;
  }
  LowSwitchGoto.prototype.visitChildren_7xaucg$ = function (visit) {
    var tmp$;
    visit.invoke_dixj5a$(this.subject);
    tmp$ = this.map.keys.iterator();
    while (tmp$.hasNext()) {
      var v = tmp$.next();
      visit.invoke_dixj5a$(v);
    }
  };
  LowSwitchGoto.$metadata$ = {kind: Kind_CLASS, simpleName: 'LowSwitchGoto', interfaces: [Stm]};
  LowSwitchGoto.prototype.component1 = function () {
    return this.subject;
  };
  LowSwitchGoto.prototype.component2 = function () {
    return this.map;
  };
  LowSwitchGoto.prototype.copy_k71eeh$ = function (subject, map) {
    return new LowSwitchGoto(subject === void 0 ? this.subject : subject, map === void 0 ? this.map : map);
  };
  LowSwitchGoto.prototype.toString = function () {
    return 'LowSwitchGoto(subject=' + Kotlin.toString(this.subject) + (', map=' + Kotlin.toString(this.map)) + ')';
  };
  LowSwitchGoto.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.subject) | 0;
    result = result * 31 + Kotlin.hashCode(this.map) | 0;
    return result;
  };
  LowSwitchGoto.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.subject, other.subject) && Kotlin.equals(this.map, other.map)))));
  };
  function removeFallthrough$lambda$lambda$lambda(it) {
    return Kotlin.isType(it.value, CaseStm) ? -1 : 1;
  }
  var compareBy$lambda_0 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function Comparator$ObjectLiteral_0(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_0.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_0.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  function removeFallthrough$lambda$lambda(closure$filteredStms, closure$tempVar) {
    return function ($receiver) {
      var tmp$;
      tmp$ = sortedWith(withIndex(closure$filteredStms), new Comparator$ObjectLiteral_0(compareBy$lambda_0(removeFallthrough$lambda$lambda$lambda))).iterator();
      while (tmp$.hasNext()) {
        var tmp$_0 = tmp$.next();
        var index = tmp$_0.component1(), stm = tmp$_0.component2();
        if (Kotlin.isType(stm, CaseStm))
          $receiver.CASE_asp97q$(stm.expr, new ExprStm(new AssignExpr(closure$tempVar, '=', IntConstant(index))));
        else if (Kotlin.isType(stm, DefaultStm))
          $receiver.DEFAULT_w5zual$(new ExprStm(new AssignExpr(closure$tempVar, '=', IntConstant(index))));
      }
      return Unit;
    };
  }
  function removeFallthrough$lambda$lambda$lambda$lambda(closure$stm, closure$tempVar, closure$index) {
    return function ($receiver) {
      $receiver.STM_mjju9d$(closure$stm.stm);
      $receiver.STM_2q1gro$(new AssignExpr(closure$tempVar, '=', IntConstant(closure$index + 1 | 0)));
      $receiver.CONTINUE();
      return Unit;
    };
  }
  function removeFallthrough$lambda$lambda$lambda_0(closure$filteredStms, closure$tempVar) {
    return function ($receiver) {
      var index = 0;
      for (var tmp$ = closure$filteredStms.iterator(); tmp$.hasNext(); ++index) {
        var stm = tmp$.next();
        $receiver.CASE_bnyr5d$(IntConstant(index), removeFallthrough$lambda$lambda$lambda$lambda(stm, closure$tempVar, index));
      }
      return Unit;
    };
  }
  function removeFallthrough$lambda$lambda_0(closure$tempVar, closure$filteredStms) {
    return function ($receiver) {
      $receiver.SWITCH_NO_FALLTHROUGH_3pfy6b$(closure$tempVar, removeFallthrough$lambda$lambda$lambda_0(closure$filteredStms, closure$tempVar));
      $receiver.BREAK();
      return Unit;
    };
  }
  function removeFallthrough$lambda(this$removeFallthrough, closure$ctx) {
    return function ($receiver) {
      var it = this$removeFallthrough;
      var tempVarName = closure$ctx.gen_puj7f4$('when', '_case');
      var tempVarType = FType$Companion_getInstance().INT;
      var tempVar = new Id(tempVarName, tempVarType);
      $receiver.STM_mjju9d$(Declaration_0(tempVarType, tempVarName, IntConstant(-1)));
      var $receiver_0 = it.body.stms;
      var destination = ArrayList_init();
      var tmp$;
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (Kotlin.isType(element, DefaultCaseStm))
          destination.add_11rb$(element);
      }
      var filteredStms = destination;
      $receiver.SWITCH_NO_FALLTHROUGH_3pfy6b$(it.subject, removeFallthrough$lambda$lambda(filteredStms, tempVar));
      $receiver.WHILE_bnyr5d$(IntConstant(1), removeFallthrough$lambda$lambda_0(tempVar, filteredStms)).addScope = false;
      return Unit;
    };
  }
  function removeFallthrough($receiver, ctx) {
    return StmBuilder$Companion_getInstance().invoke_2hzs7r$(removeFallthrough$lambda($receiver, ctx));
  }
  function TempContext() {
    this.lastId = 0;
  }
  TempContext.prototype.gen_puj7f4$ = function (prefix, suffix) {
    if (suffix === void 0)
      suffix = '';
    var tmp$;
    return prefix + (tmp$ = this.lastId, this.lastId = tmp$ + 1 | 0, tmp$) + suffix;
  };
  TempContext.$metadata$ = {kind: Kind_CLASS, simpleName: 'TempContext', interfaces: []};
  function containsBreakOrContinue$ObjectLiteral() {
    NodeVisitor.call(this);
    this.contains = false;
  }
  containsBreakOrContinue$ObjectLiteral.prototype.visit_dcdxo0$ = function (it) {
    this.contains = true;
  };
  containsBreakOrContinue$ObjectLiteral.prototype.visit_y1rfiu$ = function (it) {
    this.contains = true;
  };
  containsBreakOrContinue$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [NodeVisitor]};
  function containsBreakOrContinue($receiver) {
    var $receiver_0 = new containsBreakOrContinue$ObjectLiteral();
    $receiver_0.visit_dixj5a$($receiver);
    return $receiver_0.contains;
  }
  function isHexDigit($receiver) {
    return (new CharRange(48, 57)).contains_mef7kx$($receiver) || (new CharRange(97, 102)).contains_mef7kx$($receiver) || (new CharRange(65, 70)).contains_mef7kx$($receiver);
  }
  function isDigit($receiver) {
    return (new CharRange(48, 57)).contains_mef7kx$($receiver);
  }
  function isAlphaLC($receiver) {
    return (new CharRange(97, 122)).contains_mef7kx$($receiver);
  }
  function isAlphaUC($receiver) {
    return (new CharRange(65, 90)).contains_mef7kx$($receiver);
  }
  function isAlpha($receiver) {
    return isAlphaLC($receiver) || isAlphaUC($receiver);
  }
  function isAlphaOrUnderscore($receiver) {
    return isAlpha($receiver) || $receiver === 95;
  }
  function isAlnumOrUnderscore($receiver) {
    return isAlphaOrUnderscore($receiver) || isDigit($receiver);
  }
  function isWhitespaceFast($receiver) {
    return $receiver === 32 || $receiver === 9 || $receiver === 13 || $receiver === 10 || $receiver === 160;
  }
  function Indenter_0() {
    this.cmds = ArrayList_init();
  }
  function Indenter$Indent() {
    Indenter$Indent_instance = this;
  }
  Indenter$Indent.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Indent', interfaces: []};
  var Indenter$Indent_instance = null;
  function Indenter$Indent_getInstance() {
    if (Indenter$Indent_instance === null) {
      new Indenter$Indent();
    }
    return Indenter$Indent_instance;
  }
  function Indenter$Unindent() {
    Indenter$Unindent_instance = this;
  }
  Indenter$Unindent.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Unindent', interfaces: []};
  var Indenter$Unindent_instance = null;
  function Indenter$Unindent_getInstance() {
    if (Indenter$Unindent_instance === null) {
      new Indenter$Unindent();
    }
    return Indenter$Unindent_instance;
  }
  Indenter_0.prototype.line_61zpoe$ = function (str) {
    this.cmds.add_11rb$(str);
  };
  Indenter_0.prototype.line_a4mwiz$ = defineInlineFunction('ktcc.com.soywiz.ktcc.util.Indenter.line_a4mwiz$', wrapFunction(function () {
    var Indenter = _.com.soywiz.ktcc.util.Indenter;
    return function (str, callback) {
      this.line_61zpoe$(str + ' {');
      var $receiver = this.cmds;
      var element = Indenter.Indent;
      $receiver.add_11rb$(element);
      try {
        callback();
      }
      finally {
        var $receiver_0 = this.cmds;
        var element_0 = Indenter.Unindent;
        $receiver_0.add_11rb$(element_0);
      }
      this.line_61zpoe$('}');
    };
  }));
  Indenter_0.prototype.indent = defineInlineFunction('ktcc.com.soywiz.ktcc.util.Indenter.indent', wrapFunction(function () {
    var Indenter = _.com.soywiz.ktcc.util.Indenter;
    return function () {
      var $receiver = this.cmds;
      var element = Indenter.Indent;
      $receiver.add_11rb$(element);
    };
  }));
  Indenter_0.prototype.unindent = defineInlineFunction('ktcc.com.soywiz.ktcc.util.Indenter.unindent', wrapFunction(function () {
    var Indenter = _.com.soywiz.ktcc.util.Indenter;
    return function () {
      var $receiver = this.cmds;
      var element = Indenter.Unindent;
      $receiver.add_11rb$(element);
    };
  }));
  Indenter_0.prototype.indent_klfg04$ = defineInlineFunction('ktcc.com.soywiz.ktcc.util.Indenter.indent_klfg04$', wrapFunction(function () {
    var Indenter = _.com.soywiz.ktcc.util.Indenter;
    return function (callback) {
      var $receiver = this.cmds;
      var element = Indenter.Indent;
      $receiver.add_11rb$(element);
      try {
        return callback();
      }
      finally {
        var $receiver_0 = this.cmds;
        var element_0 = Indenter.Unindent;
        $receiver_0.add_11rb$(element_0);
      }
    };
  }));
  var Array_0 = Array;
  function Indenter$Indents() {
    Indenter$Indents_instance = this;
    var array = Array_0(128);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = '';
    }
    var builder = StringBuilder_init();
    for (var n = 0; n < array.length; n++) {
      array[n] = builder.toString();
      builder.append_s8itvh$(9);
    }
    this.indents = array;
  }
  Indenter$Indents.prototype.get_za3lpa$ = function (index) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = getOrNull_0(this.indents, index)) != null)
      tmp$_0 = tmp$;
    else {
      throw IllegalStateException_init(('Too much indentation (' + index + ')').toString());
    }
    return tmp$_0;
  };
  Indenter$Indents.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Indents', interfaces: []};
  var Indenter$Indents_instance = null;
  function Indenter$Indents_getInstance() {
    if (Indenter$Indents_instance === null) {
      new Indenter$Indents();
    }
    return Indenter$Indents_instance;
  }
  Indenter_0.prototype.toString = function () {
    var $receiver = StringBuilder_init();
    var tmp$, tmp$_0;
    var indent = 0;
    tmp$ = this.cmds.iterator();
    while (tmp$.hasNext()) {
      var cmd = tmp$.next();
      if (equals(cmd, Indenter$Indent_getInstance())) {
        indent = indent + 1 | 0;
      }
       else if (equals(cmd, Indenter$Unindent_getInstance())) {
        indent = indent - 1 | 0;
      }
       else if (typeof cmd === 'string') {
        tmp$_0 = split(cmd, ['\n']).iterator();
        while (tmp$_0.hasNext()) {
          var line = tmp$_0.next();
          $receiver.append_gw00v9$(Indenter$Indents_getInstance().get_za3lpa$(indent));
          $receiver.append_gw00v9$(line + '\n');
        }
      }
    }
    return $receiver.toString();
  };
  Indenter_0.$metadata$ = {kind: Kind_CLASS, simpleName: 'Indenter', interfaces: []};
  function EOFException() {
    RuntimeException_init(this);
    this.name = 'EOFException';
  }
  EOFException.$metadata$ = {kind: Kind_CLASS, simpleName: 'EOFException', interfaces: [RuntimeException]};
  function ListReader(items, default_0, pos) {
    if (pos === void 0)
      pos = 0;
    this.items = items;
    this.default = default_0;
    this.pos = pos;
  }
  Object.defineProperty(ListReader.prototype, 'size', {get: function () {
    return this.items.size;
  }});
  Object.defineProperty(ListReader.prototype, 'eof', {get: function () {
    return this.pos >= this.size;
  }});
  ListReader.prototype.createExpectException_61zpoe$ = function (str) {
    return new ExpectException(str);
  };
  ListReader.prototype.skip_za3lpa$ = function (count) {
    if (count === void 0)
      count = 1;
    this.pos = this.pos + count | 0;
  };
  ListReader.prototype.read = function () {
    var tmp$;
    if (this.eof)
      throw new EOFException();
    return this.items.get_za3lpa$((tmp$ = this.pos, this.pos = tmp$ + 1 | 0, tmp$));
  };
  function ListReader$readOutside$lambda(this$ListReader) {
    return function (it) {
      return this$ListReader.default;
    };
  }
  ListReader.prototype.readOutside = function () {
    var tmp$, tmp$_0;
    tmp$_0 = this.items;
    var index = (tmp$ = this.pos, this.pos = tmp$ + 1 | 0, tmp$);
    return index >= 0 && index <= get_lastIndex(tmp$_0) ? tmp$_0.get_za3lpa$(index) : ListReader$readOutside$lambda(this)(index);
  };
  ListReader.prototype.peek_za3lpa$ = function (offset) {
    if (offset === void 0)
      offset = 0;
    if (this.eof)
      throw new EOFException();
    return this.items.get_za3lpa$(this.pos + offset | 0);
  };
  ListReader.prototype.peekOutside_za3lpa$ = function (offset) {
    if (offset === void 0)
      offset = 0;
    var $receiver = this.items;
    var index = this.pos + offset | 0;
    return index >= 0 && index <= get_lastIndex($receiver) ? $receiver.get_za3lpa$(index) : this.default;
  };
  ListReader.prototype.expect_11rb$ = function (expect) {
    var actual = this.readOutside();
    if (!equals(actual, expect))
      throw this.createExpectException_61zpoe$("Expected '" + expect + "' but found '" + actual + "'");
    return actual;
  };
  ListReader.prototype.expect_7l2mas$ = function (expect) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== expect.length; ++tmp$) {
      var e = expect[tmp$];
      this.expect_11rb$(e);
    }
  };
  ListReader.prototype.expectAny_7l2mas$ = function (expect) {
    var actual = this.readOutside();
    if (!contains_1(expect, actual))
      throw this.createExpectException_61zpoe$("Expected '" + expect + "' but found '" + actual + "'");
    return actual;
  };
  ListReader.prototype.tryExpect_11rb$ = function (expect) {
    if (equals(this.peek_za3lpa$(), expect)) {
      return this.readOutside();
    }
     else {
      return null;
    }
  };
  ListReader.prototype.restoreOnNull_9ce4rd$ = defineInlineFunction('ktcc.com.soywiz.ktcc.util.ListReader.restoreOnNull_9ce4rd$', function (callback) {
    var oldPos = this.pos;
    var result = callback();
    if (result == null) {
      this.pos = oldPos;
    }
    return result;
  });
  ListReader.prototype.tryBlock_9ce4rd$ = defineInlineFunction('ktcc.com.soywiz.ktcc.util.ListReader.tryBlock_9ce4rd$', wrapFunction(function () {
    var ExpectException = _.com.soywiz.ktcc.util.ExpectException;
    var ItemOrError_init = _.com.soywiz.ktcc.util.ItemOrError;
    return function (callback) {
      var tmp$;
      var oldPos = this.pos;
      try {
        tmp$ = callback();
      }
       catch (e) {
        if (Kotlin.isType(e, ExpectException)) {
          tmp$ = e;
        }
         else
          throw e;
      }
      var result = tmp$;
      if (Kotlin.isType(result, ExpectException))
        this.pos = oldPos;
      return (new ItemOrError_init(result)).valueOrNull;
    };
  }));
  ListReader.prototype.tryBlockResult_9ce4rd$ = defineInlineFunction('ktcc.com.soywiz.ktcc.util.ListReader.tryBlockResult_9ce4rd$', wrapFunction(function () {
    var ExpectException = _.com.soywiz.ktcc.util.ExpectException;
    var ItemOrError_init = _.com.soywiz.ktcc.util.ItemOrError;
    return function (callback) {
      var tmp$;
      var oldPos = this.pos;
      try {
        tmp$ = callback();
      }
       catch (e) {
        if (Kotlin.isType(e, ExpectException)) {
          tmp$ = e;
        }
         else
          throw e;
      }
      var result = tmp$;
      if (Kotlin.isType(result, ExpectException))
        this.pos = oldPos;
      return new ItemOrError_init(result);
    };
  }));
  ListReader.prototype.tryBlocks_uu91qr$ = defineInlineFunction('ktcc.com.soywiz.ktcc.util.ListReader.tryBlocks_uu91qr$', wrapFunction(function () {
    var last = Kotlin.kotlin.collections.last_2p1efm$;
    var toString = Kotlin.toString;
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
    var ExpectException = _.com.soywiz.ktcc.util.ExpectException;
    var ItemOrError_init = _.com.soywiz.ktcc.util.ItemOrError;
    return function (name, context, callbacks, propagateLast) {
      if (propagateLast === void 0)
        propagateLast = false;
      var tmp$;
      var errors = ArrayList_init();
      for (tmp$ = 0; tmp$ !== callbacks.length; ++tmp$) {
        var callback = callbacks[tmp$];
        var tmp$_0;
        var oldPos = this.pos;
        try {
          tmp$_0 = callback();
        }
         catch (e) {
          if (Kotlin.isType(e, ExpectException)) {
            tmp$_0 = e;
          }
           else
            throw e;
        }
        var result = tmp$_0;
        if (Kotlin.isType(result, ExpectException))
          this.pos = oldPos;
        var result_0 = new ItemOrError_init(result);
        if (!result_0.isError) {
          return result_0.value;
        }
         else {
          var element = result_0.error;
          errors.add_11rb$(element);
        }
      }
      if (propagateLast) {
        throw last(errors);
      }
       else {
        throw this.createExpectException_61zpoe$('Tried to parse ' + name + ' but failed with ' + errors + ' in ' + toString(context));
      }
    };
  }));
  ListReader.$metadata$ = {kind: Kind_CLASS, simpleName: 'ListReader', interfaces: []};
  function ExpectException(msg) {
    Exception_init(msg, this);
    this.name = 'ExpectException';
  }
  ExpectException.$metadata$ = {kind: Kind_CLASS, simpleName: 'ExpectException', interfaces: [Exception]};
  function ItemOrError(_value) {
    this._value = _value;
  }
  Object.defineProperty(ItemOrError.prototype, 'valueOrNull', {get: function () {
    return !this.isError ? this.value : null;
  }});
  Object.defineProperty(ItemOrError.prototype, 'value', {get: function () {
    var tmp$;
    return (tmp$ = this._value) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(ItemOrError.prototype, 'error', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = this._value, Throwable) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(ItemOrError.prototype, 'isError', {get: function () {
    return Kotlin.isType(this._value, Throwable);
  }});
  ItemOrError.$metadata$ = {kind: Kind_CLASS, simpleName: 'ItemOrError', interfaces: []};
  ItemOrError.prototype.unbox = function () {
    return this._value;
  };
  ItemOrError.prototype.toString = function () {
    return 'ItemOrError(_value=' + Kotlin.toString(this._value) + ')';
  };
  ItemOrError.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this._value) | 0;
    return result;
  };
  ItemOrError.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this._value, other._value))));
  };
  function reader($receiver, default_0) {
    return new ListReader($receiver, default_0);
  }
  function get_cescaped($receiver) {
    var tmp$;
    var out = StringBuilder_init();
    tmp$ = iterator($receiver);
    while (tmp$.hasNext()) {
      var c = unboxChar(tmp$.next());
      switch (c) {
        case 92:
          out.append_gw00v9$('\\\\');
          break;
        case 34:
          out.append_gw00v9$('\\"');
          break;
        case 10:
          out.append_gw00v9$('\\n');
          break;
        case 13:
          out.append_gw00v9$('\\r');
          break;
        case 9:
          out.append_gw00v9$('\\t');
          break;
        default:out.append_s8itvh$(c);
          break;
      }
    }
    return out.toString();
  }
  function get_cquoted($receiver) {
    return '"' + get_cescaped($receiver) + '"';
  }
  function get_cunescaped($receiver) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var out = StringBuilder_init();
    var n = 0;
    while (n < $receiver.length) {
      var c = $receiver.charCodeAt((tmp$ = n, n = tmp$ + 1 | 0, tmp$));
      if (c === 92) {
        var c2 = $receiver.charCodeAt((tmp$_0 = n, n = tmp$_0 + 1 | 0, tmp$_0));
        switch (c2) {
          case 110:
            out.append_s8itvh$(10);
            break;
          case 114:
            out.append_s8itvh$(13);
            break;
          case 116:
            out.append_s8itvh$(9);
            break;
          case 120:
            var h0 = $receiver.charCodeAt((tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1));
            var h1 = $receiver.charCodeAt((tmp$_2 = n, n = tmp$_2 + 1 | 0, tmp$_2));
            throw new NotImplementedError_init('An operation is not implemented: ' + 'cunescaped');
        }
      }
       else {
        out.append_s8itvh$(c);
      }
    }
    return out.toString();
  }
  function get_cunquoted($receiver) {
    if (startsWith($receiver, 34) && endsWith($receiver, 34)) {
      var endIndex = $receiver.length - 1 | 0;
      return get_cunescaped($receiver.substring(1, endIndex));
    }
     else {
      throw IllegalStateException_init(("String '" + $receiver + "' is not quoted").toString());
    }
  }
  function StrReader(str, pos) {
    if (pos === void 0)
      pos = 0;
    this.str = str;
    this.pos = pos;
  }
  Object.defineProperty(StrReader.prototype, 'size', {get: function () {
    return this.str.length;
  }});
  Object.defineProperty(StrReader.prototype, 'eof', {get: function () {
    return this.pos >= this.size;
  }});
  Object.defineProperty(StrReader.prototype, 'available', {get: function () {
    return this.size - this.pos | 0;
  }});
  StrReader.prototype.peek = function () {
    return this.pos >= 0 && this.pos < this.str.length ? this.str.charCodeAt(this.pos) : 0;
  };
  StrReader.prototype.peekOffset_za3lpa$ = function (offset) {
    return (this.pos + offset | 0) >= 0 && (this.pos + offset | 0) < this.str.length ? this.str.charCodeAt(this.pos + offset | 0) : 0;
  };
  StrReader.prototype.read = function () {
    var tmp$;
    var p = (tmp$ = this.pos, this.pos = tmp$ + 1 | 0, tmp$);
    return p >= 0 && p < this.str.length ? this.str.charCodeAt(p) : 0;
  };
  StrReader.prototype.peek_za3lpa$ = function (count) {
    var tmp$ = this.str;
    var tmp$_0 = this.pos;
    var tmp$_1 = this.pos;
    var a = this.available;
    var endIndex = tmp$_1 + Math_0.min(a, count) | 0;
    return tmp$.substring(tmp$_0, endIndex);
  };
  StrReader.prototype.read_za3lpa$ = function (count) {
    var $receiver = this.peek_za3lpa$(count);
    this.pos = this.pos + $receiver.length | 0;
    return $receiver;
  };
  StrReader.prototype.skip_za3lpa$ = function (count) {
    this.pos = this.pos + count | 0;
  };
  StrReader.prototype.expect_61zpoe$ = function (expect) {
    var actual = this.read_za3lpa$(expect.length);
    if (!equals(actual, expect)) {
      throw IllegalStateException_init(("Expected '" + expect + "' actual '" + actual + "'").toString());
    }
  };
  StrReader.prototype.expect_s8itvh$ = function (expect) {
    var actual = unboxChar(this.read());
    if (actual !== expect) {
      throw IllegalStateException_init(("Expected '" + String.fromCharCode(expect) + "' actual '" + String.fromCharCode(actual) + "'").toString());
    }
  };
  StrReader.prototype.tryPeek_61zpoe$ = function (str) {
    var tmp$;
    tmp$ = str.length;
    for (var n = 0; n < tmp$; n++) {
      if (unboxChar(this.peekOffset_za3lpa$(n)) !== str.charCodeAt(n))
        return false;
    }
    return true;
  };
  StrReader.prototype.tryPeek_ky89ak$ = function (set) {
    var str = this.peek_za3lpa$(set.maxLength);
    if (!set.values.contains_11rb$(str))
      return 0;
    return set.maxLength;
  };
  StrReader.prototype.readBlock_o14v8n$ = defineInlineFunction('ktcc.com.soywiz.ktcc.util.StrReader.readBlock_o14v8n$', function (callback) {
    var startPos = this.pos;
    callback();
    var $receiver = this.str;
    var endIndex = this.pos;
    return $receiver.substring(startPos, endIndex);
  });
  StrReader.prototype.keepPos_klfg04$ = function (callback) {
    var old = this.pos;
    try {
      return callback();
    }
    finally {
      this.pos = old;
    }
  };
  StrReader.prototype.tryRead_klfg04$ = defineInlineFunction('ktcc.com.soywiz.ktcc.util.StrReader.tryRead_klfg04$', function (callback) {
    var old = this.pos;
    var result = callback();
    if (result == null)
      this.pos = old;
    return result;
  });
  function StrReader$MatchSet(values) {
    this.values = values;
    var tmp$;
    var $receiver = this.values;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(item.length);
    }
    this.maxLength = (tmp$ = max(destination)) != null ? tmp$ : 0;
    var $receiver_0 = this.values;
    var all$result;
    all$break: do {
      var tmp$_1;
      if (Kotlin.isType($receiver_0, Collection) && $receiver_0.isEmpty()) {
        all$result = true;
        break all$break;
      }
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        if (!(element.length === this.maxLength)) {
          all$result = false;
          break all$break;
        }
      }
      all$result = true;
    }
     while (false);
    if (!all$result) {
      throw IllegalStateException_init('All entries in MatchSet have to have the same length'.toString());
    }
  }
  StrReader$MatchSet.$metadata$ = {kind: Kind_CLASS, simpleName: 'MatchSet', interfaces: []};
  StrReader$MatchSet.prototype.component1 = function () {
    return this.values;
  };
  StrReader$MatchSet.prototype.copy_mhpeer$ = function (values) {
    return new StrReader$MatchSet(values === void 0 ? this.values : values);
  };
  StrReader$MatchSet.prototype.toString = function () {
    return 'MatchSet(values=' + Kotlin.toString(this.values) + ')';
  };
  StrReader$MatchSet.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.values) | 0;
    return result;
  };
  StrReader$MatchSet.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.values, other.values))));
  };
  StrReader.$metadata$ = {kind: Kind_CLASS, simpleName: 'StrReader', interfaces: []};
  function toStringUtf8($receiver) {
    var $receiver_0 = StringBuilder_init();
    var tmp$;
    var src = $receiver;
    var start = 0;
    var end = src.length;
    if (start < 0 || start > src.length || (end < 0 || end > src.length)) {
      throw IllegalStateException_init('Out of bounds'.toString());
    }
    var i = start;
    while (i < end) {
      var c = src[i] & 255;
      tmp$ = c >> 4;
      if (tmp$ >= 0 && tmp$ <= 7) {
        $receiver_0.append_s8itvh$(toChar(c));
        i = i + 1 | 0;
      }
       else if (tmp$ >= 12 && tmp$ <= 13) {
        $receiver_0.append_s8itvh$(toChar((c & 31) << 6 | src[i + 1 | 0] & 63));
        i = i + 2 | 0;
      }
       else if (tmp$ === 14) {
        $receiver_0.append_s8itvh$(toChar((c & 15) << 12 | (src[i + 1 | 0] & 63) << 6 | src[i + 2 | 0] & 63));
        i = i + 3 | 0;
      }
       else {
        i = i + 1 | 0;
      }
    }
    return $receiver_0.toString();
  }
  function readFile(name) {
    return files.get_11rb$(name);
  }
  var files;
  function main$lambda$lambda$lambda(closure$data) {
    return function () {
      closure$data.editor.execCommand('startAutocomplete');
      return Unit;
    };
  }
  function main$lambda$lambda(data, hash, keyString, keyCode, event) {
    if (hash === -1 && (equals(keyString, '.') || equals(keyString, '>'))) {
      window.setTimeout(main$lambda$lambda$lambda(data), 50);
    }
    var cur = data.editor.getCursorPosition();
    window.localStorage['row0'] = cur.row.toString();
    window.localStorage['column'] = cur.column.toString();
    return Unit;
  }
  function main$lambda$compile$toAceAnnotation($receiver, type) {
    return new AceAnnotation($receiver.message, $receiver.row0, $receiver.columnStart, type);
  }
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  function main$lambda$compile(closure$sourcesEditor, closure$preprocessorEditor, closure$includeRuntimeNode, closure$transpiledEditor) {
    return function () {
      var tmp$, tmp$_0;
      var sources = closure$sourcesEditor.getValue();
      window.localStorage['ktccProgram'] = sources;
      files.clear();
      var $receiver = files;
      var value = utf8Encode(sources);
      $receiver.put_xwzc9p$('main.c', value);
      try {
        var cfile = CCompiler_getInstance().preprocess_ji1ias$(listOf_0('main.c'));
        closure$preprocessorEditor.setValue(cfile, -1);
        try {
          var compilation = CCompiler_getInstance().compileKotlin_ivxn3r$(cfile, closure$includeRuntimeNode.checked);
          var ktfile = compilation.source;
          var $receiver_0 = get_warnings(compilation);
          var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
          var tmp$_1;
          tmp$_1 = $receiver_0.iterator();
          while (tmp$_1.hasNext()) {
            var item = tmp$_1.next();
            destination.add_11rb$('// WARNING: ' + item);
          }
          var warnings = joinToString(destination, '\n');
          var $receiver_1 = get_errors(compilation);
          var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_1, 10));
          var tmp$_2;
          tmp$_2 = $receiver_1.iterator();
          while (tmp$_2.hasNext()) {
            var item_0 = tmp$_2.next();
            destination_0.add_11rb$('// ERROR: ' + item_0);
          }
          var errors = joinToString(destination_0, '\n');
          var tmp$_3 = !get_warnings(compilation).isEmpty();
          if (!tmp$_3) {
            tmp$_3 = !get_errors(compilation).isEmpty();
          }
          if (tmp$_3) {
            var toAceAnnotation = main$lambda$compile$toAceAnnotation;
            var $receiver_2 = get_warnings(compilation);
            var destination_1 = ArrayList_init_0(collectionSizeOrDefault($receiver_2, 10));
            var tmp$_4;
            tmp$_4 = $receiver_2.iterator();
            while (tmp$_4.hasNext()) {
              var item_1 = tmp$_4.next();
              destination_1.add_11rb$(toAceAnnotation(item_1, 'warning'));
            }
            var warningAnnotations = destination_1;
            var $receiver_3 = get_errors(compilation);
            var destination_2 = ArrayList_init_0(collectionSizeOrDefault($receiver_3, 10));
            var tmp$_5;
            tmp$_5 = $receiver_3.iterator();
            while (tmp$_5.hasNext()) {
              var item_2 = tmp$_5.next();
              destination_2.add_11rb$(toAceAnnotation(item_2, 'error'));
            }
            var errorAnnotations = destination_2;
            closure$sourcesEditor.session.setAnnotations(copyToArray(plus(errorAnnotations, warningAnnotations)));
          }
           else {
            closure$sourcesEditor.session.clearAnnotations();
          }
          var tmp$_6 = closure$transpiledEditor;
          var $receiver_4 = warnings + '\n' + errors + '\n' + ktfile;
          var tmp$_7;
          tmp$_6.setValue(trim(Kotlin.isCharSequence(tmp$_7 = $receiver_4) ? tmp$_7 : throwCCE()).toString(), -1);
        }
         catch (e) {
          if (Kotlin.isType(e, Throwable)) {
            closure$transpiledEditor.setValue(((tmp$ = e.stack) != null ? tmp$ : e).toString(), -1);
          }
           else
            throw e;
        }
      }
       catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          closure$preprocessorEditor.setValue(((tmp$_0 = e.stack) != null ? tmp$_0 : e).toString(), -1);
          closure$transpiledEditor.setValue('', -1);
        }
         else
          throw e;
      }
    };
  }
  function main$lambda$lambda_0(closure$compile) {
    return function (it) {
      closure$compile();
      return Unit;
    };
  }
  function main$lambda$lambda$lambda_0(closure$autocompileNode, closure$compile) {
    return function () {
      if (closure$autocompileNode.checked) {
        closure$compile();
      }
      return Unit;
    };
  }
  function main$lambda$lambda_1(closure$timeout, closure$autocompileNode, closure$compile) {
    return function (e) {
      window.clearTimeout(closure$timeout.v);
      closure$timeout.v = window.setTimeout(main$lambda$lambda$lambda_0(closure$autocompileNode, closure$compile), 500);
      return Unit;
    };
  }
  function main$lambda$lambda_2(closure$compile) {
    return function (e) {
      println('CLICKED!');
      closure$compile();
      return Unit;
    };
  }
  function main$lambda$lambda_3(closure$sourcesEditor, closure$row0, closure$column) {
    return function () {
      closure$sourcesEditor.gotoLine(closure$row0 + 1 | 0, closure$column, false);
      closure$sourcesEditor.scrollToLine(closure$row0 + 1 | 0, true);
      return Unit;
    };
  }
  function main$lambda(e) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    println('READY');
    var autocompileNode = document.getElementById('autocompile');
    var includeRuntimeNode = document.getElementById('include-runtime');
    var $receiver = ace.edit('sources');
    $receiver.setTheme('ace/theme/monokai');
    $receiver.setOptions(jsObject([to('enableBasicAutocompletion', true), to('enableLiveAutocompletion', true)]));
    $receiver.session.setMode('ace/mode/c_cpp');
    var sourcesEditor = $receiver;
    sourcesEditor.keyBinding.addKeyboardHandler(main$lambda$lambda);
    var $receiver_0 = ace.edit('preprocessor');
    $receiver_0.setTheme('ace/theme/monokai');
    $receiver_0.setOptions(jsObject([]));
    $receiver_0.session.setMode('ace/mode/c_cpp');
    var preprocessorEditor = $receiver_0;
    var $receiver_1 = ace.edit('transpiled');
    $receiver_1.setTheme('ace/theme/monokai');
    $receiver_1.setOptions(jsObject([]));
    $receiver_1.session.setMode('ace/mode/kotlin');
    var transpiledEditor = $receiver_1;
    window.sourcesEditor = sourcesEditor;
    window.preprocessorEditor = preprocessorEditor;
    window.transpiledEditor = transpiledEditor;
    var compile = main$lambda$compile(sourcesEditor, preprocessorEditor, includeRuntimeNode, transpiledEditor);
    var timeout = {v: 0};
    includeRuntimeNode.addEventListener('change', main$lambda$lambda_0(compile));
    sourcesEditor.on('change', main$lambda$lambda_1(timeout, autocompileNode, compile));
    (tmp$ = document.getElementById('compile')) != null ? (tmp$.addEventListener('click', main$lambda$lambda_2(compile)), Unit) : null;
    var langTools = ace.require('ace/ext/language_tools');
    langTools.setCompleters([new CCompletion()]);
    var row0 = (tmp$_1 = (tmp$_0 = window.localStorage['row0']) != null ? toIntOrNull(tmp$_0) : null) != null ? tmp$_1 : 0;
    var column = (tmp$_3 = (tmp$_2 = window.localStorage['column']) != null ? toIntOrNull(tmp$_2) : null) != null ? tmp$_3 : 0;
    sourcesEditor.setValue((tmp$_4 = window.localStorage['ktccProgram']) != null ? tmp$_4 : trimIndent('\n            #include <stdio.h>\n\n            typedef struct {\n                int a;\n                union {\n                    float f;\n                    long int l;\n                } u;\n            } A;\n\n            int main() {\n                A a = {1};\n                return 0;\n            }\n        '), -1);
    sourcesEditor.focus();
    window.setTimeout(main$lambda$lambda_3(sourcesEditor, row0, column), 0);
    compile();
    return Unit;
  }
  function main(args) {
    println('Waiting for DOMContentLoaded...');
    document.addEventListener('DOMContentLoaded', main$lambda);
  }
  function CCompletion() {
    this.completionNode_kvajkd$_0 = lazy(CCompletion$completionNode$lambda);
    this.debugNode_4rzj9o$_0 = lazy(CCompletion$debugNode$lambda);
  }
  Object.defineProperty(CCompletion.prototype, 'completionNode', {get: function () {
    return this.completionNode_kvajkd$_0.value;
  }});
  Object.defineProperty(CCompletion.prototype, 'debugNode', {get: function () {
    return this.debugNode_4rzj9o$_0.value;
  }});
  CCompletion.prototype.getCompletions = function (editor, session, pos, prefix, callback) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    if (!this.completionNode.checked)
      return;
    try {
      var $receiver = files;
      var value = utf8Encode(editor.getValue());
      $receiver.put_xwzc9p$('main.c', value);
      var cfile = CCompiler_getInstance().preprocess_ji1ias$(listOf_0('main.c'));
      var compilation = CCompiler_getInstance().compileKotlin_ivxn3r$(cfile, false);
      var parser = compilation.parser;
      var originalPos = new ProgramParser$PosWithFile(get_row1(pos), pos.column, 'main.c');
      var translatedPos = (tmp$ = parser.translatePos_y26shw$(originalPos)) != null ? tmp$ : new ProgramParser$Pos(1, 0);
      var foundToken = compilation.parser.findNearToken_vux9f0$(translatedPos.row1, translatedPos.column0);
      var foundNodeTree = (tmp$_0 = foundToken != null ? compilation.parser.findNodeTreeAtToken_p4dkeq$(compilation.program, foundToken) : null) != null ? tmp$_0 : emptyList();
      var destination = ArrayList_init();
      var tmp$_4;
      tmp$_4 = foundNodeTree.iterator();
      while (tmp$_4.hasNext()) {
        var element = tmp$_4.next();
        if (Kotlin.isType(element, FieldAccessExpr))
          destination.add_11rb$(element);
      }
      var expr = (tmp$_1 = lastOrNull(destination)) != null ? tmp$_1.expr : null;
      if (this.debugNode.checked) {
        println('expr=' + toString(expr) + ', originalPos=' + originalPos + ', translatedPos=' + translatedPos);
        if (expr == null) {
          tmp$_2 = foundNodeTree.iterator();
          while (tmp$_2.hasNext()) {
            var node = tmp$_2.next();
            println('  -> ' + node);
          }
        }
      }
      if (expr != null) {
        var exprType = expr.type;
        var resolvedExprType2 = parser.resolve_de2dm9$(exprType);
        var resolvedExprType = Kotlin.isType(resolvedExprType2, BasePointerFType) ? resolvedExprType2.elementType : resolvedExprType2;
        if (Kotlin.isType(resolvedExprType, StructFType)) {
          var structTypeInfo = getStructTypeInfo(resolvedExprType, compilation.parser);
          var $receiver_0 = structTypeInfo.fields;
          var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
          var tmp$_5;
          tmp$_5 = $receiver_0.iterator();
          while (tmp$_5.hasNext()) {
            var item = tmp$_5.next();
            destination_0.add_11rb$(new SymbolInfo(new SymbolScope(null), item.name, item.type, item.node, new CToken('')));
          }
          tmp$_3 = destination_0;
        }
         else {
          tmp$_3 = emptyList();
        }
      }
       else {
        var scope = compilation.parser.getInnerSymbolsScopeAt_t0suth$(foundToken);
        var allSymbolNames = scope.getAllSymbolNames_wzgf5y$();
        var destination_1 = ArrayList_init();
        var tmp$_6;
        tmp$_6 = allSymbolNames.iterator();
        while (tmp$_6.hasNext()) {
          var element_0 = tmp$_6.next();
          if (contains(element_0, prefix, true))
            destination_1.add_11rb$(element_0);
        }
        var filteredSymbolNames = destination_1;
        var symbolNames = !filteredSymbolNames.isEmpty() ? filteredSymbolNames : allSymbolNames;
        var destination_2 = ArrayList_init_0(collectionSizeOrDefault(symbolNames, 10));
        var tmp$_7;
        tmp$_7 = symbolNames.iterator();
        while (tmp$_7.hasNext()) {
          var item_0 = tmp$_7.next();
          destination_2.add_11rb$(scope.get_61zpoe$(item_0));
        }
        var $receiver_1 = filterNotNull(destination_2);
        var destination_3 = ArrayList_init();
        var tmp$_8;
        tmp$_8 = $receiver_1.iterator();
        while (tmp$_8.hasNext()) {
          var element_1 = tmp$_8.next();
          var tmp$_9;
          if (element_1.token.pos < 0 || ((tmp$_9 = foundToken != null ? foundToken.pos : null) != null ? tmp$_9 : 0) >= element_1.token.pos)
            destination_3.add_11rb$(element_1);
        }
        tmp$_3 = destination_3;
      }
      var symbolInfos = tmp$_3;
      var destination_4 = ArrayList_init_0(collectionSizeOrDefault(symbolInfos, 10));
      var tmp$_10;
      tmp$_10 = symbolInfos.iterator();
      while (tmp$_10.hasNext()) {
        var item_1 = tmp$_10.next();
        var tmp$_11 = destination_4.add_11rb$;
        var tmp$_12, tmp$_13, tmp$_14;
        try {
          tmp$_13 = item_1.type.toString();
        }
         catch (e_0) {
          if (Kotlin.isType(e_0, Throwable)) {
            tmp$_13 = (tmp$_12 = e_0.message) != null ? tmp$_12 : 'Error Unknown';
          }
           else
            throw e_0;
        }
        var typeStr = tmp$_13;
        if (startsWith_0(item_1.name, prefix))
          tmp$_14 = 20;
        else if (startsWith_0(item_1.name, prefix, true))
          tmp$_14 = 10;
        else
          tmp$_14 = 1;
        var scoreMult = tmp$_14;
        tmp$_11.call(destination_4, new AceCompletion(item_1.name, item_1.name, typeStr, Kotlin.imul(item_1.scope.level, scoreMult)));
      }
      callback(null, copyToArray(destination_4));
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        console.log(e);
      }
       else
        throw e;
    }
  };
  function CCompletion$completionNode$lambda() {
    return document.getElementById('completion');
  }
  function CCompletion$debugNode$lambda() {
    return document.getElementById('debug');
  }
  CCompletion.$metadata$ = {kind: Kind_CLASS, simpleName: 'CCompletion', interfaces: []};
  function AceCompletion(caption, value, meta, score) {
    this.caption = caption;
    this.value = value;
    this.meta = meta;
    this.score = score;
  }
  AceCompletion.$metadata$ = {kind: Kind_CLASS, simpleName: 'AceCompletion', interfaces: []};
  AceCompletion.prototype.component1 = function () {
    return this.caption;
  };
  AceCompletion.prototype.component2 = function () {
    return this.value;
  };
  AceCompletion.prototype.component3 = function () {
    return this.meta;
  };
  AceCompletion.prototype.component4 = function () {
    return this.score;
  };
  AceCompletion.prototype.copy_ibifho$ = function (caption, value, meta, score) {
    return new AceCompletion(caption === void 0 ? this.caption : caption, value === void 0 ? this.value : value, meta === void 0 ? this.meta : meta, score === void 0 ? this.score : score);
  };
  AceCompletion.prototype.toString = function () {
    return 'AceCompletion(caption=' + Kotlin.toString(this.caption) + (', value=' + Kotlin.toString(this.value)) + (', meta=' + Kotlin.toString(this.meta)) + (', score=' + Kotlin.toString(this.score)) + ')';
  };
  AceCompletion.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.caption) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    result = result * 31 + Kotlin.hashCode(this.meta) | 0;
    result = result * 31 + Kotlin.hashCode(this.score) | 0;
    return result;
  };
  AceCompletion.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.caption, other.caption) && Kotlin.equals(this.value, other.value) && Kotlin.equals(this.meta, other.meta) && Kotlin.equals(this.score, other.score)))));
  };
  function get_row1($receiver) {
    return $receiver.row + 1 | 0;
  }
  function AceAnnotation(text, row, column, type) {
    if (row === void 0)
      row = 1;
    if (column === void 0)
      column = 0;
    if (type === void 0)
      type = 'error';
    this.text = text;
    this.row = row;
    this.column = column;
    this.type = type;
  }
  AceAnnotation.$metadata$ = {kind: Kind_CLASS, simpleName: 'AceAnnotation', interfaces: []};
  AceAnnotation.prototype.component1 = function () {
    return this.text;
  };
  AceAnnotation.prototype.component2 = function () {
    return this.row;
  };
  AceAnnotation.prototype.component3 = function () {
    return this.column;
  };
  AceAnnotation.prototype.component4 = function () {
    return this.type;
  };
  AceAnnotation.prototype.copy_6qfks0$ = function (text, row, column, type) {
    return new AceAnnotation(text === void 0 ? this.text : text, row === void 0 ? this.row : row, column === void 0 ? this.column : column, type === void 0 ? this.type : type);
  };
  AceAnnotation.prototype.toString = function () {
    return 'AceAnnotation(text=' + Kotlin.toString(this.text) + (', row=' + Kotlin.toString(this.row)) + (', column=' + Kotlin.toString(this.column)) + (', type=' + Kotlin.toString(this.type)) + ')';
  };
  AceAnnotation.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.text) | 0;
    result = result * 31 + Kotlin.hashCode(this.row) | 0;
    result = result * 31 + Kotlin.hashCode(this.column) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    return result;
  };
  AceAnnotation.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.text, other.text) && Kotlin.equals(this.row, other.row) && Kotlin.equals(this.column, other.column) && Kotlin.equals(this.type, other.type)))));
  };
  function utf8Encode(str) {
    return new Int8Array((new TextEncoder('utf-8')).encode(str).buffer);
  }
  function jsObject(pairs) {
    var tmp$;
    var obj = {};
    for (tmp$ = 0; tmp$ !== pairs.length; ++tmp$) {
      var tmp$_0 = pairs[tmp$];
      var k = tmp$_0.component1(), v = tmp$_0.component2();
      obj[k] = v;
    }
    return obj;
  }
  var package$com = _.com || (_.com = {});
  var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
  var package$ktcc = package$soywiz.ktcc || (package$soywiz.ktcc = {});
  package$ktcc.SymbolInfo = SymbolInfo;
  package$ktcc.SymbolScope = SymbolScope;
  Object.defineProperty(ProgramMessage$Level, 'WARNING', {get: ProgramMessage$Level$WARNING_getInstance});
  Object.defineProperty(ProgramMessage$Level, 'ERROR', {get: ProgramMessage$Level$ERROR_getInstance});
  ProgramMessage.Level = ProgramMessage$Level;
  package$ktcc.ProgramMessage = ProgramMessage;
  package$ktcc.ParserException = ParserException;
  package$ktcc.ProgramParserRef = ProgramParserRef;
  package$ktcc.FunctionScope = FunctionScope;
  ProgramParser.Marker = ProgramParser$Marker;
  ProgramParser.Pos = ProgramParser$Pos;
  ProgramParser.PosWithFile = ProgramParser$PosWithFile;
  package$ktcc.ProgramParser = ProgramParser;
  package$ktcc.ChildrenVisitor = ChildrenVisitor;
  package$ktcc.StructField = StructField;
  package$ktcc.StructTypeInfo = StructTypeInfo;
  package$ktcc.Node = Node;
  package$ktcc.IdDecl = IdDecl;
  Object.defineProperty(Id, 'Companion', {get: Id$Companion_getInstance});
  package$ktcc.Id = Id;
  Object.defineProperty(StringConstant, 'Companion', {get: StringConstant$Companion_getInstance});
  package$ktcc.StringConstant = StringConstant;
  Object.defineProperty(CharConstant, 'Companion', {get: CharConstant$Companion_getInstance});
  package$ktcc.CharConstant = CharConstant;
  package$ktcc.IntConstant_za3lpa$ = IntConstant;
  Object.defineProperty(IntConstant_0, 'Companion', {get: IntConstant$Companion_getInstance});
  package$ktcc.IntConstant = IntConstant_0;
  Object.defineProperty(DoubleConstant, 'Companion', {get: DoubleConstant$Companion_getInstance});
  package$ktcc.DoubleConstant = DoubleConstant;
  package$ktcc.Expr = Expr;
  package$ktcc.not_de5dvv$ = not;
  package$ktcc.LValue = LValue;
  package$ktcc.CommaExpr = CommaExpr;
  package$ktcc.ConstExpr = ConstExpr;
  package$ktcc.SingleOperandExpr = SingleOperandExpr;
  package$ktcc.BaseUnaryOp = BaseUnaryOp;
  package$ktcc.UnaryExpr = UnaryExpr;
  package$ktcc.PostfixExpr = PostfixExpr;
  package$ktcc.AssignExpr = AssignExpr;
  package$ktcc.ArrayAccessExpr = ArrayAccessExpr;
  package$ktcc.FieldAccessExpr = FieldAccessExpr;
  package$ktcc.CallExpr = CallExpr;
  Object.defineProperty(OperatorsExpr, 'Companion', {get: OperatorsExpr$Companion_getInstance});
  package$ktcc.OperatorsExpr = OperatorsExpr;
  package$ktcc.Binop = Binop;
  package$ktcc.Stm = Stm;
  package$ktcc.RawStm = RawStm;
  package$ktcc.CommentStm = CommentStm;
  package$ktcc.EmptyStm = EmptyStm;
  package$ktcc.IfElse = IfElse;
  package$ktcc.Loop = Loop;
  package$ktcc.While = While;
  package$ktcc.DoWhile = DoWhile;
  package$ktcc.For = For;
  package$ktcc.Goto = Goto;
  package$ktcc.Continue = Continue;
  package$ktcc.Break = Break;
  package$ktcc.Return = Return;
  package$ktcc.SwitchBase = SwitchBase;
  package$ktcc.Switch = Switch;
  package$ktcc.SwitchWithoutFallthrough = SwitchWithoutFallthrough;
  package$ktcc.ExprStm = ExprStm;
  package$ktcc.LabeledStm = LabeledStm;
  package$ktcc.DefaultCaseStm = DefaultCaseStm;
  package$ktcc.CaseStm = CaseStm;
  package$ktcc.DefaultStm = DefaultStm;
  package$ktcc.Stms = Stms;
  package$ktcc.Decl = Decl;
  package$ktcc.CParamBase = CParamBase;
  package$ktcc.CParamVariadic = CParamVariadic;
  package$ktcc.CParam = CParam;
  package$ktcc.FuncDecl = FuncDecl;
  package$ktcc.get_warnings_4kpto0$ = get_warnings;
  package$ktcc.get_errors_4kpto0$ = get_errors;
  package$ktcc.Program = Program;
  package$ktcc.list_ydl78e$ = list;
  package$ktcc.identifier_st2c3p$ = identifier;
  package$ktcc.identifierDecl_st2c3p$ = identifierDecl;
  package$ktcc.primaryExpr_st2c3p$ = primaryExpr;
  package$ktcc.tryPrimaryExpr_st2c3p$ = tryPrimaryExpr;
  package$ktcc.tryPostFixExpression_st2c3p$ = tryPostFixExpression;
  package$ktcc.CastExpr = CastExpr;
  package$ktcc.SizeOfAlignExprBase = SizeOfAlignExprBase;
  package$ktcc.SizeOfAlignTypeExpr = SizeOfAlignTypeExpr;
  package$ktcc.SizeOfAlignExprExpr = SizeOfAlignExprExpr;
  package$ktcc.tryUnaryExpression_st2c3p$ = tryUnaryExpression;
  package$ktcc.tryCastExpression_st2c3p$ = tryCastExpression;
  package$ktcc.tryBinopExpr_st2c3p$ = tryBinopExpr;
  package$ktcc.ConditionalExpr = ConditionalExpr;
  package$ktcc.tryConditionalExpr_st2c3p$ = tryConditionalExpr;
  package$ktcc.tryAssignmentExpr_st2c3p$ = tryAssignmentExpr;
  package$ktcc.assignmentExpr_st2c3p$ = assignmentExpr;
  package$ktcc.tryExpression_st2c3p$ = tryExpression;
  package$ktcc.expression_st2c3p$ = expression;
  package$ktcc.constantExpression_st2c3p$ = constantExpression;
  package$ktcc.stringLiteral_st2c3p$ = stringLiteral;
  package$ktcc.blockItem_st2c3p$ = blockItem;
  package$ktcc.statement_st2c3p$ = statement;
  package$ktcc.TypeSpecifier = TypeSpecifier;
  package$ktcc.VariadicTypeSpecifier = VariadicTypeSpecifier;
  package$ktcc.withoutTypedefs_ab1nf1$ = withoutTypedefs;
  package$ktcc.ListTypeSpecifier = ListTypeSpecifier;
  Object.defineProperty(BasicTypeSpecifier$Kind, 'VOID', {get: BasicTypeSpecifier$Kind$VOID_getInstance});
  Object.defineProperty(BasicTypeSpecifier$Kind, 'CHAR', {get: BasicTypeSpecifier$Kind$CHAR_getInstance});
  Object.defineProperty(BasicTypeSpecifier$Kind, 'SHORT', {get: BasicTypeSpecifier$Kind$SHORT_getInstance});
  Object.defineProperty(BasicTypeSpecifier$Kind, 'INT', {get: BasicTypeSpecifier$Kind$INT_getInstance});
  Object.defineProperty(BasicTypeSpecifier$Kind, 'LONG', {get: BasicTypeSpecifier$Kind$LONG_getInstance});
  Object.defineProperty(BasicTypeSpecifier$Kind, 'FLOAT', {get: BasicTypeSpecifier$Kind$FLOAT_getInstance});
  Object.defineProperty(BasicTypeSpecifier$Kind, 'DOUBLE', {get: BasicTypeSpecifier$Kind$DOUBLE_getInstance});
  Object.defineProperty(BasicTypeSpecifier$Kind, 'SIGNED', {get: BasicTypeSpecifier$Kind$SIGNED_getInstance});
  Object.defineProperty(BasicTypeSpecifier$Kind, 'UNSIGNED', {get: BasicTypeSpecifier$Kind$UNSIGNED_getInstance});
  Object.defineProperty(BasicTypeSpecifier$Kind, 'BOOL', {get: BasicTypeSpecifier$Kind$BOOL_getInstance});
  Object.defineProperty(BasicTypeSpecifier$Kind, 'COMPLEX', {get: BasicTypeSpecifier$Kind$COMPLEX_getInstance});
  Object.defineProperty(BasicTypeSpecifier$Kind, 'Companion', {get: BasicTypeSpecifier$Kind$Companion_getInstance});
  BasicTypeSpecifier.Kind = BasicTypeSpecifier$Kind;
  package$ktcc.BasicTypeSpecifier = BasicTypeSpecifier;
  package$ktcc.TypedefTypeSpecifierName = TypedefTypeSpecifierName;
  package$ktcc.TypedefTypeSpecifierRef = TypedefTypeSpecifierRef;
  package$ktcc.StructUnionTypeSpecifier = StructUnionTypeSpecifier;
  KeywordEnum.Companion = KeywordEnum$Companion;
  package$ktcc.KeywordEnum = KeywordEnum;
  Object.defineProperty(StorageClassSpecifier$Kind, 'TYPEDEF', {get: StorageClassSpecifier$Kind$TYPEDEF_getInstance});
  Object.defineProperty(StorageClassSpecifier$Kind, 'EXTERN', {get: StorageClassSpecifier$Kind$EXTERN_getInstance});
  Object.defineProperty(StorageClassSpecifier$Kind, 'STATIC', {get: StorageClassSpecifier$Kind$STATIC_getInstance});
  Object.defineProperty(StorageClassSpecifier$Kind, 'THREAD_LOCAL', {get: StorageClassSpecifier$Kind$THREAD_LOCAL_getInstance});
  Object.defineProperty(StorageClassSpecifier$Kind, 'AUTO', {get: StorageClassSpecifier$Kind$AUTO_getInstance});
  Object.defineProperty(StorageClassSpecifier$Kind, 'REGISTER', {get: StorageClassSpecifier$Kind$REGISTER_getInstance});
  Object.defineProperty(StorageClassSpecifier$Kind, 'Companion', {get: StorageClassSpecifier$Kind$Companion_getInstance});
  StorageClassSpecifier.Kind = StorageClassSpecifier$Kind;
  package$ktcc.StorageClassSpecifier = StorageClassSpecifier;
  Object.defineProperty(TypeQualifier$Kind, 'CONST', {get: TypeQualifier$Kind$CONST_getInstance});
  Object.defineProperty(TypeQualifier$Kind, 'RESTRICT', {get: TypeQualifier$Kind$RESTRICT_getInstance});
  Object.defineProperty(TypeQualifier$Kind, 'VOLATILE', {get: TypeQualifier$Kind$VOLATILE_getInstance});
  Object.defineProperty(TypeQualifier$Kind, 'ATOMIC', {get: TypeQualifier$Kind$ATOMIC_getInstance});
  Object.defineProperty(TypeQualifier$Kind, 'Companion', {get: TypeQualifier$Kind$Companion_getInstance});
  TypeQualifier.Kind = TypeQualifier$Kind;
  package$ktcc.TypeQualifier = TypeQualifier;
  package$ktcc.FunctionSpecifier = FunctionSpecifier;
  package$ktcc.AlignAsSpecifier = AlignAsSpecifier;
  package$ktcc.TypeName = TypeName;
  package$ktcc.tryTypeName_st2c3p$ = tryTypeName;
  package$ktcc.tryDirectAbstractDeclarator_st2c3p$ = tryDirectAbstractDeclarator;
  package$ktcc.AbstractDeclarator = AbstractDeclarator;
  package$ktcc.tryAbstractDeclarator_st2c3p$ = tryAbstractDeclarator;
  package$ktcc.declarationSpecifiers_ff223a$ = declarationSpecifiers;
  package$ktcc.tryTypeQualifier_st2c3p$ = tryTypeQualifier;
  package$ktcc.StructDeclarator = StructDeclarator;
  package$ktcc.StructDeclaration = StructDeclaration;
  package$ktcc.structDeclarator_st2c3p$ = structDeclarator;
  package$ktcc.tryStructDeclarator_st2c3p$ = tryStructDeclarator;
  package$ktcc.tryStructDeclaration_st2c3p$ = tryStructDeclaration;
  package$ktcc.tryDeclarationSpecifier_kvqfd6$ = tryDeclarationSpecifier;
  package$ktcc.Pointer = Pointer;
  package$ktcc.tryPointer_st2c3p$ = tryPointer;
  package$ktcc.ParameterDecl = ParameterDecl;
  package$ktcc.Declarator = Declarator;
  package$ktcc.VarargDeclarator = VarargDeclarator;
  package$ktcc.DeclaratorWithPointer = DeclaratorWithPointer;
  package$ktcc.IdentifierDeclarator = IdentifierDeclarator;
  package$ktcc.ParameterDeclarator = ParameterDeclarator;
  package$ktcc.ArrayDeclarator = ArrayDeclarator;
  package$ktcc.parameterDeclaration_st2c3p$ = parameterDeclaration;
  package$ktcc.declarator_st2c3p$ = declarator;
  package$ktcc.tryDeclarator_st2c3p$ = tryDeclarator;
  package$ktcc.Designator = Designator;
  package$ktcc.ArrayAccessDesignator = ArrayAccessDesignator;
  package$ktcc.FieldAccessDesignator = FieldAccessDesignator;
  package$ktcc.DesignatorList = DesignatorList;
  package$ktcc.tryDesignator_st2c3p$ = tryDesignator;
  package$ktcc.designatorList_st2c3p$ = designatorList;
  package$ktcc.tryDesignation_st2c3p$ = tryDesignation;
  package$ktcc.DesignOptInit = DesignOptInit;
  package$ktcc.designOptInitializer_st2c3p$ = designOptInitializer;
  package$ktcc.ArrayInitExpr = ArrayInitExpr;
  package$ktcc.initializer_csaeay$ = initializer;
  package$ktcc.InitDeclarator = InitDeclarator;
  package$ktcc.initDeclarator_csaeay$ = initDeclarator;
  package$ktcc.staticAssert_st2c3p$ = staticAssert;
  package$ktcc.tryDeclaration_ff223a$ = tryDeclaration;
  package$ktcc.Declaration = Declaration;
  package$ktcc.Declaration_yon2pe$ = Declaration_0;
  package$ktcc.declaration_ff223a$ = declaration;
  package$ktcc.recovery_36jzs6$ = recovery;
  package$ktcc.compoundStatement_st2c3p$ = compoundStatement;
  package$ktcc.toCParam_d4qpe3$ = toCParam;
  package$ktcc.extractParameter_fxcs27$ = extractParameter;
  package$ktcc.functionDefinition_st2c3p$ = functionDefinition;
  package$ktcc.tryExternalDeclaration_st2c3p$ = tryExternalDeclaration;
  package$ktcc.translationUnits_st2c3p$ = translationUnits;
  package$ktcc.program_st2c3p$ = program;
  package$ktcc.programParser_qit53o$ = programParser;
  package$ktcc.programParser_pdl1vz$ = programParser_0;
  package$ktcc.times_a5ehzx$ = times;
  package$ktcc.plus_a5ehzx$ = plus_1;
  package$ktcc.constantEvaluate_de5dvv$ = constantEvaluate;
  package$ktcc.PToken = PToken;
  package$ktcc.PreprocessorContext = PreprocessorContext;
  package$ktcc.skipSpaces_w6orpj$ = skipSpaces;
  package$ktcc.PIfCtx = PIfCtx;
  Object.defineProperty(IncludeKind, 'GLOBAL', {get: IncludeKind$GLOBAL_getInstance});
  Object.defineProperty(IncludeKind, 'LOCAL', {get: IncludeKind$LOCAL_getInstance});
  package$ktcc.IncludeKind = IncludeKind;
  package$ktcc.PreprocessorReader = PreprocessorReader;
  package$ktcc.skipSpaces_5m9c6a$ = skipSpaces_0;
  package$ktcc.CPreprocessor = CPreprocessor;
  package$ktcc.preprocess_wbgl1c$ = preprocess;
  package$ktcc.CToken = CToken;
  package$ktcc.tokenize_pdl1vz$ = tokenize;
  Object.defineProperty(IncludeMode, 'NORMAL', {get: IncludeMode$NORMAL_getInstance});
  Object.defineProperty(IncludeMode, 'EOL', {get: IncludeMode$EOL_getInstance});
  Object.defineProperty(IncludeMode, 'ALL', {get: IncludeMode$ALL_getInstance});
  package$ktcc.IncludeMode = IncludeMode;
  package$ktcc.doTokenize_2f0joy$ = doTokenize;
  package$ktcc.MutableTokenInfo = MutableTokenInfo;
  package$ktcc.doTokenize_f3zs7b$ = doTokenize_0;
  Object.defineProperty(FType, 'Companion', {get: FType$Companion_getInstance});
  package$ktcc.FType = FType;
  Object.defineProperty(package$ktcc, 'BoolFType', {get: BoolFType_getInstance});
  Object.defineProperty(package$ktcc, 'VariadicFType', {get: VariadicFType_getInstance});
  package$ktcc.IntFType = IntFType;
  package$ktcc.FloatFType = FloatFType;
  package$ktcc.BasePointerFType = BasePointerFType;
  package$ktcc.PointerFType = PointerFType;
  package$ktcc.ArrayFType = ArrayFType;
  package$ktcc.getStructTypeInfo_jev88v$ = getStructTypeInfo;
  package$ktcc.StructFType = StructFType;
  package$ktcc.UnknownFType = UnknownFType;
  package$ktcc.TypedefFTypeRef = TypedefFTypeRef;
  package$ktcc.TypedefFTypeName = TypedefFTypeName;
  package$ktcc.combine_pqu7pm$ = combine;
  package$ktcc.generateFinalType_oeligb$ = generateFinalType;
  package$ktcc.generatePointerType_5g7u6l$ = generatePointerType;
  package$ktcc.FunctionFType = FunctionFType;
  package$ktcc.generateFinalType_e7mbid$ = generateFinalType_0;
  package$ktcc.generateFinalType_u6iz87$ = generateFinalType_1;
  package$ktcc.withDeclarator_r0j8u7$ = withDeclarator;
  package$ktcc.withDeclarator_lfnksf$ = withDeclarator_0;
  package$ktcc.toFinalType_orppq2$ = toFinalType;
  package$ktcc.toFinalType_f41i3$ = toFinalType_0;
  package$ktcc.getName_fxcs27$ = getName;
  package$ktcc.getNameId_fxcs27$ = getNameId;
  package$ktcc.FTypeResolver = FTypeResolver;
  package$ktcc.canAssignTo_ldqltu$ = canAssignTo;
  CCompiler.prototype.Compilation = CCompiler$Compilation;
  var package$compiler = package$ktcc.compiler || (package$ktcc.compiler = {});
  Object.defineProperty(package$compiler, 'CCompiler', {get: CCompiler_getInstance});
  Object.defineProperty(KotlinGenerator$BreakScope$Kind, 'WHEN', {get: KotlinGenerator$BreakScope$Kind$WHEN_getInstance});
  Object.defineProperty(KotlinGenerator$BreakScope$Kind, 'WHILE', {get: KotlinGenerator$BreakScope$Kind$WHILE_getInstance});
  KotlinGenerator$BreakScope.Kind = KotlinGenerator$BreakScope$Kind;
  KotlinGenerator.BreakScope = KotlinGenerator$BreakScope;
  var package$gen = package$ktcc.gen || (package$ktcc.gen = {});
  package$gen.KotlinGenerator = KotlinGenerator;
  var package$runtime = package$ktcc.runtime || (package$ktcc.runtime = {});
  package$runtime.CIncludes = CIncludes;
  var package$transform = package$ktcc.transform || (package$ktcc.transform = {});
  Object.defineProperty(StmBuilder, 'Companion', {get: StmBuilder$Companion_getInstance});
  package$transform.StmBuilder = StmBuilder;
  Object.defineProperty(SwitchBuilder, 'Companion', {get: SwitchBuilder$Companion_getInstance});
  package$transform.SwitchBuilder = SwitchBuilder;
  package$transform.lower_2q1x2t$ = lower;
  package$transform.NodeVisitor = NodeVisitor;
  StateMachineLowerer.prototype.Output = StateMachineLowerer$Output;
  Object.defineProperty(package$transform, 'StateMachineLowerer', {get: StateMachineLowerer_getInstance});
  package$transform.Label = Label;
  package$transform.LowLabel = LowLabel;
  package$transform.LowGoto = LowGoto;
  package$transform.LowIfGoto = LowIfGoto;
  package$transform.LowSwitchGoto = LowSwitchGoto;
  package$transform.removeFallthrough_mscoaq$ = removeFallthrough;
  package$transform.TempContext = TempContext;
  package$transform.containsBreakOrContinue_6vsu9r$ = containsBreakOrContinue;
  var package$util = package$ktcc.util || (package$ktcc.util = {});
  package$util.isHexDigit_myv2d0$ = isHexDigit;
  package$util.isDigit_myv2d0$ = isDigit;
  package$util.isAlphaLC_myv2d0$ = isAlphaLC;
  package$util.isAlphaUC_myv2d0$ = isAlphaUC;
  package$util.isAlpha_myv2d0$ = isAlpha;
  package$util.isAlphaOrUnderscore_myv2d0$ = isAlphaOrUnderscore;
  package$util.isAlnumOrUnderscore_myv2d0$ = isAlnumOrUnderscore;
  package$util.isWhitespaceFast_myv2d0$ = isWhitespaceFast;
  Object.defineProperty(Indenter_0, 'Indent', {get: Indenter$Indent_getInstance});
  Object.defineProperty(Indenter_0, 'Unindent', {get: Indenter$Unindent_getInstance});
  package$util.Indenter = Indenter_0;
  Object.defineProperty(Indenter_0, 'Indents', {get: Indenter$Indents_getInstance});
  package$util.EOFException = EOFException;
  package$util.ExpectException = ExpectException;
  package$util.ListReader = ListReader;
  package$util.ItemOrError = ItemOrError;
  package$util.reader_bv23uc$ = reader;
  package$util.get_cescaped_pdl1vz$ = get_cescaped;
  package$util.get_cquoted_pdl1vz$ = get_cquoted;
  package$util.get_cunescaped_pdl1vz$ = get_cunescaped;
  package$util.get_cunquoted_pdl1vz$ = get_cunquoted;
  StrReader.MatchSet = StrReader$MatchSet;
  package$util.StrReader = StrReader;
  package$util.toStringUtf8_964n91$ = toStringUtf8;
  var package$internal = package$ktcc.internal || (package$ktcc.internal = {});
  package$internal.readFile_61zpoe$ = readFile;
  _.main_kand9s$ = main;
  _.CCompletion = CCompletion;
  _.AceCompletion = AceCompletion;
  _.get_row1_1hg1n$ = get_row1;
  _.AceAnnotation = AceAnnotation;
  _.utf8Encode_61zpoe$ = utf8Encode;
  _.jsObject_gpdhqq$ = jsObject;
  compoundStatementRecoveryTokens = setOf([';', '}', 'if', 'return', 'switch', 'while', 'do', 'for', 'goto', 'continue', 'break']);
  keywords = setOf(['auto', 'break', 'case', 'char', 'const', 'continue', 'default', 'do', 'double', 'else', 'enum', 'extern', 'float', 'for', 'goto', 'if', 'inline', 'int', 'long', 'register', 'restrict', 'return', 'short', 'signed', 'sizeof', 'static', 'struct', 'switch', 'typedef', 'union', 'unsigned', 'void', 'volatile', 'while', '_Alignas', '_Alignof', '_Atomic', '_Bool', '_Complex', '_Generic', '_Imaginary', '_Noreturn', '_Static_assert', '_Thread_local']);
  storageClassSpecifiers = setOf(['typedef', 'extern', 'static', '_Thread_local', 'auto', 'register']);
  typeSpecifier_0 = setOf(['void', 'char', 'short', 'int', 'long', 'float', 'double', 'signed', 'unsigned', '_Bool', '_Complex']);
  unaryOperators = setOf(['&', '*', '+', '-', '~', '!']);
  assignmentOperators = setOf(['=', '*=', '/=', '%=', '+=', '-=', '<<=', '>>=', '&=', '^=', '|=']);
  binaryOperators = setOf(['*', '/', '%', '+', '-', '<<', '>>', '<', '>', '<=', '>=', '==', '!=', '&', '^', '|', '&&', '||']);
  ternaryOperators = setOf(['?', ':']);
  postPreFixOperators = setOf(['++', '--']);
  allOperators = plus_0(plus_0(plus_0(plus_0(unaryOperators, binaryOperators), ternaryOperators), postPreFixOperators), assignmentOperators);
  allSymbols = plus_0(allOperators, setOf(['->', '(', ')', '[', ']', '{', '}', ';', ',', '.', '...', '#', '##']));
  sym3 = lazy(sym3$lambda);
  sym2 = lazy(sym2$lambda);
  sym1 = lazy(sym1$lambda);
  var $receiver = new CIncludes();
  $receiver.FILE_6hosri$('stdint.h', trimIndent('\n            '));
  $receiver.FILE_6hosri$('stdio.h', trimIndent('\n                int putchar(int c);\n                void printf(char *fmt, ...);\n            '));
  $receiver.FILE_6hosri$('stdlib.h', trimIndent('\n            '));
  $receiver.FILE_6hosri$('string.h', trimIndent('\n            '));
  $receiver.FILE_6hosri$('assert.h', trimIndent('\n                #define assert(ignore)((void) 0)\n            '));
  $receiver.FILE_6hosri$('ctype.h', trimIndent('\n                int isalnum(int c);\n                int isalpha(int c);\n                int isblank(int c);\n                int iscntrl(int c);\n                int isdigit(int c);\n                int isgraph(int c);\n                int islower(int c);\n                int isprint(int c);\n                int ispunct(int c);\n                int isspace(int c);\n                int isupper(int c);\n                int isxdigit(int c);\n                int tolower(int c);\n                int toupper(int c);\n            '), trimIndent("\n                fun isalpha(c: Int) { return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z'); }\n            "));
  $receiver.FILE_6hosri$('sys/_types/size_t.h', trimIndent('\n                typedef int size_t;\n            '));
  $receiver.FILE_6hosri$('string.h', trimIndent('\n                #include <sys/_types/size_t.h>\n                #define NULL ((void *)(0))\n                void *memset(void *s, int c, size_t n);\n            '));
  CStdIncludes = toMap($receiver.map);
  RuntimeCode = "// KTCC RUNTIME ///////////////////////////////////////////////////\n\ntypealias size_t = Int\n\n/*!!inline*/ class CPointer<T>(val ptr: Int)\n\nopen class Runtime(val REQUESTED_HEAP_SIZE: Int = 0) {\n    val HEAP_SIZE = if (REQUESTED_HEAP_SIZE <= 0) 16 * 1024 * 1024 else REQUESTED_HEAP_SIZE // 16 MB default\n    val HEAP = java.nio.ByteBuffer.allocateDirect(HEAP_SIZE).order(java.nio.ByteOrder.LITTLE_ENDIAN)\n\n    var STACK_PTR = 512 * 1024 // 0.5 MB\n    var HEAP_PTR = STACK_PTR\n\n    fun lb(ptr: Int) = HEAP[ptr]\n    fun sb(ptr: Int, value: Byte) = run { HEAP.put(ptr, value) }\n\n    fun lh(ptr: Int): Short = HEAP.getShort(ptr)\n    fun sh(ptr: Int, value: Short): Unit = run { HEAP.putShort(ptr, value) }\n\n    fun lw(ptr: Int): Int = HEAP.getInt(ptr)\n    fun sw(ptr: Int, value: Int): Unit = run { HEAP.putInt(ptr, value) }\n\n    inline fun <T> Int.toCPointer(): CPointer<T> = CPointer(this)\n    inline fun <T> CPointer<*>.toCPointer(): CPointer<T> = CPointer(this.ptr)\n\n    operator fun CPointer<Short>.get(offset: Int): Short = lh(this.ptr + offset * 2)\n    operator fun CPointer<Short>.set(offset: Int, value: Short) = sh(this.ptr + offset * 2, value)\n\n    operator fun CPointer<Int>.get(offset: Int): Int = lw(this.ptr + offset * 4)\n    operator fun CPointer<Int>.set(offset: Int, value: Int) = sw(this.ptr + offset * 4, value)\n\n    operator fun CPointer<Byte>.get(offset: Int): Byte = lb(this.ptr + offset * 1)\n    operator fun CPointer<Byte>.set(offset: Int, value: Byte) = sb(this.ptr + offset * 1, value)\n\n    operator fun <T> CPointer<CPointer<T>>.get(offset: Int): CPointer<T> = CPointer<T>(lw(this.ptr + offset * 4))\n    operator fun <T> CPointer<CPointer<T>>.set(offset: Int, value: CPointer<T>) = sw(this.ptr + offset * 4, value.ptr)\n\n    fun <T> CPointer<T>.addPtr(offset: Int, elementSize: Int) = CPointer<T>(this.ptr + offset * elementSize)\n\n    fun CPointer<Byte>.plus(offset: Int, dummy: Byte = 0) = addPtr<Byte>(offset, 1)\n    fun CPointer<Byte>.minus(offset: Int, dummy: Byte = 0) = addPtr<Byte>(-offset, 1)\n\n    fun CPointer<Int>.plus(offset: Int, dummy: Int = 0) = addPtr<Int>(offset, 4)\n    fun CPointer<Int>.minus(offset: Int, dummy: Int = 0) = addPtr<Int>(-offset, 4)\n\n    fun <T> CPointer<CPointer<T>>.plus(offset: Int, dummy: Unit = Unit) = addPtr<CPointer<T>>(offset, 4)\n    fun <T> CPointer<CPointer<T>>.minus(offset: Int, dummy: Unit = Unit) = addPtr<CPointer<T>>(-offset, 4)\n\n    fun Int.toBool() = this != 0\n    fun Boolean.toBool() = this\n\n    // STACK ALLOC\n    inline fun <T> stackFrame(callback: () -> T): T {\n        val oldPos = STACK_PTR\n        return try { callback() } finally { STACK_PTR = oldPos }\n    }\n    fun alloca(size: Int): CPointer<Unit> = CPointer<Unit>((STACK_PTR - size).also { STACK_PTR -= size })\n\n    // HEAP ALLOC\n    fun malloc(size: Int): CPointer<Unit> = CPointer<Unit>(HEAP_PTR.also { HEAP_PTR += size })\n    fun free(ptr: CPointer<*>): Unit = Unit // @TODO\n\n    // I/O\n    fun putchar(c: Int): Int = c.also { System.out.print(c.toChar()) }\n\n    fun printf(format: CPointer<Byte>, vararg params: Any?) {\n        var paramPos = 0;\n        val fmt = format.readStringz()\n        var n = 0\n        while (n < fmt.length) {\n            val c = fmt[n++]\n            if (c == '%') {\n                val c2 = fmt[n++]\n                when (c2) {\n                    'd' -> print((params[paramPos++] as Number).toInt())\n                    's' -> print(params[paramPos++])\n                    else -> {\n                        print(c)\n                        print(c2)\n                    }\n                }\n            } else {\n            putchar(c.toInt())\n            }\n        }\n    }\n\n    // string/memory\n    fun memset(ptr: CPointer<*>, value: Int, num: size_t): CPointer<Unit> = (ptr as CPointer<Unit>).also { for (n in 0 until num) sb(ptr.ptr + value, value.toByte()) }\n    fun memcpy(dest: CPointer<Unit>, src: CPointer<Unit>, num: size_t): CPointer<Unit> {\n        for (n in 0 until num) {\n            sb(dest.ptr + n, lb(src.ptr + n))\n        }\n        return dest as CPointer<Unit>\n    }\n\n    private val STRINGS = LinkedHashMap<String, CPointer<Byte>>()\n\n    // @TODO: UTF-8?\n    fun CPointer<Byte>.readStringz(): String {\n        var sb = StringBuilder()\n        var pos = this.ptr\n        while (true) {\n            val c = lb(pos++)\n            if (c == 0.toByte()) break\n            sb.append(c.toChar())\n        }\n        return sb.toString()\n    }\n\n    val String.ptr: CPointer<Byte> get() = STRINGS.getOrPut(this) {\n        val bytes = this.toByteArray(Charsets.UTF_8)\n        val ptr = malloc(bytes.size + 1).toCPointer<Byte>()\n        val p = ptr.ptr\n        for (n in 0 until bytes.size) sb(p + n, bytes[n])\n        sb(p + bytes.size, 0)\n        ptr\n    }\n}\n///////////////////////////////////////////////////////////////////\n";
  files = LinkedHashMap_init();
  main([]);
  return _;
}));

//# sourceMappingURL=ktcc.js.map
