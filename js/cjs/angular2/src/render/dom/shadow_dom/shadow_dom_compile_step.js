"use strict";
Object.defineProperties(module.exports, {
  ShadowDomCompileStep: {get: function() {
      return ShadowDomCompileStep;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $___46__46__47_compiler_47_compile_95_step__,
    $___46__46__47_compiler_47_compile_95_element__,
    $___46__46__47_compiler_47_compile_95_control__,
    $___46__46__47__46__46__47_api__,
    $__shadow_95_dom_95_strategy__;
var $__0 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isBlank = $__0.isBlank,
    isPresent = $__0.isPresent,
    assertionsEnabled = $__0.assertionsEnabled;
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    MapWrapper = $__1.MapWrapper,
    List = $__1.List,
    ListWrapper = $__1.ListWrapper;
var $__2 = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
    Promise = $__2.Promise,
    PromiseWrapper = $__2.PromiseWrapper;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var CompileStep = ($___46__46__47_compiler_47_compile_95_step__ = require("../compiler/compile_step"), $___46__46__47_compiler_47_compile_95_step__ && $___46__46__47_compiler_47_compile_95_step__.__esModule && $___46__46__47_compiler_47_compile_95_step__ || {default: $___46__46__47_compiler_47_compile_95_step__}).CompileStep;
var CompileElement = ($___46__46__47_compiler_47_compile_95_element__ = require("../compiler/compile_element"), $___46__46__47_compiler_47_compile_95_element__ && $___46__46__47_compiler_47_compile_95_element__.__esModule && $___46__46__47_compiler_47_compile_95_element__ || {default: $___46__46__47_compiler_47_compile_95_element__}).CompileElement;
var CompileControl = ($___46__46__47_compiler_47_compile_95_control__ = require("../compiler/compile_control"), $___46__46__47_compiler_47_compile_95_control__ && $___46__46__47_compiler_47_compile_95_control__.__esModule && $___46__46__47_compiler_47_compile_95_control__ || {default: $___46__46__47_compiler_47_compile_95_control__}).CompileControl;
var ViewDefinition = ($___46__46__47__46__46__47_api__ = require("../../api"), $___46__46__47__46__46__47_api__ && $___46__46__47__46__46__47_api__.__esModule && $___46__46__47__46__46__47_api__ || {default: $___46__46__47__46__46__47_api__}).ViewDefinition;
var ShadowDomStrategy = ($__shadow_95_dom_95_strategy__ = require("./shadow_dom_strategy"), $__shadow_95_dom_95_strategy__ && $__shadow_95_dom_95_strategy__.__esModule && $__shadow_95_dom_95_strategy__ || {default: $__shadow_95_dom_95_strategy__}).ShadowDomStrategy;
var ShadowDomCompileStep = function ShadowDomCompileStep(shadowDomStrategy, template, subTaskPromises) {
  $traceurRuntime.superConstructor($ShadowDomCompileStep).call(this);
  this._shadowDomStrategy = shadowDomStrategy;
  this._template = template;
  this._subTaskPromises = subTaskPromises;
};
var $ShadowDomCompileStep = ShadowDomCompileStep;
($traceurRuntime.createClass)(ShadowDomCompileStep, {
  process: function(parent, current, control) {
    var tagName = DOM.tagName(current.element).toUpperCase();
    if (tagName == 'STYLE') {
      this._processStyleElement(current, control);
    } else if (tagName == 'CONTENT') {
      this._processContentElement(current);
    } else {
      var componentId = current.isBound() ? current.inheritedElementBinder.componentId : null;
      this._shadowDomStrategy.processElement(this._template.componentId, componentId, current.element);
    }
  },
  _processStyleElement: function(current, control) {
    var stylePromise = this._shadowDomStrategy.processStyleElement(this._template.componentId, this._template.absUrl, current.element);
    if (isPresent(stylePromise) && PromiseWrapper.isPromise(stylePromise)) {
      ListWrapper.push(this._subTaskPromises, stylePromise);
    }
    control.ignoreCurrentElement();
  },
  _processContentElement: function(current) {
    if (this._shadowDomStrategy.hasNativeContentElement()) {
      return ;
    }
    var attrs = current.attrs();
    var selector = MapWrapper.get(attrs, 'select');
    selector = isPresent(selector) ? selector : '';
    var contentStart = DOM.createScriptTag('type', 'ng/contentStart');
    if (assertionsEnabled()) {
      DOM.setAttribute(contentStart, 'select', selector);
    }
    var contentEnd = DOM.createScriptTag('type', 'ng/contentEnd');
    DOM.insertBefore(current.element, contentStart);
    DOM.insertBefore(current.element, contentEnd);
    DOM.remove(current.element);
    current.element = contentStart;
    current.bindElement().setContentTagSelector(selector);
  }
}, {}, CompileStep);
Object.defineProperty(ShadowDomCompileStep, "parameters", {get: function() {
    return [[ShadowDomStrategy], [ViewDefinition], [$traceurRuntime.genericType(List, Promise)]];
  }});
Object.defineProperty(ShadowDomCompileStep.prototype.process, "parameters", {get: function() {
    return [[CompileElement], [CompileElement], [CompileControl]];
  }});
Object.defineProperty(ShadowDomCompileStep.prototype._processStyleElement, "parameters", {get: function() {
    return [[CompileElement], [CompileControl]];
  }});
Object.defineProperty(ShadowDomCompileStep.prototype._processContentElement, "parameters", {get: function() {
    return [[CompileElement]];
  }});
//# sourceMappingURL=shadow_dom_compile_step.js.map

//# sourceMappingURL=./shadow_dom_compile_step.map