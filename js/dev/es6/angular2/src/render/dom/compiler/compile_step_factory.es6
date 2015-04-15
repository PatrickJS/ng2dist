import {assert} from "rtts_assert/rtts_assert";
import {List} from 'angular2/src/facade/collection';
import {Promise} from 'angular2/src/facade/async';
import {Parser} from 'angular2/change_detection';
import {ViewDefinition} from '../../api';
import {CompileStep} from './compile_step';
import {PropertyBindingParser} from './property_binding_parser';
import {TextInterpolationParser} from './text_interpolation_parser';
import {DirectiveParser} from './directive_parser';
import {ViewSplitter} from './view_splitter';
import {ShadowDomCompileStep} from '../shadow_dom/shadow_dom_compile_step';
import {ShadowDomStrategy} from '../shadow_dom/shadow_dom_strategy';
export class CompileStepFactory {
  createSteps(template, subTaskPromises) {
    assert.argumentTypes(template, ViewDefinition, subTaskPromises, assert.genericType(List, Promise));
    return assert.returnType((null), assert.genericType(List, CompileStep));
  }
}
Object.defineProperty(CompileStepFactory.prototype.createSteps, "parameters", {get: function() {
    return [[ViewDefinition], [assert.genericType(List, Promise)]];
  }});
export class DefaultStepFactory extends CompileStepFactory {
  constructor(parser, shadowDomStrategy) {
    assert.argumentTypes(parser, Parser, shadowDomStrategy, assert.type.any);
    super();
    this._parser = parser;
    this._shadowDomStrategy = shadowDomStrategy;
  }
  createSteps(template, subTaskPromises) {
    assert.argumentTypes(template, ViewDefinition, subTaskPromises, assert.genericType(List, Promise));
    return [new ViewSplitter(this._parser), new PropertyBindingParser(this._parser), new DirectiveParser(this._parser, template.directives), new TextInterpolationParser(this._parser), new ShadowDomCompileStep(this._shadowDomStrategy, template, subTaskPromises)];
  }
}
Object.defineProperty(DefaultStepFactory, "parameters", {get: function() {
    return [[Parser], []];
  }});
Object.defineProperty(DefaultStepFactory.prototype.createSteps, "parameters", {get: function() {
    return [[ViewDefinition], [assert.genericType(List, Promise)]];
  }});
//# sourceMappingURL=compile_step_factory.js.map

//# sourceMappingURL=./compile_step_factory.map