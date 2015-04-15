"use strict";
Object.defineProperties(module.exports, {
  DirectiveRecord: {get: function() {
      return DirectiveRecord;
    }},
  __esModule: {value: true}
});
var DirectiveRecord = function DirectiveRecord(elementIndex, directiveIndex, callOnAllChangesDone, callOnChange) {
  this.elementIndex = elementIndex;
  this.directiveIndex = directiveIndex;
  this.callOnAllChangesDone = callOnAllChangesDone;
  this.callOnChange = callOnChange;
};
($traceurRuntime.createClass)(DirectiveRecord, {get name() {
    return (this.elementIndex + "_" + this.directiveIndex);
  }}, {});
Object.defineProperty(DirectiveRecord, "parameters", {get: function() {
    return [[$traceurRuntime.type.number], [$traceurRuntime.type.number], [$traceurRuntime.type.boolean], [$traceurRuntime.type.boolean]];
  }});
//# sourceMappingURL=directive_record.js.map

//# sourceMappingURL=./directive_record.map