"use strict";
Object.defineProperties(module.exports, {
  MockTemplateResolver: {get: function() {
      return MockTemplateResolver;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_core_47_annotations_47_view__,
    $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__;
var $__0 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    Map = $__0.Map,
    MapWrapper = $__0.MapWrapper,
    ListWrapper = $__0.ListWrapper;
var $__1 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    Type = $__1.Type,
    isPresent = $__1.isPresent,
    BaseException = $__1.BaseException,
    stringify = $__1.stringify,
    isBlank = $__1.isBlank;
var View = ($__angular2_47_src_47_core_47_annotations_47_view__ = require("angular2/src/core/annotations/view"), $__angular2_47_src_47_core_47_annotations_47_view__ && $__angular2_47_src_47_core_47_annotations_47_view__.__esModule && $__angular2_47_src_47_core_47_annotations_47_view__ || {default: $__angular2_47_src_47_core_47_annotations_47_view__}).View;
var TemplateResolver = ($__angular2_47_src_47_core_47_compiler_47_template_95_resolver__ = require("angular2/src/core/compiler/template_resolver"), $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__ && $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__.__esModule && $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__ || {default: $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__}).TemplateResolver;
var MockTemplateResolver = function MockTemplateResolver() {
  $traceurRuntime.superConstructor($MockTemplateResolver).call(this);
  this._templates = MapWrapper.create();
  this._inlineTemplates = MapWrapper.create();
  this._templateCache = MapWrapper.create();
  this._directiveOverrides = MapWrapper.create();
};
var $MockTemplateResolver = MockTemplateResolver;
($traceurRuntime.createClass)(MockTemplateResolver, {
  setView: function(component, view) {
    this._checkOverrideable(component);
    MapWrapper.set(this._templates, component, view);
  },
  setInlineTemplate: function(component, template) {
    this._checkOverrideable(component);
    MapWrapper.set(this._inlineTemplates, component, template);
  },
  overrideTemplateDirective: function(component, from, to) {
    this._checkOverrideable(component);
    var overrides = MapWrapper.get(this._directiveOverrides, component);
    if (isBlank(overrides)) {
      overrides = MapWrapper.create();
      MapWrapper.set(this._directiveOverrides, component, overrides);
    }
    MapWrapper.set(overrides, from, to);
  },
  resolve: function(component) {
    var view = MapWrapper.get(this._templateCache, component);
    if (isPresent(view))
      return view;
    view = MapWrapper.get(this._templates, component);
    if (isBlank(view)) {
      view = $traceurRuntime.superGet(this, $MockTemplateResolver.prototype, "resolve").call(this, component);
    }
    var directives = view.directives;
    var overrides = MapWrapper.get(this._directiveOverrides, component);
    if (isPresent(overrides) && isPresent(directives)) {
      directives = ListWrapper.clone(view.directives);
      MapWrapper.forEach(overrides, (function(to, from) {
        var srcIndex = directives.indexOf(from);
        if (srcIndex == -1) {
          throw new BaseException(("Overriden directive " + stringify(from) + " not found in the template of " + stringify(component)));
        }
        directives[srcIndex] = to;
      }));
      view = new View({
        template: view.template,
        templateUrl: view.templateUrl,
        directives: directives,
        formatters: view.formatters,
        source: view.source,
        locale: view.locale,
        device: view.device
      });
    }
    var inlineTemplate = MapWrapper.get(this._inlineTemplates, component);
    if (isPresent(inlineTemplate)) {
      view = new View({
        template: inlineTemplate,
        templateUrl: null,
        directives: view.directives,
        formatters: view.formatters,
        source: view.source,
        locale: view.locale,
        device: view.device
      });
    }
    MapWrapper.set(this._templateCache, component, view);
    return view;
  },
  _checkOverrideable: function(component) {
    var cached = MapWrapper.get(this._templateCache, component);
    if (isPresent(cached)) {
      throw new BaseException(("The component " + stringify(component) + " has already been compiled, its configuration can not be changed"));
    }
  }
}, {}, TemplateResolver);
Object.defineProperty(MockTemplateResolver.prototype.setView, "parameters", {get: function() {
    return [[Type], [View]];
  }});
Object.defineProperty(MockTemplateResolver.prototype.setInlineTemplate, "parameters", {get: function() {
    return [[Type], [$traceurRuntime.type.string]];
  }});
Object.defineProperty(MockTemplateResolver.prototype.overrideTemplateDirective, "parameters", {get: function() {
    return [[Type], [Type], [Type]];
  }});
Object.defineProperty(MockTemplateResolver.prototype.resolve, "parameters", {get: function() {
    return [[Type]];
  }});
Object.defineProperty(MockTemplateResolver.prototype._checkOverrideable, "parameters", {get: function() {
    return [[Type]];
  }});
//# sourceMappingURL=template_resolver_mock.js.map

//# sourceMappingURL=./template_resolver_mock.map