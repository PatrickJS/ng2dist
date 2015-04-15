System.register(["./index_common", "angular2/angular2", "angular2/change_detection", "angular2/src/core/exception_handler", "angular2/src/core/life_cycle/life_cycle", "angular2/src/core/compiler/compiler", "angular2/src/core/compiler/directive_metadata_reader", "angular2/src/render/dom/shadow_dom/shadow_dom_strategy", "angular2/src/render/dom/shadow_dom/native_shadow_dom_strategy", "angular2/src/render/dom/shadow_dom/emulated_unscoped_shadow_dom_strategy", "angular2/src/render/dom/compiler/template_loader", "angular2/src/core/compiler/template_resolver", "angular2/src/services/xhr", "angular2/src/services/xhr_impl", "angular2/src/services/url_resolver", "angular2/src/render/dom/shadow_dom/style_url_resolver", "angular2/src/core/compiler/component_url_mapper", "angular2/src/render/dom/shadow_dom/style_inliner", "angular2/src/render/dom/events/event_manager", "angular2/src/core/compiler/dynamic_component_loader", "angular2/src/core/testability/testability", "angular2/src/reflection/reflection", "angular2/src/core/compiler/view_factory", "angular2/src/core/compiler/proto_view_factory", "angular2/src/render/api", "angular2/src/render/dom/direct_dom_renderer", "angular2/src/render/dom/compiler/compiler", "angular2/src/render/dom/view/view_factory", "angular2/di"], function($__export) {
  "use strict";
  var app,
      Component,
      Decorator,
      View,
      NgElement,
      Lexer,
      Parser,
      ChangeDetection,
      ChangeDetector,
      ExceptionHandler,
      LifeCycle,
      Compiler,
      CompilerCache,
      DirectiveMetadataReader,
      ShadowDomStrategy,
      NativeShadowDomStrategy,
      EmulatedUnscopedShadowDomStrategy,
      TemplateLoader,
      TemplateResolver,
      XHR,
      XHRImpl,
      UrlResolver,
      StyleUrlResolver,
      ComponentUrlMapper,
      StyleInliner,
      EventManager,
      DynamicComponentLoader,
      TestabilityRegistry,
      Testability,
      reflector,
      ViewFactory,
      VIEW_POOL_CAPACITY,
      ProtoViewFactory,
      Renderer,
      DirectDomRenderer,
      rc,
      rvf,
      Inject;
  function setup() {
    reflector.registerType(app.HelloCmp, {
      "factory": (function(service) {
        return new app.HelloCmp(service);
      }),
      "parameters": [[app.GreetingService]],
      "annotations": [new Component({
        selector: 'hello-app',
        injectables: [app.GreetingService]
      }), new View({
        directives: [app.RedDec],
        template: "<div class=\"greeting\">{{greeting}} <span red>world</span>!</div>\n                 <button class=\"changeButton\" (click)=\"changeGreeting()\">change greeting</button>"
      })]
    });
    reflector.registerType(app.RedDec, {
      "factory": (function(el) {
        return new app.RedDec(el);
      }),
      "parameters": [[NgElement]],
      "annotations": [new Decorator({selector: '[red]'})]
    });
    reflector.registerType(app.GreetingService, {
      "factory": (function() {
        return new app.GreetingService();
      }),
      "parameters": [],
      "annotations": []
    });
    reflector.registerType(Compiler, {
      "factory": (function(reader, compilerCache, tplResolver, cmpUrlMapper, urlResolver, renderer, protoViewFactory) {
        return new Compiler(reader, compilerCache, tplResolver, cmpUrlMapper, urlResolver, renderer, protoViewFactory);
      }),
      "parameters": [[DirectiveMetadataReader], [CompilerCache], [TemplateResolver], [ComponentUrlMapper], [UrlResolver], [Renderer], [ProtoViewFactory]],
      "annotations": []
    });
    reflector.registerType(CompilerCache, {
      "factory": (function() {
        return new CompilerCache();
      }),
      "parameters": [],
      "annotations": []
    });
    reflector.registerType(Parser, {
      "factory": (function(lexer) {
        return new Parser(lexer);
      }),
      "parameters": [[Lexer]],
      "annotations": []
    });
    reflector.registerType(TemplateLoader, {
      "factory": (function(xhr, urlResolver) {
        return new TemplateLoader(xhr, urlResolver);
      }),
      "parameters": [[XHR], [UrlResolver]],
      "annotations": []
    });
    reflector.registerType(TemplateResolver, {
      "factory": (function() {
        return new TemplateResolver();
      }),
      "parameters": [],
      "annotations": []
    });
    reflector.registerType(XHR, {
      "factory": (function() {
        return new XHRImpl();
      }),
      "parameters": [],
      "annotations": []
    });
    reflector.registerType(DirectiveMetadataReader, {
      "factory": (function() {
        return new DirectiveMetadataReader();
      }),
      "parameters": [],
      "annotations": []
    });
    reflector.registerType(Lexer, {
      "factory": (function() {
        return new Lexer();
      }),
      "parameters": [],
      "annotations": []
    });
    reflector.registerType(ExceptionHandler, {
      "factory": (function() {
        return new ExceptionHandler();
      }),
      "parameters": [],
      "annotations": []
    });
    reflector.registerType(LifeCycle, {
      "factory": (function(exHandler, cd) {
        return new LifeCycle(exHandler, cd);
      }),
      "parameters": [[ExceptionHandler], [ChangeDetector]],
      "annotations": []
    });
    reflector.registerType(ShadowDomStrategy, {
      "factory": (function(strategy) {
        return strategy;
      }),
      "parameters": [[NativeShadowDomStrategy]],
      "annotations": []
    });
    reflector.registerType(NativeShadowDomStrategy, {
      "factory": (function(styleUrlResolver) {
        return new NativeShadowDomStrategy(styleUrlResolver);
      }),
      "parameters": [[StyleUrlResolver]],
      "annotations": []
    });
    reflector.registerType(EmulatedUnscopedShadowDomStrategy, {
      "factory": (function(styleUrlResolver) {
        return new EmulatedUnscopedShadowDomStrategy(styleUrlResolver, null);
      }),
      "parameters": [[StyleUrlResolver]],
      "annotations": []
    });
    reflector.registerType(StyleUrlResolver, {
      "factory": (function(urlResolver) {
        return new StyleUrlResolver(urlResolver);
      }),
      "parameters": [[UrlResolver]],
      "annotations": []
    });
    reflector.registerType(UrlResolver, {
      "factory": (function() {
        return new UrlResolver();
      }),
      "parameters": [],
      "annotations": []
    });
    reflector.registerType(ComponentUrlMapper, {
      "factory": (function() {
        return new ComponentUrlMapper();
      }),
      "parameters": [],
      "annotations": []
    });
    reflector.registerType(StyleInliner, {
      "factory": (function(xhr, styleUrlResolver, urlResolver) {
        return new StyleInliner(xhr, styleUrlResolver, urlResolver);
      }),
      "parameters": [[XHR], [StyleUrlResolver], [UrlResolver]],
      "annotations": []
    });
    reflector.registerType(EventManager, {
      "factory": (function() {
        return new EventManager([], null);
      }),
      "parameters": [],
      "annotations": []
    });
    reflector.registerType(DynamicComponentLoader, {
      "factory": (function(compiler, reader, renderer, viewFactory) {
        return new DynamicComponentLoader(compiler, reader, renderer, viewFactory);
      }),
      "parameters": [[Compiler], [DirectiveMetadataReader], [Renderer], [ViewFactory]],
      "annotations": []
    });
    reflector.registerType(DirectDomRenderer, {
      "factory": (function(renderCompiler, renderViewFactory, shadowDomStrategy) {
        return new DirectDomRenderer(renderCompiler, renderViewFactory, shadowDomStrategy);
      }),
      "parameters": [[rc.Compiler], [rvf.ViewFactory], [ShadowDomStrategy]],
      "annotations": []
    });
    reflector.registerType(rc.DefaultCompiler, {
      "factory": (function(parser, shadowDomStrategy, templateLoader) {
        return new rc.DefaultCompiler(parser, shadowDomStrategy, templateLoader);
      }),
      "parameters": [[Parser], [ShadowDomStrategy], [TemplateLoader]],
      "annotations": []
    });
    reflector.registerType(rvf.ViewFactory, {
      "factory": (function(capacity, eventManager, shadowDomStrategy) {
        return new rvf.ViewFactory(capacity, eventManager, shadowDomStrategy);
      }),
      "parameters": [[new Inject(rvf.VIEW_POOL_CAPACITY)], [EventManager], [ShadowDomStrategy]],
      "annotations": []
    });
    reflector.registerType(rvf.VIEW_POOL_CAPACITY, {
      "factory": (function() {
        return 10000;
      }),
      "parameters": [],
      "annotations": []
    });
    reflector.registerType(ProtoViewFactory, {
      "factory": (function(changeDetection, renderer) {
        return new ProtoViewFactory(changeDetection, renderer);
      }),
      "parameters": [[ChangeDetection], [Renderer]],
      "annotations": []
    });
    reflector.registerType(ViewFactory, {
      "factory": (function(capacity) {
        return new ViewFactory(capacity);
      }),
      "parameters": [[new Inject(VIEW_POOL_CAPACITY)]],
      "annotations": []
    });
    reflector.registerType(VIEW_POOL_CAPACITY, {
      "factory": (function() {
        return 10000;
      }),
      "parameters": [],
      "annotations": []
    });
    reflector.registerType(TestabilityRegistry, {
      "factory": (function() {
        return new TestabilityRegistry();
      }),
      "parameters": [],
      "annotations": []
    });
    reflector.registerType(Testability, {
      "factory": (function() {
        return new Testability();
      }),
      "parameters": [],
      "annotations": []
    });
    reflector.registerType(DirectDomRenderer, {
      "factory": (function(renderCompiler, renderViewFactory, shadowDomStrategy) {
        return new DirectDomRenderer(renderCompiler, renderViewFactory, shadowDomStrategy);
      }),
      "parameters": [[rc.Compiler], [rvf.ViewFactory], [ShadowDomStrategy]],
      "annotations": []
    });
    reflector.registerType(rc.DefaultCompiler, {
      "factory": (function(parser, shadowDomStrategy, templateLoader) {
        return new rc.DefaultCompiler(parser, shadowDomStrategy, templateLoader);
      }),
      "parameters": [[Parser], [ShadowDomStrategy], [TemplateLoader]],
      "annotations": []
    });
    reflector.registerType(rvf.ViewFactory, {
      "factory": (function(capacity, eventManager, shadowDomStrategy) {
        return new rvf.ViewFactory(capacity, eventManager, shadowDomStrategy);
      }),
      "parameters": [[new Inject(rvf.VIEW_POOL_CAPACITY)], [EventManager], [ShadowDomStrategy]],
      "annotations": []
    });
    reflector.registerType(rvf.VIEW_POOL_CAPACITY, {
      "factory": (function() {
        return 10000;
      }),
      "parameters": [],
      "annotations": []
    });
    reflector.registerType(ProtoViewFactory, {
      "factory": (function(changeDetection, renderer) {
        return new ProtoViewFactory(changeDetection, renderer);
      }),
      "parameters": [[ChangeDetection], [Renderer]],
      "annotations": []
    });
    reflector.registerType(ViewFactory, {
      "factory": (function(capacity) {
        return new ViewFactory(capacity);
      }),
      "parameters": [[new Inject(VIEW_POOL_CAPACITY)]],
      "annotations": []
    });
    reflector.registerType(VIEW_POOL_CAPACITY, {
      "factory": (function() {
        return 10000;
      }),
      "parameters": [],
      "annotations": []
    });
    reflector.registerGetters({"greeting": (function(a) {
        return a.greeting;
      })});
    reflector.registerSetters({"greeting": (function(a, v) {
        return a.greeting = v;
      })});
    reflector.registerMethods({"changeGreeting": (function(obj, args) {
        return obj.changeGreeting();
      })});
  }
  function main() {
    setup();
    app.main();
  }
  $__export("main", main);
  return {
    setters: [function($__m) {
      app = $__m;
    }, function($__m) {
      Component = $__m.Component;
      Decorator = $__m.Decorator;
      View = $__m.View;
      NgElement = $__m.NgElement;
    }, function($__m) {
      Lexer = $__m.Lexer;
      Parser = $__m.Parser;
      ChangeDetection = $__m.ChangeDetection;
      ChangeDetector = $__m.ChangeDetector;
    }, function($__m) {
      ExceptionHandler = $__m.ExceptionHandler;
    }, function($__m) {
      LifeCycle = $__m.LifeCycle;
    }, function($__m) {
      Compiler = $__m.Compiler;
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
      EventManager = $__m.EventManager;
    }, function($__m) {
      DynamicComponentLoader = $__m.DynamicComponentLoader;
    }, function($__m) {
      TestabilityRegistry = $__m.TestabilityRegistry;
      Testability = $__m.Testability;
    }, function($__m) {
      reflector = $__m.reflector;
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
    }],
    execute: function() {
    }
  };
});
//# sourceMappingURL=index_static.es6.map

//# sourceMappingURL=./index_static.js.map