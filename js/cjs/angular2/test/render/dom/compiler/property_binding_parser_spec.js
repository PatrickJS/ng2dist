'use strict'; var parse5Adapter = require('angular2/src/dom/parse5_adapter'); parse5Adapter.Parse5DomAdapter.makeCurrent();
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_render_47_dom_47_compiler_47_property_95_binding_95_parser__,
    $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_pipeline__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_element__,
    $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_step__,
    $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_control__,
    $__angular2_47_change_95_detection__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    describe = $__0.describe,
    beforeEach = $__0.beforeEach,
    it = $__0.it,
    expect = $__0.expect,
    iit = $__0.iit,
    ddescribe = $__0.ddescribe,
    el = $__0.el;
var PropertyBindingParser = ($__angular2_47_src_47_render_47_dom_47_compiler_47_property_95_binding_95_parser__ = require("angular2/src/render/dom/compiler/property_binding_parser"), $__angular2_47_src_47_render_47_dom_47_compiler_47_property_95_binding_95_parser__ && $__angular2_47_src_47_render_47_dom_47_compiler_47_property_95_binding_95_parser__.__esModule && $__angular2_47_src_47_render_47_dom_47_compiler_47_property_95_binding_95_parser__ || {default: $__angular2_47_src_47_render_47_dom_47_compiler_47_property_95_binding_95_parser__}).PropertyBindingParser;
var CompilePipeline = ($__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_pipeline__ = require("angular2/src/render/dom/compiler/compile_pipeline"), $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_pipeline__ && $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_pipeline__.__esModule && $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_pipeline__ || {default: $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_pipeline__}).CompilePipeline;
var $__3 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    MapWrapper = $__3.MapWrapper,
    ListWrapper = $__3.ListWrapper;
var CompileElement = ($__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_element__ = require("angular2/src/render/dom/compiler/compile_element"), $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_element__ && $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_element__.__esModule && $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_element__ || {default: $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_element__}).CompileElement;
var CompileStep = ($__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_step__ = require("angular2/src/render/dom/compiler/compile_step"), $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_step__ && $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_step__.__esModule && $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_step__ || {default: $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_step__}).CompileStep;
var CompileControl = ($__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_control__ = require("angular2/src/render/dom/compiler/compile_control"), $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_control__ && $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_control__.__esModule && $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_control__ || {default: $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_control__}).CompileControl;
var $__7 = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}),
    Lexer = $__7.Lexer,
    Parser = $__7.Parser;
