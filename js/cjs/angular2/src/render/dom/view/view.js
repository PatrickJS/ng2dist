"use strict";
Object.defineProperties(module.exports, {
  RenderView: {get: function() {
      return RenderView;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_lang__,
    $__view_95_container__,
    $__proto_95_view__,
    $___46__46__47_shadow_95_dom_47_light_95_dom__,
    $___46__46__47_shadow_95_dom_47_content_95_tag__,
    $__angular2_47_src_47_render_47_dom_47_events_47_event_95_manager__,
    $___46__46__47_shadow_95_dom_47_shadow_95_dom_95_strategy__;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    ListWrapper = $__1.ListWrapper,
    MapWrapper = $__1.MapWrapper,
    Map = $__1.Map,
    StringMapWrapper = $__1.StringMapWrapper,
    List = $__1.List;
var $__2 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    int = $__2.int,
    isPresent = $__2.isPresent,
    isBlank = $__2.isBlank,
    BaseException = $__2.BaseException;
var ViewContainer = ($__view_95_container__ = require("./view_container"), $__view_95_container__ && $__view_95_container__.__esModule && $__view_95_container__ || {default: $__view_95_container__}).ViewContainer;
var RenderProtoView = ($__proto_95_view__ = require("./proto_view"), $__proto_95_view__ && $__proto_95_view__.__esModule && $__proto_95_view__ || {default: $__proto_95_view__}).RenderProtoView;
var LightDom = ($___46__46__47_shadow_95_dom_47_light_95_dom__ = require("../shadow_dom/light_dom"), $___46__46__47_shadow_95_dom_47_light_95_dom__ && $___46__46__47_shadow_95_dom_47_light_95_dom__.__esModule && $___46__46__47_shadow_95_dom_47_light_95_dom__ || {default: $___46__46__47_shadow_95_dom_47_light_95_dom__}).LightDom;
var Content = ($___46__46__47_shadow_95_dom_47_content_95_tag__ = require("../shadow_dom/content_tag"), $___46__46__47_shadow_95_dom_47_content_95_tag__ && $___46__46__47_shadow_95_dom_47_content_95_tag__.__esModule && $___46__46__47_shadow_95_dom_47_content_95_tag__ || {default: $___46__46__47_shadow_95_dom_47_content_95_tag__}).Content;
var EventManager = ($__angular2_47_src_47_render_47_dom_47_events_47_event_95_manager__ = require("angular2/src/render/dom/events/event_manager"), $__angular2_47_src_47_render_47_dom_47_events_47_event_95_manager__ && $__angular2_47_src_47_render_47_dom_47_events_47_event_95_manager__.__esModule && $__angular2_47_src_47_render_47_dom_47_events_47_event_95_manager__ || {default: $__angular2_47_src_47_render_47_dom_47_events_47_event_95_manager__}).EventManager;
var ShadowDomStrategy = ($___46__46__47_shadow_95_dom_47_shadow_95_dom_95_strategy__ = require("../shadow_dom/shadow_dom_strategy"), $___46__46__47_shadow_95_dom_47_shadow_95_dom_95_strategy__ && $___46__46__47_shadow_95_dom_47_shadow_95_dom_95_strategy__.__esModule && $___46__46__47_shadow_95_dom_47_shadow_95_dom_95_strategy__ || {default: $___46__46__47_shadow_95_dom_47_shadow_95_dom_95_strategy__}).ShadowDomStrategy;
var NG_BINDING_CLASS = 'ng-binding';
var RenderView = function RenderView(proto, rootNodes, boundTextNodes, boundElements, viewContainers, contentTags, eventManager) {
  this.proto = proto;
  this.rootNodes = rootNodes;
  this.boundTextNodes = boundTextNodes;
  this.boundElements = boundElements;
  this.viewContainers = viewContainers;
  this.contentTags = contentTags;
  this.lightDoms = ListWrapper.createFixedSize(boundElements.length);
  this.eventManager = eventManager;
  ListWrapper.fill(this.lightDoms, null);
  this.componentChildViews = ListWrapper.createFixedSize(boundElements.length);
  this._hydrated = false;
  this._eventHandlerRemovers = null;
};
var $RenderView = RenderView;
($traceurRuntime.createClass)(RenderView, {
  hydrated: function() {
    return this._hydrated;
  },
  setElementProperty: function(elementIndex, propertyName, value) {
    var setter = MapWrapper.get(this.proto.elementBinders[elementIndex].propertySetters, propertyName);
    setter(this.boundElements[elementIndex], value);
  },
  setText: function(textIndex, value) {
    DOM.setText(this.boundTextNodes[textIndex], value);
  },
  setComponentView: function(strategy, elementIndex, childView) {
    var element = this.boundElements[elementIndex];
    var lightDom = strategy.constructLightDom(this, childView, element);
    strategy.attachTemplate(element, childView);
    this.lightDoms[elementIndex] = lightDom;
    this.componentChildViews[elementIndex] = childView;
    if (this._hydrated) {
      childView.hydrate(lightDom);
      if (isPresent(lightDom)) {
        lightDom.redistribute();
      }
    }
  },
  getViewContainer: function(index) {
    return this.viewContainers[index];
  },
  _getDestLightDom: function(binderIndex) {
    var binder = this.proto.elementBinders[binderIndex];
    var destLightDom = null;
    if (binder.parentIndex !== -1 && binder.distanceToParent === 1) {
      destLightDom = this.lightDoms[binder.parentIndex];
    }
    return destLightDom;
  },
  hydrate: function(hostLightDom) {
    if (this._hydrated)
      throw new BaseException('The view is already hydrated.');
    this._hydrated = true;
    for (var i = 0; i < this.viewContainers.length; i++) {
      var vc = this.viewContainers[i];
      var destLightDom = this._getDestLightDom(i);
      if (isPresent(vc)) {
        vc.hydrate(destLightDom, hostLightDom);
      }
      var ct = this.contentTags[i];
      if (isPresent(ct)) {
        ct.hydrate(destLightDom);
      }
    }
    for (var i = 0; i < this.componentChildViews.length; i++) {
      var cv = this.componentChildViews[i];
      if (isPresent(cv)) {
        cv.hydrate(this.lightDoms[i]);
      }
    }
    for (var i = 0; i < this.lightDoms.length; ++i) {
      var lightDom = this.lightDoms[i];
      if (isPresent(lightDom)) {
        lightDom.redistribute();
      }
    }
    this._eventHandlerRemovers = ListWrapper.create();
    var binders = this.proto.elementBinders;
    for (var binderIdx = 0; binderIdx < binders.length; binderIdx++) {
      var binder = binders[binderIdx];
      if (isPresent(binder.globalEvents)) {
        for (var i = 0; i < binder.globalEvents.length; i++) {
          var globalEvent = binder.globalEvents[i];
          var remover = this._createGlobalEventListener(binderIdx, globalEvent.name, globalEvent.target, globalEvent.fullName);
          ListWrapper.push(this._eventHandlerRemovers, remover);
        }
      }
    }
  },
  _createGlobalEventListener: function(elementIndex, eventName, eventTarget, fullName) {
    var $__9 = this;
    return this.eventManager.addGlobalEventListener(eventTarget, eventName, (function(event) {
      $__9.dispatchEvent(elementIndex, fullName, event);
    }));
  },
  dehydrate: function() {
    for (var i = 0; i < this.componentChildViews.length; i++) {
      var cv = this.componentChildViews[i];
      if (isPresent(cv)) {
        cv.dehydrate();
      }
    }
    if (isPresent(this.viewContainers)) {
      for (var i = 0; i < this.viewContainers.length; i++) {
        var vc = this.viewContainers[i];
        if (isPresent(vc)) {
          vc.dehydrate();
        }
        var ct = this.contentTags[i];
        if (isPresent(ct)) {
          ct.dehydrate();
        }
      }
    }
    for (var i = 0; i < this._eventHandlerRemovers.length; i++) {
      this._eventHandlerRemovers[i]();
    }
    this._eventHandlerRemovers = null;
    this._eventDispatcher = null;
    this._hydrated = false;
  },
  setEventDispatcher: function(dispatcher) {
    this._eventDispatcher = dispatcher;
  },
  dispatchEvent: function(elementIndex, eventName, event) {
    if (isPresent(this._eventDispatcher)) {
      var evalLocals = MapWrapper.create();
      MapWrapper.set(evalLocals, '$event', event);
      this._eventDispatcher.dispatchEvent(elementIndex, eventName, evalLocals);
    }
  }
}, {});
Object.defineProperty(RenderView, "parameters", {get: function() {
    return [[RenderProtoView], [List], [List], [List], [List], [List], [EventManager]];
  }});
Object.defineProperty(RenderView.prototype.setElementProperty, "parameters", {get: function() {
    return [[$traceurRuntime.type.number], [$traceurRuntime.type.string], [$traceurRuntime.type.any]];
  }});
Object.defineProperty(RenderView.prototype.setText, "parameters", {get: function() {
    return [[$traceurRuntime.type.number], [$traceurRuntime.type.string]];
  }});
Object.defineProperty(RenderView.prototype.setComponentView, "parameters", {get: function() {
    return [[ShadowDomStrategy], [$traceurRuntime.type.number], [RenderView]];
  }});
Object.defineProperty(RenderView.prototype.getViewContainer, "parameters", {get: function() {
    return [[$traceurRuntime.type.number]];
  }});
Object.defineProperty(RenderView.prototype.hydrate, "parameters", {get: function() {
    return [[LightDom]];
  }});
Object.defineProperty(RenderView.prototype.setEventDispatcher, "parameters", {get: function() {
    return [[$traceurRuntime.type.any]];
  }});
//# sourceMappingURL=view.js.map

//# sourceMappingURL=./view.map