"use strict";
Object.defineProperties(module.exports, {
  createTestInjector: {get: function() {
      return createTestInjector;
    }},
  inject: {get: function() {
      return inject;
    }},
  FunctionWithParamTokens: {get: function() {
      return FunctionWithParamTokens;
    }},
  __esModule: {value: true}
});
var $__angular2_47_di__,
    $__angular2_47_src_47_core_47_compiler_47_compiler__,
    $__angular2_47_src_47_reflection_47_reflection__,
    $__angular2_47_change_95_detection__,
    $__angular2_47_src_47_core_47_exception_95_handler__,
    $__angular2_47_src_47_render_47_dom_47_compiler_47_template_95_loader__,
    $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__,
    $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__,
    $__angular2_47_src_47_core_47_compiler_47_dynamic_95_component_95_loader__,
    $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_shadow_95_dom_95_strategy__,
    $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_emulated_95_unscoped_95_shadow_95_dom_95_strategy__,
    $__angular2_47_src_47_services_47_xhr__,
    $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__,
    $__angular2_47_src_47_services_47_url_95_resolver__,
    $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_url_95_resolver__,
    $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_inliner__,
    $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_core_47_application_95_tokens__,
    $__angular2_47_src_47_render_47_dom_47_events_47_event_95_manager__,
    $__angular2_47_src_47_mock_47_template_95_resolver_95_mock__,
    $__angular2_47_src_47_mock_47_xhr_95_mock__,
    $__angular2_47_src_47_mock_47_vm_95_turn_95_zone_95_mock__,
    $__test_95_bed__,
    $__angular2_47_di__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_core_47_compiler_47_view_95_factory__,
    $__angular2_47_src_47_core_47_compiler_47_proto_95_view_95_factory__,
    $__angular2_47_src_47_render_47_api__,
    $__angular2_47_src_47_render_47_dom_47_direct_95_dom_95_renderer__,
    $__angular2_47_src_47_render_47_dom_47_compiler_47_compiler__,
    $__angular2_47_src_47_render_47_dom_47_view_47_view_95_factory__;
var bind = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}).bind;
var $__1 = ($__angular2_47_src_47_core_47_compiler_47_compiler__ = require("angular2/src/core/compiler/compiler"), $__angular2_47_src_47_core_47_compiler_47_compiler__ && $__angular2_47_src_47_core_47_compiler_47_compiler__.__esModule && $__angular2_47_src_47_core_47_compiler_47_compiler__ || {default: $__angular2_47_src_47_core_47_compiler_47_compiler__}),
    Compiler = $__1.Compiler,
    CompilerCache = $__1.CompilerCache;
var $__2 = ($__angular2_47_src_47_reflection_47_reflection__ = require("angular2/src/reflection/reflection"), $__angular2_47_src_47_reflection_47_reflection__ && $__angular2_47_src_47_reflection_47_reflection__.__esModule && $__angular2_47_src_47_reflection_47_reflection__ || {default: $__angular2_47_src_47_reflection_47_reflection__}),
    Reflector = $__2.Reflector,
    reflector = $__2.reflector;
var $__3 = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}),
    Parser = $__3.Parser,
    Lexer = $__3.Lexer,
    ChangeDetection = $__3.ChangeDetection,
    dynamicChangeDetection = $__3.dynamicChangeDetection;
