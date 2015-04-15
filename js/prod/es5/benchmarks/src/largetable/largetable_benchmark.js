System.register(["angular2/change_detection", "angular2/src/core/exception_handler", "angular2/angular2", "angular2/src/core/compiler/compiler", "angular2/src/core/compiler/directive_metadata_reader", "angular2/src/render/dom/compiler/template_loader", "angular2/src/core/compiler/template_resolver", "angular2/src/render/dom/shadow_dom/shadow_dom_strategy", "angular2/src/render/dom/shadow_dom/native_shadow_dom_strategy", "angular2/src/render/dom/shadow_dom/emulated_unscoped_shadow_dom_strategy", "angular2/src/core/life_cycle/life_cycle", "angular2/src/services/url_resolver", "angular2/src/render/dom/shadow_dom/style_url_resolver", "angular2/src/core/compiler/component_url_mapper", "angular2/src/render/dom/shadow_dom/style_inliner", "angular2/src/core/compiler/dynamic_component_loader", "angular2/src/core/testability/testability", "angular2/src/reflection/reflection", "angular2/src/reflection/reflection_capabilities", "angular2/src/dom/dom_adapter", "angular2/src/facade/lang", "angular2/src/facade/browser", "angular2/src/test_lib/benchmark_util", "angular2/src/services/xhr", "angular2/src/services/xhr_impl", "angular2/directives", "angular2/src/dom/browser_adapter", "angular2/src/render/dom/events/event_manager", "angular2/src/facade/collection", "angular2/src/core/annotations/visibility", "angular2/src/core/compiler/view_factory", "angular2/src/core/compiler/proto_view_factory", "angular2/src/render/api", "angular2/src/render/dom/direct_dom_renderer", "angular2/src/render/dom/compiler/compiler", "angular2/src/render/dom/view/view_factory", "angular2/di"], function($__export) {
  "use strict";
  var Parser,
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
      BaseException,
      window,
      document,
      gc,
      getIntParameter,
      getStringParameter,
      bindAction,
      XHR,
      XHRImpl,
      If,
      For,
      Switch,
      SwitchWhen,
      SwitchDefault,
      BrowserDomAdapter,
      EventManager,
      ListWrapper,
      Parent,
      ViewFactory,
      VIEW_POOL_CAPACITY,
      ProtoViewFactory,
      Renderer,
      DirectDomRenderer,
      rc,
      rvf,
      Inject,
      bind,
      BENCHMARK_TYPE,
      LARGETABLE_ROWS,
      LARGETABLE_COLS,
      BASELINE_LARGETABLE_TEMPLATE,
      BaseLineLargetableComponent,
      CellData,
      AppComponent,
      LargetableComponent;
  function _createBindings() {
    return [bind(BENCHMARK_TYPE).toValue(getStringParameter('benchmarkType')), bind(LARGETABLE_ROWS).toValue(getIntParameter('rows')), bind(LARGETABLE_COLS).toValue(getIntParameter('columns'))];
  }
  function setupReflector() {
    reflector.reflectionCapabilities = new ReflectionCapabilities();
    reflector.registerGetters({
      'benchmarktype': (function(o) {
        return o.benchmarktype;
      }),
      'switch': (function(o) {
        return null;
      }),
      'switchWhen': (function(o) {
        return o.switchWhen;
      })
    });
    reflector.registerSetters({
      'benchmarktype': (function(o, v) {
        return o.benchmarktype = v;
      }),
      'switch': (function(o, v) {
        return null;
      }),
      'switchWhen': (function(o, v) {
        return o.switchWhen = v;
      })
    });
  }
  function main() {
    BrowserDomAdapter.makeCurrent();
    var totalRows = getIntParameter('rows');
    var totalColumns = getIntParameter('columns');
    BASELINE_LARGETABLE_TEMPLATE = DOM.createTemplate('<table></table>');
    setupReflector();
    var app;
    var lifecycle;
    var baselineRootLargetableComponent;
    var count = 0;
    function ng2DestroyDom() {
      app.data = null;
      app.benchmarkType = 'none';
      lifecycle.tick();
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
      var data = ListWrapper.createFixedSize(totalRows);
      for (var i = 0; i < totalRows; i++) {
        data[i] = ListWrapper.createFixedSize(totalColumns);
        for (var j = 0; j < totalColumns; j++) {
          data[i][j] = new CellData(i, j);
        }
      }
      app.data = data;
      app.benchmarkType = getStringParameter('benchmarkType');
      lifecycle.tick();
    }
    function noop() {}
    function initNg2() {
      bootstrap(AppComponent, _createBindings()).then((function(ref) {
        var injector = ref.injector;
        app = injector.get(AppComponent);
        lifecycle = injector.get(LifeCycle);
        bindAction('#ng2DestroyDom', ng2DestroyDom);
        bindAction('#ng2CreateDom', ng2CreateDom);
        bindAction('#ng2UpdateDomProfile', profile(ng2CreateDom, noop, 'ng2-update'));
        bindAction('#ng2CreateDomProfile', profile(ng2CreateDom, ng2DestroyDom, 'ng2-create'));
      }));
    }
    function baselineDestroyDom() {
      baselineRootLargetableComponent.update(buildTable(0, 0));
    }
    function baselineCreateDom() {
      baselineRootLargetableComponent.update(buildTable(totalRows, totalColumns));
    }
    function initBaseline() {
      baselineRootLargetableComponent = new BaseLineLargetableComponent(DOM.querySelector(document, 'baseline'), getStringParameter('benchmarkType'), getIntParameter('rows'), getIntParameter('columns'));
      bindAction('#baselineDestroyDom', baselineDestroyDom);
      bindAction('#baselineCreateDom', baselineCreateDom);
      bindAction('#baselineUpdateDomProfile', profile(baselineCreateDom, noop, 'baseline-update'));
      bindAction('#baselineCreateDomProfile', profile(baselineCreateDom, baselineDestroyDom, 'baseline-create'));
    }
    initNg2();
    initBaseline();
  }
  function buildTable(rows, columns) {
    var tbody = DOM.createElement('tbody');
    var template = DOM.createElement('span');
    var i,
        j,
        row,
        cell;
    DOM.appendChild(template, DOM.createElement('span'));
    DOM.appendChild(template, DOM.createTextNode(':'));
    DOM.appendChild(template, DOM.createElement('span'));
    DOM.appendChild(template, DOM.createTextNode('|'));
    for (i = 0; i < rows; i++) {
      row = DOM.createElement('div');
      DOM.appendChild(tbody, row);
      for (j = 0; j < columns; j++) {
        cell = DOM.clone(template);
        DOM.appendChild(row, cell);
        DOM.setText(cell.childNodes[0], i.toString());
        DOM.setText(cell.childNodes[2], j.toString());
      }
    }
    return tbody;
  }
  $__export("main", main);
  return {
    setters: [function($__m) {
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
      BaseException = $__m.BaseException;
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
      For = $__m.For;
      Switch = $__m.Switch;
      SwitchWhen = $__m.SwitchWhen;
      SwitchDefault = $__m.SwitchDefault;
    }, function($__m) {
      BrowserDomAdapter = $__m.BrowserDomAdapter;
    }, function($__m) {
      EventManager = $__m.EventManager;
    }, function($__m) {
      ListWrapper = $__m.ListWrapper;
    }, function($__m) {
      Parent = $__m.Parent;
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
      BENCHMARK_TYPE = $__export("BENCHMARK_TYPE", 'LargetableComponent.benchmarkType');
      LARGETABLE_ROWS = $__export("LARGETABLE_ROWS", 'LargetableComponent.rows');
      LARGETABLE_COLS = $__export("LARGETABLE_COLS", 'LargetableComponent.cols');
      BaseLineLargetableComponent = (function() {
        var BaseLineLargetableComponent = function BaseLineLargetableComponent(element, benchmarkType, rows, columns) {
          this.element = element;
          this.benchmarkType = benchmarkType;
          this.rows = rows;
          this.columns = columns;
          this.table = DOM.clone(BASELINE_LARGETABLE_TEMPLATE.content.firstChild);
          var shadowRoot = DOM.createShadowRoot(this.element);
          DOM.appendChild(shadowRoot, this.table);
        };
        return ($traceurRuntime.createClass)(BaseLineLargetableComponent, {update: function(tbody) {
            var oldBody = DOM.querySelector(this.table, 'tbody');
            if (oldBody != null) {
              DOM.replaceChild(this.table, tbody, oldBody);
            } else {
              DOM.appendChild(this.table, tbody);
            }
          }}, {});
      }());
      Object.defineProperty(BaseLineLargetableComponent, "parameters", {get: function() {
          return [[], [], [assert.type.number], [assert.type.number]];
        }});
      CellData = (function() {
        var CellData = function CellData(i, j) {
          this.i = i;
          this.j = j;
        };
        return ($traceurRuntime.createClass)(CellData, {
          jFn: function() {
            return this.j;
          },
          iFn: function() {
            return this.i;
          }
        }, {});
      }());
      AppComponent = (function() {
        var AppComponent = function AppComponent() {
          ;
        };
        return ($traceurRuntime.createClass)(AppComponent, {}, {});
      }());
      Object.defineProperty(AppComponent, "annotations", {get: function() {
          return [new Component({selector: 'app'}), new View({
            directives: [LargetableComponent],
            template: "<largetable [data]='data' [benchmarkType]='benchmarkType'></largetable>"
          })];
        }});
      LargetableComponent = (function() {
        var LargetableComponent = function LargetableComponent(benchmarkType, rows, columns) {
          this.benchmarkType = benchmarkType;
          this.rows = rows;
          this.columns = columns;
        };
        return ($traceurRuntime.createClass)(LargetableComponent, {}, {});
      }());
      Object.defineProperty(LargetableComponent, "annotations", {get: function() {
          return [new Component({
            selector: 'largetable',
            properties: {
              'data': 'data',
              'benchmarkType': 'benchmarktype'
            }
          }), new View({
            directives: [For, Switch, SwitchWhen, SwitchDefault],
            template: "\n      <table [switch]=\"benchmarkType\">\n        <tbody template=\"switch-when 'interpolation'\">\n          <tr template=\"for #row of data\">\n            <td template=\"for #column of row\">\n              {{column.i}}:{{column.j}}|\n            </td>\n          </tr>\n        </tbody>\n        <tbody template=\"switch-when 'interpolationAttr'\">\n          <tr template=\"for #row of data\">\n            <td template=\"for #column of row\" i=\"{{column.i}}\" j=\"{{column.j}}\">\n              i,j attrs\n            </td>\n          </tr>\n        </tbody>\n        <tbody template=\"switch-when 'interpolationFn'\">\n          <tr template=\"for #row of data\">\n            <td template=\"for #column of row\">\n              {{column.iFn()}}:{{column.jFn()}}|\n            </td>\n          </tr>\n        </tbody>\n        <tbody template=\"switch-default\">\n          <tr>\n            <td>\n              <em>{{benchmarkType}} not yet implemented</em>\n            </td>\n          </tr>\n        </tbody>\n      </table>"
          })];
        }});
      Object.defineProperty(LargetableComponent, "parameters", {get: function() {
          return [[new Inject(BENCHMARK_TYPE)], [new Inject(LARGETABLE_ROWS)], [new Inject(LARGETABLE_COLS)]];
        }});
    }
  };
});
//# sourceMappingURL=largetable_benchmark.es6.map

//# sourceMappingURL=./largetable_benchmark.js.map