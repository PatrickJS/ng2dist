"use strict";
Object.defineProperties(module.exports, {
  TOKEN_TYPE_CHARACTER: {get: function() {
      return TOKEN_TYPE_CHARACTER;
    }},
  TOKEN_TYPE_IDENTIFIER: {get: function() {
      return TOKEN_TYPE_IDENTIFIER;
    }},
  TOKEN_TYPE_KEYWORD: {get: function() {
      return TOKEN_TYPE_KEYWORD;
    }},
  TOKEN_TYPE_STRING: {get: function() {
      return TOKEN_TYPE_STRING;
    }},
  TOKEN_TYPE_OPERATOR: {get: function() {
      return TOKEN_TYPE_OPERATOR;
    }},
  TOKEN_TYPE_NUMBER: {get: function() {
      return TOKEN_TYPE_NUMBER;
    }},
  Lexer: {get: function() {
      return Lexer;
    }},
  Token: {get: function() {
      return Token;
    }},
  EOF: {get: function() {
      return EOF;
    }},
  $EOF: {get: function() {
      return $EOF;
    }},
  $TAB: {get: function() {
      return $TAB;
    }},
  $LF: {get: function() {
      return $LF;
    }},
  $VTAB: {get: function() {
      return $VTAB;
    }},
  $FF: {get: function() {
      return $FF;
    }},
  $CR: {get: function() {
      return $CR;
    }},
  $SPACE: {get: function() {
      return $SPACE;
    }},
  $BANG: {get: function() {
      return $BANG;
    }},
  $DQ: {get: function() {
      return $DQ;
    }},
  $HASH: {get: function() {
      return $HASH;
    }},
  $$: {get: function() {
      return $$;
    }},
  $PERCENT: {get: function() {
      return $PERCENT;
    }},
  $AMPERSAND: {get: function() {
      return $AMPERSAND;
    }},
  $SQ: {get: function() {
      return $SQ;
    }},
  $LPAREN: {get: function() {
      return $LPAREN;
    }},
  $RPAREN: {get: function() {
      return $RPAREN;
    }},
  $STAR: {get: function() {
      return $STAR;
    }},
  $PLUS: {get: function() {
      return $PLUS;
    }},
  $COMMA: {get: function() {
      return $COMMA;
    }},
  $MINUS: {get: function() {
      return $MINUS;
    }},
  $PERIOD: {get: function() {
      return $PERIOD;
    }},
  $SLASH: {get: function() {
      return $SLASH;
    }},
  $COLON: {get: function() {
      return $COLON;
    }},
  $SEMICOLON: {get: function() {
      return $SEMICOLON;
    }},
  $LT: {get: function() {
      return $LT;
    }},
  $EQ: {get: function() {
      return $EQ;
    }},
  $GT: {get: function() {
      return $GT;
    }},
  $QUESTION: {get: function() {
      return $QUESTION;
    }},
  $LBRACKET: {get: function() {
      return $LBRACKET;
    }},
  $BACKSLASH: {get: function() {
      return $BACKSLASH;
    }},
  $RBRACKET: {get: function() {
      return $RBRACKET;
    }},
  $LBRACE: {get: function() {
      return $LBRACE;
    }},
  $BAR: {get: function() {
      return $BAR;
    }},
  $RBRACE: {get: function() {
      return $RBRACE;
    }},
  ScannerError: {get: function() {
      return ScannerError;
    }},
  __esModule: {value: true}
});
var $__angular2_47_di__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_lang__;
var Injectable = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}).Injectable;
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__1.List,
    ListWrapper = $__1.ListWrapper,
    SetWrapper = $__1.SetWrapper;
var $__2 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    int = $__2.int,
    NumberWrapper = $__2.NumberWrapper,
    StringJoiner = $__2.StringJoiner,
    StringWrapper = $__2.StringWrapper;
