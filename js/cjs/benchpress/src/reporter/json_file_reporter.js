"use strict";
Object.defineProperties(module.exports, {
  JsonFileReporter: {get: function() {
      return JsonFileReporter;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_di__,
    $___46__46__47_reporter__,
    $___46__46__47_sample_95_description__,
    $___46__46__47_measure_95_values__,
    $___46__46__47_common_95_options__;
var $__0 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    DateWrapper = $__0.DateWrapper,
    isPresent = $__0.isPresent,
    isBlank = $__0.isBlank,
    Json = $__0.Json;
var List = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).List;
var $__2 = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
    Promise = $__2.Promise,
    PromiseWrapper = $__2.PromiseWrapper;
var $__3 = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}),
    bind = $__3.bind,
    OpaqueToken = $__3.OpaqueToken;
var Reporter = ($___46__46__47_reporter__ = require("../reporter"), $___46__46__47_reporter__ && $___46__46__47_reporter__.__esModule && $___46__46__47_reporter__ || {default: $___46__46__47_reporter__}).Reporter;
var SampleDescription = ($___46__46__47_sample_95_description__ = require("../sample_description"), $___46__46__47_sample_95_description__ && $___46__46__47_sample_95_description__.__esModule && $___46__46__47_sample_95_description__ || {default: $___46__46__47_sample_95_description__}).SampleDescription;
var MeasureValues = ($___46__46__47_measure_95_values__ = require("../measure_values"), $___46__46__47_measure_95_values__ && $___46__46__47_measure_95_values__.__esModule && $___46__46__47_measure_95_values__ || {default: $___46__46__47_measure_95_values__}).MeasureValues;
var Options = ($___46__46__47_common_95_options__ = require("../common_options"), $___46__46__47_common_95_options__ && $___46__46__47_common_95_options__.__esModule && $___46__46__47_common_95_options__ || {default: $___46__46__47_common_95_options__}).Options;
var JsonFileReporter = function JsonFileReporter(sampleDescription, path, writeFile, now) {
  $traceurRuntime.superConstructor($JsonFileReporter).call(this);
  this._description = sampleDescription;
  this._path = path;
  this._writeFile = writeFile;
  this._now = now;
};
var $JsonFileReporter = JsonFileReporter;
($traceurRuntime.createClass)(JsonFileReporter, {
  reportMeasureValues: function(measureValues) {
    return PromiseWrapper.resolve(null);
  },
  reportSample: function(completeSample, validSample) {
    var content = Json.stringify({
      'description': this._description,
      'completeSample': completeSample,
      'validSample': validSample
    });
    var filePath = (this._path + "/" + this._description.id + "_" + DateWrapper.toMillis(this._now()) + ".json");
    return this._writeFile(filePath, content);
  }
}, {
  get PATH() {
    return _PATH;
  },
  get BINDINGS() {
    return _BINDINGS;
  }
}, Reporter);
Object.defineProperty(JsonFileReporter.prototype.reportMeasureValues, "parameters", {get: function() {
    return [[MeasureValues]];
  }});
Object.defineProperty(JsonFileReporter.prototype.reportSample, "parameters", {get: function() {
    return [[$traceurRuntime.genericType(List, MeasureValues)], [$traceurRuntime.genericType(List, MeasureValues)]];
  }});
var _PATH = new OpaqueToken('JsonFileReporter.path');
var _BINDINGS = [bind(JsonFileReporter).toFactory((function(sampleDescription, path, writeFile, now) {
  return new JsonFileReporter(sampleDescription, path, writeFile, now);
}), [SampleDescription, _PATH, Options.WRITE_FILE, Options.NOW]), bind(_PATH).toValue('.')];
//# sourceMappingURL=json_file_reporter.js.map

//# sourceMappingURL=./json_file_reporter.map