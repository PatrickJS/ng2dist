"use strict";
Object.defineProperties(module.exports, {
  ChromeDriverExtension: {get: function() {
      return ChromeDriverExtension;
    }},
  __esModule: {value: true}
});
var $__angular2_47_di__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_lang__,
    $___46__46__47_web_95_driver_95_extension__,
    $___46__46__47_web_95_driver_95_adapter__,
    $__angular2_47_src_47_facade_47_async__;
var bind = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}).bind;
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    ListWrapper = $__1.ListWrapper,
    StringMapWrapper = $__1.StringMapWrapper,
    StringMap = $__1.StringMap;
var $__2 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    Json = $__2.Json,
    isPresent = $__2.isPresent,
    isBlank = $__2.isBlank,
    RegExpWrapper = $__2.RegExpWrapper,
    StringWrapper = $__2.StringWrapper,
    BaseException = $__2.BaseException,
    NumberWrapper = $__2.NumberWrapper;
var $__3 = ($___46__46__47_web_95_driver_95_extension__ = require("../web_driver_extension"), $___46__46__47_web_95_driver_95_extension__ && $___46__46__47_web_95_driver_95_extension__.__esModule && $___46__46__47_web_95_driver_95_extension__ || {default: $___46__46__47_web_95_driver_95_extension__}),
    WebDriverExtension = $__3.WebDriverExtension,
    PerfLogFeatures = $__3.PerfLogFeatures;
var WebDriverAdapter = ($___46__46__47_web_95_driver_95_adapter__ = require("../web_driver_adapter"), $___46__46__47_web_95_driver_95_adapter__ && $___46__46__47_web_95_driver_95_adapter__.__esModule && $___46__46__47_web_95_driver_95_adapter__ || {default: $___46__46__47_web_95_driver_95_adapter__}).WebDriverAdapter;
var Promise = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}).Promise;
var ChromeDriverExtension = function ChromeDriverExtension(driver) {
  $traceurRuntime.superConstructor($ChromeDriverExtension).call(this);
  this._driver = driver;
};
var $ChromeDriverExtension = ChromeDriverExtension;
($traceurRuntime.createClass)(ChromeDriverExtension, {
  gc: function() {
    return this._driver.executeScript('window.gc()');
  },
  timeBegin: function(name) {
    return this._driver.executeScript(("console.time('" + name + "');"));
  },
  timeEnd: function(name) {
    var restartName = arguments[1] !== (void 0) ? arguments[1] : null;
    var script = ("console.timeEnd('" + name + "');");
    if (isPresent(restartName)) {
      script += ("console.time('" + restartName + "');");
    }
    return this._driver.executeScript(script);
  },
  readPerfLog: function() {
    var $__6 = this;
    return this._driver.executeScript('1+1').then((function(_) {
      return $__6._driver.logs('performance');
    })).then((function(entries) {
      var events = [];
      ListWrapper.forEach(entries, function(entry) {
        var message = Json.parse(entry['message'])['message'];
        if (StringWrapper.equals(message['method'], 'Tracing.dataCollected')) {
          ListWrapper.push(events, message['params']);
        }
        if (StringWrapper.equals(message['method'], 'Tracing.bufferUsage')) {
          throw new BaseException('The DevTools trace buffer filled during the test!');
        }
      });
      return $__6._convertPerfRecordsToEvents(events);
    }));
  },
  _convertPerfRecordsToEvents: function(chromeEvents) {
    var normalizedEvents = arguments[1] !== (void 0) ? arguments[1] : null;
    if (isBlank(normalizedEvents)) {
      normalizedEvents = [];
    }
    var majorGCPids = {};
    chromeEvents.forEach((function(event) {
      var cat = event['cat'];
      var name = event['name'];
      var args = event['args'];
      var pid = event['pid'];
      var ph = event['ph'];
      if (StringWrapper.equals(cat, 'disabled-by-default-devtools.timeline')) {
        if (StringWrapper.equals(name, 'FunctionCall') && (isBlank(args) || isBlank(args['data']) || !StringWrapper.equals(args['data']['scriptName'], 'InjectedScript'))) {
          ListWrapper.push(normalizedEvents, normalizeEvent(event, {'name': 'script'}));
        } else if (StringWrapper.equals(name, 'RecalculateStyles') || StringWrapper.equals(name, 'Layout') || StringWrapper.equals(name, 'UpdateLayerTree') || StringWrapper.equals(name, 'Paint') || StringWrapper.equals(name, 'Rasterize') || StringWrapper.equals(name, 'CompositeLayers')) {
          ListWrapper.push(normalizedEvents, normalizeEvent(event, {'name': 'render'}));
        } else if (StringWrapper.equals(name, 'GCEvent')) {
          var normArgs = {'usedHeapSize': isPresent(args['usedHeapSizeAfter']) ? args['usedHeapSizeAfter'] : args['usedHeapSizeBefore']};
          if (StringWrapper.equals(event['ph'], 'E')) {
            normArgs['majorGc'] = isPresent(majorGCPids[pid]) && majorGCPids[pid];
          }
          majorGCPids[pid] = false;
          ListWrapper.push(normalizedEvents, normalizeEvent(event, {
            'name': 'gc',
            'args': normArgs
          }));
        }
      } else if (StringWrapper.equals(cat, 'blink.console')) {
        ListWrapper.push(normalizedEvents, normalizeEvent(event, {'name': name}));
      } else if (StringWrapper.equals(cat, 'v8')) {
        if (StringWrapper.equals(name, 'majorGC')) {
          if (StringWrapper.equals(ph, 'B')) {
            majorGCPids[pid] = true;
          }
        }
      }
    }));
    return normalizedEvents;
  },
  perfLogFeatures: function() {
    return new PerfLogFeatures({
      render: true,
      gc: true
    });
  },
  supports: function(capabilities) {
    return StringWrapper.equals(capabilities['browserName'].toLowerCase(), 'chrome');
  }
}, {get BINDINGS() {
    return _BINDINGS;
  }}, WebDriverExtension);
Object.defineProperty(ChromeDriverExtension, "parameters", {get: function() {
    return [[WebDriverAdapter]];
  }});
Object.defineProperty(ChromeDriverExtension.prototype.timeBegin, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
Object.defineProperty(ChromeDriverExtension.prototype.timeEnd, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [$traceurRuntime.type.string]];
  }});
Object.defineProperty(ChromeDriverExtension.prototype.supports, "parameters", {get: function() {
    return [[StringMap]];
  }});
function normalizeEvent(chromeEvent, data) {
  var ph = chromeEvent['ph'];
  if (StringWrapper.equals(ph, 'S')) {
    ph = 'b';
  } else if (StringWrapper.equals(ph, 'F')) {
    ph = 'e';
  }
  var result = {
    'pid': chromeEvent['pid'],
    'ph': ph,
    'cat': 'timeline',
    'ts': chromeEvent['ts'] / 1000
  };
  if (chromeEvent['ph'] === 'X') {
    var dur = chromeEvent['dur'];
    if (isBlank(dur)) {
      dur = chromeEvent['tdur'];
    }
    result['dur'] = isBlank(dur) ? 0.0 : dur / 1000;
  }
  StringMapWrapper.forEach(data, (function(value, prop) {
    result[prop] = value;
  }));
  return result;
}
var _BINDINGS = [bind(ChromeDriverExtension).toFactory((function(driver) {
  return new ChromeDriverExtension(driver);
}), [WebDriverAdapter])];
//# sourceMappingURL=chrome_driver_extension.js.map

//# sourceMappingURL=./chrome_driver_extension.map