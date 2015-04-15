import {Injectable,
  Inject,
  OpaqueToken} from 'angular2/di';
import {ListWrapper,
  MapWrapper,
  Map,
  StringMapWrapper,
  List} from 'angular2/src/facade/collection';
import * as eli from './element_injector';
import {isPresent,
  isBlank,
  BaseException} from 'angular2/src/facade/lang';
import {NgElement} from 'angular2/src/core/compiler/ng_element';
import * as vcModule from './view_container';
import * as viewModule from './view';
import {BindingPropagationConfig} from 'angular2/change_detection';
export const VIEW_POOL_CAPACITY = 'ViewFactory.viewPoolCapacity';
export class ViewFactory {
  constructor(poolCapacityPerProtoView) {
    this._poolCapacityPerProtoView = poolCapacityPerProtoView;
    this._pooledViewsPerProtoView = MapWrapper.create();
  }
  getView(protoView) {
    var pooledViews = MapWrapper.get(this._pooledViewsPerProtoView, protoView);
    if (isPresent(pooledViews)) {
      var result = ListWrapper.removeLast(pooledViews);
      if (pooledViews.length === 0) {
        MapWrapper.delete(this._pooledViewsPerProtoView, protoView);
      }
      return result;
    }
    return this._createView(protoView);
  }
  returnView(view) {
    if (view.hydrated()) {
      throw new BaseException('Only dehydrated Views can be put back into the pool!');
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
    var view = new viewModule.AppView(protoView, protoView.protoLocals);
    var changeDetector = protoView.protoChangeDetector.instantiate(view, protoView.bindings, protoView.getVariableBindings(), protoView.getdirectiveRecords());
    var binders = protoView.elementBinders;
    var elementInjectors = ListWrapper.createFixedSize(binders.length);
    var rootElementInjectors = [];
    var preBuiltObjects = ListWrapper.createFixedSize(binders.length);
    var viewContainers = ListWrapper.createFixedSize(binders.length);
    var componentChildViews = [];
    for (var binderIdx = 0; binderIdx < binders.length; binderIdx++) {
      var binder = binders[binderIdx];
      var elementInjector = null;
      var protoElementInjector = binder.protoElementInjector;
      if (isPresent(protoElementInjector)) {
        if (isPresent(protoElementInjector.parent)) {
          var parentElementInjector = elementInjectors[protoElementInjector.parent.index];
          elementInjector = protoElementInjector.instantiate(parentElementInjector);
        } else {
          elementInjector = protoElementInjector.instantiate(null);
          ListWrapper.push(rootElementInjectors, elementInjector);
        }
      }
      elementInjectors[binderIdx] = elementInjector;
      var bindingPropagationConfig = null;
      if (isPresent(binder.nestedProtoView) && isPresent(binder.componentDirective)) {
        var childView = this._createView(binder.nestedProtoView);
        changeDetector.addChild(childView.changeDetector);
        bindingPropagationConfig = new BindingPropagationConfig(childView.changeDetector);
        ListWrapper.push(componentChildViews, childView);
      }
      var viewContainer = null;
      if (isPresent(binder.viewportDirective)) {
        viewContainer = new vcModule.ViewContainer(this, view, binder.nestedProtoView, elementInjector);
      }
      viewContainers[binderIdx] = viewContainer;
      if (isPresent(elementInjector)) {
        preBuiltObjects[binderIdx] = new eli.PreBuiltObjects(view, new NgElement(view, binderIdx), viewContainer, bindingPropagationConfig);
      }
    }
    view.init(changeDetector, elementInjectors, rootElementInjectors, viewContainers, preBuiltObjects, componentChildViews);
    return view;
  }
}
Object.defineProperty(ViewFactory, "annotations", {get: function() {
    return [new Injectable()];
  }});
Object.defineProperty(ViewFactory, "parameters", {get: function() {
    return [[new Inject(VIEW_POOL_CAPACITY)]];
  }});
Object.defineProperty(ViewFactory.prototype.getView, "parameters", {get: function() {
    return [[viewModule.AppProtoView]];
  }});
Object.defineProperty(ViewFactory.prototype.returnView, "parameters", {get: function() {
    return [[viewModule.AppView]];
  }});
Object.defineProperty(ViewFactory.prototype._createView, "parameters", {get: function() {
    return [[viewModule.AppProtoView]];
  }});
//# sourceMappingURL=view_factory.js.map

//# sourceMappingURL=./view_factory.map