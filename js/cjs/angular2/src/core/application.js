"use strict";
Object.defineProperties(module.exports, {
  bootstrap: {get: function() {
      return bootstrap;
    }},
  __esModule: {value: true}
});
var $__angular2_47_di__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_dom_47_browser_95_adapter__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__compiler_47_compiler__,
    $__angular2_47_src_47_reflection_47_reflection__,
    $__angular2_47_change_95_detection__,
    $__exception_95_handler__,
    $__angular2_47_src_47_render_47_dom_47_compiler_47_template_95_loader__,
    $__compiler_47_template_95_resolver__,
    $__compiler_47_directive_95_metadata_95_reader__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__,
    $__angular2_47_src_47_core_47_life_95_cycle_47_life_95_cycle__,
    $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_shadow_95_dom_95_strategy__,
    $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_emulated_95_unscoped_95_shadow_95_dom_95_strategy__,
    $__angular2_47_src_47_services_47_xhr__,
    $__angular2_47_src_47_services_47_xhr_95_impl__,
    $__angular2_47_src_47_render_47_dom_47_events_47_event_95_manager__,
    $__angular2_47_src_47_render_47_dom_47_events_47_key_95_events__,
    $__angular2_47_src_47_render_47_dom_47_events_47_hammer_95_gestures__,
    $__angular2_47_src_47_di_47_binding__,
    $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__,
    $__angular2_47_src_47_services_47_url_95_resolver__,
    $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_url_95_resolver__,
    $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_inliner__,
    $__angular2_47_src_47_core_47_compiler_47_dynamic_95_component_95_loader__,
    $__angular2_47_src_47_core_47_testability_47_testability__,
    $__angular2_47_src_47_core_47_compiler_47_view_95_factory__,
    $__angular2_47_src_47_core_47_compiler_47_proto_95_view_95_factory__,
    $__angular2_47_src_47_render_47_api__,
    $__angular2_47_src_47_render_47_dom_47_direct_95_dom_95_renderer__,
    $__angular2_47_src_47_render_47_dom_47_compiler_47_compiler__,
    $__angular2_47_src_47_render_47_dom_47_view_47_view_95_factory__,
    $__application_95_tokens__;
var $__0 = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}),
    Injector = $__0.Injector,
    bind = $__0.bind,
    OpaqueToken = $__0.OpaqueToken,
    Optional = $__0.Optional;
var $__1 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    NumberWrapper = $__1.NumberWrapper,
    Type = $__1.Type,
    isBlank = $__1.isBlank,
    isPresent = $__1.isPresent,
    BaseException = $__1.BaseException,
    assertionsEnabled = $__1.assertionsEnabled,
    print = $__1.print,
    stringify = $__1.stringify;
var BrowserDomAdapter = ($__angular2_47_src_47_dom_47_browser_95_adapter__ = require("angular2/src/dom/browser_adapter"), $__angular2_47_src_47_dom_47_browser_95_adapter__ && $__angular2_47_src_47_dom_47_browser_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_browser_95_adapter__ || {default: $__angular2_47_src_47_dom_47_browser_95_adapter__}).BrowserDomAdapter;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var $__4 = ($__compiler_47_compiler__ = require("./compiler/compiler"), $__compiler_47_compiler__ && $__compiler_47_compiler__.__esModule && $__compiler_47_compiler__ || {default: $__compiler_47_compiler__}),
    Compiler = $__4.Compiler,
    CompilerCache = $__4.CompilerCache;
var $__5 = ($__angular2_47_src_47_reflection_47_reflection__ = require("angular2/src/reflection/reflection"), $__angular2_47_src_47_reflection_47_reflection__ && $__angular2_47_src_47_reflection_47_reflection__.__esModule && $__angular2_47_src_47_reflection_47_reflection__ || {default: $__angular2_47_src_47_reflection_47_reflection__}),
    Reflector = $__5.Reflector,
    reflector = $__5.reflector;
var $__6 = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}),
    Parser = $__6.Parser,
    Lexer = $__6.Lexer,
    ChangeDetection = $__6.ChangeDetection,
    dynamicChangeDetection = $__6.dynamicChangeDetection,
    jitChangeDetection = $__6.jitChangeDetection;
