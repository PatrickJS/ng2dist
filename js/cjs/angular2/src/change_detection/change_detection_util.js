"use strict";
Object.defineProperties(module.exports, {
  uninitialized: {get: function() {
      return uninitialized;
    }},
  SimpleChange: {get: function() {
      return SimpleChange;
    }},
  ChangeDetectionUtil: {get: function() {
      return ChangeDetectionUtil;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__proto_95_record__,
    $__exceptions__,
    $__pipes_47_pipe__,
    $__constants__;
var $__0 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isPresent = $__0.isPresent,
    isBlank = $__0.isBlank,
    BaseException = $__0.BaseException,
    Type = $__0.Type;
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__1.List,
    ListWrapper = $__1.ListWrapper,
    MapWrapper = $__1.MapWrapper,
    StringMapWrapper = $__1.StringMapWrapper;
var ProtoRecord = ($__proto_95_record__ = require("./proto_record"), $__proto_95_record__ && $__proto_95_record__.__esModule && $__proto_95_record__ || {default: $__proto_95_record__}).ProtoRecord;
var ExpressionChangedAfterItHasBeenChecked = ($__exceptions__ = require("./exceptions"), $__exceptions__ && $__exceptions__.__esModule && $__exceptions__ || {default: $__exceptions__}).ExpressionChangedAfterItHasBeenChecked;
var NO_CHANGE = ($__pipes_47_pipe__ = require("./pipes/pipe"), $__pipes_47_pipe__ && $__pipes_47_pipe__.__esModule && $__pipes_47_pipe__ || {default: $__pipes_47_pipe__}).NO_CHANGE;
var $__5 = ($__constants__ = require("./constants"), $__constants__ && $__constants__.__esModule && $__constants__ || {default: $__constants__}),
    CHECK_ALWAYS = $__5.CHECK_ALWAYS,
    CHECK_ONCE = $__5.CHECK_ONCE,
    CHECKED = $__5.CHECKED,
    DETACHED = $__5.DETACHED,
    ON_PUSH = $__5.ON_PUSH;
var uninitialized = new Object();
var SimpleChange = function SimpleChange(previousValue, currentValue) {
  this.previousValue = previousValue;
  this.currentValue = currentValue;
};
($traceurRuntime.createClass)(SimpleChange, {}, {});
Object.defineProperty(SimpleChange, "parameters", {get: function() {
    return [[$traceurRuntime.type.any], [$traceurRuntime.type.any]];
  }});
var _simpleChangesIndex = 0;
var _simpleChanges = [new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null)];
function _simpleChange(previousValue, currentValue) {
  var index = _simpleChangesIndex++ % 20;
  var s = _simpleChanges[index];
  s.previousValue = previousValue;
  s.currentValue = currentValue;
  return s;
}
var ChangeDetectionUtil = function ChangeDetectionUtil() {
  ;
};
($traceurRuntime.createClass)(ChangeDetectionUtil, {}, {
  unitialized: function() {
    return uninitialized;
  },
  arrayFn0: function() {
    return [];
  },
  arrayFn1: function(a1) {
    return [a1];
  },
  arrayFn2: function(a1, a2) {
    return [a1, a2];
  },
  arrayFn3: function(a1, a2, a3) {
    return [a1, a2, a3];
  },
  arrayFn4: function(a1, a2, a3, a4) {
    return [a1, a2, a3, a4];
  },
  arrayFn5: function(a1, a2, a3, a4, a5) {
    return [a1, a2, a3, a4, a5];
  },
  arrayFn6: function(a1, a2, a3, a4, a5, a6) {
    return [a1, a2, a3, a4, a5, a6];
  },
  arrayFn7: function(a1, a2, a3, a4, a5, a6, a7) {
    return [a1, a2, a3, a4, a5, a6, a7];
  },
  arrayFn8: function(a1, a2, a3, a4, a5, a6, a7, a8) {
    return [a1, a2, a3, a4, a5, a6, a7, a8];
  },
  arrayFn9: function(a1, a2, a3, a4, a5, a6, a7, a8, a9) {
    return [a1, a2, a3, a4, a5, a6, a7, a8, a9];
  },
  operation_negate: function(value) {
    return !value;
  },
  operation_add: function(left, right) {
    return left + right;
  },
  operation_subtract: function(left, right) {
    return left - right;
  },
  operation_multiply: function(left, right) {
    return left * right;
  },
  operation_divide: function(left, right) {
    return left / right;
  },
  operation_remainder: function(left, right) {
    return left % right;
  },
  operation_equals: function(left, right) {
    return left == right;
  },
  operation_not_equals: function(left, right) {
    return left != right;
  },
  operation_less_then: function(left, right) {
    return left < right;
  },
  operation_greater_then: function(left, right) {
    return left > right;
  },
  operation_less_or_equals_then: function(left, right) {
    return left <= right;
  },
  operation_greater_or_equals_then: function(left, right) {
    return left >= right;
  },
  operation_logical_and: function(left, right) {
    return left && right;
  },
  operation_logical_or: function(left, right) {
    return left || right;
  },
  cond: function(cond, trueVal, falseVal) {
    return cond ? trueVal : falseVal;
  },
  mapFn: function(keys) {
    function buildMap(values) {
      var res = StringMapWrapper.create();
      for (var i = 0; i < keys.length; ++i) {
        StringMapWrapper.set(res, keys[i], values[i]);
      }
      return res;
    }
    switch (keys.length) {
      case 0:
        return (function() {
          return [];
        });
      case 1:
        return (function(a1) {
          return buildMap([a1]);
        });
      case 2:
        return (function(a1, a2) {
          return buildMap([a1, a2]);
        });
      case 3:
        return (function(a1, a2, a3) {
          return buildMap([a1, a2, a3]);
        });
      case 4:
        return (function(a1, a2, a3, a4) {
          return buildMap([a1, a2, a3, a4]);
        });
      case 5:
        return (function(a1, a2, a3, a4, a5) {
          return buildMap([a1, a2, a3, a4, a5]);
        });
      case 6:
        return (function(a1, a2, a3, a4, a5, a6) {
          return buildMap([a1, a2, a3, a4, a5, a6]);
        });
      case 7:
        return (function(a1, a2, a3, a4, a5, a6, a7) {
          return buildMap([a1, a2, a3, a4, a5, a6, a7]);
        });
      case 8:
        return (function(a1, a2, a3, a4, a5, a6, a7, a8) {
          return buildMap([a1, a2, a3, a4, a5, a6, a7, a8]);
        });
      case 9:
        return (function(a1, a2, a3, a4, a5, a6, a7, a8, a9) {
          return buildMap([a1, a2, a3, a4, a5, a6, a7, a8, a9]);
        });
      default:
        throw new BaseException("Does not support literal maps with more than 9 elements");
    }
  },
  keyedAccess: function(obj, args) {
    return obj[args[0]];
  },
  noChangeMarker: function(value) {
    return value === NO_CHANGE;
  },
  throwOnChange: function(proto, change) {
    throw new ExpressionChangedAfterItHasBeenChecked(proto, change);
  },
  changeDetectionMode: function(strategy) {
    return strategy == ON_PUSH ? CHECK_ONCE : CHECK_ALWAYS;
  },
  simpleChange: function(previousValue, currentValue) {
    return _simpleChange(previousValue, currentValue);
  },
  addChange: function(changes, propertyName, change) {
    if (isBlank(changes)) {
      changes = {};
    }
    changes[propertyName] = change;
    return changes;
  }
});
Object.defineProperty(ChangeDetectionUtil.mapFn, "parameters", {get: function() {
    return [[List]];
  }});
Object.defineProperty(ChangeDetectionUtil.throwOnChange, "parameters", {get: function() {
    return [[ProtoRecord], []];
  }});
Object.defineProperty(ChangeDetectionUtil.changeDetectionMode, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
Object.defineProperty(ChangeDetectionUtil.simpleChange, "parameters", {get: function() {
    return [[$traceurRuntime.type.any], [$traceurRuntime.type.any]];
  }});
Object.defineProperty(ChangeDetectionUtil.addChange, "parameters", {get: function() {
    return [[], [$traceurRuntime.type.string], []];
  }});
//# sourceMappingURL=change_detection_util.js.map

//# sourceMappingURL=./change_detection_util.map