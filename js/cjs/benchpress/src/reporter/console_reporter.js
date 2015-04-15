"use strict";
Object.defineProperties(module.exports, {
  ConsoleReporter: {get: function() {
      return ConsoleReporter;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_src_47_facade_47_math__,
    $__angular2_47_di__,
    $___46__46__47_statistic__,
    $___46__46__47_reporter__,
    $___46__46__47_sample_95_description__,
    $___46__46__47_measure_95_values__;
var $__0 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    print = $__0.print,
    isPresent = $__0.isPresent,
    isBlank = $__0.isBlank,
    NumberWrapper = $__0.NumberWrapper;
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    StringMapWrapper = $__1.StringMapWrapper,
    ListWrapper = $__1.ListWrapper,
    List = $__1.List;
var $__2 = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
    Promise = $__2.Promise,
    PromiseWrapper = $__2.PromiseWrapper;
var Math = ($__angular2_47_src_47_facade_47_math__ = require("angular2/src/facade/math"), $__angular2_47_src_47_facade_47_math__ && $__angular2_47_src_47_facade_47_math__.__esModule && $__angular2_47_src_47_facade_47_math__ || {default: $__angular2_47_src_47_facade_47_math__}).Math;
var $__4 = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}),
    bind = $__4.bind,
    OpaqueToken = $__4.OpaqueToken;
var Statistic = ($___46__46__47_statistic__ = require("../statistic"), $___46__46__47_statistic__ && $___46__46__47_statistic__.__esModule && $___46__46__47_statistic__ || {default: $___46__46__47_statistic__}).Statistic;
var Reporter = ($___46__46__47_reporter__ = require("../reporter"), $___46__46__47_reporter__ && $___46__46__47_reporter__.__esModule && $___46__46__47_reporter__ || {default: $___46__46__47_reporter__}).Reporter;
var SampleDescription = ($___46__46__47_sample_95_description__ = require("../sample_description"), $___46__46__47_sample_95_description__ && $___46__46__47_sample_95_description__.__esModule && $___46__46__47_sample_95_description__ || {default: $___46__46__47_sample_95_description__}).SampleDescription;
var MeasureValues = ($___46__46__47_measure_95_values__ = require("../measure_values"), $___46__46__47_measure_95_values__ && $___46__46__47_measure_95_values__.__esModule && $___46__46__47_measure_95_values__ || {default: $___46__46__47_measure_95_values__}).MeasureValues;
var ConsoleReporter = function ConsoleReporter(columnWidth, sampleDescription, print) {
  $traceurRuntime.superConstructor($ConsoleReporter).call(this);
  this._columnWidth = columnWidth;
  this._metricNames = $ConsoleReporter._sortedProps(sampleDescription.metrics);
  this._print = print;
  this._printDescription(sampleDescription);
};
var $ConsoleReporter = ConsoleReporter;
($traceurRuntime.createClass)(ConsoleReporter, {
  _printDescription: function(sampleDescription) {
    var $__9 = this;
    this._print(("BENCHMARK " + sampleDescription.id));
    this._print('Description:');
    var props = $ConsoleReporter._sortedProps(sampleDescription.description);
    props.forEach((function(prop) {
      $__9._print(("- " + prop + ": " + sampleDescription.description[prop]));
    }));
    this._print('Metrics:');
    this._metricNames.forEach((function(metricName) {
      $__9._print(("- " + metricName + ": " + sampleDescription.metrics[metricName]));
    }));
    this._print('');
    this._printStringRow(this._metricNames);
    this._printStringRow(this._metricNames.map((function(_) {
      return '';
    })), '-');
  },
  reportMeasureValues: function(measureValues) {
    var formattedValues = ListWrapper.map(this._metricNames, (function(metricName) {
      var value = measureValues.values[metricName];
      return $ConsoleReporter._formatNum(value);
    }));
    this._printStringRow(formattedValues);
    return PromiseWrapper.resolve(null);
  },
  reportSample: function(completeSample, validSample) {
    this._printStringRow(this._metricNames.map((function(_) {
      return '';
    })), '=');
    this._printStringRow(ListWrapper.map(this._metricNames, (function(metricName) {
      var sample = ListWrapper.map(validSample, (function(measureValues) {
        return measureValues.values[metricName];
      }));
      var mean = Statistic.calculateMean(sample);
      var cv = Statistic.calculateCoefficientOfVariation(sample, mean);
      var formattedCv = NumberWrapper.isNaN(cv) ? 'NaN' : Math.floor(cv);
      return ($ConsoleReporter._formatNum(mean) + "+-" + formattedCv + "%");
    })));
    return PromiseWrapper.resolve(null);
  },
  _printStringRow: function(parts) {
    var fill = arguments[1] !== (void 0) ? arguments[1] : ' ';
    var $__9 = this;
    this._print(ListWrapper.map(parts, (function(part) {
      var w = $__9._columnWidth;
      return $ConsoleReporter._lpad(part, w, fill);
    })).join(' | '));
  }
}, {
  get PRINT() {
    return _PRINT;
  },
  get COLUMN_WIDTH() {
    return _COLUMN_WIDTH;
  },
  get BINDINGS() {
    return _BINDINGS;
  },
  _lpad: function(value, columnWidth) {
    var fill = arguments[2] !== (void 0) ? arguments[2] : ' ';
    var result = '';
    for (var i = 0; i < columnWidth - value.length; i++) {
      result += fill;
    }
    return result + value;
  },
  _formatNum: function(n) {
    return NumberWrapper.toFixed(n, 2);
  },
  _sortedProps: function(obj) {
    var props = [];
    StringMapWrapper.forEach(obj, (function(value, prop) {
      return ListWrapper.push(props, prop);
    }));
    props.sort();
    return props;
  }
}, Reporter);
Object.defineProperty(ConsoleReporter.prototype.reportMeasureValues, "parameters", {get: function() {
    return [[MeasureValues]];
  }});
Object.defineProperty(ConsoleReporter.prototype.reportSample, "parameters", {get: function() {
    return [[$traceurRuntime.genericType(List, MeasureValues)], [$traceurRuntime.genericType(List, MeasureValues)]];
  }});
var _PRINT = new OpaqueToken('ConsoleReporter.print');
var _COLUMN_WIDTH = new OpaqueToken('ConsoleReporter.columnWidht');
var _BINDINGS = [bind(ConsoleReporter).toFactory((function(columnWidth, sampleDescription, print) {
  return new ConsoleReporter(columnWidth, sampleDescription, print);
}), [_COLUMN_WIDTH, SampleDescription, _PRINT]), bind(_COLUMN_WIDTH).toValue(18), bind(_PRINT).toValue(print)];
//# sourceMappingURL=console_reporter.js.map

//# sourceMappingURL=./console_reporter.map