var ExceptionHandler = ($__exception_95_handler__ = require("./exception_handler"), $__exception_95_handler__ && $__exception_95_handler__.__esModule && $__exception_95_handler__ || {default: $__exception_95_handler__}).ExceptionHandler;
var TemplateLoader = ($__angular2_47_src_47_render_47_dom_47_compiler_47_template_95_loader__ = require("angular2/src/render/dom/compiler/template_loader"), $__angular2_47_src_47_render_47_dom_47_compiler_47_template_95_loader__ && $__angular2_47_src_47_render_47_dom_47_compiler_47_template_95_loader__.__esModule && $__angular2_47_src_47_render_47_dom_47_compiler_47_template_95_loader__ || {default: $__angular2_47_src_47_render_47_dom_47_compiler_47_template_95_loader__}).TemplateLoader;
var TemplateResolver = ($__compiler_47_template_95_resolver__ = require("./compiler/template_resolver"), $__compiler_47_template_95_resolver__ && $__compiler_47_template_95_resolver__.__esModule && $__compiler_47_template_95_resolver__ || {default: $__compiler_47_template_95_resolver__}).TemplateResolver;
var DirectiveMetadataReader = ($__compiler_47_directive_95_metadata_95_reader__ = require("./compiler/directive_metadata_reader"), $__compiler_47_directive_95_metadata_95_reader__ && $__compiler_47_directive_95_metadata_95_reader__.__esModule && $__compiler_47_directive_95_metadata_95_reader__ || {default: $__compiler_47_directive_95_metadata_95_reader__}).DirectiveMetadataReader;
var $__11 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__11.List,
    ListWrapper = $__11.ListWrapper;
var $__12 = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
    Promise = $__12.Promise,
    PromiseWrapper = $__12.PromiseWrapper;
var VmTurnZone = ($__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__ = require("angular2/src/core/zone/vm_turn_zone"), $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__ && $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__.__esModule && $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__ || {default: $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__}).VmTurnZone;
var LifeCycle = ($__angular2_47_src_47_core_47_life_95_cycle_47_life_95_cycle__ = require("angular2/src/core/life_cycle/life_cycle"), $__angular2_47_src_47_core_47_life_95_cycle_47_life_95_cycle__ && $__angular2_47_src_47_core_47_life_95_cycle_47_life_95_cycle__.__esModule && $__angular2_47_src_47_core_47_life_95_cycle_47_life_95_cycle__ || {default: $__angular2_47_src_47_core_47_life_95_cycle_47_life_95_cycle__}).LifeCycle;
var ShadowDomStrategy = ($__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_shadow_95_dom_95_strategy__ = require("angular2/src/render/dom/shadow_dom/shadow_dom_strategy"), $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_shadow_95_dom_95_strategy__ && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_shadow_95_dom_95_strategy__.__esModule && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_shadow_95_dom_95_strategy__ || {default: $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_shadow_95_dom_95_strategy__}).ShadowDomStrategy;
var EmulatedUnscopedShadowDomStrategy = ($__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_emulated_95_unscoped_95_shadow_95_dom_95_strategy__ = require("angular2/src/render/dom/shadow_dom/emulated_unscoped_shadow_dom_strategy"), $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_emulated_95_unscoped_95_shadow_95_dom_95_strategy__ && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_emulated_95_unscoped_95_shadow_95_dom_95_strategy__.__esModule && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_emulated_95_unscoped_95_shadow_95_dom_95_strategy__ || {default: $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_emulated_95_unscoped_95_shadow_95_dom_95_strategy__}).EmulatedUnscopedShadowDomStrategy;
var XHR = ($__angular2_47_src_47_services_47_xhr__ = require("angular2/src/services/xhr"), $__angular2_47_src_47_services_47_xhr__ && $__angular2_47_src_47_services_47_xhr__.__esModule && $__angular2_47_src_47_services_47_xhr__ || {default: $__angular2_47_src_47_services_47_xhr__}).XHR;
var XHRImpl = ($__angular2_47_src_47_services_47_xhr_95_impl__ = require("angular2/src/services/xhr_impl"), $__angular2_47_src_47_services_47_xhr_95_impl__ && $__angular2_47_src_47_services_47_xhr_95_impl__.__esModule && $__angular2_47_src_47_services_47_xhr_95_impl__ || {default: $__angular2_47_src_47_services_47_xhr_95_impl__}).XHRImpl;
var $__19 = ($__angular2_47_src_47_render_47_dom_47_events_47_event_95_manager__ = require("angular2/src/render/dom/events/event_manager"), $__angular2_47_src_47_render_47_dom_47_events_47_event_95_manager__ && $__angular2_47_src_47_render_47_dom_47_events_47_event_95_manager__.__esModule && $__angular2_47_src_47_render_47_dom_47_events_47_event_95_manager__ || {default: $__angular2_47_src_47_render_47_dom_47_events_47_event_95_manager__}),
    EventManager = $__19.EventManager,
    DomEventsPlugin = $__19.DomEventsPlugin;
