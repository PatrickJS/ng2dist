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
      isPresent,
      WebDriverExtension,
      IOsDriverExtension,
      WebDriverAdapter,
      Injector,
      bind,
      TraceEventFactory,
      MockDriverAdapter;
  function main() {
    describe('ios driver extension', (function() {
      var log;
      var extension;
      var normEvents = new TraceEventFactory('timeline', 'pid0');
      function createExtension() {
        var perfRecords = arguments[0] !== (void 0) ? arguments[0] : null;
        if (isBlank(perfRecords)) {
          perfRecords = [];
        }
        log = [];
        extension = Injector.resolveAndCreate([IOsDriverExtension.BINDINGS, bind(WebDriverAdapter).toValue(new MockDriverAdapter(log, perfRecords))]).get(IOsDriverExtension);
        return extension;
      }
      it('should throw on forcing gc', (function() {
        expect((function() {
          return createExtension().gc();
        })).toThrowError('Force GC is not supported on iOS');
      }));
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
        it('should report FunctionCall records as "script"', inject([AsyncTestCompleter], (function(async) {
          createExtension([durationRecord('FunctionCall', 1, 5)]).readPerfLog().then((function(events) {
            expect(events).toEqual([normEvents.start('script', 1), normEvents.end('script', 5)]);
            async.done();
          }));
        })));
        it('should ignore FunctionCalls from webdriver', inject([AsyncTestCompleter], (function(async) {
          createExtension([internalScriptRecord(1, 5)]).readPerfLog().then((function(events) {
            expect(events).toEqual([]);
            async.done();
          }));
        })));
        it('should report begin time', inject([AsyncTestCompleter], (function(async) {
          createExtension([timeBeginRecord('someName', 12)]).readPerfLog().then((function(events) {
            expect(events).toEqual([normEvents.markStart('someName', 12)]);
            async.done();
          }));
        })));
        it('should report end timestamps', inject([AsyncTestCompleter], (function(async) {
          createExtension([timeEndRecord('someName', 12)]).readPerfLog().then((function(events) {
            expect(events).toEqual([normEvents.markEnd('someName', 12)]);
            async.done();
          }));
        })));
        ['RecalculateStyles', 'Layout', 'UpdateLayerTree', 'Paint', 'Rasterize', 'CompositeLayers'].forEach((function(recordType) {
          it(("should report " + recordType), inject([AsyncTestCompleter], (function(async) {
            createExtension([durationRecord(recordType, 0, 1)]).readPerfLog().then((function(events) {
              expect(events).toEqual([normEvents.start('render', 0), normEvents.end('render', 1)]);
              async.done();
            }));
          })));
        }));
        it('should walk children', inject([AsyncTestCompleter], (function(async) {
          createExtension([durationRecord('FunctionCall', 1, 5, [timeBeginRecord('someName', 2)])]).readPerfLog().then((function(events) {
            expect(events).toEqual([normEvents.start('script', 1), normEvents.markStart('someName', 2), normEvents.end('script', 5)]);
            async.done();
          }));
        })));
        it('should match safari browsers', (function() {
          expect(createExtension().supports({'browserName': 'safari'})).toBe(true);
          expect(createExtension().supports({'browserName': 'Safari'})).toBe(true);
        }));
      }));
    }));
  }
  function timeBeginRecord(name, time) {
    return {
      'type': 'Time',
      'startTime': time,
      'data': {'message': name}
    };
  }
  function timeEndRecord(name, time) {
    return {
      'type': 'TimeEnd',
      'startTime': time,
      'data': {'message': name}
    };
  }
  function durationRecord(type, startTime, endTime) {
    var children = arguments[3] !== (void 0) ? arguments[3] : null;
    if (isBlank(children)) {
      children = [];
    }
    return {
      'type': type,
      'startTime': startTime,
      'endTime': endTime,
      'children': children
    };
  }
  function internalScriptRecord(startTime, endTime) {
    return {
      'type': 'FunctionCall',
      'startTime': startTime,
      'endTime': endTime,
      'data': {'scriptName': 'InjectedScript'}
    };
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
      isPresent = $__m.isPresent;
    }, function($__m) {
      WebDriverExtension = $__m.WebDriverExtension;
      IOsDriverExtension = $__m.IOsDriverExtension;
      WebDriverAdapter = $__m.WebDriverAdapter;
      Injector = $__m.Injector;
      bind = $__m.bind;
    }, function($__m) {
      TraceEventFactory = $__m.TraceEventFactory;
    }],
    execute: function() {
      MockDriverAdapter = (function($__super) {
        var MockDriverAdapter = function MockDriverAdapter(log, perfRecords) {
          $traceurRuntime.superConstructor(MockDriverAdapter).call(this);
          this._log = log;
          this._perfRecords = perfRecords;
        };
        return ($traceurRuntime.createClass)(MockDriverAdapter, {
          executeScript: function(script) {
            ListWrapper.push(this._log, ['executeScript', script]);
            return PromiseWrapper.resolve(null);
          },
          logs: function(type) {
            ListWrapper.push(this._log, ['logs', type]);
            if (type === 'performance') {
              return PromiseWrapper.resolve(this._perfRecords.map(function(record) {
                return {'message': Json.stringify({'message': {
                      'method': 'Timeline.eventRecorded',
                      'params': {'record': record}
                    }})};
              }));
            } else {
              return null;
            }
          }
        }, {}, $__super);
      }(WebDriverAdapter));
    }
  };
});
//# sourceMappingURL=ios_driver_extension_spec.es6.map

//# sourceMappingURL=./ios_driver_extension_spec.js.map