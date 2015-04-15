import {describe,
  ddescribe,
  it,
  iit,
  xit,
  xdescribe,
  expect,
  beforeEach,
  SpyObject,
  proxy,
  el} from 'angular2/test_lib';
import {isBlank,
  isPresent,
  IMPLEMENTS} from 'angular2/src/facade/lang';
import {ListWrapper,
  MapWrapper,
  List,
  StringMapWrapper,
  iterateListLike} from 'angular2/src/facade/collection';
import {ProtoElementInjector,
  PreBuiltObjects,
  DirectiveBinding,
  TreeNode,
  ElementRef} from 'angular2/src/core/compiler/element_injector';
import {Parent,
  Ancestor} from 'angular2/src/core/annotations/visibility';
import {EventEmitter,
  PropertySetter,
  Attribute,
  Query} from 'angular2/src/core/annotations/di';
import {onDestroy} from 'angular2/src/core/annotations/annotations';
import {Optional,
  Injector,
  Inject,
  bind} from 'angular2/di';
import {AppProtoView,
  AppView} from 'angular2/src/core/compiler/view';
import {ViewContainer} from 'angular2/src/core/compiler/view_container';
import {NgElement} from 'angular2/src/core/compiler/ng_element';
import {Directive} from 'angular2/src/core/annotations/annotations';
import {BindingPropagationConfig,
  Parser,
  Lexer} from 'angular2/change_detection';
import {ViewRef,
  Renderer,
  EventBinding} from 'angular2/src/render/api';
import {QueryList} from 'angular2/src/core/compiler/query_list';
class DummyDirective extends Directive {
  constructor({lifecycle} = {}) {
    super({lifecycle: lifecycle});
  }
}
class DummyView extends SpyObject {
  noSuchMethod(m) {
    super.noSuchMethod(m);
  }
}
Object.defineProperty(DummyView, "annotations", {get: function() {
    return [new proxy, new IMPLEMENTS(AppView)];
  }});
class SimpleDirective {}
class SomeOtherDirective {}
var _constructionCount = 0;
class CountingDirective {
  constructor() {
    this.count = _constructionCount;
    _constructionCount += 1;
  }
}
class FancyCountingDirective extends CountingDirective {
  constructor() {
    super();
  }
}
class NeedsDirective {
  constructor(dependency) {
    this.dependency = dependency;
  }
}
Object.defineProperty(NeedsDirective, "parameters", {get: function() {
    return [[SimpleDirective]];
  }});
class OptionallyNeedsDirective {
  constructor(dependency) {
    this.dependency = dependency;
  }
}
Object.defineProperty(OptionallyNeedsDirective, "parameters", {get: function() {
    return [[SimpleDirective, new Optional()]];
  }});
class NeedDirectiveFromParent {
  constructor(dependency) {
    this.dependency = dependency;
  }
}
Object.defineProperty(NeedDirectiveFromParent, "parameters", {get: function() {
    return [[SimpleDirective, new Parent()]];
  }});
class NeedDirectiveFromAncestor {
  constructor(dependency) {
    this.dependency = dependency;
  }
}
Object.defineProperty(NeedDirectiveFromAncestor, "parameters", {get: function() {
    return [[SimpleDirective, new Ancestor()]];
  }});
class NeedsService {
  constructor(service) {
    this.service = service;
  }
}
Object.defineProperty(NeedsService, "parameters", {get: function() {
    return [[new Inject("service")]];
  }});
class NeedsEventEmitter {
  constructor(clickEmitter) {
    this.clickEmitter = clickEmitter;
  }
  click() {
    this.clickEmitter(null);
  }
}
Object.defineProperty(NeedsEventEmitter, "parameters", {get: function() {
    return [[Function, new EventEmitter('click')]];
  }});
class NeedsEventEmitterNoType {
  constructor(clickEmitter) {
    this.clickEmitter = clickEmitter;
  }
  click() {
    this.clickEmitter(null);
  }
}
Object.defineProperty(NeedsEventEmitterNoType, "parameters", {get: function() {
    return [[new EventEmitter('click')]];
  }});
