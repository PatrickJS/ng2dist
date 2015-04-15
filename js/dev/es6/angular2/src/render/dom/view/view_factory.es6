import {assert} from "rtts_assert/rtts_assert";
import {OpaqueToken,
  Inject,
  Injectable} from 'angular2/di';
import {int,
  isPresent,
  isBlank,
  BaseException} from 'angular2/src/facade/lang';
import {ListWrapper,
  MapWrapper,
  Map,
  StringMapWrapper,
  List} from 'angular2/src/facade/collection';
import {DOM} from 'angular2/src/dom/dom_adapter';
import {Content} from '../shadow_dom/content_tag';
import {ShadowDomStrategy} from '../shadow_dom/shadow_dom_strategy';
import {EventManager} from 'angular2/src/render/dom/events/event_manager';
import * as vcModule from './view_container';
import * as pvModule from './proto_view';
import * as viewModule from './view';
import {NG_BINDING_CLASS_SELECTOR,
  NG_BINDING_CLASS} from '../util';
export const VIEW_POOL_CAPACITY = 'render.ViewFactory.viewPoolCapacity';
export class ViewFactory {
  constructor(poolCapacityPerProtoView, eventManager, shadowDomStrategy) {
    assert.argumentTypes(poolCapacityPerProtoView, assert.type.any, eventManager, EventManager, shadowDomStrategy, ShadowDomStrategy);
    this._poolCapacityPerProtoView = poolCapacityPerProtoView;
    this._pooledViewsPerProtoView = MapWrapper.create();
    this._eventManager = eventManager;
    this._shadowDomStrategy = shadowDomStrategy;
  }
  getView(protoView) {
    assert.argumentTypes(protoView, pvModule.RenderProtoView);
    var pooledViews = MapWrapper.get(this._pooledViewsPerProtoView, protoView);
    if (isPresent(pooledViews)) {
      var result = ListWrapper.removeLast(pooledViews);
      if (pooledViews.length === 0) {
        MapWrapper.delete(this._pooledViewsPerProtoView, protoView);
      }
      return assert.returnType((result), viewModule.RenderView);
    }
    return assert.returnType((this._createView(protoView)), viewModule.RenderView);
  }
  returnView(view) {
    assert.argumentTypes(view, viewModule.RenderView);
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
  }
  _createView(protoView) {
    assert.argumentTypes(protoView, pvModule.RenderProtoView);
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
      var element;
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
    return assert.returnType((view), viewModule.RenderView);
  }
  _createEventListener(view, element, elementIndex, eventName, eventLocals) {
    this._eventManager.addEventListener(element, eventName, (event) => {
      view.dispatchEvent(elementIndex, eventName, event);
    });
  }
}
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