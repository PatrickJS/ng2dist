import {ListWrapper,
  MapWrapper,
  Map,
  StringMapWrapper,
  List} from 'angular2/src/facade/collection';
import {AST,
  Locals,
  ChangeDispatcher,
  ProtoChangeDetector,
  ChangeDetector,
  ChangeRecord,
  BindingRecord,
  DirectiveRecord,
  BindingPropagationConfig} from 'angular2/change_detection';
import {ProtoElementInjector,
  ElementInjector,
  PreBuiltObjects,
  DirectiveBinding} from './element_injector';
import {ElementBinder} from './element_binder';
import {SetterFn} from 'angular2/src/reflection/types';
import {IMPLEMENTS,
  int,
  isPresent,
  isBlank,
  BaseException} from 'angular2/src/facade/lang';
import {Injector} from 'angular2/di';
import {ViewContainer} from './view_container';
import * as renderApi from 'angular2/src/render/api';
export class AppView {
  constructor(proto, protoLocals) {
    this.render = null;
    this.proto = proto;
    this.changeDetector = null;
    this.elementInjectors = null;
    this.rootElementInjectors = null;
    this.componentChildViews = null;
    this.viewContainers = null;
    this.preBuiltObjects = null;
    this.context = null;
    this.locals = new Locals(null, MapWrapper.clone(protoLocals));
  }
  init(changeDetector, elementInjectors, rootElementInjectors, viewContainers, preBuiltObjects, componentChildViews) {
    this.changeDetector = changeDetector;
    this.elementInjectors = elementInjectors;
    this.rootElementInjectors = rootElementInjectors;
    this.viewContainers = viewContainers;
    this.preBuiltObjects = preBuiltObjects;
    this.componentChildViews = componentChildViews;
  }
  setLocal(contextName, value) {
    if (!this.hydrated())
      throw new BaseException('Cannot set locals on dehydrated view.');
    if (!MapWrapper.contains(this.proto.variableBindings, contextName)) {
      return ;
    }
    var templateName = MapWrapper.get(this.proto.variableBindings, contextName);
    this.locals.set(templateName, value);
  }
  hydrated() {
    return isPresent(this.context);
  }
  _setContextAndLocals(newContext, locals) {
    this.context = newContext;
    this.locals.parent = locals;
  }
  _hydrateChangeDetector() {
    this.changeDetector.hydrate(this.context, this.locals, this);
  }
  _dehydrateContext() {
    if (isPresent(this.locals)) {
      this.locals.clearValues();
    }
    this.context = null;
    this.changeDetector.dehydrate();
  }
  hydrate(appInjector, hostElementInjector, context, locals) {
    var renderComponentViewRefs = this.proto.renderer.createView(this.proto.render);
    this.internalHydrateRecurse(renderComponentViewRefs, 0, appInjector, hostElementInjector, context, locals);
  }
  dehydrate() {
    var render = this.render;
    this.internalDehydrateRecurse();
    this.proto.renderer.destroyView(render);
  }
  internalHydrateRecurse(renderComponentViewRefs, renderComponentIndex, appInjector, hostElementInjector, context, locals) {
    if (this.hydrated())
      throw new BaseException('The view is already hydrated.');
    this.render = renderComponentViewRefs[renderComponentIndex++];
    this._setContextAndLocals(context, locals);
    for (var i = 0; i < this.viewContainers.length; i++) {
      var vc = this.viewContainers[i];
      if (isPresent(vc)) {
        vc.internalHydrateRecurse(new renderApi.ViewContainerRef(this.render, i), appInjector, hostElementInjector);
      }
    }
    var binders = this.proto.elementBinders;
    var componentChildViewIndex = 0;
    for (var i = 0; i < binders.length; ++i) {
      var componentDirective = binders[i].componentDirective;
      var shadowDomAppInjector = null;
      if (isPresent(componentDirective)) {
        var injectables = componentDirective.resolvedInjectables;
        if (isPresent(injectables))
          shadowDomAppInjector = appInjector.createChildFromResolved(injectables);
        else {
          shadowDomAppInjector = appInjector;
        }
      } else {
        shadowDomAppInjector = null;
      }
      var elementInjector = this.elementInjectors[i];
      if (isPresent(elementInjector)) {
        elementInjector.instantiateDirectives(appInjector, hostElementInjector, shadowDomAppInjector, this.preBuiltObjects[i]);
        var exportImplicitName = elementInjector.getExportImplicitName();
        if (elementInjector.isExportingComponent()) {
          this.locals.set(exportImplicitName, elementInjector.getComponent());
        } else if (elementInjector.isExportingElement()) {
          this.locals.set(exportImplicitName, elementInjector.getNgElement());
        }
      }
      if (isPresent(binders[i].nestedProtoView) && isPresent(componentDirective)) {
        renderComponentIndex = this.componentChildViews[componentChildViewIndex].internalHydrateRecurse(renderComponentViewRefs, renderComponentIndex, shadowDomAppInjector, elementInjector, elementInjector.getComponent(), null);
        componentChildViewIndex++;
      }
    }
    this._hydrateChangeDetector();
    this.proto.renderer.setEventDispatcher(this.render, this);
    return renderComponentIndex;
  }
  internalDehydrateRecurse() {
    for (var i = 0; i < this.componentChildViews.length; i++) {
      this.componentChildViews[i].internalDehydrateRecurse();
    }
    for (var i = 0; i < this.elementInjectors.length; i++) {
      if (isPresent(this.elementInjectors[i])) {
        this.elementInjectors[i].clearDirectives();
      }
    }
    if (isPresent(this.viewContainers)) {
      for (var i = 0; i < this.viewContainers.length; i++) {
        var vc = this.viewContainers[i];
        if (isPresent(vc)) {
          vc.internalDehydrateRecurse();
        }
      }
    }
    this.render = null;
    this._dehydrateContext();
  }
  triggerEventHandlers(eventName, eventObj, binderIndex) {
    var locals = MapWrapper.create();
    MapWrapper.set(locals, '$event', eventObj);
    this.dispatchEvent(binderIndex, eventName, locals);
  }
  notifyOnBinding(b, currentValue) {
    if (b.isElement()) {
      this.proto.renderer.setElementProperty(this.render, b.elementIndex, b.propertyName, currentValue);
    } else {
      this.proto.renderer.setText(this.render, b.elementIndex, currentValue);
    }
  }
  directive(directive) {
    var elementInjector = this.elementInjectors[directive.elementIndex];
    return elementInjector.getDirectiveAtIndex(directive.directiveIndex);
  }
  addComponentChildView(view) {
    ListWrapper.push(this.componentChildViews, view);
    this.changeDetector.addShadowDomChild(view.changeDetector);
  }
  dispatchEvent(elementIndex, eventName, locals) {
    if (this.hydrated()) {
      var elBinder = this.proto.elementBinders[elementIndex];
      if (isBlank(elBinder.hostListeners))
        return ;
      var eventMap = elBinder.hostListeners[eventName];
      if (isBlank(eventMap))
        return ;
      MapWrapper.forEach(eventMap, (expr, directiveIndex) => {
        var context;
        if (directiveIndex === -1) {
          context = this.context;
        } else {
          context = this.elementInjectors[elementIndex].getDirectiveAtIndex(directiveIndex);
        }
        expr.eval(context, new Locals(this.locals, locals));
      });
    }
  }
}
Object.defineProperty(AppView, "annotations", {get: function() {
    return [new IMPLEMENTS(ChangeDispatcher)];
  }});
