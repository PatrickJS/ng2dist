import {Injectable} from 'angular2/di';
import {List,
  ListWrapper,
  MapWrapper} from 'angular2/src/facade/collection';
import {isPresent,
  isBlank} from 'angular2/src/facade/lang';
import {reflector} from 'angular2/src/reflection/reflection';
import {ChangeDetection} from 'angular2/change_detection';
import {Component,
  Viewport,
  DynamicComponent} from '../annotations/annotations';
import * as renderApi from 'angular2/src/render/api';
import {AppProtoView} from './view';
import {ProtoElementInjector,
  DirectiveBinding} from './element_injector';
export class ProtoViewFactory {
  constructor(changeDetection, renderer) {
    this._changeDetection = changeDetection;
    this._renderer = renderer;
  }
  createProtoView(componentBinding, renderProtoView, directives) {
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
    MapWrapper.forEach(renderProtoView.variableBindings, (mappedName, varName) => {
      protoView.bindVariable(varName, mappedName);
    });
    return protoView;
  }
  _findParentProtoElementInjectorWithDistance(binderIndex, elementBinders, renderElementBinders) {
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
  }
  _createProtoElementInjector(binderIndex, parentPeiWithDistance, sortedDirectives, renderElementBinder) {
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
  }
  _createElementBinder(protoView, renderElementBinder, protoElementInjector, sortedDirectives) {
    var parent = null;
    if (renderElementBinder.parentIndex !== -1) {
      parent = protoView.elementBinders[renderElementBinder.parentIndex];
    }
    var elBinder = protoView.bindElement(parent, renderElementBinder.distanceToParent, protoElementInjector, sortedDirectives.componentDirective, sortedDirectives.viewportDirective);
    for (var i = 0; i < renderElementBinder.textBindings.length; i++) {
      protoView.bindTextNode(renderElementBinder.textBindings[i].ast);
    }
    MapWrapper.forEach(renderElementBinder.propertyBindings, (astWithSource, propertyName) => {
      protoView.bindElementProperty(astWithSource.ast, propertyName);
    });
    protoView.bindEvent(renderElementBinder.eventBindings, -1);
    MapWrapper.forEach(renderElementBinder.variableBindings, (mappedName, varName) => {
      MapWrapper.set(protoView.protoLocals, mappedName, null);
    });
    return elBinder;
  }
  _createDirectiveBinders(protoView, sortedDirectives) {
    for (var i = 0; i < sortedDirectives.renderDirectives.length; i++) {
      var renderDirectiveMetadata = sortedDirectives.renderDirectives[i];
      MapWrapper.forEach(renderDirectiveMetadata.propertyBindings, (astWithSource, propertyName) => {
        var setter = reflector.setter(propertyName);
        protoView.bindDirectiveProperty(i, astWithSource.ast, propertyName, setter);
      });
      protoView.bindEvent(renderDirectiveMetadata.eventBindings, i);
    }
  }
}
Object.defineProperty(ProtoViewFactory, "annotations", {get: function() {
    return [new Injectable()];
  }});
Object.defineProperty(ProtoViewFactory, "parameters", {get: function() {
    return [[ChangeDetection], [renderApi.Renderer]];
  }});
Object.defineProperty(ProtoViewFactory.prototype.createProtoView, "parameters", {get: function() {
    return [[DirectiveBinding], [renderApi.ProtoViewDto], [assert.genericType(List, DirectiveBinding)]];
  }});
class SortedDirectives {
  constructor(renderDirectives, allDirectives) {
    this.renderDirectives = [];
    this.directives = [];
    this.viewportDirective = null;
    this.componentDirective = null;
    ListWrapper.forEach(renderDirectives, (renderDirectiveMetadata) => {
      var directiveBinding = allDirectives[renderDirectiveMetadata.directiveIndex];
      if ((directiveBinding.annotation instanceof Component) || (directiveBinding.annotation instanceof DynamicComponent)) {
        this.componentDirective = directiveBinding;
        ListWrapper.insert(this.renderDirectives, 0, renderDirectiveMetadata);
        ListWrapper.insert(this.directives, 0, directiveBinding);
      } else {
        if (directiveBinding.annotation instanceof Viewport) {
          this.viewportDirective = directiveBinding;
        }
        ListWrapper.push(this.renderDirectives, renderDirectiveMetadata);
        ListWrapper.push(this.directives, directiveBinding);
      }
    });
  }
}
class ParentProtoElementInjectorWithDistance {
  constructor(protoElementInjector, distance) {
    this.protoElementInjector = protoElementInjector;
    this.distance = distance;
  }
}
Object.defineProperty(ParentProtoElementInjectorWithDistance, "parameters", {get: function() {
    return [[ProtoElementInjector], [assert.type.number]];
  }});
//# sourceMappingURL=proto_view_factory.js.map

//# sourceMappingURL=./proto_view_factory.map