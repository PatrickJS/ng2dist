'use strict'; var parse5Adapter = require('angular2/src/dom/parse5_adapter'); parse5Adapter.Parse5DomAdapter.makeCurrent();
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var $__angular2_47_test_95_lib__,
    $__benchpress_47_common__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_async__;
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
var $__1 = ($__benchpress_47_common__ = require("benchpress/common"), $__benchpress_47_common__ && $__benchpress_47_common__.__esModule && $__benchpress_47_common__ || {default: $__benchpress_47_common__}),
    Runner = $__1.Runner,
    Sampler = $__1.Sampler,
    SampleDescription = $__1.SampleDescription,
    Validator = $__1.Validator,
    bind = $__1.bind,
    Injector = $__1.Injector,
    Metric = $__1.Metric,
    Options = $__1.Options,
    WebDriverAdapter = $__1.WebDriverAdapter;
var isBlank = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).isBlank;
var $__3 = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
    Promise = $__3.Promise,
    PromiseWrapper = $__3.PromiseWrapper;
function main() {
  describe('runner', (function() {
    var injector;
    var runner;
    function createRunner() {
      var defaultBindings = arguments[0] !== (void 0) ? arguments[0] : null;
      if (isBlank(defaultBindings)) {
        defaultBindings = [];
      }
      runner = new Runner([defaultBindings, bind(Sampler).toFactory((function(_injector) {
        injector = _injector;
        return new MockSampler();
      }), [Injector]), bind(Metric).toFactory((function() {
        return new MockMetric();
      }), []), bind(Validator).toFactory((function() {
        return new MockValidator();
      }), []), bind(WebDriverAdapter).toFactory((function() {
        return new MockWebDriverAdapter();
      }), [])]);
      return runner;
    }
    it('should set SampleDescription.id', inject([AsyncTestCompleter], (function(async) {
      createRunner().sample({id: 'someId'}).then((function(_) {
        return injector.asyncGet(SampleDescription);
      })).then((function(desc) {
        expect(desc.id).toBe('someId');
        async.done();
      }));
    })));
    it('should merge SampleDescription.description', inject([AsyncTestCompleter], (function(async) {
      createRunner([bind(Options.DEFAULT_DESCRIPTION).toValue({'a': 1})]).sample({
        id: 'someId',
        bindings: [bind(Options.SAMPLE_DESCRIPTION).toValue({'b': 2})]
      }).then((function(_) {
        return injector.asyncGet(SampleDescription);
      })).then((function(desc) {
        expect(desc.description).toEqual({
          'forceGc': false,
          'userAgent': 'someUserAgent',
          'a': 1,
          'b': 2,
          'v': 11
        });
        async.done();
      }));
    })));
    it('should fill SampleDescription.metrics from the Metric', inject([AsyncTestCompleter], (function(async) {
      createRunner().sample({id: 'someId'}).then((function(_) {
        return injector.asyncGet(SampleDescription);
      })).then((function(desc) {
        expect(desc.metrics).toEqual({'m1': 'some metric'});
        async.done();
      }));
    })));
    it('should bind Options.EXECUTE', inject([AsyncTestCompleter], (function(async) {
      var execute = (function() {});
      createRunner().sample({
        id: 'someId',
        execute: execute
      }).then((function(_) {
        expect(injector.get(Options.EXECUTE)).toEqual(execute);
        async.done();
      }));
    })));
    it('should bind Options.PREPARE', inject([AsyncTestCompleter], (function(async) {
      var prepare = (function() {});
      createRunner().sample({
        id: 'someId',
        prepare: prepare
      }).then((function(_) {
        expect(injector.get(Options.PREPARE)).toEqual(prepare);
        async.done();
      }));
    })));
    it('should bind Options.MICRO_METRICS', inject([AsyncTestCompleter], (function(async) {
      createRunner().sample({
        id: 'someId',
        microMetrics: {'a': 'b'}
      }).then((function(_) {
        expect(injector.get(Options.MICRO_METRICS)).toEqual({'a': 'b'});
        async.done();
      }));
    })));
    it('should overwrite bindings per sample call', inject([AsyncTestCompleter], (function(async) {
      createRunner([bind(Options.DEFAULT_DESCRIPTION).toValue({'a': 1})]).sample({
        id: 'someId',
        bindings: [bind(Options.DEFAULT_DESCRIPTION).toValue({'a': 2})]
      }).then((function(_) {
        return injector.asyncGet(SampleDescription);
      })).then((function(desc) {
        expect(injector.get(SampleDescription).description['a']).toBe(2);
        async.done();
      }));
    })));
  }));
}
var MockWebDriverAdapter = function MockWebDriverAdapter() {
  $traceurRuntime.superConstructor($MockWebDriverAdapter).apply(this, arguments);
  ;
};
var $MockWebDriverAdapter = MockWebDriverAdapter;
($traceurRuntime.createClass)(MockWebDriverAdapter, {executeScript: function(script) {
    return PromiseWrapper.resolve('someUserAgent');
  }}, {}, WebDriverAdapter);
var MockValidator = function MockValidator() {
  $traceurRuntime.superConstructor($MockValidator).call(this);
};
var $MockValidator = MockValidator;
($traceurRuntime.createClass)(MockValidator, {describe: function() {
    return {'v': 11};
  }}, {}, Validator);
var MockMetric = function MockMetric() {
  $traceurRuntime.superConstructor($MockMetric).call(this);
};
var $MockMetric = MockMetric;
($traceurRuntime.createClass)(MockMetric, {describe: function() {
    return {'m1': 'some metric'};
  }}, {}, Metric);
var MockSampler = function MockSampler() {
  $traceurRuntime.superConstructor($MockSampler).call(this);
};
var $MockSampler = MockSampler;
($traceurRuntime.createClass)(MockSampler, {sample: function() {
    return PromiseWrapper.resolve(23);
  }}, {}, Sampler);
//# sourceMappingURL=runner_spec.js.map

//# sourceMappingURL=./runner_spec.map
 main();