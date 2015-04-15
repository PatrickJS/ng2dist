import {assert} from "rtts_assert/rtts_assert";
import {HammerGesturesPluginCommon} from './hammer_common';
import {isPresent,
  BaseException} from 'angular2/src/facade/lang';
export class HammerGesturesPlugin extends HammerGesturesPluginCommon {
  constructor() {
    super();
  }
  supports(eventName) {
    assert.argumentTypes(eventName, assert.type.string);
    if (!super.supports(eventName))
      return assert.returnType((false), assert.type.boolean);
    if (!isPresent(window.Hammer)) {
      throw new BaseException(`Hammer.js is not loaded, can not bind ${eventName} event`);
    }
    return assert.returnType((true), assert.type.boolean);
  }
  addEventListener(element, eventName, handler, shouldSupportBubble) {
    assert.argumentTypes(element, assert.type.any, eventName, assert.type.string, handler, Function, shouldSupportBubble, assert.type.boolean);
    if (shouldSupportBubble)
      throw new BaseException('Hammer.js plugin does not support bubbling gestures.');
    var zone = this.manager.getZone();
    eventName = eventName.toLowerCase();
    zone.runOutsideAngular(function() {
      var mc = new Hammer(element);
      mc.get('pinch').set({enable: true});
      mc.get('rotate').set({enable: true});
      mc.on(eventName, function(eventObj) {
        zone.run(function() {
          handler(eventObj);
        });
      });
    });
  }
}
Object.defineProperty(HammerGesturesPlugin.prototype.supports, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
Object.defineProperty(HammerGesturesPlugin.prototype.addEventListener, "parameters", {get: function() {
    return [[], [assert.type.string], [Function], [assert.type.boolean]];
  }});
//# sourceMappingURL=hammer_gestures.es6.map

//# sourceMappingURL=./hammer_gestures.map