"use strict";
Object.defineProperties(module.exports, {
  Sampler: {get: function() {
      return Sampler;
    }},
  SampleState: {get: function() {
      return SampleState;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_di__,
    $__metric__,
    $__validator__,
    $__reporter__,
    $__web_95_driver_95_extension__,
    $__web_95_driver_95_adapter__,
    $__common_95_options__,
    $__measure_95_values__;
var $__0 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isPresent = $__0.isPresent,
    isBlank = $__0.isBlank,
    Date = $__0.Date,
    DateWrapper = $__0.DateWrapper;
var $__1 = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
    Promise = $__1.Promise,
    PromiseWrapper = $__1.PromiseWrapper;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    StringMapWrapper = $__2.StringMapWrapper,
    StringMap = $__2.StringMap,
    List = $__2.List,
    ListWrapper = $__2.ListWrapper;
var $__3 = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}),
    bind = $__3.bind,
    OpaqueToken = $__3.OpaqueToken;
var Metric = ($__metric__ = require("./metric"), $__metric__ && $__metric__.__esModule && $__metric__ || {default: $__metric__}).Metric;
var Validator = ($__validator__ = require("./validator"), $__validator__ && $__validator__.__esModule && $__validator__ || {default: $__validator__}).Validator;
var Reporter = ($__reporter__ = require("./reporter"), $__reporter__ && $__reporter__.__esModule && $__reporter__ || {default: $__reporter__}).Reporter;
var WebDriverExtension = ($__web_95_driver_95_extension__ = require("./web_driver_extension"), $__web_95_driver_95_extension__ && $__web_95_driver_95_extension__.__esModule && $__web_95_driver_95_extension__ || {default: $__web_95_driver_95_extension__}).WebDriverExtension;
var WebDriverAdapter = ($__web_95_driver_95_adapter__ = require("./web_driver_adapter"), $__web_95_driver_95_adapter__ && $__web_95_driver_95_adapter__.__esModule && $__web_95_driver_95_adapter__ || {default: $__web_95_driver_95_adapter__}).WebDriverAdapter;
var Options = ($__common_95_options__ = require("./common_options"), $__common_95_options__ && $__common_95_options__.__esModule && $__common_95_options__ || {default: $__common_95_options__}).Options;
var MeasureValues = ($__measure_95_values__ = require("./measure_values"), $__measure_95_values__ && $__measure_95_values__.__esModule && $__measure_95_values__ || {default: $__measure_95_values__}).MeasureValues;
var Sampler = function Sampler() {
  var $__13 = arguments[0] !== (void 0) ? arguments[0] : {},
      driver = $__13.driver,
      driverExtension = $__13.driverExtension,
      metric = $__13.metric,
      reporter = $__13.reporter,
      validator = $__13.validator,
      forceGc = $__13.forceGc,
      prepare = $__13.prepare,
      execute = $__13.execute,
      now = $__13.now;
  this._driver = driver;
  this._driverExtension = driverExtension;
  this._metric = metric;
  this._reporter = reporter;
  this._validator = validator;
  this._forceGc = forceGc;
  this._prepare = prepare;
  this._execute = execute;
  this._now = now;
};
($traceurRuntime.createClass)(Sampler, {
  sample: function() {
    var $__11 = this;
    var loop;
    loop = (function(lastState) {
      return $__11._iterate(lastState).then((function(newState) {
        if (isPresent(newState.validSample)) {
          return newState;
        } else {
          return loop(newState);
        }
      }));
    });
    return this._gcIfNeeded().then((function(_) {
      return loop(new SampleState([], null));
    }));
  },
  _gcIfNeeded: function() {
    if (this._forceGc) {
      return this._driverExtension.gc();
    } else {
      return PromiseWrapper.resolve(null);
    }
  },
  _iterate: function(lastState) {
    var $__11 = this;
    var resultPromise;
    if (isPresent(this._prepare)) {
      resultPromise = this._driver.waitFor(this._prepare).then((function(_) {
        return $__11._gcIfNeeded();
      }));
    } else {
      resultPromise = PromiseWrapper.resolve(null);
    }
    if (isPresent(this._prepare) || lastState.completeSample.length === 0) {
      resultPromise = resultPromise.then((function(_) {
        return $__11._metric.beginMeasure();
      }));
    }
    return resultPromise.then((function(_) {
      return $__11._driver.waitFor($__11._execute);
    })).then((function(_) {
      return $__11._gcIfNeeded();
    })).then((function(_) {
      return $__11._metric.endMeasure(isBlank($__11._prepare));
    })).then((function(measureValues) {
      return $__11._report(lastState, measureValues);
    }));
  },
  _report: function(state, metricValues) {
    var $__11 = this;
    var measureValues = new MeasureValues(state.completeSample.length, this._now(), metricValues);
    var completeSample = ListWrapper.concat(state.completeSample, [measureValues]);
    var validSample = this._validator.validate(completeSample);
    var resultPromise = this._reporter.reportMeasureValues(measureValues);
    if (isPresent(validSample)) {
      resultPromise = resultPromise.then((function(_) {
        return $__11._reporter.reportSample(completeSample, validSample);
      }));
    }
    return resultPromise.then((function(_) {
      return new SampleState(completeSample, validSample);
    }));
  }
}, {get BINDINGS() {
    return _BINDINGS;
  }});
Object.defineProperty(Sampler.prototype._report, "parameters", {get: function() {
    return [[SampleState], [StringMap]];
  }});
var SampleState = function SampleState(completeSample, validSample) {
  this.completeSample = completeSample;
  this.validSample = validSample;
};
($traceurRuntime.createClass)(SampleState, {}, {});
Object.defineProperty(SampleState, "parameters", {get: function() {
    return [[List], [List]];
  }});
var _BINDINGS = [bind(Sampler).toFactory((function(driver, driverExtension, metric, reporter, validator, forceGc, prepare, execute, now) {
  return new Sampler({
    driver: driver,
    driverExtension: driverExtension,
    reporter: reporter,
    validator: validator,
    metric: metric,
    forceGc: forceGc,
    prepare: prepare !== false ? prepare : null,
    execute: execute,
    now: now
  });
}), [WebDriverAdapter, WebDriverExtension, Metric, Reporter, Validator, Options.FORCE_GC, Options.PREPARE, Options.EXECUTE, Options.NOW])];
//# sourceMappingURL=sampler.js.map

//# sourceMappingURL=./sampler.map