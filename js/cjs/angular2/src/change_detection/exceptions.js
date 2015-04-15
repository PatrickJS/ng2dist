"use strict";
Object.defineProperties(module.exports, {
  ExpressionChangedAfterItHasBeenChecked: {get: function() {
      return ExpressionChangedAfterItHasBeenChecked;
    }},
  ChangeDetectionError: {get: function() {
      return ChangeDetectionError;
    }},
  __esModule: {value: true}
});
var $__proto_95_record__;
var ProtoRecord = ($__proto_95_record__ = require("./proto_record"), $__proto_95_record__ && $__proto_95_record__.__esModule && $__proto_95_record__ || {default: $__proto_95_record__}).ProtoRecord;
var ExpressionChangedAfterItHasBeenChecked = function ExpressionChangedAfterItHasBeenChecked(proto, change) {
  $traceurRuntime.superConstructor($ExpressionChangedAfterItHasBeenChecked).call(this);
  this.message = ("Expression '" + proto.expressionAsString + "' has changed after it was checked. ") + ("Previous value: '" + change.previousValue + "'. Current value: '" + change.currentValue + "'");
};
var $ExpressionChangedAfterItHasBeenChecked = ExpressionChangedAfterItHasBeenChecked;
($traceurRuntime.createClass)(ExpressionChangedAfterItHasBeenChecked, {toString: function() {
    return this.message;
  }}, {}, Error);
Object.defineProperty(ExpressionChangedAfterItHasBeenChecked, "parameters", {get: function() {
    return [[ProtoRecord], [$traceurRuntime.type.any]];
  }});
var ChangeDetectionError = function ChangeDetectionError(proto, originalException) {
  $traceurRuntime.superConstructor($ChangeDetectionError).call(this);
  this.originalException = originalException;
  this.location = proto.expressionAsString;
  this.message = (this.originalException + " in [" + this.location + "]");
};
var $ChangeDetectionError = ChangeDetectionError;
($traceurRuntime.createClass)(ChangeDetectionError, {toString: function() {
    return this.message;
  }}, {}, Error);
Object.defineProperty(ChangeDetectionError, "parameters", {get: function() {
    return [[ProtoRecord], [$traceurRuntime.type.any]];
  }});
//# sourceMappingURL=exceptions.js.map

//# sourceMappingURL=./exceptions.map