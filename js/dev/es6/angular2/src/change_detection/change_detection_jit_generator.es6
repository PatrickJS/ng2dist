import {assert} from "rtts_assert/rtts_assert";
import {isPresent,
  isBlank,
  BaseException,
  Type} from 'angular2/src/facade/lang';
import {List,
  ListWrapper,
  MapWrapper,
  StringMapWrapper} from 'angular2/src/facade/collection';
import {AbstractChangeDetector} from './abstract_change_detector';
import {ChangeDetectionUtil} from './change_detection_util';
import {DirectiveRecord} from './directive_record';
import {ProtoRecord,
  RECORD_TYPE_SELF,
  RECORD_TYPE_PROPERTY,
  RECORD_TYPE_LOCAL,
  RECORD_TYPE_INVOKE_METHOD,
  RECORD_TYPE_CONST,
  RECORD_TYPE_INVOKE_CLOSURE,
  RECORD_TYPE_PRIMITIVE_OP,
  RECORD_TYPE_KEYED_ACCESS,
  RECORD_TYPE_PIPE,
  RECORD_TYPE_BINDING_PIPE,
  RECORD_TYPE_INTERPOLATE} from './proto_record';
var ABSTRACT_CHANGE_DETECTOR = "AbstractChangeDetector";
var UTIL = "ChangeDetectionUtil";
var DISPATCHER_ACCESSOR = "this.dispatcher";
var PIPE_REGISTRY_ACCESSOR = "this.pipeRegistry";
var PROTOS_ACCESSOR = "this.protos";
var DIRECTIVES_ACCESSOR = "this.directiveRecords";
var CONTEXT_ACCESSOR = "this.context";
var CHANGE_LOCAL = "change";
var CHANGES_LOCAL = "changes";
var LOCALS_ACCESSOR = "this.locals";
var MODE_ACCESSOR = "this.mode";
var TEMP_LOCAL = "temp";
var CURRENT_PROTO = "currentProto";
function typeTemplate(type, cons, detectChanges, notifyOnAllChangesDone, setContext) {
  assert.argumentTypes(type, assert.type.string, cons, assert.type.string, detectChanges, assert.type.string, notifyOnAllChangesDone, assert.type.string, setContext, assert.type.string);
  return assert.returnType((`
${cons}
${detectChanges}
${notifyOnAllChangesDone}
${setContext};

return function(dispatcher, pipeRegistry) {
  return new ${type}(dispatcher, pipeRegistry, protos, directiveRecords);
}
`), assert.type.string);
}
Object.defineProperty(typeTemplate, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string], [assert.type.string], [assert.type.string], [assert.type.string]];
  }});
function constructorTemplate(type, fieldsDefinitions) {
  assert.argumentTypes(type, assert.type.string, fieldsDefinitions, assert.type.string);
  return assert.returnType((`
var ${type} = function ${type}(dispatcher, pipeRegistry, protos, directiveRecords) {
${ABSTRACT_CHANGE_DETECTOR}.call(this);
${DISPATCHER_ACCESSOR} = dispatcher;
${PIPE_REGISTRY_ACCESSOR} = pipeRegistry;
${PROTOS_ACCESSOR} = protos;
${DIRECTIVES_ACCESSOR} = directiveRecords;
${LOCALS_ACCESSOR} = null;
${fieldsDefinitions}
}

${type}.prototype = Object.create(${ABSTRACT_CHANGE_DETECTOR}.prototype);
`), assert.type.string);
}
Object.defineProperty(constructorTemplate, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string]];
  }});
function pipeOnDestroyTemplate(pipeNames) {
  return pipeNames.map((p) => `${p}.onDestroy()`).join("\n");
}
Object.defineProperty(pipeOnDestroyTemplate, "parameters", {get: function() {
    return [[List]];
  }});
function hydrateTemplate(type, mode, fieldDefinitions, pipeOnDestroy, directiveFieldNames) {
  assert.argumentTypes(type, assert.type.string, mode, assert.type.string, fieldDefinitions, assert.type.string, pipeOnDestroy, assert.type.string, directiveFieldNames, assert.genericType(List, String));
  var directiveInit = "";
  for (var i = 0; i < directiveFieldNames.length; ++i) {
    directiveInit += `${directiveFieldNames[i]} = directives.directive(this.directiveRecords[${i}]);\n`;
  }
  return assert.returnType((`
${type}.prototype.hydrate = function(context, locals, directives) {
  ${MODE_ACCESSOR} = "${mode}";
  ${CONTEXT_ACCESSOR} = context;
  ${LOCALS_ACCESSOR} = locals;
  ${directiveInit}
}
${type}.prototype.dehydrate = function() {
  ${pipeOnDestroy}
  ${fieldDefinitions}
  ${LOCALS_ACCESSOR} = null;
}
${type}.prototype.hydrated = function() {
  return ${CONTEXT_ACCESSOR} !== ${UTIL}.unitialized();
}
`), assert.type.string);
}
Object.defineProperty(hydrateTemplate, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string], [assert.type.string], [assert.type.string], [assert.genericType(List, String)]];
  }});
