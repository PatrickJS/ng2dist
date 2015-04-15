"use strict";
Object.defineProperties(module.exports, {
  ShadowDomStrategy: {get: function() {
      return ShadowDomStrategy;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_async__,
    $___46__46__47_view_47_view__,
    $__light_95_dom__;
var $__0 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isBlank = $__0.isBlank,
    isPresent = $__0.isPresent;
var Promise = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}).Promise;
var viewModule = ($___46__46__47_view_47_view__ = require("../view/view"), $___46__46__47_view_47_view__ && $___46__46__47_view_47_view__.__esModule && $___46__46__47_view_47_view__ || {default: $___46__46__47_view_47_view__});
var LightDom = ($__light_95_dom__ = require("./light_dom"), $__light_95_dom__ && $__light_95_dom__.__esModule && $__light_95_dom__ || {default: $__light_95_dom__}).LightDom;
var ShadowDomStrategy = function ShadowDomStrategy() {
  ;
};
($traceurRuntime.createClass)(ShadowDomStrategy, {
  hasNativeContentElement: function() {
    return true;
  },
  attachTemplate: function(el, view) {},
  constructLightDom: function(lightDomView, shadowDomView, el) {
    return null;
  },
  processStyleElement: function(hostComponentId, templateUrl, styleElement) {
    return null;
  },
  processElement: function(hostComponentId, elementComponentId, element) {}
}, {});
Object.defineProperty(ShadowDomStrategy.prototype.attachTemplate, "parameters", {get: function() {
    return [[], [viewModule.RenderView]];
  }});
Object.defineProperty(ShadowDomStrategy.prototype.constructLightDom, "parameters", {get: function() {
    return [[viewModule.RenderView], [viewModule.RenderView], []];
  }});
Object.defineProperty(ShadowDomStrategy.prototype.processStyleElement, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [$traceurRuntime.type.string], []];
  }});
Object.defineProperty(ShadowDomStrategy.prototype.processElement, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [$traceurRuntime.type.string], []];
  }});
//# sourceMappingURL=shadow_dom_strategy.js.map

//# sourceMappingURL=./shadow_dom_strategy.map