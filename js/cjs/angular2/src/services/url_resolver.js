"use strict";
Object.defineProperties(module.exports, {
  UrlResolver: {get: function() {
      return UrlResolver;
    }},
  __esModule: {value: true}
});
var $__angular2_47_di__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__;
var Injectable = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}).Injectable;
var $__1 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isPresent = $__1.isPresent,
    isBlank = $__1.isBlank,
    RegExpWrapper = $__1.RegExpWrapper,
    BaseException = $__1.BaseException;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var UrlResolver = function UrlResolver() {
  if (isBlank($UrlResolver.a)) {
    $UrlResolver.a = DOM.createElement('a');
  }
};
var $UrlResolver = UrlResolver;
($traceurRuntime.createClass)(UrlResolver, {resolve: function(baseUrl, url) {
    if (isBlank(baseUrl)) {
      DOM.resolveAndSetHref($UrlResolver.a, url, null);
      return DOM.getHref($UrlResolver.a);
    }
    if (isBlank(url) || url == '')
      return baseUrl;
    if (url[0] == '/') {
      throw new BaseException(("Could not resolve the url " + url + " from " + baseUrl));
    }
    var m = RegExpWrapper.firstMatch(_schemeRe, url);
    if (isPresent(m[1])) {
      return url;
    }
    DOM.resolveAndSetHref($UrlResolver.a, baseUrl, url);
    return DOM.getHref($UrlResolver.a);
  }}, {});
Object.defineProperty(UrlResolver, "annotations", {get: function() {
    return [new Injectable()];
  }});
Object.defineProperty(UrlResolver.prototype.resolve, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [$traceurRuntime.type.string]];
  }});
var _schemeRe = RegExpWrapper.create('^([^:/?#]+:)?');
//# sourceMappingURL=url_resolver.js.map

//# sourceMappingURL=./url_resolver.map