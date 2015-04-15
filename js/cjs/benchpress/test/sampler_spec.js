'use strict'; var parse5Adapter = require('angular2/src/dom/parse5_adapter'); parse5Adapter.Parse5DomAdapter.makeCurrent();
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_async__,
    $__benchpress_47_common__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    afterEach = $__0.afterEach,
    AsyncTestCompleter = $__0.AsyncTestCompleter,
    beforeEach = $__0.beforeEach,
    ddescribe = $__0.ddescribe,
    describe = $__0.describe,
    expect = $__0.expect,
    iit = $__0.iit,
    inject = $__0.inject,
    it = $__0.it,
    xit = $__0.xit;
var $__1 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isBlank = $__1.isBlank,
    isPresent = $__1.isPresent,
    BaseException = $__1.BaseException,
    stringify = $__1.stringify,
    Date = $__1.Date,
    DateWrapper = $__1.DateWrapper;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    ListWrapper = $__2.ListWrapper,
    List = $__2.List;
var $__3 = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
    PromiseWrapper = $__3.PromiseWrapper,
    Promise = $__3.Promise;
var $__4 = ($__benchpress_47_common__ = require("benchpress/common"), $__benchpress_47_common__ && $__benchpress_47_common__.__esModule && $__benchpress_47_common__ || {default: $__benchpress_47_common__}),
    Sampler = $__4.Sampler,
    WebDriverAdapter = $__4.WebDriverAdapter,
    WebDriverExtension = $__4.WebDriverExtension,
    Validator = $__4.Validator,
    Metric = $__4.Metric,
    Reporter = $__4.Reporter,
    Browser = $__4.Browser,
    bind = $__4.bind,
    Injector = $__4.Injector,
    Options = $__4.Options,
    MeasureValues = $__4.MeasureValues;