var KeyEventsPlugin = ($__angular2_47_src_47_render_47_dom_47_events_47_key_95_events__ = require("angular2/src/render/dom/events/key_events"), $__angular2_47_src_47_render_47_dom_47_events_47_key_95_events__ && $__angular2_47_src_47_render_47_dom_47_events_47_key_95_events__.__esModule && $__angular2_47_src_47_render_47_dom_47_events_47_key_95_events__ || {default: $__angular2_47_src_47_render_47_dom_47_events_47_key_95_events__}).KeyEventsPlugin;
var HammerGesturesPlugin = ($__angular2_47_src_47_render_47_dom_47_events_47_hammer_95_gestures__ = require("angular2/src/render/dom/events/hammer_gestures"), $__angular2_47_src_47_render_47_dom_47_events_47_hammer_95_gestures__ && $__angular2_47_src_47_render_47_dom_47_events_47_hammer_95_gestures__.__esModule && $__angular2_47_src_47_render_47_dom_47_events_47_hammer_95_gestures__ || {default: $__angular2_47_src_47_render_47_dom_47_events_47_hammer_95_gestures__}).HammerGesturesPlugin;
var Binding = ($__angular2_47_src_47_di_47_binding__ = require("angular2/src/di/binding"), $__angular2_47_src_47_di_47_binding__ && $__angular2_47_src_47_di_47_binding__.__esModule && $__angular2_47_src_47_di_47_binding__ || {default: $__angular2_47_src_47_di_47_binding__}).Binding;
var ComponentUrlMapper = ($__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__ = require("angular2/src/core/compiler/component_url_mapper"), $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__ && $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__.__esModule && $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__ || {default: $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__}).ComponentUrlMapper;
var UrlResolver = ($__angular2_47_src_47_services_47_url_95_resolver__ = require("angular2/src/services/url_resolver"), $__angular2_47_src_47_services_47_url_95_resolver__ && $__angular2_47_src_47_services_47_url_95_resolver__.__esModule && $__angular2_47_src_47_services_47_url_95_resolver__ || {default: $__angular2_47_src_47_services_47_url_95_resolver__}).UrlResolver;
var StyleUrlResolver = ($__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_url_95_resolver__ = require("angular2/src/render/dom/shadow_dom/style_url_resolver"), $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_url_95_resolver__ && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_url_95_resolver__.__esModule && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_url_95_resolver__ || {default: $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_url_95_resolver__}).StyleUrlResolver;
var StyleInliner = ($__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_inliner__ = require("angular2/src/render/dom/shadow_dom/style_inliner"), $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_inliner__ && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_inliner__.__esModule && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_inliner__ || {default: $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_inliner__}).StyleInliner;
var $__27 = ($__angular2_47_src_47_core_47_compiler_47_dynamic_95_component_95_loader__ = require("angular2/src/core/compiler/dynamic_component_loader"), $__angular2_47_src_47_core_47_compiler_47_dynamic_95_component_95_loader__ && $__angular2_47_src_47_core_47_compiler_47_dynamic_95_component_95_loader__.__esModule && $__angular2_47_src_47_core_47_compiler_47_dynamic_95_component_95_loader__ || {default: $__angular2_47_src_47_core_47_compiler_47_dynamic_95_component_95_loader__}),
    ComponentRef = $__27.ComponentRef,
    DynamicComponentLoader = $__27.DynamicComponentLoader;
var $__28 = ($__angular2_47_src_47_core_47_testability_47_testability__ = require("angular2/src/core/testability/testability"), $__angular2_47_src_47_core_47_testability_47_testability__ && $__angular2_47_src_47_core_47_testability_47_testability__.__esModule && $__angular2_47_src_47_core_47_testability_47_testability__ || {default: $__angular2_47_src_47_core_47_testability_47_testability__}),
    TestabilityRegistry = $__28.TestabilityRegistry,
    Testability = $__28.Testability;
var $__29 = ($__angular2_47_src_47_core_47_compiler_47_view_95_factory__ = require("angular2/src/core/compiler/view_factory"), $__angular2_47_src_47_core_47_compiler_47_view_95_factory__ && $__angular2_47_src_47_core_47_compiler_47_view_95_factory__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view_95_factory__ || {default: $__angular2_47_src_47_core_47_compiler_47_view_95_factory__}),
    ViewFactory = $__29.ViewFactory,
    VIEW_POOL_CAPACITY = $__29.VIEW_POOL_CAPACITY;
