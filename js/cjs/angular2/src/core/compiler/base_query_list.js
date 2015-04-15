"use strict";
var $__3;
Object.defineProperties(module.exports, {
  BaseQueryList: {get: function() {
      return BaseQueryList;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_core_47_annotations_47_annotations__;
var $__0 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__0.List,
    MapWrapper = $__0.MapWrapper,
    ListWrapper = $__0.ListWrapper;
var Directive = ($__angular2_47_src_47_core_47_annotations_47_annotations__ = require("angular2/src/core/annotations/annotations"), $__angular2_47_src_47_core_47_annotations_47_annotations__ && $__angular2_47_src_47_core_47_annotations_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_47_annotations__}).Directive;
var BaseQueryList = function BaseQueryList() {
  this._results = [];
  this._callbacks = [];
  this._dirty = false;
};
($traceurRuntime.createClass)(BaseQueryList, ($__3 = {}, Object.defineProperty($__3, Symbol.iterator, {
  value: function() {
    return this._results[Symbol.iterator]();
  },
  configurable: true,
  enumerable: true,
  writable: true
}), Object.defineProperty($__3, "reset", {
  value: function(newList) {
    this._results = newList;
    this._dirty = true;
  },
  configurable: true,
  enumerable: true,
  writable: true
}), Object.defineProperty($__3, "add", {
  value: function(obj) {
    ListWrapper.push(this._results, obj);
    this._dirty = true;
  },
  configurable: true,
  enumerable: true,
  writable: true
}), Object.defineProperty($__3, "fireCallbacks", {
  value: function() {
    if (this._dirty) {
      ListWrapper.forEach(this._callbacks, (function(c) {
        return c();
      }));
      this._dirty = false;
    }
  },
  configurable: true,
  enumerable: true,
  writable: true
}), Object.defineProperty($__3, "onChange", {
  value: function(callback) {
    ListWrapper.push(this._callbacks, callback);
  },
  configurable: true,
  enumerable: true,
  writable: true
}), Object.defineProperty($__3, "removeCallback", {
  value: function(callback) {
    ListWrapper.remove(this._callbacks, callback);
  },
  configurable: true,
  enumerable: true,
  writable: true
}), $__3), {});
//# sourceMappingURL=base_query_list.es6.map

//# sourceMappingURL=./base_query_list.map