class NeedsPropertySetter {
  constructor(propSetter, roleSetter, classSetter, classWithDashSetter, styleSetter, unitSetter) {
    this.propSetter = propSetter;
    this.roleSetter = roleSetter;
    this.classSetter = classSetter;
    this.classWithDashSetter = classWithDashSetter;
    this.styleSetter = styleSetter;
    this.unitSetter = unitSetter;
  }
  setProp(value) {
    this.propSetter(value);
  }
  setRole(value) {
    this.roleSetter(value);
  }
  setClass(value) {
    this.classSetter(value);
  }
  setStyle(value) {
    this.styleSetter(value);
  }
  setStyleWithUnit(value) {
    this.unitSetter(value);
  }
}
Object.defineProperty(NeedsPropertySetter, "parameters", {get: function() {
    return [[Function, new PropertySetter('title')], [Function, new PropertySetter('attr.role')], [Function, new PropertySetter('class.active')], [Function, new PropertySetter('class.foo-bar')], [Function, new PropertySetter('style.width')], [Function, new PropertySetter('style.height.px')]];
  }});
class NeedsPropertySetterNoType {
  constructor(propSetter) {
    this.propSetter = propSetter;
  }
  setProp(value) {
    this.propSetter(value);
  }
}
Object.defineProperty(NeedsPropertySetterNoType, "parameters", {get: function() {
    return [[new PropertySetter('title')]];
  }});
class NeedsAttribute {
  constructor(typeAttribute, titleAttribute, fooAttribute) {
    this.typeAttribute = typeAttribute;
    this.titleAttribute = titleAttribute;
    this.fooAttribute = fooAttribute;
  }
}
Object.defineProperty(NeedsAttribute, "parameters", {get: function() {
    return [[assert.type.string, new Attribute('type')], [assert.type.string, new Attribute('title')], [assert.type.string, new Attribute('foo')]];
  }});
class NeedsAttributeNoType {
  constructor(fooAttribute) {
    this.fooAttribute = fooAttribute;
  }
}
Object.defineProperty(NeedsAttributeNoType, "parameters", {get: function() {
    return [[new Attribute('foo')]];
  }});
class NeedsQuery {
  constructor(query) {
    this.query = query;
  }
}
Object.defineProperty(NeedsQuery, "parameters", {get: function() {
    return [[QueryList, new Query(CountingDirective)]];
  }});
class NeedsElementRef {
  constructor(ref) {
    this.elementRef = ref;
  }
}
Object.defineProperty(NeedsElementRef, "parameters", {get: function() {
    return [[ElementRef]];
  }});
class A_Needs_B {
  constructor(dep) {}
}
class B_Needs_A {
  constructor(dep) {}
}
class NeedsView {
  constructor(view) {
    this.view = view;
  }
}
Object.defineProperty(NeedsView, "parameters", {get: function() {
    return [[new Inject(AppView)]];
  }});
class DirectiveWithDestroy {
  constructor() {
    this.onDestroyCounter = 0;
  }
  onDestroy() {
    this.onDestroyCounter++;
  }
}
class TestNode extends TreeNode {
  constructor(parent, message) {
    super(parent);
    this.message = message;
  }
  toString() {
    return this.message;
  }
}
Object.defineProperty(TestNode, "parameters", {get: function() {
    return [[TestNode], []];
  }});
