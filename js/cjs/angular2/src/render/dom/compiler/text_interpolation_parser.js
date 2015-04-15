"use strict";
Object.defineProperties(module.exports, {
  TextInterpolationParser: {get: function() {
      return TextInterpolationParser;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_change_95_detection__,
    $__compile_95_step__,
    $__compile_95_element__,
    $__compile_95_control__;
var $__0 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    RegExpWrapper = $__0.RegExpWrapper,
    StringWrapper = $__0.StringWrapper,
    isPresent = $__0.isPresent;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var Parser = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}).Parser;
var CompileStep = ($__compile_95_step__ = require("./compile_step"), $__compile_95_step__ && $__compile_95_step__.__esModule && $__compile_95_step__ || {default: $__compile_95_step__}).CompileStep;
var CompileElement = ($__compile_95_element__ = require("./compile_element"), $__compile_95_element__ && $__compile_95_element__.__esModule && $__compile_95_element__ || {default: $__compile_95_element__}).CompileElement;
var CompileControl = ($__compile_95_control__ = require("./compile_control"), $__compile_95_control__ && $__compile_95_control__.__esModule && $__compile_95_control__ || {default: $__compile_95_control__}).CompileControl;
var TextInterpolationParser = function TextInterpolationParser(parser) {
  $traceurRuntime.superConstructor($TextInterpolationParser).call(this);
  this._parser = parser;
};
var $TextInterpolationParser = TextInterpolationParser;
($traceurRuntime.createClass)(TextInterpolationParser, {process: function(parent, current, control) {
    if (!current.compileChildren) {
      return ;
    }
    var element = current.element;
    var childNodes = DOM.childNodes(DOM.templateAwareRoot(element));
    for (var i = 0; i < childNodes.length; i++) {
      var node = childNodes[i];
      if (DOM.isTextNode(node)) {
        var text = DOM.nodeValue(node);
        var expr = this._parser.parseInterpolation(text, current.elementDescription);
        if (isPresent(expr)) {
          DOM.setText(node, ' ');
          current.bindElement().bindText(i, expr);
        }
      }
    }
  }}, {}, CompileStep);
Object.defineProperty(TextInterpolationParser, "parameters", {get: function() {
    return [[Parser]];
  }});
Object.defineProperty(TextInterpolationParser.prototype.process, "parameters", {get: function() {
    return [[CompileElement], [CompileElement], [CompileControl]];
  }});
//# sourceMappingURL=text_interpolation_parser.js.map

//# sourceMappingURL=./text_interpolation_parser.map