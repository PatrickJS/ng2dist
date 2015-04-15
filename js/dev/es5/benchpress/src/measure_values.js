System.register(["rtts_assert/rtts_assert", "angular2/src/facade/lang", "angular2/src/facade/collection"], function($__export) {
  "use strict";
  var assert,
      Date,
      DateWrapper,
      StringMap,
      MeasureValues;
  return {
    setters: [function($__m) {
      assert = $__m.assert;
    }, function($__m) {
      Date = $__m.Date;
      DateWrapper = $__m.DateWrapper;
    }, function($__m) {
      StringMap = $__m.StringMap;
    }],
    execute: function() {
      MeasureValues = $__export("MeasureValues", (function() {
        var MeasureValues = function MeasureValues(runIndex, timeStamp, values) {
          assert.argumentTypes(runIndex, assert.type.number, timeStamp, Date, values, StringMap);
          this.timeStamp = timeStamp;
          this.runIndex = runIndex;
          this.values = values;
        };
        return ($traceurRuntime.createClass)(MeasureValues, {toJson: function() {
            return {
              'timeStamp': DateWrapper.toJson(this.timeStamp),
              'runIndex': this.runIndex,
              'values': this.values
            };
          }}, {});
      }()));
      Object.defineProperty(MeasureValues, "parameters", {get: function() {
          return [[assert.type.number], [Date], [StringMap]];
        }});
    }
  };
});
//# sourceMappingURL=measure_values.es6.map

//# sourceMappingURL=./measure_values.js.map