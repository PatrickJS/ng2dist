'use strict'; var parse5Adapter = require('angular2/src/dom/parse5_adapter'); parse5Adapter.Parse5DomAdapter.makeCurrent();
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_render_47_dom_47_compiler_47_text_95_interpolation_95_parser__,
    $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_pipeline__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_change_95_detection__,
    $__pipeline_95_spec__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    describe = $__0.describe,
    beforeEach = $__0.beforeEach,
    expect = $__0.expect,
    it = $__0.it,
    iit = $__0.iit,
    ddescribe = $__0.ddescribe,
    el = $__0.el;
var TextInterpolationParser = ($__angular2_47_src_47_render_47_dom_47_compiler_47_text_95_interpolation_95_parser__ = require("angular2/src/render/dom/compiler/text_interpolation_parser"), $__angular2_47_src_47_render_47_dom_47_compiler_47_text_95_interpolation_95_parser__ && $__angular2_47_src_47_render_47_dom_47_compiler_47_text_95_interpolation_95_parser__.__esModule && $__angular2_47_src_47_render_47_dom_47_compiler_47_text_95_interpolation_95_parser__ || {default: $__angular2_47_src_47_render_47_dom_47_compiler_47_text_95_interpolation_95_parser__}).TextInterpolationParser;
var CompilePipeline = ($__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_pipeline__ = require("angular2/src/render/dom/compiler/compile_pipeline"), $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_pipeline__ && $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_pipeline__.__esModule && $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_pipeline__ || {default: $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_pipeline__}).CompilePipeline;
var $__3 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    MapWrapper = $__3.MapWrapper,
    ListWrapper = $__3.ListWrapper;
var $__4 = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}),
    Lexer = $__4.Lexer,
    Parser = $__4.Parser;
var IgnoreChildrenStep = ($__pipeline_95_spec__ = require("./pipeline_spec"), $__pipeline_95_spec__ && $__pipeline_95_spec__.__esModule && $__pipeline_95_spec__ || {default: $__pipeline_95_spec__}).IgnoreChildrenStep;
function main() {
  describe('TextInterpolationParser', (function() {
    function createPipeline() {
      return new CompilePipeline([new IgnoreChildrenStep(), new TextInterpolationParser(new Parser(new Lexer()))]);
    }
    function process(element) {
      return ListWrapper.map(createPipeline().process(element), (function(compileElement) {
        return compileElement.inheritedElementBinder;
      }));
    }
    function assertTextBinding(elementBinder, bindingIndex, nodeIndex, expression) {
      expect(elementBinder.textBindings[bindingIndex].source).toEqual(expression);
      expect(elementBinder.textBindingIndices[bindingIndex]).toEqual(nodeIndex);
    }
    it('should find text interpolation in normal elements', (function() {
      var result = process(el('<div>{{expr1}}<span></span>{{expr2}}</div>'))[0];
      assertTextBinding(result, 0, 0, "{{expr1}}");
      assertTextBinding(result, 1, 2, "{{expr2}}");
    }));
    it('should find text interpolation in template elements', (function() {
      var result = process(el('<template>{{expr1}}<span></span>{{expr2}}</template>'))[0];
      assertTextBinding(result, 0, 0, "{{expr1}}");
      assertTextBinding(result, 1, 2, "{{expr2}}");
    }));
    it('should allow multiple expressions', (function() {
      var result = process(el('<div>{{expr1}}{{expr2}}</div>'))[0];
      assertTextBinding(result, 0, 0, "{{expr1}}{{expr2}}");
    }));
    it('should not interpolate when compileChildren is false', (function() {
      var results = process(el('<div>{{included}}<span ignore-children>{{excluded}}</span></div>'));
      assertTextBinding(results[0], 0, 0, "{{included}}");
      expect(results[1]).toBe(results[0]);
    }));
    it('should allow fixed text before, in between and after expressions', (function() {
      var result = process(el('<div>a{{expr1}}b{{expr2}}c</div>'))[0];
      assertTextBinding(result, 0, 0, "a{{expr1}}b{{expr2}}c");
    }));
    it('should escape quotes in fixed parts', (function() {
      var result = process(el("<div>'\"a{{expr1}}</div>"))[0];
      assertTextBinding(result, 0, 0, "'\"a{{expr1}}");
    }));
  }));
}
//# sourceMappingURL=text_interpolation_parser_spec.js.map

//# sourceMappingURL=./text_interpolation_parser_spec.map
 main();