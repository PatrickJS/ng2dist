'use strict'; var parse5Adapter = require('angular2/src/dom/parse5_adapter'); parse5Adapter.Parse5DomAdapter.makeCurrent();
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_src_47_core_47_compiler_47_compiler__,
    $__angular2_47_src_47_core_47_compiler_47_view__,
    $__angular2_47_src_47_core_47_compiler_47_element_95_binder__,
    $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__,
    $__angular2_47_src_47_core_47_annotations_47_annotations__,
    $__angular2_47_src_47_core_47_annotations_47_di__,
    $__angular2_47_src_47_core_47_annotations_47_view__,
    $__angular2_47_src_47_core_47_compiler_47_element_95_injector__,
    $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__,
    $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__,
    $__angular2_47_src_47_core_47_compiler_47_proto_95_view_95_factory__,
    $__angular2_47_src_47_services_47_url_95_resolver__,
    $__angular2_47_src_47_render_47_api__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    AsyncTestCompleter = $__0.AsyncTestCompleter,
    beforeEach = $__0.beforeEach,
    xdescribe = $__0.xdescribe,
    ddescribe = $__0.ddescribe,
    describe = $__0.describe,
    el = $__0.el,
    expect = $__0.expect,
    iit = $__0.iit,
    inject = $__0.inject,
    IS_DARTIUM = $__0.IS_DARTIUM,
    it = $__0.it;
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__1.List,
    ListWrapper = $__1.ListWrapper,
    Map = $__1.Map,
    MapWrapper = $__1.MapWrapper,
    StringMapWrapper = $__1.StringMapWrapper;
var $__2 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    Type = $__2.Type,
    isBlank = $__2.isBlank,
    stringify = $__2.stringify,
    isPresent = $__2.isPresent;
var $__3 = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
    PromiseWrapper = $__3.PromiseWrapper,
    Promise = $__3.Promise;
var $__4 = ($__angular2_47_src_47_core_47_compiler_47_compiler__ = require("angular2/src/core/compiler/compiler"), $__angular2_47_src_47_core_47_compiler_47_compiler__ && $__angular2_47_src_47_core_47_compiler_47_compiler__.__esModule && $__angular2_47_src_47_core_47_compiler_47_compiler__ || {default: $__angular2_47_src_47_core_47_compiler_47_compiler__}),
    Compiler = $__4.Compiler,
    CompilerCache = $__4.CompilerCache;
var AppProtoView = ($__angular2_47_src_47_core_47_compiler_47_view__ = require("angular2/src/core/compiler/view"), $__angular2_47_src_47_core_47_compiler_47_view__ && $__angular2_47_src_47_core_47_compiler_47_view__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view__ || {default: $__angular2_47_src_47_core_47_compiler_47_view__}).AppProtoView;
var ElementBinder = ($__angular2_47_src_47_core_47_compiler_47_element_95_binder__ = require("angular2/src/core/compiler/element_binder"), $__angular2_47_src_47_core_47_compiler_47_element_95_binder__ && $__angular2_47_src_47_core_47_compiler_47_element_95_binder__.__esModule && $__angular2_47_src_47_core_47_compiler_47_element_95_binder__ || {default: $__angular2_47_src_47_core_47_compiler_47_element_95_binder__}).ElementBinder;
var DirectiveMetadataReader = ($__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ = require("angular2/src/core/compiler/directive_metadata_reader"), $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__.__esModule && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ || {default: $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__}).DirectiveMetadataReader;
var $__8 = ($__angular2_47_src_47_core_47_annotations_47_annotations__ = require("angular2/src/core/annotations/annotations"), $__angular2_47_src_47_core_47_annotations_47_annotations__ && $__angular2_47_src_47_core_47_annotations_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_47_annotations__}),
    Component = $__8.Component,
    DynamicComponent = $__8.DynamicComponent,
    Viewport = $__8.Viewport,
    Decorator = $__8.Decorator;
