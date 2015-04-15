"use strict";
Object.defineProperties(module.exports, {
  KeyEventsPlugin: {get: function() {
      return KeyEventsPlugin;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__event_95_manager__;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var $__1 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isPresent = $__1.isPresent,
    isBlank = $__1.isBlank,
    StringWrapper = $__1.StringWrapper,
    RegExpWrapper = $__1.RegExpWrapper,
    BaseException = $__1.BaseException,
    NumberWrapper = $__1.NumberWrapper;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    StringMapWrapper = $__2.StringMapWrapper,
    ListWrapper = $__2.ListWrapper;
var EventManagerPlugin = ($__event_95_manager__ = require("./event_manager"), $__event_95_manager__ && $__event_95_manager__.__esModule && $__event_95_manager__ || {default: $__event_95_manager__}).EventManagerPlugin;
var modifierKeys = ['alt', 'control', 'meta', 'shift'];
var modifierKeyGetters = {
  'alt': (function(event) {
    return event.altKey;
  }),
  'control': (function(event) {
    return event.ctrlKey;
  }),
  'meta': (function(event) {
    return event.metaKey;
  }),
  'shift': (function(event) {
    return event.shiftKey;
  })
};
var KeyEventsPlugin = function KeyEventsPlugin() {
  $traceurRuntime.superConstructor($KeyEventsPlugin).call(this);
};
var $KeyEventsPlugin = KeyEventsPlugin;
($traceurRuntime.createClass)(KeyEventsPlugin, {
  supports: function(eventName) {
    return isPresent($KeyEventsPlugin.parseEventName(eventName));
  },
  addEventListener: function(element, eventName, handler, shouldSupportBubble) {
    var parsedEvent = $KeyEventsPlugin.parseEventName(eventName);
    var outsideHandler = $KeyEventsPlugin.eventCallback(element, shouldSupportBubble, StringMapWrapper.get(parsedEvent, 'fullKey'), handler, this.manager.getZone());
    this.manager.getZone().runOutsideAngular((function() {
      DOM.on(element, StringMapWrapper.get(parsedEvent, 'domEventName'), outsideHandler);
    }));
  }
}, {
  parseEventName: function(eventName) {
    eventName = eventName.toLowerCase();
    var parts = eventName.split('.');
    var domEventName = ListWrapper.removeAt(parts, 0);
    if ((parts.length === 0) || !(StringWrapper.equals(domEventName, 'keydown') || StringWrapper.equals(domEventName, 'keyup'))) {
      return null;
    }
    var key = ListWrapper.removeLast(parts);
    var fullKey = '';
    ListWrapper.forEach(modifierKeys, (function(modifierName) {
      if (ListWrapper.contains(parts, modifierName)) {
        ListWrapper.remove(parts, modifierName);
        fullKey += modifierName + '.';
      }
    }));
    fullKey += key;
    if (parts.length != 0 || key.length === 0) {
      return null;
    }
    return {
      'domEventName': domEventName,
      'fullKey': fullKey
    };
  },
  getEventFullKey: function(event) {
    var fullKey = '';
    var key = DOM.getEventKey(event);
    key = key.toLowerCase();
    if (StringWrapper.equals(key, ' ')) {
      key = 'space';
    } else if (StringWrapper.equals(key, '.')) {
      key = 'dot';
    }
    ListWrapper.forEach(modifierKeys, (function(modifierName) {
      if (modifierName != key) {
        var modifierGetter = StringMapWrapper.get(modifierKeyGetters, modifierName);
        if (modifierGetter(event)) {
          fullKey += modifierName + '.';
        }
      }
    }));
    fullKey += key;
    return fullKey;
  },
  eventCallback: function(element, shouldSupportBubble, fullKey, handler, zone) {
    return (function(event) {
      var correctElement = shouldSupportBubble || event.target === element;
      if (correctElement && $KeyEventsPlugin.getEventFullKey(event) === fullKey) {
        zone.run((function() {
          return handler(event);
        }));
      }
    });
  }
}, EventManagerPlugin);
Object.defineProperty(KeyEventsPlugin.prototype.supports, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
Object.defineProperty(KeyEventsPlugin.prototype.addEventListener, "parameters", {get: function() {
    return [[], [$traceurRuntime.type.string], [Function], [$traceurRuntime.type.boolean]];
  }});
Object.defineProperty(KeyEventsPlugin.parseEventName, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
//# sourceMappingURL=key_events.js.map

//# sourceMappingURL=./key_events.map