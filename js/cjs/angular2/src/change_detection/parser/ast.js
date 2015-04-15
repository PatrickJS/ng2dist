"use strict";
Object.defineProperties(module.exports, {
  AST: {get: function() {
      return AST;
    }},
  EmptyExpr: {get: function() {
      return EmptyExpr;
    }},
  ImplicitReceiver: {get: function() {
      return ImplicitReceiver;
    }},
  Chain: {get: function() {
      return Chain;
    }},
  Conditional: {get: function() {
      return Conditional;
    }},
  AccessMember: {get: function() {
      return AccessMember;
    }},
  KeyedAccess: {get: function() {
      return KeyedAccess;
    }},
  Pipe: {get: function() {
      return Pipe;
    }},
  LiteralPrimitive: {get: function() {
      return LiteralPrimitive;
    }},
  LiteralArray: {get: function() {
      return LiteralArray;
    }},
  LiteralMap: {get: function() {
      return LiteralMap;
    }},
  Interpolation: {get: function() {
      return Interpolation;
    }},
  Binary: {get: function() {
      return Binary;
    }},
  PrefixNot: {get: function() {
      return PrefixNot;
    }},
  Assignment: {get: function() {
      return Assignment;
    }},
  MethodCall: {get: function() {
      return MethodCall;
    }},
  FunctionCall: {get: function() {
      return FunctionCall;
    }},
  ASTWithSource: {get: function() {
      return ASTWithSource;
    }},
  TemplateBinding: {get: function() {
      return TemplateBinding;
    }},
  AstVisitor: {get: function() {
      return AstVisitor;
    }},
  AstTransformer: {get: function() {
      return AstTransformer;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__;
var $__0 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    autoConvertAdd = $__0.autoConvertAdd,
    isBlank = $__0.isBlank,
    isPresent = $__0.isPresent,
    FunctionWrapper = $__0.FunctionWrapper,
    BaseException = $__0.BaseException;
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__1.List,
    Map = $__1.Map,
    ListWrapper = $__1.ListWrapper,
    StringMapWrapper = $__1.StringMapWrapper;
var AST = function AST() {
  ;
};
($traceurRuntime.createClass)(AST, {
  eval: function(context, locals) {
    throw new BaseException("Not supported");
  },
  get isAssignable() {
    return false;
  },
  assign: function(context, locals, value) {
    throw new BaseException("Not supported");
  },
  visit: function(visitor) {},
  toString: function() {
    return "AST";
  }
}, {});
var EmptyExpr = function EmptyExpr() {
  $traceurRuntime.superConstructor($EmptyExpr).apply(this, arguments);
  ;
};
var $EmptyExpr = EmptyExpr;
($traceurRuntime.createClass)(EmptyExpr, {
  eval: function(context, locals) {
    return null;
  },
  visit: function(visitor) {}
}, {}, AST);
var ImplicitReceiver = function ImplicitReceiver() {
  $traceurRuntime.superConstructor($ImplicitReceiver).apply(this, arguments);
  ;
};
var $ImplicitReceiver = ImplicitReceiver;
($traceurRuntime.createClass)(ImplicitReceiver, {
  eval: function(context, locals) {
    return context;
  },
  visit: function(visitor) {
    return visitor.visitImplicitReceiver(this);
  }
}, {}, AST);
var Chain = function Chain(expressions) {
  $traceurRuntime.superConstructor($Chain).call(this);
  this.expressions = expressions;
};
var $Chain = Chain;
($traceurRuntime.createClass)(Chain, {
  eval: function(context, locals) {
    var result;
    for (var i = 0; i < this.expressions.length; i++) {
      var last = this.expressions[i].eval(context, locals);
      if (isPresent(last))
        result = last;
    }
    return result;
  },
  visit: function(visitor) {
    return visitor.visitChain(this);
  }
}, {}, AST);
Object.defineProperty(Chain, "parameters", {get: function() {
    return [[List]];
  }});
var Conditional = function Conditional(condition, trueExp, falseExp) {
  $traceurRuntime.superConstructor($Conditional).call(this);
  this.condition = condition;
  this.trueExp = trueExp;
  this.falseExp = falseExp;
};
var $Conditional = Conditional;
($traceurRuntime.createClass)(Conditional, {
  eval: function(context, locals) {
    if (this.condition.eval(context, locals)) {
      return this.trueExp.eval(context, locals);
    } else {
      return this.falseExp.eval(context, locals);
    }
  },
  visit: function(visitor) {
    return visitor.visitConditional(this);
  }
}, {}, AST);
Object.defineProperty(Conditional, "parameters", {get: function() {
    return [[AST], [AST], [AST]];
  }});
var AccessMember = function AccessMember(receiver, name, getter, setter) {
  $traceurRuntime.superConstructor($AccessMember).call(this);
  this.receiver = receiver;
  this.name = name;
  this.getter = getter;
  this.setter = setter;
};
var $AccessMember = AccessMember;
($traceurRuntime.createClass)(AccessMember, {
  eval: function(context, locals) {
    if (this.receiver instanceof ImplicitReceiver && isPresent(locals) && locals.contains(this.name)) {
      return locals.get(this.name);
    } else {
      var evaluatedReceiver = this.receiver.eval(context, locals);
      return this.getter(evaluatedReceiver);
    }
  },
  get isAssignable() {
    return true;
  },
  assign: function(context, locals, value) {
    var evaluatedContext = this.receiver.eval(context, locals);
    if (this.receiver instanceof ImplicitReceiver && isPresent(locals) && locals.contains(this.name)) {
      throw new BaseException(("Cannot reassign a variable binding " + this.name));
    } else {
      return this.setter(evaluatedContext, value);
    }
  },
  visit: function(visitor) {
    return visitor.visitAccessMember(this);
  }
}, {}, AST);
Object.defineProperty(AccessMember, "parameters", {get: function() {
    return [[AST], [$traceurRuntime.type.string], [Function], [Function]];
  }});
var KeyedAccess = function KeyedAccess(obj, key) {
  $traceurRuntime.superConstructor($KeyedAccess).call(this);
  this.obj = obj;
  this.key = key;
};
var $KeyedAccess = KeyedAccess;
($traceurRuntime.createClass)(KeyedAccess, {
  eval: function(context, locals) {
    var obj = this.obj.eval(context, locals);
    var key = this.key.eval(context, locals);
    return obj[key];
  },
  get isAssignable() {
    return true;
  },
  assign: function(context, locals, value) {
    var obj = this.obj.eval(context, locals);
    var key = this.key.eval(context, locals);
    obj[key] = value;
    return value;
  },
  visit: function(visitor) {
    return visitor.visitKeyedAccess(this);
  }
}, {}, AST);
Object.defineProperty(KeyedAccess, "parameters", {get: function() {
    return [[AST], [AST]];
  }});
var Pipe = function Pipe(exp, name, args, inBinding) {
  $traceurRuntime.superConstructor($Pipe).call(this);
  this.exp = exp;
  this.name = name;
  this.args = args;
  this.inBinding = inBinding;
};
var $Pipe = Pipe;
($traceurRuntime.createClass)(Pipe, {visit: function(visitor) {
    return visitor.visitPipe(this);
  }}, {}, AST);
Object.defineProperty(Pipe, "parameters", {get: function() {
    return [[AST], [$traceurRuntime.type.string], [List], [$traceurRuntime.type.boolean]];
  }});
var LiteralPrimitive = function LiteralPrimitive(value) {
  $traceurRuntime.superConstructor($LiteralPrimitive).call(this);
  this.value = value;
};
var $LiteralPrimitive = LiteralPrimitive;
($traceurRuntime.createClass)(LiteralPrimitive, {
  eval: function(context, locals) {
    return this.value;
  },
  visit: function(visitor) {
    return visitor.visitLiteralPrimitive(this);
  }
}, {}, AST);
var LiteralArray = function LiteralArray(expressions) {
  $traceurRuntime.superConstructor($LiteralArray).call(this);
  this.expressions = expressions;
};
var $LiteralArray = LiteralArray;
($traceurRuntime.createClass)(LiteralArray, {
  eval: function(context, locals) {
    return ListWrapper.map(this.expressions, (function(e) {
      return e.eval(context, locals);
    }));
  },
  visit: function(visitor) {
    return visitor.visitLiteralArray(this);
  }
}, {}, AST);
Object.defineProperty(LiteralArray, "parameters", {get: function() {
    return [[List]];
  }});
var LiteralMap = function LiteralMap(keys, values) {
  $traceurRuntime.superConstructor($LiteralMap).call(this);
  this.keys = keys;
  this.values = values;
};
var $LiteralMap = LiteralMap;
($traceurRuntime.createClass)(LiteralMap, {
  eval: function(context, locals) {
    var res = StringMapWrapper.create();
    for (var i = 0; i < this.keys.length; ++i) {
      StringMapWrapper.set(res, this.keys[i], this.values[i].eval(context, locals));
    }
    return res;
  },
  visit: function(visitor) {
    return visitor.visitLiteralMap(this);
  }
}, {}, AST);
Object.defineProperty(LiteralMap, "parameters", {get: function() {
    return [[List], [List]];
  }});
var Interpolation = function Interpolation(strings, expressions) {
  $traceurRuntime.superConstructor($Interpolation).call(this);
  this.strings = strings;
  this.expressions = expressions;
};
var $Interpolation = Interpolation;
($traceurRuntime.createClass)(Interpolation, {
  eval: function(context, locals) {
    throw new BaseException("evaluating an Interpolation is not supported");
  },
  visit: function(visitor) {
    visitor.visitInterpolation(this);
  }
}, {}, AST);
Object.defineProperty(Interpolation, "parameters", {get: function() {
    return [[List], [List]];
  }});
var Binary = function Binary(operation, left, right) {
  $traceurRuntime.superConstructor($Binary).call(this);
  this.operation = operation;
  this.left = left;
  this.right = right;
};
var $Binary = Binary;
($traceurRuntime.createClass)(Binary, {
  eval: function(context, locals) {
    var left = this.left.eval(context, locals);
    switch (this.operation) {
      case '&&':
        return left && this.right.eval(context, locals);
      case '||':
        return left || this.right.eval(context, locals);
    }
    var right = this.right.eval(context, locals);
    switch (this.operation) {
      case '+':
        return left + right;
      case '-':
        return left - right;
      case '*':
        return left * right;
      case '/':
        return left / right;
      case '%':
        return left % right;
      case '==':
        return left == right;
      case '!=':
        return left != right;
      case '<':
        return left < right;
      case '>':
        return left > right;
      case '<=':
        return left <= right;
      case '>=':
        return left >= right;
      case '^':
        return left ^ right;
      case '&':
        return left & right;
    }
    throw 'Internal error [$operation] not handled';
  },
  visit: function(visitor) {
    return visitor.visitBinary(this);
  }
}, {}, AST);
Object.defineProperty(Binary, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [AST], [AST]];
  }});
var PrefixNot = function PrefixNot(expression) {
  $traceurRuntime.superConstructor($PrefixNot).call(this);
  this.expression = expression;
};
var $PrefixNot = PrefixNot;
($traceurRuntime.createClass)(PrefixNot, {
  eval: function(context, locals) {
    return !this.expression.eval(context, locals);
  },
  visit: function(visitor) {
    return visitor.visitPrefixNot(this);
  }
}, {}, AST);
Object.defineProperty(PrefixNot, "parameters", {get: function() {
    return [[AST]];
  }});
var Assignment = function Assignment(target, value) {
  $traceurRuntime.superConstructor($Assignment).call(this);
  this.target = target;
  this.value = value;
};
var $Assignment = Assignment;
($traceurRuntime.createClass)(Assignment, {
  eval: function(context, locals) {
    return this.target.assign(context, locals, this.value.eval(context, locals));
  },
  visit: function(visitor) {
    return visitor.visitAssignment(this);
  }
}, {}, AST);
Object.defineProperty(Assignment, "parameters", {get: function() {
    return [[AST], [AST]];
  }});
var MethodCall = function MethodCall(receiver, name, fn, args) {
  $traceurRuntime.superConstructor($MethodCall).call(this);
  this.receiver = receiver;
  this.fn = fn;
  this.args = args;
  this.name = name;
};
var $MethodCall = MethodCall;
($traceurRuntime.createClass)(MethodCall, {
  eval: function(context, locals) {
    var evaluatedArgs = evalList(context, locals, this.args);
    if (this.receiver instanceof ImplicitReceiver && isPresent(locals) && locals.contains(this.name)) {
      var fn = locals.get(this.name);
      return FunctionWrapper.apply(fn, evaluatedArgs);
    } else {
      var evaluatedReceiver = this.receiver.eval(context, locals);
      return this.fn(evaluatedReceiver, evaluatedArgs);
    }
  },
  visit: function(visitor) {
    return visitor.visitMethodCall(this);
  }
}, {}, AST);
Object.defineProperty(MethodCall, "parameters", {get: function() {
    return [[AST], [$traceurRuntime.type.string], [Function], [List]];
  }});
var FunctionCall = function FunctionCall(target, args) {
  $traceurRuntime.superConstructor($FunctionCall).call(this);
  this.target = target;
  this.args = args;
};
var $FunctionCall = FunctionCall;
($traceurRuntime.createClass)(FunctionCall, {
  eval: function(context, locals) {
    var obj = this.target.eval(context, locals);
    if (!(obj instanceof Function)) {
      throw new BaseException((obj + " is not a function"));
    }
    return FunctionWrapper.apply(obj, evalList(context, locals, this.args));
  },
  visit: function(visitor) {
    return visitor.visitFunctionCall(this);
  }
}, {}, AST);
Object.defineProperty(FunctionCall, "parameters", {get: function() {
    return [[AST], [List]];
  }});
var ASTWithSource = function ASTWithSource(ast, source, location) {
  $traceurRuntime.superConstructor($ASTWithSource).call(this);
  this.source = source;
  this.location = location;
  this.ast = ast;
};
var $ASTWithSource = ASTWithSource;
($traceurRuntime.createClass)(ASTWithSource, {
  eval: function(context, locals) {
    return this.ast.eval(context, locals);
  },
  get isAssignable() {
    return this.ast.isAssignable;
  },
  assign: function(context, locals, value) {
    return this.ast.assign(context, locals, value);
  },
  visit: function(visitor) {
    return this.ast.visit(visitor);
  },
  toString: function() {
    return (this.source + " in " + this.location);
  }
}, {}, AST);
Object.defineProperty(ASTWithSource, "parameters", {get: function() {
    return [[AST], [$traceurRuntime.type.string], [$traceurRuntime.type.string]];
  }});
var TemplateBinding = function TemplateBinding(key, keyIsVar, name, expression) {
  this.key = key;
  this.keyIsVar = keyIsVar;
  this.name = name;
  this.expression = expression;
};
($traceurRuntime.createClass)(TemplateBinding, {}, {});
Object.defineProperty(TemplateBinding, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [$traceurRuntime.type.boolean], [$traceurRuntime.type.string], [ASTWithSource]];
  }});
