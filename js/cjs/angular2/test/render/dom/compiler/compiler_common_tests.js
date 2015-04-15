"use strict";
Object.defineProperties(module.exports, {
  runCompilerCommonTests: {get: function() {
      return runCompilerCommonTests;
    }},
  __esModule: {value: true}
});
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_src_47_render_47_dom_47_compiler_47_compiler__,
    $__angular2_47_src_47_render_47_api__,
    $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_element__,
    $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_step__,
    $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_step_95_factory__,
    $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_control__,
    $__angular2_47_src_47_render_47_dom_47_compiler_47_template_95_loader__,
    $__angular2_47_src_47_services_47_url_95_resolver__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    AsyncTestCompleter = $__0.AsyncTestCompleter,
    beforeEach = $__0.beforeEach,
    ddescribe = $__0.ddescribe,
    describe = $__0.describe,
    el = $__0.el,
    expect = $__0.expect,
    iit = $__0.iit,
    inject = $__0.inject,
    IS_DARTIUM = $__0.IS_DARTIUM,
    it = $__0.it;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__2.List,
    ListWrapper = $__2.ListWrapper,
    Map = $__2.Map,
    MapWrapper = $__2.MapWrapper,
    StringMapWrapper = $__2.StringMapWrapper;
var $__3 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    Type = $__3.Type,
    isBlank = $__3.isBlank,
    stringify = $__3.stringify,
    isPresent = $__3.isPresent;
var $__4 = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
    PromiseWrapper = $__4.PromiseWrapper,
    Promise = $__4.Promise;
var $__5 = ($__angular2_47_src_47_render_47_dom_47_compiler_47_compiler__ = require("angular2/src/render/dom/compiler/compiler"), $__angular2_47_src_47_render_47_dom_47_compiler_47_compiler__ && $__angular2_47_src_47_render_47_dom_47_compiler_47_compiler__.__esModule && $__angular2_47_src_47_render_47_dom_47_compiler_47_compiler__ || {default: $__angular2_47_src_47_render_47_dom_47_compiler_47_compiler__}),
    Compiler = $__5.Compiler,
    CompilerCache = $__5.CompilerCache;
var $__6 = ($__angular2_47_src_47_render_47_api__ = require("angular2/src/render/api"), $__angular2_47_src_47_render_47_api__ && $__angular2_47_src_47_render_47_api__.__esModule && $__angular2_47_src_47_render_47_api__ || {default: $__angular2_47_src_47_render_47_api__}),
    ProtoViewDto = $__6.ProtoViewDto,
    ViewDefinition = $__6.ViewDefinition;
