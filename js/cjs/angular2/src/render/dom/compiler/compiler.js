"use strict";
Object.defineProperties(module.exports, {
  Compiler: {get: function() {
      return Compiler;
    }},
  DefaultCompiler: {get: function() {
      return DefaultCompiler;
    }},
  __esModule: {value: true}
});
var $__angular2_47_di__,
    $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_src_47_facade_47_lang__,
    $___46__46__47__46__46__47_api__,
    $__compile_95_pipeline__,
    $__angular2_47_src_47_render_47_dom_47_compiler_47_template_95_loader__,
    $__compile_95_step_95_factory__,
    $__angular2_47_change_95_detection__,
    $___46__46__47_shadow_95_dom_47_shadow_95_dom_95_strategy__;
var Injectable = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}).Injectable;
var $__1 = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
    PromiseWrapper = $__1.PromiseWrapper,
    Promise = $__1.Promise;
var BaseException = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).BaseException;
var $__3 = ($___46__46__47__46__46__47_api__ = require("../../api"), $___46__46__47__46__46__47_api__ && $___46__46__47__46__46__47_api__.__esModule && $___46__46__47__46__46__47_api__ || {default: $___46__46__47__46__46__47_api__}),
    ViewDefinition = $__3.ViewDefinition,
    ProtoViewDto = $__3.ProtoViewDto;
var CompilePipeline = ($__compile_95_pipeline__ = require("./compile_pipeline"), $__compile_95_pipeline__ && $__compile_95_pipeline__.__esModule && $__compile_95_pipeline__ || {default: $__compile_95_pipeline__}).CompilePipeline;
var TemplateLoader = ($__angular2_47_src_47_render_47_dom_47_compiler_47_template_95_loader__ = require("angular2/src/render/dom/compiler/template_loader"), $__angular2_47_src_47_render_47_dom_47_compiler_47_template_95_loader__ && $__angular2_47_src_47_render_47_dom_47_compiler_47_template_95_loader__.__esModule && $__angular2_47_src_47_render_47_dom_47_compiler_47_template_95_loader__ || {default: $__angular2_47_src_47_render_47_dom_47_compiler_47_template_95_loader__}).TemplateLoader;
var $__6 = ($__compile_95_step_95_factory__ = require("./compile_step_factory"), $__compile_95_step_95_factory__ && $__compile_95_step_95_factory__.__esModule && $__compile_95_step_95_factory__ || {default: $__compile_95_step_95_factory__}),
    CompileStepFactory = $__6.CompileStepFactory,
    DefaultStepFactory = $__6.DefaultStepFactory;
var Parser = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}).Parser;
var ShadowDomStrategy = ($___46__46__47_shadow_95_dom_47_shadow_95_dom_95_strategy__ = require("../shadow_dom/shadow_dom_strategy"), $___46__46__47_shadow_95_dom_47_shadow_95_dom_95_strategy__ && $___46__46__47_shadow_95_dom_47_shadow_95_dom_95_strategy__.__esModule && $___46__46__47_shadow_95_dom_47_shadow_95_dom_95_strategy__ || {default: $___46__46__47_shadow_95_dom_47_shadow_95_dom_95_strategy__}).ShadowDomStrategy;
var Compiler = function Compiler(stepFactory, templateLoader) {
  this._templateLoader = templateLoader;
  this._stepFactory = stepFactory;
};
($traceurRuntime.createClass)(Compiler, {
  compile: function(template) {
    var $__9 = this;
    var tplPromise = this._templateLoader.load(template);
    return PromiseWrapper.then(tplPromise, (function(el) {
      return $__9._compileTemplate(template, el);
    }), (function(_) {
      throw new BaseException(("Failed to load the template \"" + template.componentId + "\""));
    }));
  },
  _compileTemplate: function(template, tplElement) {
    var subTaskPromises = [];
    var pipeline = new CompilePipeline(this._stepFactory.createSteps(template, subTaskPromises));
    var compileElements;
    compileElements = pipeline.process(tplElement, template.componentId);
    var protoView = compileElements[0].inheritedProtoView.build();
    if (subTaskPromises.length > 0) {
      return PromiseWrapper.all(subTaskPromises).then((function(_) {
        return protoView;
      }));
    } else {
      return PromiseWrapper.resolve(protoView);
    }
  }
}, {});
Object.defineProperty(Compiler, "parameters", {get: function() {
    return [[CompileStepFactory], [TemplateLoader]];
  }});
Object.defineProperty(Compiler.prototype.compile, "parameters", {get: function() {
    return [[ViewDefinition]];
  }});
Object.defineProperty(Compiler.prototype._compileTemplate, "parameters", {get: function() {
    return [[ViewDefinition], []];
  }});
var DefaultCompiler = function DefaultCompiler(parser, shadowDomStrategy, templateLoader) {
  $traceurRuntime.superConstructor($DefaultCompiler).call(this, new DefaultStepFactory(parser, shadowDomStrategy), templateLoader);
};
var $DefaultCompiler = DefaultCompiler;
($traceurRuntime.createClass)(DefaultCompiler, {}, {}, Compiler);
Object.defineProperty(DefaultCompiler, "annotations", {get: function() {
    return [new Injectable()];
  }});
Object.defineProperty(DefaultCompiler, "parameters", {get: function() {
    return [[Parser], [ShadowDomStrategy], [TemplateLoader]];
  }});
//# sourceMappingURL=compiler.js.map

//# sourceMappingURL=./compiler.map