var AstVisitor = function AstVisitor() {
  ;
};
($traceurRuntime.createClass)(AstVisitor, {
  visitAccessMember: function(ast) {},
  visitAssignment: function(ast) {},
  visitBinary: function(ast) {},
  visitChain: function(ast) {},
  visitConditional: function(ast) {},
  visitPipe: function(ast) {},
  visitFunctionCall: function(ast) {},
  visitImplicitReceiver: function(ast) {},
  visitKeyedAccess: function(ast) {},
  visitLiteralArray: function(ast) {},
  visitLiteralMap: function(ast) {},
  visitLiteralPrimitive: function(ast) {},
  visitMethodCall: function(ast) {},
  visitPrefixNot: function(ast) {}
}, {});
Object.defineProperty(AstVisitor.prototype.visitAccessMember, "parameters", {get: function() {
    return [[AccessMember]];
  }});
Object.defineProperty(AstVisitor.prototype.visitAssignment, "parameters", {get: function() {
    return [[Assignment]];
  }});
Object.defineProperty(AstVisitor.prototype.visitBinary, "parameters", {get: function() {
    return [[Binary]];
  }});
Object.defineProperty(AstVisitor.prototype.visitChain, "parameters", {get: function() {
    return [[Chain]];
  }});
Object.defineProperty(AstVisitor.prototype.visitConditional, "parameters", {get: function() {
    return [[Conditional]];
  }});
