System.register(["angular2/di", "angular2/src/facade/lang", "angular2/src/facade/collection", "angular2/src/facade/async", "./sampler", "./reporter/console_reporter", "./reporter/multi_reporter", "./validator/regression_slope_validator", "./validator/size_validator", "./validator", "./metric/perflog_metric", "./metric/multi_metric", "./webdriver/chrome_driver_extension", "./webdriver/ios_driver_extension", "./web_driver_extension", "./sample_description", "./web_driver_adapter", "./reporter", "./metric", "./common_options"], function($__export) {
  "use strict";
  var Injector,
      bind,
      isPresent,
      isBlank,
      List,
      ListWrapper,
      Promise,
      Sampler,
      SampleState,
      ConsoleReporter,
      MultiReporter,
      RegressionSlopeValidator,
      SizeValidator,
      Validator,
      PerflogMetric,
      MultiMetric,
      ChromeDriverExtension,
      IOsDriverExtension,
      WebDriverExtension,
      SampleDescription,
      WebDriverAdapter,
      Reporter,
      Metric,
      Options,
      Runner,
      _DEFAULT_BINDINGS;
  return {
    setters: [function($__m) {
      Injector = $__m.Injector;
      bind = $__m.bind;
    }, function($__m) {
      isPresent = $__m.isPresent;
      isBlank = $__m.isBlank;
    }, function($__m) {
      List = $__m.List;
      ListWrapper = $__m.ListWrapper;
    }, function($__m) {
      Promise = $__m.Promise;
    }, function($__m) {
      Sampler = $__m.Sampler;
      SampleState = $__m.SampleState;
    }, function($__m) {
      ConsoleReporter = $__m.ConsoleReporter;
    }, function($__m) {
      MultiReporter = $__m.MultiReporter;
    }, function($__m) {
      RegressionSlopeValidator = $__m.RegressionSlopeValidator;
    }, function($__m) {
      SizeValidator = $__m.SizeValidator;
    }, function($__m) {
      Validator = $__m.Validator;
    }, function($__m) {
      PerflogMetric = $__m.PerflogMetric;
    }, function($__m) {
      MultiMetric = $__m.MultiMetric;
    }, function($__m) {
      ChromeDriverExtension = $__m.ChromeDriverExtension;
    }, function($__m) {
      IOsDriverExtension = $__m.IOsDriverExtension;
    }, function($__m) {
      WebDriverExtension = $__m.WebDriverExtension;
    }, function($__m) {
      SampleDescription = $__m.SampleDescription;
    }, function($__m) {
      WebDriverAdapter = $__m.WebDriverAdapter;
    }, function($__m) {
      Reporter = $__m.Reporter;
    }, function($__m) {
      Metric = $__m.Metric;
    }, function($__m) {
      Options = $__m.Options;
    }],
    execute: function() {
      Runner = $__export("Runner", (function() {
        var Runner = function Runner() {
          var defaultBindings = arguments[0] !== (void 0) ? arguments[0] : null;
          if (isBlank(defaultBindings)) {
            defaultBindings = [];
          }
          this._defaultBindings = defaultBindings;
        };
        return ($traceurRuntime.createClass)(Runner, {sample: function($__1) {
            var $__2 = $__1,
                id = $__2.id,
                execute = $__2.execute,
                prepare = $__2.prepare,
                microMetrics = $__2.microMetrics,
                bindings = $__2.bindings;
            var sampleBindings = [_DEFAULT_BINDINGS, this._defaultBindings, bind(Options.SAMPLE_ID).toValue(id), bind(Options.EXECUTE).toValue(execute)];
            if (isPresent(prepare)) {
              ListWrapper.push(sampleBindings, bind(Options.PREPARE).toValue(prepare));
            }
            if (isPresent(microMetrics)) {
              ListWrapper.push(sampleBindings, bind(Options.MICRO_METRICS).toValue(microMetrics));
            }
            if (isPresent(bindings)) {
              ListWrapper.push(sampleBindings, bindings);
            }
            return Injector.resolveAndCreate(sampleBindings).asyncGet(Sampler).then((function(sampler) {
              return sampler.sample();
            }));
          }}, {});
      }()));
      Object.defineProperty(Runner, "parameters", {get: function() {
          return [[List]];
        }});
      _DEFAULT_BINDINGS = [Options.DEFAULT_BINDINGS, Sampler.BINDINGS, ConsoleReporter.BINDINGS, RegressionSlopeValidator.BINDINGS, SizeValidator.BINDINGS, ChromeDriverExtension.BINDINGS, IOsDriverExtension.BINDINGS, PerflogMetric.BINDINGS, SampleDescription.BINDINGS, MultiReporter.createBindings([ConsoleReporter]), MultiMetric.createBindings([PerflogMetric]), Reporter.bindTo(MultiReporter), Validator.bindTo(RegressionSlopeValidator), WebDriverExtension.bindTo([ChromeDriverExtension, IOsDriverExtension]), Metric.bindTo(MultiMetric), bind(Options.CAPABILITIES).toAsyncFactory((function(adapter) {
        return adapter.capabilities();
      }), [WebDriverAdapter]), bind(Options.USER_AGENT).toAsyncFactory((function(adapter) {
        return adapter.executeScript('return window.navigator.userAgent;');
      }), [WebDriverAdapter])];
    }
  };
});
//# sourceMappingURL=runner.es6.map

//# sourceMappingURL=./runner.js.map