var $__9 = ($__angular2_47_src_47_core_47_annotations_47_di__ = require("angular2/src/core/annotations/di"), $__angular2_47_src_47_core_47_annotations_47_di__ && $__angular2_47_src_47_core_47_annotations_47_di__.__esModule && $__angular2_47_src_47_core_47_annotations_47_di__ || {default: $__angular2_47_src_47_core_47_annotations_47_di__}),
    PropertySetter = $__9.PropertySetter,
    Attribute = $__9.Attribute;
var View = ($__angular2_47_src_47_core_47_annotations_47_view__ = require("angular2/src/core/annotations/view"), $__angular2_47_src_47_core_47_annotations_47_view__ && $__angular2_47_src_47_core_47_annotations_47_view__.__esModule && $__angular2_47_src_47_core_47_annotations_47_view__ || {default: $__angular2_47_src_47_core_47_annotations_47_view__}).View;
var DirectiveBinding = ($__angular2_47_src_47_core_47_compiler_47_element_95_injector__ = require("angular2/src/core/compiler/element_injector"), $__angular2_47_src_47_core_47_compiler_47_element_95_injector__ && $__angular2_47_src_47_core_47_compiler_47_element_95_injector__.__esModule && $__angular2_47_src_47_core_47_compiler_47_element_95_injector__ || {default: $__angular2_47_src_47_core_47_compiler_47_element_95_injector__}).DirectiveBinding;
var TemplateResolver = ($__angular2_47_src_47_core_47_compiler_47_template_95_resolver__ = require("angular2/src/core/compiler/template_resolver"), $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__ && $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__.__esModule && $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__ || {default: $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__}).TemplateResolver;
var $__13 = ($__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__ = require("angular2/src/core/compiler/component_url_mapper"), $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__ && $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__.__esModule && $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__ || {default: $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__}),
    ComponentUrlMapper = $__13.ComponentUrlMapper,
    RuntimeComponentUrlMapper = $__13.RuntimeComponentUrlMapper;
