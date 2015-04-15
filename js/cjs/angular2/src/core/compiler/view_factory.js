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
    $__angular2_47_src_47_facade_47_collection__,
    $__element_95_injector__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_core_47_compiler_47_ng_95_element__,
    $__view_95_container__,
    $__view__,
    $__angular2_47_change_95_detection__;
var $__0 = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}),
    Injectable = $__0.Injectable,
    Inject = $__0.Inject,
    OpaqueToken = $__0.OpaqueToken;
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    ListWrapper = $__1.ListWrapper,
    MapWrapper = $__1.MapWrapper,
    Map = $__1.Map,
    StringMapWrapper = $__1.StringMapWrapper,
    List = $__1.List;
var eli = ($__element_95_injector__ = require("./element_injector"), $__element_95_injector__ && $__element_95_injector__.__esModule && $__element_95_injector__ || {default: $__element_95_injector__});
var $__2 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isPresent = $__2.isPresent,
    isBlank = $__2.isBlank,
    BaseException = $__2.BaseException;
var NgElement = ($__angular2_47_src_47_core_47_compiler_47_ng_95_element__ = require("angular2/src/core/compiler/ng_element"), $__angular2_47_src_47_core_47_compiler_47_ng_95_element__ && $__angular2_47_src_47_core_47_compiler_47_ng_95_element__.__esModule && $__angular2_47_src_47_core_47_compiler_47_ng_95_element__ || {default: $__angular2_47_src_47_core_47_compiler_47_ng_95_element__}).NgElement;
var vcModule = ($__view_95_container__ = require("./view_container"), $__view_95_container__ && $__view_95_container__.__esModule && $__view_95_container__ || {default: $__view_95_container__});
var viewModule = ($__view__ = require("./view"), $__view__ && $__view__.__esModule && $__view__ || {default: $__view__});
var BindingPropagationConfig = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}).BindingPropagationConfig;
var VIEW_POOL_CAPACITY = 'ViewFactory.viewPoolCapacity';
var ViewFactory = function ViewFactory(poolCapacityPerProtoView) {
  this._poolCapacityPerProtoView = poolCapacityPerProtoView;
  this._pooledViewsPerProtoView = MapWrapper.create();
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
  },
  _createView: function(protoView) {
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
}, {});
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