function detectChangesTemplate(type, body) {
  assert.argumentTypes(type, assert.type.string, body, assert.type.string);
  return assert.returnType((`
${type}.prototype.detectChangesInRecords = function(throwOnChange) {
  ${body}
}
`), assert.type.string);
}
Object.defineProperty(detectChangesTemplate, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string]];
  }});
function callOnAllChangesDoneTemplate(type, body) {
  assert.argumentTypes(type, assert.type.string, body, assert.type.string);
  return assert.returnType((`
${type}.prototype.callOnAllChangesDone = function() {
  ${body}
}
`), assert.type.string);
}
Object.defineProperty(callOnAllChangesDoneTemplate, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string]];
  }});
function onAllChangesDoneTemplate(directive) {
  assert.argumentTypes(directive, assert.type.string);
  return assert.returnType((`${directive}.onAllChangesDone();`), assert.type.string);
}
Object.defineProperty(onAllChangesDoneTemplate, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
function detectChangesBodyTemplate(localDefinitions, changeDefinitions, records) {
  assert.argumentTypes(localDefinitions, assert.type.string, changeDefinitions, assert.type.string, records, assert.type.string);
  return assert.returnType((`
${localDefinitions}
${changeDefinitions}
var ${TEMP_LOCAL};
var ${CHANGE_LOCAL};
var ${CURRENT_PROTO};
var ${CHANGES_LOCAL} = null;

context = ${CONTEXT_ACCESSOR};
${records}
`), assert.type.string);
}
Object.defineProperty(detectChangesBodyTemplate, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string], [assert.type.string]];
  }});
function pipeCheckTemplate(protoIndex, context, bindingPropagationConfig, pipe, pipeType, oldValue, newValue, change, update, addToChanges, lastInDirective) {
  assert.argumentTypes(protoIndex, assert.type.number, context, assert.type.string, bindingPropagationConfig, assert.type.string, pipe, assert.type.string, pipeType, assert.type.string, oldValue, assert.type.string, newValue, assert.type.string, change, assert.type.string, update, assert.type.string, addToChanges, assert.type.any, lastInDirective, assert.type.string);
  return assert.returnType((`
${CURRENT_PROTO} = ${PROTOS_ACCESSOR}[${protoIndex}];
if (${pipe} === ${UTIL}.unitialized()) {
  ${pipe} = ${PIPE_REGISTRY_ACCESSOR}.get('${pipeType}', ${context}, ${bindingPropagationConfig});
} else if (!${pipe}.supports(${context})) {
  ${pipe}.onDestroy();
  ${pipe} = ${PIPE_REGISTRY_ACCESSOR}.get('${pipeType}', ${context}, ${bindingPropagationConfig});
}

${newValue} = ${pipe}.transform(${context});
if (! ${UTIL}.noChangeMarker(${newValue})) {
  ${change} = true;
  ${update}
  ${addToChanges}
  ${oldValue} = ${newValue};
}
${lastInDirective}
`), assert.type.string);
}
Object.defineProperty(pipeCheckTemplate, "parameters", {get: function() {
    return [[assert.type.number], [assert.type.string], [assert.type.string], [assert.type.string], [assert.type.string], [assert.type.string], [assert.type.string], [assert.type.string], [assert.type.string], [], [assert.type.string]];
  }});
