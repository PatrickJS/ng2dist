System.register(["angular2/test_lib", "angular2/src/facade/collection", "angular2/src/facade/async", "angular2/src/facade/lang", "benchpress/common", "../trace_event_factory"], function($__export) {
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
      StringMapWrapper,
      PromiseWrapper,
      Promise,
      isPresent,
      isBlank,
      Metric,
      PerflogMetric,
      WebDriverExtension,
      PerfLogFeatures,
      bind,
      Injector,
      Options,
      TraceEventFactory,
      MockDriverExtension;
  function main() {
    var commandLog;
    var eventFactory = new TraceEventFactory('timeline', 'pid0');
    function createMetric(perfLogs) {
      var microMetrics = arguments[1] !== (void 0) ? arguments[1] : null;
      var perfLogFeatures = arguments[2] !== (void 0) ? arguments[2] : null;
      commandLog = [];
      if (isBlank(perfLogFeatures)) {
        perfLogFeatures = new PerfLogFeatures({
          render: true,
          gc: true
        });
      }
      if (isBlank(microMetrics)) {
        microMetrics = StringMapWrapper.create();
      }
      var bindings = [Options.DEFAULT_BINDINGS, PerflogMetric.BINDINGS, bind(Options.MICRO_METRICS).toValue(microMetrics), bind(PerflogMetric.SET_TIMEOUT).toValue((function(fn, millis) {
        ListWrapper.push(commandLog, ['setTimeout', millis]);
        fn();
      })), bind(WebDriverExtension).toValue(new MockDriverExtension(perfLogs, commandLog, perfLogFeatures))];
      return Injector.resolveAndCreate(bindings).get(PerflogMetric);
    }
    describe('perflog metric', (function() {
      it('should describe itself based on the perfLogFeatrues', (function() {
        expect(createMetric([[]], null, new PerfLogFeatures()).describe()).toEqual({
          'scriptTime': 'script execution time in ms, including gc and render',
          'pureScriptTime': 'script execution time in ms, without gc nor render'
        });
        expect(createMetric([[]], null, new PerfLogFeatures({
          render: true,
          gc: false
        })).describe()).toEqual({
          'scriptTime': 'script execution time in ms, including gc and render',
          'pureScriptTime': 'script execution time in ms, without gc nor render',
          'renderTime': 'render time in and ouside of script in ms'
        });
        expect(createMetric([[]]).describe()).toEqual({
          'scriptTime': 'script execution time in ms, including gc and render',
          'pureScriptTime': 'script execution time in ms, without gc nor render',
          'renderTime': 'render time in and ouside of script in ms',
          'gcTime': 'gc time in and ouside of script in ms',
          'gcAmount': 'gc amount in kbytes',
          'majorGcTime': 'time of major gcs in ms'
        });
      }));
      it('should describe itself based on micro metrics', (function() {
        var description = createMetric([[]], {'myMicroMetric': 'someDesc'}).describe();
        expect(description['myMicroMetric']).toEqual('someDesc');
      }));
      describe('beginMeasure', (function() {
        it('should mark the timeline', inject([AsyncTestCompleter], (function(async) {
          var metric = createMetric([[]]);
          metric.beginMeasure().then((function(_) {
            expect(commandLog).toEqual([['timeBegin', 'benchpress0']]);
            async.done();
          }));
        })));
      }));
      describe('endMeasure', (function() {
        it('should mark and aggregate events in between the marks', inject([AsyncTestCompleter], (function(async) {
          var events = [[eventFactory.markStart('benchpress0', 0), eventFactory.start('script', 4), eventFactory.end('script', 6), eventFactory.markEnd('benchpress0', 10)]];
          var metric = createMetric(events);
          metric.beginMeasure().then((function(_) {
            return metric.endMeasure(false);
          })).then((function(data) {
            expect(commandLog).toEqual([['timeBegin', 'benchpress0'], ['timeEnd', 'benchpress0', null], 'readPerfLog']);
            expect(data['scriptTime']).toBe(2);
            async.done();
          }));
        })));
        it('should restart timing', inject([AsyncTestCompleter], (function(async) {
          var events = [[eventFactory.markStart('benchpress0', 0), eventFactory.markEnd('benchpress0', 1), eventFactory.markStart('benchpress1', 2)], [eventFactory.markEnd('benchpress1', 3)]];
          var metric = createMetric(events);
          metric.beginMeasure().then((function(_) {
            return metric.endMeasure(true);
          })).then((function(_) {
            return metric.endMeasure(true);
          })).then((function(_) {
            expect(commandLog).toEqual([['timeBegin', 'benchpress0'], ['timeEnd', 'benchpress0', 'benchpress1'], 'readPerfLog', ['timeEnd', 'benchpress1', 'benchpress2'], 'readPerfLog']);
            async.done();
          }));
        })));
        it('should loop and aggregate until the end mark is present', inject([AsyncTestCompleter], (function(async) {
          var events = [[eventFactory.markStart('benchpress0', 0), eventFactory.start('script', 1)], [eventFactory.end('script', 2)], [eventFactory.start('script', 3), eventFactory.end('script', 5), eventFactory.markEnd('benchpress0', 10)]];
          var metric = createMetric(events);
          metric.beginMeasure().then((function(_) {
            return metric.endMeasure(false);
          })).then((function(data) {
            expect(commandLog).toEqual([['timeBegin', 'benchpress0'], ['timeEnd', 'benchpress0', null], 'readPerfLog', ['setTimeout', 100], 'readPerfLog', ['setTimeout', 100], 'readPerfLog']);
            expect(data['scriptTime']).toBe(3);
            async.done();
          }));
        })));
        it('should store events after the end mark for the next call', inject([AsyncTestCompleter], (function(async) {
          var events = [[eventFactory.markStart('benchpress0', 0), eventFactory.markEnd('benchpress0', 1), eventFactory.markStart('benchpress1', 1), eventFactory.start('script', 1), eventFactory.end('script', 2)], [eventFactory.start('script', 3), eventFactory.end('script', 5), eventFactory.markEnd('benchpress1', 6)]];
          var metric = createMetric(events);
          metric.beginMeasure().then((function(_) {
            return metric.endMeasure(true);
          })).then((function(data) {
            expect(data['scriptTime']).toBe(0);
            return metric.endMeasure(true);
          })).then((function(data) {
            expect(commandLog).toEqual([['timeBegin', 'benchpress0'], ['timeEnd', 'benchpress0', 'benchpress1'], 'readPerfLog', ['timeEnd', 'benchpress1', 'benchpress2'], 'readPerfLog']);
            expect(data['scriptTime']).toBe(3);
            async.done();
          }));
        })));
      }));
      describe('aggregation', (function() {
        function aggregate(events) {
          var microMetrics = arguments[1] !== (void 0) ? arguments[1] : null;
          ListWrapper.insert(events, 0, eventFactory.markStart('benchpress0', 0));
          ListWrapper.push(events, eventFactory.markEnd('benchpress0', 10));
          var metric = createMetric([events], microMetrics);
          return metric.beginMeasure().then((function(_) {
            return metric.endMeasure(false);
          }));
        }
        it('should report a single interval', inject([AsyncTestCompleter], (function(async) {
          aggregate([eventFactory.start('script', 0), eventFactory.end('script', 5)]).then((function(data) {
            expect(data['scriptTime']).toBe(5);
            async.done();
          }));
        })));
        it('should sum up multiple intervals', inject([AsyncTestCompleter], (function(async) {
          aggregate([eventFactory.start('script', 0), eventFactory.end('script', 5), eventFactory.start('script', 10), eventFactory.end('script', 17)]).then((function(data) {
            expect(data['scriptTime']).toBe(12);
            async.done();
          }));
        })));
        it('should ignore not started intervals', inject([AsyncTestCompleter], (function(async) {
          aggregate([eventFactory.end('script', 10)]).then((function(data) {
            expect(data['scriptTime']).toBe(0);
            async.done();
          }));
        })));
        it('should ignore not ended intervals', inject([AsyncTestCompleter], (function(async) {
          aggregate([eventFactory.start('script', 10)]).then((function(data) {
            expect(data['scriptTime']).toBe(0);
            async.done();
          }));
        })));
        it('should ignore events from different processed as the start mark', inject([AsyncTestCompleter], (function(async) {
          var otherProcessEventFactory = new TraceEventFactory('timeline', 'pid1');
          var metric = createMetric([[eventFactory.markStart('benchpress0', 0), eventFactory.start('script', 0, null), eventFactory.end('script', 5, null), otherProcessEventFactory.start('script', 10, null), otherProcessEventFactory.end('script', 17, null), eventFactory.markEnd('benchpress0', 20)]]);
          metric.beginMeasure().then((function(_) {
            return metric.endMeasure(false);
          })).then((function(data) {
            expect(data['scriptTime']).toBe(5);
            async.done();
          }));
        })));
        it('should support scriptTime metric', inject([AsyncTestCompleter], (function(async) {
          aggregate([eventFactory.start('script', 0), eventFactory.end('script', 5)]).then((function(data) {
            expect(data['scriptTime']).toBe(5);
            async.done();
          }));
        })));
        it('should support renderTime metric', inject([AsyncTestCompleter], (function(async) {
          aggregate([eventFactory.start('render', 0), eventFactory.end('render', 5)]).then((function(data) {
            expect(data['renderTime']).toBe(5);
            async.done();
          }));
        })));
        it('should support gcTime/gcAmount metric', inject([AsyncTestCompleter], (function(async) {
          aggregate([eventFactory.start('gc', 0, {'usedHeapSize': 2500}), eventFactory.end('gc', 5, {'usedHeapSize': 1000})]).then((function(data) {
            expect(data['gcTime']).toBe(5);
            expect(data['gcAmount']).toBe(1.5);
            expect(data['majorGcTime']).toBe(0);
            async.done();
          }));
        })));
        it('should support majorGcTime metric', inject([AsyncTestCompleter], (function(async) {
          aggregate([eventFactory.start('gc', 0, {'usedHeapSize': 2500}), eventFactory.end('gc', 5, {
            'usedHeapSize': 1000,
            'majorGc': true
          })]).then((function(data) {
            expect(data['gcTime']).toBe(5);
            expect(data['majorGcTime']).toBe(5);
            async.done();
          }));
        })));
        it('should support pureScriptTime = scriptTime-gcTime-renderTime', inject([AsyncTestCompleter], (function(async) {
          aggregate([eventFactory.start('script', 0), eventFactory.start('gc', 1, {'usedHeapSize': 1000}), eventFactory.end('gc', 4, {'usedHeapSize': 0}), eventFactory.start('render', 4), eventFactory.end('render', 5), eventFactory.end('script', 6)]).then((function(data) {
            expect(data['scriptTime']).toBe(6);
            expect(data['pureScriptTime']).toBe(2);
            async.done();
          }));
        })));
        describe('microMetrics', (function() {
          it('should report micro metrics', inject([AsyncTestCompleter], (function(async) {
            aggregate([eventFactory.markStart('mm1', 0), eventFactory.markEnd('mm1', 5)], {'mm1': 'micro metric 1'}).then((function(data) {
              expect(data['mm1']).toBe(5.0);
              async.done();
            }));
          })));
          it('should ignore micro metrics that were not specified', inject([AsyncTestCompleter], (function(async) {
            aggregate([eventFactory.markStart('mm1', 0), eventFactory.markEnd('mm1', 5)]).then((function(data) {
              expect(data['mm1']).toBeFalsy();
              async.done();
            }));
          })));
          it('should report micro metric averages', inject([AsyncTestCompleter], (function(async) {
            aggregate([eventFactory.markStart('mm1*20', 0), eventFactory.markEnd('mm1*20', 5)], {'mm1': 'micro metric 1'}).then((function(data) {
              expect(data['mm1']).toBe(5 / 20);
              async.done();
            }));
          })));
        }));
      }));
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
      StringMapWrapper = $__m.StringMapWrapper;
    }, function($__m) {
      PromiseWrapper = $__m.PromiseWrapper;
      Promise = $__m.Promise;
    }, function($__m) {
      isPresent = $__m.isPresent;
      isBlank = $__m.isBlank;
    }, function($__m) {
      Metric = $__m.Metric;
      PerflogMetric = $__m.PerflogMetric;
      WebDriverExtension = $__m.WebDriverExtension;
      PerfLogFeatures = $__m.PerfLogFeatures;
      bind = $__m.bind;
      Injector = $__m.Injector;
      Options = $__m.Options;
    }, function($__m) {
      TraceEventFactory = $__m.TraceEventFactory;
    }],
    execute: function() {
      MockDriverExtension = (function($__super) {
        var MockDriverExtension = function MockDriverExtension(perfLogs, commandLog, perfLogFeatures) {
          $traceurRuntime.superConstructor(MockDriverExtension).call(this);
          this._perfLogs = perfLogs;
          this._commandLog = commandLog;
          this._perfLogFeatures = perfLogFeatures;
        };
        return ($traceurRuntime.createClass)(MockDriverExtension, {
          timeBegin: function(name) {
            ListWrapper.push(this._commandLog, ['timeBegin', name]);
            return PromiseWrapper.resolve(null);
          },
          timeEnd: function(name, restartName) {
            ListWrapper.push(this._commandLog, ['timeEnd', name, restartName]);
            return PromiseWrapper.resolve(null);
          },
          perfLogFeatures: function() {
            return this._perfLogFeatures;
          },
          readPerfLog: function() {
            ListWrapper.push(this._commandLog, 'readPerfLog');
            if (this._perfLogs.length > 0) {
              var next = this._perfLogs[0];
              ListWrapper.removeAt(this._perfLogs, 0);
              return PromiseWrapper.resolve(next);
            } else {
              return PromiseWrapper.resolve([]);
            }
          }
        }, {}, $__super);
      }(WebDriverExtension));
    }
  };
});
//# sourceMappingURL=perflog_metric_spec.es6.map

//# sourceMappingURL=./perflog_metric_spec.js.map