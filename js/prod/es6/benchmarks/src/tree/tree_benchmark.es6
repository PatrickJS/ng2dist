import {Parser,
  Lexer,
  ChangeDetector,
  ChangeDetection,
  jitChangeDetection} from 'angular2/change_detection';
import {ExceptionHandler} from 'angular2/src/core/exception_handler';
import {bootstrap,
  Component,
  Viewport,
  View,
  ViewContainer,
  Compiler,
  NgElement,
  Decorator} from 'angular2/angular2';
import {CompilerCache} from 'angular2/src/core/compiler/compiler';
import {DirectiveMetadataReader} from 'angular2/src/core/compiler/directive_metadata_reader';
import {TemplateLoader} from 'angular2/src/render/dom/compiler/template_loader';
import {TemplateResolver} from 'angular2/src/core/compiler/template_resolver';
import {ShadowDomStrategy} from 'angular2/src/render/dom/shadow_dom/shadow_dom_strategy';
import {NativeShadowDomStrategy} from 'angular2/src/render/dom/shadow_dom/native_shadow_dom_strategy';
import {EmulatedUnscopedShadowDomStrategy} from 'angular2/src/render/dom/shadow_dom/emulated_unscoped_shadow_dom_strategy';
import {LifeCycle} from 'angular2/src/core/life_cycle/life_cycle';
import {UrlResolver} from 'angular2/src/services/url_resolver';
import {StyleUrlResolver} from 'angular2/src/render/dom/shadow_dom/style_url_resolver';
import {ComponentUrlMapper} from 'angular2/src/core/compiler/component_url_mapper';
import {StyleInliner} from 'angular2/src/render/dom/shadow_dom/style_inliner';
import {DynamicComponentLoader} from 'angular2/src/core/compiler/dynamic_component_loader';
import {TestabilityRegistry,
  Testability} from 'angular2/src/core/testability/testability';
import {reflector} from 'angular2/src/reflection/reflection';
import {ReflectionCapabilities} from 'angular2/src/reflection/reflection_capabilities';
import {DOM} from 'angular2/src/dom/dom_adapter';
import {isPresent} from 'angular2/src/facade/lang';
import {window,
  document,
  gc} from 'angular2/src/facade/browser';
import {getIntParameter,
  getStringParameter,
  bindAction} from 'angular2/src/test_lib/benchmark_util';
import {XHR} from 'angular2/src/services/xhr';
import {XHRImpl} from 'angular2/src/services/xhr_impl';
import {If} from 'angular2/directives';
import {BrowserDomAdapter} from 'angular2/src/dom/browser_adapter';
import {EventManager} from 'angular2/src/render/dom/events/event_manager';
import {ViewFactory,
  VIEW_POOL_CAPACITY} from 'angular2/src/core/compiler/view_factory';
import {ProtoViewFactory} from 'angular2/src/core/compiler/proto_view_factory';
import {Renderer} from 'angular2/src/render/api';
import {DirectDomRenderer} from 'angular2/src/render/dom/direct_dom_renderer';
import * as rc from 'angular2/src/render/dom/compiler/compiler';
import * as rvf from 'angular2/src/render/dom/view/view_factory';
import {Inject,
  bind} from 'angular2/di';
function createBindings() {
  var viewCacheCapacity = getStringParameter('viewcache') == 'true' ? 10000 : 1;
  return [bind(rvf.VIEW_POOL_CAPACITY).toValue(viewCacheCapacity), bind(VIEW_POOL_CAPACITY).toValue(viewCacheCapacity)];
}
function setupReflector() {
  reflector.reflectionCapabilities = new ReflectionCapabilities();
}
var BASELINE_TREE_TEMPLATE;
var BASELINE_IF_TEMPLATE;
export function main() {
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
      window.console.log(`Iterations: ${count}; time: ${duration / count} ms / iteration`);
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
      window.console.log(`Iterations: ${count}; time: ${duration / count} ms / iteration`);
    };
  }
  function ng2CreateDom() {
    var values = count++ % 2 == 0 ? ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '*'] : ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', '-'];
    app.initData = buildTree(maxDepth, values, 0);
    lifeCycle.tick();
  }
  function noop() {}
  function initNg2() {
    bootstrap(AppComponent, createBindings()).then((ref) => {
      var injector = ref.injector;
      lifeCycle = injector.get(LifeCycle);
      app = injector.get(AppComponent);
      bindAction('#ng2DestroyDom', ng2DestroyDom);
      bindAction('#ng2CreateDom', ng2CreateDom);
      bindAction('#ng2UpdateDomProfile', profile(ng2CreateDom, noop, 'ng2-update'));
      bindAction('#ng2CreateDomProfile', profile(ng2CreateDom, ng2DestroyDom, 'ng2-create'));
    });
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
class TreeNode {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
function buildTree(maxDepth, values, curDepth) {
  if (maxDepth === curDepth)
    return new TreeNode('', null, null);
  return new TreeNode(values[curDepth], buildTree(maxDepth, values, curDepth + 1), buildTree(maxDepth, values, curDepth + 1));
}
class BaseLineTreeComponent {
  constructor(element) {
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
  }
  update(value) {
    this.value.update(value.value);
    this.left.update(value.left);
    this.right.update(value.right);
  }
}
Object.defineProperty(BaseLineTreeComponent.prototype.update, "parameters", {get: function() {
    return [[TreeNode]];
  }});
class BaseLineInterpolation {
  constructor(textNode) {
    this.value = null;
    this.textNode = textNode;
  }
  update(value) {
    if (this.value !== value) {
      this.value = value;
      DOM.setText(this.textNode, value + ' ');
    }
  }
}
Object.defineProperty(BaseLineInterpolation.prototype.update, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
class BaseLineIf {
  constructor(anchor) {
    this.anchor = anchor;
    this.condition = false;
    this.component = null;
  }
  update(value) {
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
  }
}
Object.defineProperty(BaseLineIf.prototype.update, "parameters", {get: function() {
    return [[TreeNode]];
  }});
class AppComponent {
  constructor() {
    this.initData = new TreeNode('', null, null);
  }
}
Object.defineProperty(AppComponent, "annotations", {get: function() {
    return [new Component({selector: 'app'}), new View({
      directives: [TreeComponent],
      template: `<tree [data]='initData'></tree>`
    })];
  }});
class TreeComponent {}
Object.defineProperty(TreeComponent, "annotations", {get: function() {
    return [new Component({
      selector: 'tree',
      properties: {'data': 'data'}
    }), new View({
      directives: [TreeComponent, If],
      template: `<span> {{data.value}} <span template='if data.right != null'><tree [data]='data.right'></tree></span><span template='if data.left != null'><tree [data]='data.left'></tree></span></span>`
    })];
  }});
//# sourceMappingURL=tree_benchmark.js.map

//# sourceMappingURL=./tree_benchmark.map