function referenceCheckTemplate(protoIndex, assignment, oldValue, newValue, change, update, addToChanges, lastInDirective) {
  assert.argumentTypes(protoIndex, assert.type.number, assignment, assert.type.string, oldValue, assert.type.string, newValue, assert.type.string, change, assert.type.string, update, assert.type.string, addToChanges, assert.type.string, lastInDirective, assert.type.string);
  return assert.returnType((`
${CURRENT_PROTO} = ${PROTOS_ACCESSOR}[${protoIndex}];
${assignment}
if (${newValue} !== ${oldValue} || (${newValue} !== ${newValue}) && (${oldValue} !== ${oldValue})) {
  ${change} = true;
  ${update}
  ${addToChanges}
  ${oldValue} = ${newValue};
}
${lastInDirective}
`), assert.type.string);
}
Object.defineProperty(referenceCheckTemplate, "parameters", {get: function() {
    return [[assert.type.number], [assert.type.string], [assert.type.string], [assert.type.string], [assert.type.string], [assert.type.string], [assert.type.string], [assert.type.string]];
  }});
function assignmentTemplate(field, value) {
  assert.argumentTypes(field, assert.type.string, value, assert.type.string);
  return `${field} = ${value};`;
}
Object.defineProperty(assignmentTemplate, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string]];
  }});
function localDefinitionsTemplate(names) {
  return assert.returnType((names.map((n) => `var ${n};`).join("\n")), assert.type.string);
}
Object.defineProperty(localDefinitionsTemplate, "parameters", {get: function() {
    return [[List]];
  }});
function changeDefinitionsTemplate(names) {
  return assert.returnType((names.map((n) => `var ${n} = false;`).join("\n")), assert.type.string);
}
Object.defineProperty(changeDefinitionsTemplate, "parameters", {get: function() {
    return [[List]];
  }});
function fieldDefinitionsTemplate(names) {
  return assert.returnType((names.map((n) => `${n} = ${UTIL}.unitialized();`).join("\n")), assert.type.string);
}
Object.defineProperty(fieldDefinitionsTemplate, "parameters", {get: function() {
    return [[List]];
  }});
function ifChangedGuardTemplate(changeNames, body) {
  assert.argumentTypes(changeNames, List, body, assert.type.string);
  var cond = changeNames.join(" || ");
  return assert.returnType((`
if (${cond}) {
  ${body}
}
`), assert.type.string);
}
Object.defineProperty(ifChangedGuardTemplate, "parameters", {get: function() {
    return [[List], [assert.type.string]];
  }});
function addToChangesTemplate(oldValue, newValue) {
  assert.argumentTypes(oldValue, assert.type.string, newValue, assert.type.string);
  return assert.returnType((`${CHANGES_LOCAL} = ${UTIL}.addChange(${CHANGES_LOCAL}, ${CURRENT_PROTO}.bindingRecord.propertyName, ${UTIL}.simpleChange(${oldValue}, ${newValue}));`), assert.type.string);
}
Object.defineProperty(addToChangesTemplate, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string]];
  }});
function updateDirectiveTemplate(oldValue, newValue, directiveProperty) {
  assert.argumentTypes(oldValue, assert.type.string, newValue, assert.type.string, directiveProperty, assert.type.string);
  return assert.returnType((`
if(throwOnChange) ${UTIL}.throwOnChange(${CURRENT_PROTO}, ${UTIL}.simpleChange(${oldValue}, ${newValue}));
${directiveProperty} = ${newValue};
  `), assert.type.string);
}
Object.defineProperty(updateDirectiveTemplate, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string], [assert.type.string]];
  }});
function updateElementTemplate(oldValue, newValue) {
  assert.argumentTypes(oldValue, assert.type.string, newValue, assert.type.string);
  return assert.returnType((`
if(throwOnChange) ${UTIL}.throwOnChange(${CURRENT_PROTO}, ${UTIL}.simpleChange(${oldValue}, ${newValue}));
${DISPATCHER_ACCESSOR}.notifyOnBinding(${CURRENT_PROTO}.bindingRecord, ${newValue});
  `), assert.type.string);
}
Object.defineProperty(updateElementTemplate, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string]];
  }});
