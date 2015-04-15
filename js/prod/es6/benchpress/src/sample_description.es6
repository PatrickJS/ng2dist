import {StringMapWrapper,
  ListWrapper,
  StringMap} from 'angular2/src/facade/collection';
import {bind,
  OpaqueToken} from 'angular2/di';
import {Validator} from './validator';
import {Metric} from './metric';
import {Options} from './common_options';
export class SampleDescription {
  static get BINDINGS() {
    return _BINDINGS;
  }
  constructor(id, descriptions, metrics) {
    this.id = id;
    this.metrics = metrics;
    this.description = {};
    ListWrapper.forEach(descriptions, (description) => {
      StringMapWrapper.forEach(description, (value, prop) => this.description[prop] = value);
    });
  }
  toJson() {
    return {
      'id': this.id,
      'description': this.description,
      'metrics': this.metrics
    };
  }
}
Object.defineProperty(SampleDescription, "parameters", {get: function() {
    return [[], [assert.genericType(List, StringMap)], [StringMap]];
  }});
var _BINDINGS = [bind(SampleDescription).toFactory((metric, id, forceGc, userAgent, validator, defaultDesc, userDesc) => new SampleDescription(id, [{
  'forceGc': forceGc,
  'userAgent': userAgent
}, validator.describe(), defaultDesc, userDesc], metric.describe()), [Metric, Options.SAMPLE_ID, Options.FORCE_GC, Options.USER_AGENT, Validator, Options.DEFAULT_DESCRIPTION, Options.SAMPLE_DESCRIPTION])];
//# sourceMappingURL=sample_description.js.map

//# sourceMappingURL=./sample_description.map