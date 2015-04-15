import {List} from 'angular2/src/facade/collection';
import {Locals} from './parser/locals';
import {DEFAULT} from './constants';
import {BindingRecord} from './binding_record';
export class ProtoChangeDetector {
  instantiate(dispatcher, bindingRecords, variableBindings, directiveRecords) {
    return null;
  }
}
Object.defineProperty(ProtoChangeDetector.prototype.instantiate, "parameters", {get: function() {
    return [[assert.type.any], [List], [List], [List]];
  }});
export class ChangeDetection {
  createProtoChangeDetector(name, changeControlStrategy = DEFAULT) {
    return null;
  }
}
Object.defineProperty(ChangeDetection.prototype.createProtoChangeDetector, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string]];
  }});
export class ChangeDispatcher {
  notifyOnBinding(bindingRecord, value) {}
}
Object.defineProperty(ChangeDispatcher.prototype.notifyOnBinding, "parameters", {get: function() {
    return [[BindingRecord], [assert.type.any]];
  }});
export class ChangeDetector {
  addChild(cd) {}
  addShadowDomChild(cd) {}
  removeChild(cd) {}
  remove() {}
  hydrate(context, locals, directives) {}
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