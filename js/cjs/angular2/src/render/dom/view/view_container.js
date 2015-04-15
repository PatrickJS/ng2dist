"use strict";
Object.defineProperties(module.exports, {
  ViewContainer: {get: function() {
      return ViewContainer;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__view__,
    $___46__46__47_shadow_95_dom_47_light_95_dom__,
    $__view_95_factory__;
var $__0 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isPresent = $__0.isPresent,
    isBlank = $__0.isBlank,
    BaseException = $__0.BaseException;
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    ListWrapper = $__1.ListWrapper,
    MapWrapper = $__1.MapWrapper,
    List = $__1.List;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var viewModule = ($__view__ = require("./view"), $__view__ && $__view__.__esModule && $__view__ || {default: $__view__});
var ldModule = ($___46__46__47_shadow_95_dom_47_light_95_dom__ = require("../shadow_dom/light_dom"), $___46__46__47_shadow_95_dom_47_light_95_dom__ && $___46__46__47_shadow_95_dom_47_light_95_dom__.__esModule && $___46__46__47_shadow_95_dom_47_light_95_dom__ || {default: $___46__46__47_shadow_95_dom_47_light_95_dom__});
var vfModule = ($__view_95_factory__ = require("./view_factory"), $__view_95_factory__ && $__view_95_factory__.__esModule && $__view_95_factory__ || {default: $__view_95_factory__});
var ViewContainer = function ViewContainer(viewFactory, templateElement) {
  this._viewFactory = viewFactory;
  this.templateElement = templateElement;
  this._views = [];
  this._hostLightDom = null;
  this._hydrated = false;
};
var $ViewContainer = ViewContainer;
($traceurRuntime.createClass)(ViewContainer, {
  hydrate: function(destLightDom, hostLightDom) {
    this._hydrated = true;
    this._hostLightDom = hostLightDom;
    this._lightDom = destLightDom;
  },
  dehydrate: function() {
    if (isBlank(this._lightDom)) {
      for (var i = this._views.length - 1; i >= 0; i--) {
        var view = this._views[i];
        $ViewContainer.removeViewNodes(view);
        this._viewFactory.returnView(view);
      }
      this._views = [];
    } else {
      for (var i = 0; i < this._views.length; i++) {
        var view = this._views[i];
        this._viewFactory.returnView(view);
      }
      this._views = [];
      this._lightDom.redistribute();
    }
    this._hostLightDom = null;
    this._lightDom = null;
    this._hydrated = false;
  },
  get: function(index) {
    return this._views[index];
  },
  size: function() {
    return this._views.length;
  },
  _siblingToInsertAfter: function(index) {
    if (index == 0)
      return this.templateElement;
    return ListWrapper.last(this._views[index - 1].rootNodes);
  },
  _checkHydrated: function() {
    if (!this._hydrated)
      throw new BaseException('Cannot change dehydrated ViewContainer');
  },
  insert: function(view) {
    var atIndex = arguments[1] !== (void 0) ? arguments[1] : -1;
    if (!view.hydrated()) {
      view.hydrate(this._hostLightDom);
    }
    if (atIndex == -1)
      atIndex = this._views.length;
    ListWrapper.insert(this._views, atIndex, view);
    if (isBlank(this._lightDom)) {
      $ViewContainer.moveViewNodesAfterSibling(this._siblingToInsertAfter(atIndex), view);
    } else {
      this._lightDom.redistribute();
    }
    if (isPresent(this._hostLightDom)) {
      this._hostLightDom.redistribute();
    }
    return view;
  },
  detach: function(atIndex) {
    this._checkHydrated();
    var detachedView = this.get(atIndex);
    ListWrapper.removeAt(this._views, atIndex);
    if (isBlank(this._lightDom)) {
      $ViewContainer.removeViewNodes(detachedView);
    } else {
      this._lightDom.redistribute();
    }
    if (isPresent(this._hostLightDom)) {
      this._hostLightDom.redistribute();
    }
    return detachedView;
  },
  contentTagContainers: function() {
    return this._views;
  },
  nodes: function() {
    var r = [];
    for (var i = 0; i < this._views.length; ++i) {
      r = ListWrapper.concat(r, this._views[i].rootNodes);
    }
    return r;
  }
}, {
  moveViewNodesAfterSibling: function(sibling, view) {
    for (var i = view.rootNodes.length - 1; i >= 0; --i) {
      DOM.insertAfter(sibling, view.rootNodes[i]);
    }
  },
  removeViewNodes: function(view) {
    var len = view.rootNodes.length;
    if (len == 0)
      return ;
    var parent = view.rootNodes[0].parentNode;
    for (var i = len - 1; i >= 0; --i) {
      DOM.removeChild(parent, view.rootNodes[i]);
    }
  }
});
Object.defineProperty(ViewContainer, "parameters", {get: function() {
    return [[vfModule.ViewFactory], []];
  }});
Object.defineProperty(ViewContainer.prototype.hydrate, "parameters", {get: function() {
    return [[ldModule.LightDom], [ldModule.LightDom]];
  }});
Object.defineProperty(ViewContainer.prototype.get, "parameters", {get: function() {
    return [[$traceurRuntime.type.number]];
  }});
Object.defineProperty(ViewContainer.prototype._siblingToInsertAfter, "parameters", {get: function() {
    return [[$traceurRuntime.type.number]];
  }});
Object.defineProperty(ViewContainer.prototype.detach, "parameters", {get: function() {
    return [[$traceurRuntime.type.number]];
  }});
//# sourceMappingURL=view_container.js.map

//# sourceMappingURL=./view_container.map