var TOKEN_TYPE_CHARACTER = 1;
var TOKEN_TYPE_IDENTIFIER = 2;
var TOKEN_TYPE_KEYWORD = 3;
var TOKEN_TYPE_STRING = 4;
var TOKEN_TYPE_OPERATOR = 5;
var TOKEN_TYPE_NUMBER = 6;
var Lexer = function Lexer() {
  ;
};
($traceurRuntime.createClass)(Lexer, {tokenize: function(text) {
    var scanner = new _Scanner(text);
    var tokens = [];
    var token = scanner.scanToken();
    while (token != null) {
      ListWrapper.push(tokens, token);
      token = scanner.scanToken();
    }
    return tokens;
  }}, {});
Object.defineProperty(Lexer, "annotations", {get: function() {
    return [new Injectable()];
  }});
Object.defineProperty(Lexer.prototype.tokenize, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
var Token = function Token(index, type, numValue, strValue) {
  this.index = index;
  this.type = type;
  this._numValue = numValue;
  this._strValue = strValue;
};
($traceurRuntime.createClass)(Token, {
  isCharacter: function(code) {
    return (this.type == TOKEN_TYPE_CHARACTER && this._numValue == code);
  },
  isNumber: function() {
    return (this.type == TOKEN_TYPE_NUMBER);
  },
  isString: function() {
    return (this.type == TOKEN_TYPE_STRING);
  },
  isOperator: function(operater) {
    return (this.type == TOKEN_TYPE_OPERATOR && this._strValue == operater);
  },
  isIdentifier: function() {
    return (this.type == TOKEN_TYPE_IDENTIFIER);
  },
  isKeyword: function() {
    return (this.type == TOKEN_TYPE_KEYWORD);
  },
  isKeywordVar: function() {
    return (this.type == TOKEN_TYPE_KEYWORD && this._strValue == "var");
  },
  isKeywordNull: function() {
    return (this.type == TOKEN_TYPE_KEYWORD && this._strValue == "null");
  },
  isKeywordUndefined: function() {
    return (this.type == TOKEN_TYPE_KEYWORD && this._strValue == "undefined");
  },
  isKeywordTrue: function() {
    return (this.type == TOKEN_TYPE_KEYWORD && this._strValue == "true");
  },
  isKeywordFalse: function() {
    return (this.type == TOKEN_TYPE_KEYWORD && this._strValue == "false");
  },
  toNumber: function() {
    return (this.type == TOKEN_TYPE_NUMBER) ? this._numValue : -1;
  },
  toString: function() {
    var type = this.type;
    if (type >= TOKEN_TYPE_CHARACTER && type <= TOKEN_TYPE_STRING) {
      return this._strValue;
    } else if (type == TOKEN_TYPE_NUMBER) {
      return this._numValue.toString();
    } else {
      return null;
    }
  }
}, {});
Object.defineProperty(Token, "parameters", {get: function() {
    return [[int], [int], [$traceurRuntime.type.number], [$traceurRuntime.type.string]];
  }});
Object.defineProperty(Token.prototype.isCharacter, "parameters", {get: function() {
    return [[int]];
  }});
Object.defineProperty(Token.prototype.isOperator, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
function newCharacterToken(index, code) {
  return new Token(index, TOKEN_TYPE_CHARACTER, code, StringWrapper.fromCharCode(code));
}
Object.defineProperty(newCharacterToken, "parameters", {get: function() {
    return [[int], [int]];
  }});
function newIdentifierToken(index, text) {
  return new Token(index, TOKEN_TYPE_IDENTIFIER, 0, text);
}
Object.defineProperty(newIdentifierToken, "parameters", {get: function() {
    return [[int], [$traceurRuntime.type.string]];
  }});
function newKeywordToken(index, text) {
  return new Token(index, TOKEN_TYPE_KEYWORD, 0, text);
}
Object.defineProperty(newKeywordToken, "parameters", {get: function() {
    return [[int], [$traceurRuntime.type.string]];
  }});
function newOperatorToken(index, text) {
  return new Token(index, TOKEN_TYPE_OPERATOR, 0, text);
}
Object.defineProperty(newOperatorToken, "parameters", {get: function() {
    return [[int], [$traceurRuntime.type.string]];
  }});
function newStringToken(index, text) {
  return new Token(index, TOKEN_TYPE_STRING, 0, text);
}
Object.defineProperty(newStringToken, "parameters", {get: function() {
    return [[int], [$traceurRuntime.type.string]];
  }});
function newNumberToken(index, n) {
  return new Token(index, TOKEN_TYPE_NUMBER, n, "");
}
Object.defineProperty(newNumberToken, "parameters", {get: function() {
    return [[int], [$traceurRuntime.type.number]];
  }});
var EOF = new Token(-1, 0, 0, "");
var $EOF = 0;
var $TAB = 9;
var $LF = 10;
var $VTAB = 11;
var $FF = 12;
var $CR = 13;
var $SPACE = 32;
var $BANG = 33;
var $DQ = 34;
var $HASH = 35;
var $$ = 36;
var $PERCENT = 37;
var $AMPERSAND = 38;
var $SQ = 39;
var $LPAREN = 40;
var $RPAREN = 41;
var $STAR = 42;
var $PLUS = 43;
var $COMMA = 44;
var $MINUS = 45;
var $PERIOD = 46;
var $SLASH = 47;
var $COLON = 58;
var $SEMICOLON = 59;
var $LT = 60;
var $EQ = 61;
var $GT = 62;
var $QUESTION = 63;
var $0 = 48;
var $9 = 57;
var $A = 65,
    $B = 66,
    $C = 67,
    $D = 68,
    $E = 69,
    $F = 70,
    $G = 71,
    $H = 72,
    $I = 73,
    $J = 74,
    $K = 75,
    $L = 76,
    $M = 77,
    $N = 78,
    $O = 79,
    $P = 80,
    $Q = 81,
    $R = 82,
    $S = 83,
    $T = 84,
    $U = 85,
    $V = 86,
    $W = 87,
    $X = 88,
    $Y = 89,
    $Z = 90;
var $LBRACKET = 91;
var $BACKSLASH = 92;
var $RBRACKET = 93;
var $CARET = 94;
var $_ = 95;
var $a = 97,
    $b = 98,
    $c = 99,
    $d = 100,
    $e = 101,
    $f = 102,
    $g = 103,
    $h = 104,
    $i = 105,
    $j = 106,
    $k = 107,
    $l = 108,
    $m = 109,
    $n = 110,
    $o = 111,
    $p = 112,
    $q = 113,
    $r = 114,
    $s = 115,
    $t = 116,
    $u = 117,
    $v = 118,
    $w = 119,
    $x = 120,
    $y = 121,
    $z = 122;
var $LBRACE = 123;
var $BAR = 124;
var $RBRACE = 125;
var $TILDE = 126;
var $NBSP = 160;
var ScannerError = function ScannerError(message) {
  $traceurRuntime.superConstructor($ScannerError).call(this);
  this.message = message;
};
var $ScannerError = ScannerError;
($traceurRuntime.createClass)(ScannerError, {toString: function() {
    return this.message;
  }}, {}, Error);
var _Scanner = function _Scanner(input) {
  this.input = input;
  this.length = input.length;
  this.peek = 0;
  this.index = -1;
  this.advance();
};
($traceurRuntime.createClass)(_Scanner, {
  advance: function() {
    this.peek = ++this.index >= this.length ? $EOF : StringWrapper.charCodeAt(this.input, this.index);
  },
  scanToken: function() {
    var input = this.input,
        length = this.length,
        peek = this.peek,
        index = this.index;
    while (peek <= $SPACE) {
      if (++index >= length) {
        peek = $EOF;
        break;
      } else {
        peek = StringWrapper.charCodeAt(input, index);
      }
    }
    this.peek = peek;
    this.index = index;
    if (index >= length) {
      return null;
    }
    if (isIdentifierStart(peek))
      return this.scanIdentifier();
    if (isDigit(peek))
      return this.scanNumber(index);
    var start = index;
    switch (peek) {
      case $PERIOD:
        this.advance();
        return isDigit(this.peek) ? this.scanNumber(start) : newCharacterToken(start, $PERIOD);
      case $LPAREN:
      case $RPAREN:
      case $LBRACE:
      case $RBRACE:
      case $LBRACKET:
      case $RBRACKET:
      case $COMMA:
      case $COLON:
      case $SEMICOLON:
        return this.scanCharacter(start, peek);
      case $SQ:
      case $DQ:
        return this.scanString();
      case $HASH:
        return this.scanOperator(start, StringWrapper.fromCharCode(peek));
      case $PLUS:
      case $MINUS:
      case $STAR:
      case $SLASH:
      case $PERCENT:
      case $CARET:
      case $QUESTION:
        return this.scanOperator(start, StringWrapper.fromCharCode(peek));
      case $LT:
      case $GT:
      case $BANG:
      case $EQ:
        return this.scanComplexOperator(start, $EQ, StringWrapper.fromCharCode(peek), '=');
      case $AMPERSAND:
        return this.scanComplexOperator(start, $AMPERSAND, '&', '&');
      case $BAR:
        return this.scanComplexOperator(start, $BAR, '|', '|');
      case $TILDE:
        return this.scanComplexOperator(start, $SLASH, '~', '/');
      case $NBSP:
        while (isWhitespace(this.peek))
          this.advance();
        return this.scanToken();
    }
    this.error(("Unexpected character [" + StringWrapper.fromCharCode(peek) + "]"), 0);
    return null;
  },
  scanCharacter: function(start, code) {
    assert(this.peek == code);
    this.advance();
    return newCharacterToken(start, code);
  },
  scanOperator: function(start, str) {
    assert(this.peek == StringWrapper.charCodeAt(str, 0));
    assert(SetWrapper.has(OPERATORS, str));
    this.advance();
    return newOperatorToken(start, str);
  },
  scanComplexOperator: function(start, code, one, two) {
    assert(this.peek == StringWrapper.charCodeAt(one, 0));
    this.advance();
    var str = one;
    if (this.peek == code) {
      this.advance();
      str += two;
    }
    assert(SetWrapper.has(OPERATORS, str));
    return newOperatorToken(start, str);
  },
  scanIdentifier: function() {
    assert(isIdentifierStart(this.peek));
    var start = this.index;
    this.advance();
    while (isIdentifierPart(this.peek))
      this.advance();
    var str = this.input.substring(start, this.index);
    if (SetWrapper.has(KEYWORDS, str)) {
      return newKeywordToken(start, str);
    } else {
      return newIdentifierToken(start, str);
    }
  },
  scanNumber: function(start) {
    assert(isDigit(this.peek));
    var simple = (this.index === start);
    this.advance();
    while (true) {
      if (isDigit(this.peek)) {} else if (this.peek == $PERIOD) {
        simple = false;
      } else if (isExponentStart(this.peek)) {
        this.advance();
        if (isExponentSign(this.peek))
          this.advance();
        if (!isDigit(this.peek))
          this.error('Invalid exponent', -1);
        simple = false;
      } else {
        break;
      }
      this.advance();
    }
    var str = this.input.substring(start, this.index);
    var value = simple ? NumberWrapper.parseIntAutoRadix(str) : NumberWrapper.parseFloat(str);
    return newNumberToken(start, value);
  },
  scanString: function() {
    assert(this.peek == $SQ || this.peek == $DQ);
    var start = this.index;
    var quote = this.peek;
    this.advance();
    var buffer;
    var marker = this.index;
    var input = this.input;
    while (this.peek != quote) {
      if (this.peek == $BACKSLASH) {
        if (buffer == null)
          buffer = new StringJoiner();
        buffer.add(input.substring(marker, this.index));
        this.advance();
        var unescapedCode = void 0;
        if (this.peek == $u) {
          var hex = input.substring(this.index + 1, this.index + 5);
          try {
            unescapedCode = NumberWrapper.parseInt(hex, 16);
          } catch (e) {
            this.error(("Invalid unicode escape [\\u" + hex + "]"), 0);
          }
          for (var i = 0; i < 5; i++) {
            this.advance();
          }
        } else {
          unescapedCode = unescape(this.peek);
          this.advance();
        }
        buffer.add(StringWrapper.fromCharCode(unescapedCode));
        marker = this.index;
      } else if (this.peek == $EOF) {
        this.error('Unterminated quote', 0);
      } else {
        this.advance();
      }
    }
    var last = input.substring(marker, this.index);
    this.advance();
    var unescaped = last;
    if (buffer != null) {
      buffer.add(last);
      unescaped = buffer.toString();
    }
    return newStringToken(start, unescaped);
  },
  error: function(message, offset) {
    var position = this.index + offset;
    throw new ScannerError(("Lexer Error: " + message + " at column " + position + " in expression [" + this.input + "]"));
  }
}, {});
Object.defineProperty(_Scanner, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
Object.defineProperty(_Scanner.prototype.scanCharacter, "parameters", {get: function() {
    return [[int], [int]];
  }});
Object.defineProperty(_Scanner.prototype.scanOperator, "parameters", {get: function() {
    return [[int], [$traceurRuntime.type.string]];
  }});
Object.defineProperty(_Scanner.prototype.scanComplexOperator, "parameters", {get: function() {
    return [[int], [int], [$traceurRuntime.type.string], [$traceurRuntime.type.string]];
  }});
Object.defineProperty(_Scanner.prototype.scanNumber, "parameters", {get: function() {
    return [[int]];
  }});
Object.defineProperty(_Scanner.prototype.error, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [int]];
  }});
