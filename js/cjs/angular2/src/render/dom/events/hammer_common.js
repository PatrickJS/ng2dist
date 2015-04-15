"use strict";
Object.defineProperties(module.exports, {
  HammerGesturesPluginCommon: {get: function() {
      return HammerGesturesPluginCommon;
    }},
  __esModule: {value: true}
});
var $__event_95_manager__,
    $__angular2_47_src_47_facade_47_collection__;
var EventManagerPlugin = ($__event_95_manager__ = require("./event_manager"), $__event_95_manager__ && $__event_95_manager__.__esModule && $__event_95_manager__ || {default: $__event_95_manager__}).EventManagerPlugin;
var StringMapWrapper = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).StringMapWrapper;
var _eventNames = {
  'pan': true,
  'panstart': true,
  'panmove': true,
  'panend': true,
  'pancancel': true,
  'panleft': true,
  'panright': true,
  'panup': true,
  'pandown': true,
  'pinch': true,
  'pinchstart': true,
  'pinchmove': true,
  'pinchend': true,
  'pinchcancel': true,
  'pinchin': true,
  'pinchout': true,
  'press': true,
  'pressup': true,
  'rotate': true,
  'rotatestart': true,
  'rotatemove': true,
  'rotateend': true,
  'rotatecancel': true,
  'swipe': true,
  'swipeleft': true,
  'swiperight': true,
  'swipeup': true,
  'swipedown': true,
  'tap': true
};
var HammerGesturesPluginCommon = function HammerGesturesPluginCommon() {
  $traceurRuntime.superConstructor($HammerGesturesPluginCommon).call(this);
};
var $HammerGesturesPluginCommon = HammerGesturesPluginCommon;
($traceurRuntime.createClass)(HammerGesturesPluginCommon, {supports: function(eventName) {
    eventName = eventName.toLowerCase();
    return StringMapWrapper.contains(_eventNames, eventName);
  }}, {}, EventManagerPlugin);
Object.defineProperty(HammerGesturesPluginCommon.prototype.supports, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
//# sourceMappingURL=hammer_common.js.map

//# sourceMappingURL=./hammer_common.map