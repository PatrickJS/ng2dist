"use strict";
Object.defineProperties(module.exports, {
  Parser: {get: function() {
      return Parser;
    }},
  __esModule: {value: true}
});
var $__angular2_47_di__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__lexer__,
    $__angular2_47_src_47_reflection_47_reflection__,
    $__ast__;
var Injectable = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}).Injectable;
var $__1 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    int = $__1.int,
    isBlank = $__1.isBlank,
    isPresent = $__1.isPresent,
    BaseException = $__1.BaseException,
    StringWrapper = $__1.StringWrapper,
    RegExpWrapper = $__1.RegExpWrapper;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    ListWrapper = $__2.ListWrapper,
    List = $__2.List;
var $__3 = ($__lexer__ = require("./lexer"), $__lexer__ && $__lexer__.__esModule && $__lexer__ || {default: $__lexer__}),
    Lexer = $__3.Lexer,
    EOF = $__3.EOF,
    Token = $__3.Token,
    $PERIOD = $__3.$PERIOD,
    $COLON = $__3.$COLON,
    $SEMICOLON = $__3.$SEMICOLON,
    $LBRACKET = $__3.$LBRACKET,
    $RBRACKET = $__3.$RBRACKET,
    $COMMA = $__3.$COMMA,
    $LBRACE = $__3.$LBRACE,
    $RBRACE = $__3.$RBRACE,
    $LPAREN = $__3.$LPAREN,
    $RPAREN = $__3.$RPAREN;
var $__4 = ($__angular2_47_src_47_reflection_47_reflection__ = require("angular2/src/reflection/reflection"), $__angular2_47_src_47_reflection_47_reflection__ && $__angular2_47_src_47_reflection_47_reflection__.__esModule && $__angular2_47_src_47_reflection_47_reflection__ || {default: $__angular2_47_src_47_reflection_47_reflection__}),
    reflector = $__4.reflector,
    Reflector = $__4.Reflector;
var $__5 = ($__ast__ = require("./ast"), $__ast__ && $__ast__.__esModule && $__ast__ || {default: $__ast__}),
    AST = $__5.AST,
    EmptyExpr = $__5.EmptyExpr,
    ImplicitReceiver = $__5.ImplicitReceiver,
    AccessMember = $__5.AccessMember,
    LiteralPrimitive = $__5.LiteralPrimitive,
    Expression = $__5.Expression,
    Binary = $__5.Binary,
    PrefixNot = $__5.PrefixNot,
    Conditional = $__5.Conditional,
    Pipe = $__5.Pipe,
    Assignment = $__5.Assignment,
    Chain = $__5.Chain,
    KeyedAccess = $__5.KeyedAccess,
    LiteralArray = $__5.LiteralArray,
    LiteralMap = $__5.LiteralMap,
    Interpolation = $__5.Interpolation,
    MethodCall = $__5.MethodCall,
    FunctionCall = $__5.FunctionCall,
    TemplateBindings = $__5.TemplateBindings,
    TemplateBinding = $__5.TemplateBinding,
    ASTWithSource = $__5.ASTWithSource;