var ProtoViewFactory = ($__angular2_47_src_47_core_47_compiler_47_proto_95_view_95_factory__ = require("angular2/src/core/compiler/proto_view_factory"), $__angular2_47_src_47_core_47_compiler_47_proto_95_view_95_factory__ && $__angular2_47_src_47_core_47_compiler_47_proto_95_view_95_factory__.__esModule && $__angular2_47_src_47_core_47_compiler_47_proto_95_view_95_factory__ || {default: $__angular2_47_src_47_core_47_compiler_47_proto_95_view_95_factory__}).ProtoViewFactory;
var UrlResolver = ($__angular2_47_src_47_services_47_url_95_resolver__ = require("angular2/src/services/url_resolver"), $__angular2_47_src_47_services_47_url_95_resolver__ && $__angular2_47_src_47_services_47_url_95_resolver__.__esModule && $__angular2_47_src_47_services_47_url_95_resolver__ || {default: $__angular2_47_src_47_services_47_url_95_resolver__}).UrlResolver;
var renderApi = ($__angular2_47_src_47_render_47_api__ = require("angular2/src/render/api"), $__angular2_47_src_47_render_47_api__ && $__angular2_47_src_47_render_47_api__.__esModule && $__angular2_47_src_47_render_47_api__ || {default: $__angular2_47_src_47_render_47_api__});
function main() {
  describe('compiler', function() {
    var reader,
        tplResolver,
        renderer,
        protoViewFactory,
        cmpUrlMapper;
    beforeEach((function() {
      reader = new DirectiveMetadataReader();
      tplResolver = new FakeTemplateResolver();
      cmpUrlMapper = new RuntimeComponentUrlMapper();
    }));
    function createCompiler(renderCompileResults, protoViewFactoryResults) {
      var urlResolver = new FakeUrlResolver();
      renderer = new FakeRenderer(renderCompileResults);
      protoViewFactory = new FakeProtoViewFactory(protoViewFactoryResults);
      return new Compiler(reader, new CompilerCache(), tplResolver, cmpUrlMapper, urlResolver, renderer, protoViewFactory);
    }
    Object.defineProperty(createCompiler, "parameters", {get: function() {
        return [[List], [$traceurRuntime.genericType(List, AppProtoView)]];
      }});
    describe('serialize template', (function() {
      function captureTemplate(template) {
        tplResolver.setView(MainComponent, template);
        var compiler = createCompiler([createRenderProtoView()], [createProtoView()]);
        return compiler.compile(MainComponent).then((function(protoView) {
          expect(renderer.requests.length).toBe(1);
          return renderer.requests[0];
        }));
      }
      Object.defineProperty(captureTemplate, "parameters", {get: function() {
          return [[View]];
        }});
      function captureDirective(directive) {
        return captureTemplate(new View({
          template: '<div></div>',
          directives: [directive]
        })).then((function(renderTpl) {
          expect(renderTpl.directives.length).toBe(1);
          return renderTpl.directives[0];
        }));
      }
      it('should fill the componentId', inject([AsyncTestCompleter], (function(async) {
        captureTemplate(new View({template: '<div></div>'})).then((function(renderTpl) {
          expect(renderTpl.componentId).toEqual(stringify(MainComponent));
          async.done();
        }));
      })));
      it('should fill inline template', inject([AsyncTestCompleter], (function(async) {
        captureTemplate(new View({template: '<div></div>'})).then((function(renderTpl) {
          expect(renderTpl.template).toEqual('<div></div>');
          async.done();
        }));
      })));
      it('should fill absUrl given inline templates', inject([AsyncTestCompleter], (function(async) {
        cmpUrlMapper.setComponentUrl(MainComponent, '/mainComponent');
        captureTemplate(new View({template: '<div></div>'})).then((function(renderTpl) {
          expect(renderTpl.absUrl).toEqual('http://www.app.com/mainComponent');
          async.done();
        }));
      })));
      it('should fill absUrl given url template', inject([AsyncTestCompleter], (function(async) {
        cmpUrlMapper.setComponentUrl(MainComponent, '/mainComponent');
        captureTemplate(new View({templateUrl: '/someTemplate'})).then((function(renderTpl) {
          expect(renderTpl.absUrl).toEqual('http://www.app.com/mainComponent/someTemplate');
          async.done();
        }));
      })));
      it('should fill directive.id', inject([AsyncTestCompleter], (function(async) {
        captureDirective(MainComponent).then((function(renderDir) {
          expect(renderDir.id).toEqual(stringify(MainComponent));
          async.done();
        }));
      })));
      it('should fill directive.selector', inject([AsyncTestCompleter], (function(async) {
        captureDirective(MainComponent).then((function(renderDir) {
          expect(renderDir.selector).toEqual('main-comp');
          async.done();
        }));
      })));
      it('should fill directive.type for components', inject([AsyncTestCompleter], (function(async) {
        captureDirective(MainComponent).then((function(renderDir) {
          expect(renderDir.type).toEqual(renderApi.DirectiveMetadata.COMPONENT_TYPE);
          async.done();
        }));
      })));
      it('should fill directive.type for dynamic components', inject([AsyncTestCompleter], (function(async) {
        captureDirective(SomeDynamicComponentDirective).then((function(renderDir) {
          expect(renderDir.type).toEqual(renderApi.DirectiveMetadata.COMPONENT_TYPE);
          async.done();
        }));
      })));
      it('should fill directive.type for viewport directives', inject([AsyncTestCompleter], (function(async) {
        captureDirective(SomeViewportDirective).then((function(renderDir) {
          expect(renderDir.type).toEqual(renderApi.DirectiveMetadata.VIEWPORT_TYPE);
          async.done();
        }));
      })));
      it('should fill directive.type for decorator directives', inject([AsyncTestCompleter], (function(async) {
        captureDirective(SomeDecoratorDirective).then((function(renderDir) {
          expect(renderDir.type).toEqual(renderApi.DirectiveMetadata.DECORATOR_TYPE);
          async.done();
        }));
      })));
      it('should set directive.compileChildren to false for other directives', inject([AsyncTestCompleter], (function(async) {
        captureDirective(MainComponent).then((function(renderDir) {
          expect(renderDir.compileChildren).toEqual(true);
          async.done();
        }));
      })));
      it('should set directive.compileChildren to true for decorator directives', inject([AsyncTestCompleter], (function(async) {
        captureDirective(SomeDecoratorDirective).then((function(renderDir) {
          expect(renderDir.compileChildren).toEqual(true);
          async.done();
        }));
      })));
      it('should set directive.compileChildren to false for decorator directives', inject([AsyncTestCompleter], (function(async) {
        captureDirective(IgnoreChildrenDecoratorDirective).then((function(renderDir) {
          expect(renderDir.compileChildren).toEqual(false);
          async.done();
        }));
      })));
      it('should set directive.hostListeners', inject([AsyncTestCompleter], (function(async) {
        captureDirective(DirectiveWithEvents).then((function(renderDir) {
          expect(renderDir.hostListeners).toEqual(MapWrapper.createFromStringMap({'someEvent': 'someAction'}));
          async.done();
        }));
      })));
      it('should set directive.bind', inject([AsyncTestCompleter], (function(async) {
        captureDirective(DirectiveWithBind).then((function(renderDir) {
          expect(renderDir.properties).toEqual(MapWrapper.createFromStringMap({'a': 'b'}));
          async.done();
        }));
      })));
      it('should read @PropertySetter', inject([AsyncTestCompleter], (function(async) {
        captureDirective(DirectiveWithPropertySetters).then((function(renderDir) {
          expect(renderDir.setters).toEqual(['someProp']);
          async.done();
        }));
      })));
      it('should read @Attribute', inject([AsyncTestCompleter], (function(async) {
        captureDirective(DirectiveWithAttributes).then((function(renderDir) {
          expect(renderDir.readAttributes).toEqual(['someAttr']);
          async.done();
        }));
      })));
    }));
    describe('call ProtoViewFactory', (function() {
      it('should pass the render protoView', inject([AsyncTestCompleter], (function(async) {
        tplResolver.setView(MainComponent, new View({template: '<div></div>'}));
        var renderProtoView = createRenderProtoView();
        var expectedProtoView = createProtoView();
        var compiler = createCompiler([renderProtoView], [expectedProtoView]);
        compiler.compile(MainComponent).then((function(protoView) {
          var request = protoViewFactory.requests[0];
          expect(request[1]).toBe(renderProtoView);
          async.done();
        }));
      })));
      it('should pass the component binding', inject([AsyncTestCompleter], (function(async) {
        tplResolver.setView(MainComponent, new View({template: '<div></div>'}));
        var compiler = createCompiler([createRenderProtoView()], [createProtoView()]);
        compiler.compile(MainComponent).then((function(protoView) {
          var request = protoViewFactory.requests[0];
          expect(request[0].key.token).toBe(MainComponent);
          async.done();
        }));
      })));
      it('should pass the directive bindings', inject([AsyncTestCompleter], (function(async) {
        tplResolver.setView(MainComponent, new View({
          template: '<div></div>',
          directives: [SomeDecoratorDirective]
        }));
        var compiler = createCompiler([createRenderProtoView()], [createProtoView()]);
        compiler.compile(MainComponent).then((function(protoView) {
          var request = protoViewFactory.requests[0];
          var binding = request[2][0];
          expect(binding.key.token).toBe(SomeDecoratorDirective);
          async.done();
        }));
      })));
      it('should use the protoView of the ProtoViewFactory', inject([AsyncTestCompleter], (function(async) {
        tplResolver.setView(MainComponent, new View({template: '<div></div>'}));
        var renderProtoView = createRenderProtoView();
        var expectedProtoView = createProtoView();
        var compiler = createCompiler([renderProtoView], [expectedProtoView]);
        compiler.compile(MainComponent).then((function(protoView) {
          expect(protoView).toBe(expectedProtoView);
          async.done();
        }));
      })));
    }));
    it('should load nested components', inject([AsyncTestCompleter], (function(async) {
      tplResolver.setView(MainComponent, new View({template: '<div></div>'}));
      tplResolver.setView(NestedComponent, new View({template: '<div></div>'}));
      var mainProtoView = createProtoView([createComponentElementBinder(reader, NestedComponent)]);
      var nestedProtoView = createProtoView();
      var compiler = createCompiler([createRenderProtoView([createRenderComponentElementBinder(0)]), createRenderProtoView()], [mainProtoView, nestedProtoView]);
      compiler.compile(MainComponent).then((function(protoView) {
        expect(protoView).toBe(mainProtoView);
        expect(mainProtoView.elementBinders[0].nestedProtoView).toBe(nestedProtoView);
        expect(nestedProtoView.parentProtoView).toBe(null);
        async.done();
      }));
    })));
    it('should load nested components in viewport', inject([AsyncTestCompleter], (function(async) {
      tplResolver.setView(MainComponent, new View({template: '<div></div>'}));
      tplResolver.setView(NestedComponent, new View({template: '<div></div>'}));
      var mainProtoView = createProtoView([createViewportElementBinder(null)]);
      var viewportProtoView = createProtoView([createComponentElementBinder(reader, NestedComponent)]);
      var nestedProtoView = createProtoView();
      var compiler = createCompiler([createRenderProtoView([createRenderViewportElementBinder(createRenderProtoView([createRenderComponentElementBinder(0)]))]), createRenderProtoView()], [mainProtoView, viewportProtoView, nestedProtoView]);
      compiler.compile(MainComponent).then((function(protoView) {
        expect(protoView).toBe(mainProtoView);
        expect(mainProtoView.elementBinders[0].nestedProtoView).toBe(viewportProtoView);
        expect(viewportProtoView.parentProtoView).toBe(mainProtoView);
        expect(viewportProtoView.elementBinders[0].nestedProtoView).toBe(nestedProtoView);
        expect(nestedProtoView.parentProtoView).toBe(null);
        async.done();
      }));
    })));
    it('should cache compiled components', inject([AsyncTestCompleter], (function(async) {
      tplResolver.setView(MainComponent, new View({template: '<div></div>'}));
      var renderProtoView = createRenderProtoView();
      var expectedProtoView = createProtoView();
      var compiler = createCompiler([renderProtoView], [expectedProtoView]);
      compiler.compile(MainComponent).then((function(protoView) {
        expect(protoView).toBe(expectedProtoView);
        return compiler.compile(MainComponent);
      })).then((function(protoView) {
        expect(protoView).toBe(expectedProtoView);
        async.done();
      }));
    })));
    it('should re-use components being compiled', inject([AsyncTestCompleter], (function(async) {
      tplResolver.setView(MainComponent, new View({template: '<div></div>'}));
      var renderProtoViewCompleter = PromiseWrapper.completer();
      var expectedProtoView = createProtoView();
      var compiler = createCompiler([renderProtoViewCompleter.promise], [expectedProtoView]);
      renderProtoViewCompleter.resolve(createRenderProtoView());
      PromiseWrapper.all([compiler.compile(MainComponent), compiler.compile(MainComponent)]).then((function(protoViews) {
        expect(protoViews[0]).toBe(expectedProtoView);
        expect(protoViews[1]).toBe(expectedProtoView);
        async.done();
      }));
    })));
    it('should allow recursive components', inject([AsyncTestCompleter], (function(async) {
      tplResolver.setView(MainComponent, new View({template: '<div></div>'}));
      var mainProtoView = createProtoView([createComponentElementBinder(reader, MainComponent)]);
      var compiler = createCompiler([createRenderProtoView([createRenderComponentElementBinder(0)])], [mainProtoView]);
      compiler.compile(MainComponent).then((function(protoView) {
        expect(protoView).toBe(mainProtoView);
        expect(mainProtoView.elementBinders[0].nestedProtoView).toBe(mainProtoView);
        async.done();
      }));
    })));
    it('should create root proto views', inject([AsyncTestCompleter], (function(async) {
      tplResolver.setView(MainComponent, new View({template: '<div></div>'}));
      var rootProtoView = createProtoView([createComponentElementBinder(reader, MainComponent)]);
      var mainProtoView = createProtoView();
      var compiler = createCompiler([createRenderProtoView()], [rootProtoView, mainProtoView]);
      compiler.compileRoot(null, MainComponent).then((function(protoView) {
        expect(protoView).toBe(rootProtoView);
        expect(rootProtoView.elementBinders[0].nestedProtoView).toBe(mainProtoView);
        async.done();
      }));
    })));
  });
}
function createDirectiveBinding(reader, type) {
  var meta = reader.read(type);
  return DirectiveBinding.createFromType(meta.type, meta.annotation);
}
function createProtoView() {
  var elementBinders = arguments[0] !== (void 0) ? arguments[0] : null;
  var pv = new AppProtoView(null, null, null);
  if (isBlank(elementBinders)) {
    elementBinders = [];
  }
  pv.elementBinders = elementBinders;
  return pv;
}
function createComponentElementBinder(reader, type) {
  var binding = createDirectiveBinding(reader, type);
  return new ElementBinder(0, null, 0, null, binding, null);
}
function createViewportElementBinder(nestedProtoView) {
  var elBinder = new ElementBinder(0, null, 0, null, null, null);
  elBinder.nestedProtoView = nestedProtoView;
  return elBinder;
}
function createRenderProtoView() {
  var elementBinders = arguments[0] !== (void 0) ? arguments[0] : null;
  if (isBlank(elementBinders)) {
    elementBinders = [];
  }
  return new renderApi.ProtoViewDto({elementBinders: elementBinders});
}
function createRenderComponentElementBinder(directiveIndex) {
  return new renderApi.ElementBinder({directives: [new renderApi.DirectiveBinder({directiveIndex: directiveIndex})]});
}
function createRenderViewportElementBinder(nestedProtoView) {
  return new renderApi.ElementBinder({nestedProtoView: nestedProtoView});
}
var MainComponent = function MainComponent() {
  ;
};
($traceurRuntime.createClass)(MainComponent, {}, {});
Object.defineProperty(MainComponent, "annotations", {get: function() {
    return [new Component({selector: 'main-comp'})];
  }});