var CompileElement = ($__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_element__ = require("angular2/src/render/dom/compiler/compile_element"), $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_element__ && $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_element__.__esModule && $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_element__ || {default: $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_element__}).CompileElement;
var CompileStep = ($__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_step__ = require("angular2/src/render/dom/compiler/compile_step"), $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_step__ && $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_step__.__esModule && $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_step__ || {default: $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_step__}).CompileStep;
var CompileStepFactory = ($__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_step_95_factory__ = require("angular2/src/render/dom/compiler/compile_step_factory"), $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_step_95_factory__ && $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_step_95_factory__.__esModule && $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_step_95_factory__ || {default: $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_step_95_factory__}).CompileStepFactory;
var CompileControl = ($__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_control__ = require("angular2/src/render/dom/compiler/compile_control"), $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_control__ && $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_control__.__esModule && $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_control__ || {default: $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_control__}).CompileControl;
var TemplateLoader = ($__angular2_47_src_47_render_47_dom_47_compiler_47_template_95_loader__ = require("angular2/src/render/dom/compiler/template_loader"), $__angular2_47_src_47_render_47_dom_47_compiler_47_template_95_loader__ && $__angular2_47_src_47_render_47_dom_47_compiler_47_template_95_loader__.__esModule && $__angular2_47_src_47_render_47_dom_47_compiler_47_template_95_loader__ || {default: $__angular2_47_src_47_render_47_dom_47_compiler_47_template_95_loader__}).TemplateLoader;
var UrlResolver = ($__angular2_47_src_47_services_47_url_95_resolver__ = require("angular2/src/services/url_resolver"), $__angular2_47_src_47_services_47_url_95_resolver__ && $__angular2_47_src_47_services_47_url_95_resolver__.__esModule && $__angular2_47_src_47_services_47_url_95_resolver__ || {default: $__angular2_47_src_47_services_47_url_95_resolver__}).UrlResolver;
function runCompilerCommonTests() {
  describe('compiler', function() {
    var mockStepFactory;
    function createCompiler(processClosure) {
      var urlData = arguments[1] !== (void 0) ? arguments[1] : null;
      if (isBlank(urlData)) {
        urlData = MapWrapper.create();
      }
      var tplLoader = new FakeTemplateLoader(urlData);
      mockStepFactory = new MockStepFactory([new MockStep(processClosure)]);
      return new Compiler(mockStepFactory, tplLoader);
    }
    it('should run the steps and build the AppProtoView of the root element', inject([AsyncTestCompleter], (function(async) {
      var compiler = createCompiler((function(parent, current, control) {
        current.inheritedProtoView.bindVariable('b', 'a');
      }));
      compiler.compile(new ViewDefinition({
        componentId: 'someComponent',
        template: '<div></div>'
      })).then((function(protoView) {
        expect(protoView.variableBindings).toEqual(MapWrapper.createFromStringMap({'a': 'b'}));
        async.done();
      }));
    })));
    it('should use the inline template and compile in sync', inject([AsyncTestCompleter], (function(async) {
      var compiler = createCompiler(EMPTY_STEP);
      compiler.compile(new ViewDefinition({
        componentId: 'someId',
        template: 'inline component'
      })).then((function(protoView) {
        expect(DOM.getInnerHTML(protoView.render.delegate.element)).toEqual('inline component');
        async.done();
      }));
    })));
    it('should load url templates', inject([AsyncTestCompleter], (function(async) {
      var urlData = MapWrapper.createFromStringMap({'someUrl': 'url component'});
      var compiler = createCompiler(EMPTY_STEP, urlData);
      compiler.compile(new ViewDefinition({
        componentId: 'someId',
        absUrl: 'someUrl'
      })).then((function(protoView) {
        expect(DOM.getInnerHTML(protoView.render.delegate.element)).toEqual('url component');
        async.done();
      }));
    })));
    it('should report loading errors', inject([AsyncTestCompleter], (function(async) {
      var compiler = createCompiler(EMPTY_STEP, MapWrapper.create());
      PromiseWrapper.catchError(compiler.compile(new ViewDefinition({
        componentId: 'someId',
        absUrl: 'someUrl'
      })), (function(e) {
        expect(e.message).toContain("Failed to load the template \"someId\"");
        async.done();
      }));
    })));
    it('should wait for async subtasks to be resolved', inject([AsyncTestCompleter], (function(async) {
      var subTasksCompleted = false;
      var completer = PromiseWrapper.completer();
      var compiler = createCompiler((function(parent, current, control) {
        ListWrapper.push(mockStepFactory.subTaskPromises, completer.promise.then((function(_) {
          subTasksCompleted = true;
        })));
      }));
      var pvPromise = compiler.compile(new ViewDefinition({
        componentId: 'someId',
        template: 'some component'
      }));
      expect(pvPromise).toBePromise();
      expect(subTasksCompleted).toEqual(false);
      completer.resolve(null);
      pvPromise.then((function(protoView) {
        expect(subTasksCompleted).toEqual(true);
        async.done();
      }));
    })));
  });
}
var MockStepFactory = function MockStepFactory(steps) {
  $traceurRuntime.superConstructor($MockStepFactory).call(this);
  this.steps = steps;
};
var $MockStepFactory = MockStepFactory;
($traceurRuntime.createClass)(MockStepFactory, {createSteps: function(template, subTaskPromises) {
    this.subTaskPromises = subTaskPromises;
    ListWrapper.forEach(this.subTaskPromises, (function(p) {
      return ListWrapper.push(subTaskPromises, p);
    }));
    return this.steps;
  }}, {}, CompileStepFactory);
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
var EMPTY_STEP = (function(parent, current, control) {
  if (isPresent(parent)) {
    current.inheritedProtoView = parent.inheritedProtoView;
  }
});
var FakeTemplateLoader = function FakeTemplateLoader(urlData) {
  $traceurRuntime.superConstructor($FakeTemplateLoader).call(this, null, new UrlResolver());
  this._urlData = urlData;
};
var $FakeTemplateLoader = FakeTemplateLoader;
($traceurRuntime.createClass)(FakeTemplateLoader, {load: function(template) {
    if (isPresent(template.template)) {
      return PromiseWrapper.resolve(DOM.createTemplate(template.template));
    }
    if (isPresent(template.absUrl)) {
      var content = MapWrapper.get(this._urlData, template.absUrl);
      if (isPresent(content)) {
        return PromiseWrapper.resolve(DOM.createTemplate(content));
      }
    }
    return PromiseWrapper.reject('Load failed');
  }}, {}, TemplateLoader);
Object.defineProperty(FakeTemplateLoader.prototype.load, "parameters", {get: function() {
    return [[ViewDefinition]];
  }});
//# sourceMappingURL=compiler_common_tests.js.map

//# sourceMappingURL=./compiler_common_tests.map