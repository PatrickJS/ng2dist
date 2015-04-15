import {assert} from "rtts_assert/rtts_assert";
import {Injector,
  bind,
  OpaqueToken,
  Optional} from 'angular2/di';
import {NumberWrapper,
  Type,
  isBlank,
  isPresent,
  BaseException,
  assertionsEnabled,
  print,
  stringify} from 'angular2/src/facade/lang';
import {BrowserDomAdapter} from 'angular2/src/dom/browser_adapter';
import {DOM} from 'angular2/src/dom/dom_adapter';
import {Compiler,
  CompilerCache} from './compiler/compiler';
import {Reflector,
  reflector} from 'angular2/src/reflection/reflection';
import {Parser,
  Lexer,
  ChangeDetection,
  dynamicChangeDetection,
  jitChangeDetection} from 'angular2/change_detection';
import {ExceptionHandler} from './exception_handler';
import {TemplateLoader} from 'angular2/src/render/dom/compiler/template_loader';
import {TemplateResolver} from './compiler/template_resolver';
import {DirectiveMetadataReader} from './compiler/directive_metadata_reader';
import {List,
  ListWrapper} from 'angular2/src/facade/collection';
import {Promise,
  PromiseWrapper} from 'angular2/src/facade/async';
import {VmTurnZone} from 'angular2/src/core/zone/vm_turn_zone';
import {LifeCycle} from 'angular2/src/core/life_cycle/life_cycle';
import {ShadowDomStrategy} from 'angular2/src/render/dom/shadow_dom/shadow_dom_strategy';
import {EmulatedUnscopedShadowDomStrategy} from 'angular2/src/render/dom/shadow_dom/emulated_unscoped_shadow_dom_strategy';
import {XHR} from 'angular2/src/services/xhr';
import {XHRImpl} from 'angular2/src/services/xhr_impl';
import {EventManager,
  DomEventsPlugin} from 'angular2/src/render/dom/events/event_manager';
import {KeyEventsPlugin} from 'angular2/src/render/dom/events/key_events';
import {HammerGesturesPlugin} from 'angular2/src/render/dom/events/hammer_gestures';
import {Binding} from 'angular2/src/di/binding';
import {ComponentUrlMapper} from 'angular2/src/core/compiler/component_url_mapper';
import {UrlResolver} from 'angular2/src/services/url_resolver';
import {StyleUrlResolver} from 'angular2/src/render/dom/shadow_dom/style_url_resolver';
import {StyleInliner} from 'angular2/src/render/dom/shadow_dom/style_inliner';
import {ComponentRef,
  DynamicComponentLoader} from 'angular2/src/core/compiler/dynamic_component_loader';
import {TestabilityRegistry,
  Testability} from 'angular2/src/core/testability/testability';
import {ViewFactory,
  VIEW_POOL_CAPACITY} from 'angular2/src/core/compiler/view_factory';
import {ProtoViewFactory} from 'angular2/src/core/compiler/proto_view_factory';
import {Renderer} from 'angular2/src/render/api';
import {DirectDomRenderer} from 'angular2/src/render/dom/direct_dom_renderer';
import * as rc from 'angular2/src/render/dom/compiler/compiler';
import * as rvf from 'angular2/src/render/dom/view/view_factory';
import {appComponentRefToken,
  appChangeDetectorToken,
  appElementToken,
  appComponentAnnotatedTypeToken,
  appDocumentToken} from './application_tokens';
