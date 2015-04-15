import {Date,
  DateWrapper} from 'angular2/src/facade/lang';
import {StringMap} from 'angular2/src/facade/collection';
export class MeasureValues {
  constructor(runIndex, timeStamp, values) {
    this.timeStamp = timeStamp;
    this.runIndex = runIndex;
    this.values = values;
  }
  toJson() {
    return {
      'timeStamp': DateWrapper.toJson(this.timeStamp),
      'runIndex': this.runIndex,
      'values': this.values
    };
  }
}
Object.defineProperty(MeasureValues, "parameters", {get: function() {
    return [[assert.type.number], [Date], [StringMap]];
  }});
//# sourceMappingURL=measure_values.js.map

//# sourceMappingURL=./measure_values.map