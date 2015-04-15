"use strict";
Object.defineProperties(module.exports, {
  ViewSplitter: {get: function() {
      return ViewSplitter;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_change_95_detection__,
    $__compile_95_step__,
    $__compile_95_element__,
    $__compile_95_control__,
    $___46__46__47_util__;
var $__0 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isBlank = $__0.isBlank,
    isPresent = $__0.isPresent,
    BaseException = $__0.BaseException,
    StringWrapper = $__0.StringWrapper;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    MapWrapper = $__2.MapWrapper,
    ListWrapper = $__2.ListWrapper;
var Parser = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}).Parser;
var CompileStep = ($__compile_95_step__ = require("./compile_step"), $__compile_95_step__ && $__compile_95_step__.__esModule && $__compile_95_step__ || {default: $__compile_95_step__}).CompileStep;
var CompileElement = ($__compile_95_element__ = require("./compile_element"), $__compile_95_element__ && $__compile_95_element__.__esModule && $__compile_95_element__ || {default: $__compile_95_element__}).CompileElement;
var CompileControl = ($__compile_95_control__ = require("./compile_control"), $__compile_95_control__ && $__compile_95_control__.__esModule && $__compile_95_control__ || {default: $__compile_95_control__}).CompileControl;
var dashCaseToCamelCase = ($___46__46__47_util__ = require("../util"), $___46__46__47_util__ && $___46__46__47_util__.__esModule && $___46__46__47_util__ || {default: $___46__46__47_util__}).dashCaseToCamelCase;
var ViewSplitter = function ViewSplitter(parser) {
  $traceurRuntime.superConstructor($ViewSplitter).call(this);
  this._parser = parser;
};
var $ViewSplitter = ViewSplitter;
($traceurRuntime.createClass)(ViewSplitter, {
  process: function(parent, current, control) {
    var attrs = current.attrs();
    var templateBindings = MapWrapper.get(attrs, 'template');
    var hasTemplateBinding = isPresent(templateBindings);
    MapWrapper.forEach(attrs, (function(attrValue, attrName) {
      if (StringWrapper.startsWith(attrName, '*')) {
        var key = StringWrapper.substring(attrName, 1);
        if (hasTemplateBinding) {
          throw new BaseException("Only one template directive per element is allowed: " + (templateBindings + " and " + key + " cannot be used simultaneously ") + ("in " + current.elementDescription));
        } else {
          templateBindings = (attrValue.length == 0) ? key : key + ' ' + attrValue;
          hasTemplateBinding = true;
        }
      }
    }));
    if (isPresent(parent)) {
      if (DOM.isTemplateElement(current.element)) {
        if (!current.isViewRoot) {
          var viewRoot = new CompileElement(DOM.createTemplate(''));
          viewRoot.inheritedProtoView = current.bindElement().bindNestedProtoView(viewRoot.element);
          viewRoot.elementDescription = current.elementDescription;
          viewRoot.isViewRoot = true;
          this._moveChildNodes(DOM.content(current.element), DOM.content(viewRoot.element));
          control.addChild(viewRoot);
        }
      }
      if (hasTemplateBinding) {
        var newParent = new CompileElement(DOM.createTemplate(''));
        newParent.inheritedProtoView = current.inheritedProtoView;
        newParent.inheritedElementBinder = current.inheritedElementBinder;
        newParent.distanceToInheritedBinder = current.distanceToInheritedBinder;
        newParent.elementDescription = current.elementDescription;
        current.inheritedProtoView = newParent.bindElement().bindNestedProtoView(current.element);
        current.inheritedElementBinder = null;
        current.distanceToInheritedBinder = 0;
        current.isViewRoot = true;
        this._parseTemplateBindings(templateBindings, newParent);
        this._addParentElement(current.element, newParent.element);
        control.addParent(newParent);
        DOM.remove(current.element);
      }
    }
  },
  _moveChildNodes: function(source, target) {
    var next = DOM.firstChild(source);
    while (isPresent(next)) {
      DOM.appendChild(target, next);
      next = DOM.firstChild(source);
    }
  },
  _addParentElement: function(currentElement, newParentElement) {
    DOM.insertBefore(currentElement, newParentElement);
    DOM.appendChild(newParentElement, currentElement);
  },
  _parseTemplateBindings: function(templateBindings, compileElement) {
    var bindings = this._parser.parseTemplateBindings(templateBindings, compileElement.elementDescription);
    for (var i = 0; i < bindings.length; i++) {
      var binding = bindings[i];
      if (binding.keyIsVar) {
        compileElement.bindElement().bindVariable(dashCaseToCamelCase(binding.key), binding.name);
        MapWrapper.set(compileElement.attrs(), binding.key, binding.name);
      } else if (isPresent(binding.expression)) {
        compileElement.bindElement().bindProperty(dashCaseToCamelCase(binding.key), binding.expression);
        MapWrapper.set(compileElement.attrs(), binding.key, binding.expression.source);
      } else {
        DOM.setAttribute(compileElement.element, binding.key, '');
      }
    }
  }
}, {}, CompileStep);
Object.defineProperty(ViewSplitter, "parameters", {get: function() {
    return [[Parser]];
  }});
Object.defineProperty(ViewSplitter.prototype.process, "parameters", {get: function() {
    return [[CompileElement], [CompileElement], [CompileControl]];
  }});
Object.defineProperty(ViewSplitter.prototype._parseTemplateBindings, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [CompileElement]];
  }});
//# sourceMappingURL=view_splitter.js.map

//# sourceMappingURL=./view_splitter.map