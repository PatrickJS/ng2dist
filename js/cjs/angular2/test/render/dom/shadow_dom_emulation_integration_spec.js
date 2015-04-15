'use strict'; var parse5Adapter = require('angular2/src/dom/parse5_adapter'); parse5Adapter.Parse5DomAdapter.makeCurrent();
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_render_47_api__,
    $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_emulated_95_scoped_95_shadow_95_dom_95_strategy__,
    $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_emulated_95_unscoped_95_shadow_95_dom_95_strategy__,
    $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_native_95_shadow_95_dom_95_strategy__,
    $__angular2_47_src_47_services_47_url_95_resolver__,
    $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_url_95_resolver__,
    $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_inliner__,
    $__integration_95_testbed__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    AsyncTestCompleter = $__0.AsyncTestCompleter,
    beforeEach = $__0.beforeEach,
    ddescribe = $__0.ddescribe,
    describe = $__0.describe,
    el = $__0.el,
    elementText = $__0.elementText,
    expect = $__0.expect,
    iit = $__0.iit,
    inject = $__0.inject,
    it = $__0.it,
    xit = $__0.xit,
    SpyObject = $__0.SpyObject;
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    MapWrapper = $__1.MapWrapper,
    ListWrapper = $__1.ListWrapper,
    StringMapWrapper = $__1.StringMapWrapper;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var $__3 = ($__angular2_47_src_47_render_47_api__ = require("angular2/src/render/api"), $__angular2_47_src_47_render_47_api__ && $__angular2_47_src_47_render_47_api__.__esModule && $__angular2_47_src_47_render_47_api__ || {default: $__angular2_47_src_47_render_47_api__}),
    ProtoViewDto = $__3.ProtoViewDto,
    ViewDefinition = $__3.ViewDefinition,
    ViewContainerRef = $__3.ViewContainerRef,
    DirectiveMetadata = $__3.DirectiveMetadata;
