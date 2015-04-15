"use strict";
Object.defineProperties(module.exports, {
  DirectDomProtoViewRef: {get: function() {
      return DirectDomProtoViewRef;
    }},
  DirectDomViewRef: {get: function() {
      return DirectDomViewRef;
    }},
  DirectDomRenderer: {get: function() {
      return DirectDomRenderer;
    }},
  __esModule: {value: true}
});
var $__angular2_47_di__,
    $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_lang__,
    $___46__46__47_api__,
    $__view_47_view__,
    $__view_47_proto_95_view__,
    $__view_47_view_95_factory__,
    $__compiler_47_compiler__,
    $__shadow_95_dom_47_shadow_95_dom_95_strategy__,
    $__view_47_proto_95_view_95_builder__;
var Injectable = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}).Injectable;
var $__1 = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
    Promise = $__1.Promise,
    PromiseWrapper = $__1.PromiseWrapper;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__2.List,
    ListWrapper = $__2.ListWrapper;
var $__3 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isBlank = $__3.isBlank,
    isPresent = $__3.isPresent;
var api = ($___46__46__47_api__ = require("../api"), $___46__46__47_api__ && $___46__46__47_api__.__esModule && $___46__46__47_api__ || {default: $___46__46__47_api__});
var RenderView = ($__view_47_view__ = require("./view/view"), $__view_47_view__ && $__view_47_view__.__esModule && $__view_47_view__ || {default: $__view_47_view__}).RenderView;
var RenderProtoView = ($__view_47_proto_95_view__ = require("./view/proto_view"), $__view_47_proto_95_view__ && $__view_47_proto_95_view__.__esModule && $__view_47_proto_95_view__ || {default: $__view_47_proto_95_view__}).RenderProtoView;
var ViewFactory = ($__view_47_view_95_factory__ = require("./view/view_factory"), $__view_47_view_95_factory__ && $__view_47_view_95_factory__.__esModule && $__view_47_view_95_factory__ || {default: $__view_47_view_95_factory__}).ViewFactory;
var Compiler = ($__compiler_47_compiler__ = require("./compiler/compiler"), $__compiler_47_compiler__ && $__compiler_47_compiler__.__esModule && $__compiler_47_compiler__ || {default: $__compiler_47_compiler__}).Compiler;
var ShadowDomStrategy = ($__shadow_95_dom_47_shadow_95_dom_95_strategy__ = require("./shadow_dom/shadow_dom_strategy"), $__shadow_95_dom_47_shadow_95_dom_95_strategy__ && $__shadow_95_dom_47_shadow_95_dom_95_strategy__.__esModule && $__shadow_95_dom_47_shadow_95_dom_95_strategy__ || {default: $__shadow_95_dom_47_shadow_95_dom_95_strategy__}).ShadowDomStrategy;
var ProtoViewBuilder = ($__view_47_proto_95_view_95_builder__ = require("./view/proto_view_builder"), $__view_47_proto_95_view_95_builder__ && $__view_47_proto_95_view_95_builder__.__esModule && $__view_47_proto_95_view_95_builder__ || {default: $__view_47_proto_95_view_95_builder__}).ProtoViewBuilder;
function _resolveViewContainer(vc) {
  return _resolveView(vc.view).viewContainers[vc.elementIndex];
}
Object.defineProperty(_resolveViewContainer, "parameters", {get: function() {
    return [[api.ViewContainerRef]];
  }});
function _resolveView(viewRef) {
  return isPresent(viewRef) ? viewRef.delegate : null;
}
Object.defineProperty(_resolveView, "parameters", {get: function() {
    return [[DirectDomViewRef]];
  }});
function _resolveProtoView(protoViewRef) {
  return isPresent(protoViewRef) ? protoViewRef.delegate : null;
}
Object.defineProperty(_resolveProtoView, "parameters", {get: function() {
    return [[DirectDomProtoViewRef]];
  }});
function _wrapView(view) {
  return new DirectDomViewRef(view);
}
Object.defineProperty(_wrapView, "parameters", {get: function() {
    return [[RenderView]];
  }});
function _collectComponentChildViewRefs(view) {
  var target = arguments[1] !== (void 0) ? arguments[1] : null;
  if (isBlank(target)) {
    target = [];
  }
  ListWrapper.push(target, _wrapView(view));
  ListWrapper.forEach(view.componentChildViews, (function(view) {
    if (isPresent(view)) {
      _collectComponentChildViewRefs(view, target);
    }
  }));
  return target;
}
var DirectDomProtoViewRef = function DirectDomProtoViewRef(delegate) {
  $traceurRuntime.superConstructor($DirectDomProtoViewRef).call(this);
  this.delegate = delegate;
};
var $DirectDomProtoViewRef = DirectDomProtoViewRef;
($traceurRuntime.createClass)(DirectDomProtoViewRef, {}, {}, api.ProtoViewRef);
Object.defineProperty(DirectDomProtoViewRef, "parameters", {get: function() {
    return [[RenderProtoView]];
  }});
