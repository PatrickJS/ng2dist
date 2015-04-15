import {DOM} from 'angular2/src/dom/dom_adapter';
import {ListWrapper,
  MapWrapper,
  Map,
  StringMapWrapper,
  List} from 'angular2/src/facade/collection';
import {int,
  isPresent,
  isBlank,
  BaseException} from 'angular2/src/facade/lang';
import {ViewContainer} from './view_container';
import {RenderProtoView} from './proto_view';
import {LightDom} from '../shadow_dom/light_dom';
import {Content} from '../shadow_dom/content_tag';
import {EventManager} from 'angular2/src/render/dom/events/event_manager';
import {ShadowDomStrategy} from '../shadow_dom/shadow_dom_strategy';
const NG_BINDING_CLASS = 'ng-binding';
export class RenderView {
  constructor(proto, rootNodes, boundTextNodes, boundElements, viewContainers, contentTags, eventManager) {
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
  }
  hydrated() {
    return this._hydrated;
  }
  setElementProperty(elementIndex, propertyName, value) {
    var setter = MapWrapper.get(this.proto.elementBinders[elementIndex].propertySetters, propertyName);
    setter(this.boundElements[elementIndex], value);
  }
  setText(textIndex, value) {
    DOM.setText(this.boundTextNodes[textIndex], value);
  }
  setComponentView(strategy, elementIndex, childView) {
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
  }
  getViewContainer(index) {
    return this.viewContainers[index];
  }
  _getDestLightDom(binderIndex) {
    var binder = this.proto.elementBinders[binderIndex];
    var destLightDom = null;
    if (binder.parentIndex !== -1 && binder.distanceToParent === 1) {
      destLightDom = this.lightDoms[binder.parentIndex];
    }
    return destLightDom;
  }
  hydrate(hostLightDom) {
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
  }
  _createGlobalEventListener(elementIndex, eventName, eventTarget, fullName) {
    return this.eventManager.addGlobalEventListener(eventTarget, eventName, (event) => {
      this.dispatchEvent(elementIndex, fullName, event);
    });
  }
  dehydrate() {
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
  }
  setEventDispatcher(dispatcher) {
    this._eventDispatcher = dispatcher;
  }
  dispatchEvent(elementIndex, eventName, event) {
    if (isPresent(this._eventDispatcher)) {
      var evalLocals = MapWrapper.create();
      MapWrapper.set(evalLocals, '$event', event);
      this._eventDispatcher.dispatchEvent(elementIndex, eventName, evalLocals);
    }
  }
}
Object.defineProperty(RenderView, "parameters", {get: function() {
    return [[RenderProtoView], [List], [List], [List], [List], [List], [EventManager]];
  }});
Object.defineProperty(RenderView.prototype.setElementProperty, "parameters", {get: function() {
    return [[assert.type.number], [assert.type.string], [assert.type.any]];
  }});
Object.defineProperty(RenderView.prototype.setText, "parameters", {get: function() {
    return [[assert.type.number], [assert.type.string]];
  }});
Object.defineProperty(RenderView.prototype.setComponentView, "parameters", {get: function() {
    return [[ShadowDomStrategy], [assert.type.number], [RenderView]];
  }});
Object.defineProperty(RenderView.prototype.getViewContainer, "parameters", {get: function() {
    return [[assert.type.number]];
  }});
Object.defineProperty(RenderView.prototype.hydrate, "parameters", {get: function() {
    return [[LightDom]];
  }});
Object.defineProperty(RenderView.prototype.setEventDispatcher, "parameters", {get: function() {
    return [[assert.type.any]];
  }});
//# sourceMappingURL=view.js.map

//# sourceMappingURL=./view.map