var _implicitReceiver = new ImplicitReceiver();
var INTERPOLATION_REGEXP = RegExpWrapper.create('\\{\\{(.*?)\\}\\}');
var QUOTE_REGEXP = RegExpWrapper.create("'");
var Parser = function Parser(lexer) {
  var providedReflector = arguments[1] !== (void 0) ? arguments[1] : null;
  this._lexer = lexer;
  this._reflector = isPresent(providedReflector) ? providedReflector : reflector;
};
($traceurRuntime.createClass)(Parser, {
  parseAction: function(input, location) {
    var tokens = this._lexer.tokenize(input);
    var ast = new _ParseAST(input, location, tokens, this._reflector, true).parseChain();
    return new ASTWithSource(ast, input, location);
  },
  parseBinding: function(input, location) {
    var tokens = this._lexer.tokenize(input);
    var ast = new _ParseAST(input, location, tokens, this._reflector, false).parseChain();
    return new ASTWithSource(ast, input, location);
  },
  addPipes: function(bindingAst, pipes) {
    if (ListWrapper.isEmpty(pipes))
      return bindingAst;
    var res = ListWrapper.reduce(pipes, (function(result, currentPipeName) {
      return new Pipe(result, currentPipeName, [], false);
    }), bindingAst.ast);
    return new ASTWithSource(res, bindingAst.source, bindingAst.location);
  },
  parseTemplateBindings: function(input, location) {
    var tokens = this._lexer.tokenize(input);
    return new _ParseAST(input, location, tokens, this._reflector, false).parseTemplateBindings();
  },
  parseInterpolation: function(input, location) {
    var parts = StringWrapper.split(input, INTERPOLATION_REGEXP);
    if (parts.length <= 1) {
      return null;
    }
    var strings = [];
    var expressions = [];
    for (var i = 0; i < parts.length; i++) {
      var part = parts[i];
      if (i % 2 === 0) {
        ListWrapper.push(strings, part);
      } else {
        var tokens = this._lexer.tokenize(part);
        var ast = new _ParseAST(input, location, tokens, this._reflector, false).parseChain();
        ListWrapper.push(expressions, ast);
      }
    }
    return new ASTWithSource(new Interpolation(strings, expressions), input, location);
  },
  wrapLiteralPrimitive: function(input, location) {
    return new ASTWithSource(new LiteralPrimitive(input), input, location);
  }
}, {});
Object.defineProperty(Parser, "annotations", {get: function() {
    return [new Injectable()];
  }});
Object.defineProperty(Parser, "parameters", {get: function() {
    return [[Lexer], [Reflector]];
  }});
Object.defineProperty(Parser.prototype.parseAction, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [$traceurRuntime.type.any]];
  }});
Object.defineProperty(Parser.prototype.parseBinding, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [$traceurRuntime.type.any]];
  }});
Object.defineProperty(Parser.prototype.addPipes, "parameters", {get: function() {
    return [[ASTWithSource], [$traceurRuntime.genericType(List, String)]];
  }});
Object.defineProperty(Parser.prototype.parseTemplateBindings, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [$traceurRuntime.type.any]];
  }});
Object.defineProperty(Parser.prototype.parseInterpolation, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [$traceurRuntime.type.any]];
  }});
Object.defineProperty(Parser.prototype.wrapLiteralPrimitive, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [$traceurRuntime.type.any]];
  }});
