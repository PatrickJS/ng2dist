'use strict'; var parse5Adapter = require('angular2/src/dom/parse5_adapter'); parse5Adapter.Parse5DomAdapter.makeCurrent();
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__,
    $__angular2_47_src_47_core_47_compiler_47_dynamic_95_component_95_loader__,
    $__angular2_47_src_47_core_47_annotations_47_annotations__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    ddescribe = $__0.ddescribe,
    describe = $__0.describe,
    it = $__0.it,
    iit = $__0.iit,
    expect = $__0.expect,
    beforeEach = $__0.beforeEach;
var DirectiveMetadataReader = ($__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ = require("angular2/src/core/compiler/directive_metadata_reader"), $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__.__esModule && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ || {default: $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__}).DirectiveMetadataReader;
var DynamicComponentLoader = ($__angular2_47_src_47_core_47_compiler_47_dynamic_95_component_95_loader__ = require("angular2/src/core/compiler/dynamic_component_loader"), $__angular2_47_src_47_core_47_compiler_47_dynamic_95_component_95_loader__ && $__angular2_47_src_47_core_47_compiler_47_dynamic_95_component_95_loader__.__esModule && $__angular2_47_src_47_core_47_compiler_47_dynamic_95_component_95_loader__ || {default: $__angular2_47_src_47_core_47_compiler_47_dynamic_95_component_95_loader__}).DynamicComponentLoader;
var $__3 = ($__angular2_47_src_47_core_47_annotations_47_annotations__ = require("angular2/src/core/annotations/annotations"), $__angular2_47_src_47_core_47_annotations_47_annotations__ && $__angular2_47_src_47_core_47_annotations_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_47_annotations__}),
    Decorator = $__3.Decorator,
    Viewport = $__3.Viewport;
var SomeDecorator = function SomeDecorator() {
  ;
};
($traceurRuntime.createClass)(SomeDecorator, {}, {});
Object.defineProperty(SomeDecorator, "annotations", {get: function() {
    return [new Decorator({selector: 'someDecorator'})];
  }});
var SomeViewport = function SomeViewport() {
  ;
};
($traceurRuntime.createClass)(SomeViewport, {}, {});
Object.defineProperty(SomeViewport, "annotations", {get: function() {
    return [new Viewport({selector: 'someViewport'})];
  }});
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
//# sourceMappingURL=dynamic_component_loader_spec.js.map

//# sourceMappingURL=./dynamic_component_loader_spec.map
 main();