"use strict";
Object.defineProperties(module.exports, {
  DynamicProtoChangeDetector: {get: function() {
      return DynamicProtoChangeDetector;
    }},
  JitProtoChangeDetector: {get: function() {
      return JitProtoChangeDetector;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__parser_47_ast__,
    $__interfaces__,
    $__change_95_detection_95_util__,
    $__dynamic_95_change_95_detector__,
    $__change_95_detection_95_jit_95_generator__,
    $__pipes_47_pipe_95_registry__,
    $__binding_95_record__,
    $__coalesce__,
    $__proto_95_record__;
var $__0 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isPresent = $__0.isPresent,
    isBlank = $__0.isBlank,
    BaseException = $__0.BaseException,
    Type = $__0.Type,
    isString = $__0.isString;
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__1.List,
    ListWrapper = $__1.ListWrapper,
    MapWrapper = $__1.MapWrapper,
    StringMapWrapper = $__1.StringMapWrapper;
var $__2 = ($__parser_47_ast__ = require("./parser/ast"), $__parser_47_ast__ && $__parser_47_ast__.__esModule && $__parser_47_ast__ || {default: $__parser_47_ast__}),
    AccessMember = $__2.AccessMember,
    Assignment = $__2.Assignment,
    AST = $__2.AST,
    ASTWithSource = $__2.ASTWithSource,
    AstVisitor = $__2.AstVisitor,
    Binary = $__2.Binary,
    Chain = $__2.Chain,
    Conditional = $__2.Conditional,
    Pipe = $__2.Pipe,
    FunctionCall = $__2.FunctionCall,
    ImplicitReceiver = $__2.ImplicitReceiver,
    Interpolation = $__2.Interpolation,
    KeyedAccess = $__2.KeyedAccess,
    LiteralArray = $__2.LiteralArray,
    LiteralMap = $__2.LiteralMap,
    LiteralPrimitive = $__2.LiteralPrimitive,
    MethodCall = $__2.MethodCall,
    PrefixNot = $__2.PrefixNot;
var $__3 = ($__interfaces__ = require("./interfaces"), $__interfaces__ && $__interfaces__.__esModule && $__interfaces__ || {default: $__interfaces__}),
    ChangeDispatcher = $__3.ChangeDispatcher,
    ChangeDetector = $__3.ChangeDetector,
    ProtoChangeDetector = $__3.ProtoChangeDetector;
var ChangeDetectionUtil = ($__change_95_detection_95_util__ = require("./change_detection_util"), $__change_95_detection_95_util__ && $__change_95_detection_95_util__.__esModule && $__change_95_detection_95_util__ || {default: $__change_95_detection_95_util__}).ChangeDetectionUtil;
var DynamicChangeDetector = ($__dynamic_95_change_95_detector__ = require("./dynamic_change_detector"), $__dynamic_95_change_95_detector__ && $__dynamic_95_change_95_detector__.__esModule && $__dynamic_95_change_95_detector__ || {default: $__dynamic_95_change_95_detector__}).DynamicChangeDetector;
var ChangeDetectorJITGenerator = ($__change_95_detection_95_jit_95_generator__ = require("./change_detection_jit_generator"), $__change_95_detection_95_jit_95_generator__ && $__change_95_detection_95_jit_95_generator__.__esModule && $__change_95_detection_95_jit_95_generator__ || {default: $__change_95_detection_95_jit_95_generator__}).ChangeDetectorJITGenerator;
var PipeRegistry = ($__pipes_47_pipe_95_registry__ = require("./pipes/pipe_registry"), $__pipes_47_pipe_95_registry__ && $__pipes_47_pipe_95_registry__.__esModule && $__pipes_47_pipe_95_registry__ || {default: $__pipes_47_pipe_95_registry__}).PipeRegistry;
var BindingRecord = ($__binding_95_record__ = require("./binding_record"), $__binding_95_record__ && $__binding_95_record__.__esModule && $__binding_95_record__ || {default: $__binding_95_record__}).BindingRecord;
var coalesce = ($__coalesce__ = require("./coalesce"), $__coalesce__ && $__coalesce__.__esModule && $__coalesce__ || {default: $__coalesce__}).coalesce;
var $__10 = ($__proto_95_record__ = require("./proto_record"), $__proto_95_record__ && $__proto_95_record__.__esModule && $__proto_95_record__ || {default: $__proto_95_record__}),
    ProtoRecord = $__10.ProtoRecord,
    RECORD_TYPE_SELF = $__10.RECORD_TYPE_SELF,
    RECORD_TYPE_PROPERTY = $__10.RECORD_TYPE_PROPERTY,
    RECORD_TYPE_LOCAL = $__10.RECORD_TYPE_LOCAL,
    RECORD_TYPE_INVOKE_METHOD = $__10.RECORD_TYPE_INVOKE_METHOD,
    RECORD_TYPE_CONST = $__10.RECORD_TYPE_CONST,
    RECORD_TYPE_INVOKE_CLOSURE = $__10.RECORD_TYPE_INVOKE_CLOSURE,
    RECORD_TYPE_PRIMITIVE_OP = $__10.RECORD_TYPE_PRIMITIVE_OP,
    RECORD_TYPE_KEYED_ACCESS = $__10.RECORD_TYPE_KEYED_ACCESS,
    RECORD_TYPE_PIPE = $__10.RECORD_TYPE_PIPE,
    RECORD_TYPE_BINDING_PIPE = $__10.RECORD_TYPE_BINDING_PIPE,
    RECORD_TYPE_INTERPOLATE = $__10.RECORD_TYPE_INTERPOLATE;
var DynamicProtoChangeDetector = function DynamicProtoChangeDetector(pipeRegistry, changeControlStrategy) {
  $traceurRuntime.superConstructor($DynamicProtoChangeDetector).call(this);
  this._pipeRegistry = pipeRegistry;
  this._changeControlStrategy = changeControlStrategy;
};
var $DynamicProtoChangeDetector = DynamicProtoChangeDetector;
($traceurRuntime.createClass)(DynamicProtoChangeDetector, {
  instantiate: function(dispatcher, bindingRecords, variableBindings, directiveRecords) {
    this._createRecordsIfNecessary(bindingRecords, variableBindings);
    return new DynamicChangeDetector(this._changeControlStrategy, dispatcher, this._pipeRegistry, this._records, directiveRecords);
  },
  _createRecordsIfNecessary: function(bindingRecords, variableBindings) {
    if (isBlank(this._records)) {
      var recordBuilder = new ProtoRecordBuilder();
      ListWrapper.forEach(bindingRecords, (function(b) {
        recordBuilder.addAst(b, variableBindings);
      }));
      this._records = coalesce(recordBuilder.records);
    }
  }
}, {}, ProtoChangeDetector);
Object.defineProperty(DynamicProtoChangeDetector, "parameters", {get: function() {
    return [[PipeRegistry], [$traceurRuntime.type.string]];
  }});
Object.defineProperty(DynamicProtoChangeDetector.prototype.instantiate, "parameters", {get: function() {
    return [[$traceurRuntime.type.any], [List], [List], [List]];
  }});
Object.defineProperty(DynamicProtoChangeDetector.prototype._createRecordsIfNecessary, "parameters", {get: function() {
    return [[List], [List]];
  }});
var _jitProtoChangeDetectorClassCounter = 0;
var JitProtoChangeDetector = function JitProtoChangeDetector(pipeRegistry, changeControlStrategy) {
  $traceurRuntime.superConstructor($JitProtoChangeDetector).call(this);
  this._pipeRegistry = pipeRegistry;
  this._factory = null;
  this._changeControlStrategy = changeControlStrategy;
};
var $JitProtoChangeDetector = JitProtoChangeDetector;
($traceurRuntime.createClass)(JitProtoChangeDetector, {
  instantiate: function(dispatcher, bindingRecords, variableBindings, directiveRecords) {
    this._createFactoryIfNecessary(bindingRecords, variableBindings, directiveRecords);
    return this._factory(dispatcher, this._pipeRegistry);
  },
  _createFactoryIfNecessary: function(bindingRecords, variableBindings, directiveRecords) {
    if (isBlank(this._factory)) {
      var recordBuilder = new ProtoRecordBuilder();
      ListWrapper.forEach(bindingRecords, (function(b) {
        recordBuilder.addAst(b, variableBindings);
      }));
      var c = _jitProtoChangeDetectorClassCounter++;
      var records = coalesce(recordBuilder.records);
      var typeName = ("ChangeDetector" + c);
      this._factory = new ChangeDetectorJITGenerator(typeName, this._changeControlStrategy, records, directiveRecords).generate();
    }
  }
}, {}, ProtoChangeDetector);
Object.defineProperty(JitProtoChangeDetector, "parameters", {get: function() {
    return [[], [$traceurRuntime.type.string]];
  }});
Object.defineProperty(JitProtoChangeDetector.prototype.instantiate, "parameters", {get: function() {
    return [[$traceurRuntime.type.any], [List], [List], [List]];
  }});
Object.defineProperty(JitProtoChangeDetector.prototype._createFactoryIfNecessary, "parameters", {get: function() {
    return [[List], [List], [List]];
  }});
var ProtoRecordBuilder = function ProtoRecordBuilder() {
  this.records = [];
};
($traceurRuntime.createClass)(ProtoRecordBuilder, {addAst: function(b) {
    var variableBindings = arguments[1] !== (void 0) ? arguments[1] : null;
    var last = ListWrapper.last(this.records);
    if (isPresent(last) && last.bindingRecord.directiveRecord == b.directiveRecord) {
      last.lastInDirective = false;
    }
    var pr = _ConvertAstIntoProtoRecords.convert(b, this.records.length, variableBindings);
    if (!ListWrapper.isEmpty(pr)) {
      var last = ListWrapper.last(pr);
      last.lastInBinding = true;
      last.lastInDirective = true;
      this.records = ListWrapper.concat(this.records, pr);
    }
  }}, {});
Object.defineProperty(ProtoRecordBuilder.prototype.addAst, "parameters", {get: function() {
    return [[BindingRecord], [List]];
  }});
var _ConvertAstIntoProtoRecords = function _ConvertAstIntoProtoRecords(bindingRecord, contextIndex, expressionAsString, variableBindings) {
  this.protoRecords = [];
  this.bindingRecord = bindingRecord;
  this.contextIndex = contextIndex;
  this.expressionAsString = expressionAsString;
  this.variableBindings = variableBindings;
};
var $_ConvertAstIntoProtoRecords = _ConvertAstIntoProtoRecords;
($traceurRuntime.createClass)(_ConvertAstIntoProtoRecords, {
  visitImplicitReceiver: function(ast) {
    return 0;
  },
  visitInterpolation: function(ast) {
    var args = this._visitAll(ast.expressions);
    return this._addRecord(RECORD_TYPE_INTERPOLATE, "interpolate", _interpolationFn(ast.strings), args, ast.strings, 0);
  },
  visitLiteralPrimitive: function(ast) {
    return this._addRecord(RECORD_TYPE_CONST, "literal", ast.value, [], null, 0);
  },
  visitAccessMember: function(ast) {
    var receiver = ast.receiver.visit(this);
    if (isPresent(this.variableBindings) && ListWrapper.contains(this.variableBindings, ast.name)) {
      return this._addRecord(RECORD_TYPE_LOCAL, ast.name, ast.name, [], null, receiver);
    } else {
      return this._addRecord(RECORD_TYPE_PROPERTY, ast.name, ast.getter, [], null, receiver);
    }
  },
  visitMethodCall: function(ast) {
    ;
    var receiver = ast.receiver.visit(this);
    var args = this._visitAll(ast.args);
    if (isPresent(this.variableBindings) && ListWrapper.contains(this.variableBindings, ast.name)) {
      var target = this._addRecord(RECORD_TYPE_LOCAL, ast.name, ast.name, [], null, receiver);
      return this._addRecord(RECORD_TYPE_INVOKE_CLOSURE, "closure", null, args, null, target);
    } else {
      return this._addRecord(RECORD_TYPE_INVOKE_METHOD, ast.name, ast.fn, args, null, receiver);
    }
  },
  visitFunctionCall: function(ast) {
    var target = ast.target.visit(this);
    var args = this._visitAll(ast.args);
    return this._addRecord(RECORD_TYPE_INVOKE_CLOSURE, "closure", null, args, null, target);
  },
  visitLiteralArray: function(ast) {
    var primitiveName = ("arrayFn" + ast.expressions.length);
    return this._addRecord(RECORD_TYPE_PRIMITIVE_OP, primitiveName, _arrayFn(ast.expressions.length), this._visitAll(ast.expressions), null, 0);
  },
  visitLiteralMap: function(ast) {
    return this._addRecord(RECORD_TYPE_PRIMITIVE_OP, _mapPrimitiveName(ast.keys), ChangeDetectionUtil.mapFn(ast.keys), this._visitAll(ast.values), null, 0);
  },
  visitBinary: function(ast) {
    var left = ast.left.visit(this);
    var right = ast.right.visit(this);
    return this._addRecord(RECORD_TYPE_PRIMITIVE_OP, _operationToPrimitiveName(ast.operation), _operationToFunction(ast.operation), [left, right], null, 0);
  },
  visitPrefixNot: function(ast) {
    var exp = ast.expression.visit(this);
    return this._addRecord(RECORD_TYPE_PRIMITIVE_OP, "operation_negate", ChangeDetectionUtil.operation_negate, [exp], null, 0);
  },
  visitConditional: function(ast) {
    var c = ast.condition.visit(this);
    var t = ast.trueExp.visit(this);
    var f = ast.falseExp.visit(this);
    return this._addRecord(RECORD_TYPE_PRIMITIVE_OP, "cond", ChangeDetectionUtil.cond, [c, t, f], null, 0);
  },
  visitPipe: function(ast) {
    var value = ast.exp.visit(this);
    var type = ast.inBinding ? RECORD_TYPE_BINDING_PIPE : RECORD_TYPE_PIPE;
    return this._addRecord(type, ast.name, ast.name, [], null, value);
  },
  visitKeyedAccess: function(ast) {
    var obj = ast.obj.visit(this);
    var key = ast.key.visit(this);
    return this._addRecord(RECORD_TYPE_KEYED_ACCESS, "keyedAccess", ChangeDetectionUtil.keyedAccess, [key], null, obj);
  },
  _visitAll: function(asts) {
    var res = ListWrapper.createFixedSize(asts.length);
    for (var i = 0; i < asts.length; ++i) {
      res[i] = asts[i].visit(this);
    }
    return res;
  },
  _addRecord: function(type, name, funcOrValue, args, fixedArgs, context) {
    var selfIndex = ++this.contextIndex;
    ListWrapper.push(this.protoRecords, new ProtoRecord(type, name, funcOrValue, args, fixedArgs, context, selfIndex, this.bindingRecord, this.expressionAsString, false, false));
    return selfIndex;
  }
}, {convert: function(b, contextIndex, variableBindings) {
    var c = new $_ConvertAstIntoProtoRecords(b, contextIndex, b.ast.toString(), variableBindings);
    b.ast.visit(c);
    return c.protoRecords;
  }});
Object.defineProperty(_ConvertAstIntoProtoRecords, "parameters", {get: function() {
    return [[BindingRecord], [$traceurRuntime.type.number], [$traceurRuntime.type.string], [List]];
  }});
Object.defineProperty(_ConvertAstIntoProtoRecords.convert, "parameters", {get: function() {
    return [[BindingRecord], [$traceurRuntime.type.number], [List]];
  }});
Object.defineProperty(_ConvertAstIntoProtoRecords.prototype.visitImplicitReceiver, "parameters", {get: function() {
    return [[ImplicitReceiver]];
  }});
Object.defineProperty(_ConvertAstIntoProtoRecords.prototype.visitInterpolation, "parameters", {get: function() {
    return [[Interpolation]];
  }});
Object.defineProperty(_ConvertAstIntoProtoRecords.prototype.visitLiteralPrimitive, "parameters", {get: function() {
    return [[LiteralPrimitive]];
  }});
Object.defineProperty(_ConvertAstIntoProtoRecords.prototype.visitAccessMember, "parameters", {get: function() {
    return [[AccessMember]];
  }});
Object.defineProperty(_ConvertAstIntoProtoRecords.prototype.visitMethodCall, "parameters", {get: function() {
    return [[MethodCall]];
  }});
Object.defineProperty(_ConvertAstIntoProtoRecords.prototype.visitFunctionCall, "parameters", {get: function() {
    return [[FunctionCall]];
  }});
Object.defineProperty(_ConvertAstIntoProtoRecords.prototype.visitLiteralArray, "parameters", {get: function() {
    return [[LiteralArray]];
  }});
Object.defineProperty(_ConvertAstIntoProtoRecords.prototype.visitLiteralMap, "parameters", {get: function() {
    return [[LiteralMap]];
  }});
Object.defineProperty(_ConvertAstIntoProtoRecords.prototype.visitBinary, "parameters", {get: function() {
    return [[Binary]];
  }});
Object.defineProperty(_ConvertAstIntoProtoRecords.prototype.visitPrefixNot, "parameters", {get: function() {
    return [[PrefixNot]];
  }});
Object.defineProperty(_ConvertAstIntoProtoRecords.prototype.visitConditional, "parameters", {get: function() {
    return [[Conditional]];
  }});
Object.defineProperty(_ConvertAstIntoProtoRecords.prototype.visitPipe, "parameters", {get: function() {
    return [[Pipe]];
  }});
Object.defineProperty(_ConvertAstIntoProtoRecords.prototype.visitKeyedAccess, "parameters", {get: function() {
    return [[KeyedAccess]];
  }});
Object.defineProperty(_ConvertAstIntoProtoRecords.prototype._visitAll, "parameters", {get: function() {
    return [[List]];
  }});
function _arrayFn(length) {
  switch (length) {
    case 0:
      return ChangeDetectionUtil.arrayFn0;
    case 1:
      return ChangeDetectionUtil.arrayFn1;
    case 2:
      return ChangeDetectionUtil.arrayFn2;
    case 3:
      return ChangeDetectionUtil.arrayFn3;
    case 4:
      return ChangeDetectionUtil.arrayFn4;
    case 5:
      return ChangeDetectionUtil.arrayFn5;
    case 6:
      return ChangeDetectionUtil.arrayFn6;
    case 7:
      return ChangeDetectionUtil.arrayFn7;
    case 8:
      return ChangeDetectionUtil.arrayFn8;
    case 9:
      return ChangeDetectionUtil.arrayFn9;
    default:
      throw new BaseException("Does not support literal maps with more than 9 elements");
  }
}
Object.defineProperty(_arrayFn, "parameters", {get: function() {
    return [[$traceurRuntime.type.number]];
  }});
function _mapPrimitiveName(keys) {
  var stringifiedKeys = ListWrapper.join(ListWrapper.map(keys, (function(k) {
    return isString(k) ? ("\"" + k + "\"") : ("" + k);
  })), ", ");
  return ("mapFn([" + stringifiedKeys + "])");
}
Object.defineProperty(_mapPrimitiveName, "parameters", {get: function() {
    return [[List]];
  }});
function _operationToPrimitiveName(operation) {
  switch (operation) {
    case '+':
      return "operation_add";
    case '-':
      return "operation_subtract";
    case '*':
      return "operation_multiply";
    case '/':
      return "operation_divide";
    case '%':
      return "operation_remainder";
    case '==':
      return "operation_equals";
    case '!=':
      return "operation_not_equals";
    case '<':
      return "operation_less_then";
    case '>':
      return "operation_greater_then";
    case '<=':
      return "operation_less_or_equals_then";
    case '>=':
      return "operation_greater_or_equals_then";
    case '&&':
      return "operation_logical_and";
    case '||':
      return "operation_logical_or";
    default:
      throw new BaseException(("Unsupported operation " + operation));
  }
}
Object.defineProperty(_operationToPrimitiveName, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
function _operationToFunction(operation) {
  switch (operation) {
    case '+':
      return ChangeDetectionUtil.operation_add;
    case '-':
      return ChangeDetectionUtil.operation_subtract;
    case '*':
      return ChangeDetectionUtil.operation_multiply;
    case '/':
      return ChangeDetectionUtil.operation_divide;
    case '%':
      return ChangeDetectionUtil.operation_remainder;
    case '==':
      return ChangeDetectionUtil.operation_equals;
    case '!=':
      return ChangeDetectionUtil.operation_not_equals;
    case '<':
      return ChangeDetectionUtil.operation_less_then;
    case '>':
      return ChangeDetectionUtil.operation_greater_then;
    case '<=':
      return ChangeDetectionUtil.operation_less_or_equals_then;
    case '>=':
      return ChangeDetectionUtil.operation_greater_or_equals_then;
    case '&&':
      return ChangeDetectionUtil.operation_logical_and;
    case '||':
      return ChangeDetectionUtil.operation_logical_or;
    default:
      throw new BaseException(("Unsupported operation " + operation));
  }
}
Object.defineProperty(_operationToFunction, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
function s(v) {
  return isPresent(v) ? ("" + v) : '';
}
function _interpolationFn(strings) {
  var length = strings.length;
  var c0 = length > 0 ? strings[0] : null;
  var c1 = length > 1 ? strings[1] : null;
  var c2 = length > 2 ? strings[2] : null;
  var c3 = length > 3 ? strings[3] : null;
  var c4 = length > 4 ? strings[4] : null;
  var c5 = length > 5 ? strings[5] : null;
  var c6 = length > 6 ? strings[6] : null;
  var c7 = length > 7 ? strings[7] : null;
  var c8 = length > 8 ? strings[8] : null;
  var c9 = length > 9 ? strings[9] : null;
  switch (length - 1) {
    case 1:
      return (function(a1) {
        return c0 + s(a1) + c1;
      });
    case 2:
      return (function(a1, a2) {
        return c0 + s(a1) + c1 + s(a2) + c2;
      });
    case 3:
      return (function(a1, a2, a3) {
        return c0 + s(a1) + c1 + s(a2) + c2 + s(a3) + c3;
      });
    case 4:
      return (function(a1, a2, a3, a4) {
        return c0 + s(a1) + c1 + s(a2) + c2 + s(a3) + c3 + s(a4) + c4;
      });
    case 5:
      return (function(a1, a2, a3, a4, a5) {
        return c0 + s(a1) + c1 + s(a2) + c2 + s(a3) + c3 + s(a4) + c4 + s(a5) + c5;
      });
    case 6:
      return (function(a1, a2, a3, a4, a5, a6) {
        return c0 + s(a1) + c1 + s(a2) + c2 + s(a3) + c3 + s(a4) + c4 + s(a5) + c5 + s(a6) + c6;
      });
    case 7:
      return (function(a1, a2, a3, a4, a5, a6, a7) {
        return c0 + s(a1) + c1 + s(a2) + c2 + s(a3) + c3 + s(a4) + c4 + s(a5) + c5 + s(a6) + c6 + s(a7) + c7;
      });
    case 8:
      return (function(a1, a2, a3, a4, a5, a6, a7, a8) {
        return c0 + s(a1) + c1 + s(a2) + c2 + s(a3) + c3 + s(a4) + c4 + s(a5) + c5 + s(a6) + c6 + s(a7) + c7 + s(a8) + c8;
      });
    case 9:
      return (function(a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        return c0 + s(a1) + c1 + s(a2) + c2 + s(a3) + c3 + s(a4) + c4 + s(a5) + c5 + s(a6) + c6 + s(a7) + c7 + s(a8) + c8 + s(a9) + c9;
      });
    default:
      throw new BaseException("Does not support more than 9 expressions");
  }
}
Object.defineProperty(_interpolationFn, "parameters", {get: function() {
    return [[List]];
  }});
//# sourceMappingURL=proto_change_detector.js.map

//# sourceMappingURL=./proto_change_detector.map