System.register(["angular2/src/facade/collection", "./parser/locals", "./constants", "./binding_record"], function($__export) {
  "use strict";
  var List,
      Locals,
      DEFAULT,
      BindingRecord,
      ProtoChangeDetector,
      ChangeDetection,
      ChangeDispatcher,
      ChangeDetector;
  return {
    setters: [function($__m) {
      List = $__m.List;
    }, function($__m) {
      Locals = $__m.Locals;
    }, function($__m) {
      DEFAULT = $__m.DEFAULT;
    }, function($__m) {
      BindingRecord = $__m.BindingRecord;
    }],
    execute: function() {
      ProtoChangeDetector = $__export("ProtoChangeDetector", (function() {
        var ProtoChangeDetector = function ProtoChangeDetector() {
          ;
        };
        return ($traceurRuntime.createClass)(ProtoChangeDetector, {instantiate: function(dispatcher, bindingRecords, variableBindings, directiveRecords) {
            return null;
          }}, {});
      }()));
      Object.defineProperty(ProtoChangeDetector.prototype.instantiate, "parameters", {get: function() {
          return [[assert.type.any], [List], [List], [List]];
        }});
      ChangeDetection = $__export("ChangeDetection", (function() {
        var ChangeDetection = function ChangeDetection() {
          ;
        };
        return ($traceurRuntime.createClass)(ChangeDetection, {createProtoChangeDetector: function(name) {
            var changeControlStrategy = arguments[1] !== (void 0) ? arguments[1] : DEFAULT;
            return null;
          }}, {});
      }()));
      Object.defineProperty(ChangeDetection.prototype.createProtoChangeDetector, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.string]];
        }});
      ChangeDispatcher = $__export("ChangeDispatcher", (function() {
        var ChangeDispatcher = function ChangeDispatcher() {
          ;
        };
        return ($traceurRuntime.createClass)(ChangeDispatcher, {notifyOnBinding: function(bindingRecord, value) {}}, {});
      }()));
      Object.defineProperty(ChangeDispatcher.prototype.notifyOnBinding, "parameters", {get: function() {
          return [[BindingRecord], [assert.type.any]];
        }});
      ChangeDetector = $__export("ChangeDetector", (function() {
        var ChangeDetector = function ChangeDetector() {
          ;
        };
        return ($traceurRuntime.createClass)(ChangeDetector, {
          addChild: function(cd) {},
          addShadowDomChild: function(cd) {},
          removeChild: function(cd) {},
          remove: function() {},
          hydrate: function(context, locals, directives) {},
          dehydrate: function() {},
          markPathToRootAsCheckOnce: function() {},
          detectChanges: function() {},
          checkNoChanges: function() {}
        }, {});
      }()));
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
    }
  };
});
//# sourceMappingURL=interfaces.es6.map

//# sourceMappingURL=./interfaces.js.map