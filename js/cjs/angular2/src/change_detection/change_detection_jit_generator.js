"use strict";
Object.defineProperties(module.exports, {
  ChangeDetectorJITGenerator: {get: function() {
      return ChangeDetectorJITGenerator;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__abstract_95_change_95_detector__,
    $__change_95_detection_95_util__,
    $__directive_95_record__,
    $__proto_95_record__;
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
var AbstractChangeDetector = ($__abstract_95_change_95_detector__ = require("./abstract_change_detector"), $__abstract_95_change_95_detector__ && $__abstract_95_change_95_detector__.__esModule && $__abstract_95_change_95_detector__ || {default: $__abstract_95_change_95_detector__}).AbstractChangeDetector;
var ChangeDetectionUtil = ($__change_95_detection_95_util__ = require("./change_detection_util"), $__change_95_detection_95_util__ && $__change_95_detection_95_util__.__esModule && $__change_95_detection_95_util__ || {default: $__change_95_detection_95_util__}).ChangeDetectionUtil;
var DirectiveRecord = ($__directive_95_record__ = require("./directive_record"), $__directive_95_record__ && $__directive_95_record__.__esModule && $__directive_95_record__ || {default: $__directive_95_record__}).DirectiveRecord;
var $__5 = ($__proto_95_record__ = require("./proto_record"), $__proto_95_record__ && $__proto_95_record__.__esModule && $__proto_95_record__ || {default: $__proto_95_record__}),
    ProtoRecord = $__5.ProtoRecord,
    RECORD_TYPE_SELF = $__5.RECORD_TYPE_SELF,
    RECORD_TYPE_PROPERTY = $__5.RECORD_TYPE_PROPERTY,
    RECORD_TYPE_LOCAL = $__5.RECORD_TYPE_LOCAL,
    RECORD_TYPE_INVOKE_METHOD = $__5.RECORD_TYPE_INVOKE_METHOD,
    RECORD_TYPE_CONST = $__5.RECORD_TYPE_CONST,
    RECORD_TYPE_INVOKE_CLOSURE = $__5.RECORD_TYPE_INVOKE_CLOSURE,
    RECORD_TYPE_PRIMITIVE_OP = $__5.RECORD_TYPE_PRIMITIVE_OP,
    RECORD_TYPE_KEYED_ACCESS = $__5.RECORD_TYPE_KEYED_ACCESS,
    RECORD_TYPE_PIPE = $__5.RECORD_TYPE_PIPE,
    RECORD_TYPE_BINDING_PIPE = $__5.RECORD_TYPE_BINDING_PIPE,
    RECORD_TYPE_INTERPOLATE = $__5.RECORD_TYPE_INTERPOLATE;
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
  return ("\n" + cons + "\n" + detectChanges + "\n" + notifyOnAllChangesDone + "\n" + setContext + ";\n\nreturn function(dispatcher, pipeRegistry) {\n  return new " + type + "(dispatcher, pipeRegistry, protos, directiveRecords);\n}\n");
}
Object.defineProperty(typeTemplate, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [$traceurRuntime.type.string], [$traceurRuntime.type.string], [$traceurRuntime.type.string], [$traceurRuntime.type.string]];
  }});
function constructorTemplate(type, fieldsDefinitions) {
  return ("\nvar " + type + " = function " + type + "(dispatcher, pipeRegistry, protos, directiveRecords) {\n" + ABSTRACT_CHANGE_DETECTOR + ".call(this);\n" + DISPATCHER_ACCESSOR + " = dispatcher;\n" + PIPE_REGISTRY_ACCESSOR + " = pipeRegistry;\n" + PROTOS_ACCESSOR + " = protos;\n" + DIRECTIVES_ACCESSOR + " = directiveRecords;\n" + LOCALS_ACCESSOR + " = null;\n" + fieldsDefinitions + "\n}\n\n" + type + ".prototype = Object.create(" + ABSTRACT_CHANGE_DETECTOR + ".prototype);\n");
}
Object.defineProperty(constructorTemplate, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [$traceurRuntime.type.string]];
  }});
function pipeOnDestroyTemplate(pipeNames) {
  return pipeNames.map((function(p) {
    return (p + ".onDestroy()");
  })).join("\n");
}
Object.defineProperty(pipeOnDestroyTemplate, "parameters", {get: function() {
    return [[List]];
  }});