var ProtoViewFactory = ($__angular2_47_src_47_core_47_compiler_47_proto_95_view_95_factory__ = require("angular2/src/core/compiler/proto_view_factory"), $__angular2_47_src_47_core_47_compiler_47_proto_95_view_95_factory__ && $__angular2_47_src_47_core_47_compiler_47_proto_95_view_95_factory__.__esModule && $__angular2_47_src_47_core_47_compiler_47_proto_95_view_95_factory__ || {default: $__angular2_47_src_47_core_47_compiler_47_proto_95_view_95_factory__}).ProtoViewFactory;
var Renderer = ($__angular2_47_src_47_render_47_api__ = require("angular2/src/render/api"), $__angular2_47_src_47_render_47_api__ && $__angular2_47_src_47_render_47_api__.__esModule && $__angular2_47_src_47_render_47_api__ || {default: $__angular2_47_src_47_render_47_api__}).Renderer;
var DirectDomRenderer = ($__angular2_47_src_47_render_47_dom_47_direct_95_dom_95_renderer__ = require("angular2/src/render/dom/direct_dom_renderer"), $__angular2_47_src_47_render_47_dom_47_direct_95_dom_95_renderer__ && $__angular2_47_src_47_render_47_dom_47_direct_95_dom_95_renderer__.__esModule && $__angular2_47_src_47_render_47_dom_47_direct_95_dom_95_renderer__ || {default: $__angular2_47_src_47_render_47_dom_47_direct_95_dom_95_renderer__}).DirectDomRenderer;
var rc = ($__angular2_47_src_47_render_47_dom_47_compiler_47_compiler__ = require("angular2/src/render/dom/compiler/compiler"), $__angular2_47_src_47_render_47_dom_47_compiler_47_compiler__ && $__angular2_47_src_47_render_47_dom_47_compiler_47_compiler__.__esModule && $__angular2_47_src_47_render_47_dom_47_compiler_47_compiler__ || {default: $__angular2_47_src_47_render_47_dom_47_compiler_47_compiler__});
var rvf = ($__angular2_47_src_47_render_47_dom_47_view_47_view_95_factory__ = require("angular2/src/render/dom/view/view_factory"), $__angular2_47_src_47_render_47_dom_47_view_47_view_95_factory__ && $__angular2_47_src_47_render_47_dom_47_view_47_view_95_factory__.__esModule && $__angular2_47_src_47_render_47_dom_47_view_47_view_95_factory__ || {default: $__angular2_47_src_47_render_47_dom_47_view_47_view_95_factory__});
var $__33 = ($__application_95_tokens__ = require("./application_tokens"), $__application_95_tokens__ && $__application_95_tokens__.__esModule && $__application_95_tokens__ || {default: $__application_95_tokens__}),
    appComponentRefToken = $__33.appComponentRefToken,
    appChangeDetectorToken = $__33.appChangeDetectorToken,
    appElementToken = $__33.appElementToken,
    appComponentAnnotatedTypeToken = $__33.appComponentAnnotatedTypeToken,
    appDocumentToken = $__33.appDocumentToken;
