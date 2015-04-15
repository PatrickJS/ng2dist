"use strict";
Object.defineProperties(module.exports, {
  LifeCycle: {get: function() {
      return LifeCycle;
    }},
  __esModule: {value: true}
});
var $__angular2_47_di__,
    $__angular2_47_change_95_detection__,
    $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__,
    $__angular2_47_src_47_core_47_exception_95_handler__,
    $__angular2_47_src_47_facade_47_lang__;
var Injectable = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}).Injectable;
var ChangeDetector = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}).ChangeDetector;
var VmTurnZone = ($__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__ = require("angular2/src/core/zone/vm_turn_zone"), $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__ && $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__.__esModule && $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__ || {default: $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__}).VmTurnZone;
var ExceptionHandler = ($__angular2_47_src_47_core_47_exception_95_handler__ = require("angular2/src/core/exception_handler"), $__angular2_47_src_47_core_47_exception_95_handler__ && $__angular2_47_src_47_core_47_exception_95_handler__.__esModule && $__angular2_47_src_47_core_47_exception_95_handler__ || {default: $__angular2_47_src_47_core_47_exception_95_handler__}).ExceptionHandler;
var isPresent = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).isPresent;
var LifeCycle = function LifeCycle(exceptionHandler) {
  var changeDetector = arguments[1] !== (void 0) ? arguments[1] : null;
  var enforceNoNewChanges = arguments[2] !== (void 0) ? arguments[2] : false;
  this._errorHandler = (function(exception, stackTrace) {
    exceptionHandler.call(exception, stackTrace);
    throw exception;
  });
  this._changeDetector = changeDetector;
  this._enforceNoNewChanges = enforceNoNewChanges;
};
($traceurRuntime.createClass)(LifeCycle, {
  registerWith: function(zone) {
    var changeDetector = arguments[1] !== (void 0) ? arguments[1] : null;
    var $__5 = this;
    if (isPresent(changeDetector)) {
      this._changeDetector = changeDetector;
    }
    zone.initCallbacks({
      onErrorHandler: this._errorHandler,
      onTurnDone: (function() {
        return $__5.tick();
      })
    });
  },
  tick: function() {
    this._changeDetector.detectChanges();
    if (this._enforceNoNewChanges) {
      this._changeDetector.checkNoChanges();
    }
  }
}, {});
Object.defineProperty(LifeCycle, "annotations", {get: function() {
    return [new Injectable()];
  }});
Object.defineProperty(LifeCycle, "parameters", {get: function() {
    return [[ExceptionHandler], [ChangeDetector], [$traceurRuntime.type.boolean]];
  }});
Object.defineProperty(LifeCycle.prototype.registerWith, "parameters", {get: function() {
    return [[VmTurnZone], [ChangeDetector]];
  }});
//# sourceMappingURL=life_cycle.js.map

//# sourceMappingURL=./life_cycle.map