System.register(["rtts_assert/rtts_assert", "angular2/test_lib", "benchpress/common", "angular2/src/facade/lang", "angular2/src/facade/async"], function($__export) {
  "use strict";
  var assert,
      afterEach,
      AsyncTestCompleter,
      beforeEach,
      ddescribe,
      describe,
      expect,
      iit,
      inject,
      it,
      xit,
      Runner,
      Sampler,
      SampleDescription,
      Validator,
      bind,
      Injector,
      Metric,
      Options,
      WebDriverAdapter,
      isBlank,
      Promise,
      PromiseWrapper,
      MockWebDriverAdapter,
      MockValidator,
      MockMetric,
      MockSampler;
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
  $__export("main", main);
  return {
    setters: [function($__m) {
      assert = $__m.assert;
    }, function($__m) {
      afterEach = $__m.afterEach;
      AsyncTestCompleter = $__m.AsyncTestCompleter;
      beforeEach = $__m.beforeEach;
      ddescribe = $__m.ddescribe;
      describe = $__m.describe;
      expect = $__m.expect;
      iit = $__m.iit;
      inject = $__m.inject;
      it = $__m.it;
      xit = $__m.xit;
    }, function($__m) {
      Runner = $__m.Runner;
      Sampler = $__m.Sampler;
      SampleDescription = $__m.SampleDescription;
      Validator = $__m.Validator;
      bind = $__m.bind;
      Injector = $__m.Injector;
      Metric = $__m.Metric;
      Options = $__m.Options;
      WebDriverAdapter = $__m.WebDriverAdapter;
    }, function($__m) {
      isBlank = $__m.isBlank;
    }, function($__m) {
      Promise = $__m.Promise;
      PromiseWrapper = $__m.PromiseWrapper;
    }],
    execute: function() {
      MockWebDriverAdapter = (function($__super) {
        var MockWebDriverAdapter = function MockWebDriverAdapter() {
          $traceurRuntime.superConstructor(MockWebDriverAdapter).apply(this, arguments);
          ;
        };
        return ($traceurRuntime.createClass)(MockWebDriverAdapter, {executeScript: function(script) {
            return assert.returnType((PromiseWrapper.resolve('someUserAgent')), Promise);
          }}, {}, $__super);
      }(WebDriverAdapter));
      MockValidator = (function($__super) {
        var MockValidator = function MockValidator() {
          $traceurRuntime.superConstructor(MockValidator).call(this);
        };
        return ($traceurRuntime.createClass)(MockValidator, {describe: function() {
            return {'v': 11};
          }}, {}, $__super);
      }(Validator));
      MockMetric = (function($__super) {
        var MockMetric = function MockMetric() {
          $traceurRuntime.superConstructor(MockMetric).call(this);
        };
        return ($traceurRuntime.createClass)(MockMetric, {describe: function() {
            return {'m1': 'some metric'};
          }}, {}, $__super);
      }(Metric));
      MockSampler = (function($__super) {
        var MockSampler = function MockSampler() {
          $traceurRuntime.superConstructor(MockSampler).call(this);
        };
        return ($traceurRuntime.createClass)(MockSampler, {sample: function() {
            return assert.returnType((PromiseWrapper.resolve(23)), Promise);
          }}, {}, $__super);
      }(Sampler));
    }
  };
});
//# sourceMappingURL=runner_spec.es6.map

//# sourceMappingURL=./runner_spec.js.map