var _rootInjector;
var _rootBindings = [bind(Reflector).toValue(reflector), TestabilityRegistry];
function _injectorBindings(appComponentType) {
  return [bind(appDocumentToken).toValue(DOM.defaultDoc()), bind(appComponentAnnotatedTypeToken).toFactory((function(reader) {
    return reader.read(appComponentType);
  }), [DirectiveMetadataReader]), bind(appElementToken).toFactory((function(appComponentAnnotatedType, appDocument) {
    var selector = appComponentAnnotatedType.annotation.selector;
    var element = DOM.querySelector(appDocument, selector);
    if (isBlank(element)) {
      throw new BaseException(("The app selector \"" + selector + "\" did not match any elements"));
    }
    return element;
  }), [appComponentAnnotatedTypeToken, appDocumentToken]), bind(appComponentRefToken).toAsyncFactory((function(dynamicComponentLoader, injector, appElement, appComponentAnnotatedType, testability, registry) {
    registry.registerApplication(appElement, testability);
    return dynamicComponentLoader.loadIntoNewLocation(appElement, appComponentAnnotatedType.type, null, injector);
  }), [DynamicComponentLoader, Injector, appElementToken, appComponentAnnotatedTypeToken, Testability, TestabilityRegistry]), bind(appChangeDetectorToken).toFactory((function(ref) {
    return ref.hostView.changeDetector;
  }), [appComponentRefToken]), bind(appComponentType).toFactory((function(ref) {
    return ref.instance;
  }), [appComponentRefToken]), bind(LifeCycle).toFactory((function(exceptionHandler) {
    return new LifeCycle(exceptionHandler, null, assertionsEnabled());
  }), [ExceptionHandler]), bind(EventManager).toFactory((function(zone) {
    var plugins = [new HammerGesturesPlugin(), new KeyEventsPlugin(), new DomEventsPlugin()];
    return new EventManager(plugins, zone);
  }), [VmTurnZone]), bind(ShadowDomStrategy).toFactory((function(styleUrlResolver, doc) {
    return new EmulatedUnscopedShadowDomStrategy(styleUrlResolver, doc.head);
  }), [StyleUrlResolver, appDocumentToken]), bind(Renderer).toClass(DirectDomRenderer), bind(rc.Compiler).toClass(rc.DefaultCompiler), bind(rvf.ViewFactory).toFactory((function(capacity, eventManager, shadowDomStrategy) {
    return new rvf.ViewFactory(capacity, eventManager, shadowDomStrategy);
  }), [rvf.VIEW_POOL_CAPACITY, EventManager, ShadowDomStrategy]), bind(rvf.VIEW_POOL_CAPACITY).toValue(10000), ProtoViewFactory, bind(ViewFactory).toFactory((function(capacity) {
    return new ViewFactory(capacity);
  }), [VIEW_POOL_CAPACITY]), bind(VIEW_POOL_CAPACITY).toValue(10000), Compiler, CompilerCache, TemplateResolver, bind(ChangeDetection).toValue(dynamicChangeDetection), TemplateLoader, DirectiveMetadataReader, Parser, Lexer, ExceptionHandler, bind(XHR).toValue(new XHRImpl()), ComponentUrlMapper, UrlResolver, StyleUrlResolver, StyleInliner, DynamicComponentLoader, Testability];
}
function _createVmZone(givenReporter) {
  var defaultErrorReporter = (function(exception, stackTrace) {
    var longStackTrace = ListWrapper.join(stackTrace, "\n\n-----async gap-----\n");
    print((exception + "\n\n" + longStackTrace));
    throw exception;
  });
  var reporter = isPresent(givenReporter) ? givenReporter : defaultErrorReporter;
  var zone = new VmTurnZone({enableLongStackTrace: assertionsEnabled()});
  zone.initCallbacks({onErrorHandler: reporter});
  return zone;
}
Object.defineProperty(_createVmZone, "parameters", {get: function() {
    return [[Function]];
  }});
function bootstrap(appComponentType) {
  var componentInjectableBindings = arguments[1] !== (void 0) ? arguments[1] : null;
  var errorReporter = arguments[2] !== (void 0) ? arguments[2] : null;
  BrowserDomAdapter.makeCurrent();
  var bootstrapProcess = PromiseWrapper.completer();
  var zone = _createVmZone(errorReporter);
  zone.run((function() {
    var appInjector = _createAppInjector(appComponentType, componentInjectableBindings, zone);
    PromiseWrapper.then(appInjector.asyncGet(appComponentRefToken), (function(componentRef) {
      var appChangeDetector = componentRef.hostView.changeDetector;
      var lc = appInjector.get(LifeCycle);
      lc.registerWith(zone, appChangeDetector);
      lc.tick();
      bootstrapProcess.resolve(componentRef);
    }), (function(err) {
      bootstrapProcess.reject(err);
    }));
  }));
  return bootstrapProcess.promise;
}
Object.defineProperty(bootstrap, "parameters", {get: function() {
    return [[Type], [$traceurRuntime.genericType(List, Binding)], [Function]];
  }});
function _createAppInjector(appComponentType, bindings, zone) {
  if (isBlank(_rootInjector))
    _rootInjector = Injector.resolveAndCreate(_rootBindings);
  var mergedBindings = isPresent(bindings) ? ListWrapper.concat(_injectorBindings(appComponentType), bindings) : _injectorBindings(appComponentType);
  ListWrapper.push(mergedBindings, bind(VmTurnZone).toValue(zone));
  return _rootInjector.resolveAndCreateChild(mergedBindings);
}
Object.defineProperty(_createAppInjector, "parameters", {get: function() {
    return [[Type], [$traceurRuntime.genericType(List, Binding)], [VmTurnZone]];
  }});
//# sourceMappingURL=application.js.map

//# sourceMappingURL=./application.map