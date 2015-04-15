"use strict";
Object.defineProperties(module.exports, {
  CompileStepFactory: {get: function() {
      return CompileStepFactory;
    }},
  DefaultStepFactory: {get: function() {
      return DefaultStepFactory;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_change_95_detection__,
    $___46__46__47__46__46__47_api__,
    $__compile_95_step__,
    $__property_95_binding_95_parser__,
    $__text_95_interpolation_95_parser__,
    $__directive_95_parser__,
    $__view_95_splitter__,
    $___46__46__47_shadow_95_dom_47_shadow_95_dom_95_compile_95_step__,
    $___46__46__47_shadow_95_dom_47_shadow_95_dom_95_strategy__;
var List = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).List;
var Promise = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}).Promise;
var Parser = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}).Parser;
var ViewDefinition = ($___46__46__47__46__46__47_api__ = require("../../api"), $___46__46__47__46__46__47_api__ && $___46__46__47__46__46__47_api__.__esModule && $___46__46__47__46__46__47_api__ || {default: $___46__46__47__46__46__47_api__}).ViewDefinition;
var CompileStep = ($__compile_95_step__ = require("./compile_step"), $__compile_95_step__ && $__compile_95_step__.__esModule && $__compile_95_step__ || {default: $__compile_95_step__}).CompileStep;
var PropertyBindingParser = ($__property_95_binding_95_parser__ = require("./property_binding_parser"), $__property_95_binding_95_parser__ && $__property_95_binding_95_parser__.__esModule && $__property_95_binding_95_parser__ || {default: $__property_95_binding_95_parser__}).PropertyBindingParser;
var TextInterpolationParser = ($__text_95_interpolation_95_parser__ = require("./text_interpolation_parser"), $__text_95_interpolation_95_parser__ && $__text_95_interpolation_95_parser__.__esModule && $__text_95_interpolation_95_parser__ || {default: $__text_95_interpolation_95_parser__}).TextInterpolationParser;
var DirectiveParser = ($__directive_95_parser__ = require("./directive_parser"), $__directive_95_parser__ && $__directive_95_parser__.__esModule && $__directive_95_parser__ || {default: $__directive_95_parser__}).DirectiveParser;
var ViewSplitter = ($__view_95_splitter__ = require("./view_splitter"), $__view_95_splitter__ && $__view_95_splitter__.__esModule && $__view_95_splitter__ || {default: $__view_95_splitter__}).ViewSplitter;
var ShadowDomCompileStep = ($___46__46__47_shadow_95_dom_47_shadow_95_dom_95_compile_95_step__ = require("../shadow_dom/shadow_dom_compile_step"), $___46__46__47_shadow_95_dom_47_shadow_95_dom_95_compile_95_step__ && $___46__46__47_shadow_95_dom_47_shadow_95_dom_95_compile_95_step__.__esModule && $___46__46__47_shadow_95_dom_47_shadow_95_dom_95_compile_95_step__ || {default: $___46__46__47_shadow_95_dom_47_shadow_95_dom_95_compile_95_step__}).ShadowDomCompileStep;
var ShadowDomStrategy = ($___46__46__47_shadow_95_dom_47_shadow_95_dom_95_strategy__ = require("../shadow_dom/shadow_dom_strategy"), $___46__46__47_shadow_95_dom_47_shadow_95_dom_95_strategy__ && $___46__46__47_shadow_95_dom_47_shadow_95_dom_95_strategy__.__esModule && $___46__46__47_shadow_95_dom_47_shadow_95_dom_95_strategy__ || {default: $___46__46__47_shadow_95_dom_47_shadow_95_dom_95_strategy__}).ShadowDomStrategy;
var CompileStepFactory = function CompileStepFactory() {
  ;
};
($traceurRuntime.createClass)(CompileStepFactory, {createSteps: function(template, subTaskPromises) {
    return null;
  }}, {});
Object.defineProperty(CompileStepFactory.prototype.createSteps, "parameters", {get: function() {
    return [[ViewDefinition], [$traceurRuntime.genericType(List, Promise)]];
  }});
var DefaultStepFactory = function DefaultStepFactory(parser, shadowDomStrategy) {
  $traceurRuntime.superConstructor($DefaultStepFactory).call(this);
  this._parser = parser;
  this._shadowDomStrategy = shadowDomStrategy;
};
var $DefaultStepFactory = DefaultStepFactory;
($traceurRuntime.createClass)(DefaultStepFactory, {createSteps: function(template, subTaskPromises) {
    return [new ViewSplitter(this._parser), new PropertyBindingParser(this._parser), new DirectiveParser(this._parser, template.directives), new TextInterpolationParser(this._parser), new ShadowDomCompileStep(this._shadowDomStrategy, template, subTaskPromises)];
  }}, {}, CompileStepFactory);
Object.defineProperty(DefaultStepFactory, "parameters", {get: function() {
    return [[Parser], []];
  }});
Object.defineProperty(DefaultStepFactory.prototype.createSteps, "parameters", {get: function() {
    return [[ViewDefinition], [$traceurRuntime.genericType(List, Promise)]];
  }});
//# sourceMappingURL=compile_step_factory.js.map

//# sourceMappingURL=./compile_step_factory.map