function isWhitespace(code) {
  return (code >= $TAB && code <= $SPACE) || (code == $NBSP);
}
Object.defineProperty(isWhitespace, "parameters", {get: function() {
    return [[int]];
  }});
function isIdentifierStart(code) {
  return ($a <= code && code <= $z) || ($A <= code && code <= $Z) || (code == $_) || (code == $$);
}
Object.defineProperty(isIdentifierStart, "parameters", {get: function() {
    return [[int]];
  }});
function isIdentifierPart(code) {
  return ($a <= code && code <= $z) || ($A <= code && code <= $Z) || ($0 <= code && code <= $9) || (code == $_) || (code == $$);
}
Object.defineProperty(isIdentifierPart, "parameters", {get: function() {
    return [[int]];
  }});
function isDigit(code) {
  return $0 <= code && code <= $9;
}
Object.defineProperty(isDigit, "parameters", {get: function() {
    return [[int]];
  }});
function isExponentStart(code) {
  return code == $e || code == $E;
}
Object.defineProperty(isExponentStart, "parameters", {get: function() {
    return [[int]];
  }});
function isExponentSign(code) {
  return code == $MINUS || code == $PLUS;
}
Object.defineProperty(isExponentSign, "parameters", {get: function() {
    return [[int]];
  }});
function unescape(code) {
  switch (code) {
    case $n:
      return $LF;
    case $f:
      return $FF;
    case $r:
      return $CR;
    case $t:
      return $TAB;
    case $v:
      return $VTAB;
    default:
      return code;
  }
}
Object.defineProperty(unescape, "parameters", {get: function() {
    return [[int]];
  }});
var OPERATORS = SetWrapper.createFromList(['+', '-', '*', '/', '~/', '%', '^', '=', '==', '!=', '<', '>', '<=', '>=', '&&', '||', '&', '|', '!', '?', '#']);
var KEYWORDS = SetWrapper.createFromList(['var', 'null', 'undefined', 'true', 'false']);
//# sourceMappingURL=lexer.js.map

//# sourceMappingURL=./lexer.map