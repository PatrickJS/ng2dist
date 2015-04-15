System.register(["angular2/src/facade/lang", "angular2/src/facade/collection", "angular2/src/core/annotations/annotations", "angular2/di"], function($__export) {
  "use strict";
  var Type,
      List,
      Directive,
      ResolvedBinding,
      DirectiveMetadata;
  return {
    setters: [function($__m) {
      Type = $__m.Type;
    }, function($__m) {
      List = $__m.List;
    }, function($__m) {
      Directive = $__m.Directive;
    }, function($__m) {
      ResolvedBinding = $__m.ResolvedBinding;
    }],
    execute: function() {
      DirectiveMetadata = $__export("DirectiveMetadata", (function() {
        var DirectiveMetadata = function DirectiveMetadata(type, annotation, resolvedInjectables) {
          this.annotation = annotation;
          this.type = type;
          this.resolvedInjectables = resolvedInjectables;
        };
        return ($traceurRuntime.createClass)(DirectiveMetadata, {}, {});
      }()));
      Object.defineProperty(DirectiveMetadata, "parameters", {get: function() {
          return [[Type], [Directive], [assert.genericType(List, ResolvedBinding)]];
        }});
    }
  };
});
//# sourceMappingURL=directive_metadata.es6.map

//# sourceMappingURL=./directive_metadata.js.map