function hydrateTemplate(type, mode, fieldDefinitions, pipeOnDestroy, directiveFieldNames) {
  var directiveInit = "";
  for (var i = 0; i < directiveFieldNames.length; ++i) {
    directiveInit += (directiveFieldNames[i] + " = directives.directive(this.directiveRecords[" + i + "]);\n");
  }
  return ("\n" + type + ".prototype.hydrate = function(context, locals, directives) {\n  " + MODE_ACCESSOR + " = \"" + mode + "\";\n  " + CONTEXT_ACCESSOR + " = context;\n  " + LOCALS_ACCESSOR + " = locals;\n  " + directiveInit + "\n}\n" + type + ".prototype.dehydrate = function() {\n  " + pipeOnDestroy + "\n  " + fieldDefinitions + "\n  " + LOCALS_ACCESSOR + " = null;\n}\n" + type + ".prototype.hydrated = function() {\n  return " + CONTEXT_ACCESSOR + " !== " + UTIL + ".unitialized();\n}\n");
}
Object.defineProperty(hydrateTemplate, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [$traceurRuntime.type.string], [$traceurRuntime.type.string], [$traceurRuntime.type.string], [$traceurRuntime.genericType(List, String)]];
  }});
function detectChangesTemplate(type, body) {
  return ("\n" + type + ".prototype.detectChangesInRecords = function(throwOnChange) {\n  " + body + "\n}\n");
}
Object.defineProperty(detectChangesTemplate, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [$traceurRuntime.type.string]];
  }});
function callOnAllChangesDoneTemplate(type, body) {
  return ("\n" + type + ".prototype.callOnAllChangesDone = function() {\n  " + body + "\n}\n");
}
Object.defineProperty(callOnAllChangesDoneTemplate, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [$traceurRuntime.type.string]];
  }});
function onAllChangesDoneTemplate(directive) {
  return (directive + ".onAllChangesDone();");
}
Object.defineProperty(onAllChangesDoneTemplate, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
function detectChangesBodyTemplate(localDefinitions, changeDefinitions, records) {
  return ("\n" + localDefinitions + "\n" + changeDefinitions + "\nvar " + TEMP_LOCAL + ";\nvar " + CHANGE_LOCAL + ";\nvar " + CURRENT_PROTO + ";\nvar " + CHANGES_LOCAL + " = null;\n\ncontext = " + CONTEXT_ACCESSOR + ";\n" + records + "\n");
}
Object.defineProperty(detectChangesBodyTemplate, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [$traceurRuntime.type.string], [$traceurRuntime.type.string]];
  }});
function pipeCheckTemplate(protoIndex, context, bindingPropagationConfig, pipe, pipeType, oldValue, newValue, change, update, addToChanges, lastInDirective) {
  return ("\n" + CURRENT_PROTO + " = " + PROTOS_ACCESSOR + "[" + protoIndex + "];\nif (" + pipe + " === " + UTIL + ".unitialized()) {\n  " + pipe + " = " + PIPE_REGISTRY_ACCESSOR + ".get('" + pipeType + "', " + context + ", " + bindingPropagationConfig + ");\n} else if (!" + pipe + ".supports(" + context + ")) {\n  " + pipe + ".onDestroy();\n  " + pipe + " = " + PIPE_REGISTRY_ACCESSOR + ".get('" + pipeType + "', " + context + ", " + bindingPropagationConfig + ");\n}\n\n" + newValue + " = " + pipe + ".transform(" + context + ");\nif (! " + UTIL + ".noChangeMarker(" + newValue + ")) {\n  " + change + " = true;\n  " + update + "\n  " + addToChanges + "\n  " + oldValue + " = " + newValue + ";\n}\n" + lastInDirective + "\n");
}
Object.defineProperty(pipeCheckTemplate, "parameters", {get: function() {
    return [[$traceurRuntime.type.number], [$traceurRuntime.type.string], [$traceurRuntime.type.string], [$traceurRuntime.type.string], [$traceurRuntime.type.string], [$traceurRuntime.type.string], [$traceurRuntime.type.string], [$traceurRuntime.type.string], [$traceurRuntime.type.string], [], [$traceurRuntime.type.string]];
  }});
function referenceCheckTemplate(protoIndex, assignment, oldValue, newValue, change, update, addToChanges, lastInDirective) {
  return ("\n" + CURRENT_PROTO + " = " + PROTOS_ACCESSOR + "[" + protoIndex + "];\n" + assignment + "\nif (" + newValue + " !== " + oldValue + " || (" + newValue + " !== " + newValue + ") && (" + oldValue + " !== " + oldValue + ")) {\n  " + change + " = true;\n  " + update + "\n  " + addToChanges + "\n  " + oldValue + " = " + newValue + ";\n}\n" + lastInDirective + "\n");
}
Object.defineProperty(referenceCheckTemplate, "parameters", {get: function() {
    return [[$traceurRuntime.type.number], [$traceurRuntime.type.string], [$traceurRuntime.type.string], [$traceurRuntime.type.string], [$traceurRuntime.type.string], [$traceurRuntime.type.string], [$traceurRuntime.type.string], [$traceurRuntime.type.string]];
  }});
