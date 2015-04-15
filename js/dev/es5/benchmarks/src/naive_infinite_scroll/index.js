System.register(["rtts_assert/rtts_assert", "angular2/src/facade/lang", "angular2/src/dom/dom_adapter", "angular2/src/facade/collection", "angular2/change_detection", "angular2/src/core/exception_handler", "angular2/angular2", "angular2/src/reflection/reflection", "angular2/src/reflection/reflection_capabilities", "angular2/src/core/compiler/compiler", "angular2/src/core/compiler/directive_metadata_reader", "angular2/src/render/dom/shadow_dom/shadow_dom_strategy", "angular2/src/render/dom/shadow_dom/native_shadow_dom_strategy", "angular2/src/render/dom/shadow_dom/emulated_unscoped_shadow_dom_strategy", "angular2/src/render/dom/compiler/template_loader", "angular2/src/core/compiler/template_resolver", "angular2/src/core/life_cycle/life_cycle", "angular2/src/services/xhr", "angular2/src/services/xhr_impl", "angular2/src/services/url_resolver", "angular2/src/render/dom/shadow_dom/style_url_resolver", "angular2/src/core/compiler/component_url_mapper", "angular2/src/render/dom/shadow_dom/style_inliner", "angular2/src/core/compiler/dynamic_component_loader", "angular2/src/core/testability/testability", "angular2/directives", "./app", "./scroll_area", "./scroll_item", "./cells", "angular2/src/render/dom/events/event_manager", "angular2/src/core/compiler/view_factory", "angular2/src/core/compiler/proto_view_factory", "angular2/src/render/api", "angular2/src/render/dom/direct_dom_renderer", "angular2/src/render/dom/compiler/compiler", "angular2/src/render/dom/view/view_factory", "angular2/di"], function($__export) {
  "use strict";
  var assert,
      int,
      isBlank,
      DOM,
      MapWrapper,
      Parser,
      Lexer,
      ChangeDetector,
      ChangeDetection,
      ExceptionHandler,
      bootstrap,
      Component,
      Viewport,
      View,
      ViewContainer,
      Compiler,
      onChange,
      NgElement,
      Decorator,
      reflector,
      ReflectionCapabilities,
      CompilerCache,
      DirectiveMetadataReader,
      ShadowDomStrategy,
      NativeShadowDomStrategy,
      EmulatedUnscopedShadowDomStrategy,
      TemplateLoader,
      TemplateResolver,
      LifeCycle,
      XHR,
      XHRImpl,
      UrlResolver,
      StyleUrlResolver,
      ComponentUrlMapper,
      StyleInliner,
      DynamicComponentLoader,
      TestabilityRegistry,
      Testability,
      If,
      For,
      App,
      ScrollAreaComponent,
      ScrollItemComponent,
      CompanyNameComponent,
      OpportunityNameComponent,
      OfferingNameComponent,
      AccountCellComponent,
      StageButtonsComponent,
      FormattedCellComponent,
      EventManager,
      ViewFactory,
      VIEW_POOL_CAPACITY,
      ProtoViewFactory,
      Renderer,
      DirectDomRenderer,
      rc,
      rvf,
      Inject,
      bind;
  function main() {
    setupReflector();
    bootstrap(App, createBindings());
  }
  function createBindings() {
    return assert.returnType(([bind(VIEW_POOL_CAPACITY).toValue(100000)]), List);
  }
  function setupReflector() {
    reflector.reflectionCapabilities = new ReflectionCapabilities();
    reflector.registerSetters({'style': (function(o, m) {
        MapWrapper.forEach(m, function(v, k) {
          o.style.setProperty(k, v);
        });
      })});
    reflector.registerMethods({
      'onScroll': (function(o, args) {
        o.onScroll(args[0]);
      }),
      'setStage': (function(o, args) {
        return o.setStage(args[0]);
      })
    });
  }
  $__export("main", main);
  $__export("setupReflector", setupReflector);
  return {
    setters: [function($__m) {
      assert = $__m.assert;
    }, function($__m) {
      int = $__m.int;
      isBlank = $__m.isBlank;
    }, function($__m) {
      DOM = $__m.DOM;
    }, function($__m) {
      MapWrapper = $__m.MapWrapper;
    }, function($__m) {
      Parser = $__m.Parser;
      Lexer = $__m.Lexer;
      ChangeDetector = $__m.ChangeDetector;
      ChangeDetection = $__m.ChangeDetection;
    }, function($__m) {
      ExceptionHandler = $__m.ExceptionHandler;
    }, function($__m) {
      bootstrap = $__m.bootstrap;
      Component = $__m.Component;
      Viewport = $__m.Viewport;
      View = $__m.View;
      ViewContainer = $__m.ViewContainer;
      Compiler = $__m.Compiler;
      onChange = $__m.onChange;
      NgElement = $__m.NgElement;
      Decorator = $__m.Decorator;
    }, function($__m) {
      reflector = $__m.reflector;
    }, function($__m) {
      ReflectionCapabilities = $__m.ReflectionCapabilities;
    }, function($__m) {
      CompilerCache = $__m.CompilerCache;
    }, function($__m) {
      DirectiveMetadataReader = $__m.DirectiveMetadataReader;
    }, function($__m) {
      ShadowDomStrategy = $__m.ShadowDomStrategy;
    }, function($__m) {
      NativeShadowDomStrategy = $__m.NativeShadowDomStrategy;
    }, function($__m) {
      EmulatedUnscopedShadowDomStrategy = $__m.EmulatedUnscopedShadowDomStrategy;
    }, function($__m) {
      TemplateLoader = $__m.TemplateLoader;
    }, function($__m) {
      TemplateResolver = $__m.TemplateResolver;
    }, function($__m) {
      LifeCycle = $__m.LifeCycle;
    }, function($__m) {
      XHR = $__m.XHR;
    }, function($__m) {
      XHRImpl = $__m.XHRImpl;
    }, function($__m) {
      UrlResolver = $__m.UrlResolver;
    }, function($__m) {
      StyleUrlResolver = $__m.StyleUrlResolver;
    }, function($__m) {
      ComponentUrlMapper = $__m.ComponentUrlMapper;
    }, function($__m) {
      StyleInliner = $__m.StyleInliner;
    }, function($__m) {
      DynamicComponentLoader = $__m.DynamicComponentLoader;
    }, function($__m) {
      TestabilityRegistry = $__m.TestabilityRegistry;
      Testability = $__m.Testability;
    }, function($__m) {
      If = $__m.If;
      For = $__m.For;
    }, function($__m) {
      App = $__m.App;
    }, function($__m) {
      ScrollAreaComponent = $__m.ScrollAreaComponent;
    }, function($__m) {
      ScrollItemComponent = $__m.ScrollItemComponent;
    }, function($__m) {
      CompanyNameComponent = $__m.CompanyNameComponent;
      OpportunityNameComponent = $__m.OpportunityNameComponent;
      OfferingNameComponent = $__m.OfferingNameComponent;
      AccountCellComponent = $__m.AccountCellComponent;
      StageButtonsComponent = $__m.StageButtonsComponent;
      FormattedCellComponent = $__m.FormattedCellComponent;
    }, function($__m) {
      EventManager = $__m.EventManager;
    }, function($__m) {
      ViewFactory = $__m.ViewFactory;
      VIEW_POOL_CAPACITY = $__m.VIEW_POOL_CAPACITY;
    }, function($__m) {
      ProtoViewFactory = $__m.ProtoViewFactory;
    }, function($__m) {
      Renderer = $__m.Renderer;
    }, function($__m) {
      DirectDomRenderer = $__m.DirectDomRenderer;
    }, function($__m) {
      rc = $__m;
    }, function($__m) {
      rvf = $__m;
    }, function($__m) {
      Inject = $__m.Inject;
      bind = $__m.bind;
    }],
    execute: function() {
    }
  };
});
//# sourceMappingURL=index.es6.map

//# sourceMappingURL=./index.js.map