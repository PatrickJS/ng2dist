"use strict";
Object.defineProperties(module.exports, {
  HammerGesturesPlugin: {get: function() {
      return HammerGesturesPlugin;
    }},
  __esModule: {value: true}
});
var $__hammer_95_common__,
    $__angular2_47_src_47_facade_47_lang__;
var HammerGesturesPluginCommon = ($__hammer_95_common__ = require("./hammer_common"), $__hammer_95_common__ && $__hammer_95_common__.__esModule && $__hammer_95_common__ || {default: $__hammer_95_common__}).HammerGesturesPluginCommon;
var $__1 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isPresent = $__1.isPresent,
    BaseException = $__1.BaseException;
var HammerGesturesPlugin = function HammerGesturesPlugin() {
  $traceurRuntime.superConstructor($HammerGesturesPlugin).call(this);
};
var $HammerGesturesPlugin = HammerGesturesPlugin;
($traceurRuntime.createClass)(HammerGesturesPlugin, {
  supports: function(eventName) {
    if (!$traceurRuntime.superGet(this, $HammerGesturesPlugin.prototype, "supports").call(this, eventName))
      return false;
    if (!isPresent(window.Hammer)) {
      throw new BaseException(("Hammer.js is not loaded, can not bind " + eventName + " event"));
    }
    return true;
  },
  addEventListener: function(element, eventName, handler, shouldSupportBubble) {
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
}, {}, HammerGesturesPluginCommon);
Object.defineProperty(HammerGesturesPlugin.prototype.supports, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
Object.defineProperty(HammerGesturesPlugin.prototype.addEventListener, "parameters", {get: function() {
    return [[], [$traceurRuntime.type.string], [Function], [$traceurRuntime.type.boolean]];
  }});
//# sourceMappingURL=hammer_gestures.es6.map

//# sourceMappingURL=./hammer_gestures.map