function notifyOnChangesTemplate(directive) {
  assert.argumentTypes(directive, assert.type.string);
  return assert.returnType((`
if(${CHANGES_LOCAL}) {
  ${directive}.onChange(${CHANGES_LOCAL});
  ${CHANGES_LOCAL} = null;
}
`), assert.type.string);
}
Object.defineProperty(notifyOnChangesTemplate, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
export class ChangeDetectorJITGenerator {
  constructor(typeName, changeDetectionStrategy, records, directiveRecords) {
    assert.argumentTypes(typeName, assert.type.string, changeDetectionStrategy, assert.type.string, records, assert.genericType(List, ProtoRecord), directiveRecords, List);
    this.typeName = typeName;
    this.changeDetectionStrategy = changeDetectionStrategy;
    this.records = records;
    this.directiveRecords = directiveRecords;
    this.localNames = this.getLocalNames(records);
    this.changeNames = this.getChangeNames(this.localNames);
    this.fieldNames = this.getFieldNames(this.localNames);
    this.pipeNames = this.getPipeNames(this.localNames);
  }
  getLocalNames(records) {
    assert.argumentTypes(records, assert.genericType(List, ProtoRecord));
    var index = 0;
    var names = records.map((r) => {
      var sanitizedName = r.name.replace(new RegExp("\\W", "g"), '');
      return `${sanitizedName}${index++}`;
    });
    return assert.returnType((["context"].concat(names)), assert.genericType(List, assert.type.string));
  }
  getChangeNames(localNames) {
    return assert.returnType((localNames.map((n) => `change_${n}`)), assert.genericType(List, assert.type.string));
  }
  getFieldNames(localNames) {
    return assert.returnType((localNames.map((n) => `this.${n}`)), assert.genericType(List, assert.type.string));
  }
  getPipeNames(localNames) {
    return assert.returnType((localNames.map((n) => `this.${n}_pipe`)), assert.genericType(List, assert.type.string));
  }
  generate() {
    var text = typeTemplate(this.typeName, this.genConstructor(), this.genDetectChanges(), this.genCallOnAllChangesDone(), this.genHydrate());
    return assert.returnType((new Function('AbstractChangeDetector', 'ChangeDetectionUtil', 'protos', 'directiveRecords', text)(AbstractChangeDetector, ChangeDetectionUtil, this.records, this.directiveRecords)), Function);
  }
  genConstructor() {
    return assert.returnType((constructorTemplate(this.typeName, this.genFieldDefinitions())), assert.type.string);
  }
  genHydrate() {
    var mode = ChangeDetectionUtil.changeDetectionMode(this.changeDetectionStrategy);
    return assert.returnType((hydrateTemplate(this.typeName, mode, this.genFieldDefinitions(), pipeOnDestroyTemplate(this.getNonNullPipeNames()), this.getDirectiveFieldNames())), assert.type.string);
  }
  getDirectiveFieldNames() {
    return assert.returnType((this.directiveRecords.map((d) => this.getDirective(d))), assert.genericType(List, assert.type.string));
  }
  getDirective(d) {
    assert.argumentTypes(d, DirectiveRecord);
    return `this.directive_${d.name}`;
  }
  genFieldDefinitions() {
    var fields = [];
    fields = fields.concat(this.fieldNames);
    fields = fields.concat(this.getNonNullPipeNames());
    fields = fields.concat(this.getDirectiveFieldNames());
    return fieldDefinitionsTemplate(fields);
  }
  getNonNullPipeNames() {
    var pipes = [];
    this.records.forEach((r) => {
      if (r.mode === RECORD_TYPE_PIPE || r.mode === RECORD_TYPE_BINDING_PIPE) {
        pipes.push(this.pipeNames[r.selfIndex]);
      }
    });
    return assert.returnType((pipes), assert.genericType(List, assert.type.string));
  }
  genDetectChanges() {
    var body = this.genDetectChangesBody();
    return assert.returnType((detectChangesTemplate(this.typeName, body)), assert.type.string);
  }
  genCallOnAllChangesDone() {
    var notifications = [];
    var dirs = this.directiveRecords;
    for (var i = dirs.length - 1; i >= 0; --i) {
      var dir = dirs[i];
      if (dir.callOnAllChangesDone) {
        var directive = `this.directive_${dir.name}`;
        notifications.push(onAllChangesDoneTemplate(directive));
      }
    }
    return assert.returnType((callOnAllChangesDoneTemplate(this.typeName, notifications.join(";\n"))), assert.type.string);
  }
  genDetectChangesBody() {
    var rec = this.records.map((r) => this.genRecord(r)).join("\n");
    return assert.returnType((detectChangesBodyTemplate(this.genLocalDefinitions(), this.genChangeDefinitions(), rec)), assert.type.string);
  }
  genLocalDefinitions() {
    return assert.returnType((localDefinitionsTemplate(this.localNames)), assert.type.string);
  }
  genChangeDefinitions() {
    return assert.returnType((changeDefinitionsTemplate(this.changeNames)), assert.type.string);
  }
  genRecord(r) {
    assert.argumentTypes(r, ProtoRecord);
    if (r.mode === RECORD_TYPE_PIPE || r.mode === RECORD_TYPE_BINDING_PIPE) {
      return assert.returnType((this.genPipeCheck(r)), assert.type.string);
    } else {
      return assert.returnType((this.genReferenceCheck(r)), assert.type.string);
    }
  }
  genPipeCheck(r) {
    assert.argumentTypes(r, ProtoRecord);
    var context = this.localNames[r.contextIndex];
    var oldValue = this.fieldNames[r.selfIndex];
    var newValue = this.localNames[r.selfIndex];
    var change = this.changeNames[r.selfIndex];
    var pipe = this.pipeNames[r.selfIndex];
    var bpc = r.mode === RECORD_TYPE_BINDING_PIPE ? "this.bindingPropagationConfig" : "null";
    var update = this.genUpdateDirectiveOrElement(r);
    var addToChanges = this.genAddToChanges(r);
    var lastInDirective = this.genNotifyOnChanges(r);
    return assert.returnType((pipeCheckTemplate(r.selfIndex - 1, context, bpc, pipe, r.name, oldValue, newValue, change, update, addToChanges, lastInDirective)), assert.type.string);
  }
  genReferenceCheck(r) {
    assert.argumentTypes(r, ProtoRecord);
    var oldValue = this.fieldNames[r.selfIndex];
    var newValue = this.localNames[r.selfIndex];
    var change = this.changeNames[r.selfIndex];
    var assignment = this.genUpdateCurrentValue(r);
    var update = this.genUpdateDirectiveOrElement(r);
    var addToChanges = this.genAddToChanges(r);
    var lastInDirective = this.genNotifyOnChanges(r);
    var check = referenceCheckTemplate(r.selfIndex - 1, assignment, oldValue, newValue, change, update, addToChanges, lastInDirective);
    if (r.isPureFunction()) {
      return assert.returnType((this.ifChangedGuard(r, check)), assert.type.string);
    } else {
      return assert.returnType((check), assert.type.string);
    }
  }
  genUpdateCurrentValue(r) {
    assert.argumentTypes(r, ProtoRecord);
    var context = this.localNames[r.contextIndex];
    var newValue = this.localNames[r.selfIndex];
    var args = this.genArgs(r);
    switch (r.mode) {
      case RECORD_TYPE_SELF:
        return assert.returnType((assignmentTemplate(newValue, context)), assert.type.string);
      case RECORD_TYPE_CONST:
        return assert.returnType((`${newValue} = ${this.genLiteral(r.funcOrValue)}`), assert.type.string);
      case RECORD_TYPE_PROPERTY:
        return assert.returnType((assignmentTemplate(newValue, `${context}.${r.name}`)), assert.type.string);
      case RECORD_TYPE_LOCAL:
        return assert.returnType((assignmentTemplate(newValue, `${LOCALS_ACCESSOR}.get('${r.name}')`)), assert.type.string);
      case RECORD_TYPE_INVOKE_METHOD:
        return assert.returnType((assignmentTemplate(newValue, `${context}.${r.name}(${args})`)), assert.type.string);
      case RECORD_TYPE_INVOKE_CLOSURE:
        return assert.returnType((assignmentTemplate(newValue, `${context}(${args})`)), assert.type.string);
      case RECORD_TYPE_PRIMITIVE_OP:
        return assert.returnType((assignmentTemplate(newValue, `${UTIL}.${r.name}(${args})`)), assert.type.string);
      case RECORD_TYPE_INTERPOLATE:
        return assert.returnType((assignmentTemplate(newValue, this.genInterpolation(r))), assert.type.string);
      case RECORD_TYPE_KEYED_ACCESS:
        var key = this.localNames[r.args[0]];
        return assert.returnType((assignmentTemplate(newValue, `${context}[${key}]`)), assert.type.string);
      default:
        throw new BaseException(`Unknown operation ${r.mode}`);
    }
  }
  ifChangedGuard(r, body) {
    return assert.returnType((ifChangedGuardTemplate(r.args.map((a) => this.changeNames[a]), body)), assert.type.string);
  }
  genInterpolation(r) {
    assert.argumentTypes(r, ProtoRecord);
    var res = "";
    for (var i = 0; i < r.args.length; ++i) {
      res += this.genLiteral(r.fixedArgs[i]);
      res += " + ";
      res += this.localNames[r.args[i]];
      res += " + ";
    }
    res += this.genLiteral(r.fixedArgs[r.args.length]);
    return assert.returnType((res), assert.type.string);
  }
  genLiteral(value) {
    return assert.returnType((JSON.stringify(value)), assert.type.string);
  }
  genUpdateDirectiveOrElement(r) {
    assert.argumentTypes(r, ProtoRecord);
    if (!r.lastInBinding)
      return assert.returnType((""), assert.type.string);
    var newValue = this.localNames[r.selfIndex];
    var oldValue = this.fieldNames[r.selfIndex];
    var br = r.bindingRecord;
    if (br.isDirective()) {
      var directiveProperty = `${this.getDirective(br.directiveRecord)}.${br.propertyName}`;
      return assert.returnType((updateDirectiveTemplate(oldValue, newValue, directiveProperty)), assert.type.string);
    } else {
      return assert.returnType((updateElementTemplate(oldValue, newValue)), assert.type.string);
    }
  }
  genAddToChanges(r) {
    assert.argumentTypes(r, ProtoRecord);
    var newValue = this.localNames[r.selfIndex];
    var oldValue = this.fieldNames[r.selfIndex];
    return assert.returnType((r.bindingRecord.callOnChange() ? addToChangesTemplate(oldValue, newValue) : ""), assert.type.string);
  }
  genNotifyOnChanges(r) {
    assert.argumentTypes(r, ProtoRecord);
    var br = r.bindingRecord;
    if (r.lastInDirective && br.callOnChange()) {
      return assert.returnType((notifyOnChangesTemplate(this.getDirective(br.directiveRecord))), assert.type.string);
    } else {
      return assert.returnType((""), assert.type.string);
    }
  }
  genArgs(r) {
    return assert.returnType((r.args.map((arg) => this.localNames[arg]).join(", ")), assert.type.string);
  }
}
Object.defineProperty(ChangeDetectorJITGenerator, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string], [assert.genericType(List, ProtoRecord)], [List]];
  }});
