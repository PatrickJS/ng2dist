import {assert} from "rtts_assert/rtts_assert";
import {List} from 'angular2/src/facade/collection';
import {Locals} from './parser/locals';
import {DEFAULT} from './constants';
import {BindingRecord} from './binding_record';
export class ProtoChangeDetector {
  instantiate(dispatcher, bindingRecords, variableBindings, directiveRecords) {
    assert.argumentTypes(dispatcher, assert.type.any, bindingRecords, List, variableBindings, List, directiveRecords, List);
    return assert.returnType((null), ChangeDetector);
  }
}
Object.defineProperty(ProtoChangeDetector.prototype.instantiate, "parameters", {get: function() {
    return [[assert.type.any], [List], [List], [List]];
  }});
export class ChangeDetection {
  createProtoChangeDetector(name, changeControlStrategy = DEFAULT) {
    assert.argumentTypes(name, assert.type.string, changeControlStrategy, assert.type.string);
    return assert.returnType((null), ProtoChangeDetector);
  }
}
Object.defineProperty(ChangeDetection.prototype.createProtoChangeDetector, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string]];
  }});
export class ChangeDispatcher {
  notifyOnBinding(bindingRecord, value) {
    assert.argumentTypes(bindingRecord, BindingRecord, value, assert.type.any);
  }
}
Object.defineProperty(ChangeDispatcher.prototype.notifyOnBinding, "parameters", {get: function() {
    return [[BindingRecord], [assert.type.any]];
  }});
export class ChangeDetector {
  addChild(cd) {
    assert.argumentTypes(cd, ChangeDetector);
  }
  addShadowDomChild(cd) {
    assert.argumentTypes(cd, ChangeDetector);
  }
  removeChild(cd) {
    assert.argumentTypes(cd, ChangeDetector);
  }
  remove() {}
  hydrate(context, locals, directives) {
    assert.argumentTypes(context, assert.type.any, locals, Locals, directives, assert.type.any);
  }
  dehydrate() {}
  markPathToRootAsCheckOnce() {}
  detectChanges() {}
  checkNoChanges() {}
}
Object.defineProperty(ChangeDetector.prototype.addChild, "parameters", {get: function() {
    return [[ChangeDetector]];
  }});
Object.defineProperty(ChangeDetector.prototype.addShadowDomChild, "parameters", {get: function() {
    return [[ChangeDetector]];
  }});
Object.defineProperty(ChangeDetector.prototype.removeChild, "parameters", {get: function() {
    return [[ChangeDetector]];
  }});
Object.defineProperty(ChangeDetector.prototype.hydrate, "parameters", {get: function() {
    return [[assert.type.any], [Locals], [assert.type.any]];
  }});
//# sourceMappingURL=interfaces.js.map

//# sourceMappingURL=./interfaces.map