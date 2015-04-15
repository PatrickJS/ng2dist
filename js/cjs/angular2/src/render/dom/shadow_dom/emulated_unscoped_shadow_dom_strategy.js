"use strict";
Object.defineProperties(module.exports, {
  EmulatedUnscopedShadowDomStrategy: {get: function() {
      return EmulatedUnscopedShadowDomStrategy;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $___46__46__47_view_47_view__,
    $__light_95_dom__,
    $__shadow_95_dom_95_strategy__,
    $__style_95_url_95_resolver__,
    $__util__,
    $__util__;
var Promise = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}).Promise;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var viewModule = ($___46__46__47_view_47_view__ = require("../view/view"), $___46__46__47_view_47_view__ && $___46__46__47_view_47_view__.__esModule && $___46__46__47_view_47_view__ || {default: $___46__46__47_view_47_view__});
var LightDom = ($__light_95_dom__ = require("./light_dom"), $__light_95_dom__ && $__light_95_dom__.__esModule && $__light_95_dom__ || {default: $__light_95_dom__}).LightDom;
var ShadowDomStrategy = ($__shadow_95_dom_95_strategy__ = require("./shadow_dom_strategy"), $__shadow_95_dom_95_strategy__ && $__shadow_95_dom_95_strategy__.__esModule && $__shadow_95_dom_95_strategy__ || {default: $__shadow_95_dom_95_strategy__}).ShadowDomStrategy;
var StyleUrlResolver = ($__style_95_url_95_resolver__ = require("./style_url_resolver"), $__style_95_url_95_resolver__ && $__style_95_url_95_resolver__.__esModule && $__style_95_url_95_resolver__ || {default: $__style_95_url_95_resolver__}).StyleUrlResolver;
var moveViewNodesIntoParent = ($__util__ = require("./util"), $__util__ && $__util__.__esModule && $__util__ || {default: $__util__}).moveViewNodesIntoParent;
var insertSharedStyleText = ($__util__ = require("./util"), $__util__ && $__util__.__esModule && $__util__ || {default: $__util__}).insertSharedStyleText;
var EmulatedUnscopedShadowDomStrategy = function EmulatedUnscopedShadowDomStrategy(styleUrlResolver, styleHost) {
  $traceurRuntime.superConstructor($EmulatedUnscopedShadowDomStrategy).call(this);
  this.styleUrlResolver = styleUrlResolver;
  this.styleHost = styleHost;
};
var $EmulatedUnscopedShadowDomStrategy = EmulatedUnscopedShadowDomStrategy;
($traceurRuntime.createClass)(EmulatedUnscopedShadowDomStrategy, {
  hasNativeContentElement: function() {
    return false;
  },
  attachTemplate: function(el, view) {
    DOM.clearNodes(el);
    moveViewNodesIntoParent(el, view);
  },
  constructLightDom: function(lightDomView, shadowDomView, el) {
    return new LightDom(lightDomView, shadowDomView, el);
  },
  processStyleElement: function(hostComponentId, templateUrl, styleEl) {
    var cssText = DOM.getText(styleEl);
    cssText = this.styleUrlResolver.resolveUrls(cssText, templateUrl);
    DOM.setText(styleEl, cssText);
    DOM.remove(styleEl);
    insertSharedStyleText(cssText, this.styleHost, styleEl);
    return null;
  }
}, {}, ShadowDomStrategy);
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
    return [[$traceurRuntime.type.string], [$traceurRuntime.type.string], []];
  }});
//# sourceMappingURL=emulated_unscoped_shadow_dom_strategy.js.map

//# sourceMappingURL=./emulated_unscoped_shadow_dom_strategy.map