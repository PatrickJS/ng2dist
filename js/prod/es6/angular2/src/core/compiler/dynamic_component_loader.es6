import {Key,
  Injector,
  Injectable,
  ResolvedBinding} from 'angular2/di';
import {Compiler} from './compiler';
import {DirectiveMetadataReader} from './directive_metadata_reader';
import {Type,
  BaseException,
  stringify,
  isPresent} from 'angular2/src/facade/lang';
import {List} from 'angular2/src/facade/collection';
import {Promise} from 'angular2/src/facade/async';
import {Component} from 'angular2/src/core/annotations/annotations';
import {ViewFactory} from 'angular2/src/core/compiler/view_factory';
import {Renderer} from 'angular2/src/render/api';
import {ElementRef} from './element_injector';
import {AppView} from './view';
export class ComponentRef {
  constructor(location, instance, componentView) {
    this.location = location;
    this.instance = instance;
    this.componentView = componentView;
  }
  get injector() {
    return this.location.injector;
  }
  get hostView() {
    return this.location.hostView;
  }
}
Object.defineProperty(ComponentRef, "parameters", {get: function() {
    return [[ElementRef], [assert.type.any], [AppView]];
  }});
export class DynamicComponentLoader {
  constructor(compiler, directiveMetadataReader, renderer, viewFactory) {
    this._compiler = compiler;
    this._directiveMetadataReader = directiveMetadataReader;
    this._renderer = renderer;
    this._viewFactory = viewFactory;
  }
  loadIntoExistingLocation(type, location, injector = null) {
    this._assertTypeIsComponent(type);
    var directiveMetadata = this._directiveMetadataReader.read(type);
    var inj = this._componentAppInjector(location, injector, directiveMetadata.resolvedInjectables);
    var hostEi = location.elementInjector;
    var hostView = location.hostView;
    return this._compiler.compile(type).then((componentProtoView) => {
      var component = hostEi.dynamicallyCreateComponent(type, directiveMetadata.annotation, inj);
      var componentView = this._instantiateAndHydrateView(componentProtoView, injector, hostEi, component);
      hostView.addComponentChildView(componentView);
      this._renderer.setDynamicComponentView(hostView.render, location.boundElementIndex, componentView.render);
      return new ComponentRef(location, component, componentView);
    });
  }
  loadIntoNewLocation(elementOrSelector, type, location, injector = null) {
    this._assertTypeIsComponent(type);
    var inj = this._componentAppInjector(location, injector, null);
    return this._compiler.compileRoot(elementOrSelector, type).then((pv) => {
      var hostView = this._instantiateAndHydrateView(pv, inj, null, new Object());
      var newLocation = new ElementRef(hostView.elementInjectors[0]);
      var component = hostView.elementInjectors[0].getComponent();
      return new ComponentRef(newLocation, component, hostView.componentChildViews[0]);
    });
  }
  _componentAppInjector(location, injector, resolvedBindings) {
    var inj = isPresent(injector) ? injector : location.injector;
    return isPresent(resolvedBindings) ? inj.createChildFromResolved(resolvedBindings) : inj;
  }
  _instantiateAndHydrateView(protoView, injector, hostElementInjector, context) {
    var componentView = this._viewFactory.getView(protoView);
    componentView.hydrate(injector, hostElementInjector, context, null);
    return componentView;
  }
  _assertTypeIsComponent(type) {
    var annotation = this._directiveMetadataReader.read(type).annotation;
    if (!(annotation instanceof Component)) {
      throw new BaseException(`Could not load '${stringify(type)}' because it is not a component.`);
    }
  }
}
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
    return [[assert.type.any], [Type], [ElementRef], [Injector]];
  }});
Object.defineProperty(DynamicComponentLoader.prototype._componentAppInjector, "parameters", {get: function() {
    return [[], [Injector], [assert.genericType(List, ResolvedBinding)]];
  }});
Object.defineProperty(DynamicComponentLoader.prototype._assertTypeIsComponent, "parameters", {get: function() {
    return [[Type]];
  }});
//# sourceMappingURL=dynamic_component_loader.js.map

//# sourceMappingURL=./dynamic_component_loader.map