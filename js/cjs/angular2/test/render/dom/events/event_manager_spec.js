'use strict'; var parse5Adapter = require('angular2/src/dom/parse5_adapter'); parse5Adapter.Parse5DomAdapter.makeCurrent();
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_render_47_dom_47_events_47_event_95_manager__,
    $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_browser__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    describe = $__0.describe,
    ddescribe = $__0.ddescribe,
    it = $__0.it,
    iit = $__0.iit,
    xit = $__0.xit,
    xdescribe = $__0.xdescribe,
    expect = $__0.expect,
    beforeEach = $__0.beforeEach,
    el = $__0.el;
var $__1 = ($__angular2_47_src_47_render_47_dom_47_events_47_event_95_manager__ = require("angular2/src/render/dom/events/event_manager"), $__angular2_47_src_47_render_47_dom_47_events_47_event_95_manager__ && $__angular2_47_src_47_render_47_dom_47_events_47_event_95_manager__.__esModule && $__angular2_47_src_47_render_47_dom_47_events_47_event_95_manager__ || {default: $__angular2_47_src_47_render_47_dom_47_events_47_event_95_manager__}),
    EventManager = $__1.EventManager,
    EventManagerPlugin = $__1.EventManagerPlugin,
    DomEventsPlugin = $__1.DomEventsPlugin;
var VmTurnZone = ($__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__ = require("angular2/src/core/zone/vm_turn_zone"), $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__ && $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__.__esModule && $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__ || {default: $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__}).VmTurnZone;
var $__3 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__3.List,
    ListWrapper = $__3.ListWrapper,
    Map = $__3.Map,
    MapWrapper = $__3.MapWrapper;
