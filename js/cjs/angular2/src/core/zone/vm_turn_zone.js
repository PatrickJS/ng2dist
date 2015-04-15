"use strict";
Object.defineProperties(module.exports, {
  VmTurnZone: {get: function() {
      return VmTurnZone;
    }},
  __esModule: {value: true}
});
var VmTurnZone = function VmTurnZone($__1) {
  var enableLongStackTrace = $__1.enableLongStackTrace;
};
($traceurRuntime.createClass)(VmTurnZone, {
  initCallbacks: function() {
    var $__1 = arguments[0] !== (void 0) ? arguments[0] : {},
        onTurnStart = $__1.onTurnStart,
        onTurnDone = $__1.onTurnDone,
        onScheduleMicrotask = $__1.onScheduleMicrotask,
        onErrorHandler = $__1.onErrorHandler;
  },
  run: function(fn) {
    return fn();
  },
  runOutsideAngular: function(fn) {
    return fn();
  }
}, {});
//# sourceMappingURL=vm_turn_zone.cjs.map

//# sourceMappingURL=./vm_turn_zone.map