Object.defineProperty(AppView, "parameters", {get: function() {
    return [[AppProtoView], [Map]];
  }});
Object.defineProperty(AppView.prototype.init, "parameters", {get: function() {
    return [[ChangeDetector], [List], [List], [List], [List], [List]];
  }});
Object.defineProperty(AppView.prototype.setLocal, "parameters", {get: function() {
    return [[assert.type.string], []];
  }});
Object.defineProperty(AppView.prototype.hydrate, "parameters", {get: function() {
    return [[Injector], [ElementInjector], [Object], [Locals]];
  }});
Object.defineProperty(AppView.prototype.internalHydrateRecurse, "parameters", {get: function() {
    return [[assert.genericType(List, renderApi.ViewRef)], [assert.type.number], [Injector], [ElementInjector], [Object], [Locals]];
  }});
Object.defineProperty(AppView.prototype.triggerEventHandlers, "parameters", {get: function() {
    return [[assert.type.string], [], [int]];
  }});
Object.defineProperty(AppView.prototype.notifyOnBinding, "parameters", {get: function() {
    return [[BindingRecord], [assert.type.any]];
  }});
Object.defineProperty(AppView.prototype.directive, "parameters", {get: function() {
    return [[DirectiveRecord]];
  }});
Object.defineProperty(AppView.prototype.addComponentChildView, "parameters", {get: function() {
    return [[AppView]];
  }});
Object.defineProperty(AppView.prototype.dispatchEvent, "parameters", {get: function() {
    return [[assert.type.number], [assert.type.string], [assert.genericType(Map, assert.type.string, assert.type.any)]];
  }});
