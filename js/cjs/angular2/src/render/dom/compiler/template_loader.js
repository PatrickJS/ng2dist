"use strict";
Object.defineProperties(module.exports, {
  TemplateLoader: {get: function() {
      return TemplateLoader;
    }},
  __esModule: {value: true}
});
var $__angular2_47_di__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_services_47_xhr__,
    $___46__46__47__46__46__47_api__,
    $__angular2_47_src_47_services_47_url_95_resolver__;
var Injectable = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}).Injectable;
var $__1 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isBlank = $__1.isBlank,
    isPresent = $__1.isPresent,
    BaseException = $__1.BaseException,
    stringify = $__1.stringify;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    Map = $__2.Map,
    MapWrapper = $__2.MapWrapper,
    StringMapWrapper = $__2.StringMapWrapper,
    StringMap = $__2.StringMap;
var $__3 = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
    PromiseWrapper = $__3.PromiseWrapper,
    Promise = $__3.Promise;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var XHR = ($__angular2_47_src_47_services_47_xhr__ = require("angular2/src/services/xhr"), $__angular2_47_src_47_services_47_xhr__ && $__angular2_47_src_47_services_47_xhr__.__esModule && $__angular2_47_src_47_services_47_xhr__ || {default: $__angular2_47_src_47_services_47_xhr__}).XHR;
var ViewDefinition = ($___46__46__47__46__46__47_api__ = require("../../api"), $___46__46__47__46__46__47_api__ && $___46__46__47__46__46__47_api__.__esModule && $___46__46__47__46__46__47_api__ || {default: $___46__46__47__46__46__47_api__}).ViewDefinition;
var UrlResolver = ($__angular2_47_src_47_services_47_url_95_resolver__ = require("angular2/src/services/url_resolver"), $__angular2_47_src_47_services_47_url_95_resolver__ && $__angular2_47_src_47_services_47_url_95_resolver__.__esModule && $__angular2_47_src_47_services_47_url_95_resolver__ || {default: $__angular2_47_src_47_services_47_url_95_resolver__}).UrlResolver;
var TemplateLoader = function TemplateLoader(xhr, urlResolver) {
  this._xhr = xhr;
  this._htmlCache = StringMapWrapper.create();
};
($traceurRuntime.createClass)(TemplateLoader, {load: function(template) {
    if (isPresent(template.template)) {
      return PromiseWrapper.resolve(DOM.createTemplate(template.template));
    }
    var url = template.absUrl;
    if (isPresent(url)) {
      var promise = StringMapWrapper.get(this._htmlCache, url);
      if (isBlank(promise)) {
        promise = this._xhr.get(url).then(function(html) {
          var template = DOM.createTemplate(html);
          return template;
        });
        StringMapWrapper.set(this._htmlCache, url, promise);
      }
      return promise;
    }
    throw new BaseException('View should have either the url or template property set');
  }}, {});
Object.defineProperty(TemplateLoader, "annotations", {get: function() {
    return [new Injectable()];
  }});
Object.defineProperty(TemplateLoader, "parameters", {get: function() {
    return [[XHR], [UrlResolver]];
  }});
Object.defineProperty(TemplateLoader.prototype.load, "parameters", {get: function() {
    return [[ViewDefinition]];
  }});
//# sourceMappingURL=template_loader.js.map

//# sourceMappingURL=./template_loader.map