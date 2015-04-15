import {assert} from "rtts_assert/rtts_assert";
import {Injectable} from 'angular2/di';
import {Promise,
  PromiseWrapper} from 'angular2/src/facade/async';
import {List,
  ListWrapper} from 'angular2/src/facade/collection';
import {isBlank,
  isPresent} from 'angular2/src/facade/lang';
import * as api from '../api';
import {RenderView} from './view/view';
import {RenderProtoView} from './view/proto_view';
import {ViewFactory} from './view/view_factory';
import {Compiler} from './compiler/compiler';
import {ShadowDomStrategy} from './shadow_dom/shadow_dom_strategy';
import {ProtoViewBuilder} from './view/proto_view_builder';
function _resolveViewContainer(vc) {
  assert.argumentTypes(vc, api.ViewContainerRef);
  return _resolveView(vc.view).viewContainers[vc.elementIndex];
}
Object.defineProperty(_resolveViewContainer, "parameters", {get: function() {
    return [[api.ViewContainerRef]];
  }});
function _resolveView(viewRef) {
  assert.argumentTypes(viewRef, DirectDomViewRef);
  return isPresent(viewRef) ? viewRef.delegate : null;
}
Object.defineProperty(_resolveView, "parameters", {get: function() {
    return [[DirectDomViewRef]];
  }});
function _resolveProtoView(protoViewRef) {
  assert.argumentTypes(protoViewRef, DirectDomProtoViewRef);
  return isPresent(protoViewRef) ? protoViewRef.delegate : null;
}
Object.defineProperty(_resolveProtoView, "parameters", {get: function() {
    return [[DirectDomProtoViewRef]];
  }});
function _wrapView(view) {
  assert.argumentTypes(view, RenderView);
  return new DirectDomViewRef(view);
}
Object.defineProperty(_wrapView, "parameters", {get: function() {
    return [[RenderView]];
  }});
function _collectComponentChildViewRefs(view, target = null) {
  if (isBlank(target)) {
    target = [];
  }
  ListWrapper.push(target, _wrapView(view));
  ListWrapper.forEach(view.componentChildViews, (view) => {
    if (isPresent(view)) {
      _collectComponentChildViewRefs(view, target);
    }
  });
  return target;
}
export class DirectDomProtoViewRef extends api.ProtoViewRef {
  constructor(delegate) {
    assert.argumentTypes(delegate, RenderProtoView);
    super();
    this.delegate = delegate;
  }
}
Object.defineProperty(DirectDomProtoViewRef, "parameters", {get: function() {
    return [[RenderProtoView]];
  }});
export class DirectDomViewRef extends api.ViewRef {
  constructor(delegate) {
    assert.argumentTypes(delegate, RenderView);
    super();
    this.delegate = delegate;
  }
}
Object.defineProperty(DirectDomViewRef, "parameters", {get: function() {
    return [[RenderView]];
  }});
export class DirectDomRenderer extends api.Renderer {
  constructor(compiler, viewFactory, shadowDomStrategy) {
    assert.argumentTypes(compiler, Compiler, viewFactory, ViewFactory, shadowDomStrategy, ShadowDomStrategy);
    super();
    this._compiler = compiler;
    this._viewFactory = viewFactory;
    this._shadowDomStrategy = shadowDomStrategy;
  }
  compile(template) {
    assert.argumentTypes(template, api.ViewDefinition);
    return assert.returnType((this._compiler.compile(template)), assert.genericType(Promise, api.ProtoViewDto));
  }
  mergeChildComponentProtoViews(protoViewRef, protoViewRefs) {
    assert.argumentTypes(protoViewRef, api.ProtoViewRef, protoViewRefs, assert.genericType(List, api.ProtoViewRef));
    _resolveProtoView(protoViewRef).mergeChildComponentProtoViews(ListWrapper.map(protoViewRefs, _resolveProtoView));
  }
  createRootProtoView(selectorOrElement, componentId) {
    var element = selectorOrElement;
    var rootProtoViewBuilder = new ProtoViewBuilder(element);
    rootProtoViewBuilder.setIsRootView(true);
    var elBinder = rootProtoViewBuilder.bindElement(element, 'root element');
    elBinder.setComponentId(componentId);
    elBinder.bindDirective(0);
    this._shadowDomStrategy.processElement(null, componentId, element);
    return assert.returnType((PromiseWrapper.resolve(rootProtoViewBuilder.build())), assert.genericType(Promise, api.ProtoViewDto));
  }
  createView(protoViewRef) {
    assert.argumentTypes(protoViewRef, api.ProtoViewRef);
    return assert.returnType((_collectComponentChildViewRefs(this._viewFactory.getView(_resolveProtoView(protoViewRef)))), assert.genericType(List, api.ViewRef));
  }
  destroyView(viewRef) {
    assert.argumentTypes(viewRef, api.ViewRef);
    this._viewFactory.returnView(_resolveView(viewRef));
  }
  insertViewIntoContainer(vcRef, viewRef, atIndex = -1) {
    assert.argumentTypes(vcRef, api.ViewContainerRef, viewRef, api.ViewRef, atIndex, assert.type.any);
    _resolveViewContainer(vcRef).insert(_resolveView(viewRef), atIndex);
  }
  detachViewFromContainer(vcRef, atIndex) {
    assert.argumentTypes(vcRef, api.ViewContainerRef, atIndex, assert.type.number);
    _resolveViewContainer(vcRef).detach(atIndex);
  }
  setElementProperty(viewRef, elementIndex, propertyName, propertyValue) {
    assert.argumentTypes(viewRef, api.ViewRef, elementIndex, assert.type.number, propertyName, assert.type.string, propertyValue, assert.type.any);
    _resolveView(viewRef).setElementProperty(elementIndex, propertyName, propertyValue);
  }
  setDynamicComponentView(viewRef, elementIndex, nestedViewRef) {
    assert.argumentTypes(viewRef, api.ViewRef, elementIndex, assert.type.number, nestedViewRef, api.ViewRef);
    _resolveView(viewRef).setComponentView(this._shadowDomStrategy, elementIndex, _resolveView(nestedViewRef));
  }
  setText(viewRef, textNodeIndex, text) {
    assert.argumentTypes(viewRef, api.ViewRef, textNodeIndex, assert.type.number, text, assert.type.string);
    _resolveView(viewRef).setText(textNodeIndex, text);
  }
  setEventDispatcher(viewRef, dispatcher) {
    assert.argumentTypes(viewRef, api.ViewRef, dispatcher, assert.type.any);
    _resolveView(viewRef).setEventDispatcher(dispatcher);
  }
}
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
    return [[api.ProtoViewRef], [assert.genericType(List, api.ProtoViewRef)]];
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
    return [[api.ViewContainerRef], [assert.type.number]];
  }});
Object.defineProperty(DirectDomRenderer.prototype.setElementProperty, "parameters", {get: function() {
    return [[api.ViewRef], [assert.type.number], [assert.type.string], [assert.type.any]];
  }});
Object.defineProperty(DirectDomRenderer.prototype.setDynamicComponentView, "parameters", {get: function() {
    return [[api.ViewRef], [assert.type.number], [api.ViewRef]];
  }});
Object.defineProperty(DirectDomRenderer.prototype.setText, "parameters", {get: function() {
    return [[api.ViewRef], [assert.type.number], [assert.type.string]];
  }});
Object.defineProperty(DirectDomRenderer.prototype.setEventDispatcher, "parameters", {get: function() {
    return [[api.ViewRef], [assert.type.any]];
  }});
//# sourceMappingURL=direct_dom_renderer.js.map

//# sourceMappingURL=./direct_dom_renderer.map