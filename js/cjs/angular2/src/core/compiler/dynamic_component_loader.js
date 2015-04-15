"use strict";
Object.defineProperties(module.exports, {
  ComponentRef: {get: function() {
      return ComponentRef;
    }},
  DynamicComponentLoader: {get: function() {
      return DynamicComponentLoader;
    }},
  __esModule: {value: true}
});
var $__angular2_47_di__,
    $__compiler__,
    $__directive_95_metadata_95_reader__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_src_47_core_47_annotations_47_annotations__,
    $__angular2_47_src_47_core_47_compiler_47_view_95_factory__,
    $__angular2_47_src_47_render_47_api__,
    $__element_95_injector__,
    $__view__;
var $__0 = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}),
    Key = $__0.Key,
    Injector = $__0.Injector,
    Injectable = $__0.Injectable,
    ResolvedBinding = $__0.ResolvedBinding;
var Compiler = ($__compiler__ = require("./compiler"), $__compiler__ && $__compiler__.__esModule && $__compiler__ || {default: $__compiler__}).Compiler;
var DirectiveMetadataReader = ($__directive_95_metadata_95_reader__ = require("./directive_metadata_reader"), $__directive_95_metadata_95_reader__ && $__directive_95_metadata_95_reader__.__esModule && $__directive_95_metadata_95_reader__ || {default: $__directive_95_metadata_95_reader__}).DirectiveMetadataReader;
var $__3 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    Type = $__3.Type,
    BaseException = $__3.BaseException,
    stringify = $__3.stringify,
    isPresent = $__3.isPresent;
var List = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).List;
var Promise = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}).Promise;
var Component = ($__angular2_47_src_47_core_47_annotations_47_annotations__ = require("angular2/src/core/annotations/annotations"), $__angular2_47_src_47_core_47_annotations_47_annotations__ && $__angular2_47_src_47_core_47_annotations_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_47_annotations__}).Component;
var ViewFactory = ($__angular2_47_src_47_core_47_compiler_47_view_95_factory__ = require("angular2/src/core/compiler/view_factory"), $__angular2_47_src_47_core_47_compiler_47_view_95_factory__ && $__angular2_47_src_47_core_47_compiler_47_view_95_factory__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view_95_factory__ || {default: $__angular2_47_src_47_core_47_compiler_47_view_95_factory__}).ViewFactory;
var Renderer = ($__angular2_47_src_47_render_47_api__ = require("angular2/src/render/api"), $__angular2_47_src_47_render_47_api__ && $__angular2_47_src_47_render_47_api__.__esModule && $__angular2_47_src_47_render_47_api__ || {default: $__angular2_47_src_47_render_47_api__}).Renderer;
var ElementRef = ($__element_95_injector__ = require("./element_injector"), $__element_95_injector__ && $__element_95_injector__.__esModule && $__element_95_injector__ || {default: $__element_95_injector__}).ElementRef;
var AppView = ($__view__ = require("./view"), $__view__ && $__view__.__esModule && $__view__ || {default: $__view__}).AppView;
var ComponentRef = function ComponentRef(location, instance, componentView) {
  this.location = location;
  this.instance = instance;
  this.componentView = componentView;
};
($traceurRuntime.createClass)(ComponentRef, {
  get injector() {
    return this.location.injector;
  },
  get hostView() {
    return this.location.hostView;
  }
}, {});
Object.defineProperty(ComponentRef, "parameters", {get: function() {
    return [[ElementRef], [$traceurRuntime.type.any], [AppView]];
  }});
var DynamicComponentLoader = function DynamicComponentLoader(compiler, directiveMetadataReader, renderer, viewFactory) {
  this._compiler = compiler;
  this._directiveMetadataReader = directiveMetadataReader;
  this._renderer = renderer;
  this._viewFactory = viewFactory;
};
($traceurRuntime.createClass)(DynamicComponentLoader, {
  loadIntoExistingLocation: function(type, location) {
    var injector = arguments[2] !== (void 0) ? arguments[2] : null;
    var $__11 = this;
    this._assertTypeIsComponent(type);
    var directiveMetadata = this._directiveMetadataReader.read(type);
    var inj = this._componentAppInjector(location, injector, directiveMetadata.resolvedInjectables);
    var hostEi = location.elementInjector;
    var hostView = location.hostView;
    return this._compiler.compile(type).then((function(componentProtoView) {
      var component = hostEi.dynamicallyCreateComponent(type, directiveMetadata.annotation, inj);
      var componentView = $__11._instantiateAndHydrateView(componentProtoView, injector, hostEi, component);
      hostView.addComponentChildView(componentView);
      $__11._renderer.setDynamicComponentView(hostView.render, location.boundElementIndex, componentView.render);
      return new ComponentRef(location, component, componentView);
    }));
  },
  loadIntoNewLocation: function(elementOrSelector, type, location) {
    var injector = arguments[3] !== (void 0) ? arguments[3] : null;
    var $__11 = this;
    this._assertTypeIsComponent(type);
    var inj = this._componentAppInjector(location, injector, null);
    return this._compiler.compileRoot(elementOrSelector, type).then((function(pv) {
      var hostView = $__11._instantiateAndHydrateView(pv, inj, null, new Object());
      var newLocation = new ElementRef(hostView.elementInjectors[0]);
      var component = hostView.elementInjectors[0].getComponent();
      return new ComponentRef(newLocation, component, hostView.componentChildViews[0]);
    }));
  },
  _componentAppInjector: function(location, injector, resolvedBindings) {
    var inj = isPresent(injector) ? injector : location.injector;
    return isPresent(resolvedBindings) ? inj.createChildFromResolved(resolvedBindings) : inj;
  },
  _instantiateAndHydrateView: function(protoView, injector, hostElementInjector, context) {
    var componentView = this._viewFactory.getView(protoView);
    componentView.hydrate(injector, hostElementInjector, context, null);
    return componentView;
  },
  _assertTypeIsComponent: function(type) {
    var annotation = this._directiveMetadataReader.read(type).annotation;
    if (!(annotation instanceof Component)) {
      throw new BaseException(("Could not load '" + stringify(type) + "' because it is not a component."));
    }
  }
}, {});
Object.defineProperty(DynamicComponentLoader, "annotations", {get: function() {
    return [new Injectable()];
  }});
Object.defineProperty(DynamicComponentLoader, "parameters", {get: function() {
    return [[Compiler], [DirectiveMetadataReader], [Renderer], [ViewFactory]];
  }});
Object.defineProperty(DynamicComponentLoader.prototype.loadIntoExistingLocation, "parameters", {get: function() {
    return [[Type], [ElementRef], [Injector]];
  }});
Object.defineProperty(DynamicComponentLoader.prototype.loadIntoNewLocation, "parameters", {get: function() {
    return [[$traceurRuntime.type.any], [Type], [ElementRef], [Injector]];
  }});
Object.defineProperty(DynamicComponentLoader.prototype._componentAppInjector, "parameters", {get: function() {
    return [[], [Injector], [$traceurRuntime.genericType(List, ResolvedBinding)]];
  }});
Object.defineProperty(DynamicComponentLoader.prototype._assertTypeIsComponent, "parameters", {get: function() {
    return [[Type]];
  }});
//# sourceMappingURL=dynamic_component_loader.js.map

//# sourceMappingURL=./dynamic_component_loader.map