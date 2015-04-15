"use strict";
Object.defineProperties(module.exports, {
  Reporter: {get: function() {
      return Reporter;
    }},
  __esModule: {value: true}
});
var $__angular2_47_di__,
    $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_src_47_facade_47_lang__,
    $__measure_95_values__;
var bind = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}).bind;
var $__1 = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
    Promise = $__1.Promise,
    PromiseWrapper = $__1.PromiseWrapper;
var $__2 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    ABSTRACT = $__2.ABSTRACT,
    BaseException = $__2.BaseException;
var MeasureValues = ($__measure_95_values__ = require("./measure_values"), $__measure_95_values__ && $__measure_95_values__.__esModule && $__measure_95_values__ || {default: $__measure_95_values__}).MeasureValues;
var Reporter = function Reporter() {
  ;
};
var $Reporter = Reporter;
($traceurRuntime.createClass)(Reporter, {
  reportMeasureValues: function(values) {
    throw new BaseException('NYI');
  },
  reportSample: function(completeSample, validSample) {
    throw new BaseException('NYI');
  }
}, {bindTo: function(delegateToken) {
    return [bind($Reporter).toFactory((function(delegate) {
      return delegate;
    }), [delegateToken])];
  }});
Object.defineProperty(Reporter, "annotations", {get: function() {
    return [new ABSTRACT()];
  }});
Object.defineProperty(Reporter.prototype.reportMeasureValues, "parameters", {get: function() {
    return [[MeasureValues]];
  }});
Object.defineProperty(Reporter.prototype.reportSample, "parameters", {get: function() {
    return [[$traceurRuntime.genericType(List, MeasureValues)], [$traceurRuntime.genericType(List, MeasureValues)]];
  }});
//# sourceMappingURL=reporter.js.map

//# sourceMappingURL=./reporter.map