export function main() {
  var defaultPreBuiltObjects = new PreBuiltObjects(null, null, null, null);
  var appInjector = Injector.resolveAndCreate([]);
  function humanize(tree, names) {
    var lookupName = (item) => ListWrapper.last(ListWrapper.find(names, (pair) => pair[0] === item));
    if (tree.children.length == 0)
      return lookupName(tree);
    var children = tree.children.map((m) => humanize(m, names));
    return [lookupName(tree), children];
  }
  Object.defineProperty(humanize, "parameters", {get: function() {
      return [[], [List]];
    }});
  function injector(bindings, lightDomAppInjector = null, shadowDomAppInjector = null, preBuiltObjects = null, attributes = null) {
    if (isBlank(lightDomAppInjector))
      lightDomAppInjector = appInjector;
    var proto = new ProtoElementInjector(null, 0, bindings, isPresent(shadowDomAppInjector));
    proto.attributes = attributes;
    var inj = proto.instantiate(null);
    var preBuilt = isPresent(preBuiltObjects) ? preBuiltObjects : defaultPreBuiltObjects;
    inj.instantiateDirectives(lightDomAppInjector, null, shadowDomAppInjector, preBuilt);
    return inj;
  }
  function parentChildInjectors(parentBindings, childBindings, parentPreBuildObjects = null) {
    if (isBlank(parentPreBuildObjects))
      parentPreBuildObjects = defaultPreBuiltObjects;
    var inj = Injector.resolveAndCreate([]);
    var protoParent = new ProtoElementInjector(null, 0, parentBindings);
    var parent = protoParent.instantiate(null);
    parent.instantiateDirectives(inj, null, null, parentPreBuildObjects);
    var protoChild = new ProtoElementInjector(protoParent, 1, childBindings, false, 1);
    var child = protoChild.instantiate(parent);
    child.instantiateDirectives(inj, null, null, defaultPreBuiltObjects);
    return child;
  }
  function hostShadowInjectors(hostBindings, shadowBindings, hostPreBuildObjects = null) {
    if (isBlank(hostPreBuildObjects))
      hostPreBuildObjects = defaultPreBuiltObjects;
    var inj = Injector.resolveAndCreate([]);
    var shadowInj = inj.resolveAndCreateChild([]);
    var protoParent = new ProtoElementInjector(null, 0, hostBindings, true);
    var host = protoParent.instantiate(null);
    host.instantiateDirectives(inj, null, shadowInj, hostPreBuildObjects);
    var protoChild = new ProtoElementInjector(protoParent, 0, shadowBindings, false, 1);
    var shadow = protoChild.instantiate(null);
    shadow.instantiateDirectives(shadowInj, host, null, null);
    return shadow;
  }
  describe('TreeNodes', () => {
    var root,
        firstParent,
        lastParent,
        node;
    beforeEach(() => {
      root = new TestNode(null, 'root');
      var p1 = firstParent = new TestNode(root, 'p1');
      var p2 = lastParent = new TestNode(root, 'p2');
      node = new TestNode(p1, 'c1');
      new TestNode(p1, 'c2');
      new TestNode(p2, 'c3');
    });
    function walk(node, f) {
      if (isBlank(node))
        return f;
      f(node);
      ListWrapper.forEach(node.children, (n) => walk(n, f));
    }
    function logWalk(node) {
      var log = '';
      walk(node, (n) => {
        log += (log.length != 0 ? ', ' : '') + n.toString();
      });
      return log;
    }
    it('should support listing children', () => {
      expect(logWalk(root)).toEqual('root, p1, c1, c2, p2, c3');
    });
    it('should support removing the first child node', () => {
      firstParent.remove();
      expect(firstParent.parent).toEqual(null);
      expect(logWalk(root)).toEqual('root, p2, c3');
    });
    it('should support removing the last child node', () => {
      lastParent.remove();
      expect(logWalk(root)).toEqual('root, p1, c1, c2');
    });
    it('should support moving a node at the end of children', () => {
      node.remove();
      root.addChild(node);
      expect(logWalk(root)).toEqual('root, p1, c2, p2, c3, c1');
    });
    it('should support moving a node in the beginning of children', () => {
      node.remove();
      lastParent.addChildAfter(node, null);
      expect(logWalk(root)).toEqual('root, p1, c2, p2, c1, c3');
    });
    it('should support moving a node in the middle of children', () => {
      node.remove();
      lastParent.addChildAfter(node, firstParent);
      expect(logWalk(root)).toEqual('root, p1, c2, c1, p2, c3');
    });
  });
  describe("ProtoElementInjector", () => {
    describe("direct parent", () => {
      it("should return parent proto injector when distance is 1", () => {
        var distance = 1;
        var protoParent = new ProtoElementInjector(null, 0, []);
        var protoChild = new ProtoElementInjector(protoParent, 1, [], false, distance);
        expect(protoChild.directParent()).toEqual(protoParent);
      });
      it("should return null otherwise", () => {
        var distance = 2;
        var protoParent = new ProtoElementInjector(null, 0, []);
        var protoChild = new ProtoElementInjector(protoParent, 1, [], false, distance);
        expect(protoChild.directParent()).toEqual(null);
      });
      it("should allow for direct access using getDirectiveBindingAtIndex", function() {
        var binding = DirectiveBinding.createFromBinding(bind(SimpleDirective).toClass(SimpleDirective), null);
        var proto = new ProtoElementInjector(null, 0, [binding]);
        expect(proto.getDirectiveBindingAtIndex(0)).toBeAnInstanceOf(DirectiveBinding);
        expect(() => proto.getDirectiveBindingAtIndex(-1)).toThrowError('Index -1 is out-of-bounds.');
        expect(() => proto.getDirectiveBindingAtIndex(10)).toThrowError('Index 10 is out-of-bounds.');
      });
    });
  });
  describe("ElementInjector", function() {
    describe("instantiate", function() {
      it("should create an element injector", function() {
        var protoParent = new ProtoElementInjector(null, 0, []);
        var protoChild1 = new ProtoElementInjector(protoParent, 1, []);
        var protoChild2 = new ProtoElementInjector(protoParent, 2, []);
        var p = protoParent.instantiate(null);
        var c1 = protoChild1.instantiate(p);
        var c2 = protoChild2.instantiate(p);
        expect(humanize(p, [[p, 'parent'], [c1, 'child1'], [c2, 'child2']])).toEqual(["parent", ["child1", "child2"]]);
      });
      describe("direct parent", () => {
        it("should return parent injector when distance is 1", () => {
          var distance = 1;
          var protoParent = new ProtoElementInjector(null, 0, []);
          var protoChild = new ProtoElementInjector(protoParent, 1, [], false, distance);
          var p = protoParent.instantiate(null);
          var c = protoChild.instantiate(p);
          expect(c.directParent()).toEqual(p);
        });
        it("should return null otherwise", () => {
          var distance = 2;
          var protoParent = new ProtoElementInjector(null, 0, []);
          var protoChild = new ProtoElementInjector(protoParent, 1, [], false, distance);
          var p = protoParent.instantiate(null);
          var c = protoChild.instantiate(p);
          expect(c.directParent()).toEqual(null);
        });
      });
    });
    describe("hasBindings", function() {
      it("should be true when there are bindings", function() {
        var p = new ProtoElementInjector(null, 0, [SimpleDirective]);
        expect(p.hasBindings).toBeTruthy();
      });
      it("should be false otherwise", function() {
        var p = new ProtoElementInjector(null, 0, []);
        expect(p.hasBindings).toBeFalsy();
      });
    });
    describe("hasInstances", function() {
      it("should be false when no directives are instantiated", function() {
        expect(injector([]).hasInstances()).toBe(false);
      });
      it("should be true when directives are instantiated", function() {
        expect(injector([SimpleDirective]).hasInstances()).toBe(true);
      });
    });
    describe("instantiateDirectives", function() {
      it("should instantiate directives that have no dependencies", function() {
        var inj = injector([SimpleDirective]);
        expect(inj.get(SimpleDirective)).toBeAnInstanceOf(SimpleDirective);
      });
      it("should instantiate directives that depend on other directives", function() {
        var inj = injector([SimpleDirective, NeedsDirective]);
        var d = inj.get(NeedsDirective);
        expect(d).toBeAnInstanceOf(NeedsDirective);
        expect(d.dependency).toBeAnInstanceOf(SimpleDirective);
      });
      it("should instantiate directives that depend on app services", function() {
        var appInjector = Injector.resolveAndCreate([bind("service").toValue("service")]);
        var inj = injector([NeedsService], appInjector);
        var d = inj.get(NeedsService);
        expect(d).toBeAnInstanceOf(NeedsService);
        expect(d.service).toEqual("service");
      });
      it("should instantiate directives that depend on pre built objects", function() {
        var view = new DummyView();
        var inj = injector([NeedsView], null, null, new PreBuiltObjects(view, null, null, null));
        expect(inj.get(NeedsView).view).toBe(view);
      });
      it("should instantiate directives that depend on the containing component", function() {
        var shadow = hostShadowInjectors([SimpleDirective], [NeedsDirective]);
        var d = shadow.get(NeedsDirective);
        expect(d).toBeAnInstanceOf(NeedsDirective);
        expect(d.dependency).toBeAnInstanceOf(SimpleDirective);
      });
      it("should not instantiate directives that depend on other directives in the containing component's ElementInjector", () => {
        expect(() => {
          hostShadowInjectors([SomeOtherDirective, SimpleDirective], [NeedsDirective]);
        }).toThrowError('No provider for SimpleDirective! (NeedsDirective -> SimpleDirective)');
      });
      it("should instantiate component directives that depend on app services in the shadow app injector", () => {
        var shadowAppInjector = Injector.resolveAndCreate([bind("service").toValue("service")]);
        var inj = injector([NeedsService], null, shadowAppInjector);
        var d = inj.get(NeedsService);
        expect(d).toBeAnInstanceOf(NeedsService);
        expect(d.service).toEqual("service");
      });
      it("should not instantiate other directives that depend on app services in the shadow app injector", () => {
        var shadowAppInjector = Injector.resolveAndCreate([bind("service").toValue("service")]);
        expect(() => {
          injector([SomeOtherDirective, NeedsService], null, shadowAppInjector);
        }).toThrowError('No provider for service! (NeedsService -> service)');
      });
      it("should return app services", function() {
        var appInjector = Injector.resolveAndCreate([bind("service").toValue("service")]);
        var inj = injector([], appInjector);
        expect(inj.get('service')).toEqual('service');
      });
      it("should get directives from parent", function() {
        var child = parentChildInjectors([SimpleDirective], [NeedDirectiveFromParent]);
        var d = child.get(NeedDirectiveFromParent);
        expect(d).toBeAnInstanceOf(NeedDirectiveFromParent);
        expect(d.dependency).toBeAnInstanceOf(SimpleDirective);
      });
      it("should not return parent's directives on self", function() {
        expect(() => {
          injector([SimpleDirective, NeedDirectiveFromParent]);
        }).toThrowError();
      });
      it("should get directives from ancestor", function() {
        var child = parentChildInjectors([SimpleDirective], [NeedDirectiveFromAncestor]);
        var d = child.get(NeedDirectiveFromAncestor);
        expect(d).toBeAnInstanceOf(NeedDirectiveFromAncestor);
        expect(d.dependency).toBeAnInstanceOf(SimpleDirective);
      });
      it("should throw when no SimpleDirective found", function() {
        expect(() => injector([NeedDirectiveFromParent])).toThrowError('No provider for SimpleDirective! (NeedDirectiveFromParent -> SimpleDirective)');
      });
      it("should inject null when no directive found", function() {
        var inj = injector([OptionallyNeedsDirective]);
        var d = inj.get(OptionallyNeedsDirective);
        expect(d.dependency).toEqual(null);
      });
      it("should accept SimpleDirective bindings instead of SimpleDirective types", function() {
        var inj = injector([DirectiveBinding.createFromBinding(bind(SimpleDirective).toClass(SimpleDirective), null)]);
        expect(inj.get(SimpleDirective)).toBeAnInstanceOf(SimpleDirective);
      });
      it("should allow for direct access using getDirectiveAtIndex", function() {
        var inj = injector([DirectiveBinding.createFromBinding(bind(SimpleDirective).toClass(SimpleDirective), null)]);
        expect(inj.getDirectiveAtIndex(0)).toBeAnInstanceOf(SimpleDirective);
        expect(() => inj.getDirectiveAtIndex(-1)).toThrowError('Index -1 is out-of-bounds.');
        expect(() => inj.getDirectiveAtIndex(10)).toThrowError('Index 10 is out-of-bounds.');
      });
      it("should handle cyclic dependencies", function() {
        expect(() => {
          var bAneedsB = bind(A_Needs_B).toFactory((a) => new A_Needs_B(a), [B_Needs_A]);
          var bBneedsA = bind(B_Needs_A).toFactory((a) => new B_Needs_A(a), [A_Needs_B]);
          injector([DirectiveBinding.createFromBinding(bAneedsB, null), DirectiveBinding.createFromBinding(bBneedsA, null)]);
        }).toThrowError('Cannot instantiate cyclic dependency! ' + '(A_Needs_B -> B_Needs_A -> A_Needs_B)');
      });
      it("should call onDestroy on directives subscribed to this event", function() {
        var inj = injector([DirectiveBinding.createFromType(DirectiveWithDestroy, new DummyDirective({lifecycle: [onDestroy]}))]);
        var destroy = inj.get(DirectiveWithDestroy);
        inj.clearDirectives();
        expect(destroy.onDestroyCounter).toBe(1);
      });
    });
    describe("pre built objects", function() {
      it("should return view", function() {
        var view = new DummyView();
        var inj = injector([], null, null, new PreBuiltObjects(view, null, null, null));
        expect(inj.get(AppView)).toEqual(view);
      });
      it("should return element", function() {
        var element = new NgElement(null, null);
        var inj = injector([], null, null, new PreBuiltObjects(null, element, null, null));
        expect(inj.get(NgElement)).toEqual(element);
      });
      it('should return viewContainer', function() {
        var viewContainer = new ViewContainer(null, null, null, null);
        var inj = injector([], null, null, new PreBuiltObjects(null, null, viewContainer, null));
        expect(inj.get(ViewContainer)).toEqual(viewContainer);
      });
      it('should return bindingPropagationConfig', function() {
        var config = new BindingPropagationConfig(null);
        var inj = injector([], null, null, new PreBuiltObjects(null, null, null, config));
        expect(inj.get(BindingPropagationConfig)).toEqual(config);
      });
    });
    describe("dynamicallyCreateComponent", () => {
      it("should create a component dynamically", () => {
        var inj = injector([]);
        inj.dynamicallyCreateComponent(SimpleDirective, null, null);
        expect(inj.getDynamicallyLoadedComponent()).toBeAnInstanceOf(SimpleDirective);
        expect(inj.get(SimpleDirective)).toBeAnInstanceOf(SimpleDirective);
      });
      it("should inject parent dependencies into the dynamically-loaded component", () => {
        var inj = parentChildInjectors([SimpleDirective], []);
        inj.dynamicallyCreateComponent(NeedDirectiveFromAncestor, null, null);
        expect(inj.getDynamicallyLoadedComponent()).toBeAnInstanceOf(NeedDirectiveFromAncestor);
        expect(inj.getDynamicallyLoadedComponent().dependency).toBeAnInstanceOf(SimpleDirective);
      });
      it("should not inject the proxy component into the children of the dynamically-loaded component", () => {
        var injWithDynamicallyLoadedComponent = injector([SimpleDirective]);
        injWithDynamicallyLoadedComponent.dynamicallyCreateComponent(SomeOtherDirective, null, null);
        var shadowDomProtoInjector = new ProtoElementInjector(null, 0, [NeedDirectiveFromAncestor], false);
        var shadowDomInj = shadowDomProtoInjector.instantiate(null);
        expect(() => shadowDomInj.instantiateDirectives(appInjector, injWithDynamicallyLoadedComponent, null, defaultPreBuiltObjects)).toThrowError(new RegExp("No provider for SimpleDirective"));
      });
      it("should not inject the dynamically-loaded component into directives on the same element", () => {
        var proto = new ProtoElementInjector(null, 0, [NeedsDirective], false);
        var inj = proto.instantiate(null);
        inj.dynamicallyCreateComponent(SimpleDirective, null, null);
        expect(() => inj.instantiateDirectives(null, null, null, null)).toThrowError();
      });
      it("should inject the dynamically-loaded component into the children of the dynamically-loaded component", () => {
        var injWithDynamicallyLoadedComponent = injector([]);
        injWithDynamicallyLoadedComponent.dynamicallyCreateComponent(SimpleDirective, null, null);
        var shadowDomProtoInjector = new ProtoElementInjector(null, 0, [NeedDirectiveFromAncestor], false);
        var shadowDomInjector = shadowDomProtoInjector.instantiate(null);
        shadowDomInjector.instantiateDirectives(appInjector, injWithDynamicallyLoadedComponent, null, defaultPreBuiltObjects);
        expect(shadowDomInjector.get(NeedDirectiveFromAncestor)).toBeAnInstanceOf(NeedDirectiveFromAncestor);
        expect(shadowDomInjector.get(NeedDirectiveFromAncestor).dependency).toBeAnInstanceOf(SimpleDirective);
      });
      it("should remove the dynamically-loaded component when dehydrating", () => {
        var inj = injector([]);
        inj.dynamicallyCreateComponent(DirectiveWithDestroy, new DummyDirective({lifecycle: [onDestroy]}), null);
        var dir = inj.getDynamicallyLoadedComponent();
        inj.clearDirectives();
        expect(inj.getDynamicallyLoadedComponent()).toBe(null);
        expect(dir.onDestroyCounter).toBe(1);
        inj.instantiateDirectives(null, null, null, null);
        expect(inj.getDynamicallyLoadedComponent()).toBe(null);
      });
      it("should inject services of the dynamically-loaded component", () => {
        var inj = injector([]);
        var appInjector = Injector.resolveAndCreate([bind("service").toValue("Service")]);
        inj.dynamicallyCreateComponent(NeedsService, null, appInjector);
        expect(inj.getDynamicallyLoadedComponent().service).toEqual("Service");
      });
    });
    describe('event emitters', () => {
      function createpreBuildObject(eventName, eventHandler) {
        var handlers = StringMapWrapper.create();
        StringMapWrapper.set(handlers, eventName, eventHandler);
        var pv = new AppProtoView(null, null, null);
        pv.bindElement(null, 0, null, null, null);
        var eventBindings = ListWrapper.create();
        ListWrapper.push(eventBindings, new EventBinding(eventName, new Parser(new Lexer()).parseAction('handler()', '')));
        pv.bindEvent(eventBindings);
        var view = new AppView(pv, MapWrapper.create());
        view.context = new ContextWithHandler(eventHandler);
        return new PreBuiltObjects(view, null, null, null);
      }
      it('should be injectable and callable', () => {
        var called = false;
        var preBuildObject = createpreBuildObject('click', () => {
          called = true;
        });
        var inj = injector([NeedsEventEmitter], null, null, preBuildObject);
        inj.get(NeedsEventEmitter).click();
        expect(called).toEqual(true);
      });
      it('should be injectable and callable without specifying param type annotation', () => {
        var called = false;
        var preBuildObject = createpreBuildObject('click', () => {
          called = true;
        });
        var inj = injector([NeedsEventEmitterNoType], null, null, preBuildObject);
        inj.get(NeedsEventEmitterNoType).click();
        expect(called).toEqual(true);
      });
      it('should be queryable through hasEventEmitter', () => {
        var inj = injector([NeedsEventEmitter]);
        expect(inj.hasEventEmitter('click')).toBe(true);
        expect(inj.hasEventEmitter('move')).toBe(false);
      });
      it('should be queryable through hasEventEmitter without specifying param type annotation', () => {
        var inj = injector([NeedsEventEmitterNoType]);
        expect(inj.hasEventEmitter('click')).toBe(true);
        expect(inj.hasEventEmitter('move')).toBe(false);
      });
    });
    describe('property setter', () => {
      var renderer,
          view;
      beforeEach(() => {
        renderer = new FakeRenderer();
        var protoView = new AppProtoView(renderer, null, null);
        view = new AppView(protoView, MapWrapper.create());
        view.render = new ViewRef();
      });
      it('should be injectable and callable', () => {
        var preBuildObject = new PreBuiltObjects(view, null, null, null);
        var inj = injector([NeedsPropertySetter], null, null, preBuildObject);
        var component = inj.get(NeedsPropertySetter);
        component.setProp('foobar');
        component.setRole('button');
        component.setClass(true);
        component.classWithDashSetter(true);
        component.setStyle('40px');
        component.setStyleWithUnit(50);
        expect(renderer.log[0]).toEqual([view.render, 0, 'title', 'foobar']);
        expect(renderer.log[1]).toEqual([view.render, 0, 'attr.role', 'button']);
        expect(renderer.log[2]).toEqual([view.render, 0, 'class.active', true]);
        expect(renderer.log[3]).toEqual([view.render, 0, 'class.foo-bar', true]);
        expect(renderer.log[4]).toEqual([view.render, 0, 'style.width', '40px']);
        expect(renderer.log[5]).toEqual([view.render, 0, 'style.height.px', 50]);
      });
      it('should be injectable and callable without specifying param type annotation', () => {
        var preBuildObject = new PreBuiltObjects(view, null, null, null);
        var inj = injector([NeedsPropertySetterNoType], null, null, preBuildObject);
        var component = inj.get(NeedsPropertySetterNoType);
        component.setProp('foobar');
        expect(renderer.log[0]).toEqual([view.render, 0, 'title', 'foobar']);
      });
    });
    describe('static attributes', () => {
      it('should be injectable', () => {
        var attributes = MapWrapper.create();
        MapWrapper.set(attributes, 'type', 'text');
        MapWrapper.set(attributes, 'title', '');
        var inj = injector([NeedsAttribute], null, null, null, attributes);
        var needsAttribute = inj.get(NeedsAttribute);
        expect(needsAttribute.typeAttribute).toEqual('text');
        expect(needsAttribute.titleAttribute).toEqual('');
        expect(needsAttribute.fooAttribute).toEqual(null);
      });
      it('should be injectable without type annotation', () => {
        var attributes = MapWrapper.create();
        MapWrapper.set(attributes, 'foo', 'bar');
        var inj = injector([NeedsAttributeNoType], null, null, null, attributes);
        var needsAttribute = inj.get(NeedsAttributeNoType);
        expect(needsAttribute.fooAttribute).toEqual('bar');
      });
    });
    describe("ElementRef", () => {
      it("should inject ElementRef", () => {
        var inj = injector([NeedsElementRef]);
        expect(inj.get(NeedsElementRef).elementRef).toBeAnInstanceOf(ElementRef);
      });
    });
    describe('directive queries', () => {
      var preBuildObjects = defaultPreBuiltObjects;
      beforeEach(() => {
        _constructionCount = 0;
      });
      function expectDirectives(query, type, expectedIndex) {
        var currentCount = 0;
        iterateListLike(query, (i) => {
          expect(i).toBeAnInstanceOf(type);
          expect(i.count).toBe(expectedIndex[currentCount]);
          currentCount += 1;
        });
      }
      it('should be injectable', () => {
        var inj = injector([NeedsQuery], null, null, preBuildObjects);
        expect(inj.get(NeedsQuery).query).toBeAnInstanceOf(QueryList);
      });
      it('should contain directives on the same injector', () => {
        var inj = injector([NeedsQuery, CountingDirective], null, null, preBuildObjects);
        expectDirectives(inj.get(NeedsQuery).query, CountingDirective, [0]);
      });
      it('should contain directives on the same and a child injector in construction order', () => {
        var protoParent = new ProtoElementInjector(null, 0, [NeedsQuery, CountingDirective]);
        var protoChild = new ProtoElementInjector(protoParent, 1, [CountingDirective]);
        var parent = protoParent.instantiate(null);
        var child = protoChild.instantiate(parent);
        parent.instantiateDirectives(Injector.resolveAndCreate([]), null, null, preBuildObjects);
        child.instantiateDirectives(Injector.resolveAndCreate([]), null, null, preBuildObjects);
        expectDirectives(parent.get(NeedsQuery).query, CountingDirective, [0, 1]);
      });
      it('should reflect unlinking an injector', () => {
        var protoParent = new ProtoElementInjector(null, 0, [NeedsQuery, CountingDirective]);
        var protoChild = new ProtoElementInjector(protoParent, 1, [CountingDirective]);
        var parent = protoParent.instantiate(null);
        var child = protoChild.instantiate(parent);
        parent.instantiateDirectives(Injector.resolveAndCreate([]), null, null, preBuildObjects);
        child.instantiateDirectives(Injector.resolveAndCreate([]), null, null, preBuildObjects);
        child.unlink();
        expectDirectives(parent.get(NeedsQuery).query, CountingDirective, [0]);
      });
      it('should reflect moving an injector as a last child', () => {
        var protoParent = new ProtoElementInjector(null, 0, [NeedsQuery, CountingDirective]);
        var protoChild1 = new ProtoElementInjector(protoParent, 1, [CountingDirective]);
        var protoChild2 = new ProtoElementInjector(protoParent, 1, [CountingDirective]);
        var parent = protoParent.instantiate(null);
        var child1 = protoChild1.instantiate(parent);
        var child2 = protoChild2.instantiate(parent);
        parent.instantiateDirectives(Injector.resolveAndCreate([]), null, null, preBuildObjects);
        child1.instantiateDirectives(Injector.resolveAndCreate([]), null, null, preBuildObjects);
        child2.instantiateDirectives(Injector.resolveAndCreate([]), null, null, preBuildObjects);
        child1.unlink();
        child1.link(parent);
        var queryList = parent.get(NeedsQuery).query;
        expectDirectives(queryList, CountingDirective, [0, 2, 1]);
      });
      it('should reflect moving an injector as a first child', () => {
        var protoParent = new ProtoElementInjector(null, 0, [NeedsQuery, CountingDirective]);
        var protoChild1 = new ProtoElementInjector(protoParent, 1, [CountingDirective]);
        var protoChild2 = new ProtoElementInjector(protoParent, 1, [CountingDirective]);
        var parent = protoParent.instantiate(null);
        var child1 = protoChild1.instantiate(parent);
        var child2 = protoChild2.instantiate(parent);
        parent.instantiateDirectives(Injector.resolveAndCreate([]), null, null, preBuildObjects);
        child1.instantiateDirectives(Injector.resolveAndCreate([]), null, null, preBuildObjects);
        child2.instantiateDirectives(Injector.resolveAndCreate([]), null, null, preBuildObjects);
        child2.unlink();
        child2.linkAfter(parent, null);
        var queryList = parent.get(NeedsQuery).query;
        expectDirectives(queryList, CountingDirective, [0, 2, 1]);
      });
      it('should support two concurrent queries for the same directive', () => {
        var protoGrandParent = new ProtoElementInjector(null, 0, [NeedsQuery]);
        var protoParent = new ProtoElementInjector(null, 0, [NeedsQuery]);
        var protoChild = new ProtoElementInjector(protoParent, 1, [CountingDirective]);
        var grandParent = protoGrandParent.instantiate(null);
        var parent = protoParent.instantiate(grandParent);
        var child = protoChild.instantiate(parent);
        grandParent.instantiateDirectives(Injector.resolveAndCreate([]), null, null, preBuildObjects);
        parent.instantiateDirectives(Injector.resolveAndCreate([]), null, null, preBuildObjects);
        child.instantiateDirectives(Injector.resolveAndCreate([]), null, null, preBuildObjects);
        var queryList1 = grandParent.get(NeedsQuery).query;
        var queryList2 = parent.get(NeedsQuery).query;
        expectDirectives(queryList1, CountingDirective, [0]);
        expectDirectives(queryList2, CountingDirective, [0]);
        child.unlink();
        expectDirectives(queryList1, CountingDirective, []);
        expectDirectives(queryList2, CountingDirective, []);
      });
    });
  });
}
class ContextWithHandler {
  constructor(handler) {
    this.handler = handler;
  }
}
class FakeRenderer extends Renderer {
  constructor() {
    super();
    this.log = [];
  }
  setElementProperty(viewRef, elementIndex, propertyName, value) {
    ListWrapper.push(this.log, [viewRef, elementIndex, propertyName, value]);
  }
}
//# sourceMappingURL=element_injector_spec.js.map

//# sourceMappingURL=./element_injector_spec.map