Object.defineProperty(ChangeDetectorJITGenerator.prototype.getLocalNames, "parameters", {get: function() {
    return [[assert.genericType(List, ProtoRecord)]];
  }});
Object.defineProperty(ChangeDetectorJITGenerator.prototype.getChangeNames, "parameters", {get: function() {
    return [[assert.genericType(List, assert.type.string)]];
  }});
Object.defineProperty(ChangeDetectorJITGenerator.prototype.getFieldNames, "parameters", {get: function() {
    return [[assert.genericType(List, assert.type.string)]];
  }});
Object.defineProperty(ChangeDetectorJITGenerator.prototype.getPipeNames, "parameters", {get: function() {
    return [[assert.genericType(List, assert.type.string)]];
  }});
Object.defineProperty(ChangeDetectorJITGenerator.prototype.getDirective, "parameters", {get: function() {
    return [[DirectiveRecord]];
  }});
Object.defineProperty(ChangeDetectorJITGenerator.prototype.genRecord, "parameters", {get: function() {
    return [[ProtoRecord]];
  }});
Object.defineProperty(ChangeDetectorJITGenerator.prototype.genPipeCheck, "parameters", {get: function() {
    return [[ProtoRecord]];
  }});
Object.defineProperty(ChangeDetectorJITGenerator.prototype.genReferenceCheck, "parameters", {get: function() {
    return [[ProtoRecord]];
  }});
