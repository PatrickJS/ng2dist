'use strict'; var parse5Adapter = require('angular2/src/dom/parse5_adapter'); parse5Adapter.Parse5DomAdapter.makeCurrent();
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__,
    $__angular2_47_src_47_core_47_annotations_47_annotations__,
    $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__,
    $__angular2_47_di__;
var isPresent = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).isPresent;
var ListWrapper = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).ListWrapper;
var $__2 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    ddescribe = $__2.ddescribe,
    describe = $__2.describe,
    it = $__2.it,
    iit = $__2.iit,
    expect = $__2.expect,
    beforeEach = $__2.beforeEach;
var DirectiveMetadataReader = ($__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ = require("angular2/src/core/compiler/directive_metadata_reader"), $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__.__esModule && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ || {default: $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__}).DirectiveMetadataReader;
var $__4 = ($__angular2_47_src_47_core_47_annotations_47_annotations__ = require("angular2/src/core/annotations/annotations"), $__angular2_47_src_47_core_47_annotations_47_annotations__ && $__angular2_47_src_47_core_47_annotations_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_47_annotations__}),
    Decorator = $__4.Decorator,
    Component = $__4.Component,
    Viewport = $__4.Viewport;
var DirectiveMetadata = ($__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ = require("angular2/src/core/compiler/directive_metadata"), $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__.__esModule && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ || {default: $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__}).DirectiveMetadata;
var $__6 = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}),
    Injectable = $__6.Injectable,
    Injector = $__6.Injector;
var SomeInjectable = function SomeInjectable() {
  ;
};
($traceurRuntime.createClass)(SomeInjectable, {}, {});
Object.defineProperty(SomeInjectable, "annotations", {get: function() {
    return [new Injectable()];
  }});
var SomeDecorator = function SomeDecorator() {
  ;
};
($traceurRuntime.createClass)(SomeDecorator, {}, {});
Object.defineProperty(SomeDecorator, "annotations", {get: function() {
    return [new Decorator({selector: 'someDecorator'})];
  }});
var SomeComponent = function SomeComponent() {
  ;
};
($traceurRuntime.createClass)(SomeComponent, {}, {});
Object.defineProperty(SomeComponent, "annotations", {get: function() {
    return [new Component({
      selector: 'someComponent',
      injectables: [SomeInjectable]
    })];
  }});
var SomeViewport = function SomeViewport() {
  ;
};
($traceurRuntime.createClass)(SomeViewport, {}, {});
Object.defineProperty(SomeViewport, "annotations", {get: function() {
    return [new Viewport({selector: 'someViewport'})];
  }});
var SomeDirectiveWithoutAnnotation = function SomeDirectiveWithoutAnnotation() {
  ;
};
($traceurRuntime.createClass)(SomeDirectiveWithoutAnnotation, {}, {});
function main() {
  describe("DirectiveMetadataReader", (function() {
    var reader;
    beforeEach((function() {
      reader = new DirectiveMetadataReader();
    }));
    it('should read out the Decorator annotation', (function() {
      var directiveMetadata = reader.read(SomeDecorator);
      expect(directiveMetadata).toEqual(new DirectiveMetadata(SomeDecorator, new Decorator({selector: 'someDecorator'}), null));
    }));
    it('should read out the Viewport annotation', (function() {
      var directiveMetadata = reader.read(SomeViewport);
      expect(directiveMetadata).toEqual(new DirectiveMetadata(SomeViewport, new Viewport({selector: 'someViewport'}), null));
    }));
    it('should read out the Component annotation', (function() {
      var m = reader.read(SomeComponent);
      expect(m.type).toEqual(SomeComponent);
      expect(m.annotation).toEqual(new Component({
        selector: 'someComponent',
        injectables: [SomeInjectable]
      }));
      var resolvedList = ListWrapper.reduce(m.resolvedInjectables, function(prev, elem) {
        if (isPresent(elem)) {
          ListWrapper.push(prev, elem);
        }
        return prev;
      }, []);
      expect(resolvedList.length).toBe(1);
      expect(resolvedList[0].key.token).toBe(SomeInjectable);
    }));
    it('should throw if not matching annotation is found', (function() {
      expect((function() {
        reader.read(SomeDirectiveWithoutAnnotation);
      })).toThrowError('No Directive annotation found on SomeDirectiveWithoutAnnotation');
    }));
  }));
}
//# sourceMappingURL=directive_metadata_reader_spec.js.map

//# sourceMappingURL=./directive_metadata_reader_spec.map
 main();