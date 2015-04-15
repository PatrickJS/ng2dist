System.register(["angular2/src/facade/collection", "./binding_record"], function($__export) {
  "use strict";
  var List,
      BindingRecord,
      RECORD_TYPE_SELF,
      RECORD_TYPE_CONST,
      RECORD_TYPE_PRIMITIVE_OP,
      RECORD_TYPE_PROPERTY,
      RECORD_TYPE_LOCAL,
      RECORD_TYPE_INVOKE_METHOD,
      RECORD_TYPE_INVOKE_CLOSURE,
      RECORD_TYPE_KEYED_ACCESS,
      RECORD_TYPE_PIPE,
      RECORD_TYPE_BINDING_PIPE,
      RECORD_TYPE_INTERPOLATE,
      ProtoRecord;
  return {
    setters: [function($__m) {
      List = $__m.List;
    }, function($__m) {
      BindingRecord = $__m.BindingRecord;
    }],
    execute: function() {
      RECORD_TYPE_SELF = $__export("RECORD_TYPE_SELF", 0);
      RECORD_TYPE_CONST = $__export("RECORD_TYPE_CONST", 1);
      RECORD_TYPE_PRIMITIVE_OP = $__export("RECORD_TYPE_PRIMITIVE_OP", 2);
      RECORD_TYPE_PROPERTY = $__export("RECORD_TYPE_PROPERTY", 3);
      RECORD_TYPE_LOCAL = $__export("RECORD_TYPE_LOCAL", 4);
      RECORD_TYPE_INVOKE_METHOD = $__export("RECORD_TYPE_INVOKE_METHOD", 5);
      RECORD_TYPE_INVOKE_CLOSURE = $__export("RECORD_TYPE_INVOKE_CLOSURE", 6);
      RECORD_TYPE_KEYED_ACCESS = $__export("RECORD_TYPE_KEYED_ACCESS", 7);
      RECORD_TYPE_PIPE = $__export("RECORD_TYPE_PIPE", 8);
      RECORD_TYPE_BINDING_PIPE = $__export("RECORD_TYPE_BINDING_PIPE", 9);
      RECORD_TYPE_INTERPOLATE = $__export("RECORD_TYPE_INTERPOLATE", 10);
      ProtoRecord = $__export("ProtoRecord", (function() {
        var ProtoRecord = function ProtoRecord(mode, name, funcOrValue, args, fixedArgs, contextIndex, selfIndex, bindingRecord, expressionAsString, lastInBinding, lastInDirective) {
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
        };
        return ($traceurRuntime.createClass)(ProtoRecord, {isPureFunction: function() {
            return this.mode === RECORD_TYPE_INTERPOLATE || this.mode === RECORD_TYPE_PRIMITIVE_OP;
          }}, {});
      }()));
      Object.defineProperty(ProtoRecord, "parameters", {get: function() {
          return [[assert.type.number], [assert.type.string], [], [List], [List], [assert.type.number], [assert.type.number], [BindingRecord], [assert.type.string], [assert.type.boolean], [assert.type.boolean]];
        }});
    }
  };
});
//# sourceMappingURL=proto_record.es6.map

//# sourceMappingURL=./proto_record.js.map