System.register(["angular2/test_lib", "angular2/src/core/compiler/directive_metadata_reader", "angular2/src/core/compiler/dynamic_component_loader", "angular2/src/core/annotations/annotations"], function($__export) {
  "use strict";
  var ddescribe,
      describe,
      it,
      iit,
      expect,
      beforeEach,
      DirectiveMetadataReader,
      DynamicComponentLoader,
      Decorator,
      Viewport,
      SomeDecorator,
      SomeViewport;
  function main() {
    describe("DynamicComponentLoader", (function() {
      var loader;
      beforeEach((function() {
        loader = new DynamicComponentLoader(null, new DirectiveMetadataReader(), null, null);
      }));
      describe("loadIntoExistingLocation", (function() {
        describe('Load errors', (function() {
          it('should throw when trying to load a decorator', (function() {
            expect((function() {
              return loader.loadIntoExistingLocation(SomeDecorator, null);
            })).toThrowError("Could not load 'SomeDecorator' because it is not a component.");
          }));
          it('should throw when trying to load a viewport', (function() {
            expect((function() {
              return loader.loadIntoExistingLocation(SomeViewport, null);
            })).toThrowError("Could not load 'SomeViewport' because it is not a component.");
          }));
        }));
      }));
    }));
  }
  $__export("main", main);
  return {
    setters: [function($__m) {
      ddescribe = $__m.ddescribe;
      describe = $__m.describe;
      it = $__m.it;
      iit = $__m.iit;
      expect = $__m.expect;
      beforeEach = $__m.beforeEach;
    }, function($__m) {
      DirectiveMetadataReader = $__m.DirectiveMetadataReader;
    }, function($__m) {
      DynamicComponentLoader = $__m.DynamicComponentLoader;
    }, function($__m) {
      Decorator = $__m.Decorator;
      Viewport = $__m.Viewport;
    }],
    execute: function() {
      SomeDecorator = (function() {
        var SomeDecorator = function SomeDecorator() {
          ;
        };
        return ($traceurRuntime.createClass)(SomeDecorator, {}, {});
      }());
      Object.defineProperty(SomeDecorator, "annotations", {get: function() {
          return [new Decorator({selector: 'someDecorator'})];
        }});
      SomeViewport = (function() {
        var SomeViewport = function SomeViewport() {
          ;
        };
        return ($traceurRuntime.createClass)(SomeViewport, {}, {});
      }());
      Object.defineProperty(SomeViewport, "annotations", {get: function() {
          return [new Viewport({selector: 'someViewport'})];
        }});
    }
  };
});
//# sourceMappingURL=dynamic_component_loader_spec.es6.map

//# sourceMappingURL=./dynamic_component_loader_spec.js.map