import {AsyncTestCompleter,
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
  SpyObject} from 'angular2/test_lib';
import {MapWrapper,
  ListWrapper,
  StringMapWrapper} from 'angular2/src/facade/collection';
import {DOM} from 'angular2/src/dom/dom_adapter';
import {ProtoViewDto,
  ViewDefinition,
  ViewContainerRef,
  DirectiveMetadata} from 'angular2/src/render/api';
import {EmulatedScopedShadowDomStrategy} from 'angular2/src/render/dom/shadow_dom/emulated_scoped_shadow_dom_strategy';
import {EmulatedUnscopedShadowDomStrategy} from 'angular2/src/render/dom/shadow_dom/emulated_unscoped_shadow_dom_strategy';
import {NativeShadowDomStrategy} from 'angular2/src/render/dom/shadow_dom/native_shadow_dom_strategy';
import {UrlResolver} from 'angular2/src/services/url_resolver';
import {StyleUrlResolver} from 'angular2/src/render/dom/shadow_dom/style_url_resolver';
import {StyleInliner} from 'angular2/src/render/dom/shadow_dom/style_inliner';
import {IntegrationTestbed} from './integration_testbed';
export function main() {
  describe('ShadowDom integration tests', function() {
    var urlResolver,
        styleUrlResolver,
        styleInliner;
    var strategies = {
      "scoped": () => new EmulatedScopedShadowDomStrategy(styleInliner, styleUrlResolver, null),
      "unscoped": () => new EmulatedUnscopedShadowDomStrategy(styleUrlResolver, null)
    };
    if (DOM.supportsNativeShadowDOM()) {
      StringMapWrapper.set(strategies, "native", () => new NativeShadowDomStrategy(styleUrlResolver));
    }
    beforeEach(() => {
      urlResolver = new UrlResolver();
      styleUrlResolver = new StyleUrlResolver(urlResolver);
      styleInliner = new StyleInliner(null, styleUrlResolver, urlResolver);
    });
    StringMapWrapper.forEach(strategies, (strategyFactory, name) => {
      describe(`${name} shadow dom strategy`, () => {
        var testbed,
            renderer,
            rootEl,
            compile,
            compileRoot;
        function createRenderer({templates}) {
          testbed = new IntegrationTestbed({
            shadowDomStrategy: strategyFactory(),
            templates: ListWrapper.concat(templates, componentTemplates)
          });
          renderer = testbed.renderer;
          compileRoot = (rootEl, componentId) => testbed.compileRoot(rootEl, componentId);
          compile = (componentId) => testbed.compile(componentId);
        }
        beforeEach(() => {
          rootEl = el('<div></div>');
        });
        it('should support simple components', inject([AsyncTestCompleter], (async) => {
          createRenderer({templates: [new ViewDefinition({
              componentId: 'main',
              template: '<simple>' + '<div>A</div>' + '</simple>',
              directives: [simple]
            })]});
          compileRoot(rootEl, 'main').then((pv) => {
            renderer.createView(pv.render);
            expect(rootEl).toHaveText('SIMPLE(A)');
            async.done();
          });
        }));
        it('should support dynamic components', inject([AsyncTestCompleter], (async) => {
          createRenderer({templates: [new ViewDefinition({
              componentId: 'main',
              template: '<dynamic>' + '<div>A</div>' + '</dynamic>',
              directives: [dynamicComponent]
            })]});
          compileRoot(rootEl, 'main').then((rootPv) => {
            compile('simple').then((simplePv) => {
              var views = renderer.createView(rootPv.render);
              var simpleViews = renderer.createView(simplePv.render);
              renderer.setDynamicComponentView(views[1], 0, simpleViews[0]);
              expect(rootEl).toHaveText('SIMPLE(A)');
              async.done();
            });
          });
        }));
        it('should support multiple content tags', inject([AsyncTestCompleter], (async) => {
          createRenderer({templates: [new ViewDefinition({
              componentId: 'main',
              template: '<multiple-content-tags>' + '<div>B</div>' + '<div>C</div>' + '<div class="left">A</div>' + '</multiple-content-tags>',
              directives: [multipleContentTagsComponent]
            })]});
          compileRoot(rootEl, 'main').then((pv) => {
            renderer.createView(pv.render);
            expect(rootEl).toHaveText('(A, BC)');
            async.done();
          });
        }));
        it('should redistribute only direct children', inject([AsyncTestCompleter], (async) => {
          createRenderer({templates: [new ViewDefinition({
              componentId: 'main',
              template: '<multiple-content-tags>' + '<div>B<div class="left">A</div></div>' + '<div>C</div>' + '</multiple-content-tags>',
              directives: [multipleContentTagsComponent]
            })]});
          compileRoot(rootEl, 'main').then((pv) => {
            renderer.createView(pv.render);
            expect(rootEl).toHaveText('(, BAC)');
            async.done();
          });
        }));
        it("should redistribute direct child viewcontainers when the light dom changes", inject([AsyncTestCompleter], (async) => {
          createRenderer({templates: [new ViewDefinition({
              componentId: 'main',
              template: '<multiple-content-tags>' + '<div><div template="manual" class="left">A</div></div>' + '<div>B</div>' + '</multiple-content-tags>',
              directives: [multipleContentTagsComponent, manualViewportDirective]
            })]});
          compileRoot(rootEl, 'main').then((pv) => {
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
          });
        }));
        it("should redistribute when the light dom changes", inject([AsyncTestCompleter], (async) => {
          createRenderer({templates: [new ViewDefinition({
              componentId: 'main',
              template: '<multiple-content-tags>' + '<div template="manual" class="left">A</div>' + '<div>B</div>' + '</multiple-content-tags>',
              directives: [multipleContentTagsComponent, manualViewportDirective]
            })]});
          compileRoot(rootEl, 'main').then((pv) => {
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
          });
        }));
        it("should support nested components", inject([AsyncTestCompleter], (async) => {
          createRenderer({templates: [new ViewDefinition({
              componentId: 'main',
              template: '<outer-with-indirect-nested>' + '<div>A</div>' + '<div>B</div>' + '</outer-with-indirect-nested>',
              directives: [outerWithIndirectNestedComponent]
            })]});
          compileRoot(rootEl, 'main').then((pv) => {
            renderer.createView(pv.render);
            expect(rootEl).toHaveText('OUTER(SIMPLE(AB))');
            async.done();
          });
        }));
        it("should support nesting with content being direct child of a nested component", inject([AsyncTestCompleter], (async) => {
          createRenderer({templates: [new ViewDefinition({
              componentId: 'main',
              template: '<outer>' + '<div template="manual" class="left">A</div>' + '<div>B</div>' + '<div>C</div>' + '</outer>',
              directives: [outerComponent, manualViewportDirective]
            })]});
          compileRoot(rootEl, 'main').then((pv) => {
            var viewRefs = renderer.createView(pv.render);
            var vcRef = new ViewContainerRef(viewRefs[1], 1);
            var vcProtoViewRef = pv.elementBinders[0].nestedProtoView.elementBinders[1].nestedProtoView.render;
            var childViewRef = renderer.createView(vcProtoViewRef)[0];
            expect(rootEl).toHaveText('OUTER(INNER(INNERINNER(,BC)))');
            renderer.insertViewIntoContainer(vcRef, childViewRef);
            expect(rootEl).toHaveText('OUTER(INNER(INNERINNER(A,BC)))');
            async.done();
          });
        }));
        it('should redistribute when the shadow dom changes', inject([AsyncTestCompleter], (async) => {
          createRenderer({templates: [new ViewDefinition({
              componentId: 'main',
              template: '<conditional-content>' + '<div class="left">A</div>' + '<div>B</div>' + '<div>C</div>' + '</conditional-content>',
              directives: [conditionalContentComponent]
            })]});
          compileRoot(rootEl, 'main').then((pv) => {
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
          });
        }));
      });
    });
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