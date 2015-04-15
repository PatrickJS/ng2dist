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
var $__3 = ($__benchpress_47_common__ = require("benchpress/common"), $__benchpress_47_common__ && $__benchpress_47_common__.__esModule && $__benchpress_47_common__ || {default: $__benchpress_47_common__}),
    Metric = $__3.Metric,
    MultiMetric = $__3.MultiMetric,
    bind = $__3.bind,
    Injector = $__3.Injector;
function main() {
  function createMetric(ids) {
    return Injector.resolveAndCreate([ListWrapper.map(ids, (function(id) {
      return bind(id).toValue(new MockMetric(id));
    })), MultiMetric.createBindings(ids)]).asyncGet(MultiMetric);
  }
  describe('multi metric', (function() {
    it('should merge descriptions', inject([AsyncTestCompleter], (function(async) {
      createMetric(['m1', 'm2']).then((function(m) {
        expect(m.describe()).toEqual({
          'm1': 'describe',
          'm2': 'describe'
        });
        async.done();
      }));
    })));
    it('should merge all beginMeasure calls', inject([AsyncTestCompleter], (function(async) {
      createMetric(['m1', 'm2']).then((function(m) {
        return m.beginMeasure();
      })).then((function(values) {
        expect(values).toEqual(['m1_beginMeasure', 'm2_beginMeasure']);
        async.done();
      }));
    })));
    [false, true].forEach((function(restartFlag) {
      it(("should merge all endMeasure calls for restart=" + restartFlag), inject([AsyncTestCompleter], (function(async) {
        createMetric(['m1', 'm2']).then((function(m) {
          return m.endMeasure(restartFlag);
        })).then((function(values) {
          expect(values).toEqual({
            'm1': {'restart': restartFlag},
            'm2': {'restart': restartFlag}
          });
          async.done();
        }));
      })));
    }));
  }));
}
var MockMetric = function MockMetric(id) {
  $traceurRuntime.superConstructor($MockMetric).call(this);
  this._id = id;
};
var $MockMetric = MockMetric;
($traceurRuntime.createClass)(MockMetric, {
  beginMeasure: function() {
    return PromiseWrapper.resolve((this._id + "_beginMeasure"));
  },
  endMeasure: function(restart) {
    var result = {};
    result[this._id] = {'restart': restart};
    return PromiseWrapper.resolve(result);
  },
  describe: function() {
    var result = {};
    result[this._id] = 'describe';
    return result;
  }
}, {}, Metric);
Object.defineProperty(MockMetric.prototype.endMeasure, "parameters", {get: function() {
    return [[$traceurRuntime.type.boolean]];
  }});
//# sourceMappingURL=multi_metric_spec.js.map

//# sourceMappingURL=./multi_metric_spec.map
 main();