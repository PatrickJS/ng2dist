System.register(["angular2/test_lib", "angular2/src/facade/collection", "angular2/src/facade/async", "angular2/src/facade/lang", "benchpress/common"], function($__export) {
  "use strict";
  var afterEach,
      AsyncTestCompleter,
      beforeEach,
      ddescribe,
      describe,
      expect,
      iit,
      inject,
      it,
      xit,
      List,
      ListWrapper,
      StringMap,
      PromiseWrapper,
      Promise,
      DateWrapper,
      Reporter,
      MultiReporter,
      bind,
      Injector,
      MeasureValues,
      MockReporter;
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
  $__export("main", main);
  return {
    setters: [function($__m) {
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
      List = $__m.List;
      ListWrapper = $__m.ListWrapper;
      StringMap = $__m.StringMap;
    }, function($__m) {
      PromiseWrapper = $__m.PromiseWrapper;
      Promise = $__m.Promise;
    }, function($__m) {
      DateWrapper = $__m.DateWrapper;
    }, function($__m) {
      Reporter = $__m.Reporter;
      MultiReporter = $__m.MultiReporter;
      bind = $__m.bind;
      Injector = $__m.Injector;
      MeasureValues = $__m.MeasureValues;
    }],
    execute: function() {
      MockReporter = (function($__super) {
        var MockReporter = function MockReporter(id) {
          $traceurRuntime.superConstructor(MockReporter).call(this);
          this._id = id;
        };
        return ($traceurRuntime.createClass)(MockReporter, {
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
        }, {}, $__super);
      }(Reporter));
      Object.defineProperty(MockReporter.prototype.reportMeasureValues, "parameters", {get: function() {
          return [[MeasureValues]];
        }});
      Object.defineProperty(MockReporter.prototype.reportSample, "parameters", {get: function() {
          return [[assert.genericType(List, MeasureValues)], [assert.genericType(List, MeasureValues)]];
        }});
    }
  };
});
//# sourceMappingURL=multi_reporter_spec.es6.map

//# sourceMappingURL=./multi_reporter_spec.js.map