var document = ($__angular2_47_src_47_facade_47_browser__ = require("angular2/src/facade/browser"), $__angular2_47_src_47_facade_47_browser__ && $__angular2_47_src_47_facade_47_browser__.__esModule && $__angular2_47_src_47_facade_47_browser__ || {default: $__angular2_47_src_47_facade_47_browser__}).document;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
function main() {
  var domEventPlugin;
  beforeEach((function() {
    domEventPlugin = new DomEventsPlugin();
  }));
  describe('EventManager', (function() {
    it('should delegate event bindings to plugins', (function() {
      var element = el('<div></div>');
      var handler = (function(e) {
        return e;
      });
      var plugin = new FakeEventManagerPlugin(['click']);
      var manager = new EventManager([plugin, domEventPlugin], new FakeVmTurnZone());
      manager.addEventListener(element, 'click', handler);
      expect(MapWrapper.get(plugin._nonBubbleEventHandlers, 'click')).toBe(handler);
    }));
    it('should delegate bubbling events to plugins', (function() {
      var element = el('<div></div>');
      var handler = (function(e) {
        return e;
      });
      var plugin = new FakeEventManagerPlugin(['click']);
      var manager = new EventManager([plugin, domEventPlugin], new FakeVmTurnZone());
      manager.addEventListener(element, '^click', handler);
      expect(MapWrapper.get(plugin._bubbleEventHandlers, 'click')).toBe(handler);
    }));
    it('should delegate event bindings to the first plugin supporting the event', (function() {
      var element = el('<div></div>');
      var clickHandler = (function(e) {
        return e;
      });
      var dblClickHandler = (function(e) {
        return e;
      });
      var plugin1 = new FakeEventManagerPlugin(['dblclick']);
      var plugin2 = new FakeEventManagerPlugin(['click', 'dblclick']);
      var manager = new EventManager([plugin1, plugin2], new FakeVmTurnZone());
      manager.addEventListener(element, 'click', clickHandler);
      manager.addEventListener(element, 'dblclick', dblClickHandler);
      expect(MapWrapper.contains(plugin1._nonBubbleEventHandlers, 'click')).toBe(false);
      expect(MapWrapper.get(plugin2._nonBubbleEventHandlers, 'click')).toBe(clickHandler);
      expect(MapWrapper.contains(plugin2._nonBubbleEventHandlers, 'dblclick')).toBe(false);
      expect(MapWrapper.get(plugin1._nonBubbleEventHandlers, 'dblclick')).toBe(dblClickHandler);
    }));
    it('should throw when no plugin can handle the event', (function() {
      var element = el('<div></div>');
      var plugin = new FakeEventManagerPlugin(['dblclick']);
      var manager = new EventManager([plugin], new FakeVmTurnZone());
      expect((function() {
        return manager.addEventListener(element, 'click', null);
      })).toThrowError('No event manager plugin found for event click');
    }));
    it('by default events are only caught on same element', (function() {
      var element = el('<div><div></div></div>');
      var child = DOM.firstChild(element);
      var dispatchedEvent = DOM.createMouseEvent('click');
      var receivedEvent = null;
      var handler = (function(e) {
        receivedEvent = e;
      });
      var manager = new EventManager([domEventPlugin], new FakeVmTurnZone());
      manager.addEventListener(element, 'click', handler);
      DOM.dispatchEvent(child, dispatchedEvent);
      expect(receivedEvent).toBe(null);
    }));
    it('bubbled events are caught when fired from a child', (function() {
      var element = el('<div><div></div></div>');
      DOM.appendChild(document.body, element);
      var child = DOM.firstChild(element);
      var dispatchedEvent = DOM.createMouseEvent('click');
      var receivedEvent = null;
      var handler = (function(e) {
        receivedEvent = e;
      });
      var manager = new EventManager([domEventPlugin], new FakeVmTurnZone());
      manager.addEventListener(element, '^click', handler);
      DOM.dispatchEvent(child, dispatchedEvent);
      expect(receivedEvent).toBe(dispatchedEvent);
    }));
    it('should add and remove global event listeners with correct bubbling', (function() {
      var element = el('<div><div></div></div>');
      DOM.appendChild(document.body, element);
      var dispatchedEvent = DOM.createMouseEvent('click');
      var receivedEvent = null;
      var handler = (function(e) {
        receivedEvent = e;
      });
      var manager = new EventManager([domEventPlugin], new FakeVmTurnZone());
      var remover = manager.addGlobalEventListener("document", '^click', handler);
      DOM.dispatchEvent(element, dispatchedEvent);
      expect(receivedEvent).toBe(dispatchedEvent);
      receivedEvent = null;
      remover();
      DOM.dispatchEvent(element, dispatchedEvent);
      expect(receivedEvent).toBe(null);
      remover = manager.addGlobalEventListener("document", 'click', handler);
      DOM.dispatchEvent(element, dispatchedEvent);
      expect(receivedEvent).toBe(null);
    }));
  }));
}
var FakeEventManagerPlugin = function FakeEventManagerPlugin(supports) {
  $traceurRuntime.superConstructor($FakeEventManagerPlugin).call(this);
  this._supports = supports;
  this._nonBubbleEventHandlers = MapWrapper.create();
  this._bubbleEventHandlers = MapWrapper.create();
};
var $FakeEventManagerPlugin = FakeEventManagerPlugin;
($traceurRuntime.createClass)(FakeEventManagerPlugin, {
  supports: function(eventName) {
    return ListWrapper.contains(this._supports, eventName);
  },
  addEventListener: function(element, eventName, handler, shouldSupportBubble) {
    var $__6 = this;
    MapWrapper.set(shouldSupportBubble ? this._bubbleEventHandlers : this._nonBubbleEventHandlers, eventName, handler);
    return (function() {
      MapWrapper.delete(shouldSupportBubble ? $__6._bubbleEventHandlers : $__6._nonBubbleEventHandlers, eventName);
    });
  }
}, {}, EventManagerPlugin);
Object.defineProperty(FakeEventManagerPlugin, "parameters", {get: function() {
    return [[$traceurRuntime.genericType(List, $traceurRuntime.type.string)]];
  }});
Object.defineProperty(FakeEventManagerPlugin.prototype.supports, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
Object.defineProperty(FakeEventManagerPlugin.prototype.addEventListener, "parameters", {get: function() {
    return [[], [$traceurRuntime.type.string], [Function], [$traceurRuntime.type.boolean]];
  }});
var FakeVmTurnZone = function FakeVmTurnZone() {
  $traceurRuntime.superConstructor($FakeVmTurnZone).call(this, {enableLongStackTrace: false});
};
var $FakeVmTurnZone = FakeVmTurnZone;
($traceurRuntime.createClass)(FakeVmTurnZone, {
  run: function(fn) {
    fn();
  },
  runOutsideAngular: function(fn) {
    return fn();
  }
}, {}, VmTurnZone);
//# sourceMappingURL=event_manager_spec.js.map

//# sourceMappingURL=./event_manager_spec.map
 main();