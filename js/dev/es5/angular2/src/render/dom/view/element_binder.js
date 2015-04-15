System.register(["rtts_assert/rtts_assert", "angular2/change_detection", "angular2/src/reflection/types", "angular2/src/facade/collection", "./proto_view"], function($__export) {
  "use strict";
  var assert,
      AST,
      SetterFn,
      List,
      ListWrapper,
      protoViewModule,
      ElementBinder,
      Event;
  return {
    setters: [function($__m) {
      assert = $__m.assert;
    }, function($__m) {
      AST = $__m.AST;
    }, function($__m) {
      SetterFn = $__m.SetterFn;
    }, function($__m) {
      List = $__m.List;
      ListWrapper = $__m.ListWrapper;
    }, function($__m) {
      protoViewModule = $__m;
    }],
    execute: function() {
      ElementBinder = $__export("ElementBinder", (function() {
        var ElementBinder = function ElementBinder($__1) {
          var $__2 = $__1,
              textNodeIndices = $__2.textNodeIndices,
              contentTagSelector = $__2.contentTagSelector,
              nestedProtoView = $__2.nestedProtoView,
              componentId = $__2.componentId,
              eventLocals = $__2.eventLocals,
              localEvents = $__2.localEvents,
              globalEvents = $__2.globalEvents,
              parentIndex = $__2.parentIndex,
              distanceToParent = $__2.distanceToParent,
              propertySetters = $__2.propertySetters;
          this.textNodeIndices = textNodeIndices;
          this.contentTagSelector = contentTagSelector;
          this.nestedProtoView = nestedProtoView;
          this.componentId = componentId;
          this.eventLocals = eventLocals;
          this.localEvents = localEvents;
          this.globalEvents = globalEvents;
          this.parentIndex = parentIndex;
          this.distanceToParent = distanceToParent;
          this.propertySetters = propertySetters;
        };
        return ($traceurRuntime.createClass)(ElementBinder, {}, {});
      }()));
      Event = $__export("Event", (function() {
        var Event = function Event(name, target, fullName) {
          assert.argumentTypes(name, assert.type.string, target, assert.type.string, fullName, assert.type.string);
          this.name = name;
          this.target = target;
          this.fullName = fullName;
        };
        return ($traceurRuntime.createClass)(Event, {}, {});
      }()));
      Object.defineProperty(Event, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.string], [assert.type.string]];
        }});
    }
  };
});
//# sourceMappingURL=element_binder.es6.map

//# sourceMappingURL=./element_binder.js.map