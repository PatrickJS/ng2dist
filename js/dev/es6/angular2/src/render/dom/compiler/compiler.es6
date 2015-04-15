import {assert} from "rtts_assert/rtts_assert";
import {Injectable} from 'angular2/di';
import {PromiseWrapper,
  Promise} from 'angular2/src/facade/async';
import {BaseException} from 'angular2/src/facade/lang';
import {ViewDefinition,
  ProtoViewDto} from '../../api';
import {CompilePipeline} from './compile_pipeline';
import {TemplateLoader} from 'angular2/src/render/dom/compiler/template_loader';
import {CompileStepFactory,
  DefaultStepFactory} from './compile_step_factory';
import {Parser} from 'angular2/change_detection';
import {ShadowDomStrategy} from '../shadow_dom/shadow_dom_strategy';
export class Compiler {
  constructor(stepFactory, templateLoader) {
    assert.argumentTypes(stepFactory, CompileStepFactory, templateLoader, TemplateLoader);
    this._templateLoader = templateLoader;
    this._stepFactory = stepFactory;
  }
  compile(template) {
    var tplPromise = this._templateLoader.load(template);
    return assert.returnType((PromiseWrapper.then(tplPromise, (el) => this._compileTemplate(template, el), (_) => {
      throw new BaseException(`Failed to load the template "${template.componentId}"`);
    })), assert.genericType(Promise, ProtoViewDto));
  }
  _compileTemplate(template, tplElement) {
    var subTaskPromises = [];
    var pipeline = new CompilePipeline(this._stepFactory.createSteps(template, subTaskPromises));
    var compileElements;
    compileElements = pipeline.process(tplElement, template.componentId);
    var protoView = compileElements[0].inheritedProtoView.build();
    if (subTaskPromises.length > 0) {
      return assert.returnType((PromiseWrapper.all(subTaskPromises).then((_) => protoView)), assert.genericType(Promise, ProtoViewDto));
    } else {
      return assert.returnType((PromiseWrapper.resolve(protoView)), assert.genericType(Promise, ProtoViewDto));
    }
  }
}
Object.defineProperty(Compiler, "parameters", {get: function() {
    return [[CompileStepFactory], [TemplateLoader]];
  }});
Object.defineProperty(Compiler.prototype.compile, "parameters", {get: function() {
    return [[ViewDefinition]];
  }});
Object.defineProperty(Compiler.prototype._compileTemplate, "parameters", {get: function() {
    return [[ViewDefinition], []];
  }});
export class DefaultCompiler extends Compiler {
  constructor(parser, shadowDomStrategy, templateLoader) {
    assert.argumentTypes(parser, Parser, shadowDomStrategy, ShadowDomStrategy, templateLoader, TemplateLoader);
    super(new DefaultStepFactory(parser, shadowDomStrategy), templateLoader);
  }
}
Object.defineProperty(DefaultCompiler, "annotations", {get: function() {
    return [new Injectable()];
  }});
Object.defineProperty(DefaultCompiler, "parameters", {get: function() {
    return [[Parser], [ShadowDomStrategy], [TemplateLoader]];
  }});
//# sourceMappingURL=compiler.js.map

//# sourceMappingURL=./compiler.map