Object.defineProperty(AstVisitor.prototype.visitPipe, "parameters", {get: function() {
    return [[Pipe]];
  }});
Object.defineProperty(AstVisitor.prototype.visitFunctionCall, "parameters", {get: function() {
    return [[FunctionCall]];
  }});
Object.defineProperty(AstVisitor.prototype.visitImplicitReceiver, "parameters", {get: function() {
    return [[ImplicitReceiver]];
  }});
Object.defineProperty(AstVisitor.prototype.visitKeyedAccess, "parameters", {get: function() {
    return [[KeyedAccess]];
  }});
Object.defineProperty(AstVisitor.prototype.visitLiteralArray, "parameters", {get: function() {
    return [[LiteralArray]];
  }});
Object.defineProperty(AstVisitor.prototype.visitLiteralMap, "parameters", {get: function() {
    return [[LiteralMap]];
  }});
Object.defineProperty(AstVisitor.prototype.visitLiteralPrimitive, "parameters", {get: function() {
    return [[LiteralPrimitive]];
  }});
Object.defineProperty(AstVisitor.prototype.visitMethodCall, "parameters", {get: function() {
    return [[MethodCall]];
  }});
Object.defineProperty(AstVisitor.prototype.visitPrefixNot, "parameters", {get: function() {
    return [[PrefixNot]];
  }});
