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
    $__benchpress_47_common__,
    $___46__46__47_trace_95_event_95_factory__;
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
    StringMapWrapper = $__1.StringMapWrapper;
var $__2 = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
    PromiseWrapper = $__2.PromiseWrapper,
    Promise = $__2.Promise;
var $__3 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isPresent = $__3.isPresent,
    isBlank = $__3.isBlank;
var $__4 = ($__benchpress_47_common__ = require("benchpress/common"), $__benchpress_47_common__ && $__benchpress_47_common__.__esModule && $__benchpress_47_common__ || {default: $__benchpress_47_common__}),
    Metric = $__4.Metric,
    PerflogMetric = $__4.PerflogMetric,
    WebDriverExtension = $__4.WebDriverExtension,
    PerfLogFeatures = $__4.PerfLogFeatures,
    bind = $__4.bind,
    Injector = $__4.Injector,
    Options = $__4.Options;
var TraceEventFactory = ($___46__46__47_trace_95_event_95_factory__ = require("../trace_event_factory"), $___46__46__47_trace_95_event_95_factory__ && $___46__46__47_trace_95_event_95_factory__.__esModule && $___46__46__47_trace_95_event_95_factory__ || {default: $___46__46__47_trace_95_event_95_factory__}).TraceEventFactory;
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
var MockDriverExtension = function MockDriverExtension(perfLogs, commandLog, perfLogFeatures) {
  $traceurRuntime.superConstructor($MockDriverExtension).call(this);
  this._perfLogs = perfLogs;
  this._commandLog = commandLog;
  this._perfLogFeatures = perfLogFeatures;
};
var $MockDriverExtension = MockDriverExtension;
($traceurRuntime.createClass)(MockDriverExtension, {
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
}, {}, WebDriverExtension);
//# sourceMappingURL=perflog_metric_spec.js.map

//# sourceMappingURL=./perflog_metric_spec.map
 main();