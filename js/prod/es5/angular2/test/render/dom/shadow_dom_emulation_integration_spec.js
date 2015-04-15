System.register(["angular2/test_lib", "angular2/src/facade/collection", "angular2/src/dom/dom_adapter", "angular2/src/render/api", "angular2/src/render/dom/shadow_dom/emulated_scoped_shadow_dom_strategy", "angular2/src/render/dom/shadow_dom/emulated_unscoped_shadow_dom_strategy", "angular2/src/render/dom/shadow_dom/native_shadow_dom_strategy", "angular2/src/services/url_resolver", "angular2/src/render/dom/shadow_dom/style_url_resolver", "angular2/src/render/dom/shadow_dom/style_inliner", "./integration_testbed"], function($__export) {
  "use strict";
  var AsyncTestCompleter,
      beforeEach,
      ddescribe,
      describe,
      el,
      elementText,
      expect,
      iit,
      inject,
      it,
      xit,
      SpyObject,
      MapWrapper,
      ListWrapper,
      StringMapWrapper,
      DOM,
      ProtoViewDto,
      ViewDefinition,
      ViewContainerRef,
      DirectiveMetadata,
      EmulatedScopedShadowDomStrategy,
      EmulatedUnscopedShadowDomStrategy,
      NativeShadowDomStrategy,
      UrlResolver,
      StyleUrlResolver,
      StyleInliner,
      IntegrationTestbed,
      simple,
      dynamicComponent,
      multipleContentTagsComponent,
      manualViewportDirective,
      outerWithIndirectNestedComponent,
      outerComponent,
      innerComponent,
      innerInnerComponent,
      conditionalContentComponent,
      autoViewportDirective,
      componentTemplates;
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
          function createRenderer($__0) {
            var templates = $__0.templates;
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
  $__export("main", main);
  return {
    setters: [function($__m) {
      AsyncTestCompleter = $__m.AsyncTestCompleter;
      beforeEach = $__m.beforeEach;
      ddescribe = $__m.ddescribe;
      describe = $__m.describe;
      el = $__m.el;
      elementText = $__m.elementText;
      expect = $__m.expect;
      iit = $__m.iit;
      inject = $__m.inject;
      it = $__m.it;
      xit = $__m.xit;
      SpyObject = $__m.SpyObject;
    }, function($__m) {
      MapWrapper = $__m.MapWrapper;
      ListWrapper = $__m.ListWrapper;
      StringMapWrapper = $__m.StringMapWrapper;
    }, function($__m) {
      DOM = $__m.DOM;
    }, function($__m) {
      ProtoViewDto = $__m.ProtoViewDto;
      ViewDefinition = $__m.ViewDefinition;
      ViewContainerRef = $__m.ViewContainerRef;
      DirectiveMetadata = $__m.DirectiveMetadata;
    }, function($__m) {
      EmulatedScopedShadowDomStrategy = $__m.EmulatedScopedShadowDomStrategy;
    }, function($__m) {
      EmulatedUnscopedShadowDomStrategy = $__m.EmulatedUnscopedShadowDomStrategy;
    }, function($__m) {
      NativeShadowDomStrategy = $__m.NativeShadowDomStrategy;
    }, function($__m) {
      UrlResolver = $__m.UrlResolver;
    }, function($__m) {
      StyleUrlResolver = $__m.StyleUrlResolver;
    }, function($__m) {
      StyleInliner = $__m.StyleInliner;
    }, function($__m) {
      IntegrationTestbed = $__m.IntegrationTestbed;
    }],
    execute: function() {
      simple = new DirectiveMetadata({
        selector: 'simple',
        id: 'simple',
        type: DirectiveMetadata.COMPONENT_TYPE
      });
      dynamicComponent = new DirectiveMetadata({
        selector: 'dynamic',
        id: 'dynamic',
        type: DirectiveMetadata.COMPONENT_TYPE
      });
      multipleContentTagsComponent = new DirectiveMetadata({
        selector: 'multiple-content-tags',
        id: 'multiple-content-tags',
        type: DirectiveMetadata.COMPONENT_TYPE
      });
      manualViewportDirective = new DirectiveMetadata({
        selector: '[manual]',
        id: 'manual',
        type: DirectiveMetadata.VIEWPORT_TYPE
      });
      outerWithIndirectNestedComponent = new DirectiveMetadata({
        selector: 'outer-with-indirect-nested',
        id: 'outer-with-indirect-nested',
        type: DirectiveMetadata.COMPONENT_TYPE
      });
      outerComponent = new DirectiveMetadata({
        selector: 'outer',
        id: 'outer',
        type: DirectiveMetadata.COMPONENT_TYPE
      });
      innerComponent = new DirectiveMetadata({
        selector: 'inner',
        id: 'inner',
        type: DirectiveMetadata.COMPONENT_TYPE
      });
      innerInnerComponent = new DirectiveMetadata({
        selector: 'innerinner',
        id: 'innerinner',
        type: DirectiveMetadata.COMPONENT_TYPE
      });
      conditionalContentComponent = new DirectiveMetadata({
        selector: 'conditional-content',
        id: 'conditional-content',
        type: DirectiveMetadata.COMPONENT_TYPE
      });
      autoViewportDirective = new DirectiveMetadata({
        selector: '[auto]',
        id: '[auto]',
        type: DirectiveMetadata.VIEWPORT_TYPE
      });
      componentTemplates = [new ViewDefinition({
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
    }
  };
});
//# sourceMappingURL=shadow_dom_emulation_integration_spec.es6.map

//# sourceMappingURL=./shadow_dom_emulation_integration_spec.js.map