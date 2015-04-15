import {DateWrapper,
  isPresent,
  isBlank,
  Json} from 'angular2/src/facade/lang';
import {List} from 'angular2/src/facade/collection';
import {Promise,
  PromiseWrapper} from 'angular2/src/facade/async';
import {bind,
  OpaqueToken} from 'angular2/di';
import {Reporter} from '../reporter';
import {SampleDescription} from '../sample_description';
import {MeasureValues} from '../measure_values';
import {Options} from '../common_options';
export class JsonFileReporter extends Reporter {
  static get PATH() {
    return _PATH;
  }
  static get BINDINGS() {
    return _BINDINGS;
  }
  constructor(sampleDescription, path, writeFile, now) {
    super();
    this._description = sampleDescription;
    this._path = path;
    this._writeFile = writeFile;
    this._now = now;
  }
  reportMeasureValues(measureValues) {
    return PromiseWrapper.resolve(null);
  }
  reportSample(completeSample, validSample) {
    var content = Json.stringify({
      'description': this._description,
      'completeSample': completeSample,
      'validSample': validSample
    });
    var filePath = `${this._path}/${this._description.id}_${DateWrapper.toMillis(this._now())}.json`;
    return this._writeFile(filePath, content);
  }
}
Object.defineProperty(JsonFileReporter.prototype.reportMeasureValues, "parameters", {get: function() {
    return [[MeasureValues]];
  }});
Object.defineProperty(JsonFileReporter.prototype.reportSample, "parameters", {get: function() {
    return [[assert.genericType(List, MeasureValues)], [assert.genericType(List, MeasureValues)]];
  }});
var _PATH = new OpaqueToken('JsonFileReporter.path');
var _BINDINGS = [bind(JsonFileReporter).toFactory((sampleDescription, path, writeFile, now) => new JsonFileReporter(sampleDescription, path, writeFile, now), [SampleDescription, _PATH, Options.WRITE_FILE, Options.NOW]), bind(_PATH).toValue('.')];
//# sourceMappingURL=json_file_reporter.js.map

//# sourceMappingURL=./json_file_reporter.map