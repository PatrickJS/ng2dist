'use strict'; var parse5Adapter = require('angular2/src/dom/parse5_adapter'); parse5Adapter.Parse5DomAdapter.makeCurrent();
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_render_47_dom_47_compiler_47_directive_95_parser__,
    $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_pipeline__,
    $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_step__,
    $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_element__,
    $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_control__,
    $__angular2_47_src_47_render_47_api__,
    $__angular2_47_change_95_detection__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    describe = $__0.describe,
    beforeEach = $__0.beforeEach,
    it = $__0.it,
    xit = $__0.xit,
    expect = $__0.expect,
    iit = $__0.iit,
    ddescribe = $__0.ddescribe,
    el = $__0.el;
var $__1 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isPresent = $__1.isPresent,
    assertionsEnabled = $__1.assertionsEnabled;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    ListWrapper = $__2.ListWrapper,
    MapWrapper = $__2.MapWrapper,
    StringMapWrapper = $__2.StringMapWrapper;
var DirectiveParser = ($__angular2_47_src_47_render_47_dom_47_compiler_47_directive_95_parser__ = require("angular2/src/render/dom/compiler/directive_parser"), $__angular2_47_src_47_render_47_dom_47_compiler_47_directive_95_parser__ && $__angular2_47_src_47_render_47_dom_47_compiler_47_directive_95_parser__.__esModule && $__angular2_47_src_47_render_47_dom_47_compiler_47_directive_95_parser__ || {default: $__angular2_47_src_47_render_47_dom_47_compiler_47_directive_95_parser__}).DirectiveParser;
var CompilePipeline = ($__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_pipeline__ = require("angular2/src/render/dom/compiler/compile_pipeline"), $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_pipeline__ && $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_pipeline__.__esModule && $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_pipeline__ || {default: $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_pipeline__}).CompilePipeline;
var CompileStep = ($__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_step__ = require("angular2/src/render/dom/compiler/compile_step"), $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_step__ && $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_step__.__esModule && $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_step__ || {default: $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_step__}).CompileStep;
var CompileElement = ($__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_element__ = require("angular2/src/render/dom/compiler/compile_element"), $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_element__ && $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_element__.__esModule && $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_element__ || {default: $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_element__}).CompileElement;
var CompileControl = ($__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_control__ = require("angular2/src/render/dom/compiler/compile_control"), $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_control__ && $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_control__.__esModule && $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_control__ || {default: $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_control__}).CompileControl;
var $__8 = ($__angular2_47_src_47_render_47_api__ = require("angular2/src/render/api"), $__angular2_47_src_47_render_47_api__ && $__angular2_47_src_47_render_47_api__.__esModule && $__angular2_47_src_47_render_47_api__ || {default: $__angular2_47_src_47_render_47_api__}),
    ViewDefinition = $__8.ViewDefinition,
    DirectiveMetadata = $__8.DirectiveMetadata;
var $__9 = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}),
    Lexer = $__9.Lexer,
    Parser = $__9.Parser;
