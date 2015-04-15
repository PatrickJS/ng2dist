"use strict";
Object.defineProperties(module.exports, {
  GenericBrowserDomAdapter: {get: function() {
      return GenericBrowserDomAdapter;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_lang__,
    $__dom_95_adapter__;
var ABSTRACT = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).ABSTRACT;
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__1.List,
    ListWrapper = $__1.ListWrapper;
var $__2 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isPresent = $__2.isPresent,
    isFunction = $__2.isFunction;
var DomAdapter = ($__dom_95_adapter__ = require("./dom_adapter"), $__dom_95_adapter__ && $__dom_95_adapter__.__esModule && $__dom_95_adapter__ || {default: $__dom_95_adapter__}).DomAdapter;
var GenericBrowserDomAdapter = function GenericBrowserDomAdapter() {
  $traceurRuntime.superConstructor($GenericBrowserDomAdapter).apply(this, arguments);
  ;
};
var $GenericBrowserDomAdapter = GenericBrowserDomAdapter;
($traceurRuntime.createClass)(GenericBrowserDomAdapter, {
  getDistributedNodes: function(el) {
    return el.getDistributedNodes();
  },
  resolveAndSetHref: function(el, baseUrl, href) {
    el.href = href == null ? baseUrl : baseUrl + '/../' + href;
  },
  cssToRules: function(css) {
    var style = this.createStyleElement(css);
    this.appendChild(this.defaultDoc().head, style);
    var rules = ListWrapper.create();
    if (isPresent(style.sheet)) {
      try {
        var rawRules = style.sheet.cssRules;
        rules = ListWrapper.createFixedSize(rawRules.length);
        for (var i = 0; i < rawRules.length; i++) {
          rules[i] = rawRules[i];
        }
      } catch (e) {}
    } else {}
    this.remove(style);
    return rules;
  },
  supportsDOMEvents: function() {
    return true;
  },
  supportsNativeShadowDOM: function() {
    return isFunction(this.defaultDoc().body.createShadowRoot);
  }
}, {}, DomAdapter);
Object.defineProperty(GenericBrowserDomAdapter, "annotations", {get: function() {
    return [new ABSTRACT()];
  }});
Object.defineProperty(GenericBrowserDomAdapter.prototype.resolveAndSetHref, "parameters", {get: function() {
    return [[], [$traceurRuntime.type.string], [$traceurRuntime.type.string]];
  }});
Object.defineProperty(GenericBrowserDomAdapter.prototype.cssToRules, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
//# sourceMappingURL=generic_browser_adapter.js.map

//# sourceMappingURL=./generic_browser_adapter.map