import {assert} from "rtts_assert/rtts_assert";
import {Promise} from 'angular2/src/facade/async';
import {DOM} from 'angular2/src/dom/dom_adapter';
import * as viewModule from '../view/view';
import {LightDom} from './light_dom';
import {ShadowDomStrategy} from './shadow_dom_strategy';
import {StyleUrlResolver} from './style_url_resolver';
import {moveViewNodesIntoParent} from './util';
import {insertSharedStyleText} from './util';
export class EmulatedUnscopedShadowDomStrategy extends ShadowDomStrategy {
  constructor(styleUrlResolver, styleHost) {
    assert.argumentTypes(styleUrlResolver, StyleUrlResolver, styleHost, assert.type.any);
    super();
    this.styleUrlResolver = styleUrlResolver;
    this.styleHost = styleHost;
  }
  hasNativeContentElement() {
    return assert.returnType((false), assert.type.boolean);
  }
  attachTemplate(el, view) {
    assert.argumentTypes(el, assert.type.any, view, viewModule.RenderView);
    DOM.clearNodes(el);
    moveViewNodesIntoParent(el, view);
  }
  constructLightDom(lightDomView, shadowDomView, el) {
    assert.argumentTypes(lightDomView, viewModule.RenderView, shadowDomView, viewModule.RenderView, el, assert.type.any);
    return assert.returnType((new LightDom(lightDomView, shadowDomView, el)), LightDom);
  }
  processStyleElement(hostComponentId, templateUrl, styleEl) {
    assert.argumentTypes(hostComponentId, assert.type.string, templateUrl, assert.type.string, styleEl, assert.type.any);
    var cssText = DOM.getText(styleEl);
    cssText = this.styleUrlResolver.resolveUrls(cssText, templateUrl);
    DOM.setText(styleEl, cssText);
    DOM.remove(styleEl);
    insertSharedStyleText(cssText, this.styleHost, styleEl);
    return assert.returnType((null), Promise);
  }
}
Object.defineProperty(EmulatedUnscopedShadowDomStrategy, "parameters", {get: function() {
    return [[StyleUrlResolver], []];
  }});
Object.defineProperty(EmulatedUnscopedShadowDomStrategy.prototype.attachTemplate, "parameters", {get: function() {
    return [[], [viewModule.RenderView]];
  }});
Object.defineProperty(EmulatedUnscopedShadowDomStrategy.prototype.constructLightDom, "parameters", {get: function() {
    return [[viewModule.RenderView], [viewModule.RenderView], []];
  }});
Object.defineProperty(EmulatedUnscopedShadowDomStrategy.prototype.processStyleElement, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string], []];
  }});
//# sourceMappingURL=emulated_unscoped_shadow_dom_strategy.js.map

//# sourceMappingURL=./emulated_unscoped_shadow_dom_strategy.map