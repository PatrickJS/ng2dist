"use strict";
Object.defineProperties(module.exports, {
  TemplateResolver: {get: function() {
      return TemplateResolver;
    }},
  __esModule: {value: true}
});
var $__angular2_47_di__,
    $__angular2_47_src_47_core_47_annotations_47_view__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_reflection_47_reflection__;
var Injectable = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}).Injectable;
var View = ($__angular2_47_src_47_core_47_annotations_47_view__ = require("angular2/src/core/annotations/view"), $__angular2_47_src_47_core_47_annotations_47_view__ && $__angular2_47_src_47_core_47_annotations_47_view__.__esModule && $__angular2_47_src_47_core_47_annotations_47_view__ || {default: $__angular2_47_src_47_core_47_annotations_47_view__}).View;
var $__2 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    Type = $__2.Type,
    stringify = $__2.stringify,
    isBlank = $__2.isBlank,
    BaseException = $__2.BaseException;
var $__3 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    Map = $__3.Map,
    MapWrapper = $__3.MapWrapper,
    List = $__3.List,
    ListWrapper = $__3.ListWrapper;
var reflector = ($__angular2_47_src_47_reflection_47_reflection__ = require("angular2/src/reflection/reflection"), $__angular2_47_src_47_reflection_47_reflection__ && $__angular2_47_src_47_reflection_47_reflection__.__esModule && $__angular2_47_src_47_reflection_47_reflection__ || {default: $__angular2_47_src_47_reflection_47_reflection__}).reflector;
var TemplateResolver = function TemplateResolver() {
  this._cache = MapWrapper.create();
};
($traceurRuntime.createClass)(TemplateResolver, {
  resolve: function(component) {
    var view = MapWrapper.get(this._cache, component);
    if (isBlank(view)) {
      view = this._resolve(component);
      MapWrapper.set(this._cache, component, view);
    }
    return view;
  },
  _resolve: function(component) {
    var annotations = reflector.annotations(component);
    for (var i = 0; i < annotations.length; i++) {
      var annotation = annotations[i];
      if (annotation instanceof View) {
        return annotation;
      }
    }
    throw new BaseException(("No template found for " + stringify(component)));
  }
}, {});
Object.defineProperty(TemplateResolver, "annotations", {get: function() {
    return [new Injectable()];
  }});
Object.defineProperty(TemplateResolver.prototype.resolve, "parameters", {get: function() {
    return [[Type]];
  }});
Object.defineProperty(TemplateResolver.prototype._resolve, "parameters", {get: function() {
    return [[Type]];
  }});
//# sourceMappingURL=template_resolver.js.map

//# sourceMappingURL=./template_resolver.map