'use strict'; var parse5Adapter = require('angular2/src/dom/parse5_adapter'); parse5Adapter.Parse5DomAdapter.makeCurrent();
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_render_47_dom_47_compiler_47_view_95_splitter__,
    $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_pipeline__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_change_95_detection__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    describe = $__0.describe,
    beforeEach = $__0.beforeEach,
    it = $__0.it,
    expect = $__0.expect,
    iit = $__0.iit,
    ddescribe = $__0.ddescribe,
    el = $__0.el;
var MapWrapper = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).MapWrapper;
var ViewSplitter = ($__angular2_47_src_47_render_47_dom_47_compiler_47_view_95_splitter__ = require("angular2/src/render/dom/compiler/view_splitter"), $__angular2_47_src_47_render_47_dom_47_compiler_47_view_95_splitter__ && $__angular2_47_src_47_render_47_dom_47_compiler_47_view_95_splitter__.__esModule && $__angular2_47_src_47_render_47_dom_47_compiler_47_view_95_splitter__ || {default: $__angular2_47_src_47_render_47_dom_47_compiler_47_view_95_splitter__}).ViewSplitter;
var CompilePipeline = ($__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_pipeline__ = require("angular2/src/render/dom/compiler/compile_pipeline"), $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_pipeline__ && $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_pipeline__.__esModule && $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_pipeline__ || {default: $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_pipeline__}).CompilePipeline;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var $__5 = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}),
    Lexer = $__5.Lexer,
    Parser = $__5.Parser;
