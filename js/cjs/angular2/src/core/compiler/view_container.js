"use strict";
Object.defineProperties(module.exports, {
  ViewContainer: {get: function() {
      return ViewContainer;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_di__,
    $__angular2_47_src_47_core_47_compiler_47_element_95_injector__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_render_47_api__,
    $__view__,
    $__view_95_factory__;
var $__0 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    ListWrapper = $__0.ListWrapper,
    MapWrapper = $__0.MapWrapper,
    List = $__0.List;
var BaseException = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).BaseException;
var Injector = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}).Injector;
var eiModule = ($__angular2_47_src_47_core_47_compiler_47_element_95_injector__ = require("angular2/src/core/compiler/element_injector"), $__angular2_47_src_47_core_47_compiler_47_element_95_injector__ && $__angular2_47_src_47_core_47_compiler_47_element_95_injector__.__esModule && $__angular2_47_src_47_core_47_compiler_47_element_95_injector__ || {default: $__angular2_47_src_47_core_47_compiler_47_element_95_injector__});
var $__3 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isPresent = $__3.isPresent,
    isBlank = $__3.isBlank;
var renderApi = ($__angular2_47_src_47_render_47_api__ = require("angular2/src/render/api"), $__angular2_47_src_47_render_47_api__ && $__angular2_47_src_47_render_47_api__.__esModule && $__angular2_47_src_47_render_47_api__ || {default: $__angular2_47_src_47_render_47_api__});
var viewModule = ($__view__ = require("./view"), $__view__ && $__view__.__esModule && $__view__ || {default: $__view__});
var vfModule = ($__view_95_factory__ = require("./view_factory"), $__view_95_factory__ && $__view_95_factory__.__esModule && $__view_95_factory__ || {default: $__view_95_factory__});
var ViewContainer = function ViewContainer(viewFactory, parentView, defaultProtoView, elementInjector) {
  this.viewFactory = viewFactory;
  this.render = null;
  this.parentView = parentView;
  this.defaultProtoView = defaultProtoView;
  this.elementInjector = elementInjector;
  this._views = [];
  this.appInjector = null;
  this.hostElementInjector = null;
};
($traceurRuntime.createClass)(ViewContainer, {
  internalHydrateRecurse: function(render, appInjector, hostElementInjector) {
    this.render = render;
    this.appInjector = appInjector;
    this.hostElementInjector = hostElementInjector;
  },
  internalDehydrateRecurse: function() {
    this.appInjector = null;
    this.hostElementInjector = null;
    this.render = null;
    for (var i = this._views.length - 1; i >= 0; i--) {
      var view = this._views[i];
      view.changeDetector.remove();
      this._unlinkElementInjectors(view);
      view.internalDehydrateRecurse();
      this.viewFactory.returnView(view);
    }
    this._views = [];
  },
  clear: function() {
    for (var i = this._views.length - 1; i >= 0; i--) {
      this.remove(i);
    }
  },
  get: function(index) {
    return this._views[index];
  },
  get length() {
    return this._views.length;
  },
  _siblingInjectorToLinkAfter: function(index) {
    if (index == 0)
      return null;
    return ListWrapper.last(this._views[index - 1].rootElementInjectors);
  },
  hydrated: function() {
    return isPresent(this.appInjector);
  },
  create: function() {
    var atIndex = arguments[0] !== (void 0) ? arguments[0] : -1;
    if (!this.hydrated())
      throw new BaseException('Cannot create views on a dehydrated ViewContainer');
    var newView = this.viewFactory.getView(this.defaultProtoView);
    this._insertWithoutRender(newView, atIndex);
    newView.hydrate(this.appInjector, this.hostElementInjector, this.parentView.context, this.parentView.locals);
    this.defaultProtoView.renderer.insertViewIntoContainer(this.render, newView.render, atIndex);
    return newView;
  },
  insert: function(view) {
    var atIndex = arguments[1] !== (void 0) ? arguments[1] : -1;
    this._insertWithoutRender(view, atIndex);
    this.defaultProtoView.renderer.insertViewIntoContainer(this.render, view.render, atIndex);
    return view;
  },
  _insertWithoutRender: function(view) {
    var atIndex = arguments[1] !== (void 0) ? arguments[1] : -1;
    if (atIndex == -1)
      atIndex = this._views.length;
    ListWrapper.insert(this._views, atIndex, view);
    this.parentView.changeDetector.addChild(view.changeDetector);
    this._linkElementInjectors(this._siblingInjectorToLinkAfter(atIndex), view);
    return view;
  },
  remove: function() {
    var atIndex = arguments[0] !== (void 0) ? arguments[0] : -1;
    if (atIndex == -1)
      atIndex = this._views.length - 1;
    var view = this.detach(atIndex);
    view.dehydrate();
    this.viewFactory.returnView(view);
  },
  detach: function() {
    var atIndex = arguments[0] !== (void 0) ? arguments[0] : -1;
    if (atIndex == -1)
      atIndex = this._views.length - 1;
    var detachedView = this.get(atIndex);
    ListWrapper.removeAt(this._views, atIndex);
    this.defaultProtoView.renderer.detachViewFromContainer(this.render, atIndex);
    detachedView.changeDetector.remove();
    this._unlinkElementInjectors(detachedView);
    return detachedView;
  },
  contentTagContainers: function() {
    return this._views;
  },
  _linkElementInjectors: function(sibling, view) {
    for (var i = view.rootElementInjectors.length - 1; i >= 0; i--) {
      view.rootElementInjectors[i].linkAfter(this.elementInjector, sibling);
    }
  },
  _unlinkElementInjectors: function(view) {
    for (var i = 0; i < view.rootElementInjectors.length; ++i) {
      view.rootElementInjectors[i].unlink();
    }
  }
}, {});
Object.defineProperty(ViewContainer, "parameters", {get: function() {
    return [[vfModule.ViewFactory], [viewModule.AppView], [viewModule.AppProtoView], [eiModule.ElementInjector]];
  }});
Object.defineProperty(ViewContainer.prototype.internalHydrateRecurse, "parameters", {get: function() {
    return [[renderApi.ViewContainerRef], [Injector], [eiModule.ElementInjector]];
  }});
Object.defineProperty(ViewContainer.prototype.get, "parameters", {get: function() {
    return [[$traceurRuntime.type.number]];
  }});
Object.defineProperty(ViewContainer.prototype._siblingInjectorToLinkAfter, "parameters", {get: function() {
    return [[$traceurRuntime.type.number]];
  }});
//# sourceMappingURL=view_container.js.map

//# sourceMappingURL=./view_container.map