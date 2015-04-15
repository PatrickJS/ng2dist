import {IMPLEMENTS,
  print} from 'angular2/src/facade/lang';
import {UrlResolver} from 'angular2/src/services/url_resolver';
import {isPresent,
  isBlank,
  RegExpWrapper,
  StringWrapper,
  BaseException} from 'angular2/src/facade/lang';
import {DOM} from 'angular2/src/dom/dom_adapter';
import {Injectable} from 'angular2/di';
import {ReflectionCapabilities} from 'angular2/src/reflection/reflection_capabilities';
import {reflector} from 'angular2/src/reflection/reflection';
import {BrowserDomAdapter} from 'angular2/src/dom/browser_adapter';
export function commonDemoSetup() {
  BrowserDomAdapter.makeCurrent();
  reflector.reflectionCapabilities = new ReflectionCapabilities();
}
export class DemoUrlResolver {
  constructor() {
    if (isBlank(UrlResolver.a)) {
      UrlResolver.a = DOM.createElement('a');
    }
    this.isInPubServe = _isInPubServe();
  }
  resolve(baseUrl, url) {
    if (isBlank(baseUrl)) {
      DOM.resolveAndSetHref(UrlResolver.a, url, null);
      return DOM.getHref(UrlResolver.a);
    }
    if (isBlank(url) || url == '')
      return baseUrl;
    if (url[0] == '/') {
      throw new BaseException(`Could not resolve the url ${url} from ${baseUrl}`);
    }
    var m = RegExpWrapper.firstMatch(_schemeRe, url);
    if (isPresent(m[1])) {
      return url;
    }
    if (StringWrapper.startsWith(url, './')) {
      return `${baseUrl}/${url}`;
    }
    if (this.isInPubServe) {
      return `/packages/${url}`;
    } else {
      return `/${url}`;
    }
  }
}
Object.defineProperty(DemoUrlResolver, "annotations", {get: function() {
    return [new Injectable(), new IMPLEMENTS(UrlResolver)];
  }});
Object.defineProperty(DemoUrlResolver.prototype.resolve, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string]];
  }});
var _schemeRe = RegExpWrapper.create('^([^:/?#]+:)?');
function _isInPubServe() {
  try {
    int.parse('123');
    print('>> Running in Dart');
    return true;
  } catch (_) {
    print('>> Running in JS');
    return false;
  }
}
//# sourceMappingURL=demo_common.js.map

//# sourceMappingURL=./demo_common.map