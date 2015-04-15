'use strict'; var parse5Adapter = require('angular2/src/dom/parse5_adapter'); parse5Adapter.Parse5DomAdapter.makeCurrent();
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_src_47_facade_47_lang__,
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
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__1.List,
    ListWrapper = $__1.ListWrapper,
    StringMap = $__1.StringMap;
var $__2 = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
    PromiseWrapper = $__2.PromiseWrapper,
    Promise = $__2.Promise;
var DateWrapper = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).DateWrapper;
var $__4 = ($__benchpress_47_common__ = require("benchpress/common"), $__benchpress_47_common__ && $__benchpress_47_common__.__esModule && $__benchpress_47_common__ || {default: $__benchpress_47_common__}),
    Reporter = $__4.Reporter,
    MultiReporter = $__4.MultiReporter,
    bind = $__4.bind,
    Injector = $__4.Injector,
    MeasureValues = $__4.MeasureValues;
function main() {
  function createReporters(ids) {
    return Injector.resolveAndCreate([ListWrapper.map(ids, (function(id) {
      return bind(id).toValue(new MockReporter(id));
    })), MultiReporter.createBindings(ids)]).asyncGet(MultiReporter);
  }
  describe('multi reporter', (function() {
    it('should reportMeasureValues to all', inject([AsyncTestCompleter], (function(async) {
      var mv = new MeasureValues(0, DateWrapper.now(), {});
      createReporters(['m1', 'm2']).then((function(r) {
        return r.reportMeasureValues(mv);
      })).then((function(values) {
        expect(values).toEqual([{
          'id': 'm1',
          'values': mv
        }, {
          'id': 'm2',
          'values': mv
        }]);
        async.done();
      }));
    })));
    it('should reportSample to call', inject([AsyncTestCompleter], (function(async) {
      var completeSample = [new MeasureValues(0, DateWrapper.now(), {}), new MeasureValues(1, DateWrapper.now(), {})];
      var validSample = [completeSample[1]];
      createReporters(['m1', 'm2']).then((function(r) {
        return r.reportSample(completeSample, validSample);
      })).then((function(values) {
        expect(values).toEqual([{
          'id': 'm1',
          'completeSample': completeSample,
          'validSample': validSample
        }, {
          'id': 'm2',
          'completeSample': completeSample,
          'validSample': validSample
        }]);
        async.done();
      }));
    })));
  }));
}
var MockReporter = function MockReporter(id) {
  $traceurRuntime.superConstructor($MockReporter).call(this);
  this._id = id;
};
var $MockReporter = MockReporter;
($traceurRuntime.createClass)(MockReporter, {
  reportMeasureValues: function(values) {
    return PromiseWrapper.resolve({
      'id': this._id,
      'values': values
    });
  },
  reportSample: function(completeSample, validSample) {
    return PromiseWrapper.resolve({
      'id': this._id,
      'completeSample': completeSample,
      'validSample': validSample
    });
  }
}, {}, Reporter);
Object.defineProperty(MockReporter.prototype.reportMeasureValues, "parameters", {get: function() {
    return [[MeasureValues]];
  }});
Object.defineProperty(MockReporter.prototype.reportSample, "parameters", {get: function() {
    return [[$traceurRuntime.genericType(List, MeasureValues)], [$traceurRuntime.genericType(List, MeasureValues)]];
  }});
//# sourceMappingURL=multi_reporter_spec.js.map

//# sourceMappingURL=./multi_reporter_spec.map
 main();