function main() {
  describe('DirectiveParser', (function() {
    var parser,
        annotatedDirectives;
    beforeEach((function() {
      annotatedDirectives = [someComponent, someComponent2, someComponent3, someViewport, someViewport2, someDecorator, someDecoratorIgnoringChildren, someDecoratorWithProps, someDecoratorWithEvents, someDecoratorWithGlobalEvents];
      parser = new Parser(new Lexer());
    }));
    function createPipeline() {
      var propertyBindings = arguments[0] !== (void 0) ? arguments[0] : null;
      return new CompilePipeline([new MockStep((function(parent, current, control) {
        if (isPresent(propertyBindings)) {
          StringMapWrapper.forEach(propertyBindings, (function(ast, name) {
            current.bindElement().bindProperty(name, ast);
          }));
        }
      })), new DirectiveParser(parser, annotatedDirectives)]);
    }
    function process(el) {
      var propertyBindings = arguments[1] !== (void 0) ? arguments[1] : null;
      var pipeline = createPipeline(propertyBindings);
      return ListWrapper.map(pipeline.process(el), (function(ce) {
        return ce.inheritedElementBinder;
      }));
    }
    it('should not add directives if they are not used', (function() {
      var results = process(el('<div></div>'));
      expect(results[0]).toBe(null);
    }));
    it('should detect directives in attributes', (function() {
      var results = process(el('<div some-decor></div>'));
      expect(results[0].directives[0].directiveIndex).toBe(annotatedDirectives.indexOf(someDecorator));
    }));
    it('should detect directives with multiple attributes', (function() {
      var results = process(el('<input type=text control=one></input>'));
      expect(results[0].directives[0].directiveIndex).toBe(annotatedDirectives.indexOf(someComponent3));
    }));
    it('should compile children by default', (function() {
      var results = createPipeline().process(el('<div some-decor></div>'));
      expect(results[0].compileChildren).toEqual(true);
    }));
    it('should stop compiling children when specified in the directive config', (function() {
      var results = createPipeline().process(el('<div some-decor-ignoring-children></div>'));
      expect(results[0].compileChildren).toEqual(false);
    }));
    it('should bind directive properties from bound properties', (function() {
      var results = process(el('<div some-decor-props></div>'), {'elProp': parser.parseBinding('someExpr', '')});
      var directiveBinding = results[0].directives[0];
      expect(MapWrapper.get(directiveBinding.propertyBindings, 'dirProp').source).toEqual('someExpr');
    }));
    it('should bind directive properties with pipes', (function() {
      var results = process(el('<div some-decor-props></div>'), {'elProp': parser.parseBinding('someExpr', '')});
      var directiveBinding = results[0].directives[0];
      var pipedProp = MapWrapper.get(directiveBinding.propertyBindings, 'doubleProp');
      var simpleProp = MapWrapper.get(directiveBinding.propertyBindings, 'dirProp');
      expect(pipedProp.ast.name).toEqual('double');
      expect(pipedProp.ast.exp).toEqual(simpleProp.ast);
      expect(simpleProp.source).toEqual('someExpr');
    }));
    it('should bind directive properties from attribute values', (function() {
      var results = process(el('<div some-decor-props el-prop="someValue"></div>'));
      var directiveBinding = results[0].directives[0];
      var simpleProp = MapWrapper.get(directiveBinding.propertyBindings, 'dirProp');
      expect(simpleProp.source).toEqual('someValue');
    }));
    it('should store working property setters', (function() {
      var element = el('<input some-decor-props>');
      var results = process(element);
      var setter = MapWrapper.get(results[0].propertySetters, 'value');
      setter(element, 'abc');
      expect(element.value).toEqual('abc');
    }));
    it('should read attribute values', (function() {
      var element = el('<input some-decor-props some-attr="someValue">');
      var results = process(element);
      expect(MapWrapper.get(results[0].readAttributes, 'some-attr')).toEqual('someValue');
    }));
    it('should bind directive events', (function() {
      var results = process(el('<div some-decor-events></div>'));
      var directiveBinding = results[0].directives[0];
      expect(directiveBinding.eventBindings.length).toEqual(1);
      var eventBinding = directiveBinding.eventBindings[0];
      expect(eventBinding.fullName).toEqual('click');
      expect(eventBinding.source.source).toEqual('doIt()');
    }));
    it('should bind directive global events', (function() {
      var results = process(el('<div some-decor-globalevents></div>'));
      var directiveBinding = results[0].directives[0];
      expect(directiveBinding.eventBindings.length).toEqual(1);
      var eventBinding = directiveBinding.eventBindings[0];
      expect(eventBinding.fullName).toEqual('window:resize');
      expect(eventBinding.source.source).toEqual('doItGlobal()');
    }));
    describe('viewport directives', (function() {
      it('should not allow multiple viewport directives on the same element', (function() {
        expect((function() {
          process(el('<template some-vp some-vp2></template>'));
        })).toThrowError('Only one viewport directive is allowed per element - check <template some-vp some-vp2>');
      }));
      it('should not allow viewport directives on non <template> elements', (function() {
        expect((function() {
          process(el('<div some-vp></div>'));
        })).toThrowError('Viewport directives need to be placed on <template> elements or elements with template attribute - check <div some-vp>');
      }));
    }));
    describe('component directives', (function() {
      it('should save the component id', (function() {
        var results = process(el('<div some-comp></div>'));
        expect(results[0].componentId).toEqual('someComponent');
      }));
      it('should not allow multiple component directives on the same element', (function() {
        expect((function() {
          process(el('<div some-comp some-comp2></div>'));
        })).toThrowError('Only one component directive is allowed per element - check <div some-comp some-comp2>');
      }));
      it('should not allow component directives on <template> elements', (function() {
        expect((function() {
          process(el('<template some-comp></template>'));
        })).toThrowError('Only template directives are allowed on template elements - check <template some-comp>');
      }));
    }));
  }));
}
var MockStep = function MockStep(process) {
  $traceurRuntime.superConstructor($MockStep).call(this);
  this.processClosure = process;
};
var $MockStep = MockStep;
($traceurRuntime.createClass)(MockStep, {process: function(parent, current, control) {
    this.processClosure(parent, current, control);
  }}, {}, CompileStep);
Object.defineProperty(MockStep.prototype.process, "parameters", {get: function() {
    return [[CompileElement], [CompileElement], [CompileControl]];
  }});
var someComponent = new DirectiveMetadata({
  selector: '[some-comp]',
  id: 'someComponent',
  type: DirectiveMetadata.COMPONENT_TYPE
});
var someComponent2 = new DirectiveMetadata({
  selector: '[some-comp2]',
  id: 'someComponent2',
  type: DirectiveMetadata.COMPONENT_TYPE
});
var someComponent3 = new DirectiveMetadata({
  selector: 'input[type=text][control]',
  id: 'someComponent3',
  type: DirectiveMetadata.COMPONENT_TYPE
});
var someViewport = new DirectiveMetadata({
  selector: '[some-vp]',
  id: 'someViewport',
  type: DirectiveMetadata.VIEWPORT_TYPE
});
var someViewport2 = new DirectiveMetadata({
  selector: '[some-vp2]',
  id: 'someViewport2',
  type: DirectiveMetadata.VIEWPORT_TYPE
});
var someDecorator = new DirectiveMetadata({selector: '[some-decor]'});
var someDecoratorIgnoringChildren = new DirectiveMetadata({
  selector: '[some-decor-ignoring-children]',
  compileChildren: false
});
var someDecoratorWithProps = new DirectiveMetadata({
  selector: '[some-decor-props]',
  properties: MapWrapper.createFromStringMap({
    'dirProp': 'elProp',
    'doubleProp': 'elProp | double'
  }),
  setters: ['value'],
  readAttributes: ['some-attr']
});
var someDecoratorWithEvents = new DirectiveMetadata({
  selector: '[some-decor-events]',
  hostListeners: MapWrapper.createFromStringMap({'click': 'doIt()'})
});
var someDecoratorWithGlobalEvents = new DirectiveMetadata({
  selector: '[some-decor-globalevents]',
  hostListeners: MapWrapper.createFromStringMap({'window:resize': 'doItGlobal()'})
});
//# sourceMappingURL=directive_parser_spec.js.map

//# sourceMappingURL=./directive_parser_spec.map
 main();