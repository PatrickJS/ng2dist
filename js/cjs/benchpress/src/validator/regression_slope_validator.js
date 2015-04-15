"use strict";
Object.defineProperties(module.exports, {
  RegressionSlopeValidator: {get: function() {
      return RegressionSlopeValidator;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_di__,
    $___46__46__47_validator__,
    $___46__46__47_statistic__,
    $___46__46__47_measure_95_values__;
var $__0 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__0.List,
    ListWrapper = $__0.ListWrapper,
    StringMap = $__0.StringMap;
var $__1 = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}),
    bind = $__1.bind,
    OpaqueToken = $__1.OpaqueToken;
var Validator = ($___46__46__47_validator__ = require("../validator"), $___46__46__47_validator__ && $___46__46__47_validator__.__esModule && $___46__46__47_validator__ || {default: $___46__46__47_validator__}).Validator;
var Statistic = ($___46__46__47_statistic__ = require("../statistic"), $___46__46__47_statistic__ && $___46__46__47_statistic__.__esModule && $___46__46__47_statistic__ || {default: $___46__46__47_statistic__}).Statistic;
var MeasureValues = ($___46__46__47_measure_95_values__ = require("../measure_values"), $___46__46__47_measure_95_values__ && $___46__46__47_measure_95_values__.__esModule && $___46__46__47_measure_95_values__ || {default: $___46__46__47_measure_95_values__}).MeasureValues;
var RegressionSlopeValidator = function RegressionSlopeValidator(sampleSize, metric) {
  $traceurRuntime.superConstructor($RegressionSlopeValidator).call(this);
  this._sampleSize = sampleSize;
  this._metric = metric;
};
var $RegressionSlopeValidator = RegressionSlopeValidator;
($traceurRuntime.createClass)(RegressionSlopeValidator, {
  describe: function() {
    return {
      'sampleSize': this._sampleSize,
      'regressionSlopeMetric': this._metric
    };
  },
  validate: function(completeSample) {
    if (completeSample.length >= this._sampleSize) {
      var latestSample = ListWrapper.slice(completeSample, completeSample.length - this._sampleSize, completeSample.length);
      var xValues = [];
      var yValues = [];
      for (var i = 0; i < latestSample.length; i++) {
        ListWrapper.push(xValues, i);
        ListWrapper.push(yValues, latestSample[i].values[this._metric]);
      }
      var regressionSlope = Statistic.calculateRegressionSlope(xValues, Statistic.calculateMean(xValues), yValues, Statistic.calculateMean(yValues));
      return regressionSlope >= 0 ? latestSample : null;
    } else {
      return null;
    }
  }
}, {
  get SAMPLE_SIZE() {
    return _SAMPLE_SIZE;
  },
  get METRIC() {
    return _METRIC;
  },
  get BINDINGS() {
    return _BINDINGS;
  }
}, Validator);
Object.defineProperty(RegressionSlopeValidator.prototype.validate, "parameters", {get: function() {
    return [[$traceurRuntime.genericType(List, MeasureValues)]];
  }});
var _SAMPLE_SIZE = new OpaqueToken('RegressionSlopeValidator.sampleSize');
var _METRIC = new OpaqueToken('RegressionSlopeValidator.metric');
var _BINDINGS = [bind(RegressionSlopeValidator).toFactory((function(sampleSize, metric) {
  return new RegressionSlopeValidator(sampleSize, metric);
}), [_SAMPLE_SIZE, _METRIC]), bind(_SAMPLE_SIZE).toValue(10), bind(_METRIC).toValue('scriptTime')];
//# sourceMappingURL=regression_slope_validator.js.map

//# sourceMappingURL=./regression_slope_validator.map