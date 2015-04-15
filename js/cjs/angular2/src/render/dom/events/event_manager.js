"use strict";
Object.defineProperties(module.exports, {
  EventManager: {get: function() {
      return EventManager;
    }},
  EventManagerPlugin: {get: function() {
      return EventManagerPlugin;
    }},
  DomEventsPlugin: {get: function() {
      return DomEventsPlugin;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__;
var $__0 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isBlank = $__0.isBlank,
    BaseException = $__0.BaseException,
    isPresent = $__0.isPresent,
    StringWrapper = $__0.StringWrapper;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__2.List,
    ListWrapper = $__2.ListWrapper,
    MapWrapper = $__2.MapWrapper;
var VmTurnZone = ($__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__ = require("angular2/src/core/zone/vm_turn_zone"), $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__ && $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__.__esModule && $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__ || {default: $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__}).VmTurnZone;
var BUBBLE_SYMBOL = '^';
var EventManager = function EventManager(plugins, zone) {
  this._zone = zone;
  this._plugins = plugins;
  for (var i = 0; i < plugins.length; i++) {
    plugins[i].manager = this;
  }
};
($traceurRuntime.createClass)(EventManager, {
  addEventListener: function(element, eventName, handler) {
    var withoutBubbleSymbol = this._removeBubbleSymbol(eventName);
    var plugin = this._findPluginFor(withoutBubbleSymbol);
    plugin.addEventListener(element, withoutBubbleSymbol, handler, withoutBubbleSymbol != eventName);
  },
  addGlobalEventListener: function(target, eventName, handler) {
    var withoutBubbleSymbol = this._removeBubbleSymbol(eventName);
    var plugin = this._findPluginFor(withoutBubbleSymbol);
    return plugin.addGlobalEventListener(target, withoutBubbleSymbol, handler, withoutBubbleSymbol != eventName);
  },
  getZone: function() {
    return this._zone;
  },
  _findPluginFor: function(eventName) {
    var plugins = this._plugins;
    for (var i = 0; i < plugins.length; i++) {
      var plugin = plugins[i];
      if (plugin.supports(eventName)) {
        return plugin;
      }
    }
    throw new BaseException(("No event manager plugin found for event " + eventName));
  },
  _removeBubbleSymbol: function(eventName) {
    return eventName[0] == BUBBLE_SYMBOL ? StringWrapper.substring(eventName, 1) : eventName;
  }
}, {});
Object.defineProperty(EventManager, "parameters", {get: function() {
    return [[$traceurRuntime.genericType(List, EventManagerPlugin)], [VmTurnZone]];
  }});
Object.defineProperty(EventManager.prototype.addEventListener, "parameters", {get: function() {
    return [[], [$traceurRuntime.type.string], [Function]];
  }});
Object.defineProperty(EventManager.prototype.addGlobalEventListener, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [$traceurRuntime.type.string], [Function]];
  }});
Object.defineProperty(EventManager.prototype._findPluginFor, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
Object.defineProperty(EventManager.prototype._removeBubbleSymbol, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
var EventManagerPlugin = function EventManagerPlugin() {
  ;
};
($traceurRuntime.createClass)(EventManagerPlugin, {
  supports: function(eventName) {
    return false;
  },
  addEventListener: function(element, eventName, handler, shouldSupportBubble) {
    throw "not implemented";
  },
  addGlobalEventListener: function(element, eventName, handler, shouldSupportBubble) {
    throw "not implemented";
  }
}, {});
Object.defineProperty(EventManagerPlugin.prototype.supports, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
Object.defineProperty(EventManagerPlugin.prototype.addEventListener, "parameters", {get: function() {
    return [[], [$traceurRuntime.type.string], [Function], [$traceurRuntime.type.boolean]];
  }});
Object.defineProperty(EventManagerPlugin.prototype.addGlobalEventListener, "parameters", {get: function() {
    return [[], [$traceurRuntime.type.string], [Function], [$traceurRuntime.type.boolean]];
  }});
var DomEventsPlugin = function DomEventsPlugin() {
  $traceurRuntime.superConstructor($DomEventsPlugin).apply(this, arguments);
  ;
};
var $DomEventsPlugin = DomEventsPlugin;
($traceurRuntime.createClass)(DomEventsPlugin, {
  supports: function(eventName) {
    return true;
  },
  addEventListener: function(element, eventName, handler, shouldSupportBubble) {
    var outsideHandler = this._getOutsideHandler(shouldSupportBubble, element, handler, this.manager._zone);
    this.manager._zone.runOutsideAngular((function() {
      DOM.on(element, eventName, outsideHandler);
    }));
  },
  addGlobalEventListener: function(target, eventName, handler, shouldSupportBubble) {
    var element = DOM.getGlobalEventTarget(target);
    var outsideHandler = this._getOutsideHandler(shouldSupportBubble, element, handler, this.manager._zone);
    return this.manager._zone.runOutsideAngular((function() {
      return DOM.onAndCancel(element, eventName, outsideHandler);
    }));
  },
  _getOutsideHandler: function(shouldSupportBubble, element, handler, zone) {
    return shouldSupportBubble ? $DomEventsPlugin.bubbleCallback(element, handler, zone) : $DomEventsPlugin.sameElementCallback(element, handler, zone);
  }
}, {
  sameElementCallback: function(element, handler, zone) {
    return (function(event) {
      if (event.target === element) {
        zone.run((function() {
          return handler(event);
        }));
      }
    });
  },
  bubbleCallback: function(element, handler, zone) {
    return (function(event) {
      return zone.run((function() {
        return handler(event);
      }));
    });
  }
}, EventManagerPlugin);
Object.defineProperty(DomEventsPlugin.prototype.supports, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
Object.defineProperty(DomEventsPlugin.prototype.addEventListener, "parameters", {get: function() {
    return [[], [$traceurRuntime.type.string], [Function], [$traceurRuntime.type.boolean]];
  }});
Object.defineProperty(DomEventsPlugin.prototype.addGlobalEventListener, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [$traceurRuntime.type.string], [Function], [$traceurRuntime.type.boolean]];
  }});
Object.defineProperty(DomEventsPlugin.prototype._getOutsideHandler, "parameters", {get: function() {
    return [[$traceurRuntime.type.boolean], [], [Function], [VmTurnZone]];
  }});
//# sourceMappingURL=event_manager.js.map

//# sourceMappingURL=./event_manager.map