var AstTransformer = function AstTransformer() {
  ;
};
($traceurRuntime.createClass)(AstTransformer, {
  visitImplicitReceiver: function(ast) {
    return new ImplicitReceiver();
  },
  visitInterpolation: function(ast) {
    return new Interpolation(ast.strings, this.visitAll(ast.expressions));
  },
  visitLiteralPrimitive: function(ast) {
    return new LiteralPrimitive(ast.value);
  },
  visitAccessMember: function(ast) {
    return new AccessMember(ast.receiver.visit(this), ast.name, ast.getter, ast.setter);
  },
  visitMethodCall: function(ast) {
    return new MethodCall(ast.receiver.visit(this), ast.name, ast.fn, this.visitAll(ast.args));
  },
  visitFunctionCall: function(ast) {
    return new FunctionCall(ast.target.visit(this), this.visitAll(ast.args));
  },
  visitLiteralArray: function(ast) {
    return new LiteralArray(this.visitAll(ast.expressions));
  },
  visitLiteralMap: function(ast) {
    return new LiteralMap(ast.keys, this.visitAll(ast.values));
  },
  visitBinary: function(ast) {
    return new Binary(ast.operation, ast.left.visit(this), ast.right.visit(this));
  },
  visitPrefixNot: function(ast) {
    return new PrefixNot(ast.expression.visit(this));
  },
  visitConditional: function(ast) {
    return new Conditional(ast.condition.visit(this), ast.trueExp.visit(this), ast.falseExp.visit(this));
  },
  visitPipe: function(ast) {
    return new Pipe(ast.exp.visit(this), ast.name, this.visitAll(ast.args), ast.inBinding);
  },
  visitKeyedAccess: function(ast) {
    return new KeyedAccess(ast.obj.visit(this), ast.key.visit(this));
  },
  visitAll: function(asts) {
    var res = ListWrapper.createFixedSize(asts.length);
    for (var i = 0; i < asts.length; ++i) {
      res[i] = asts[i].visit(this);
    }
    return res;
  }
}, {});
Object.defineProperty(AstTransformer.prototype.visitImplicitReceiver, "parameters", {get: function() {
    return [[ImplicitReceiver]];
  }});
