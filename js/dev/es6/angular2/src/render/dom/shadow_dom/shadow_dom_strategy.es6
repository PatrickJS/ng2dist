import {assert} from "rtts_assert/rtts_assert";
import {isBlank,
  isPresent} from 'angular2/src/facade/lang';
import {Promise} from 'angular2/src/facade/async';
import * as viewModule from '../view/view';
import {LightDom} from './light_dom';
export class ShadowDomStrategy {
  hasNativeContentElement() {
    return assert.returnType((true), assert.type.boolean);
  }
  attachTemplate(el, view) {
    assert.argumentTypes(el, assert.type.any, view, viewModule.RenderView);
  }
  constructLightDom(lightDomView, shadowDomView, el) {
    assert.argumentTypes(lightDomView, viewModule.RenderView, shadowDomView, viewModule.RenderView, el, assert.type.any);
    return assert.returnType((null), LightDom);
  }
  processStyleElement(hostComponentId, templateUrl, styleElement) {
    assert.argumentTypes(hostComponentId, assert.type.string, templateUrl, assert.type.string, styleElement, assert.type.any);
    return assert.returnType((null), Promise);
  }
  processElement(hostComponentId, elementComponentId, element) {
    assert.argumentTypes(hostComponentId, assert.type.string, elementComponentId, assert.type.string, element, assert.type.any);
  }
}
Object.defineProperty(ShadowDomStrategy.prototype.attachTemplate, "parameters", {get: function() {
    return [[], [viewModule.RenderView]];
  }});
Object.defineProperty(ShadowDomStrategy.prototype.constructLightDom, "parameters", {get: function() {
    return [[viewModule.RenderView], [viewModule.RenderView], []];
  }});
Object.defineProperty(ShadowDomStrategy.prototype.processStyleElement, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string], []];
  }});
Object.defineProperty(ShadowDomStrategy.prototype.processElement, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string], []];
  }});
//# sourceMappingURL=shadow_dom_strategy.js.map

//# sourceMappingURL=./shadow_dom_strategy.map