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
      ListWrapper,
      PromiseWrapper,
      Json,
      isBlank,
      WebDriverExtension,
      ChromeDriverExtension,
      WebDriverAdapter,
      Injector,
      bind,
      TraceEventFactory,
      MockDriverAdapter;
  function main() {
    describe('chrome driver extension', (function() {
      var log;
      var extension;
      var blinkEvents = new TraceEventFactory('blink.console', 'pid0');
      var v8Events = new TraceEventFactory('v8', 'pid0');
      var v8EventsOtherProcess = new TraceEventFactory('v8', 'pid1');
      var chromeTimelineEvents = new TraceEventFactory('disabled-by-default-devtools.timeline', 'pid0');
      var normEvents = new TraceEventFactory('timeline', 'pid0');
      function createExtension() {
        var perfRecords = arguments[0] !== (void 0) ? arguments[0] : null;
        var messageMethod = arguments[1] !== (void 0) ? arguments[1] : 'Tracing.dataCollected';
        if (isBlank(perfRecords)) {
          perfRecords = [];
        }
        log = [];
        extension = Injector.resolveAndCreate([ChromeDriverExtension.BINDINGS, bind(WebDriverAdapter).toValue(new MockDriverAdapter(log, perfRecords, messageMethod))]).get(ChromeDriverExtension);
        return extension;
      }
      it('should force gc via window.gc()', inject([AsyncTestCompleter], (function(async) {
        createExtension().gc().then((function(_) {
          expect(log).toEqual([['executeScript', 'window.gc()']]);
          async.done();
        }));
      })));
      it('should mark the timeline via console.time()', inject([AsyncTestCompleter], (function(async) {
        createExtension().timeBegin('someName').then((function(_) {
          expect(log).toEqual([['executeScript', "console.time('someName');"]]);
          async.done();
        }));
      })));
      it('should mark the timeline via console.timeEnd()', inject([AsyncTestCompleter], (function(async) {
        createExtension().timeEnd('someName').then((function(_) {
          expect(log).toEqual([['executeScript', "console.timeEnd('someName');"]]);
          async.done();
        }));
      })));
      it('should mark the timeline via console.time() and console.timeEnd()', inject([AsyncTestCompleter], (function(async) {
        createExtension().timeEnd('name1', 'name2').then((function(_) {
          expect(log).toEqual([['executeScript', "console.timeEnd('name1');console.time('name2');"]]);
          async.done();
        }));
      })));
      describe('readPerfLog', (function() {
        it('should execute a dummy script before reading them', inject([AsyncTestCompleter], (function(async) {
          createExtension([]).readPerfLog().then((function(_) {
            expect(log).toEqual([['executeScript', '1+1'], ['logs', 'performance']]);
            async.done();
          }));
        })));
        it('should normalize times to ms and forward ph and pid event properties', inject([AsyncTestCompleter], (function(async) {
          createExtension([chromeTimelineEvents.complete('FunctionCall', 1100, 5500, null)]).readPerfLog().then((function(events) {
            expect(events).toEqual([normEvents.complete('script', 1.1, 5.5, null)]);
            async.done();
          }));
        })));
        it('should normalize "tdur" to "dur"', inject([AsyncTestCompleter], (function(async) {
          var event = chromeTimelineEvents.create('X', 'FunctionCall', 1100, null);
          event['tdur'] = 5500;
          createExtension([event]).readPerfLog().then((function(events) {
            expect(events).toEqual([normEvents.complete('script', 1.1, 5.5, null)]);
            async.done();
          }));
        })));
        it('should report FunctionCall events as "script"', inject([AsyncTestCompleter], (function(async) {
          createExtension([chromeTimelineEvents.start('FunctionCall', 0)]).readPerfLog().then((function(events) {
            expect(events).toEqual([normEvents.start('script', 0)]);
            async.done();
          }));
        })));
        it('should ignore FunctionCalls from webdriver', inject([AsyncTestCompleter], (function(async) {
          createExtension([chromeTimelineEvents.start('FunctionCall', 0, {'data': {'scriptName': 'InjectedScript'}})]).readPerfLog().then((function(events) {
            expect(events).toEqual([]);
            async.done();
          }));
        })));
        it('should report begin timestamps', inject([AsyncTestCompleter], (function(async) {
          createExtension([blinkEvents.create('S', 'someName', 1000)]).readPerfLog().then((function(events) {
            expect(events).toEqual([normEvents.markStart('someName', 1.0)]);
            async.done();
          }));
        })));
        it('should report end timestamps', inject([AsyncTestCompleter], (function(async) {
          createExtension([blinkEvents.create('F', 'someName', 1000)]).readPerfLog().then((function(events) {
            expect(events).toEqual([normEvents.markEnd('someName', 1.0)]);
            async.done();
          }));
        })));
        it('should report gc', inject([AsyncTestCompleter], (function(async) {
          createExtension([chromeTimelineEvents.start('GCEvent', 1000, {'usedHeapSizeBefore': 1000}), chromeTimelineEvents.end('GCEvent', 2000, {'usedHeapSizeAfter': 0})]).readPerfLog().then((function(events) {
            expect(events).toEqual([normEvents.start('gc', 1.0, {'usedHeapSize': 1000}), normEvents.end('gc', 2.0, {
              'usedHeapSize': 0,
              'majorGc': false
            })]);
            async.done();
          }));
        })));
        it('should report major gc', inject([AsyncTestCompleter], (function(async) {
          createExtension([chromeTimelineEvents.start('GCEvent', 1000, {'usedHeapSizeBefore': 1000}), v8EventsOtherProcess.start('majorGC', 1100, null), v8EventsOtherProcess.end('majorGC', 1200, null), chromeTimelineEvents.end('GCEvent', 2000, {'usedHeapSizeAfter': 0})]).readPerfLog().then((function(events) {
            expect(events).toEqual([normEvents.start('gc', 1.0, {'usedHeapSize': 1000}), normEvents.end('gc', 2.0, {
              'usedHeapSize': 0,
              'majorGc': false
            })]);
            async.done();
          }));
        })));
        it('should ignore major gc from different processes', inject([AsyncTestCompleter], (function(async) {
          createExtension([chromeTimelineEvents.start('GCEvent', 1000, {'usedHeapSizeBefore': 1000}), v8Events.start('majorGC', 1100, null), v8Events.end('majorGC', 1200, null), chromeTimelineEvents.end('GCEvent', 2000, {'usedHeapSizeAfter': 0})]).readPerfLog().then((function(events) {
            expect(events).toEqual([normEvents.start('gc', 1.0, {'usedHeapSize': 1000}), normEvents.end('gc', 2.0, {
              'usedHeapSize': 0,
              'majorGc': true
            })]);
            async.done();
          }));
        })));
        ['RecalculateStyles', 'Layout', 'UpdateLayerTree', 'Paint', 'Rasterize', 'CompositeLayers'].forEach((function(recordType) {
          it(("should report " + recordType + " as \"render\""), inject([AsyncTestCompleter], (function(async) {
            createExtension([chromeTimelineEvents.start(recordType, 1234), chromeTimelineEvents.end(recordType, 2345)]).readPerfLog().then((function(events) {
              expect(events).toEqual([normEvents.start('render', 1.234), normEvents.end('render', 2.345)]);
              async.done();
            }));
          })));
        }));
        it('should throw an error on buffer overflow', inject([AsyncTestCompleter], (function(async) {
          PromiseWrapper.catchError(createExtension([chromeTimelineEvents.start('FunctionCall', 1234)], 'Tracing.bufferUsage').readPerfLog(), (function(err) {
            expect((function() {
              throw err;
            })).toThrowError('The DevTools trace buffer filled during the test!');
            async.done();
          }));
        })));
        it('should match chrome browsers', (function() {
          expect(createExtension().supports({'browserName': 'chrome'})).toBe(true);
          expect(createExtension().supports({'browserName': 'Chrome'})).toBe(true);
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
      ListWrapper = $__m.ListWrapper;
    }, function($__m) {
      PromiseWrapper = $__m.PromiseWrapper;
    }, function($__m) {
      Json = $__m.Json;
      isBlank = $__m.isBlank;
    }, function($__m) {
      WebDriverExtension = $__m.WebDriverExtension;
      ChromeDriverExtension = $__m.ChromeDriverExtension;
      WebDriverAdapter = $__m.WebDriverAdapter;
      Injector = $__m.Injector;
      bind = $__m.bind;
    }, function($__m) {
      TraceEventFactory = $__m.TraceEventFactory;
    }],
    execute: function() {
      MockDriverAdapter = (function($__super) {
        var MockDriverAdapter = function MockDriverAdapter(log, events, messageMethod) {
          $traceurRuntime.superConstructor(MockDriverAdapter).call(this);
          this._log = log;
          this._events = events;
          this._messageMethod = messageMethod;
        };
        return ($traceurRuntime.createClass)(MockDriverAdapter, {
          executeScript: function(script) {
            ListWrapper.push(this._log, ['executeScript', script]);
            return PromiseWrapper.resolve(null);
          },
          logs: function(type) {
            var $__0 = this;
            ListWrapper.push(this._log, ['logs', type]);
            if (type === 'performance') {
              return PromiseWrapper.resolve(this._events.map((function(event) {
                return {'message': Json.stringify({'message': {
                      'method': $__0._messageMethod,
                      'params': event
                    }})};
              })));
            } else {
              return null;
            }
          }
        }, {}, $__super);
      }(WebDriverAdapter));
    }
  };
});
//# sourceMappingURL=chrome_driver_extension_spec.es6.map

//# sourceMappingURL=./chrome_driver_extension_spec.js.map