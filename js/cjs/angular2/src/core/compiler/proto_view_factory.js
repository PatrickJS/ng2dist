"use strict";
Object.defineProperties(module.exports, {
  ProtoViewFactory: {get: function() {
      return ProtoViewFactory;
    }},
  __esModule: {value: true}
});
var $__angular2_47_di__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_reflection_47_reflection__,
    $__angular2_47_change_95_detection__,
    $___46__46__47_annotations_47_annotations__,
    $__angular2_47_src_47_render_47_api__,
    $__view__,
    $__element_95_injector__;
var Injectable = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}).Injectable;
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__1.List,
    ListWrapper = $__1.ListWrapper,
    MapWrapper = $__1.MapWrapper;
var $__2 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isPresent = $__2.isPresent,
    isBlank = $__2.isBlank;
var reflector = ($__angular2_47_src_47_reflection_47_reflection__ = require("angular2/src/reflection/reflection"), $__angular2_47_src_47_reflection_47_reflection__ && $__angular2_47_src_47_reflection_47_reflection__.__esModule && $__angular2_47_src_47_reflection_47_reflection__ || {default: $__angular2_47_src_47_reflection_47_reflection__}).reflector;
var ChangeDetection = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}).ChangeDetection;
var $__5 = ($___46__46__47_annotations_47_annotations__ = require("../annotations/annotations"), $___46__46__47_annotations_47_annotations__ && $___46__46__47_annotations_47_annotations__.__esModule && $___46__46__47_annotations_47_annotations__ || {default: $___46__46__47_annotations_47_annotations__}),
    Component = $__5.Component,
    Viewport = $__5.Viewport,
    DynamicComponent = $__5.DynamicComponent;
var renderApi = ($__angular2_47_src_47_render_47_api__ = require("angular2/src/render/api"), $__angular2_47_src_47_render_47_api__ && $__angular2_47_src_47_render_47_api__.__esModule && $__angular2_47_src_47_render_47_api__ || {default: $__angular2_47_src_47_render_47_api__});
var AppProtoView = ($__view__ = require("./view"), $__view__ && $__view__.__esModule && $__view__ || {default: $__view__}).AppProtoView;
var $__7 = ($__element_95_injector__ = require("./element_injector"), $__element_95_injector__ && $__element_95_injector__.__esModule && $__element_95_injector__ || {default: $__element_95_injector__}),
    ProtoElementInjector = $__7.ProtoElementInjector,
    DirectiveBinding = $__7.DirectiveBinding;
