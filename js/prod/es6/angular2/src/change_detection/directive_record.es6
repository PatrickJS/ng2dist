export class DirectiveRecord {
  constructor(elementIndex, directiveIndex, callOnAllChangesDone, callOnChange) {
    this.elementIndex = elementIndex;
    this.directiveIndex = directiveIndex;
    this.callOnAllChangesDone = callOnAllChangesDone;
    this.callOnChange = callOnChange;
  }
  get name() {
    return `${this.elementIndex}_${this.directiveIndex}`;
  }
}
Object.defineProperty(DirectiveRecord, "parameters", {get: function() {
    return [[assert.type.number], [assert.type.number], [assert.type.boolean], [assert.type.boolean]];
  }});
//# sourceMappingURL=directive_record.js.map

//# sourceMappingURL=./directive_record.map