var NestedComponent = function NestedComponent() {
  ;
};
($traceurRuntime.createClass)(NestedComponent, {}, {});
Object.defineProperty(NestedComponent, "annotations", {get: function() {
    return [new Component()];
  }});
var RecursiveComponent = function RecursiveComponent() {
  ;
};
($traceurRuntime.createClass)(RecursiveComponent, {}, {});
var SomeDynamicComponentDirective = function SomeDynamicComponentDirective() {
  ;
};
($traceurRuntime.createClass)(SomeDynamicComponentDirective, {}, {});
Object.defineProperty(SomeDynamicComponentDirective, "annotations", {get: function() {
    return [new DynamicComponent()];
  }});
var SomeViewportDirective = function SomeViewportDirective() {
  ;
};
($traceurRuntime.createClass)(SomeViewportDirective, {}, {});
Object.defineProperty(SomeViewportDirective, "annotations", {get: function() {
    return [new Viewport()];
  }});
var SomeDecoratorDirective = function SomeDecoratorDirective() {
  ;
};
($traceurRuntime.createClass)(SomeDecoratorDirective, {}, {});
Object.defineProperty(SomeDecoratorDirective, "annotations", {get: function() {
    return [new Decorator()];
  }});
var IgnoreChildrenDecoratorDirective = function IgnoreChildrenDecoratorDirective() {
  ;
};
($traceurRuntime.createClass)(IgnoreChildrenDecoratorDirective, {}, {});
Object.defineProperty(IgnoreChildrenDecoratorDirective, "annotations", {get: function() {
    return [new Decorator({compileChildren: false})];
  }});
