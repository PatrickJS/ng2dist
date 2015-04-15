import {assert} from "rtts_assert/rtts_assert";
import {isPresent} from 'angular2/src/facade/lang';
import {Promise} from 'angular2/src/facade/async';
import {List,
  Map} from 'angular2/src/facade/collection';
import {ASTWithSource} from 'angular2/change_detection';
export class EventBinding {
  constructor(fullName, source) {
    assert.argumentTypes(fullName, assert.type.string, source, ASTWithSource);
    this.fullName = fullName;
    this.source = source;
  }
}
Object.defineProperty(EventBinding, "parameters", {get: function() {
    return [[assert.type.string], [ASTWithSource]];
  }});
export class ElementBinder {
  constructor({index,
    parentIndex,
    distanceToParent,
    directives,
    nestedProtoView,
    propertyBindings,
    variableBindings,
    eventBindings,
    textBindings,
    readAttributes}) {
    this.index = index;
    this.parentIndex = parentIndex;
    this.distanceToParent = distanceToParent;
    this.directives = directives;
    this.nestedProtoView = nestedProtoView;
    this.propertyBindings = propertyBindings;
    this.variableBindings = variableBindings;
    this.eventBindings = eventBindings;
    this.textBindings = textBindings;
    this.readAttributes = readAttributes;
  }
}
export class DirectiveBinder {
  constructor({directiveIndex,
    propertyBindings,
    eventBindings}) {
    this.directiveIndex = directiveIndex;
    this.propertyBindings = propertyBindings;
    this.eventBindings = eventBindings;
  }
}
export class ProtoViewDto {
  constructor({render,
    elementBinders,
    variableBindings} = {}) {
    this.render = render;
    this.elementBinders = elementBinders;
    this.variableBindings = variableBindings;
  }
}
export class DirectiveMetadata {
  static get DECORATOR_TYPE() {
    return 0;
  }
  static get COMPONENT_TYPE() {
    return 1;
  }
  static get VIEWPORT_TYPE() {
    return 2;
  }
  constructor({id,
    selector,
    compileChildren,
    hostListeners,
    properties,
    setters,
    readAttributes,
    type}) {
    this.id = id;
    this.selector = selector;
    this.compileChildren = isPresent(compileChildren) ? compileChildren : true;
    this.hostListeners = hostListeners;
    this.properties = properties;
    this.setters = setters;
    this.readAttributes = readAttributes;
    this.type = type;
  }
}
export class ProtoViewRef {}
export class ViewRef {}
export class ViewContainerRef {
  constructor(view, elementIndex) {
    assert.argumentTypes(view, ViewRef, elementIndex, assert.type.number);
    this.view = view;
    this.elementIndex = elementIndex;
  }
}
Object.defineProperty(ViewContainerRef, "parameters", {get: function() {
    return [[ViewRef], [assert.type.number]];
  }});
export class ViewDefinition {
  constructor({componentId,
    absUrl,
    template,
    directives}) {
    this.componentId = componentId;
    this.absUrl = absUrl;
    this.template = template;
    this.directives = directives;
  }
}
export class Renderer {
  compile(template) {
    assert.argumentTypes(template, ViewDefinition);
    return assert.returnType((null), assert.genericType(Promise, ProtoViewDto));
  }
  mergeChildComponentProtoViews(protoViewRef, componentProtoViewRefs) {
    assert.argumentTypes(protoViewRef, ProtoViewRef, componentProtoViewRefs, assert.genericType(List, ProtoViewRef));
    return null;
  }
  createRootProtoView(selectorOrElement, componentId) {
    return assert.returnType((null), assert.genericType(Promise, ProtoViewDto));
  }
  createView(protoView) {
    assert.argumentTypes(protoView, ProtoViewRef);
    return assert.returnType((null), assert.genericType(List, ViewRef));
  }
  destroyView(view) {
    assert.argumentTypes(view, ViewRef);
  }
  insertViewIntoContainer(vcRef, view, atIndex) {
    assert.argumentTypes(vcRef, ViewContainerRef, view, ViewRef, atIndex, assert.type.any);
  }
  detachViewFromContainer(vcRef, atIndex) {
    assert.argumentTypes(vcRef, ViewContainerRef, atIndex, assert.type.number);
  }
  setElementProperty(view, elementIndex, propertyName, propertyValue) {
    assert.argumentTypes(view, ViewRef, elementIndex, assert.type.number, propertyName, assert.type.string, propertyValue, assert.type.any);
  }
  setDynamicComponentView(view, elementIndex, nestedViewRef) {
    assert.argumentTypes(view, ViewRef, elementIndex, assert.type.number, nestedViewRef, ViewRef);
  }
  setText(view, textNodeIndex, text) {
    assert.argumentTypes(view, ViewRef, textNodeIndex, assert.type.number, text, assert.type.string);
  }
  setEventDispatcher(viewRef, dispatcher) {
    assert.argumentTypes(viewRef, ViewRef, dispatcher, assert.type.any);
  }
  flush() {}
}
Object.defineProperty(Renderer.prototype.compile, "parameters", {get: function() {
    return [[ViewDefinition]];
  }});
Object.defineProperty(Renderer.prototype.mergeChildComponentProtoViews, "parameters", {get: function() {
    return [[ProtoViewRef], [assert.genericType(List, ProtoViewRef)]];
  }});
Object.defineProperty(Renderer.prototype.createView, "parameters", {get: function() {
    return [[ProtoViewRef]];
  }});
Object.defineProperty(Renderer.prototype.destroyView, "parameters", {get: function() {
    return [[ViewRef]];
  }});
Object.defineProperty(Renderer.prototype.insertViewIntoContainer, "parameters", {get: function() {
    return [[ViewContainerRef], [ViewRef], []];
  }});
Object.defineProperty(Renderer.prototype.detachViewFromContainer, "parameters", {get: function() {
    return [[ViewContainerRef], [assert.type.number]];
  }});
Object.defineProperty(Renderer.prototype.setElementProperty, "parameters", {get: function() {
    return [[ViewRef], [assert.type.number], [assert.type.string], [assert.type.any]];
  }});
Object.defineProperty(Renderer.prototype.setDynamicComponentView, "parameters", {get: function() {
    return [[ViewRef], [assert.type.number], [ViewRef]];
  }});
Object.defineProperty(Renderer.prototype.setText, "parameters", {get: function() {
    return [[ViewRef], [assert.type.number], [assert.type.string]];
  }});
Object.defineProperty(Renderer.prototype.setEventDispatcher, "parameters", {get: function() {
    return [[ViewRef], [assert.type.any]];
  }});
export class EventDispatcher {
  dispatchEvent(elementIndex, eventName, locals) {
    assert.argumentTypes(elementIndex, assert.type.number, eventName, assert.type.string, locals, assert.genericType(Map, assert.type.string, assert.type.any));
  }
}
Object.defineProperty(EventDispatcher.prototype.dispatchEvent, "parameters", {get: function() {
    return [[assert.type.number], [assert.type.string], [assert.genericType(Map, assert.type.string, assert.type.any)]];
  }});
//# sourceMappingURL=api.js.map

//# sourceMappingURL=./api.map