var EmulatedScopedShadowDomStrategy = ($__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_emulated_95_scoped_95_shadow_95_dom_95_strategy__ = require("angular2/src/render/dom/shadow_dom/emulated_scoped_shadow_dom_strategy"), $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_emulated_95_scoped_95_shadow_95_dom_95_strategy__ && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_emulated_95_scoped_95_shadow_95_dom_95_strategy__.__esModule && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_emulated_95_scoped_95_shadow_95_dom_95_strategy__ || {default: $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_emulated_95_scoped_95_shadow_95_dom_95_strategy__}).EmulatedScopedShadowDomStrategy;
var EmulatedUnscopedShadowDomStrategy = ($__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_emulated_95_unscoped_95_shadow_95_dom_95_strategy__ = require("angular2/src/render/dom/shadow_dom/emulated_unscoped_shadow_dom_strategy"), $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_emulated_95_unscoped_95_shadow_95_dom_95_strategy__ && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_emulated_95_unscoped_95_shadow_95_dom_95_strategy__.__esModule && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_emulated_95_unscoped_95_shadow_95_dom_95_strategy__ || {default: $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_emulated_95_unscoped_95_shadow_95_dom_95_strategy__}).EmulatedUnscopedShadowDomStrategy;
var NativeShadowDomStrategy = ($__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_native_95_shadow_95_dom_95_strategy__ = require("angular2/src/render/dom/shadow_dom/native_shadow_dom_strategy"), $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_native_95_shadow_95_dom_95_strategy__ && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_native_95_shadow_95_dom_95_strategy__.__esModule && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_native_95_shadow_95_dom_95_strategy__ || {default: $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_native_95_shadow_95_dom_95_strategy__}).NativeShadowDomStrategy;
var UrlResolver = ($__angular2_47_src_47_services_47_url_95_resolver__ = require("angular2/src/services/url_resolver"), $__angular2_47_src_47_services_47_url_95_resolver__ && $__angular2_47_src_47_services_47_url_95_resolver__.__esModule && $__angular2_47_src_47_services_47_url_95_resolver__ || {default: $__angular2_47_src_47_services_47_url_95_resolver__}).UrlResolver;
var StyleUrlResolver = ($__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_url_95_resolver__ = require("angular2/src/render/dom/shadow_dom/style_url_resolver"), $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_url_95_resolver__ && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_url_95_resolver__.__esModule && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_url_95_resolver__ || {default: $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_url_95_resolver__}).StyleUrlResolver;
var StyleInliner = ($__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_inliner__ = require("angular2/src/render/dom/shadow_dom/style_inliner"), $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_inliner__ && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_inliner__.__esModule && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_inliner__ || {default: $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_inliner__}).StyleInliner;
var IntegrationTestbed = ($__integration_95_testbed__ = require("./integration_testbed"), $__integration_95_testbed__ && $__integration_95_testbed__.__esModule && $__integration_95_testbed__ || {default: $__integration_95_testbed__}).IntegrationTestbed;
function main() {
  describe('ShadowDom integration tests', function() {
    var urlResolver,
        styleUrlResolver,
        styleInliner;
    var strategies = {
      "scoped": (function() {
        return new EmulatedScopedShadowDomStrategy(styleInliner, styleUrlResolver, null);
      }),
      "unscoped": (function() {
        return new EmulatedUnscopedShadowDomStrategy(styleUrlResolver, null);
      })
    };
    if (DOM.supportsNativeShadowDOM()) {
      StringMapWrapper.set(strategies, "native", (function() {
        return new NativeShadowDomStrategy(styleUrlResolver);
      }));
    }
    beforeEach((function() {
      urlResolver = new UrlResolver();
      styleUrlResolver = new StyleUrlResolver(urlResolver);
      styleInliner = new StyleInliner(null, styleUrlResolver, urlResolver);
    }));
    StringMapWrapper.forEach(strategies, (function(strategyFactory, name) {
      describe((name + " shadow dom strategy"), (function() {
        var testbed,
            renderer,
            rootEl,
            compile,
            compileRoot;
        function createRenderer($__11) {
          var templates = $__11.templates;
          testbed = new IntegrationTestbed({
            shadowDomStrategy: strategyFactory(),
            templates: ListWrapper.concat(templates, componentTemplates)
          });
          renderer = testbed.renderer;
          compileRoot = (function(rootEl, componentId) {
            return testbed.compileRoot(rootEl, componentId);
          });
          compile = (function(componentId) {
            return testbed.compile(componentId);
          });
        }
        beforeEach((function() {
          rootEl = el('<div></div>');
        }));
        it('should support simple components', inject([AsyncTestCompleter], (function(async) {
          createRenderer({templates: [new ViewDefinition({
              componentId: 'main',
              template: '<simple>' + '<div>A</div>' + '</simple>',
              directives: [simple]
            })]});
          compileRoot(rootEl, 'main').then((function(pv) {
            renderer.createView(pv.render);
            expect(rootEl).toHaveText('SIMPLE(A)');
            async.done();
          }));
        })));
        it('should support dynamic components', inject([AsyncTestCompleter], (function(async) {
          createRenderer({templates: [new ViewDefinition({
              componentId: 'main',
              template: '<dynamic>' + '<div>A</div>' + '</dynamic>',
              directives: [dynamicComponent]
            })]});
          compileRoot(rootEl, 'main').then((function(rootPv) {
            compile('simple').then((function(simplePv) {
              var views = renderer.createView(rootPv.render);
              var simpleViews = renderer.createView(simplePv.render);
              renderer.setDynamicComponentView(views[1], 0, simpleViews[0]);
              expect(rootEl).toHaveText('SIMPLE(A)');
              async.done();
            }));
          }));
        })));
        it('should support multiple content tags', inject([AsyncTestCompleter], (function(async) {
          createRenderer({templates: [new ViewDefinition({
              componentId: 'main',
              template: '<multiple-content-tags>' + '<div>B</div>' + '<div>C</div>' + '<div class="left">A</div>' + '</multiple-content-tags>',
              directives: [multipleContentTagsComponent]
            })]});
          compileRoot(rootEl, 'main').then((function(pv) {
            renderer.createView(pv.render);
            expect(rootEl).toHaveText('(A, BC)');
            async.done();
          }));
        })));
        it('should redistribute only direct children', inject([AsyncTestCompleter], (function(async) {
          createRenderer({templates: [new ViewDefinition({
              componentId: 'main',
              template: '<multiple-content-tags>' + '<div>B<div class="left">A</div></div>' + '<div>C</div>' + '</multiple-content-tags>',
              directives: [multipleContentTagsComponent]
            })]});
          compileRoot(rootEl, 'main').then((function(pv) {
            renderer.createView(pv.render);
            expect(rootEl).toHaveText('(, BAC)');
            async.done();
          }));
        })));
        it("should redistribute direct child viewcontainers when the light dom changes", inject([AsyncTestCompleter], (function(async) {
          createRenderer({templates: [new ViewDefinition({
              componentId: 'main',
              template: '<multiple-content-tags>' + '<div><div template="manual" class="left">A</div></div>' + '<div>B</div>' + '</multiple-content-tags>',
              directives: [multipleContentTagsComponent, manualViewportDirective]
            })]});
          compileRoot(rootEl, 'main').then((function(pv) {
            var viewRefs = renderer.createView(pv.render);
            var vcRef = new ViewContainerRef(viewRefs[1], 1);
            var vcProtoViewRef = pv.elementBinders[0].nestedProtoView.elementBinders[1].nestedProtoView.render;
            var childViewRef = renderer.createView(vcProtoViewRef)[0];
            expect(rootEl).toHaveText('(, B)');
            renderer.insertViewIntoContainer(vcRef, childViewRef);
            expect(rootEl).toHaveText('(, AB)');
            renderer.detachViewFromContainer(vcRef, 0);
            expect(rootEl).toHaveText('(, B)');
            async.done();
          }));
        })));
        it("should redistribute when the light dom changes", inject([AsyncTestCompleter], (function(async) {
          createRenderer({templates: [new ViewDefinition({
              componentId: 'main',
              template: '<multiple-content-tags>' + '<div template="manual" class="left">A</div>' + '<div>B</div>' + '</multiple-content-tags>',
              directives: [multipleContentTagsComponent, manualViewportDirective]
            })]});
          compileRoot(rootEl, 'main').then((function(pv) {
            var viewRefs = renderer.createView(pv.render);
            var vcRef = new ViewContainerRef(viewRefs[1], 1);
            var vcProtoViewRef = pv.elementBinders[0].nestedProtoView.elementBinders[1].nestedProtoView.render;
            var childViewRef = renderer.createView(vcProtoViewRef)[0];
            expect(rootEl).toHaveText('(, B)');
            renderer.insertViewIntoContainer(vcRef, childViewRef);
            expect(rootEl).toHaveText('(A, B)');
            renderer.detachViewFromContainer(vcRef, 0);
            expect(rootEl).toHaveText('(, B)');
            async.done();
          }));
        })));
        it("should support nested components", inject([AsyncTestCompleter], (function(async) {
          createRenderer({templates: [new ViewDefinition({
              componentId: 'main',
              template: '<outer-with-indirect-nested>' + '<div>A</div>' + '<div>B</div>' + '</outer-with-indirect-nested>',
              directives: [outerWithIndirectNestedComponent]
            })]});
          compileRoot(rootEl, 'main').then((function(pv) {
            renderer.createView(pv.render);
            expect(rootEl).toHaveText('OUTER(SIMPLE(AB))');
            async.done();
          }));
        })));
        it("should support nesting with content being direct child of a nested component", inject([AsyncTestCompleter], (function(async) {
          createRenderer({templates: [new ViewDefinition({
              componentId: 'main',
              template: '<outer>' + '<div template="manual" class="left">A</div>' + '<div>B</div>' + '<div>C</div>' + '</outer>',
              directives: [outerComponent, manualViewportDirective]
            })]});
          compileRoot(rootEl, 'main').then((function(pv) {
            var viewRefs = renderer.createView(pv.render);
            var vcRef = new ViewContainerRef(viewRefs[1], 1);
            var vcProtoViewRef = pv.elementBinders[0].nestedProtoView.elementBinders[1].nestedProtoView.render;
            var childViewRef = renderer.createView(vcProtoViewRef)[0];
            expect(rootEl).toHaveText('OUTER(INNER(INNERINNER(,BC)))');
            renderer.insertViewIntoContainer(vcRef, childViewRef);
            expect(rootEl).toHaveText('OUTER(INNER(INNERINNER(A,BC)))');
            async.done();
          }));
        })));
        it('should redistribute when the shadow dom changes', inject([AsyncTestCompleter], (function(async) {
          createRenderer({templates: [new ViewDefinition({
              componentId: 'main',
              template: '<conditional-content>' + '<div class="left">A</div>' + '<div>B</div>' + '<div>C</div>' + '</conditional-content>',
              directives: [conditionalContentComponent]
            })]});
          compileRoot(rootEl, 'main').then((function(pv) {
            var viewRefs = renderer.createView(pv.render);
            var vcRef = new ViewContainerRef(viewRefs[2], 0);
            var vcProtoViewRef = pv.elementBinders[0].nestedProtoView.elementBinders[0].nestedProtoView.elementBinders[0].nestedProtoView.render;
            var childViewRef = renderer.createView(vcProtoViewRef)[0];
            expect(rootEl).toHaveText('(, ABC)');
            renderer.insertViewIntoContainer(vcRef, childViewRef);
            expect(rootEl).toHaveText('(A, BC)');
            renderer.detachViewFromContainer(vcRef, 0);
            expect(rootEl).toHaveText('(, ABC)');
            async.done();
          }));
        })));
      }));
    }));
  });
}
var simple = new DirectiveMetadata({
  selector: 'simple',
  id: 'simple',
  type: DirectiveMetadata.COMPONENT_TYPE
});
var dynamicComponent = new DirectiveMetadata({
  selector: 'dynamic',
  id: 'dynamic',
  type: DirectiveMetadata.COMPONENT_TYPE
});
var multipleContentTagsComponent = new DirectiveMetadata({
  selector: 'multiple-content-tags',
  id: 'multiple-content-tags',
  type: DirectiveMetadata.COMPONENT_TYPE
});
var manualViewportDirective = new DirectiveMetadata({
  selector: '[manual]',
  id: 'manual',
  type: DirectiveMetadata.VIEWPORT_TYPE
});
var outerWithIndirectNestedComponent = new DirectiveMetadata({
  selector: 'outer-with-indirect-nested',
  id: 'outer-with-indirect-nested',
  type: DirectiveMetadata.COMPONENT_TYPE
});
var outerComponent = new DirectiveMetadata({
  selector: 'outer',
  id: 'outer',
  type: DirectiveMetadata.COMPONENT_TYPE
});
var innerComponent = new DirectiveMetadata({
  selector: 'inner',
  id: 'inner',
  type: DirectiveMetadata.COMPONENT_TYPE
});
var innerInnerComponent = new DirectiveMetadata({
  selector: 'innerinner',
  id: 'innerinner',
  type: DirectiveMetadata.COMPONENT_TYPE
});
var conditionalContentComponent = new DirectiveMetadata({
  selector: 'conditional-content',
  id: 'conditional-content',
  type: DirectiveMetadata.COMPONENT_TYPE
});
var autoViewportDirective = new DirectiveMetadata({
  selector: '[auto]',
  id: '[auto]',
  type: DirectiveMetadata.VIEWPORT_TYPE
});
var componentTemplates = [new ViewDefinition({
  componentId: 'simple',
  template: 'SIMPLE(<content></content>)',
  directives: []
}), new ViewDefinition({
  componentId: 'multiple-content-tags',
  template: '(<content select=".left"></content>, <content></content>)',
  directives: []
}), new ViewDefinition({
  componentId: 'outer-with-indirect-nested',
  template: 'OUTER(<simple><div><content></content></div></simple>)',
  directives: [simple]
}), new ViewDefinition({
  componentId: 'outer',
  template: 'OUTER(<inner><content></content></inner>)',
  directives: [innerComponent]
}), new ViewDefinition({
  componentId: 'inner',
  template: 'INNER(<innerinner><content></content></innerinner>)',
  directives: [innerInnerComponent]
}), new ViewDefinition({
  componentId: 'innerinner',
  template: 'INNERINNER(<content select=".left"></content>,<content></content>)',
  directives: []
}), new ViewDefinition({
  componentId: 'conditional-content',
  template: '<div>(<div *auto="cond"><content select=".left"></content></div>, <content></content>)</div>',
  directives: [autoViewportDirective]
})];
//# sourceMappingURL=shadow_dom_emulation_integration_spec.js.map

//# sourceMappingURL=./shadow_dom_emulation_integration_spec.map
 main();