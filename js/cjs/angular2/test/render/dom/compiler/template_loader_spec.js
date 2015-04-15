'use strict'; var parse5Adapter = require('angular2/src/dom/parse5_adapter'); parse5Adapter.Parse5DomAdapter.makeCurrent();
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_render_47_dom_47_compiler_47_template_95_loader__,
    $__angular2_47_src_47_services_47_url_95_resolver__,
    $__angular2_47_src_47_render_47_api__,
    $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_src_47_mock_47_xhr_95_mock__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    AsyncTestCompleter = $__0.AsyncTestCompleter,
    beforeEach = $__0.beforeEach,
    ddescribe = $__0.ddescribe,
    describe = $__0.describe,
    el = $__0.el,
    expect = $__0.expect,
    iit = $__0.iit,
    inject = $__0.inject,
    it = $__0.it,
    xit = $__0.xit;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var TemplateLoader = ($__angular2_47_src_47_render_47_dom_47_compiler_47_template_95_loader__ = require("angular2/src/render/dom/compiler/template_loader"), $__angular2_47_src_47_render_47_dom_47_compiler_47_template_95_loader__ && $__angular2_47_src_47_render_47_dom_47_compiler_47_template_95_loader__.__esModule && $__angular2_47_src_47_render_47_dom_47_compiler_47_template_95_loader__ || {default: $__angular2_47_src_47_render_47_dom_47_compiler_47_template_95_loader__}).TemplateLoader;
var UrlResolver = ($__angular2_47_src_47_services_47_url_95_resolver__ = require("angular2/src/services/url_resolver"), $__angular2_47_src_47_services_47_url_95_resolver__ && $__angular2_47_src_47_services_47_url_95_resolver__.__esModule && $__angular2_47_src_47_services_47_url_95_resolver__ || {default: $__angular2_47_src_47_services_47_url_95_resolver__}).UrlResolver;
var ViewDefinition = ($__angular2_47_src_47_render_47_api__ = require("angular2/src/render/api"), $__angular2_47_src_47_render_47_api__ && $__angular2_47_src_47_render_47_api__.__esModule && $__angular2_47_src_47_render_47_api__ || {default: $__angular2_47_src_47_render_47_api__}).ViewDefinition;
var PromiseWrapper = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}).PromiseWrapper;
var MockXHR = ($__angular2_47_src_47_mock_47_xhr_95_mock__ = require("angular2/src/mock/xhr_mock"), $__angular2_47_src_47_mock_47_xhr_95_mock__ && $__angular2_47_src_47_mock_47_xhr_95_mock__.__esModule && $__angular2_47_src_47_mock_47_xhr_95_mock__ || {default: $__angular2_47_src_47_mock_47_xhr_95_mock__}).MockXHR;
function main() {
  describe('TemplateLoader', (function() {
    var loader,
        xhr;
    beforeEach((function() {
      xhr = new MockXHR();
      loader = new TemplateLoader(xhr, new FakeUrlResolver());
    }));
    it('should load inline templates', inject([AsyncTestCompleter], (function(async) {
      var template = new ViewDefinition({template: 'template template'});
      loader.load(template).then((function(el) {
        expect(DOM.content(el)).toHaveText('template template');
        async.done();
      }));
    })));
    it('should load templates through XHR', inject([AsyncTestCompleter], (function(async) {
      xhr.expect('base/foo', 'xhr template');
      var template = new ViewDefinition({absUrl: 'base/foo'});
      loader.load(template).then((function(el) {
        expect(DOM.content(el)).toHaveText('xhr template');
        async.done();
      }));
      xhr.flush();
    })));
    it('should cache template loaded through XHR', inject([AsyncTestCompleter], (function(async) {
      var firstEl;
      xhr.expect('base/foo', 'xhr template');
      var template = new ViewDefinition({absUrl: 'base/foo'});
      loader.load(template).then((function(el) {
        firstEl = el;
        return loader.load(template);
      })).then((function(el) {
        expect(el).toBe(firstEl);
        expect(DOM.content(el)).toHaveText('xhr template');
        async.done();
      }));
      xhr.flush();
    })));
    it('should throw when no template is defined', (function() {
      var template = new ViewDefinition({
        template: null,
        absUrl: null
      });
      expect((function() {
        return loader.load(template);
      })).toThrowError('View should have either the url or template property set');
    }));
    it('should return a rejected Promise when xhr loading fails', inject([AsyncTestCompleter], (function(async) {
      xhr.expect('base/foo', null);
      var template = new ViewDefinition({absUrl: 'base/foo'});
      PromiseWrapper.then(loader.load(template), function(_) {
        throw 'Unexpected response';
      }, function(error) {
        expect(error).toEqual('Failed to load base/foo');
        async.done();
      });
      xhr.flush();
    })));
  }));
}
var SomeComponent = function SomeComponent() {
  ;
};
($traceurRuntime.createClass)(SomeComponent, {}, {});
var FakeUrlResolver = function FakeUrlResolver() {
  $traceurRuntime.superConstructor($FakeUrlResolver).call(this);
};
var $FakeUrlResolver = FakeUrlResolver;
($traceurRuntime.createClass)(FakeUrlResolver, {resolve: function(baseUrl, url) {
    return baseUrl + url;
  }}, {}, UrlResolver);
Object.defineProperty(FakeUrlResolver.prototype.resolve, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [$traceurRuntime.type.string]];
  }});
//# sourceMappingURL=template_loader_spec.js.map

//# sourceMappingURL=./template_loader_spec.map
 main();