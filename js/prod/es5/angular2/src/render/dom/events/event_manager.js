System.register(["angular2/src/facade/lang", "angular2/src/dom/dom_adapter", "angular2/src/facade/collection", "angular2/src/core/zone/vm_turn_zone"], function($__export) {
  "use strict";
  var isBlank,
      BaseException,
      isPresent,
      StringWrapper,
      DOM,
      List,
      ListWrapper,
      MapWrapper,
      VmTurnZone,
      BUBBLE_SYMBOL,
      EventManager,
      EventManagerPlugin,
      DomEventsPlugin;
  return {
    setters: [function($__m) {
      isBlank = $__m.isBlank;
      BaseException = $__m.BaseException;
      isPresent = $__m.isPresent;
      StringWrapper = $__m.StringWrapper;
    }, function($__m) {
      DOM = $__m.DOM;
    }, function($__m) {
      List = $__m.List;
      ListWrapper = $__m.ListWrapper;
      MapWrapper = $__m.MapWrapper;
    }, function($__m) {
      VmTurnZone = $__m.VmTurnZone;
    }],
    execute: function() {
      BUBBLE_SYMBOL = '^';
      EventManager = $__export("EventManager", (function() {
        var EventManager = function EventManager(plugins, zone) {
          this._zone = zone;
          this._plugins = plugins;
          for (var i = 0; i < plugins.length; i++) {
            plugins[i].manager = this;
          }
        };
        return ($traceurRuntime.createClass)(EventManager, {
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
      }()));
      Object.defineProperty(EventManager, "parameters", {get: function() {
          return [[assert.genericType(List, EventManagerPlugin)], [VmTurnZone]];
        }});
      Object.defineProperty(EventManager.prototype.addEventListener, "parameters", {get: function() {
          return [[], [assert.type.string], [Function]];
        }});
      Object.defineProperty(EventManager.prototype.addGlobalEventListener, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.string], [Function]];
        }});
      Object.defineProperty(EventManager.prototype._findPluginFor, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Object.defineProperty(EventManager.prototype._removeBubbleSymbol, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      EventManagerPlugin = $__export("EventManagerPlugin", (function() {
        var EventManagerPlugin = function EventManagerPlugin() {
          ;
        };
        return ($traceurRuntime.createClass)(EventManagerPlugin, {
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
      }()));
      Object.defineProperty(EventManagerPlugin.prototype.supports, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Object.defineProperty(EventManagerPlugin.prototype.addEventListener, "parameters", {get: function() {
          return [[], [assert.type.string], [Function], [assert.type.boolean]];
        }});
      Object.defineProperty(EventManagerPlugin.prototype.addGlobalEventListener, "parameters", {get: function() {
          return [[], [assert.type.string], [Function], [assert.type.boolean]];
        }});
      DomEventsPlugin = $__export("DomEventsPlugin", (function($__super) {
        var DomEventsPlugin = function DomEventsPlugin() {
          $traceurRuntime.superConstructor(DomEventsPlugin).apply(this, arguments);
          ;
        };
        return ($traceurRuntime.createClass)(DomEventsPlugin, {
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
            return shouldSupportBubble ? DomEventsPlugin.bubbleCallback(element, handler, zone) : DomEventsPlugin.sameElementCallback(element, handler, zone);
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
        }, $__super);
      }(EventManagerPlugin)));
      Object.defineProperty(DomEventsPlugin.prototype.supports, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Object.defineProperty(DomEventsPlugin.prototype.addEventListener, "parameters", {get: function() {
          return [[], [assert.type.string], [Function], [assert.type.boolean]];
        }});
      Object.defineProperty(DomEventsPlugin.prototype.addGlobalEventListener, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.string], [Function], [assert.type.boolean]];
        }});
      Object.defineProperty(DomEventsPlugin.prototype._getOutsideHandler, "parameters", {get: function() {
          return [[assert.type.boolean], [], [Function], [VmTurnZone]];
        }});
    }
  };
});
//# sourceMappingURL=event_manager.es6.map

//# sourceMappingURL=./event_manager.js.map