export class AppProtoView {
  constructor(renderer, render, protoChangeDetector) {
    this.renderer = renderer;
    this.render = render;
    this.elementBinders = [];
    this.variableBindings = MapWrapper.create();
    this.protoLocals = MapWrapper.create();
    this.protoChangeDetector = protoChangeDetector;
    this.parentProtoView = null;
    this.textNodesWithBindingCount = 0;
    this.bindings = [];
    this._directiveRecordsMap = MapWrapper.create();
    this._variableBindings = null;
    this._directiveRecords = null;
  }
  getVariableBindings() {
    if (isPresent(this._variableBindings)) {
      return this._variableBindings;
    }
    this._variableBindings = isPresent(this.parentProtoView) ? ListWrapper.clone(this.parentProtoView.getVariableBindings()) : [];
    MapWrapper.forEach(this.protoLocals, (v, local) => {
      ListWrapper.push(this._variableBindings, local);
    });
    return this._variableBindings;
  }
  getdirectiveRecords() {
    if (isPresent(this._directiveRecords)) {
      return this._directiveRecords;
    }
    this._directiveRecords = [];
    for (var injectorIndex = 0; injectorIndex < this.elementBinders.length; ++injectorIndex) {
      var pei = this.elementBinders[injectorIndex].protoElementInjector;
      if (isPresent(pei)) {
        for (var directiveIndex = 0; directiveIndex < pei.numberOfDirectives; ++directiveIndex) {
          ListWrapper.push(this._directiveRecords, this._getDirectiveRecord(injectorIndex, directiveIndex));
        }
      }
    }
    return this._directiveRecords;
  }
  bindVariable(contextName, templateName) {
    MapWrapper.set(this.variableBindings, contextName, templateName);
    MapWrapper.set(this.protoLocals, templateName, null);
  }
  bindElement(parent, distanceToParent, protoElementInjector, componentDirective = null, viewportDirective = null) {
    var elBinder = new ElementBinder(this.elementBinders.length, parent, distanceToParent, protoElementInjector, componentDirective, viewportDirective);
    ListWrapper.push(this.elementBinders, elBinder);
    return elBinder;
  }
  bindTextNode(expression) {
    var textNodeIndex = this.textNodesWithBindingCount++;
    var b = BindingRecord.createForTextNode(expression, textNodeIndex);
    ListWrapper.push(this.bindings, b);
  }
  bindElementProperty(expression, setterName) {
    var elementIndex = this.elementBinders.length - 1;
    var b = BindingRecord.createForElement(expression, elementIndex, setterName);
    ListWrapper.push(this.bindings, b);
  }
  bindEvent(eventBindings, directiveIndex = -1) {
    var elBinder = this.elementBinders[this.elementBinders.length - 1];
    var events = elBinder.hostListeners;
    if (isBlank(events)) {
      events = StringMapWrapper.create();
      elBinder.hostListeners = events;
    }
    for (var i = 0; i < eventBindings.length; i++) {
      var eventBinding = eventBindings[i];
      var eventName = eventBinding.fullName;
      var event = StringMapWrapper.get(events, eventName);
      if (isBlank(event)) {
        event = MapWrapper.create();
        StringMapWrapper.set(events, eventName, event);
      }
      MapWrapper.set(event, directiveIndex, eventBinding.source);
    }
  }
  bindDirectiveProperty(directiveIndex, expression, setterName, setter) {
    var elementIndex = this.elementBinders.length - 1;
    var directiveRecord = this._getDirectiveRecord(elementIndex, directiveIndex);
    var b = BindingRecord.createForDirective(expression, setterName, setter, directiveRecord);
    ListWrapper.push(this.bindings, b);
  }
  _getDirectiveRecord(elementInjectorIndex, directiveIndex) {
    var id = elementInjectorIndex * 100 + directiveIndex;
    var protoElementInjector = this.elementBinders[elementInjectorIndex].protoElementInjector;
    if (!MapWrapper.contains(this._directiveRecordsMap, id)) {
      var binding = protoElementInjector.getDirectiveBindingAtIndex(directiveIndex);
      MapWrapper.set(this._directiveRecordsMap, id, new DirectiveRecord(elementInjectorIndex, directiveIndex, binding.callOnAllChangesDone, binding.callOnChange));
    }
    return MapWrapper.get(this._directiveRecordsMap, id);
  }
}
Object.defineProperty(AppProtoView, "parameters", {get: function() {
    return [[renderApi.Renderer], [renderApi.ProtoViewRef], [ProtoChangeDetector]];
  }});
Object.defineProperty(AppProtoView.prototype.bindVariable, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string]];
  }});
Object.defineProperty(AppProtoView.prototype.bindElement, "parameters", {get: function() {
    return [[ElementBinder], [int], [ProtoElementInjector], [DirectiveBinding], [DirectiveBinding]];
  }});
Object.defineProperty(AppProtoView.prototype.bindTextNode, "parameters", {get: function() {
    return [[AST]];
  }});
Object.defineProperty(AppProtoView.prototype.bindElementProperty, "parameters", {get: function() {
    return [[AST], [assert.type.string]];
  }});
Object.defineProperty(AppProtoView.prototype.bindEvent, "parameters", {get: function() {
    return [[assert.genericType(List, renderApi.EventBinding)], [int]];
  }});
Object.defineProperty(AppProtoView.prototype.bindDirectiveProperty, "parameters", {get: function() {
    return [[assert.type.number], [AST], [assert.type.string], [SetterFn]];
  }});
Object.defineProperty(AppProtoView.prototype._getDirectiveRecord, "parameters", {get: function() {
    return [[assert.type.number], [assert.type.number]];
  }});
//# sourceMappingURL=view.js.map

//# sourceMappingURL=./view.map