function assignmentTemplate(field, value) {
  return (field + " = " + value + ";");
}
Object.defineProperty(assignmentTemplate, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [$traceurRuntime.type.string]];
  }});
function localDefinitionsTemplate(names) {
  return names.map((function(n) {
    return ("var " + n + ";");
  })).join("\n");
}
Object.defineProperty(localDefinitionsTemplate, "parameters", {get: function() {
    return [[List]];
  }});
function changeDefinitionsTemplate(names) {
  return names.map((function(n) {
    return ("var " + n + " = false;");
  })).join("\n");
}
Object.defineProperty(changeDefinitionsTemplate, "parameters", {get: function() {
    return [[List]];
  }});
function fieldDefinitionsTemplate(names) {
  return names.map((function(n) {
    return (n + " = " + UTIL + ".unitialized();");
  })).join("\n");
}
Object.defineProperty(fieldDefinitionsTemplate, "parameters", {get: function() {
    return [[List]];
  }});
function ifChangedGuardTemplate(changeNames, body) {
  var cond = changeNames.join(" || ");
  return ("\nif (" + cond + ") {\n  " + body + "\n}\n");
}
Object.defineProperty(ifChangedGuardTemplate, "parameters", {get: function() {
    return [[List], [$traceurRuntime.type.string]];
  }});
function addToChangesTemplate(oldValue, newValue) {
  return (CHANGES_LOCAL + " = " + UTIL + ".addChange(" + CHANGES_LOCAL + ", " + CURRENT_PROTO + ".bindingRecord.propertyName, " + UTIL + ".simpleChange(" + oldValue + ", " + newValue + "));");
}
Object.defineProperty(addToChangesTemplate, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [$traceurRuntime.type.string]];
  }});
function updateDirectiveTemplate(oldValue, newValue, directiveProperty) {
  return ("\nif(throwOnChange) " + UTIL + ".throwOnChange(" + CURRENT_PROTO + ", " + UTIL + ".simpleChange(" + oldValue + ", " + newValue + "));\n" + directiveProperty + " = " + newValue + ";\n  ");
}
Object.defineProperty(updateDirectiveTemplate, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [$traceurRuntime.type.string], [$traceurRuntime.type.string]];
  }});
function updateElementTemplate(oldValue, newValue) {
  return ("\nif(throwOnChange) " + UTIL + ".throwOnChange(" + CURRENT_PROTO + ", " + UTIL + ".simpleChange(" + oldValue + ", " + newValue + "));\n" + DISPATCHER_ACCESSOR + ".notifyOnBinding(" + CURRENT_PROTO + ".bindingRecord, " + newValue + ");\n  ");
}
Object.defineProperty(updateElementTemplate, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [$traceurRuntime.type.string]];
  }});