var ExceptionHandler = ($__angular2_47_src_47_core_47_exception_95_handler__ = require("angular2/src/core/exception_handler"), $__angular2_47_src_47_core_47_exception_95_handler__ && $__angular2_47_src_47_core_47_exception_95_handler__.__esModule && $__angular2_47_src_47_core_47_exception_95_handler__ || {default: $__angular2_47_src_47_core_47_exception_95_handler__}).ExceptionHandler;
var TemplateLoader = ($__angular2_47_src_47_render_47_dom_47_compiler_47_template_95_loader__ = require("angular2/src/render/dom/compiler/template_loader"), $__angular2_47_src_47_render_47_dom_47_compiler_47_template_95_loader__ && $__angular2_47_src_47_render_47_dom_47_compiler_47_template_95_loader__.__esModule && $__angular2_47_src_47_render_47_dom_47_compiler_47_template_95_loader__ || {default: $__angular2_47_src_47_render_47_dom_47_compiler_47_template_95_loader__}).TemplateLoader;
var TemplateResolver = ($__angular2_47_src_47_core_47_compiler_47_template_95_resolver__ = require("angular2/src/core/compiler/template_resolver"), $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__ && $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__.__esModule && $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__ || {default: $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__}).TemplateResolver;
var DirectiveMetadataReader = ($__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ = require("angular2/src/core/compiler/directive_metadata_reader"), $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__.__esModule && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ || {default: $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__}).DirectiveMetadataReader;
var DynamicComponentLoader = ($__angular2_47_src_47_core_47_compiler_47_dynamic_95_component_95_loader__ = require("angular2/src/core/compiler/dynamic_component_loader"), $__angular2_47_src_47_core_47_compiler_47_dynamic_95_component_95_loader__ && $__angular2_47_src_47_core_47_compiler_47_dynamic_95_component_95_loader__.__esModule && $__angular2_47_src_47_core_47_compiler_47_dynamic_95_component_95_loader__ || {default: $__angular2_47_src_47_core_47_compiler_47_dynamic_95_component_95_loader__}).DynamicComponentLoader;
var ShadowDomStrategy = ($__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_shadow_95_dom_95_strategy__ = require("angular2/src/render/dom/shadow_dom/shadow_dom_strategy"), $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_shadow_95_dom_95_strategy__ && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_shadow_95_dom_95_strategy__.__esModule && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_shadow_95_dom_95_strategy__ || {default: $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_shadow_95_dom_95_strategy__}).ShadowDomStrategy;
var EmulatedUnscopedShadowDomStrategy = ($__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_emulated_95_unscoped_95_shadow_95_dom_95_strategy__ = require("angular2/src/render/dom/shadow_dom/emulated_unscoped_shadow_dom_strategy"), $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_emulated_95_unscoped_95_shadow_95_dom_95_strategy__ && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_emulated_95_unscoped_95_shadow_95_dom_95_strategy__.__esModule && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_emulated_95_unscoped_95_shadow_95_dom_95_strategy__ || {default: $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_emulated_95_unscoped_95_shadow_95_dom_95_strategy__}).EmulatedUnscopedShadowDomStrategy;
var XHR = ($__angular2_47_src_47_services_47_xhr__ = require("angular2/src/services/xhr"), $__angular2_47_src_47_services_47_xhr__ && $__angular2_47_src_47_services_47_xhr__.__esModule && $__angular2_47_src_47_services_47_xhr__ || {default: $__angular2_47_src_47_services_47_xhr__}).XHR;
var ComponentUrlMapper = ($__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__ = require("angular2/src/core/compiler/component_url_mapper"), $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__ && $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__.__esModule && $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__ || {default: $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__}).ComponentUrlMapper;
var UrlResolver = ($__angular2_47_src_47_services_47_url_95_resolver__ = require("angular2/src/services/url_resolver"), $__angular2_47_src_47_services_47_url_95_resolver__ && $__angular2_47_src_47_services_47_url_95_resolver__.__esModule && $__angular2_47_src_47_services_47_url_95_resolver__ || {default: $__angular2_47_src_47_services_47_url_95_resolver__}).UrlResolver;
var StyleUrlResolver = ($__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_url_95_resolver__ = require("angular2/src/render/dom/shadow_dom/style_url_resolver"), $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_url_95_resolver__ && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_url_95_resolver__.__esModule && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_url_95_resolver__ || {default: $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_url_95_resolver__}).StyleUrlResolver;
var StyleInliner = ($__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_inliner__ = require("angular2/src/render/dom/shadow_dom/style_inliner"), $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_inliner__ && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_inliner__.__esModule && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_inliner__ || {default: $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_inliner__}).StyleInliner;
var VmTurnZone = ($__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__ = require("angular2/src/core/zone/vm_turn_zone"), $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__ && $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__.__esModule && $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__ || {default: $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__}).VmTurnZone;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var appDocumentToken = ($__angular2_47_src_47_core_47_application_95_tokens__ = require("angular2/src/core/application_tokens"), $__angular2_47_src_47_core_47_application_95_tokens__ && $__angular2_47_src_47_core_47_application_95_tokens__.__esModule && $__angular2_47_src_47_core_47_application_95_tokens__ || {default: $__angular2_47_src_47_core_47_application_95_tokens__}).appDocumentToken;
var $__19 = ($__angular2_47_src_47_render_47_dom_47_events_47_event_95_manager__ = require("angular2/src/render/dom/events/event_manager"), $__angular2_47_src_47_render_47_dom_47_events_47_event_95_manager__ && $__angular2_47_src_47_render_47_dom_47_events_47_event_95_manager__.__esModule && $__angular2_47_src_47_render_47_dom_47_events_47_event_95_manager__ || {default: $__angular2_47_src_47_render_47_dom_47_events_47_event_95_manager__}),
    EventManager = $__19.EventManager,
    DomEventsPlugin = $__19.DomEventsPlugin;