var ProtoViewFactory = function ProtoViewFactory(changeDetection, renderer) {
  this._changeDetection = changeDetection;
  this._renderer = renderer;
};
($traceurRuntime.createClass)(ProtoViewFactory, {
  createProtoView: function(componentBinding, renderProtoView, directives) {
    var protoChangeDetector;
    if (isBlank(componentBinding)) {
      protoChangeDetector = this._changeDetection.createProtoChangeDetector('root', null);
    } else {
      var componentAnnotation = componentBinding.annotation;
      protoChangeDetector = this._changeDetection.createProtoChangeDetector('dummy', componentAnnotation.changeDetection);
    }
    var protoView = new AppProtoView(this._renderer, renderProtoView.render, protoChangeDetector);
    for (var i = 0; i < renderProtoView.elementBinders.length; i++) {
      var renderElementBinder = renderProtoView.elementBinders[i];
      var sortedDirectives = new SortedDirectives(renderElementBinder.directives, directives);
      var parentPeiWithDistance = this._findParentProtoElementInjectorWithDistance(i, protoView.elementBinders, renderProtoView.elementBinders);
      var protoElementInjector = this._createProtoElementInjector(i, parentPeiWithDistance, sortedDirectives, renderElementBinder);
      this._createElementBinder(protoView, renderElementBinder, protoElementInjector, sortedDirectives);
      this._createDirectiveBinders(protoView, sortedDirectives);
    }
    MapWrapper.forEach(renderProtoView.variableBindings, (function(mappedName, varName) {
      protoView.bindVariable(varName, mappedName);
    }));
    return protoView;
  },
  _findParentProtoElementInjectorWithDistance: function(binderIndex, elementBinders, renderElementBinders) {
    var distance = 0;
    do {
      var renderElementBinder = renderElementBinders[binderIndex];
      binderIndex = renderElementBinder.parentIndex;
      if (binderIndex !== -1) {
        distance += renderElementBinder.distanceToParent;
        var elementBinder = elementBinders[binderIndex];
        if (isPresent(elementBinder.protoElementInjector)) {
          return new ParentProtoElementInjectorWithDistance(elementBinder.protoElementInjector, distance);
        }
      }
    } while (binderIndex !== -1);
    return new ParentProtoElementInjectorWithDistance(null, -1);
  },
  _createProtoElementInjector: function(binderIndex, parentPeiWithDistance, sortedDirectives, renderElementBinder) {
    var protoElementInjector = null;
    var hasVariables = MapWrapper.size(renderElementBinder.variableBindings) > 0;
    if (sortedDirectives.directives.length > 0 || hasVariables) {
      protoElementInjector = new ProtoElementInjector(parentPeiWithDistance.protoElementInjector, binderIndex, sortedDirectives.directives, isPresent(sortedDirectives.componentDirective), parentPeiWithDistance.distance);
      protoElementInjector.attributes = renderElementBinder.readAttributes;
      if (hasVariables && !isPresent(sortedDirectives.viewportDirective)) {
        protoElementInjector.exportComponent = isPresent(sortedDirectives.componentDirective);
        protoElementInjector.exportElement = isBlank(sortedDirectives.componentDirective);
        var exportImplicitName = MapWrapper.get(renderElementBinder.variableBindings, '\$implicit');
        if (isPresent(exportImplicitName)) {
          protoElementInjector.exportImplicitName = exportImplicitName;
        }
      }
    }
    return protoElementInjector;
  },
  _createElementBinder: function(protoView, renderElementBinder, protoElementInjector, sortedDirectives) {
    var parent = null;
    if (renderElementBinder.parentIndex !== -1) {
      parent = protoView.elementBinders[renderElementBinder.parentIndex];
    }
    var elBinder = protoView.bindElement(parent, renderElementBinder.distanceToParent, protoElementInjector, sortedDirectives.componentDirective, sortedDirectives.viewportDirective);
    for (var i = 0; i < renderElementBinder.textBindings.length; i++) {
      protoView.bindTextNode(renderElementBinder.textBindings[i].ast);
    }
    MapWrapper.forEach(renderElementBinder.propertyBindings, (function(astWithSource, propertyName) {
      protoView.bindElementProperty(astWithSource.ast, propertyName);
    }));
    protoView.bindEvent(renderElementBinder.eventBindings, -1);
    MapWrapper.forEach(renderElementBinder.variableBindings, (function(mappedName, varName) {
      MapWrapper.set(protoView.protoLocals, mappedName, null);
    }));
    return elBinder;
  },
  _createDirectiveBinders: function(protoView, sortedDirectives) {
    for (var i = 0; i < sortedDirectives.renderDirectives.length; i++) {
      var renderDirectiveMetadata = sortedDirectives.renderDirectives[i];
      MapWrapper.forEach(renderDirectiveMetadata.propertyBindings, (function(astWithSource, propertyName) {
        var setter = reflector.setter(propertyName);
        protoView.bindDirectiveProperty(i, astWithSource.ast, propertyName, setter);
      }));
      protoView.bindEvent(renderDirectiveMetadata.eventBindings, i);
    }
  }
}, {});
Object.defineProperty(ProtoViewFactory, "annotations", {get: function() {
    return [new Injectable()];
  }});
Object.defineProperty(ProtoViewFactory, "parameters", {get: function() {
    return [[ChangeDetection], [renderApi.Renderer]];
  }});
Object.defineProperty(ProtoViewFactory.prototype.createProtoView, "parameters", {get: function() {
    return [[DirectiveBinding], [renderApi.ProtoViewDto], [$traceurRuntime.genericType(List, DirectiveBinding)]];
  }});
var SortedDirectives = function SortedDirectives(renderDirectives, allDirectives) {
  var $__8 = this;
  this.renderDirectives = [];
  this.directives = [];
  this.viewportDirective = null;
  this.componentDirective = null;
  ListWrapper.forEach(renderDirectives, (function(renderDirectiveMetadata) {
    var directiveBinding = allDirectives[renderDirectiveMetadata.directiveIndex];
    if ((directiveBinding.annotation instanceof Component) || (directiveBinding.annotation instanceof DynamicComponent)) {
      $__8.componentDirective = directiveBinding;
      ListWrapper.insert($__8.renderDirectives, 0, renderDirectiveMetadata);
      ListWrapper.insert($__8.directives, 0, directiveBinding);
    } else {
      if (directiveBinding.annotation instanceof Viewport) {
        $__8.viewportDirective = directiveBinding;
      }
      ListWrapper.push($__8.renderDirectives, renderDirectiveMetadata);
      ListWrapper.push($__8.directives, directiveBinding);
    }
  }));
};
($traceurRuntime.createClass)(SortedDirectives, {}, {});
var ParentProtoElementInjectorWithDistance = function ParentProtoElementInjectorWithDistance(protoElementInjector, distance) {
  this.protoElementInjector = protoElementInjector;
  this.distance = distance;
};
($traceurRuntime.createClass)(ParentProtoElementInjectorWithDistance, {}, {});
Object.defineProperty(ParentProtoElementInjectorWithDistance, "parameters", {get: function() {
    return [[ProtoElementInjector], [$traceurRuntime.type.number]];
  }});
//# sourceMappingURL=proto_view_factory.js.map

//# sourceMappingURL=./proto_view_factory.map