System.register(["angular2/src/facade/lang", "angular2/src/facade/collection", "angular2/src/facade/async", "angular2/di", "../reporter", "../sample_description", "../measure_values", "../common_options"], function($__export) {
  "use strict";
  var DateWrapper,
      isPresent,
      isBlank,
      Json,
      List,
      Promise,
      PromiseWrapper,
      bind,
      OpaqueToken,
      Reporter,
      SampleDescription,
      MeasureValues,
      Options,
      JsonFileReporter,
      _PATH,
      _BINDINGS;
  return {
    setters: [function($__m) {
      DateWrapper = $__m.DateWrapper;
      isPresent = $__m.isPresent;
      isBlank = $__m.isBlank;
      Json = $__m.Json;
    }, function($__m) {
      List = $__m.List;
    }, function($__m) {
      Promise = $__m.Promise;
      PromiseWrapper = $__m.PromiseWrapper;
    }, function($__m) {
      bind = $__m.bind;
      OpaqueToken = $__m.OpaqueToken;
    }, function($__m) {
      Reporter = $__m.Reporter;
    }, function($__m) {
      SampleDescription = $__m.SampleDescription;
    }, function($__m) {
      MeasureValues = $__m.MeasureValues;
    }, function($__m) {
      Options = $__m.Options;
    }],
    execute: function() {
      JsonFileReporter = $__export("JsonFileReporter", (function($__super) {
        var JsonFileReporter = function JsonFileReporter(sampleDescription, path, writeFile, now) {
          $traceurRuntime.superConstructor(JsonFileReporter).call(this);
          this._description = sampleDescription;
          this._path = path;
          this._writeFile = writeFile;
          this._now = now;
        };
        return ($traceurRuntime.createClass)(JsonFileReporter, {
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
        }, $__super);
      }(Reporter)));
      Object.defineProperty(JsonFileReporter.prototype.reportMeasureValues, "parameters", {get: function() {
          return [[MeasureValues]];
        }});
      Object.defineProperty(JsonFileReporter.prototype.reportSample, "parameters", {get: function() {
          return [[assert.genericType(List, MeasureValues)], [assert.genericType(List, MeasureValues)]];
        }});
      _PATH = new OpaqueToken('JsonFileReporter.path');
      _BINDINGS = [bind(JsonFileReporter).toFactory((function(sampleDescription, path, writeFile, now) {
        return new JsonFileReporter(sampleDescription, path, writeFile, now);
      }), [SampleDescription, _PATH, Options.WRITE_FILE, Options.NOW]), bind(_PATH).toValue('.')];
    }
  };
});
//# sourceMappingURL=json_file_reporter.es6.map

//# sourceMappingURL=./json_file_reporter.js.map