var _ParseAST = function _ParseAST(input, location, tokens, reflector, parseAction) {
  this.input = input;
  this.location = location;
  this.tokens = tokens;
  this.index = 0;
  this.reflector = reflector;
  this.parseAction = parseAction;
};
($traceurRuntime.createClass)(_ParseAST, {
  peek: function(offset) {
    var i = this.index + offset;
    return i < this.tokens.length ? this.tokens[i] : EOF;
  },
  get next() {
    return this.peek(0);
  },
  get inputIndex() {
    return (this.index < this.tokens.length) ? this.next.index : this.input.length;
  },
  advance: function() {
    this.index++;
  },
  optionalCharacter: function(code) {
    if (this.next.isCharacter(code)) {
      this.advance();
      return true;
    } else {
      return false;
    }
  },
  optionalKeywordVar: function() {
    if (this.peekKeywordVar()) {
      this.advance();
      return true;
    } else {
      return false;
    }
  },
  peekKeywordVar: function() {
    return this.next.isKeywordVar() || this.next.isOperator('#');
  },
  expectCharacter: function(code) {
    if (this.optionalCharacter(code))
      return ;
    this.error(("Missing expected " + StringWrapper.fromCharCode(code)));
  },
  optionalOperator: function(op) {
    if (this.next.isOperator(op)) {
      this.advance();
      return true;
    } else {
      return false;
    }
  },
  expectOperator: function(operator) {
    if (this.optionalOperator(operator))
      return ;
    this.error(("Missing expected operator " + operator));
  },
  expectIdentifierOrKeyword: function() {
    var n = this.next;
    if (!n.isIdentifier() && !n.isKeyword()) {
      this.error(("Unexpected token " + n + ", expected identifier or keyword"));
    }
    this.advance();
    return n.toString();
  },
  expectIdentifierOrKeywordOrString: function() {
    var n = this.next;
    if (!n.isIdentifier() && !n.isKeyword() && !n.isString()) {
      this.error(("Unexpected token " + n + ", expected identifier, keyword, or string"));
    }
    this.advance();
    return n.toString();
  },
  parseChain: function() {
    var exprs = [];
    while (this.index < this.tokens.length) {
      var expr = this.parsePipe();
      ListWrapper.push(exprs, expr);
      if (this.optionalCharacter($SEMICOLON)) {
        if (!this.parseAction) {
          this.error("Binding expression cannot contain chained expression");
        }
        while (this.optionalCharacter($SEMICOLON)) {}
      } else if (this.index < this.tokens.length) {
        this.error(("Unexpected token '" + this.next + "'"));
      }
    }
    if (exprs.length == 0)
      return new EmptyExpr();
    if (exprs.length == 1)
      return exprs[0];
    return new Chain(exprs);
  },
  parsePipe: function() {
    var result = this.parseExpression();
    while (this.optionalOperator("|")) {
      if (this.parseAction) {
        this.error("Cannot have a pipe in an action expression");
      }
      var name = this.expectIdentifierOrKeyword();
      var args = ListWrapper.create();
      while (this.optionalCharacter($COLON)) {
        ListWrapper.push(args, this.parseExpression());
      }
      result = new Pipe(result, name, args, true);
    }
    return result;
  },
  parseExpression: function() {
    var start = this.inputIndex;
    var result = this.parseConditional();
    while (this.next.isOperator('=')) {
      if (!result.isAssignable) {
        var end = this.inputIndex;
        var expression = this.input.substring(start, end);
        this.error(("Expression " + expression + " is not assignable"));
      }
      if (!this.parseAction) {
        this.error("Binding expression cannot contain assignments");
      }
      this.expectOperator('=');
      result = new Assignment(result, this.parseConditional());
    }
    return result;
  },
  parseConditional: function() {
    var start = this.inputIndex;
    var result = this.parseLogicalOr();
    if (this.optionalOperator('?')) {
      var yes = this.parseExpression();
      if (!this.optionalCharacter($COLON)) {
        var end = this.inputIndex;
        var expression = this.input.substring(start, end);
        this.error(("Conditional expression " + expression + " requires all 3 expressions"));
      }
      var no = this.parseExpression();
      return new Conditional(result, yes, no);
    } else {
      return result;
    }
  },
  parseLogicalOr: function() {
    var result = this.parseLogicalAnd();
    while (this.optionalOperator('||')) {
      result = new Binary('||', result, this.parseLogicalAnd());
    }
    return result;
  },
  parseLogicalAnd: function() {
    var result = this.parseEquality();
    while (this.optionalOperator('&&')) {
      result = new Binary('&&', result, this.parseEquality());
    }
    return result;
  },
  parseEquality: function() {
    var result = this.parseRelational();
    while (true) {
      if (this.optionalOperator('==')) {
        result = new Binary('==', result, this.parseRelational());
      } else if (this.optionalOperator('!=')) {
        result = new Binary('!=', result, this.parseRelational());
      } else {
        return result;
      }
    }
  },
  parseRelational: function() {
    var result = this.parseAdditive();
    while (true) {
      if (this.optionalOperator('<')) {
        result = new Binary('<', result, this.parseAdditive());
      } else if (this.optionalOperator('>')) {
        result = new Binary('>', result, this.parseAdditive());
      } else if (this.optionalOperator('<=')) {
        result = new Binary('<=', result, this.parseAdditive());
      } else if (this.optionalOperator('>=')) {
        result = new Binary('>=', result, this.parseAdditive());
      } else {
        return result;
      }
    }
  },
  parseAdditive: function() {
    var result = this.parseMultiplicative();
    while (true) {
      if (this.optionalOperator('+')) {
        result = new Binary('+', result, this.parseMultiplicative());
      } else if (this.optionalOperator('-')) {
        result = new Binary('-', result, this.parseMultiplicative());
      } else {
        return result;
      }
    }
  },
  parseMultiplicative: function() {
    var result = this.parsePrefix();
    while (true) {
      if (this.optionalOperator('*')) {
        result = new Binary('*', result, this.parsePrefix());
      } else if (this.optionalOperator('%')) {
        result = new Binary('%', result, this.parsePrefix());
      } else if (this.optionalOperator('/')) {
        result = new Binary('/', result, this.parsePrefix());
      } else {
        return result;
      }
    }
  },
  parsePrefix: function() {
    if (this.optionalOperator('+')) {
      return this.parsePrefix();
    } else if (this.optionalOperator('-')) {
      return new Binary('-', new LiteralPrimitive(0), this.parsePrefix());
    } else if (this.optionalOperator('!')) {
      return new PrefixNot(this.parsePrefix());
    } else {
      return this.parseCallChain();
    }
  },
  parseCallChain: function() {
    var result = this.parsePrimary();
    while (true) {
      if (this.optionalCharacter($PERIOD)) {
        result = this.parseAccessMemberOrMethodCall(result);
      } else if (this.optionalCharacter($LBRACKET)) {
        var key = this.parseExpression();
        this.expectCharacter($RBRACKET);
        result = new KeyedAccess(result, key);
      } else if (this.optionalCharacter($LPAREN)) {
        var args = this.parseCallArguments();
        this.expectCharacter($RPAREN);
        result = new FunctionCall(result, args);
      } else {
        return result;
      }
    }
  },
  parsePrimary: function() {
    if (this.optionalCharacter($LPAREN)) {
      var result = this.parsePipe();
      this.expectCharacter($RPAREN);
      return result;
    } else if (this.next.isKeywordNull() || this.next.isKeywordUndefined()) {
      this.advance();
      return new LiteralPrimitive(null);
    } else if (this.next.isKeywordTrue()) {
      this.advance();
      return new LiteralPrimitive(true);
    } else if (this.next.isKeywordFalse()) {
      this.advance();
      return new LiteralPrimitive(false);
    } else if (this.optionalCharacter($LBRACKET)) {
      var elements = this.parseExpressionList($RBRACKET);
      this.expectCharacter($RBRACKET);
      return new LiteralArray(elements);
    } else if (this.next.isCharacter($LBRACE)) {
      return this.parseLiteralMap();
    } else if (this.next.isIdentifier()) {
      return this.parseAccessMemberOrMethodCall(_implicitReceiver);
    } else if (this.next.isNumber()) {
      var value = this.next.toNumber();
      this.advance();
      return new LiteralPrimitive(value);
    } else if (this.next.isString()) {
      var value = this.next.toString();
      this.advance();
      return new LiteralPrimitive(value);
    } else if (this.index >= this.tokens.length) {
      this.error(("Unexpected end of expression: " + this.input));
    } else {
      this.error(("Unexpected token " + this.next));
    }
  },
  parseExpressionList: function(terminator) {
    var result = [];
    if (!this.next.isCharacter(terminator)) {
      do {
        ListWrapper.push(result, this.parseExpression());
      } while (this.optionalCharacter($COMMA));
    }
    return result;
  },
  parseLiteralMap: function() {
    var keys = [];
    var values = [];
    this.expectCharacter($LBRACE);
    if (!this.optionalCharacter($RBRACE)) {
      do {
        var key = this.expectIdentifierOrKeywordOrString();
        ListWrapper.push(keys, key);
        this.expectCharacter($COLON);
        ListWrapper.push(values, this.parseExpression());
      } while (this.optionalCharacter($COMMA));
      this.expectCharacter($RBRACE);
    }
    return new LiteralMap(keys, values);
  },
  parseAccessMemberOrMethodCall: function(receiver) {
    var id = this.expectIdentifierOrKeyword();
    if (this.optionalCharacter($LPAREN)) {
      var args = this.parseCallArguments();
      this.expectCharacter($RPAREN);
      var fn = this.reflector.method(id);
      return new MethodCall(receiver, id, fn, args);
    } else {
      var getter = this.reflector.getter(id);
      var setter = this.reflector.setter(id);
      return new AccessMember(receiver, id, getter, setter);
    }
  },
  parseCallArguments: function() {
    if (this.next.isCharacter($RPAREN))
      return [];
    var positionals = [];
    do {
      ListWrapper.push(positionals, this.parseExpression());
    } while (this.optionalCharacter($COMMA));
    return positionals;
  },
  expectTemplateBindingKey: function() {
    var result = '';
    var operatorFound = false;
    do {
      result += this.expectIdentifierOrKeywordOrString();
      operatorFound = this.optionalOperator('-');
      if (operatorFound) {
        result += '-';
      }
    } while (operatorFound);
    return result.toString();
  },
  parseTemplateBindings: function() {
    var bindings = [];
    while (this.index < this.tokens.length) {
      var keyIsVar = this.optionalKeywordVar();
      var key = this.expectTemplateBindingKey();
      this.optionalCharacter($COLON);
      var name = null;
      var expression = null;
      if (this.next !== EOF) {
        if (keyIsVar) {
          if (this.optionalOperator("=")) {
            name = this.expectTemplateBindingKey();
          } else {
            name = '\$implicit';
          }
        } else if (!this.peekKeywordVar()) {
          var start = this.inputIndex;
          var ast = this.parsePipe();
          var source = this.input.substring(start, this.inputIndex);
          expression = new ASTWithSource(ast, source, this.location);
        }
      }
      ListWrapper.push(bindings, new TemplateBinding(key, keyIsVar, name, expression));
      if (!this.optionalCharacter($SEMICOLON)) {
        this.optionalCharacter($COMMA);
      }
      ;
    }
    return bindings;
  },
  error: function(message) {
    var index = arguments[1] !== (void 0) ? arguments[1] : null;
    if (isBlank(index))
      index = this.index;
    var location = (index < this.tokens.length) ? ("at column " + (this.tokens[index].index + 1) + " in") : "at the end of the expression";
    throw new BaseException(("Parser Error: " + message + " " + location + " [" + this.input + "] in " + this.location));
  }
}, {});
Object.defineProperty(_ParseAST, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [$traceurRuntime.type.any], [List], [Reflector], [$traceurRuntime.type.boolean]];
  }});
Object.defineProperty(_ParseAST.prototype.peek, "parameters", {get: function() {
    return [[int]];
  }});
Object.defineProperty(_ParseAST.prototype.optionalCharacter, "parameters", {get: function() {
    return [[int]];
  }});
Object.defineProperty(_ParseAST.prototype.expectCharacter, "parameters", {get: function() {
    return [[int]];
  }});
Object.defineProperty(_ParseAST.prototype.optionalOperator, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
Object.defineProperty(_ParseAST.prototype.expectOperator, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
Object.defineProperty(_ParseAST.prototype.parseExpressionList, "parameters", {get: function() {
    return [[int]];
  }});
Object.defineProperty(_ParseAST.prototype.error, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [int]];
  }});
//# sourceMappingURL=parser.js.map

//# sourceMappingURL=./parser.map