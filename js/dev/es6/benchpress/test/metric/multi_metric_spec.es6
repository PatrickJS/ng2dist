import {assert} from "rtts_assert/rtts_assert";
import {afterEach,
  AsyncTestCompleter,
  beforeEach,
  ddescribe,
  describe,
  expect,
  iit,
  inject,
  it,
  xit} from 'angular2/test_lib';
import {List,
  ListWrapper,
  StringMap} from 'angular2/src/facade/collection';
import {PromiseWrapper,
  Promise} from 'angular2/src/facade/async';
import {Metric,
  MultiMetric,
  bind,
  Injector} from 'benchpress/common';
export function main() {
  function createMetric(ids) {
    return Injector.resolveAndCreate([ListWrapper.map(ids, (id) => bind(id).toValue(new MockMetric(id))), MultiMetric.createBindings(ids)]).asyncGet(MultiMetric);
  }
  describe('multi metric', () => {
    it('should merge descriptions', inject([AsyncTestCompleter], (async) => {
      createMetric(['m1', 'm2']).then((m) => {
        expect(m.describe()).toEqual({
          'm1': 'describe',
          'm2': 'describe'
        });
        async.done();
      });
    }));
    it('should merge all beginMeasure calls', inject([AsyncTestCompleter], (async) => {
      createMetric(['m1', 'm2']).then((m) => m.beginMeasure()).then((values) => {
        expect(values).toEqual(['m1_beginMeasure', 'm2_beginMeasure']);
        async.done();
      });
    }));
    [false, true].forEach((restartFlag) => {
      it(`should merge all endMeasure calls for restart=${restartFlag}`, inject([AsyncTestCompleter], (async) => {
        createMetric(['m1', 'm2']).then((m) => m.endMeasure(restartFlag)).then((values) => {
          expect(values).toEqual({
            'm1': {'restart': restartFlag},
            'm2': {'restart': restartFlag}
          });
          async.done();
        });
      }));
    });
  });
}
class MockMetric extends Metric {
  constructor(id) {
    super();
    this._id = id;
  }
  beginMeasure() {
    return assert.returnType((PromiseWrapper.resolve(`${this._id}_beginMeasure`)), Promise);
  }
  endMeasure(restart) {
    assert.argumentTypes(restart, assert.type.boolean);
    var result = {};
    result[this._id] = {'restart': restart};
    return assert.returnType((PromiseWrapper.resolve(result)), assert.genericType(Promise, StringMap));
  }
  describe() {
    var result = {};
    result[this._id] = 'describe';
    return assert.returnType((result), StringMap);
  }
}
Object.defineProperty(MockMetric.prototype.endMeasure, "parameters", {get: function() {
    return [[assert.type.boolean]];
  }});
//# sourceMappingURL=multi_metric_spec.js.map

//# sourceMappingURL=./multi_metric_spec.map