function main() {
  describe('ViewSplitter', (function() {
    function createPipeline() {
      return new CompilePipeline([new ViewSplitter(new Parser(new Lexer()))]);
    }
    describe('<template> elements', (function() {
      it('should move the content into a new <template> element and mark that as viewRoot', (function() {
        var rootElement = el('<div><template if="true">a</template></div>');
        var results = createPipeline().process(rootElement);
        expect(DOM.getOuterHTML(results[1].element)).toEqual('<template if="true" class="ng-binding"></template>');
        expect(results[1].isViewRoot).toBe(false);
        expect(DOM.getOuterHTML(results[2].element)).toEqual('<template>a</template>');
        expect(results[2].isViewRoot).toBe(true);
      }));
      it('should mark the new <template> element as viewRoot', (function() {
        var rootElement = el('<div><template if="true">a</template></div>');
        var results = createPipeline().process(rootElement);
        expect(results[2].isViewRoot).toBe(true);
      }));
      it('should not wrap the root element', (function() {
        var rootElement = el('<div></div>');
        var results = createPipeline().process(rootElement);
        expect(results.length).toBe(1);
        expect(DOM.getOuterHTML(rootElement)).toEqual('<div></div>');
      }));
      it('should copy over the elementDescription', (function() {
        var rootElement = el('<div><template if="true">a</template></div>');
        var results = createPipeline().process(rootElement);
        expect(results[2].elementDescription).toBe(results[1].elementDescription);
      }));
      it('should clean out the inheritedElementBinder', (function() {
        var rootElement = el('<div><template if="true">a</template></div>');
        var results = createPipeline().process(rootElement);
        expect(results[2].inheritedElementBinder).toBe(null);
      }));
      it('should create a nestedProtoView', (function() {
        var rootElement = el('<div><template if="true">a</template></div>');
        var results = createPipeline().process(rootElement);
        expect(results[2].inheritedProtoView).not.toBe(null);
        expect(results[2].inheritedProtoView).toBe(results[1].inheritedElementBinder.nestedProtoView);
        expect(DOM.getOuterHTML(results[2].inheritedProtoView.rootElement)).toEqual('<template>a</template>');
      }));
    }));
    describe('elements with template attribute', (function() {
      it('should replace the element with an empty <template> element', (function() {
        var rootElement = el('<div><span template=""></span></div>');
        var originalChild = rootElement.childNodes[0];
        var results = createPipeline().process(rootElement);
        expect(results[0].element).toBe(rootElement);
        expect(DOM.getOuterHTML(results[0].element)).toEqual('<div><template class="ng-binding"></template></div>');
        expect(DOM.getOuterHTML(results[2].element)).toEqual('<span template=""></span>');
        expect(results[2].element).toBe(originalChild);
      }));
      it('should work with top-level template node', (function() {
        var rootElement = el('<template><div template>x</div></template>');
        var originalChild = DOM.content(rootElement).childNodes[0];
        var results = createPipeline().process(rootElement);
        expect(results[0].element).toBe(rootElement);
        expect(results[0].isViewRoot).toBe(true);
        expect(results[2].isViewRoot).toBe(true);
        expect(DOM.getOuterHTML(results[0].element)).toEqual('<template><template class="ng-binding"></template></template>');
        expect(results[2].element).toBe(originalChild);
      }));
      it('should mark the element as viewRoot', (function() {
        var rootElement = el('<div><div template></div></div>');
        var results = createPipeline().process(rootElement);
        expect(results[2].isViewRoot).toBe(true);
      }));
      it('should add property bindings from the template attribute', (function() {
        var rootElement = el('<div><div template="some-prop:expr"></div></div>');
        var results = createPipeline().process(rootElement);
        expect(MapWrapper.get(results[1].inheritedElementBinder.propertyBindings, 'someProp').source).toEqual('expr');
        expect(MapWrapper.get(results[1].attrs(), 'some-prop')).toEqual('expr');
      }));
      it('should add variable mappings from the template attribute to the nestedProtoView', (function() {
        var rootElement = el('<div><div template="var var-name=mapName"></div></div>');
        var results = createPipeline().process(rootElement);
        expect(results[2].inheritedProtoView.variableBindings).toEqual(MapWrapper.createFromStringMap({'mapName': 'varName'}));
      }));
      it('should add entries without value as attributes to the element', (function() {
        var rootElement = el('<div><div template="varname"></div></div>');
        var results = createPipeline().process(rootElement);
        expect(MapWrapper.get(results[1].attrs(), 'varname')).toEqual('');
        expect(results[1].inheritedElementBinder.propertyBindings).toEqual(MapWrapper.create());
        expect(results[1].inheritedElementBinder.variableBindings).toEqual(MapWrapper.create());
      }));
      it('should iterate properly after a template dom modification', (function() {
        var rootElement = el('<div><div template></div><after></after></div>');
        var results = createPipeline().process(rootElement);
        expect(results.length).toEqual(4);
      }));
      it('should copy over the elementDescription', (function() {
        var rootElement = el('<div><span template=""></span></div>');
        var results = createPipeline().process(rootElement);
        expect(results[2].elementDescription).toBe(results[1].elementDescription);
      }));
      it('should clean out the inheritedElementBinder', (function() {
        var rootElement = el('<div><span template=""></span></div>');
        var results = createPipeline().process(rootElement);
        expect(results[2].inheritedElementBinder).toBe(null);
      }));
      it('should create a nestedProtoView', (function() {
        var rootElement = el('<div><span template=""></span></div>');
        var results = createPipeline().process(rootElement);
        expect(results[2].inheritedProtoView).not.toBe(null);
        expect(results[2].inheritedProtoView).toBe(results[1].inheritedElementBinder.nestedProtoView);
        expect(DOM.getOuterHTML(results[2].inheritedProtoView.rootElement)).toEqual('<span template=""></span>');
      }));
    }));
    describe('elements with *directive_name attribute', (function() {
      it('should replace the element with an empty <template> element', (function() {
        var rootElement = el('<div><span *if></span></div>');
        var originalChild = rootElement.childNodes[0];
        var results = createPipeline().process(rootElement);
        expect(results[0].element).toBe(rootElement);
        expect(DOM.getOuterHTML(results[0].element)).toEqual('<div><template class="ng-binding" if=""></template></div>');
        expect(DOM.getOuterHTML(results[2].element)).toEqual('<span *if=""></span>');
        expect(results[2].element).toBe(originalChild);
      }));
      it('should mark the element as viewRoot', (function() {
        var rootElement = el('<div><div *foo="bar"></div></div>');
        var results = createPipeline().process(rootElement);
        expect(results[2].isViewRoot).toBe(true);
      }));
      it('should work with top-level template node', (function() {
        var rootElement = el('<template><div *foo>x</div></template>');
        var originalChild = DOM.content(rootElement).childNodes[0];
        var results = createPipeline().process(rootElement);
        expect(results[0].element).toBe(rootElement);
        expect(results[0].isViewRoot).toBe(true);
        expect(results[2].isViewRoot).toBe(true);
        expect(DOM.getOuterHTML(results[0].element)).toEqual('<template><template class="ng-binding" foo=""></template></template>');
        expect(results[2].element).toBe(originalChild);
      }));
      it('should add property bindings from the template attribute', (function() {
        var rootElement = el('<div><div *prop="expr"></div></div>');
        var results = createPipeline().process(rootElement);
        expect(MapWrapper.get(results[1].inheritedElementBinder.propertyBindings, 'prop').source).toEqual('expr');
        expect(MapWrapper.get(results[1].attrs(), 'prop')).toEqual('expr');
      }));
      it('should add variable mappings from the template attribute to the nestedProtoView', (function() {
        var rootElement = el('<div><div *foreach="var varName=mapName"></div></div>');
        var results = createPipeline().process(rootElement);
        expect(results[2].inheritedProtoView.variableBindings).toEqual(MapWrapper.createFromStringMap({'mapName': 'varName'}));
      }));
      it('should add entries without value as attribute to the element', (function() {
        var rootElement = el('<div><div *varname></div></div>');
        var results = createPipeline().process(rootElement);
        expect(MapWrapper.get(results[1].attrs(), 'varname')).toEqual('');
        expect(results[1].inheritedElementBinder.propertyBindings).toEqual(MapWrapper.create());
        expect(results[1].inheritedElementBinder.variableBindings).toEqual(MapWrapper.create());
      }));
      it('should iterate properly after a template dom modification', (function() {
        var rootElement = el('<div><div *foo></div><after></after></div>');
        var results = createPipeline().process(rootElement);
        expect(results.length).toEqual(4);
      }));
      it('should copy over the elementDescription', (function() {
        var rootElement = el('<div><span *foo></span></div>');
        var results = createPipeline().process(rootElement);
        expect(results[2].elementDescription).toBe(results[1].elementDescription);
      }));
      it('should clean out the inheritedElementBinder', (function() {
        var rootElement = el('<div><span *foo></span></div>');
        var results = createPipeline().process(rootElement);
        expect(results[2].inheritedElementBinder).toBe(null);
      }));
      it('should create a nestedProtoView', (function() {
        var rootElement = el('<div><span *foo></span></div>');
        var results = createPipeline().process(rootElement);
        expect(results[2].inheritedProtoView).not.toBe(null);
        expect(results[2].inheritedProtoView).toBe(results[1].inheritedElementBinder.nestedProtoView);
        expect(DOM.getOuterHTML(results[2].inheritedProtoView.rootElement)).toEqual('<span *foo=""></span>');
      }));
    }));
  }));
}
//# sourceMappingURL=view_splitter_spec.js.map

//# sourceMappingURL=./view_splitter_spec.map
 main();