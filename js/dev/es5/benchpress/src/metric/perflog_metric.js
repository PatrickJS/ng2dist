System.register(["rtts_assert/rtts_assert", "angular2/src/facade/async", "angular2/src/facade/lang", "angular2/src/facade/collection", "angular2/di", "../web_driver_extension", "../metric", "../common_options"], function($__export) {
  "use strict";
  var assert,
      PromiseWrapper,
      Promise,
      isPresent,
      isBlank,
      int,
      BaseException,
      StringWrapper,
      Math,
      RegExpWrapper,
      NumberWrapper,
      ListWrapper,
      StringMap,
      StringMapWrapper,
      bind,
      OpaqueToken,
      WebDriverExtension,
      PerfLogFeatures,
      Metric,
      Options,
      PerflogMetric,
      _MICRO_ITERATIONS_REGEX,
      _MAX_RETRY_COUNT,
      _MARK_NAME_PREFIX,
      _SET_TIMEOUT,
      _BINDINGS;
  return {
    setters: [function($__m) {
      assert = $__m.assert;
    }, function($__m) {
      PromiseWrapper = $__m.PromiseWrapper;
      Promise = $__m.Promise;
    }, function($__m) {
      isPresent = $__m.isPresent;
      isBlank = $__m.isBlank;
      int = $__m.int;
      BaseException = $__m.BaseException;
      StringWrapper = $__m.StringWrapper;
      Math = $__m.Math;
      RegExpWrapper = $__m.RegExpWrapper;
      NumberWrapper = $__m.NumberWrapper;
    }, function($__m) {
      ListWrapper = $__m.ListWrapper;
      StringMap = $__m.StringMap;
      StringMapWrapper = $__m.StringMapWrapper;
    }, function($__m) {
      bind = $__m.bind;
      OpaqueToken = $__m.OpaqueToken;
    }, function($__m) {
      WebDriverExtension = $__m.WebDriverExtension;
      PerfLogFeatures = $__m.PerfLogFeatures;
    }, function($__m) {
      Metric = $__m.Metric;
    }, function($__m) {
      Options = $__m.Options;
    }],
    execute: function() {
      PerflogMetric = $__export("PerflogMetric", (function($__super) {
        var PerflogMetric = function PerflogMetric(driverExtension, setTimeout, microMetrics) {
          assert.argumentTypes(driverExtension, WebDriverExtension, setTimeout, Function, microMetrics, assert.genericType(StringMap, assert.type.string, assert.type.string));
          $traceurRuntime.superConstructor(PerflogMetric).call(this);
          this._driverExtension = driverExtension;
          this._remainingEvents = [];
          this._measureCount = 0;
          this._setTimeout = setTimeout;
          this._microMetrics = microMetrics;
          this._perfLogFeatures = driverExtension.perfLogFeatures();
        };
        return ($traceurRuntime.createClass)(PerflogMetric, {
          describe: function() {
            var res = {
              'scriptTime': 'script execution time in ms, including gc and render',
              'pureScriptTime': 'script execution time in ms, without gc nor render'
            };
            if (this._perfLogFeatures.render) {
              res['renderTime'] = 'render time in and ouside of script in ms';
            }
            if (this._perfLogFeatures.gc) {
              res['gcTime'] = 'gc time in and ouside of script in ms';
              res['gcAmount'] = 'gc amount in kbytes';
              res['majorGcTime'] = 'time of major gcs in ms';
            }
            StringMapWrapper.forEach(this._microMetrics, (function(desc, name) {
              StringMapWrapper.set(res, name, desc);
            }));
            return assert.returnType((res), StringMap);
          },
          beginMeasure: function() {
            return assert.returnType((this._driverExtension.timeBegin(this._markName(this._measureCount++))), Promise);
          },
          endMeasure: function(restart) {
            var $__0 = this;
            var markName = this._markName(this._measureCount - 1);
            var nextMarkName = restart ? this._markName(this._measureCount++) : null;
            return assert.returnType((this._driverExtension.timeEnd(markName, nextMarkName).then((function(_) {
              return $__0._readUntilEndMark(markName);
            }))), assert.genericType(Promise, Object));
          },
          _readUntilEndMark: function(markName) {
            var loopCount = arguments[1] !== (void 0) ? arguments[1] : 0;
            var startEvent = arguments[2] !== (void 0) ? arguments[2] : null;
            var $__0 = this;
            if (loopCount > _MAX_RETRY_COUNT) {
              throw new BaseException(("Tried too often to get the ending mark: " + loopCount));
            }
            return this._driverExtension.readPerfLog().then((function(events) {
              $__0._addEvents(events);
              var result = $__0._aggregateEvents($__0._remainingEvents, markName);
              if (isPresent(result)) {
                $__0._remainingEvents = events;
                return result;
              }
              var completer = PromiseWrapper.completer();
              $__0._setTimeout((function() {
                return completer.resolve($__0._readUntilEndMark(markName, loopCount + 1));
              }), 100);
              return completer.promise;
            }));
          },
          _addEvents: function(events) {
            var $__0 = this;
            var needSort = false;
            ListWrapper.forEach(events, (function(event) {
              if (StringWrapper.equals(event['ph'], 'X')) {
                needSort = true;
                var startEvent = {};
                var endEvent = {};
                StringMapWrapper.forEach(event, (function(value, prop) {
                  startEvent[prop] = value;
                  endEvent[prop] = value;
                }));
                startEvent['ph'] = 'B';
                endEvent['ph'] = 'E';
                endEvent['ts'] = startEvent['ts'] + startEvent['dur'];
                ListWrapper.push($__0._remainingEvents, startEvent);
                ListWrapper.push($__0._remainingEvents, endEvent);
              } else {
                ListWrapper.push($__0._remainingEvents, event);
              }
            }));
            if (needSort) {
              ListWrapper.sort(this._remainingEvents, (function(a, b) {
                var diff = a['ts'] - b['ts'];
                return diff > 0 ? 1 : diff < 0 ? -1 : 0;
              }));
            }
          },
          _aggregateEvents: function(events, markName) {
            var $__0 = this;
            var result = {
              'scriptTime': 0,
              'pureScriptTime': 0
            };
            if (this._perfLogFeatures.gc) {
              result['gcTime'] = 0;
              result['majorGcTime'] = 0;
              result['gcAmount'] = 0;
            }
            if (this._perfLogFeatures.render) {
              result['renderTime'] = 0;
            }
            StringMapWrapper.forEach(this._microMetrics, (function(desc, name) {
              result[name] = 0;
            }));
            var markStartEvent = null;
            var markEndEvent = null;
            var gcTimeInScript = 0;
            var renderTimeInScript = 0;
            var intervalStarts = {};
            events.forEach((function(event) {
              var ph = event['ph'];
              var name = event['name'];
              var microIterations = 1;
              var microIterationsMatch = RegExpWrapper.firstMatch(_MICRO_ITERATIONS_REGEX, name);
              if (isPresent(microIterationsMatch)) {
                name = microIterationsMatch[1];
                microIterations = NumberWrapper.parseInt(microIterationsMatch[2], 10);
              }
              if (StringWrapper.equals(ph, 'b') && StringWrapper.equals(name, markName)) {
                markStartEvent = event;
              } else if (StringWrapper.equals(ph, 'e') && StringWrapper.equals(name, markName)) {
                markEndEvent = event;
              }
              if (isPresent(markStartEvent) && isBlank(markEndEvent) && event['pid'] === markStartEvent['pid']) {
                if (StringWrapper.equals(ph, 'B') || StringWrapper.equals(ph, 'b')) {
                  intervalStarts[name] = event;
                } else if ((StringWrapper.equals(ph, 'E') || StringWrapper.equals(ph, 'e')) && isPresent(intervalStarts[name])) {
                  var startEvent = intervalStarts[name];
                  var duration = (event['ts'] - startEvent['ts']);
                  intervalStarts[name] = null;
                  if (StringWrapper.equals(name, 'gc')) {
                    result['gcTime'] += duration;
                    var amount = (startEvent['args']['usedHeapSize'] - event['args']['usedHeapSize']) / 1000;
                    result['gcAmount'] += amount;
                    var majorGc = event['args']['majorGc'];
                    if (isPresent(majorGc) && majorGc) {
                      result['majorGcTime'] += duration;
                    }
                    if (isPresent(intervalStarts['script'])) {
                      gcTimeInScript += duration;
                    }
                  } else if (StringWrapper.equals(name, 'render')) {
                    result['renderTime'] += duration;
                    if (isPresent(intervalStarts['script'])) {
                      renderTimeInScript += duration;
                    }
                  } else if (StringWrapper.equals(name, 'script')) {
                    result['scriptTime'] += duration;
                  } else if (isPresent($__0._microMetrics[name])) {
                    result[name] += duration / microIterations;
                  }
                }
              }
            }));
            result['pureScriptTime'] = result['scriptTime'] - gcTimeInScript - renderTimeInScript;
            return isPresent(markStartEvent) && isPresent(markEndEvent) ? result : null;
          },
          _markName: function(index) {
            return ("" + _MARK_NAME_PREFIX + index);
          }
        }, {
          get BINDINGS() {
            return _BINDINGS;
          },
          get SET_TIMEOUT() {
            return _SET_TIMEOUT;
          }
        }, $__super);
      }(Metric)));
      Object.defineProperty(PerflogMetric, "parameters", {get: function() {
          return [[WebDriverExtension], [Function], [assert.genericType(StringMap, assert.type.string, assert.type.string)]];
        }});
      Object.defineProperty(PerflogMetric.prototype.endMeasure, "parameters", {get: function() {
          return [[assert.type.boolean]];
        }});
      Object.defineProperty(PerflogMetric.prototype._readUntilEndMark, "parameters", {get: function() {
          return [[assert.type.string], [int], []];
        }});
      _MICRO_ITERATIONS_REGEX = RegExpWrapper.create('(.+)\\*(\\d+)$');
      _MAX_RETRY_COUNT = 20;
      _MARK_NAME_PREFIX = 'benchpress';
      _SET_TIMEOUT = new OpaqueToken('PerflogMetric.setTimeout');
      _BINDINGS = [bind(PerflogMetric).toFactory((function(driverExtension, setTimeout, microMetrics) {
        return new PerflogMetric(driverExtension, setTimeout, microMetrics);
      }), [WebDriverExtension, _SET_TIMEOUT, Options.MICRO_METRICS]), bind(_SET_TIMEOUT).toValue((function(fn, millis) {
        return PromiseWrapper.setTimeout(fn, millis);
      }))];
    }
  };
});
//# sourceMappingURL=perflog_metric.es6.map

//# sourceMappingURL=./perflog_metric.js.map