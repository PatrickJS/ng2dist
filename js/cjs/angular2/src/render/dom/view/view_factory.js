"use strict";
Object.defineProperties(module.exports, {
  VIEW_POOL_CAPACITY: {get: function() {
      return VIEW_POOL_CAPACITY;
    }},
  ViewFactory: {get: function() {
      return ViewFactory;
    }},
  __esModule: {value: true}
});
var $__angular2_47_di__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $___46__46__47_shadow_95_dom_47_content_95_tag__,
    $___46__46__47_shadow_95_dom_47_shadow_95_dom_95_strategy__,
    $__angular2_47_src_47_render_47_dom_47_events_47_event_95_manager__,
    $__view_95_container__,
    $__proto_95_view__,
    $__view__,
    $___46__46__47_util__;
var $__0 = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}),
    OpaqueToken = $__0.OpaqueToken,
    Inject = $__0.Inject,
    Injectable = $__0.Injectable;
var $__1 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    int = $__1.int,
    isPresent = $__1.isPresent,
    isBlank = $__1.isBlank,
    BaseException = $__1.BaseException;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    ListWrapper = $__2.ListWrapper,
    MapWrapper = $__2.MapWrapper,
    Map = $__2.Map,
    StringMapWrapper = $__2.StringMapWrapper,
    List = $__2.List;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var Content = ($___46__46__47_shadow_95_dom_47_content_95_tag__ = require("../shadow_dom/content_tag"), $___46__46__47_shadow_95_dom_47_content_95_tag__ && $___46__46__47_shadow_95_dom_47_content_95_tag__.__esModule && $___46__46__47_shadow_95_dom_47_content_95_tag__ || {default: $___46__46__47_shadow_95_dom_47_content_95_tag__}).Content;
var ShadowDomStrategy = ($___46__46__47_shadow_95_dom_47_shadow_95_dom_95_strategy__ = require("../shadow_dom/shadow_dom_strategy"), $___46__46__47_shadow_95_dom_47_shadow_95_dom_95_strategy__ && $___46__46__47_shadow_95_dom_47_shadow_95_dom_95_strategy__.__esModule && $___46__46__47_shadow_95_dom_47_shadow_95_dom_95_strategy__ || {default: $___46__46__47_shadow_95_dom_47_shadow_95_dom_95_strategy__}).ShadowDomStrategy;
var EventManager = ($__angular2_47_src_47_render_47_dom_47_events_47_event_95_manager__ = require("angular2/src/render/dom/events/event_manager"), $__angular2_47_src_47_render_47_dom_47_events_47_event_95_manager__ && $__angular2_47_src_47_render_47_dom_47_events_47_event_95_manager__.__esModule && $__angular2_47_src_47_render_47_dom_47_events_47_event_95_manager__ || {default: $__angular2_47_src_47_render_47_dom_47_events_47_event_95_manager__}).EventManager;
var vcModule = ($__view_95_container__ = require("./view_container"), $__view_95_container__ && $__view_95_container__.__esModule && $__view_95_container__ || {default: $__view_95_container__});
var pvModule = ($__proto_95_view__ = require("./proto_view"), $__proto_95_view__ && $__proto_95_view__.__esModule && $__proto_95_view__ || {default: $__proto_95_view__});
var viewModule = ($__view__ = require("./view"), $__view__ && $__view__.__esModule && $__view__ || {default: $__view__});
var $__7 = ($___46__46__47_util__ = require("../util"), $___46__46__47_util__ && $___46__46__47_util__.__esModule && $___46__46__47_util__ || {default: $___46__46__47_util__}),
    NG_BINDING_CLASS_SELECTOR = $__7.NG_BINDING_CLASS_SELECTOR,
    NG_BINDING_CLASS = $__7.NG_BINDING_CLASS;
