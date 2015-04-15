"use strict";
Object.defineProperties(module.exports, {
  MultiReporter: {get: function() {
      return MultiReporter;
    }},
  __esModule: {value: true}
});
var $__angular2_47_di__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_async__,
    $___46__46__47_measure_95_values__,
    $___46__46__47_reporter__;
var $__0 = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}),
    bind = $__0.bind,
    Injector = $__0.Injector,
    OpaqueToken = $__0.OpaqueToken;
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__1.List,
    ListWrapper = $__1.ListWrapper;
var $__2 = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
    Promise = $__2.Promise,
    PromiseWrapper = $__2.PromiseWrapper;
var MeasureValues = ($___46__46__47_measure_95_values__ = require("../measure_values"), $___46__46__47_measure_95_values__ && $___46__46__47_measure_95_values__.__esModule && $___46__46__47_measure_95_values__ || {default: $___46__46__47_measure_95_values__}).MeasureValues;
var Reporter = ($___46__46__47_reporter__ = require("../reporter"), $___46__46__47_reporter__ && $___46__46__47_reporter__.__esModule && $___46__46__47_reporter__ || {default: $___46__46__47_reporter__}).Reporter;
var MultiReporter = function MultiReporter(reporters) {
  $traceurRuntime.superConstructor($MultiReporter).call(this);
  this._reporters = reporters;
};
var $MultiReporter = MultiReporter;
($traceurRuntime.createClass)(MultiReporter, {
  reportMeasureValues: function(values) {
    return PromiseWrapper.all(ListWrapper.map(this._reporters, (function(reporter) {
      return reporter.reportMeasureValues(values);
    })));
  },
  reportSample: function(completeSample, validSample) {
    return PromiseWrapper.all(ListWrapper.map(this._reporters, (function(reporter) {
      return reporter.reportSample(completeSample, validSample);
    })));
  }
}, {createBindings: function(childTokens) {
    return [bind(_CHILDREN).toAsyncFactory((function(injector) {
      return PromiseWrapper.all(ListWrapper.map(childTokens, (function(token) {
        return injector.asyncGet(token);
      })));
    }), [Injector]), bind($MultiReporter).toFactory((function(children) {
      return new $MultiReporter(children);
    }), [_CHILDREN])];
  }}, Reporter);
Object.defineProperty(MultiReporter.prototype.reportMeasureValues, "parameters", {get: function() {
    return [[MeasureValues]];
  }});
Object.defineProperty(MultiReporter.prototype.reportSample, "parameters", {get: function() {
    return [[$traceurRuntime.genericType(List, MeasureValues)], [$traceurRuntime.genericType(List, MeasureValues)]];
  }});
var _CHILDREN = new OpaqueToken('MultiReporter.children');
//# sourceMappingURL=multi_reporter.js.map

//# sourceMappingURL=./multi_reporter.map