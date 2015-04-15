"use strict";
Object.defineProperties(module.exports, {
  MeasureValues: {get: function() {
      return MeasureValues;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__;
var $__0 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    Date = $__0.Date,
    DateWrapper = $__0.DateWrapper;
var StringMap = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).StringMap;
var MeasureValues = function MeasureValues(runIndex, timeStamp, values) {
  this.timeStamp = timeStamp;
  this.runIndex = runIndex;
  this.values = values;
};
($traceurRuntime.createClass)(MeasureValues, {toJson: function() {
    return {
      'timeStamp': DateWrapper.toJson(this.timeStamp),
      'runIndex': this.runIndex,
      'values': this.values
    };
  }}, {});
Object.defineProperty(MeasureValues, "parameters", {get: function() {
    return [[$traceurRuntime.type.number], [Date], [StringMap]];
  }});
//# sourceMappingURL=measure_values.js.map

//# sourceMappingURL=./measure_values.map