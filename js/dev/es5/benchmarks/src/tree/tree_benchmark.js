System.register(["rtts_assert/rtts_assert", "angular2/change_detection", "angular2/src/core/exception_handler", "angular2/angular2", "angular2/src/core/compiler/compiler", "angular2/src/core/compiler/directive_metadata_reader", "angular2/src/render/dom/compiler/template_loader", "angular2/src/core/compiler/template_resolver", "angular2/src/render/dom/shadow_dom/shadow_dom_strategy", "angular2/src/render/dom/shadow_dom/native_shadow_dom_strategy", "angular2/src/render/dom/shadow_dom/emulated_unscoped_shadow_dom_strategy", "angular2/src/core/life_cycle/life_cycle", "angular2/src/services/url_resolver", "angular2/src/render/dom/shadow_dom/style_url_resolver", "angular2/src/core/compiler/component_url_mapper", "angular2/src/render/dom/shadow_dom/style_inliner", "angular2/src/core/compiler/dynamic_component_loader", "angular2/src/core/testability/testability", "angular2/src/reflection/reflection", "angular2/src/reflection/reflection_capabilities", "angular2/src/dom/dom_adapter", "angular2/src/facade/lang", "angular2/src/facade/browser", "angular2/src/test_lib/benchmark_util", "angular2/src/services/xhr", "angular2/src/services/xhr_impl", "angular2/directives", "angular2/src/dom/browser_adapter", "angular2/src/render/dom/events/event_manager", "angular2/src/core/compiler/view_factory", "angular2/src/core/compiler/proto_view_factory", "angular2/src/render/api", "angular2/src/render/dom/direct_dom_renderer", "angular2/src/render/dom/compiler/compiler", "angular2/src/render/dom/view/view_factory", "angular2/di"], function($__export) {
  "use strict";
  var assert,
      Parser,
      Lexer,
      ChangeDetector,
      ChangeDetection,
      jitChangeDetection,
      ExceptionHandler,
      bootstrap,
      Component,
      Viewport,
      View,
      ViewContainer,
      Compiler,
      NgElement,
      Decorator,
      CompilerCache,
      DirectiveMetadataReader,
      TemplateLoader,
      TemplateResolver,
      ShadowDomStrategy,
      NativeShadowDomStrategy,
      EmulatedUnscopedShadowDomStrategy,
      LifeCycle,
      UrlResolver,
      StyleUrlResolver,
      ComponentUrlMapper,
      StyleInliner,
      DynamicComponentLoader,
      TestabilityRegistry,
      Testability,
      reflector,
      ReflectionCapabilities,
      DOM,
      isPresent,
      window,
      document,
      gc,
      getIntParameter,
      getStringParameter,
      bindAction,
      XHR,
      XHRImpl,
      If,
      BrowserDomAdapter,
      EventManager,
      ViewFactory,
      VIEW_POOL_CAPACITY,
      ProtoViewFactory,
      Renderer,
      DirectDomRenderer,
      rc,
      rvf,
      Inject,
      bind,
      BASELINE_TREE_TEMPLATE,
      BASELINE_IF_TEMPLATE,
      TreeNode,
      BaseLineTreeComponent,
      BaseLineInterpolation,
      BaseLineIf,
      AppComponent,
      TreeComponent;
  function createBindings() {
    var viewCacheCapacity = getStringParameter('viewcache') == 'true' ? 10000 : 1;
    return assert.returnType(([bind(rvf.VIEW_POOL_CAPACITY).toValue(viewCacheCapacity), bind(VIEW_POOL_CAPACITY).toValue(viewCacheCapacity)]), List);
  }
  function setupReflector() {
    reflector.reflectionCapabilities = new ReflectionCapabilities();
  }
  function main() {
    BrowserDomAdapter.makeCurrent();
    var maxDepth = getIntParameter('depth');
    setupReflector();
    BASELINE_TREE_TEMPLATE = DOM.createTemplate('<span>_<template class="ng-binding"></template><template class="ng-binding"></template></span>');
    BASELINE_IF_TEMPLATE = DOM.createTemplate('<span template="if"><tree></tree></span>');
    var app;
    var lifeCycle;
    var baselineRootTreeComponent;
    var count = 0;
    function ng2DestroyDom() {
      app.initData = new TreeNode('', null, null);
      lifeCycle.tick();
    }
    function profile(create, destroy, name) {
      return function() {
        window.console.profile(name + ' w GC');
        var duration = 0;
        var count = 0;
        while (count++ < 150) {
          gc();
          var start = window.performance.now();
          create();
          duration += window.performance.now() - start;
          destroy();
        }
        window.console.profileEnd(name + ' w GC');
        window.console.log(("Iterations: " + count + "; time: " + duration / count + " ms / iteration"));
        window.console.profile(name + ' w/o GC');
        duration = 0;
        count = 0;
        while (count++ < 150) {
          var start = window.performance.now();
          create();
          duration += window.performance.now() - start;
          destroy();
        }
        window.console.profileEnd(name + ' w/o GC');
        window.console.log(("Iterations: " + count + "; time: " + duration / count + " ms / iteration"));
      };
    }
    function ng2CreateDom() {
      var values = count++ % 2 == 0 ? ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '*'] : ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', '-'];
      app.initData = buildTree(maxDepth, values, 0);
      lifeCycle.tick();
    }
    function noop() {}
    function initNg2() {
      bootstrap(AppComponent, createBindings()).then((function(ref) {
        var injector = ref.injector;
        lifeCycle = injector.get(LifeCycle);
        app = injector.get(AppComponent);
        bindAction('#ng2DestroyDom', ng2DestroyDom);
        bindAction('#ng2CreateDom', ng2CreateDom);
        bindAction('#ng2UpdateDomProfile', profile(ng2CreateDom, noop, 'ng2-update'));
        bindAction('#ng2CreateDomProfile', profile(ng2CreateDom, ng2DestroyDom, 'ng2-create'));
      }));
    }
    function baselineDestroyDom() {
      baselineRootTreeComponent.update(new TreeNode('', null, null));
    }
    function baselineCreateDom() {
      var values = count++ % 2 == 0 ? ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '*'] : ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', '-'];
      baselineRootTreeComponent.update(buildTree(maxDepth, values, 0));
    }
    function initBaseline() {
      var tree = DOM.createElement('tree');
      DOM.appendChild(DOM.querySelector(document, 'baseline'), tree);
      baselineRootTreeComponent = new BaseLineTreeComponent(tree);
      bindAction('#baselineDestroyDom', baselineDestroyDom);
      bindAction('#baselineCreateDom', baselineCreateDom);
      bindAction('#baselineUpdateDomProfile', profile(baselineCreateDom, noop, 'baseline-update'));
      bindAction('#baselineCreateDomProfile', profile(baselineCreateDom, baselineDestroyDom, 'baseline-create'));
    }
    initNg2();
    initBaseline();
  }
  function buildTree(maxDepth, values, curDepth) {
    if (maxDepth === curDepth)
      return new TreeNode('', null, null);
    return new TreeNode(values[curDepth], buildTree(maxDepth, values, curDepth + 1), buildTree(maxDepth, values, curDepth + 1));
  }
  $__export("main", main);
  return {
    setters: [function($__m) {
      assert = $__m.assert;
    }, function($__m) {
      Parser = $__m.Parser;
      Lexer = $__m.Lexer;
      ChangeDetector = $__m.ChangeDetector;
      ChangeDetection = $__m.ChangeDetection;
      jitChangeDetection = $__m.jitChangeDetection;
    }, function($__m) {
      ExceptionHandler = $__m.ExceptionHandler;
    }, function($__m) {
      bootstrap = $__m.bootstrap;
      Component = $__m.Component;
      Viewport = $__m.Viewport;
      View = $__m.View;
      ViewContainer = $__m.ViewContainer;
      Compiler = $__m.Compiler;
      NgElement = $__m.NgElement;
      Decorator = $__m.Decorator;
    }, function($__m) {
      CompilerCache = $__m.CompilerCache;
    }, function($__m) {
      DirectiveMetadataReader = $__m.DirectiveMetadataReader;
    }, function($__m) {
      TemplateLoader = $__m.TemplateLoader;
    }, function($__m) {
      TemplateResolver = $__m.TemplateResolver;
    }, function($__m) {
      ShadowDomStrategy = $__m.ShadowDomStrategy;
    }, function($__m) {
      NativeShadowDomStrategy = $__m.NativeShadowDomStrategy;
    }, function($__m) {
      EmulatedUnscopedShadowDomStrategy = $__m.EmulatedUnscopedShadowDomStrategy;
    }, function($__m) {
      LifeCycle = $__m.LifeCycle;
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
      reflector = $__m.reflector;
    }, function($__m) {
      ReflectionCapabilities = $__m.ReflectionCapabilities;
    }, function($__m) {
      DOM = $__m.DOM;
    }, function($__m) {
      isPresent = $__m.isPresent;
    }, function($__m) {
      window = $__m.window;
      document = $__m.document;
      gc = $__m.gc;
    }, function($__m) {
      getIntParameter = $__m.getIntParameter;
      getStringParameter = $__m.getStringParameter;
      bindAction = $__m.bindAction;
    }, function($__m) {
      XHR = $__m.XHR;
    }, function($__m) {
      XHRImpl = $__m.XHRImpl;
    }, function($__m) {
      If = $__m.If;
    }, function($__m) {
      BrowserDomAdapter = $__m.BrowserDomAdapter;
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
      TreeNode = (function() {
        var TreeNode = function TreeNode(value, left, right) {
          this.value = value;
          this.left = left;
          this.right = right;
        };
        return ($traceurRuntime.createClass)(TreeNode, {}, {});
      }());
      BaseLineTreeComponent = (function() {
        var BaseLineTreeComponent = function BaseLineTreeComponent(element) {
          this.element = element;
          var clone = DOM.clone(BASELINE_TREE_TEMPLATE.content.firstChild);
          var shadowRoot = this.element.createShadowRoot();
          DOM.appendChild(shadowRoot, clone);
          var child = clone.firstChild;
          this.value = new BaseLineInterpolation(child);
          child = DOM.nextSibling(child);
          this.left = new BaseLineIf(child);
          child = DOM.nextSibling(child);
          this.right = new BaseLineIf(child);
        };
        return ($traceurRuntime.createClass)(BaseLineTreeComponent, {update: function(value) {
            assert.argumentTypes(value, TreeNode);
            this.value.update(value.value);
            this.left.update(value.left);
            this.right.update(value.right);
          }}, {});
      }());
      Object.defineProperty(BaseLineTreeComponent.prototype.update, "parameters", {get: function() {
          return [[TreeNode]];
        }});
      BaseLineInterpolation = (function() {
        var BaseLineInterpolation = function BaseLineInterpolation(textNode) {
          this.value = null;
          this.textNode = textNode;
        };
        return ($traceurRuntime.createClass)(BaseLineInterpolation, {update: function(value) {
            assert.argumentTypes(value, assert.type.string);
            if (this.value !== value) {
              this.value = value;
              DOM.setText(this.textNode, value + ' ');
            }
          }}, {});
      }());
      Object.defineProperty(BaseLineInterpolation.prototype.update, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      BaseLineIf = (function() {
        var BaseLineIf = function BaseLineIf(anchor) {
          this.anchor = anchor;
          this.condition = false;
          this.component = null;
        };
        return ($traceurRuntime.createClass)(BaseLineIf, {update: function(value) {
            assert.argumentTypes(value, TreeNode);
            var newCondition = isPresent(value);
            if (this.condition !== newCondition) {
              this.condition = newCondition;
              if (isPresent(this.component)) {
                DOM.remove(this.component.element);
                this.component = null;
              }
              if (this.condition) {
                var element = DOM.firstChild(DOM.clone(BASELINE_IF_TEMPLATE).content);
                this.anchor.parentNode.insertBefore(element, DOM.nextSibling(this.anchor));
                this.component = new BaseLineTreeComponent(DOM.firstChild(element));
              }
            }
            if (isPresent(this.component)) {
              this.component.update(value);
            }
          }}, {});
      }());
      Object.defineProperty(BaseLineIf.prototype.update, "parameters", {get: function() {
          return [[TreeNode]];
        }});
      AppComponent = (function() {
        var AppComponent = function AppComponent() {
          this.initData = new TreeNode('', null, null);
        };
        return ($traceurRuntime.createClass)(AppComponent, {}, {});
      }());
      Object.defineProperty(AppComponent, "annotations", {get: function() {
          return [new Component({selector: 'app'}), new View({
            directives: [TreeComponent],
            template: "<tree [data]='initData'></tree>"
          })];
        }});
      TreeComponent = (function() {
        var TreeComponent = function TreeComponent() {
          ;
        };
        return ($traceurRuntime.createClass)(TreeComponent, {}, {});
      }());
      Object.defineProperty(TreeComponent, "annotations", {get: function() {
          return [new Component({
            selector: 'tree',
            properties: {'data': 'data'}
          }), new View({
            directives: [TreeComponent, If],
            template: "<span> {{data.value}} <span template='if data.right != null'><tree [data]='data.right'></tree></span><span template='if data.left != null'><tree [data]='data.left'></tree></span></span>"
          })];
        }});
    }
  };
});
//# sourceMappingURL=tree_benchmark.es6.map

//# sourceMappingURL=./tree_benchmark.js.map