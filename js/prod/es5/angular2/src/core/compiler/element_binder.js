System.register(["angular2/src/facade/lang", "./element_injector", "angular2/src/facade/collection", "./view"], function($__export) {
  "use strict";
  var int,
      isBlank,
      BaseException,
      eiModule,
      DirectiveBinding,
      List,
      StringMap,
      viewModule,
      ElementBinder;
  return {
    setters: [function($__m) {
      int = $__m.int;
      isBlank = $__m.isBlank;
      BaseException = $__m.BaseException;
    }, function($__m) {
      DirectiveBinding = $__m.DirectiveBinding;
      eiModule = $__m;
    }, function($__m) {
      List = $__m.List;
      StringMap = $__m.StringMap;
    }, function($__m) {
      viewModule = $__m;
    }],
    execute: function() {
      ElementBinder = $__export("ElementBinder", (function() {
        var ElementBinder = function ElementBinder(index, parent, distanceToParent, protoElementInjector, componentDirective, viewportDirective) {
          if (isBlank(index)) {
            throw new BaseException('null index not allowed.');
          }
          this.protoElementInjector = protoElementInjector;
          this.componentDirective = componentDirective;
          this.viewportDirective = viewportDirective;
          this.parent = parent;
          this.index = index;
          this.distanceToParent = distanceToParent;
          this.hostListeners = null;
          this.nestedProtoView = null;
        };
        return ($traceurRuntime.createClass)(ElementBinder, {}, {});
      }()));
      Object.defineProperty(ElementBinder, "parameters", {get: function() {
          return [[int], [ElementBinder], [int], [eiModule.ProtoElementInjector], [DirectiveBinding], [DirectiveBinding]];
        }});
    }
  };
});
//# sourceMappingURL=element_binder.es6.map

//# sourceMappingURL=./element_binder.js.map