var EMPTY_MAP = MapWrapper.create();
function main() {
  describe('PropertyBindingParser', (function() {
    function createPipeline() {
      var hasNestedProtoView = arguments[0] !== (void 0) ? arguments[0] : false;
      return new CompilePipeline([new MockStep((function(parent, current, control) {
        if (hasNestedProtoView) {
          current.bindElement().bindNestedProtoView(el('<template></template>'));
        }
      })), new PropertyBindingParser(new Parser(new Lexer()))]);
    }
    function process(element) {
      var hasNestedProtoView = arguments[1] !== (void 0) ? arguments[1] : false;
      return ListWrapper.map(createPipeline(hasNestedProtoView).process(element), (function(compileElement) {
        return compileElement.inheritedElementBinder;
      }));
    }
    it('should detect [] syntax', (function() {
      var results = process(el('<div [a]="b"></div>'));
      expect(MapWrapper.get(results[0].propertyBindings, 'a').source).toEqual('b');
    }));
    it('should detect [] syntax only if an attribute name starts and ends with []', (function() {
      expect(process(el('<div z[a]="b"></div>'))[0]).toBe(null);
      expect(process(el('<div [a]v="b"></div>'))[0]).toBe(null);
    }));
    it('should detect bind- syntax', (function() {
      var results = process(el('<div bind-a="b"></div>'));
      expect(MapWrapper.get(results[0].propertyBindings, 'a').source).toEqual('b');
    }));
    it('should detect bind- syntax only if an attribute name starts with bind', (function() {
      expect(process(el('<div _bind-a="b"></div>'))[0]).toEqual(null);
    }));
    it('should detect interpolation syntax', (function() {
      var results = process(el('<div a="{{b}}"></div>'));
      expect(MapWrapper.get(results[0].propertyBindings, 'a').source).toEqual('{{b}}');
    }));
    it('should detect var- syntax', (function() {
      var results = process(el('<template var-a="b"></template>'));
      expect(MapWrapper.get(results[0].variableBindings, 'b')).toEqual('a');
    }));
    it('should store variable binding for a template element on the nestedProtoView', (function() {
      var results = process(el('<template var-george="washington"></p>'), true);
      expect(results[0].variableBindings).toEqual(EMPTY_MAP);
      expect(MapWrapper.get(results[0].nestedProtoView.variableBindings, 'washington')).toEqual('george');
    }));
    it('should store variable binding for a non-template element using shorthand syntax on the nestedProtoView', (function() {
      var results = process(el('<template #george="washington"></template>'), true);
      expect(results[0].variableBindings).toEqual(EMPTY_MAP);
      expect(MapWrapper.get(results[0].nestedProtoView.variableBindings, 'washington')).toEqual('george');
    }));
    it('should store variable binding for a non-template element', (function() {
      var results = process(el('<p var-george="washington"></p>'));
      expect(MapWrapper.get(results[0].variableBindings, 'washington')).toEqual('george');
    }));
    it('should store variable binding for a non-template element using shorthand syntax', (function() {
      var results = process(el('<p #george="washington"></p>'));
      expect(MapWrapper.get(results[0].variableBindings, 'washington')).toEqual('george');
    }));
    it('should store a variable binding with an implicit value', (function() {
      var results = process(el('<p var-george></p>'));
      expect(MapWrapper.get(results[0].variableBindings, '\$implicit')).toEqual('george');
    }));
    it('should store a variable binding with an implicit value using shorthand syntax', (function() {
      var results = process(el('<p #george></p>'));
      expect(MapWrapper.get(results[0].variableBindings, '\$implicit')).toEqual('george');
    }));
    it('should detect variable bindings only if an attribute name starts with #', (function() {
      var results = process(el('<p b#george></p>'));
      expect(results[0]).toEqual(null);
    }));
    it('should detect () syntax', (function() {
      var results = process(el('<div (click)="b()"></div>'));
      var eventBinding = results[0].eventBindings[0];
      expect(eventBinding.source.source).toEqual('b()');
      expect(eventBinding.fullName).toEqual('click');
      results = process(el('<div (click[])="b()"></div>'));
      eventBinding = results[0].eventBindings[0];
      expect(eventBinding.source.source).toEqual('b()');
      expect(eventBinding.fullName).toEqual('click[]');
    }));
    it('should detect () syntax only if an attribute name starts and ends with ()', (function() {
      expect(process(el('<div z(a)="b()"></div>'))[0]).toEqual(null);
      expect(process(el('<div (a)v="b()"></div>'))[0]).toEqual(null);
    }));
    it('should parse event handlers using () syntax as actions', (function() {
      var results = process(el('<div (click)="foo=bar"></div>'));
      var eventBinding = results[0].eventBindings[0];
      expect(eventBinding.source.source).toEqual('foo=bar');
      expect(eventBinding.fullName).toEqual('click');
    }));
    it('should detect on- syntax', (function() {
      var results = process(el('<div on-click="b()"></div>'));
      var eventBinding = results[0].eventBindings[0];
      expect(eventBinding.source.source).toEqual('b()');
      expect(eventBinding.fullName).toEqual('click');
    }));
    it('should parse event handlers using on- syntax as actions', (function() {
      var results = process(el('<div on-click="foo=bar"></div>'));
      var eventBinding = results[0].eventBindings[0];
      expect(eventBinding.source.source).toEqual('foo=bar');
      expect(eventBinding.fullName).toEqual('click');
    }));
    it('should store bound properties as temporal attributes', (function() {
      var results = createPipeline().process(el('<div bind-a="b" [c]="d"></div>'));
      expect(MapWrapper.get(results[0].attrs(), 'a')).toEqual('b');
      expect(MapWrapper.get(results[0].attrs(), 'c')).toEqual('d');
    }));
    it('should store variables as temporal attributes', (function() {
      var results = createPipeline().process(el('<div var-a="b" #c="d"></div>'));
      expect(MapWrapper.get(results[0].attrs(), 'a')).toEqual('b');
      expect(MapWrapper.get(results[0].attrs(), 'c')).toEqual('d');
    }));
    it('should store working property setters', (function() {
      var element = el('<input bind-value="1">');
      var results = process(element);
      var setter = MapWrapper.get(results[0].propertySetters, 'value');
      setter(element, 'abc');
      expect(element.value).toEqual('abc');
    }));
    it('should store property setters as camel case', (function() {
      var element = el('<div bind-some-prop="1">');
      var results = process(element);
      expect(MapWrapper.get(results[0].propertySetters, 'someProp')).toBeTruthy();
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
//# sourceMappingURL=property_binding_parser_spec.js.map

//# sourceMappingURL=./property_binding_parser_spec.map
 main();