var DirectiveWithEvents = function DirectiveWithEvents() {
  ;
};
($traceurRuntime.createClass)(DirectiveWithEvents, {}, {});
Object.defineProperty(DirectiveWithEvents, "annotations", {get: function() {
    return [new Decorator({hostListeners: {'someEvent': 'someAction'}})];
  }});
var DirectiveWithBind = function DirectiveWithBind() {
  ;
};
($traceurRuntime.createClass)(DirectiveWithBind, {}, {});
Object.defineProperty(DirectiveWithBind, "annotations", {get: function() {
    return [new Decorator({properties: {'a': 'b'}})];
  }});
var DirectiveWithPropertySetters = function DirectiveWithPropertySetters(someProp) {};
($traceurRuntime.createClass)(DirectiveWithPropertySetters, {}, {});
Object.defineProperty(DirectiveWithPropertySetters, "annotations", {get: function() {
    return [new Decorator()];
  }});
Object.defineProperty(DirectiveWithPropertySetters, "parameters", {get: function() {
    return [[new PropertySetter('someProp')]];
  }});
var DirectiveWithAttributes = function DirectiveWithAttributes(someAttr) {};
($traceurRuntime.createClass)(DirectiveWithAttributes, {}, {});
Object.defineProperty(DirectiveWithAttributes, "annotations", {get: function() {
    return [new Decorator()];
  }});
