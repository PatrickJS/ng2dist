"use strict";
Object.defineProperties(module.exports, {
  PerflogMetric: {get: function() {
      return PerflogMetric;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_di__,
    $___46__46__47_web_95_driver_95_extension__,
    $___46__46__47_metric__,
    $___46__46__47_common_95_options__;
var $__0 = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
    PromiseWrapper = $__0.PromiseWrapper,
    Promise = $__0.Promise;
var $__1 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isPresent = $__1.isPresent,
    isBlank = $__1.isBlank,
    int = $__1.int,
    BaseException = $__1.BaseException,
    StringWrapper = $__1.StringWrapper,
    Math = $__1.Math,
    RegExpWrapper = $__1.RegExpWrapper,
    NumberWrapper = $__1.NumberWrapper;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    ListWrapper = $__2.ListWrapper,
    StringMap = $__2.StringMap,
    StringMapWrapper = $__2.StringMapWrapper;
var $__3 = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}),
    bind = $__3.bind,
    OpaqueToken = $__3.OpaqueToken;
var $__4 = ($___46__46__47_web_95_driver_95_extension__ = require("../web_driver_extension"), $___46__46__47_web_95_driver_95_extension__ && $___46__46__47_web_95_driver_95_extension__.__esModule && $___46__46__47_web_95_driver_95_extension__ || {default: $___46__46__47_web_95_driver_95_extension__}),
    WebDriverExtension = $__4.WebDriverExtension,
    PerfLogFeatures = $__4.PerfLogFeatures;
var Metric = ($___46__46__47_metric__ = require("../metric"), $___46__46__47_metric__ && $___46__46__47_metric__.__esModule && $___46__46__47_metric__ || {default: $___46__46__47_metric__}).Metric;
var Options = ($___46__46__47_common_95_options__ = require("../common_options"), $___46__46__47_common_95_options__ && $___46__46__47_common_95_options__.__esModule && $___46__46__47_common_95_options__ || {default: $___46__46__47_common_95_options__}).Options;
var PerflogMetric = function PerflogMetric(driverExtension, setTimeout, microMetrics) {
  $traceurRuntime.superConstructor($PerflogMetric).call(this);
  this._driverExtension = driverExtension;
  this._remainingEvents = [];
  this._measureCount = 0;
  this._setTimeout = setTimeout;
  this._microMetrics = microMetrics;
  this._perfLogFeatures = driverExtension.perfLogFeatures();
};
var $PerflogMetric = PerflogMetric;
($traceurRuntime.createClass)(PerflogMetric, {
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
    return res;
  },
  beginMeasure: function() {
    return this._driverExtension.timeBegin(this._markName(this._measureCount++));
  },
  endMeasure: function(restart) {
    var $__7 = this;
    var markName = this._markName(this._measureCount - 1);
    var nextMarkName = restart ? this._markName(this._measureCount++) : null;
    return this._driverExtension.timeEnd(markName, nextMarkName).then((function(_) {
      return $__7._readUntilEndMark(markName);
    }));
  },
  _readUntilEndMark: function(markName) {
    var loopCount = arguments[1] !== (void 0) ? arguments[1] : 0;
    var startEvent = arguments[2] !== (void 0) ? arguments[2] : null;
    var $__7 = this;
    if (loopCount > _MAX_RETRY_COUNT) {
      throw new BaseException(("Tried too often to get the ending mark: " + loopCount));
    }
    return this._driverExtension.readPerfLog().then((function(events) {
      $__7._addEvents(events);
      var result = $__7._aggregateEvents($__7._remainingEvents, markName);
      if (isPresent(result)) {
        $__7._remainingEvents = events;
        return result;
      }
      var completer = PromiseWrapper.completer();
      $__7._setTimeout((function() {
        return completer.resolve($__7._readUntilEndMark(markName, loopCount + 1));
      }), 100);
      return completer.promise;
    }));
  },
  _addEvents: function(events) {
    var $__7 = this;
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
        ListWrapper.push($__7._remainingEvents, startEvent);
        ListWrapper.push($__7._remainingEvents, endEvent);
      } else {
        ListWrapper.push($__7._remainingEvents, event);
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
    var $__7 = this;
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
          } else if (isPresent($__7._microMetrics[name])) {
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
}, Metric);
Object.defineProperty(PerflogMetric, "parameters", {get: function() {
    return [[WebDriverExtension], [Function], [$traceurRuntime.genericType(StringMap, $traceurRuntime.type.string, $traceurRuntime.type.string)]];
  }});
Object.defineProperty(PerflogMetric.prototype.endMeasure, "parameters", {get: function() {
    return [[$traceurRuntime.type.boolean]];
  }});
Object.defineProperty(PerflogMetric.prototype._readUntilEndMark, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [int], []];
  }});
var _MICRO_ITERATIONS_REGEX = RegExpWrapper.create('(.+)\\*(\\d+)$');
var _MAX_RETRY_COUNT = 20;
var _MARK_NAME_PREFIX = 'benchpress';
var _SET_TIMEOUT = new OpaqueToken('PerflogMetric.setTimeout');
var _BINDINGS = [bind(PerflogMetric).toFactory((function(driverExtension, setTimeout, microMetrics) {
  return new PerflogMetric(driverExtension, setTimeout, microMetrics);
}), [WebDriverExtension, _SET_TIMEOUT, Options.MICRO_METRICS]), bind(_SET_TIMEOUT).toValue((function(fn, millis) {
  return PromiseWrapper.setTimeout(fn, millis);
}))];
//# sourceMappingURL=perflog_metric.js.map

//# sourceMappingURL=./perflog_metric.map