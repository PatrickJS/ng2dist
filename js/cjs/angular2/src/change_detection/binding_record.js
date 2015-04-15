"use strict";
Object.defineProperties(module.exports, {
  BindingRecord: {get: function() {
      return BindingRecord;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_reflection_47_types__,
    $__parser_47_ast__,
    $__directive_95_record__;
var $__0 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isPresent = $__0.isPresent,
    isBlank = $__0.isBlank;
var SetterFn = ($__angular2_47_src_47_reflection_47_types__ = require("angular2/src/reflection/types"), $__angular2_47_src_47_reflection_47_types__ && $__angular2_47_src_47_reflection_47_types__.__esModule && $__angular2_47_src_47_reflection_47_types__ || {default: $__angular2_47_src_47_reflection_47_types__}).SetterFn;
var AST = ($__parser_47_ast__ = require("./parser/ast"), $__parser_47_ast__ && $__parser_47_ast__.__esModule && $__parser_47_ast__ || {default: $__parser_47_ast__}).AST;
var DirectiveRecord = ($__directive_95_record__ = require("./directive_record"), $__directive_95_record__ && $__directive_95_record__.__esModule && $__directive_95_record__ || {default: $__directive_95_record__}).DirectiveRecord;
var DIRECTIVE = "directive";
var ELEMENT = "element";
var TEXT_NODE = "textNode";
var BindingRecord = function BindingRecord(mode, ast, elementIndex, propertyName, setter, directiveRecord) {
  this.mode = mode;
  this.ast = ast;
  this.elementIndex = elementIndex;
  this.propertyName = propertyName;
  this.setter = setter;
  this.directiveRecord = directiveRecord;
};
var $BindingRecord = BindingRecord;
($traceurRuntime.createClass)(BindingRecord, {
  callOnChange: function() {
    return isPresent(this.directiveRecord) && this.directiveRecord.callOnChange;
  },
  isDirective: function() {
    return this.mode === DIRECTIVE;
  },
  isElement: function() {
    return this.mode === ELEMENT;
  },
  isTextNode: function() {
    return this.mode === TEXT_NODE;
  }
}, {
  createForDirective: function(ast, propertyName, setter, directiveRecord) {
    return new $BindingRecord(DIRECTIVE, ast, 0, propertyName, setter, directiveRecord);
  },
  createForElement: function(ast, elementIndex, propertyName) {
    return new $BindingRecord(ELEMENT, ast, elementIndex, propertyName, null, null);
  },
  createForTextNode: function(ast, elementIndex) {
    return new $BindingRecord(TEXT_NODE, ast, elementIndex, null, null, null);
  }
});
Object.defineProperty(BindingRecord, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [AST], [$traceurRuntime.type.number], [$traceurRuntime.type.string], [SetterFn], [DirectiveRecord]];
  }});
Object.defineProperty(BindingRecord.createForDirective, "parameters", {get: function() {
    return [[AST], [$traceurRuntime.type.string], [SetterFn], [DirectiveRecord]];
  }});
Object.defineProperty(BindingRecord.createForElement, "parameters", {get: function() {
    return [[AST], [$traceurRuntime.type.number], [$traceurRuntime.type.string]];
  }});
Object.defineProperty(BindingRecord.createForTextNode, "parameters", {get: function() {
    return [[AST], [$traceurRuntime.type.number]];
  }});
//# sourceMappingURL=binding_record.js.map

//# sourceMappingURL=./binding_record.map