Object.defineProperty(ChangeDetectorJITGenerator.prototype.genUpdateCurrentValue, "parameters", {get: function() {
    return [[ProtoRecord]];
  }});
Object.defineProperty(ChangeDetectorJITGenerator.prototype.ifChangedGuard, "parameters", {get: function() {
    return [[ProtoRecord], [assert.type.string]];
  }});
Object.defineProperty(ChangeDetectorJITGenerator.prototype.genInterpolation, "parameters", {get: function() {
    return [[ProtoRecord]];
  }});
Object.defineProperty(ChangeDetectorJITGenerator.prototype.genUpdateDirectiveOrElement, "parameters", {get: function() {
    return [[ProtoRecord]];
  }});
Object.defineProperty(ChangeDetectorJITGenerator.prototype.genAddToChanges, "parameters", {get: function() {
    return [[ProtoRecord]];
  }});
Object.defineProperty(ChangeDetectorJITGenerator.prototype.genNotifyOnChanges, "parameters", {get: function() {
    return [[ProtoRecord]];
  }});
Object.defineProperty(ChangeDetectorJITGenerator.prototype.genArgs, "parameters", {get: function() {
    return [[ProtoRecord]];
  }});
//# sourceMappingURL=change_detection_jit_generator.es6.map

//# sourceMappingURL=./change_detection_jit_generator.map