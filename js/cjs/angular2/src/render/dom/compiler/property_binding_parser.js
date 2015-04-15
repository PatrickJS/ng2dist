"use strict";
Object.defineProperties(module.exports, {
  PropertyBindingParser: {get: function() {
      return PropertyBindingParser;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_change_95_detection__,
    $__compile_95_step__,
    $__compile_95_element__,
    $__compile_95_control__,
    $___46__46__47_util__;
var $__0 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isPresent = $__0.isPresent,
    RegExpWrapper = $__0.RegExpWrapper;
var MapWrapper = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).MapWrapper;
var Parser = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}).Parser;
var CompileStep = ($__compile_95_step__ = require("./compile_step"), $__compile_95_step__ && $__compile_95_step__.__esModule && $__compile_95_step__ || {default: $__compile_95_step__}).CompileStep;
var CompileElement = ($__compile_95_element__ = require("./compile_element"), $__compile_95_element__ && $__compile_95_element__.__esModule && $__compile_95_element__ || {default: $__compile_95_element__}).CompileElement;
var CompileControl = ($__compile_95_control__ = require("./compile_control"), $__compile_95_control__ && $__compile_95_control__.__esModule && $__compile_95_control__ || {default: $__compile_95_control__}).CompileControl;
var dashCaseToCamelCase = ($___46__46__47_util__ = require("../util"), $___46__46__47_util__ && $___46__46__47_util__.__esModule && $___46__46__47_util__ || {default: $___46__46__47_util__}).dashCaseToCamelCase;
var BIND_NAME_REGEXP = RegExpWrapper.create('^(?:(?:(?:(bind-)|(var-|#)|(on-))(.+))|\\[([^\\]]+)\\]|\\(([^\\)]+)\\))$');
var PropertyBindingParser = function PropertyBindingParser(parser) {
  $traceurRuntime.superConstructor($PropertyBindingParser).call(this);
  this._parser = parser;
};
var $PropertyBindingParser = PropertyBindingParser;
($traceurRuntime.createClass)(PropertyBindingParser, {
  process: function(parent, current, control) {
    var $__7 = this;
    var attrs = current.attrs();
    var newAttrs = MapWrapper.create();
    MapWrapper.forEach(attrs, (function(attrValue, attrName) {
      var bindParts = RegExpWrapper.firstMatch(BIND_NAME_REGEXP, attrName);
      if (isPresent(bindParts)) {
        if (isPresent(bindParts[1])) {
          $__7._bindProperty(bindParts[4], attrValue, current, newAttrs);
        } else if (isPresent(bindParts[2])) {
          var identifier = bindParts[4];
          var value = attrValue == '' ? '\$implicit' : attrValue;
          $__7._bindVariable(identifier, value, current, newAttrs);
        } else if (isPresent(bindParts[3])) {
          $__7._bindEvent(bindParts[4], attrValue, current, newAttrs);
        } else if (isPresent(bindParts[5])) {
          $__7._bindProperty(bindParts[5], attrValue, current, newAttrs);
        } else if (isPresent(bindParts[6])) {
          $__7._bindEvent(bindParts[6], attrValue, current, newAttrs);
        }
      } else {
        var expr = $__7._parser.parseInterpolation(attrValue, current.elementDescription);
        if (isPresent(expr)) {
          $__7._bindPropertyAst(attrName, expr, current, newAttrs);
        }
      }
    }));
    MapWrapper.forEach(newAttrs, (function(attrValue, attrName) {
      MapWrapper.set(attrs, attrName, attrValue);
    }));
  },
  _bindVariable: function(identifier, value, current, newAttrs) {
    current.bindElement().bindVariable(dashCaseToCamelCase(identifier), value);
    MapWrapper.set(newAttrs, identifier, value);
  },
  _bindProperty: function(name, expression, current, newAttrs) {
    this._bindPropertyAst(name, this._parser.parseBinding(expression, current.elementDescription), current, newAttrs);
  },
  _bindPropertyAst: function(name, ast, current, newAttrs) {
    var binder = current.bindElement();
    var camelCaseName = dashCaseToCamelCase(name);
    binder.bindProperty(camelCaseName, ast);
    MapWrapper.set(newAttrs, name, ast.source);
  },
  _bindEvent: function(name, expression, current, newAttrs) {
    current.bindElement().bindEvent(dashCaseToCamelCase(name), this._parser.parseAction(expression, current.elementDescription));
  }
}, {}, CompileStep);
Object.defineProperty(PropertyBindingParser, "parameters", {get: function() {
    return [[Parser]];
  }});
Object.defineProperty(PropertyBindingParser.prototype.process, "parameters", {get: function() {
    return [[CompileElement], [CompileElement], [CompileControl]];
  }});
Object.defineProperty(PropertyBindingParser.prototype._bindVariable, "parameters", {get: function() {
    return [[], [], [CompileElement], []];
  }});
Object.defineProperty(PropertyBindingParser.prototype._bindProperty, "parameters", {get: function() {
    return [[], [], [CompileElement], []];
  }});
Object.defineProperty(PropertyBindingParser.prototype._bindPropertyAst, "parameters", {get: function() {
    return [[], [], [CompileElement], []];
  }});
Object.defineProperty(PropertyBindingParser.prototype._bindEvent, "parameters", {get: function() {
    return [[], [], [CompileElement], []];
  }});
//# sourceMappingURL=property_binding_parser.js.map

//# sourceMappingURL=./property_binding_parser.map