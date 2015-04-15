"use strict";
Object.defineProperties(module.exports, {
  IntegrationTestbed: {get: function() {
      return IntegrationTestbed;
    }},
  FakeVmTurnZone: {get: function() {
      return FakeVmTurnZone;
    }},
  FakeEventManagerPlugin: {get: function() {
      return FakeEventManagerPlugin;
    }},
  LoggingEventDispatcher: {get: function() {
      return LoggingEventDispatcher;
    }},
  FakeEvent: {get: function() {
      return FakeEvent;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_change_95_detection__,
    $__angular2_47_src_47_render_47_dom_47_direct_95_dom_95_renderer__,
    $__angular2_47_src_47_render_47_dom_47_compiler_47_compiler__,
    $__angular2_47_src_47_render_47_api__,
    $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_step_95_factory__,
    $__angular2_47_src_47_render_47_dom_47_compiler_47_template_95_loader__,
    $__angular2_47_src_47_services_47_url_95_resolver__,
    $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_emulated_95_unscoped_95_shadow_95_dom_95_strategy__,
    $__angular2_47_src_47_render_47_dom_47_events_47_event_95_manager__,
    $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__,
    $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_url_95_resolver__,
    $__angular2_47_src_47_render_47_dom_47_view_47_view_95_factory__;
var $__0 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isBlank = $__0.isBlank,
    isPresent = $__0.isPresent,
    BaseException = $__0.BaseException;
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    MapWrapper = $__1.MapWrapper,
    ListWrapper = $__1.ListWrapper,
    List = $__1.List,
    Map = $__1.Map;
var $__2 = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
    PromiseWrapper = $__2.PromiseWrapper,
    Promise = $__2.Promise;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var $__4 = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}),
    Parser = $__4.Parser,
    Lexer = $__4.Lexer;
var DirectDomRenderer = ($__angular2_47_src_47_render_47_dom_47_direct_95_dom_95_renderer__ = require("angular2/src/render/dom/direct_dom_renderer"), $__angular2_47_src_47_render_47_dom_47_direct_95_dom_95_renderer__ && $__angular2_47_src_47_render_47_dom_47_direct_95_dom_95_renderer__.__esModule && $__angular2_47_src_47_render_47_dom_47_direct_95_dom_95_renderer__ || {default: $__angular2_47_src_47_render_47_dom_47_direct_95_dom_95_renderer__}).DirectDomRenderer;
var Compiler = ($__angular2_47_src_47_render_47_dom_47_compiler_47_compiler__ = require("angular2/src/render/dom/compiler/compiler"), $__angular2_47_src_47_render_47_dom_47_compiler_47_compiler__ && $__angular2_47_src_47_render_47_dom_47_compiler_47_compiler__.__esModule && $__angular2_47_src_47_render_47_dom_47_compiler_47_compiler__ || {default: $__angular2_47_src_47_render_47_dom_47_compiler_47_compiler__}).Compiler;
var $__7 = ($__angular2_47_src_47_render_47_api__ = require("angular2/src/render/api"), $__angular2_47_src_47_render_47_api__ && $__angular2_47_src_47_render_47_api__.__esModule && $__angular2_47_src_47_render_47_api__ || {default: $__angular2_47_src_47_render_47_api__}),
    ProtoViewRef = $__7.ProtoViewRef,
    ProtoViewDto = $__7.ProtoViewDto,
    ViewDefinition = $__7.ViewDefinition,
    ViewContainerRef = $__7.ViewContainerRef,
    EventDispatcher = $__7.EventDispatcher,
    DirectiveMetadata = $__7.DirectiveMetadata;
var DefaultStepFactory = ($__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_step_95_factory__ = require("angular2/src/render/dom/compiler/compile_step_factory"), $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_step_95_factory__ && $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_step_95_factory__.__esModule && $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_step_95_factory__ || {default: $__angular2_47_src_47_render_47_dom_47_compiler_47_compile_95_step_95_factory__}).DefaultStepFactory;
var TemplateLoader = ($__angular2_47_src_47_render_47_dom_47_compiler_47_template_95_loader__ = require("angular2/src/render/dom/compiler/template_loader"), $__angular2_47_src_47_render_47_dom_47_compiler_47_template_95_loader__ && $__angular2_47_src_47_render_47_dom_47_compiler_47_template_95_loader__.__esModule && $__angular2_47_src_47_render_47_dom_47_compiler_47_template_95_loader__ || {default: $__angular2_47_src_47_render_47_dom_47_compiler_47_template_95_loader__}).TemplateLoader;
var UrlResolver = ($__angular2_47_src_47_services_47_url_95_resolver__ = require("angular2/src/services/url_resolver"), $__angular2_47_src_47_services_47_url_95_resolver__ && $__angular2_47_src_47_services_47_url_95_resolver__.__esModule && $__angular2_47_src_47_services_47_url_95_resolver__ || {default: $__angular2_47_src_47_services_47_url_95_resolver__}).UrlResolver;
var EmulatedUnscopedShadowDomStrategy = ($__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_emulated_95_unscoped_95_shadow_95_dom_95_strategy__ = require("angular2/src/render/dom/shadow_dom/emulated_unscoped_shadow_dom_strategy"), $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_emulated_95_unscoped_95_shadow_95_dom_95_strategy__ && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_emulated_95_unscoped_95_shadow_95_dom_95_strategy__.__esModule && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_emulated_95_unscoped_95_shadow_95_dom_95_strategy__ || {default: $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_emulated_95_unscoped_95_shadow_95_dom_95_strategy__}).EmulatedUnscopedShadowDomStrategy;
var $__12 = ($__angular2_47_src_47_render_47_dom_47_events_47_event_95_manager__ = require("angular2/src/render/dom/events/event_manager"), $__angular2_47_src_47_render_47_dom_47_events_47_event_95_manager__ && $__angular2_47_src_47_render_47_dom_47_events_47_event_95_manager__.__esModule && $__angular2_47_src_47_render_47_dom_47_events_47_event_95_manager__ || {default: $__angular2_47_src_47_render_47_dom_47_events_47_event_95_manager__}),
    EventManager = $__12.EventManager,
    EventManagerPlugin = $__12.EventManagerPlugin;
var VmTurnZone = ($__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__ = require("angular2/src/core/zone/vm_turn_zone"), $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__ && $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__.__esModule && $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__ || {default: $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__}).VmTurnZone;
var StyleUrlResolver = ($__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_url_95_resolver__ = require("angular2/src/render/dom/shadow_dom/style_url_resolver"), $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_url_95_resolver__ && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_url_95_resolver__.__esModule && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_url_95_resolver__ || {default: $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_url_95_resolver__}).StyleUrlResolver;
var ViewFactory = ($__angular2_47_src_47_render_47_dom_47_view_47_view_95_factory__ = require("angular2/src/render/dom/view/view_factory"), $__angular2_47_src_47_render_47_dom_47_view_47_view_95_factory__ && $__angular2_47_src_47_render_47_dom_47_view_47_view_95_factory__.__esModule && $__angular2_47_src_47_render_47_dom_47_view_47_view_95_factory__ || {default: $__angular2_47_src_47_render_47_dom_47_view_47_view_95_factory__}).ViewFactory;
var IntegrationTestbed = function IntegrationTestbed($__18) {
  var $__19 = $__18,
      urlData = $__19.urlData,
      viewCacheCapacity = $__19.viewCacheCapacity,
      shadowDomStrategy = $__19.shadowDomStrategy,
      templates = $__19.templates;
  var $__16 = this;
  this._templates = MapWrapper.create();
  if (isPresent(templates)) {
    ListWrapper.forEach(templates, (function(template) {
      MapWrapper.set($__16._templates, template.componentId, template);
    }));
  }
  var parser = new Parser(new Lexer());
  var urlResolver = new UrlResolver();
  if (isBlank(shadowDomStrategy)) {
    shadowDomStrategy = new EmulatedUnscopedShadowDomStrategy(new StyleUrlResolver(urlResolver), null);
  }
  var compiler = new Compiler(new DefaultStepFactory(parser, shadowDomStrategy), new FakeTemplateLoader(urlResolver, urlData));
  if (isBlank(viewCacheCapacity)) {
    viewCacheCapacity = 1;
  }
  if (isBlank(urlData)) {
    urlData = MapWrapper.create();
  }
  this.eventPlugin = new FakeEventManagerPlugin();
  var eventManager = new EventManager([this.eventPlugin], new FakeVmTurnZone());
  var viewFactory = new ViewFactory(viewCacheCapacity, eventManager, shadowDomStrategy);
  this.renderer = new DirectDomRenderer(compiler, viewFactory, shadowDomStrategy);
};
($traceurRuntime.createClass)(IntegrationTestbed, {
  compileRoot: function(rootEl, componentId) {
    var $__16 = this;
    return this.renderer.createRootProtoView(rootEl, componentId).then((function(rootProtoView) {
      return $__16._compileNestedProtoViews(rootProtoView, [new DirectiveMetadata({
        type: DirectiveMetadata.COMPONENT_TYPE,
        id: componentId
      })]);
    }));
  },
  compile: function(componentId) {
    var $__16 = this;
    var childTemplate = MapWrapper.get(this._templates, componentId);
    if (isBlank(childTemplate)) {
      throw new BaseException(("No template for component " + componentId));
    }
    return this.renderer.compile(childTemplate).then((function(protoView) {
      return $__16._compileNestedProtoViews(protoView, childTemplate.directives);
    }));
  },
  _compileNestedProtoViews: function(protoView, directives) {
    var $__16 = this;
    var childComponentRenderPvRefs = [];
    var nestedPVPromises = [];
    ListWrapper.forEach(protoView.elementBinders, (function(elementBinder) {
      var nestedComponentId = null;
      ListWrapper.forEach(elementBinder.directives, (function(db) {
        var directiveMeta = directives[db.directiveIndex];
        if (directiveMeta.type === DirectiveMetadata.COMPONENT_TYPE) {
          nestedComponentId = directiveMeta.id;
        }
      }));
      var nestedCall;
      if (isPresent(nestedComponentId)) {
        var childTemplate = MapWrapper.get($__16._templates, nestedComponentId);
        if (isBlank(childTemplate)) {
          ListWrapper.push(childComponentRenderPvRefs, null);
        } else {
          nestedCall = $__16.compile(nestedComponentId);
        }
      } else if (isPresent(elementBinder.nestedProtoView)) {
        nestedCall = $__16._compileNestedProtoViews(elementBinder.nestedProtoView, directives);
      }
      if (isPresent(nestedCall)) {
        ListWrapper.push(nestedPVPromises, nestedCall.then((function(nestedPv) {
          elementBinder.nestedProtoView = nestedPv;
          if (isPresent(nestedComponentId)) {
            ListWrapper.push(childComponentRenderPvRefs, nestedPv.render);
          }
        })));
      }
    }));
    if (nestedPVPromises.length > 0) {
      return PromiseWrapper.all(nestedPVPromises).then((function(_) {
        $__16.renderer.mergeChildComponentProtoViews(protoView.render, childComponentRenderPvRefs);
        return protoView;
      }));
    } else {
      return PromiseWrapper.resolve(protoView);
    }
  }
}, {});
var FakeTemplateLoader = function FakeTemplateLoader(urlResolver, urlData) {
  $traceurRuntime.superConstructor($FakeTemplateLoader).call(this, null, urlResolver);
  this._urlData = urlData;
};
var $FakeTemplateLoader = FakeTemplateLoader;
($traceurRuntime.createClass)(FakeTemplateLoader, {load: function(template) {
    if (isPresent(template.template)) {
      return PromiseWrapper.resolve(DOM.createTemplate(template.template));
    }
    if (isPresent(template.absUrl)) {
      var content = this._urlData[template.absUrl];
      if (isPresent(content)) {
        return PromiseWrapper.resolve(DOM.createTemplate(content));
      }
    }
    return PromiseWrapper.reject('Load failed');
  }}, {}, TemplateLoader);
Object.defineProperty(FakeTemplateLoader.prototype.load, "parameters", {get: function() {
    return [[ViewDefinition]];
  }});
var FakeVmTurnZone = function FakeVmTurnZone() {
  $traceurRuntime.superConstructor($FakeVmTurnZone).call(this, {enableLongStackTrace: false});
};
var $FakeVmTurnZone = FakeVmTurnZone;
($traceurRuntime.createClass)(FakeVmTurnZone, {
  run: function(fn) {
    fn();
  },
  runOutsideAngular: function(fn) {
    fn();
  }
}, {}, VmTurnZone);
var FakeEventManagerPlugin = function FakeEventManagerPlugin() {
  $traceurRuntime.superConstructor($FakeEventManagerPlugin).call(this);
  this._eventHandlers = MapWrapper.create();
};
var $FakeEventManagerPlugin = FakeEventManagerPlugin;
($traceurRuntime.createClass)(FakeEventManagerPlugin, {
  dispatchEvent: function(eventName, event) {
    MapWrapper.get(this._eventHandlers, eventName)(event);
  },
  supports: function(eventName) {
    return true;
  },
  addEventListener: function(element, eventName, handler, shouldSupportBubble) {
    var $__16 = this;
    MapWrapper.set(this._eventHandlers, eventName, handler);
    return (function() {
      MapWrapper.delete($__16._eventHandlers, eventName);
    });
  }
}, {}, EventManagerPlugin);
Object.defineProperty(FakeEventManagerPlugin.prototype.supports, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
Object.defineProperty(FakeEventManagerPlugin.prototype.addEventListener, "parameters", {get: function() {
    return [[], [$traceurRuntime.type.string], [Function], [$traceurRuntime.type.boolean]];
  }});
var LoggingEventDispatcher = function LoggingEventDispatcher() {
  $traceurRuntime.superConstructor($LoggingEventDispatcher).call(this);
  this.log = [];
};
var $LoggingEventDispatcher = LoggingEventDispatcher;
($traceurRuntime.createClass)(LoggingEventDispatcher, {dispatchEvent: function(elementIndex, eventName, locals) {
    ListWrapper.push(this.log, [elementIndex, eventName, locals]);
  }}, {}, EventDispatcher);
Object.defineProperty(LoggingEventDispatcher.prototype.dispatchEvent, "parameters", {get: function() {
    return [[$traceurRuntime.type.number], [$traceurRuntime.type.string], [$traceurRuntime.genericType(Map, $traceurRuntime.type.string, $traceurRuntime.type.any)]];
  }});
var FakeEvent = function FakeEvent(target) {
  this.target = target;
};
($traceurRuntime.createClass)(FakeEvent, {}, {});
//# sourceMappingURL=integration_testbed.js.map

//# sourceMappingURL=./integration_testbed.map