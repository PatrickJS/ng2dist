"use strict";
Object.defineProperties(module.exports, {
  Testability: {get: function() {
      return Testability;
    }},
  TestabilityRegistry: {get: function() {
      return TestabilityRegistry;
    }},
  __esModule: {value: true}
});
var $__angular2_47_di__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_core_47_testability_47_get_95_testability__;
var Injectable = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}).Injectable;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    Map = $__2.Map,
    MapWrapper = $__2.MapWrapper,
    List = $__2.List,
    ListWrapper = $__2.ListWrapper;
var $__3 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    StringWrapper = $__3.StringWrapper,
    isBlank = $__3.isBlank,
    BaseException = $__3.BaseException;
var getTestabilityModule = ($__angular2_47_src_47_core_47_testability_47_get_95_testability__ = require("angular2/src/core/testability/get_testability"), $__angular2_47_src_47_core_47_testability_47_get_95_testability__ && $__angular2_47_src_47_core_47_testability_47_get_95_testability__.__esModule && $__angular2_47_src_47_core_47_testability_47_get_95_testability__ || {default: $__angular2_47_src_47_core_47_testability_47_get_95_testability__});
var Testability = function Testability() {
  this._pendingCount = 0;
  this._callbacks = ListWrapper.create();
};
($traceurRuntime.createClass)(Testability, {
  increaseCount: function() {
    var delta = arguments[0] !== (void 0) ? arguments[0] : 1;
    this._pendingCount += delta;
    if (this._pendingCount < 0) {
      throw new BaseException('pending async requests below zero');
    } else if (this._pendingCount == 0) {
      this._runCallbacks();
    }
    return this._pendingCount;
  },
  _runCallbacks: function() {
    while (this._callbacks.length !== 0) {
      ListWrapper.removeLast(this._callbacks)();
    }
  },
  whenStable: function(callback) {
    ListWrapper.push(this._callbacks, callback);
    if (this._pendingCount === 0) {
      this._runCallbacks();
    }
  },
  getPendingCount: function() {
    return this._pendingCount;
  },
  findBindings: function(using, binding, exactMatch) {
    return [];
  }
}, {});
Object.defineProperty(Testability, "annotations", {get: function() {
    return [new Injectable()];
  }});
Object.defineProperty(Testability.prototype.increaseCount, "parameters", {get: function() {
    return [[$traceurRuntime.type.number]];
  }});
Object.defineProperty(Testability.prototype.whenStable, "parameters", {get: function() {
    return [[Function]];
  }});
Object.defineProperty(Testability.prototype.findBindings, "parameters", {get: function() {
    return [[], [$traceurRuntime.type.string], [$traceurRuntime.type.boolean]];
  }});
var TestabilityRegistry = function TestabilityRegistry() {
  this._applications = MapWrapper.create();
  getTestabilityModule.GetTestability.addToWindow(this);
};
($traceurRuntime.createClass)(TestabilityRegistry, {
  registerApplication: function(token, testability) {
    MapWrapper.set(this._applications, token, testability);
  },
  findTestabilityInTree: function(elem) {
    if (elem == null) {
      return null;
    }
    if (MapWrapper.contains(this._applications, elem)) {
      return MapWrapper.get(this._applications, elem);
    }
    if (DOM.isShadowRoot(elem)) {
      return this.findTestabilityInTree(DOM.getHost(elem));
    }
    return this.findTestabilityInTree(DOM.parentElement(elem));
  }
}, {});
Object.defineProperty(TestabilityRegistry, "annotations", {get: function() {
    return [new Injectable()];
  }});
Object.defineProperty(TestabilityRegistry.prototype.registerApplication, "parameters", {get: function() {
    return [[], [Testability]];
  }});
//# sourceMappingURL=testability.js.map

//# sourceMappingURL=./testability.map