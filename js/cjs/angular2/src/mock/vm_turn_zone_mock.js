"use strict";
Object.defineProperties(module.exports, {
  MockVmTurnZone: {get: function() {
      return MockVmTurnZone;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__;
var VmTurnZone = ($__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__ = require("angular2/src/core/zone/vm_turn_zone"), $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__ && $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__.__esModule && $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__ || {default: $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__}).VmTurnZone;
var MockVmTurnZone = function MockVmTurnZone() {
  $traceurRuntime.superConstructor($MockVmTurnZone).call(this, {enableLongStackTrace: false});
};
var $MockVmTurnZone = MockVmTurnZone;
($traceurRuntime.createClass)(MockVmTurnZone, {
  run: function(fn) {
    fn();
  },
  runOutsideAngular: function(fn) {
    return fn();
  }
}, {}, VmTurnZone);
//# sourceMappingURL=vm_turn_zone_mock.js.map

//# sourceMappingURL=./vm_turn_zone_mock.map