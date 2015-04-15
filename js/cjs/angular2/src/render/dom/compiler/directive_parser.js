"use strict";
Object.defineProperties(module.exports, {
  DirectiveParser: {get: function() {
      return DirectiveParser;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_change_95_detection__,
    $__angular2_47_src_47_render_47_dom_47_compiler_47_selector__,
    $__compile_95_step__,
    $__compile_95_element__,
    $__compile_95_control__,
    $___46__46__47__46__46__47_api__,
    $___46__46__47_util__;
var $__0 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isPresent = $__0.isPresent,
    isBlank = $__0.isBlank,
    BaseException = $__0.BaseException,
    assertionsEnabled = $__0.assertionsEnabled,
    RegExpWrapper = $__0.RegExpWrapper,
    StringWrapper = $__0.StringWrapper;
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__1.List,
    MapWrapper = $__1.MapWrapper,
    ListWrapper = $__1.ListWrapper;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var Parser = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}).Parser;
var $__4 = ($__angular2_47_src_47_render_47_dom_47_compiler_47_selector__ = require("angular2/src/render/dom/compiler/selector"), $__angular2_47_src_47_render_47_dom_47_compiler_47_selector__ && $__angular2_47_src_47_render_47_dom_47_compiler_47_selector__.__esModule && $__angular2_47_src_47_render_47_dom_47_compiler_47_selector__ || {default: $__angular2_47_src_47_render_47_dom_47_compiler_47_selector__}),
    SelectorMatcher = $__4.SelectorMatcher,
    CssSelector = $__4.CssSelector;
var CompileStep = ($__compile_95_step__ = require("./compile_step"), $__compile_95_step__ && $__compile_95_step__.__esModule && $__compile_95_step__ || {default: $__compile_95_step__}).CompileStep;
var CompileElement = ($__compile_95_element__ = require("./compile_element"), $__compile_95_element__ && $__compile_95_element__.__esModule && $__compile_95_element__ || {default: $__compile_95_element__}).CompileElement;
var CompileControl = ($__compile_95_control__ = require("./compile_control"), $__compile_95_control__ && $__compile_95_control__.__esModule && $__compile_95_control__ || {default: $__compile_95_control__}).CompileControl;
var DirectiveMetadata = ($___46__46__47__46__46__47_api__ = require("../../api"), $___46__46__47__46__46__47_api__ && $___46__46__47__46__46__47_api__.__esModule && $___46__46__47__46__46__47_api__ || {default: $___46__46__47__46__46__47_api__}).DirectiveMetadata;
var $__9 = ($___46__46__47_util__ = require("../util"), $___46__46__47_util__ && $___46__46__47_util__.__esModule && $___46__46__47_util__ || {default: $___46__46__47_util__}),
    dashCaseToCamelCase = $__9.dashCaseToCamelCase,
    camelCaseToDashCase = $__9.camelCaseToDashCase,
    EVENT_TARGET_SEPARATOR = $__9.EVENT_TARGET_SEPARATOR;
var DirectiveParser = function DirectiveParser(parser, directives) {
  $traceurRuntime.superConstructor($DirectiveParser).call(this);
  this._parser = parser;
  this._selectorMatcher = new SelectorMatcher();
  this._directives = directives;
  for (var i = 0; i < directives.length; i++) {
    var selector = CssSelector.parse(directives[i].selector);
    this._selectorMatcher.addSelectables(selector, i);
  }
};
var $DirectiveParser = DirectiveParser;
($traceurRuntime.createClass)(DirectiveParser, {
  process: function(parent, current, control) {
    var $__10 = this;
    var attrs = current.attrs();
    var classList = current.classList();
    var cssSelector = new CssSelector();
    var nodeName = DOM.nodeName(current.element);
    cssSelector.setElement(nodeName);
    for (var i = 0; i < classList.length; i++) {
      cssSelector.addClassName(classList[i]);
    }
    MapWrapper.forEach(attrs, (function(attrValue, attrName) {
      cssSelector.addAttribute(attrName, attrValue);
    }));
    var viewportDirective;
    var componentDirective;
    var isTemplateElement = DOM.isTemplateElement(current.element);
    this._selectorMatcher.match(cssSelector, (function(selector, directiveIndex) {
      var elementBinder = current.bindElement();
      var directive = $__10._directives[directiveIndex];
      var directiveBinder = elementBinder.bindDirective(directiveIndex);
      current.compileChildren = current.compileChildren && directive.compileChildren;
      if (isPresent(directive.properties)) {
        MapWrapper.forEach(directive.properties, (function(bindConfig, dirProperty) {
          $__10._bindDirectiveProperty(dirProperty, bindConfig, current, directiveBinder);
        }));
      }
      if (isPresent(directive.hostListeners)) {
        MapWrapper.forEach(directive.hostListeners, (function(action, eventName) {
          $__10._bindDirectiveEvent(eventName, action, current, directiveBinder);
        }));
      }
      if (isPresent(directive.setters)) {
        ListWrapper.forEach(directive.setters, (function(propertyName) {
          elementBinder.bindPropertySetter(propertyName);
        }));
      }
      if (isPresent(directive.readAttributes)) {
        ListWrapper.forEach(directive.readAttributes, (function(attrName) {
          elementBinder.readAttribute(attrName);
        }));
      }
      if (directive.type === DirectiveMetadata.VIEWPORT_TYPE) {
        if (!isTemplateElement) {
          throw new BaseException("Viewport directives need to be placed on <template> elements or elements " + ("with template attribute - check " + current.elementDescription));
        }
        if (isPresent(viewportDirective)) {
          throw new BaseException(("Only one viewport directive is allowed per element - check " + current.elementDescription));
        }
        viewportDirective = directive;
      } else {
        if (isTemplateElement) {
          throw new BaseException(("Only template directives are allowed on template elements - check " + current.elementDescription));
        }
        if (directive.type === DirectiveMetadata.COMPONENT_TYPE) {
          if (isPresent(componentDirective)) {
            throw new BaseException(("Only one component directive is allowed per element - check " + current.elementDescription));
          }
          componentDirective = directive;
          elementBinder.setComponentId(directive.id);
        }
      }
    }));
  },
  _bindDirectiveProperty: function(dirProperty, bindConfig, compileElement, directiveBinder) {
    var pipes = this._splitBindConfig(bindConfig);
    var elProp = ListWrapper.removeAt(pipes, 0);
    var bindingAst = MapWrapper.get(compileElement.bindElement().propertyBindings, dashCaseToCamelCase(elProp));
    if (isBlank(bindingAst)) {
      var attributeValue = MapWrapper.get(compileElement.attrs(), camelCaseToDashCase(elProp));
      if (isPresent(attributeValue)) {
        bindingAst = this._parser.wrapLiteralPrimitive(attributeValue, compileElement.elementDescription);
      }
    }
    if (isPresent(bindingAst)) {
      var fullExpAstWithBindPipes = this._parser.addPipes(bindingAst, pipes);
      directiveBinder.bindProperty(dirProperty, fullExpAstWithBindPipes);
    }
  },
  _bindDirectiveEvent: function(eventName, action, compileElement, directiveBinder) {
    var ast = this._parser.parseAction(action, compileElement.elementDescription);
    if (StringWrapper.contains(eventName, EVENT_TARGET_SEPARATOR)) {
      var parts = eventName.split(EVENT_TARGET_SEPARATOR);
      directiveBinder.bindEvent(parts[1], ast, parts[0]);
    } else {
      directiveBinder.bindEvent(eventName, ast);
    }
  },
  _splitBindConfig: function(bindConfig) {
    return ListWrapper.map(bindConfig.split('|'), (function(s) {
      return s.trim();
    }));
  }
}, {}, CompileStep);
Object.defineProperty(DirectiveParser, "parameters", {get: function() {
    return [[Parser], [$traceurRuntime.genericType(List, DirectiveMetadata)]];
  }});
Object.defineProperty(DirectiveParser.prototype.process, "parameters", {get: function() {
    return [[CompileElement], [CompileElement], [CompileControl]];
  }});
Object.defineProperty(DirectiveParser.prototype._splitBindConfig, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
//# sourceMappingURL=directive_parser.js.map

//# sourceMappingURL=./directive_parser.map