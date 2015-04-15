"use strict";
Object.defineProperties(module.exports, {
  Runner: {get: function() {
      return Runner;
    }},
  __esModule: {value: true}
});
var $__angular2_47_di__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_async__,
    $__sampler__,
    $__reporter_47_console_95_reporter__,
    $__reporter_47_multi_95_reporter__,
    $__validator_47_regression_95_slope_95_validator__,
    $__validator_47_size_95_validator__,
    $__validator__,
    $__metric_47_perflog_95_metric__,
    $__metric_47_multi_95_metric__,
    $__webdriver_47_chrome_95_driver_95_extension__,
    $__webdriver_47_ios_95_driver_95_extension__,
    $__web_95_driver_95_extension__,
    $__sample_95_description__,
    $__web_95_driver_95_adapter__,
    $__reporter__,
    $__metric__,
    $__common_95_options__;
var $__0 = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}),
    Injector = $__0.Injector,
    bind = $__0.bind;
var $__1 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isPresent = $__1.isPresent,
    isBlank = $__1.isBlank;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__2.List,
    ListWrapper = $__2.ListWrapper;
var Promise = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}).Promise;
var $__4 = ($__sampler__ = require("./sampler"), $__sampler__ && $__sampler__.__esModule && $__sampler__ || {default: $__sampler__}),
    Sampler = $__4.Sampler,
    SampleState = $__4.SampleState;
var ConsoleReporter = ($__reporter_47_console_95_reporter__ = require("./reporter/console_reporter"), $__reporter_47_console_95_reporter__ && $__reporter_47_console_95_reporter__.__esModule && $__reporter_47_console_95_reporter__ || {default: $__reporter_47_console_95_reporter__}).ConsoleReporter;
var MultiReporter = ($__reporter_47_multi_95_reporter__ = require("./reporter/multi_reporter"), $__reporter_47_multi_95_reporter__ && $__reporter_47_multi_95_reporter__.__esModule && $__reporter_47_multi_95_reporter__ || {default: $__reporter_47_multi_95_reporter__}).MultiReporter;
var RegressionSlopeValidator = ($__validator_47_regression_95_slope_95_validator__ = require("./validator/regression_slope_validator"), $__validator_47_regression_95_slope_95_validator__ && $__validator_47_regression_95_slope_95_validator__.__esModule && $__validator_47_regression_95_slope_95_validator__ || {default: $__validator_47_regression_95_slope_95_validator__}).RegressionSlopeValidator;
var SizeValidator = ($__validator_47_size_95_validator__ = require("./validator/size_validator"), $__validator_47_size_95_validator__ && $__validator_47_size_95_validator__.__esModule && $__validator_47_size_95_validator__ || {default: $__validator_47_size_95_validator__}).SizeValidator;
var Validator = ($__validator__ = require("./validator"), $__validator__ && $__validator__.__esModule && $__validator__ || {default: $__validator__}).Validator;
var PerflogMetric = ($__metric_47_perflog_95_metric__ = require("./metric/perflog_metric"), $__metric_47_perflog_95_metric__ && $__metric_47_perflog_95_metric__.__esModule && $__metric_47_perflog_95_metric__ || {default: $__metric_47_perflog_95_metric__}).PerflogMetric;
var MultiMetric = ($__metric_47_multi_95_metric__ = require("./metric/multi_metric"), $__metric_47_multi_95_metric__ && $__metric_47_multi_95_metric__.__esModule && $__metric_47_multi_95_metric__ || {default: $__metric_47_multi_95_metric__}).MultiMetric;
var ChromeDriverExtension = ($__webdriver_47_chrome_95_driver_95_extension__ = require("./webdriver/chrome_driver_extension"), $__webdriver_47_chrome_95_driver_95_extension__ && $__webdriver_47_chrome_95_driver_95_extension__.__esModule && $__webdriver_47_chrome_95_driver_95_extension__ || {default: $__webdriver_47_chrome_95_driver_95_extension__}).ChromeDriverExtension;
var IOsDriverExtension = ($__webdriver_47_ios_95_driver_95_extension__ = require("./webdriver/ios_driver_extension"), $__webdriver_47_ios_95_driver_95_extension__ && $__webdriver_47_ios_95_driver_95_extension__.__esModule && $__webdriver_47_ios_95_driver_95_extension__ || {default: $__webdriver_47_ios_95_driver_95_extension__}).IOsDriverExtension;
var WebDriverExtension = ($__web_95_driver_95_extension__ = require("./web_driver_extension"), $__web_95_driver_95_extension__ && $__web_95_driver_95_extension__.__esModule && $__web_95_driver_95_extension__ || {default: $__web_95_driver_95_extension__}).WebDriverExtension;
var SampleDescription = ($__sample_95_description__ = require("./sample_description"), $__sample_95_description__ && $__sample_95_description__.__esModule && $__sample_95_description__ || {default: $__sample_95_description__}).SampleDescription;
var WebDriverAdapter = ($__web_95_driver_95_adapter__ = require("./web_driver_adapter"), $__web_95_driver_95_adapter__ && $__web_95_driver_95_adapter__.__esModule && $__web_95_driver_95_adapter__ || {default: $__web_95_driver_95_adapter__}).WebDriverAdapter;
var Reporter = ($__reporter__ = require("./reporter"), $__reporter__ && $__reporter__.__esModule && $__reporter__ || {default: $__reporter__}).Reporter;
var Metric = ($__metric__ = require("./metric"), $__metric__ && $__metric__.__esModule && $__metric__ || {default: $__metric__}).Metric;
var Options = ($__common_95_options__ = require("./common_options"), $__common_95_options__ && $__common_95_options__.__esModule && $__common_95_options__ || {default: $__common_95_options__}).Options;
var Runner = function Runner() {
  var defaultBindings = arguments[0] !== (void 0) ? arguments[0] : null;
  if (isBlank(defaultBindings)) {
    defaultBindings = [];
  }
  this._defaultBindings = defaultBindings;
};
($traceurRuntime.createClass)(Runner, {sample: function($__21) {
    var $__22 = $__21,
        id = $__22.id,
        execute = $__22.execute,
        prepare = $__22.prepare,
        microMetrics = $__22.microMetrics,
        bindings = $__22.bindings;
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
Object.defineProperty(Runner, "parameters", {get: function() {
    return [[List]];
  }});
var _DEFAULT_BINDINGS = [Options.DEFAULT_BINDINGS, Sampler.BINDINGS, ConsoleReporter.BINDINGS, RegressionSlopeValidator.BINDINGS, SizeValidator.BINDINGS, ChromeDriverExtension.BINDINGS, IOsDriverExtension.BINDINGS, PerflogMetric.BINDINGS, SampleDescription.BINDINGS, MultiReporter.createBindings([ConsoleReporter]), MultiMetric.createBindings([PerflogMetric]), Reporter.bindTo(MultiReporter), Validator.bindTo(RegressionSlopeValidator), WebDriverExtension.bindTo([ChromeDriverExtension, IOsDriverExtension]), Metric.bindTo(MultiMetric), bind(Options.CAPABILITIES).toAsyncFactory((function(adapter) {
  return adapter.capabilities();
}), [WebDriverAdapter]), bind(Options.USER_AGENT).toAsyncFactory((function(adapter) {
  return adapter.executeScript('return window.navigator.userAgent;');
}), [WebDriverAdapter])];
//# sourceMappingURL=runner.js.map

//# sourceMappingURL=./runner.map