function main() {
  var EMPTY_EXECUTE = (function() {});
  describe('sampler', (function() {
    var sampler;
    function createSampler() {
      var $__6 = arguments[0] !== (void 0) ? arguments[0] : {},
          driver = $__6.driver,
          driverExtension = $__6.driverExtension,
          metric = $__6.metric,
          reporter = $__6.reporter,
          validator = $__6.validator,
          forceGc = $__6.forceGc,
          prepare = $__6.prepare,
          execute = $__6.execute;
      var time = 1000;
      if (isBlank(metric)) {
        metric = new MockMetric([]);
      }
      if (isBlank(reporter)) {
        reporter = new MockReporter([]);
      }
      if (isBlank(driver)) {
        driver = new MockDriverAdapter([]);
      }
      if (isBlank(driverExtension)) {
        driverExtension = new MockDriverExtension([]);
      }
      var bindings = [Options.DEFAULT_BINDINGS, Sampler.BINDINGS, bind(Metric).toValue(metric), bind(Reporter).toValue(reporter), bind(WebDriverAdapter).toValue(driver), bind(WebDriverExtension).toValue(driverExtension), bind(Options.EXECUTE).toValue(execute), bind(Validator).toValue(validator), bind(Options.NOW).toValue((function() {
        return DateWrapper.fromMillis(time++);
      }))];
      if (isPresent(prepare)) {
        ListWrapper.push(bindings, bind(Options.PREPARE).toValue(prepare));
      }
      if (isPresent(forceGc)) {
        ListWrapper.push(bindings, bind(Options.FORCE_GC).toValue(forceGc));
      }
      sampler = Injector.resolveAndCreate(bindings).get(Sampler);
    }
    it('should call the prepare and execute callbacks using WebDriverAdapter.waitFor', inject([AsyncTestCompleter], (function(async) {
      var log = [];
      var count = 0;
      var driver = new MockDriverAdapter([], (function(callback) {
        var result = callback();
        ListWrapper.push(log, result);
        return PromiseWrapper.resolve(result);
      }));
      createSampler({
        driver: driver,
        validator: createCountingValidator(2),
        prepare: (function() {
          return count++;
        }),
        execute: (function() {
          return count++;
        })
      });
      sampler.sample().then((function(_) {
        expect(count).toBe(4);
        expect(log).toEqual([0, 1, 2, 3]);
        async.done();
      }));
    })));
    it('should call prepare, gc, beginMeasure, execute, gc, endMeasure for every iteration', inject([AsyncTestCompleter], (function(async) {
      var workCount = 0;
      var log = [];
      createSampler({
        forceGc: true,
        metric: createCountingMetric(log),
        driverExtension: new MockDriverExtension(log),
        validator: createCountingValidator(2),
        prepare: (function() {
          ListWrapper.push(log, ("p" + workCount++));
        }),
        execute: (function() {
          ListWrapper.push(log, ("w" + workCount++));
        })
      });
      sampler.sample().then((function(_) {
        expect(log).toEqual([['gc'], 'p0', ['gc'], ['beginMeasure'], 'w1', ['gc'], ['endMeasure', false, {'script': 0}], 'p2', ['gc'], ['beginMeasure'], 'w3', ['gc'], ['endMeasure', false, {'script': 1}]]);
        async.done();
      }));
    })));
    it('should call execute, gc, endMeasure for every iteration if there is no prepare callback', inject([AsyncTestCompleter], (function(async) {
      var log = [];
      var workCount = 0;
      createSampler({
        forceGc: true,
        metric: createCountingMetric(log),
        driverExtension: new MockDriverExtension(log),
        validator: createCountingValidator(2),
        execute: (function() {
          ListWrapper.push(log, ("w" + workCount++));
        }),
        prepare: null
      });
      sampler.sample().then((function(_) {
        expect(log).toEqual([['gc'], ['beginMeasure'], 'w0', ['gc'], ['endMeasure', true, {'script': 0}], 'w1', ['gc'], ['endMeasure', true, {'script': 1}]]);
        async.done();
      }));
    })));
    it('should not gc if the flag is not set', inject([AsyncTestCompleter], (function(async) {
      var log = [];
      createSampler({
        metric: createCountingMetric(),
        driverExtension: new MockDriverExtension(log),
        validator: createCountingValidator(2),
        prepare: EMPTY_EXECUTE,
        execute: EMPTY_EXECUTE
      });
      sampler.sample().then((function(_) {
        expect(log).toEqual([]);
        async.done();
      }));
    })));
    it('should only collect metrics for execute and ignore metrics from prepare', inject([AsyncTestCompleter], (function(async) {
      var scriptTime = 0;
      var iterationCount = 1;
      createSampler({
        validator: createCountingValidator(2),
        metric: new MockMetric([], (function() {
          var result = PromiseWrapper.resolve({'script': scriptTime});
          scriptTime = 0;
          return result;
        })),
        prepare: (function() {
          scriptTime = 1 * iterationCount;
        }),
        execute: (function() {
          scriptTime = 10 * iterationCount;
          iterationCount++;
        })
      });
      sampler.sample().then((function(state) {
        expect(state.completeSample.length).toBe(2);
        expect(state.completeSample[0]).toEqual(mv(0, 1000, {'script': 10}));
        expect(state.completeSample[1]).toEqual(mv(1, 1001, {'script': 20}));
        async.done();
      }));
    })));
    it('should call the validator for every execution and store the valid sample', inject([AsyncTestCompleter], (function(async) {
      var log = [];
      var validSample = [{}];
      createSampler({
        metric: createCountingMetric(),
        validator: createCountingValidator(2, validSample, log),
        execute: EMPTY_EXECUTE
      });
      sampler.sample().then((function(state) {
        expect(state.validSample).toBe(validSample);
        expect(log.length).toBe(2);
        expect(log[0]).toEqual(['validate', [mv(0, 1000, {'script': 0})], null]);
        expect(log[1]).toEqual(['validate', [mv(0, 1000, {'script': 0}), mv(1, 1001, {'script': 1})], validSample]);
        async.done();
      }));
    })));
    it('should report the metric values', inject([AsyncTestCompleter], (function(async) {
      var log = [];
      var validSample = [{}];
      createSampler({
        validator: createCountingValidator(2, validSample),
        metric: createCountingMetric(),
        reporter: new MockReporter(log),
        execute: EMPTY_EXECUTE
      });
      sampler.sample().then((function(_) {
        expect(log.length).toBe(3);
        expect(log[0]).toEqual(['reportMeasureValues', mv(0, 1000, {'script': 0})]);
        expect(log[1]).toEqual(['reportMeasureValues', mv(1, 1001, {'script': 1})]);
        expect(log[2]).toEqual(['reportSample', [mv(0, 1000, {'script': 0}), mv(1, 1001, {'script': 1})], validSample]);
        async.done();
      }));
    })));
  }));
}
function mv(runIndex, time, values) {
  return new MeasureValues(runIndex, DateWrapper.fromMillis(time), values);
}
function createCountingValidator(count) {
  var validSample = arguments[1] !== (void 0) ? arguments[1] : null;
  var log = arguments[2] !== (void 0) ? arguments[2] : null;
  return new MockValidator(log, (function(completeSample) {
    count--;
    if (count === 0) {
      return isPresent(validSample) ? validSample : completeSample;
    } else {
      return null;
    }
  }));
}
function createCountingMetric() {
  var log = arguments[0] !== (void 0) ? arguments[0] : null;
  var scriptTime = 0;
  return new MockMetric(log, (function() {
    return {'script': scriptTime++};
  }));
}
var MockDriverAdapter = function MockDriverAdapter() {
  var log = arguments[0] !== (void 0) ? arguments[0] : null;
  var waitFor = arguments[1] !== (void 0) ? arguments[1] : null;
  $traceurRuntime.superConstructor($MockDriverAdapter).call(this);
  if (isBlank(log)) {
    log = [];
  }
  this._log = log;
  this._waitFor = waitFor;
};
var $MockDriverAdapter = MockDriverAdapter;
($traceurRuntime.createClass)(MockDriverAdapter, {waitFor: function(callback) {
    if (isPresent(this._waitFor)) {
      return this._waitFor(callback);
    } else {
      return PromiseWrapper.resolve(callback());
    }
  }}, {}, WebDriverAdapter);
