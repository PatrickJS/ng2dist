import {assert} from "rtts_assert/rtts_assert";
import {Injectable} from 'angular2/di';
import {isBlank,
  isPresent,
  BaseException,
  stringify} from 'angular2/src/facade/lang';
import {Map,
  MapWrapper,
  StringMapWrapper,
  StringMap} from 'angular2/src/facade/collection';
import {PromiseWrapper,
  Promise} from 'angular2/src/facade/async';
import {DOM} from 'angular2/src/dom/dom_adapter';
import {XHR} from 'angular2/src/services/xhr';
import {ViewDefinition} from '../../api';
import {UrlResolver} from 'angular2/src/services/url_resolver';
export class TemplateLoader {
  constructor(xhr, urlResolver) {
    assert.argumentTypes(xhr, XHR, urlResolver, UrlResolver);
    this._xhr = xhr;
    this._htmlCache = StringMapWrapper.create();
  }
  load(template) {
    assert.argumentTypes(template, ViewDefinition);
    if (isPresent(template.template)) {
      return assert.returnType((PromiseWrapper.resolve(DOM.createTemplate(template.template))), Promise);
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
      return assert.returnType((promise), Promise);
    }
    throw new BaseException('View should have either the url or template property set');
  }
}
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