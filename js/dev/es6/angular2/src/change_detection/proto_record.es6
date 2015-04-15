import {assert} from "rtts_assert/rtts_assert";
import {List} from 'angular2/src/facade/collection';
import {BindingRecord} from './binding_record';
export const RECORD_TYPE_SELF = 0;
export const RECORD_TYPE_CONST = 1;
export const RECORD_TYPE_PRIMITIVE_OP = 2;
export const RECORD_TYPE_PROPERTY = 3;
export const RECORD_TYPE_LOCAL = 4;
export const RECORD_TYPE_INVOKE_METHOD = 5;
export const RECORD_TYPE_INVOKE_CLOSURE = 6;
export const RECORD_TYPE_KEYED_ACCESS = 7;
export const RECORD_TYPE_PIPE = 8;
export const RECORD_TYPE_BINDING_PIPE = 9;
export const RECORD_TYPE_INTERPOLATE = 10;
export class ProtoRecord {
  constructor(mode, name, funcOrValue, args, fixedArgs, contextIndex, selfIndex, bindingRecord, expressionAsString, lastInBinding, lastInDirective) {
    assert.argumentTypes(mode, assert.type.number, name, assert.type.string, funcOrValue, assert.type.any, args, List, fixedArgs, List, contextIndex, assert.type.number, selfIndex, assert.type.number, bindingRecord, BindingRecord, expressionAsString, assert.type.string, lastInBinding, assert.type.boolean, lastInDirective, assert.type.boolean);
    this.mode = mode;
    this.name = name;
    this.funcOrValue = funcOrValue;
    this.args = args;
    this.fixedArgs = fixedArgs;
    this.contextIndex = contextIndex;
    this.selfIndex = selfIndex;
    this.bindingRecord = bindingRecord;
    this.lastInBinding = lastInBinding;
    this.lastInDirective = lastInDirective;
    this.expressionAsString = expressionAsString;
  }
  isPureFunction() {
    return assert.returnType((this.mode === RECORD_TYPE_INTERPOLATE || this.mode === RECORD_TYPE_PRIMITIVE_OP), assert.type.boolean);
  }
}
Object.defineProperty(ProtoRecord, "parameters", {get: function() {
    return [[assert.type.number], [assert.type.string], [], [List], [List], [assert.type.number], [assert.type.number], [BindingRecord], [assert.type.string], [assert.type.boolean], [assert.type.boolean]];
  }});
//# sourceMappingURL=proto_record.js.map

//# sourceMappingURL=./proto_record.map