var DirectDomViewRef = function DirectDomViewRef(delegate) {
  $traceurRuntime.superConstructor($DirectDomViewRef).call(this);
  this.delegate = delegate;
};
var $DirectDomViewRef = DirectDomViewRef;
($traceurRuntime.createClass)(DirectDomViewRef, {}, {}, api.ViewRef);
Object.defineProperty(DirectDomViewRef, "parameters", {get: function() {
    return [[RenderView]];
  }});
var DirectDomRenderer = function DirectDomRenderer(compiler, viewFactory, shadowDomStrategy) {
  $traceurRuntime.superConstructor($DirectDomRenderer).call(this);
  this._compiler = compiler;
  this._viewFactory = viewFactory;
  this._shadowDomStrategy = shadowDomStrategy;
};
var $DirectDomRenderer = DirectDomRenderer;
($traceurRuntime.createClass)(DirectDomRenderer, {
  compile: function(template) {
    return this._compiler.compile(template);
  },
  mergeChildComponentProtoViews: function(protoViewRef, protoViewRefs) {
    _resolveProtoView(protoViewRef).mergeChildComponentProtoViews(ListWrapper.map(protoViewRefs, _resolveProtoView));
  },
  createRootProtoView: function(selectorOrElement, componentId) {
    var element = selectorOrElement;
    var rootProtoViewBuilder = new ProtoViewBuilder(element);
    rootProtoViewBuilder.setIsRootView(true);
    var elBinder = rootProtoViewBuilder.bindElement(element, 'root element');
    elBinder.setComponentId(componentId);
    elBinder.bindDirective(0);
    this._shadowDomStrategy.processElement(null, componentId, element);
    return PromiseWrapper.resolve(rootProtoViewBuilder.build());
  },
  createView: function(protoViewRef) {
    return _collectComponentChildViewRefs(this._viewFactory.getView(_resolveProtoView(protoViewRef)));
  },
  destroyView: function(viewRef) {
    this._viewFactory.returnView(_resolveView(viewRef));
  },
  insertViewIntoContainer: function(vcRef, viewRef) {
    var atIndex = arguments[2] !== (void 0) ? arguments[2] : -1;
    _resolveViewContainer(vcRef).insert(_resolveView(viewRef), atIndex);
  },
  detachViewFromContainer: function(vcRef, atIndex) {
    _resolveViewContainer(vcRef).detach(atIndex);
  },
  setElementProperty: function(viewRef, elementIndex, propertyName, propertyValue) {
    _resolveView(viewRef).setElementProperty(elementIndex, propertyName, propertyValue);
  },
  setDynamicComponentView: function(viewRef, elementIndex, nestedViewRef) {
    _resolveView(viewRef).setComponentView(this._shadowDomStrategy, elementIndex, _resolveView(nestedViewRef));
  },
  setText: function(viewRef, textNodeIndex, text) {
    _resolveView(viewRef).setText(textNodeIndex, text);
  },
  setEventDispatcher: function(viewRef, dispatcher) {
    _resolveView(viewRef).setEventDispatcher(dispatcher);
  }
}, {}, api.Renderer);
Object.defineProperty(DirectDomRenderer, "annotations", {get: function() {
    return [new Injectable()];
  }});
Object.defineProperty(DirectDomRenderer, "parameters", {get: function() {
    return [[Compiler], [ViewFactory], [ShadowDomStrategy]];
  }});
Object.defineProperty(DirectDomRenderer.prototype.compile, "parameters", {get: function() {
    return [[api.ViewDefinition]];
  }});
Object.defineProperty(DirectDomRenderer.prototype.mergeChildComponentProtoViews, "parameters", {get: function() {
    return [[api.ProtoViewRef], [$traceurRuntime.genericType(List, api.ProtoViewRef)]];
  }});
Object.defineProperty(DirectDomRenderer.prototype.createView, "parameters", {get: function() {
    return [[api.ProtoViewRef]];
  }});
Object.defineProperty(DirectDomRenderer.prototype.destroyView, "parameters", {get: function() {
    return [[api.ViewRef]];
  }});
Object.defineProperty(DirectDomRenderer.prototype.insertViewIntoContainer, "parameters", {get: function() {
    return [[api.ViewContainerRef], [api.ViewRef], []];
  }});
Object.defineProperty(DirectDomRenderer.prototype.detachViewFromContainer, "parameters", {get: function() {
    return [[api.ViewContainerRef], [$traceurRuntime.type.number]];
  }});
Object.defineProperty(DirectDomRenderer.prototype.setElementProperty, "parameters", {get: function() {
    return [[api.ViewRef], [$traceurRuntime.type.number], [$traceurRuntime.type.string], [$traceurRuntime.type.any]];
  }});
Object.defineProperty(DirectDomRenderer.prototype.setDynamicComponentView, "parameters", {get: function() {
    return [[api.ViewRef], [$traceurRuntime.type.number], [api.ViewRef]];
  }});
Object.defineProperty(DirectDomRenderer.prototype.setText, "parameters", {get: function() {
    return [[api.ViewRef], [$traceurRuntime.type.number], [$traceurRuntime.type.string]];
  }});
Object.defineProperty(DirectDomRenderer.prototype.setEventDispatcher, "parameters", {get: function() {
    return [[api.ViewRef], [$traceurRuntime.type.any]];
  }});
//# sourceMappingURL=direct_dom_renderer.js.map

//# sourceMappingURL=./direct_dom_renderer.map