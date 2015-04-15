import {assert} from "rtts_assert/rtts_assert";
import {isBlank,
  BaseException,
  isPresent,
  StringWrapper} from 'angular2/src/facade/lang';
import {DOM} from 'angular2/src/dom/dom_adapter';
import {List,
  ListWrapper,
  MapWrapper} from 'angular2/src/facade/collection';
import {VmTurnZone} from 'angular2/src/core/zone/vm_turn_zone';
var BUBBLE_SYMBOL = '^';
export class EventManager {
  constructor(plugins, zone) {
    assert.argumentTypes(plugins, assert.genericType(List, EventManagerPlugin), zone, VmTurnZone);
    this._zone = zone;
    this._plugins = plugins;
    for (var i = 0; i < plugins.length; i++) {
      plugins[i].manager = this;
    }
  }
  addEventListener(element, eventName, handler) {
    assert.argumentTypes(element, assert.type.any, eventName, assert.type.string, handler, Function);
    var withoutBubbleSymbol = this._removeBubbleSymbol(eventName);
    var plugin = this._findPluginFor(withoutBubbleSymbol);
    plugin.addEventListener(element, withoutBubbleSymbol, handler, withoutBubbleSymbol != eventName);
  }
  addGlobalEventListener(target, eventName, handler) {
    assert.argumentTypes(target, assert.type.string, eventName, assert.type.string, handler, Function);
    var withoutBubbleSymbol = this._removeBubbleSymbol(eventName);
    var plugin = this._findPluginFor(withoutBubbleSymbol);
    return assert.returnType((plugin.addGlobalEventListener(target, withoutBubbleSymbol, handler, withoutBubbleSymbol != eventName)), Function);
  }
  getZone() {
    return assert.returnType((this._zone), VmTurnZone);
  }
  _findPluginFor(eventName) {
    assert.argumentTypes(eventName, assert.type.string);
    var plugins = this._plugins;
    for (var i = 0; i < plugins.length; i++) {
      var plugin = plugins[i];
      if (plugin.supports(eventName)) {
        return assert.returnType((plugin), EventManagerPlugin);
      }
    }
    throw new BaseException(`No event manager plugin found for event ${eventName}`);
  }
  _removeBubbleSymbol(eventName) {
    assert.argumentTypes(eventName, assert.type.string);
    return assert.returnType((eventName[0] == BUBBLE_SYMBOL ? StringWrapper.substring(eventName, 1) : eventName), assert.type.string);
  }
}
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
export class EventManagerPlugin {
  supports(eventName) {
    assert.argumentTypes(eventName, assert.type.string);
    return assert.returnType((false), assert.type.boolean);
  }
  addEventListener(element, eventName, handler, shouldSupportBubble) {
    assert.argumentTypes(element, assert.type.any, eventName, assert.type.string, handler, Function, shouldSupportBubble, assert.type.boolean);
    throw "not implemented";
  }
  addGlobalEventListener(element, eventName, handler, shouldSupportBubble) {
    assert.argumentTypes(element, assert.type.any, eventName, assert.type.string, handler, Function, shouldSupportBubble, assert.type.boolean);
    throw "not implemented";
  }
}
Object.defineProperty(EventManagerPlugin.prototype.supports, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
Object.defineProperty(EventManagerPlugin.prototype.addEventListener, "parameters", {get: function() {
    return [[], [assert.type.string], [Function], [assert.type.boolean]];
  }});
Object.defineProperty(EventManagerPlugin.prototype.addGlobalEventListener, "parameters", {get: function() {
    return [[], [assert.type.string], [Function], [assert.type.boolean]];
  }});
export class DomEventsPlugin extends EventManagerPlugin {
  supports(eventName) {
    assert.argumentTypes(eventName, assert.type.string);
    return assert.returnType((true), assert.type.boolean);
  }
  addEventListener(element, eventName, handler, shouldSupportBubble) {
    assert.argumentTypes(element, assert.type.any, eventName, assert.type.string, handler, Function, shouldSupportBubble, assert.type.boolean);
    var outsideHandler = this._getOutsideHandler(shouldSupportBubble, element, handler, this.manager._zone);
    this.manager._zone.runOutsideAngular(() => {
      DOM.on(element, eventName, outsideHandler);
    });
  }
  addGlobalEventListener(target, eventName, handler, shouldSupportBubble) {
    assert.argumentTypes(target, assert.type.string, eventName, assert.type.string, handler, Function, shouldSupportBubble, assert.type.boolean);
    var element = DOM.getGlobalEventTarget(target);
    var outsideHandler = this._getOutsideHandler(shouldSupportBubble, element, handler, this.manager._zone);
    return assert.returnType((this.manager._zone.runOutsideAngular(() => {
      return DOM.onAndCancel(element, eventName, outsideHandler);
    })), Function);
  }
  _getOutsideHandler(shouldSupportBubble, element, handler, zone) {
    assert.argumentTypes(shouldSupportBubble, assert.type.boolean, element, assert.type.any, handler, Function, zone, VmTurnZone);
    return shouldSupportBubble ? DomEventsPlugin.bubbleCallback(element, handler, zone) : DomEventsPlugin.sameElementCallback(element, handler, zone);
  }
  static sameElementCallback(element, handler, zone) {
    return (event) => {
      if (event.target === element) {
        zone.run(() => handler(event));
      }
    };
  }
  static bubbleCallback(element, handler, zone) {
    return (event) => zone.run(() => handler(event));
  }
}
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
//# sourceMappingURL=event_manager.js.map

//# sourceMappingURL=./event_manager.map