function notifyOnChangesTemplate(directive) {
  return ("\nif(" + CHANGES_LOCAL + ") {\n  " + directive + ".onChange(" + CHANGES_LOCAL + ");\n  " + CHANGES_LOCAL + " = null;\n}\n");
}
Object.defineProperty(notifyOnChangesTemplate, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
var ChangeDetectorJITGenerator = function ChangeDetectorJITGenerator(typeName, changeDetectionStrategy, records, directiveRecords) {
  this.typeName = typeName;
  this.changeDetectionStrategy = changeDetectionStrategy;
  this.records = records;
  this.directiveRecords = directiveRecords;
  this.localNames = this.getLocalNames(records);
  this.changeNames = this.getChangeNames(this.localNames);
  this.fieldNames = this.getFieldNames(this.localNames);
  this.pipeNames = this.getPipeNames(this.localNames);
};
($traceurRuntime.createClass)(ChangeDetectorJITGenerator, {
  getLocalNames: function(records) {
    var index = 0;
    var names = records.map((function(r) {
      var sanitizedName = r.name.replace(new RegExp("\\W", "g"), '');
      return ("" + sanitizedName + index++);
    }));
    return ["context"].concat(names);
  },
  getChangeNames: function(localNames) {
    return localNames.map((function(n) {
      return ("change_" + n);
    }));
  },
  getFieldNames: function(localNames) {
    return localNames.map((function(n) {
      return ("this." + n);
    }));
  },
  getPipeNames: function(localNames) {
    return localNames.map((function(n) {
      return ("this." + n + "_pipe");
    }));
  },
  generate: function() {
    var text = typeTemplate(this.typeName, this.genConstructor(), this.genDetectChanges(), this.genCallOnAllChangesDone(), this.genHydrate());
    return new Function('AbstractChangeDetector', 'ChangeDetectionUtil', 'protos', 'directiveRecords', text)(AbstractChangeDetector, ChangeDetectionUtil, this.records, this.directiveRecords);
  },
  genConstructor: function() {
    return constructorTemplate(this.typeName, this.genFieldDefinitions());
  },
  genHydrate: function() {
    var mode = ChangeDetectionUtil.changeDetectionMode(this.changeDetectionStrategy);
    return hydrateTemplate(this.typeName, mode, this.genFieldDefinitions(), pipeOnDestroyTemplate(this.getNonNullPipeNames()), this.getDirectiveFieldNames());
  },
  getDirectiveFieldNames: function() {
    var $__6 = this;
    return this.directiveRecords.map((function(d) {
      return $__6.getDirective(d);
    }));
  },
  getDirective: function(d) {
    return ("this.directive_" + d.name);
  },
  genFieldDefinitions: function() {
    var fields = [];
    fields = fields.concat(this.fieldNames);
    fields = fields.concat(this.getNonNullPipeNames());
    fields = fields.concat(this.getDirectiveFieldNames());
    return fieldDefinitionsTemplate(fields);
  },
  getNonNullPipeNames: function() {
    var $__6 = this;
    var pipes = [];
    this.records.forEach((function(r) {
      if (r.mode === RECORD_TYPE_PIPE || r.mode === RECORD_TYPE_BINDING_PIPE) {
        pipes.push($__6.pipeNames[r.selfIndex]);
      }
    }));
    return pipes;
  },
  genDetectChanges: function() {
    var body = this.genDetectChangesBody();
    return detectChangesTemplate(this.typeName, body);
  },
  genCallOnAllChangesDone: function() {
    var notifications = [];
    var dirs = this.directiveRecords;
    for (var i = dirs.length - 1; i >= 0; --i) {
      var dir = dirs[i];
      if (dir.callOnAllChangesDone) {
        var directive = ("this.directive_" + dir.name);
        notifications.push(onAllChangesDoneTemplate(directive));
      }
    }
    return callOnAllChangesDoneTemplate(this.typeName, notifications.join(";\n"));
  },
  genDetectChangesBody: function() {
    var $__6 = this;
    var rec = this.records.map((function(r) {
      return $__6.genRecord(r);
    })).join("\n");
    return detectChangesBodyTemplate(this.genLocalDefinitions(), this.genChangeDefinitions(), rec);
  },
  genLocalDefinitions: function() {
    return localDefinitionsTemplate(this.localNames);
  },
  genChangeDefinitions: function() {
    return changeDefinitionsTemplate(this.changeNames);
  },
  genRecord: function(r) {
    if (r.mode === RECORD_TYPE_PIPE || r.mode === RECORD_TYPE_BINDING_PIPE) {
      return this.genPipeCheck(r);
    } else {
      return this.genReferenceCheck(r);
    }
  },
  genPipeCheck: function(r) {
    var context = this.localNames[r.contextIndex];
    var oldValue = this.fieldNames[r.selfIndex];
    var newValue = this.localNames[r.selfIndex];
    var change = this.changeNames[r.selfIndex];
    var pipe = this.pipeNames[r.selfIndex];
    var bpc = r.mode === RECORD_TYPE_BINDING_PIPE ? "this.bindingPropagationConfig" : "null";
    var update = this.genUpdateDirectiveOrElement(r);
    var addToChanges = this.genAddToChanges(r);
    var lastInDirective = this.genNotifyOnChanges(r);
    return pipeCheckTemplate(r.selfIndex - 1, context, bpc, pipe, r.name, oldValue, newValue, change, update, addToChanges, lastInDirective);
  },
  genReferenceCheck: function(r) {
    var oldValue = this.fieldNames[r.selfIndex];
    var newValue = this.localNames[r.selfIndex];
    var change = this.changeNames[r.selfIndex];
    var assignment = this.genUpdateCurrentValue(r);
    var update = this.genUpdateDirectiveOrElement(r);
    var addToChanges = this.genAddToChanges(r);
    var lastInDirective = this.genNotifyOnChanges(r);
    var check = referenceCheckTemplate(r.selfIndex - 1, assignment, oldValue, newValue, change, update, addToChanges, lastInDirective);
    if (r.isPureFunction()) {
      return this.ifChangedGuard(r, check);
    } else {
      return check;
    }
  },
  genUpdateCurrentValue: function(r) {
    var context = this.localNames[r.contextIndex];
    var newValue = this.localNames[r.selfIndex];
    var args = this.genArgs(r);
    switch (r.mode) {
      case RECORD_TYPE_SELF:
        return assignmentTemplate(newValue, context);
      case RECORD_TYPE_CONST:
        return (newValue + " = " + this.genLiteral(r.funcOrValue));
      case RECORD_TYPE_PROPERTY:
        return assignmentTemplate(newValue, (context + "." + r.name));
      case RECORD_TYPE_LOCAL:
        return assignmentTemplate(newValue, (LOCALS_ACCESSOR + ".get('" + r.name + "')"));
      case RECORD_TYPE_INVOKE_METHOD:
        return assignmentTemplate(newValue, (context + "." + r.name + "(" + args + ")"));
      case RECORD_TYPE_INVOKE_CLOSURE:
        return assignmentTemplate(newValue, (context + "(" + args + ")"));
      case RECORD_TYPE_PRIMITIVE_OP:
        return assignmentTemplate(newValue, (UTIL + "." + r.name + "(" + args + ")"));
      case RECORD_TYPE_INTERPOLATE:
        return assignmentTemplate(newValue, this.genInterpolation(r));
      case RECORD_TYPE_KEYED_ACCESS:
        var key = this.localNames[r.args[0]];
        return assignmentTemplate(newValue, (context + "[" + key + "]"));
      default:
        throw new BaseException(("Unknown operation " + r.mode));
    }
  },
  ifChangedGuard: function(r, body) {
    var $__6 = this;
    return ifChangedGuardTemplate(r.args.map((function(a) {
      return $__6.changeNames[a];
    })), body);
  },
  genInterpolation: function(r) {
    var res = "";
    for (var i = 0; i < r.args.length; ++i) {
      res += this.genLiteral(r.fixedArgs[i]);
      res += " + ";
      res += this.localNames[r.args[i]];
      res += " + ";
    }
    res += this.genLiteral(r.fixedArgs[r.args.length]);
    return res;
  },
  genLiteral: function(value) {
    return JSON.stringify(value);
  },
  genUpdateDirectiveOrElement: function(r) {
    if (!r.lastInBinding)
      return "";
    var newValue = this.localNames[r.selfIndex];
    var oldValue = this.fieldNames[r.selfIndex];
    var br = r.bindingRecord;
    if (br.isDirective()) {
      var directiveProperty = (this.getDirective(br.directiveRecord) + "." + br.propertyName);
      return updateDirectiveTemplate(oldValue, newValue, directiveProperty);
    } else {
      return updateElementTemplate(oldValue, newValue);
    }
  },
  genAddToChanges: function(r) {
    var newValue = this.localNames[r.selfIndex];
    var oldValue = this.fieldNames[r.selfIndex];
    return r.bindingRecord.callOnChange() ? addToChangesTemplate(oldValue, newValue) : "";
  },
  genNotifyOnChanges: function(r) {
    var br = r.bindingRecord;
    if (r.lastInDirective && br.callOnChange()) {
      return notifyOnChangesTemplate(this.getDirective(br.directiveRecord));
    } else {
      return "";
    }
  },
  genArgs: function(r) {
    var $__6 = this;
    return r.args.map((function(arg) {
      return $__6.localNames[arg];
    })).join(", ");
  }
}, {});
Object.defineProperty(ChangeDetectorJITGenerator, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [$traceurRuntime.type.string], [$traceurRuntime.genericType(List, ProtoRecord)], [List]];
  }});
Object.defineProperty(ChangeDetectorJITGenerator.prototype.getLocalNames, "parameters", {get: function() {
    return [[$traceurRuntime.genericType(List, ProtoRecord)]];
  }});
Object.defineProperty(ChangeDetectorJITGenerator.prototype.getChangeNames, "parameters", {get: function() {
    return [[$traceurRuntime.genericType(List, $traceurRuntime.type.string)]];
  }});
Object.defineProperty(ChangeDetectorJITGenerator.prototype.getFieldNames, "parameters", {get: function() {
    return [[$traceurRuntime.genericType(List, $traceurRuntime.type.string)]];
  }});
Object.defineProperty(ChangeDetectorJITGenerator.prototype.getPipeNames, "parameters", {get: function() {
    return [[$traceurRuntime.genericType(List, $traceurRuntime.type.string)]];
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
    return [[ProtoRecord], [$traceurRuntime.type.string]];
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