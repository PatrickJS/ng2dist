'use strict'; var parse5Adapter = require('angular2/src/dom/parse5_adapter'); parse5Adapter.Parse5DomAdapter.makeCurrent();
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_render_47_api__,
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
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var $__2 = ($__angular2_47_src_47_render_47_api__ = require("angular2/src/render/api"), $__angular2_47_src_47_render_47_api__ && $__angular2_47_src_47_render_47_api__.__esModule && $__angular2_47_src_47_render_47_api__ || {default: $__angular2_47_src_47_render_47_api__}),
    ProtoViewDto = $__2.ProtoViewDto,
    ViewDefinition = $__2.ViewDefinition,
    ViewContainerRef = $__2.ViewContainerRef,
    EventDispatcher = $__2.EventDispatcher,
    DirectiveMetadata = $__2.DirectiveMetadata;
var $__3 = ($__integration_95_testbed__ = require("./integration_testbed"), $__integration_95_testbed__ && $__integration_95_testbed__.__esModule && $__integration_95_testbed__ || {default: $__integration_95_testbed__}),
    IntegrationTestbed = $__3.IntegrationTestbed,
    LoggingEventDispatcher = $__3.LoggingEventDispatcher,
    FakeEvent = $__3.FakeEvent;
function main() {
  describe('DirectDomRenderer integration', (function() {
    var testbed,
        renderer,
        eventPlugin,
        compileRoot,
        rootEl;
    beforeEach((function() {
      rootEl = el('<div></div>');
    }));
    function createRenderer() {
      var $__4 = arguments[0] !== (void 0) ? arguments[0] : {},
          urlData = $__4.urlData,
          viewCacheCapacity = $__4.viewCacheCapacity,
          shadowDomStrategy = $__4.shadowDomStrategy,
          templates = $__4.templates;
      testbed = new IntegrationTestbed({
        urlData: urlData,
        viewCacheCapacity: viewCacheCapacity,
        shadowDomStrategy: shadowDomStrategy,
        templates: templates
      });
      renderer = testbed.renderer;
      eventPlugin = testbed.eventPlugin;
      compileRoot = (function(rootEl, componentId) {
        return testbed.compileRoot(rootEl, componentId);
      });
    }
    it('should create root views while using the given elements in place', inject([AsyncTestCompleter], (function(async) {
      createRenderer();
      renderer.createRootProtoView(rootEl, 'someComponentId').then((function(rootProtoView) {
        expect(rootProtoView.elementBinders[0].directives[0].directiveIndex).toBe(0);
        var viewRefs = renderer.createView(rootProtoView.render);
        expect(viewRefs.length).toBe(1);
        expect(viewRefs[0].delegate.rootNodes[0]).toEqual(rootEl);
        async.done();
      }));
    })));
    it('should add a static component', inject([AsyncTestCompleter], (function(async) {
      createRenderer();
      renderer.createRootProtoView(rootEl, 'someComponentId').then((function(rootProtoView) {
        var template = new ViewDefinition({
          componentId: 'someComponent',
          template: 'hello',
          directives: []
        });
        renderer.compile(template).then((function(pv) {
          renderer.mergeChildComponentProtoViews(rootProtoView.render, [pv.render]);
          renderer.createView(rootProtoView.render);
          expect(rootEl).toHaveText('hello');
          async.done();
        }));
      }));
    })));
    it('should add a a dynamic component', inject([AsyncTestCompleter], (function(async) {
      createRenderer();
      renderer.createRootProtoView(rootEl, 'someComponentId').then((function(rootProtoView) {
        var template = new ViewDefinition({
          componentId: 'someComponent',
          template: 'hello',
          directives: []
        });
        renderer.compile(template).then((function(pv) {
          var rootViewRef = renderer.createView(rootProtoView.render)[0];
          var childComponentViewRef = renderer.createView(pv.render)[0];
          renderer.setDynamicComponentView(rootViewRef, 0, childComponentViewRef);
          expect(rootEl).toHaveText('hello');
          async.done();
        }));
      }));
    })));
    it('should update text nodes', inject([AsyncTestCompleter], (function(async) {
      createRenderer({templates: [new ViewDefinition({
          componentId: 'someComponent',
          template: '{{a}}',
          directives: []
        })]});
      compileRoot(rootEl, 'someComponent').then((function(rootProtoView) {
        var viewRefs = renderer.createView(rootProtoView.render);
        renderer.setText(viewRefs[1], 0, 'hello');
        expect(rootEl).toHaveText('hello');
        async.done();
      }));
    })));
    it('should update element properties', inject([AsyncTestCompleter], (function(async) {
      createRenderer({templates: [new ViewDefinition({
          componentId: 'someComponent',
          template: '<input [value]="someProp">',
          directives: []
        })]});
      compileRoot(rootEl, 'someComponent').then((function(rootProtoView) {
        var viewRefs = renderer.createView(rootProtoView.render);
        renderer.setElementProperty(viewRefs[1], 0, 'value', 'hello');
        expect(DOM.childNodes(rootEl)[0].value).toEqual('hello');
        async.done();
      }));
    })));
    it('should add and remove views to and from containers', inject([AsyncTestCompleter], (function(async) {
      createRenderer({templates: [new ViewDefinition({
          componentId: 'someComponent',
          template: '<template>hello</template>',
          directives: []
        })]});
      compileRoot(rootEl, 'someComponent').then((function(rootProtoView) {
        var viewRef = renderer.createView(rootProtoView.render)[1];
        var vcProtoViewRef = rootProtoView.elementBinders[0].nestedProtoView.elementBinders[0].nestedProtoView.render;
        var vcRef = new ViewContainerRef(viewRef, 0);
        var childViewRef = renderer.createView(vcProtoViewRef)[0];
        expect(rootEl).toHaveText('');
        renderer.insertViewIntoContainer(vcRef, childViewRef);
        expect(rootEl).toHaveText('hello');
        renderer.detachViewFromContainer(vcRef, 0);
        expect(rootEl).toHaveText('');
        async.done();
      }));
    })));
    it('should cache views', inject([AsyncTestCompleter], (function(async) {
      createRenderer({
        templates: [new ViewDefinition({
          componentId: 'someComponent',
          template: '<template>hello</template>',
          directives: []
        })],
        viewCacheCapacity: 2
      });
      compileRoot(rootEl, 'someComponent').then((function(rootProtoView) {
        var vcProtoViewRef = rootProtoView.elementBinders[0].nestedProtoView.elementBinders[0].nestedProtoView.render;
        var viewRef1 = renderer.createView(vcProtoViewRef)[0];
        renderer.destroyView(viewRef1);
        var viewRef2 = renderer.createView(vcProtoViewRef)[0];
        var viewRef3 = renderer.createView(vcProtoViewRef)[0];
        expect(viewRef2.delegate).toBe(viewRef1.delegate);
        expect(viewRef3.delegate).not.toBe(viewRef1.delegate);
        async.done();
      }));
    })));
    xit('should handle events', inject([AsyncTestCompleter], (function(async) {
      createRenderer({templates: [new ViewDefinition({
          componentId: 'someComponent',
          template: '<input (change)="$event.target.value">',
          directives: []
        })]});
      compileRoot(rootEl, 'someComponent').then((function(rootProtoView) {
        var viewRef = renderer.createView(rootProtoView.render)[1];
        var dispatcher = new LoggingEventDispatcher();
        renderer.setEventDispatcher(viewRef, dispatcher);
        var inputEl = DOM.childNodes(rootEl)[0];
        inputEl.value = 'hello';
        eventPlugin.dispatchEvent('change', new FakeEvent(inputEl));
        expect(dispatcher.log).toEqual([[0, 'change', ['hello']]]);
        async.done();
      }));
    })));
  }));
}
var someComponent = new DirectiveMetadata({
  id: 'someComponent',
  type: DirectiveMetadata.COMPONENT_TYPE,
  selector: 'some-comp'
});
//# sourceMappingURL=direct_dom_renderer_integration_spec.js.map

//# sourceMappingURL=./direct_dom_renderer_integration_spec.map
 main();