var VIEW_POOL_CAPACITY = 'render.ViewFactory.viewPoolCapacity';
var ViewFactory = function ViewFactory(poolCapacityPerProtoView, eventManager, shadowDomStrategy) {
  this._poolCapacityPerProtoView = poolCapacityPerProtoView;
  this._pooledViewsPerProtoView = MapWrapper.create();
  this._eventManager = eventManager;
  this._shadowDomStrategy = shadowDomStrategy;
};
($traceurRuntime.createClass)(ViewFactory, {
  getView: function(protoView) {
    var pooledViews = MapWrapper.get(this._pooledViewsPerProtoView, protoView);
    if (isPresent(pooledViews)) {
      var result = ListWrapper.removeLast(pooledViews);
      if (pooledViews.length === 0) {
        MapWrapper.delete(this._pooledViewsPerProtoView, protoView);
      }
      return result;
    }
    return this._createView(protoView);
  },
  returnView: function(view) {
    if (view.hydrated()) {
      view.dehydrate();
    }
    var protoView = view.proto;
    var pooledViews = MapWrapper.get(this._pooledViewsPerProtoView, protoView);
    if (isBlank(pooledViews)) {
      pooledViews = [];
      MapWrapper.set(this._pooledViewsPerProtoView, protoView, pooledViews);
    }
    if (pooledViews.length < this._poolCapacityPerProtoView) {
      ListWrapper.push(pooledViews, view);
    }
  },
  _createView: function(protoView) {
    var rootElementClone = protoView.isRootView ? protoView.element : DOM.importIntoDoc(protoView.element);
    var elementsWithBindingsDynamic;
    if (protoView.isTemplateElement) {
      elementsWithBindingsDynamic = DOM.querySelectorAll(DOM.content(rootElementClone), NG_BINDING_CLASS_SELECTOR);
    } else {
      elementsWithBindingsDynamic = DOM.getElementsByClassName(rootElementClone, NG_BINDING_CLASS);
    }
    var elementsWithBindings = ListWrapper.createFixedSize(elementsWithBindingsDynamic.length);
    for (var binderIdx = 0; binderIdx < elementsWithBindingsDynamic.length; ++binderIdx) {
      elementsWithBindings[binderIdx] = elementsWithBindingsDynamic[binderIdx];
    }
    var viewRootNodes;
    if (protoView.isTemplateElement) {
      var childNode = DOM.firstChild(DOM.content(rootElementClone));
      viewRootNodes = [];
      while (childNode != null) {
        ListWrapper.push(viewRootNodes, childNode);
        childNode = DOM.nextSibling(childNode);
      }
    } else {
      viewRootNodes = [rootElementClone];
    }
    var binders = protoView.elementBinders;
    var boundTextNodes = [];
    var boundElements = ListWrapper.createFixedSize(binders.length);
    var viewContainers = ListWrapper.createFixedSize(binders.length);
    var contentTags = ListWrapper.createFixedSize(binders.length);
    for (var binderIdx = 0; binderIdx < binders.length; binderIdx++) {
      var binder = binders[binderIdx];
      var element = void 0;
      if (binderIdx === 0 && protoView.rootBindingOffset === 1) {
        element = rootElementClone;
      } else {
        element = elementsWithBindings[binderIdx - protoView.rootBindingOffset];
      }
      boundElements[binderIdx] = element;
      var childNodes = DOM.childNodes(DOM.templateAwareRoot(element));
      var textNodeIndices = binder.textNodeIndices;
      for (var i = 0; i < textNodeIndices.length; i++) {
        ListWrapper.push(boundTextNodes, childNodes[textNodeIndices[i]]);
      }
      var viewContainer = null;
      if (isBlank(binder.componentId) && isPresent(binder.nestedProtoView)) {
        viewContainer = new vcModule.ViewContainer(this, element);
      }
      viewContainers[binderIdx] = viewContainer;
      var contentTag = null;
      if (isPresent(binder.contentTagSelector)) {
        contentTag = new Content(element, binder.contentTagSelector);
      }
      contentTags[binderIdx] = contentTag;
    }
    var view = new viewModule.RenderView(protoView, viewRootNodes, boundTextNodes, boundElements, viewContainers, contentTags, this._eventManager);
    for (var binderIdx = 0; binderIdx < binders.length; binderIdx++) {
      var binder = binders[binderIdx];
      var element = boundElements[binderIdx];
      if (isPresent(binder.componentId) && isPresent(binder.nestedProtoView)) {
        var childView = this._createView(binder.nestedProtoView);
        view.setComponentView(this._shadowDomStrategy, binderIdx, childView);
      }
      if (isPresent(binder.eventLocals) && isPresent(binder.localEvents)) {
        for (var i = 0; i < binder.localEvents.length; i++) {
          this._createEventListener(view, element, binderIdx, binder.localEvents[i].name, binder.eventLocals);
        }
      }
    }
    if (protoView.isRootView) {
      view.hydrate(null);
    }
    return view;
  },
  _createEventListener: function(view, element, elementIndex, eventName, eventLocals) {
    this._eventManager.addEventListener(element, eventName, (function(event) {
      view.dispatchEvent(elementIndex, eventName, event);
    }));
  }
}, {});
Object.defineProperty(ViewFactory, "annotations", {get: function() {
    return [new Injectable()];
  }});
Object.defineProperty(ViewFactory, "parameters", {get: function() {
    return [[new Inject(VIEW_POOL_CAPACITY)], [EventManager], [ShadowDomStrategy]];
  }});
Object.defineProperty(ViewFactory.prototype.getView, "parameters", {get: function() {
    return [[pvModule.RenderProtoView]];
  }});
Object.defineProperty(ViewFactory.prototype.returnView, "parameters", {get: function() {
    return [[viewModule.RenderView]];
  }});
Object.defineProperty(ViewFactory.prototype._createView, "parameters", {get: function() {
    return [[pvModule.RenderProtoView]];
  }});
//# sourceMappingURL=view_factory.js.map

//# sourceMappingURL=./view_factory.map