Object.defineProperty(MockDriverAdapter.prototype.waitFor, "parameters", {get: function() {
    return [[Function]];
  }});
var MockDriverExtension = function MockDriverExtension() {
  var log = arguments[0] !== (void 0) ? arguments[0] : null;
  $traceurRuntime.superConstructor($MockDriverExtension).call(this);
  if (isBlank(log)) {
    log = [];
  }
  this._log = log;
};
var $MockDriverExtension = MockDriverExtension;
($traceurRuntime.createClass)(MockDriverExtension, {gc: function() {
    ListWrapper.push(this._log, ['gc']);
    return PromiseWrapper.resolve(null);
  }}, {}, WebDriverExtension);
var MockValidator = function MockValidator() {
  var log = arguments[0] !== (void 0) ? arguments[0] : null;
  var validate = arguments[1] !== (void 0) ? arguments[1] : null;
  $traceurRuntime.superConstructor($MockValidator).call(this);
  this._validate = validate;
  if (isBlank(log)) {
    log = [];
  }
  this._log = log;
};
var $MockValidator = MockValidator;
($traceurRuntime.createClass)(MockValidator, {validate: function(completeSample) {
    var stableSample = isPresent(this._validate) ? this._validate(completeSample) : completeSample;
    ListWrapper.push(this._log, ['validate', completeSample, stableSample]);
    return stableSample;
  }}, {}, Validator);
Object.defineProperty(MockValidator.prototype.validate, "parameters", {get: function() {
    return [[$traceurRuntime.genericType(List, MeasureValues)]];
  }});
var MockMetric = function MockMetric() {
  var log = arguments[0] !== (void 0) ? arguments[0] : null;
  var endMeasure = arguments[1] !== (void 0) ? arguments[1] : null;
  $traceurRuntime.superConstructor($MockMetric).call(this);
  this._endMeasure = endMeasure;
  if (isBlank(log)) {
    log = [];
  }
  this._log = log;
};
var $MockMetric = MockMetric;
($traceurRuntime.createClass)(MockMetric, {
  beginMeasure: function() {
    ListWrapper.push(this._log, ['beginMeasure']);
    return PromiseWrapper.resolve(null);
  },
  endMeasure: function(restart) {
    var measureValues = isPresent(this._endMeasure) ? this._endMeasure() : {};
    ListWrapper.push(this._log, ['endMeasure', restart, measureValues]);
    return PromiseWrapper.resolve(measureValues);
  }
}, {}, Metric);
var MockReporter = function MockReporter() {
  var log = arguments[0] !== (void 0) ? arguments[0] : null;
  $traceurRuntime.superConstructor($MockReporter).call(this);
  if (isBlank(log)) {
    log = [];
  }
  this._log = log;
};
var $MockReporter = MockReporter;
($traceurRuntime.createClass)(MockReporter, {
  reportMeasureValues: function(values) {
    ListWrapper.push(this._log, ['reportMeasureValues', values]);
    return PromiseWrapper.resolve(null);
  },
  reportSample: function(completeSample, validSample) {
    ListWrapper.push(this._log, ['reportSample', completeSample, validSample]);
    return PromiseWrapper.resolve(null);
  }
}, {}, Reporter);
//# sourceMappingURL=sampler_spec.js.map

//# sourceMappingURL=./sampler_spec.map
 main();