var MockTemplateResolver = ($__angular2_47_src_47_mock_47_template_95_resolver_95_mock__ = require("angular2/src/mock/template_resolver_mock"), $__angular2_47_src_47_mock_47_template_95_resolver_95_mock__ && $__angular2_47_src_47_mock_47_template_95_resolver_95_mock__.__esModule && $__angular2_47_src_47_mock_47_template_95_resolver_95_mock__ || {default: $__angular2_47_src_47_mock_47_template_95_resolver_95_mock__}).MockTemplateResolver;
var MockXHR = ($__angular2_47_src_47_mock_47_xhr_95_mock__ = require("angular2/src/mock/xhr_mock"), $__angular2_47_src_47_mock_47_xhr_95_mock__ && $__angular2_47_src_47_mock_47_xhr_95_mock__.__esModule && $__angular2_47_src_47_mock_47_xhr_95_mock__ || {default: $__angular2_47_src_47_mock_47_xhr_95_mock__}).MockXHR;
var MockVmTurnZone = ($__angular2_47_src_47_mock_47_vm_95_turn_95_zone_95_mock__ = require("angular2/src/mock/vm_turn_zone_mock"), $__angular2_47_src_47_mock_47_vm_95_turn_95_zone_95_mock__ && $__angular2_47_src_47_mock_47_vm_95_turn_95_zone_95_mock__.__esModule && $__angular2_47_src_47_mock_47_vm_95_turn_95_zone_95_mock__ || {default: $__angular2_47_src_47_mock_47_vm_95_turn_95_zone_95_mock__}).MockVmTurnZone;
var TestBed = ($__test_95_bed__ = require("./test_bed"), $__test_95_bed__ && $__test_95_bed__.__esModule && $__test_95_bed__ || {default: $__test_95_bed__}).TestBed;
var Injector = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}).Injector;
var $__25 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__25.List,
    ListWrapper = $__25.ListWrapper;
var FunctionWrapper = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).FunctionWrapper;
var $__27 = ($__angular2_47_src_47_core_47_compiler_47_view_95_factory__ = require("angular2/src/core/compiler/view_factory"), $__angular2_47_src_47_core_47_compiler_47_view_95_factory__ && $__angular2_47_src_47_core_47_compiler_47_view_95_factory__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view_95_factory__ || {default: $__angular2_47_src_47_core_47_compiler_47_view_95_factory__}),
    ViewFactory = $__27.ViewFactory,
    VIEW_POOL_CAPACITY = $__27.VIEW_POOL_CAPACITY;