var _rootInjector;
var _rootBindings = [bind(Reflector).toValue(reflector), TestabilityRegistry];
function _injectorBindings(appComponentType) {
  return assert.returnType(([bind(appDocumentToken).toValue(DOM.defaultDoc()), bind(appComponentAnnotatedTypeToken).toFactory((reader) => {
    return reader.read(appComponentType);
  }, [DirectiveMetadataReader]), bind(appElementToken).toFactory((appComponentAnnotatedType, appDocument) => {
    var selector = appComponentAnnotatedType.annotation.selector;
    var element = DOM.querySelector(appDocument, selector);
    if (isBlank(element)) {
      throw new BaseException(`The app selector "${selector}" did not match any elements`);
    }
    return element;
  }, [appComponentAnnotatedTypeToken, appDocumentToken]), bind(appComponentRefToken).toAsyncFactory((dynamicComponentLoader, injector, appElement, appComponentAnnotatedType, testability, registry) => {
    registry.registerApplication(appElement, testability);
    return dynamicComponentLoader.loadIntoNewLocation(appElement, appComponentAnnotatedType.type, null, injector);
  }, [DynamicComponentLoader, Injector, appElementToken, appComponentAnnotatedTypeToken, Testability, TestabilityRegistry]), bind(appChangeDetectorToken).toFactory((ref) => ref.hostView.changeDetector, [appComponentRefToken]), bind(appComponentType).toFactory((ref) => ref.instance, [appComponentRefToken]), bind(LifeCycle).toFactory((exceptionHandler) => new LifeCycle(exceptionHandler, null, assertionsEnabled()), [ExceptionHandler]), bind(EventManager).toFactory((zone) => {
    var plugins = [new HammerGesturesPlugin(), new KeyEventsPlugin(), new DomEventsPlugin()];
    return new EventManager(plugins, zone);
  }, [VmTurnZone]), bind(ShadowDomStrategy).toFactory((styleUrlResolver, doc) => new EmulatedUnscopedShadowDomStrategy(styleUrlResolver, doc.head), [StyleUrlResolver, appDocumentToken]), bind(Renderer).toClass(DirectDomRenderer), bind(rc.Compiler).toClass(rc.DefaultCompiler), bind(rvf.ViewFactory).toFactory((capacity, eventManager, shadowDomStrategy) => new rvf.ViewFactory(capacity, eventManager, shadowDomStrategy), [rvf.VIEW_POOL_CAPACITY, EventManager, ShadowDomStrategy]), bind(rvf.VIEW_POOL_CAPACITY).toValue(10000), ProtoViewFactory, bind(ViewFactory).toFactory((capacity) => new ViewFactory(capacity), [VIEW_POOL_CAPACITY]), bind(VIEW_POOL_CAPACITY).toValue(10000), Compiler, CompilerCache, TemplateResolver, bind(ChangeDetection).toValue(dynamicChangeDetection), TemplateLoader, DirectiveMetadataReader, Parser, Lexer, ExceptionHandler, bind(XHR).toValue(new XHRImpl()), ComponentUrlMapper, UrlResolver, StyleUrlResolver, StyleInliner, DynamicComponentLoader, Testability]), assert.genericType(List, Binding));
}
function _createVmZone(givenReporter) {
  assert.argumentTypes(givenReporter, Function);
  var defaultErrorReporter = (exception, stackTrace) => {
    var longStackTrace = ListWrapper.join(stackTrace, "\n\n-----async gap-----\n");
    print(`${exception}\n\n${longStackTrace}`);
    throw exception;
  };
  var reporter = isPresent(givenReporter) ? givenReporter : defaultErrorReporter;
  var zone = new VmTurnZone({enableLongStackTrace: assertionsEnabled()});
  zone.initCallbacks({onErrorHandler: reporter});
  return assert.returnType((zone), VmTurnZone);
}
Object.defineProperty(_createVmZone, "parameters", {get: function() {
    return [[Function]];
  }});
export function bootstrap(appComponentType, componentInjectableBindings = null, errorReporter = null) {
  assert.argumentTypes(appComponentType, Type, componentInjectableBindings, assert.genericType(List, Binding), errorReporter, Function);
  BrowserDomAdapter.makeCurrent();
  var bootstrapProcess = PromiseWrapper.completer();
  var zone = _createVmZone(errorReporter);
  zone.run(() => {
    var appInjector = _createAppInjector(appComponentType, componentInjectableBindings, zone);
    PromiseWrapper.then(appInjector.asyncGet(appComponentRefToken), (componentRef) => {
      var appChangeDetector = componentRef.hostView.changeDetector;
      var lc = appInjector.get(LifeCycle);
      lc.registerWith(zone, appChangeDetector);
      lc.tick();
      bootstrapProcess.resolve(componentRef);
    }, (err) => {
      bootstrapProcess.reject(err);
    });
  });
  return assert.returnType((bootstrapProcess.promise), assert.genericType(Promise, ComponentRef));
}
Object.defineProperty(bootstrap, "parameters", {get: function() {
    return [[Type], [assert.genericType(List, Binding)], [Function]];
  }});
function _createAppInjector(appComponentType, bindings, zone) {
  assert.argumentTypes(appComponentType, Type, bindings, assert.genericType(List, Binding), zone, VmTurnZone);
  if (isBlank(_rootInjector))
    _rootInjector = Injector.resolveAndCreate(_rootBindings);
  var mergedBindings = isPresent(bindings) ? ListWrapper.concat(_injectorBindings(appComponentType), bindings) : _injectorBindings(appComponentType);
  ListWrapper.push(mergedBindings, bind(VmTurnZone).toValue(zone));
  return assert.returnType((_rootInjector.resolveAndCreateChild(mergedBindings)), Injector);
}
Object.defineProperty(_createAppInjector, "parameters", {get: function() {
    return [[Type], [assert.genericType(List, Binding)], [VmTurnZone]];
  }});
//# sourceMappingURL=application.js.map

//# sourceMappingURL=./application.map