Object.defineProperty(DirectiveWithAttributes, "parameters", {get: function() {
    return [[$traceurRuntime.type.string, new Attribute('someAttr')]];
  }});
var FakeRenderer = function FakeRenderer(results) {
  $traceurRuntime.superConstructor($FakeRenderer).call(this);
  this._results = results;
  this.requests = [];
};
var $FakeRenderer = FakeRenderer;
($traceurRuntime.createClass)(FakeRenderer, {
  compile: function(template) {
    ListWrapper.push(this.requests, template);
    return PromiseWrapper.resolve(ListWrapper.removeAt(this._results, 0));
  },
  createRootProtoView: function(elementOrSelector, componentId) {
    return PromiseWrapper.resolve(createRenderProtoView([createRenderComponentElementBinder(0)]));
  }
}, {}, renderApi.Renderer);
Object.defineProperty(FakeRenderer.prototype.compile, "parameters", {get: function() {
    return [[renderApi.ViewDefinition]];
  }});
var FakeUrlResolver = function FakeUrlResolver() {
  $traceurRuntime.superConstructor($FakeUrlResolver).call(this);
};
var $FakeUrlResolver = FakeUrlResolver;
($traceurRuntime.createClass)(FakeUrlResolver, {resolve: function(baseUrl, url) {
    if (baseUrl === null && url == './') {
      return 'http://www.app.com';
    }
    return baseUrl + url;
  }}, {}, UrlResolver);