Object.defineProperty(AstTransformer.prototype.visitInterpolation, "parameters", {get: function() {
    return [[Interpolation]];
  }});
Object.defineProperty(AstTransformer.prototype.visitLiteralPrimitive, "parameters", {get: function() {
    return [[LiteralPrimitive]];
  }});
Object.defineProperty(AstTransformer.prototype.visitAccessMember, "parameters", {get: function() {
    return [[AccessMember]];
  }});
Object.defineProperty(AstTransformer.prototype.visitMethodCall, "parameters", {get: function() {
    return [[MethodCall]];
  }});
Object.defineProperty(AstTransformer.prototype.visitFunctionCall, "parameters", {get: function() {
    return [[FunctionCall]];
  }});
Object.defineProperty(AstTransformer.prototype.visitLiteralArray, "parameters", {get: function() {
    return [[LiteralArray]];
  }});
Object.defineProperty(AstTransformer.prototype.visitLiteralMap, "parameters", {get: function() {
    return [[LiteralMap]];
  }});
Object.defineProperty(AstTransformer.prototype.visitBinary, "parameters", {get: function() {
    return [[Binary]];
  }});
Object.defineProperty(AstTransformer.prototype.visitPrefixNot, "parameters", {get: function() {
    return [[PrefixNot]];
  }});
Object.defineProperty(AstTransformer.prototype.visitConditional, "parameters", {get: function() {
    return [[Conditional]];
  }});
Object.defineProperty(AstTransformer.prototype.visitPipe, "parameters", {get: function() {
    return [[Pipe]];
  }});
Object.defineProperty(AstTransformer.prototype.visitKeyedAccess, "parameters", {get: function() {
    return [[KeyedAccess]];
  }});
Object.defineProperty(AstTransformer.prototype.visitAll, "parameters", {get: function() {
    return [[List]];
  }});
var _evalListCache = [[], [0], [0, 0], [0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0]];
function evalList(context, locals, exps) {
  var length = exps.length;
  if (length > 10) {
    throw new BaseException("Cannot have more than 10 argument");
  }
  var result = _evalListCache[length];
  for (var i = 0; i < length; i++) {
    result[i] = exps[i].eval(context, locals);
  }
  return result;
}
Object.defineProperty(evalList, "parameters", {get: function() {
    return [[], [], [List]];
  }});
//# sourceMappingURL=ast.js.map

//# sourceMappingURL=./ast.map