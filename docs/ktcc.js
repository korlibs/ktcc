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
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var toShort = Kotlin.toShort;
  var toByte = Kotlin.toByte;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var L4294967295 = new Kotlin.Long(-1, 0);
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var toChar = Kotlin.toChar;
  var toBoxedChar = Kotlin.toBoxedChar;
  var print = Kotlin.kotlin.io.print_s8jyv4$;
  var Error_init = Kotlin.kotlin.Error_init;
  var Error_0 = Kotlin.kotlin.Error;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var CharRange = Kotlin.kotlin.ranges.CharRange;
  var repeat = Kotlin.kotlin.text.repeat_94bcnn$;
  var toString = Kotlin.toString;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var numberToDouble = Kotlin.numberToDouble;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_8ujjk8$;
  var unboxChar = Kotlin.unboxChar;
  var UByte = Kotlin.kotlin.UByte;
  var UShort = Kotlin.kotlin.UShort;
  var UInt = Kotlin.kotlin.UInt;
  var numberToInt = Kotlin.numberToInt;
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var throwCCE = Kotlin.throwCCE;
  var toString_0 = Kotlin.kotlin.text.toString_dqglrj$;
  var padStart = Kotlin.kotlin.text.padStart_vrc1nu$;
  var toString_1 = Kotlin.kotlin.text.toString_k13f4a$;
  var toString_2 = Kotlin.kotlin.text.toString_if0zpk$;
  var copyOf = Kotlin.kotlin.collections.copyOf_mrm5p$;
  var decodeToString = Kotlin.kotlin.text.decodeToString_964n91$;
  var encodeToByteArray = Kotlin.kotlin.text.encodeToByteArray_pdl1vz$;
  var toBits = Kotlin.floatToBits;
  var toBits_0 = Kotlin.doubleToBits;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var time = Kotlin.kotlin.time;
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var Math_0 = Math;
  var ULong_init = Kotlin.kotlin.ULong;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var setOf = Kotlin.kotlin.collections.setOf_i5x0yv$;
  var equals = Kotlin.equals;
  var removePrefix = Kotlin.kotlin.text.removePrefix_gsj5wt$;
  var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var substringBeforeLast = Kotlin.kotlin.text.substringBeforeLast_8cymmc$;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var plus = Kotlin.kotlin.collections.plus_mydzjv$;
  var toList_0 = Kotlin.kotlin.collections.toList_7wnvza$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var Unit = Kotlin.kotlin.Unit;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var ensureNotNull = Kotlin.ensureNotNull;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var numberToByte = Kotlin.numberToByte;
  var numberToShort = Kotlin.numberToShort;
  var numberToLong = Kotlin.numberToLong;
  var withIndex = Kotlin.kotlin.collections.withIndex_7wnvza$;
  var getOrNull_0 = Kotlin.kotlin.collections.getOrNull_yzln2o$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var Collection = Kotlin.kotlin.collections.Collection;
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  var emptySet = Kotlin.kotlin.collections.emptySet_287e2$;
  var Map = Kotlin.kotlin.collections.Map;
  var trimEnd = Kotlin.kotlin.text.trimEnd_wqw3xr$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var lines = Kotlin.kotlin.text.lines_gw00vp$;
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  var HashSet_init = Kotlin.kotlin.collections.HashSet_init_287e2$;
  var trimIndent = Kotlin.kotlin.text.trimIndent_pdl1vz$;
  var toMap = Kotlin.kotlin.collections.toMap_abgq59$;
  var startsWith_0 = Kotlin.kotlin.text.startsWith_sgbm27$;
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  var toULong = Kotlin.kotlin.text.toULong_6ic1pp$;
  var toLong = Kotlin.kotlin.text.toLong_pdl1vz$;
  var firstOrNull = Kotlin.kotlin.text.firstOrNull_gw00vp$;
  var contains_0 = Kotlin.kotlin.text.contains_sgbm27$;
  var endsWith = Kotlin.kotlin.text.endsWith_sgbm27$;
  var removeSuffix = Kotlin.kotlin.text.removeSuffix_gsj5wt$;
  var endsWith_0 = Kotlin.kotlin.text.endsWith_7epoxm$;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var drop = Kotlin.kotlin.collections.drop_ba2ldo$;
  var zip = Kotlin.kotlin.collections.zip_45mdf7$;
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var get_lastIndex = Kotlin.kotlin.text.get_lastIndex_gw00vp$;
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var Comparator = Kotlin.kotlin.Comparator;
  var reversed = Kotlin.kotlin.collections.reversed_7wnvza$;
  var getCallableRef = Kotlin.getCallableRef;
  var firstOrNull_0 = Kotlin.kotlin.collections.firstOrNull_2p1efm$;
  var Throwable = Error;
  var toDoubleOrNull = Kotlin.kotlin.text.toDoubleOrNull_pdl1vz$;
  var plus_0 = Kotlin.kotlin.collections.plus_khz7k3$;
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  var get_lastIndex_0 = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  var lastOrNull = Kotlin.kotlin.collections.lastOrNull_2p1efm$;
  var contains_1 = Kotlin.kotlin.collections.contains_mjy6jw$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var trimStart = Kotlin.kotlin.text.trimStart_wqw3xr$;
  var toMap_0 = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var toMutableMap = Kotlin.kotlin.collections.toMutableMap_abgq59$;
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  var Result = Kotlin.kotlin.Result;
  var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
  var Any = Object;
  var getKClass = Kotlin.getKClass;
  var Annotation = Kotlin.kotlin.Annotation;
  var dropLast = Kotlin.kotlin.collections.dropLast_yzln2o$;
  var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init_pdl1vj$;
  var Exception = Kotlin.kotlin.Exception;
  var Array_0 = Array;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init;
  var RuntimeException = Kotlin.kotlin.RuntimeException;
  var MutableMap = Kotlin.kotlin.collections.MutableMap;
  var substring = Kotlin.kotlin.text.substring_fc3b62$;
  var max = Kotlin.kotlin.collections.max_exjks8$;
  var indexOf = Kotlin.kotlin.collections.indexOf_2ws7j4$;
  var filterNotNull = Kotlin.kotlin.collections.filterNotNull_m3lr2h$;
  Runtime.prototype = Object.create(AbstractRuntime.prototype);
  Runtime.prototype.constructor = Runtime;
  AbstractRuntime$ExitError.prototype = Object.create(Error_0.prototype);
  AbstractRuntime$ExitError.prototype.constructor = AbstractRuntime$ExitError;
  CGenerator.prototype = Object.create(BaseGenerator.prototype);
  CGenerator.prototype.constructor = CGenerator;
  CTarget.prototype = Object.create(BaseTarget.prototype);
  CTarget.prototype.constructor = CTarget;
  CSharpGenerator.prototype = Object.create(BaseGenerator.prototype);
  CSharpGenerator.prototype.constructor = CSharpGenerator;
  CSharpTarget.prototype = Object.create(BaseTarget.prototype);
  CSharpTarget.prototype.constructor = CSharpTarget;
  BaseGenerator$BreakScope$Kind.prototype = Object.create(Enum.prototype);
  BaseGenerator$BreakScope$Kind.prototype.constructor = BaseGenerator$BreakScope$Kind;
  KotlinGenerator.prototype = Object.create(BaseGenerator.prototype);
  KotlinGenerator.prototype.constructor = KotlinGenerator;
  KotlinTarget.prototype = Object.create(BaseTarget.prototype);
  KotlinTarget.prototype.constructor = KotlinTarget;
  DummyNode.prototype = Object.create(Node.prototype);
  DummyNode.prototype.constructor = DummyNode;
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
  NumericConstant.prototype = Object.create(Expr.prototype);
  NumericConstant.prototype.constructor = NumericConstant;
  NumberConstant.prototype = Object.create(NumericConstant.prototype);
  NumberConstant.prototype.constructor = NumberConstant;
  IntConstant_3.prototype = Object.create(NumericConstant.prototype);
  IntConstant_3.prototype.constructor = IntConstant_3;
  DecimalConstant_0.prototype = Object.create(NumericConstant.prototype);
  DecimalConstant_0.prototype.constructor = DecimalConstant_0;
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
  Unop.prototype = Object.create(BaseUnaryOp.prototype);
  Unop.prototype.constructor = Unop;
  PostfixExpr.prototype = Object.create(BaseUnaryOp.prototype);
  PostfixExpr.prototype.constructor = PostfixExpr;
  AssignExpr.prototype = Object.create(Expr.prototype);
  AssignExpr.prototype.constructor = AssignExpr;
  SimpleAssignExpr.prototype = Object.create(Expr.prototype);
  SimpleAssignExpr.prototype.constructor = SimpleAssignExpr;
  ArrayAccessExpr.prototype = Object.create(LValue.prototype);
  ArrayAccessExpr.prototype.constructor = ArrayAccessExpr;
  FieldAccessExpr.prototype = Object.create(LValue.prototype);
  FieldAccessExpr.prototype.constructor = FieldAccessExpr;
  CallExpr.prototype = Object.create(Expr.prototype);
  CallExpr.prototype.constructor = CallExpr;
  BinOperatorsExpr$MutBinop.prototype = Object.create(Expr.prototype);
  BinOperatorsExpr$MutBinop.prototype.constructor = BinOperatorsExpr$MutBinop;
  BinOperatorsExpr.prototype = Object.create(Expr.prototype);
  BinOperatorsExpr.prototype.constructor = BinOperatorsExpr;
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
  CParamBase.prototype = Object.create(Node.prototype);
  CParamBase.prototype.constructor = CParamBase;
  CParamVariadic.prototype = Object.create(CParamBase.prototype);
  CParamVariadic.prototype.constructor = CParamVariadic;
  CParam.prototype = Object.create(CParamBase.prototype);
  CParam.prototype.constructor = CParam;
  Decl.prototype = Object.create(Stm.prototype);
  Decl.prototype.constructor = Decl;
  VarDeclaration.prototype = Object.create(Decl.prototype);
  VarDeclaration.prototype.constructor = VarDeclaration;
  FuncDeclaration.prototype = Object.create(Decl.prototype);
  FuncDeclaration.prototype.constructor = FuncDeclaration;
  CastExpr.prototype = Object.create(Expr.prototype);
  CastExpr.prototype.constructor = CastExpr;
  SizeOfAlignExprBase.prototype = Object.create(Expr.prototype);
  SizeOfAlignExprBase.prototype.constructor = SizeOfAlignExprBase;
  SizeOfAlignTypeExpr.prototype = Object.create(SizeOfAlignExprBase.prototype);
  SizeOfAlignTypeExpr.prototype.constructor = SizeOfAlignTypeExpr;
  SizeOfAlignExprExpr.prototype = Object.create(SizeOfAlignExprBase.prototype);
  SizeOfAlignExprExpr.prototype.constructor = SizeOfAlignExprExpr;
  TenaryExpr.prototype = Object.create(Expr.prototype);
  TenaryExpr.prototype.constructor = TenaryExpr;
  Program.prototype = Object.create(Node.prototype);
  Program.prototype.constructor = Program;
  DesignOptInit.prototype = Object.create(Node.prototype);
  DesignOptInit.prototype.constructor = DesignOptInit;
  ArrayInitExpr.prototype = Object.create(Expr.prototype);
  ArrayInitExpr.prototype.constructor = ArrayInitExpr;
  Declarator.prototype = Object.create(Node.prototype);
  Declarator.prototype.constructor = Declarator;
  ParameterDecl.prototype = Object.create(Node.prototype);
  ParameterDecl.prototype.constructor = ParameterDecl;
  StructDeclarator.prototype = Object.create(Node.prototype);
  StructDeclarator.prototype.constructor = StructDeclarator;
  StructDeclaration.prototype = Object.create(Node.prototype);
  StructDeclaration.prototype.constructor = StructDeclaration;
  Pointer.prototype = Object.create(Node.prototype);
  Pointer.prototype.constructor = Pointer;
  VarargDeclarator.prototype = Object.create(Declarator.prototype);
  VarargDeclarator.prototype.constructor = VarargDeclarator;
  DeclaratorWithPointer.prototype = Object.create(Declarator.prototype);
  DeclaratorWithPointer.prototype.constructor = DeclaratorWithPointer;
  IdentifierDeclarator.prototype = Object.create(Declarator.prototype);
  IdentifierDeclarator.prototype.constructor = IdentifierDeclarator;
  CompoundDeclarator.prototype = Object.create(Declarator.prototype);
  CompoundDeclarator.prototype.constructor = CompoundDeclarator;
  ParameterDeclarator.prototype = Object.create(Declarator.prototype);
  ParameterDeclarator.prototype.constructor = ParameterDeclarator;
  ArrayDeclarator.prototype = Object.create(Declarator.prototype);
  ArrayDeclarator.prototype.constructor = ArrayDeclarator;
  DeclaratorPostfix.prototype = Object.create(Node.prototype);
  DeclaratorPostfix.prototype.constructor = DeclaratorPostfix;
  ParamDeclaratorPostfix.prototype = Object.create(DeclaratorPostfix.prototype);
  ParamDeclaratorPostfix.prototype.constructor = ParamDeclaratorPostfix;
  ArrayDeclaratorPostfix.prototype = Object.create(DeclaratorPostfix.prototype);
  ArrayDeclaratorPostfix.prototype.constructor = ArrayDeclaratorPostfix;
  Designator.prototype = Object.create(Node.prototype);
  Designator.prototype.constructor = Designator;
  ArrayAccessDesignator.prototype = Object.create(Designator.prototype);
  ArrayAccessDesignator.prototype.constructor = ArrayAccessDesignator;
  FieldAccessDesignator.prototype = Object.create(Designator.prototype);
  FieldAccessDesignator.prototype.constructor = FieldAccessDesignator;
  DesignatorList.prototype = Object.create(Node.prototype);
  DesignatorList.prototype.constructor = DesignatorList;
  InitDeclarator.prototype = Object.create(Node.prototype);
  InitDeclarator.prototype.constructor = InitDeclarator;
  TypeSpecifier.prototype = Object.create(Node.prototype);
  TypeSpecifier.prototype.constructor = TypeSpecifier;
  VariadicTypeSpecifier.prototype = Object.create(TypeSpecifier.prototype);
  VariadicTypeSpecifier.prototype.constructor = VariadicTypeSpecifier;
  ListTypeSpecifier.prototype = Object.create(TypeSpecifier.prototype);
  ListTypeSpecifier.prototype.constructor = ListTypeSpecifier;
  AtomicTypeSpecifier.prototype = Object.create(TypeSpecifier.prototype);
  AtomicTypeSpecifier.prototype.constructor = AtomicTypeSpecifier;
  BasicTypeSpecifier$Kind$Companion.prototype = Object.create(KeywordEnum$Companion.prototype);
  BasicTypeSpecifier$Kind$Companion.prototype.constructor = BasicTypeSpecifier$Kind$Companion;
  BasicTypeSpecifier$Kind.prototype = Object.create(Enum.prototype);
  BasicTypeSpecifier$Kind.prototype.constructor = BasicTypeSpecifier$Kind;
  BasicTypeSpecifier.prototype = Object.create(TypeSpecifier.prototype);
  BasicTypeSpecifier.prototype.constructor = BasicTypeSpecifier;
  RefTypeSpecifier.prototype = Object.create(TypeSpecifier.prototype);
  RefTypeSpecifier.prototype.constructor = RefTypeSpecifier;
  AnonymousTypeSpecifier.prototype = Object.create(TypeSpecifier.prototype);
  AnonymousTypeSpecifier.prototype.constructor = AnonymousTypeSpecifier;
  StructUnionTypeSpecifier.prototype = Object.create(TypeSpecifier.prototype);
  StructUnionTypeSpecifier.prototype.constructor = StructUnionTypeSpecifier;
  StructUnionRefTypeSpecifier.prototype = Object.create(TypeSpecifier.prototype);
  StructUnionRefTypeSpecifier.prototype.constructor = StructUnionRefTypeSpecifier;
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
  EnumTypeSpecifier.prototype = Object.create(TypeSpecifier.prototype);
  EnumTypeSpecifier.prototype.constructor = EnumTypeSpecifier;
  EnumItemDef.prototype = Object.create(Node.prototype);
  EnumItemDef.prototype.constructor = EnumItemDef;
  KeywordInfo.prototype = Object.create(AutocompletionInfo.prototype);
  KeywordInfo.prototype.constructor = KeywordInfo;
  TypeInfo.prototype = Object.create(AutocompletionInfo.prototype);
  TypeInfo.prototype.constructor = TypeInfo;
  SymbolInfo.prototype = Object.create(AutocompletionInfo.prototype);
  SymbolInfo.prototype.constructor = SymbolInfo;
  ProgramMessage$Level.prototype = Object.create(Enum.prototype);
  ProgramMessage$Level.prototype.constructor = ProgramMessage$Level;
  ExpectException.prototype = Object.create(Exception.prototype);
  ExpectException.prototype.constructor = ExpectException;
  ParserException.prototype = Object.create(ExpectException.prototype);
  ParserException.prototype.constructor = ParserException;
  ProgramParser.prototype = Object.create(ListReader.prototype);
  ProgramParser.prototype.constructor = ProgramParser;
  PreprocessorContext.prototype = Object.create(EvalContext.prototype);
  PreprocessorContext.prototype.constructor = PreprocessorContext;
  IncludeKind.prototype = Object.create(Enum.prototype);
  IncludeKind.prototype.constructor = IncludeKind;
  PreprocessorReader.prototype = Object.create(ListReader.prototype);
  PreprocessorReader.prototype.constructor = PreprocessorReader;
  PLiterals.prototype = Object.create(PNode.prototype);
  PLiterals.prototype.constructor = PLiterals;
  PIf.prototype = Object.create(PNode.prototype);
  PIf.prototype.constructor = PIf;
  PDefine.prototype = Object.create(PNode.prototype);
  PDefine.prototype.constructor = PDefine;
  PInclude.prototype = Object.create(PNode.prototype);
  PInclude.prototype.constructor = PInclude;
  PPragma.prototype = Object.create(PNode.prototype);
  PPragma.prototype.constructor = PPragma;
  PError.prototype = Object.create(PNode.prototype);
  PError.prototype.constructor = PError;
  PLine.prototype = Object.create(PNode.prototype);
  PLine.prototype.constructor = PLine;
  PUndef.prototype = Object.create(PNode.prototype);
  PUndef.prototype.constructor = PUndef;
  CPreprocessor$tryGroupPart$lambda$ObjectLiteral.prototype = Object.create(EvalContext.prototype);
  CPreprocessor$tryGroupPart$lambda$ObjectLiteral.prototype.constructor = CPreprocessor$tryGroupPart$lambda$ObjectLiteral;
  IncludeMode.prototype = Object.create(Enum.prototype);
  IncludeMode.prototype.constructor = IncludeMode;
  LowLabel.prototype = Object.create(Stm.prototype);
  LowLabel.prototype.constructor = LowLabel;
  LowGoto.prototype = Object.create(Stm.prototype);
  LowGoto.prototype.constructor = LowGoto;
  LowIfGoto.prototype = Object.create(Stm.prototype);
  LowIfGoto.prototype.constructor = LowIfGoto;
  LowSwitchGoto.prototype = Object.create(Stm.prototype);
  LowSwitchGoto.prototype.constructor = LowSwitchGoto;
  PrimType.prototype = Object.create(Type.prototype);
  PrimType.prototype.constructor = PrimType;
  NumberType.prototype = Object.create(PrimType.prototype);
  NumberType.prototype.constructor = NumberType;
  BoolType.prototype = Object.create(PrimType.prototype);
  BoolType.prototype.constructor = BoolType;
  IntType.prototype = Object.create(NumberType.prototype);
  IntType.prototype.constructor = IntType;
  FloatingType.prototype = Object.create(NumberType.prototype);
  FloatingType.prototype.constructor = FloatingType;
  FloatType.prototype = Object.create(FloatingType.prototype);
  FloatType.prototype.constructor = FloatType;
  DoubleType.prototype = Object.create(FloatingType.prototype);
  DoubleType.prototype.constructor = DoubleType;
  VariadicType.prototype = Object.create(PrimType.prototype);
  VariadicType.prototype.constructor = VariadicType;
  DummyType.prototype = Object.create(PrimType.prototype);
  DummyType.prototype.constructor = DummyType;
  BaseReferenceableType.prototype = Object.create(Type.prototype);
  BaseReferenceableType.prototype.constructor = BaseReferenceableType;
  BasePointerType.prototype = Object.create(BaseReferenceableType.prototype);
  BasePointerType.prototype.constructor = BasePointerType;
  PointerType.prototype = Object.create(BasePointerType.prototype);
  PointerType.prototype.constructor = PointerType;
  ArrayType.prototype = Object.create(BasePointerType.prototype);
  ArrayType.prototype.constructor = ArrayType;
  EnumType.prototype = Object.create(Type.prototype);
  EnumType.prototype.constructor = EnumType;
  StructType.prototype = Object.create(BaseReferenceableType.prototype);
  StructType.prototype.constructor = StructType;
  UnknownType.prototype = Object.create(PrimType.prototype);
  UnknownType.prototype.constructor = UnknownType;
  RefType.prototype = Object.create(Type.prototype);
  RefType.prototype.constructor = RefType;
  TypedefTypeName.prototype = Object.create(Type.prototype);
  TypedefTypeName.prototype.constructor = TypedefTypeName;
  FParamVariadic.prototype = Object.create(FParamBase.prototype);
  FParamVariadic.prototype.constructor = FParamVariadic;
  FParam.prototype = Object.create(FParamBase.prototype);
  FParam.prototype.constructor = FParam;
  FunctionType.prototype = Object.create(Type.prototype);
  FunctionType.prototype.constructor = FunctionType;
  UnexpectedException.prototype = Object.create(Exception.prototype);
  UnexpectedException.prototype.constructor = UnexpectedException;
  EOFException.prototype = Object.create(RuntimeException.prototype);
  EOFException.prototype.constructor = EOFException;
  main$lambda$ObjectLiteral.prototype = Object.create(CompilationRef.prototype);
  main$lambda$ObjectLiteral.prototype.constructor = main$lambda$ObjectLiteral;
  function CPointer(ptr) {
    this.ptr = ptr;
  }
  CPointer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CPointer',
    interfaces: []
  };
  CPointer.prototype.unbox = function () {
    return this.ptr;
  };
  CPointer.prototype.toString = function () {
    return 'CPointer(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  CPointer.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  CPointer.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function CFunction0(ptr) {
    this.ptr = ptr;
  }
  CFunction0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CFunction0',
    interfaces: []
  };
  CFunction0.prototype.unbox = function () {
    return this.ptr;
  };
  CFunction0.prototype.toString = function () {
    return 'CFunction0(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  CFunction0.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  CFunction0.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function CFunction1(ptr) {
    this.ptr = ptr;
  }
  CFunction1.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CFunction1',
    interfaces: []
  };
  CFunction1.prototype.unbox = function () {
    return this.ptr;
  };
  CFunction1.prototype.toString = function () {
    return 'CFunction1(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  CFunction1.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  CFunction1.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function CFunction2(ptr) {
    this.ptr = ptr;
  }
  CFunction2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CFunction2',
    interfaces: []
  };
  CFunction2.prototype.unbox = function () {
    return this.ptr;
  };
  CFunction2.prototype.toString = function () {
    return 'CFunction2(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  CFunction2.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  CFunction2.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function CFunction3(ptr) {
    this.ptr = ptr;
  }
  CFunction3.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CFunction3',
    interfaces: []
  };
  CFunction3.prototype.unbox = function () {
    return this.ptr;
  };
  CFunction3.prototype.toString = function () {
    return 'CFunction3(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  CFunction3.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  CFunction3.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function CFunction4(ptr) {
    this.ptr = ptr;
  }
  CFunction4.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CFunction4',
    interfaces: []
  };
  CFunction4.prototype.unbox = function () {
    return this.ptr;
  };
  CFunction4.prototype.toString = function () {
    return 'CFunction4(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  CFunction4.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  CFunction4.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function CFunction5(ptr) {
    this.ptr = ptr;
  }
  CFunction5.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CFunction5',
    interfaces: []
  };
  CFunction5.prototype.unbox = function () {
    return this.ptr;
  };
  CFunction5.prototype.toString = function () {
    return 'CFunction5(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  CFunction5.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  CFunction5.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function CFunction6(ptr) {
    this.ptr = ptr;
  }
  CFunction6.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CFunction6',
    interfaces: []
  };
  CFunction6.prototype.unbox = function () {
    return this.ptr;
  };
  CFunction6.prototype.toString = function () {
    return 'CFunction6(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  CFunction6.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  CFunction6.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function CFunction7(ptr) {
    this.ptr = ptr;
  }
  CFunction7.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CFunction7',
    interfaces: []
  };
  CFunction7.prototype.unbox = function () {
    return this.ptr;
  };
  CFunction7.prototype.toString = function () {
    return 'CFunction7(ptr=' + Kotlin.toString(this.ptr) + ')';
  };
  CFunction7.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ptr) | 0;
    return result;
  };
  CFunction7.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ptr, other.ptr))));
  };
  function Runtime(REQUESTED_HEAP_SIZE, REQUESTED_STACK_PTR, __syscalls) {
    if (REQUESTED_HEAP_SIZE === void 0)
      REQUESTED_HEAP_SIZE = 0;
    if (REQUESTED_STACK_PTR === void 0)
      REQUESTED_STACK_PTR = 0;
    if (__syscalls === void 0)
      __syscalls = DummyRuntimeSyscalls_getInstance();
    AbstractRuntime.call(this, REQUESTED_HEAP_SIZE, REQUESTED_STACK_PTR, __syscalls);
    this.HEAP = new Int8Array(this.HEAP_SIZE);
  }
  Runtime.prototype.lb_za3lpa$ = function (ptr) {
    return this.HEAP[ptr];
  };
  Runtime.prototype.sb_6t1wet$ = function (ptr, value) {
    this.HEAP[ptr] = value;
  };
  Runtime.prototype.lh_za3lpa$ = function (ptr) {
    return toShort(this.lbu_za3lpa$(ptr) << 0 | this.lbu_za3lpa$(ptr + 1 | 0) << 8);
  };
  Runtime.prototype.sh_2bqt6h$ = function (ptr, value) {
    this.sb_6t1wet$(ptr, toByte(value >>> 0));
    this.sb_6t1wet$(ptr + 1 | 0, toByte(value >>> 8));
  };
  Runtime.prototype.lw_za3lpa$ = function (ptr) {
    return this.lbu_za3lpa$(ptr) << 0 | this.lbu_za3lpa$(ptr + 1 | 0) << 8 | this.lbu_za3lpa$(ptr + 2 | 0) << 16 | this.lbu_za3lpa$(ptr + 3 | 0) << 24;
  };
  Runtime.prototype.sw_vux9f0$ = function (ptr, value) {
    this.sb_6t1wet$(ptr, toByte(value >>> 0));
    this.sb_6t1wet$(ptr + 1 | 0, toByte(value >>> 8));
    this.sb_6t1wet$(ptr + 2 | 0, toByte(value >>> 16));
    this.sb_6t1wet$(ptr + 3 | 0, toByte(value >>> 24));
  };
  Runtime.prototype.ld_za3lpa$ = function (ptr) {
    return this.lwu_za3lpa$(ptr).shiftLeft(0).or(this.lwu_za3lpa$(ptr + 4 | 0).shiftLeft(32));
  };
  Runtime.prototype.sd_6svq3l$ = function (ptr, value) {
    this.sw_vux9f0$(ptr, value.shiftRightUnsigned(0).toInt());
    this.sw_vux9f0$(ptr + 4 | 0, value.shiftRightUnsigned(32).toInt());
  };
  Runtime.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Runtime',
    interfaces: [AbstractRuntime]
  };
  function RuntimeSyscalls() {
  }
  RuntimeSyscalls.prototype.fopen_sqlbip$ = function ($receiver, file, mode) {
    throw new NotImplementedError_init();
  };
  RuntimeSyscalls.prototype.fread_cph5k5$ = function ($receiver, ptr, size, nmemb, stream) {
    throw new NotImplementedError_init();
  };
  RuntimeSyscalls.prototype.fwrite_cph5k5$ = function ($receiver, ptr, size, nmemb, stream) {
    throw new NotImplementedError_init();
  };
  RuntimeSyscalls.prototype.fflush_eg8d9k$ = function ($receiver, stream) {
    throw new NotImplementedError_init();
  };
  RuntimeSyscalls.prototype.ftell_eg8d9k$ = function ($receiver, stream) {
    throw new NotImplementedError_init();
  };
  RuntimeSyscalls.prototype.fsetpos_lbuexv$ = function ($receiver, stream, ptrHolder) {
    throw new NotImplementedError_init();
  };
  RuntimeSyscalls.prototype.fgetpos_lbuexv$ = function ($receiver, stream, ptrHolder) {
    throw new NotImplementedError_init();
  };
  RuntimeSyscalls.prototype.fseek_7o3413$ = function ($receiver, stream, offset, whence) {
    throw new NotImplementedError_init();
  };
  RuntimeSyscalls.prototype.fclose_eg8d9k$ = function ($receiver, stream) {
    throw new NotImplementedError_init();
  };
  RuntimeSyscalls.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'RuntimeSyscalls',
    interfaces: []
  };
  function DummyRuntimeSyscalls() {
    DummyRuntimeSyscalls_instance = this;
  }
  DummyRuntimeSyscalls.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DummyRuntimeSyscalls',
    interfaces: [RuntimeSyscalls]
  };
  var DummyRuntimeSyscalls_instance = null;
  function DummyRuntimeSyscalls_getInstance() {
    if (DummyRuntimeSyscalls_instance === null) {
      new DummyRuntimeSyscalls();
    }
    return DummyRuntimeSyscalls_instance;
  }
  function AbstractRuntime(REQUESTED_HEAP_SIZE, REQUESTED_STACK_PTR, __syscalls) {
    if (REQUESTED_HEAP_SIZE === void 0)
      REQUESTED_HEAP_SIZE = 0;
    if (REQUESTED_STACK_PTR === void 0)
      REQUESTED_STACK_PTR = 0;
    if (__syscalls === void 0)
      __syscalls = DummyRuntimeSyscalls_getInstance();
    this.REQUESTED_HEAP_SIZE = REQUESTED_HEAP_SIZE;
    this.REQUESTED_STACK_PTR = REQUESTED_STACK_PTR;
    this.__syscalls = __syscalls;
    this.FUNCTIONS = ArrayList_init();
    this.POINTER_SIZE = 4;
    this.HEAP_SIZE = this.REQUESTED_HEAP_SIZE <= 0 ? 16777216 : this.REQUESTED_HEAP_SIZE;
    this.STACK_PTR = this.REQUESTED_STACK_PTR === 0 ? 524288 : this.REQUESTED_STACK_PTR;
    this.HEAP_PTR = this.STACK_PTR;
    this.chunks = LinkedHashMap_init();
    this.freeChunks = ArrayList_init();
    this.STRINGS_etdvzk$_0 = LinkedHashMap_init();
    this.start_hafv4$_0 = time.MonoClock.markNow();
    this.FUNCTION_ADDRS = LinkedHashMap_init();
  }
  AbstractRuntime.prototype.get_SIZE_BYTES_y9phqa$ = function ($receiver) {
    return 4;
  };
  AbstractRuntime.prototype.get_SIZE_BYTES_6a53gt$ = function ($receiver) {
    return 8;
  };
  AbstractRuntime.prototype.shr_aogav3$ = function ($receiver, other) {
    return new UInt((new UInt($receiver.data & 255)).data >>> other);
  };
  AbstractRuntime.prototype.shl_aogav3$ = function ($receiver, other) {
    return new UInt((new UInt($receiver.data & 255)).data << other);
  };
  function AbstractRuntime$IStruct() {
  }
  AbstractRuntime$IStruct.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IStruct',
    interfaces: []
  };
  function AbstractRuntime$IStructCompanion() {
  }
  AbstractRuntime$IStructCompanion.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IStructCompanion',
    interfaces: []
  };
  AbstractRuntime.prototype.lbu_za3lpa$ = function (ptr) {
    return this.lb_za3lpa$(ptr) & 255;
  };
  AbstractRuntime.prototype.lhu_za3lpa$ = function (ptr) {
    return this.lh_za3lpa$(ptr) & 65535;
  };
  AbstractRuntime.prototype.lwu_za3lpa$ = function (ptr) {
    return Kotlin.Long.fromInt(this.lw_za3lpa$(ptr)).and(L4294967295);
  };
  AbstractRuntime.prototype.toCPointer_qfj761$ = defineInlineFunction('ktcc.AbstractRuntime.toCPointer_qfj761$', wrapFunction(function () {
    var CPointer_init = _.CPointer;
    return function ($receiver) {
      return new CPointer_init($receiver);
    };
  }));
  AbstractRuntime.prototype.toCPointer_z6eccd$ = defineInlineFunction('ktcc.AbstractRuntime.toCPointer_z6eccd$', wrapFunction(function () {
    var CPointer_init = _.CPointer;
    return function ($receiver) {
      return new CPointer_init($receiver.ptr);
    };
  }));
  AbstractRuntime.prototype.addPtr_rfeyu7$ = function ($receiver, offset, elementSize) {
    return new CPointer($receiver.ptr + Kotlin.imul(offset, elementSize) | 0);
  };
  AbstractRuntime.prototype.plus_uoth7v$ = function ($receiver, offset) {
    return this.addPtr_rfeyu7$($receiver, offset, 4);
  };
  AbstractRuntime.prototype.minus_uoth7v$ = function ($receiver, offset) {
    return this.addPtr_rfeyu7$($receiver, -offset | 0, 4);
  };
  AbstractRuntime.prototype.minusPtrPtr_w2g0x3$ = function ($receiver, other) {
    return ($receiver.ptr - other.ptr | 0) / 4 | 0;
  };
  AbstractRuntime.prototype.set_fdbo3h$ = function ($receiver, offset, value) {
    this.sw_vux9f0$($receiver.ptr + (offset * 4 | 0) | 0, value.ptr);
  };
  AbstractRuntime.prototype.get_uoth7v$ = function ($receiver, offset) {
    return new CPointer(this.lw_za3lpa$($receiver.ptr + (offset * 4 | 0) | 0));
  };
  AbstractRuntime.prototype.get_value_xj9bp3$ = function ($receiver) {
    return this.get_uoth7v$($receiver, 0);
  };
  AbstractRuntime.prototype.set_value_50dx2p$ = function ($receiver, value) {
    this.set_fdbo3h$($receiver, 0, value);
  };
  AbstractRuntime.prototype.toInt_1v8dcc$ = function ($receiver) {
    return $receiver ? 1 : 0;
  };
  AbstractRuntime.prototype.toInt_trxckn$ = function ($receiver) {
    return $receiver.ptr;
  };
  AbstractRuntime.prototype.toBool_trxckn$ = function ($receiver) {
    return $receiver.ptr !== 0;
  };
  AbstractRuntime.prototype.toBool_rcaex3$ = defineInlineFunction('ktcc.AbstractRuntime.toBool_rcaex3$', wrapFunction(function () {
    var numberToInt = Kotlin.numberToInt;
    return function ($receiver) {
      return numberToInt($receiver) !== 0;
    };
  }));
  AbstractRuntime.prototype.toBool_68pxlr$ = defineInlineFunction('ktcc.AbstractRuntime.toBool_68pxlr$', function ($receiver) {
    return ($receiver.data & 255) !== 0;
  });
  AbstractRuntime.prototype.toBool_bso16t$ = defineInlineFunction('ktcc.AbstractRuntime.toBool_bso16t$', function ($receiver) {
    return ($receiver.data & 65535) !== 0;
  });
  AbstractRuntime.prototype.toBool_mpial4$ = defineInlineFunction('ktcc.AbstractRuntime.toBool_mpial4$', function ($receiver) {
    return $receiver.data !== 0;
  });
  AbstractRuntime.prototype.toBool_6e1d9n$ = defineInlineFunction('ktcc.AbstractRuntime.toBool_6e1d9n$', function ($receiver) {
    return $receiver.data.toInt() !== 0;
  });
  AbstractRuntime.prototype.toBool_1v8dcc$ = function ($receiver) {
    return $receiver;
  };
  AbstractRuntime.prototype.stackFrame_klfg04$ = defineInlineFunction('ktcc.AbstractRuntime.stackFrame_klfg04$', function (callback) {
    var tmp$;
    var oldPos = this.STACK_PTR;
    try {
      tmp$ = callback();
    }
    finally {
      this.STACK_PTR = oldPos;
    }
    return tmp$;
  });
  AbstractRuntime.prototype.alloca_za3lpa$ = function (size) {
    var $receiver = this.STACK_PTR - size | 0;
    this.STACK_PTR = this.STACK_PTR - size | 0;
    return new CPointer($receiver);
  };
  AbstractRuntime.prototype.alloca_zero_za3lpa$ = function (size) {
    var $receiver = this.alloca_za3lpa$(size);
    this.memset_ox1na$($receiver, 0, size);
    return $receiver;
  };
  function AbstractRuntime$Chunk(head, size) {
    this.head = head;
    this.size = size;
  }
  AbstractRuntime$Chunk.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Chunk',
    interfaces: []
  };
  AbstractRuntime$Chunk.prototype.component1 = function () {
    return this.head;
  };
  AbstractRuntime$Chunk.prototype.component2 = function () {
    return this.size;
  };
  AbstractRuntime$Chunk.prototype.copy_vux9f0$ = function (head, size) {
    return new AbstractRuntime$Chunk(head === void 0 ? this.head : head, size === void 0 ? this.size : size);
  };
  AbstractRuntime$Chunk.prototype.toString = function () {
    return 'Chunk(head=' + Kotlin.toString(this.head) + (', size=' + Kotlin.toString(this.size)) + ')';
  };
  AbstractRuntime$Chunk.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.head) | 0;
    result = result * 31 + Kotlin.hashCode(this.size) | 0;
    return result;
  };
  AbstractRuntime$Chunk.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.head, other.head) && Kotlin.equals(this.size, other.size)))));
  };
  AbstractRuntime.prototype.malloc_za3lpa$ = function (size) {
    var $receiver = this.freeChunks;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (element.size >= size) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    var chunk = firstOrNull$result;
    if (chunk != null) {
      this.freeChunks.remove_11rb$(chunk);
      var $receiver_0 = this.chunks;
      var key = chunk.head;
      $receiver_0.put_xwzc9p$(key, chunk);
      return new CPointer(chunk.head);
    }
     else {
      var head = this.HEAP_PTR;
      this.HEAP_PTR = this.HEAP_PTR + size | 0;
      var $receiver_1 = this.chunks;
      var value = new AbstractRuntime$Chunk(head, size);
      $receiver_1.put_xwzc9p$(head, value);
      return new CPointer(head);
    }
  };
  AbstractRuntime.prototype.free_jah7vu$ = function (ptr) {
    var tmp$;
    if ((tmp$ = this.chunks.remove_11rb$(ptr.ptr)) != null) {
      this.freeChunks.add_11rb$(tmp$);
    }
  };
  AbstractRuntime.prototype.putchar_za3lpa$ = function (c) {
    print(toBoxedChar(toChar(c)));
    return c;
  };
  function AbstractRuntime$ExitError(code) {
    Error_init(this);
    this.code = code;
    this.name = 'AbstractRuntime$ExitError';
  }
  AbstractRuntime$ExitError.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ExitError',
    interfaces: [Error_0]
  };
  AbstractRuntime.prototype.exit_za3lpa$ = function (code) {
    throw new AbstractRuntime$ExitError(code);
  };
  AbstractRuntime.prototype.prevAligned_vux9f0$ = function (size, alignment) {
    if (size % alignment === 0)
      return size;
    return size - (alignment - size % alignment) | 0;
  };
  AbstractRuntime.prototype.memWrite_gf8lyy$ = function (ptr, data, offset, size) {
    if (offset === void 0)
      offset = 0;
    if (size === void 0)
      size = data.length;
    var tmp$;
    tmp$ = offset + size | 0;
    for (var n = offset; n < tmp$; n++)
      this.sb_6t1wet$(ptr.ptr + n | 0, data[n]);
  };
  AbstractRuntime.prototype.memRead_gf8lyy$ = function (ptr, data, offset, size) {
    if (offset === void 0)
      offset = 0;
    if (size === void 0)
      size = data.length;
    var tmp$;
    tmp$ = offset + size | 0;
    for (var n = offset; n < tmp$; n++)
      data[n] = this.lb_za3lpa$(ptr.ptr + n | 0);
  };
  AbstractRuntime.prototype.memWrite_39m72s$ = function (ptr, data, offset, size) {
    if (offset === void 0)
      offset = 0;
    if (size === void 0)
      size = data.length;
    var tmp$;
    tmp$ = offset + size | 0;
    for (var n = offset; n < tmp$; n++)
      this.sh_2bqt6h$(ptr.ptr + (n * 2 | 0) | 0, data[n]);
  };
  AbstractRuntime.prototype.memRead_39m72s$ = function (ptr, data, offset, size) {
    if (offset === void 0)
      offset = 0;
    if (size === void 0)
      size = data.length;
    var tmp$;
    tmp$ = offset + size | 0;
    for (var n = offset; n < tmp$; n++)
      data[n] = this.lh_za3lpa$(ptr.ptr + (n * 2 | 0) | 0);
  };
  AbstractRuntime.prototype.sprintf_106jrz$ = function (out, format, params) {
    this.writeStringz_k95day$(out, this._format_iwe6fm$(format, params.slice()).toString());
  };
  AbstractRuntime.prototype.printf_nzsgta$ = function (format, params) {
    print(this._format_iwe6fm$(format, params.slice()).toString());
  };
  AbstractRuntime.prototype.toCase_2ogxb7$_0 = function ($receiver, upper) {
    return upper ? $receiver.toUpperCase() : $receiver.toLowerCase();
  };
  AbstractRuntime.prototype._format_iwe6fm$ = function (format, params, appendable) {
    if (appendable === void 0)
      appendable = StringBuilder_init();
    return this._format_3p2iqn$(this.readStringz_9h7eqk$(format), params.slice(), appendable);
  };
  AbstractRuntime.prototype.isUpperCase_t1xcx6$_0 = function ($receiver) {
    return (new CharRange(65, 90)).contains_mef7kx$($receiver);
  };
  AbstractRuntime.prototype.clamp_hd9pcm$_0 = function ($receiver, min, max) {
    if ($receiver < min)
      return min;
    else if ($receiver > max)
      return max;
    else
      return $receiver;
  };
  AbstractRuntime.prototype.substr_gj44ju$_0 = function ($receiver, offset, len) {
    if (len === void 0)
      len = $receiver.length;
    var roffset = offset < 0 ? $receiver.length + offset | 0 : offset;
    var startIndex = this.clamp_hd9pcm$_0(roffset, 0, $receiver.length);
    var endIndex = this.clamp_hd9pcm$_0(roffset + len | 0, 0, $receiver.length);
    return $receiver.substring(startIndex, endIndex);
  };
  AbstractRuntime.prototype.numberToStringDecimal_37lk95$ = function (res, decimalPlaces, skipTrailingZeros) {
    if (skipTrailingZeros === void 0)
      skipTrailingZeros = false;
    var tmp$, tmp$_0, tmp$_1;
    var data = StringBuilder_init();
    var commaIndex = -1;
    var state = 0;
    var sign = 1;
    var evalue = 0;
    var esign = 1;
    tmp$ = res.length;
    for (var n = 0; n < tmp$; n++) {
      var c = res.charCodeAt(n);
      if (state === 0) {
        switch (c) {
          case 45:
            sign = -1;
            break;
          case 43:
            sign = 1;
            break;
          case 46:
            commaIndex = n;
            break;
          default:if ((new CharRange(48, 57)).contains_mef7kx$(c))
              data.append_s8itvh$(c);
            else
              switch (c) {
                case 101:
                case 69:
                  state = 1;
                  break;
              }

            break;
        }
      }
       else if (state === 1) {
        switch (c) {
          case 45:
            esign = -1;
            break;
          case 43:
            esign = 1;
            break;
          default:if ((new CharRange(48, 57)).contains_mef7kx$(c)) {
              evalue = evalue * 10 | 0;
              evalue = evalue + (c - 48) | 0;
            }

            break;
        }
      }
    }
    var exp = Kotlin.imul(evalue, esign);
    var rCommaIndex = commaIndex >= 0 ? commaIndex : data.length;
    var commaOffset = rCommaIndex + exp | 0;
    if (commaOffset < 0) {
      tmp$_0 = '0.' + repeat('0', (-commaOffset | 0) + decimalPlaces | 0) + toString(data);
    }
     else {
      var tmp$_2 = data.toString();
      var b = commaOffset - data.length + 1 + decimalPlaces | 0;
      var res_0 = tmp$_2 + repeat('0', Math_0.max(1, b));
      tmp$_0 = res_0.substring(0, commaOffset) + '.' + res_0.substring(commaOffset);
    }
    var out = tmp$_0;
    var parts = split(out, ['.']);
    if (decimalPlaces <= 0) {
      tmp$_1 = parts.get_za3lpa$(0);
    }
     else {
      var res_1 = this.substr_gj44ju$_0(parts.get_za3lpa$(1), 0, decimalPlaces);
      tmp$_1 = parts.get_za3lpa$(0) + '.' + res_1;
    }
    var rout = tmp$_1;
    var rrout = startsWith(rout, '.') ? '0' + rout : rout;
    var rrrout = skipTrailingZeros ? Regex_init('0-$').replace_x2uqeu$(rrout, '') : rrout;
    return sign > 0 ? rrrout : '-' + rrrout;
  };
  AbstractRuntime.prototype.toStringDecimal_jzwj8n$_0 = function ($receiver, decimalPlaces, skipTrailingZeros) {
    if (skipTrailingZeros === void 0)
      skipTrailingZeros = false;
    return this.numberToStringDecimal_37lk95$($receiver.toString(), decimalPlaces, skipTrailingZeros);
  };
  AbstractRuntime.prototype.toStringDecimal_2rjlte$_0 = function ($receiver, decimalPlaces, skipTrailingZeros) {
    if (skipTrailingZeros === void 0)
      skipTrailingZeros = false;
    return this.toStringDecimal_jzwj8n$_0($receiver, decimalPlaces, skipTrailingZeros);
  };
  AbstractRuntime.prototype._formatF_3p81yu$ = function (value) {
    return this.toStringDecimal_jzwj8n$_0(numberToDouble(value), 6);
  };
  AbstractRuntime.prototype._formatE_mkvhib$_0 = function (value) {
    return value.toString();
  };
  AbstractRuntime.prototype._formatG_1evkdh$_0 = function (value) {
    return value.toString();
  };
  AbstractRuntime.prototype._formatA_648q75$_0 = function (value) {
    return value.toString();
  };
  function AbstractRuntime$_format$toCase($receiver, upper) {
    return upper ? $receiver.toUpperCase() : $receiver.toLowerCase();
  }
  function AbstractRuntime$_format$isUpperCase($receiver) {
    return (new CharRange(65, 90)).contains_mef7kx$($receiver);
  }
  function AbstractRuntime$_format$readParam(closure$params, closure$paramPos) {
    return function () {
      var tmp$, tmp$_0;
      tmp$_0 = (tmp$ = closure$paramPos.v, closure$paramPos.v = tmp$ + 1 | 0, tmp$);
      return getOrNull(closure$params, tmp$_0);
    };
  }
  function AbstractRuntime$_format$readParamI(closure$readParam) {
    return function () {
      var tmp$, tmp$_0;
      var v = closure$readParam();
      if (v == null)
        tmp$_0 = 0;
      else if (Kotlin.isChar(v))
        tmp$_0 = unboxChar(v) | 0;
      else if (Kotlin.isType(v, UByte)) {
        tmp$_0 = v.data & 255;
      }
       else if (Kotlin.isType(v, UShort)) {
        tmp$_0 = v.data & 65535;
      }
       else if (Kotlin.isType(v, UInt)) {
        tmp$_0 = v.data;
      }
       else if (Kotlin.isNumber(v))
        tmp$_0 = numberToInt(v);
      else if (Kotlin.isType(v, CPointer))
        tmp$_0 = v.ptr;
      else if (typeof v === 'string')
        tmp$_0 = (tmp$ = toIntOrNull(v)) != null ? tmp$ : 0;
      else
        tmp$_0 = -1;
      return tmp$_0;
    };
  }
  function AbstractRuntime$_format$readParamS(closure$readParam, this$AbstractRuntime) {
    return function () {
      var tmp$, tmp$_0;
      var v = closure$readParam();
      if (v == null)
        tmp$_0 = 'NULL';
      else if (Kotlin.isChar(v))
        tmp$_0 = toString(v);
      else if (Kotlin.isType(v, CPointer))
        tmp$_0 = this$AbstractRuntime.readStringz_9h7eqk$(Kotlin.isType(tmp$ = v, CPointer) ? tmp$ : throwCCE());
      else if (Kotlin.isNumber(v))
        tmp$_0 = this$AbstractRuntime.readStringz_9h7eqk$(new CPointer(numberToInt(v)));
      else if (typeof v === 'string')
        tmp$_0 = v.toString();
      else
        tmp$_0 = '<INVALID>';
      return tmp$_0;
    };
  }
  AbstractRuntime.prototype._format_3p2iqn$ = function (fmt, params, appendable) {
    if (appendable === void 0)
      appendable = StringBuilder_init();
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var paramPos = {v: 0};
    var n = 0;
    var toCase = AbstractRuntime$_format$toCase;
    var isUpperCase = AbstractRuntime$_format$isUpperCase;
    var readParam = AbstractRuntime$_format$readParam(params, paramPos);
    var readParamI = AbstractRuntime$_format$readParamI(readParam);
    var readParamS = AbstractRuntime$_format$readParamS(readParam, this);
    loop: while (n < fmt.length) {
      var c = fmt.charCodeAt((tmp$ = n, n = tmp$ + 1 | 0, tmp$));
      if (c === 37) {
        var c2 = 32;
        var pad = 32;
        var len = 0;
        do {
          c2 = fmt.charCodeAt((tmp$_0 = n, n = tmp$_0 + 1 | 0, tmp$_0));
          if (c2 === 48) {
            pad = c2;
          }
           else if ((new CharRange(48, 57)).contains_mef7kx$(c2)) {
            len = len * 10 | 0;
            len = len + (c2 - 48) | 0;
          }
        }
         while ((new CharRange(48, 57)).contains_mef7kx$(c2));
        if (c2 === 37) {
          appendable.append_s8itvh$(37);
          continue loop;
        }
        switch (c2) {
          case 110:
            readParam();
            break;
          case 99:
            appendable.append_s8itvh$(toChar(readParamI()));
            break;
          case 112:
            appendable.append_gw00v9$('0x' + padStart(toString_0(readParamI(), 16), 8, 48));
            break;
          case 102:
          case 70:
            appendable.append_gw00v9$(toCase(this._formatF_3p81yu$(Kotlin.isNumber(tmp$_1 = readParam()) ? tmp$_1 : throwCCE()), isUpperCase(c2)));
            break;
          case 101:
          case 69:
            appendable.append_gw00v9$(toCase(this._formatE_mkvhib$_0(Kotlin.isNumber(tmp$_2 = readParam()) ? tmp$_2 : throwCCE()), isUpperCase(c2)));
            break;
          case 97:
          case 65:
            appendable.append_gw00v9$(toCase(this._formatA_648q75$_0(Kotlin.isNumber(tmp$_3 = readParam()) ? tmp$_3 : throwCCE()), isUpperCase(c2)));
            break;
          case 103:
          case 71:
            appendable.append_gw00v9$(toCase(this._formatG_1evkdh$_0(Kotlin.isNumber(tmp$_4 = readParam()) ? tmp$_4 : throwCCE()), isUpperCase(c2)));
            break;
          case 100:
          case 105:
            appendable.append_gw00v9$(padStart(toString_0(readParamI(), 10), len, pad));
            break;
          case 117:
            appendable.append_gw00v9$(padStart(toString_1(new UInt(readParamI()), 10), len, pad));
            break;
          case 120:
          case 88:
            appendable.append_gw00v9$(padStart(toCase(toString_2(Kotlin.Long.fromInt(readParamI()).and(L4294967295), 16), isUpperCase(c2)), len, pad));
            break;
          case 111:
          case 79:
            appendable.append_gw00v9$(padStart(toCase(toString_2(Kotlin.Long.fromInt(readParamI()).and(L4294967295), 8), isUpperCase(c2)), len, pad));
            break;
          case 115:
            appendable.append_gw00v9$(readParamS());
            break;
          default:appendable.append_s8itvh$(c);
            appendable.append_s8itvh$(c2);
            break;
        }
      }
       else {
        appendable.append_s8itvh$(c);
      }
    }
    return appendable;
  };
  AbstractRuntime.prototype.memset_ox1na$ = function (ptr, value, num) {
    var tmp$;
    for (var n = 0; n < num; n++) {
      this.sb_6t1wet$(ptr.ptr + n | 0, toByte(value));
    }
    return Kotlin.isType(tmp$ = ptr, CPointer) ? tmp$ : throwCCE();
  };
  AbstractRuntime.prototype.memcpy_s2dlr0$ = function (dest, src, num) {
    var tmp$;
    for (var n = 0; n < num; n++)
      this.sb_6t1wet$(dest.ptr + n | 0, this.lb_za3lpa$(src.ptr + n | 0));
    return Kotlin.isType(tmp$ = dest, CPointer) ? tmp$ : throwCCE();
  };
  AbstractRuntime.prototype.memmove_s2dlr0$ = function (dest, src, num) {
    var tmp$;
    if (dest.ptr > src.ptr) {
      for (var m = 0; m < num; m++) {
        var n = num - 1 - m | 0;
        this.sb_6t1wet$(dest.ptr + n | 0, this.lb_za3lpa$(src.ptr + n | 0));
      }
    }
     else {
      for (var n_0 = 0; n_0 < num; n_0++)
        this.sb_6t1wet$(dest.ptr + n_0 | 0, this.lb_za3lpa$(src.ptr + n_0 | 0));
    }
    return Kotlin.isType(tmp$ = dest, CPointer) ? tmp$ : throwCCE();
  };
  function AbstractRuntime$ByteArrayBuilder(initialCapacity) {
    if (initialCapacity === void 0)
      initialCapacity = 64;
    this.initialCapacity = initialCapacity;
    this.data_0 = new Int8Array(this.initialCapacity);
    this.pos_0 = 0;
  }
  AbstractRuntime$ByteArrayBuilder.prototype.append_s8j3t7$ = function (byte) {
    var tmp$;
    if (this.pos_0 >= (this.data_0.length - 1 | 0)) {
      var tmp$_0 = this.data_0;
      var a = this.data_0.length * 2 | 0;
      var b = this.data_0.length + 64 | 0;
      this.data_0 = copyOf(tmp$_0, Math_0.max(a, b));
    }
    this.data_0[tmp$ = this.pos_0, this.pos_0 = tmp$ + 1 | 0, tmp$] = byte;
  };
  AbstractRuntime$ByteArrayBuilder.prototype.bytes = function () {
    return copyOf(this.data_0, this.pos_0);
  };
  AbstractRuntime$ByteArrayBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ByteArrayBuilder',
    interfaces: []
  };
  AbstractRuntime.prototype.readStringz_9h7eqk$ = function ($receiver) {
    var tmp$;
    var sb = new AbstractRuntime$ByteArrayBuilder();
    var pos = $receiver.ptr;
    while (true) {
      var c = this.lb_za3lpa$((tmp$ = pos, pos = tmp$ + 1 | 0, tmp$));
      if (c === toByte(0))
        break;
      sb.append_s8j3t7$(c);
    }
    return decodeToString(sb.bytes());
  };
  AbstractRuntime.prototype.encodeToByteArray_1o51ka$ = defineInlineFunction('ktcc.AbstractRuntime.encodeToByteArray_1o51ka$', wrapFunction(function () {
    var encodeToByteArray = Kotlin.kotlin.text.encodeToByteArray_pdl1vz$;
    return function (data, out) {
      var tmp$, tmp$_0;
      var count = 0;
      tmp$ = encodeToByteArray(data);
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var c = tmp$[tmp$_0];
        out(c);
        count = count + 1 | 0;
      }
      return count;
    };
  }));
  AbstractRuntime.prototype.writeStringz_k95day$ = function ($receiver, str) {
    var tmp$;
    var n = {v: 0};
    var tmp$_0, tmp$_1;
    var count = 0;
    tmp$_0 = encodeToByteArray(str);
    for (tmp$_1 = 0; tmp$_1 !== tmp$_0.length; ++tmp$_1) {
      var c = tmp$_0[tmp$_1];
      var tmp$_2;
      this.set_uo56xb$($receiver, (tmp$_2 = n.v, n.v = tmp$_2 + 1 | 0, tmp$_2), c);
      count = count + 1 | 0;
    }
    this.set_uo56xb$($receiver, (tmp$ = n.v, n.v = tmp$ + 1 | 0, tmp$), toByte(0));
  };
  AbstractRuntime.prototype.get_ptr_pdl1vz$ = function ($receiver) {
    var $receiver_0 = this.STRINGS_etdvzk$_0;
    var tmp$;
    var value = $receiver_0.get_11rb$($receiver);
    if (value == null) {
      var bytes = encodeToByteArray($receiver);
      var ptr = new CPointer(this.malloc_za3lpa$(bytes.length + 1 | 0).ptr);
      var p = ptr.ptr;
      for (var n = 0; n < bytes.length; n++)
        this.sb_6t1wet$(p + n | 0, bytes[n]);
      this.sb_6t1wet$(p + bytes.length | 0, 0);
      var answer = ptr;
      $receiver_0.put_xwzc9p$($receiver, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    return tmp$;
  };
  AbstractRuntime.prototype.clock = function () {
    return numberToInt(this.start_hafv4$_0.elapsedNow().inMilliseconds);
  };
  AbstractRuntime.prototype.get_ptr_a3w2bl$ = function ($receiver) {
    var array = $receiver;
    var ptr = new CPointer(this.malloc_za3lpa$(Kotlin.imul(this.POINTER_SIZE, array.length)).ptr);
    for (var n = 0; n < array.length; n++) {
      this.sw_vux9f0$(ptr.ptr + Kotlin.imul(n, this.POINTER_SIZE) | 0, this.get_ptr_pdl1vz$(array[n]).ptr);
    }
    return ptr;
  };
  AbstractRuntime.prototype.get_qm71fq$ = function ($receiver, offset) {
    return this.lb_za3lpa$($receiver.ptr + (offset * 1 | 0) | 0);
  };
  AbstractRuntime.prototype.set_uo56xb$ = function ($receiver, offset, value) {
    this.sb_6t1wet$($receiver.ptr + (offset * 1 | 0) | 0, value);
  };
  AbstractRuntime.prototype.get_value_9h7eqk$ = function ($receiver) {
    return this.get_qm71fq$($receiver, 0);
  };
  AbstractRuntime.prototype.set_value_r9enu7$ = function ($receiver, value) {
    this.set_uo56xb$($receiver, 0, value);
  };
  AbstractRuntime.prototype.plus_qm71fq$ = function ($receiver, offset) {
    return this.addPtr_rfeyu7$($receiver, offset, 1);
  };
  AbstractRuntime.prototype.minus_qm71fq$ = function ($receiver, offset) {
    return this.addPtr_rfeyu7$($receiver, -offset | 0, 1);
  };
  AbstractRuntime.prototype.minusPtrByte_oauhbt$ = function ($receiver, other) {
    return ($receiver.ptr - other.ptr | 0) / 1 | 0;
  };
  AbstractRuntime.prototype.fixedArrayOfByte_5npbyc$ = function (size, values) {
    var $receiver = new CPointer(this.alloca_zero_za3lpa$(size * 1 | 0).ptr);
    for (var n = 0; n < values.length; n++)
      this.sb_6t1wet$($receiver.ptr + (n * 1 | 0) | 0, values[n]);
    return $receiver;
  };
  AbstractRuntime.prototype.get_ktgupo$ = function ($receiver, offset) {
    return this.lh_za3lpa$($receiver.ptr + (offset * 2 | 0) | 0);
  };
  AbstractRuntime.prototype.set_m8jah$ = function ($receiver, offset, value) {
    this.sh_2bqt6h$($receiver.ptr + (offset * 2 | 0) | 0, value);
  };
  AbstractRuntime.prototype.get_value_im82hu$ = function ($receiver) {
    return this.get_ktgupo$($receiver, 0);
  };
  AbstractRuntime.prototype.set_value_o89p01$ = function ($receiver, value) {
    this.set_m8jah$($receiver, 0, value);
  };
  AbstractRuntime.prototype.plus_ktgupo$ = function ($receiver, offset) {
    return this.addPtr_rfeyu7$($receiver, offset, 2);
  };
  AbstractRuntime.prototype.minus_ktgupo$ = function ($receiver, offset) {
    return this.addPtr_rfeyu7$($receiver, -offset | 0, 2);
  };
  AbstractRuntime.prototype.minusPtrShort_nf2r0v$ = function ($receiver, other) {
    return ($receiver.ptr - other.ptr | 0) / 2 | 0;
  };
  AbstractRuntime.prototype.fixedArrayOfShort_bvzugm$ = function (size, values) {
    var $receiver = new CPointer(this.alloca_zero_za3lpa$(size * 2 | 0).ptr);
    for (var n = 0; n < values.length; n++)
      this.sh_2bqt6h$($receiver.ptr + (n * 2 | 0) | 0, values[n]);
    return $receiver;
  };
  AbstractRuntime.prototype.get_ju7anr$ = function ($receiver, offset) {
    return this.lw_za3lpa$($receiver.ptr + (offset * 4 | 0) | 0);
  };
  AbstractRuntime.prototype.set_ul71qh$ = function ($receiver, offset, value) {
    this.sw_vux9f0$($receiver.ptr + (offset * 4 | 0) | 0, value);
  };
  AbstractRuntime.prototype.get_value_2hua23$ = function ($receiver) {
    return this.get_ju7anr$($receiver, 0);
  };
  AbstractRuntime.prototype.set_value_ju7anr$ = function ($receiver, value) {
    this.set_ul71qh$($receiver, 0, value);
  };
  AbstractRuntime.prototype.plus_ju7anr$ = function ($receiver, offset) {
    return this.addPtr_rfeyu7$($receiver, offset, 4);
  };
  AbstractRuntime.prototype.minus_ju7anr$ = function ($receiver, offset) {
    return this.addPtr_rfeyu7$($receiver, -offset | 0, 4);
  };
  AbstractRuntime.prototype.minusPtrInt_2hk1rj$ = function ($receiver, other) {
    return ($receiver.ptr - other.ptr | 0) / 4 | 0;
  };
  AbstractRuntime.prototype.fixedArrayOfInt_x36saf$ = function (size, values) {
    var $receiver = new CPointer(this.alloca_zero_za3lpa$(size * 4 | 0).ptr);
    for (var n = 0; n < values.length; n++)
      this.sw_vux9f0$($receiver.ptr + (n * 4 | 0) | 0, values[n]);
    return $receiver;
  };
  AbstractRuntime.prototype.get_hg3cze$ = function ($receiver, offset) {
    return this.ld_za3lpa$($receiver.ptr + (offset * 8 | 0) | 0);
  };
  AbstractRuntime.prototype.set_t6fe15$ = function ($receiver, offset, value) {
    this.sd_6svq3l$($receiver.ptr + (offset * 8 | 0) | 0, value);
  };
  AbstractRuntime.prototype.get_value_4wcx60$ = function ($receiver) {
    return this.get_hg3cze$($receiver, 0);
  };
  AbstractRuntime.prototype.set_value_rdybov$ = function ($receiver, value) {
    this.set_t6fe15$($receiver, 0, value);
  };
  AbstractRuntime.prototype.plus_hg3cze$ = function ($receiver, offset) {
    return this.addPtr_rfeyu7$($receiver, offset, 8);
  };
  AbstractRuntime.prototype.minus_hg3cze$ = function ($receiver, offset) {
    return this.addPtr_rfeyu7$($receiver, -offset | 0, 8);
  };
  AbstractRuntime.prototype.minusPtrLong_li2881$ = function ($receiver, other) {
    return ($receiver.ptr - other.ptr | 0) / 8 | 0;
  };
  AbstractRuntime.prototype.fixedArrayOfLong_tbxlbk$ = function (size, values) {
    var $receiver = new CPointer(this.alloca_zero_za3lpa$(size * 8 | 0).ptr);
    for (var n = 0; n < values.length; n++)
      this.sd_6svq3l$($receiver.ptr + (n * 8 | 0) | 0, values[n]);
    return $receiver;
  };
  AbstractRuntime.prototype.get_aw97z9$ = function ($receiver, offset) {
    return new UByte(this.lb_za3lpa$($receiver.ptr + (offset * 1 | 0) | 0));
  };
  AbstractRuntime.prototype.set_rn5si1$ = function ($receiver, offset, value) {
    this.sb_6t1wet$($receiver.ptr + (offset * 1 | 0) | 0, value.data);
  };
  AbstractRuntime.prototype.get_value_u4twqr$ = function ($receiver) {
    return this.get_aw97z9$($receiver, 0);
  };
  AbstractRuntime.prototype.set_value_tofjv7$ = function ($receiver, value) {
    this.set_rn5si1$($receiver, 0, value);
  };
  AbstractRuntime.prototype.plus_aw97z9$ = function ($receiver, offset) {
    return this.addPtr_rfeyu7$($receiver, offset, 1);
  };
  AbstractRuntime.prototype.minus_aw97z9$ = function ($receiver, offset) {
    return this.addPtr_rfeyu7$($receiver, -offset | 0, 1);
  };
  AbstractRuntime.prototype.minusPtrUByte_tsij5b$ = function ($receiver, other) {
    return ($receiver.ptr - other.ptr | 0) / 1 | 0;
  };
  AbstractRuntime.prototype.fixedArrayOfUByte_7dcxl5$ = function (size, values) {
    var $receiver = new CPointer(this.alloca_zero_za3lpa$(size * 1 | 0).ptr);
    var tmp$;
    tmp$ = values.size;
    for (var n = 0; n < tmp$; n++) {
      this.sb_6t1wet$($receiver.ptr + (n * 1 | 0) | 0, values.get_za3lpa$(n).data);
    }
    return $receiver;
  };
  AbstractRuntime.prototype.get_axsu2j$ = function ($receiver, offset) {
    return new UShort(this.lh_za3lpa$($receiver.ptr + (offset * 2 | 0) | 0));
  };
  AbstractRuntime.prototype.set_qi3fg3$ = function ($receiver, offset, value) {
    this.sh_2bqt6h$($receiver.ptr + (offset * 2 | 0) | 0, value.data);
  };
  AbstractRuntime.prototype.get_value_vyo15p$ = function ($receiver) {
    return this.get_axsu2j$($receiver, 0);
  };
  AbstractRuntime.prototype.set_value_dtbiwh$ = function ($receiver, value) {
    this.set_qi3fg3$($receiver, 0, value);
  };
  AbstractRuntime.prototype.plus_axsu2j$ = function ($receiver, offset) {
    return this.addPtr_rfeyu7$($receiver, offset, 2);
  };
  AbstractRuntime.prototype.minus_axsu2j$ = function ($receiver, offset) {
    return this.addPtr_rfeyu7$($receiver, -offset | 0, 2);
  };
  AbstractRuntime.prototype.minusPtrUShort_pjz2fd$ = function ($receiver, other) {
    return ($receiver.ptr - other.ptr | 0) / 2 | 0;
  };
  AbstractRuntime.prototype.fixedArrayOfUShort_tts9sr$ = function (size, values) {
    var $receiver = new CPointer(this.alloca_zero_za3lpa$(size * 2 | 0).ptr);
    var tmp$;
    tmp$ = values.size;
    for (var n = 0; n < tmp$; n++) {
      this.sh_2bqt6h$($receiver.ptr + (n * 2 | 0) | 0, values.get_za3lpa$(n).data);
    }
    return $receiver;
  };
  AbstractRuntime.prototype.get_3kxfbc$ = function ($receiver, offset) {
    return new UInt(this.lw_za3lpa$($receiver.ptr + (offset * 4 | 0) | 0));
  };
  AbstractRuntime.prototype.set_ihgeyb$ = function ($receiver, offset, value) {
    this.sw_vux9f0$($receiver.ptr + (offset * 4 | 0) | 0, value.data);
  };
  AbstractRuntime.prototype.get_value_17u8iy$ = function ($receiver) {
    return this.get_3kxfbc$($receiver, 0);
  };
  AbstractRuntime.prototype.set_value_v1mtjl$ = function ($receiver, value) {
    this.set_ihgeyb$($receiver, 0, value);
  };
  AbstractRuntime.prototype.plus_3kxfbc$ = function ($receiver, offset) {
    return this.addPtr_rfeyu7$($receiver, offset, 4);
  };
  AbstractRuntime.prototype.minus_3kxfbc$ = function ($receiver, offset) {
    return this.addPtr_rfeyu7$($receiver, -offset | 0, 4);
  };
  AbstractRuntime.prototype.minusPtrUInt_gtcy1v$ = function ($receiver, other) {
    return ($receiver.ptr - other.ptr | 0) / 4 | 0;
  };
  AbstractRuntime.prototype.fixedArrayOfUInt_x56dw2$ = function (size, values) {
    var $receiver = new CPointer(this.alloca_zero_za3lpa$(size * 4 | 0).ptr);
    var tmp$;
    tmp$ = values.size;
    for (var n = 0; n < tmp$; n++) {
      this.sw_vux9f0$($receiver.ptr + (n * 4 | 0) | 0, values.get_za3lpa$(n).data);
    }
    return $receiver;
  };
  AbstractRuntime.prototype.get_1q5jix$ = function ($receiver, offset) {
    return new ULong_init(this.ld_za3lpa$($receiver.ptr + (offset * 8 | 0) | 0));
  };
  AbstractRuntime.prototype.set_yq0dtj$ = function ($receiver, offset, value) {
    this.sd_6svq3l$($receiver.ptr + (offset * 8 | 0) | 0, value.data);
  };
  AbstractRuntime.prototype.get_value_ypoebb$ = function ($receiver) {
    return this.get_1q5jix$($receiver, 0);
  };
  AbstractRuntime.prototype.set_value_pmcr3v$ = function ($receiver, value) {
    this.set_yq0dtj$($receiver, 0, value);
  };
  AbstractRuntime.prototype.plus_1q5jix$ = function ($receiver, offset) {
    return this.addPtr_rfeyu7$($receiver, offset, 8);
  };
  AbstractRuntime.prototype.minus_1q5jix$ = function ($receiver, offset) {
    return this.addPtr_rfeyu7$($receiver, -offset | 0, 8);
  };
  AbstractRuntime.prototype.minusPtrULong_twwsgh$ = function ($receiver, other) {
    return ($receiver.ptr - other.ptr | 0) / 8 | 0;
  };
  AbstractRuntime.prototype.fixedArrayOfULong_rm9zor$ = function (size, values) {
    var $receiver = new CPointer(this.alloca_zero_za3lpa$(size * 8 | 0).ptr);
    var tmp$;
    tmp$ = values.size;
    for (var n = 0; n < tmp$; n++) {
      this.sd_6svq3l$($receiver.ptr + (n * 8 | 0) | 0, values.get_za3lpa$(n).data);
    }
    return $receiver;
  };
  AbstractRuntime.prototype.get_9ojip0$ = function ($receiver, offset) {
    var bits = this.lw_za3lpa$($receiver.ptr + (offset * 4 | 0) | 0);
    return Kotlin.floatFromBits(bits);
  };
  AbstractRuntime.prototype.set_ens9ex$ = function ($receiver, offset, value) {
    this.sw_vux9f0$($receiver.ptr + (offset * 4 | 0) | 0, toBits(value));
  };
  AbstractRuntime.prototype.get_value_s8tvni$ = function ($receiver) {
    return this.get_9ojip0$($receiver, 0);
  };
  AbstractRuntime.prototype.set_value_ydugf$ = function ($receiver, value) {
    this.set_ens9ex$($receiver, 0, value);
  };
  AbstractRuntime.prototype.plus_9ojip0$ = function ($receiver, offset) {
    return this.addPtr_rfeyu7$($receiver, offset, 4);
  };
  AbstractRuntime.prototype.minus_9ojip0$ = function ($receiver, offset) {
    return this.addPtr_rfeyu7$($receiver, -offset | 0, 4);
  };
  AbstractRuntime.prototype.minusPtrFloat_f782wh$ = function ($receiver, other) {
    return ($receiver.ptr - other.ptr | 0) / 4 | 0;
  };
  AbstractRuntime.prototype.fixedArrayOfFloat_gfd2qy$ = function (size, values) {
    var $receiver = new CPointer(this.alloca_zero_za3lpa$(size * 4 | 0).ptr);
    for (var n = 0; n < values.length; n++)
      this.sw_vux9f0$($receiver.ptr + (n * 4 | 0) | 0, toBits(values[n]));
    return $receiver;
  };
  AbstractRuntime.prototype.get_gvvqmn$ = function ($receiver, offset) {
    var bits = this.ld_za3lpa$($receiver.ptr + (offset * 4 | 0) | 0);
    return Kotlin.doubleFromBits(bits);
  };
  AbstractRuntime.prototype.set_ljkd0f$ = function ($receiver, offset, value) {
    this.sd_6svq3l$($receiver.ptr + (offset * 4 | 0) | 0, toBits_0(value));
  };
  AbstractRuntime.prototype.get_value_xzqglv$ = function ($receiver) {
    return this.get_gvvqmn$($receiver, 0);
  };
  AbstractRuntime.prototype.set_value_49t1vz$ = function ($receiver, value) {
    this.set_ljkd0f$($receiver, 0, value);
  };
  AbstractRuntime.prototype.plus_gvvqmn$ = function ($receiver, offset) {
    return this.addPtr_rfeyu7$($receiver, offset, 4);
  };
  AbstractRuntime.prototype.minus_gvvqmn$ = function ($receiver, offset) {
    return this.addPtr_rfeyu7$($receiver, -offset | 0, 4);
  };
  AbstractRuntime.prototype.minusPtrDouble_9ut1x1$ = function ($receiver, other) {
    return ($receiver.ptr - other.ptr | 0) / 4 | 0;
  };
  AbstractRuntime.prototype.fixedArrayOfDouble_n4zxsr$ = function (size, values) {
    var $receiver = new CPointer(this.alloca_zero_za3lpa$(size * 4 | 0).ptr);
    for (var n = 0; n < values.length; n++)
      this.sd_6svq3l$($receiver.ptr + (n * 4 | 0) | 0, toBits_0(values[n]));
    return $receiver;
  };
  AbstractRuntime.prototype.invoke_y1x0di$ = function ($receiver) {
    var tmp$;
    return (typeof (tmp$ = this.FUNCTIONS.get_za3lpa$($receiver.ptr)) === 'function' ? tmp$ : throwCCE())();
  };
  AbstractRuntime.prototype.invoke_t30yw1$ = function ($receiver, v0) {
    var tmp$;
    return (typeof (tmp$ = this.FUNCTIONS.get_za3lpa$($receiver.ptr)) === 'function' ? tmp$ : throwCCE())(v0);
  };
  AbstractRuntime.prototype.invoke_77uevb$ = function ($receiver, v0, v1) {
    var tmp$;
    return (typeof (tmp$ = this.FUNCTIONS.get_za3lpa$($receiver.ptr)) === 'function' ? tmp$ : throwCCE())(v0, v1);
  };
  AbstractRuntime.prototype.invoke_vks1tg$ = function ($receiver, v0, v1, v2) {
    var tmp$;
    return (typeof (tmp$ = this.FUNCTIONS.get_za3lpa$($receiver.ptr)) === 'function' ? tmp$ : throwCCE())(v0, v1, v2);
  };
  AbstractRuntime.prototype.invoke_lts3ao$ = function ($receiver, v0, v1, v2, v3) {
    var tmp$;
    return (typeof (tmp$ = this.FUNCTIONS.get_za3lpa$($receiver.ptr)) === 'function' ? tmp$ : throwCCE())(v0, v1, v2, v3);
  };
  AbstractRuntime.prototype.invoke_mlzgr1$ = function ($receiver, v0, v1, v2, v3, v4) {
    var tmp$;
    return (typeof (tmp$ = this.FUNCTIONS.get_za3lpa$($receiver.ptr)) === 'function' ? tmp$ : throwCCE())(v0, v1, v2, v3, v4);
  };
  AbstractRuntime.prototype.invoke_tai39x$ = function ($receiver, v0, v1, v2, v3, v4, v5) {
    var tmp$;
    return (typeof (tmp$ = this.FUNCTIONS.get_za3lpa$($receiver.ptr)) === 'function' ? tmp$ : throwCCE())(v0, v1, v2, v3, v4, v5);
  };
  AbstractRuntime.prototype.invoke_ea20t2$ = function ($receiver, v0, v1, v2, v3, v4, v5, v6) {
    var tmp$;
    return (typeof (tmp$ = this.FUNCTIONS.get_za3lpa$($receiver.ptr)) === 'function' ? tmp$ : throwCCE())(v0, v1, v2, v3, v4, v5, v6);
  };
  AbstractRuntime.prototype.get_cfunc_aa9ou5$ = function ($receiver) {
    var $receiver_0 = this.FUNCTION_ADDRS;
    var tmp$;
    var value = $receiver_0.get_11rb$($receiver);
    if (value == null) {
      this.FUNCTIONS.add_11rb$($receiver);
      var answer = this.FUNCTIONS.size - 1 | 0;
      $receiver_0.put_xwzc9p$($receiver, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    return new CFunction0(tmp$);
  };
  AbstractRuntime.prototype.get_cfunc_5uo580$ = function ($receiver) {
    var $receiver_0 = this.FUNCTION_ADDRS;
    var tmp$;
    var value = $receiver_0.get_11rb$($receiver);
    if (value == null) {
      this.FUNCTIONS.add_11rb$($receiver);
      var answer = this.FUNCTIONS.size - 1 | 0;
      $receiver_0.put_xwzc9p$($receiver, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    return new CFunction1(tmp$);
  };
  AbstractRuntime.prototype.get_cfunc_538cak$ = function ($receiver) {
    var $receiver_0 = this.FUNCTION_ADDRS;
    var tmp$;
    var value = $receiver_0.get_11rb$($receiver);
    if (value == null) {
      this.FUNCTIONS.add_11rb$($receiver);
      var answer = this.FUNCTIONS.size - 1 | 0;
      $receiver_0.put_xwzc9p$($receiver, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    return new CFunction2(tmp$);
  };
  AbstractRuntime.prototype.get_cfunc_kwckkt$ = function ($receiver) {
    var $receiver_0 = this.FUNCTION_ADDRS;
    var tmp$;
    var value = $receiver_0.get_11rb$($receiver);
    if (value == null) {
      this.FUNCTIONS.add_11rb$($receiver);
      var answer = this.FUNCTIONS.size - 1 | 0;
      $receiver_0.put_xwzc9p$($receiver, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    return new CFunction3(tmp$);
  };
  AbstractRuntime.prototype.get_cfunc_td88zp$ = function ($receiver) {
    var $receiver_0 = this.FUNCTION_ADDRS;
    var tmp$;
    var value = $receiver_0.get_11rb$($receiver);
    if (value == null) {
      this.FUNCTIONS.add_11rb$($receiver);
      var answer = this.FUNCTIONS.size - 1 | 0;
      $receiver_0.put_xwzc9p$($receiver, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    return new CFunction4(tmp$);
  };
  AbstractRuntime.prototype.get_cfunc_9uqv2i$ = function ($receiver) {
    var $receiver_0 = this.FUNCTION_ADDRS;
    var tmp$;
    var value = $receiver_0.get_11rb$($receiver);
    if (value == null) {
      this.FUNCTIONS.add_11rb$($receiver);
      var answer = this.FUNCTIONS.size - 1 | 0;
      $receiver_0.put_xwzc9p$($receiver, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    return new CFunction5(tmp$);
  };
  AbstractRuntime.prototype.get_cfunc_x5yczq$ = function ($receiver) {
    var $receiver_0 = this.FUNCTION_ADDRS;
    var tmp$;
    var value = $receiver_0.get_11rb$($receiver);
    if (value == null) {
      this.FUNCTIONS.add_11rb$($receiver);
      var answer = this.FUNCTIONS.size - 1 | 0;
      $receiver_0.put_xwzc9p$($receiver, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    return new CFunction6(tmp$);
  };
  AbstractRuntime.prototype.get_cfunc_fas76v$ = function ($receiver) {
    var $receiver_0 = this.FUNCTION_ADDRS;
    var tmp$;
    var value = $receiver_0.get_11rb$($receiver);
    if (value == null) {
      this.FUNCTIONS.add_11rb$($receiver);
      var answer = this.FUNCTIONS.size - 1 | 0;
      $receiver_0.put_xwzc9p$($receiver, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    return new CFunction7(tmp$);
  };
  AbstractRuntime.prototype.fclose_eg8d9k$ = function ($receiver, stream) {
    return this.__syscalls.fclose_eg8d9k$($receiver, stream);
  };
  AbstractRuntime.prototype.fflush_eg8d9k$ = function ($receiver, stream) {
    return this.__syscalls.fflush_eg8d9k$($receiver, stream);
  };
  AbstractRuntime.prototype.fgetpos_lbuexv$ = function ($receiver, stream, ptrHolder) {
    return this.__syscalls.fgetpos_lbuexv$($receiver, stream, ptrHolder);
  };
  AbstractRuntime.prototype.fopen_sqlbip$ = function ($receiver, file, mode) {
    return this.__syscalls.fopen_sqlbip$($receiver, file, mode);
  };
  AbstractRuntime.prototype.fread_cph5k5$ = function ($receiver, ptr, size, nmemb, stream) {
    return this.__syscalls.fread_cph5k5$($receiver, ptr, size, nmemb, stream);
  };
  AbstractRuntime.prototype.fseek_7o3413$ = function ($receiver, stream, offset, whence) {
    return this.__syscalls.fseek_7o3413$($receiver, stream, offset, whence);
  };
  AbstractRuntime.prototype.fsetpos_lbuexv$ = function ($receiver, stream, ptrHolder) {
    return this.__syscalls.fsetpos_lbuexv$($receiver, stream, ptrHolder);
  };
  AbstractRuntime.prototype.ftell_eg8d9k$ = function ($receiver, stream) {
    return this.__syscalls.ftell_eg8d9k$($receiver, stream);
  };
  AbstractRuntime.prototype.fwrite_cph5k5$ = function ($receiver, ptr, size, nmemb, stream) {
    return this.__syscalls.fwrite_cph5k5$($receiver, ptr, size, nmemb, stream);
  };
  AbstractRuntime.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbstractRuntime',
    interfaces: [RuntimeSyscalls]
  };
  function KTCC() {
    KTCC_instance = this;
    this.VERSION = KTCC_VERSION;
  }
  KTCC.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'KTCC',
    interfaces: []
  };
  var KTCC_instance = null;
  function KTCC_getInstance() {
    if (KTCC_instance === null) {
      new KTCC();
    }
    return KTCC_instance;
  }
  function CLI() {
    CLI_instance = this;
  }
  function CLI$main$showHelp$lambda(it) {
    return it.name;
  }
  function CLI$main$showHelp() {
    println('ktcc [-e] [-p] ...files[.c][.o]');
    println('');
    println(' -p - Print');
    println(' -W* - GCC-compatible warnings (ignored)');
    println(' -e - Execute');
    println(' -c - Compile-only');
    println(' -o - Output file');
    println(' -version - Prints version');
    println(' -Ttarget - Selects the output target. One of [' + joinToString(Targets_getInstance().all, ', ', void 0, void 0, void 0, void 0, CLI$main$showHelp$lambda) + ']');
    println(' -g[0123] - Debug level');
    println(' -O[0123|fast|s] - Optimization level');
    println(' -E - Preprocess only');
    println(' --runtime - Include runtime');
    println(' --no-runtime - No runtime');
    println(' --subtarget=<common|jvm> - Subtarget for code generation');
    println(' -Dname - Add define');
    println(' -Ipath - Add include folder');
    println(' -Lpath - Add lib folder');
    println(' -lname - Add lib');
  }
  CLI.prototype.main_kand9s$ = function (args) {
    var tmp$, tmp$_0;
    var argsReader = new ListReader(toList(args), '');
    var execute = false;
    var print = false;
    var runtime = null;
    var sourceFiles = ArrayList_init();
    var execArgs = ArrayList_init();
    var defines = ArrayList_init();
    var includeFolders = ArrayList_init();
    var libFolders = ArrayList_init();
    var libs = ArrayList_init();
    var debugLevel = 0;
    var compileOnly = null;
    var optimizeLevel = 0;
    var outputFile = null;
    var preprocessOnly = false;
    var warnings = ArrayList_init();
    var extra = ArrayList_init();
    var targetName = Targets_getInstance().default.name;
    var subTarget = null;
    var showHelp = CLI$main$showHelp;
    while (!argsReader.eof) {
      var v = argsReader.read();
      if (setOf(['-?', '/?', '-h', '-H']).contains_11rb$(v))
        return showHelp();
      else if (equals(v, '-o'))
        outputFile = argsReader.read();
      else if (equals(v, '-p'))
        print = true;
      else if (equals(v, '-e'))
        execute = true;
      else if (equals(v, '-E'))
        preprocessOnly = true;
      else if (equals(v, '-c'))
        compileOnly = true;
      else if (equals(v, '--no-runtime'))
        runtime = false;
      else if (startsWith(v, '--subtarget='))
        subTarget = removePrefix(v, '--subtarget=');
      else if (startsWith(v, '-O')) {
        switch (v.substring(2)) {
          case '':
          case '1':
            tmp$ = 1;
            break;
          case '2':
            tmp$ = 2;
            break;
          case '3':
            tmp$ = 3;
            break;
          case 'fast':
            tmp$ = 0;
            break;
          case 's':
            tmp$ = 0;
            break;
          default:throw IllegalStateException_init(('Unknown optimization level ' + v).toString());
        }
        optimizeLevel = tmp$;
      }
       else if (equals(v, '-version')) {
        println('KTCC 0.7.0');
        return;
      }
       else if (startsWith(v, '-T')) {
        targetName = v.substring(2);
      }
       else if (startsWith(v, '-W')) {
        var element = v.substring(2);
        warnings.add_11rb$(element);
      }
       else if (startsWith(v, '-f')) {
        var element_0 = v.substring(2);
        extra.add_11rb$(element_0);
      }
       else if (startsWith(v, '-g')) {
        debugLevel = (tmp$_0 = toIntOrNull(v.substring(2))) != null ? tmp$_0 : 3;
      }
       else if (startsWith(v, '-D')) {
        var element_1 = v.substring(2);
        defines.add_11rb$(element_1);
      }
       else if (startsWith(v, '-I')) {
        var element_2 = v.substring(2);
        includeFolders.add_11rb$(element_2);
      }
       else if (startsWith(v, '-L')) {
        var element_3 = v.substring(2);
        libFolders.add_11rb$(element_3);
      }
       else if (startsWith(v, '-l')) {
        var element_4 = v.substring(2);
        libs.add_11rb$(element_4);
      }
       else {
        if (execute) {
          execArgs.add_11rb$(v);
        }
         else {
          sourceFiles.add_11rb$(v);
        }
      }
    }
    if (sourceFiles.isEmpty()) {
      return showHelp();
    }
    var finalCOutput = CCompiler_getInstance().preprocess_ji1ias$(sourceFiles, defines, includeFolders, optimizeLevel);
    var finalCSource = finalCOutput.code;
    if (preprocessOnly) {
      println(finalCSource);
    }
     else if (compileOnly === true) {
      if (outputFile != null) {
        writeFile(outputFile, encodeToByteArray(finalCSource));
      }
       else {
        println(finalCSource);
      }
    }
     else {
      var ckEval = new CKotlinEvaluator(Targets_getInstance().get_61zpoe$(targetName));
      var finalKtSource = ckEval.generateKotlinCodeWithRuntime_wpp9nl$(finalCSource, finalCOutput.info.copy_vhr1th$(void 0, void 0, void 0, void 0, void 0, subTarget != null ? subTarget : execute ? 'jvm' : 'common', runtime != null ? runtime : execute));
      if (!execute || print) {
        if (outputFile != null) {
          writeFile(outputFile, encodeToByteArray(finalKtSource));
        }
         else {
          println(finalKtSource);
        }
      }
      if (execute) {
        var result = ckEval.evaluateKotlinRaw_c1kmwu$(finalKtSource, copyToArray(execArgs));
        if (typeof result === 'number') {
          if (result !== 0) {
            throw Exception_init('Program exited with ' + toString(result) + ' code');
          }
        }
      }
    }
  };
  CLI.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CLI',
    interfaces: []
  };
  var CLI_instance = null;
  function CLI_getInstance() {
    if (CLI_instance === null) {
      new CLI();
    }
    return CLI_instance;
  }
  function PreprocessOutput(code, info) {
    this.code = code;
    this.info = info;
  }
  PreprocessOutput.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PreprocessOutput',
    interfaces: []
  };
  function CCompiler() {
    CCompiler_instance = this;
  }
  function CCompiler$preprocess$lambda(it) {
    return readFile(it);
  }
  function CCompiler$preprocess$getIncludeResource(closure$nativeIncludes) {
    return function (file) {
      var tmp$;
      tmp$ = CStdIncludes.get_11rb$(file);
      if (tmp$ == null) {
        return null;
      }
      var include = tmp$;
      closure$nativeIncludes.add_11rb$(include);
      return include.cHeader;
    };
  }
  function CCompiler$preprocess$lambda$lambda(closure$folder, closure$includeFolders, closure$fileReader, closure$getIncludeResource) {
    return function (fname, kind) {
      var tmp$, tmp$_0;
      var finalIncludeFolders = kind === IncludeKind$LOCAL_getInstance() ? plus(listOf(closure$folder), closure$includeFolders) : closure$includeFolders;
      var result = null;
      tmp$ = finalIncludeFolders.iterator();
      while (tmp$.hasNext()) {
        var includeFolder = tmp$.next();
        var f = closure$fileReader(includeFolder + '/' + fname);
        if (f != null) {
          result = toStringUtf8(f);
          break;
        }
      }
      var tmp$_1;
      if ((tmp$_0 = result != null ? result : closure$getIncludeResource(fname)) != null)
        tmp$_1 = tmp$_0;
      else {
        throw IllegalStateException_init(("Can't find file=" + fname + ', kind=' + kind + ' (in finalIncludeFolders=' + finalIncludeFolders + ')').toString());
      }
      return tmp$_1;
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
    var nativeIncludes = LinkedHashSet_init();
    var getIncludeResource = CCompiler$preprocess$getIncludeResource(nativeIncludes);
    var gctx = new PreprocessorGlobalContext();
    var destination = ArrayList_init_0(collectionSizeOrDefault(sourceFiles, 10));
    var tmp$;
    tmp$ = sourceFiles.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var tmp$_1;
      var file = item;
      var folder = substringBeforeLast(item, 47, get_DOT());
      var includeProvider = CCompiler$preprocess$lambda$lambda(folder, includeFolders, fileReader, getIncludeResource);
      var tmp$_2;
      if ((tmp$_1 = fileReader(file)) != null)
        tmp$_2 = tmp$_1;
      else {
        throw IllegalStateException_init(('Source file ' + file + ' not found').toString());
      }
      var fileBytes = tmp$_2;
      var destination_0 = ArrayList_init_0(collectionSizeOrDefault(defines, 10));
      var tmp$_3;
      tmp$_3 = defines.iterator();
      while (tmp$_3.hasNext()) {
        var item_0 = tmp$_3.next();
        destination_0.add_11rb$(Macro$Companion_getInstance().invoke_61zpoe$(item_0));
      }
      var ctx = new PreprocessorContext(destination_0, file, optimizeLevel, void 0, gctx, includeProvider);
      tmp$_0.call(destination, preprocess(toStringUtf8(fileBytes), ctx));
    }
    var cSources = destination;
    var destination_1 = ArrayList_init_0(collectionSizeOrDefault(nativeIncludes, 10));
    var tmp$_4;
    tmp$_4 = nativeIncludes.iterator();
    while (tmp$_4.hasNext()) {
      var item_1 = tmp$_4.next();
      destination_1.add_11rb$(item_1.cImpl);
    }
    return new PreprocessOutput(joinToString(plus(cSources, destination_1), '\n'), gctx.info().copy_vhr1th$(void 0, void 0, void 0, void 0, toList_0(nativeIncludes)));
  };
  CCompiler.prototype.parse_61zpoe$ = function (preprocessedSource) {
    var parser = programParser_0(preprocessedSource);
    return to(program(parser), parser);
  };
  function CCompiler$Compilation(source, program, parser) {
    this.source = source;
    this.program = program;
    this.parser_3x2fp8$_0 = parser;
  }
  Object.defineProperty(CCompiler$Compilation.prototype, 'parser', {
    get: function () {
      return this.parser_3x2fp8$_0;
    }
  });
  CCompiler$Compilation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Compilation',
    interfaces: [ProgramParserRef]
  };
  CCompiler.prototype.compile_kc0fyj$ = function (preprocessedSource, info, target, includeRuntime) {
    if (target === void 0)
      target = Targets_getInstance().kotlin;
    if (includeRuntime === void 0)
      includeRuntime = true;
    var tmp$ = this.parse_61zpoe$(preprocessedSource);
    var program = tmp$.component1()
    , parser = tmp$.component2();
    var generator = target.generator_mvu3bg$(program, parser, info);
    var source = generator.generate_dqye30$(void 0, includeRuntime);
    return new CCompiler$Compilation(source, program, parser);
  };
  CCompiler.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CCompiler',
    interfaces: []
  };
  var CCompiler_instance = null;
  function CCompiler_getInstance() {
    if (CCompiler_instance === null) {
      new CCompiler();
    }
    return CCompiler_instance;
  }
  function CKotlinEvaluator(target) {
    if (target === void 0)
      target = Targets_getInstance().kotlin;
    this.target = target;
  }
  CKotlinEvaluator.prototype.generateKotlinCodeRaw_wpp9nl$ = function (cprogram, info) {
    if (info === void 0)
      info = new PreprocessorInfo();
    var parser = programParser_0(cprogram);
    return this.target.generator_mvu3bg$(program(parser), parser, info).generate_dqye30$(true, info.runtime);
  };
  CKotlinEvaluator.prototype.generateKotlinCodeWithRuntime_wpp9nl$ = function (cprogram, info) {
    if (info === void 0)
      info = new PreprocessorInfo();
    return this.generateKotlinCodeRaw_wpp9nl$(cprogram, info);
  };
  CKotlinEvaluator.prototype.evaluateC_8u5kgt$ = function (cprogram, args, info) {
    if (info === void 0)
      info = new PreprocessorInfo();
    return this.evaluateKotlinWithRuntimeAndMain_c1kmwu$(this.generateKotlinCodeRaw_wpp9nl$(cprogram, info), args);
  };
  CKotlinEvaluator.prototype.preprocessAndEvaluateC_c1kmwu$ = function (cprogram, args) {
    var ctx = new PreprocessorContext();
    var pcprogram = (new CPreprocessor(ctx, cprogram)).preprocess().out.toString();
    return this.evaluateC_8u5kgt$(pcprogram, args, ctx.global.info());
  };
  CKotlinEvaluator.prototype.evaluateKotlinWithRuntimeAndMain_c1kmwu$ = function (ktprogram, args) {
    return this.evaluateKotlinRaw_c1kmwu$(ktprogram, args);
  };
  CKotlinEvaluator.prototype.evaluateKotlinRaw_c1kmwu$ = function (ktprogram, args) {
    return evaluateKotlinRawExpect(ktprogram, args);
  };
  CKotlinEvaluator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CKotlinEvaluator',
    interfaces: []
  };
  function CGenerator(parsedProgram) {
    BaseGenerator.call(this, CTarget_getInstance(), parsedProgram);
  }
  CGenerator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CGenerator',
    interfaces: [BaseGenerator]
  };
  function CTarget() {
    CTarget_instance = this;
    BaseTarget.call(this, 'c', 'c');
    this.runtime_ge1a5z$_0 = '';
  }
  Object.defineProperty(CTarget.prototype, 'runtime', {
    get: function () {
      return this.runtime_ge1a5z$_0;
    }
  });
  CTarget.prototype.generator_lqjwr7$ = function (parsedProgram) {
    return new CGenerator(parsedProgram);
  };
  CTarget.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CTarget',
    interfaces: [BaseTarget]
  };
  var CTarget_instance = null;
  function CTarget_getInstance() {
    if (CTarget_instance === null) {
      new CTarget();
    }
    return CTarget_instance;
  }
  function CSharpGenerator(parsedProgram) {
    BaseGenerator.call(this, CSharpTarget_getInstance(), parsedProgram);
  }
  function CSharpGenerator$generateProgramStructure$rblock(this$CSharpGenerator, closure$block, this$generateProgramStructure) {
    return function () {
      var $this = this$generateProgramStructure;
      var str = 'public unsafe class ' + this$CSharpGenerator.preprocessorInfo.moduleName;
      $this.line_61zpoe$(str + ' {');
      var $receiver = $this.cmds;
      var element = Indenter_0.Indent;
      $receiver.add_11rb$(element);
      try {
        closure$block(this$generateProgramStructure);
      }
      finally {
        var $receiver_0 = $this.cmds;
        var element_0 = Indenter_0.Unindent;
        $receiver_0.add_11rb$(element_0);
      }
      $this.line_61zpoe$('}');
    };
  }
  CSharpGenerator.prototype.generateProgramStructure_ahjker$ = function ($receiver, includeRuntime, block) {
    $receiver.line_61zpoe$('using System;');
    $receiver.line_61zpoe$('using System.Runtime.InteropServices;');
    if (includeRuntime) {
      $receiver.line_61zpoe$(this.target.getRuntimeImports_z234ul$(this.preprocessorInfo));
    }
    var rblock = CSharpGenerator$generateProgramStructure$rblock(this, block, $receiver);
    if (this.preprocessorInfo.packageName.length > 0) {
      $receiver.line_61zpoe$('namespace ' + this.preprocessorInfo.packageName + ' {');
      var $receiver_0 = $receiver.cmds;
      var element = Indenter_0.Indent;
      $receiver_0.add_11rb$(element);
      try {
        rblock();
      }
      finally {
        var $receiver_1 = $receiver.cmds;
        var element_0 = Indenter_0.Unindent;
        $receiver_1.add_11rb$(element_0);
      }
      $receiver.line_61zpoe$('}');
    }
     else {
      rblock();
    }
  };
  CSharpGenerator.prototype.generateStructures_rzrydj$ = function ($receiver) {
    var tmp$;
    tmp$ = this.parser.structTypesByName.values.iterator();
    while (tmp$.hasNext()) {
      var type = tmp$.next();
      $receiver.line_61zpoe$('struct ' + type.name + ' {');
      var $receiver_0 = $receiver.cmds;
      var element = Indenter_0.Indent;
      $receiver_0.add_11rb$(element);
      try {
        var tmp$_0;
        tmp$_0 = type.fields.iterator();
        while (tmp$_0.hasNext()) {
          var field = tmp$_0.next();
          var ftype = this.resolve_cpakq9$(field.type);
          $receiver.line_61zpoe$('[FieldOffset(' + field.offset + ')] ' + this.get_str_cpakq9$(ftype) + ' ' + field.name + ';');
        }
      }
      finally {
        var $receiver_1 = $receiver.cmds;
        var element_0 = Indenter_0.Unindent;
        $receiver_1.add_11rb$(element_0);
      }
      $receiver.line_61zpoe$('}');
    }
  };
  CSharpGenerator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CSharpGenerator',
    interfaces: [BaseGenerator]
  };
  function CSharpTarget() {
    CSharpTarget_instance = this;
    BaseTarget.call(this, 'c#', 'cs');
    this.runtime_j19t79$_0 = '';
  }
  Object.defineProperty(CSharpTarget.prototype, 'runtime', {
    get: function () {
      return this.runtime_j19t79$_0;
    }
  });
  CSharpTarget.prototype.generator_lqjwr7$ = function (parsedProgram) {
    return new CSharpGenerator(parsedProgram);
  };
  CSharpTarget.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CSharpTarget',
    interfaces: [BaseTarget]
  };
  var CSharpTarget_instance = null;
  function CSharpTarget_getInstance() {
    if (CSharpTarget_instance === null) {
      new CSharpTarget();
    }
    return CSharpTarget_instance;
  }
  function BaseTarget(name, ext) {
    this.name = name;
    this.ext = ext;
    this.runtimeImports_p6sjz9$_0 = '';
  }
  Object.defineProperty(BaseTarget.prototype, 'runtimeImports', {
    get: function () {
      return this.runtimeImports_p6sjz9$_0;
    }
  });
  BaseTarget.prototype.getRuntimeImports_z234ul$ = function (info) {
    return this.runtimeImports;
  };
  BaseTarget.prototype.getRuntime_z234ul$ = function (info) {
    return this.runtime;
  };
  BaseTarget.prototype.generator_mvu3bg$ = function (program, parser, info) {
    if (info === void 0)
      info = new PreprocessorInfo();
    return this.generator_lqjwr7$(new ParsedProgram(program, parser, info));
  };
  BaseTarget.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BaseTarget',
    interfaces: []
  };
  function BaseGenerator(target, parsedProgram) {
    this.target = target;
    this.parsedProgram = parsedProgram;
    this.program = this.parsedProgram.program;
    this.parser = this.parsedProgram.parser;
    this.supportsGoto_qxerra$_0 = true;
    this.EOL_SC_78hano$_0 = ';';
    this.STRUCTURES_FIRST_61vwog$_0 = true;
    this.staticDeclsNames = LinkedHashMap_init();
    this.fixedSizeArrayTypes_t7m9dq$_0 = lazy(BaseGenerator$fixedSizeArrayTypes$lambda(this));
    this.breakScope = null;
    this.__smLabel = '__smLabel';
    this.tempContext = new TempContext();
    this.genFunctionScope = new BaseGenerator$GenFunctionScope(null);
  }
  Object.defineProperty(BaseGenerator.prototype, 'preprocessorInfo', {
    get: function () {
      return this.parsedProgram.preprocessorInfo;
    }
  });
  Object.defineProperty(BaseGenerator.prototype, 'strings', {
    get: function () {
      return this.parser.strings;
    }
  });
  Object.defineProperty(BaseGenerator.prototype, 'supportsGoto', {
    get: function () {
      return this.supportsGoto_qxerra$_0;
    }
  });
  Object.defineProperty(BaseGenerator.prototype, 'EOL_SC', {
    get: function () {
      return this.EOL_SC_78hano$_0;
    }
  });
  Object.defineProperty(BaseGenerator.prototype, 'STRUCTURES_FIRST', {
    get: function () {
      return this.STRUCTURES_FIRST_61vwog$_0;
    }
  });
  function BaseGenerator$generate$lambda$lambda$lambda(this$BaseGenerator, closure$mainFunc) {
    return function ($receiver) {
      this$BaseGenerator.generateDefineConstants_rzrydj$($receiver);
      if (closure$mainFunc != null) {
        this$BaseGenerator.generateMainEntryPoint_y3v6cv$($receiver, closure$mainFunc);
      }
      return Unit;
    };
  }
  function BaseGenerator$generate$lambda$lambda$lambda_0(closure$decl, this$BaseGenerator, this$) {
    return function (it) {
      var tmp$;
      if (Kotlin.isType(it, VarDeclaration)) {
        if (it.specifiers.isStatic) {
          tmp$ = it.parsedList.iterator();
          while (tmp$.hasNext()) {
            var parsed = tmp$.next();
            var $receiver = this$BaseGenerator.staticDeclsNames;
            var value = '__STATIC_' + closure$decl.name + '_' + parsed.name;
            $receiver.put_xwzc9p$(parsed, value);
          }
          this$BaseGenerator.generate_bbgvzo$(this$, it, false, true, '__STATIC_' + closure$decl.name + '_');
        }
      }
      return Unit;
    };
  }
  function BaseGenerator$generate$lambda$lambda(this$BaseGenerator, closure$mainFunc) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      if (this$BaseGenerator.STRUCTURES_FIRST)
        this$BaseGenerator.generateStructures_rzrydj$($receiver);
      this$BaseGenerator.generateStaticCode_xkat1w$($receiver, BaseGenerator$generate$lambda$lambda$lambda(this$BaseGenerator, closure$mainFunc));
      var $receiver_0 = this$BaseGenerator.program.decls;
      var destination = ArrayList_init();
      var tmp$_1;
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        if (Kotlin.isType(element, FuncDeclaration))
          destination.add_11rb$(element);
      }
      tmp$ = destination.iterator();
      while (tmp$.hasNext()) {
        var decl = tmp$.next();
        visitAllDescendants(decl.body, BaseGenerator$generate$lambda$lambda$lambda_0(decl, this$BaseGenerator, $receiver));
      }
      tmp$_0 = this$BaseGenerator.program.decls.iterator();
      while (tmp$_0.hasNext()) {
        var decl_0 = tmp$_0.next();
        this$BaseGenerator.generate_34xbqu$($receiver, decl_0, true);
      }
      if (!this$BaseGenerator.STRUCTURES_FIRST)
        this$BaseGenerator.generateStructures_rzrydj$($receiver);
      this$BaseGenerator.generateFixedSizeArrayTypes_rzrydj$($receiver);
      return Unit;
    };
  }
  BaseGenerator.prototype.generate_dqye30$$default = function (includeErrorsInSource, includeRuntime) {
    var $receiver = new Indenter_0();
    var mainFunc = this.program.getFunctionOrNull_61zpoe$('main');
    if (includeErrorsInSource) {
      this.generateErrorComments_rzrydj$($receiver);
    }
    this.generateProgramStructure_ahjker$($receiver, includeRuntime, BaseGenerator$generate$lambda$lambda(this, mainFunc));
    this.generateStructuresOutside_rzrydj$($receiver);
    if (mainFunc != null) {
      this.generateMainEntryPointOutside_y3v6cv$($receiver, mainFunc);
    }
    if (includeRuntime) {
      $receiver.line_61zpoe$(this.target.getRuntime_z234ul$(this.preprocessorInfo));
    }
    return $receiver.toString();
  };
  BaseGenerator.prototype.generate_dqye30$ = function (includeErrorsInSource, includeRuntime, callback$default) {
    if (includeErrorsInSource === void 0)
      includeErrorsInSource = false;
    if (includeRuntime === void 0)
      includeRuntime = false;
    return callback$default ? callback$default(includeErrorsInSource, includeRuntime) : this.generate_dqye30$$default(includeErrorsInSource, includeRuntime);
  };
  Object.defineProperty(BaseGenerator.prototype, 'fixedSizeArrayTypes', {
    get: function () {
      return this.fixedSizeArrayTypes_t7m9dq$_0.value;
    }
  });
  BaseGenerator.prototype.resolve_cpakq9$ = function ($receiver) {
    return resolve($receiver, this.parser);
  };
  BaseGenerator.prototype.get_requireRefStackAlloc_cpakq9$ = function ($receiver) {
    if (Kotlin.isType($receiver, StructType))
      return false;
    else
      return true;
  };
  function BaseGenerator$BreakScope(name, kind, node, parent) {
    if (parent === void 0)
      parent = null;
    this.name = name;
    this.kind = kind;
    this.node = node;
    this.parent = parent;
    this.level = this.parent != null ? this.parent.level + 1 | 0 : 1;
  }
  function BaseGenerator$BreakScope$Kind(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function BaseGenerator$BreakScope$Kind_initFields() {
    BaseGenerator$BreakScope$Kind_initFields = function () {
    };
    BaseGenerator$BreakScope$Kind$WHEN_instance = new BaseGenerator$BreakScope$Kind('WHEN', 0);
    BaseGenerator$BreakScope$Kind$WHILE_instance = new BaseGenerator$BreakScope$Kind('WHILE', 1);
  }
  var BaseGenerator$BreakScope$Kind$WHEN_instance;
  function BaseGenerator$BreakScope$Kind$WHEN_getInstance() {
    BaseGenerator$BreakScope$Kind_initFields();
    return BaseGenerator$BreakScope$Kind$WHEN_instance;
  }
  var BaseGenerator$BreakScope$Kind$WHILE_instance;
  function BaseGenerator$BreakScope$Kind$WHILE_getInstance() {
    BaseGenerator$BreakScope$Kind_initFields();
    return BaseGenerator$BreakScope$Kind$WHILE_instance;
  }
  BaseGenerator$BreakScope$Kind.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Kind',
    interfaces: [Enum]
  };
  function BaseGenerator$BreakScope$Kind$values() {
    return [BaseGenerator$BreakScope$Kind$WHEN_getInstance(), BaseGenerator$BreakScope$Kind$WHILE_getInstance()];
  }
  BaseGenerator$BreakScope$Kind.values = BaseGenerator$BreakScope$Kind$values;
  function BaseGenerator$BreakScope$Kind$valueOf(name) {
    switch (name) {
      case 'WHEN':
        return BaseGenerator$BreakScope$Kind$WHEN_getInstance();
      case 'WHILE':
        return BaseGenerator$BreakScope$Kind$WHILE_getInstance();
      default:throwISE('No enum constant com.soywiz.ktcc.gen.BaseGenerator.BreakScope.Kind.' + name);
    }
  }
  BaseGenerator$BreakScope$Kind.valueOf_61zpoe$ = BaseGenerator$BreakScope$Kind$valueOf;
  Object.defineProperty(BaseGenerator$BreakScope.prototype, 'scopeForContinue', {
    get: function () {
      var tmp$;
      return this.kind === BaseGenerator$BreakScope$Kind$WHILE_getInstance() ? this : (tmp$ = this.parent) != null ? tmp$.scopeForContinue : null;
    }
  });
  BaseGenerator$BreakScope.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BreakScope',
    interfaces: []
  };
  Object.defineProperty(BaseGenerator.prototype, 'breakScopeForContinue', {
    get: function () {
      var tmp$;
      return (tmp$ = this.breakScope) != null ? tmp$.scopeForContinue : null;
    }
  });
  BaseGenerator.prototype.breakScope_xi7k92$ = function (name, kind, node, callback) {
    var tmp$, tmp$_0;
    var old = this.breakScope;
    this.breakScope = new BaseGenerator$BreakScope(name + ((tmp$_0 = (tmp$ = this.breakScope) != null ? tmp$.level : null) != null ? tmp$_0 : 0), kind, node, old);
    try {
      return callback(ensureNotNull(this.breakScope));
    }
    finally {
      this.breakScope = old;
    }
  };
  BaseGenerator.prototype.lineStackFrame_xkecb6$ = function ($receiver, node, code) {
    code();
  };
  BaseGenerator.prototype.generate_jhzyqb$ = function ($receiver, it) {
    this.displayComments_2e9wgm$($receiver, it);
    $receiver.line_61zpoe$(this.__smLabel + ' = ' + it.label.id + '; continue@__sm');
  };
  BaseGenerator.prototype.generate_yuj8ru$ = function ($receiver, it) {
    this.displayComments_2e9wgm$($receiver, it);
    $receiver.line_61zpoe$(this.__smLabel + ' = ' + it.label.id);
    var $receiver_0 = $receiver.cmds;
    var element = Indenter_0.Unindent;
    $receiver_0.add_11rb$(element);
    $receiver.line_61zpoe$('}');
    $receiver.line_61zpoe$(it.label.id.toString() + ' -> {');
    var $receiver_1 = $receiver.cmds;
    var element_0 = Indenter_0.Indent;
    $receiver_1.add_11rb$(element_0);
  };
  BaseGenerator.prototype.generate_dh0t62$ = function ($receiver, it) {
    this.displayComments_2e9wgm$($receiver, it);
    $receiver.line_61zpoe$('if (' + this.generate_o41f6z$(it.cond, false) + ') { ' + this.__smLabel + ' = ' + it.label.id + '; continue@__sm }');
  };
  BaseGenerator.prototype.generate_j1081r$ = function ($receiver, it) {
    this.displayComments_2e9wgm$($receiver, it);
    $receiver.line_61zpoe$(this.__smLabel + ' = when (' + this.generate_o41f6z$(it.subject, false) + ')' + ' {');
    var $receiver_0 = $receiver.cmds;
    var element = Indenter_0.Indent;
    $receiver_0.add_11rb$(element);
    try {
      var tmp$;
      tmp$ = it.map.entries.iterator();
      while (tmp$.hasNext()) {
        var tmp$_0 = tmp$.next();
        var expr = tmp$_0.key;
        var label = tmp$_0.value;
        if (expr != null) {
          $receiver.line_61zpoe$(this.generate_o41f6z$(expr, false) + ' -> ' + label.id);
        }
         else {
          $receiver.line_61zpoe$('else -> ' + label.id);
        }
      }
    }
    finally {
      var $receiver_1 = $receiver.cmds;
      var element_0 = Indenter_0.Unindent;
      $receiver_1.add_11rb$(element_0);
    }
    $receiver.line_61zpoe$('}');
    $receiver.line_61zpoe$('continue@__sm');
  };
  function BaseGenerator$generate$lambda(closure$it, this$BaseGenerator, this$generate) {
    return function () {
      var tmp$;
      tmp$ = closure$it.stms.iterator();
      while (tmp$.hasNext()) {
        var s = tmp$.next();
        this$BaseGenerator.generate_ghgxvp$(this$generate, s);
      }
      return Unit;
    };
  }
  BaseGenerator.prototype.generate_dtssjy$ = function ($receiver, it) {
    var tmp$;
    this.displayComments_2e9wgm$($receiver, it);
    var $receiver_0 = it.stms;
    var any$result;
    any$break: do {
      var tmp$_0;
      if (Kotlin.isType($receiver_0, Collection) && $receiver_0.isEmpty()) {
        any$result = false;
        break any$break;
      }
      tmp$_0 = $receiver_0.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        if (Kotlin.isType(element, Decl)) {
          any$result = true;
          break any$break;
        }
      }
      any$result = false;
    }
     while (false);
    var hasDeclarations = any$result;
    if (hasDeclarations) {
      this.lineStackFrame_xkecb6$($receiver, it, BaseGenerator$generate$lambda(it, this, $receiver));
    }
     else {
      tmp$ = it.stms.iterator();
      while (tmp$.hasNext()) {
        var s = tmp$.next();
        this.generate_ghgxvp$($receiver, s);
      }
    }
  };
  BaseGenerator.prototype.generate_4y82cr$ = function ($receiver, it) {
    this.displayComments_2e9wgm$($receiver, it);
    $receiver.line_61zpoe$(it.raw);
  };
  BaseGenerator.prototype.generate_dv4k$ = function ($receiver, it) {
    if (it.multiline) {
      $receiver.line_61zpoe$('/* ' + it.zcomment + ' */');
    }
     else {
      $receiver.line_61zpoe$('// ' + it.zcomment);
    }
  };
  BaseGenerator.prototype.displayComments_2e9wgm$ = function ($receiver, it) {
    if (it == null)
      return;
    if (equals(it.comment, ''))
      return;
    var $receiver_0 = it.comment;
    var tmp$;
    this.generate_dv4k$($receiver, new CommentStm(trim(Kotlin.isCharSequence(tmp$ = $receiver_0) ? tmp$ : throwCCE()).toString()));
  };
  BaseGenerator.prototype.generate_50e0xj$ = function ($receiver, it) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = it.func) != null)
      tmp$_0 = tmp$;
    else {
      throw IllegalStateException_init("Return doesn't have linked a function scope".toString());
    }
    var func = tmp$_0;
    this.displayComments_2e9wgm$($receiver, it);
    if (it.expr != null)
      $receiver.line_61zpoe$('return ' + this.generate_o41f6z$(this.castTo_bkkyyh$(it.expr, func.rettype), false) + this.EOL_SC);
    else
      $receiver.line_61zpoe$('return' + this.EOL_SC);
  };
  BaseGenerator.prototype.generate_qjhsmo$ = function ($receiver, it) {
    var tmp$;
    tmp$ = it.expr;
    if (tmp$ == null) {
      return;
    }
    var expr = tmp$;
    this.displayComments_2e9wgm$($receiver, it);
    if (Kotlin.isType(expr, SimpleAssignExpr))
      $receiver.line_61zpoe$(this.generateAssign_oumrkp$(expr.l, this.generate_o41f6z$(this.castTo_bkkyyh$(expr.r, expr.l.type), false)) + this.EOL_SC);
    else if (Kotlin.isType(expr, BaseUnaryOp) && setOf(['++', '--']).contains_11rb$(expr.op)) {
      this.one_cpakq9$(expr.operand.type);
      $receiver.line_61zpoe$(this.generateAssign_oumrkp$(expr.operand, this.generate_8s0arm$(new Binop(expr.operand, expr.op.substring(0, 1), this.oneExpr_cpakq9$(expr.operand.type)), false)) + this.EOL_SC);
    }
     else
      $receiver.line_61zpoe$(this.generate_o41f6z$(expr, false) + this.EOL_SC);
  };
  function BaseGenerator$generate$lambda_0(closure$it, this$BaseGenerator, this$generate) {
    return function (scope) {
      this$generate.line_61zpoe$(scope.name + '@while (' + this$BaseGenerator.generate_o41f6z$(this$BaseGenerator.castTo_bkkyyh$(closure$it.cond, Type$Companion_getInstance().BOOL), false) + ') {');
      var $this = this$generate;
      var $receiver = $this.cmds;
      var element = Indenter_0.Indent;
      $receiver.add_11rb$(element);
      try {
        var closure$it_0 = closure$it;
        this$BaseGenerator.generate_ghgxvp$(this$generate, closure$it_0.body);
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
  BaseGenerator.prototype.generate_2j3osq$ = function ($receiver, it) {
    this.displayComments_2e9wgm$($receiver, it);
    if (containsBreakOrContinue(it)) {
      this.breakScope_xi7k92$('while', BaseGenerator$BreakScope$Kind$WHILE_getInstance(), it, BaseGenerator$generate$lambda_0(it, this, $receiver));
    }
     else {
      $receiver.line_61zpoe$('while (' + this.generate_o41f6z$(this.castTo_bkkyyh$(it.cond, Type$Companion_getInstance().BOOL), false) + ') {');
      var $receiver_0 = $receiver.cmds;
      var element = Indenter_0.Indent;
      $receiver_0.add_11rb$(element);
      try {
        this.generate_ghgxvp$($receiver, it.body);
      }
      finally {
        var $receiver_1 = $receiver.cmds;
        var element_0 = Indenter_0.Unindent;
        $receiver_1.add_11rb$(element_0);
      }
      $receiver.line_61zpoe$('}');
    }
  };
  function BaseGenerator$generate$lambda_1(this$generate, closure$it, this$BaseGenerator) {
    return function (scope) {
      this$generate.line_61zpoe$(scope.name + '@do {');
      var $this = this$generate;
      var $receiver = $this.cmds;
      var element = Indenter_0.Indent;
      $receiver.add_11rb$(element);
      try {
        var closure$it_0 = closure$it;
        this$BaseGenerator.generate_ghgxvp$(this$generate, closure$it_0.body);
      }
      finally {
        var $receiver_0 = $this.cmds;
        var element_0 = Indenter_0.Unindent;
        $receiver_0.add_11rb$(element_0);
      }
      this$generate.line_61zpoe$('} while (' + this$BaseGenerator.generate_o41f6z$(this$BaseGenerator.castTo_bkkyyh$(closure$it.cond, Type$Companion_getInstance().BOOL), false) + ')');
      return Unit;
    };
  }
  BaseGenerator.prototype.generate_p5wkzj$ = function ($receiver, it) {
    this.displayComments_2e9wgm$($receiver, it);
    this.breakScope_xi7k92$('do', BaseGenerator$BreakScope$Kind$WHILE_getInstance(), it, BaseGenerator$generate$lambda_1($receiver, it, this));
  };
  BaseGenerator.prototype.generateString_t5f6lf$ = function (node) {
    var tmp$;
    if (node == null)
      tmp$ = '';
    else if (Kotlin.isType(node, Stm)) {
      var $receiver = new Indenter_0();
      this.generate_ghgxvp$($receiver, node);
      var $receiver_0 = replace($receiver.toString(), '\n', ' ');
      var tmp$_0;
      tmp$ = trim(Kotlin.isCharSequence(tmp$_0 = $receiver_0) ? tmp$_0 : throwCCE()).toString();
    }
     else if (Kotlin.isType(node, Expr)) {
      var $receiver_1 = this.generate_o41f6z$(node);
      var tmp$_1;
      tmp$ = trim(Kotlin.isCharSequence(tmp$_1 = $receiver_1) ? tmp$_1 : throwCCE()).toString();
    }
     else {
      throw IllegalStateException_init(('Unsupporteed node type no Expr/Str -- ' + Kotlin.getKClassFromExpression(node) + ' -- ' + toString(node)).toString());
    }
    return tmp$;
  };
  BaseGenerator.prototype.generate_a8n65i$ = function ($receiver, it) {
    this.displayComments_2e9wgm$($receiver, it);
  };
  function BaseGenerator$generate$lambda_2(closure$it, this$BaseGenerator, this$generate) {
    return function () {
      this$BaseGenerator.generate_ghgxvp$(this$generate, closure$it.body);
      return Unit;
    };
  }
  BaseGenerator.prototype.generate_ghgo4i$ = function ($receiver, it) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    this.displayComments_2e9wgm$($receiver, it);
    tmp$ = it.init;
    if (tmp$ == null)
      tmp$_0 = '';
    else if (Kotlin.isType(tmp$, Stm))
      tmp$_0 = this.generateString_t5f6lf$(it.init);
    else if (Kotlin.isType(tmp$, Expr))
      tmp$_0 = this.generateString_t5f6lf$(it.init) + ';';
    else {
      throw new NotImplementedError_init();
    }
    var init = tmp$_0;
    $receiver.line_61zpoe$(init);
    $receiver.line_61zpoe$('for (; ' + toString((tmp$_1 = it.cond) != null ? this.generate_o41f6z$(tmp$_1) : null) + '; ' + toString((tmp$_2 = it.post) != null ? this.generate_o41f6z$(tmp$_2) : null) + ')' + ' {');
    var $receiver_0 = $receiver.cmds;
    var element = Indenter_0.Indent;
    $receiver_0.add_11rb$(element);
    try {
      BaseGenerator$generate$lambda_2(it, this, $receiver)();
    }
    finally {
      var $receiver_1 = $receiver.cmds;
      var element_0 = Indenter_0.Unindent;
      $receiver_1.add_11rb$(element_0);
    }
    $receiver.line_61zpoe$('}');
  };
  BaseGenerator.prototype.generate_fox6xv$ = function ($receiver, it) {
    this.displayComments_2e9wgm$($receiver, it);
    $receiver.line_61zpoe$('switch (' + this.generate_o41f6z$(it.subject, false) + ')' + ' {');
    var $receiver_0 = $receiver.cmds;
    var element = Indenter_0.Indent;
    $receiver_0.add_11rb$(element);
    try {
      var tmp$;
      tmp$ = it.bodyCases.iterator();
      while (tmp$.hasNext()) {
        var stm = tmp$.next();
        if (Kotlin.isType(stm, CaseStm)) {
          $receiver.line_61zpoe$('case ' + this.generate_dmr2a6$(stm.expr, false) + ':' + ' {');
          var $receiver_1 = $receiver.cmds;
          var element_0 = Indenter_0.Indent;
          $receiver_1.add_11rb$(element_0);
          try {
            this.generate_dtssjy$($receiver, stm.stm);
            $receiver.line_61zpoe$('break' + this.EOL_SC);
          }
          finally {
            var $receiver_2 = $receiver.cmds;
            var element_1 = Indenter_0.Unindent;
            $receiver_2.add_11rb$(element_1);
          }
          $receiver.line_61zpoe$('}');
        }
         else if (Kotlin.isType(stm, DefaultStm)) {
          $receiver.line_61zpoe$('default: ' + ' {');
          var $receiver_3 = $receiver.cmds;
          var element_2 = Indenter_0.Indent;
          $receiver_3.add_11rb$(element_2);
          try {
            this.generate_dtssjy$($receiver, stm.stm);
            $receiver.line_61zpoe$('break' + this.EOL_SC);
          }
          finally {
            var $receiver_4 = $receiver.cmds;
            var element_3 = Indenter_0.Unindent;
            $receiver_4.add_11rb$(element_3);
          }
          $receiver.line_61zpoe$('}');
        }
      }
    }
    finally {
      var $receiver_5 = $receiver.cmds;
      var element_4 = Indenter_0.Unindent;
      $receiver_5.add_11rb$(element_4);
    }
    $receiver.line_61zpoe$('}');
  };
  BaseGenerator.prototype.generate_5r4w1n$ = function ($receiver, it) {
    this.displayComments_2e9wgm$($receiver, it);
    $receiver.line_61zpoe$('switch (' + this.generate_o41f6z$(it.subject, false) + ')' + ' {');
    var $receiver_0 = $receiver.cmds;
    var element = Indenter_0.Indent;
    $receiver_0.add_11rb$(element);
    try {
      this.generate_dtssjy$($receiver, it.body);
    }
    finally {
      var $receiver_1 = $receiver.cmds;
      var element_0 = Indenter_0.Unindent;
      $receiver_1.add_11rb$(element_0);
    }
    $receiver.line_61zpoe$('}');
  };
  BaseGenerator.prototype.generate_4a7gs5$ = function ($receiver, it) {
    this.displayComments_2e9wgm$($receiver, it);
    $receiver.line_61zpoe$('case ' + this.generate_dmr2a6$(it.expr) + ':');
    this.generate_dtssjy$($receiver, it.stm);
  };
  BaseGenerator.prototype.generate_3mw6ry$ = function ($receiver, it) {
    this.displayComments_2e9wgm$($receiver, it);
    $receiver.line_61zpoe$('default:');
    this.generate_dtssjy$($receiver, it.stm);
  };
  BaseGenerator.prototype.generate_sz417k$ = function ($receiver, it) {
    $receiver.line_61zpoe$(it.id.toString() + ':');
    this.generate_ghgxvp$($receiver, it.stm);
  };
  BaseGenerator.prototype.generate_dtl162$ = function ($receiver, it) {
    this.displayComments_2e9wgm$($receiver, it);
    $receiver.line_61zpoe$('goto ' + it.id + ';');
  };
  BaseGenerator.prototype.generateBreakContinue_ghgxvp$ = function ($receiver, it) {
    this.displayComments_2e9wgm$($receiver, it);
    $receiver.line_61zpoe$(Kotlin.isType(it, Continue) ? 'continue;' : 'break;');
  };
  BaseGenerator.prototype.generate_27qazc$ = function ($receiver, it) {
    this.generateBreakContinue_ghgxvp$($receiver, it);
  };
  BaseGenerator.prototype.generate_j0642a$ = function ($receiver, it) {
    this.generateBreakContinue_ghgxvp$($receiver, it);
  };
  BaseGenerator.prototype.generate_qp0xp$ = function ($receiver, it) {
    this.displayComments_2e9wgm$($receiver, it);
    $receiver.line_61zpoe$('if (' + this.generate_o41f6z$(this.castToStrict_bkkyyh$(it.cond, Type$Companion_getInstance().BOOL), false) + ') {');
    var $receiver_0 = $receiver.cmds;
    var element = Indenter_0.Indent;
    $receiver_0.add_11rb$(element);
    try {
      this.generate_ghgxvp$($receiver, it.strue);
    }
    finally {
      var $receiver_1 = $receiver.cmds;
      var element_0 = Indenter_0.Unindent;
      $receiver_1.add_11rb$(element_0);
    }
    if (it.sfalse != null) {
      $receiver.line_61zpoe$('} else {');
      var $receiver_2 = $receiver.cmds;
      var element_1 = Indenter_0.Indent;
      $receiver_2.add_11rb$(element_1);
      try {
        this.generate_ghgxvp$($receiver, it.sfalse);
      }
      finally {
        var $receiver_3 = $receiver.cmds;
        var element_2 = Indenter_0.Unindent;
        $receiver_3.add_11rb$(element_2);
      }
      $receiver.line_61zpoe$('}');
    }
     else {
      $receiver.line_61zpoe$('}');
    }
  };
  BaseGenerator.prototype.castTo_bkkyyh$ = function ($receiver, _dstType) {
    var tmp$;
    var dstType = _dstType != null ? this.resolve_cpakq9$(_dstType) : null;
    var srcType = this.resolve_cpakq9$($receiver.type);
    if (dstType != null && !equals(srcType, dstType))
      tmp$ = new CastExpr($receiver, dstType);
    else
      tmp$ = $receiver;
    return tmp$;
  };
  BaseGenerator.prototype.castToStrict_bkkyyh$ = function ($receiver, _dstType) {
    return $receiver;
  };
  BaseGenerator.prototype.generateErrorComments_rzrydj$ = function ($receiver) {
    var tmp$, tmp$_0;
    tmp$ = this.parser.errors.iterator();
    while (tmp$.hasNext()) {
      var msg = tmp$.next();
      $receiver.line_61zpoe$('// ERROR: ' + msg);
    }
    tmp$_0 = this.parser.warnings.iterator();
    while (tmp$_0.hasNext()) {
      var msg_0 = tmp$_0.next();
      $receiver.line_61zpoe$('// WARNING: ' + msg_0);
    }
  };
  BaseGenerator.prototype.generateProgramStructure_ahjker$ = function ($receiver, includeRuntime, block) {
    block($receiver);
  };
  BaseGenerator.prototype.generateStructures_rzrydj$ = function ($receiver) {
    var tmp$;
    tmp$ = this.parser.structTypesByName.values.iterator();
    while (tmp$.hasNext()) {
      var type = tmp$.next();
      $receiver.line_61zpoe$('struct ' + type.name + ' {');
      var $receiver_0 = $receiver.cmds;
      var element = Indenter_0.Indent;
      $receiver_0.add_11rb$(element);
      try {
        var tmp$_0;
        tmp$_0 = type.fields.iterator();
        while (tmp$_0.hasNext()) {
          var field = tmp$_0.next();
          var ftype = this.resolve_cpakq9$(field.type);
          $receiver.line_61zpoe$(this.get_str_cpakq9$(ftype) + ' ' + field.name + ';');
        }
      }
      finally {
        var $receiver_1 = $receiver.cmds;
        var element_0 = Indenter_0.Unindent;
        $receiver_1.add_11rb$(element_0);
      }
      $receiver.line_61zpoe$('}');
    }
  };
  BaseGenerator.prototype.generateStructuresOutside_rzrydj$ = function ($receiver) {
  };
  BaseGenerator.prototype.generateFixedSizeArrayTypes_rzrydj$ = function ($receiver) {
  };
  BaseGenerator.prototype.generateStaticCode_xkat1w$ = function ($receiver, callback) {
    callback($receiver);
  };
  BaseGenerator.prototype.generateDefineConstants_rzrydj$ = function ($receiver) {
    var tmp$;
    tmp$ = this.preprocessorInfo.constantDecls.entries.iterator();
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var name = tmp$_0.key;
      var value = tmp$_0.value;
      $receiver.line_61zpoe$('#define ' + name + ' ' + value);
    }
  };
  BaseGenerator.prototype.generateMainEntryPoint_y3v6cv$ = function ($receiver, mainFunc) {
  };
  BaseGenerator.prototype.generateMainEntryPointOutside_y3v6cv$ = function ($receiver, mainFunc) {
  };
  function BaseGenerator$GenFunctionScope(parent) {
    if (parent === void 0)
      parent = null;
    this.parent = parent;
    this.localSymbolsStackAllocNames = emptySet();
    this.localSymbolsStackAlloc = emptySet();
  }
  BaseGenerator$GenFunctionScope.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GenFunctionScope',
    interfaces: []
  };
  BaseGenerator.prototype.functionScope_klfg04$ = function (callback) {
    var old = this.genFunctionScope;
    this.genFunctionScope = new BaseGenerator$GenFunctionScope(old);
    try {
      return callback();
    }
    finally {
      this.genFunctionScope = old;
    }
  };
  function BaseGenerator$genFuncDeclaration$lambda(this$BaseGenerator) {
    return function (it) {
      return this$BaseGenerator.generateParam_3s5da3$(it);
    };
  }
  BaseGenerator.prototype.genFuncDeclaration_xd31ca$ = function (it) {
    return this.get_str_cpakq9$(this.resolve_cpakq9$(it.funcType.retType)) + ' ' + it.name.name + '(' + joinToString(it.paramsWithVariadic, ', ', void 0, void 0, void 0, void 0, BaseGenerator$genFuncDeclaration$lambda(this)) + ')';
  };
  function BaseGenerator$generate$lambda$lambda_0(closure$it, this$BaseGenerator, this$generate) {
    return function () {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
      var tmp$_4;
      if ((tmp$ = closure$it.func) != null)
        tmp$_4 = tmp$;
      else {
        throw IllegalStateException_init("Can't get FunctionScope in function".toString());
      }
      var func = tmp$_4;
      this$BaseGenerator.genFunctionScope.localSymbolsStackAlloc = findSymbolsRequiringStackAlloc(closure$it);
      var tmp$_5 = this$BaseGenerator.genFunctionScope;
      var $receiver = this$BaseGenerator.genFunctionScope.localSymbolsStackAlloc;
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
      var tmp$_6;
      tmp$_6 = $receiver.iterator();
      while (tmp$_6.hasNext()) {
        var item = tmp$_6.next();
        destination.add_11rb$(item.name);
      }
      tmp$_5.localSymbolsStackAllocNames = toSet(destination);
      var localSymbolsStackAlloc = this$BaseGenerator.genFunctionScope.localSymbolsStackAlloc;
      tmp$_0 = localSymbolsStackAlloc.iterator();
      while (tmp$_0.hasNext()) {
        var symbol = tmp$_0.next();
        this$generate.line_61zpoe$('// Require alloc in stack to get pointer: ' + symbol);
      }
      var assignNames = getMutatingVariables(closure$it.body);
      tmp$_1 = closure$it.params.iterator();
      while (tmp$_1.hasNext()) {
        var param = tmp$_1.next();
        var name = param.name.name;
        if (assignNames.contains_11rb$(name)) {
          this$generate.line_61zpoe$('var ' + name + ' = ' + name + ' // Mutating parameter');
        }
      }
      if (func.hasGoto && !this$BaseGenerator.supportsGoto) {
        var output = StateMachineLowerer_getInstance().lower_o9lo4n$(closure$it.body);
        tmp$_2 = output.decls.iterator();
        while (tmp$_2.hasNext()) {
          var decl = tmp$_2.next();
          this$BaseGenerator.generate_ghgxvp$(this$generate, decl);
        }
        this$generate.line_61zpoe$('__smLabel = -1');
        var $this = this$generate;
        var str = '__sm@while (true)';
        $this.line_61zpoe$(str + ' {');
        var $receiver_0 = $this.cmds;
        var element = Indenter_0.Indent;
        $receiver_0.add_11rb$(element);
        try {
          var this$generate_0 = this$generate;
          var this$BaseGenerator_0 = this$BaseGenerator;
          this$generate_0.line_61zpoe$('when (__smLabel)' + ' {');
          var $receiver_1 = this$generate_0.cmds;
          var element_0 = Indenter_0.Indent;
          $receiver_1.add_11rb$(element_0);
          try {
            var tmp$_7;
            this$generate_0.line_61zpoe$('-1 -> {');
            var $receiver_2 = this$generate_0.cmds;
            var element_1 = Indenter_0.Indent;
            $receiver_2.add_11rb$(element_1);
            tmp$_7 = output.stms.iterator();
            while (tmp$_7.hasNext()) {
              var stm = tmp$_7.next();
              this$BaseGenerator_0.generate_ghgxvp$(this$generate_0, stm);
            }
            var $receiver_3 = this$generate_0.cmds;
            var element_2 = Indenter_0.Unindent;
            $receiver_3.add_11rb$(element_2);
            this$generate_0.line_61zpoe$('}');
          }
          finally {
            var $receiver_4 = this$generate_0.cmds;
            var element_3 = Indenter_0.Unindent;
            $receiver_4.add_11rb$(element_3);
          }
          this$generate_0.line_61zpoe$('}');
        }
        finally {
          var $receiver_5 = $this.cmds;
          var element_4 = Indenter_0.Unindent;
          $receiver_5.add_11rb$(element_4);
        }
        $this.line_61zpoe$('}');
      }
       else {
        tmp$_3 = closure$it.body.stms.iterator();
        while (tmp$_3.hasNext()) {
          var stm_0 = tmp$_3.next();
          this$BaseGenerator.generate_ghgxvp$(this$generate, stm_0);
        }
      }
      return Unit;
    };
  }
  BaseGenerator.prototype.generate_l04ho8$ = function ($receiver, it, isTopLevel) {
    this.displayComments_2e9wgm$($receiver, it);
    $receiver.line_61zpoe$(this.genFuncDeclaration_xd31ca$(it) + ' {');
    var $receiver_0 = $receiver.cmds;
    var element = Indenter_0.Indent;
    $receiver_0.add_11rb$(element);
    try {
      this.functionScope_klfg04$(BaseGenerator$generate$lambda$lambda_0(it, this, $receiver));
    }
    finally {
      var $receiver_1 = $receiver.cmds;
      var element_0 = Indenter_0.Unindent;
      $receiver_1.add_11rb$(element_0);
    }
    $receiver.line_61zpoe$('}');
  };
  BaseGenerator.prototype.generate_bbgvzo$$default = function ($receiver, it, isTopLevel, isStaticTopLevel, isStaticPrefix) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    if (!it.specifiers.hasTypedef) {
      tmp$ = it.parsedList.iterator();
      while (tmp$.hasNext()) {
        var init = tmp$.next();
        var isFunc = Kotlin.isType(init.type, FunctionType);
        var prefix = isFunc && isTopLevel ? '// ' : '';
        var varType = this.resolve_cpakq9$(init.type);
        var name = init.name;
        var varInit2 = init.init;
        var varSize = getSize(varType, this.parser);
        if (varInit2 == null && Kotlin.isType(varType, ArrayType))
          tmp$_0 = new ArrayInitExpr(listOf(new DesignOptInit(null, IntConstant(0))), init.type);
        else if (varInit2 != null)
          tmp$_0 = varInit2;
        else
          tmp$_0 = varInit2;
        var varInit = tmp$_0;
        if (varInit != null)
          tmp$_1 = this.generate_o41f6z$(this.castTo_bkkyyh$(varInit, varType));
        else
          tmp$_1 = this.defaultValue_cpakq9$(init.type);
        var varInitStr = tmp$_1;
        if (Kotlin.isType(varType, StructType) && !Kotlin.isType(varInit, ArrayInitExpr))
          tmp$_2 = this.get_Alloc_yj6rfo$(varType) + '().copyFrom(' + varInitStr + ')' + this.EOL_SC;
        else
          tmp$_2 = varInitStr;
        var varInitStr2 = tmp$_2;
        var varTypeName = this.get_str_cpakq9$(varType);
        if (!isTopLevel && it.specifiers.isStatic)
          if (!isStaticTopLevel) {
            this.displayComments_2e9wgm$($receiver, it);
            $receiver.line_61zpoe$(prefix + this.genVarDecl_puj7f4$(name, varTypeName) + ' = ' + toString(this.staticDeclsNames.get_11rb$(init)) + this.EOL_SC);
          }
           else {
            $receiver.line_61zpoe$('private ' + prefix + this.genVarDecl_puj7f4$(isStaticPrefix + name, varTypeName) + ' = { ' + varInitStr2 + this.EOL_SC + ' }()' + this.EOL_SC);
          }
         else if (this.genFunctionScope.localSymbolsStackAllocNames.contains_11rb$(name) && this.get_requireRefStackAlloc_cpakq9$(varType)) {
          this.displayComments_2e9wgm$($receiver, it);
          $receiver.line_61zpoe$(prefix + this.genVarDecl_puj7f4$(name, 'CPointer<' + varTypeName + '>') + ' = alloca(' + varSize + ').toCPointer<' + varTypeName + '>().also { it.' + this.get_valueProp_cpakq9$(varType) + ' = ' + varInitStr2 + ' }' + this.EOL_SC);
        }
         else {
          this.displayComments_2e9wgm$($receiver, it);
          var staticComment = it.specifiers.isStatic ? ' /*static*/' : '';
          $receiver.line_61zpoe$(prefix + this.genVarDecl_puj7f4$(name, varTypeName) + staticComment + ' = ' + varInitStr2 + this.EOL_SC);
        }
      }
    }
     else {
      tmp$_3 = it.parsedList.iterator();
      while (tmp$_3.hasNext()) {
        var init_0 = tmp$_3.next();
        $receiver.line_61zpoe$('// typealias ' + init_0.name + ' = ' + this.get_str_cpakq9$(this.resolve_cpakq9$(init_0.type)));
      }
    }
  };
  BaseGenerator.prototype.generate_bbgvzo$ = function ($receiver, it, isTopLevel, isStaticTopLevel, isStaticPrefix, callback$default) {
    if (isStaticTopLevel === void 0)
      isStaticTopLevel = false;
    if (isStaticPrefix === void 0)
      isStaticPrefix = '';
    callback$default ? callback$default($receiver, it, isTopLevel, isStaticTopLevel, isStaticPrefix) : this.generate_bbgvzo$$default($receiver, it, isTopLevel, isStaticTopLevel, isStaticPrefix);
  };
  BaseGenerator.prototype.genVarDecl_puj7f4$ = function (name, varTypeName) {
    return varTypeName + ' ' + name;
  };
  BaseGenerator.prototype.get_Alloc_yj6rfo$ = function ($receiver) {
    return this.get_str_cpakq9$($receiver) + 'Alloc';
  };
  BaseGenerator.prototype.get_str_cpakq9$ = function ($receiver) {
    var res = this.resolve_cpakq9$($receiver);
    var tmp$;
    if (Kotlin.isType(res, IntType)) {
      switch (res.size) {
        case 0:
          tmp$ = 'void';
          break;
        case 1:
          tmp$ = res.signed ? 'char' : 'unsigned char';
          break;
        case 2:
          tmp$ = res.signed ? 'short' : 'unsigned short';
          break;
        case 4:
          tmp$ = res.signed ? 'int' : 'unsigned int';
          break;
        case 8:
          tmp$ = res.signed ? 'long long int' : 'unsigned long long int';
          break;
        default:throw new NotImplementedError_init('An operation is not implemented: ' + 'IntFType');
      }
    }
     else if (Kotlin.isType(res, FloatType))
      tmp$ = 'float';
    else if (Kotlin.isType(res, DoubleType))
      tmp$ = 'double';
    else if (Kotlin.isType(res, BoolType))
      tmp$ = 'int';
    else if (Kotlin.isType(res, PointerType))
      tmp$ = this.get_str_cpakq9$(res.elementType) + '*';
    else
      tmp$ = res.toString();
    return tmp$;
  };
  BaseGenerator.prototype.one_cpakq9$ = function ($receiver) {
    if (Kotlin.isType($receiver, IntType))
      return '1' + ($receiver.signed ? '' : 'u');
    else
      return '1';
  };
  BaseGenerator.prototype.oneExpr_cpakq9$ = function ($receiver) {
    return IntConstant_2(1, $receiver);
  };
  BaseGenerator.prototype.generateParam_3s5da3$ = function (it) {
    if (Kotlin.isType(it, CParam))
      return this.generateParam_e1sy2y$(it);
    else if (Kotlin.isType(it, CParamVariadic))
      return 'vararg __VA__: Any?';
    else {
      throw new NotImplementedError_init();
    }
  };
  BaseGenerator.prototype.generateParam_e1sy2y$ = function (it) {
    return it.name.toString() + ': ' + this.get_str_cpakq9$(this.resolve_cpakq9$(it.type));
  };
  BaseGenerator.prototype.opName_61zpoe$ = function (op) {
    switch (op) {
      case '+':
      case '++':
      case '+=':
        return 'plus';
      case '-':
      case '--':
      case '-=':
        return 'minus';
      default:return op;
    }
  };
  BaseGenerator.prototype.isGlobalDeclFuncRef_8drwvg$ = function ($receiver) {
    var tmp$ = Kotlin.isType($receiver.type, FunctionType) && $receiver.isGlobal;
    if (tmp$) {
      var $receiver_0 = this.program.funcDeclByName;
      var key = $receiver.name;
      var tmp$_0;
      tmp$ = (Kotlin.isType(tmp$_0 = $receiver_0, Map) ? tmp$_0 : throwCCE()).containsKey_11rb$(key);
    }
    return tmp$;
  };
  BaseGenerator.prototype.get_valueProp_cpakq9$ = function ($receiver) {
    return KotlinConsts_getInstance().VALUE;
  };
  BaseGenerator.prototype.generate_dmr2a6$$default = function ($receiver, par) {
    return this.generate_o41f6z$($receiver.expr, par);
  };
  BaseGenerator.prototype.generate_dmr2a6$ = function ($receiver, par, callback$default) {
    if (par === void 0)
      par = true;
    return callback$default ? callback$default($receiver, par) : this.generate_dmr2a6$$default($receiver, par);
  };
  BaseGenerator.prototype.generate_x09mbr$$default = function ($receiver, par) {
    var tmp$;
    tmp$ = $receiver.type;
    if (equals(tmp$, Type$Companion_getInstance().CHAR))
      return numberToByte($receiver.nvalue).toString();
    else if (equals(tmp$, Type$Companion_getInstance().SHORT))
      return numberToShort($receiver.nvalue).toString();
    else if (equals(tmp$, Type$Companion_getInstance().INT))
      return $receiver.nvalue.toString();
    else if (equals(tmp$, Type$Companion_getInstance().LONG))
      return $receiver.nvalue.toString() + 'L';
    else if (equals(tmp$, Type$Companion_getInstance().UCHAR)) {
      return (new UByte(toByte(numberToInt($receiver.nvalue)))).toString() + 'u';
    }
     else if (equals(tmp$, Type$Companion_getInstance().USHORT)) {
      return (new UShort(toShort(numberToInt($receiver.nvalue)))).toString() + 'u';
    }
     else if (equals(tmp$, Type$Companion_getInstance().UINT)) {
      return (new UInt(numberToInt($receiver.nvalue))).toString() + 'u';
    }
     else if (equals(tmp$, Type$Companion_getInstance().ULONG)) {
      return (new ULong_init(numberToLong($receiver.nvalue))).toString() + 'uL';
    }
     else if (equals(tmp$, Type$Companion_getInstance().FLOAT))
      return $receiver.nvalue.toString() + 'f';
    else if (equals(tmp$, Type$Companion_getInstance().DOUBLE))
      return $receiver.nvalue.toString();
    else
      return $receiver.nvalue.toString();
  };
  BaseGenerator.prototype.generate_x09mbr$ = function ($receiver, par, callback$default) {
    if (par === void 0)
      par = true;
    return callback$default ? callback$default($receiver, par) : this.generate_x09mbr$$default($receiver, par);
  };
  BaseGenerator.prototype.generate_8s0arm$$default = function ($receiver, par) {
    var ll = this.generate_o41f6z$($receiver.l);
    var rr = this.generate_o41f6z$($receiver.r);
    var base = ll + ' ' + $receiver.op + ' ' + rr;
    return par ? '(' + base + ')' : base;
  };
  BaseGenerator.prototype.generate_8s0arm$ = function ($receiver, par, callback$default) {
    if (par === void 0)
      par = true;
    return callback$default ? callback$default($receiver, par) : this.generate_8s0arm$$default($receiver, par);
  };
  BaseGenerator.prototype.generate_izdwrw$$default = function ($receiver, par) {
    var rbase = this.generateAssignExpr_enf4vq$($receiver);
    return par ? '(' + rbase + ')' : rbase;
  };
  BaseGenerator.prototype.generate_izdwrw$ = function ($receiver, par, callback$default) {
    if (par === void 0)
      par = true;
    return callback$default ? callback$default($receiver, par) : this.generate_izdwrw$$default($receiver, par);
  };
  BaseGenerator.prototype.generate_6f0ro1$$default = function ($receiver, par) {
    var block$result;
    var rtype = this.resolve_cpakq9$($receiver.type);
    if (this.isGlobalDeclFuncRef_8drwvg$($receiver)) {
      block$result = '::' + $receiver.name + '.cfunc';
    }
     else if (this.genFunctionScope.localSymbolsStackAllocNames.contains_11rb$($receiver.name) && !Kotlin.isType(rtype, StructType)) {
      block$result = $receiver.name + '.' + this.get_valueProp_cpakq9$(rtype);
    }
     else {
      block$result = $receiver.name;
    }
    return block$result;
  };
  BaseGenerator.prototype.generate_6f0ro1$ = function ($receiver, par, callback$default) {
    if (par === void 0)
      par = true;
    return callback$default ? callback$default($receiver, par) : this.generate_6f0ro1$$default($receiver, par);
  };
  BaseGenerator.prototype.generate_m3nvs0$$default = function ($receiver, par) {
    var block$result;
    block$break: do {
      var left = this.generate_o41f6z$($receiver.lvalue);
      switch ($receiver.op) {
        case '++':
        case '--':
          block$result = left + $receiver.op;
          break block$break;
        default:throw new NotImplementedError_init('An operation is not implemented: ' + ("Don't know how to generate postfix operator '" + $receiver.op + "'"));
      }
    }
     while (false);
    return block$result;
  };
  BaseGenerator.prototype.generate_m3nvs0$ = function ($receiver, par, callback$default) {
    if (par === void 0)
      par = true;
    return callback$default ? callback$default($receiver, par) : this.generate_m3nvs0$$default($receiver, par);
  };
  BaseGenerator.prototype.generate_34ptnt$$default = function ($receiver, par) {
    var etype = this.resolve_cpakq9$($receiver.expr.type);
    var typeArgs = Kotlin.isType(etype, FunctionType) ? etype.args : emptyList();
    var callPart = Kotlin.isType($receiver.expr, Id) && this.isGlobalDeclFuncRef_8drwvg$($receiver.expr) ? $receiver.expr.name : this.generate_o41f6z$($receiver.expr);
    var $receiver_0 = withIndex($receiver.args);
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var index = item.component1()
      , arg = item.component2();
      var tmp$_1;
      var ltype = (tmp$_1 = getOrNull_0(typeArgs, index)) != null ? tmp$_1.type : null;
      tmp$_0.call(destination, this.generate_o41f6z$(this.castTo_bkkyyh$(arg, ltype)));
    }
    var argsStr = destination;
    return callPart + '(' + joinToString(argsStr, ', ') + ')';
  };
  BaseGenerator.prototype.generate_34ptnt$ = function ($receiver, par, callback$default) {
    if (par === void 0)
      par = true;
    return callback$default ? callback$default($receiver, par) : this.generate_34ptnt$$default($receiver, par);
  };
  BaseGenerator.prototype.generate_29tvxx$$default = function ($receiver, par) {
    return $receiver.raw;
  };
  BaseGenerator.prototype.generate_29tvxx$ = function ($receiver, par, callback$default) {
    if (par === void 0)
      par = true;
    return callback$default ? callback$default($receiver, par) : this.generate_29tvxx$$default($receiver, par);
  };
  BaseGenerator.prototype.generate_lqebqo$$default = function ($receiver, par) {
    return $receiver.raw;
  };
  BaseGenerator.prototype.generate_lqebqo$ = function ($receiver, par, callback$default) {
    if (par === void 0)
      par = true;
    return callback$default ? callback$default($receiver, par) : this.generate_lqebqo$$default($receiver, par);
  };
  BaseGenerator.prototype.generate_wr444q$$default = function ($receiver, par) {
    var newType = this.resolve_cpakq9$($receiver.type);
    var oldType = this.resolve_cpakq9$($receiver.expr.type);
    var base = this.generate_o41f6z$($receiver.expr);
    var res = '(' + this.get_str_cpakq9$(newType) + ')' + base;
    return par ? '(' + res + ')' : res;
  };
  BaseGenerator.prototype.generate_wr444q$ = function ($receiver, par, callback$default) {
    if (par === void 0)
      par = true;
    return callback$default ? callback$default($receiver, par) : this.generate_wr444q$$default($receiver, par);
  };
  BaseGenerator.prototype.generate_i6higo$$default = function ($receiver, par) {
    var block$result;
    var ll = this.generate_o41f6z$($receiver.expr);
    var idx = this.generate_o41f6z$(this.castTo_bkkyyh$($receiver.index, Type$Companion_getInstance().INT), false);
    var aaExprType = $receiver.expr.type;
    if (equals(idx, '0') && $receiver.isDeref) {
      block$result = ll + '.value';
    }
     else {
      block$result = ll + '[' + idx + ']';
    }
    return block$result;
  };
  BaseGenerator.prototype.generate_i6higo$ = function ($receiver, par, callback$default) {
    if (par === void 0)
      par = true;
    return callback$default ? callback$default($receiver, par) : this.generate_i6higo$$default($receiver, par);
  };
  function BaseGenerator$generate$lambda$lambda_1(this$, this$BaseGenerator) {
    return function () {
      return this$BaseGenerator.generate_o41f6z$(this$BaseGenerator.castTo_bkkyyh$(this$.rvalue, this$.extypeR), true);
    };
  }
  BaseGenerator.prototype.generate_h4unf4$$default = function ($receiver, par) {
    var e = lazy(BaseGenerator$generate$lambda$lambda_1($receiver, this));
    var res = $receiver.op + e.value;
    return par ? '(' + res + ')' : res;
  };
  BaseGenerator.prototype.generate_h4unf4$ = function ($receiver, par, callback$default) {
    if (par === void 0)
      par = true;
    return callback$default ? callback$default($receiver, par) : this.generate_h4unf4$$default($receiver, par);
  };
  function BaseGenerator$generate$lambda$lambda_2(this$BaseGenerator) {
    return function (it) {
      return this$BaseGenerator.generate_o41f6z$(it.initializer);
    };
  }
  BaseGenerator.prototype.generate_vu1aa4$$default = function ($receiver, par) {
    var itemsStr = joinToString($receiver.items, ', ', void 0, void 0, void 0, void 0, BaseGenerator$generate$lambda$lambda_2(this));
    return '{ ' + itemsStr + ' }';
  };
  BaseGenerator.prototype.generate_vu1aa4$ = function ($receiver, par, callback$default) {
    if (par === void 0)
      par = true;
    return callback$default ? callback$default($receiver, par) : this.generate_vu1aa4$$default($receiver, par);
  };
  BaseGenerator.prototype.generate_n6yno6$$default = function ($receiver, par) {
    return '(if (' + this.generate_o41f6z$(this.castTo_bkkyyh$($receiver.cond, Type$Companion_getInstance().BOOL), false) + ') ' + this.generate_o41f6z$(this.castTo_bkkyyh$($receiver.etrue, $receiver.type)) + ' else ' + this.generate_o41f6z$(this.castTo_bkkyyh$($receiver.efalse, $receiver.type)) + ')';
  };
  BaseGenerator.prototype.generate_n6yno6$ = function ($receiver, par, callback$default) {
    if (par === void 0)
      par = true;
    return callback$default ? callback$default($receiver, par) : this.generate_n6yno6$$default($receiver, par);
  };
  BaseGenerator.prototype.generate_76fmix$$default = function ($receiver, par) {
    var block$result;
    var ltype = this.resolve_cpakq9$($receiver.left.type);
    if ($receiver.indirect) {
      block$result = this.generate_o41f6z$($receiver.left) + '.' + this.get_valueProp_cpakq9$(ltype) + '.' + $receiver.id;
    }
     else {
      block$result = this.generate_o41f6z$($receiver.left) + '.' + $receiver.id;
    }
    return block$result;
  };
  BaseGenerator.prototype.generate_76fmix$ = function ($receiver, par, callback$default) {
    if (par === void 0)
      par = true;
    return callback$default ? callback$default($receiver, par) : this.generate_76fmix$$default($receiver, par);
  };
  function BaseGenerator$generate$lambda$lambda_3(this$BaseGenerator) {
    return function (it) {
      return this$BaseGenerator.generate_o41f6z$(it, false);
    };
  }
  BaseGenerator.prototype.generate_ehwjcw$$default = function ($receiver, par) {
    return 'run { ' + joinToString($receiver.exprs, '; ', void 0, void 0, void 0, void 0, BaseGenerator$generate$lambda$lambda_3(this)) + ' }';
  };
  BaseGenerator.prototype.generate_ehwjcw$ = function ($receiver, par, callback$default) {
    if (par === void 0)
      par = true;
    return callback$default ? callback$default($receiver, par) : this.generate_ehwjcw$$default($receiver, par);
  };
  BaseGenerator.prototype.generate_3exzs9$$default = function ($receiver, par) {
    var block$result;
    if (Kotlin.isType($receiver, SizeOfAlignExprExpr) && Kotlin.isType($receiver.expr, StringConstant)) {
      var computed = $receiver.expr.value.length + 1 | 0;
      block$result = computed.toString();
    }
     else {
      var ftype = this.resolve_cpakq9$($receiver.ftype);
      var computedSize = getSize(ftype, this.parser);
      if (Kotlin.isType(ftype, ArrayType)) {
        block$result = computedSize.toString();
      }
       else {
        block$result = this.get_str_cpakq9$($receiver.ftype) + '.SIZE_BYTES';
      }
    }
    return block$result;
  };
  BaseGenerator.prototype.generate_3exzs9$ = function ($receiver, par, callback$default) {
    if (par === void 0)
      par = true;
    return callback$default ? callback$default($receiver, par) : this.generate_3exzs9$$default($receiver, par);
  };
  BaseGenerator.prototype.generateAssign_oumrkp$ = function (l, r) {
    var tmp$;
    var ltype = this.resolve_cpakq9$(l.type);
    if (Kotlin.isType(l, ArrayAccessExpr)) {
      var lexpr = l.expr;
      var index = this.generate_o41f6z$(l.index);
      var ll = this.generate_o41f6z$(lexpr);
      var lexprType = lexpr.type;
      if (equals(index, '0') && l.isDeref)
        tmp$ = ll + '.value = ' + r;
      else
        tmp$ = ll + '[' + index + '] = ' + r;
    }
     else if (Kotlin.isType(ltype, StructType) || Kotlin.isType(ltype, ArrayType))
      tmp$ = this.generate_o41f6z$(l) + '.copyFrom(' + r + ')';
    else
      tmp$ = this.generate_o41f6z$(l) + ' = ' + r;
    return tmp$;
  };
  BaseGenerator.prototype.generateAssignExpr_enf4vq$ = function (e) {
    var rr = this.generate_o41f6z$(this.castTo_bkkyyh$(e.r, e.l.type), false);
    return 'run { ' + rr + ' }.also { `' + '$' + '` -> ' + this.generateAssign_oumrkp$(e.l, '`$`') + ' }';
  };
  BaseGenerator.prototype.defaultValue_cpakq9$ = function ($receiver) {
    if (Kotlin.isType($receiver, IntType)) {
      var it = $receiver.signed ? '0' : '0u';
      return $receiver.size === 8 ? it + 'L' : it;
    }
     else if (Kotlin.isType($receiver, FloatType))
      return '0f';
    else if (Kotlin.isType($receiver, DoubleType))
      return '0.0';
    else if (Kotlin.isType($receiver, PointerType))
      return 'CPointer(0)';
    else if (Kotlin.isType($receiver, RefType))
      return this.defaultValue_cpakq9$(this.resolve_cpakq9$($receiver));
    else if (Kotlin.isType($receiver, StructType))
      return this.getProgramType_yj6rfo$($receiver).name + 'Alloc()';
    else if (Kotlin.isType($receiver, ArrayType))
      return '0 /*' + $receiver + '*/';
    else if (Kotlin.isType($receiver, FunctionType))
      return '0 /*' + $receiver + '*/';
    else
      return '0 /*Unknown defaultValue for ' + Kotlin.getKClassFromExpression($receiver) + ': ' + $receiver + '*/';
  };
  BaseGenerator.prototype.getProgramType_yj6rfo$ = function ($receiver) {
    return this.parser.getStructTypeInfo_49lpbe$($receiver.spec);
  };
  BaseGenerator.prototype.getProgramType_cpakq9$ = function ($receiver) {
    if (Kotlin.isType($receiver, StructType))
      return this.getProgramType_yj6rfo$($receiver);
    else if (Kotlin.isType($receiver, RefType))
      return this.parser.getStructTypeInfo_61zpoe$($receiver.id);
    else {
      throw IllegalStateException_init($receiver.toString().toString());
    }
  };
  BaseGenerator.prototype.generate_ghgxvp$ = function ($receiver, it) {
    if (Kotlin.isType(it, LowGoto))
      this.generate_jhzyqb$($receiver, it);
    else if (Kotlin.isType(it, LowLabel))
      this.generate_yuj8ru$($receiver, it);
    else if (Kotlin.isType(it, LowIfGoto))
      this.generate_dh0t62$($receiver, it);
    else if (Kotlin.isType(it, LowSwitchGoto))
      this.generate_j1081r$($receiver, it);
    else if (Kotlin.isType(it, EmptyStm))
      this.generate_a8n65i$($receiver, it);
    else if (Kotlin.isType(it, Stms))
      this.generate_dtssjy$($receiver, it);
    else if (Kotlin.isType(it, RawStm))
      this.generate_4y82cr$($receiver, it);
    else if (Kotlin.isType(it, CommentStm))
      this.generate_dv4k$($receiver, it);
    else if (Kotlin.isType(it, Return))
      this.generate_50e0xj$($receiver, it);
    else if (Kotlin.isType(it, ExprStm))
      this.generate_qjhsmo$($receiver, it);
    else if (Kotlin.isType(it, While))
      this.generate_2j3osq$($receiver, it);
    else if (Kotlin.isType(it, DoWhile))
      this.generate_p5wkzj$($receiver, it);
    else if (Kotlin.isType(it, For))
      this.generate_ghgo4i$($receiver, it);
    else if (Kotlin.isType(it, SwitchWithoutFallthrough))
      this.generate_fox6xv$($receiver, it);
    else if (Kotlin.isType(it, Switch))
      this.generate_5r4w1n$($receiver, it);
    else if (Kotlin.isType(it, CaseStm))
      this.generate_4a7gs5$($receiver, it);
    else if (Kotlin.isType(it, DefaultStm))
      this.generate_3mw6ry$($receiver, it);
    else if (Kotlin.isType(it, LabeledStm))
      this.generate_sz417k$($receiver, it);
    else if (Kotlin.isType(it, Goto))
      this.generate_dtl162$($receiver, it);
    else if (Kotlin.isType(it, Continue))
      this.generate_j0642a$($receiver, it);
    else if (Kotlin.isType(it, Break))
      this.generate_27qazc$($receiver, it);
    else if (Kotlin.isType(it, IfElse))
      this.generate_qp0xp$($receiver, it);
    else if (Kotlin.isType(it, Decl))
      this.generate_34xbqu$($receiver, it, false);
    else {
      throw IllegalStateException_init(("Don't know how to generate stm " + it).toString());
    }
  };
  BaseGenerator.prototype.generate_34xbqu$ = function ($receiver, it, isTopLevel) {
    if (Kotlin.isType(it, FuncDeclaration))
      this.generate_l04ho8$($receiver, it, isTopLevel);
    else if (Kotlin.isType(it, VarDeclaration))
      this.generate_bbgvzo$($receiver, it, isTopLevel);
    else {
      throw IllegalStateException_init(("Don't know how to generate decl " + it).toString());
    }
  };
  BaseGenerator.prototype.generate_o41f6z$$default = function ($receiver, par) {
    if (Kotlin.isType($receiver, ConstExpr))
      return this.generate_dmr2a6$($receiver, par);
    else if (Kotlin.isType($receiver, NumericConstant))
      return this.generate_x09mbr$($receiver, par);
    else if (Kotlin.isType($receiver, Binop))
      return this.generate_8s0arm$($receiver, par);
    else if (Kotlin.isType($receiver, SimpleAssignExpr))
      return this.generate_izdwrw$($receiver, par);
    else if (Kotlin.isType($receiver, Id))
      return this.generate_6f0ro1$($receiver, par);
    else if (Kotlin.isType($receiver, PostfixExpr))
      return this.generate_m3nvs0$($receiver, par);
    else if (Kotlin.isType($receiver, CallExpr))
      return this.generate_34ptnt$($receiver, par);
    else if (Kotlin.isType($receiver, StringConstant))
      return this.generate_29tvxx$($receiver, par);
    else if (Kotlin.isType($receiver, CharConstant))
      return this.generate_lqebqo$($receiver, par);
    else if (Kotlin.isType($receiver, CastExpr))
      return this.generate_wr444q$($receiver, par);
    else if (Kotlin.isType($receiver, ArrayAccessExpr))
      return this.generate_i6higo$($receiver, par);
    else if (Kotlin.isType($receiver, Unop))
      return this.generate_h4unf4$($receiver, par);
    else if (Kotlin.isType($receiver, ArrayInitExpr))
      return this.generate_vu1aa4$($receiver, par);
    else if (Kotlin.isType($receiver, TenaryExpr))
      return this.generate_n6yno6$($receiver, par);
    else if (Kotlin.isType($receiver, FieldAccessExpr))
      return this.generate_76fmix$($receiver, par);
    else if (Kotlin.isType($receiver, CommaExpr))
      return this.generate_ehwjcw$($receiver, par);
    else if (Kotlin.isType($receiver, SizeOfAlignExprBase))
      return this.generate_3exzs9$($receiver, par);
    else {
      throw IllegalStateException_init(("Don't know how to generate expr " + $receiver + ' (' + Kotlin.getKClassFromExpression($receiver) + ')').toString());
    }
  };
  BaseGenerator.prototype.generate_o41f6z$ = function ($receiver, par, callback$default) {
    if (par === void 0)
      par = true;
    return callback$default ? callback$default($receiver, par) : this.generate_o41f6z$$default($receiver, par);
  };
  function BaseGenerator$fixedSizeArrayTypes$lambda(this$BaseGenerator) {
    return function () {
      var $receiver = getAllTypes(this$BaseGenerator.program, this$BaseGenerator.parser);
      var destination = ArrayList_init();
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (Kotlin.isType(element, ArrayType))
          destination.add_11rb$(element);
      }
      return toSet(destination);
    };
  }
  BaseGenerator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BaseGenerator',
    interfaces: []
  };
  function KotlinGenerator(parsedProgram) {
    BaseGenerator.call(this, KotlinTarget_getInstance(), parsedProgram);
    this.EOL_SC_n31hs4$_0 = '';
    this.supportsGoto_l9lg5m$_0 = false;
    this.STRUCTURES_FIRST_f97x9c$_0 = false;
    this.oldPosIndex_0 = 0;
    this.__it_0 = '`$`';
  }
  Object.defineProperty(KotlinGenerator.prototype, 'EOL_SC', {
    get: function () {
      return this.EOL_SC_n31hs4$_0;
    }
  });
  KotlinGenerator.prototype.generate_29tvxx$$default = function ($receiver, par) {
    return $receiver.raw + '.ptr';
  };
  KotlinGenerator.prototype.generate_lqebqo$$default = function ($receiver, par) {
    return $receiver.raw + '.toInt()';
  };
  Object.defineProperty(KotlinGenerator.prototype, 'supportsGoto', {
    get: function () {
      return this.supportsGoto_l9lg5m$_0;
    }
  });
  Object.defineProperty(KotlinGenerator.prototype, 'STRUCTURES_FIRST', {
    get: function () {
      return this.STRUCTURES_FIRST_f97x9c$_0;
    }
  });
  KotlinGenerator.prototype.get_str_cpakq9$ = function ($receiver) {
    var tmp$, tmp$_0;
    var res = this.resolve_cpakq9$($receiver);
    if (Kotlin.isType(res, BasePointerType) && res.actsAsPointer)
      tmp$_0 = 'CPointer<' + this.get_str_cpakq9$(res.elementType) + '>';
    else if (Kotlin.isType(res, ArrayType))
      tmp$_0 = 'Array' + ((tmp$ = res.numElements) != null ? tmp$ : '').toString() + trimEnd(replace(replace(replace(replace(this.get_str_cpakq9$(res.elementType), '[', ''), ']', '_'), '<', '_'), '>', '_'), Kotlin.charArrayOf(95));
    else if (Kotlin.isType(res, StructType))
      tmp$_0 = res.info.name;
    else if (Kotlin.isType(res, FunctionType))
      tmp$_0 = res.toString();
    else
      tmp$_0 = res.toString();
    return tmp$_0;
  };
  KotlinGenerator.prototype.genVarDecl_puj7f4$ = function (name, varTypeName) {
    return 'var ' + name + ': ' + varTypeName;
  };
  KotlinGenerator.prototype.castToStrict_bkkyyh$ = function ($receiver, _dstType) {
    return this.castTo_bkkyyh$($receiver, _dstType);
  };
  KotlinGenerator.prototype.generate_ghgo4i$ = function ($receiver, it) {
    this.generate_ghgxvp$($receiver, lower(it));
  };
  KotlinGenerator.prototype.generate_fox6xv$ = function ($receiver, it) {
    this.displayComments_2e9wgm$($receiver, it);
    $receiver.line_61zpoe$('when (' + this.generate_o41f6z$(it.subject, false) + ')' + ' {');
    var $receiver_0 = $receiver.cmds;
    var element = Indenter_0.Indent;
    $receiver_0.add_11rb$(element);
    try {
      var tmp$;
      tmp$ = it.bodyCases.iterator();
      while (tmp$.hasNext()) {
        var stm = tmp$.next();
        if (Kotlin.isType(stm, CaseStm)) {
          $receiver.line_61zpoe$(this.generate_dmr2a6$(stm.expr, false) + ' ->' + ' {');
          var $receiver_1 = $receiver.cmds;
          var element_0 = Indenter_0.Indent;
          $receiver_1.add_11rb$(element_0);
          try {
            this.generate_dtssjy$($receiver, stm.stm);
          }
          finally {
            var $receiver_2 = $receiver.cmds;
            var element_1 = Indenter_0.Unindent;
            $receiver_2.add_11rb$(element_1);
          }
          $receiver.line_61zpoe$('}');
        }
         else if (Kotlin.isType(stm, DefaultStm)) {
          $receiver.line_61zpoe$('else ->' + ' {');
          var $receiver_3 = $receiver.cmds;
          var element_2 = Indenter_0.Indent;
          $receiver_3.add_11rb$(element_2);
          try {
            this.generate_dtssjy$($receiver, stm.stm);
          }
          finally {
            var $receiver_4 = $receiver.cmds;
            var element_3 = Indenter_0.Unindent;
            $receiver_4.add_11rb$(element_3);
          }
          $receiver.line_61zpoe$('}');
        }
      }
    }
    finally {
      var $receiver_5 = $receiver.cmds;
      var element_4 = Indenter_0.Unindent;
      $receiver_5.add_11rb$(element_4);
    }
    $receiver.line_61zpoe$('}');
  };
  KotlinGenerator.prototype.generate_5r4w1n$ = function ($receiver, it) {
    this.generate_ghgxvp$($receiver, removeFallthrough(it, this.tempContext));
  };
  KotlinGenerator.prototype.generate_4a7gs5$ = function ($receiver, it) {
    $receiver.line_61zpoe$('// unexpected outer CASE ' + this.generate_dmr2a6$(it.expr));
    this.generate_dtssjy$($receiver, it.stm);
  };
  KotlinGenerator.prototype.generate_3mw6ry$ = function ($receiver, it) {
    $receiver.line_61zpoe$('// unexpected outer DEFAULT');
    this.generate_dtssjy$($receiver, it.stm);
  };
  KotlinGenerator.prototype.generateBreakContinue_ghgxvp$ = function ($receiver, it) {
    var tmp$, tmp$_0;
    var scope = Kotlin.isType(it, Continue) ? this.breakScopeForContinue : this.breakScope;
    var keyword = Kotlin.isType(it, Continue) ? 'continue' : 'break';
    var gen = Kotlin.isType(it, Continue) ? (tmp$ = scope != null ? scope.node : null) != null ? tmp$.onContinue : null : (tmp$_0 = scope != null ? scope.node : null) != null ? tmp$_0.onBreak : null;
    if (gen != null)
      this.generate_ghgxvp$($receiver, gen());
    $receiver.line_61zpoe$(keyword + '@' + toString(scope != null ? scope.name : null));
  };
  KotlinGenerator.prototype.generate_sz417k$ = function ($receiver, it) {
    $receiver.line_61zpoe$(it.id.toString() + '@run {');
    var $receiver_0 = $receiver.cmds;
    var element = Indenter_0.Indent;
    $receiver_0.add_11rb$(element);
    try {
      this.generate_ghgxvp$($receiver, it.stm);
    }
    finally {
      var $receiver_1 = $receiver.cmds;
      var element_0 = Indenter_0.Unindent;
      $receiver_1.add_11rb$(element_0);
    }
    $receiver.line_61zpoe$('}');
  };
  KotlinGenerator.prototype.generate_dtl162$ = function ($receiver, it) {
    $receiver.line_61zpoe$('goto@' + it.id + ' /* @TODO: goto must convert the function into a state machine */');
  };
  KotlinGenerator.prototype.lineStackFrame_xkecb6$ = function ($receiver, node, code) {
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
  function KotlinGenerator$generate$lambda$lambda(closure$ltype, this$KotlinGenerator) {
    return function (it) {
      return this$KotlinGenerator.generate_o41f6z$(this$KotlinGenerator.castTo_bkkyyh$(it.initializer, closure$ltype.elementType));
    };
  }
  function KotlinGenerator$generate$lambda$lambda_0(this$KotlinGenerator) {
    return function (it) {
      return this$KotlinGenerator.generate_o41f6z$(it.initializer);
    };
  }
  KotlinGenerator.prototype.generate_vu1aa4$$default = function ($receiver, par) {
    var block$result;
    var tmp$, tmp$_0;
    var ltype = this.resolve_cpakq9$($receiver.ltype);
    if (Kotlin.isType(ltype, StructType)) {
      var structType = this.getProgramType_yj6rfo$(ltype);
      var structName = structType.name;
      var inits = LinkedHashMap_init();
      var index = 0;
      tmp$ = $receiver.items.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        var field = getOrNull_0(structType.fields, (tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0));
        if (field != null) {
          var key = field.name;
          var value = this.generate_o41f6z$(this.castTo_bkkyyh$(item.initializer, field.type));
          inits.put_xwzc9p$(key, value);
        }
      }
      var $receiver_0 = structType.fields;
      var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault($receiver_0, 10)), 16);
      var destination = LinkedHashMap_init_0(capacity);
      var tmp$_1;
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        var tmp$_2;
        var pair = to(element.name, (tmp$_2 = inits.get_11rb$(element.name)) != null ? tmp$_2 : this.defaultValue_cpakq9$(element.type));
        destination.put_xwzc9p$(pair.first, pair.second);
      }
      var setFields = destination;
      var tmp$_3 = structName + 'Alloc(';
      var destination_0 = ArrayList_init_0(setFields.size);
      var tmp$_4;
      tmp$_4 = setFields.entries.iterator();
      while (tmp$_4.hasNext()) {
        var item_0 = tmp$_4.next();
        destination_0.add_11rb$(item_0.key + ' = ' + item_0.value);
      }
      block$result = tmp$_3 + joinToString(destination_0, ', ') + ')';
    }
     else if (Kotlin.isType(ltype, BasePointerType)) {
      var itemsStr = joinToString($receiver.items, ', ', void 0, void 0, void 0, void 0, KotlinGenerator$generate$lambda$lambda(ltype, this));
      var numElements = Kotlin.isType(ltype, ArrayType) ? ltype.numElements : null;
      var relements = numElements != null ? numElements : $receiver.items.size;
      if (Kotlin.isType(ltype, ArrayType) && !ltype.actsAsPointer) {
        block$result = this.get_str_cpakq9$(ltype) + 'Alloc(' + itemsStr + ')';
      }
       else {
        var type = this.resolve_cpakq9$(ltype.elementType);
        var prefix = Kotlin.isType(type, StructType) ? 'arrayOf(' : '';
        var suffix = Kotlin.isType(type, StructType) ? ')' : '';
        block$result = 'fixedArrayOf' + this.get_str_cpakq9$(ltype.elementType) + '(' + relements + ', ' + prefix + itemsStr + suffix + ')';
      }
    }
     else {
      block$result = '/*not a valid array init type: ' + ltype + '} */ listOf(' + joinToString($receiver.items, ', ', void 0, void 0, void 0, void 0, KotlinGenerator$generate$lambda$lambda_0(this)) + ')';
    }
    return block$result;
  };
  KotlinGenerator.prototype.generate_wr444q$$default = function ($receiver, par) {
    var tmp$, tmp$_0;
    var newType = this.resolve_cpakq9$($receiver.type);
    var oldType = this.resolve_cpakq9$($receiver.expr.type);
    var base = this.generate_o41f6z$($receiver.expr);
    if (Kotlin.isType(oldType, BoolType) && Kotlin.isType(newType, IntType))
      tmp$_0 = !equals(newType, Type$Companion_getInstance().INT) ? base + '.toInt().to' + this.get_str_cpakq9$(newType) + '()' : base + '.toInt().to' + this.get_str_cpakq9$(newType) + '()';
    else {
      if (Kotlin.isType(oldType, ArrayType))
        tmp$ = '(' + base + ').ptr';
      else if (Kotlin.isType(oldType, PointerType))
        tmp$ = '(' + base + ').ptr';
      else if (Kotlin.isType(oldType, StructType))
        tmp$ = '(' + base + ').ptr';
      else if (Kotlin.isType(oldType, FunctionType))
        tmp$ = '(' + base + ').ptr';
      else
        tmp$ = base;
      var rbase = tmp$;
      if (Kotlin.isType(newType, BasePointerType) || Kotlin.isType(newType, StructType) || Kotlin.isType(newType, FunctionType)) {
        var cbase = equals(oldType, Type$Companion_getInstance().INT) ? rbase : '(' + rbase + ').toInt()';
        tmp$_0 = this.get_str_cpakq9$(newType) + '(' + cbase + ')';
      }
       else
        tmp$_0 = base + '.to' + this.get_str_cpakq9$(newType) + '()';
    }
    var res = tmp$_0;
    return par ? '(' + res + ')' : res;
  };
  KotlinGenerator.prototype.ptrName_1vqhz6$ = function (type) {
    if (Kotlin.isType(type, PointerType))
      return 'Ptr';
    return this.get_str_cpakq9$(type);
  };
  KotlinGenerator.prototype.generate_8s0arm$$default = function ($receiver, par) {
    var tmp$;
    var ll = this.generate_o41f6z$(this.castTo_bkkyyh$($receiver.l, $receiver.extypeL));
    var rr = this.generate_o41f6z$(this.castTo_bkkyyh$($receiver.r, $receiver.extypeR));
    switch ($receiver.op) {
      case '+':
      case '-':
        if (Kotlin.isType($receiver.l.type, BasePointerType)) {
          if (equals($receiver.op, '-') && Kotlin.isType($receiver.r.type, BasePointerType)) {
            tmp$ = ll + '.' + this.opName_61zpoe$($receiver.op) + 'Ptr' + this.ptrName_1vqhz6$(get_elementType($receiver.r.type)) + '(' + rr + ')';
          }
           else {
            tmp$ = ll + '.' + this.opName_61zpoe$($receiver.op) + '(' + rr + ')';
          }
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
        tmp$ = ll + ' shl (' + rr + ').toInt()';
        break;
      case '>>':
        tmp$ = ll + ' shr (' + rr + ').toInt()';
        break;
      default:throw new NotImplementedError_init('An operation is not implemented: ' + ('Binop ' + $receiver.op));
    }
    var base = tmp$;
    return par ? '(' + base + ')' : base;
  };
  KotlinGenerator.prototype.generate_m3nvs0$$default = function ($receiver, par) {
    var block$result;
    block$break: do {
      var left = this.generate_o41f6z$($receiver.lvalue);
      switch ($receiver.op) {
        case '++':
        case '--':
          if (Kotlin.isType($receiver.lvalue.type, PointerType)) {
            block$result = left + '.also { ' + left + ' = ' + this.generate_8s0arm$(new Binop($receiver.lvalue, $receiver.op.substring(0, 1), this.oneExpr_cpakq9$($receiver.lvalue.type)), false) + ' }';
            break block$break;
          }
           else {
            block$result = left + $receiver.op;
            break block$break;
          }

        default:throw new NotImplementedError_init('An operation is not implemented: ' + ("Don't know how to generate postfix operator '" + $receiver.op + "'"));
      }
    }
     while (false);
    return block$result;
  };
  function KotlinGenerator$generate$lambda$lambda_1(this$, this$KotlinGenerator) {
    return function () {
      return this$KotlinGenerator.generate_o41f6z$(this$KotlinGenerator.castTo_bkkyyh$(this$.rvalue, this$.extypeR), true);
    };
  }
  KotlinGenerator.prototype.generate_h4unf4$$default = function ($receiver, par) {
    var tmp$, tmp$_0, tmp$_1;
    var e = lazy(KotlinGenerator$generate$lambda$lambda_1($receiver, this));
    switch ($receiver.op) {
      case '&':
        tmp$ = $receiver.rvalue;
        if (Kotlin.isType(tmp$, FieldAccessExpr)) {
          tmp$_1 = 'CPointer((' + this.generate_o41f6z$($receiver.rvalue.left, false) + (').ptr + ' + toString((tmp$_0 = $receiver.rvalue.structType) != null ? this.get_str_cpakq9$(tmp$_0) : null) + '.OFFSET_' + $receiver.rvalue.id.name + ')');
        }
         else if (Kotlin.isType(tmp$, ArrayAccessExpr))
          tmp$_1 = '((' + this.generate_o41f6z$($receiver.rvalue.expr, false) + ').plus(' + this.generate_o41f6z$($receiver.rvalue.index, false) + '))';
        else if (Kotlin.isType(tmp$, Id))
          tmp$_1 = Kotlin.isType(this.resolve_cpakq9$($receiver.type), StructType) ? $receiver.rvalue.name + '.ptr' : 'CPointer<' + this.get_str_cpakq9$(this.resolve_cpakq9$($receiver.rvalueType)) + '>((' + $receiver.rvalue.name + ').ptr)';
        else {
          tmp$_1 = '&' + e.value + ' /*TODO*/';
        }

        break;
      case '-':
        tmp$_1 = '-' + e.value;
        break;
      case '+':
        tmp$_1 = '+' + e.value;
        break;
      case '!':
        tmp$_1 = '!' + e.value;
        break;
      case '~':
        tmp$_1 = '(' + e.value + ').inv()';
        break;
      case '++':
      case '--':
        if (Kotlin.isType($receiver.rvalue.type, PointerType)) {
          tmp$_1 = e.value + '.' + this.opName_61zpoe$($receiver.op) + '(1).also { ' + this.__it_0 + ' -> ' + e.value + ' = ' + this.__it_0 + ' }';
        }
         else {
          tmp$_1 = $receiver.op + e.value;
        }

        break;
      default:throw new NotImplementedError_init('An operation is not implemented: ' + ("Don't know how to generate unary operator '" + $receiver.op + "'"));
    }
    var res = tmp$_1;
    return par ? '(' + res + ')' : res;
  };
  function KotlinGenerator$genFuncDeclaration$lambda(this$KotlinGenerator) {
    return function (it) {
      return this$KotlinGenerator.generateParam_3s5da3$(it);
    };
  }
  KotlinGenerator.prototype.genFuncDeclaration_xd31ca$ = function (it) {
    return 'fun ' + it.name.name + '(' + joinToString(it.paramsWithVariadic, ', ', void 0, void 0, void 0, void 0, KotlinGenerator$genFuncDeclaration$lambda(this)) + '): ' + this.get_str_cpakq9$(this.resolve_cpakq9$(it.funcType.retType)) + ' = stackFrame';
  };
  function KotlinGenerator$generateProgramStructure$lambda(closure$block, this$generateProgramStructure) {
    return function () {
      closure$block(this$generateProgramStructure);
      return Unit;
    };
  }
  KotlinGenerator.prototype.generateProgramStructure_ahjker$ = function ($receiver, includeRuntime, block) {
    var tmp$;
    if (!equals(this.preprocessorInfo.packageName, '')) {
      $receiver.line_61zpoe$('package ' + this.preprocessorInfo.packageName);
      $receiver.line_61zpoe$('');
    }
    if (includeRuntime) {
      $receiver.line_61zpoe$(this.target.getRuntimeImports_z234ul$(this.preprocessorInfo));
    }
    $receiver.line_61zpoe$('//ENTRY Program');
    $receiver.line_61zpoe$('//Program.main(arrayOf())');
    $receiver.line_61zpoe$(KotlinTarget_getInstance().KotlinSupressions);
    $receiver.line_61zpoe$('@UseExperimental(ExperimentalUnsignedTypes::class)');
    $receiver.line_61zpoe$('class ' + this.preprocessorInfo.moduleName + '(HEAP_SIZE: Int = 0) : ' + ((tmp$ = this.preprocessorInfo.runtimeClass) != null ? tmp$ : equals(this.preprocessorInfo.subTarget, 'jvm') ? 'RuntimeJvm' : 'Runtime') + '(HEAP_SIZE)' + ' {');
    var $receiver_0 = $receiver.cmds;
    var element = Indenter_0.Indent;
    $receiver_0.add_11rb$(element);
    try {
      KotlinGenerator$generateProgramStructure$lambda(block, $receiver)();
    }
    finally {
      var $receiver_1 = $receiver.cmds;
      var element_0 = Indenter_0.Unindent;
      $receiver_1.add_11rb$(element_0);
    }
    $receiver.line_61zpoe$('}');
  };
  KotlinGenerator.prototype.generateStaticCode_xkat1w$ = function ($receiver, callback) {
    var $receiver_0 = new Indenter_0();
    callback($receiver_0);
    var indenter = $receiver_0;
    if (!indenter.cmds.isEmpty()) {
      $receiver.line_61zpoe$('companion object' + ' {');
      var $receiver_1 = $receiver.cmds;
      var element = Indenter_0.Indent;
      $receiver_1.add_11rb$(element);
      try {
        $receiver.line_xgsxiu$(indenter);
      }
      finally {
        var $receiver_2 = $receiver.cmds;
        var element_0 = Indenter_0.Unindent;
        $receiver_2.add_11rb$(element_0);
      }
      $receiver.line_61zpoe$('}');
      $receiver.line_61zpoe$('');
    }
     else {
      $receiver.line_xgsxiu$(indenter);
    }
  };
  KotlinGenerator.prototype.generateDefineConstants_rzrydj$ = function ($receiver) {
    var tmp$;
    tmp$ = this.preprocessorInfo.constantDecls.entries.iterator();
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var name = tmp$_0.key;
      var value = tmp$_0.value;
      $receiver.line_61zpoe$('const val ' + name + ' = ' + value);
    }
  };
  KotlinGenerator.prototype.generateMainEntryPoint_y3v6cv$ = function ($receiver, mainFunc) {
  };
  KotlinGenerator.prototype.generateMainEntryPointOutside_y3v6cv$ = function ($receiver, mainFunc) {
    if (mainFunc.params.isEmpty()) {
      $receiver.line_61zpoe$('fun main(args: Array<String>): Unit = run { ' + this.preprocessorInfo.moduleName + '().main() }');
    }
     else {
      $receiver.line_61zpoe$('fun main(args: Array<String>): Unit = run { val rargs = arrayOf(' + '"' + 'program' + '"' + ') + args; ' + this.preprocessorInfo.moduleName + '().apply { main(rargs.size, rargs.ptr) } }');
    }
  };
  KotlinGenerator.prototype.generateStructures_rzrydj$ = function ($receiver) {
    this.generateStructuresBase_eec6ek$($receiver, false);
  };
  KotlinGenerator.prototype.generateStructuresOutside_rzrydj$ = function ($receiver) {
    this.generateStructuresBase_eec6ek$($receiver, true);
  };
  KotlinGenerator.prototype.generateStructuresBase_eec6ek$ = function ($receiver, kind) {
    var tmp$, tmp$_0;
    if (this.parser.structTypesByName.isEmpty())
      return;
    $receiver.line_61zpoe$('');
    $receiver.line_61zpoe$('//////////////////');
    $receiver.line_61zpoe$('// C STRUCTURES //');
    $receiver.line_61zpoe$('//////////////////');
    $receiver.line_61zpoe$('');
    tmp$ = this.parser.structTypesByName.values.iterator();
    while (tmp$.hasNext()) {
      var type = tmp$.next();
      var typeName = type.name;
      var typeNameAlloc = typeName + 'Alloc';
      var typeSize = typeName + '.SIZE_BYTES';
      var typeFields = type.fieldsByName.values;
      var destination = ArrayList_init_0(collectionSizeOrDefault(typeFields, 10));
      var tmp$_1;
      tmp$_1 = typeFields.iterator();
      while (tmp$_1.hasNext()) {
        var item = tmp$_1.next();
        destination.add_11rb$(item.name + ': ' + this.get_str_cpakq9$(item.type));
      }
      var params = destination;
      var destination_0 = ArrayList_init_0(collectionSizeOrDefault(typeFields, 10));
      var tmp$_2;
      tmp$_2 = typeFields.iterator();
      while (tmp$_2.hasNext()) {
        var item_0 = tmp$_2.next();
        destination_0.add_11rb$(item_0.name + ': ' + this.get_str_cpakq9$(item_0.type));
      }
      var fields = destination_0;
      var destination_1 = ArrayList_init_0(collectionSizeOrDefault(typeFields, 10));
      var tmp$_3;
      tmp$_3 = typeFields.iterator();
      while (tmp$_3.hasNext()) {
        var item_1 = tmp$_3.next();
        destination_1.add_11rb$('this.' + item_1.name + ' = ' + item_1.name);
      }
      var fieldsSet = destination_1;
      if (kind) {
        $receiver.line_61zpoe$('inline/*!*/ class ' + typeName + '(val ptr: Int) : AbstractRuntime.IStruct' + ' {');
        var $receiver_0 = $receiver.cmds;
        var element = Indenter_0.Indent;
        $receiver_0.add_11rb$(element);
        try {
          $receiver.line_61zpoe$('companion object : AbstractRuntime.IStructCompanion<' + typeName + '> ' + ' {');
          var $receiver_1 = $receiver.cmds;
          var element_0 = Indenter_0.Indent;
          $receiver_1.add_11rb$(element_0);
          try {
            var tmp$_4;
            $receiver.line_61zpoe$('const val SIZE_BYTES = ' + type.size);
            $receiver.line_61zpoe$('override val SIZE = SIZE_BYTES');
            tmp$_4 = typeFields.iterator();
            while (tmp$_4.hasNext()) {
              var field = tmp$_4.next();
              $receiver.line_61zpoe$('const val ' + field.offsetName + ' = ' + field.offset);
            }
          }
          finally {
            var $receiver_2 = $receiver.cmds;
            var element_1 = Indenter_0.Unindent;
            $receiver_2.add_11rb$(element_1);
          }
          $receiver.line_61zpoe$('}');
        }
        finally {
          var $receiver_3 = $receiver.cmds;
          var element_2 = Indenter_0.Unindent;
          $receiver_3.add_11rb$(element_2);
        }
        $receiver.line_61zpoe$('}');
      }
       else {
        if (!params.isEmpty()) {
          $receiver.line_61zpoe$('fun ' + typeNameAlloc + '(): ' + typeName + ' = ' + typeName + '(alloca(' + typeSize + ').ptr)');
        }
        $receiver.line_61zpoe$('fun ' + typeNameAlloc + '(' + joinToString(params, ', ') + '): ' + typeName + ' = ' + typeNameAlloc + '().apply { ' + joinToString(fieldsSet, '; ') + ' }');
        $receiver.line_61zpoe$('fun ' + typeName + '.copyFrom(src: ' + typeName + '): ' + typeName + ' = this.apply { memcpy(CPointer<Unit>(this.ptr), CPointer<Unit>(src.ptr), ' + typeSize + ') }');
        $receiver.line_61zpoe$('fun fixedArrayOf' + typeName + '(size: Int, items: Array<' + typeName + '>): CPointer<' + typeName + '> = alloca_zero(size * ' + typeSize + ').toCPointer<' + typeName + '>().also { for (n in 0 until items.size) ' + typeName + '(it.ptr + n * ' + typeSize + ').copyFrom(items[n]) }');
        $receiver.line_61zpoe$('@' + JvmName + '(' + '"' + 'get' + typeName + '"' + ') operator fun CPointer<' + typeName + '>.get(index: Int): ' + typeName + ' = ' + typeName + '(this.ptr + index * ' + typeSize + ')');
        $receiver.line_61zpoe$('operator fun CPointer<' + typeName + '>.set(index: Int, value: ' + typeName + ') = ' + typeName + '(this.ptr + index * ' + typeSize + ').copyFrom(value)');
        $receiver.line_61zpoe$('@' + JvmName + '(' + '"' + 'plus' + typeName + '"' + ') operator fun CPointer<' + typeName + '>.plus(offset: Int): CPointer<' + typeName + '> = CPointer(this.ptr + offset * ' + typeSize + ')');
        $receiver.line_61zpoe$('@' + JvmName + '(' + '"' + 'minus' + typeName + '"' + ') operator fun CPointer<' + typeName + '>.minus(offset: Int): CPointer<' + typeName + '> = CPointer(this.ptr - offset * ' + typeSize + ')');
        $receiver.line_61zpoe$('fun CPointer<' + typeName + '>.minusPtr' + typeName + '(other: CPointer<' + typeName + '>) = (this.ptr - other.ptr) / ' + typeSize);
        $receiver.line_61zpoe$('@get:' + JvmName + '(' + '"' + 'get' + typeName + '"' + ') var CPointer<' + typeName + '>.' + this.get_valueProp_cpakq9$(type.type) + ': ' + typeName + ' get() = this[0]; set(value) = run { this[0] = value }');
        tmp$_0 = typeFields.iterator();
        while (tmp$_0.hasNext()) {
          var field_0 = tmp$_0.next();
          var ftype = this.resolve_cpakq9$(field_0.type);
          var foffsetName = typeName + '.' + field_0.offsetName;
          var base = 'var ' + typeName + '.' + field_0.name + ': ' + this.get_str_cpakq9$(ftype);
          var addr = 'ptr + ' + foffsetName;
          if (Kotlin.isType(ftype, PrimType)) {
            var ktype = KotlinConsts_getInstance().ktypesFromCType.get_11rb$(ftype);
            if (ktype != null)
              $receiver.line_61zpoe$(base + ' get() = ' + ktype.load(addr) + '; set(value) = ' + ktype.store(addr, 'value'));
            else
              $receiver.line_61zpoe$(base + ' get() = TODO(' + '"' + 'ftypeSize=' + getSize(ftype, this.parser) + '"' + '); set(value) = TODO()');
          }
           else if (Kotlin.isType(ftype, StructType))
            $receiver.line_61zpoe$(base + ' get() = ' + this.get_str_cpakq9$(ftype) + '(' + addr + '); set(value) = run { ' + this.get_str_cpakq9$(ftype) + '(' + addr + ').copyFrom(value) }');
          else if (Kotlin.isType(ftype, PointerType))
            $receiver.line_61zpoe$(base + ' get() = CPointer(lw(' + addr + ')); set(value) = run { sw(' + addr + ', value.ptr) }');
          else if (Kotlin.isType(ftype, ArrayType))
            $receiver.line_61zpoe$(base + ' get() = ' + this.get_str_cpakq9$(ftype) + '(' + addr + '); set(value) = run { TODO(' + '"' + 'Unsupported setting ftype=' + ftype + '"' + ') }');
          else
            $receiver.line_61zpoe$(base + ' get() = TODO(' + '"' + 'ftype=' + ftype + ' ' + Kotlin.getKClassFromExpression(ftype) + '"' + '); set(value) = TODO(' + '"' + 'ftype=' + ftype + ' ' + Kotlin.getKClassFromExpression(ftype) + '"' + ')');
        }
      }
    }
  };
  KotlinGenerator.prototype.generateFixedSizeArrayTypes_rzrydj$ = function ($receiver) {
    var tmp$, tmp$_0;
    var $receiver_0 = this.fixedSizeArrayTypes;
    var tmp$_1;
    var set = HashSet_init();
    var list = ArrayList_init();
    tmp$_1 = $receiver_0.iterator();
    while (tmp$_1.hasNext()) {
      var e = tmp$_1.next();
      var key = this.get_str_cpakq9$(e);
      if (set.add_11rb$(key))
        list.add_11rb$(e);
    }
    var destination = ArrayList_init();
    var tmp$_2;
    tmp$_2 = list.iterator();
    while (tmp$_2.hasNext()) {
      var element = tmp$_2.next();
      if (!element.actsAsPointer)
        destination.add_11rb$(element);
    }
    tmp$ = destination.iterator();
    while (tmp$.hasNext()) {
      var type = tmp$.next();
      var typeNumElements = (tmp$_0 = type.numElements) != null ? tmp$_0 : 0;
      var typeName = this.get_str_cpakq9$(type);
      var elementType = this.resolve_cpakq9$(type.elementType);
      var elementTypeName = this.get_str_cpakq9$(elementType);
      var elementSize = getSize(elementType, this.parser);
      $receiver.line_61zpoe$('/*!inline*/ class ' + typeName + '(val ptr: Int)' + ' {');
      var $receiver_1 = $receiver.cmds;
      var element_0 = Indenter_0.Indent;
      $receiver_1.add_11rb$(element_0);
      try {
        $receiver.line_61zpoe$('companion object' + ' {');
        var $receiver_2 = $receiver.cmds;
        var element_1 = Indenter_0.Indent;
        $receiver_2.add_11rb$(element_1);
        try {
          $receiver.line_61zpoe$('const val NUM_ELEMENTS = ' + typeNumElements);
          $receiver.line_61zpoe$('const val ELEMENT_SIZE_BYTES = ' + elementSize);
          $receiver.line_61zpoe$('const val TOTAL_SIZE_BYTES = /*' + Kotlin.imul(typeNumElements, elementSize) + '*/ (NUM_ELEMENTS * ELEMENT_SIZE_BYTES)');
        }
        finally {
          var $receiver_3 = $receiver.cmds;
          var element_2 = Indenter_0.Unindent;
          $receiver_3.add_11rb$(element_2);
        }
        $receiver.line_61zpoe$('}');
        $receiver.line_61zpoe$('fun addr(index: Int) = ptr + index * ELEMENT_SIZE_BYTES');
      }
      finally {
        var $receiver_4 = $receiver.cmds;
        var element_3 = Indenter_0.Unindent;
        $receiver_4.add_11rb$(element_3);
      }
      $receiver.line_61zpoe$('}');
      var ktype = KotlinConsts_getInstance().ktypesFromCType.get_11rb$(elementType);
      var getBase = 'operator fun ' + typeName + '.get(index: Int): ' + elementTypeName;
      if (ktype != null)
        $receiver.line_61zpoe$(getBase + ' = ' + ktype.load('addr(index)'));
      else if (Kotlin.isType(elementType, StructType))
        $receiver.line_61zpoe$(getBase + ' = ' + elementTypeName + '(addr(index))');
      else if (Kotlin.isType(elementType, ArrayType))
        $receiver.line_61zpoe$(getBase + ' = ' + elementTypeName + '(addr(index))');
      else if (Kotlin.isType(elementType, PointerType))
        $receiver.line_61zpoe$(getBase + ' = CPointer(addr(index))');
      else
        $receiver.line_61zpoe$(getBase + ' = TODO(' + '"' + elementTypeName + '(addr(index))' + '"' + ')');
      var setBase = 'operator fun ' + typeName + '.set(index: Int, value: ' + elementTypeName + '): Unit';
      if (ktype != null)
        $receiver.line_61zpoe$(setBase + ' = run { ' + ktype.store('addr(index)', 'value') + ' }');
      else if (Kotlin.isType(elementType, ArrayType))
        $receiver.line_61zpoe$(setBase + ' = run { memcpy(CPointer(addr(index)), CPointer(value.ptr), ' + typeName + '.ELEMENT_SIZE_BYTES) }');
      else if (Kotlin.isType(elementType, BasePointerType))
        $receiver.line_61zpoe$(setBase + ' = run { memcpy(CPointer(addr(index)), CPointer(value.ptr), ' + typeName + '.ELEMENT_SIZE_BYTES) }');
      else
        $receiver.line_61zpoe$(setBase + ' = run { ' + elementTypeName + '(addr(index)).copyFrom(value) }');
      $receiver.line_61zpoe$('var ' + typeName + '.' + this.get_valueProp_cpakq9$(type) + ' get() = this[0]; set(value) = run { this[0] = value }');
      $receiver.line_61zpoe$('fun ' + typeName + 'Alloc(vararg items: ' + elementTypeName + '): ' + typeName + ' = ' + typeName + '(alloca_zero(' + typeName + '.TOTAL_SIZE_BYTES).ptr).also { for (n in 0 until items.size) it[n] = items[n] }');
      $receiver.line_61zpoe$('operator fun ' + typeName + '.plus(offset: Int): CPointer<' + elementTypeName + '> = CPointer<' + elementTypeName + '>(addr(offset))');
      $receiver.line_61zpoe$('operator fun ' + typeName + '.minus(offset: Int): CPointer<' + elementTypeName + '> = CPointer<' + elementTypeName + '>(addr(-offset))');
    }
  };
  KotlinGenerator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KotlinGenerator',
    interfaces: [BaseGenerator]
  };
  function KotlinConsts() {
    KotlinConsts_instance = this;
    this.VALUE = 'value';
    this.VALUEU = 'valueu';
    var $receiver = until(0, 8);
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(new KotlinConsts$FuncType(item));
    }
    this.funcTypes = destination;
    var $receiver_0 = ArrayList_init();
    $receiver_0.add_11rb$(new KotlinConsts$KType(Type$Companion_getInstance().CHAR, 'Byte', 1, KotlinConsts$ktypes$lambda$lambda, KotlinConsts$ktypes$lambda$lambda_0));
    $receiver_0.add_11rb$(new KotlinConsts$KType(Type$Companion_getInstance().SHORT, 'Short', 2, KotlinConsts$ktypes$lambda$lambda_1, KotlinConsts$ktypes$lambda$lambda_2));
    $receiver_0.add_11rb$(new KotlinConsts$KType(Type$Companion_getInstance().INT, 'Int', 4, KotlinConsts$ktypes$lambda$lambda_3, KotlinConsts$ktypes$lambda$lambda_4));
    $receiver_0.add_11rb$(new KotlinConsts$KType(Type$Companion_getInstance().LONG, 'Long', 8, KotlinConsts$ktypes$lambda$lambda_5, KotlinConsts$ktypes$lambda$lambda_6, '0L'));
    $receiver_0.add_11rb$(new KotlinConsts$KType(Type$Companion_getInstance().UCHAR, 'UByte', 1, KotlinConsts$ktypes$lambda$lambda_7, KotlinConsts$ktypes$lambda$lambda_8, '0u', true));
    $receiver_0.add_11rb$(new KotlinConsts$KType(Type$Companion_getInstance().USHORT, 'UShort', 2, KotlinConsts$ktypes$lambda$lambda_9, KotlinConsts$ktypes$lambda$lambda_10, '0u', true));
    $receiver_0.add_11rb$(new KotlinConsts$KType(Type$Companion_getInstance().UINT, 'UInt', 4, KotlinConsts$ktypes$lambda$lambda_11, KotlinConsts$ktypes$lambda$lambda_12, '0u', true));
    $receiver_0.add_11rb$(new KotlinConsts$KType(Type$Companion_getInstance().ULONG, 'ULong', 8, KotlinConsts$ktypes$lambda$lambda_13, KotlinConsts$ktypes$lambda$lambda_14, '0uL', true));
    $receiver_0.add_11rb$(new KotlinConsts$KType(Type$Companion_getInstance().FLOAT, 'Float', 4, KotlinConsts$ktypes$lambda$lambda_15, KotlinConsts$ktypes$lambda$lambda_16, '0f'));
    $receiver_0.add_11rb$(new KotlinConsts$KType(Type$Companion_getInstance().DOUBLE, 'Double', 4, KotlinConsts$ktypes$lambda$lambda_17, KotlinConsts$ktypes$lambda$lambda_18, '0.0'));
    this.ktypes = toList_0($receiver_0);
    var $receiver_1 = this.ktypes;
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault($receiver_1, 10)), 16);
    var destination_0 = LinkedHashMap_init_0(capacity);
    var tmp$_0;
    tmp$_0 = $receiver_1.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      destination_0.put_xwzc9p$(element.ctype, element);
    }
    this.ktypesFromCType = destination_0;
  }
  function KotlinConsts$KType(ctype, name, size, load, store, default_0, unsigned) {
    if (default_0 === void 0)
      default_0 = '0';
    if (unsigned === void 0)
      unsigned = false;
    this.ctype = ctype;
    this.name = name;
    this.size = size;
    this.load = load;
    this.store = store;
    this.default = default_0;
    this.unsigned = unsigned;
    this.dummy = this.unsigned ? 'dummy: ' + this.name + ' = ' + this.default + ', unsignedDummy: Unit = Unit' : 'dummy: ' + this.name + ' = ' + this.default;
  }
  KotlinConsts$KType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KType',
    interfaces: []
  };
  KotlinConsts$KType.prototype.component1 = function () {
    return this.ctype;
  };
  KotlinConsts$KType.prototype.component2 = function () {
    return this.name;
  };
  KotlinConsts$KType.prototype.component3 = function () {
    return this.size;
  };
  KotlinConsts$KType.prototype.component4 = function () {
    return this.load;
  };
  KotlinConsts$KType.prototype.component5 = function () {
    return this.store;
  };
  KotlinConsts$KType.prototype.component6 = function () {
    return this.default;
  };
  KotlinConsts$KType.prototype.component7 = function () {
    return this.unsigned;
  };
  KotlinConsts$KType.prototype.copy_vga6ch$ = function (ctype, name, size, load, store, default_0, unsigned) {
    return new KotlinConsts$KType(ctype === void 0 ? this.ctype : ctype, name === void 0 ? this.name : name, size === void 0 ? this.size : size, load === void 0 ? this.load : load, store === void 0 ? this.store : store, default_0 === void 0 ? this.default : default_0, unsigned === void 0 ? this.unsigned : unsigned);
  };
  KotlinConsts$KType.prototype.toString = function () {
    return 'KType(ctype=' + Kotlin.toString(this.ctype) + (', name=' + Kotlin.toString(this.name)) + (', size=' + Kotlin.toString(this.size)) + (', load=' + Kotlin.toString(this.load)) + (', store=' + Kotlin.toString(this.store)) + (', default=' + Kotlin.toString(this.default)) + (', unsigned=' + Kotlin.toString(this.unsigned)) + ')';
  };
  KotlinConsts$KType.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ctype) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.size) | 0;
    result = result * 31 + Kotlin.hashCode(this.load) | 0;
    result = result * 31 + Kotlin.hashCode(this.store) | 0;
    result = result * 31 + Kotlin.hashCode(this.default) | 0;
    result = result * 31 + Kotlin.hashCode(this.unsigned) | 0;
    return result;
  };
  KotlinConsts$KType.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.ctype, other.ctype) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.size, other.size) && Kotlin.equals(this.load, other.load) && Kotlin.equals(this.store, other.store) && Kotlin.equals(this.default, other.default) && Kotlin.equals(this.unsigned, other.unsigned)))));
  };
  function KotlinConsts$FuncType(n) {
    this.n = n;
    this.cname = 'CFunction' + this.n;
    this.kname = 'kotlin.reflect.KFunction' + this.n;
    var $receiver = until(0, this.n);
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$('T' + item);
    }
    this.targsNR = joinToString(destination, ', ');
    var $receiver_0 = until(0, this.n);
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_0;
    tmp$_0 = $receiver_0.iterator();
    while (tmp$_0.hasNext()) {
      var item_0 = tmp$_0.next();
      destination_0.add_11rb$('T' + item_0);
    }
    this.targs = joinToString(plus(destination_0, listOf('TR')), ', ');
    var $receiver_1 = until(0, this.n);
    var destination_1 = ArrayList_init_0(collectionSizeOrDefault($receiver_1, 10));
    var tmp$_1;
    tmp$_1 = $receiver_1.iterator();
    while (tmp$_1.hasNext()) {
      var item_1 = tmp$_1.next();
      destination_1.add_11rb$('v' + item_1 + ': T' + item_1);
    }
    this.vargs = joinToString(destination_1, ', ');
    var $receiver_2 = until(0, this.n);
    var destination_2 = ArrayList_init_0(collectionSizeOrDefault($receiver_2, 10));
    var tmp$_2;
    tmp$_2 = $receiver_2.iterator();
    while (tmp$_2.hasNext()) {
      var item_2 = tmp$_2.next();
      destination_2.add_11rb$('v' + item_2);
    }
    this.cargs = joinToString(destination_2, ', ');
  }
  KotlinConsts$FuncType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FuncType',
    interfaces: []
  };
  KotlinConsts$FuncType.prototype.component1 = function () {
    return this.n;
  };
  KotlinConsts$FuncType.prototype.copy_za3lpa$ = function (n) {
    return new KotlinConsts$FuncType(n === void 0 ? this.n : n);
  };
  KotlinConsts$FuncType.prototype.toString = function () {
    return 'FuncType(n=' + Kotlin.toString(this.n) + ')';
  };
  KotlinConsts$FuncType.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.n) | 0;
    return result;
  };
  KotlinConsts$FuncType.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.n, other.n))));
  };
  function KotlinConsts$ktypes$lambda$lambda(addr) {
    return 'lb(' + addr + ')';
  }
  function KotlinConsts$ktypes$lambda$lambda_0(addr, v) {
    return 'sb(' + addr + ', ' + v + ')';
  }
  function KotlinConsts$ktypes$lambda$lambda_1(addr) {
    return 'lh(' + addr + ')';
  }
  function KotlinConsts$ktypes$lambda$lambda_2(addr, v) {
    return 'sh(' + addr + ', ' + v + ')';
  }
  function KotlinConsts$ktypes$lambda$lambda_3(addr) {
    return 'lw(' + addr + ')';
  }
  function KotlinConsts$ktypes$lambda$lambda_4(addr, v) {
    return 'sw(' + addr + ', ' + v + ')';
  }
  function KotlinConsts$ktypes$lambda$lambda_5(addr) {
    return 'ld(' + addr + ')';
  }
  function KotlinConsts$ktypes$lambda$lambda_6(addr, v) {
    return 'sd(' + addr + ', ' + v + ')';
  }
  function KotlinConsts$ktypes$lambda$lambda_7(addr) {
    return 'lb(' + addr + ').toUByte()';
  }
  function KotlinConsts$ktypes$lambda$lambda_8(addr, v) {
    return 'sb(' + addr + ', (' + v + ').toByte())';
  }
  function KotlinConsts$ktypes$lambda$lambda_9(addr) {
    return 'lh(' + addr + ').toUShort()';
  }
  function KotlinConsts$ktypes$lambda$lambda_10(addr, v) {
    return 'sh(' + addr + ', (' + v + ').toShort())';
  }
  function KotlinConsts$ktypes$lambda$lambda_11(addr) {
    return 'lw(' + addr + ').toUInt()';
  }
  function KotlinConsts$ktypes$lambda$lambda_12(addr, v) {
    return 'sw(' + addr + ', (' + v + ').toInt())';
  }
  function KotlinConsts$ktypes$lambda$lambda_13(addr) {
    return 'ld(' + addr + ').toULong()';
  }
  function KotlinConsts$ktypes$lambda$lambda_14(addr, v) {
    return 'sd(' + addr + ', (' + v + ').toLong())';
  }
  function KotlinConsts$ktypes$lambda$lambda_15(addr) {
    return 'Float.fromBits(lw(' + addr + '))';
  }
  function KotlinConsts$ktypes$lambda$lambda_16(addr, v) {
    return 'sw(' + addr + ', (' + v + ').toBits())';
  }
  function KotlinConsts$ktypes$lambda$lambda_17(addr) {
    return 'Double.fromBits(ld(' + addr + '))';
  }
  function KotlinConsts$ktypes$lambda$lambda_18(addr, v) {
    return 'sd(' + addr + ', (' + v + ').toBits())';
  }
  KotlinConsts.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'KotlinConsts',
    interfaces: []
  };
  var KotlinConsts_instance = null;
  function KotlinConsts_getInstance() {
    if (KotlinConsts_instance === null) {
      new KotlinConsts();
    }
    return KotlinConsts_instance;
  }
  function KotlinTarget() {
    KotlinTarget_instance = this;
    BaseTarget.call(this, 'kotlin', 'kt');
    this.KotlinSupressions = '@Suppress("MemberVisibilityCanBePrivate", "FunctionName", "CanBeVal", "DoubleNegation", "LocalVariableName", "NAME_SHADOWING", "VARIABLE_WITH_REDUNDANT_INITIALIZER", "RemoveRedundantCallsOfConversionMethods", "EXPERIMENTAL_IS_NOT_ENABLED", "RedundantExplicitType", "RemoveExplicitTypeArguments", "RedundantExplicitType", "unused", "UNCHECKED_CAST", "UNUSED_VARIABLE", "UNUSED_PARAMETER", "NOTHING_TO_INLINE", "PropertyName", "ClassName", "USELESS_CAST", "PrivatePropertyName", "CanBeParameter", "UnusedMainParameter")';
    this.runtimeImports_31kr1n$_0 = lazy(KotlinTarget$runtimeImports$lambda);
    this.runtime_3lnken$_0 = lazy(KotlinTarget$runtime$lambda);
    this.runtimeJvmImports_pjum90$_0 = lazy(KotlinTarget$runtimeJvmImports$lambda);
    this.runtimeJvm_ywbkjm$_0 = lazy(KotlinTarget$runtimeJvm$lambda);
    this.generatedRuntime_mfvgwy$_0 = lazy(KotlinTarget$generatedRuntime$lambda(this));
  }
  KotlinTarget.prototype.generator_lqjwr7$ = function (parsedProgram) {
    return new KotlinGenerator(parsedProgram);
  };
  KotlinTarget.prototype.get_valueProp_cpakq9$ = function ($receiver) {
    return KotlinConsts_getInstance().VALUE;
  };
  Object.defineProperty(KotlinTarget.prototype, 'runtimeImports', {
    get: function () {
      return this.runtimeImports_31kr1n$_0.value;
    }
  });
  Object.defineProperty(KotlinTarget.prototype, 'runtime', {
    get: function () {
      return this.runtime_3lnken$_0.value;
    }
  });
  Object.defineProperty(KotlinTarget.prototype, 'runtimeJvmImports', {
    get: function () {
      return this.runtimeJvmImports_pjum90$_0.value;
    }
  });
  Object.defineProperty(KotlinTarget.prototype, 'runtimeJvm', {
    get: function () {
      return this.runtimeJvm_ywbkjm$_0.value;
    }
  });
  KotlinTarget.prototype.getRuntimeImports_z234ul$ = function (info) {
    var $receiver = StringBuilder_init();
    appendln($receiver, this.runtimeImports);
    if (equals(info.subTarget, 'jvm')) {
      appendln($receiver, this.runtimeJvmImports);
    }
    return $receiver.toString();
  };
  KotlinTarget.prototype.getRuntime_z234ul$ = function (info) {
    var $receiver = StringBuilder_init();
    appendln($receiver, this.runtime);
    if (equals(info.subTarget, 'jvm')) {
      appendln($receiver, this.runtimeJvm);
    }
    return $receiver.toString();
  };
  KotlinTarget.prototype.main_kand9s$ = function (args) {
    println(this.generatedRuntime);
  };
  Object.defineProperty(KotlinTarget.prototype, 'generatedRuntime', {
    get: function () {
      return this.generatedRuntime_mfvgwy$_0.value;
    }
  });
  function KotlinTarget$runtimeImports$lambda() {
    var $receiver = lines(KotlinRuntime);
    var tmp$;
    var list = ArrayList_init();
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      if (!startsWith(item, 'import '))
        break;
      list.add_11rb$(item);
    }
    return joinToString(list, '\n');
  }
  function KotlinTarget$runtime$lambda() {
    var $receiver = lines(KotlinRuntime);
    var tmp$;
    var yielding = false;
    var list = ArrayList_init();
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      if (yielding)
        list.add_11rb$(item);
      else {
        if (!startsWith(item, 'import ')) {
          list.add_11rb$(item);
          yielding = true;
        }
      }
    }
    return joinToString(list, '\n');
  }
  function KotlinTarget$runtimeJvmImports$lambda() {
    var $receiver = lines(KotlinRuntimeJvm);
    var tmp$;
    var list = ArrayList_init();
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      if (!startsWith(item, 'import '))
        break;
      list.add_11rb$(item);
    }
    return joinToString(list, '\n');
  }
  function KotlinTarget$runtimeJvm$lambda() {
    var $receiver = lines(KotlinRuntimeJvm);
    var tmp$;
    var yielding = false;
    var list = ArrayList_init();
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      if (yielding)
        list.add_11rb$(item);
      else {
        if (!startsWith(item, 'import ')) {
          list.add_11rb$(item);
          yielding = true;
        }
      }
    }
    return joinToString(list, '\n');
  }
  function KotlinTarget$generatedRuntime$lambda(this$KotlinTarget) {
    return function () {
      var $receiver = StringBuilder_init();
      var this$KotlinTarget_0 = this$KotlinTarget;
      var tmp$, tmp$_0, tmp$_1;
      tmp$ = KotlinConsts_getInstance().funcTypes.iterator();
      while (tmp$.hasNext()) {
        var ft = tmp$.next();
        appendln($receiver, 'inline/*!*/ class ' + ft.cname + '<' + ft.targs + '>(val ptr: Int)');
      }
      appendln($receiver, '');
      tmp$_0 = KotlinConsts_getInstance().ktypes.iterator();
      while (tmp$_0.hasNext()) {
        var ktype = tmp$_0.next();
        var valueProp = this$KotlinTarget_0.get_valueProp_cpakq9$(ptr(ktype.ctype));
        if (get_signed(ktype.ctype)) {
          appendln($receiver, '@' + JvmName + '(' + '"' + 'getter' + ktype.name + '"' + ') operator fun CPointer<' + ktype.name + '>.get(offset: Int): ' + ktype.name + ' = ' + ktype.load('this.ptr + offset * ' + ktype.size));
          appendln($receiver, '@' + JvmName + '(' + '"' + 'setter' + ktype.name + '"' + ') operator fun CPointer<' + ktype.name + '>.set(offset: Int, value: ' + ktype.name + '): Unit = ' + ktype.store('this.ptr + offset * ' + ktype.size, 'value'));
          appendln($receiver, '@set:' + JvmName + '(' + '"' + 'setter_' + ktype.name + '_value' + '"' + ') @get:' + JvmName + '(' + '"' + 'getter_' + ktype.name + '_value' + '"' + ') var CPointer<' + ktype.name + '>.' + valueProp + ': ' + ktype.name + ' get() = this[0]; set(value): Unit = run { this[0] = value }');
        }
         else {
          appendln($receiver, 'operator fun CPointer<' + ktype.name + '>.get(offset: Int): ' + ktype.name + ' = ' + ktype.load('this.ptr + offset * ' + ktype.size));
          appendln($receiver, 'operator fun CPointer<' + ktype.name + '>.set(offset: Int, value: ' + ktype.name + '): Unit = ' + ktype.store('this.ptr + offset * ' + ktype.size, 'value'));
          appendln($receiver, 'var CPointer<' + ktype.name + '>.' + valueProp + ': ' + ktype.name + ' get() = this[0]; set(value): Unit = run { this[0] = value }');
        }
        appendln($receiver, '@' + JvmName + '(' + '"' + 'plus' + ktype.name + '"' + ') fun CPointer<' + ktype.name + '>.plus(offset: Int): CPointer<' + ktype.name + '> = addPtr<' + ktype.name + '>(offset, ' + ktype.size + ')');
        appendln($receiver, '@' + JvmName + '(' + '"' + 'minus' + ktype.name + '"' + ') fun CPointer<' + ktype.name + '>.minus(offset: Int): CPointer<' + ktype.name + '> = addPtr<' + ktype.name + '>(-offset, ' + ktype.size + ')');
        appendln($receiver, 'fun CPointer<' + ktype.name + '>.minusPtr' + ktype.name + '(other: CPointer<' + ktype.name + '>): Int = (this.ptr - other.ptr) / ' + ktype.size);
        appendln($receiver, 'fun fixedArrayOf' + ktype.name + '(size: Int, vararg values: ' + ktype.name + '): CPointer<' + ktype.name + '> = alloca_zero(size * ' + ktype.size + ').toCPointer<' + ktype.name + '>().also { for (n in 0 until values.size) ' + ktype.store('it.ptr + n * ' + ktype.size, 'values[n]') + ' }');
        appendln($receiver, '');
      }
      appendln($receiver, '');
      appendln($receiver, 'val FUNCTION_ADDRS: LinkedHashMap<kotlin.reflect.KFunction<*>, Int> = LinkedHashMap<kotlin.reflect.KFunction<*>, Int>()');
      appendln($receiver, '');
      tmp$_1 = KotlinConsts_getInstance().funcTypes.iterator();
      while (tmp$_1.hasNext()) {
        var ft_0 = tmp$_1.next();
        appendln($receiver, 'operator fun <' + ft_0.targs + '> ' + ft_0.cname + '<' + ft_0.targs + '>.invoke(' + ft_0.vargs + '): TR = (FUNCTIONS[this.ptr] as ((' + ft_0.targsNR + ') -> TR)).invoke(' + ft_0.cargs + ')');
        appendln($receiver, '@get:kotlin.jvm.JvmName(' + '"' + 'cfunc' + ft_0.n + '"' + ') val <' + ft_0.targs + '> ' + ft_0.kname + '<' + ft_0.targs + '>.cfunc get() = ' + ft_0.cname + '<' + ft_0.targs + '>(FUNCTION_ADDRS.getOrPut(this) { FUNCTIONS.add(this); FUNCTIONS.size - 1 })');
      }
      return $receiver.toString();
    };
  }
  KotlinTarget.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'KotlinTarget',
    interfaces: [BaseTarget]
  };
  var KotlinTarget_instance = null;
  function KotlinTarget_getInstance() {
    if (KotlinTarget_instance === null) {
      new KotlinTarget();
    }
    return KotlinTarget_instance;
  }
  var JvmName;
  var DOLLAR;
  var KotlinRuntime;
  var KotlinRuntimeJvm;
  function Targets() {
    Targets_instance = this;
    this.all_d69zn6$_0 = lazy(Targets$all$lambda(this));
    this.byName_il3g69$_0 = lazy(Targets$byName$lambda(this));
  }
  Object.defineProperty(Targets.prototype, 'kotlin', {
    get: function () {
      return KotlinTarget_getInstance();
    }
  });
  Object.defineProperty(Targets.prototype, 'c', {
    get: function () {
      return CTarget_getInstance();
    }
  });
  Object.defineProperty(Targets.prototype, 'csharp', {
    get: function () {
      return CSharpTarget_getInstance();
    }
  });
  Object.defineProperty(Targets.prototype, 'default', {
    get: function () {
      return this.kotlin;
    }
  });
  Object.defineProperty(Targets.prototype, 'all', {
    get: function () {
      return this.all_d69zn6$_0.value;
    }
  });
  Object.defineProperty(Targets.prototype, 'byName', {
    get: function () {
      return this.byName_il3g69$_0.value;
    }
  });
  Targets.prototype.get_61zpoe$ = function (name) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = this.byName.get_11rb$(name)) != null)
      tmp$_0 = tmp$;
    else {
      throw IllegalStateException_init(("Unknown target '" + name + "'. Supported targets: " + this.byName.keys).toString());
    }
    return tmp$_0;
  };
  function Targets$all$lambda(this$Targets) {
    return function () {
      return setOf([this$Targets.kotlin, this$Targets.c, this$Targets.csharp]);
    };
  }
  function Targets$byName$lambda(this$Targets) {
    return function () {
      var $receiver = this$Targets.all;
      var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault($receiver, 10)), 16);
      var destination = LinkedHashMap_init_0(capacity);
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        destination.put_xwzc9p$(element.name, element);
      }
      return destination;
    };
  }
  Targets.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Targets',
    interfaces: []
  };
  var Targets_instance = null;
  function Targets_getInstance() {
    if (Targets_instance === null) {
      new Targets();
    }
    return Targets_instance;
  }
  function Include(file, cHeader, ktImpl, cImpl) {
    this.file = file;
    this.cHeader = cHeader;
    this.ktImpl = ktImpl;
    this.cImpl = cImpl;
  }
  Include.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Include',
    interfaces: []
  };
  Include.prototype.component1 = function () {
    return this.file;
  };
  Include.prototype.component2 = function () {
    return this.cHeader;
  };
  Include.prototype.component3 = function () {
    return this.ktImpl;
  };
  Include.prototype.component4 = function () {
    return this.cImpl;
  };
  Include.prototype.copy_w74nik$ = function (file, cHeader, ktImpl, cImpl) {
    return new Include(file === void 0 ? this.file : file, cHeader === void 0 ? this.cHeader : cHeader, ktImpl === void 0 ? this.ktImpl : ktImpl, cImpl === void 0 ? this.cImpl : cImpl);
  };
  Include.prototype.toString = function () {
    return 'Include(file=' + Kotlin.toString(this.file) + (', cHeader=' + Kotlin.toString(this.cHeader)) + (', ktImpl=' + Kotlin.toString(this.ktImpl)) + (', cImpl=' + Kotlin.toString(this.cImpl)) + ')';
  };
  Include.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.file) | 0;
    result = result * 31 + Kotlin.hashCode(this.cHeader) | 0;
    result = result * 31 + Kotlin.hashCode(this.ktImpl) | 0;
    result = result * 31 + Kotlin.hashCode(this.cImpl) | 0;
    return result;
  };
  Include.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.file, other.file) && Kotlin.equals(this.cHeader, other.cHeader) && Kotlin.equals(this.ktImpl, other.ktImpl) && Kotlin.equals(this.cImpl, other.cImpl)))));
  };
  function CIncludes() {
    this.map = LinkedHashMap_init();
  }
  CIncludes.prototype.FILE_w74nik$ = function (file, header, ktImpl, cImpl) {
    if (ktImpl === void 0)
      ktImpl = '';
    if (cImpl === void 0)
      cImpl = '';
    var once = ('__' + replace(replace(file, get_DOT(), '_'), '/', '_') + '_').toUpperCase();
    var $receiver = this.map;
    var value = new Include(file, '#pragma once' + '\n' + '#ifndef ' + once + '\n' + '#define ' + once + '\n' + trimIndent(header) + '\n' + '#endif', ktImpl, cImpl);
    $receiver.put_xwzc9p$(file, value);
  };
  CIncludes.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CIncludes',
    interfaces: []
  };
  var CStdIncludes;
  var KTCC_VERSION;
  function Comparator$ObjectLiteral(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  var compareBy$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function Node() {
    this.tagged = false;
    this.pos = -1;
    this.endPos = -1;
    this.func = null;
    this.comment = '';
  }
  Node.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Node',
    interfaces: []
  };
  function DummyNode(dummy) {
    Node.call(this);
    this.dummy = dummy;
  }
  DummyNode.prototype.visitChildren_jolnm7$ = function (visit) {
  };
  DummyNode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DummyNode',
    interfaces: [Node]
  };
  DummyNode.prototype.component1 = function () {
    return this.dummy;
  };
  DummyNode.prototype.copy_6taknv$ = function (dummy) {
    return new DummyNode(dummy === void 0 ? this.dummy : dummy);
  };
  DummyNode.prototype.toString = function () {
    return 'DummyNode(dummy=' + Kotlin.toString(this.dummy) + ')';
  };
  DummyNode.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.dummy) | 0;
    return result;
  };
  DummyNode.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.dummy, other.dummy))));
  };
  function IdDecl(name) {
    Node.call(this);
    this.name = name;
  }
  IdDecl.prototype.toString = function () {
    return this.name;
  };
  IdDecl.prototype.visitChildren_jolnm7$ = function (visit) {
  };
  IdDecl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IdDecl',
    interfaces: [Node]
  };
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
  function Id(name, symbol, type, isGlobal) {
    Id$Companion_getInstance();
    var tmp$, tmp$_0;
    if (type === void 0)
      type = (tmp$ = symbol != null ? symbol.type : null) != null ? tmp$ : Type$Companion_getInstance().UNRESOLVED;
    if (isGlobal === void 0)
      isGlobal = ((tmp$_0 = symbol != null ? symbol.scope : null) != null ? tmp$_0.parent : null) == null;
    Expr.call(this);
    this.name = name;
    this.symbol = symbol;
    this.type_mhjvpp$_0 = type;
    this.isGlobal = isGlobal;
    Id$Companion_getInstance().validate_61zpoe$(this.name);
  }
  Object.defineProperty(Id.prototype, 'type', {
    get: function () {
      return this.type_mhjvpp$_0;
    }
  });
  function Id$Companion() {
    Id$Companion_instance = this;
  }
  Id$Companion.prototype.isValid_61zpoe$ = function (name) {
    return this.isValidMsg_61zpoe$(name) == null;
  };
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
  Id$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Id$Companion_instance = null;
  function Id$Companion_getInstance() {
    if (Id$Companion_instance === null) {
      new Id$Companion();
    }
    return Id$Companion_instance;
  }
  Id.prototype.visitChildren_jolnm7$ = function (visit) {
  };
  Id.prototype.toString = function () {
    return this.name;
  };
  Id.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Id',
    interfaces: [Expr]
  };
  Id.prototype.component1 = function () {
    return this.name;
  };
  Id.prototype.component2 = function () {
    return this.symbol;
  };
  Id.prototype.component3 = function () {
    return this.type;
  };
  Id.prototype.component4 = function () {
    return this.isGlobal;
  };
  Id.prototype.copy_g5xiys$ = function (name, symbol, type, isGlobal) {
    return new Id(name === void 0 ? this.name : name, symbol === void 0 ? this.symbol : symbol, type === void 0 ? this.type : type, isGlobal === void 0 ? this.isGlobal : isGlobal);
  };
  Id.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.symbol) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.isGlobal) | 0;
    return result;
  };
  Id.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.symbol, other.symbol) && Kotlin.equals(this.type, other.type) && Kotlin.equals(this.isGlobal, other.isGlobal)))));
  };
  function StringConstant(raw) {
    StringConstant$Companion_getInstance();
    Expr.call(this);
    this.raw = raw;
    StringConstant$Companion_getInstance().validate_61zpoe$(this.raw);
  }
  Object.defineProperty(StringConstant.prototype, 'type', {
    get: function () {
      return Type$Companion_getInstance().CHAR_PTR;
    }
  });
  Object.defineProperty(StringConstant.prototype, 'value', {
    get: function () {
      return get_cunquoted(this.raw);
    }
  });
  function StringConstant$Companion() {
    StringConstant$Companion_instance = this;
  }
  StringConstant$Companion.prototype.isValid_61zpoe$ = function (data) {
    return this.isValidMsg_61zpoe$(data) == null;
  };
  StringConstant$Companion.prototype.isValidMsg_61zpoe$ = function (data) {
    if (!startsWith_0(data, 34))
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
  StringConstant$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var StringConstant$Companion_instance = null;
  function StringConstant$Companion_getInstance() {
    if (StringConstant$Companion_instance === null) {
      new StringConstant$Companion();
    }
    return StringConstant$Companion_instance;
  }
  StringConstant.prototype.visitChildren_jolnm7$ = function (visit) {
  };
  StringConstant.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StringConstant',
    interfaces: [Expr]
  };
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
  Object.defineProperty(CharConstant.prototype, 'type', {
    get: function () {
      return Type$Companion_getInstance().USHORT;
    }
  });
  Object.defineProperty(CharConstant.prototype, 'value', {
    get: function () {
      var $receiver = get_cunquoted(this.raw);
      return toBoxedChar(0 >= 0 && 0 <= get_lastIndex($receiver) ? $receiver.charCodeAt(0) : unboxChar(toBoxedChar(0)));
    }
  });
  function CharConstant$Companion() {
    CharConstant$Companion_instance = this;
  }
  CharConstant$Companion.prototype.isValid_61zpoe$ = function (data) {
    return this.isValidMsg_61zpoe$(data) == null;
  };
  CharConstant$Companion.prototype.isValidMsg_61zpoe$ = function (data) {
    if (!startsWith_0(data, 39))
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
  CharConstant$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CharConstant$Companion_instance = null;
  function CharConstant$Companion_getInstance() {
    if (CharConstant$Companion_instance === null) {
      new CharConstant$Companion();
    }
    return CharConstant$Companion_instance;
  }
  CharConstant.prototype.visitChildren_jolnm7$ = function (visit) {
  };
  CharConstant.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CharConstant',
    interfaces: [Expr]
  };
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
  function NumericConstant() {
    Expr.call(this);
  }
  NumericConstant.prototype.visitChildren_jolnm7$ = function (visit) {
  };
  NumericConstant.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NumericConstant',
    interfaces: [Expr]
  };
  function NumberConstant(nvalue, type) {
    NumericConstant.call(this);
    this.nvalue_gyxndi$_0 = nvalue;
    this.type_1d8bzz$_0 = type;
  }
  Object.defineProperty(NumberConstant.prototype, 'nvalue', {
    get: function () {
      return this.nvalue_gyxndi$_0;
    }
  });
  Object.defineProperty(NumberConstant.prototype, 'type', {
    get: function () {
      return this.type_1d8bzz$_0;
    }
  });
  NumberConstant.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NumberConstant',
    interfaces: [NumericConstant]
  };
  function IntConstant(value) {
    return IntConstant_1(value.toString());
  }
  function IntConstant_0(value) {
    return IntConstant_1(value.toString());
  }
  function IntConstant_1(data) {
    if (contains(data, 'l') || contains(data, 'L'))
      return new IntConstant_3(data, Type$Companion_getInstance().LONG);
    else
      return new IntConstant_3(data, Type$Companion_getInstance().INT);
  }
  function IntConstant_2(value, type) {
    var $receiver = StringBuilder_init();
    $receiver.append_s8jyv4$(value);
    if (get_unsigned(type))
      $receiver.append_gw00v9$('u');
    if (Kotlin.isType(type, IntType) && type.size >= 8)
      $receiver.append_gw00v9$('L');
    return new IntConstant_3($receiver.toString(), type);
  }
  function IntConstant_3(data, type) {
    IntConstant$Companion_getInstance();
    NumericConstant.call(this);
    this.data = data;
    this.type_qrkxb9$_0 = type;
    this.isSigned = !contains_0(this.data, 117);
    this.isLong = contains_0(this.data, 108) || contains_0(this.data, 76);
    this.dataWithoutSuffix = removeSuffix(removeSuffix(removeSuffix(this.data, 'u'), 'l'), 'L');
    this.nvalue_9loa2s$_0 = this.value;
    IntConstant$Companion_getInstance().validate_61zpoe$(this.data);
  }
  Object.defineProperty(IntConstant_3.prototype, 'type', {
    get: function () {
      return this.type_qrkxb9$_0;
    }
  });
  Object.defineProperty(IntConstant_3.prototype, 'value', {
    get: function () {
      if (startsWith(this.dataWithoutSuffix, '0x') || startsWith(this.dataWithoutSuffix, '0X')) {
        return toULong(this.dataWithoutSuffix.substring(2), 16).data;
      }
       else if (startsWith(this.dataWithoutSuffix, '0')) {
        return toULong(this.dataWithoutSuffix, 8).data;
      }
       else
        return toLong(this.dataWithoutSuffix);
    }
  });
  Object.defineProperty(IntConstant_3.prototype, 'nvalue', {
    get: function () {
      return this.nvalue_9loa2s$_0;
    }
  });
  function IntConstant$Companion() {
    IntConstant$Companion_instance = this;
  }
  IntConstant$Companion.prototype.isValid_61zpoe$ = function (data) {
    return this.isValidMsg_61zpoe$(data) == null;
  };
  IntConstant$Companion.prototype.isValidMsg_61zpoe$ = function (data) {
    if (contains(data, get_DOT()))
      return 'Decimal';
    if (startsWith_0(data, 45))
      return null;
    if (startsWith(data, '0x'))
      return null;
    if (startsWith(data, '0'))
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
  IntConstant$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var IntConstant$Companion_instance = null;
  function IntConstant$Companion_getInstance() {
    if (IntConstant$Companion_instance === null) {
      new IntConstant$Companion();
    }
    return IntConstant$Companion_instance;
  }
  IntConstant_3.prototype.toString = function () {
    return this.data;
  };
  IntConstant_3.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IntConstant',
    interfaces: [NumericConstant]
  };
  IntConstant_3.prototype.component1 = function () {
    return this.data;
  };
  IntConstant_3.prototype.component2 = function () {
    return this.type;
  };
  IntConstant_3.prototype.copy_qv1nho$ = function (data, type) {
    return new IntConstant_3(data === void 0 ? this.data : data, type === void 0 ? this.type : type);
  };
  IntConstant_3.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.data) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    return result;
  };
  IntConstant_3.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.data, other.data) && Kotlin.equals(this.type, other.type)))));
  };
  function DecimalConstant(value) {
    return new DecimalConstant_0(value.toString());
  }
  function DecimalConstant_0(data) {
    DecimalConstant$Companion_getInstance();
    NumericConstant.call(this);
    this.data = data;
    this.dataWithoutSuffix = removeSuffix(this.data, 'f');
    this.type_vkehl3$_0 = endsWith_0(this.data, 'f') ? Type$Companion_getInstance().FLOAT : Type$Companion_getInstance().DOUBLE;
    this.nvalue_d8tnz6$_0 = this.value;
    DecimalConstant$Companion_getInstance().validate_61zpoe$(this.data);
  }
  Object.defineProperty(DecimalConstant_0.prototype, 'value', {
    get: function () {
      return toDouble(this.dataWithoutSuffix);
    }
  });
  Object.defineProperty(DecimalConstant_0.prototype, 'type', {
    get: function () {
      return this.type_vkehl3$_0;
    }
  });
  Object.defineProperty(DecimalConstant_0.prototype, 'nvalue', {
    get: function () {
      return this.nvalue_d8tnz6$_0;
    }
  });
  function DecimalConstant$Companion() {
    DecimalConstant$Companion_instance = this;
  }
  DecimalConstant$Companion.prototype.isValid_61zpoe$ = function (data) {
    return this.isValidMsg_61zpoe$(data) == null;
  };
  DecimalConstant$Companion.prototype.isValidMsg_61zpoe$ = function (data) {
    var $receiver = new CharRange(48, 57);
    var element = firstOrNull(data);
    if (element != null && $receiver.contains_mef7kx$(element) || firstOrNull(data) === 46)
      return null;
    return 'Constant can only contain digits';
  };
  DecimalConstant$Companion.prototype.validate_61zpoe$ = function (data) {
    var tmp$;
    tmp$ = this.isValidMsg_61zpoe$(data);
    if (tmp$ == null) {
      return;
    }
    throw new ExpectException(tmp$);
  };
  DecimalConstant$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DecimalConstant$Companion_instance = null;
  function DecimalConstant$Companion_getInstance() {
    if (DecimalConstant$Companion_instance === null) {
      new DecimalConstant$Companion();
    }
    return DecimalConstant$Companion_instance;
  }
  DecimalConstant_0.prototype.visitChildren_jolnm7$ = function (visit) {
  };
  DecimalConstant_0.prototype.toString = function () {
    return this.data;
  };
  DecimalConstant_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DecimalConstant',
    interfaces: [NumericConstant]
  };
  DecimalConstant_0.prototype.component1 = function () {
    return this.data;
  };
  DecimalConstant_0.prototype.copy_61zpoe$ = function (data) {
    return new DecimalConstant_0(data === void 0 ? this.data : data);
  };
  DecimalConstant_0.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.data) | 0;
    return result;
  };
  DecimalConstant_0.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.data, other.data))));
  };
  function Expr() {
    Node.call(this);
  }
  Expr.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Expr',
    interfaces: [Node]
  };
  function not($receiver) {
    return new Unop('!', $receiver);
  }
  function LValue() {
    Expr.call(this);
  }
  LValue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LValue',
    interfaces: [Expr]
  };
  function CommaExpr(exprs) {
    Expr.call(this);
    this.exprs = exprs;
  }
  CommaExpr.prototype.visitChildren_jolnm7$ = function (visit) {
    invoke_0(visit, this.exprs);
  };
  Object.defineProperty(CommaExpr.prototype, 'type', {
    get: function () {
      return last(this.exprs).type;
    }
  });
  CommaExpr.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CommaExpr',
    interfaces: [Expr]
  };
  CommaExpr.prototype.component1 = function () {
    return this.exprs;
  };
  CommaExpr.prototype.copy_shm77o$ = function (exprs) {
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
  ConstExpr.prototype.visitChildren_jolnm7$ = function (visit) {
    visit.invoke_o9id9e$(this.expr);
  };
  Object.defineProperty(ConstExpr.prototype, 'type', {
    get: function () {
      return this.expr.type;
    }
  });
  ConstExpr.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ConstExpr',
    interfaces: [Expr]
  };
  ConstExpr.prototype.component1 = function () {
    return this.expr;
  };
  ConstExpr.prototype.copy_o9ctcl$ = function (expr) {
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
  SingleOperandExpr.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SingleOperandExpr',
    interfaces: [Expr]
  };
  function BaseUnaryOp() {
    SingleOperandExpr.call(this);
  }
  BaseUnaryOp.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BaseUnaryOp',
    interfaces: [SingleOperandExpr]
  };
  function Unop(op, rvalue) {
    BaseUnaryOp.call(this);
    this.op_mfhod7$_0 = op;
    this.rvalue = rvalue;
    this.rvalueType = this.rvalue.type;
    var tmp$, tmp$_0, tmp$_1;
    if (equals(this.op, '!'))
      tmp$ = Type$Companion_getInstance().BOOL;
    else
      tmp$ = null;
    this.extypeR = tmp$;
    switch (this.op) {
      case '*':
        tmp$_1 = Kotlin.isType(this.rvalueType, BasePointerType) ? this.rvalueType.elementType : this.rvalueType;
        break;
      case '&':
        tmp$_1 = new PointerType(this.rvalueType, false);
        break;
      default:tmp$_1 = (tmp$_0 = this.extypeR) != null ? tmp$_0 : this.rvalueType;
        break;
    }
    this.type_x2sxck$_0 = tmp$_1;
  }
  Object.defineProperty(Unop.prototype, 'op', {
    get: function () {
      return this.op_mfhod7$_0;
    }
  });
  Object.defineProperty(Unop.prototype, 'operand', {
    get: function () {
      return this.rvalue;
    }
  });
  Unop.prototype.visitChildren_jolnm7$ = function (visit) {
    visit.invoke_o9id9e$(this.rvalue);
  };
  Object.defineProperty(Unop.prototype, 'type', {
    get: function () {
      return this.type_x2sxck$_0;
    }
  });
  Unop.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Unop',
    interfaces: [BaseUnaryOp]
  };
  Unop.prototype.component1 = function () {
    return this.op;
  };
  Unop.prototype.component2 = function () {
    return this.rvalue;
  };
  Unop.prototype.copy_82v6u1$ = function (op, rvalue) {
    return new Unop(op === void 0 ? this.op : op, rvalue === void 0 ? this.rvalue : rvalue);
  };
  Unop.prototype.toString = function () {
    return 'Unop(op=' + Kotlin.toString(this.op) + (', rvalue=' + Kotlin.toString(this.rvalue)) + ')';
  };
  Unop.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.op) | 0;
    result = result * 31 + Kotlin.hashCode(this.rvalue) | 0;
    return result;
  };
  Unop.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.op, other.op) && Kotlin.equals(this.rvalue, other.rvalue)))));
  };
  function PostfixExpr(lvalue, op) {
    BaseUnaryOp.call(this);
    this.lvalue = lvalue;
    this.op_tat9u3$_0 = op;
  }
  Object.defineProperty(PostfixExpr.prototype, 'op', {
    get: function () {
      return this.op_tat9u3$_0;
    }
  });
  Object.defineProperty(PostfixExpr.prototype, 'operand', {
    get: function () {
      return this.lvalue;
    }
  });
  Object.defineProperty(PostfixExpr.prototype, 'type', {
    get: function () {
      return this.lvalue.type;
    }
  });
  PostfixExpr.prototype.visitChildren_jolnm7$ = function (visit) {
    visit.invoke_o9id9e$(this.lvalue);
  };
  PostfixExpr.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PostfixExpr',
    interfaces: [BaseUnaryOp]
  };
  PostfixExpr.prototype.component1 = function () {
    return this.lvalue;
  };
  PostfixExpr.prototype.component2 = function () {
    return this.op;
  };
  PostfixExpr.prototype.copy_oumrkp$ = function (lvalue, op) {
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
  Object.defineProperty(AssignExpr.prototype, 'type', {
    get: function () {
      return this.l.type;
    }
  });
  AssignExpr.prototype.visitChildren_jolnm7$ = function (visit) {
    invoke_1(visit, this.l, this.r);
  };
  AssignExpr.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AssignExpr',
    interfaces: [Expr]
  };
  AssignExpr.prototype.component1 = function () {
    return this.l;
  };
  AssignExpr.prototype.component2 = function () {
    return this.op;
  };
  AssignExpr.prototype.component3 = function () {
    return this.r;
  };
  AssignExpr.prototype.copy_uc8zf4$ = function (l, op, r) {
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
  function toSimpleAssignExpr($receiver) {
    if (equals($receiver.op, '='))
      return new SimpleAssignExpr($receiver.l, $receiver.r, $receiver);
    else {
      var tmp$ = $receiver.l;
      var tmp$_0 = $receiver.l;
      var $receiver_0 = $receiver.op;
      var endIndex = $receiver.op.length - 1 | 0;
      return new SimpleAssignExpr(tmp$, new Binop(tmp$_0, $receiver_0.substring(0, endIndex), $receiver.r), $receiver);
    }
  }
  function SimpleAssignExpr(l, r, base) {
    if (base === void 0)
      base = null;
    Expr.call(this);
    this.l = l;
    this.r = r;
    this.base = base;
  }
  Object.defineProperty(SimpleAssignExpr.prototype, 'type', {
    get: function () {
      return this.l.type;
    }
  });
  SimpleAssignExpr.prototype.visitChildren_jolnm7$ = function (visit) {
    invoke_1(visit, this.l, this.r);
  };
  SimpleAssignExpr.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SimpleAssignExpr',
    interfaces: [Expr]
  };
  SimpleAssignExpr.prototype.component1 = function () {
    return this.l;
  };
  SimpleAssignExpr.prototype.component2 = function () {
    return this.r;
  };
  SimpleAssignExpr.prototype.component3 = function () {
    return this.base;
  };
  SimpleAssignExpr.prototype.copy_7wxdyv$ = function (l, r, base) {
    return new SimpleAssignExpr(l === void 0 ? this.l : l, r === void 0 ? this.r : r, base === void 0 ? this.base : base);
  };
  SimpleAssignExpr.prototype.toString = function () {
    return 'SimpleAssignExpr(l=' + Kotlin.toString(this.l) + (', r=' + Kotlin.toString(this.r)) + (', base=' + Kotlin.toString(this.base)) + ')';
  };
  SimpleAssignExpr.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.l) | 0;
    result = result * 31 + Kotlin.hashCode(this.r) | 0;
    result = result * 31 + Kotlin.hashCode(this.base) | 0;
    return result;
  };
  SimpleAssignExpr.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.l, other.l) && Kotlin.equals(this.r, other.r) && Kotlin.equals(this.base, other.base)))));
  };
  function ArrayAccessExpr(expr, index, isDeref) {
    if (isDeref === void 0)
      isDeref = false;
    LValue.call(this);
    this.expr = expr;
    this.index = index;
    this.isDeref = isDeref;
    this.arrayType = this.expr.type;
  }
  ArrayAccessExpr.prototype.visitChildren_jolnm7$ = function (visit) {
    invoke_1(visit, this.expr, this.index);
  };
  Object.defineProperty(ArrayAccessExpr.prototype, 'type', {
    get: function () {
      var tmp$;
      tmp$ = this.arrayType;
      if (Kotlin.isType(tmp$, PointerType))
        return this.arrayType.elementType;
      else if (Kotlin.isType(tmp$, ArrayType))
        return this.arrayType.elementType;
      else
        return Type$Companion_getInstance().INT;
    }
  });
  ArrayAccessExpr.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ArrayAccessExpr',
    interfaces: [LValue]
  };
  ArrayAccessExpr.prototype.component1 = function () {
    return this.expr;
  };
  ArrayAccessExpr.prototype.component2 = function () {
    return this.index;
  };
  ArrayAccessExpr.prototype.component3 = function () {
    return this.isDeref;
  };
  ArrayAccessExpr.prototype.copy_qn6xs9$ = function (expr, index, isDeref) {
    return new ArrayAccessExpr(expr === void 0 ? this.expr : expr, index === void 0 ? this.index : index, isDeref === void 0 ? this.isDeref : isDeref);
  };
  ArrayAccessExpr.prototype.toString = function () {
    return 'ArrayAccessExpr(expr=' + Kotlin.toString(this.expr) + (', index=' + Kotlin.toString(this.index)) + (', isDeref=' + Kotlin.toString(this.isDeref)) + ')';
  };
  ArrayAccessExpr.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.expr) | 0;
    result = result * 31 + Kotlin.hashCode(this.index) | 0;
    result = result * 31 + Kotlin.hashCode(this.isDeref) | 0;
    return result;
  };
  ArrayAccessExpr.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.expr, other.expr) && Kotlin.equals(this.index, other.index) && Kotlin.equals(this.isDeref, other.isDeref)))));
  };
  function FieldAccessExpr(left, id, indirect, type, leftType) {
    LValue.call(this);
    this.left = left;
    this.id = id;
    this.indirect = indirect;
    this.type_cybxtn$_0 = type;
    this.leftType = leftType;
    var tmp$, tmp$_0;
    this.structType = Kotlin.isType(this.leftType, PointerType) ? (tmp$ = this.leftType.elementType) == null || Kotlin.isType(tmp$, StructType) ? tmp$ : null : Kotlin.isType(tmp$_0 = this.leftType, StructType) ? tmp$_0 : null;
  }
  Object.defineProperty(FieldAccessExpr.prototype, 'type', {
    get: function () {
      return this.type_cybxtn$_0;
    }
  });
  FieldAccessExpr.prototype.visitChildren_jolnm7$ = function (visit) {
    visit.invoke_o9id9e$(this.left);
  };
  FieldAccessExpr.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FieldAccessExpr',
    interfaces: [LValue]
  };
  FieldAccessExpr.prototype.component1 = function () {
    return this.left;
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
  FieldAccessExpr.prototype.component5 = function () {
    return this.leftType;
  };
  FieldAccessExpr.prototype.copy_z20ckn$ = function (left, id, indirect, type, leftType) {
    return new FieldAccessExpr(left === void 0 ? this.left : left, id === void 0 ? this.id : id, indirect === void 0 ? this.indirect : indirect, type === void 0 ? this.type : type, leftType === void 0 ? this.leftType : leftType);
  };
  FieldAccessExpr.prototype.toString = function () {
    return 'FieldAccessExpr(left=' + Kotlin.toString(this.left) + (', id=' + Kotlin.toString(this.id)) + (', indirect=' + Kotlin.toString(this.indirect)) + (', type=' + Kotlin.toString(this.type)) + (', leftType=' + Kotlin.toString(this.leftType)) + ')';
  };
  FieldAccessExpr.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.left) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.indirect) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.leftType) | 0;
    return result;
  };
  FieldAccessExpr.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.left, other.left) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.indirect, other.indirect) && Kotlin.equals(this.type, other.type) && Kotlin.equals(this.leftType, other.leftType)))));
  };
  function CallExpr(expr, args) {
    Expr.call(this);
    this.expr = expr;
    this.args = args;
  }
  Object.defineProperty(CallExpr.prototype, 'type', {
    get: function () {
      var tmp$;
      var etype = this.expr.type;
      if (Kotlin.isType(etype, FunctionType))
        tmp$ = etype.retType;
      else
        tmp$ = etype;
      return tmp$;
    }
  });
  CallExpr.prototype.visitChildren_jolnm7$ = function (visit) {
    visit.invoke_o9id9e$(this.expr);
    invoke_0(visit, this.args);
  };
  CallExpr.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CallExpr',
    interfaces: [Expr]
  };
  CallExpr.prototype.component1 = function () {
    return this.expr;
  };
  CallExpr.prototype.component2 = function () {
    return this.args;
  };
  CallExpr.prototype.copy_qjajad$ = function (expr, args) {
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
  function BinOperatorsExpr(exprs, ops) {
    BinOperatorsExpr$Companion_getInstance();
    Expr.call(this);
    this.exprs = exprs;
    this.ops = ops;
  }
  Object.defineProperty(BinOperatorsExpr.prototype, 'type', {
    get: function () {
      return first(this.exprs).type;
    }
  });
  function BinOperatorsExpr$Companion() {
    BinOperatorsExpr$Companion_instance = this;
    var prec = listOf_0([listOf_0(['*', '/', '%']), listOf_0(['+', '-']), listOf_0(['<<', '>>']), listOf_0(['<', '<=', '>', '>=']), listOf_0(['==', '!=']), listOf('&'), listOf('|'), listOf('&&'), listOf('||'), listOf_0(['=', '*=', '/=', '%=', '+=', '-=', '<<=', '>>=', '&=', '^=', '|='])]);
    var out = LinkedHashMap_init();
    var index = 0;
    for (var tmp$ = prec.iterator(); tmp$.hasNext(); ++index) {
      var pp = tmp$.next();
      var tmp$_0;
      tmp$_0 = pp.iterator();
      while (tmp$_0.hasNext()) {
        var p = tmp$_0.next();
        out.put_xwzc9p$(p, index);
      }
    }
    this.precedences = out;
  }
  BinOperatorsExpr$Companion.prototype.compareOps_puj7f4$ = function (l, r) {
    var tmp$, tmp$_0;
    return Kotlin.primitiveCompareTo((tmp$ = this.precedences.get_11rb$(l)) != null ? tmp$ : -1, (tmp$_0 = this.precedences.get_11rb$(r)) != null ? tmp$_0 : -1);
  };
  BinOperatorsExpr$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BinOperatorsExpr$Companion_instance = null;
  function BinOperatorsExpr$Companion_getInstance() {
    if (BinOperatorsExpr$Companion_instance === null) {
      new BinOperatorsExpr$Companion();
    }
    return BinOperatorsExpr$Companion_instance;
  }
  BinOperatorsExpr.prototype.visitChildren_jolnm7$ = function (visit) {
    invoke_0(visit, this.exprs);
  };
  function BinOperatorsExpr$MutBinop(l, op, r) {
    Expr.call(this);
    this.l = l;
    this.op = op;
    this.r = r;
  }
  Object.defineProperty(BinOperatorsExpr$MutBinop.prototype, 'rightmost', {
    get: function () {
      var tmp$;
      return Kotlin.isType(this.r, BinOperatorsExpr$MutBinop) ? (Kotlin.isType(tmp$ = this.r, BinOperatorsExpr$MutBinop) ? tmp$ : throwCCE()).rightmost : this;
    }
  });
  BinOperatorsExpr$MutBinop.prototype.visitChildren_jolnm7$ = function (visit) {
    throw new NotImplementedError_init();
  };
  Object.defineProperty(BinOperatorsExpr$MutBinop.prototype, 'type', {
    get: function () {
      throw new NotImplementedError_init();
    }
  });
  BinOperatorsExpr$MutBinop.prototype.toString = function () {
    return '(' + this.l + ' ' + this.op + ' ' + this.r + ')';
  };
  BinOperatorsExpr$MutBinop.prototype.toBinopI_ta7buu$ = function ($receiver) {
    return Kotlin.isType($receiver, BinOperatorsExpr$MutBinop) ? new Binop($receiver.toBinopI_ta7buu$($receiver.l), $receiver.op, $receiver.toBinopI_ta7buu$($receiver.r)) : $receiver;
  };
  BinOperatorsExpr$MutBinop.prototype.toBinop = function () {
    return this.toBinopI_ta7buu$(this);
  };
  BinOperatorsExpr$MutBinop.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MutBinop',
    interfaces: [Expr]
  };
  BinOperatorsExpr.prototype.expand = function () {
    var tmp$;
    var out = new BinOperatorsExpr$MutBinop(this.exprs.get_za3lpa$(0), this.ops.get_za3lpa$(0), this.exprs.get_za3lpa$(1));
    tmp$ = zip(drop(this.exprs, 2), drop(this.ops, 1)).iterator();
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var next = tmp$_0.component1()
      , op = tmp$_0.component2();
      if (BinOperatorsExpr$Companion_getInstance().compareOps_puj7f4$(out.op, op) > 0) {
        out.rightmost.r = new BinOperatorsExpr$MutBinop(out.rightmost.r, op, next);
      }
       else {
        out = new BinOperatorsExpr$MutBinop(out, op, next);
      }
    }
    return out.toBinop();
  };
  BinOperatorsExpr.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BinOperatorsExpr',
    interfaces: [Expr]
  };
  BinOperatorsExpr.prototype.component1 = function () {
    return this.exprs;
  };
  BinOperatorsExpr.prototype.component2 = function () {
    return this.ops;
  };
  BinOperatorsExpr.prototype.copy_d5asub$ = function (exprs, ops) {
    return new BinOperatorsExpr(exprs === void 0 ? this.exprs : exprs, ops === void 0 ? this.ops : ops);
  };
  BinOperatorsExpr.prototype.toString = function () {
    return 'BinOperatorsExpr(exprs=' + Kotlin.toString(this.exprs) + (', ops=' + Kotlin.toString(this.ops)) + ')';
  };
  BinOperatorsExpr.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.exprs) | 0;
    result = result * 31 + Kotlin.hashCode(this.ops) | 0;
    return result;
  };
  BinOperatorsExpr.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.exprs, other.exprs) && Kotlin.equals(this.ops, other.ops)))));
  };
  function Binop(l, op, r) {
    Expr.call(this);
    this.l = l;
    this.op = op;
    this.r = r;
    this.computed = Type$Companion_getInstance().binop_uvg7l2$(this.l.type, this.op, this.r.type);
    this.extypeL = this.computed.l;
    this.extypeR = this.computed.r;
    this.type_55gbdy$_0 = this.computed.out;
  }
  Binop.prototype.visitChildren_jolnm7$ = function (visit) {
    invoke_1(visit, this.l, this.r);
  };
  Object.defineProperty(Binop.prototype, 'type', {
    get: function () {
      return this.type_55gbdy$_0;
    }
  });
  Binop.prototype.toString = function () {
    return '(' + this.l + ' ' + this.op + ' ' + this.r + ')';
  };
  Binop.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Binop',
    interfaces: [Expr]
  };
  Binop.prototype.component1 = function () {
    return this.l;
  };
  Binop.prototype.component2 = function () {
    return this.op;
  };
  Binop.prototype.component3 = function () {
    return this.r;
  };
  Binop.prototype.copy_uc8zf4$ = function (l, op, r) {
    return new Binop(l === void 0 ? this.l : l, op === void 0 ? this.op : op, r === void 0 ? this.r : r);
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
  Stm.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Stm',
    interfaces: [Node]
  };
  function RawStm(raw) {
    Stm.call(this);
    this.raw = raw;
  }
  RawStm.prototype.visitChildren_jolnm7$ = function (visit) {
  };
  RawStm.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RawStm',
    interfaces: [Stm]
  };
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
  function CommentStm(zcomment) {
    Stm.call(this);
    this.zcomment = zcomment;
    this.multiline = contains_0(this.zcomment, 10);
  }
  CommentStm.prototype.visitChildren_jolnm7$ = function (visit) {
  };
  CommentStm.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CommentStm',
    interfaces: [Stm]
  };
  CommentStm.prototype.component1 = function () {
    return this.zcomment;
  };
  CommentStm.prototype.copy_61zpoe$ = function (zcomment) {
    return new CommentStm(zcomment === void 0 ? this.zcomment : zcomment);
  };
  CommentStm.prototype.toString = function () {
    return 'CommentStm(zcomment=' + Kotlin.toString(this.zcomment) + ')';
  };
  CommentStm.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.zcomment) | 0;
    return result;
  };
  CommentStm.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.zcomment, other.zcomment))));
  };
  function EmptyStm(reason) {
    Stm.call(this);
    this.reason = reason;
  }
  EmptyStm.prototype.visitChildren_jolnm7$ = function (visit) {
  };
  EmptyStm.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EmptyStm',
    interfaces: [Stm]
  };
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
  IfElse.prototype.visitChildren_jolnm7$ = function (visit) {
    invoke_1(visit, this.cond, this.strue);
    if (this.sfalse != null)
      visit.invoke_o9id9e$(this.sfalse);
  };
  IfElse.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IfElse',
    interfaces: [Stm]
  };
  IfElse.prototype.component1 = function () {
    return this.cond;
  };
  IfElse.prototype.component2 = function () {
    return this.strue;
  };
  IfElse.prototype.component3 = function () {
    return this.sfalse;
  };
  IfElse.prototype.copy_ws84y2$ = function (cond, strue, sfalse) {
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
  Loop.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Loop',
    interfaces: [Stm]
  };
  function While(cond, body) {
    Loop.call(this);
    this.cond = cond;
    this.body_ef44w5$_0 = body;
  }
  Object.defineProperty(While.prototype, 'body', {
    get: function () {
      return this.body_ef44w5$_0;
    }
  });
  While.prototype.visitChildren_jolnm7$ = function (visit) {
    invoke_1(visit, this.cond, this.body);
  };
  While.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'While',
    interfaces: [Loop]
  };
  While.prototype.component1 = function () {
    return this.cond;
  };
  While.prototype.component2 = function () {
    return this.body;
  };
  While.prototype.copy_2p5lvn$ = function (cond, body) {
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
    this.body_eqgtao$_0 = body;
    this.cond = cond;
  }
  Object.defineProperty(DoWhile.prototype, 'body', {
    get: function () {
      return this.body_eqgtao$_0;
    }
  });
  DoWhile.prototype.visitChildren_jolnm7$ = function (visit) {
    invoke_1(visit, this.body, this.cond);
  };
  DoWhile.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DoWhile',
    interfaces: [Loop]
  };
  DoWhile.prototype.component1 = function () {
    return this.body;
  };
  DoWhile.prototype.component2 = function () {
    return this.cond;
  };
  DoWhile.prototype.copy_vqhs39$ = function (body, cond) {
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
    this.body_8j7vmb$_0 = body;
  }
  Object.defineProperty(For.prototype, 'body', {
    get: function () {
      return this.body_8j7vmb$_0;
    }
  });
  For.prototype.visitChildren_jolnm7$ = function (visit) {
    invoke(visit, this.init);
    invoke(visit, this.cond);
    invoke(visit, this.post);
    visit.invoke_o9id9e$(this.body);
  };
  For.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'For',
    interfaces: [Loop]
  };
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
  For.prototype.copy_bxk6h1$ = function (init, cond, post, body) {
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
  Goto.prototype.visitChildren_jolnm7$ = function (visit) {
    visit.invoke_o9id9e$(this.id);
  };
  Goto.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Goto',
    interfaces: [Stm]
  };
  Goto.prototype.component1 = function () {
    return this.id;
  };
  Goto.prototype.copy_h6js3p$ = function (id) {
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
  Continue.prototype.visitChildren_jolnm7$ = function (visit) {
  };
  Continue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Continue',
    interfaces: [Stm]
  };
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
  Break.prototype.visitChildren_jolnm7$ = function (visit) {
  };
  Break.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Break',
    interfaces: [Stm]
  };
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
  Return.prototype.visitChildren_jolnm7$ = function (visit) {
    invoke(visit, this.expr);
  };
  Return.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Return',
    interfaces: [Stm]
  };
  Return.prototype.component1 = function () {
    return this.expr;
  };
  Return.prototype.copy_ta7bue$ = function (expr) {
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
    this.bodyCases_au789q$_0 = lazy(SwitchBase$bodyCases$lambda(this));
  }
  Object.defineProperty(SwitchBase.prototype, 'bodyCases', {
    get: function () {
      return this.bodyCases_au789q$_0.value;
    }
  });
  SwitchBase.prototype.visitChildren_jolnm7$ = function (visit) {
    invoke_1(visit, this.subject, this.body);
  };
  function SwitchBase$bodyCases$lambda$lambda(it) {
    return Kotlin.isType(it, CaseStm) ? -1 : 1;
  }
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
  SwitchBase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SwitchBase',
    interfaces: [Stm]
  };
  function Switch(subject, body) {
    SwitchBase.call(this);
    this.subject_fxpdaw$_0 = subject;
    this.body_ggpy9u$_0 = body;
  }
  Object.defineProperty(Switch.prototype, 'subject', {
    get: function () {
      return this.subject_fxpdaw$_0;
    }
  });
  Object.defineProperty(Switch.prototype, 'body', {
    get: function () {
      return this.body_ggpy9u$_0;
    }
  });
  Switch.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Switch',
    interfaces: [SwitchBase]
  };
  Switch.prototype.component1 = function () {
    return this.subject;
  };
  Switch.prototype.component2 = function () {
    return this.body;
  };
  Switch.prototype.copy_cmpscw$ = function (subject, body) {
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
    this.subject_37tn5y$_0 = subject;
    this.body_eunrhc$_0 = body;
  }
  Object.defineProperty(SwitchWithoutFallthrough.prototype, 'subject', {
    get: function () {
      return this.subject_37tn5y$_0;
    }
  });
  Object.defineProperty(SwitchWithoutFallthrough.prototype, 'body', {
    get: function () {
      return this.body_eunrhc$_0;
    }
  });
  SwitchWithoutFallthrough.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SwitchWithoutFallthrough',
    interfaces: [SwitchBase]
  };
  SwitchWithoutFallthrough.prototype.component1 = function () {
    return this.subject;
  };
  SwitchWithoutFallthrough.prototype.component2 = function () {
    return this.body;
  };
  SwitchWithoutFallthrough.prototype.copy_cmpscw$ = function (subject, body) {
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
  ExprStm.prototype.visitChildren_jolnm7$ = function (visit) {
    invoke(visit, this.expr);
  };
  ExprStm.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ExprStm',
    interfaces: [Stm]
  };
  ExprStm.prototype.component1 = function () {
    return this.expr;
  };
  ExprStm.prototype.copy_ta7bue$ = function (expr) {
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
  LabeledStm.prototype.visitChildren_jolnm7$ = function (visit) {
    invoke_1(visit, this.id, this.stm);
  };
  LabeledStm.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LabeledStm',
    interfaces: [Stm]
  };
  LabeledStm.prototype.component1 = function () {
    return this.id;
  };
  LabeledStm.prototype.component2 = function () {
    return this.stm;
  };
  LabeledStm.prototype.copy_cio12l$ = function (id, stm) {
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
  DefaultCaseStm.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DefaultCaseStm',
    interfaces: [Stm]
  };
  function CaseStm(expr, stm) {
    DefaultCaseStm.call(this);
    this.expr = expr;
    this.stm_i9xgqo$_0 = stm;
  }
  Object.defineProperty(CaseStm.prototype, 'stm', {
    get: function () {
      return this.stm_i9xgqo$_0;
    }
  });
  CaseStm.prototype.visitChildren_jolnm7$ = function (visit) {
    invoke_1(visit, this.expr, this.stm);
  };
  Object.defineProperty(CaseStm.prototype, 'optExpr', {
    get: function () {
      return this.expr;
    }
  });
  CaseStm.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CaseStm',
    interfaces: [DefaultCaseStm]
  };
  CaseStm.prototype.component1 = function () {
    return this.expr;
  };
  CaseStm.prototype.component2 = function () {
    return this.stm;
  };
  CaseStm.prototype.copy_ijs2s3$ = function (expr, stm) {
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
    this.stm_2u2hin$_0 = stm;
  }
  Object.defineProperty(DefaultStm.prototype, 'stm', {
    get: function () {
      return this.stm_2u2hin$_0;
    }
  });
  DefaultStm.prototype.visitChildren_jolnm7$ = function (visit) {
    visit.invoke_o9id9e$(this.stm);
  };
  Object.defineProperty(DefaultStm.prototype, 'optExpr', {
    get: function () {
      return null;
    }
  });
  DefaultStm.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DefaultStm',
    interfaces: [DefaultCaseStm]
  };
  DefaultStm.prototype.component1 = function () {
    return this.stm;
  };
  DefaultStm.prototype.copy_o9lo4n$ = function (stm) {
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
  Stms.prototype.visitChildren_jolnm7$ = function (visit) {
    invoke_0(visit, this.stms);
  };
  Stms.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Stms',
    interfaces: [Stm]
  };
  Stms.prototype.component1 = function () {
    return this.stms;
  };
  Stms.prototype.copy_q478ip$ = function (stms) {
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
  function stms($receiver) {
    return Kotlin.isType($receiver, Stms) ? $receiver : new Stms(listOf($receiver));
  }
  function CParamBase() {
    Node.call(this);
  }
  CParamBase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CParamBase',
    interfaces: [Node]
  };
  function CParamVariadic(dummy) {
    if (dummy === void 0)
      dummy = Unit;
    CParamBase.call(this);
    this.dummy = dummy;
    this.type_1kaaw5$_0 = VariadicType_getInstance();
  }
  Object.defineProperty(CParamVariadic.prototype, 'type', {
    get: function () {
      return this.type_1kaaw5$_0;
    }
  });
  CParamVariadic.prototype.visitChildren_jolnm7$ = function (visit) {
  };
  CParamVariadic.prototype.toString = function () {
    return '...';
  };
  CParamVariadic.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CParamVariadic',
    interfaces: [CParamBase]
  };
  CParamVariadic.prototype.component1 = function () {
    return this.dummy;
  };
  CParamVariadic.prototype.copy_s877gv$ = function (dummy) {
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
    this.type_2o8hcs$_0 = type;
    this.nameId = nameId;
  }
  Object.defineProperty(CParam.prototype, 'type', {
    get: function () {
      return this.type_2o8hcs$_0;
    }
  });
  Object.defineProperty(CParam.prototype, 'name', {
    get: function () {
      return this.nameId.id;
    }
  });
  CParam.prototype.visitChildren_jolnm7$ = function (visit) {
    invoke_1(visit, this.decl, this.nameId);
  };
  CParam.prototype.toString = function () {
    return this.type.toString() + ' ' + this.name;
  };
  CParam.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CParam',
    interfaces: [CParamBase]
  };
  CParam.prototype.component1 = function () {
    return this.decl;
  };
  CParam.prototype.component2 = function () {
    return this.type;
  };
  CParam.prototype.component3 = function () {
    return this.nameId;
  };
  CParam.prototype.copy_g1xgl$ = function (decl, type, nameId) {
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
  function Decl() {
    Stm.call(this);
  }
  Decl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Decl',
    interfaces: [Stm]
  };
  function ParsedDeclaration(name, type, init) {
    this.name = name;
    this.type = type;
    this.init = init;
  }
  ParsedDeclaration.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ParsedDeclaration',
    interfaces: []
  };
  ParsedDeclaration.prototype.component1 = function () {
    return this.name;
  };
  ParsedDeclaration.prototype.component2 = function () {
    return this.type;
  };
  ParsedDeclaration.prototype.component3 = function () {
    return this.init;
  };
  ParsedDeclaration.prototype.copy_xgxmie$ = function (name, type, init) {
    return new ParsedDeclaration(name === void 0 ? this.name : name, type === void 0 ? this.type : type, init === void 0 ? this.init : init);
  };
  ParsedDeclaration.prototype.toString = function () {
    return 'ParsedDeclaration(name=' + Kotlin.toString(this.name) + (', type=' + Kotlin.toString(this.type)) + (', init=' + Kotlin.toString(this.init)) + ')';
  };
  ParsedDeclaration.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.init) | 0;
    return result;
  };
  ParsedDeclaration.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.type, other.type) && Kotlin.equals(this.init, other.init)))));
  };
  function VarDeclaration(specifiers, initDeclaratorList) {
    Decl.call(this);
    this.specifiers = specifiers;
    this.initDeclaratorList = initDeclaratorList;
    this.parsedBaseType = toFinalType(this.specifiers);
    var $receiver = this.initDeclaratorList;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(new ParsedDeclaration(getName(item.declarator), withDeclarator(this.parsedBaseType, item.declarator), item.initializer));
    }
    this.parsedList = destination;
  }
  VarDeclaration.prototype.visitChildren_jolnm7$ = function (visit) {
    visit.invoke_o9id9e$(this.specifiers);
    invoke_0(visit, this.initDeclaratorList);
  };
  VarDeclaration.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VarDeclaration',
    interfaces: [Decl]
  };
  VarDeclaration.prototype.component1 = function () {
    return this.specifiers;
  };
  VarDeclaration.prototype.component2 = function () {
    return this.initDeclaratorList;
  };
  VarDeclaration.prototype.copy_ghufkm$ = function (specifiers, initDeclaratorList) {
    return new VarDeclaration(specifiers === void 0 ? this.specifiers : specifiers, initDeclaratorList === void 0 ? this.initDeclaratorList : initDeclaratorList);
  };
  VarDeclaration.prototype.toString = function () {
    return 'VarDeclaration(specifiers=' + Kotlin.toString(this.specifiers) + (', initDeclaratorList=' + Kotlin.toString(this.initDeclaratorList)) + ')';
  };
  VarDeclaration.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.specifiers) | 0;
    result = result * 31 + Kotlin.hashCode(this.initDeclaratorList) | 0;
    return result;
  };
  VarDeclaration.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.specifiers, other.specifiers) && Kotlin.equals(this.initDeclaratorList, other.initDeclaratorList)))));
  };
  function FuncDeclaration(rettype, name, params, body, varargs, funcType) {
    Decl.call(this);
    this.rettype = rettype;
    this.name = name;
    this.params = params;
    this.body = body;
    this.varargs = varargs;
    this.funcType = funcType;
    this.paramsWithVariadic = this.varargs ? plus(this.params, listOf(new CParamVariadic())) : this.params;
  }
  FuncDeclaration.prototype.visitChildren_jolnm7$ = function (visit) {
    invoke_2(visit, this.name, this.rettype, this.body);
  };
  FuncDeclaration.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FuncDeclaration',
    interfaces: [Decl]
  };
  FuncDeclaration.prototype.component1 = function () {
    return this.rettype;
  };
  FuncDeclaration.prototype.component2 = function () {
    return this.name;
  };
  FuncDeclaration.prototype.component3 = function () {
    return this.params;
  };
  FuncDeclaration.prototype.component4 = function () {
    return this.body;
  };
  FuncDeclaration.prototype.component5 = function () {
    return this.varargs;
  };
  FuncDeclaration.prototype.component6 = function () {
    return this.funcType;
  };
  FuncDeclaration.prototype.copy_n9sltc$ = function (rettype, name, params, body, varargs, funcType) {
    return new FuncDeclaration(rettype === void 0 ? this.rettype : rettype, name === void 0 ? this.name : name, params === void 0 ? this.params : params, body === void 0 ? this.body : body, varargs === void 0 ? this.varargs : varargs, funcType === void 0 ? this.funcType : funcType);
  };
  FuncDeclaration.prototype.toString = function () {
    return 'FuncDeclaration(rettype=' + Kotlin.toString(this.rettype) + (', name=' + Kotlin.toString(this.name)) + (', params=' + Kotlin.toString(this.params)) + (', body=' + Kotlin.toString(this.body)) + (', varargs=' + Kotlin.toString(this.varargs)) + (', funcType=' + Kotlin.toString(this.funcType)) + ')';
  };
  FuncDeclaration.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.rettype) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.params) | 0;
    result = result * 31 + Kotlin.hashCode(this.body) | 0;
    result = result * 31 + Kotlin.hashCode(this.varargs) | 0;
    result = result * 31 + Kotlin.hashCode(this.funcType) | 0;
    return result;
  };
  FuncDeclaration.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.rettype, other.rettype) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.params, other.params) && Kotlin.equals(this.body, other.body) && Kotlin.equals(this.varargs, other.varargs) && Kotlin.equals(this.funcType, other.funcType)))));
  };
  function CastExpr(expr, type) {
    Expr.call(this);
    this.expr = expr;
    this.type_gecthi$_0 = type;
  }
  Object.defineProperty(CastExpr.prototype, 'type', {
    get: function () {
      return this.type_gecthi$_0;
    }
  });
  CastExpr.prototype.visitChildren_jolnm7$ = function (visit) {
    visit.invoke_o9id9e$(this.expr);
  };
  CastExpr.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CastExpr',
    interfaces: [Expr]
  };
  CastExpr.prototype.component1 = function () {
    return this.expr;
  };
  CastExpr.prototype.component2 = function () {
    return this.type;
  };
  CastExpr.prototype.copy_976sxh$ = function (expr, type) {
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
  SizeOfAlignExprBase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SizeOfAlignExprBase',
    interfaces: [Expr]
  };
  function SizeOfAlignTypeExpr(kind, typeName) {
    SizeOfAlignExprBase.call(this);
    this.kind = kind;
    this.typeName = typeName;
    this.ftype_qv2mus$_0 = lazy(SizeOfAlignTypeExpr$ftype$lambda(this));
  }
  Object.defineProperty(SizeOfAlignTypeExpr.prototype, 'type', {
    get: function () {
      return Type$Companion_getInstance().INT;
    }
  });
  Object.defineProperty(SizeOfAlignTypeExpr.prototype, 'ftype', {
    get: function () {
      return this.ftype_qv2mus$_0.value;
    }
  });
  SizeOfAlignTypeExpr.prototype.visitChildren_jolnm7$ = function (visit) {
    visit.invoke_o9id9e$(this.typeName);
  };
  function SizeOfAlignTypeExpr$ftype$lambda(this$SizeOfAlignTypeExpr) {
    return function () {
      return withDeclarator_0(toFinalType(this$SizeOfAlignTypeExpr.typeName.specifiers), this$SizeOfAlignTypeExpr.typeName.abstractDecl);
    };
  }
  SizeOfAlignTypeExpr.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SizeOfAlignTypeExpr',
    interfaces: [SizeOfAlignExprBase]
  };
  SizeOfAlignTypeExpr.prototype.component1 = function () {
    return this.kind;
  };
  SizeOfAlignTypeExpr.prototype.component2 = function () {
    return this.typeName;
  };
  SizeOfAlignTypeExpr.prototype.copy_p1n71l$ = function (kind, typeName) {
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
    this.ftype_9ksij3$_0 = this.expr.type;
  }
  Object.defineProperty(SizeOfAlignExprExpr.prototype, 'ftype', {
    get: function () {
      return this.ftype_9ksij3$_0;
    }
  });
  Object.defineProperty(SizeOfAlignExprExpr.prototype, 'type', {
    get: function () {
      return Type$Companion_getInstance().INT;
    }
  });
  SizeOfAlignExprExpr.prototype.visitChildren_jolnm7$ = function (visit) {
    visit.invoke_o9id9e$(this.expr);
  };
  SizeOfAlignExprExpr.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SizeOfAlignExprExpr',
    interfaces: [SizeOfAlignExprBase]
  };
  SizeOfAlignExprExpr.prototype.component1 = function () {
    return this.expr;
  };
  SizeOfAlignExprExpr.prototype.copy_o9ctcl$ = function (expr) {
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
  function TenaryExpr(cond, etrue, efalse) {
    Expr.call(this);
    this.cond = cond;
    this.etrue = etrue;
    this.efalse = efalse;
  }
  TenaryExpr.prototype.visitChildren_jolnm7$ = function (visit) {
    invoke_2(visit, this.cond, this.etrue, this.efalse);
  };
  Object.defineProperty(TenaryExpr.prototype, 'type', {
    get: function () {
      return Type$Companion_getInstance().common_vyudg4$(this.etrue.type, this.efalse.type);
    }
  });
  TenaryExpr.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TenaryExpr',
    interfaces: [Expr]
  };
  TenaryExpr.prototype.component1 = function () {
    return this.cond;
  };
  TenaryExpr.prototype.component2 = function () {
    return this.etrue;
  };
  TenaryExpr.prototype.component3 = function () {
    return this.efalse;
  };
  TenaryExpr.prototype.copy_q4kis9$ = function (cond, etrue, efalse) {
    return new TenaryExpr(cond === void 0 ? this.cond : cond, etrue === void 0 ? this.etrue : etrue, efalse === void 0 ? this.efalse : efalse);
  };
  TenaryExpr.prototype.toString = function () {
    return 'TenaryExpr(cond=' + Kotlin.toString(this.cond) + (', etrue=' + Kotlin.toString(this.etrue)) + (', efalse=' + Kotlin.toString(this.efalse)) + ')';
  };
  TenaryExpr.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.cond) | 0;
    result = result * 31 + Kotlin.hashCode(this.etrue) | 0;
    result = result * 31 + Kotlin.hashCode(this.efalse) | 0;
    return result;
  };
  TenaryExpr.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.cond, other.cond) && Kotlin.equals(this.etrue, other.etrue) && Kotlin.equals(this.efalse, other.efalse)))));
  };
  function ParsedProgram(program, parser, preprocessorInfo) {
    this.program = program;
    this.parser = parser;
    this.preprocessorInfo = preprocessorInfo;
  }
  ParsedProgram.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ParsedProgram',
    interfaces: []
  };
  ParsedProgram.prototype.component1 = function () {
    return this.program;
  };
  ParsedProgram.prototype.component2 = function () {
    return this.parser;
  };
  ParsedProgram.prototype.component3 = function () {
    return this.preprocessorInfo;
  };
  ParsedProgram.prototype.copy_mvu3bg$ = function (program, parser, preprocessorInfo) {
    return new ParsedProgram(program === void 0 ? this.program : program, parser === void 0 ? this.parser : parser, preprocessorInfo === void 0 ? this.preprocessorInfo : preprocessorInfo);
  };
  ParsedProgram.prototype.toString = function () {
    return 'ParsedProgram(program=' + Kotlin.toString(this.program) + (', parser=' + Kotlin.toString(this.parser)) + (', preprocessorInfo=' + Kotlin.toString(this.preprocessorInfo)) + ')';
  };
  ParsedProgram.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.program) | 0;
    result = result * 31 + Kotlin.hashCode(this.parser) | 0;
    result = result * 31 + Kotlin.hashCode(this.preprocessorInfo) | 0;
    return result;
  };
  ParsedProgram.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.program, other.program) && Kotlin.equals(this.parser, other.parser) && Kotlin.equals(this.preprocessorInfo, other.preprocessorInfo)))));
  };
  function Program(decls) {
    Node.call(this);
    this.decls = decls;
    var $receiver = this.decls;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (Kotlin.isType(element, VarDeclaration))
        destination.add_11rb$(element);
    }
    this.declarations = destination;
    var $receiver_0 = this.decls;
    var destination_0 = ArrayList_init();
    var tmp$_0;
    tmp$_0 = $receiver_0.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      if (Kotlin.isType(element_0, FuncDeclaration))
        destination_0.add_11rb$(element_0);
    }
    this.funcDecl = destination_0;
    var $receiver_1 = this.funcDecl;
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault($receiver_1, 10)), 16);
    var destination_1 = LinkedHashMap_init_0(capacity);
    var tmp$_1;
    tmp$_1 = $receiver_1.iterator();
    while (tmp$_1.hasNext()) {
      var element_1 = tmp$_1.next();
      destination_1.put_xwzc9p$(element_1.name.name, element_1);
    }
    this.funcDeclByName = destination_1;
  }
  Program.prototype.getFunctionOrNull_61zpoe$ = function (name) {
    return this.funcDeclByName.get_11rb$(name);
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
  Program.prototype.visitChildren_jolnm7$ = function (visit) {
    invoke_0(visit, this.decls);
  };
  Program.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Program',
    interfaces: [Node]
  };
  Program.prototype.component1 = function () {
    return this.decls;
  };
  Program.prototype.copy_siiec9$ = function (decls) {
    return new Program(decls === void 0 ? this.decls : decls);
  };
  Program.prototype.toString = function () {
    return 'Program(decls=' + Kotlin.toString(this.decls) + ')';
  };
  Program.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.decls) | 0;
    return result;
  };
  Program.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.decls, other.decls))));
  };
  function DesignOptInit(design, initializer) {
    Node.call(this);
    this.design = design;
    this.initializer = initializer;
  }
  DesignOptInit.prototype.visitChildren_jolnm7$ = function (visit) {
    invoke_1(visit, this.design, this.initializer);
  };
  DesignOptInit.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DesignOptInit',
    interfaces: [Node]
  };
  DesignOptInit.prototype.component1 = function () {
    return this.design;
  };
  DesignOptInit.prototype.component2 = function () {
    return this.initializer;
  };
  DesignOptInit.prototype.copy_dir88m$ = function (design, initializer) {
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
  function ArrayInitExpr(items, ltype) {
    Expr.call(this);
    this.items = items;
    this.ltype = ltype;
  }
  ArrayInitExpr.prototype.visitChildren_jolnm7$ = function (visit) {
    invoke_0(visit, this.items);
  };
  Object.defineProperty(ArrayInitExpr.prototype, 'type', {
    get: function () {
      return this.ltype;
    }
  });
  ArrayInitExpr.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ArrayInitExpr',
    interfaces: [Expr]
  };
  ArrayInitExpr.prototype.component1 = function () {
    return this.items;
  };
  ArrayInitExpr.prototype.component2 = function () {
    return this.ltype;
  };
  ArrayInitExpr.prototype.copy_5iyp38$ = function (items, ltype) {
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
  function Declarator() {
    Node.call(this);
  }
  Declarator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Declarator',
    interfaces: [Node]
  };
  function ParameterDecl(specs, declarator) {
    Node.call(this);
    this.specs = specs;
    this.declarator = declarator;
  }
  ParameterDecl.prototype.visitChildren_jolnm7$ = function (visit) {
    invoke_1(visit, this.specs, this.declarator);
  };
  ParameterDecl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ParameterDecl',
    interfaces: [Node]
  };
  ParameterDecl.prototype.component1 = function () {
    return this.specs;
  };
  ParameterDecl.prototype.component2 = function () {
    return this.declarator;
  };
  ParameterDecl.prototype.copy_6l1ne3$ = function (specs, declarator) {
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
  function StructDeclarator(declarator, bit) {
    Node.call(this);
    this.declarator = declarator;
    this.bit = bit;
  }
  StructDeclarator.prototype.visitChildren_jolnm7$ = function (visit) {
    invoke_1(visit, this.declarator, this.bit);
  };
  StructDeclarator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StructDeclarator',
    interfaces: [Node]
  };
  StructDeclarator.prototype.component1 = function () {
    return this.declarator;
  };
  StructDeclarator.prototype.component2 = function () {
    return this.bit;
  };
  StructDeclarator.prototype.copy_akob7b$ = function (declarator, bit) {
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
  StructDeclaration.prototype.visitChildren_jolnm7$ = function (visit) {
    visit.invoke_o9id9e$(this.specifiers);
    invoke_0(visit, this.declarators);
  };
  StructDeclaration.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StructDeclaration',
    interfaces: [Node]
  };
  StructDeclaration.prototype.component1 = function () {
    return this.specifiers;
  };
  StructDeclaration.prototype.component2 = function () {
    return this.declarators;
  };
  StructDeclaration.prototype.copy_pzu3y3$ = function (specifiers, declarators) {
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
  function Pointer(qualifiers, parent) {
    Node.call(this);
    this.qualifiers = qualifiers;
    this.parent = parent;
  }
  Pointer.prototype.visitChildren_jolnm7$ = function (visit) {
    invoke_0(visit, this.qualifiers);
    invoke(visit, this.parent);
  };
  Pointer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Pointer',
    interfaces: [Node]
  };
  Pointer.prototype.component1 = function () {
    return this.qualifiers;
  };
  Pointer.prototype.component2 = function () {
    return this.parent;
  };
  Pointer.prototype.copy_9uwzv5$ = function (qualifiers, parent) {
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
  function VarargDeclarator(id) {
    Declarator.call(this);
    this.id = id;
  }
  VarargDeclarator.prototype.visitChildren_jolnm7$ = function (visit) {
    visit.invoke_o9id9e$(this.id);
  };
  VarargDeclarator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VarargDeclarator',
    interfaces: [Declarator]
  };
  VarargDeclarator.prototype.component1 = function () {
    return this.id;
  };
  VarargDeclarator.prototype.copy_ks2zs6$ = function (id) {
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
  DeclaratorWithPointer.prototype.visitChildren_jolnm7$ = function (visit) {
    invoke_1(visit, this.pointer, this.declarator);
  };
  DeclaratorWithPointer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DeclaratorWithPointer',
    interfaces: [Declarator]
  };
  DeclaratorWithPointer.prototype.component1 = function () {
    return this.pointer;
  };
  DeclaratorWithPointer.prototype.component2 = function () {
    return this.declarator;
  };
  DeclaratorWithPointer.prototype.copy_jr89s2$ = function (pointer, declarator) {
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
  IdentifierDeclarator.prototype.visitChildren_jolnm7$ = function (visit) {
    visit.invoke_o9id9e$(this.id);
  };
  IdentifierDeclarator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IdentifierDeclarator',
    interfaces: [Declarator]
  };
  IdentifierDeclarator.prototype.component1 = function () {
    return this.id;
  };
  IdentifierDeclarator.prototype.copy_h6js3p$ = function (id) {
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
  function CompoundDeclarator(decls) {
    Declarator.call(this);
    this.decls = decls;
  }
  CompoundDeclarator.prototype.visitChildren_jolnm7$ = function (visit) {
    invoke_0(visit, this.decls);
  };
  CompoundDeclarator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CompoundDeclarator',
    interfaces: [Declarator]
  };
  CompoundDeclarator.prototype.component1 = function () {
    return this.decls;
  };
  CompoundDeclarator.prototype.copy_i8rbb4$ = function (decls) {
    return new CompoundDeclarator(decls === void 0 ? this.decls : decls);
  };
  CompoundDeclarator.prototype.toString = function () {
    return 'CompoundDeclarator(decls=' + Kotlin.toString(this.decls) + ')';
  };
  CompoundDeclarator.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.decls) | 0;
    return result;
  };
  CompoundDeclarator.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.decls, other.decls))));
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
  ParameterDeclarator.prototype.visitChildren_jolnm7$ = function (visit) {
    visit.invoke_o9id9e$(this.base);
    invoke_0(visit, this.decls);
  };
  ParameterDeclarator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ParameterDeclarator',
    interfaces: [Declarator]
  };
  ParameterDeclarator.prototype.component1 = function () {
    return this.base;
  };
  ParameterDeclarator.prototype.component2 = function () {
    return this.decls;
  };
  ParameterDeclarator.prototype.copy_bbmddf$ = function (base, decls) {
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
  ArrayDeclarator.prototype.visitChildren_jolnm7$ = function (visit) {
    visit.invoke_o9id9e$(this.base);
    invoke_0(visit, this.typeQualifiers);
    invoke(visit, this.expr);
  };
  ArrayDeclarator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ArrayDeclarator',
    interfaces: [Declarator]
  };
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
  ArrayDeclarator.prototype.copy_ybxiqo$ = function (base, typeQualifiers, expr, static0, static1) {
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
  function DeclaratorPostfix() {
    Node.call(this);
  }
  DeclaratorPostfix.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DeclaratorPostfix',
    interfaces: [Node]
  };
  function ParamDeclaratorPostfix(params) {
    DeclaratorPostfix.call(this);
    this.params = params;
  }
  ParamDeclaratorPostfix.prototype.visitChildren_jolnm7$ = function (visit) {
    invoke_0(visit, this.params);
  };
  ParamDeclaratorPostfix.prototype.toDeclarator_i905yn$ = function (base) {
    return new ParameterDeclarator(base, this.params);
  };
  ParamDeclaratorPostfix.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ParamDeclaratorPostfix',
    interfaces: [DeclaratorPostfix]
  };
  ParamDeclaratorPostfix.prototype.component1 = function () {
    return this.params;
  };
  ParamDeclaratorPostfix.prototype.copy_3s3114$ = function (params) {
    return new ParamDeclaratorPostfix(params === void 0 ? this.params : params);
  };
  ParamDeclaratorPostfix.prototype.toString = function () {
    return 'ParamDeclaratorPostfix(params=' + Kotlin.toString(this.params) + ')';
  };
  ParamDeclaratorPostfix.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.params) | 0;
    return result;
  };
  ParamDeclaratorPostfix.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.params, other.params))));
  };
  function ArrayDeclaratorPostfix(typeQualifiers, expr, static0, static1) {
    DeclaratorPostfix.call(this);
    this.typeQualifiers = typeQualifiers;
    this.expr = expr;
    this.static0 = static0;
    this.static1 = static1;
  }
  ArrayDeclaratorPostfix.prototype.visitChildren_jolnm7$ = function (visit) {
    invoke_0(visit, this.typeQualifiers);
    invoke(visit, this.expr);
  };
  ArrayDeclaratorPostfix.prototype.toDeclarator_i905yn$ = function (base) {
    return new ArrayDeclarator(base, this.typeQualifiers, this.expr, this.static0, this.static1);
  };
  ArrayDeclaratorPostfix.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ArrayDeclaratorPostfix',
    interfaces: [DeclaratorPostfix]
  };
  ArrayDeclaratorPostfix.prototype.component1 = function () {
    return this.typeQualifiers;
  };
  ArrayDeclaratorPostfix.prototype.component2 = function () {
    return this.expr;
  };
  ArrayDeclaratorPostfix.prototype.component3 = function () {
    return this.static0;
  };
  ArrayDeclaratorPostfix.prototype.component4 = function () {
    return this.static1;
  };
  ArrayDeclaratorPostfix.prototype.copy_26u9qd$ = function (typeQualifiers, expr, static0, static1) {
    return new ArrayDeclaratorPostfix(typeQualifiers === void 0 ? this.typeQualifiers : typeQualifiers, expr === void 0 ? this.expr : expr, static0 === void 0 ? this.static0 : static0, static1 === void 0 ? this.static1 : static1);
  };
  ArrayDeclaratorPostfix.prototype.toString = function () {
    return 'ArrayDeclaratorPostfix(typeQualifiers=' + Kotlin.toString(this.typeQualifiers) + (', expr=' + Kotlin.toString(this.expr)) + (', static0=' + Kotlin.toString(this.static0)) + (', static1=' + Kotlin.toString(this.static1)) + ')';
  };
  ArrayDeclaratorPostfix.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.typeQualifiers) | 0;
    result = result * 31 + Kotlin.hashCode(this.expr) | 0;
    result = result * 31 + Kotlin.hashCode(this.static0) | 0;
    result = result * 31 + Kotlin.hashCode(this.static1) | 0;
    return result;
  };
  ArrayDeclaratorPostfix.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.typeQualifiers, other.typeQualifiers) && Kotlin.equals(this.expr, other.expr) && Kotlin.equals(this.static0, other.static0) && Kotlin.equals(this.static1, other.static1)))));
  };
  function Designator() {
    Node.call(this);
  }
  Designator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Designator',
    interfaces: [Node]
  };
  function ArrayAccessDesignator(constant) {
    Designator.call(this);
    this.constant = constant;
  }
  ArrayAccessDesignator.prototype.visitChildren_jolnm7$ = function (visit) {
    visit.invoke_o9id9e$(this.constant);
  };
  ArrayAccessDesignator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ArrayAccessDesignator',
    interfaces: [Designator]
  };
  ArrayAccessDesignator.prototype.component1 = function () {
    return this.constant;
  };
  ArrayAccessDesignator.prototype.copy_1e4k7s$ = function (constant) {
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
  FieldAccessDesignator.prototype.visitChildren_jolnm7$ = function (visit) {
    visit.invoke_o9id9e$(this.field);
  };
  FieldAccessDesignator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FieldAccessDesignator',
    interfaces: [Designator]
  };
  FieldAccessDesignator.prototype.component1 = function () {
    return this.field;
  };
  FieldAccessDesignator.prototype.copy_4b8ngb$ = function (field) {
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
  DesignatorList.prototype.visitChildren_jolnm7$ = function (visit) {
    invoke_0(visit, this.list);
  };
  DesignatorList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DesignatorList',
    interfaces: [Node]
  };
  DesignatorList.prototype.component1 = function () {
    return this.list;
  };
  DesignatorList.prototype.copy_ekigt$ = function (list) {
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
  function InitDeclarator(declarator, initializer, type) {
    Node.call(this);
    this.declarator = declarator;
    this.initializer = initializer;
    this.type = type;
  }
  InitDeclarator.prototype.visitChildren_jolnm7$ = function (visit) {
    invoke_1(visit, this.declarator, this.initializer);
  };
  InitDeclarator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InitDeclarator',
    interfaces: [Node]
  };
  InitDeclarator.prototype.component1 = function () {
    return this.declarator;
  };
  InitDeclarator.prototype.component2 = function () {
    return this.initializer;
  };
  InitDeclarator.prototype.component3 = function () {
    return this.type;
  };
  InitDeclarator.prototype.copy_42gxiz$ = function (declarator, initializer, type) {
    return new InitDeclarator(declarator === void 0 ? this.declarator : declarator, initializer === void 0 ? this.initializer : initializer, type === void 0 ? this.type : type);
  };
  InitDeclarator.prototype.toString = function () {
    return 'InitDeclarator(declarator=' + Kotlin.toString(this.declarator) + (', initializer=' + Kotlin.toString(this.initializer)) + (', type=' + Kotlin.toString(this.type)) + ')';
  };
  InitDeclarator.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.declarator) | 0;
    result = result * 31 + Kotlin.hashCode(this.initializer) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    return result;
  };
  InitDeclarator.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.declarator, other.declarator) && Kotlin.equals(this.initializer, other.initializer) && Kotlin.equals(this.type, other.type)))));
  };
  function TypeSpecifier() {
    Node.call(this);
  }
  TypeSpecifier.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TypeSpecifier',
    interfaces: [Node]
  };
  function VariadicTypeSpecifier(id) {
    TypeSpecifier.call(this);
    this.id = id;
  }
  VariadicTypeSpecifier.prototype.visitChildren_jolnm7$ = function (visit) {
    visit.invoke_o9id9e$(this.id);
  };
  VariadicTypeSpecifier.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VariadicTypeSpecifier',
    interfaces: [TypeSpecifier]
  };
  VariadicTypeSpecifier.prototype.component1 = function () {
    return this.id;
  };
  VariadicTypeSpecifier.prototype.copy_h6js3p$ = function (id) {
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
  function ListTypeSpecifier(items) {
    TypeSpecifier.call(this);
    this.items = items;
    var $receiver = this.items;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (Kotlin.isType(element, StorageClassSpecifier))
        destination.add_11rb$(element);
    }
    this.storages = destination;
    var $receiver_0 = this.storages;
    var any$result;
    any$break: do {
      var tmp$_0;
      if (Kotlin.isType($receiver_0, Collection) && $receiver_0.isEmpty()) {
        any$result = false;
        break any$break;
      }
      tmp$_0 = $receiver_0.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        if (element_0.kind === StorageClassSpecifier$Kind$TYPEDEF_getInstance()) {
          any$result = true;
          break any$break;
        }
      }
      any$result = false;
    }
     while (false);
    this.hasTypedef = any$result;
    var $receiver_1 = this.storages;
    var any$result_0;
    any$break: do {
      var tmp$_1;
      if (Kotlin.isType($receiver_1, Collection) && $receiver_1.isEmpty()) {
        any$result_0 = false;
        break any$break;
      }
      tmp$_1 = $receiver_1.iterator();
      while (tmp$_1.hasNext()) {
        var element_1 = tmp$_1.next();
        if (element_1.kind === StorageClassSpecifier$Kind$STATIC_getInstance()) {
          any$result_0 = true;
          break any$break;
        }
      }
      any$result_0 = false;
    }
     while (false);
    this.isStatic = any$result_0;
    var $receiver_2 = this.storages;
    var any$result_1;
    any$break: do {
      var tmp$_2;
      if (Kotlin.isType($receiver_2, Collection) && $receiver_2.isEmpty()) {
        any$result_1 = false;
        break any$break;
      }
      tmp$_2 = $receiver_2.iterator();
      while (tmp$_2.hasNext()) {
        var element_2 = tmp$_2.next();
        if (element_2.kind === StorageClassSpecifier$Kind$EXTERN_getInstance()) {
          any$result_1 = true;
          break any$break;
        }
      }
      any$result_1 = false;
    }
     while (false);
    this.isExtern = any$result_1;
    var $receiver_3 = this.storages;
    var any$result_2;
    any$break: do {
      var tmp$_3;
      if (Kotlin.isType($receiver_3, Collection) && $receiver_3.isEmpty()) {
        any$result_2 = false;
        break any$break;
      }
      tmp$_3 = $receiver_3.iterator();
      while (tmp$_3.hasNext()) {
        var element_3 = tmp$_3.next();
        if (element_3.kind === StorageClassSpecifier$Kind$THREAD_LOCAL_getInstance()) {
          any$result_2 = true;
          break any$break;
        }
      }
      any$result_2 = false;
    }
     while (false);
    this.isThreadLocal = any$result_2;
    var $receiver_4 = this.storages;
    var any$result_3;
    any$break: do {
      var tmp$_4;
      if (Kotlin.isType($receiver_4, Collection) && $receiver_4.isEmpty()) {
        any$result_3 = false;
        break any$break;
      }
      tmp$_4 = $receiver_4.iterator();
      while (tmp$_4.hasNext()) {
        var element_4 = tmp$_4.next();
        if (element_4.kind === StorageClassSpecifier$Kind$AUTO_getInstance()) {
          any$result_3 = true;
          break any$break;
        }
      }
      any$result_3 = false;
    }
     while (false);
    this.isAuto = any$result_3;
    var $receiver_5 = this.storages;
    var any$result_4;
    any$break: do {
      var tmp$_5;
      if (Kotlin.isType($receiver_5, Collection) && $receiver_5.isEmpty()) {
        any$result_4 = false;
        break any$break;
      }
      tmp$_5 = $receiver_5.iterator();
      while (tmp$_5.hasNext()) {
        var element_5 = tmp$_5.next();
        if (element_5.kind === StorageClassSpecifier$Kind$REGISTER_getInstance()) {
          any$result_4 = true;
          break any$break;
        }
      }
      any$result_4 = false;
    }
     while (false);
    this.isRegister = any$result_4;
  }
  ListTypeSpecifier.prototype.isEmpty = function () {
    return this.items.isEmpty();
  };
  ListTypeSpecifier.prototype.visitChildren_jolnm7$ = function (visit) {
    invoke_0(visit, this.items);
  };
  ListTypeSpecifier.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ListTypeSpecifier',
    interfaces: [TypeSpecifier]
  };
  ListTypeSpecifier.prototype.component1 = function () {
    return this.items;
  };
  ListTypeSpecifier.prototype.copy_ff21d3$ = function (items) {
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
  function AtomicTypeSpecifier(id) {
    TypeSpecifier.call(this);
    this.id = id;
  }
  AtomicTypeSpecifier.prototype.visitChildren_jolnm7$ = function (visit) {
    visit.invoke_o9id9e$(this.id);
  };
  AtomicTypeSpecifier.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AtomicTypeSpecifier',
    interfaces: [TypeSpecifier]
  };
  AtomicTypeSpecifier.prototype.component1 = function () {
    return this.id;
  };
  AtomicTypeSpecifier.prototype.copy_o9id9e$ = function (id) {
    return new AtomicTypeSpecifier(id === void 0 ? this.id : id);
  };
  AtomicTypeSpecifier.prototype.toString = function () {
    return 'AtomicTypeSpecifier(id=' + Kotlin.toString(this.id) + ')';
  };
  AtomicTypeSpecifier.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    return result;
  };
  AtomicTypeSpecifier.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.id, other.id))));
  };
  function BasicTypeSpecifier(id) {
    TypeSpecifier.call(this);
    this.id = id;
  }
  BasicTypeSpecifier.prototype.visitChildren_jolnm7$ = function (visit) {
  };
  function BasicTypeSpecifier$Kind(name, ordinal, keyword) {
    Enum.call(this);
    this.keyword_sd5qkt$_0 = keyword;
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
  Object.defineProperty(BasicTypeSpecifier$Kind.prototype, 'keyword', {
    get: function () {
      return this.keyword_sd5qkt$_0;
    }
  });
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
  BasicTypeSpecifier$Kind$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [KeywordEnum$Companion]
  };
  var BasicTypeSpecifier$Kind$Companion_instance = null;
  function BasicTypeSpecifier$Kind$Companion_getInstance() {
    BasicTypeSpecifier$Kind_initFields();
    if (BasicTypeSpecifier$Kind$Companion_instance === null) {
      new BasicTypeSpecifier$Kind$Companion();
    }
    return BasicTypeSpecifier$Kind$Companion_instance;
  }
  BasicTypeSpecifier$Kind.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Kind',
    interfaces: [KeywordEnum, Enum]
  };
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
      default:throwISE('No enum constant com.soywiz.ktcc.parser.BasicTypeSpecifier.Kind.' + name);
    }
  }
  BasicTypeSpecifier$Kind.valueOf_61zpoe$ = BasicTypeSpecifier$Kind$valueOf;
  BasicTypeSpecifier.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BasicTypeSpecifier',
    interfaces: [TypeSpecifier]
  };
  BasicTypeSpecifier.prototype.component1 = function () {
    return this.id;
  };
  BasicTypeSpecifier.prototype.copy_segrn0$ = function (id) {
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
  function RefTypeSpecifier(id, type) {
    TypeSpecifier.call(this);
    this.id = id;
    this.type = type;
  }
  RefTypeSpecifier.prototype.visitChildren_jolnm7$ = function (visit) {
  };
  RefTypeSpecifier.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RefTypeSpecifier',
    interfaces: [TypeSpecifier]
  };
  RefTypeSpecifier.prototype.component1 = function () {
    return this.id;
  };
  RefTypeSpecifier.prototype.component2 = function () {
    return this.type;
  };
  RefTypeSpecifier.prototype.copy_qv1nho$ = function (id, type) {
    return new RefTypeSpecifier(id === void 0 ? this.id : id, type === void 0 ? this.type : type);
  };
  RefTypeSpecifier.prototype.toString = function () {
    return 'RefTypeSpecifier(id=' + Kotlin.toString(this.id) + (', type=' + Kotlin.toString(this.type)) + ')';
  };
  RefTypeSpecifier.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    return result;
  };
  RefTypeSpecifier.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.type, other.type)))));
  };
  function AnonymousTypeSpecifier(kind, id) {
    TypeSpecifier.call(this);
    this.kind = kind;
    this.id = id;
  }
  AnonymousTypeSpecifier.prototype.visitChildren_jolnm7$ = function (visit) {
    invoke(visit, this.id);
  };
  AnonymousTypeSpecifier.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnonymousTypeSpecifier',
    interfaces: [TypeSpecifier]
  };
  AnonymousTypeSpecifier.prototype.component1 = function () {
    return this.kind;
  };
  AnonymousTypeSpecifier.prototype.component2 = function () {
    return this.id;
  };
  AnonymousTypeSpecifier.prototype.copy_kd08lu$ = function (kind, id) {
    return new AnonymousTypeSpecifier(kind === void 0 ? this.kind : kind, id === void 0 ? this.id : id);
  };
  AnonymousTypeSpecifier.prototype.toString = function () {
    return 'AnonymousTypeSpecifier(kind=' + Kotlin.toString(this.kind) + (', id=' + Kotlin.toString(this.id)) + ')';
  };
  AnonymousTypeSpecifier.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.kind) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    return result;
  };
  AnonymousTypeSpecifier.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.kind, other.kind) && Kotlin.equals(this.id, other.id)))));
  };
  function StructUnionTypeSpecifier(kind, id, decls) {
    TypeSpecifier.call(this);
    this.kind = kind;
    this.id = id;
    this.decls = decls;
    this.info = new StructTypeInfo('UNKNOWN', new BasicTypeSpecifier(BasicTypeSpecifier$Kind$INT_getInstance()), new StructType(this), this, -1);
  }
  StructUnionTypeSpecifier.prototype.visitChildren_jolnm7$ = function (visit) {
    invoke(visit, this.id);
    invoke_0(visit, this.decls);
  };
  StructUnionTypeSpecifier.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StructUnionTypeSpecifier',
    interfaces: [TypeSpecifier]
  };
  StructUnionTypeSpecifier.prototype.component1 = function () {
    return this.kind;
  };
  StructUnionTypeSpecifier.prototype.component2 = function () {
    return this.id;
  };
  StructUnionTypeSpecifier.prototype.component3 = function () {
    return this.decls;
  };
  StructUnionTypeSpecifier.prototype.copy_c9gb8q$ = function (kind, id, decls) {
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
  function StructUnionRefTypeSpecifier(kind, id) {
    TypeSpecifier.call(this);
    this.kind = kind;
    this.id = id;
  }
  StructUnionRefTypeSpecifier.prototype.visitChildren_jolnm7$ = function (visit) {
    invoke(visit, this.id);
  };
  StructUnionRefTypeSpecifier.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StructUnionRefTypeSpecifier',
    interfaces: [TypeSpecifier]
  };
  StructUnionRefTypeSpecifier.prototype.component1 = function () {
    return this.kind;
  };
  StructUnionRefTypeSpecifier.prototype.component2 = function () {
    return this.id;
  };
  StructUnionRefTypeSpecifier.prototype.copy_19h1mw$ = function (kind, id) {
    return new StructUnionRefTypeSpecifier(kind === void 0 ? this.kind : kind, id === void 0 ? this.id : id);
  };
  StructUnionRefTypeSpecifier.prototype.toString = function () {
    return 'StructUnionRefTypeSpecifier(kind=' + Kotlin.toString(this.kind) + (', id=' + Kotlin.toString(this.id)) + ')';
  };
  StructUnionRefTypeSpecifier.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.kind) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    return result;
  };
  StructUnionRefTypeSpecifier.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.kind, other.kind) && Kotlin.equals(this.id, other.id)))));
  };
  function StorageClassSpecifier(kind) {
    TypeSpecifier.call(this);
    this.kind = kind;
  }
  StorageClassSpecifier.prototype.visitChildren_jolnm7$ = function (visit) {
  };
  function StorageClassSpecifier$Kind(name, ordinal, keyword) {
    Enum.call(this);
    this.keyword_whri1q$_0 = keyword;
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
  Object.defineProperty(StorageClassSpecifier$Kind.prototype, 'keyword', {
    get: function () {
      return this.keyword_whri1q$_0;
    }
  });
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
  StorageClassSpecifier$Kind$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [KeywordEnum$Companion]
  };
  var StorageClassSpecifier$Kind$Companion_instance = null;
  function StorageClassSpecifier$Kind$Companion_getInstance() {
    StorageClassSpecifier$Kind_initFields();
    if (StorageClassSpecifier$Kind$Companion_instance === null) {
      new StorageClassSpecifier$Kind$Companion();
    }
    return StorageClassSpecifier$Kind$Companion_instance;
  }
  StorageClassSpecifier$Kind.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Kind',
    interfaces: [KeywordEnum, Enum]
  };
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
      default:throwISE('No enum constant com.soywiz.ktcc.parser.StorageClassSpecifier.Kind.' + name);
    }
  }
  StorageClassSpecifier$Kind.valueOf_61zpoe$ = StorageClassSpecifier$Kind$valueOf;
  StorageClassSpecifier.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StorageClassSpecifier',
    interfaces: [TypeSpecifier]
  };
  StorageClassSpecifier.prototype.component1 = function () {
    return this.kind;
  };
  StorageClassSpecifier.prototype.copy_mxv0pr$ = function (kind) {
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
  TypeQualifier.prototype.visitChildren_jolnm7$ = function (visit) {
  };
  function TypeQualifier$Kind(name, ordinal, keyword) {
    Enum.call(this);
    this.keyword_fsyoz1$_0 = keyword;
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
  Object.defineProperty(TypeQualifier$Kind.prototype, 'keyword', {
    get: function () {
      return this.keyword_fsyoz1$_0;
    }
  });
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
  TypeQualifier$Kind$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [KeywordEnum$Companion]
  };
  var TypeQualifier$Kind$Companion_instance = null;
  function TypeQualifier$Kind$Companion_getInstance() {
    TypeQualifier$Kind_initFields();
    if (TypeQualifier$Kind$Companion_instance === null) {
      new TypeQualifier$Kind$Companion();
    }
    return TypeQualifier$Kind$Companion_instance;
  }
  TypeQualifier$Kind.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Kind',
    interfaces: [KeywordEnum, Enum]
  };
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
      default:throwISE('No enum constant com.soywiz.ktcc.parser.TypeQualifier.Kind.' + name);
    }
  }
  TypeQualifier$Kind.valueOf_61zpoe$ = TypeQualifier$Kind$valueOf;
  TypeQualifier.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TypeQualifier',
    interfaces: [TypeSpecifier]
  };
  TypeQualifier.prototype.component1 = function () {
    return this.kind;
  };
  TypeQualifier.prototype.copy_it9oge$ = function (kind) {
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
  FunctionSpecifier.prototype.visitChildren_jolnm7$ = function (visit) {
  };
  FunctionSpecifier.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FunctionSpecifier',
    interfaces: [TypeSpecifier]
  };
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
  AlignAsSpecifier.prototype.visitChildren_jolnm7$ = function (visit) {
    visit.invoke_o9id9e$(this.info);
  };
  AlignAsSpecifier.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AlignAsSpecifier',
    interfaces: [TypeSpecifier]
  };
  AlignAsSpecifier.prototype.component1 = function () {
    return this.info;
  };
  AlignAsSpecifier.prototype.copy_o9id9e$ = function (info) {
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
  TypeName.prototype.visitChildren_jolnm7$ = function (visit) {
    invoke_1(visit, this.specifiers, this.abstractDecl);
  };
  TypeName.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TypeName',
    interfaces: [TypeSpecifier]
  };
  TypeName.prototype.component1 = function () {
    return this.specifiers;
  };
  TypeName.prototype.component2 = function () {
    return this.abstractDecl;
  };
  TypeName.prototype.copy_jglf2m$ = function (specifiers, abstractDecl) {
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
  function AbstractDeclarator(ptr, adc) {
    Node.call(this);
    this.ptr = ptr;
    this.adc = adc;
  }
  AbstractDeclarator.prototype.visitChildren_jolnm7$ = function (visit) {
    invoke_1(visit, this.ptr, this.adc);
  };
  AbstractDeclarator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbstractDeclarator',
    interfaces: [Node]
  };
  function EnumTypeSpecifier(id, items) {
    TypeSpecifier.call(this);
    this.id = id;
    this.items = items;
  }
  EnumTypeSpecifier.prototype.visitChildren_jolnm7$ = function (visit) {
    invoke_0(visit, this.items);
  };
  EnumTypeSpecifier.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EnumTypeSpecifier',
    interfaces: [TypeSpecifier]
  };
  function EnumItemDef(id, expr) {
    Node.call(this);
    this.id = id;
    this.expr = expr;
  }
  EnumItemDef.prototype.visitChildren_jolnm7$ = function (visit) {
    invoke_1(visit, this.id, this.expr);
  };
  EnumItemDef.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EnumItemDef',
    interfaces: [Node]
  };
  function AutocompletionInfo() {
    this.score_xx6a0z$_0 = 0;
  }
  Object.defineProperty(AutocompletionInfo.prototype, 'score', {
    get: function () {
      return this.score_xx6a0z$_0;
    }
  });
  AutocompletionInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AutocompletionInfo',
    interfaces: []
  };
  function KeywordInfo(keyword) {
    AutocompletionInfo.call(this);
    this.keyword = keyword;
    this.name_mx6320$_0 = this.keyword;
    this.desc_mrqtgy$_0 = '';
  }
  Object.defineProperty(KeywordInfo.prototype, 'name', {
    get: function () {
      return this.name_mx6320$_0;
    }
  });
  Object.defineProperty(KeywordInfo.prototype, 'desc', {
    get: function () {
      return this.desc_mrqtgy$_0;
    }
  });
  KeywordInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KeywordInfo',
    interfaces: [AutocompletionInfo]
  };
  KeywordInfo.prototype.component1 = function () {
    return this.keyword;
  };
  KeywordInfo.prototype.copy_61zpoe$ = function (keyword) {
    return new KeywordInfo(keyword === void 0 ? this.keyword : keyword);
  };
  KeywordInfo.prototype.toString = function () {
    return 'KeywordInfo(keyword=' + Kotlin.toString(this.keyword) + ')';
  };
  KeywordInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.keyword) | 0;
    return result;
  };
  KeywordInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.keyword, other.keyword))));
  };
  function TypeInfo(type) {
    AutocompletionInfo.call(this);
    this.type = type;
    this.name_8o1g09$_0 = removePrefix(this.type.toString(), 'struct ');
    this.desc_8im6f7$_0 = '';
  }
  Object.defineProperty(TypeInfo.prototype, 'name', {
    get: function () {
      return this.name_8o1g09$_0;
    }
  });
  Object.defineProperty(TypeInfo.prototype, 'desc', {
    get: function () {
      return this.desc_8im6f7$_0;
    }
  });
  TypeInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TypeInfo',
    interfaces: [AutocompletionInfo]
  };
  TypeInfo.prototype.component1 = function () {
    return this.type;
  };
  TypeInfo.prototype.copy_1vqhz6$ = function (type) {
    return new TypeInfo(type === void 0 ? this.type : type);
  };
  TypeInfo.prototype.toString = function () {
    return 'TypeInfo(type=' + Kotlin.toString(this.type) + ')';
  };
  TypeInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    return result;
  };
  TypeInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.type, other.type))));
  };
  function SymbolInfo(scope, name, type, node, token) {
    AutocompletionInfo.call(this);
    this.scope = scope;
    this.name_ip417r$_0 = name;
    this.type = type;
    this.node = node;
    this.token = token;
  }
  Object.defineProperty(SymbolInfo.prototype, 'name', {
    get: function () {
      return this.name_ip417r$_0;
    }
  });
  Object.defineProperty(SymbolInfo.prototype, 'desc', {
    get: function () {
      return this.type.toString();
    }
  });
  Object.defineProperty(SymbolInfo.prototype, 'score', {
    get: function () {
      return this.scope.level;
    }
  });
  SymbolInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SymbolInfo',
    interfaces: [AutocompletionInfo]
  };
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
  SymbolInfo.prototype.copy_47s6l2$ = function (scope, name, type, node, token) {
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
  Object.defineProperty(SymbolScope.prototype, 'isGlobal', {
    get: function () {
      return this.parent == null;
    }
  });
  SymbolScope.prototype.createInfo_6o1tkq$ = function (name, type, node, token) {
    return new SymbolInfo(this, name, type, node, token);
  };
  SymbolScope.prototype.registerInfo_6o1tkq$ = function (name, type, node, token) {
    this.register_jn9bsq$(this.createInfo_6o1tkq$(name, type, node, token));
  };
  SymbolScope.prototype.register_jn9bsq$ = function (symbol) {
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
  SymbolScope.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SymbolScope',
    interfaces: []
  };
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
  ProgramMessage$Level.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Level',
    interfaces: [Enum]
  };
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
      default:throwISE('No enum constant com.soywiz.ktcc.parser.ProgramMessage.Level.' + name);
    }
  }
  ProgramMessage$Level.valueOf_61zpoe$ = ProgramMessage$Level$valueOf;
  Object.defineProperty(ProgramMessage.prototype, 'file', {
    get: function () {
      return this.marker.translatedFile;
    }
  });
  Object.defineProperty(ProgramMessage.prototype, 'row1', {
    get: function () {
      return this.token.row - this.marker.rowDiff | 0;
    }
  });
  Object.defineProperty(ProgramMessage.prototype, 'row0', {
    get: function () {
      return this.row1 - 1 | 0;
    }
  });
  Object.defineProperty(ProgramMessage.prototype, 'columnStart', {
    get: function () {
      return this.token.columnStart;
    }
  });
  ProgramMessage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ProgramMessage',
    interfaces: []
  };
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
  ProgramMessage.prototype.copy_tk9kmu$ = function (message, token, pos, marker, level) {
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
  function ParserException(info, parent) {
    ExpectException.call(this, info.message);
    this.info = info;
    this.parent = parent;
    this.name = 'ParserException';
  }
  ParserException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ParserException',
    interfaces: [ExpectException]
  };
  function ProgramParserRef() {
  }
  ProgramParserRef.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ProgramParserRef',
    interfaces: []
  };
  function FunctionScope() {
    this.name = '';
    this.type = null;
    this.hasGoto = false;
  }
  Object.defineProperty(FunctionScope.prototype, 'rettype', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this.type) != null ? tmp$.retType : null) != null ? tmp$_0 : Type$Companion_getInstance().UNRESOLVED;
    }
  });
  FunctionScope.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FunctionScope',
    interfaces: []
  };
  var POINTER_SIZE;
  function ProgramParser(items, tokens, pos) {
    if (pos === void 0)
      pos = 0;
    ListReader.call(this, items, '<eof>', pos);
    this.tokens = tokens;
    this.$delegate_llgue5$_0 = new ResolveCache();
    var tmp$;
    tmp$ = items.size;
    for (var n = 0; n < tmp$; n++)
      this.tokens.get_za3lpa$(n).tokenIndex = n;
    this.parser_vzs374$_0 = this;
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
  Object.defineProperty(ProgramParser.prototype, 'parser', {
    get: function () {
      return this.parser_vzs374$_0;
    }
  });
  Object.defineProperty(ProgramParser.prototype, 'current', {
    get: function () {
      return this.peek_za3lpa$();
    }
  });
  Object.defineProperty(ProgramParser.prototype, 'functionScope', {
    get: function () {
      var tmp$;
      var tmp$_0;
      if ((tmp$ = this._functionScope) != null)
        tmp$_0 = tmp$;
      else {
        throw IllegalStateException_init('Not inside a function'.toString());
      }
      return tmp$_0;
    }
  });
  ProgramParser.prototype.token_za3lpa$ = function (pos) {
    var $receiver = this.tokens;
    return pos >= 0 && pos <= get_lastIndex_0($receiver) ? $receiver.get_za3lpa$(pos) : new CToken('');
  };
  ProgramParser.prototype.token_o9id9e$ = function (node) {
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
  ProgramParser.prototype.reportError_1rah5c$ = function (exception) {
    var $receiver = this.errors;
    var element = exception.info;
    $receiver.add_11rb$(element);
  };
  ProgramParser.prototype.reportError_tcv7n7$ = function (exception) {
    var tmp$;
    if (Kotlin.isType(exception, ParserException)) {
      var $receiver = this.errors;
      var element = exception.info;
      $receiver.add_11rb$(element);
    }
     else {
      this.reportError_bm4lxs$((tmp$ = exception.message) != null ? tmp$ : 'error');
    }
  };
  ProgramParser.prototype.parserException_mx4x3k$ = function (message, pos, parent) {
    if (pos === void 0)
      pos = this.pos;
    if (parent === void 0)
      parent = null;
    throw new ParserException(new ProgramMessage(message, this.token_za3lpa$(pos), pos, this.currentMarker, ProgramMessage$Level$ERROR_getInstance()), parent);
  };
  ProgramParser.prototype.createExpectException_61zpoe$ = function (message) {
    return this.parserException_mx4x3k$(message);
  };
  ProgramParser.prototype.scopeFunction_klfg04$ = defineInlineFunction('ktcc.com.soywiz.ktcc.parser.ProgramParser.scopeFunction_klfg04$', wrapFunction(function () {
    var FunctionScope_init = _.com.soywiz.ktcc.parser.FunctionScope;
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
  ProgramParser.prototype.scopeSymbols_klfg04$ = defineInlineFunction('ktcc.com.soywiz.ktcc.parser.ProgramParser.scopeSymbols_klfg04$', wrapFunction(function () {
    var SymbolScope_init = _.com.soywiz.ktcc.parser.SymbolScope;
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
  ProgramParser.prototype.getStructTypeInfo_49lpbe$ = function (spec) {
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
    return getOrNull_0(this.tokens, testIndex);
  };
  ProgramParser.prototype.contains_2wjzan$ = function ($receiver, token) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = $receiver.start;
    tmp$_0 = $receiver.end;
    tmp$_1 = token.tokenIndex;
    return tmp$ <= tmp$_1 && tmp$_1 <= tmp$_0;
  };
  ProgramParser.prototype.getInnerSymbolsScopeAt_iadrgl$ = function (token, scope) {
    if (scope === void 0)
      scope = this.symbols;
    var tmp$;
    if (token != null) {
      tmp$ = scope.children.iterator();
      while (tmp$.hasNext()) {
        var childScope = tmp$.next();
        if (this.contains_2wjzan$(childScope, token))
          return this.getInnerSymbolsScopeAt_iadrgl$(token, childScope);
      }
    }
    return scope;
  };
  ProgramParser.prototype.findNodeTreeAtIndex_93c41z$ = function (root, pos, out) {
    if (out === void 0) {
      out = ArrayList_init();
    }
    out.add_11rb$(root);
    var tmp$;
    var visitor = new ArrayChildrenVisitor();
    root.visitChildren_jolnm7$(visitor);
    tmp$ = visitor.out.iterator();
    while (tmp$.hasNext()) {
      var node = tmp$.next();
      var tmp$_0, tmp$_1;
      tmp$_0 = node.pos;
      tmp$_1 = node.endPos;
      if (tmp$_0 <= pos && pos <= tmp$_1) {
        return this.findNodeTreeAtIndex_93c41z$(node, pos, out);
      }
    }
    return out;
  };
  ProgramParser.prototype.findNodeTreeAtToken_4iwv8f$ = function (root, foundToken, out) {
    if (out === void 0) {
      out = ArrayList_init();
    }
    return this.findNodeTreeAtIndex_93c41z$(root, foundToken.tokenIndex, out);
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
  ProgramParser$Marker.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Marker',
    interfaces: []
  };
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
    var tmp$, tmp$_0;
    while (true) {
      var peek = this.peekOutside_za3lpa$();
      if (equals(peek, '#')) {
        var markerPos = this.pos;
        this.expect_11rb$('#');
        var row = this.read();
        var fileQuoted = this.read();
        if (!startsWith_0(fileQuoted, 34)) {
          throw IllegalStateException_init(("Invalid '#' " + row + " fileQuoted='" + fileQuoted + "'").toString());
        }
        tmp$ = this.token_za3lpa$(markerPos).row + 1 | 0;
        tmp$_0 = toInt(row);
        this.currentMarker = new ProgramParser$Marker(markerPos, tmp$, get_cunquoted(fileQuoted), tmp$_0);
        var $receiver = this.markers;
        var element = this.currentMarker;
        $receiver.add_11rb$(element);
        continue;
      }
      if (startsWith(peek, '//')) {
        this.skip_za3lpa$();
        println('COMMENT! ' + peek);
        continue;
      }
      if (startsWith(peek, '/*')) {
        this.skip_za3lpa$();
        println('COMMENT! ' + peek);
        continue;
      }
      break;
    }
  };
  function ProgramParser$Pos(row1, column0) {
    this.row1 = row1;
    this.column0 = column0;
  }
  Object.defineProperty(ProgramParser$Pos.prototype, 'row0', {
    get: function () {
      return this.row1 - 1 | 0;
    }
  });
  ProgramParser$Pos.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Pos',
    interfaces: []
  };
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
  Object.defineProperty(ProgramParser$PosWithFile.prototype, 'row0', {
    get: function () {
      return this.row1 - 1 | 0;
    }
  });
  ProgramParser$PosWithFile.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PosWithFile',
    interfaces: []
  };
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
  ProgramParser.prototype.translatePos_wk5sdl$ = function (pos) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'translatePos');
  };
  ProgramParser.prototype.translatePos_b48wa3$ = function (pos) {
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
    return "ProgramParser(current='" + this.peekOutside_za3lpa$() + "', pos=" + this.pos + ', token=' + toString(getOrNull_0(this.tokens, this.pos)) + ', marker=' + this.currentMarker + ')';
  };
  ProgramParser.prototype.resolve_1vqhz6$ = function (type) {
    return this.$delegate_llgue5$_0.resolve_1vqhz6$(type);
  };
  ProgramParser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ProgramParser',
    interfaces: [TypeResolver, ProgramParserRef, ListReader]
  };
  function visitAllDescendants($receiver, callback) {
    var tmp$;
    var visitor = new ArrayChildrenVisitor();
    $receiver.visitChildren_jolnm7$(visitor);
    tmp$ = visitor.out.iterator();
    while (tmp$.hasNext()) {
      var node = tmp$.next();
      callback(node);
      visitAllDescendants(node, callback);
    }
  }
  var visitChildren = defineInlineFunction('ktcc.com.soywiz.ktcc.parser.visitChildren_2mqam4$', wrapFunction(function () {
    var ArrayChildrenVisitor_init = _.com.soywiz.ktcc.parser.ArrayChildrenVisitor;
    return function ($receiver, callback) {
      var tmp$;
      var visitor = new ArrayChildrenVisitor_init();
      $receiver.visitChildren_jolnm7$(visitor);
      tmp$ = visitor.out.iterator();
      while (tmp$.hasNext()) {
        var node = tmp$.next();
        callback(node);
      }
    };
  }));
  function ChildrenVisitor() {
  }
  ChildrenVisitor.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ChildrenVisitor',
    interfaces: []
  };
  function FuncChildrenVisitor(func) {
    this.func = func;
  }
  FuncChildrenVisitor.prototype.invoke_o9id9e$ = function (a) {
    this.func(a);
  };
  FuncChildrenVisitor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FuncChildrenVisitor',
    interfaces: [ChildrenVisitor]
  };
  function ArrayChildrenVisitor(out) {
    if (out === void 0) {
      out = ArrayList_init();
    }
    this.out = out;
  }
  ArrayChildrenVisitor.prototype.clear = function () {
    this.out.clear();
  };
  ArrayChildrenVisitor.prototype.invoke_o9id9e$ = function (mode) {
    this.out.add_11rb$(mode);
  };
  ArrayChildrenVisitor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ArrayChildrenVisitor',
    interfaces: [ChildrenVisitor]
  };
  function invoke($receiver, a) {
    if (a != null) {
      $receiver.invoke_o9id9e$(a);
    }
  }
  function invoke_0($receiver, items) {
    var tmp$;
    if (items != null) {
      tmp$ = items.iterator();
      while (tmp$.hasNext()) {
        var it = tmp$.next();
        invoke($receiver, it);
      }
    }
  }
  function invoke_1($receiver, a, b) {
    invoke($receiver, a);
    invoke($receiver, b);
  }
  function invoke_2($receiver, a, b, c) {
    invoke($receiver, a);
    invoke($receiver, b);
    invoke($receiver, c);
  }
  function StructField(name, type, offset, size, node) {
    this.name = name;
    this.type = type;
    this.offset = offset;
    this.size = size;
    this.node = node;
    this.offsetName = 'OFFSET_' + this.name;
  }
  StructField.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StructField',
    interfaces: []
  };
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
  StructField.prototype.copy_jpml17$ = function (name, type, offset, size, node) {
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
  function StructTypeInfo(name, spec, type, struct, size) {
    if (size === void 0)
      size = 0;
    this.name = name;
    this.spec = spec;
    this.type = type;
    this.struct = struct;
    this.size = size;
    this._fieldsByName_0 = LinkedHashMap_init();
    this._fields_0 = ArrayList_init();
  }
  Object.defineProperty(StructTypeInfo.prototype, 'fields', {
    get: function () {
      return this._fields_0;
    }
  });
  Object.defineProperty(StructTypeInfo.prototype, 'fieldsByName', {
    get: function () {
      return this._fieldsByName_0;
    }
  });
  StructTypeInfo.prototype.addField_bub6nv$ = function (field) {
    this._fields_0.add_11rb$(field);
    var $receiver = this._fieldsByName_0;
    var key = field.name;
    $receiver.put_xwzc9p$(key, field);
  };
  StructTypeInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StructTypeInfo',
    interfaces: []
  };
  StructTypeInfo.prototype.component1 = function () {
    return this.name;
  };
  StructTypeInfo.prototype.component2 = function () {
    return this.spec;
  };
  StructTypeInfo.prototype.component3 = function () {
    return this.type;
  };
  StructTypeInfo.prototype.component4 = function () {
    return this.struct;
  };
  StructTypeInfo.prototype.component5 = function () {
    return this.size;
  };
  StructTypeInfo.prototype.copy_d2gngj$ = function (name, spec, type, struct, size) {
    return new StructTypeInfo(name === void 0 ? this.name : name, spec === void 0 ? this.spec : spec, type === void 0 ? this.type : type, struct === void 0 ? this.struct : struct, size === void 0 ? this.size : size);
  };
  StructTypeInfo.prototype.toString = function () {
    return 'StructTypeInfo(name=' + Kotlin.toString(this.name) + (', spec=' + Kotlin.toString(this.spec)) + (', type=' + Kotlin.toString(this.type)) + (', struct=' + Kotlin.toString(this.struct)) + (', size=' + Kotlin.toString(this.size)) + ')';
  };
  StructTypeInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.spec) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.struct) | 0;
    result = result * 31 + Kotlin.hashCode(this.size) | 0;
    return result;
  };
  StructTypeInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.spec, other.spec) && Kotlin.equals(this.type, other.type) && Kotlin.equals(this.struct, other.struct) && Kotlin.equals(this.size, other.size)))));
  };
  function get_warnings($receiver) {
    return $receiver.parser.warnings;
  }
  function get_errors($receiver) {
    return $receiver.parser.errors;
  }
  function get_warningsAndErrors($receiver) {
    return plus($receiver.parser.warnings, $receiver.parser.errors);
  }
  var whileBlock = defineInlineFunction('ktcc.com.soywiz.ktcc.parser.whileBlock_wrvsdf$', wrapFunction(function () {
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
    return function (cond, gen) {
      var $receiver = ArrayList_init();
      while (cond($receiver.size)) {
        var element = gen();
        $receiver.add_11rb$(element);
      }
      return $receiver;
    };
  }));
  var whileNotNull = defineInlineFunction('ktcc.com.soywiz.ktcc.parser.whileNotNull_nyd4o0$', wrapFunction(function () {
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
    return function (gen) {
      var $receiver = ArrayList_init();
      while (true) {
        var tmp$;
        tmp$ = gen($receiver.size);
        if (tmp$ == null) {
          break;
        }
        $receiver.add_11rb$(tmp$);
      }
      return $receiver;
    };
  }));
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
    var name = Id$Companion_getInstance().validate_61zpoe$($receiver.peek_za3lpa$());
    var symbol = $receiver.symbols.get_61zpoe$(name);
    if (symbol == null) {
      $receiver.reportWarning_bm4lxs$("Can't find identifier '" + name + "'. Asumed as int.");
    }
    $receiver.read();
    return new Id(name, symbol);
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
      throw new NotImplementedError_init('An operation is not implemented: ' + ('primaryExpr: ' + getCallableRef('primaryExpr', function ($receiver) {
        return primaryExpr($receiver);
      }.bind(null, $receiver)).callableName));
    }
    return tmp$_0;
  }
  function tryPrimaryExpr($receiver) {
    var startPos = $receiver.pos;
    var callback$result;
    callback$break: do {
      var v = $receiver.peek_za3lpa$();
      switch (v) {
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
            callback$result = IntConstant_1($receiver.read());
            break callback$break;
          }
           else if (DecimalConstant$Companion_getInstance().isValid_61zpoe$(v)) {
            callback$result = new DecimalConstant_0($receiver.read());
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
      var tokens = $receiver.tokens;
      if ($receiver_1 != null) {
        var $receiver_2 = StringBuilder_init();
        var tmp$, tmp$_0;
        $receiver_2.append_gw00v9$((tmp$_0 = (tmp$ = getOrNull_0(tokens, startPos)) != null ? tmp$.comment : null) != null ? tmp$_0 : '');
        $receiver_1.comment = $receiver_2.toString();
      }
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
  function tryPostFixExpression($receiver) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
    tmp$ = tryPrimaryExpr($receiver);
    if (tmp$ == null) {
      return null;
    }
    var expr = tmp$;
    loop: while (!$receiver.eof) {
      tmp$_0 = $receiver.peek_za3lpa$();
      switch (tmp$_0) {
        case '[':
          $receiver.expect_11rb$('[');
          var index = expression($receiver);
          $receiver.expect_11rb$(']');
          if (!Kotlin.isType(expr.type, PointerType) && !Kotlin.isType(expr.type, ArrayType)) {
            $receiver.reportWarning_bm4lxs$("Can't array-access a non-pointer type " + expr.type);
          }

          tmp$_7 = new ArrayAccessExpr(expr, index);
          break;
        case '(':
          var exprType = expr.type;
          if (!Kotlin.isType(exprType, FunctionType)) {
            $receiver.reportError_bm4lxs$('Not calling a function (' + exprType + ')');
          }

          $receiver.expect_11rb$('(');
          var args = list($receiver, ')', ',', void 0, void 0, tryPostFixExpression$lambda($receiver));
          $receiver.expect_11rb$(')');
          if (Kotlin.isType(exprType, FunctionType)) {
            var func = exprType;
            var funcName = func.name;
            var funcParams = exprType.args;
            var a = args.size;
            var b = funcParams.size;
            tmp$_1 = Math_0.max(a, b);
            for (var n = 0; n < tmp$_1; n++) {
              var exType = (tmp$_2 = getOrNull_0(exprType.args, n)) != null ? tmp$_2.type : null;
              var arg = getOrNull_0(args, n);
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

          tmp$_7 = new CallExpr(expr, args);
          break;
        default:if (equals(tmp$_0, get_DOT()) || equals(tmp$_0, '->')) {
            var indirect = equals($receiver.read(), '->');
            if (Id$Companion_getInstance().isValid_61zpoe$($receiver.peek_za3lpa$()))
              tmp$_3 = identifierDecl($receiver);
            else {
              $receiver.reportError_bm4lxs$('Expected identifier after field access');
              tmp$_3 = new IdDecl('<unknown>');
            }
            var id = tmp$_3;
            var _type = expr.type;
            if (Kotlin.isType(_type, PointerType)) {
              tmp$_4 = _type.elementType;
            }
             else {
              tmp$_4 = _type;
            }
            var type = tmp$_4;
            var expectedIndirect = Kotlin.isType(_type, PointerType) || Kotlin.isType(_type, ArrayType);
            if (indirect !== expectedIndirect) {
              if (indirect) {
                $receiver.reportError_bm4lxs$('Expected . but found ->');
              }
               else {
                $receiver.reportError_bm4lxs$('Expected -> but found .');
              }
            }
            var resolvedType2 = resolve(type, $receiver.parser);
            var resolvedType = Kotlin.isType(resolvedType2, BasePointerType) ? resolvedType2.elementType : resolvedType2;
            if (Kotlin.isType(resolvedType, StructType)) {
              var struct = $receiver.structTypesBySpecifier.get_11rb$(resolvedType.spec);
              if (struct != null) {
                var ftype = (tmp$_5 = struct.fieldsByName.get_11rb$(id.name)) != null ? tmp$_5.type : null;
                if (ftype == null) {
                  $receiver.reportError_bm4lxs$("Struct '" + type + "' doesn't contain field '" + id.name + "'");
                }
                tmp$_6 = ftype;
              }
               else {
                $receiver.reportError_bm4lxs$("Can't find struct of " + toString(resolvedType.spec.id) + ' : ' + $receiver.structTypesByName.keys);
                tmp$_6 = null;
              }
            }
             else {
              $receiver.reportError_bm4lxs$("Can't get field '" + id.name + "' from non struct type '" + type + "'");
              tmp$_6 = null;
            }
            var ftype_0 = tmp$_6;
            tmp$_7 = new FieldAccessExpr(expr, id, indirect, ftype_0 != null ? ftype_0 : Type$Companion_getInstance().INT, resolvedType);
          }
           else
            switch (tmp$_0) {
              case '++':
              case '--':
                var op = $receiver.read();
                tmp$_7 = new PostfixExpr(expr, op);
                break;
              default:break loop;
            }

          break;
      }
      expr = tmp$_7;
    }
    return expr;
  }
  function tryUnaryExpression($receiver) {
    var startPos = $receiver.pos;
    var callback$result;
    callback$break: do {
      var tmp$, tmp$_0, tmp$_1;
      switch ($receiver.peek_za3lpa$()) {
        case '++':
        case '--':
          var op = $receiver.read();
          var expr = tryUnaryExpression($receiver);
          callback$result = new Unop(op, ensureNotNull(expr));
          break callback$break;
        case '*':
          $receiver.expect_11rb$('*');
          var expr_0 = (tmp$ = tryCastExpression($receiver)) != null ? tmp$ : $receiver.parserException_mx4x3k$('Cast expression expected');
          callback$result = new ArrayAccessExpr(expr_0, IntConstant(0), true);
          break callback$break;
        case '&':
        case '+':
        case '-':
        case '~':
        case '!':
          var op_0 = $receiver.read();
          var expr_1 = (tmp$_0 = tryCastExpression($receiver)) != null ? tmp$_0 : $receiver.parserException_mx4x3k$('Cast expression expected');
          if ((equals(op_0, '+') || equals(op_0, '-')) && Kotlin.isType(expr_1, NumberConstant)) {
            if (equals(op_0, '-')) {
              if (Kotlin.isType(expr_1, IntConstant_3)) {
                callback$result = IntConstant_0(expr_1.value.unaryMinus());
                break callback$break;
              }
               else if (Kotlin.isType(expr_1, DecimalConstant_0)) {
                callback$result = DecimalConstant(-expr_1.value);
                break callback$break;
              }
               else {
                callback$result = new Unop(op_0, expr_1);
                break callback$break;
              }
            }
             else {
              callback$result = expr_1;
              break callback$break;
            }
          }
           else {
            callback$result = new Unop(op_0, expr_1);
            break callback$break;
          }

        case 'sizeof':
        case 'Alignof':
          var kind = $receiver.expectAny_7l2mas$(['sizeof', 'Alignof']);
          if (equals($receiver.peek_za3lpa$(), '(')) {
            $receiver.expect_11rb$('(');
            var type = tryTypeName($receiver);
            var expr_2 = type == null ? ensureNotNull(tryUnaryExpression($receiver)) : null;
            $receiver.expect_11rb$(')');
            callback$result = (tmp$_1 = expr_2 != null ? new SizeOfAlignExprExpr(expr_2) : null) != null ? tmp$_1 : new SizeOfAlignTypeExpr(kind, ensureNotNull(type));
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
      var tokens = $receiver.tokens;
      if ($receiver_0 != null) {
        var $receiver_1 = StringBuilder_init();
        var tmp$_2, tmp$_3;
        $receiver_1.append_gw00v9$((tmp$_3 = (tmp$_2 = getOrNull_0(tokens, startPos)) != null ? tmp$_2.comment : null) != null ? tmp$_3 : '');
        $receiver_0.comment = $receiver_1.toString();
      }
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
      var tokens = $receiver.tokens;
      if ($receiver_0 != null) {
        var $receiver_1 = StringBuilder_init();
        var tmp$_1, tmp$_2;
        $receiver_1.append_gw00v9$((tmp$_2 = (tmp$_1 = getOrNull_0(tokens, startPos)) != null ? tmp$_1.comment : null) != null ? tmp$_2 : '');
        $receiver_0.comment = $receiver_1.toString();
      }
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
      $receiver.parserException_mx4x3k$('Not a expression! at ' + $receiver);
    if (exprs.size === 1) {
      callback$result = first(exprs);
    }
     else {
      callback$result = (new BinOperatorsExpr(exprs, ops)).expand();
    }
    var $receiver_0 = callback$result;
    if (($receiver_0 != null ? $receiver_0.tagged : null) !== true) {
      $receiver_0 != null ? ($receiver_0.tagged = true) : null;
      $receiver_0 != null ? ($receiver_0.pos = startPos) : null;
      $receiver_0 != null ? ($receiver_0.endPos = $receiver.pos) : null;
      var tokens = $receiver.tokens;
      if ($receiver_0 != null) {
        var $receiver_1 = StringBuilder_init();
        var tmp$_0, tmp$_1;
        $receiver_1.append_gw00v9$((tmp$_1 = (tmp$_0 = getOrNull_0(tokens, startPos)) != null ? tmp$_0.comment : null) != null ? tmp$_1 : '');
        $receiver_0.comment = $receiver_1.toString();
      }
      if (($receiver_0 != null ? $receiver_0.func : null) == null) {
        $receiver_0 != null ? ($receiver_0.func = $receiver._functionScope) : null;
      }
    }
    return $receiver_0;
  }
  function tryConditionalExpr($receiver) {
    var startPos = $receiver.pos;
    var callback$result;
    var expr = tryBinopExpr($receiver);
    if (expr != null && !$receiver.eof && equals($receiver.peek_za3lpa$(), '?')) {
      $receiver.expect_11rb$('?');
      var etrue = expression($receiver);
      $receiver.expect_11rb$(':');
      var efalse = ensureNotNull(tryConditionalExpr($receiver));
      callback$result = new TenaryExpr(expr, etrue, efalse);
    }
     else {
      callback$result = expr;
    }
    var $receiver_0 = callback$result;
    if (($receiver_0 != null ? $receiver_0.tagged : null) !== true) {
      $receiver_0 != null ? ($receiver_0.tagged = true) : null;
      $receiver_0 != null ? ($receiver_0.pos = startPos) : null;
      $receiver_0 != null ? ($receiver_0.endPos = $receiver.pos) : null;
      var tokens = $receiver.tokens;
      if ($receiver_0 != null) {
        var $receiver_1 = StringBuilder_init();
        var tmp$, tmp$_0;
        $receiver_1.append_gw00v9$((tmp$_0 = (tmp$ = getOrNull_0(tokens, startPos)) != null ? tmp$.comment : null) != null ? tmp$_0 : '');
        $receiver_0.comment = $receiver_1.toString();
      }
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
      var right = (tmp$_0 = tryAssignmentExpr($receiver)) != null ? tmp$_0 : $receiver.parserException_mx4x3k$('Expected value after assignment');
      if (!canAssignTo(right.type, left.type, $receiver)) {
        $receiver.reportWarning_bm4lxs$("Can't assign " + right.type + ' to ' + left.type + ' (' + resolve(right.type, $receiver.parser) + ' != ' + resolve(left.type, $receiver.parser) + ')');
      }
      tmp$_1 = toSimpleAssignExpr(new AssignExpr(left, op, right));
    }
     else {
      tmp$_1 = left;
    }
    return tmp$_1;
  }
  function assignmentExpr($receiver) {
    var tmp$;
    return (tmp$ = tryAssignmentExpr($receiver)) != null ? tmp$ : $receiver.parserException_mx4x3k$('Not an assignment-expression at ' + $receiver);
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
    return (tmp$ = tryExpression($receiver)) != null ? tmp$ : $receiver.parserException_mx4x3k$('Not an expression at ' + $receiver);
  }
  function constantExpression($receiver) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = tryConditionalExpr($receiver)) != null)
      tmp$_0 = tmp$;
    else {
      throw IllegalStateException_init('Not a conditional-expression'.toString());
    }
    return new ConstExpr(tmp$_0);
  }
  function stringLiteral($receiver) {
    return new ConstExpr(expression($receiver));
  }
  var tag = wrapFunction(function () {
    var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
    return function ($receiver, callback) {
      var startPos = $receiver.pos;
      var $receiver_0 = callback();
      if (($receiver_0 != null ? $receiver_0.tagged : null) !== true) {
        $receiver_0 != null ? ($receiver_0.tagged = true) : null;
        $receiver_0 != null ? ($receiver_0.pos = startPos) : null;
        $receiver_0 != null ? ($receiver_0.endPos = $receiver.pos) : null;
        var tokens = $receiver.tokens;
        if ($receiver_0 != null) {
          var $receiver_1 = StringBuilder_init();
          var tmp$, tmp$_0;
          $receiver_1.append_gw00v9$((tmp$_0 = (tmp$ = getOrNull_0(tokens, startPos)) != null ? tmp$.comment : null) != null ? tmp$_0 : '');
          $receiver_0.comment = $receiver_1.toString();
        }
        if (($receiver_0 != null ? $receiver_0.func : null) == null) {
          $receiver_0 != null ? ($receiver_0.func = $receiver._functionScope) : null;
        }
      }
      return $receiver_0;
    };
  });
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
      var tokens = $receiver.tokens;
      if ($receiver_0 != null) {
        var $receiver_1 = StringBuilder_init();
        var tmp$_1, tmp$_2;
        $receiver_1.append_gw00v9$((tmp$_2 = (tmp$_1 = getOrNull_0(tokens, startPos)) != null ? tmp$_1.comment : null) != null ? tmp$_2 : '');
        $receiver_0.comment = $receiver_1.toString();
      }
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
          if (expr_4 == null && !equals($receiver.functionScope.rettype, Type$Companion_getInstance().VOID))
            $receiver.reportError_bm4lxs$('Return must return ' + $receiver.functionScope.rettype);
          else if (expr_4 != null && !canAssignTo(expr_4.type, $receiver.functionScope.rettype, $receiver)) {
            $receiver.reportError_bm4lxs$('Returned ' + expr_4.type + ' but must return ' + $receiver.functionScope.rettype + ' (' + resolve(expr_4.type, $receiver.parser) + ' != ' + toString((tmp$_1 = (tmp$_0 = $receiver._functionScope) != null ? tmp$_0.rettype : null) != null ? resolve(tmp$_1, $receiver.parser) : null) + ')');
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
      var tokens = $receiver.tokens;
      if ($receiver_0 != null) {
        var $receiver_1 = StringBuilder_init();
        var tmp$_5, tmp$_6;
        $receiver_1.append_gw00v9$((tmp$_6 = (tmp$_5 = getOrNull_0(tokens, startPos)) != null ? tmp$_5.comment : null) != null ? tmp$_6 : '');
        $receiver_0.comment = $receiver_1.toString();
      }
      if (($receiver_0 != null ? $receiver_0.func : null) == null) {
        $receiver_0 != null ? ($receiver_0.func = $receiver._functionScope) : null;
      }
    }
    return $receiver_0;
  }
  function KeywordEnum() {
  }
  function KeywordEnum$Companion(gen) {
    this.gen = gen;
    var $receiver = this.gen();
    var capacity = coerceAtLeast(mapCapacity($receiver.length), 16);
    var destination = LinkedHashMap_init_0(capacity);
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
  KeywordEnum$Companion.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Companion',
    interfaces: []
  };
  KeywordEnum.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'KeywordEnum',
    interfaces: []
  };
  function typeName($receiver) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = tryTypeName($receiver)) != null)
      tmp$_0 = tmp$;
    else {
      throw new NotImplementedError_init('An operation is not implemented: ' + ('typeName as ' + $receiver));
    }
    return tmp$_0;
  }
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
      var tokens = $receiver.tokens;
      if ($receiver_0 != null) {
        var $receiver_1 = StringBuilder_init();
        var tmp$_0, tmp$_1;
        $receiver_1.append_gw00v9$((tmp$_1 = (tmp$_0 = getOrNull_0(tokens, startPos)) != null ? tmp$_0.comment : null) != null ? tmp$_1 : '');
        $receiver_0.comment = $receiver_1.toString();
      }
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
      var tokens = $receiver.tokens;
      if ($receiver_0 != null) {
        var $receiver_1 = StringBuilder_init();
        var tmp$, tmp$_0;
        $receiver_1.append_gw00v9$((tmp$_0 = (tmp$ = getOrNull_0(tokens, startPos)) != null ? tmp$.comment : null) != null ? tmp$_0 : '');
        $receiver_0.comment = $receiver_1.toString();
      }
      if (($receiver_0 != null ? $receiver_0.func : null) == null) {
        $receiver_0 != null ? ($receiver_0.func = $receiver._functionScope) : null;
      }
    }
    return $receiver_0;
  }
  function declarationSpecifiers($receiver, sure) {
    if (sure === void 0)
      sure = false;
    var tmp$;
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
    return out.isEmpty() ? null : new ListTypeSpecifier(out);
  }
  function type($receiver) {
    var startPos = $receiver.pos;
    return ensureNotNull(declarationSpecifiers($receiver));
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
      var tokens = $receiver.tokens;
      if ($receiver_0 != null) {
        var $receiver_1 = StringBuilder_init();
        var tmp$, tmp$_0;
        $receiver_1.append_gw00v9$((tmp$_0 = (tmp$ = getOrNull_0(tokens, startPos)) != null ? tmp$.comment : null) != null ? tmp$_0 : '');
        $receiver_0.comment = $receiver_1.toString();
      }
      if (($receiver_0 != null ? $receiver_0.func : null) == null) {
        $receiver_0 != null ? ($receiver_0.func = $receiver._functionScope) : null;
      }
    }
    return $receiver_0;
  }
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
      var tokens = $receiver.tokens;
      if ($receiver_0 != null) {
        var $receiver_1 = StringBuilder_init();
        var tmp$_0, tmp$_1;
        $receiver_1.append_gw00v9$((tmp$_1 = (tmp$_0 = getOrNull_0(tokens, startPos)) != null ? tmp$_0.comment : null) != null ? tmp$_1 : '');
        $receiver_0.comment = $receiver_1.toString();
      }
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
  function enumerator($receiver) {
    var startPos = $receiver.pos;
    var tmp$;
    var id = identifierDecl($receiver);
    if (equals($receiver.peek_za3lpa$(), '=')) {
      $receiver.expect_11rb$('=');
      tmp$ = constantExpression($receiver);
    }
     else {
      tmp$ = null;
    }
    var expr = tmp$;
    var $receiver_0 = new EnumItemDef(id, expr);
    if (($receiver_0 != null ? $receiver_0.tagged : null) !== true) {
      $receiver_0 != null ? ($receiver_0.tagged = true) : null;
      $receiver_0 != null ? ($receiver_0.pos = startPos) : null;
      $receiver_0 != null ? ($receiver_0.endPos = $receiver.pos) : null;
      var tokens = $receiver.tokens;
      if ($receiver_0 != null) {
        var $receiver_1 = StringBuilder_init();
        var tmp$_0, tmp$_1;
        $receiver_1.append_gw00v9$((tmp$_1 = (tmp$_0 = getOrNull_0(tokens, startPos)) != null ? tmp$_0.comment : null) != null ? tmp$_1 : '');
        $receiver_0.comment = $receiver_1.toString();
      }
      if (($receiver_0 != null ? $receiver_0.func : null) == null) {
        $receiver_0 != null ? ($receiver_0.func = $receiver._functionScope) : null;
      }
    }
    return $receiver_0;
  }
  function tryDeclarationSpecifier$lambda$lambda(this$tryDeclarationSpecifier) {
    return function () {
      return enumerator(this$tryDeclarationSpecifier);
    };
  }
  function tryDeclarationSpecifier$lambda$lambda$lambda(this$tryDeclarationSpecifier) {
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
  function tryDeclarationSpecifier$lambda$lambda_0(this$tryDeclarationSpecifier) {
    return function () {
      return list(this$tryDeclarationSpecifier, '}', null, void 0, void 0, tryDeclarationSpecifier$lambda$lambda$lambda(this$tryDeclarationSpecifier));
    };
  }
  function tryDeclarationSpecifier($receiver, hasTypedef, hasMoreSpecifiers, sure) {
    if (sure === void 0)
      sure = false;
    var startPos = $receiver.pos;
    var callback$result;
    callback$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10;
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
          var kind = TypeQualifier$Kind$Companion_getInstance().get_61zpoe$($receiver.read());
          if (kind === TypeQualifier$Kind$ATOMIC_getInstance() && equals($receiver.peekOutside_za3lpa$(), '(')) {
            $receiver.expect_11rb$('(');
            throw new NotImplementedError_init('An operation is not implemented: ' + '_Atomic');
          }

          callback$result = new TypeQualifier(kind);
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
          var kind_0 = $receiver.read();
          var id = Id$Companion_getInstance().isValid_61zpoe$($receiver.peek_za3lpa$()) ? $receiver.read() : null;
          if (equals($receiver.peek_za3lpa$(), '{')) {
            $receiver.expect_11rb$('{');
            var enums = list($receiver, '}', ',', void 0, void 0, tryDeclarationSpecifier$lambda$lambda($receiver));
            $receiver.expect_11rb$('}');
            tmp$_0 = enums;
          }
           else {
            tmp$_0 = null;
          }

          var decls = tmp$_0;
          callback$result = new EnumTypeSpecifier(id, decls);
          break callback$break;
        case 'struct':
        case 'union':
          var kind_1 = $receiver.read();
          var id_0 = !equals($receiver.peek_za3lpa$(), '{') ? identifierDecl($receiver) : null;
          if (equals($receiver.peek_za3lpa$(), '{')) {
            tmp$_1 = $receiver.expectPair_wg1gqi$('{', '}', tryDeclarationSpecifier$lambda$lambda_0($receiver));
          }
           else {
            tmp$_1 = null;
          }

          var decls_0 = tmp$_1;
          if (decls_0 != null) {
            var struct = new StructUnionTypeSpecifier(kind_1, id_0, decls_0);
            var it = struct;
            var isUnion = equals(struct.kind, 'union');
            var structName = (tmp$_4 = (tmp$_2 = it.id) != null ? tmp$_2.name : null) != null ? tmp$_4 : 'Anonymous' + (tmp$_3 = $receiver.structId, $receiver.structId = tmp$_3 + 1 | 0, tmp$_3);
            var structInfo = new StructTypeInfo(structName, it, new StructType(it), struct);
            struct.info = structInfo;
            $receiver.structTypesByName.put_xwzc9p$(structName, structInfo);
            $receiver.structTypesBySpecifier.put_xwzc9p$(it, structInfo);
            var offset = 0;
            var maxSize = 0;
            tmp$_5 = it.decls.iterator();
            while (tmp$_5.hasNext()) {
              var decl = tmp$_5.next();
              var ftype = toFinalType(decl.specifiers);
              tmp$_6 = decl.declarators.iterator();
              while (tmp$_6.hasNext()) {
                var dtors = tmp$_6.next();
                var name = (tmp$_8 = (tmp$_7 = dtors.declarator) != null ? getName(tmp$_7) : null) != null ? tmp$_8 : 'unknown';
                var rftype = withDeclarator(ftype, dtors.declarator);
                var rsize = getSize(rftype, $receiver.parser);
                structInfo.addField_bub6nv$(new StructField(name, rftype, offset, rsize, decl));
                var a = maxSize;
                maxSize = Math_0.max(a, rsize);
                if (!isUnion) {
                  offset = offset + rsize | 0;
                }
              }
            }
            structInfo.size = isUnion ? maxSize : offset;
            callback$result = struct;
            break callback$break;
          }
           else {
            var $receiver_0 = $receiver.structTypesByName;
            var key = id_0 != null ? id_0.name : null;
            var tmp$_11;
            var structType = (Kotlin.isType(tmp$_11 = $receiver_0, Map) ? tmp$_11 : throwCCE()).get_11rb$(key);
            var struct_0 = (tmp$_9 = structType != null ? structType.struct : null) != null ? tmp$_9 : new StructUnionTypeSpecifier(kind_1, id_0, emptyList());
            callback$result = struct_0;
            break callback$break;
          }

        default:var $receiver_1 = $receiver.typedefTypes;
          var tmp$_12;
          if ((Kotlin.isType(tmp$_12 = $receiver_1, Map) ? tmp$_12 : throwCCE()).containsKey_11rb$(v)) {
            var typeName = $receiver.read();
            callback$result = new RefTypeSpecifier(typeName, (tmp$_10 = $receiver.typedefAliases.get_11rb$(typeName)) != null ? tmp$_10 : Type$Companion_getInstance().UNKNOWN_TYPEDEF);
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
    var $receiver_2 = callback$result;
    if (($receiver_2 != null ? $receiver_2.tagged : null) !== true) {
      $receiver_2 != null ? ($receiver_2.tagged = true) : null;
      $receiver_2 != null ? ($receiver_2.pos = startPos) : null;
      $receiver_2 != null ? ($receiver_2.endPos = $receiver.pos) : null;
      var tokens = $receiver.tokens;
      if ($receiver_2 != null) {
        var $receiver_3 = StringBuilder_init();
        var tmp$_13, tmp$_14;
        $receiver_3.append_gw00v9$((tmp$_14 = (tmp$_13 = getOrNull_0(tokens, startPos)) != null ? tmp$_13.comment : null) != null ? tmp$_14 : '');
        $receiver_2.comment = $receiver_3.toString();
      }
      if (($receiver_2 != null ? $receiver_2.func : null) == null) {
        $receiver_2 != null ? ($receiver_2.func = $receiver._functionScope) : null;
      }
    }
    return $receiver_2;
  }
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
      var tokens = $receiver.tokens;
      if ($receiver_1 != null) {
        var $receiver_2 = StringBuilder_init();
        var tmp$_1, tmp$_2;
        $receiver_2.append_gw00v9$((tmp$_2 = (tmp$_1 = getOrNull_0(tokens, startPos)) != null ? tmp$_1.comment : null) != null ? tmp$_2 : '');
        $receiver_1.comment = $receiver_2.toString();
      }
      if (($receiver_1 != null ? $receiver_1.func : null) == null) {
        $receiver_1 != null ? ($receiver_1.func = $receiver._functionScope) : null;
      }
    }
    return $receiver_1;
  }
  function parameterDeclaration($receiver) {
    var startPos = $receiver.pos;
    var callback$result;
    if (equals($receiver.peek_za3lpa$(), '...')) {
      var startPos_0 = $receiver.pos;
      var $receiver_0 = new IdDecl($receiver.read());
      if (($receiver_0 != null ? $receiver_0.tagged : null) !== true) {
        $receiver_0 != null ? ($receiver_0.tagged = true) : null;
        $receiver_0 != null ? ($receiver_0.pos = startPos_0) : null;
        $receiver_0 != null ? ($receiver_0.endPos = $receiver.pos) : null;
        var tokens = $receiver.tokens;
        if ($receiver_0 != null) {
          var $receiver_1 = StringBuilder_init();
          var tmp$, tmp$_0;
          $receiver_1.append_gw00v9$((tmp$_0 = (tmp$ = getOrNull_0(tokens, startPos_0)) != null ? tmp$.comment : null) != null ? tmp$_0 : '');
          $receiver_0.comment = $receiver_1.toString();
        }
        if (($receiver_0 != null ? $receiver_0.func : null) == null) {
          $receiver_0 != null ? ($receiver_0.func = $receiver._functionScope) : null;
        }
      }
      var id = $receiver_0;
      callback$result = new ParameterDecl(new ListTypeSpecifier(listOf(new VariadicTypeSpecifier(id))), new VarargDeclarator(new IdentifierDeclarator(id)));
    }
     else {
      var specs = declarationSpecifiers($receiver);
      if (specs == null) {
        $receiver.reportError_bm4lxs$('Expected declaration specifiers at ' + $receiver);
      }
      var decl = declarator($receiver);
      callback$result = new ParameterDecl(specs != null ? specs : new ListTypeSpecifier(emptyList()), decl);
    }
    var $receiver_2 = callback$result;
    if (($receiver_2 != null ? $receiver_2.tagged : null) !== true) {
      $receiver_2 != null ? ($receiver_2.tagged = true) : null;
      $receiver_2 != null ? ($receiver_2.pos = startPos) : null;
      $receiver_2 != null ? ($receiver_2.endPos = $receiver.pos) : null;
      var tokens_0 = $receiver.tokens;
      if ($receiver_2 != null) {
        var $receiver_3 = StringBuilder_init();
        var tmp$_1, tmp$_2;
        $receiver_3.append_gw00v9$((tmp$_2 = (tmp$_1 = getOrNull_0(tokens_0, startPos)) != null ? tmp$_1.comment : null) != null ? tmp$_2 : '');
        $receiver_2.comment = $receiver_3.toString();
      }
      if (($receiver_2 != null ? $receiver_2.func : null) == null) {
        $receiver_2 != null ? ($receiver_2.func = $receiver._functionScope) : null;
      }
    }
    return $receiver_2;
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
    var callback$result;
    callback$break: do {
      var tmp$;
      var pointer = tryPointer($receiver);
      var startPos_0 = $receiver.pos;
      var callback$result_0;
      if (equals($receiver.peek_za3lpa$(), '(')) {
        $receiver.expect_11rb$('(');
        var decl = declarator($receiver);
        $receiver.expect_11rb$(')');
        callback$result_0 = decl;
      }
       else {
        if (Id$Companion_getInstance().isValid_61zpoe$($receiver.peek_za3lpa$())) {
          callback$result_0 = new IdentifierDeclarator(identifierDecl($receiver));
        }
         else {
          callback$result_0 = null;
        }
      }
      var $receiver_0 = callback$result_0;
      if (($receiver_0 != null ? $receiver_0.tagged : null) !== true) {
        $receiver_0 != null ? ($receiver_0.tagged = true) : null;
        $receiver_0 != null ? ($receiver_0.pos = startPos_0) : null;
        $receiver_0 != null ? ($receiver_0.endPos = $receiver.pos) : null;
        var tokens = $receiver.tokens;
        if ($receiver_0 != null) {
          var $receiver_1 = StringBuilder_init();
          var tmp$_0, tmp$_1;
          $receiver_1.append_gw00v9$((tmp$_1 = (tmp$_0 = getOrNull_0(tokens, startPos_0)) != null ? tmp$_0.comment : null) != null ? tmp$_1 : '');
          $receiver_0.comment = $receiver_1.toString();
        }
        if (($receiver_0 != null ? $receiver_0.func : null) == null) {
          $receiver_0 != null ? ($receiver_0.func = $receiver._functionScope) : null;
        }
      }
      if ($receiver_0 == null) {
        callback$result = null;
        break callback$break;
      }
      var base = $receiver_0;
      var postfixs = ArrayList_init();
      loop: while (true) {
        var startPos_1 = $receiver.pos;
        var callback$result_1;
        callback$break_0: do {
          var tmp$_2;
          switch ($receiver.peek_za3lpa$()) {
            case '(':
              $receiver.expect_11rb$('(');
              if (equals($receiver.peekOutside_za3lpa$(), 'void') && equals($receiver.peekOutside_za3lpa$(1), ')')) {
                $receiver.expect_11rb$('void');
                tmp$_2 = emptyList();
              }
               else {
                tmp$_2 = list($receiver, ')', ',', void 0, void 0, tryDeclarator$lambda$lambda$lambda($receiver));
              }

              var params = tmp$_2;
              $receiver.expect_11rb$(')');
              callback$result_1 = new ParamDeclaratorPostfix(params);
              break callback$break_0;
            case '[':
              $receiver.expect_11rb$('[');
              var static0 = $receiver.tryExpect_11rb$('static') != null;
              var $receiver_2 = ArrayList_init();
              while (true) {
                var tmp$_3;
                $receiver_2.size;
                tmp$_3 = tryTypeQualifier($receiver);
                if (tmp$_3 == null) {
                  break;
                }
                $receiver_2.add_11rb$(tmp$_3);
              }

              var typeQualifiers = $receiver_2;
              var static1 = $receiver.tryExpect_11rb$('static') != null;
              var expr = tryExpression($receiver);
              $receiver.expect_11rb$(']');
              callback$result_1 = new ArrayDeclaratorPostfix(typeQualifiers, expr, static0, static1);
              break callback$break_0;
            default:callback$result_1 = null;
              break callback$break_0;
          }
        }
         while (false);
        var $receiver_3 = callback$result_1;
        if (($receiver_3 != null ? $receiver_3.tagged : null) !== true) {
          $receiver_3 != null ? ($receiver_3.tagged = true) : null;
          $receiver_3 != null ? ($receiver_3.pos = startPos_1) : null;
          $receiver_3 != null ? ($receiver_3.endPos = $receiver.pos) : null;
          var tokens_0 = $receiver.tokens;
          if ($receiver_3 != null) {
            var $receiver_4 = StringBuilder_init();
            var tmp$_4, tmp$_5;
            $receiver_4.append_gw00v9$((tmp$_5 = (tmp$_4 = getOrNull_0(tokens_0, startPos_1)) != null ? tmp$_4.comment : null) != null ? tmp$_5 : '');
            $receiver_3.comment = $receiver_4.toString();
          }
          if (($receiver_3 != null ? $receiver_3.func : null) == null) {
            $receiver_3 != null ? ($receiver_3.func = $receiver._functionScope) : null;
          }
        }
        if ($receiver_3 == null) {
          break loop;
        }
        postfixs.add_11rb$($receiver_3);
      }
      var out = base;
      tmp$ = reversed(postfixs).iterator();
      while (tmp$.hasNext()) {
        var postfix = tmp$.next();
        out = postfix.toDeclarator_i905yn$(out);
      }
      return pointer != null ? new DeclaratorWithPointer(pointer, out) : out;
    }
     while (false);
    var $receiver_5 = callback$result;
    if (($receiver_5 != null ? $receiver_5.tagged : null) !== true) {
      $receiver_5 != null ? ($receiver_5.tagged = true) : null;
      $receiver_5 != null ? ($receiver_5.pos = startPos) : null;
      $receiver_5 != null ? ($receiver_5.endPos = $receiver.pos) : null;
      var tokens_1 = $receiver.tokens;
      if ($receiver_5 != null) {
        var $receiver_6 = StringBuilder_init();
        var tmp$_6, tmp$_7;
        $receiver_6.append_gw00v9$((tmp$_7 = (tmp$_6 = getOrNull_0(tokens_1, startPos)) != null ? tmp$_6.comment : null) != null ? tmp$_7 : '');
        $receiver_5.comment = $receiver_6.toString();
      }
      if (($receiver_5 != null ? $receiver_5.func : null) == null) {
        $receiver_5 != null ? ($receiver_5.func = $receiver._functionScope) : null;
      }
    }
    return $receiver_5;
  }
  function tryDesignator($receiver) {
    var startPos = $receiver.pos;
    var callback$result;
    var tmp$;
    tmp$ = $receiver.peek_za3lpa$();
    if (equals(tmp$, get_DOT())) {
      $receiver.expect_11rb$(get_DOT());
      callback$result = new FieldAccessDesignator(identifier($receiver));
    }
     else if (equals(tmp$, '[')) {
      $receiver.expect_11rb$('[');
      var expr = constantExpression($receiver);
      $receiver.expect_11rb$(']');
      callback$result = new ArrayAccessDesignator(expr);
    }
     else {
      callback$result = null;
    }
    var $receiver_0 = callback$result;
    if (($receiver_0 != null ? $receiver_0.tagged : null) !== true) {
      $receiver_0 != null ? ($receiver_0.tagged = true) : null;
      $receiver_0 != null ? ($receiver_0.pos = startPos) : null;
      $receiver_0 != null ? ($receiver_0.endPos = $receiver.pos) : null;
      var tokens = $receiver.tokens;
      if ($receiver_0 != null) {
        var $receiver_1 = StringBuilder_init();
        var tmp$_0, tmp$_1;
        $receiver_1.append_gw00v9$((tmp$_1 = (tmp$_0 = getOrNull_0(tokens, startPos)) != null ? tmp$_0.comment : null) != null ? tmp$_1 : '');
        $receiver_0.comment = $receiver_1.toString();
      }
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
      var tokens = $receiver.tokens;
      if ($receiver_0 != null) {
        var $receiver_1 = StringBuilder_init();
        var tmp$, tmp$_0;
        $receiver_1.append_gw00v9$((tmp$_0 = (tmp$ = getOrNull_0(tokens, startPos)) != null ? tmp$.comment : null) != null ? tmp$_0 : '');
        $receiver_0.comment = $receiver_1.toString();
      }
      if (($receiver_0 != null ? $receiver_0.func : null) == null) {
        $receiver_0 != null ? ($receiver_0.func = $receiver._functionScope) : null;
      }
    }
    return $receiver_0;
  }
  function initializer$lambda$lambda(this$initializer, closure$elementType) {
    return function () {
      var designationOpt = tryDesignation(this$initializer);
      var initializer_0 = initializer(this$initializer, closure$elementType);
      return new DesignOptInit(designationOpt, initializer_0);
    };
  }
  function initializer($receiver, ltype) {
    var startPos = $receiver.pos;
    var callback$result;
    var tmp$;
    if (equals($receiver.peek_za3lpa$(), '{')) {
      var elementType = get_elementType(ltype);
      $receiver.expect_11rb$('{');
      var items = list($receiver, '}', ',', void 0, true, initializer$lambda$lambda($receiver, elementType));
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
      var tokens = $receiver.tokens;
      if ($receiver_0 != null) {
        var $receiver_1 = StringBuilder_init();
        var tmp$_1, tmp$_2;
        $receiver_1.append_gw00v9$((tmp$_2 = (tmp$_1 = getOrNull_0(tokens, startPos)) != null ? tmp$_1.comment : null) != null ? tmp$_2 : '');
        $receiver_0.comment = $receiver_1.toString();
      }
      if (($receiver_0 != null ? $receiver_0.func : null) == null) {
        $receiver_0 != null ? ($receiver_0.func = $receiver._functionScope) : null;
      }
    }
    return $receiver_0;
  }
  function initDeclarator($receiver, specsType) {
    var startPos = $receiver.pos;
    var decl = declarator($receiver);
    var ftype = withDeclarator(specsType, decl);
    var initializer_0 = $receiver.tryExpect_11rb$('=') != null ? initializer($receiver, ftype) : null;
    if (initializer_0 != null) {
      if (!canAssignTo(initializer_0.type, ftype, $receiver)) {
        $receiver.reportWarning_bm4lxs$("Can't assign " + initializer_0.type + ' to ' + ftype + ' (' + resolve(initializer_0.type, $receiver.parser) + ' != ' + resolve(ftype, $receiver.parser) + ')');
      }
    }
    var $receiver_0 = new InitDeclarator(decl, initializer_0, ftype);
    if (($receiver_0 != null ? $receiver_0.tagged : null) !== true) {
      $receiver_0 != null ? ($receiver_0.tagged = true) : null;
      $receiver_0 != null ? ($receiver_0.pos = startPos) : null;
      $receiver_0 != null ? ($receiver_0.endPos = $receiver.pos) : null;
      var tokens = $receiver.tokens;
      if ($receiver_0 != null) {
        var $receiver_1 = StringBuilder_init();
        var tmp$, tmp$_0;
        $receiver_1.append_gw00v9$((tmp$_0 = (tmp$ = getOrNull_0(tokens, startPos)) != null ? tmp$.comment : null) != null ? tmp$_0 : '');
        $receiver_0.comment = $receiver_1.toString();
      }
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
          var nameId = getNameId(item.declarator);
          var token = $receiver.token_za3lpa$(nameId.pos);
          var name = getName(nameId);
          var itemType = toFinalType_0(specs, item.declarator);
          if (specs.hasTypedef && !$receiver.typedefTypes.containsKey_11rb$(name)) {
            $receiver.typedefTypes.put_xwzc9p$(name, specs);
            $receiver.typedefAliases.put_xwzc9p$(name, itemType);
            var $receiver_0 = specs.items;
            var destination = ArrayList_init();
            var tmp$_1;
            tmp$_1 = $receiver_0.iterator();
            while (tmp$_1.hasNext()) {
              var element = tmp$_1.next();
              if (Kotlin.isType(element, StructUnionTypeSpecifier))
                destination.add_11rb$(element);
            }
            var structTypeSpecifier = firstOrNull_0(destination);
            if (structTypeSpecifier != null) {
              var structType = $receiver.getStructTypeInfo_49lpbe$(structTypeSpecifier);
              $receiver.structTypesByName.remove_11rb$(structType.name);
              structType.name = name;
              var $receiver_1 = $receiver.structTypesByName;
              var key = structType.name;
              $receiver_1.put_xwzc9p$(key, structType);
            }
          }
           else {
            $receiver.symbols.registerInfo_6o1tkq$(nameId.id.name, itemType, nameId, token);
          }
        }
        callback$result = new VarDeclaration(specs, initDeclaratorList);
      }
    }
     while (false);
    var $receiver_2 = callback$result;
    if (($receiver_2 != null ? $receiver_2.tagged : null) !== true) {
      $receiver_2 != null ? ($receiver_2.tagged = true) : null;
      $receiver_2 != null ? ($receiver_2.pos = startPos) : null;
      $receiver_2 != null ? ($receiver_2.endPos = $receiver.pos) : null;
      var tokens = $receiver.tokens;
      if ($receiver_2 != null) {
        var $receiver_3 = StringBuilder_init();
        var tmp$_2, tmp$_3;
        $receiver_3.append_gw00v9$((tmp$_3 = (tmp$_2 = getOrNull_0(tokens, startPos)) != null ? tmp$_2.comment : null) != null ? tmp$_3 : '');
        $receiver_2.comment = $receiver_3.toString();
      }
      if (($receiver_2 != null ? $receiver_2.func : null) == null) {
        $receiver_2 != null ? ($receiver_2.func = $receiver._functionScope) : null;
      }
    }
    return $receiver_2;
  }
  function Declaration(type, name, init) {
    if (init === void 0)
      init = null;
    return new VarDeclaration(new ListTypeSpecifier(listOf(new BasicTypeSpecifier(BasicTypeSpecifier$Kind$INT_getInstance()))), listOf(new InitDeclarator(new IdentifierDeclarator(new IdDecl(name)), init, type)));
  }
  function declaration($receiver, sure) {
    if (sure === void 0)
      sure = true;
    var tmp$;
    return (tmp$ = tryDeclaration($receiver, sure)) != null ? tmp$ : $receiver.parserException_mx4x3k$('TODO: ProgramParser.declaration');
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
            this$compoundStatement.reportError_1rah5c$(e);
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
      var tokens = $receiver.tokens;
      if (tmp$ != null) {
        var $receiver_0 = StringBuilder_init();
        var tmp$_0, tmp$_1;
        $receiver_0.append_gw00v9$((tmp$_1 = (tmp$_0 = getOrNull_0(tokens, startPos)) != null ? tmp$_0.comment : null) != null ? tmp$_1 : '');
        tmp$.comment = $receiver_0.toString();
      }
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
    else if (Kotlin.isType($receiver, IdentifierDeclarator)) {
      return new ParameterDeclarator($receiver, emptyList());
    }
     else {
      throw IllegalStateException_init(('Not a DeclaratorWithPointer ' + $receiver).toString());
    }
  }
  function functionDefinition$lambda$lambda$lambda(closure$params, this$functionDefinition, closure$rettype, closure$name, closure$variadic, closure$funcType) {
    return function () {
      var tmp$;
      tmp$ = closure$params.iterator();
      while (tmp$.hasNext()) {
        var param = tmp$.next();
        this$functionDefinition.symbols.registerInfo_6o1tkq$(param.name.name, param.type, param.nameId, this$functionDefinition.token_za3lpa$(param.nameId.pos));
      }
      var body = compoundStatement(this$functionDefinition);
      var $receiver = new FuncDeclaration(closure$rettype, closure$name, closure$params, body, closure$variadic, closure$funcType);
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
      var callback = functionDefinition$lambda$lambda$lambda(closure$params, this$functionDefinition, closure$rettype, closure$name, closure$variadic, closure$funcType);
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
    var tmp$;
    var rettype = (tmp$ = declarationSpecifiers($receiver)) != null ? tmp$ : $receiver.parserException_mx4x3k$("Can't declarationSpecifiers " + $receiver);
    var decl = declarator($receiver);
    var paramDecl = extractParameter(decl);
    if (!Kotlin.isType(paramDecl.base, IdentifierDeclarator))
      $receiver.parserException_mx4x3k$('Function without name at ' + $receiver + ' but decl.base=' + paramDecl.base);
    var name = paramDecl.base.id;
    var $receiver_0 = paramDecl.decls;
    var any$result;
    any$break: do {
      var tmp$_0;
      if (Kotlin.isType($receiver_0, Collection) && $receiver_0.isEmpty()) {
        any$result = false;
        break any$break;
      }
      tmp$_0 = $receiver_0.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
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
    var tmp$_1;
    tmp$_1 = $receiver_1.iterator();
    while (tmp$_1.hasNext()) {
      var element_0 = tmp$_1.next();
      if (!Kotlin.isType(element_0.declarator, VarargDeclarator))
        destination.add_11rb$(element_0);
    }
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault(destination, 10));
    var tmp$_2;
    tmp$_2 = destination.iterator();
    while (tmp$_2.hasNext()) {
      var item = tmp$_2.next();
      destination_0.add_11rb$(toCParam(item));
    }
    var params = destination_0;
    var funcType = toFinalType_0(rettype, decl);
    if (!Kotlin.isType(funcType, FunctionType)) {
      throw IllegalStateException_init(('Not a function type: ' + funcType).toString());
    }
    $receiver.symbols.registerInfo_6o1tkq$(name.name, funcType, name, $receiver.token_o9id9e$(name));
    var scopeFunction_klfg04$result;
    var old = $receiver._functionScope;
    $receiver._functionScope = new FunctionScope();
    try {
      scopeFunction_klfg04$result = functionDefinition$lambda$lambda($receiver, name, funcType, params, rettype, variadic)();
    }
    finally {
      $receiver._functionScope = old;
    }
    if ((scopeFunction_klfg04$result != null ? scopeFunction_klfg04$result.tagged : null) !== true) {
      scopeFunction_klfg04$result != null ? (scopeFunction_klfg04$result.tagged = true) : null;
      scopeFunction_klfg04$result != null ? (scopeFunction_klfg04$result.pos = startPos) : null;
      scopeFunction_klfg04$result != null ? (scopeFunction_klfg04$result.endPos = $receiver.pos) : null;
      var tokens = $receiver.tokens;
      if (scopeFunction_klfg04$result != null) {
        var $receiver_2 = StringBuilder_init();
        var tmp$_3, tmp$_4;
        $receiver_2.append_gw00v9$((tmp$_4 = (tmp$_3 = getOrNull_0(tokens, startPos)) != null ? tmp$_3.comment : null) != null ? tmp$_4 : '');
        scopeFunction_klfg04$result.comment = $receiver_2.toString();
      }
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
        if (Kotlin.isType(e_0, Throwable)) {
          $receiver.reportError_tcv7n7$(e_0);
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
      var tokens = $receiver.tokens;
      if ($receiver_0 != null) {
        var $receiver_1 = StringBuilder_init();
        var tmp$_1, tmp$_2;
        $receiver_1.append_gw00v9$((tmp$_2 = (tmp$_1 = getOrNull_0(tokens, startPos)) != null ? tmp$_1.comment : null) != null ? tmp$_2 : '');
        $receiver_0.comment = $receiver_1.toString();
      }
      if (($receiver_0 != null ? $receiver_0.func : null) == null) {
        $receiver_0 != null ? ($receiver_0.func = $receiver._functionScope) : null;
      }
    }
    return $receiver_0;
  }
  function tryTypeSpecifier($receiver) {
    var startPos = $receiver.pos;
    throw new NotImplementedError_init('An operation is not implemented: ' + 'tryTypeSpecifier');
  }
  function typeSpecifier($receiver) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = tryTypeSpecifier($receiver)) != null)
      tmp$_0 = tmp$;
    else {
      throw IllegalStateException_init(("Not a type specifier at '" + $receiver.peek_za3lpa$() + "'").toString());
    }
    return tmp$_0;
  }
  function translationUnits($receiver) {
    var startPos = $receiver.pos;
    var tmp$;
    var decls = ArrayList_init();
    try {
      while (true) {
        $receiver.consumeLineMarkers();
        if ($receiver.eof)
          break;
        tmp$ = tryExternalDeclaration($receiver);
        if (tmp$ == null) {
          continue;
        }
        var externalDefinition = tmp$;
        decls.add_11rb$(externalDefinition);
      }
    }
     catch (eof) {
      if (!Kotlin.isType(eof, EOFException))
        throw eof;
    }
    var $receiver_0 = new Program(decls);
    if (($receiver_0 != null ? $receiver_0.tagged : null) !== true) {
      $receiver_0 != null ? ($receiver_0.tagged = true) : null;
      $receiver_0 != null ? ($receiver_0.pos = startPos) : null;
      $receiver_0 != null ? ($receiver_0.endPos = $receiver.pos) : null;
      var tokens = $receiver.tokens;
      if ($receiver_0 != null) {
        var $receiver_1 = StringBuilder_init();
        var tmp$_0, tmp$_1;
        $receiver_1.append_gw00v9$((tmp$_1 = (tmp$_0 = getOrNull_0(tokens, startPos)) != null ? tmp$_0.comment : null) != null ? tmp$_1 : '');
        $receiver_0.comment = $receiver_1.toString();
      }
      if (($receiver_0 != null ? $receiver_0.func : null) == null) {
        $receiver_0 != null ? ($receiver_0.func = $receiver._functionScope) : null;
      }
    }
    return $receiver_0;
  }
  function program($receiver) {
    return translationUnits($receiver);
  }
  function parsedProgram($receiver, info) {
    return new ParsedProgram(program($receiver), $receiver, info);
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
  function program_0($receiver) {
    var $receiver_0 = $receiver.items;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(new CToken(item));
    }
    return program(programParser(new ListReader(destination, new CToken(''))));
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
  function EvalContext() {
  }
  EvalContext.prototype.resolveId_61zpoe$ = function (id) {
    throw IllegalStateException_init(("Unknown identifier '" + id + "'").toString());
  };
  EvalContext.prototype.callFunction_asojb4$ = function (id, args) {
    throw IllegalStateException_init(('Unknown function ' + id).toString());
  };
  EvalContext.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EvalContext',
    interfaces: []
  };
  function toBool($receiver) {
    if ($receiver == null)
      return false;
    else if (typeof $receiver === 'boolean')
      return $receiver;
    else if (Kotlin.isNumber($receiver))
      return numberToInt($receiver) !== 0;
    else if (typeof $receiver === 'string') {
      return !isBlank($receiver) && !equals($receiver, '0') && !equals($receiver, 'false');
    }
     else
      return false;
  }
  function toNumber($receiver) {
    var tmp$;
    if (typeof $receiver === 'boolean')
      return $receiver ? 1 : 0;
    else if (Kotlin.isNumber($receiver))
      return $receiver;
    else if (typeof $receiver === 'string')
      return (tmp$ = toDoubleOrNull($receiver)) != null ? tmp$ : 0.0;
    else
      return 0.0;
  }
  function toDouble($receiver) {
    return numberToDouble(toNumber($receiver));
  }
  function toInt($receiver) {
    return numberToInt(toNumber($receiver));
  }
  function constantEvaluate($receiver, ctx) {
    if (ctx === void 0)
      ctx = new EvalContext();
    if (Kotlin.isType($receiver, Binop)) {
      var lv = constantEvaluate($receiver.l, ctx);
      var rv = constantEvaluate($receiver.r, ctx);
      switch ($receiver.op) {
        case '+':
          return toInt(lv) + toInt(rv) | 0;
        case '-':
          return toInt(lv) - toInt(rv) | 0;
        case '*':
          return Kotlin.imul(toInt(lv), toInt(rv));
        case '/':
          return toInt(lv) / toInt(rv) | 0;
        case '%':
          return toInt(lv) % toInt(rv);
        case '<':
          return toDouble(lv) < toDouble(rv);
        case '>':
          return toDouble(lv) > toDouble(rv);
        case '<=':
          return toDouble(lv) <= toDouble(rv);
        case '>=':
          return toDouble(lv) >= toDouble(rv);
        case '==':
          return toDouble(lv) === toDouble(rv);
        case '!=':
          return toDouble(lv) !== toDouble(rv);
        case '&&':
          return toBool(lv) && toBool(rv);
        case '||':
          return toBool(lv) || toBool(rv);
        default:throw new NotImplementedError_init('An operation is not implemented: ' + ('Binop: ' + $receiver.op));
      }
    }
     else if (Kotlin.isType($receiver, Unop)) {
      var rv_0 = constantEvaluate($receiver.rvalue, ctx);
      if (equals($receiver.op, '!'))
        return !toBool(rv_0);
      else {
        throw new NotImplementedError_init('An operation is not implemented: ' + ('Unop: ' + $receiver.op));
      }
    }
     else if (Kotlin.isType($receiver, IntConstant_3))
      return $receiver.value;
    else if (Kotlin.isType($receiver, DecimalConstant_0))
      return $receiver.value;
    else if (Kotlin.isType($receiver, StringConstant))
      return $receiver.value;
    else if (Kotlin.isType($receiver, CharConstant))
      return $receiver.value;
    else if (Kotlin.isType($receiver, Id))
      return ctx.resolveId_61zpoe$($receiver.name);
    else if (Kotlin.isType($receiver, CallExpr)) {
      if (!Kotlin.isType($receiver.expr, Id)) {
        throw IllegalStateException_init(("Can't evaluate function " + $receiver.expr).toString());
      }
      var tmp$ = $receiver.expr.name;
      var $receiver_0 = $receiver.args;
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_0;
      tmp$_0 = $receiver_0.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        destination.add_11rb$(constantEvaluate(item, ctx));
      }
      return ctx.callFunction_asojb4$(tmp$, copyToArray(destination));
    }
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
    this.comment = '';
    this.replacement = null;
    this.keep = true;
  }
  Object.defineProperty(PToken.prototype, 'start', {
    get: function () {
      return this.range.start;
    }
  });
  Object.defineProperty(PToken.prototype, 'end', {
    get: function () {
      return this.range.endInclusive + 1 | 0;
    }
  });
  PToken.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PToken',
    interfaces: []
  };
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
  function DefineFunction(id, args, replacement) {
    this.id = id;
    this.args = args;
    this.replacement = replacement;
  }
  DefineFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DefineFunction',
    interfaces: []
  };
  DefineFunction.prototype.component1 = function () {
    return this.id;
  };
  DefineFunction.prototype.component2 = function () {
    return this.args;
  };
  DefineFunction.prototype.component3 = function () {
    return this.replacement;
  };
  DefineFunction.prototype.copy_30saic$ = function (id, args, replacement) {
    return new DefineFunction(id === void 0 ? this.id : id, args === void 0 ? this.args : args, replacement === void 0 ? this.replacement : replacement);
  };
  DefineFunction.prototype.toString = function () {
    return 'DefineFunction(id=' + Kotlin.toString(this.id) + (', args=' + Kotlin.toString(this.args)) + (', replacement=' + Kotlin.toString(this.replacement)) + ')';
  };
  DefineFunction.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.args) | 0;
    result = result * 31 + Kotlin.hashCode(this.replacement) | 0;
    return result;
  };
  DefineFunction.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.args, other.args) && Kotlin.equals(this.replacement, other.replacement)))));
  };
  function PreprocessorInfo(moduleName, packageName, runtimeClass, constantDecls, nativeIncludes, subTarget, runtime) {
    if (moduleName === void 0)
      moduleName = 'Program';
    if (packageName === void 0)
      packageName = '';
    if (runtimeClass === void 0)
      runtimeClass = null;
    if (constantDecls === void 0) {
      constantDecls = emptyMap();
    }
    if (nativeIncludes === void 0) {
      nativeIncludes = emptyList();
    }
    if (subTarget === void 0)
      subTarget = 'common';
    if (runtime === void 0)
      runtime = true;
    this.moduleName = moduleName;
    this.packageName = packageName;
    this.runtimeClass = runtimeClass;
    this.constantDecls = constantDecls;
    this.nativeIncludes = nativeIncludes;
    this.subTarget = subTarget;
    this.runtime = runtime;
  }
  PreprocessorInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PreprocessorInfo',
    interfaces: []
  };
  PreprocessorInfo.prototype.component1 = function () {
    return this.moduleName;
  };
  PreprocessorInfo.prototype.component2 = function () {
    return this.packageName;
  };
  PreprocessorInfo.prototype.component3 = function () {
    return this.runtimeClass;
  };
  PreprocessorInfo.prototype.component4 = function () {
    return this.constantDecls;
  };
  PreprocessorInfo.prototype.component5 = function () {
    return this.nativeIncludes;
  };
  PreprocessorInfo.prototype.component6 = function () {
    return this.subTarget;
  };
  PreprocessorInfo.prototype.component7 = function () {
    return this.runtime;
  };
  PreprocessorInfo.prototype.copy_vhr1th$ = function (moduleName, packageName, runtimeClass, constantDecls, nativeIncludes, subTarget, runtime) {
    return new PreprocessorInfo(moduleName === void 0 ? this.moduleName : moduleName, packageName === void 0 ? this.packageName : packageName, runtimeClass === void 0 ? this.runtimeClass : runtimeClass, constantDecls === void 0 ? this.constantDecls : constantDecls, nativeIncludes === void 0 ? this.nativeIncludes : nativeIncludes, subTarget === void 0 ? this.subTarget : subTarget, runtime === void 0 ? this.runtime : runtime);
  };
  PreprocessorInfo.prototype.toString = function () {
    return 'PreprocessorInfo(moduleName=' + Kotlin.toString(this.moduleName) + (', packageName=' + Kotlin.toString(this.packageName)) + (', runtimeClass=' + Kotlin.toString(this.runtimeClass)) + (', constantDecls=' + Kotlin.toString(this.constantDecls)) + (', nativeIncludes=' + Kotlin.toString(this.nativeIncludes)) + (', subTarget=' + Kotlin.toString(this.subTarget)) + (', runtime=' + Kotlin.toString(this.runtime)) + ')';
  };
  PreprocessorInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.moduleName) | 0;
    result = result * 31 + Kotlin.hashCode(this.packageName) | 0;
    result = result * 31 + Kotlin.hashCode(this.runtimeClass) | 0;
    result = result * 31 + Kotlin.hashCode(this.constantDecls) | 0;
    result = result * 31 + Kotlin.hashCode(this.nativeIncludes) | 0;
    result = result * 31 + Kotlin.hashCode(this.subTarget) | 0;
    result = result * 31 + Kotlin.hashCode(this.runtime) | 0;
    return result;
  };
  PreprocessorInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.moduleName, other.moduleName) && Kotlin.equals(this.packageName, other.packageName) && Kotlin.equals(this.runtimeClass, other.runtimeClass) && Kotlin.equals(this.constantDecls, other.constantDecls) && Kotlin.equals(this.nativeIncludes, other.nativeIncludes) && Kotlin.equals(this.subTarget, other.subTarget) && Kotlin.equals(this.runtime, other.runtime)))));
  };
  function PreprocessorGlobalContext() {
    this.moduleName = 'Program';
    this.packageName = '';
    this.runtimeClass = null;
    this.constantDecls = LinkedHashMap_init();
  }
  PreprocessorGlobalContext.prototype.info = function () {
    return new PreprocessorInfo(this.moduleName, this.packageName, this.runtimeClass, toMap(this.constantDecls));
  };
  PreprocessorGlobalContext.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PreprocessorGlobalContext',
    interfaces: []
  };
  function PreprocessorContext(initialMacros, file, optimization, includeLines, global, includeProvider) {
    if (initialMacros === void 0) {
      initialMacros = emptyList();
    }
    if (file === void 0)
      file = 'unknown';
    if (optimization === void 0)
      optimization = 0;
    if (includeLines === void 0)
      includeLines = true;
    if (global === void 0)
      global = new PreprocessorGlobalContext();
    if (includeProvider === void 0)
      includeProvider = PreprocessorContext_init$lambda;
    EvalContext.call(this);
    this.initialMacros = initialMacros;
    this.file = file;
    this.optimization = optimization;
    this.includeLines = includeLines;
    this.global = global;
    this.includeProvider = includeProvider;
    this.fileId = '<entry>';
    this.includeFilesOnce = LinkedHashSet_init();
    var $receiver = new NamedMap(void 0, PreprocessorContext$defines$lambda);
    $receiver.addAll_p1ys8y$(this.initialMacros);
    this.defines = $receiver;
    this.counter_0 = 0;
    this.includeLevel_0 = 0;
    this.ifLevel = 0;
  }
  PreprocessorContext.prototype.includeBlock_u8di54$ = function (newFile, newFileId, callback) {
    var oldFile = this.file;
    var oldFileId = this.fileId;
    this.file = newFile;
    this.fileId = newFileId;
    this.includeLevel_0 = this.includeLevel_0 + 1 | 0;
    try {
      return callback();
    }
    finally {
      this.includeLevel_0 = this.includeLevel_0 - 1 | 0;
      this.fileId = oldFileId;
      this.file = oldFile;
    }
  };
  PreprocessorContext.prototype.defines_61zpoe$ = function (name) {
    var tmp$, tmp$_0, tmp$_1;
    switch (name) {
      case '__KTCC__':
        tmp$_1 = '1';
        break;
      case '__FILE__':
        tmp$_1 = get_cquoted(this.file);
        break;
      case '__LINE__':
        tmp$_1 = '-1';
        break;
      case '__STDC__':
        tmp$_1 = '1';
        break;
      case '__DATE__':
        tmp$_1 = get_cquoted('??? ?? ????');
        break;
      case '__TIME__':
        tmp$_1 = get_cquoted('??:??:??');
        break;
      case '__TIMESTAMP__':
        tmp$_1 = get_cquoted('??? ??? ?? ??:??:?? ????');
        break;
      case '__STDC_VERSION__':
        tmp$_1 = get_cquoted('201710L');
        break;
      case '__COUNTER__':
        tmp$_1 = (tmp$ = this.counter_0, this.counter_0 = tmp$ + 1 | 0, tmp$).toString();
        break;
      case '__unix__':
        tmp$_1 = '1';
        break;
      case '__INCLUDE_LEVEL__':
        tmp$_1 = this.includeLevel_0.toString();
        break;
      case '__OPTIMIZE__':
        tmp$_1 = this.optimization > 0 ? '1' : null;
        break;
      case '__OBJC__':
        tmp$_1 = null;
        break;
      case '__ASSEMBLER__':
        tmp$_1 = null;
        break;
      default:tmp$_1 = (tmp$_0 = this.defines.get_11rb$(name)) != null ? tmp$_0.bodyStr : null;
        break;
    }
    return tmp$_1;
  };
  PreprocessorContext.prototype.defined_61zpoe$ = function (name) {
    return this.defines_61zpoe$(name) != null;
  };
  PreprocessorContext.prototype.define_haiom4$ = function (macro) {
    var $receiver = this.defines;
    var key = macro.name;
    $receiver.put_xwzc9p$(key, macro);
  };
  PreprocessorContext.prototype.define_puj7f4$ = function (name, replacement) {
    this.define_haiom4$(Macro$Companion_getInstance().invoke_puj7f4$(name, replacement));
  };
  PreprocessorContext.prototype.undefine_61zpoe$ = function (name) {
    this.defines.remove_11rb$(name);
  };
  PreprocessorContext.prototype.resolveId_61zpoe$ = function (id) {
    var result = this.defines_61zpoe$(id);
    return result;
  };
  PreprocessorContext.prototype.callFunction_asojb4$ = function (id, args) {
    var tmp$;
    if (equals(id, 'defined')) {
      var value = getOrNull(args, 0);
      var result = value != null;
      tmp$ = result;
    }
     else
      tmp$ = EvalContext.prototype.callFunction_asojb4$.call(this, id, args);
    return tmp$;
  };
  function PreprocessorContext_init$lambda(file, kind) {
    var tmp$, tmp$_0;
    var tmp$_1;
    if ((tmp$_0 = (tmp$ = CStdIncludes.get_11rb$(file)) != null ? tmp$.cHeader : null) != null)
      tmp$_1 = tmp$_0;
    else {
      throw IllegalStateException_init(("Can't find file=" + file + ', kind=' + kind).toString());
    }
    return tmp$_1;
  }
  function PreprocessorContext$defines$lambda(it) {
    return it.name;
  }
  PreprocessorContext.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PreprocessorContext',
    interfaces: [EvalContext]
  };
  function Macro(name, body, args, constantResult) {
    Macro$Companion_getInstance();
    if (constantResult === void 0)
      constantResult = null;
    this.name = name;
    this.body = body;
    this.args = args;
    this.constantResult = constantResult;
    this.bodyStr_f8fjib$_0 = lazy(Macro$bodyStr$lambda(this));
  }
  Object.defineProperty(Macro.prototype, 'isFunction', {
    get: function () {
      return this.args != null;
    }
  });
  Object.defineProperty(Macro.prototype, 'isVariadic', {
    get: function () {
      var tmp$;
      return equals((tmp$ = this.args) != null ? lastOrNull(tmp$) : null, '...');
    }
  });
  Object.defineProperty(Macro.prototype, 'numArgsIncludingVariadic', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this.args) != null ? tmp$.size : null) != null ? tmp$_0 : 0;
    }
  });
  Object.defineProperty(Macro.prototype, 'numNonVariadicArgs', {
    get: function () {
      return this.isVariadic ? this.numArgsIncludingVariadic - 1 | 0 : this.numArgsIncludingVariadic;
    }
  });
  Object.defineProperty(Macro.prototype, 'bodyStr', {
    get: function () {
      return this.bodyStr_f8fjib$_0.value;
    }
  });
  function Macro$Companion() {
    Macro$Companion_instance = this;
  }
  Macro$Companion.prototype.invoke_61zpoe$ = function (arg) {
    var parts = split(arg, ['='], void 0, 2);
    return Macro$Companion_getInstance().invoke_puj7f4$(parts.get_za3lpa$(0), 1 >= 0 && 1 <= get_lastIndex_0(parts) ? parts.get_za3lpa$(1) : '1');
  };
  Macro$Companion.prototype.invoke_puj7f4$ = function (name, body) {
    var tmp$ = Macro$Companion_getInstance();
    var $receiver = tokenize(body, IncludeMode$ALL_getInstance()).items;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(item.str);
    }
    return tmp$.invoke_okabbe$(name, destination);
  };
  Macro$Companion.prototype.invoke_mdsbjt$ = function (nameBody) {
    return Macro$Companion_getInstance().invoke_puj7f4$(nameBody.first, nameBody.second);
  };
  Macro$Companion.prototype.invoke_okabbe$ = function (name, tokens, constantResult) {
    if (constantResult === void 0)
      constantResult = null;
    var isFunction = {v: false};
    var args = ArrayList_init();
    var body = ArrayList_init();
    var $receiver = reader(tokens, '');
    if (equals($receiver.peekOutside_za3lpa$(), '(')) {
      isFunction.v = true;
      $receiver.expect_11rb$('(');
      while (!$receiver.eof && !equals($receiver.peekOutside_za3lpa$(), ')')) {
        var arg = skipSpaces_0($receiver).read();
        args.add_11rb$(arg);
        if (equals($receiver.peekOutside_za3lpa$(), ')'))
          break;
        $receiver.expect_11rb$(',');
      }
      $receiver.expect_11rb$(')');
    }
    skipSpaces_0($receiver);
    while (!$receiver.eof) {
      var element = $receiver.read();
      body.add_11rb$(element);
    }
    return new Macro(name, body, isFunction.v ? args : null, constantResult);
  };
  Macro$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Macro$Companion_instance = null;
  function Macro$Companion_getInstance() {
    if (Macro$Companion_instance === null) {
      new Macro$Companion();
    }
    return Macro$Companion_instance;
  }
  function Macro$bodyStr$lambda(this$Macro) {
    return function () {
      var $receiver = joinToString(this$Macro.body, '');
      var tmp$;
      return trim(Kotlin.isCharSequence(tmp$ = $receiver) ? tmp$ : throwCCE()).toString();
    };
  }
  Macro.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Macro',
    interfaces: []
  };
  Macro.prototype.component1 = function () {
    return this.name;
  };
  Macro.prototype.component2 = function () {
    return this.body;
  };
  Macro.prototype.component3 = function () {
    return this.args;
  };
  Macro.prototype.component4 = function () {
    return this.constantResult;
  };
  Macro.prototype.copy_75b65g$ = function (name, body, args, constantResult) {
    return new Macro(name === void 0 ? this.name : name, body === void 0 ? this.body : body, args === void 0 ? this.args : args, constantResult === void 0 ? this.constantResult : constantResult);
  };
  Macro.prototype.toString = function () {
    return 'Macro(name=' + Kotlin.toString(this.name) + (', body=' + Kotlin.toString(this.body)) + (', args=' + Kotlin.toString(this.args)) + (', constantResult=' + Kotlin.toString(this.constantResult)) + ')';
  };
  Macro.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.body) | 0;
    result = result * 31 + Kotlin.hashCode(this.args) | 0;
    result = result * 31 + Kotlin.hashCode(this.constantResult) | 0;
    return result;
  };
  Macro.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.body, other.body) && Kotlin.equals(this.args, other.args) && Kotlin.equals(this.constantResult, other.constantResult)))));
  };
  function expectEOL($receiver) {
    return expectAny($receiver, ['\n', '<EOF>']);
  }
  function expectAny($receiver, expect) {
    var actual = $receiver.readOutside();
    if (!contains_1(expect, actual.str))
      throw new ExpectException('Expected ' + toList(expect) + " but found '" + actual + "'");
    return actual;
  }
  function _isSpace($receiver) {
    return isBlank($receiver) && !equals($receiver, '\n');
  }
  function skipSpaces($receiver, skipEOL, skipComments, getStr) {
    if (skipEOL === void 0)
      skipEOL = false;
    if (skipComments === void 0)
      skipComments = true;
    while (!$receiver.eof) {
      var peek = getStr($receiver.peekOutside_za3lpa$());
      if (_isSpace(peek)) {
        $receiver.readOutside();
        continue;
      }
      if (equals(peek, '\n') && skipEOL) {
        $receiver.readOutside();
        continue;
      }
      if (skipComments && (startsWith(peek, '//') || startsWith(peek, '/*'))) {
        $receiver.readOutside();
        continue;
      }
      break;
    }
    return $receiver;
  }
  function IncludeKind(name, ordinal, ch) {
    Enum.call(this);
    this.ch = toBoxedChar(ch);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function IncludeKind_initFields() {
    IncludeKind_initFields = function () {
    };
    IncludeKind$GLOBAL_instance = new IncludeKind('GLOBAL', 0, 60);
    IncludeKind$LOCAL_instance = new IncludeKind('LOCAL', 1, 34);
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
  IncludeKind.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IncludeKind',
    interfaces: [Enum]
  };
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
      default:throwISE('No enum constant com.soywiz.ktcc.preprocessor.IncludeKind.' + name);
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
    return (tmp$ = getOrNull_0(this.tokens, this.pos)) != null ? tmp$ : new PToken('<EOF>', new IntRange(this.lastPos, this.lastPos), '<undefined file>', this.lastLine);
  };
  PreprocessorReader.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PreprocessorReader',
    interfaces: [ListReader]
  };
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
  function skipSpacesAndEOLS$lambda$lambda(it) {
    return it;
  }
  function skipSpacesAndEOLS($receiver) {
    skipSpaces($receiver, true, void 0, skipSpacesAndEOLS$lambda$lambda);
    return $receiver;
  }
  function peekWithoutSpaces($receiver, offset) {
    if (offset === void 0)
      offset = 0;
    var keepPos_klfg04$result;
    var spos = $receiver.pos;
    try {
      keepPos_klfg04$result = skipSpaces_0($receiver).peekOutside_za3lpa$(offset);
    }
    finally {
      $receiver.pos = spos;
    }
    return keepPos_klfg04$result;
  }
  function PNode() {
  }
  PNode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PNode',
    interfaces: []
  };
  function PLiterals(list) {
    PNode.call(this);
    this.list = list;
  }
  PLiterals.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PLiterals',
    interfaces: [PNode]
  };
  function PIf(parts, default_0) {
    PNode.call(this);
    this.parts = parts;
    this.default = default_0;
  }
  PIf.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PIf',
    interfaces: [PNode]
  };
  function PDefine(parts) {
    PNode.call(this);
    this.parts = parts;
  }
  PDefine.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PDefine',
    interfaces: [PNode]
  };
  function PInclude(parts) {
    PNode.call(this);
    this.parts = parts;
  }
  PInclude.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PInclude',
    interfaces: [PNode]
  };
  function PPragma(parts) {
    PNode.call(this);
    this.parts = parts;
  }
  PPragma.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PPragma',
    interfaces: [PNode]
  };
  function PError(parts) {
    PNode.call(this);
    this.parts = parts;
  }
  PError.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PError',
    interfaces: [PNode]
  };
  function PLine(parts) {
    PNode.call(this);
    this.parts = parts;
  }
  PLine.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PLine',
    interfaces: [PNode]
  };
  function PUndef(parts) {
    PNode.call(this);
    this.parts = parts;
  }
  PUndef.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PUndef',
    interfaces: [PNode]
  };
  function CPreprocessor(ctx, input, out) {
    if (out === void 0)
      out = StringBuilder_init();
    this.ctx = ctx;
    this.input = input;
    this.out = out;
    this.nlines = lines(this.input).size;
    var $receiver = StringBuilder_init();
    var sb = $receiver;
    var tokens = this.internalTokenize_pdl1vz$(this.input);
    var tmp$;
    var addLines = 0;
    while (!tokens.eof) {
      var tok = tokens.read();
      if (startsWith(tok.str, '/*') || startsWith(tok.str, '//')) {
        tmp$ = iterator(tok.str);
        while (tmp$.hasNext()) {
          var c = unboxChar(tmp$.next());
          if (c === 10) {
            sb.append_s8itvh$(10);
          }
           else {
            sb.append_s8itvh$(32);
          }
        }
      }
       else if (equals(tok.str, '\\') && equals(tokens.peekOutside_za3lpa$().str, '\n')) {
        tokens.read();
        addLines = addLines + 1 | 0;
      }
       else if (equals(tok.str, '\n')) {
        var times = addLines + 1 | 0;
        for (var index = 0; index < times; index++) {
          sb.append_gw00v9$('\n');
        }
        addLines = 0;
      }
       else
        sb.append_gw00v9$(tok.str);
    }
    this.prePreprocessor = $receiver.toString();
    this.filteredTokens = this.internalTokenize_pdl1vz$(this.prePreprocessor).items;
    this.tokens = new PreprocessorReader(this.filteredTokens);
  }
  function CPreprocessor$internalTokenize$lambda(this$CPreprocessor) {
    return function ($receiver) {
      var $receiver_0 = new PToken($receiver.str, until($receiver.pos, $receiver.pos + $receiver.str.length | 0), this$CPreprocessor.ctx.file, $receiver.nline);
      $receiver_0.comment = $receiver.comment;
      return $receiver_0;
    };
  }
  CPreprocessor.prototype.internalTokenize_pdl1vz$ = function ($receiver) {
    var input = $receiver;
    return doTokenize(input, new PToken(void 0, until(input.length, input.length), this.ctx.file, this.nlines), IncludeMode$ALL_getInstance(), CPreprocessor$internalTokenize$lambda(this));
  };
  CPreprocessor.prototype.preprocess = function () {
    this.preprocess_ue1dxp$(this.tokens);
    return this;
  };
  CPreprocessor.prototype.id_ue1dxp$ = function ($receiver) {
    return $receiver.read();
  };
  CPreprocessor.prototype.readPPtokens_ue1dxp$ = function ($receiver) {
    var out = ArrayList_init();
    while (!$receiver.eof && !equals($receiver.peek_za3lpa$(), '\n')) {
      var element = $receiver.read();
      out.add_11rb$(element);
    }
    return out;
  };
  CPreprocessor.prototype.expectEOL_ue1dxp$ = function ($receiver) {
    if (!$receiver.eof)
      $receiver.expect_11rb$('\n');
  };
  CPreprocessor.prototype.readDirective_ue1dxp$ = function ($receiver) {
    skipSpacesAndEOLS($receiver);
    if (!equals($receiver.peekOutside_za3lpa$(), '#')) {
      throw IllegalStateException_init(("Not a directive '" + $receiver.peekOutside_za3lpa$() + "'").toString());
    }
    $receiver.expect_11rb$('#');
    return skipSpaces_0($receiver).read();
  };
  function CPreprocessor$expectDirective$lambda() {
    return '';
  }
  CPreprocessor.prototype.expectDirective_xcoab9$ = function ($receiver, name, message) {
    if (message === void 0)
      message = CPreprocessor$expectDirective$lambda;
    var tname = trimStart(name, Kotlin.charArrayOf(35));
    var directive = this.peekDirective_ue1dxp$($receiver);
    if (!equals(directive, tname)) {
      throw IllegalStateException_init(('Expected #' + tname + ' but found #' + toString(directive) + ' : ' + message()).toString());
    }
     else {
      this.readDirective_ue1dxp$($receiver);
    }
  };
  CPreprocessor.prototype.peekDirective_ue1dxp$ = function ($receiver) {
    var spos = $receiver.pos;
    try {
      skipSpaces_0($receiver);
      if (equals($receiver.peekOutside_za3lpa$(), '#')) {
        $receiver.read();
        skipSpaces_0($receiver);
        return $receiver.read();
      }
      return null;
    }
    finally {
      $receiver.pos = spos;
    }
  };
  CPreprocessor.prototype.ifGroup_ue1dxp$ = function ($receiver) {
    var tmp$;
    var directive = this.readDirective_ue1dxp$($receiver);
    switch (directive) {
      case 'if':
        var expr = expression(programParser_0(this.readPTokensEolStr_ue1dxp$($receiver)));
        this.out.append_gw00v9$('\n');
        var result = constantEvaluate(expr, this.ctx);
        tmp$ = toBool(result);
        break;
      case 'ifdef':
      case 'ifndef':
        var $receiver_0 = this.readPTokensEolStr_ue1dxp$($receiver);
        var tmp$_0;
        var id = trim(Kotlin.isCharSequence(tmp$_0 = $receiver_0) ? tmp$_0 : throwCCE()).toString();
        this.out.append_gw00v9$('\n');
        var resultRaw = this.ctx.defined_61zpoe$(id);
        tmp$ = equals(directive, 'ifdef') ? resultRaw : !resultRaw;
        break;
      default:throw IllegalStateException_init(('#' + directive + ' not #if, #ifdef or #ifndef').toString());
    }
    var result_0 = tmp$;
    return result_0;
  };
  CPreprocessor.prototype.tryElifGroup_ue1dxp$ = function ($receiver) {
    var directive = this.peekDirective_ue1dxp$($receiver);
    if (equals(directive, 'elif')) {
      this.expectDirective_xcoab9$($receiver, directive);
      var expr = expression(programParser_0(this.readPTokensEolStr_ue1dxp$($receiver)));
      this.out.append_gw00v9$('\n');
      var result = toBool(constantEvaluate(expr, this.ctx));
      return result;
    }
     else {
      return null;
    }
  };
  CPreprocessor.prototype.tryElseGroup_ue1dxp$ = function ($receiver) {
    var directive = this.peekDirective_ue1dxp$($receiver);
    if (equals(directive, 'else')) {
      this.expectDirective_xcoab9$($receiver, directive);
      var skip = this.readPTokensEolStr_ue1dxp$($receiver);
      this.out.append_gw00v9$('\n');
      return true;
    }
     else {
      return false;
    }
  };
  Object.defineProperty(CPreprocessor.prototype, 'ifIndent_0', {
    get: function () {
      var tmp$ = Indenter$Indents_getInstance();
      var b = this.ctx.ifLevel - 1 | 0;
      return tmp$.get_za3lpa$(Math_0.max(0, b));
    }
  });
  CPreprocessor.prototype.ifLevel_0 = function (callback) {
    var tmp$;
    tmp$ = this.ctx;
    tmp$.ifLevel = tmp$.ifLevel + 1 | 0;
    try {
      return callback();
    }
    finally {
      var tmp$_0;
      tmp$_0 = this.ctx;
      tmp$_0.ifLevel = tmp$_0.ifLevel - 1 | 0;
    }
  };
  CPreprocessor.prototype.ifSection_xob6zs$ = function ($receiver, baseShow) {
    var tmp$;
    tmp$ = this.ctx;
    tmp$.ifLevel = tmp$.ifLevel + 1 | 0;
    try {
      var tmp$_0;
      var showAny = {v: false};
      var show = this.ifGroup_ue1dxp$($receiver);
      showAny.v = showAny.v | show;
      this.tryGroup_k9acdb$($receiver, false, baseShow && show);
      while (true) {
        tmp$_0 = this.tryElifGroup_ue1dxp$($receiver);
        if (tmp$_0 == null) {
          break;
        }
        var show_0 = tmp$_0;
        showAny.v = showAny.v | show_0;
        this.tryGroup_k9acdb$($receiver, false, baseShow && show_0);
      }
      if (this.tryElseGroup_ue1dxp$($receiver)) {
        this.tryGroup_k9acdb$($receiver, false, baseShow && !showAny.v);
      }
      this.expectDirective_xcoab9$($receiver, '#endif');
      var skip = this.readPTokensEolStr_ue1dxp$($receiver);
      this.out.append_gw00v9$('\n');
    }
    finally {
      var tmp$_1;
      tmp$_1 = this.ctx;
      tmp$_1.ifLevel = tmp$_1.ifLevel - 1 | 0;
    }
  };
  CPreprocessor.prototype.readPTokensEol_xob6zs$ = function ($receiver, skipSpaces) {
    if (skipSpaces === void 0)
      skipSpaces = true;
    var ptokens = skipSpaces ? this.readPPtokens_ue1dxp$(skipSpaces_0($receiver)) : this.readPPtokens_ue1dxp$($receiver);
    var eol = false;
    if (!$receiver.eof) {
      $receiver.expect_11rb$('\n');
      eol = true;
    }
    return ptokens;
  };
  CPreprocessor.prototype.readPTokensEolStr_ue1dxp$ = function ($receiver) {
    return joinToString(this.readPTokensEol_xob6zs$($receiver), '');
  };
  function CPreprocessor$preprocessTokens$lambda$flush(closure$groups, closure$current) {
    return function () {
      var $receiver = closure$groups;
      var element = toList_0(closure$current);
      $receiver.add_11rb$(element);
      closure$current.clear();
    };
  }
  function CPreprocessor$preprocessTokens$lambda$lambda(it) {
    return joinToString(it, '');
  }
  CPreprocessor.prototype.preprocessTokens_91c5s5$ = function ($receiver, level, original) {
    if (level === void 0)
      level = 0;
    if (original === void 0)
      original = $receiver;
    if (level > 300) {
      throw IllegalStateException_init(('Too much preprocessing stuff level=' + level + ' ::: original=' + original + ', this=' + $receiver).toString());
    }
    var out = ArrayList_init();
    var reader_0 = reader($receiver, '');
    var replacement = {v: false};
    var replacementFunction = {v: false};
    var replacementMacro = {v: false};
    var tmp$, tmp$_0, tmp$_1;
    while (!reader_0.eof) {
      var tok = reader_0.read();
      var macro = this.ctx.defines.get_11rb$(tok);
      if (macro != null && macro.isFunction && equals(peekWithoutSpaces(reader_0), '(')) {
        var macroArgs = (tmp$ = macro.args) != null ? tmp$ : emptyList();
        replacement.v = true;
        replacementFunction.v = true;
        skipSpaces_0(reader_0).expect_11rb$('(');
        var inLevel = 0;
        var groups = ArrayList_init();
        var current = ArrayList_init();
        var flush = CPreprocessor$preprocessTokens$lambda$flush(groups, current);
        skipSpaces_0(reader_0);
        loop: while (!reader_0.eof && !equals(reader_0.peek_za3lpa$(), '\n')) {
          var rtok = reader_0.read();
          switch (rtok) {
            case '[':
              inLevel = inLevel + 1 | 0;
              break;
            case ']':
              inLevel = inLevel - 1 | 0;
              break;
            case '{':
              inLevel = inLevel + 1 | 0;
              break;
            case '}':
              inLevel = inLevel - 1 | 0;
              break;
            case '(':
              inLevel = inLevel + 1 | 0;
              break;
            case ')':
              if (inLevel === 0) {
                flush();
                break loop;
              }

              inLevel = inLevel - 1 | 0;
              break;
            case ',':
              if (inLevel === 0) {
                flush();
                skipSpaces_0(reader_0);
                continue loop;
              }

              break;
          }
          current.add_11rb$(rtok);
        }
        var argToGroup = toMutableMap(toMap_0(zip(macroArgs, groups)));
        if (macro.isVariadic) {
          var startVararg = macro.numNonVariadicArgs;
          var key = '__VA_ARGS__';
          var value = listOf(joinToString(drop(groups, startVararg), ', ', void 0, void 0, void 0, void 0, CPreprocessor$preprocessTokens$lambda$lambda));
          argToGroup.put_xwzc9p$(key, value);
        }
        var replacements = reader(macro.body, '');
        while (!replacements.eof) {
          if (equals(peekWithoutSpaces(replacements), '##')) {
            skipSpaces_0(replacements);
          }
          var repl = replacements.read();
          switch (repl) {
            case '#':
              var a = replacements.read();
              var b = (tmp$_1 = (tmp$_0 = argToGroup.get_11rb$(a)) != null ? joinToString(tmp$_0, '') : null) != null ? tmp$_1 : a;
              var element = get_cquoted(b);
              out.add_11rb$(element);
              break;
            case '##':
              skipSpaces_0(replacements);
              break;
            default:var tmp$_2;
              if ((Kotlin.isType(tmp$_2 = argToGroup, Map) ? tmp$_2 : throwCCE()).containsKey_11rb$(repl)) {
                var argUnprocessed = ensureNotNull(argToGroup.get_11rb$(repl));
                var argPreprocessed = this.preprocessTokens_91c5s5$(argUnprocessed, level + 1 | 0);
                addAll(out, argPreprocessed);
              }
               else {
                out.add_11rb$(repl);
              }

              break;
          }
        }
      }
       else if (macro != null) {
        if (!equals(macro.bodyStr, tok)) {
          replacementMacro.v = true;
          replacement.v = true;
        }
        addAll(out, macro.body);
      }
       else {
        out.add_11rb$(tok);
      }
    }
    if (replacement.v && level > 100) {
      return out;
    }
     else {
      return replacement.v ? this.preprocessTokens_91c5s5$(out, level + 1 | 0, original) : out;
    }
  };
  function CPreprocessor$tryGroupPart$lambda$ObjectLiteral(this$CPreprocessor) {
    this.this$CPreprocessor = this$CPreprocessor;
    EvalContext.call(this);
  }
  CPreprocessor$tryGroupPart$lambda$ObjectLiteral.prototype.resolveId_61zpoe$ = function (id) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = this.this$CPreprocessor.ctx.global.constantDecls.get_11rb$(id)) != null)
      tmp$_0 = tmp$;
    else {
      throw IllegalStateException_init(('Unknown identifier ' + id).toString());
    }
    return tmp$_0;
  };
  CPreprocessor$tryGroupPart$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [EvalContext]
  };
  function CPreprocessor$tryGroupPart$lambda(closure$placed, this$CPreprocessor, closure$fileContent) {
    return function () {
      closure$placed.v = true;
      return (new CPreprocessor(this$CPreprocessor.ctx, closure$fileContent, this$CPreprocessor.out)).preprocess();
    };
  }
  CPreprocessor.prototype.tryGroupPart_k9acdb$ = function ($receiver, error, show) {
    if (error === void 0)
      error = true;
    if (show === void 0)
      show = true;
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var startToken = $receiver.peekToken();
    var directive = this.peekDirective_ue1dxp$($receiver);
    if (directive == null) {
      var tokens = this.readPTokensEol_xob6zs$($receiver, false);
      if (show) {
        tmp$ = this.preprocessTokens_91c5s5$(tokens).iterator();
        while (tmp$.hasNext()) {
          var token = tmp$.next();
          this.out.append_gw00v9$(token);
        }
      }
      if (!$receiver.eof)
        this.out.append_gw00v9$('\n');
    }
     else
      switch (directive) {
        case 'if':
        case 'ifdef':
        case 'ifndef':
          this.ifSection_xob6zs$($receiver, show);
          break;
        case 'define':
          this.expectDirective_xcoab9$($receiver, 'define');
          var id = this.id_ue1dxp$(skipSpaces_0($receiver));
          var replacement = this.readPPtokens_ue1dxp$($receiver);
          this.expectEOL_ue1dxp$($receiver);
          this.out.append_gw00v9$('\n');
          if (show) {
            var tmp$_5;
            try {
              var expr = expression(programParser_0(joinToString(replacement, '')));
              var result = constantEvaluate(expr, new CPreprocessor$tryGroupPart$lambda$ObjectLiteral(this));
              var $receiver_0 = this.ctx.global.constantDecls;
              var value = toInt(result);
              $receiver_0.put_xwzc9p$(id, value);
              tmp$_5 = new Result(toInt(result));
            }
             catch (e) {
              if (Kotlin.isType(e, Throwable)) {
                tmp$_5 = new Result(createFailure(e));
              }
               else
                throw e;
            }
            var constantResult = tmp$_5;
            var tmp$_6 = this.ctx;
            var tmp$_7 = Macro$Companion_getInstance();
            var getOrNull$result;
            var tmp$_8;
            if (constantResult.isFailure) {
              getOrNull$result = null;
            }
             else {
              getOrNull$result = (tmp$_8 = constantResult.value) == null || Kotlin.isType(tmp$_8, Any) ? tmp$_8 : throwCCE();
            }
            tmp$_6.define_haiom4$(tmp$_7.invoke_okabbe$(id, replacement, getOrNull$result));
          }

          break;
        case 'undef':
          this.expectDirective_xcoab9$($receiver, 'undef');
          var id_0 = this.id_ue1dxp$(skipSpaces_0($receiver));
          skipSpaces_0($receiver);
          this.expectEOL_ue1dxp$($receiver);
          if (show) {
            this.ctx.undefine_61zpoe$(id_0);
          }

          break;
        case 'line':
        case 'pragma':
        case 'error':
        case 'include':
          this.expectDirective_xcoab9$($receiver, directive);
          var ptokens = this.readPTokensEol_xob6zs$($receiver);
          var destination = ArrayList_init();
          var tmp$_9;
          tmp$_9 = ptokens.iterator();
          while (tmp$_9.hasNext()) {
            var element = tmp$_9.next();
            if (!isBlank(element))
              destination.add_11rb$(element);
          }

          var ptks = destination;
          switch (directive) {
            case 'include':
              var $receiver_1 = joinToString(ptokens, '');
              var tmp$_10;
              var include = trim(Kotlin.isCharSequence(tmp$_10 = $receiver_1) ? tmp$_10 : throwCCE()).toString();
              var endIndex = include.length - 1 | 0;
              var includeName = include.substring(1, endIndex);
              switch (include.charCodeAt(0)) {
                case 60:
                  tmp$_0 = IncludeKind$GLOBAL_getInstance();
                  break;
                case 34:
                  tmp$_0 = IncludeKind$LOCAL_getInstance();
                  break;
                default:throw IllegalStateException_init("Not a '<' or '\"' in include".toString());
              }

              var kind = tmp$_0;
              var includeId = includeName + ':' + kind;
              var fileContent = show ? this.ctx.includeProvider(includeName, kind) : '';
              var placed = {v: false};
              if (show && !this.ctx.includeFilesOnce.contains_11rb$(includeId)) {
                this.ctx.includeBlock_u8di54$(includeName, includeId, CPreprocessor$tryGroupPart$lambda(placed, this, fileContent));
              }

              if (!endsWith_0(fileContent, '\n')) {
                this.out.append_gw00v9$('\n');
              }

              if (placed.v && this.ctx.includeLines) {
                this.out.append_gw00v9$('# ' + (startToken.nline + 1 | 0) + ' ' + get_cquoted(this.ctx.file) + '\n');
              }

              break;
            case 'line':
              var line = (tmp$_2 = (tmp$_1 = getOrNull_0(ptks, 0)) != null ? toIntOrNull(tmp$_1) : null) != null ? tmp$_2 : 0;
              var file = (tmp$_4 = (tmp$_3 = getOrNull_0(ptks, 1)) != null ? get_cunquoted(tmp$_3) : null) != null ? tmp$_4 : this.ctx.file;
              if (show) {
                this.out.append_gw00v9$('# ' + line + ' ' + get_cquoted(file) + '\n');
              }

              break;
            case 'error':
              this.out.append_gw00v9$('\n');
              if (show) {
                throw IllegalStateException_init(('Preprocessor error: ' + joinToString(ptokens, '')).toString());
              }

              break;
            case 'pragma':
              this.out.append_gw00v9$('\n');
              var pragma = firstOrNull_0(ptokens);
              switch (pragma) {
                case 'once':
                  var $receiver_2 = this.ctx.includeFilesOnce;
                  var element_0 = this.ctx.fileId;
                  $receiver_2.add_11rb$(element_0);
                  break;
                case 'ktcc':
                  var $receiver_3 = drop(ptokens, 1);
                  var tmp$_11;
                  var yielding = false;
                  var list = ArrayList_init();
                  tmp$_11 = $receiver_3.iterator();
                  while (tmp$_11.hasNext()) {
                    var item = tmp$_11.next();
                    if (yielding)
                      list.add_11rb$(item);
                    else {
                      if (!isBlank(item)) {
                        list.add_11rb$(item);
                        yielding = true;
                      }
                    }
                  }

                  var ptokens2 = list;
                  var ktccPragma = firstOrNull_0(ptokens2);
                  switch (ktccPragma) {
                    case 'module':
                      var tmp$_12 = this.ctx.global;
                      var $receiver_4 = joinToString(drop(ptokens2, 1), '');
                      var tmp$_13;
                      tmp$_12.moduleName = trim(Kotlin.isCharSequence(tmp$_13 = $receiver_4) ? tmp$_13 : throwCCE()).toString();
                      break;
                    case 'package':
                      var tmp$_14 = this.ctx.global;
                      var $receiver_5 = joinToString(drop(ptokens2, 1), '');
                      var tmp$_15;
                      tmp$_14.packageName = trim(Kotlin.isCharSequence(tmp$_15 = $receiver_5) ? tmp$_15 : throwCCE()).toString();
                      break;
                    case 'runtime':
                      var tmp$_16 = this.ctx.global;
                      var $receiver_6 = joinToString(drop(ptokens2, 1), '');
                      var tmp$_17;
                      tmp$_16.runtimeClass = trim(Kotlin.isCharSequence(tmp$_17 = $receiver_6) ? tmp$_17 : throwCCE()).toString();
                      break;
                    default:println("Unsupported ktcc '" + toString(ktccPragma) + "' (only module and package) : tokens: " + ptokens);
                      break;
                  }

                  break;
                default:throw IllegalStateException_init(('Unsupported #pragma ' + joinToString(ptokens, '')).toString());
              }

              break;
            default:throw new NotImplementedError_init('An operation is not implemented: ' + toString(directive));
          }

          break;
        default:if (error) {
            var ptokens_0 = this.readPTokensEol_xob6zs$($receiver);
            var destination_0 = ArrayList_init();
            var tmp$_18;
            tmp$_18 = ptokens_0.iterator();
            while (tmp$_18.hasNext()) {
              var element_1 = tmp$_18.next();
              if (!isBlank(element_1))
                destination_0.add_11rb$(element_1);
            }
            var ptks_0 = destination_0;
            throw IllegalStateException_init(('Unknown directive #' + toString(directive)).toString());
          }

          return false;
      }
    return true;
  };
  CPreprocessor.prototype.tryGroup_k9acdb$ = function ($receiver, error, show) {
    if (error === void 0)
      error = true;
    if (show === void 0)
      show = true;
    while (!$receiver.eof && this.tryGroupPart_k9acdb$($receiver, error, show)) {
    }
  };
  CPreprocessor.prototype.preprocess_ue1dxp$ = function ($receiver) {
    if (this.ctx.includeLines)
      this.out.append_gw00v9$('# 1 ' + get_cquoted(this.ctx.file) + '\n');
    this.tryGroup_k9acdb$($receiver, true);
  };
  CPreprocessor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CPreprocessor',
    interfaces: []
  };
  function preprocess($receiver, ctx) {
    if (ctx === void 0)
      ctx = new PreprocessorContext();
    var sb = StringBuilder_init();
    (new CPreprocessor(ctx, $receiver, sb)).preprocess();
    return sb.toString();
  }
  function KSerializer() {
  }
  KSerializer.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'KSerializer',
    interfaces: []
  };
  function Serializable(with_0) {
    if (with_0 === void 0)
      with_0 = getKClass(KSerializer);
    this.with = with_0;
  }
  Serializable.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Serializable',
    interfaces: [Annotation]
  };
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
    this.comment = '';
    this.tokenIndex = -1;
  }
  Object.defineProperty(CToken.prototype, 'columnStart', {
    get: function () {
      return this.pos - this.lineStart | 0;
    }
  });
  Object.defineProperty(CToken.prototype, 'columnEnd', {
    get: function () {
      return this.columnStart + this.str.length | 0;
    }
  });
  Object.defineProperty(CToken.prototype, 'columnMiddle', {
    get: function () {
      return (this.columnStart + this.columnEnd | 0) / 2 | 0;
    }
  });
  CToken.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CToken',
    interfaces: []
  };
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
    var $receiver_0 = new CToken($receiver.str, $receiver.pos, $receiver.nline, $receiver.lineStart);
    $receiver_0.comment = $receiver.comment;
    return $receiver_0;
  }
  function tokenize($receiver, include) {
    if (include === void 0)
      include = IncludeMode$NORMAL_getInstance();
    return doTokenize($receiver, new CToken('', $receiver.length, -1, -1), include, tokenize$lambda);
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
  IncludeMode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IncludeMode',
    interfaces: [Enum]
  };
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
      default:throwISE('No enum constant com.soywiz.ktcc.tokenizer.IncludeMode.' + name);
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
    this.comment = '';
    this.str = '';
    this.pos = 0;
    this.nline = 1;
    this.lineStart = 0;
  }
  Object.defineProperty(MutableTokenInfo.prototype, 'column', {
    get: function () {
      return this.pos - this.lineStart | 0;
    }
  });
  MutableTokenInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MutableTokenInfo',
    interfaces: []
  };
  function Tokenizer(reader, gen) {
    this.reader = reader;
    this.gen = gen;
    this.out = ArrayList_init();
    var $receiver = new MutableTokenInfo(this.reader);
    $receiver.lineStart = 0;
    this.info = $receiver;
    this.spos = this.reader.pos;
    this.comment = '';
  }
  Tokenizer.prototype.doTokenize_vc5edc$ = function (default_0, include) {
    if (include === void 0)
      include = IncludeMode$NORMAL_getInstance();
    this.doTokenize_sa8whk$(this.reader, default_0, include);
    return reader(this.out, default_0);
  };
  Tokenizer.prototype.rgen_0 = function (str, pos) {
    if (pos === void 0)
      pos = this.spos;
    this.info.comment = this.comment;
    this.info.str = str;
    this.info.pos = pos;
    this.comment = '';
    return this.gen(this.info);
  };
  function Tokenizer$doTokenize$lambda$lambda(this$doTokenize) {
    return function (it) {
      return !this$doTokenize.eof && unboxChar(this$doTokenize.peek()) !== 10;
    };
  }
  Tokenizer.prototype.doTokenize_sa8whk$ = function ($receiver, default_0, include) {
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
        this.comment += $receiver.readWhile_akknk2$(Tokenizer$doTokenize$lambda$lambda($receiver)) + '\n';
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
            this.comment += String.fromCharCode(unboxChar($receiver.read()));
          }
        }
        if (!$receiver.eof)
          $receiver.expect_61zpoe$('*/');
        var $receiver_6 = $receiver.str;
        var endIndex_1 = $receiver.pos;
        var bcomment = $receiver_6.substring(startPos_1, endIndex_1);
        this.comment += '';
        if (include.comments) {
          var $receiver_7 = this.out;
          var element_3 = this.rgen_0(bcomment);
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
        if ($receiver.tryPeek_61zpoe$(get_DOT())) {
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
      if (ndigits > 0 || ndecdigits > 0) {
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
  Tokenizer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Tokenizer',
    interfaces: []
  };
  function doTokenize_0(file, default_0, include, gen) {
    if (include === void 0)
      include = IncludeMode$NORMAL_getInstance();
    return (new Tokenizer(file, gen)).doTokenize_vc5edc$(default_0, include);
  }
  function BuilderMarker() {
  }
  BuilderMarker.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BuilderMarker',
    interfaces: [Annotation]
  };
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
  StmBuilder$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var StmBuilder$Companion_instance = null;
  function StmBuilder$Companion_getInstance() {
    if (StmBuilder$Companion_instance === null) {
      new StmBuilder$Companion();
    }
    return StmBuilder$Companion_instance;
  }
  StmBuilder.prototype.STM_clyrhi$ = function (stm) {
    this.stms_0.add_11rb$(stm);
    return stm;
  };
  StmBuilder.prototype.STM_o9ctcl$ = function (expr) {
    return this.STM_clyrhi$(new ExprStm(expr));
  };
  StmBuilder.prototype.STMS_2hzs7r$ = function (block) {
    return this.STM_clyrhi$(StmBuilder$Companion_getInstance().invoke_2hzs7r$(block));
  };
  StmBuilder.prototype.SWITCH_NO_FALLTHROUGH_sfv0dq$ = function (subject, block) {
    return this.STM_clyrhi$(SwitchBuilder$Companion_getInstance().invoke_sfv0dq$(subject, block));
  };
  StmBuilder.prototype.WHILE_x48hr4$ = function (cond, block) {
    return this.STM_clyrhi$(new While(cond, StmBuilder$Companion_getInstance().invoke_2hzs7r$(block)));
  };
  StmBuilder.prototype.BREAK = function () {
    return this.STM_clyrhi$(new Break());
  };
  StmBuilder.prototype.CONTINUE = function () {
    return this.STM_clyrhi$(new Continue());
  };
  StmBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StmBuilder',
    interfaces: []
  };
  function SwitchBuilder() {
    SwitchBuilder$Companion_getInstance();
    this.stms_0 = ArrayList_init();
  }
  function SwitchBuilder$Companion() {
    SwitchBuilder$Companion_instance = this;
  }
  SwitchBuilder$Companion.prototype.invoke_sfv0dq$ = function (subject, callback) {
    var $receiver = new SwitchBuilder();
    callback($receiver);
    return new SwitchWithoutFallthrough(subject, new Stms($receiver.stms_0));
  };
  SwitchBuilder$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SwitchBuilder$Companion_instance = null;
  function SwitchBuilder$Companion_getInstance() {
    if (SwitchBuilder$Companion_instance === null) {
      new SwitchBuilder$Companion();
    }
    return SwitchBuilder$Companion_instance;
  }
  SwitchBuilder.prototype.CASE_x48hr4$ = function (expr, body) {
    this.CASE_ljhi8$(new ConstExpr(expr), StmBuilder$Companion_getInstance().invoke_2hzs7r$(body));
  };
  SwitchBuilder.prototype.DEFAULT_2hzs7r$ = function (body) {
    this.DEFAULT_8drp10$(StmBuilder$Companion_getInstance().invoke_2hzs7r$(body));
  };
  SwitchBuilder.prototype.CASE_ljhi8$ = function (expr, body) {
    var $receiver = this.stms_0;
    var element = new CaseStm(expr, stms(body));
    $receiver.add_11rb$(element);
  };
  SwitchBuilder.prototype.DEFAULT_8drp10$ = function (body) {
    var $receiver = this.stms_0;
    var element = new DefaultStm(stms(body));
    $receiver.add_11rb$(element);
  };
  SwitchBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SwitchBuilder',
    interfaces: []
  };
  function findSymbolsRequiringStackAlloc$lambda(closure$out) {
    return function (it) {
      var tmp$, tmp$_0;
      if (Kotlin.isType(it, Unop) && equals(it.op, '&') && Kotlin.isType(it.rvalue, Id) && ((tmp$_0 = (tmp$ = it.rvalue.symbol) != null ? tmp$.scope : null) != null ? tmp$_0.isGlobal : null) !== true) {
        var $receiver = closure$out;
        var element = it.rvalue;
        $receiver.add_11rb$(element);
      }
      return Unit;
    };
  }
  function findSymbolsRequiringStackAlloc($receiver) {
    var out = LinkedHashSet_init();
    visitAllDescendants($receiver, findSymbolsRequiringStackAlloc$lambda(out));
    return out;
  }
  function lower$lambda$lambda(closure$it) {
    return function ($receiver) {
      $receiver.STM_clyrhi$(closure$it.body);
      if (closure$it.post != null) {
        $receiver.STM_o9ctcl$(closure$it.post);
      }
      return Unit;
    };
  }
  function lower$lambda$lambda$lambda$lambda(closure$it) {
    return function ($receiver) {
      $receiver.STM_o9ctcl$(closure$it.post);
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
          $receiver.STM_clyrhi$(it.init);
        else if (Kotlin.isType(tmp$, Expr))
          $receiver.STM_o9ctcl$(it.init);
        else {
          throw IllegalStateException_init(('Not a Decl or Expr in for init init=' + toString(it.init) + ' (' + Kotlin.getKClassFromExpression(it.init) + ')').toString());
        }
      var $receiver_0 = $receiver.WHILE_x48hr4$((tmp$_0 = it.cond) != null ? tmp$_0 : IntConstant(1), lower$lambda$lambda(it));
      $receiver_0.comment = it.comment;
      if (it.post != null) {
        $receiver_0.onContinue = lower$lambda$lambda$lambda(it);
      }
      return Unit;
    };
  }
  function lower($receiver) {
    return StmBuilder$Companion_getInstance().invoke_2hzs7r$(lower$lambda($receiver));
  }
  function expandTypes($receiver, out) {
    var tmp$, tmp$_0;
    out.add_11rb$($receiver);
    if (Kotlin.isType($receiver, BasePointerType))
      expandTypes($receiver.elementType, out);
    else if (Kotlin.isType($receiver, StructType)) {
      tmp$ = $receiver.info.fields.iterator();
      while (tmp$.hasNext()) {
        var field = tmp$.next();
        expandTypes(field.type, out);
      }
    }
     else if (Kotlin.isType($receiver, FunctionType)) {
      expandTypes($receiver.retType, out);
      tmp$_0 = $receiver.args.iterator();
      while (tmp$_0.hasNext()) {
        var arg = tmp$_0.next();
        expandTypes(arg.type, out);
      }
    }
  }
  function getAllTypes$lambda(closure$resolver, closure$out) {
    return function (it) {
      var tmp$;
      if (Kotlin.isType(it, VarDeclaration)) {
        tmp$ = it.parsedList.iterator();
        while (tmp$.hasNext()) {
          var decl = tmp$.next();
          expandTypes(closure$resolver.resolve_1vqhz6$(decl.type), closure$out);
        }
      }
       else if (Kotlin.isType(it, FuncDeclaration))
        expandTypes(closure$resolver.resolve_1vqhz6$(it.funcType), closure$out);
      return Unit;
    };
  }
  function getAllTypes($receiver, resolver) {
    var out = LinkedHashSet_init();
    visitAllDescendants($receiver, getAllTypes$lambda(resolver, out));
    return out;
  }
  function getMutatingVariables$lambda(closure$assignNames) {
    return function (it) {
      if (Kotlin.isType(it, SimpleAssignExpr) && Kotlin.isType(it.l, Id)) {
        var $receiver = closure$assignNames;
        var element = it.l.name;
        $receiver.add_11rb$(element);
      }
       else if (Kotlin.isType(it, BaseUnaryOp) && Kotlin.isType(it.operand, Id) && (equals(it.op, '++') || equals(it.op, '--'))) {
        var tmp$;
        var $receiver_0 = closure$assignNames;
        var element_0 = (Kotlin.isType(tmp$ = it.operand, Id) ? tmp$ : throwCCE()).name;
        $receiver_0.add_11rb$(element_0);
      }
      return Unit;
    };
  }
  function getMutatingVariables($receiver) {
    var assignNames = LinkedHashSet_init();
    visitAllDescendants($receiver, getMutatingVariables$lambda(assignNames));
    return assignNames;
  }
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
  StateMachineLowerer$Output.prototype.add_o9bryi$ = function (it) {
    this.decls.add_11rb$(it);
  };
  StateMachineLowerer$Output.prototype.add_ixxkzx$ = function (it) {
    var tmp$;
    var tmp$_0 = this.decls;
    var tmp$_1 = it.specifiers;
    var $receiver = it.initDeclaratorList;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$_2;
    tmp$_2 = $receiver.iterator();
    while (tmp$_2.hasNext()) {
      var item = tmp$_2.next();
      destination.add_11rb$(item.copy_42gxiz$(void 0, null));
    }
    var element = new VarDeclaration(tmp$_1, destination);
    tmp$_0.add_11rb$(element);
    tmp$ = it.initDeclaratorList.iterator();
    while (tmp$.hasNext()) {
      var i = tmp$.next();
      if (i.initializer != null) {
        this.add_8drp10$(new ExprStm(new SimpleAssignExpr(new Id(getName(i.declarator), null, i.type, false), i.initializer)));
      }
    }
  };
  StateMachineLowerer$Output.prototype.add_8drp10$ = function (it) {
    if (Kotlin.isType(it, VarDeclaration)) {
      this.add_ixxkzx$(it);
    }
     else {
      this.stms.add_11rb$(it);
    }
  };
  StateMachineLowerer$Output.prototype.add_vivee5$ = function (label) {
    this.add_8drp10$(new LowLabel(label));
  };
  StateMachineLowerer$Output.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Output',
    interfaces: []
  };
  function StateMachineLowerer$lower$lambda(closure$out) {
    return function (it) {
      if (Kotlin.isType(it, LabeledStm)) {
        closure$out.label_61zpoe$(it.id.name);
      }
      return Unit;
    };
  }
  StateMachineLowerer.prototype.lower_o9lo4n$ = function (stms) {
    var tmp$;
    var out = new StateMachineLowerer$Output();
    visitAllDescendants(stms, StateMachineLowerer$lower$lambda(out));
    tmp$ = stms.stms.iterator();
    while (tmp$.hasNext()) {
      var s = tmp$.next();
      this.processStm_0(out, s);
    }
    return out;
  };
  StateMachineLowerer.prototype.processStm_0 = function ($receiver, it) {
    var tmp$, tmp$_0;
    if (Kotlin.isType(it, VarDeclaration))
      $receiver.add_ixxkzx$(it);
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
      $receiver.add_8drp10$(new LowIfGoto(not(it.cond), elseLabel));
      this.processStm_0($receiver, it.strue);
      if (endLabel != null) {
        $receiver.add_8drp10$(new LowGoto(endLabel));
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
      $receiver.add_8drp10$(new LowSwitchGoto(it.subject, toMap_0(labeledCases)));
      tmp$_0 = zip(it.bodyCases, labeledCases).iterator();
      while (tmp$_0.hasNext()) {
        var tmp$_2 = tmp$_0.next();
        var case_0 = tmp$_2.component1()
        , lc = tmp$_2.component2();
        var label = lc.component2();
        $receiver.add_vivee5$(label);
        $receiver.add_8drp10$(case_0.stm);
      }
    }
     else if (Kotlin.isType(it, While)) {
      var condLabel = $receiver.label();
      var endLabel_0 = $receiver.label();
      $receiver.add_vivee5$(condLabel);
      $receiver.add_8drp10$(new LowIfGoto(not(it.cond), endLabel_0));
      this.processStm_0($receiver, it.body);
      $receiver.add_8drp10$(new LowGoto(condLabel));
      $receiver.add_vivee5$(endLabel_0);
    }
     else if (Kotlin.isType(it, For))
      this.processStm_0($receiver, lower(it));
    else if (Kotlin.isType(it, LabeledStm)) {
      $receiver.add_8drp10$(new LowLabel($receiver.label_61zpoe$(it.id.name)));
      this.processStm_0($receiver, it.stm);
    }
     else if (Kotlin.isType(it, Goto)) {
      var $receiver_1 = $receiver.labelsByName;
      var key = it.id.name;
      var tmp$_3;
      if ((Kotlin.isType(tmp$_3 = $receiver_1, Map) ? tmp$_3 : throwCCE()).containsKey_11rb$(key)) {
        $receiver.add_8drp10$(new LowGoto($receiver.label_61zpoe$(it.id.name)));
      }
       else {
        $receiver.add_8drp10$(new RawStm('error(' + get_cquoted('label ' + it.id.name + " doesn't exist") + ')'));
      }
    }
     else if (Kotlin.isType(it, ExprStm))
      $receiver.add_8drp10$(it);
    else if (Kotlin.isType(it, Return))
      $receiver.add_8drp10$(it);
    else {
      $receiver.add_8drp10$(new CommentStm('TODO ' + it));
    }
  };
  StateMachineLowerer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'StateMachineLowerer',
    interfaces: []
  };
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
  Label.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Label',
    interfaces: []
  };
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
  LowLabel.prototype.visitChildren_jolnm7$ = function (visit) {
  };
  LowLabel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LowLabel',
    interfaces: [Stm]
  };
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
  LowGoto.prototype.visitChildren_jolnm7$ = function (visit) {
  };
  LowGoto.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LowGoto',
    interfaces: [Stm]
  };
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
  LowIfGoto.prototype.visitChildren_jolnm7$ = function (visit) {
    visit.invoke_o9id9e$(this.cond);
  };
  LowIfGoto.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LowIfGoto',
    interfaces: [Stm]
  };
  LowIfGoto.prototype.component1 = function () {
    return this.cond;
  };
  LowIfGoto.prototype.component2 = function () {
    return this.label;
  };
  LowIfGoto.prototype.copy_g2u5kk$ = function (cond, label) {
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
  LowSwitchGoto.prototype.visitChildren_jolnm7$ = function (visit) {
    var tmp$;
    visit.invoke_o9id9e$(this.subject);
    tmp$ = this.map.keys.iterator();
    while (tmp$.hasNext()) {
      var v = tmp$.next();
      invoke(visit, v);
    }
  };
  LowSwitchGoto.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LowSwitchGoto',
    interfaces: [Stm]
  };
  LowSwitchGoto.prototype.component1 = function () {
    return this.subject;
  };
  LowSwitchGoto.prototype.component2 = function () {
    return this.map;
  };
  LowSwitchGoto.prototype.copy_3kg6ur$ = function (subject, map) {
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
  function Comparator$ObjectLiteral_0(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_0.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_0.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  var compareBy$lambda_0 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function removeFallthrough$lambda$lambda(closure$breakCount) {
    return function (it) {
      var tmp$;
      if (Kotlin.isType(it, Break)) {
        tmp$ = closure$breakCount.v;
        closure$breakCount.v = tmp$ + 1 | 0;
      }
      return Unit;
    };
  }
  function removeFallthrough$lambda$lambda$lambda(it) {
    return Kotlin.isType(it.value, CaseStm) ? -1 : 1;
  }
  function removeFallthrough$lambda$lambda_0(closure$filteredStms, closure$tempVar) {
    return function ($receiver) {
      var tmp$;
      tmp$ = sortedWith(withIndex(closure$filteredStms), new Comparator$ObjectLiteral_0(compareBy$lambda_0(removeFallthrough$lambda$lambda$lambda))).iterator();
      while (tmp$.hasNext()) {
        var tmp$_0 = tmp$.next();
        var index = tmp$_0.component1()
        , stm = tmp$_0.component2();
        if (Kotlin.isType(stm, CaseStm))
          $receiver.CASE_ljhi8$(stm.expr, new ExprStm(new SimpleAssignExpr(closure$tempVar, IntConstant(index))));
        else if (Kotlin.isType(stm, DefaultStm))
          $receiver.DEFAULT_8drp10$(new ExprStm(new SimpleAssignExpr(closure$tempVar, IntConstant(index))));
      }
      return Unit;
    };
  }
  function removeFallthrough$lambda$lambda$lambda$lambda(closure$stm, closure$tempVar, closure$index) {
    return function ($receiver) {
      $receiver.STM_clyrhi$(closure$stm.stm);
      $receiver.STM_o9ctcl$(new SimpleAssignExpr(closure$tempVar, IntConstant(closure$index + 1 | 0)));
      $receiver.CONTINUE();
      return Unit;
    };
  }
  function removeFallthrough$lambda$lambda$lambda_0(closure$filteredStms, closure$tempVar) {
    return function ($receiver) {
      var index = 0;
      for (var tmp$ = closure$filteredStms.iterator(); tmp$.hasNext(); ++index) {
        var stm = tmp$.next();
        $receiver.CASE_x48hr4$(IntConstant(index), removeFallthrough$lambda$lambda$lambda$lambda(stm, closure$tempVar, index));
      }
      return Unit;
    };
  }
  function removeFallthrough$lambda$lambda_1(closure$tempVar, closure$filteredStms) {
    return function ($receiver) {
      $receiver.SWITCH_NO_FALLTHROUGH_sfv0dq$(closure$tempVar, removeFallthrough$lambda$lambda$lambda_0(closure$filteredStms, closure$tempVar));
      $receiver.BREAK();
      return Unit;
    };
  }
  function removeFallthrough$lambda(this$removeFallthrough, closure$ctx) {
    return function ($receiver) {
      var it = this$removeFallthrough;
      var tempVarName = closure$ctx.gen_puj7f4$('when', '_case');
      var tempVarType = Type$Companion_getInstance().INT;
      var tempVar = new Id(tempVarName, null, tempVarType, false);
      $receiver.STM_clyrhi$(Declaration(tempVarType, tempVarName, IntConstant(-1)));
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
      $receiver.SWITCH_NO_FALLTHROUGH_sfv0dq$(it.subject, removeFallthrough$lambda$lambda_0(filteredStms, tempVar));
      $receiver.WHILE_x48hr4$(IntConstant(1), removeFallthrough$lambda$lambda_1(tempVar, filteredStms)).addScope = false;
      return Unit;
    };
  }
  function removeFallthrough($receiver, ctx) {
    var $receiver_0 = $receiver.bodyCases;
    var all$result;
    all$break: do {
      var tmp$;
      if (Kotlin.isType($receiver_0, Collection) && $receiver_0.isEmpty()) {
        all$result = true;
        break all$break;
      }
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var last = lastStm(element.stm);
        var breakCount = {v: 0};
        visitAllDescendants(element.stm, removeFallthrough$lambda$lambda(breakCount));
        if (!(Kotlin.isType(last, Break) && breakCount.v === 1 || (Kotlin.isType(last, Return) && breakCount.v === 0) || (Kotlin.isType(last, Continue) && breakCount.v === 0))) {
          all$result = false;
          break all$break;
        }
      }
      all$result = true;
    }
     while (false);
    if (all$result) {
      var tmp$_0 = $receiver.subject;
      var $receiver_1 = $receiver.bodyCases;
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_1, 10));
      var tmp$_1;
      tmp$_1 = $receiver_1.iterator();
      while (tmp$_1.hasNext()) {
        var item = tmp$_1.next();
        var tmp$_2 = destination.add_11rb$;
        var nstm = removeLastStm(item.stm);
        tmp$_2.call(destination, Kotlin.isType(item, CaseStm) ? new CaseStm(item.expr, nstm) : new DefaultStm(nstm));
      }
      return new SwitchWithoutFallthrough(tmp$_0, new Stms(destination));
    }
    return StmBuilder$Companion_getInstance().invoke_2hzs7r$(removeFallthrough$lambda($receiver, ctx));
  }
  function toIfs($receiver) {
    throw new NotImplementedError_init();
  }
  function lastStm($receiver) {
    return lastOrNull($receiver.stms);
  }
  function removeLastStm($receiver) {
    return new Stms(dropLast($receiver.stms, 1));
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
  TempContext.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TempContext',
    interfaces: []
  };
  function containsBreakOrContinue$lambda(closure$has) {
    return function (it) {
      if (Kotlin.isType(it, Continue) || Kotlin.isType(it, Break)) {
        closure$has.v = true;
      }
      return Unit;
    };
  }
  function containsBreakOrContinue($receiver) {
    var has = {v: false};
    $receiver != null ? (visitAllDescendants($receiver, containsBreakOrContinue$lambda(has)), Unit) : null;
    return has.v;
  }
  function Type() {
    Type$Companion_getInstance();
  }
  function Type$Companion() {
    Type$Companion_instance = this;
    this.BOOL = BoolType_getInstance();
    this.VOID = new IntType(true, 0);
    this.CHAR = new IntType(true, 1);
    this.SHORT = new IntType(true, 2);
    this.INT = new IntType(true, 4);
    this.LONG = new IntType(true, 8);
    this.UCHAR = new IntType(false, 1);
    this.USHORT = new IntType(false, 2);
    this.UINT = new IntType(false, 4);
    this.ULONG = new IntType(false, 8);
    this.FLOAT = FloatType_getInstance();
    this.DOUBLE = DoubleType_getInstance();
    this.VOID_PTR = new PointerType(this.VOID, false);
    this.CHAR_PTR = new PointerType(this.CHAR, false);
    this.UNKNOWN = new UnknownType('unknown');
    this.UNKNOWN_TYPEDEF = new UnknownType('unknown_typedef');
    this.UNKNOWN_ELEMENT_TYPE = new UnknownType('unknown_element_type');
    this.UNRESOLVED = new UnknownType('unresolved');
  }
  Type$Companion.prototype.common_xclq3x$ = function (types) {
    var tmp$;
    if (types.isEmpty())
      tmp$ = this.UNKNOWN;
    else {
      var iterator = types.iterator();
      if (!iterator.hasNext())
        throw UnsupportedOperationException_init("Empty collection can't be reduced.");
      var accumulator = iterator.next();
      while (iterator.hasNext()) {
        accumulator = this.common_vyudg4$(accumulator, iterator.next());
      }
      tmp$ = accumulator;
    }
    return tmp$;
  };
  Type$Companion.prototype.common_vyudg4$ = function (a, b) {
    if (Kotlin.isType(a, NumberType) && Kotlin.isType(b, NumberType)) {
      if (Kotlin.isType(a, IntType) && Kotlin.isType(b, IntType)) {
        var tmp$ = a.signed || b.signed;
        var a_0 = a.size;
        var b_0 = b.size;
        return new IntType(tmp$, Math_0.max(a_0, b_0));
      }
      var a_1 = a.size;
      var b_1 = b.size;
      return Math_0.max(a_1, b_1) > 4 ? this.DOUBLE : this.FLOAT;
    }
    return a;
  };
  Type$Companion.prototype.binop_uvg7l2$ = function (l, op, r) {
    switch (op) {
      case '&&':
      case '||':
        return new BinopTypes(Type$Companion_getInstance().BOOL);
      case '<<':
      case '>>':
        return new BinopTypes(growToWord(l), Type$Companion_getInstance().INT);
      case '==':
      case '!=':
      case '<':
      case '<=':
      case '>':
      case '>=':
        var common = Type$Companion_getInstance().common_vyudg4$(l, r);
        return new BinopTypes(common, common, Type$Companion_getInstance().BOOL);
      case '&':
      case '|':
      case '^':
        return new BinopTypes(growToWord(l));
      case '*':
      case '/':
      case '%':
        return new BinopTypes(growToWord(l));
      case '+':
        if (Kotlin.isType(l, ArrayType))
          return new BinopTypes(l, Type$Companion_getInstance().INT, ptr(l.elementType));
        else if (Kotlin.isType(l, PointerType))
          return new BinopTypes(l, Type$Companion_getInstance().INT, l);
        else
          return new BinopTypes(growToWord(Type$Companion_getInstance().common_vyudg4$(l, r)));
      case '-':
        if (Kotlin.isType(l, ArrayType))
          return new BinopTypes(l, Type$Companion_getInstance().INT, ptr(l.elementType));
        else if (Kotlin.isType(l, PointerType) && Kotlin.isType(r, PointerType))
          return new BinopTypes(l, r, Type$Companion_getInstance().INT);
        else if (Kotlin.isType(l, PointerType))
          return new BinopTypes(l, Type$Companion_getInstance().INT, l);
        else
          return new BinopTypes(growToWord(Type$Companion_getInstance().common_vyudg4$(l, r)));
      default:throw new NotImplementedError_init('An operation is not implemented: ' + ("BINOP '" + op + "' " + l + ', ' + r));
    }
  };
  Type$Companion.prototype.unop_qv1nho$ = function (op, r) {
    switch (op) {
      case '!':
        return new UnopTypes(Type$Companion_getInstance().BOOL);
      case '~':
        return new UnopTypes(growToWord(r));
      default:throw new NotImplementedError_init('An operation is not implemented: ' + ("UNOP '" + op + "' " + r));
    }
  };
  Type$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Type$Companion_instance = null;
  function Type$Companion_getInstance() {
    if (Type$Companion_instance === null) {
      new Type$Companion();
    }
    return Type$Companion_instance;
  }
  Type.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Type',
    interfaces: []
  };
  function BinopTypes(l, r, out) {
    if (r === void 0)
      r = l;
    if (out === void 0)
      out = l;
    this.l = l;
    this.r = r;
    this.out = out;
  }
  BinopTypes.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BinopTypes',
    interfaces: []
  };
  BinopTypes.prototype.component1 = function () {
    return this.l;
  };
  BinopTypes.prototype.component2 = function () {
    return this.r;
  };
  BinopTypes.prototype.component3 = function () {
    return this.out;
  };
  BinopTypes.prototype.copy_5kq5aa$ = function (l, r, out) {
    return new BinopTypes(l === void 0 ? this.l : l, r === void 0 ? this.r : r, out === void 0 ? this.out : out);
  };
  BinopTypes.prototype.toString = function () {
    return 'BinopTypes(l=' + Kotlin.toString(this.l) + (', r=' + Kotlin.toString(this.r)) + (', out=' + Kotlin.toString(this.out)) + ')';
  };
  BinopTypes.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.l) | 0;
    result = result * 31 + Kotlin.hashCode(this.r) | 0;
    result = result * 31 + Kotlin.hashCode(this.out) | 0;
    return result;
  };
  BinopTypes.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.l, other.l) && Kotlin.equals(this.r, other.r) && Kotlin.equals(this.out, other.out)))));
  };
  function UnopTypes(r, out) {
    if (out === void 0)
      out = r;
    this.r = r;
    this.out = out;
  }
  UnopTypes.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UnopTypes',
    interfaces: []
  };
  UnopTypes.prototype.component1 = function () {
    return this.r;
  };
  UnopTypes.prototype.component2 = function () {
    return this.out;
  };
  UnopTypes.prototype.copy_vyudg4$ = function (r, out) {
    return new UnopTypes(r === void 0 ? this.r : r, out === void 0 ? this.out : out);
  };
  UnopTypes.prototype.toString = function () {
    return 'UnopTypes(r=' + Kotlin.toString(this.r) + (', out=' + Kotlin.toString(this.out)) + ')';
  };
  UnopTypes.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.r) | 0;
    result = result * 31 + Kotlin.hashCode(this.out) | 0;
    return result;
  };
  UnopTypes.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.r, other.r) && Kotlin.equals(this.out, other.out)))));
  };
  function growToWord($receiver, resolver) {
    if (resolver === void 0)
      resolver = UncachedTypeResolver_getInstance();
    var tmp$;
    var that = resolver.resolve_1vqhz6$($receiver);
    if (Kotlin.isType(that, BoolType))
      tmp$ = Type$Companion_getInstance().INT;
    else if (Kotlin.isType(that, IntType)) {
      var tmp$_0 = that.signed;
      var a = that.size;
      tmp$ = new IntType(tmp$_0, Math_0.max(a, 4));
    }
     else
      tmp$ = that;
    var res = tmp$;
    return res;
  }
  function withSign($receiver, signed) {
    if (Kotlin.isType($receiver, IntType))
      return new IntType(signed, $receiver.size);
    else
      return $receiver;
  }
  function get_sign($receiver) {
    if (Kotlin.isType($receiver, IntType))
      return $receiver.signed;
    else if (Kotlin.isType($receiver, NumberType))
      return true;
    else
      return null;
  }
  function get_signed($receiver) {
    var tmp$;
    return (tmp$ = get_sign($receiver)) != null ? tmp$ : false;
  }
  function get_unsigned($receiver) {
    var tmp$;
    return !((tmp$ = get_sign($receiver)) != null ? tmp$ : true);
  }
  function get_elementType($receiver) {
    if (Kotlin.isType($receiver, BasePointerType))
      return $receiver.elementType;
    else
      return Type$Companion_getInstance().UNKNOWN_ELEMENT_TYPE;
  }
  function ptr($receiver, const_0) {
    if (const_0 === void 0)
      const_0 = false;
    return new PointerType($receiver, const_0);
  }
  function PrimType() {
    Type.call(this);
  }
  PrimType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PrimType',
    interfaces: [Type]
  };
  function NumberType() {
    PrimType.call(this);
  }
  NumberType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NumberType',
    interfaces: [PrimType]
  };
  function BoolType() {
    BoolType_instance = this;
    PrimType.call(this);
  }
  BoolType.prototype.toString = function () {
    return 'Bool';
  };
  BoolType.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BoolType',
    interfaces: [PrimType]
  };
  var BoolType_instance = null;
  function BoolType_getInstance() {
    if (BoolType_instance === null) {
      new BoolType();
    }
    return BoolType_instance;
  }
  function IntType(signed, size) {
    NumberType.call(this);
    this.signed = signed;
    this.size_741df4$_0 = size;
  }
  Object.defineProperty(IntType.prototype, 'size', {
    get: function () {
      return this.size_741df4$_0;
    }
  });
  IntType.prototype.toString = function () {
    switch (this.size) {
      case 0:
        return 'Unit';
      case 1:
        return this.signed ? 'Byte' : 'UByte';
      case 2:
        return this.signed ? 'Short' : 'UShort';
      case 4:
        return this.signed ? 'Int' : 'UInt';
      case 8:
        return this.signed ? 'Long' : 'ULong';
      default:throw new NotImplementedError_init('An operation is not implemented: ' + 'IntFType');
    }
  };
  IntType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IntType',
    interfaces: [NumberType]
  };
  IntType.prototype.component1 = function () {
    return this.signed;
  };
  IntType.prototype.component2 = function () {
    return this.size;
  };
  IntType.prototype.copy_eltk6l$ = function (signed, size) {
    return new IntType(signed === void 0 ? this.signed : signed, size === void 0 ? this.size : size);
  };
  IntType.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.signed) | 0;
    result = result * 31 + Kotlin.hashCode(this.size) | 0;
    return result;
  };
  IntType.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.signed, other.signed) && Kotlin.equals(this.size, other.size)))));
  };
  function FloatingType() {
    NumberType.call(this);
  }
  FloatingType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FloatingType',
    interfaces: [NumberType]
  };
  function FloatType() {
    FloatType_instance = this;
    FloatingType.call(this);
    this.size_ta77ab$_0 = 4;
  }
  Object.defineProperty(FloatType.prototype, 'size', {
    get: function () {
      return this.size_ta77ab$_0;
    }
  });
  FloatType.prototype.toString = function () {
    return 'Float';
  };
  FloatType.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'FloatType',
    interfaces: [FloatingType]
  };
  var FloatType_instance = null;
  function FloatType_getInstance() {
    if (FloatType_instance === null) {
      new FloatType();
    }
    return FloatType_instance;
  }
  function DoubleType() {
    DoubleType_instance = this;
    FloatingType.call(this);
    this.size_o79h7q$_0 = 8;
  }
  Object.defineProperty(DoubleType.prototype, 'size', {
    get: function () {
      return this.size_o79h7q$_0;
    }
  });
  DoubleType.prototype.toString = function () {
    return 'Double';
  };
  DoubleType.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DoubleType',
    interfaces: [FloatingType]
  };
  var DoubleType_instance = null;
  function DoubleType_getInstance() {
    if (DoubleType_instance === null) {
      new DoubleType();
    }
    return DoubleType_instance;
  }
  function VariadicType() {
    VariadicType_instance = this;
    PrimType.call(this);
  }
  VariadicType.prototype.toString = function () {
    return 'Any?';
  };
  VariadicType.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'VariadicType',
    interfaces: [PrimType]
  };
  var VariadicType_instance = null;
  function VariadicType_getInstance() {
    if (VariadicType_instance === null) {
      new VariadicType();
    }
    return VariadicType_instance;
  }
  function DummyType() {
    DummyType_instance = this;
    PrimType.call(this);
  }
  DummyType.prototype.toString = function () {
    return 'Dummy';
  };
  DummyType.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DummyType',
    interfaces: [PrimType]
  };
  var DummyType_instance = null;
  function DummyType_getInstance() {
    if (DummyType_instance === null) {
      new DummyType();
    }
    return DummyType_instance;
  }
  function BaseReferenceableType() {
    Type.call(this);
  }
  BaseReferenceableType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BaseReferenceableType',
    interfaces: [Type]
  };
  function BasePointerType() {
    BaseReferenceableType.call(this);
  }
  BasePointerType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BasePointerType',
    interfaces: [BaseReferenceableType]
  };
  function PointerType(elementType, const_0) {
    BasePointerType.call(this);
    this.elementType_uay2zl$_0 = elementType;
    this.const = const_0;
    this.actsAsPointer_v8huqz$_0 = true;
  }
  Object.defineProperty(PointerType.prototype, 'elementType', {
    get: function () {
      return this.elementType_uay2zl$_0;
    }
  });
  Object.defineProperty(PointerType.prototype, 'actsAsPointer', {
    get: function () {
      return this.actsAsPointer_v8huqz$_0;
    }
  });
  PointerType.prototype.toString = function () {
    return 'CPointer<' + this.elementType + '>';
  };
  PointerType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PointerType',
    interfaces: [BasePointerType]
  };
  PointerType.prototype.component1 = function () {
    return this.elementType;
  };
  PointerType.prototype.component2 = function () {
    return this.const;
  };
  PointerType.prototype.copy_uij6yx$ = function (elementType, const_0) {
    return new PointerType(elementType === void 0 ? this.elementType : elementType, const_0 === void 0 ? this.const : const_0);
  };
  PointerType.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.elementType) | 0;
    result = result * 31 + Kotlin.hashCode(this.const) | 0;
    return result;
  };
  PointerType.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.elementType, other.elementType) && Kotlin.equals(this.const, other.const)))));
  };
  function ArrayType(elementType, numElements, sizeError, declarator) {
    BasePointerType.call(this);
    this.elementType_5au85f$_0 = elementType;
    this.numElements = numElements;
    this.sizeError = sizeError;
    this.declarator = declarator;
    this.actsAsPointer_awwr4f$_0 = false;
  }
  Object.defineProperty(ArrayType.prototype, 'elementType', {
    get: function () {
      return this.elementType_5au85f$_0;
    }
  });
  Object.defineProperty(ArrayType.prototype, 'hasSubarrays', {
    get: function () {
      return Kotlin.isType(this.elementType, ArrayType);
    }
  });
  Object.defineProperty(ArrayType.prototype, 'actsAsPointer', {
    get: function () {
      return this.actsAsPointer_awwr4f$_0;
    }
  });
  ArrayType.prototype.toString = function () {
    return this.numElements != null ? this.elementType.toString() + '[' + toString(this.numElements) + ']' : this.elementType.toString() + '[]';
  };
  ArrayType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ArrayType',
    interfaces: [BasePointerType]
  };
  ArrayType.prototype.component1 = function () {
    return this.elementType;
  };
  ArrayType.prototype.component2 = function () {
    return this.numElements;
  };
  ArrayType.prototype.component3 = function () {
    return this.sizeError;
  };
  ArrayType.prototype.component4 = function () {
    return this.declarator;
  };
  ArrayType.prototype.copy_t5egm1$ = function (elementType, numElements, sizeError, declarator) {
    return new ArrayType(elementType === void 0 ? this.elementType : elementType, numElements === void 0 ? this.numElements : numElements, sizeError === void 0 ? this.sizeError : sizeError, declarator === void 0 ? this.declarator : declarator);
  };
  ArrayType.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.elementType) | 0;
    result = result * 31 + Kotlin.hashCode(this.numElements) | 0;
    result = result * 31 + Kotlin.hashCode(this.sizeError) | 0;
    result = result * 31 + Kotlin.hashCode(this.declarator) | 0;
    return result;
  };
  ArrayType.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.elementType, other.elementType) && Kotlin.equals(this.numElements, other.numElements) && Kotlin.equals(this.sizeError, other.sizeError) && Kotlin.equals(this.declarator, other.declarator)))));
  };
  function getStructTypeInfo($receiver, parser) {
    return parser.getStructTypeInfo_49lpbe$($receiver.spec);
  }
  function EnumType(spec) {
    Type.call(this);
    this.spec = spec;
  }
  EnumType.prototype.toString = function () {
    return 'enum ' + toString(this.spec.id);
  };
  EnumType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EnumType',
    interfaces: [Type]
  };
  EnumType.prototype.component1 = function () {
    return this.spec;
  };
  EnumType.prototype.copy_ssoad9$ = function (spec) {
    return new EnumType(spec === void 0 ? this.spec : spec);
  };
  EnumType.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.spec) | 0;
    return result;
  };
  EnumType.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.spec, other.spec))));
  };
  function StructType(spec) {
    BaseReferenceableType.call(this);
    this.spec = spec;
  }
  Object.defineProperty(StructType.prototype, 'info', {
    get: function () {
      return this.spec.info;
    }
  });
  StructType.prototype.toString = function () {
    return 'struct ' + toString(this.spec.id);
  };
  StructType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StructType',
    interfaces: [BaseReferenceableType]
  };
  StructType.prototype.component1 = function () {
    return this.spec;
  };
  StructType.prototype.copy_49lpbe$ = function (spec) {
    return new StructType(spec === void 0 ? this.spec : spec);
  };
  StructType.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.spec) | 0;
    return result;
  };
  StructType.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.spec, other.spec))));
  };
  function UnknownType(reason) {
    PrimType.call(this);
    this.reason = reason;
  }
  UnknownType.prototype.toString = function () {
    return 'UnknownFType(' + toString(this.reason) + ')';
  };
  UnknownType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UnknownType',
    interfaces: [PrimType]
  };
  UnknownType.prototype.component1 = function () {
    return this.reason;
  };
  UnknownType.prototype.copy_s8jyv4$ = function (reason) {
    return new UnknownType(reason === void 0 ? this.reason : reason);
  };
  UnknownType.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.reason) | 0;
    return result;
  };
  UnknownType.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.reason, other.reason))));
  };
  function RefType(id, rtype) {
    Type.call(this);
    this.id = id;
    this.rtype = rtype;
  }
  RefType.prototype.toString = function () {
    return this.id;
  };
  RefType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RefType',
    interfaces: [Type]
  };
  RefType.prototype.component1 = function () {
    return this.id;
  };
  RefType.prototype.component2 = function () {
    return this.rtype;
  };
  RefType.prototype.copy_qv1nho$ = function (id, rtype) {
    return new RefType(id === void 0 ? this.id : id, rtype === void 0 ? this.rtype : rtype);
  };
  RefType.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.rtype) | 0;
    return result;
  };
  RefType.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.rtype, other.rtype)))));
  };
  function TypedefTypeName(id) {
    Type.call(this);
    this.id = id;
  }
  TypedefTypeName.prototype.toString = function () {
    return this.id;
  };
  TypedefTypeName.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TypedefTypeName',
    interfaces: [Type]
  };
  TypedefTypeName.prototype.component1 = function () {
    return this.id;
  };
  TypedefTypeName.prototype.copy_61zpoe$ = function (id) {
    return new TypedefTypeName(id === void 0 ? this.id : id);
  };
  TypedefTypeName.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    return result;
  };
  TypedefTypeName.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.id, other.id))));
  };
  function generateFinalType(listType) {
    var tmp$, tmp$_0;
    var storages = ArrayList_init();
    var qualifiers = ArrayList_init();
    var primSize = {v: 4};
    var signed = null;
    var float = {v: false};
    var long = {v: 0};
    tmp$ = listType.items.iterator();
    while (tmp$.hasNext()) {
      var type = tmp$.next();
      if (Kotlin.isType(type, VariadicTypeSpecifier))
        return VariadicType_getInstance();
      else if (Kotlin.isType(type, StorageClassSpecifier)) {
        var element = type.kind;
        storages.add_11rb$(element);
      }
       else if (Kotlin.isType(type, TypeQualifier)) {
        var element_0 = type.kind;
        qualifiers.add_11rb$(element_0);
      }
       else if (Kotlin.isType(type, BasicTypeSpecifier)) {
        switch (type.id.name) {
          case 'VOID':
            primSize.v = 0;
            break;
          case 'UNSIGNED':
            signed = false;
            break;
          case 'SIGNED':
            signed = true;
            break;
          case 'CHAR':
            primSize.v = 1;
            break;
          case 'SHORT':
            primSize.v = 2;
            break;
          case 'INT':
            primSize.v = 4;
            break;
          case 'LONG':
            long.v = long.v + 1 | 0;
            break;
          case 'FLOAT':
            float.v = true;
            primSize.v = 4;
            break;
          case 'DOUBLE':
            float.v = true;
            long.v = long.v + 1 | 0;
            primSize.v = 4;
            break;
          case 'BOOL':
            return Type$Companion_getInstance().BOOL;
          case 'COMPLEX':
            throw new NotImplementedError_init('An operation is not implemented: ' + 'BasicTypeSpecifier: COMPLEX');
          default:Kotlin.noWhenBranchMatched();
            break;
        }
      }
       else if (Kotlin.isType(type, StructUnionTypeSpecifier))
        return new StructType(type);
      else if (Kotlin.isType(type, EnumTypeSpecifier))
        return new EnumType(type);
      else if (Kotlin.isType(type, RefTypeSpecifier))
        return new RefType(type.id, type.type);
      else if (Kotlin.isType(type, TypeName)) {
        if (type.abstractDecl != null) {
          throw new NotImplementedError_init('An operation is not implemented: ' + 'type.abstractDecl != null');
        }
        return toFinalType(type.specifiers);
      }
       else {
        throw new NotImplementedError_init('An operation is not implemented: ' + ('generateFinalType: ' + Kotlin.getKClassFromExpression(listType) + ': ' + listType));
      }
    }
    if (float.v)
      tmp$_0 = long.v > 0 ? Type$Companion_getInstance().DOUBLE : Type$Companion_getInstance().FLOAT;
    else if (signed === false) {
      switch (primSize.v) {
        case 0:
          tmp$_0 = Type$Companion_getInstance().VOID;
          break;
        case 1:
          tmp$_0 = Type$Companion_getInstance().UCHAR;
          break;
        case 2:
          tmp$_0 = Type$Companion_getInstance().USHORT;
          break;
        case 4:
          tmp$_0 = long.v > 0 ? Type$Companion_getInstance().ULONG : Type$Companion_getInstance().UINT;
          break;
        default:tmp$_0 = Type$Companion_getInstance().UINT;
          break;
      }
    }
     else {
      switch (primSize.v) {
        case 0:
          tmp$_0 = Type$Companion_getInstance().VOID;
          break;
        case 1:
          tmp$_0 = Type$Companion_getInstance().CHAR;
          break;
        case 2:
          tmp$_0 = Type$Companion_getInstance().SHORT;
          break;
        case 4:
          tmp$_0 = long.v > 0 ? Type$Companion_getInstance().LONG : Type$Companion_getInstance().INT;
          break;
        default:tmp$_0 = Type$Companion_getInstance().INT;
          break;
      }
    }
    return tmp$_0;
  }
  function generatePointerType(type, pointer) {
    var base = new PointerType(type, false);
    return pointer.parent != null ? generatePointerType(base, pointer.parent) : base;
  }
  function FParamBase() {
  }
  FParamBase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FParamBase',
    interfaces: []
  };
  function FParamVariadic(dummy) {
    if (dummy === void 0)
      dummy = Unit;
    FParamBase.call(this);
    this.dummy = dummy;
  }
  Object.defineProperty(FParamVariadic.prototype, 'type', {
    get: function () {
      return VariadicType_getInstance();
    }
  });
  FParamVariadic.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FParamVariadic',
    interfaces: [FParamBase]
  };
  FParamVariadic.prototype.component1 = function () {
    return this.dummy;
  };
  FParamVariadic.prototype.copy_s877gv$ = function (dummy) {
    return new FParamVariadic(dummy === void 0 ? this.dummy : dummy);
  };
  FParamVariadic.prototype.toString = function () {
    return 'FParamVariadic(dummy=' + Kotlin.toString(this.dummy) + ')';
  };
  FParamVariadic.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.dummy) | 0;
    return result;
  };
  FParamVariadic.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.dummy, other.dummy))));
  };
  function FParam(name, type) {
    FParamBase.call(this);
    this.name = name;
    this.type_933ycd$_0 = type;
  }
  Object.defineProperty(FParam.prototype, 'type', {
    get: function () {
      return this.type_933ycd$_0;
    }
  });
  FParam.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FParam',
    interfaces: [FParamBase]
  };
  FParam.prototype.component1 = function () {
    return this.name;
  };
  FParam.prototype.component2 = function () {
    return this.type;
  };
  FParam.prototype.copy_qv1nho$ = function (name, type) {
    return new FParam(name === void 0 ? this.name : name, type === void 0 ? this.type : type);
  };
  FParam.prototype.toString = function () {
    return 'FParam(name=' + Kotlin.toString(this.name) + (', type=' + Kotlin.toString(this.type)) + ')';
  };
  FParam.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    return result;
  };
  FParam.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.type, other.type)))));
  };
  function FunctionType(name, retType, args, variadic) {
    if (args === void 0) {
      args = emptyList();
    }
    if (variadic === void 0)
      variadic = false;
    Type.call(this);
    this.name = name;
    this.retType = retType;
    this.args = args;
    this.variadic = variadic;
    this.argsWithVariadic = plus(this.args, this.variadic ? listOf(new FParamVariadic()) : emptyList());
    var $receiver = this.argsWithVariadic;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.type);
    }
    this.typesWithVariadicWithRet = plus(destination, listOf(this.retType));
  }
  FunctionType.prototype.toString = function () {
    return 'CFunction' + (this.typesWithVariadicWithRet.size - 1 | 0) + '<' + joinToString(this.typesWithVariadicWithRet, ', ') + '>';
  };
  FunctionType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FunctionType',
    interfaces: [Type]
  };
  FunctionType.prototype.component1 = function () {
    return this.name;
  };
  FunctionType.prototype.component2 = function () {
    return this.retType;
  };
  FunctionType.prototype.component3 = function () {
    return this.args;
  };
  FunctionType.prototype.component4 = function () {
    return this.variadic;
  };
  FunctionType.prototype.copy_mll3zt$ = function (name, retType, args, variadic) {
    return new FunctionType(name === void 0 ? this.name : name, retType === void 0 ? this.retType : retType, args === void 0 ? this.args : args, variadic === void 0 ? this.variadic : variadic);
  };
  FunctionType.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.retType) | 0;
    result = result * 31 + Kotlin.hashCode(this.args) | 0;
    result = result * 31 + Kotlin.hashCode(this.variadic) | 0;
    return result;
  };
  FunctionType.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.retType, other.retType) && Kotlin.equals(this.args, other.args) && Kotlin.equals(this.variadic, other.variadic)))));
  };
  function toFParam($receiver) {
    return new FParam($receiver.name.name, $receiver.type);
  }
  function generateFinalType_0(type, declarator) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (Kotlin.isType(declarator, DeclaratorWithPointer)) {
      var pointer = declarator.pointer;
      var decl = generateFinalType_0(type, declarator.declarator);
      if (Kotlin.isType(decl, FunctionType)) {
        return new FunctionType(decl.name, generatePointerType(decl.retType, pointer), decl.args, decl.variadic);
      }
       else {
        return generatePointerType(decl, pointer);
      }
    }
     else if (Kotlin.isType(declarator, IdentifierDeclarator))
      return type;
    else if (Kotlin.isType(declarator, ParameterDeclarator)) {
      var id = getNameId(declarator.base);
      Kotlin.isType(declarator.base, DeclaratorWithPointer);
      var tmp$_3 = id.id.name;
      var $receiver = declarator.declsWithoutVariadic;
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
      var tmp$_4;
      tmp$_4 = $receiver.iterator();
      while (tmp$_4.hasNext()) {
        var item = tmp$_4.next();
        destination.add_11rb$(toFParam(toCParam(item)));
      }
      return new FunctionType(tmp$_3, type, destination, declarator.variadic);
    }
     else if (Kotlin.isType(declarator, ArrayDeclarator)) {
      var error = null;
      try {
        tmp$_2 = (tmp$_1 = Kotlin.isNumber(tmp$_0 = (tmp$ = declarator.expr) != null ? constantEvaluate(tmp$) : null) ? tmp$_0 : null) != null ? numberToInt(tmp$_1) : null;
      }
       catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          error = e;
          tmp$_2 = -1;
        }
         else
          throw e;
      }
      var arraySize = tmp$_2;
      if (declarator.expr == null) {
        return new PointerType(generateFinalType_0(type, declarator.base), true);
      }
       else {
        return new ArrayType(generateFinalType_0(type, declarator.base), arraySize, error, declarator);
      }
    }
     else if (Kotlin.isType(declarator, VarargDeclarator))
      return VariadicType_getInstance();
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
  function canAssignTo($receiver, dst, resolver) {
    var src = resolver.resolve_1vqhz6$($receiver);
    var dst_0 = resolver.resolve_1vqhz6$(dst);
    if (equals(src, dst_0))
      return true;
    if (equals(src, Type$Companion_getInstance().VOID) || (equals(dst_0, Type$Companion_getInstance().VOID) && !equals(src, dst_0)))
      return false;
    if (Kotlin.isType(dst_0, BasePointerType) && Kotlin.isType(src, IntType))
      return true;
    if (Kotlin.isType(src, BasePointerType) && equals(src.elementType, Type$Companion_getInstance().VOID))
      return true;
    if (Kotlin.isType(dst_0, BasePointerType) && equals(dst_0.elementType, Type$Companion_getInstance().VOID))
      return true;
    if (Kotlin.isType(src, BasePointerType) && Kotlin.isType(dst_0, PointerType)) {
      return equals(src.elementType, dst_0.elementType);
    }
    if (Kotlin.isType(src, IntType) && Kotlin.isType(dst_0, IntType)) {
      return true;
    }
    var srcIsNumber = Kotlin.isType(src, IntType) || Kotlin.isType(src, BoolType) || Kotlin.isType(src, FloatingType);
    var dstIsNumber = Kotlin.isType(dst_0, IntType) || Kotlin.isType(dst_0, BoolType) || Kotlin.isType(dst_0, FloatingType);
    if (srcIsNumber && dstIsNumber)
      return true;
    if (Kotlin.isType(src, ArrayType) && Kotlin.isType(dst_0, PointerType) && equals(src.elementType, dst_0.elementType))
      return true;
    return equals(src, dst_0);
  }
  function getSize($receiver, resolver) {
    if (Kotlin.isType($receiver, NumberType))
      return $receiver.size;
    else if (Kotlin.isType($receiver, BoolType))
      return 1;
    else if (Kotlin.isType($receiver, PointerType))
      return POINTER_SIZE;
    else if (Kotlin.isType($receiver, FunctionType))
      return POINTER_SIZE;
    else if (Kotlin.isType($receiver, RefType))
      return getSize(resolver.resolve_1vqhz6$($receiver), resolver);
    else if (Kotlin.isType($receiver, StructType))
      return $receiver.info.size;
    else if (Kotlin.isType($receiver, ArrayType))
      if ($receiver.numElements != null) {
        return Kotlin.imul(getSize($receiver.elementType, resolver), $receiver.numElements);
      }
       else {
        return POINTER_SIZE;
      }
     else {
      throw new NotImplementedError_init('An operation is not implemented: ' + ('Type.getSize: ' + Kotlin.getKClassFromExpression($receiver) + ': ' + $receiver));
    }
  }
  function TypeResolver() {
  }
  TypeResolver.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TypeResolver',
    interfaces: []
  };
  function UncachedTypeResolver() {
    UncachedTypeResolver_instance = this;
  }
  UncachedTypeResolver.prototype.resolve_1vqhz6$ = function (type) {
    return this.fresolveUncached_yujd65$(type, 0);
  };
  UncachedTypeResolver.prototype.fresolveUncached_yujd65$ = function ($receiver, level) {
    var tmp$;
    if (level > 500) {
      throw IllegalStateException_init('Too much resolving nesting. Probably a reference loop.'.toString());
    }
    if (Kotlin.isType($receiver, RefType))
      tmp$ = this.fresolveUncached_yujd65$($receiver.rtype, level + 1 | 0);
    else if (Kotlin.isType($receiver, FunctionType)) {
      var tmp$_0 = $receiver.name;
      var tmp$_1 = this.fresolveUncached_yujd65$($receiver.retType, level + 1 | 0);
      var $receiver_0 = $receiver.args;
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_2;
      tmp$_2 = $receiver_0.iterator();
      while (tmp$_2.hasNext()) {
        var item = tmp$_2.next();
        destination.add_11rb$(new FParam(item.name, this.fresolveUncached_yujd65$(item.type, level + 1 | 0)));
      }
      tmp$ = new FunctionType(tmp$_0, tmp$_1, destination, $receiver.variadic);
    }
     else if (Kotlin.isType($receiver, PointerType))
      tmp$ = new PointerType(this.fresolveUncached_yujd65$($receiver.elementType, level + 1 | 0), $receiver.const);
    else if (Kotlin.isType($receiver, ArrayType))
      tmp$ = new ArrayType(this.fresolveUncached_yujd65$($receiver.elementType, level + 1 | 0), $receiver.numElements, $receiver.sizeError, $receiver.declarator);
    else if (Kotlin.isType($receiver, PrimType))
      tmp$ = $receiver;
    else if (Kotlin.isType($receiver, StructType))
      tmp$ = $receiver;
    else {
      throw IllegalStateException_init(('Unsupported resolving type ' + $receiver).toString());
    }
    return tmp$;
  };
  UncachedTypeResolver.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'UncachedTypeResolver',
    interfaces: [TypeResolver]
  };
  var UncachedTypeResolver_instance = null;
  function UncachedTypeResolver_getInstance() {
    if (UncachedTypeResolver_instance === null) {
      new UncachedTypeResolver();
    }
    return UncachedTypeResolver_instance;
  }
  function ResolveCache() {
    this.resolveCache_0 = LinkedHashMap_init();
  }
  ResolveCache.prototype.resolve_1vqhz6$ = function (type) {
    var $receiver = this.resolveCache_0;
    var tmp$;
    if (!(Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).containsKey_11rb$(type)) {
      var $receiver_0 = this.resolveCache_0;
      var value = UncachedTypeResolver_getInstance().resolve_1vqhz6$(type);
      $receiver_0.put_xwzc9p$(type, value);
    }
    return ensureNotNull(this.resolveCache_0.get_11rb$(type));
  };
  ResolveCache.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ResolveCache',
    interfaces: [TypeResolver]
  };
  function resolve($receiver, resolver) {
    return resolver.resolve_1vqhz6$($receiver);
  }
  function binarySearch($receiver, v, fromIndex, toIndex) {
    if (fromIndex === void 0)
      fromIndex = 0;
    if (toIndex === void 0)
      toIndex = $receiver.length;
    var genericBinarySearch$result;
    genericBinarySearch$break: do {
      var low = fromIndex;
      var high = toIndex - 1 | 0;
      while (low <= high) {
        var mid = (low + high | 0) / 2 | 0;
        var mval = Kotlin.primitiveCompareTo($receiver[mid], v);
        if (mval < 0)
          low = mid + 1 | 0;
        else if (mval > 0)
          high = mid - 1 | 0;
        else {
          genericBinarySearch$result = mid;
          break genericBinarySearch$break;
        }
      }
      genericBinarySearch$result = (-low | 0) - 1 | 0;
    }
     while (false);
    return new BSearchResult(genericBinarySearch$result);
  }
  function binarySearch_0($receiver, v, fromIndex, toIndex) {
    if (fromIndex === void 0)
      fromIndex = 0;
    if (toIndex === void 0)
      toIndex = $receiver.length;
    var genericBinarySearch$result;
    genericBinarySearch$break: do {
      var low = fromIndex;
      var high = toIndex - 1 | 0;
      while (low <= high) {
        var mid = (low + high | 0) / 2 | 0;
        var mval = Kotlin.compareTo($receiver[mid], v);
        if (mval < 0)
          low = mid + 1 | 0;
        else if (mval > 0)
          high = mid - 1 | 0;
        else {
          genericBinarySearch$result = mid;
          break genericBinarySearch$break;
        }
      }
      genericBinarySearch$result = (-low | 0) - 1 | 0;
    }
     while (false);
    return new BSearchResult(genericBinarySearch$result);
  }
  function binarySearch_1($receiver, v, fromIndex, toIndex) {
    if (fromIndex === void 0)
      fromIndex = 0;
    if (toIndex === void 0)
      toIndex = $receiver.length;
    var genericBinarySearch$result;
    genericBinarySearch$break: do {
      var low = fromIndex;
      var high = toIndex - 1 | 0;
      while (low <= high) {
        var mid = (low + high | 0) / 2 | 0;
        var mval = Kotlin.compareTo($receiver[mid], v);
        if (mval < 0)
          low = mid + 1 | 0;
        else if (mval > 0)
          high = mid - 1 | 0;
        else {
          genericBinarySearch$result = mid;
          break genericBinarySearch$break;
        }
      }
      genericBinarySearch$result = (-low | 0) - 1 | 0;
    }
     while (false);
    return new BSearchResult(genericBinarySearch$result);
  }
  var genericBinarySearch = defineInlineFunction('ktcc.com.soywiz.ktcc.util.genericBinarySearch_fz6bok$', wrapFunction(function () {
    function genericBinarySearch$lambda(from, to, low, high) {
      return (-low | 0) - 1 | 0;
    }
    return function (fromIndex, toIndex, invalid, check) {
      if (invalid === void 0)
        invalid = genericBinarySearch$lambda;
      var low = fromIndex;
      var high = toIndex - 1 | 0;
      while (low <= high) {
        var mid = (low + high | 0) / 2 | 0;
        var mval = check(mid);
        if (mval < 0)
          low = mid + 1 | 0;
        else if (mval > 0)
          high = mid - 1 | 0;
        else
          return mid;
      }
      return invalid(fromIndex, toIndex, low, high);
    };
  }));
  function BSearchResult(raw) {
    this.raw = raw;
  }
  Object.defineProperty(BSearchResult.prototype, 'found', {
    get: function () {
      return this.raw >= 0;
    }
  });
  Object.defineProperty(BSearchResult.prototype, 'index', {
    get: function () {
      return this.found ? this.raw : -1;
    }
  });
  Object.defineProperty(BSearchResult.prototype, 'nearIndex', {
    get: function () {
      return this.found ? this.raw : (-this.raw | 0) - 1 | 0;
    }
  });
  BSearchResult.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BSearchResult',
    interfaces: []
  };
  BSearchResult.prototype.unbox = function () {
    return this.raw;
  };
  BSearchResult.prototype.toString = function () {
    return 'BSearchResult(raw=' + Kotlin.toString(this.raw) + ')';
  };
  BSearchResult.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.raw) | 0;
    return result;
  };
  BSearchResult.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.raw, other.raw))));
  };
  function buildList(gen) {
    var $receiver = ArrayList_init();
    gen($receiver);
    return $receiver;
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
  function isAlnum($receiver) {
    return isAlpha($receiver) || isDigit($receiver);
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
  function get_DOT() {
    return '.';
  }
  function UnexpectedException(msg) {
    Exception_init(msg, this);
    this.name = 'UnexpectedException';
  }
  UnexpectedException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UnexpectedException',
    interfaces: [Exception]
  };
  function unexpected(msg) {
    if (msg === void 0)
      msg = 'unexpected';
    throw new UnexpectedException(msg);
  }
  var Indenter = defineInlineFunction('ktcc.com.soywiz.ktcc.util.Indenter_f28zyd$', wrapFunction(function () {
    var Indenter_init = _.com.soywiz.ktcc.util.Indenter;
    return function (callback) {
      var $receiver = new Indenter_init();
      callback($receiver);
      return $receiver.toString();
    };
  }));
  function Indenter_0() {
    this.cmds = ArrayList_init();
  }
  function Indenter$Indent() {
    Indenter$Indent_instance = this;
  }
  Indenter$Indent.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Indent',
    interfaces: []
  };
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
  Indenter$Unindent.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Unindent',
    interfaces: []
  };
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
  Indenter_0.prototype.line_xgsxiu$ = function (indenter) {
    this.cmds.addAll_brywnq$(indenter.cmds);
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
    if ((tmp$ = getOrNull(this.indents, index)) != null)
      tmp$_0 = tmp$;
    else {
      throw IllegalStateException_init(('Too much indentation (' + index + ')').toString());
    }
    return tmp$_0;
  };
  Indenter$Indents.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Indents',
    interfaces: []
  };
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
  Indenter_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Indenter',
    interfaces: []
  };
  function EOFException() {
    RuntimeException_init(this);
    this.name = 'EOFException';
  }
  EOFException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EOFException',
    interfaces: [RuntimeException]
  };
  function ListReader(items, default_0, pos) {
    if (pos === void 0)
      pos = 0;
    this.items = items;
    this.default = default_0;
    this.pos = pos;
  }
  Object.defineProperty(ListReader.prototype, 'size', {
    get: function () {
      return this.items.size;
    }
  });
  Object.defineProperty(ListReader.prototype, 'eof', {
    get: function () {
      return this.pos >= this.size;
    }
  });
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
    return index >= 0 && index <= get_lastIndex_0(tmp$_0) ? tmp$_0.get_za3lpa$(index) : ListReader$readOutside$lambda(this)(index);
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
    return index >= 0 && index <= get_lastIndex_0($receiver) ? $receiver.get_za3lpa$(index) : this.default;
  };
  ListReader.prototype.expect_11rb$ = function (expect) {
    var actual = this.readOutside();
    if (!equals(actual, expect))
      throw this.createExpectException_61zpoe$("Expected '" + expect + "' but found '" + actual + "'");
    return actual;
  };
  ListReader.prototype.expectPair_wg1gqi$ = function (expectPre, expectPost, callback) {
    this.expect_11rb$(expectPre);
    var out = callback();
    this.expect_11rb$(expectPost);
    return out;
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
  ListReader.prototype.keepPos_klfg04$ = defineInlineFunction('ktcc.com.soywiz.ktcc.util.ListReader.keepPos_klfg04$', function (callback) {
    var spos = this.pos;
    try {
      return callback();
    }
    finally {
      this.pos = spos;
    }
  });
  ListReader.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ListReader',
    interfaces: []
  };
  function ExpectException(msg) {
    Exception_init(msg, this);
    this.name = 'ExpectException';
  }
  ExpectException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ExpectException',
    interfaces: [Exception]
  };
  function ItemOrError(_value) {
    this._value = _value;
  }
  Object.defineProperty(ItemOrError.prototype, 'valueOrNull', {
    get: function () {
      return !this.isError ? this.value : null;
    }
  });
  Object.defineProperty(ItemOrError.prototype, 'value', {
    get: function () {
      var tmp$;
      return (tmp$ = this._value) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    }
  });
  Object.defineProperty(ItemOrError.prototype, 'error', {
    get: function () {
      var tmp$;
      return Kotlin.isType(tmp$ = this._value, Throwable) ? tmp$ : throwCCE();
    }
  });
  Object.defineProperty(ItemOrError.prototype, 'isError', {
    get: function () {
      return Kotlin.isType(this._value, Throwable);
    }
  });
  ItemOrError.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ItemOrError',
    interfaces: []
  };
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
  function NamedMap(map, getName) {
    if (map === void 0) {
      map = LinkedHashMap_init();
    }
    this.map = map;
    this.getName = getName;
  }
  NamedMap.prototype.addAll_p1ys8y$ = function (items) {
    var tmp$;
    tmp$ = items.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      this.add_11rb$(item);
    }
  };
  NamedMap.prototype.addAll_7l2mas$ = function (items) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== items.length; ++tmp$) {
      var item = items[tmp$];
      this.add_11rb$(item);
    }
  };
  NamedMap.prototype.add_11rb$ = function (item) {
    var $receiver = this.map;
    var key = this.getName(item);
    $receiver.put_xwzc9p$(key, item);
  };
  NamedMap.prototype.removeItem_11rb$ = function (item) {
    this.map.remove_11rb$(this.getName(item));
  };
  Object.defineProperty(NamedMap.prototype, 'entries', {
    get: function () {
      return this.map.entries;
    }
  });
  Object.defineProperty(NamedMap.prototype, 'keys', {
    get: function () {
      return this.map.keys;
    }
  });
  Object.defineProperty(NamedMap.prototype, 'size', {
    get: function () {
      return this.map.size;
    }
  });
  Object.defineProperty(NamedMap.prototype, 'values', {
    get: function () {
      return this.map.values;
    }
  });
  NamedMap.prototype.clear = function () {
    return this.map.clear();
  };
  NamedMap.prototype.containsKey_11rb$ = function (key) {
    return this.map.containsKey_11rb$(key);
  };
  NamedMap.prototype.containsValue_11rc$ = function (value) {
    return this.map.containsValue_11rc$(value);
  };
  NamedMap.prototype.get_11rb$ = function (key) {
    return this.map.get_11rb$(key);
  };
  NamedMap.prototype.isEmpty = function () {
    return this.map.isEmpty();
  };
  NamedMap.prototype.put_xwzc9p$ = function (key, value) {
    return this.map.put_xwzc9p$(key, value);
  };
  NamedMap.prototype.putAll_a2k3zr$ = function (from) {
    return this.map.putAll_a2k3zr$(from);
  };
  NamedMap.prototype.remove_11rb$ = function (key) {
    return this.map.remove_11rb$(key);
  };
  NamedMap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NamedMap',
    interfaces: [MutableMap]
  };
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
    if (startsWith_0($receiver, 34) && endsWith($receiver, 34)) {
      var endIndex = $receiver.length - 1 | 0;
      return get_cunescaped($receiver.substring(1, endIndex));
    }
     else {
      throw IllegalStateException_init(("String '" + $receiver + "' is not quoted").toString());
    }
  }
  function PReplaceRange(range, newValue) {
    this.range = range;
    this.newValue = newValue;
  }
  Object.defineProperty(PReplaceRange.prototype, 'start', {
    get: function () {
      return this.range.start;
    }
  });
  Object.defineProperty(PReplaceRange.prototype, 'end', {
    get: function () {
      return this.range.endInclusive + 1 | 0;
    }
  });
  PReplaceRange.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PReplaceRange',
    interfaces: []
  };
  PReplaceRange.prototype.component1 = function () {
    return this.range;
  };
  PReplaceRange.prototype.component2 = function () {
    return this.newValue;
  };
  PReplaceRange.prototype.copy_uc0fpo$ = function (range, newValue) {
    return new PReplaceRange(range === void 0 ? this.range : range, newValue === void 0 ? this.newValue : newValue);
  };
  PReplaceRange.prototype.toString = function () {
    return 'PReplaceRange(range=' + Kotlin.toString(this.range) + (', newValue=' + Kotlin.toString(this.newValue)) + ')';
  };
  PReplaceRange.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.range) | 0;
    result = result * 31 + Kotlin.hashCode(this.newValue) | 0;
    return result;
  };
  PReplaceRange.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.range, other.range) && Kotlin.equals(this.newValue, other.newValue)))));
  };
  function replaceAtOnce$lambda(closure$replaces, closure$str) {
    return function ($receiver) {
      var tmp$;
      $receiver.add_11rb$(new PReplaceRange(until(0, first(closure$replaces).start), null));
      tmp$ = closure$replaces.size;
      for (var n = 1; n < tmp$; n++) {
        var r0 = closure$replaces.get_za3lpa$(n - 1 | 0);
        var r1 = closure$replaces.get_za3lpa$(n);
        $receiver.add_11rb$(r0);
        $receiver.add_11rb$(new PReplaceRange(until(r0.end, r1.start), null));
      }
      $receiver.add_11rb$(last(closure$replaces));
      $receiver.add_11rb$(new PReplaceRange(until(last(closure$replaces).end, closure$str.length), null));
      return Unit;
    };
  }
  function replaceAtOnce($receiver, replaces) {
    var str = $receiver;
    if (replaces.isEmpty())
      return $receiver;
    var freplaces = buildList(replaceAtOnce$lambda(replaces, str));
    var destination = ArrayList_init_0(collectionSizeOrDefault(freplaces, 10));
    var tmp$;
    tmp$ = freplaces.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var transform$result;
      if (item.newValue != null) {
        transform$result = item.newValue;
      }
       else if (item.range.endInclusive < item.range.start) {
        transform$result = '';
      }
       else {
        transform$result = substring(str, item.range);
      }
      tmp$_0.call(destination, transform$result);
    }
    return joinToString(destination, '');
  }
  function StrReader(str, pos) {
    if (pos === void 0)
      pos = 0;
    this.str = str;
    this.pos = pos;
  }
  Object.defineProperty(StrReader.prototype, 'size', {
    get: function () {
      return this.str.length;
    }
  });
  Object.defineProperty(StrReader.prototype, 'eof', {
    get: function () {
      return this.pos >= this.size;
    }
  });
  Object.defineProperty(StrReader.prototype, 'available', {
    get: function () {
      return this.size - this.pos | 0;
    }
  });
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
  StrReader.prototype.readWhile_akknk2$ = function (cond) {
    var start = this.pos;
    while (!this.eof && cond(this.peek()))
      this.read();
    var end = this.pos;
    return this.str.substring(start, end);
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
  StrReader$MatchSet.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MatchSet',
    interfaces: []
  };
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
  StrReader.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StrReader',
    interfaces: []
  };
  function appendln($receiver, str) {
    return $receiver.append_gw00v9$(str).append_gw00v9$('\n');
  }
  function splitWithSeparator($receiver, separator) {
    var tmp$;
    var out = ArrayList_init();
    var parts = split($receiver, [separator]);
    tmp$ = parts.size;
    for (var n = 0; n < tmp$; n++) {
      if (n !== 0) {
        out.add_11rb$(separator);
      }
      var element = parts.get_za3lpa$(n);
      out.add_11rb$(element);
    }
    return out;
  }
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
  function toUTF8Bytes($receiver) {
    var tmp$;
    var out = new Int8Array($receiver.length);
    tmp$ = $receiver.length;
    for (var n = 0; n < tmp$; n++) {
      out[n] = toByte($receiver.charCodeAt(n) | 0);
    }
    return out;
  }
  function AceCompletion(caption, value, meta, score) {
    this.caption = caption;
    this.value = value;
    this.meta = meta;
    this.score = score;
  }
  AceCompletion.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AceCompletion',
    interfaces: []
  };
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
  function Pos(row, column) {
    this.row = row;
    this.column = column;
  }
  Pos.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Pos',
    interfaces: []
  };
  Pos.prototype.component1 = function () {
    return this.row;
  };
  Pos.prototype.component2 = function () {
    return this.column;
  };
  Pos.prototype.copy_vux9f0$ = function (row, column) {
    return new Pos(row === void 0 ? this.row : row, column === void 0 ? this.column : column);
  };
  Pos.prototype.toString = function () {
    return 'Pos(row=' + Kotlin.toString(this.row) + (', column=' + Kotlin.toString(this.column)) + ')';
  };
  Pos.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.row) | 0;
    result = result * 31 + Kotlin.hashCode(this.column) | 0;
    return result;
  };
  Pos.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.row, other.row) && Kotlin.equals(this.column, other.column)))));
  };
  function get_row0($receiver) {
    return $receiver.row;
  }
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
  AceAnnotation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AceAnnotation',
    interfaces: []
  };
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
  function onChangeCursor($receiver, callback) {
    $receiver.on('changeCursor', callback);
  }
  function setValue($receiver, content) {
    $receiver.setValue(content, 0);
  }
  function utf8Encode(str) {
    return new Int8Array((new TextEncoder('utf-8')).encode(str).buffer);
  }
  function evaluateKotlinRawExpect(ktprogram, args) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented evaluateKotlinRawExpect');
  }
  function readFile(name) {
    return files.get_11rb$(name);
  }
  function writeFile(name, content) {
    files.put_xwzc9p$(name, content);
  }
  var files;
  function jsObject(pairs) {
    var tmp$;
    var obj = {};
    for (tmp$ = 0; tmp$ !== pairs.length; ++tmp$) {
      var tmp$_0 = pairs[tmp$];
      var k = tmp$_0.component1()
      , v = tmp$_0.component2();
      obj[k] = v;
    }
    return obj;
  }
  function completionNode$lambda() {
    return document.getElementById('completion');
  }
  var completionNode;
  function get_completionNode() {
    return completionNode.value;
  }
  function debugNode$lambda() {
    return document.getElementById('debug');
  }
  var debugNode;
  function get_debugNode() {
    return debugNode.value;
  }
  function autocompileNode$lambda() {
    return document.getElementById('autocompile');
  }
  var autocompileNode;
  function get_autocompileNode() {
    return autocompileNode.value;
  }
  function targetNode$lambda() {
    return document.getElementById('target');
  }
  var targetNode;
  function get_targetNode() {
    return targetNode.value;
  }
  function includeRuntimeNode$lambda() {
    return document.getElementById('include-runtime');
  }
  var includeRuntimeNode;
  function get_includeRuntimeNode() {
    return includeRuntimeNode.value;
  }
  function get_debug() {
    return get_debugNode().checked;
  }
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
    window.localStorage['row0'] = get_row0(cur).toString();
    window.localStorage['column'] = cur.column.toString();
    return Unit;
  }
  function main$lambda$getCurrentTarget() {
    var tmp$;
    return (tmp$ = Targets_getInstance().byName.get_11rb$(get_targetNode().value)) != null ? tmp$ : Targets_getInstance().default;
  }
  function main$lambda$updateTranspiledMode(closure$getCurrentTarget, closure$transpiledEditor) {
    return function (target) {
      if (target === void 0)
        target = closure$getCurrentTarget();
      var tmp$, tmp$_0;
      tmp$_0 = closure$transpiledEditor.session;
      if (equals(target, KotlinTarget_getInstance()))
        tmp$ = 'ace/mode/kotlin';
      else if (equals(target, CTarget_getInstance()))
        tmp$ = 'ace/mode/c_cpp';
      else
        tmp$ = 'ace/mode/c_cpp';
      tmp$_0.setMode(tmp$);
    };
  }
  function main$lambda$ObjectLiteral(closure$sourcesEditor, closure$preprocessorEditor) {
    this.closure$sourcesEditor = closure$sourcesEditor;
    this.closure$preprocessorEditor = closure$preprocessorEditor;
    CompilationRef.call(this);
  }
  main$lambda$ObjectLiteral.prototype.updated = function () {
    var curpos = this.closure$sourcesEditor.getCursorPosition();
    var comp = this.ccompilation;
    if (comp != null) {
      var opos = new ProgramParser$PosWithFile(get_row1(curpos), 0, 'main.c');
      var translate = comp.parser.translatePos_b48wa3$(opos);
      if (translate != null) {
        this.closure$preprocessorEditor.gotoLine(translate.row1);
        this.closure$preprocessorEditor.selection.selectDown();
        this.closure$preprocessorEditor.scrollToLine(translate.row1, true, true);
      }
    }
  };
  main$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [CompilationRef]
  };
  function main$lambda$lambda_0(closure$cref) {
    return function (event, selection) {
      closure$cref.updated();
      return Unit;
    };
  }
  function main$lambda$compile$toAceAnnotation($receiver, type) {
    return new AceAnnotation($receiver.message, $receiver.row0, $receiver.columnStart, type);
  }
  function main$lambda$compile(closure$getCurrentTarget, closure$sourcesEditor, closure$updateTranspiledMode, closure$transpiledEditor, closure$preprocessorEditor, closure$cref) {
    return function () {
      var tmp$, tmp$_0;
      var target = closure$getCurrentTarget();
      var sources = closure$sourcesEditor.getValue();
      closure$updateTranspiledMode(target);
      if (equals(target, KotlinTarget_getInstance()))
        closure$transpiledEditor.session.setMode('ace/mode/kotlin');
      window.localStorage['ktccProgram'] = sources;
      files.clear();
      var $receiver = files;
      var value = utf8Encode(sources);
      $receiver.put_xwzc9p$('main.c', value);
      try {
        var cfileOut = CCompiler_getInstance().preprocess_ji1ias$(listOf('main.c'));
        var cfile = cfileOut.code;
        closure$preprocessorEditor.setValue(cfile, -1);
        try {
          var compilation = CCompiler_getInstance().compile_kc0fyj$(cfile, cfileOut.info, target, get_includeRuntimeNode().checked);
          closure$cref.setCompilation_8pjo5l$(compilation);
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
      closure$cref.updated();
    };
  }
  function main$lambda$lambda_1(closure$compile) {
    return function (e) {
      localStorage.setItem('ktccTarget', get_targetNode().value);
      closure$compile();
      return Unit;
    };
  }
  function main$lambda$lambda_2(closure$compile) {
    return function (it) {
      closure$compile();
      return Unit;
    };
  }
  function main$lambda$lambda$lambda_0(closure$compile) {
    return function () {
      if (get_autocompileNode().checked) {
        closure$compile();
      }
      return Unit;
    };
  }
  function main$lambda$lambda_3(closure$timeout, closure$compile) {
    return function (e) {
      window.clearTimeout(closure$timeout.v);
      closure$timeout.v = window.setTimeout(main$lambda$lambda$lambda_0(closure$compile), 500);
      return Unit;
    };
  }
  function main$lambda$lambda_4(closure$compile) {
    return function (e) {
      println('CLICKED!');
      closure$compile();
      return Unit;
    };
  }
  function main$lambda$lambda_5(closure$sourcesEditor, closure$row0, closure$column) {
    return function () {
      closure$sourcesEditor.gotoLine(closure$row0 + 1 | 0, closure$column, false);
      closure$sourcesEditor.scrollToLine(closure$row0 + 1 | 0, true);
      return Unit;
    };
  }
  function main$lambda(e) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
    println('READY');
    (tmp$ = document.getElementById('version')) != null ? (tmp$.textContent = KTCC_getInstance().VERSION) : null;
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
    $receiver_0.setReadOnly(true);
    var preprocessorEditor = $receiver_0;
    var $receiver_1 = ace.edit('transpiled');
    $receiver_1.setTheme('ace/theme/monokai');
    $receiver_1.setOptions(jsObject([]));
    $receiver_1.setReadOnly(true);
    var transpiledEditor = $receiver_1;
    var getCurrentTarget = main$lambda$getCurrentTarget;
    var updateTranspiledMode = main$lambda$updateTranspiledMode(getCurrentTarget, transpiledEditor);
    updateTranspiledMode();
    window.sourcesEditor = sourcesEditor;
    window.preprocessorEditor = preprocessorEditor;
    window.transpiledEditor = transpiledEditor;
    var cref = new main$lambda$ObjectLiteral(sourcesEditor, preprocessorEditor);
    onChangeCursor(sourcesEditor.selection, main$lambda$lambda_0(cref));
    var compile = main$lambda$compile(getCurrentTarget, sourcesEditor, updateTranspiledMode, transpiledEditor, preprocessorEditor, cref);
    get_targetNode().onchange = main$lambda$lambda_1(compile);
    get_targetNode().innerHTML = '';
    tmp$_0 = Targets_getInstance().all.iterator();
    while (tmp$_0.hasNext()) {
      var target = tmp$_0.next();
      var tmp$_8 = get_targetNode();
      var $receiver_2 = document.createElement('option');
      $receiver_2.setAttribute('value', target.name);
      $receiver_2.textContent = target.name;
      tmp$_8.appendChild($receiver_2);
    }
    var $receiver_3 = Targets_getInstance().byName;
    var key = localStorage.getItem('ktccTarget');
    var tmp$_9;
    var selectedTarget = (tmp$_1 = (Kotlin.isType(tmp$_9 = $receiver_3, Map) ? tmp$_9 : throwCCE()).get_11rb$(key)) != null ? tmp$_1 : Targets_getInstance().default;
    get_targetNode().selectedIndex = indexOf(Targets_getInstance().all, selectedTarget);
    var timeout = {v: 0};
    get_includeRuntimeNode().addEventListener('change', main$lambda$lambda_2(compile));
    sourcesEditor.on('change', main$lambda$lambda_3(timeout, compile));
    (tmp$_2 = document.getElementById('compile')) != null ? (tmp$_2.addEventListener('click', main$lambda$lambda_4(compile)), Unit) : null;
    var langTools = ace.require('ace/ext/language_tools');
    langTools.setCompleters([new CCompletion(cref)]);
    var row0 = (tmp$_4 = (tmp$_3 = window.localStorage['row0']) != null ? toIntOrNull(tmp$_3) : null) != null ? tmp$_4 : 0;
    var column = (tmp$_6 = (tmp$_5 = window.localStorage['column']) != null ? toIntOrNull(tmp$_5) : null) != null ? tmp$_6 : 0;
    sourcesEditor.setValue((tmp$_7 = window.localStorage['ktccProgram']) != null ? tmp$_7 : trimIndent('\n            #pragma ktcc module MyModule\n            #pragma ktcc package com.soywiz.test\n\n            #include <stdio.h>\n\n            typedef struct {\n                int a;\n                union {\n                    float f;\n                    long int l;\n                } u;\n            } A;\n\n            int main() {\n                A a = {1};\n                return 0;\n            }\n        '), -1);
    sourcesEditor.focus();
    window.setTimeout(main$lambda$lambda_5(sourcesEditor, row0, column), 0);
    window.localStorage[''];
    compile();
    return Unit;
  }
  function main(args) {
    println('Waiting for DOMContentLoaded...');
    document.addEventListener('DOMContentLoaded', main$lambda);
  }
  function CompilationRef() {
    this.ccompilation_3g6guc$_0 = null;
  }
  Object.defineProperty(CompilationRef.prototype, 'ccompilation', {
    get: function () {
      return this.ccompilation_3g6guc$_0;
    },
    set: function (ccompilation) {
      this.ccompilation_3g6guc$_0 = ccompilation;
    }
  });
  CompilationRef.prototype.updated = function () {
  };
  CompilationRef.prototype.setCompilation_8pjo5l$ = function (c) {
    this.ccompilation = c;
    this.updated();
  };
  CompilationRef.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CompilationRef',
    interfaces: []
  };
  function CCompletion(cref) {
    this.cref = cref;
  }
  CCompletion.prototype.getCompletions = function (editor, session, pos, prefix, callback) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    if (!get_completionNode().checked)
      return;
    try {
      var $receiver = files;
      var value = utf8Encode(editor.getValue());
      $receiver.put_xwzc9p$('main.c', value);
      var cfileDef = CCompiler_getInstance().preprocess_ji1ias$(listOf('main.c'));
      var cfile = cfileDef.code;
      var compilation = CCompiler_getInstance().compile_kc0fyj$(cfile, cfileDef.info, void 0, false);
      this.cref.setCompilation_8pjo5l$(compilation);
      var parser = compilation.parser;
      var originalPos = new ProgramParser$PosWithFile(get_row1(pos), pos.column, 'main.c');
      var translatedPos = (tmp$ = parser.translatePos_b48wa3$(originalPos)) != null ? tmp$ : new ProgramParser$Pos(1, 0);
      var foundToken = compilation.parser.findNearToken_vux9f0$(translatedPos.row1, translatedPos.column0);
      var foundNodeTree = (tmp$_0 = foundToken != null ? compilation.parser.findNodeTreeAtToken_4iwv8f$(compilation.program, foundToken) : null) != null ? tmp$_0 : emptyList();
      var lastFoundNode = lastOrNull(foundNodeTree);
      var destination = ArrayList_init();
      var tmp$_6;
      tmp$_6 = foundNodeTree.iterator();
      while (tmp$_6.hasNext()) {
        var element = tmp$_6.next();
        if (Kotlin.isType(element, FieldAccessExpr))
          destination.add_11rb$(element);
      }
      var expr = (tmp$_1 = lastOrNull(destination)) != null ? tmp$_1.left : null;
      var any$result;
      any$break: do {
        var tmp$_7;
        if (Kotlin.isType(foundNodeTree, Collection) && foundNodeTree.isEmpty()) {
          any$result = false;
          break any$break;
        }
        tmp$_7 = foundNodeTree.iterator();
        while (tmp$_7.hasNext()) {
          var element_0 = tmp$_7.next();
          if (Kotlin.isType(element_0, StringConstant)) {
            any$result = true;
            break any$break;
          }
        }
        any$result = false;
      }
       while (false);
      if (any$result)
        return;
      if (true) {
        var $receiver_0 = parser.typedefAliases.values;
        var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
        var tmp$_8;
        tmp$_8 = $receiver_0.iterator();
        while (tmp$_8.hasNext()) {
          var item = tmp$_8.next();
          destination_0.add_11rb$(new TypeInfo(item));
        }
        var res = destination_0;
        if (get_debug()) {
          println('type infos: ' + res);
        }
        tmp$_2 = res;
      }
       else {
        tmp$_2 = emptyList();
      }
      var typesInfos = tmp$_2;
      var any$result_0;
      any$break: do {
        var tmp$_9;
        if (Kotlin.isType(foundNodeTree, Collection) && foundNodeTree.isEmpty()) {
          any$result_0 = false;
          break any$break;
        }
        tmp$_9 = foundNodeTree.iterator();
        while (tmp$_9.hasNext()) {
          var element_1 = tmp$_9.next();
          if (Kotlin.isType(element_1, Stm)) {
            any$result_0 = true;
            break any$break;
          }
        }
        any$result_0 = false;
      }
       while (false);
      if (any$result_0) {
        var $receiver_1 = listOf_0(['if', 'else', 'switch', 'while', 'do', 'for']);
        var destination_1 = ArrayList_init_0(collectionSizeOrDefault($receiver_1, 10));
        var tmp$_10;
        tmp$_10 = $receiver_1.iterator();
        while (tmp$_10.hasNext()) {
          var item_0 = tmp$_10.next();
          destination_1.add_11rb$(new KeywordInfo(item_0));
        }
        tmp$_3 = destination_1;
      }
       else {
        tmp$_3 = emptyList();
      }
      var keywordsInfo = tmp$_3;
      if (get_debug()) {
        println('expr=' + toString(expr) + ', originalPos=' + originalPos + ', translatedPos=' + translatedPos);
        if (expr == null) {
          tmp$_4 = foundNodeTree.iterator();
          while (tmp$_4.hasNext()) {
            var node = tmp$_4.next();
            println('  -> ' + node);
          }
        }
      }
      if (expr != null) {
        var exprType = expr.type;
        var resolvedExprType2 = parser.resolve_1vqhz6$(exprType);
        var resolvedExprType = Kotlin.isType(resolvedExprType2, BasePointerType) ? resolvedExprType2.elementType : resolvedExprType2;
        if (Kotlin.isType(resolvedExprType, StructType)) {
          var structTypeInfo = getStructTypeInfo(resolvedExprType, compilation.parser);
          var $receiver_2 = structTypeInfo.fields;
          var destination_2 = ArrayList_init_0(collectionSizeOrDefault($receiver_2, 10));
          var tmp$_11;
          tmp$_11 = $receiver_2.iterator();
          while (tmp$_11.hasNext()) {
            var item_1 = tmp$_11.next();
            destination_2.add_11rb$(new SymbolInfo(new SymbolScope(null), item_1.name, item_1.type, item_1.node, new CToken('')));
          }
          tmp$_5 = destination_2;
        }
         else {
          tmp$_5 = emptyList();
        }
      }
       else {
        var scope = compilation.parser.getInnerSymbolsScopeAt_iadrgl$(foundToken);
        var allSymbolNames = scope.getAllSymbolNames_wzgf5y$();
        var destination_3 = ArrayList_init();
        var tmp$_12;
        tmp$_12 = allSymbolNames.iterator();
        while (tmp$_12.hasNext()) {
          var element_2 = tmp$_12.next();
          if (contains(element_2, prefix, true))
            destination_3.add_11rb$(element_2);
        }
        var filteredSymbolNames = destination_3;
        var symbolNames = !filteredSymbolNames.isEmpty() ? filteredSymbolNames : allSymbolNames;
        var destination_4 = ArrayList_init_0(collectionSizeOrDefault(symbolNames, 10));
        var tmp$_13;
        tmp$_13 = symbolNames.iterator();
        while (tmp$_13.hasNext()) {
          var item_2 = tmp$_13.next();
          destination_4.add_11rb$(scope.get_61zpoe$(item_2));
        }
        var $receiver_3 = filterNotNull(destination_4);
        var destination_5 = ArrayList_init();
        var tmp$_14;
        tmp$_14 = $receiver_3.iterator();
        while (tmp$_14.hasNext()) {
          var element_3 = tmp$_14.next();
          var tmp$_15;
          if (element_3.token.pos < 0 || ((tmp$_15 = foundToken != null ? foundToken.pos : null) != null ? tmp$_15 : 0) >= element_3.token.pos)
            destination_5.add_11rb$(element_3);
        }
        tmp$_5 = destination_5;
      }
      var symbolInfos = tmp$_5;
      var combinedInfos = plus(plus(symbolInfos, typesInfos), keywordsInfo);
      var destination_6 = ArrayList_init_0(collectionSizeOrDefault(combinedInfos, 10));
      var tmp$_16;
      tmp$_16 = combinedInfos.iterator();
      while (tmp$_16.hasNext()) {
        var item_3 = tmp$_16.next();
        var tmp$_17 = destination_6.add_11rb$;
        var tmp$_18, tmp$_19, tmp$_20;
        try {
          tmp$_19 = item_3.desc;
        }
         catch (e_0) {
          if (Kotlin.isType(e_0, Throwable)) {
            tmp$_19 = (tmp$_18 = e_0.message) != null ? tmp$_18 : 'Error Unknown';
          }
           else
            throw e_0;
        }
        var typeStr = tmp$_19;
        if (startsWith(item_3.name, prefix))
          tmp$_20 = 20;
        else if (startsWith(item_3.name, prefix, true))
          tmp$_20 = 10;
        else
          tmp$_20 = 1;
        var scoreMult = tmp$_20;
        tmp$_17.call(destination_6, new AceCompletion(item_3.name, item_3.name, typeStr, Kotlin.imul(item_3.score, scoreMult)));
      }
      callback(null, copyToArray(destination_6));
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        console.log(e);
      }
       else
        throw e;
    }
  };
  CCompletion.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CCompletion',
    interfaces: []
  };
  _.CPointer = CPointer;
  _.CFunction0 = CFunction0;
  _.CFunction1 = CFunction1;
  _.CFunction2 = CFunction2;
  _.CFunction3 = CFunction3;
  _.CFunction4 = CFunction4;
  _.CFunction5 = CFunction5;
  _.CFunction6 = CFunction6;
  _.CFunction7 = CFunction7;
  _.Runtime = Runtime;
  _.RuntimeSyscalls = RuntimeSyscalls;
  Object.defineProperty(_, 'DummyRuntimeSyscalls', {
    get: DummyRuntimeSyscalls_getInstance
  });
  AbstractRuntime.IStruct = AbstractRuntime$IStruct;
  AbstractRuntime.IStructCompanion = AbstractRuntime$IStructCompanion;
  $$importsForInline$$.ktcc = _;
  AbstractRuntime.Chunk = AbstractRuntime$Chunk;
  AbstractRuntime.ExitError = AbstractRuntime$ExitError;
  _.AbstractRuntime = AbstractRuntime;
  var package$com = _.com || (_.com = {});
  var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
  var package$ktcc = package$soywiz.ktcc || (package$soywiz.ktcc = {});
  Object.defineProperty(package$ktcc, 'KTCC', {
    get: KTCC_getInstance
  });
  var package$cli = package$ktcc.cli || (package$ktcc.cli = {});
  Object.defineProperty(package$cli, 'CLI', {
    get: CLI_getInstance
  });
  var package$compiler = package$ktcc.compiler || (package$ktcc.compiler = {});
  package$compiler.PreprocessOutput = PreprocessOutput;
  CCompiler.prototype.Compilation = CCompiler$Compilation;
  Object.defineProperty(package$compiler, 'CCompiler', {
    get: CCompiler_getInstance
  });
  var package$eval = package$ktcc.eval || (package$ktcc.eval = {});
  package$eval.CKotlinEvaluator = CKotlinEvaluator;
  var package$gen = package$ktcc.gen || (package$ktcc.gen = {});
  package$gen.CGenerator = CGenerator;
  Object.defineProperty(package$gen, 'CTarget', {
    get: CTarget_getInstance
  });
  package$gen.CSharpGenerator = CSharpGenerator;
  Object.defineProperty(package$gen, 'CSharpTarget', {
    get: CSharpTarget_getInstance
  });
  package$gen.BaseTarget = BaseTarget;
  Object.defineProperty(BaseGenerator$BreakScope$Kind, 'WHEN', {
    get: BaseGenerator$BreakScope$Kind$WHEN_getInstance
  });
  Object.defineProperty(BaseGenerator$BreakScope$Kind, 'WHILE', {
    get: BaseGenerator$BreakScope$Kind$WHILE_getInstance
  });
  BaseGenerator$BreakScope.Kind = BaseGenerator$BreakScope$Kind;
  BaseGenerator.BreakScope = BaseGenerator$BreakScope;
  BaseGenerator.GenFunctionScope = BaseGenerator$GenFunctionScope;
  package$gen.BaseGenerator = BaseGenerator;
  package$gen.KotlinGenerator = KotlinGenerator;
  KotlinConsts.prototype.KType = KotlinConsts$KType;
  KotlinConsts.prototype.FuncType = KotlinConsts$FuncType;
  Object.defineProperty(package$gen, 'KotlinConsts', {
    get: KotlinConsts_getInstance
  });
  Object.defineProperty(package$gen, 'KotlinTarget', {
    get: KotlinTarget_getInstance
  });
  Object.defineProperty(package$gen, 'JvmName', {
    get: function () {
      return JvmName;
    }
  });
  Object.defineProperty(package$gen, 'KotlinRuntime', {
    get: function () {
      return KotlinRuntime;
    }
  });
  Object.defineProperty(package$gen, 'KotlinRuntimeJvm', {
    get: function () {
      return KotlinRuntimeJvm;
    }
  });
  Object.defineProperty(package$gen, 'Targets', {
    get: Targets_getInstance
  });
  var package$headers = package$ktcc.headers || (package$ktcc.headers = {});
  package$headers.Include = Include;
  package$headers.CIncludes = CIncludes;
  Object.defineProperty(package$headers, 'CStdIncludes', {
    get: function () {
      return CStdIncludes;
    }
  });
  var package$internal = package$ktcc.internal || (package$ktcc.internal = {});
  Object.defineProperty(package$internal, 'KTCC_VERSION_8be2vx$', {
    get: function () {
      return KTCC_VERSION;
    }
  });
  var package$parser = package$ktcc.parser || (package$ktcc.parser = {});
  package$parser.Node = Node;
  package$parser.DummyNode = DummyNode;
  package$parser.IdDecl = IdDecl;
  Object.defineProperty(Id, 'Companion', {
    get: Id$Companion_getInstance
  });
  package$parser.Id = Id;
  Object.defineProperty(StringConstant, 'Companion', {
    get: StringConstant$Companion_getInstance
  });
  package$parser.StringConstant = StringConstant;
  Object.defineProperty(CharConstant, 'Companion', {
    get: CharConstant$Companion_getInstance
  });
  package$parser.CharConstant = CharConstant;
  package$parser.NumericConstant = NumericConstant;
  package$parser.NumberConstant = NumberConstant;
  package$parser.IntConstant_za3lpa$ = IntConstant;
  package$parser.IntConstant_s8cxhz$ = IntConstant_0;
  package$parser.IntConstant_61zpoe$ = IntConstant_1;
  package$parser.IntConstant_f2ulfc$ = IntConstant_2;
  Object.defineProperty(IntConstant_3, 'Companion', {
    get: IntConstant$Companion_getInstance
  });
  package$parser.IntConstant = IntConstant_3;
  package$parser.DecimalConstant_14dthe$ = DecimalConstant;
  Object.defineProperty(DecimalConstant_0, 'Companion', {
    get: DecimalConstant$Companion_getInstance
  });
  package$parser.DecimalConstant = DecimalConstant_0;
  package$parser.Expr = Expr;
  package$parser.not_ta7buu$ = not;
  package$parser.LValue = LValue;
  package$parser.CommaExpr = CommaExpr;
  package$parser.ConstExpr = ConstExpr;
  package$parser.SingleOperandExpr = SingleOperandExpr;
  package$parser.BaseUnaryOp = BaseUnaryOp;
  package$parser.Unop = Unop;
  package$parser.PostfixExpr = PostfixExpr;
  package$parser.AssignExpr = AssignExpr;
  package$parser.toSimpleAssignExpr_6nrek5$ = toSimpleAssignExpr;
  package$parser.SimpleAssignExpr = SimpleAssignExpr;
  package$parser.ArrayAccessExpr = ArrayAccessExpr;
  package$parser.FieldAccessExpr = FieldAccessExpr;
  package$parser.CallExpr = CallExpr;
  Object.defineProperty(BinOperatorsExpr, 'Companion', {
    get: BinOperatorsExpr$Companion_getInstance
  });
  BinOperatorsExpr.MutBinop = BinOperatorsExpr$MutBinop;
  package$parser.BinOperatorsExpr = BinOperatorsExpr;
  package$parser.Binop = Binop;
  package$parser.Stm = Stm;
  package$parser.RawStm = RawStm;
  package$parser.CommentStm = CommentStm;
  package$parser.EmptyStm = EmptyStm;
  package$parser.IfElse = IfElse;
  package$parser.Loop = Loop;
  package$parser.While = While;
  package$parser.DoWhile = DoWhile;
  package$parser.For = For;
  package$parser.Goto = Goto;
  package$parser.Continue = Continue;
  package$parser.Break = Break;
  package$parser.Return = Return;
  package$parser.SwitchBase = SwitchBase;
  package$parser.Switch = Switch;
  package$parser.SwitchWithoutFallthrough = SwitchWithoutFallthrough;
  package$parser.ExprStm = ExprStm;
  package$parser.LabeledStm = LabeledStm;
  package$parser.DefaultCaseStm = DefaultCaseStm;
  package$parser.CaseStm = CaseStm;
  package$parser.DefaultStm = DefaultStm;
  package$parser.Stms = Stms;
  package$parser.stms_o9lo2r$ = stms;
  package$parser.CParamBase = CParamBase;
  package$parser.CParamVariadic = CParamVariadic;
  package$parser.CParam = CParam;
  package$parser.Decl = Decl;
  package$parser.ParsedDeclaration = ParsedDeclaration;
  package$parser.VarDeclaration = VarDeclaration;
  package$parser.FuncDeclaration = FuncDeclaration;
  package$parser.CastExpr = CastExpr;
  package$parser.SizeOfAlignExprBase = SizeOfAlignExprBase;
  package$parser.SizeOfAlignTypeExpr = SizeOfAlignTypeExpr;
  package$parser.SizeOfAlignExprExpr = SizeOfAlignExprExpr;
  package$parser.TenaryExpr = TenaryExpr;
  package$parser.ParsedProgram = ParsedProgram;
  package$parser.Program = Program;
  package$parser.DesignOptInit = DesignOptInit;
  package$parser.ArrayInitExpr = ArrayInitExpr;
  package$parser.Declarator = Declarator;
  package$parser.ParameterDecl = ParameterDecl;
  package$parser.StructDeclarator = StructDeclarator;
  package$parser.StructDeclaration = StructDeclaration;
  package$parser.Pointer = Pointer;
  package$parser.VarargDeclarator = VarargDeclarator;
  package$parser.DeclaratorWithPointer = DeclaratorWithPointer;
  package$parser.IdentifierDeclarator = IdentifierDeclarator;
  package$parser.CompoundDeclarator = CompoundDeclarator;
  package$parser.ParameterDeclarator = ParameterDeclarator;
  package$parser.ArrayDeclarator = ArrayDeclarator;
  package$parser.DeclaratorPostfix = DeclaratorPostfix;
  package$parser.ParamDeclaratorPostfix = ParamDeclaratorPostfix;
  package$parser.ArrayDeclaratorPostfix = ArrayDeclaratorPostfix;
  package$parser.Designator = Designator;
  package$parser.ArrayAccessDesignator = ArrayAccessDesignator;
  package$parser.FieldAccessDesignator = FieldAccessDesignator;
  package$parser.DesignatorList = DesignatorList;
  package$parser.InitDeclarator = InitDeclarator;
  package$parser.TypeSpecifier = TypeSpecifier;
  package$parser.VariadicTypeSpecifier = VariadicTypeSpecifier;
  package$parser.ListTypeSpecifier = ListTypeSpecifier;
  package$parser.AtomicTypeSpecifier = AtomicTypeSpecifier;
  Object.defineProperty(BasicTypeSpecifier$Kind, 'VOID', {
    get: BasicTypeSpecifier$Kind$VOID_getInstance
  });
  Object.defineProperty(BasicTypeSpecifier$Kind, 'CHAR', {
    get: BasicTypeSpecifier$Kind$CHAR_getInstance
  });
  Object.defineProperty(BasicTypeSpecifier$Kind, 'SHORT', {
    get: BasicTypeSpecifier$Kind$SHORT_getInstance
  });
  Object.defineProperty(BasicTypeSpecifier$Kind, 'INT', {
    get: BasicTypeSpecifier$Kind$INT_getInstance
  });
  Object.defineProperty(BasicTypeSpecifier$Kind, 'LONG', {
    get: BasicTypeSpecifier$Kind$LONG_getInstance
  });
  Object.defineProperty(BasicTypeSpecifier$Kind, 'FLOAT', {
    get: BasicTypeSpecifier$Kind$FLOAT_getInstance
  });
  Object.defineProperty(BasicTypeSpecifier$Kind, 'DOUBLE', {
    get: BasicTypeSpecifier$Kind$DOUBLE_getInstance
  });
  Object.defineProperty(BasicTypeSpecifier$Kind, 'SIGNED', {
    get: BasicTypeSpecifier$Kind$SIGNED_getInstance
  });
  Object.defineProperty(BasicTypeSpecifier$Kind, 'UNSIGNED', {
    get: BasicTypeSpecifier$Kind$UNSIGNED_getInstance
  });
  Object.defineProperty(BasicTypeSpecifier$Kind, 'BOOL', {
    get: BasicTypeSpecifier$Kind$BOOL_getInstance
  });
  Object.defineProperty(BasicTypeSpecifier$Kind, 'COMPLEX', {
    get: BasicTypeSpecifier$Kind$COMPLEX_getInstance
  });
  Object.defineProperty(BasicTypeSpecifier$Kind, 'Companion', {
    get: BasicTypeSpecifier$Kind$Companion_getInstance
  });
  BasicTypeSpecifier.Kind = BasicTypeSpecifier$Kind;
  package$parser.BasicTypeSpecifier = BasicTypeSpecifier;
  package$parser.RefTypeSpecifier = RefTypeSpecifier;
  package$parser.AnonymousTypeSpecifier = AnonymousTypeSpecifier;
  package$parser.StructUnionTypeSpecifier = StructUnionTypeSpecifier;
  package$parser.StructUnionRefTypeSpecifier = StructUnionRefTypeSpecifier;
  Object.defineProperty(StorageClassSpecifier$Kind, 'TYPEDEF', {
    get: StorageClassSpecifier$Kind$TYPEDEF_getInstance
  });
  Object.defineProperty(StorageClassSpecifier$Kind, 'EXTERN', {
    get: StorageClassSpecifier$Kind$EXTERN_getInstance
  });
  Object.defineProperty(StorageClassSpecifier$Kind, 'STATIC', {
    get: StorageClassSpecifier$Kind$STATIC_getInstance
  });
  Object.defineProperty(StorageClassSpecifier$Kind, 'THREAD_LOCAL', {
    get: StorageClassSpecifier$Kind$THREAD_LOCAL_getInstance
  });
  Object.defineProperty(StorageClassSpecifier$Kind, 'AUTO', {
    get: StorageClassSpecifier$Kind$AUTO_getInstance
  });
  Object.defineProperty(StorageClassSpecifier$Kind, 'REGISTER', {
    get: StorageClassSpecifier$Kind$REGISTER_getInstance
  });
  Object.defineProperty(StorageClassSpecifier$Kind, 'Companion', {
    get: StorageClassSpecifier$Kind$Companion_getInstance
  });
  StorageClassSpecifier.Kind = StorageClassSpecifier$Kind;
  package$parser.StorageClassSpecifier = StorageClassSpecifier;
  Object.defineProperty(TypeQualifier$Kind, 'CONST', {
    get: TypeQualifier$Kind$CONST_getInstance
  });
  Object.defineProperty(TypeQualifier$Kind, 'RESTRICT', {
    get: TypeQualifier$Kind$RESTRICT_getInstance
  });
  Object.defineProperty(TypeQualifier$Kind, 'VOLATILE', {
    get: TypeQualifier$Kind$VOLATILE_getInstance
  });
  Object.defineProperty(TypeQualifier$Kind, 'ATOMIC', {
    get: TypeQualifier$Kind$ATOMIC_getInstance
  });
  Object.defineProperty(TypeQualifier$Kind, 'Companion', {
    get: TypeQualifier$Kind$Companion_getInstance
  });
  TypeQualifier.Kind = TypeQualifier$Kind;
  package$parser.TypeQualifier = TypeQualifier;
  package$parser.FunctionSpecifier = FunctionSpecifier;
  package$parser.AlignAsSpecifier = AlignAsSpecifier;
  package$parser.TypeName = TypeName;
  package$parser.AbstractDeclarator = AbstractDeclarator;
  package$parser.EnumTypeSpecifier = EnumTypeSpecifier;
  package$parser.EnumItemDef = EnumItemDef;
  package$parser.AutocompletionInfo = AutocompletionInfo;
  package$parser.KeywordInfo = KeywordInfo;
  package$parser.TypeInfo = TypeInfo;
  package$parser.SymbolInfo = SymbolInfo;
  package$parser.SymbolScope = SymbolScope;
  Object.defineProperty(ProgramMessage$Level, 'WARNING', {
    get: ProgramMessage$Level$WARNING_getInstance
  });
  Object.defineProperty(ProgramMessage$Level, 'ERROR', {
    get: ProgramMessage$Level$ERROR_getInstance
  });
  ProgramMessage.Level = ProgramMessage$Level;
  package$parser.ProgramMessage = ProgramMessage;
  package$parser.ParserException = ParserException;
  package$parser.ProgramParserRef = ProgramParserRef;
  package$parser.FunctionScope = FunctionScope;
  Object.defineProperty(package$parser, 'POINTER_SIZE', {
    get: function () {
      return POINTER_SIZE;
    }
  });
  ProgramParser.Marker = ProgramParser$Marker;
  ProgramParser.Pos = ProgramParser$Pos;
  ProgramParser.PosWithFile = ProgramParser$PosWithFile;
  package$parser.ProgramParser = ProgramParser;
  package$parser.visitAllDescendants_2mqam4$ = visitAllDescendants;
  package$parser.visitChildren_2mqam4$ = visitChildren;
  package$parser.ChildrenVisitor = ChildrenVisitor;
  package$parser.FuncChildrenVisitor = FuncChildrenVisitor;
  package$parser.ArrayChildrenVisitor = ArrayChildrenVisitor;
  package$parser.invoke_w62skd$ = invoke;
  package$parser.invoke_l0g4k1$ = invoke_0;
  package$parser.invoke_jraqks$ = invoke_1;
  package$parser.invoke_3reweb$ = invoke_2;
  package$parser.StructField = StructField;
  package$parser.StructTypeInfo = StructTypeInfo;
  package$parser.get_warnings_wkt77j$ = get_warnings;
  package$parser.get_errors_wkt77j$ = get_errors;
  package$parser.get_warningsAndErrors_wkt77j$ = get_warningsAndErrors;
  package$parser.whileBlock_wrvsdf$ = whileBlock;
  package$parser.whileNotNull_nyd4o0$ = whileNotNull;
  package$parser.list_qbf8el$ = list;
  package$parser.identifier_u7hod0$ = identifier;
  package$parser.identifierDecl_u7hod0$ = identifierDecl;
  package$parser.primaryExpr_u7hod0$ = primaryExpr;
  package$parser.tryPrimaryExpr_u7hod0$ = tryPrimaryExpr;
  package$parser.tryPostFixExpression_u7hod0$ = tryPostFixExpression;
  package$parser.tryUnaryExpression_u7hod0$ = tryUnaryExpression;
  package$parser.tryCastExpression_u7hod0$ = tryCastExpression;
  package$parser.tryBinopExpr_u7hod0$ = tryBinopExpr;
  package$parser.tryConditionalExpr_u7hod0$ = tryConditionalExpr;
  package$parser.tryAssignmentExpr_u7hod0$ = tryAssignmentExpr;
  package$parser.assignmentExpr_u7hod0$ = assignmentExpr;
  package$parser.tryExpression_u7hod0$ = tryExpression;
  package$parser.expression_u7hod0$ = expression;
  package$parser.constantExpression_u7hod0$ = constantExpression;
  package$parser.stringLiteral_u7hod0$ = stringLiteral;
  package$parser.blockItem_u7hod0$ = blockItem;
  package$parser.statement_u7hod0$ = statement;
  KeywordEnum.Companion = KeywordEnum$Companion;
  package$parser.KeywordEnum = KeywordEnum;
  package$parser.typeName_u7hod0$ = typeName;
  package$parser.tryTypeName_u7hod0$ = tryTypeName;
  package$parser.tryDirectAbstractDeclarator_u7hod0$ = tryDirectAbstractDeclarator;
  package$parser.tryAbstractDeclarator_u7hod0$ = tryAbstractDeclarator;
  package$parser.declarationSpecifiers_sft08p$ = declarationSpecifiers;
  package$parser.type_u7hod0$ = type;
  package$parser.tryTypeQualifier_u7hod0$ = tryTypeQualifier;
  package$parser.structDeclarator_u7hod0$ = structDeclarator;
  package$parser.tryStructDeclarator_u7hod0$ = tryStructDeclarator;
  package$parser.tryStructDeclaration_u7hod0$ = tryStructDeclaration;
  package$parser.enumerator_u7hod0$ = enumerator;
  package$parser.tryDeclarationSpecifier_pshqxl$ = tryDeclarationSpecifier;
  package$parser.tryPointer_u7hod0$ = tryPointer;
  package$parser.parameterDeclaration_u7hod0$ = parameterDeclaration;
  package$parser.declarator_u7hod0$ = declarator;
  package$parser.tryDeclarator_u7hod0$ = tryDeclarator;
  package$parser.tryDesignator_u7hod0$ = tryDesignator;
  package$parser.designatorList_u7hod0$ = designatorList;
  package$parser.tryDesignation_u7hod0$ = tryDesignation;
  package$parser.initializer_p79ecq$ = initializer;
  package$parser.initDeclarator_p79ecq$ = initDeclarator;
  package$parser.staticAssert_u7hod0$ = staticAssert;
  package$parser.tryDeclaration_sft08p$ = tryDeclaration;
  package$parser.Declaration_ohpn52$ = Declaration;
  package$parser.declaration_sft08p$ = declaration;
  package$parser.recovery_llaus7$ = recovery;
  package$parser.compoundStatement_u7hod0$ = compoundStatement;
  package$parser.toCParam_bqbd4s$ = toCParam;
  package$parser.extractParameter_2hrb0e$ = extractParameter;
  package$parser.functionDefinition_u7hod0$ = functionDefinition;
  package$parser.tryExternalDeclaration_u7hod0$ = tryExternalDeclaration;
  package$parser.tryTypeSpecifier_u7hod0$ = tryTypeSpecifier;
  package$parser.typeSpecifier_u7hod0$ = typeSpecifier;
  package$parser.translationUnits_u7hod0$ = translationUnits;
  package$parser.program_u7hod0$ = program;
  package$parser.parsedProgram_wh1i1r$ = parsedProgram;
  package$parser.programParser_no1th$ = programParser;
  package$parser.program_6heh7z$ = program_0;
  package$parser.programParser_pdl1vz$ = programParser_0;
  package$parser.times_a5ehzx$ = times;
  package$parser.plus_a5ehzx$ = plus_1;
  package$parser.EvalContext = EvalContext;
  package$parser.toBool_mzud1t$ = toBool;
  package$parser.toNumber_mzud1t$ = toNumber;
  package$parser.toDouble_mzud1t$ = toDouble;
  package$parser.toInt_mzud1t$ = toInt;
  package$parser.constantEvaluate_rmm16b$ = constantEvaluate;
  Object.defineProperty(package$parser, 'keywords', {
    get: function () {
      return keywords;
    }
  });
  Object.defineProperty(package$parser, 'storageClassSpecifiers', {
    get: function () {
      return storageClassSpecifiers;
    }
  });
  Object.defineProperty(package$parser, 'typeSpecifier', {
    get: function () {
      return typeSpecifier_0;
    }
  });
  Object.defineProperty(package$parser, 'unaryOperators', {
    get: function () {
      return unaryOperators;
    }
  });
  Object.defineProperty(package$parser, 'assignmentOperators', {
    get: function () {
      return assignmentOperators;
    }
  });
  Object.defineProperty(package$parser, 'binaryOperators', {
    get: function () {
      return binaryOperators;
    }
  });
  Object.defineProperty(package$parser, 'ternaryOperators', {
    get: function () {
      return ternaryOperators;
    }
  });
  Object.defineProperty(package$parser, 'postPreFixOperators', {
    get: function () {
      return postPreFixOperators;
    }
  });
  Object.defineProperty(package$parser, 'allOperators', {
    get: function () {
      return allOperators;
    }
  });
  var package$preprocessor = package$ktcc.preprocessor || (package$ktcc.preprocessor = {});
  package$preprocessor.PToken = PToken;
  package$preprocessor.DefineFunction = DefineFunction;
  package$preprocessor.PreprocessorInfo = PreprocessorInfo;
  package$preprocessor.PreprocessorGlobalContext = PreprocessorGlobalContext;
  package$preprocessor.PreprocessorContext = PreprocessorContext;
  Object.defineProperty(Macro, 'Companion', {
    get: Macro$Companion_getInstance
  });
  package$preprocessor.Macro = Macro;
  package$preprocessor.expectEOL_bkacs$ = expectEOL;
  package$preprocessor.expectAny_fqtpyx$ = expectAny;
  package$preprocessor.skipSpaces_w6orpj$ = skipSpaces;
  Object.defineProperty(IncludeKind, 'GLOBAL', {
    get: IncludeKind$GLOBAL_getInstance
  });
  Object.defineProperty(IncludeKind, 'LOCAL', {
    get: IncludeKind$LOCAL_getInstance
  });
  package$preprocessor.IncludeKind = IncludeKind;
  package$preprocessor.PreprocessorReader = PreprocessorReader;
  package$preprocessor.skipSpaces_aucuv$ = skipSpaces_0;
  package$preprocessor.skipSpacesAndEOLS_gwdg5r$ = skipSpacesAndEOLS;
  package$preprocessor.peekWithoutSpaces_yxkssv$ = peekWithoutSpaces;
  package$preprocessor.PNode = PNode;
  package$preprocessor.PLiterals = PLiterals;
  package$preprocessor.PIf = PIf;
  package$preprocessor.PDefine = PDefine;
  package$preprocessor.PInclude = PInclude;
  package$preprocessor.PPragma = PPragma;
  package$preprocessor.PError = PError;
  package$preprocessor.PLine = PLine;
  package$preprocessor.PUndef = PUndef;
  package$preprocessor.CPreprocessor = CPreprocessor;
  package$preprocessor.preprocess_h7srfl$ = preprocess;
  var package$serializable = package$ktcc.serializable || (package$ktcc.serializable = {});
  package$serializable.KSerializer = KSerializer;
  package$serializable.Serializable = Serializable;
  var package$tokenizer = package$ktcc.tokenizer || (package$ktcc.tokenizer = {});
  package$tokenizer.CToken = CToken;
  package$tokenizer.tokenize_vhqq0k$ = tokenize;
  Object.defineProperty(IncludeMode, 'NORMAL', {
    get: IncludeMode$NORMAL_getInstance
  });
  Object.defineProperty(IncludeMode, 'EOL', {
    get: IncludeMode$EOL_getInstance
  });
  Object.defineProperty(IncludeMode, 'ALL', {
    get: IncludeMode$ALL_getInstance
  });
  package$tokenizer.IncludeMode = IncludeMode;
  package$tokenizer.doTokenize_g9pw80$ = doTokenize;
  package$tokenizer.MutableTokenInfo = MutableTokenInfo;
  package$tokenizer.doTokenize_97i6cn$ = doTokenize_0;
  var package$transform = package$ktcc.transform || (package$ktcc.transform = {});
  package$transform.BuilderMarker = BuilderMarker;
  Object.defineProperty(StmBuilder, 'Companion', {
    get: StmBuilder$Companion_getInstance
  });
  package$transform.StmBuilder = StmBuilder;
  Object.defineProperty(SwitchBuilder, 'Companion', {
    get: SwitchBuilder$Companion_getInstance
  });
  package$transform.SwitchBuilder = SwitchBuilder;
  package$transform.findSymbolsRequiringStackAlloc_t5f6lv$ = findSymbolsRequiringStackAlloc;
  package$transform.lower_o9d9nq$ = lower;
  package$transform.getAllTypes_9jftfz$ = getAllTypes;
  package$transform.getMutatingVariables_t5f6lv$ = getMutatingVariables;
  StateMachineLowerer.prototype.Output = StateMachineLowerer$Output;
  Object.defineProperty(package$transform, 'StateMachineLowerer', {
    get: StateMachineLowerer_getInstance
  });
  package$transform.Label = Label;
  package$transform.LowLabel = LowLabel;
  package$transform.LowGoto = LowGoto;
  package$transform.LowIfGoto = LowIfGoto;
  package$transform.LowSwitchGoto = LowSwitchGoto;
  package$transform.removeFallthrough_vy71xt$ = removeFallthrough;
  package$transform.toIfs_c2hipz$ = toIfs;
  package$transform.lastStm_t2ktp4$ = lastStm;
  package$transform.removeLastStm_t2ktp4$ = removeLastStm;
  package$transform.TempContext = TempContext;
  package$transform.containsBreakOrContinue_jqe19u$ = containsBreakOrContinue;
  Object.defineProperty(Type, 'Companion', {
    get: Type$Companion_getInstance
  });
  var package$types = package$ktcc.types || (package$ktcc.types = {});
  package$types.Type = Type;
  package$types.BinopTypes = BinopTypes;
  package$types.UnopTypes = UnopTypes;
  package$types.growToWord_y92nrp$ = growToWord;
  package$types.withSign_ya3c98$ = withSign;
  package$types.get_sign_cpakq9$ = get_sign;
  package$types.get_signed_cpakq9$ = get_signed;
  package$types.get_unsigned_cpakq9$ = get_unsigned;
  package$types.get_elementType_cpakq9$ = get_elementType;
  package$types.ptr_ya3c98$ = ptr;
  package$types.PrimType = PrimType;
  package$types.NumberType = NumberType;
  Object.defineProperty(package$types, 'BoolType', {
    get: BoolType_getInstance
  });
  package$types.IntType = IntType;
  package$types.FloatingType = FloatingType;
  Object.defineProperty(package$types, 'FloatType', {
    get: FloatType_getInstance
  });
  Object.defineProperty(package$types, 'DoubleType', {
    get: DoubleType_getInstance
  });
  Object.defineProperty(package$types, 'VariadicType', {
    get: VariadicType_getInstance
  });
  Object.defineProperty(package$types, 'DummyType', {
    get: DummyType_getInstance
  });
  package$types.BaseReferenceableType = BaseReferenceableType;
  package$types.BasePointerType = BasePointerType;
  package$types.PointerType = PointerType;
  package$types.ArrayType = ArrayType;
  package$types.getStructTypeInfo_i35gzl$ = getStructTypeInfo;
  package$types.EnumType = EnumType;
  package$types.StructType = StructType;
  package$types.UnknownType = UnknownType;
  package$types.RefType = RefType;
  package$types.TypedefTypeName = TypedefTypeName;
  package$types.generateFinalType_9c05bu$ = generateFinalType;
  package$types.generatePointerType_nvsv4b$ = generatePointerType;
  package$types.FParamBase = FParamBase;
  package$types.FParamVariadic = FParamVariadic;
  package$types.FParam = FParam;
  package$types.FunctionType = FunctionType;
  package$types.toFParam_9d90px$ = toFParam;
  package$types.generateFinalType_lyqvvh$ = generateFinalType_0;
  package$types.generateFinalType_6l1ne3$ = generateFinalType_1;
  package$types.withDeclarator_r2bvi9$ = withDeclarator;
  package$types.withDeclarator_wu4gn1$ = withDeclarator_0;
  package$types.toFinalType_57od93$ = toFinalType;
  package$types.toFinalType_5lw20n$ = toFinalType_0;
  package$types.getName_2hrb0e$ = getName;
  package$types.getNameId_2hrb0e$ = getNameId;
  package$types.canAssignTo_2kt3r3$ = canAssignTo;
  package$types.getSize_y92nrp$ = getSize;
  package$types.TypeResolver = TypeResolver;
  Object.defineProperty(package$types, 'UncachedTypeResolver', {
    get: UncachedTypeResolver_getInstance
  });
  package$types.ResolveCache = ResolveCache;
  package$types.resolve_y92nrp$ = resolve;
  var package$util = package$ktcc.util || (package$ktcc.util = {});
  package$util.binarySearch_tpuxuu$ = binarySearch;
  package$util.binarySearch_nwy378$ = binarySearch_0;
  package$util.binarySearch_x4f2cq$ = binarySearch_1;
  package$util.genericBinarySearch_fz6bok$ = genericBinarySearch;
  package$util.BSearchResult = BSearchResult;
  package$util.buildList_spr6vj$ = buildList;
  package$util.isHexDigit_myv2d0$ = isHexDigit;
  package$util.isDigit_myv2d0$ = isDigit;
  package$util.isAlphaLC_myv2d0$ = isAlphaLC;
  package$util.isAlphaUC_myv2d0$ = isAlphaUC;
  package$util.isAlpha_myv2d0$ = isAlpha;
  package$util.isAlnum_myv2d0$ = isAlnum;
  package$util.isAlphaOrUnderscore_myv2d0$ = isAlphaOrUnderscore;
  package$util.isAlnumOrUnderscore_myv2d0$ = isAlnumOrUnderscore;
  package$util.isWhitespaceFast_myv2d0$ = isWhitespaceFast;
  Object.defineProperty(package$util, 'DOT', {
    get: get_DOT
  });
  package$util.UnexpectedException = UnexpectedException;
  package$util.unexpected_61zpoe$ = unexpected;
  package$util.Indenter_f28zyd$ = Indenter;
  Object.defineProperty(Indenter_0, 'Indent', {
    get: Indenter$Indent_getInstance
  });
  Object.defineProperty(Indenter_0, 'Unindent', {
    get: Indenter$Unindent_getInstance
  });
  package$util.Indenter = Indenter_0;
  Object.defineProperty(Indenter_0, 'Indents', {
    get: Indenter$Indents_getInstance
  });
  package$util.EOFException = EOFException;
  package$util.ExpectException = ExpectException;
  package$util.ListReader = ListReader;
  package$util.ItemOrError = ItemOrError;
  package$util.reader_bv23uc$ = reader;
  package$util.NamedMap = NamedMap;
  package$util.get_cescaped_pdl1vz$ = get_cescaped;
  package$util.get_cquoted_pdl1vz$ = get_cquoted;
  package$util.get_cunescaped_pdl1vz$ = get_cunescaped;
  package$util.get_cunquoted_pdl1vz$ = get_cunquoted;
  package$util.PReplaceRange = PReplaceRange;
  package$util.replaceAtOnce_fr4pi8$ = replaceAtOnce;
  StrReader.MatchSet = StrReader$MatchSet;
  package$util.StrReader = StrReader;
  package$util.appendln_s47sd7$ = appendln;
  package$util.splitWithSeparator_rjktp$ = splitWithSeparator;
  package$util.toStringUtf8_964n91$ = toStringUtf8;
  package$util.toUTF8Bytes_pdl1vz$ = toUTF8Bytes;
  _.AceCompletion = AceCompletion;
  _.Pos = Pos;
  _.get_row0_1hg1n$ = get_row0;
  _.get_row1_1hg1n$ = get_row1;
  _.AceAnnotation = AceAnnotation;
  _.onChangeCursor_wtcm2c$ = onChangeCursor;
  _.setValue_mlvikc$ = setValue;
  _.utf8Encode_61zpoe$ = utf8Encode;
  package$eval.evaluateKotlinRawExpect_c1kmwu$ = evaluateKotlinRawExpect;
  package$internal.readFile_61zpoe$ = readFile;
  package$internal.writeFile_yzgtim$ = writeFile;
  var package$js = package$ktcc.js || (package$ktcc.js = {});
  Object.defineProperty(package$js, 'files', {
    get: function () {
      return files;
    }
  });
  _.jsObject_gpdhqq$ = jsObject;
  Object.defineProperty(_, 'completionNode', {
    get: get_completionNode
  });
  Object.defineProperty(_, 'debugNode', {
    get: get_debugNode
  });
  Object.defineProperty(_, 'autocompileNode', {
    get: get_autocompileNode
  });
  Object.defineProperty(_, 'targetNode', {
    get: get_targetNode
  });
  Object.defineProperty(_, 'includeRuntimeNode', {
    get: get_includeRuntimeNode
  });
  Object.defineProperty(_, 'debug', {
    get: get_debug
  });
  _.main_kand9s$ = main;
  _.CompilationRef = CompilationRef;
  _.CCompletion = CCompletion;
  DummyRuntimeSyscalls.prototype.fopen_sqlbip$ = RuntimeSyscalls.prototype.fopen_sqlbip$;
  DummyRuntimeSyscalls.prototype.fread_cph5k5$ = RuntimeSyscalls.prototype.fread_cph5k5$;
  DummyRuntimeSyscalls.prototype.fwrite_cph5k5$ = RuntimeSyscalls.prototype.fwrite_cph5k5$;
  DummyRuntimeSyscalls.prototype.fflush_eg8d9k$ = RuntimeSyscalls.prototype.fflush_eg8d9k$;
  DummyRuntimeSyscalls.prototype.ftell_eg8d9k$ = RuntimeSyscalls.prototype.ftell_eg8d9k$;
  DummyRuntimeSyscalls.prototype.fsetpos_lbuexv$ = RuntimeSyscalls.prototype.fsetpos_lbuexv$;
  DummyRuntimeSyscalls.prototype.fgetpos_lbuexv$ = RuntimeSyscalls.prototype.fgetpos_lbuexv$;
  DummyRuntimeSyscalls.prototype.fseek_7o3413$ = RuntimeSyscalls.prototype.fseek_7o3413$;
  DummyRuntimeSyscalls.prototype.fclose_eg8d9k$ = RuntimeSyscalls.prototype.fclose_eg8d9k$;
  JvmName = 'kotlin.jvm.JvmName';
  DOLLAR = 36;
  KotlinRuntime = '// KTCC RUNTIME ///////////////////////////////////////////////////\ninline/*!*/ class CPointer<T>(val ptr: Int)\ninline/*!*/ class CFunction0<TR>(val ptr: Int)\ninline/*!*/ class CFunction1<T0, TR>(val ptr: Int)\ninline/*!*/ class CFunction2<T0, T1, TR>(val ptr: Int)\ninline/*!*/ class CFunction3<T0, T1, T2, TR>(val ptr: Int)\ninline/*!*/ class CFunction4<T0, T1, T2, T3, TR>(val ptr: Int)\ninline/*!*/ class CFunction5<T0, T1, T2, T3, T4, TR>(val ptr: Int)\ninline/*!*/ class CFunction6<T0, T1, T2, T3, T4, T5, TR>(val ptr: Int)\ninline/*!*/ class CFunction7<T0, T1, T2, T3, T4, T5, T6, TR>(val ptr: Int)\n\nopen class Runtime(REQUESTED_HEAP_SIZE: Int = 0, REQUESTED_STACK_PTR: Int = 0, __syscalls: RuntimeSyscalls = DummyRuntimeSyscalls) : AbstractRuntime(REQUESTED_HEAP_SIZE, REQUESTED_STACK_PTR, __syscalls) {\n    val HEAP = ByteArray(HEAP_SIZE)\n\n    override fun lb(ptr: Int): Byte = HEAP[ptr]\n    override fun sb(ptr: Int, value: Byte): Unit = run { HEAP[ptr] = value }\n\n    override fun lh(ptr: Int): Short = ((lbu(ptr) shl 0) or (lbu(ptr + 1) shl 8)).toShort()\n    override fun sh(ptr: Int, value: Short): Unit = sb(ptr, (value.toInt() ushr 0).toByte()).also { sb(ptr + 1, (value.toInt() ushr 8).toByte()) }\n\n    override fun lw(ptr: Int): Int = ((lbu(ptr) shl 0) or (lbu(ptr + 1) shl 8) or (lbu(ptr + 2) shl 16) or (lbu(ptr + 3) shl 24))\n    override fun sw(ptr: Int, value: Int): Unit = sb(ptr, (value ushr 0).toByte()).also { sb(ptr + 1, (value ushr 8).toByte()) }.also { sb(ptr + 2, (value ushr 16).toByte()) }.also { sb(ptr + 3, (value ushr 24).toByte()) }\n\n    override fun ld(ptr: Int): Long = (lwu(ptr) shl 0) or (lwu(ptr + 4) shl 32)\n    override fun sd(ptr: Int, value: Long): Unit = sw(ptr, (value ushr 0).toInt()).also { sw(ptr + 4, (value ushr 32).toInt()) }\n}\n\ninterface RuntimeSyscalls {\n    fun AbstractRuntime.fopen(file: CPointer<Byte>, mode: CPointer<Byte>): CPointer<CPointer<Unit>> = TODO()\n    fun AbstractRuntime.fread(ptr: CPointer<Unit>, size: Int, nmemb: Int, stream: CPointer<CPointer<Unit>>): Int = TODO()\n    fun AbstractRuntime.fwrite(ptr: CPointer<Unit>, size: Int, nmemb: Int, stream: CPointer<CPointer<Unit>>): Int = TODO()\n    fun AbstractRuntime.fflush(stream: CPointer<CPointer<Unit>>): Int = TODO()\n    fun AbstractRuntime.ftell(stream: CPointer<CPointer<Unit>>): Long = TODO()\n    fun AbstractRuntime.fsetpos(stream: CPointer<CPointer<Unit>>, ptrHolder: CPointer<Long>): Int = TODO()\n    fun AbstractRuntime.fgetpos(stream: CPointer<CPointer<Unit>>, ptrHolder: CPointer<Long>): Int = TODO()\n    fun AbstractRuntime.fseek(stream: CPointer<CPointer<Unit>>, offset: Long, whence: Int): Int = TODO()\n    fun AbstractRuntime.fclose(stream: CPointer<CPointer<Unit>>): Unit = TODO()\n}\n\nobject DummyRuntimeSyscalls : RuntimeSyscalls\n\n@Suppress("MemberVisibilityCanBePrivate", "FunctionName", "CanBeVal", "DoubleNegation", "LocalVariableName", "NAME_SHADOWING", "VARIABLE_WITH_REDUNDANT_INITIALIZER", "RemoveRedundantCallsOfConversionMethods", "EXPERIMENTAL_IS_NOT_ENABLED", "RedundantExplicitType", "RemoveExplicitTypeArguments", "RedundantExplicitType", "unused", "UNCHECKED_CAST", "UNUSED_VARIABLE", "UNUSED_PARAMETER", "NOTHING_TO_INLINE", "PropertyName", "ClassName", "USELESS_CAST", "PrivatePropertyName", "CanBeParameter", "UnusedMainParameter")\n@UseExperimental(ExperimentalUnsignedTypes::class)\nabstract class AbstractRuntime(val REQUESTED_HEAP_SIZE: Int = 0, val REQUESTED_STACK_PTR: Int = 0, val __syscalls: RuntimeSyscalls = DummyRuntimeSyscalls) : RuntimeSyscalls by __syscalls {\n\n    val Float.Companion.SIZE_BYTES: Int get() = 4\n    val Double.Companion.SIZE_BYTES: Int get() = 8\n\n    infix fun UByte.shr(other: Int): UInt = this.toUInt() shr other\n    infix fun UByte.shl(other: Int): UInt = this.toUInt() shl other\n\n    val FUNCTIONS: ArrayList<kotlin.reflect.KFunction<*>> = arrayListOf<kotlin.reflect.KFunction<*>>()\n\n    interface IStruct {\n    }\n\n    interface IStructCompanion<T : IStruct> {\n        val SIZE: Int\n    }\n\n    val POINTER_SIZE: Int = 4\n\n    val HEAP_SIZE: Int = if (REQUESTED_HEAP_SIZE <= 0) 16 * 1024 * 1024 else REQUESTED_HEAP_SIZE // 16 MB default\n    var STACK_PTR: Int = if (REQUESTED_STACK_PTR == 0) 512 * 1024 else REQUESTED_STACK_PTR // 0.5 MB\n    var HEAP_PTR: Int = STACK_PTR\n\n    abstract fun lb(ptr: Int): Byte\n    abstract fun sb(ptr: Int, value: Byte): Unit\n\n    abstract fun lh(ptr: Int): Short\n    abstract fun sh(ptr: Int, value: Short): Unit\n\n    abstract fun lw(ptr: Int): Int\n    abstract fun sw(ptr: Int, value: Int): Unit\n\n    abstract fun ld(ptr: Int): Long\n    abstract fun sd(ptr: Int, value: Long): Unit\n\n    fun lbu(ptr: Int): Int = lb(ptr).toInt() and 0xFF\n    fun lhu(ptr: Int): Int = lh(ptr).toInt() and 0xFFFF\n    fun lwu(ptr: Int): Long = lw(ptr).toLong() and 0xFFFFFFFFL\n\n    inline fun <T> Int.toCPointer(): CPointer<T> = CPointer(this)\n    inline fun <T> CPointer<*>.toCPointer(): CPointer<T> = CPointer(this.ptr)\n\n    fun <T> CPointer<T>.addPtr(offset: Int, elementSize: Int): CPointer<T> = CPointer<T>(this.ptr + offset * elementSize)\n\n    @kotlin.jvm.JvmName("plusPtr") operator fun <T> CPointer<CPointer<T>>.plus(offset: Int): CPointer<CPointer<T>> = addPtr<CPointer<T>>(offset, 4)\n    @kotlin.jvm.JvmName("minusPtr") operator fun <T> CPointer<CPointer<T>>.minus(offset: Int): CPointer<CPointer<T>> = addPtr<CPointer<T>>(-offset, 4)\n    fun <T> CPointer<CPointer<T>>.minusPtrPtr(other: CPointer<CPointer<T>>): Int = (this.ptr - other.ptr) / 4\n\n    operator fun <T> CPointer<CPointer<T>>.set(offset: Int, value: CPointer<T>): Unit = sw(this.ptr + offset * 4, value.ptr)\n    @kotlin.jvm.JvmName("getPtrPtr") operator fun <T> CPointer<CPointer<T>>.get(offset: Int): CPointer<T> = CPointer(lw(this.ptr + offset * 4))\n\n    @get:kotlin.jvm.JvmName("getPtrValue")\n    var <T> CPointer<CPointer<T>>.value: CPointer<T> get() = this[0]; set(value) = run { this[0] = value }\n\n    fun Boolean.toInt(): Int = if (this) 1 else 0\n    fun CPointer<*>.toInt(): Int = ptr\n    fun CPointer<*>.toBool(): Boolean = ptr != 0\n\n    inline fun Number.toBool(): Boolean = this.toInt() != 0\n    inline fun UByte.toBool(): Boolean = this.toInt() != 0\n    inline fun UShort.toBool(): Boolean = this.toInt() != 0\n    inline fun UInt.toBool(): Boolean = this.toInt() != 0\n    inline fun ULong.toBool(): Boolean = this.toInt() != 0\n    fun Boolean.toBool(): Boolean = this\n\n    // STACK ALLOC\n    inline fun <T> stackFrame(callback: () -> T): T {\n        val oldPos = STACK_PTR\n        return try { callback() } finally { STACK_PTR = oldPos }\n    }\n    fun alloca(size: Int): CPointer<Unit> = CPointer<Unit>((STACK_PTR - size).also { STACK_PTR -= size })\n    fun alloca_zero(size: Int): CPointer<Unit> = alloca(size).also { memset(it, 0, size) }\n\n    data class Chunk(val head: Int, val size: Int)\n\n    val chunks: LinkedHashMap<Int, Chunk> = LinkedHashMap<Int, Chunk>()\n    val freeChunks: ArrayList<Chunk> = arrayListOf<Chunk>()\n\n    // HEAP ALLOC\n    // @TODO: OPTIMIZE!\n    fun malloc(size: Int): CPointer<Unit> {\n        val chunk = freeChunks.firstOrNull { it.size >= size }\n        if (chunk != null) {\n            freeChunks.remove(chunk)\n            chunks[chunk.head] = chunk\n            return CPointer(chunk.head)\n        } else {\n            val head = HEAP_PTR\n            HEAP_PTR += size\n            chunks[head] = Chunk(head, size)\n            return CPointer(head)\n        }\n    }\n    fun free(ptr: CPointer<*>): Unit {\n        chunks.remove(ptr.ptr)?.let {\n            freeChunks += it\n        }\n    }\n\n    // I/O\n    fun putchar(c: Int): Int = c.also { print(c.toChar()) }\n\n    class ExitError(val code: Int) : Error()\n\n    fun exit(code: Int): Unit {\n        throw ExitError(code)\n    }\n\n    fun prevAligned(size: Int, alignment: Int): Int {\n        if (size % alignment == 0) return size\n        return size - (alignment - (size % alignment))\n    }\n\n    fun memWrite(ptr: CPointer<*>, data: ByteArray, offset: Int = 0, size: Int = data.size): Unit = run { for (n in offset until offset + size) sb(ptr.ptr + n, data[n]) }\n    fun memRead(ptr: CPointer<*>, data: ByteArray, offset: Int = 0, size: Int = data.size): Unit = run { for (n in offset until offset + size) data[n] = lb(ptr.ptr + n) }\n\n    fun memWrite(ptr: CPointer<*>, data: ShortArray, offset: Int = 0, size: Int = data.size): Unit = run { for (n in offset until offset + size) sh(ptr.ptr + n * 2, data[n]) }\n    fun memRead(ptr: CPointer<*>, data: ShortArray, offset: Int = 0, size: Int = data.size): Unit = run { for (n in offset until offset + size) data[n] = lh(ptr.ptr + n * 2) }\n\n    fun sprintf(out: CPointer<Byte>, format: CPointer<Byte>, vararg params: Any?): Unit {\n        out.writeStringz(_format(format, *params).toString())\n    }\n\n    fun printf(format: CPointer<Byte>, vararg params: Any?): Unit {\n        print(_format(format, *params).toString())\n    }\n\n    private fun String.toCase(upper: Boolean): String = if (upper) this.toUpperCase() else this.toLowerCase()\n\n    fun _format(format: CPointer<Byte>, vararg params: Any?, appendable: Appendable = StringBuilder()): Appendable {\n        return _format(format.readStringz(), *params, appendable = appendable)\n    }\n\n    private fun Char.isUpperCase(): Boolean = this in \'A\'..\'Z\'\n\n    private fun Int.clamp(min: Int, max: Int) = when {\n        this < min -> min\n        this > max -> max\n        else -> this\n    }\n\n    private fun String.substr(offset: Int, len: Int = this.length): String {\n        val roffset = if (offset < 0) this.length + offset else offset\n        return this.substring(roffset.clamp(0, length), (roffset + len).clamp(0, length))\n    }\n\n    fun numberToStringDecimal(res: String, decimalPlaces: Int, skipTrailingZeros: Boolean = false): String {\n        val data = StringBuilder()\n        var commaIndex = -1\n        var state = 0\n        var sign = +1\n        var evalue = 0\n        var esign = 1\n        for (n in 0 until res.length) {\n            val c = res[n]\n            if (state == 0) {\n                when (c) {\n                    \'-\' -> sign = -1\n                    \'+\' -> sign = +1\n                    \'.\' -> commaIndex = n\n                    in \'0\'..\'9\' -> data.append(c)\n                    \'e\', \'E\' -> state = 1\n                }\n            } else if (state == 1) {\n                when (c) {\n                    \'-\' -> esign = -1\n                    \'+\' -> esign = +1\n                    in \'0\'..\'9\' -> {\n                        evalue *= 10\n                        evalue += c - \'0\'\n                    }\n                }\n            }\n        }\n\n        val exp = evalue * esign\n        val rCommaIndex = if (commaIndex >= 0) commaIndex else data.length\n        val commaOffset = rCommaIndex + exp\n        val out = if (commaOffset < 0) {\n            "0." + "0".repeat(-commaOffset + decimalPlaces) + data\n        } else {\n            val res = data.toString() + "0".repeat(kotlin.math.max(1, commaOffset - data.length + 1 + decimalPlaces))\n            res.substring(0, commaOffset) + "." + res.substring(commaOffset)\n        }\n        val parts = out.split(".")\n        val rout = if (decimalPlaces <= 0) {\n            parts[0]\n        } else {\n            val res = parts[1].substr(0, decimalPlaces)\n            //val pp = parts[1].substr(1, decimalPlaces).takeIf { it.isNotEmpty() } ?: "0"\n            "${parts[0]}.${res}"\n        }\n        val rrout = if (rout.startsWith(".")) "0$rout" else rout\n        val rrrout = if (skipTrailingZeros) rrout.replace(Regex("0-$"), "") else rrout\n        return if (sign > 0) rrrout else "-$rrrout"\n    }\n\n    private fun Double.toStringDecimal(decimalPlaces: Int, skipTrailingZeros: Boolean = false): String = numberToStringDecimal(this.toString(), decimalPlaces, skipTrailingZeros)\n    private fun Float.toStringDecimal(decimalPlaces: Int, skipTrailingZeros: Boolean = false): String = this.toDouble().toStringDecimal(decimalPlaces, skipTrailingZeros)\n\n    protected open fun _formatF(value: Number): String {\n        return value.toDouble().toStringDecimal(6)\n    }\n    private fun _formatE(value: Number): String = "$value"\n    private fun _formatG(value: Number): String = "$value"\n    private fun _formatA(value: Number): String = "$value"\n\n    // http://www.cplusplus.com/reference/cstdio/printf/\n    fun _format(fmt: String, vararg params: Any?, appendable: Appendable = StringBuilder()): Appendable {\n        var paramPos = 0\n        var n = 0\n\n\n        fun String.toCase(upper: Boolean): String = if (upper) this.toUpperCase() else this.toLowerCase()\n        fun Char.isUpperCase(): Boolean = this in \'A\'..\'Z\'\n        //fun _formatF(value: Number, digits: Int): String = "$value"\n        //fun _formatE(value: Number, digits: Int): String = "$value"\n        //fun _formatG(value: Number, digits: Int): String = "$value"\n        //fun _formatA(value: Number, digits: Int): String = "$value"\n\n        fun readParam(): Any? = params.getOrNull(paramPos++)\n        fun readParamI(): Int {\n            val v = readParam()\n            return when (v) {\n                null -> 0\n                is Char -> v.toInt()\n                is UByte -> v.toInt()\n                is UShort -> v.toInt()\n                is UInt -> v.toInt()\n                is Number -> v.toInt()\n                is CPointer<*> -> v.ptr\n                is String -> v.toIntOrNull() ?: 0\n                else -> -1\n            }\n        }\n        fun readParamS(): String {\n            val v = readParam()\n            return when (v) {\n                null -> "NULL"\n                is Char -> "$v"\n                is CPointer<*> -> (v as CPointer<Byte>).readStringz()\n                is Number -> CPointer<Byte>(v.toInt()).readStringz()\n                is String -> v.toString()\n                else -> "<INVALID>"\n            }\n        }\n\n        loop@ while (n < fmt.length) {\n            val c = fmt[n++]\n            if (c == \'%\') {\n                var c2: Char = \' \'\n                var pad: Char = \' \'\n                var len: Int = 0\n                do {\n                    c2 = fmt[n++]\n                    if (c2 == \'0\') {\n                        pad = c2\n                    } else if (c2 in \'0\'..\'9\') {\n                        len *= 10\n                        len += c2 - \'0\'\n                    }\n                } while (c2 in \'0\'..\'9\')\n\n                if (c2 == \'%\') {\n                    appendable.append(\'%\')\n                    continue@loop\n                }\n\n                when (c2) {\n                    \'n\' -> readParam()\n                    \'c\' -> appendable.append(readParamI().toChar())\n                    \'p\' -> appendable.append("0x" + readParamI().toString(16).padStart(8, \'0\'))\n                    \'f\', \'F\' -> appendable.append(_formatF(readParam() as Number).toCase(c2.isUpperCase()))\n                    \'e\', \'E\' -> appendable.append(_formatE(readParam() as Number).toCase(c2.isUpperCase()))\n                    \'a\', \'A\' -> appendable.append(_formatA(readParam() as Number).toCase(c2.isUpperCase()))\n                    \'g\', \'G\' -> appendable.append(_formatG(readParam() as Number).toCase(c2.isUpperCase()))\n                    \'d\', \'i\' -> appendable.append(readParamI().toString(10).padStart(len, pad))\n                    \'u\' -> appendable.append(readParamI().toUInt().toString(10).padStart(len, pad))\n                    \'x\', \'X\' -> appendable.append((readParamI().toLong() and 0xFFFFFFFFL).toString(16).toCase(c2.isUpperCase()).padStart(len, pad))\n                    \'o\', \'O\' -> appendable.append((readParamI().toLong() and 0xFFFFFFFFL).toString(8).toCase(c2.isUpperCase()).padStart(len, pad))\n                    \'s\' -> appendable.append(readParamS())\n                    else -> {\n                        appendable.append(c)\n                        appendable.append(c2)\n                    }\n                }\n            } else {\n                appendable.append(c)\n            }\n        }\n        return appendable\n    }\n\n    // string/memory\n    open fun memset(ptr: CPointer<*>, value: Int, num: Int): CPointer<Unit> = run { for (n in 0 until num) { sb(ptr.ptr + n, value.toByte()) }; return (ptr as CPointer<Unit>) }\n    open fun memcpy(dest: CPointer<Unit>, src: CPointer<Unit>, num: Int): CPointer<Unit> {\n        for (n in 0 until num) sb(dest.ptr + n, lb(src.ptr + n))\n        return dest as CPointer<Unit>\n    }\n    open fun memmove(dest: CPointer<Unit>, src: CPointer<Unit>, num: Int): CPointer<Unit> {\n        if (dest.ptr > src.ptr) {\n            for (m in 0 until num) {\n                val n = num - 1 - m\n                sb(dest.ptr + n, lb(src.ptr + n))\n            }\n        } else {\n            for (n in 0 until num) sb(dest.ptr + n, lb(src.ptr + n))\n        }\n        return dest as CPointer<Unit>\n    }\n\n    private val STRINGS: LinkedHashMap<String, CPointer<Byte>> = LinkedHashMap<String, CPointer<Byte>>()\n\n    private class ByteArrayBuilder(val initialCapacity: Int = 64) {\n        private var data = ByteArray(initialCapacity)\n        private var pos = 0\n        fun append(byte: Byte) {\n            if (pos >= data.size - 1) {\n                data = data.copyOf(kotlin.math.max(data.size * 2, data.size + 64))\n            }\n            data[pos++] = byte\n        }\n        fun bytes(): ByteArray {\n            return data.copyOf(pos)\n        }\n    }\n\n    @UseExperimental(ExperimentalStdlibApi::class)\n    fun CPointer<Byte>.readStringz(): String {\n        var sb = ByteArrayBuilder()\n        var pos = this.ptr\n        while (true) {\n            val c = lb(pos++)\n            if (c == 0.toByte()) break\n            sb.append(c)\n        }\n        return sb.bytes().decodeToString()\n    }\n\n    // @TODO: Make this allocation-free by manually implementing it\n    @UseExperimental(ExperimentalStdlibApi::class)\n    inline fun encodeToByteArray(data: String, out: (b: Byte) -> Unit): Int {\n        var count = 0\n        for (c in data.encodeToByteArray()) {\n            out(c)\n            count++\n        }\n        return count\n    }\n\n    @UseExperimental(ExperimentalStdlibApi::class)\n    fun CPointer<Byte>.writeStringz(str: String) {\n        var n = 0\n        encodeToByteArray(str) { this[n++] = it }\n        this[n++] = 0.toByte()\n    }\n\n    @UseExperimental(ExperimentalStdlibApi::class)\n    val String.ptr: CPointer<Byte> get() = STRINGS.getOrPut(this) {\n        val bytes = this.encodeToByteArray()\n        val ptr = malloc(bytes.size + 1).toCPointer<Byte>()\n        val p = ptr.ptr\n        for (n in 0 until bytes.size) sb(p + n, bytes[n])\n        sb(p + bytes.size, 0)\n        ptr\n    }\n\n    @UseExperimental(kotlin.time.ExperimentalTime::class)\n    private val start = kotlin.time.MonoClock.markNow()\n\n    @UseExperimental(kotlin.time.ExperimentalTime::class)\n    fun clock(): Int = start.elapsedNow().inMilliseconds.toInt()\n\n    val Array<String>.ptr: CPointer<CPointer<Byte>> get() {\n        val array = this\n        val ptr = malloc(POINTER_SIZE * array.size).toCPointer<CPointer<Byte>>()\n        for (n in 0 until array.size) {\n            sw(ptr.ptr + n * POINTER_SIZE, array[n].ptr.ptr)\n        }\n        return ptr\n    }\n\n\n    @kotlin.jvm.JvmName("getterByte") operator fun CPointer<Byte>.get(offset: Int): Byte = lb(this.ptr + offset * 1)\n    @kotlin.jvm.JvmName("setterByte") operator fun CPointer<Byte>.set(offset: Int, value: Byte): Unit = sb(this.ptr + offset * 1, value)\n    @set:kotlin.jvm.JvmName("setter_Byte_value") @get:kotlin.jvm.JvmName("getter_Byte_value") var CPointer<Byte>.value: Byte get() = this[0]; set(value): Unit = run { this[0] = value }\n    @kotlin.jvm.JvmName("plusByte") fun CPointer<Byte>.plus(offset: Int): CPointer<Byte> = addPtr<Byte>(offset, 1)\n    @kotlin.jvm.JvmName("minusByte") fun CPointer<Byte>.minus(offset: Int): CPointer<Byte> = addPtr<Byte>(-offset, 1)\n    fun CPointer<Byte>.minusPtrByte(other: CPointer<Byte>): Int = (this.ptr - other.ptr) / 1\n    fun fixedArrayOfByte(size: Int, vararg values: Byte): CPointer<Byte> = alloca_zero(size * 1).toCPointer<Byte>().also { for (n in 0 until values.size) sb(it.ptr + n * 1, values[n]) }\n\n    @kotlin.jvm.JvmName("getterShort") operator fun CPointer<Short>.get(offset: Int): Short = lh(this.ptr + offset * 2)\n    @kotlin.jvm.JvmName("setterShort") operator fun CPointer<Short>.set(offset: Int, value: Short): Unit = sh(this.ptr + offset * 2, value)\n    @set:kotlin.jvm.JvmName("setter_Short_value") @get:kotlin.jvm.JvmName("getter_Short_value") var CPointer<Short>.value: Short get() = this[0]; set(value): Unit = run { this[0] = value }\n    @kotlin.jvm.JvmName("plusShort") fun CPointer<Short>.plus(offset: Int): CPointer<Short> = addPtr<Short>(offset, 2)\n    @kotlin.jvm.JvmName("minusShort") fun CPointer<Short>.minus(offset: Int): CPointer<Short> = addPtr<Short>(-offset, 2)\n    fun CPointer<Short>.minusPtrShort(other: CPointer<Short>): Int = (this.ptr - other.ptr) / 2\n    fun fixedArrayOfShort(size: Int, vararg values: Short): CPointer<Short> = alloca_zero(size * 2).toCPointer<Short>().also { for (n in 0 until values.size) sh(it.ptr + n * 2, values[n]) }\n\n    @kotlin.jvm.JvmName("getterInt") operator fun CPointer<Int>.get(offset: Int): Int = lw(this.ptr + offset * 4)\n    @kotlin.jvm.JvmName("setterInt") operator fun CPointer<Int>.set(offset: Int, value: Int): Unit = sw(this.ptr + offset * 4, value)\n    @set:kotlin.jvm.JvmName("setter_Int_value") @get:kotlin.jvm.JvmName("getter_Int_value") var CPointer<Int>.value: Int get() = this[0]; set(value): Unit = run { this[0] = value }\n    @kotlin.jvm.JvmName("plusInt") fun CPointer<Int>.plus(offset: Int): CPointer<Int> = addPtr<Int>(offset, 4)\n    @kotlin.jvm.JvmName("minusInt") fun CPointer<Int>.minus(offset: Int): CPointer<Int> = addPtr<Int>(-offset, 4)\n    fun CPointer<Int>.minusPtrInt(other: CPointer<Int>): Int = (this.ptr - other.ptr) / 4\n    fun fixedArrayOfInt(size: Int, vararg values: Int): CPointer<Int> = alloca_zero(size * 4).toCPointer<Int>().also { for (n in 0 until values.size) sw(it.ptr + n * 4, values[n]) }\n\n    @kotlin.jvm.JvmName("getterLong") operator fun CPointer<Long>.get(offset: Int): Long = ld(this.ptr + offset * 8)\n    @kotlin.jvm.JvmName("setterLong") operator fun CPointer<Long>.set(offset: Int, value: Long): Unit = sd(this.ptr + offset * 8, value)\n    @set:kotlin.jvm.JvmName("setter_Long_value") @get:kotlin.jvm.JvmName("getter_Long_value") var CPointer<Long>.value: Long get() = this[0]; set(value): Unit = run { this[0] = value }\n    @kotlin.jvm.JvmName("plusLong") fun CPointer<Long>.plus(offset: Int): CPointer<Long> = addPtr<Long>(offset, 8)\n    @kotlin.jvm.JvmName("minusLong") fun CPointer<Long>.minus(offset: Int): CPointer<Long> = addPtr<Long>(-offset, 8)\n    fun CPointer<Long>.minusPtrLong(other: CPointer<Long>): Int = (this.ptr - other.ptr) / 8\n    fun fixedArrayOfLong(size: Int, vararg values: Long): CPointer<Long> = alloca_zero(size * 8).toCPointer<Long>().also { for (n in 0 until values.size) sd(it.ptr + n * 8, values[n]) }\n\n    operator fun CPointer<UByte>.get(offset: Int): UByte = lb(this.ptr + offset * 1).toUByte()\n    operator fun CPointer<UByte>.set(offset: Int, value: UByte): Unit = sb(this.ptr + offset * 1, (value).toByte())\n    var CPointer<UByte>.value: UByte get() = this[0]; set(value): Unit = run { this[0] = value }\n    @kotlin.jvm.JvmName("plusUByte") fun CPointer<UByte>.plus(offset: Int): CPointer<UByte> = addPtr<UByte>(offset, 1)\n    @kotlin.jvm.JvmName("minusUByte") fun CPointer<UByte>.minus(offset: Int): CPointer<UByte> = addPtr<UByte>(-offset, 1)\n    fun CPointer<UByte>.minusPtrUByte(other: CPointer<UByte>): Int = (this.ptr - other.ptr) / 1\n    fun fixedArrayOfUByte(size: Int, vararg values: UByte): CPointer<UByte> = alloca_zero(size * 1).toCPointer<UByte>().also { for (n in 0 until values.size) sb(it.ptr + n * 1, (values[n]).toByte()) }\n\n    operator fun CPointer<UShort>.get(offset: Int): UShort = lh(this.ptr + offset * 2).toUShort()\n    operator fun CPointer<UShort>.set(offset: Int, value: UShort): Unit = sh(this.ptr + offset * 2, (value).toShort())\n    var CPointer<UShort>.value: UShort get() = this[0]; set(value): Unit = run { this[0] = value }\n    @kotlin.jvm.JvmName("plusUShort") fun CPointer<UShort>.plus(offset: Int): CPointer<UShort> = addPtr<UShort>(offset, 2)\n    @kotlin.jvm.JvmName("minusUShort") fun CPointer<UShort>.minus(offset: Int): CPointer<UShort> = addPtr<UShort>(-offset, 2)\n    fun CPointer<UShort>.minusPtrUShort(other: CPointer<UShort>): Int = (this.ptr - other.ptr) / 2\n    fun fixedArrayOfUShort(size: Int, vararg values: UShort): CPointer<UShort> = alloca_zero(size * 2).toCPointer<UShort>().also { for (n in 0 until values.size) sh(it.ptr + n * 2, (values[n]).toShort()) }\n\n    operator fun CPointer<UInt>.get(offset: Int): UInt = lw(this.ptr + offset * 4).toUInt()\n    operator fun CPointer<UInt>.set(offset: Int, value: UInt): Unit = sw(this.ptr + offset * 4, (value).toInt())\n    var CPointer<UInt>.value: UInt get() = this[0]; set(value): Unit = run { this[0] = value }\n    @kotlin.jvm.JvmName("plusUInt") fun CPointer<UInt>.plus(offset: Int): CPointer<UInt> = addPtr<UInt>(offset, 4)\n    @kotlin.jvm.JvmName("minusUInt") fun CPointer<UInt>.minus(offset: Int): CPointer<UInt> = addPtr<UInt>(-offset, 4)\n    fun CPointer<UInt>.minusPtrUInt(other: CPointer<UInt>): Int = (this.ptr - other.ptr) / 4\n    fun fixedArrayOfUInt(size: Int, vararg values: UInt): CPointer<UInt> = alloca_zero(size * 4).toCPointer<UInt>().also { for (n in 0 until values.size) sw(it.ptr + n * 4, (values[n]).toInt()) }\n\n    operator fun CPointer<ULong>.get(offset: Int): ULong = ld(this.ptr + offset * 8).toULong()\n    operator fun CPointer<ULong>.set(offset: Int, value: ULong): Unit = sd(this.ptr + offset * 8, (value).toLong())\n    var CPointer<ULong>.value: ULong get() = this[0]; set(value): Unit = run { this[0] = value }\n    @kotlin.jvm.JvmName("plusULong") fun CPointer<ULong>.plus(offset: Int): CPointer<ULong> = addPtr<ULong>(offset, 8)\n    @kotlin.jvm.JvmName("minusULong") fun CPointer<ULong>.minus(offset: Int): CPointer<ULong> = addPtr<ULong>(-offset, 8)\n    fun CPointer<ULong>.minusPtrULong(other: CPointer<ULong>): Int = (this.ptr - other.ptr) / 8\n    fun fixedArrayOfULong(size: Int, vararg values: ULong): CPointer<ULong> = alloca_zero(size * 8).toCPointer<ULong>().also { for (n in 0 until values.size) sd(it.ptr + n * 8, (values[n]).toLong()) }\n\n    @kotlin.jvm.JvmName("getterFloat") operator fun CPointer<Float>.get(offset: Int): Float = Float.fromBits(lw(this.ptr + offset * 4))\n    @kotlin.jvm.JvmName("setterFloat") operator fun CPointer<Float>.set(offset: Int, value: Float): Unit = sw(this.ptr + offset * 4, (value).toBits())\n    @set:kotlin.jvm.JvmName("setter_Float_value") @get:kotlin.jvm.JvmName("getter_Float_value") var CPointer<Float>.value: Float get() = this[0]; set(value): Unit = run { this[0] = value }\n    @kotlin.jvm.JvmName("plusFloat") fun CPointer<Float>.plus(offset: Int): CPointer<Float> = addPtr<Float>(offset, 4)\n    @kotlin.jvm.JvmName("minusFloat") fun CPointer<Float>.minus(offset: Int): CPointer<Float> = addPtr<Float>(-offset, 4)\n    fun CPointer<Float>.minusPtrFloat(other: CPointer<Float>): Int = (this.ptr - other.ptr) / 4\n    fun fixedArrayOfFloat(size: Int, vararg values: Float): CPointer<Float> = alloca_zero(size * 4).toCPointer<Float>().also { for (n in 0 until values.size) sw(it.ptr + n * 4, (values[n]).toBits()) }\n\n    @kotlin.jvm.JvmName("getterDouble") operator fun CPointer<Double>.get(offset: Int): Double = Double.fromBits(ld(this.ptr + offset * 4))\n    @kotlin.jvm.JvmName("setterDouble") operator fun CPointer<Double>.set(offset: Int, value: Double): Unit = sd(this.ptr + offset * 4, (value).toBits())\n    @set:kotlin.jvm.JvmName("setter_Double_value") @get:kotlin.jvm.JvmName("getter_Double_value") var CPointer<Double>.value: Double get() = this[0]; set(value): Unit = run { this[0] = value }\n    @kotlin.jvm.JvmName("plusDouble") fun CPointer<Double>.plus(offset: Int): CPointer<Double> = addPtr<Double>(offset, 4)\n    @kotlin.jvm.JvmName("minusDouble") fun CPointer<Double>.minus(offset: Int): CPointer<Double> = addPtr<Double>(-offset, 4)\n    fun CPointer<Double>.minusPtrDouble(other: CPointer<Double>): Int = (this.ptr - other.ptr) / 4\n    fun fixedArrayOfDouble(size: Int, vararg values: Double): CPointer<Double> = alloca_zero(size * 4).toCPointer<Double>().also { for (n in 0 until values.size) sd(it.ptr + n * 4, (values[n]).toBits()) }\n\n\n    val FUNCTION_ADDRS: LinkedHashMap<kotlin.reflect.KFunction<*>, Int> = LinkedHashMap<kotlin.reflect.KFunction<*>, Int>()\n\n    operator fun <TR> CFunction0<TR>.invoke(): TR = (FUNCTIONS[this.ptr] as (() -> TR)).invoke()\n    operator fun <T0, TR> CFunction1<T0, TR>.invoke(v0: T0): TR = (FUNCTIONS[this.ptr] as ((T0) -> TR)).invoke(v0)\n    operator fun <T0, T1, TR> CFunction2<T0, T1, TR>.invoke(v0: T0, v1: T1): TR = (FUNCTIONS[this.ptr] as ((T0, T1) -> TR)).invoke(v0, v1)\n    operator fun <T0, T1, T2, TR> CFunction3<T0, T1, T2, TR>.invoke(v0: T0, v1: T1, v2: T2): TR = (FUNCTIONS[this.ptr] as ((T0, T1, T2) -> TR)).invoke(v0, v1, v2)\n    operator fun <T0, T1, T2, T3, TR> CFunction4<T0, T1, T2, T3, TR>.invoke(v0: T0, v1: T1, v2: T2, v3: T3): TR = (FUNCTIONS[this.ptr] as ((T0, T1, T2, T3) -> TR)).invoke(v0, v1, v2, v3)\n    operator fun <T0, T1, T2, T3, T4, TR> CFunction5<T0, T1, T2, T3, T4, TR>.invoke(v0: T0, v1: T1, v2: T2, v3: T3, v4: T4): TR = (FUNCTIONS[this.ptr] as ((T0, T1, T2, T3, T4) -> TR)).invoke(v0, v1, v2, v3, v4)\n    operator fun <T0, T1, T2, T3, T4, T5, TR> CFunction6<T0, T1, T2, T3, T4, T5, TR>.invoke(v0: T0, v1: T1, v2: T2, v3: T3, v4: T4, v5: T5): TR = (FUNCTIONS[this.ptr] as ((T0, T1, T2, T3, T4, T5) -> TR)).invoke(v0, v1, v2, v3, v4, v5)\n    operator fun <T0, T1, T2, T3, T4, T5, T6, TR> CFunction7<T0, T1, T2, T3, T4, T5, T6, TR>.invoke(v0: T0, v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6): TR = (FUNCTIONS[this.ptr] as ((T0, T1, T2, T3, T4, T5, T6) -> TR)).invoke(v0, v1, v2, v3, v4, v5, v6)\n\n    @get:kotlin.jvm.JvmName("cfunc0")\n    val <TR> kotlin.reflect.KFunction0<TR>.cfunc get() = CFunction0<TR>(FUNCTION_ADDRS.getOrPut(this) { FUNCTIONS.add(this); FUNCTIONS.size - 1 })\n    @get:kotlin.jvm.JvmName("cfunc1")\n    val <T0, TR> kotlin.reflect.KFunction1<T0, TR>.cfunc get() = CFunction1<T0, TR>(FUNCTION_ADDRS.getOrPut(this) { FUNCTIONS.add(this); FUNCTIONS.size - 1 })\n    @get:kotlin.jvm.JvmName("cfunc2")\n    val <T0, T1, TR> kotlin.reflect.KFunction2<T0, T1, TR>.cfunc get() = CFunction2<T0, T1, TR>(FUNCTION_ADDRS.getOrPut(this) { FUNCTIONS.add(this); FUNCTIONS.size - 1 })\n    @get:kotlin.jvm.JvmName("cfunc3")\n    val <T0, T1, T2, TR> kotlin.reflect.KFunction3<T0, T1, T2, TR>.cfunc get() = CFunction3<T0, T1, T2, TR>(FUNCTION_ADDRS.getOrPut(this) { FUNCTIONS.add(this); FUNCTIONS.size - 1 })\n    @get:kotlin.jvm.JvmName("cfunc4")\n    val <T0, T1, T2, T3, TR> kotlin.reflect.KFunction4<T0, T1, T2, T3, TR>.cfunc get() = CFunction4<T0, T1, T2, T3, TR>(FUNCTION_ADDRS.getOrPut(this) { FUNCTIONS.add(this); FUNCTIONS.size - 1 })\n    @get:kotlin.jvm.JvmName("cfunc5")\n    val <T0, T1, T2, T3, T4, TR> kotlin.reflect.KFunction5<T0, T1, T2, T3, T4, TR>.cfunc get() = CFunction5<T0, T1, T2, T3, T4, TR>(FUNCTION_ADDRS.getOrPut(this) { FUNCTIONS.add(this); FUNCTIONS.size - 1 })\n    @get:kotlin.jvm.JvmName("cfunc6")\n    val <T0, T1, T2, T3, T4, T5, TR> kotlin.reflect.KFunction6<T0, T1, T2, T3, T4, T5, TR>.cfunc get() = CFunction6<T0, T1, T2, T3, T4, T5, TR>(FUNCTION_ADDRS.getOrPut(this) { FUNCTIONS.add(this); FUNCTIONS.size - 1 })\n    @get:kotlin.jvm.JvmName("cfunc7")\n    val <T0, T1, T2, T3, T4, T5, T6, TR> kotlin.reflect.KFunction7<T0, T1, T2, T3, T4, T5, T6, TR>.cfunc get() = CFunction7<T0, T1, T2, T3, T4, T5, T6, TR>(FUNCTION_ADDRS.getOrPut(this) { FUNCTIONS.add(this); FUNCTIONS.size - 1 })\n}\n';
  KotlinRuntimeJvm = '@Suppress("unused")\nopen class RuntimeJvm(REQUESTED_HEAP_SIZE: Int = 0, REQUESTED_STACK_PTR: Int = 0, __syscalls: RuntimeSyscalls = JvmRuntimeSyscalls) : AbstractRuntime(REQUESTED_HEAP_SIZE, REQUESTED_STACK_PTR, __syscalls = __syscalls) {\n    val HEAP: java.nio.ByteBuffer = java.nio.ByteBuffer.allocateDirect(HEAP_SIZE).order(java.nio.ByteOrder.LITTLE_ENDIAN)\n\n    override fun lb(ptr: Int) = HEAP[ptr]\n    override fun sb(ptr: Int, value: Byte): Unit = run { HEAP.put(ptr, value) }\n\n    override fun lh(ptr: Int): Short = HEAP.getShort(ptr)\n    override fun sh(ptr: Int, value: Short): Unit = run { HEAP.putShort(ptr, value) }\n\n    override fun lw(ptr: Int): Int = HEAP.getInt(ptr)\n    override fun sw(ptr: Int, value: Int): Unit = run { HEAP.putInt(ptr, value) }\n\n    override fun ld(ptr: Int): Long = HEAP.getLong(ptr)\n    override fun sd(ptr: Int, value: Long): Unit = run { HEAP.putLong(ptr, value) }\n\n    // @TODO: This shouldn\'t be necessary\n    override fun _formatF(value: Number): String {\n        return "%f".format(value.toFloat())\n    }\n}\n\nobject JvmRuntimeSyscalls : RuntimeSyscalls {\n    val fileHandlers = LinkedHashMap<Int, java.io.RandomAccessFile>()\n    var lastFileHandle = 1\n\n    override fun AbstractRuntime.fopen(file: CPointer<Byte>, mode: CPointer<Byte>): CPointer<CPointer<Unit>> {\n        return try {\n            val modep = mode.readStringz().replace("b", "")\n            val modeAppend = modep.contains("a")\n            val modeWrite = modep.contains("w") || modeAppend\n            val raf = java.io.RandomAccessFile(file.readStringz(), when {\n                modeWrite -> "rw"\n                else -> "r"\n            })\n            if (modeAppend) {\n                raf.seek(raf.length())\n            }\n            val fileHandle = lastFileHandle++\n            fileHandlers[fileHandle] = raf\n            CPointer<CPointer<Unit>>(fileHandle)\n        } catch (e: java.io.FileNotFoundException) {\n            CPointer<CPointer<Unit>>(0)\n        }\n    }\n\n    override fun AbstractRuntime.fread(ptr: CPointer<Unit>, size: Int, nmemb: Int, stream: CPointer<CPointer<Unit>>): Int {\n        val raf = fileHandlers[stream.ptr] ?: return -1\n        val available = raf.length() - raf.filePointer\n        val temp = ByteArray(prevAligned(kotlin.math.min(available.toLong(), (size * nmemb).toLong()).toInt(), size))\n        val readCount = raf.read(temp)\n        memWrite(ptr, temp, 0, readCount)\n        return readCount / size\n    }\n\n    override fun AbstractRuntime.fwrite(ptr: CPointer<Unit>, size: Int, nmemb: Int, stream: CPointer<CPointer<Unit>>): Int {\n        val raf = fileHandlers[stream.ptr] ?: return -1\n        val temp = ByteArray(size * nmemb)\n        memRead(ptr, temp)\n        raf.write(temp)\n        return nmemb\n    }\n\n    override fun AbstractRuntime.fflush(stream: CPointer<CPointer<Unit>>): Int {\n        val raf = fileHandlers[stream.ptr] ?: return -1\n        return 0\n    }\n    override fun AbstractRuntime.ftell(stream: CPointer<CPointer<Unit>>): Long {\n        val raf = fileHandlers[stream.ptr] ?: return 0L\n        return raf.filePointer\n    }\n\n    override fun AbstractRuntime.fsetpos(stream: CPointer<CPointer<Unit>>, ptrHolder: CPointer<Long>): Int {\n        val raf = fileHandlers[stream.ptr] ?: return -1\n        raf.seek(ptrHolder[0])\n        return 0\n    }\n\n    override fun AbstractRuntime.fgetpos(stream: CPointer<CPointer<Unit>>, ptrHolder: CPointer<Long>): Int {\n        val raf = fileHandlers[stream.ptr] ?: return -1\n        ptrHolder[0] = raf.filePointer\n        return 0\n    }\n\n    override fun AbstractRuntime.fseek(stream: CPointer<CPointer<Unit>>, offset: Long, whence: Int): Int {\n        val raf = fileHandlers[stream.ptr] ?: return -1\n        when (whence) {\n            0 -> raf.seek(offset)\n            1 -> raf.seek(raf.filePointer + offset)\n            2 -> raf.seek(raf.length() + offset)\n        }\n        return 0\n    }\n\n    override fun AbstractRuntime.fclose(stream: CPointer<CPointer<Unit>>) {\n        val raf = fileHandlers.remove(stream.ptr)\n        raf?.close()\n    }\n}\n\n';
  var $receiver = new CIncludes();
  $receiver.FILE_w74nik$('alloca.h', '#include <sys/_types/size_t.h>\nextern void *alloca(size_t size);\n');
  $receiver.FILE_w74nik$('assert.h', '#define assert(ignore)((void) 0)\n');
  $receiver.FILE_w74nik$('ctype.h', 'int isalnum(int c), isalpha(int c), isblank(int c), iscntrl(int c), isdigit(int c), isgraph(int c), islower(int c);\nint isprint(int c), ispunct(int c), isspace(int c), isupper(int c), isxdigit(int c), tolower(int c), toupper(int c);\n', void 0, "int isupper(int c) { return (c >= 'A') && (c <= 'Z'); }\nint islower(int c) { return (c >= 'a') && (c <= 'z'); }\nint isalpha(int c) { return islower(c) || isupper(c); }\nint isdigit(int c) { return (c >= '0' && c <= '9'); }\nint isxdigit(int c) { return isdigit(c) || (c >= 'a' && c <= 'f') || (c >= 'A' && c <= 'F'); }\nint isalnum(int c) { return isalpha(c) || isdigit(c); }\nint isblank(int c) { return (c == 0x09) || (c == 0x20); }\nint iscntrl(int c) { return ((c >= 0x00) && (c <= 0x1F)) || (c == 0x7F); }\nint isgraph(int c) { return (c >= 0x21) || (c <= 0x7E); }\nint isprint(int c) { return c >= 0x20 && c <= 0x7E; }\nint isspace(int c) { return c == ' ' || c == '\\t'; }\nint ispunct(int c) { return (c >= 0x09 && c <= 0x0D) || c == ' '; }\nint tolower(int c) { return isupper(c) ? (c - 'A' + 'a') : c; }\nint toupper(int c) { return islower(c) ? (c - 'a' + 'A') : c; }\n");
  $receiver.FILE_w74nik$('intrin.h', '');
  $receiver.FILE_w74nik$('inttypes.h', '');
  $receiver.FILE_w74nik$('limits.h', '');
  $receiver.FILE_w74nik$('math.h', '');
  $receiver.FILE_w74nik$('memory.h', '#include <string.h>\n');
  $receiver.FILE_w74nik$('setjmp.h', 'typedef int jmp_buf[64];\n\nextern int setjmp(jmp_buf);\nextern void longjmp(jmp_buf, int) __dead2;\n');
  $receiver.FILE_w74nik$('stdarg.h', '');
  $receiver.FILE_w74nik$('stddef.h', '');
  $receiver.FILE_w74nik$('stdint.h', 'typedef unsigned char uint8_t;\ntypedef unsigned short uint16_t;\ntypedef unsigned int uint32_t;\ntypedef unsigned long int uint64_t;\ntypedef char int8_t;\ntypedef short int16_t;\ntypedef int int32_t;\ntypedef long int int64_t;\n');
  $receiver.FILE_w74nik$('stdio.h', '#include <sys/_types/size_t.h>\n#include <sys/_types/null.h>\ntypedef void *FILE;\ntypedef long int fpos_t;\n\n#define BUFSIZ 8192\n#define EOF (-1)\n#define SEEK_SET 0\n#define SEEK_CUR 1\n#define SEEK_END 2\n\nFILE *fopen(const char * restrict filename, const char * restrict mode);\nint fclose(FILE *stream);\nsize_t fread(void * restrict ptr, size_t size, size_t nmemb, FILE * restrict stream);\nsize_t fwrite(const void * restrict ptr, size_t size, size_t nmemb, FILE * restrict stream);\n\nint feof(FILE *stream);\nint fflush(FILE *stream);\n\nint fgetpos(FILE * restrict stream, fpos_t * restrict pos);\nint fsetpos(FILE *stream, const fpos_t *pos);\nint fseek(FILE *stream, fpos_t offset, int whence);\n\nfpos_t ftell(FILE *stream);\n\nvoid rewind(FILE *stream);\n\nint putchar(int c);\nvoid printf(char *fmt, ...);\nvoid sprintf(char *out, char *fmt, ...);\n\nvoid clearerr(FILE *stream);\n\nextern FILE *__stdinp;\nextern FILE *__stdoutp;\nextern FILE *__stderrp;\n\n#define stdin   __stdinp\n#define stdout  __stdoutp\n#define stderr  __stderrp\n');
  $receiver.FILE_w74nik$('stdlib.h', '#include <sys/_types/size_t.h>\n#include <sys/_types/null.h>\n\nvoid *malloc(size_t size);\nvoid *realloc(void *ptr, size_t size);\nvoid free(void *ptr);\n\nvoid exit(int status);\n');
  $receiver.FILE_w74nik$('string.h', '#include <sys/_types/size_t.h>\n#include <sys/_types/null.h>\nsize_t strlen(const char *str);\nvoid* memset(void *s, int c, size_t n);\nvoid* memcpy(void *destination, const void *source, size_t num);\nvoid* memmove(void *destination, const void *source, size_t num);\nint memcmp(const void * ptr1, const void * ptr2, size_t num);\n', void 0, 'size_t strlen(const char *str) {\n    size_t out = 0;\n    while (*str++ != 0) out++;\n    return out;\n}\n\nint memcmp(const void * ptr1, const void * ptr2, size_t num) {\n    char *a = (char *)ptr1, *b = (char *)ptr2;\n    for (int n = 0; n < num; n++) {\n        int res = (int)a[n] - (int)b[n];\n        if (res < 0) return -1;\n        if (res > 0) return +1;\n    }\n    return 0;\n}\n');
  $receiver.FILE_w74nik$('sys/_types/null.h', '#define NULL ((void *)(0))\n');
  $receiver.FILE_w74nik$('sys/_types/size_t.h', 'typedef int size_t;\n');
  $receiver.FILE_w74nik$('time.h', '#include <sys/_types/null.h>\n#include <sys/_types/size_t.h>\n\ntypedef long clock_t;\n#define CLOCKS_PER_SEC ((clock_t)1000)\n\nclock_t clock (void);\n');
  CStdIncludes = toMap($receiver.map);
  KTCC_VERSION = '0.7.0';
  POINTER_SIZE = 4;
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
  allSymbols = plus_0(allOperators, setOf(['->', '(', ')', '[', ']', '{', '}', ';', ',', get_DOT(), '...', '#', '##', '\\']));
  sym3 = lazy(sym3$lambda);
  sym2 = lazy(sym2$lambda);
  sym1 = lazy(sym1$lambda);
  files = LinkedHashMap_init();
  completionNode = lazy(completionNode$lambda);
  debugNode = lazy(debugNode$lambda);
  autocompileNode = lazy(autocompileNode$lambda);
  targetNode = lazy(targetNode$lambda);
  includeRuntimeNode = lazy(includeRuntimeNode$lambda);
  main([]);
  Kotlin.defineModule('ktcc', _);
  return _;
}));

//# sourceMappingURL=ktcc.js.map