var ProtoViewFactory = ($__angular2_47_src_47_core_47_compiler_47_proto_95_view_95_factory__ = require("angular2/src/core/compiler/proto_view_factory"), $__angular2_47_src_47_core_47_compiler_47_proto_95_view_95_factory__ && $__angular2_47_src_47_core_47_compiler_47_proto_95_view_95_factory__.__esModule && $__angular2_47_src_47_core_47_compiler_47_proto_95_view_95_factory__ || {default: $__angular2_47_src_47_core_47_compiler_47_proto_95_view_95_factory__}).ProtoViewFactory;
var Renderer = ($__angular2_47_src_47_render_47_api__ = require("angular2/src/render/api"), $__angular2_47_src_47_render_47_api__ && $__angular2_47_src_47_render_47_api__.__esModule && $__angular2_47_src_47_render_47_api__ || {default: $__angular2_47_src_47_render_47_api__}).Renderer;
var DirectDomRenderer = ($__angular2_47_src_47_render_47_dom_47_direct_95_dom_95_renderer__ = require("angular2/src/render/dom/direct_dom_renderer"), $__angular2_47_src_47_render_47_dom_47_direct_95_dom_95_renderer__ && $__angular2_47_src_47_render_47_dom_47_direct_95_dom_95_renderer__.__esModule && $__angular2_47_src_47_render_47_dom_47_direct_95_dom_95_renderer__ || {default: $__angular2_47_src_47_render_47_dom_47_direct_95_dom_95_renderer__}).DirectDomRenderer;
var rc = ($__angular2_47_src_47_render_47_dom_47_compiler_47_compiler__ = require("angular2/src/render/dom/compiler/compiler"), $__angular2_47_src_47_render_47_dom_47_compiler_47_compiler__ && $__angular2_47_src_47_render_47_dom_47_compiler_47_compiler__.__esModule && $__angular2_47_src_47_render_47_dom_47_compiler_47_compiler__ || {default: $__angular2_47_src_47_render_47_dom_47_compiler_47_compiler__});
var rvf = ($__angular2_47_src_47_render_47_dom_47_view_47_view_95_factory__ = require("angular2/src/render/dom/view/view_factory"), $__angular2_47_src_47_render_47_dom_47_view_47_view_95_factory__ && $__angular2_47_src_47_render_47_dom_47_view_47_view_95_factory__.__esModule && $__angular2_47_src_47_render_47_dom_47_view_47_view_95_factory__ || {default: $__angular2_47_src_47_render_47_dom_47_view_47_view_95_factory__});
function _getRootBindings() {
  return [bind(Reflector).toValue(reflector)];
}
function _getAppBindings() {
  var appDoc;
  try {
    appDoc = DOM.defaultDoc();
  } catch (e) {
    appDoc = null;
  }
  return [bind(appDocumentToken).toValue(appDoc), bind(ShadowDomStrategy).toFactory((function(styleUrlResolver, doc) {
    return new EmulatedUnscopedShadowDomStrategy(styleUrlResolver, doc.head);
  }), [StyleUrlResolver, appDocumentToken]), bind(Renderer).toClass(DirectDomRenderer), bind(rc.Compiler).toClass(rc.DefaultCompiler), rvf.ViewFactory, bind(rvf.VIEW_POOL_CAPACITY).toValue(500), ProtoViewFactory, ViewFactory, bind(VIEW_POOL_CAPACITY).toValue(500), Compiler, CompilerCache, bind(TemplateResolver).toClass(MockTemplateResolver), bind(ChangeDetection).toValue(dynamicChangeDetection), TemplateLoader, DynamicComponentLoader, DirectiveMetadataReader, Parser, Lexer, ExceptionHandler, bind(XHR).toClass(MockXHR), ComponentUrlMapper, UrlResolver, StyleUrlResolver, StyleInliner, TestBed, bind(VmTurnZone).toClass(MockVmTurnZone), bind(EventManager).toFactory((function(zone) {
    var plugins = [new DomEventsPlugin()];
    return new EventManager(plugins, zone);
  }), [VmTurnZone])];
}
function createTestInjector(bindings) {
  var rootInjector = Injector.resolveAndCreate(_getRootBindings());
  return rootInjector.resolveAndCreateChild(ListWrapper.concat(_getAppBindings(), bindings));
}
Object.defineProperty(createTestInjector, "parameters", {get: function() {
    return [[List]];
  }});
function inject(tokens, fn) {
  return new FunctionWithParamTokens(tokens, fn);
}
Object.defineProperty(inject, "parameters", {get: function() {
    return [[List], [Function]];
  }});
var FunctionWithParamTokens = function FunctionWithParamTokens(tokens, fn) {
  this._tokens = tokens;
  this._fn = fn;
};
($traceurRuntime.createClass)(FunctionWithParamTokens, {execute: function(injector) {
    var params = ListWrapper.map(this._tokens, (function(t) {
      return injector.get(t);
    }));
    FunctionWrapper.apply(this._fn, params);
  }}, {});
Object.defineProperty(FunctionWithParamTokens, "parameters", {get: function() {
    return [[List], [Function]];
  }});
Object.defineProperty(FunctionWithParamTokens.prototype.execute, "parameters", {get: function() {
    return [[Injector]];
  }});
//# sourceMappingURL=test_injector.js.map

//# sourceMappingURL=./test_injector.map