"use strict";
Object.defineProperties(module.exports, {
  MultiMetric: {get: function() {
      return MultiMetric;
    }},
  __esModule: {value: true}
});
var $__angular2_47_di__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_async__,
    $___46__46__47_metric__;
var $__0 = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}),
    bind = $__0.bind,
    Injector = $__0.Injector,
    OpaqueToken = $__0.OpaqueToken;
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__1.List,
    ListWrapper = $__1.ListWrapper,
    StringMapWrapper = $__1.StringMapWrapper,
    StringMap = $__1.StringMap;
var $__2 = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
    Promise = $__2.Promise,
    PromiseWrapper = $__2.PromiseWrapper;
var Metric = ($___46__46__47_metric__ = require("../metric"), $___46__46__47_metric__ && $___46__46__47_metric__.__esModule && $___46__46__47_metric__ || {default: $___46__46__47_metric__}).Metric;
var MultiMetric = function MultiMetric(metrics) {
  $traceurRuntime.superConstructor($MultiMetric).call(this);
  this._metrics = metrics;
};
var $MultiMetric = MultiMetric;
($traceurRuntime.createClass)(MultiMetric, {
  beginMeasure: function() {
    return PromiseWrapper.all(ListWrapper.map(this._metrics, (function(metric) {
      return metric.beginMeasure();
    })));
  },
  endMeasure: function(restart) {
    return PromiseWrapper.all(ListWrapper.map(this._metrics, (function(metric) {
      return metric.endMeasure(restart);
    }))).then((function(values) {
      return mergeStringMaps(values);
    }));
  },
  describe: function() {
    return mergeStringMaps(this._metrics.map((function(metric) {
      return metric.describe();
    })));
  }
}, {createBindings: function(childTokens) {
    return [bind(_CHILDREN).toAsyncFactory((function(injector) {
      return PromiseWrapper.all(ListWrapper.map(childTokens, (function(token) {
        return injector.asyncGet(token);
      })));
    }), [Injector]), bind($MultiMetric).toFactory((function(children) {
      return new $MultiMetric(children);
    }), [_CHILDREN])];
  }}, Metric);
Object.defineProperty(MultiMetric.prototype.endMeasure, "parameters", {get: function() {
    return [[$traceurRuntime.type.boolean]];
  }});
function mergeStringMaps(maps) {
  var result = {};
  ListWrapper.forEach(maps, (function(map) {
    StringMapWrapper.forEach(map, (function(value, prop) {
      result[prop] = value;
    }));
  }));
  return result;
}
var _CHILDREN = new OpaqueToken('MultiMetric.children');
//# sourceMappingURL=multi_metric.js.map

//# sourceMappingURL=./multi_metric.map