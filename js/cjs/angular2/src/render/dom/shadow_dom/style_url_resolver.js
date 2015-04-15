"use strict";
Object.defineProperties(module.exports, {
  StyleUrlResolver: {get: function() {
      return StyleUrlResolver;
    }},
  __esModule: {value: true}
});
var $__angular2_47_di__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_services_47_url_95_resolver__;
var Injectable = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}).Injectable;
var $__1 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    RegExp = $__1.RegExp,
    RegExpWrapper = $__1.RegExpWrapper,
    StringWrapper = $__1.StringWrapper;
var UrlResolver = ($__angular2_47_src_47_services_47_url_95_resolver__ = require("angular2/src/services/url_resolver"), $__angular2_47_src_47_services_47_url_95_resolver__ && $__angular2_47_src_47_services_47_url_95_resolver__.__esModule && $__angular2_47_src_47_services_47_url_95_resolver__ || {default: $__angular2_47_src_47_services_47_url_95_resolver__}).UrlResolver;
var StyleUrlResolver = function StyleUrlResolver(resolver) {
  this._resolver = resolver;
};
($traceurRuntime.createClass)(StyleUrlResolver, {
  resolveUrls: function(cssText, baseUrl) {
    cssText = this._replaceUrls(cssText, _cssUrlRe, baseUrl);
    cssText = this._replaceUrls(cssText, _cssImportRe, baseUrl);
    return cssText;
  },
  _replaceUrls: function(cssText, re, baseUrl) {
    var $__3 = this;
    return StringWrapper.replaceAllMapped(cssText, re, (function(m) {
      var pre = m[1];
      var url = StringWrapper.replaceAll(m[2], _quoteRe, '');
      var post = m[3];
      var resolvedUrl = $__3._resolver.resolve(baseUrl, url);
      return pre + "'" + resolvedUrl + "'" + post;
    }));
  }
}, {});
Object.defineProperty(StyleUrlResolver, "annotations", {get: function() {
    return [new Injectable()];
  }});
Object.defineProperty(StyleUrlResolver, "parameters", {get: function() {
    return [[UrlResolver]];
  }});
Object.defineProperty(StyleUrlResolver.prototype.resolveUrls, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [$traceurRuntime.type.string]];
  }});
Object.defineProperty(StyleUrlResolver.prototype._replaceUrls, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [RegExp], [$traceurRuntime.type.string]];
  }});
var _cssUrlRe = RegExpWrapper.create('(url\\()([^)]*)(\\))');
var _cssImportRe = RegExpWrapper.create('(@import[\\s]+(?!url\\())[\'"]([^\'"]*)[\'"](.*;)');
var _quoteRe = RegExpWrapper.create('[\'"]');
//# sourceMappingURL=style_url_resolver.js.map

//# sourceMappingURL=./style_url_resolver.map