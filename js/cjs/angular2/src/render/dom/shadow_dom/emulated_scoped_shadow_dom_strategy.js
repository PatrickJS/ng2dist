"use strict";
Object.defineProperties(module.exports, {
  EmulatedScopedShadowDomStrategy: {get: function() {
      return EmulatedScopedShadowDomStrategy;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_inliner__,
    $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_url_95_resolver__,
    $__emulated_95_unscoped_95_shadow_95_dom_95_strategy__,
    $__util__;
var $__0 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isBlank = $__0.isBlank,
    isPresent = $__0.isPresent;
var $__1 = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
    PromiseWrapper = $__1.PromiseWrapper,
    Promise = $__1.Promise;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var StyleInliner = ($__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_inliner__ = require("angular2/src/render/dom/shadow_dom/style_inliner"), $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_inliner__ && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_inliner__.__esModule && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_inliner__ || {default: $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_inliner__}).StyleInliner;
var StyleUrlResolver = ($__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_url_95_resolver__ = require("angular2/src/render/dom/shadow_dom/style_url_resolver"), $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_url_95_resolver__ && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_url_95_resolver__.__esModule && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_url_95_resolver__ || {default: $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_url_95_resolver__}).StyleUrlResolver;
var EmulatedUnscopedShadowDomStrategy = ($__emulated_95_unscoped_95_shadow_95_dom_95_strategy__ = require("./emulated_unscoped_shadow_dom_strategy"), $__emulated_95_unscoped_95_shadow_95_dom_95_strategy__ && $__emulated_95_unscoped_95_shadow_95_dom_95_strategy__.__esModule && $__emulated_95_unscoped_95_shadow_95_dom_95_strategy__ || {default: $__emulated_95_unscoped_95_shadow_95_dom_95_strategy__}).EmulatedUnscopedShadowDomStrategy;
var $__6 = ($__util__ = require("./util"), $__util__ && $__util__.__esModule && $__util__ || {default: $__util__}),
    getContentAttribute = $__6.getContentAttribute,
    getHostAttribute = $__6.getHostAttribute,
    getComponentId = $__6.getComponentId,
    shimCssForComponent = $__6.shimCssForComponent,
    insertStyleElement = $__6.insertStyleElement;
var EmulatedScopedShadowDomStrategy = function EmulatedScopedShadowDomStrategy(styleInliner, styleUrlResolver, styleHost) {
  $traceurRuntime.superConstructor($EmulatedScopedShadowDomStrategy).call(this, styleUrlResolver, styleHost);
  this.styleInliner = styleInliner;
};
var $EmulatedScopedShadowDomStrategy = EmulatedScopedShadowDomStrategy;
($traceurRuntime.createClass)(EmulatedScopedShadowDomStrategy, {
  processStyleElement: function(hostComponentId, templateUrl, styleEl) {
    var cssText = DOM.getText(styleEl);
    cssText = this.styleUrlResolver.resolveUrls(cssText, templateUrl);
    var css = this.styleInliner.inlineImports(cssText, templateUrl);
    if (PromiseWrapper.isPromise(css)) {
      DOM.setText(styleEl, '');
      return css.then((function(css) {
        css = shimCssForComponent(css, hostComponentId);
        DOM.setText(styleEl, css);
      }));
    } else {
      css = shimCssForComponent(css, hostComponentId);
      DOM.setText(styleEl, css);
    }
    DOM.remove(styleEl);
    insertStyleElement(this.styleHost, styleEl);
    return null;
  },
  processElement: function(hostComponentId, elementComponentId, element) {
    if (isPresent(hostComponentId)) {
      var contentAttribute = getContentAttribute(getComponentId(hostComponentId));
      DOM.setAttribute(element, contentAttribute, '');
    }
    if (isPresent(elementComponentId)) {
      var hostAttribute = getHostAttribute(getComponentId(elementComponentId));
      DOM.setAttribute(element, hostAttribute, '');
    }
  }
}, {}, EmulatedUnscopedShadowDomStrategy);
Object.defineProperty(EmulatedScopedShadowDomStrategy, "parameters", {get: function() {
    return [[StyleInliner], [StyleUrlResolver], []];
  }});
Object.defineProperty(EmulatedScopedShadowDomStrategy.prototype.processStyleElement, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [$traceurRuntime.type.string], []];
  }});
Object.defineProperty(EmulatedScopedShadowDomStrategy.prototype.processElement, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [$traceurRuntime.type.string], []];
  }});
//# sourceMappingURL=emulated_scoped_shadow_dom_strategy.js.map

//# sourceMappingURL=./emulated_scoped_shadow_dom_strategy.map