Object.defineProperty(FakeUrlResolver.prototype.resolve, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [$traceurRuntime.type.string]];
  }});
var FakeTemplateResolver = function FakeTemplateResolver() {
  $traceurRuntime.superConstructor($FakeTemplateResolver).call(this);
  this._cmpTemplates = MapWrapper.create();
};
var $FakeTemplateResolver = FakeTemplateResolver;
($traceurRuntime.createClass)(FakeTemplateResolver, {
  resolve: function(component) {
    var template = MapWrapper.get(this._cmpTemplates, component);
    if (isBlank(template)) {
      throw 'No template';
    }
    return template;
  },
  setView: function(component, template) {
    MapWrapper.set(this._cmpTemplates, component, template);
  }
}, {}, TemplateResolver);
Object.defineProperty(FakeTemplateResolver.prototype.resolve, "parameters", {get: function() {
    return [[Type]];
  }});
Object.defineProperty(FakeTemplateResolver.prototype.setView, "parameters", {get: function() {
    return [[Type], [View]];
  }});
var FakeProtoViewFactory = function FakeProtoViewFactory(results) {
  $traceurRuntime.superConstructor($FakeProtoViewFactory).call(this, null, null);
  this.requests = [];
  this._results = results;
};
var $FakeProtoViewFactory = FakeProtoViewFactory;
($traceurRuntime.createClass)(FakeProtoViewFactory, {createProtoView: function(componentBinding, renderProtoView, directives) {
    ListWrapper.push(this.requests, [componentBinding, renderProtoView, directives]);
    return ListWrapper.removeAt(this._results, 0);
  }}, {}, ProtoViewFactory);
Object.defineProperty(FakeProtoViewFactory.prototype.createProtoView, "parameters", {get: function() {
    return [[DirectiveBinding], [renderApi.ProtoViewDto], [$traceurRuntime.genericType(List, DirectiveBinding)]];
  }});
//# sourceMappingURL=compiler_spec.js.map

//# sourceMappingURL=./compiler_spec.map
 main();