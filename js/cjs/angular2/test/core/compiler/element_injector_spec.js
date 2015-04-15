'use strict'; var parse5Adapter = require('angular2/src/dom/parse5_adapter'); parse5Adapter.Parse5DomAdapter.makeCurrent();
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_core_47_compiler_47_element_95_injector__,
    $__angular2_47_src_47_core_47_annotations_47_visibility__,
    $__angular2_47_src_47_core_47_annotations_47_di__,
    $__angular2_47_src_47_core_47_annotations_47_annotations__,
    $__angular2_47_di__,
    $__angular2_47_src_47_core_47_compiler_47_view__,
    $__angular2_47_src_47_core_47_compiler_47_view_95_container__,
    $__angular2_47_src_47_core_47_compiler_47_ng_95_element__,
    $__angular2_47_src_47_core_47_annotations_47_annotations__,
    $__angular2_47_change_95_detection__,
    $__angular2_47_src_47_render_47_api__,
    $__angular2_47_src_47_core_47_compiler_47_query_95_list__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    describe = $__0.describe,
    ddescribe = $__0.ddescribe,
    it = $__0.it,
    iit = $__0.iit,
    xit = $__0.xit,
    xdescribe = $__0.xdescribe,
    expect = $__0.expect,
    beforeEach = $__0.beforeEach,
    SpyObject = $__0.SpyObject,
    proxy = $__0.proxy,
    el = $__0.el;
var $__1 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isBlank = $__1.isBlank,
    isPresent = $__1.isPresent,
    IMPLEMENTS = $__1.IMPLEMENTS;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    ListWrapper = $__2.ListWrapper,
    MapWrapper = $__2.MapWrapper,
    List = $__2.List,
    StringMapWrapper = $__2.StringMapWrapper,
    iterateListLike = $__2.iterateListLike;
var $__3 = ($__angular2_47_src_47_core_47_compiler_47_element_95_injector__ = require("angular2/src/core/compiler/element_injector"), $__angular2_47_src_47_core_47_compiler_47_element_95_injector__ && $__angular2_47_src_47_core_47_compiler_47_element_95_injector__.__esModule && $__angular2_47_src_47_core_47_compiler_47_element_95_injector__ || {default: $__angular2_47_src_47_core_47_compiler_47_element_95_injector__}),
    ProtoElementInjector = $__3.ProtoElementInjector,
    PreBuiltObjects = $__3.PreBuiltObjects,
    DirectiveBinding = $__3.DirectiveBinding,
    TreeNode = $__3.TreeNode,
    ElementRef = $__3.ElementRef;
var $__4 = ($__angular2_47_src_47_core_47_annotations_47_visibility__ = require("angular2/src/core/annotations/visibility"), $__angular2_47_src_47_core_47_annotations_47_visibility__ && $__angular2_47_src_47_core_47_annotations_47_visibility__.__esModule && $__angular2_47_src_47_core_47_annotations_47_visibility__ || {default: $__angular2_47_src_47_core_47_annotations_47_visibility__}),
    Parent = $__4.Parent,
    Ancestor = $__4.Ancestor;
var $__5 = ($__angular2_47_src_47_core_47_annotations_47_di__ = require("angular2/src/core/annotations/di"), $__angular2_47_src_47_core_47_annotations_47_di__ && $__angular2_47_src_47_core_47_annotations_47_di__.__esModule && $__angular2_47_src_47_core_47_annotations_47_di__ || {default: $__angular2_47_src_47_core_47_annotations_47_di__}),
    EventEmitter = $__5.EventEmitter,
    PropertySetter = $__5.PropertySetter,
    Attribute = $__5.Attribute,
    Query = $__5.Query;
var onDestroy = ($__angular2_47_src_47_core_47_annotations_47_annotations__ = require("angular2/src/core/annotations/annotations"), $__angular2_47_src_47_core_47_annotations_47_annotations__ && $__angular2_47_src_47_core_47_annotations_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_47_annotations__}).onDestroy;
var $__7 = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}),
    Optional = $__7.Optional,
    Injector = $__7.Injector,
    Inject = $__7.Inject,
    bind = $__7.bind;
var $__8 = ($__angular2_47_src_47_core_47_compiler_47_view__ = require("angular2/src/core/compiler/view"), $__angular2_47_src_47_core_47_compiler_47_view__ && $__angular2_47_src_47_core_47_compiler_47_view__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view__ || {default: $__angular2_47_src_47_core_47_compiler_47_view__}),
    AppProtoView = $__8.AppProtoView,
    AppView = $__8.AppView;
var ViewContainer = ($__angular2_47_src_47_core_47_compiler_47_view_95_container__ = require("angular2/src/core/compiler/view_container"), $__angular2_47_src_47_core_47_compiler_47_view_95_container__ && $__angular2_47_src_47_core_47_compiler_47_view_95_container__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view_95_container__ || {default: $__angular2_47_src_47_core_47_compiler_47_view_95_container__}).ViewContainer;
var NgElement = ($__angular2_47_src_47_core_47_compiler_47_ng_95_element__ = require("angular2/src/core/compiler/ng_element"), $__angular2_47_src_47_core_47_compiler_47_ng_95_element__ && $__angular2_47_src_47_core_47_compiler_47_ng_95_element__.__esModule && $__angular2_47_src_47_core_47_compiler_47_ng_95_element__ || {default: $__angular2_47_src_47_core_47_compiler_47_ng_95_element__}).NgElement;
var Directive = ($__angular2_47_src_47_core_47_annotations_47_annotations__ = require("angular2/src/core/annotations/annotations"), $__angular2_47_src_47_core_47_annotations_47_annotations__ && $__angular2_47_src_47_core_47_annotations_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_47_annotations__}).Directive;
var $__12 = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}),
    BindingPropagationConfig = $__12.BindingPropagationConfig,
    Parser = $__12.Parser,
    Lexer = $__12.Lexer;
var $__13 = ($__angular2_47_src_47_render_47_api__ = require("angular2/src/render/api"), $__angular2_47_src_47_render_47_api__ && $__angular2_47_src_47_render_47_api__.__esModule && $__angular2_47_src_47_render_47_api__ || {default: $__angular2_47_src_47_render_47_api__}),
    ViewRef = $__13.ViewRef,
    Renderer = $__13.Renderer,
    EventBinding = $__13.EventBinding;
var QueryList = ($__angular2_47_src_47_core_47_compiler_47_query_95_list__ = require("angular2/src/core/compiler/query_list"), $__angular2_47_src_47_core_47_compiler_47_query_95_list__ && $__angular2_47_src_47_core_47_compiler_47_query_95_list__.__esModule && $__angular2_47_src_47_core_47_compiler_47_query_95_list__ || {default: $__angular2_47_src_47_core_47_compiler_47_query_95_list__}).QueryList;
var DummyDirective = function DummyDirective() {
  var lifecycle = (arguments[0] !== (void 0) ? arguments[0] : {}).lifecycle;
  $traceurRuntime.superConstructor($DummyDirective).call(this, {lifecycle: lifecycle});
};
var $DummyDirective = DummyDirective;
($traceurRuntime.createClass)(DummyDirective, {}, {}, Directive);
var DummyView = function DummyView() {
  $traceurRuntime.superConstructor($DummyView).apply(this, arguments);
  ;
};
var $DummyView = DummyView;
($traceurRuntime.createClass)(DummyView, {noSuchMethod: function(m) {
    $traceurRuntime.superGet(this, $DummyView.prototype, "noSuchMethod").call(this, m);
  }}, {}, SpyObject);
Object.defineProperty(DummyView, "annotations", {get: function() {
    return [new proxy, new IMPLEMENTS(AppView)];
  }});
var SimpleDirective = function SimpleDirective() {
  ;
};
($traceurRuntime.createClass)(SimpleDirective, {}, {});
var SomeOtherDirective = function SomeOtherDirective() {
  ;
};
($traceurRuntime.createClass)(SomeOtherDirective, {}, {});
var _constructionCount = 0;
var CountingDirective = function CountingDirective() {
  this.count = _constructionCount;
  _constructionCount += 1;
};
($traceurRuntime.createClass)(CountingDirective, {}, {});
var FancyCountingDirective = function FancyCountingDirective() {
  $traceurRuntime.superConstructor($FancyCountingDirective).call(this);
};
var $FancyCountingDirective = FancyCountingDirective;
($traceurRuntime.createClass)(FancyCountingDirective, {}, {}, CountingDirective);
var NeedsDirective = function NeedsDirective(dependency) {
  this.dependency = dependency;
};
($traceurRuntime.createClass)(NeedsDirective, {}, {});
Object.defineProperty(NeedsDirective, "parameters", {get: function() {
    return [[SimpleDirective]];
  }});
var OptionallyNeedsDirective = function OptionallyNeedsDirective(dependency) {
  this.dependency = dependency;
};
($traceurRuntime.createClass)(OptionallyNeedsDirective, {}, {});
Object.defineProperty(OptionallyNeedsDirective, "parameters", {get: function() {
    return [[SimpleDirective, new Optional()]];
  }});
var NeedDirectiveFromParent = function NeedDirectiveFromParent(dependency) {
  this.dependency = dependency;
};
($traceurRuntime.createClass)(NeedDirectiveFromParent, {}, {});
Object.defineProperty(NeedDirectiveFromParent, "parameters", {get: function() {
    return [[SimpleDirective, new Parent()]];
  }});
var NeedDirectiveFromAncestor = function NeedDirectiveFromAncestor(dependency) {
  this.dependency = dependency;
};
($traceurRuntime.createClass)(NeedDirectiveFromAncestor, {}, {});
Object.defineProperty(NeedDirectiveFromAncestor, "parameters", {get: function() {
    return [[SimpleDirective, new Ancestor()]];
  }});
var NeedsService = function NeedsService(service) {
  this.service = service;
};
($traceurRuntime.createClass)(NeedsService, {}, {});
Object.defineProperty(NeedsService, "parameters", {get: function() {
    return [[new Inject("service")]];
  }});
var NeedsEventEmitter = function NeedsEventEmitter(clickEmitter) {
  this.clickEmitter = clickEmitter;
};
($traceurRuntime.createClass)(NeedsEventEmitter, {click: function() {
    this.clickEmitter(null);
  }}, {});
Object.defineProperty(NeedsEventEmitter, "parameters", {get: function() {
    return [[Function, new EventEmitter('click')]];
  }});
var NeedsEventEmitterNoType = function NeedsEventEmitterNoType(clickEmitter) {
  this.clickEmitter = clickEmitter;
};
($traceurRuntime.createClass)(NeedsEventEmitterNoType, {click: function() {
    this.clickEmitter(null);
  }}, {});
Object.defineProperty(NeedsEventEmitterNoType, "parameters", {get: function() {
    return [[new EventEmitter('click')]];
  }});
var NeedsPropertySetter = function NeedsPropertySetter(propSetter, roleSetter, classSetter, classWithDashSetter, styleSetter, unitSetter) {
  this.propSetter = propSetter;
  this.roleSetter = roleSetter;
  this.classSetter = classSetter;
  this.classWithDashSetter = classWithDashSetter;
  this.styleSetter = styleSetter;
  this.unitSetter = unitSetter;
};
($traceurRuntime.createClass)(NeedsPropertySetter, {
  setProp: function(value) {
    this.propSetter(value);
  },
  setRole: function(value) {
    this.roleSetter(value);
  },
  setClass: function(value) {
    this.classSetter(value);
  },
  setStyle: function(value) {
    this.styleSetter(value);
  },
  setStyleWithUnit: function(value) {
    this.unitSetter(value);
  }
}, {});
Object.defineProperty(NeedsPropertySetter, "parameters", {get: function() {
    return [[Function, new PropertySetter('title')], [Function, new PropertySetter('attr.role')], [Function, new PropertySetter('class.active')], [Function, new PropertySetter('class.foo-bar')], [Function, new PropertySetter('style.width')], [Function, new PropertySetter('style.height.px')]];
  }});
var NeedsPropertySetterNoType = function NeedsPropertySetterNoType(propSetter) {
  this.propSetter = propSetter;
};
($traceurRuntime.createClass)(NeedsPropertySetterNoType, {setProp: function(value) {
    this.propSetter(value);
  }}, {});
Object.defineProperty(NeedsPropertySetterNoType, "parameters", {get: function() {
    return [[new PropertySetter('title')]];
  }});
var NeedsAttribute = function NeedsAttribute(typeAttribute, titleAttribute, fooAttribute) {
  this.typeAttribute = typeAttribute;
  this.titleAttribute = titleAttribute;
  this.fooAttribute = fooAttribute;
};
($traceurRuntime.createClass)(NeedsAttribute, {}, {});
Object.defineProperty(NeedsAttribute, "parameters", {get: function() {
    return [[$traceurRuntime.type.string, new Attribute('type')], [$traceurRuntime.type.string, new Attribute('title')], [$traceurRuntime.type.string, new Attribute('foo')]];
  }});
var NeedsAttributeNoType = function NeedsAttributeNoType(fooAttribute) {
  this.fooAttribute = fooAttribute;
};
($traceurRuntime.createClass)(NeedsAttributeNoType, {}, {});
Object.defineProperty(NeedsAttributeNoType, "parameters", {get: function() {
    return [[new Attribute('foo')]];
  }});
var NeedsQuery = function NeedsQuery(query) {
  this.query = query;
};
($traceurRuntime.createClass)(NeedsQuery, {}, {});
Object.defineProperty(NeedsQuery, "parameters", {get: function() {
    return [[QueryList, new Query(CountingDirective)]];
  }});
var NeedsElementRef = function NeedsElementRef(ref) {
  this.elementRef = ref;
};
($traceurRuntime.createClass)(NeedsElementRef, {}, {});
Object.defineProperty(NeedsElementRef, "parameters", {get: function() {
    return [[ElementRef]];
  }});
var A_Needs_B = function A_Needs_B(dep) {};
($traceurRuntime.createClass)(A_Needs_B, {}, {});
var B_Needs_A = function B_Needs_A(dep) {};
($traceurRuntime.createClass)(B_Needs_A, {}, {});
var NeedsView = function NeedsView(view) {
  this.view = view;
};
($traceurRuntime.createClass)(NeedsView, {}, {});
Object.defineProperty(NeedsView, "parameters", {get: function() {
    return [[new Inject(AppView)]];
  }});
var DirectiveWithDestroy = function DirectiveWithDestroy() {
  this.onDestroyCounter = 0;
};
($traceurRuntime.createClass)(DirectiveWithDestroy, {onDestroy: function() {
    this.onDestroyCounter++;
  }}, {});
var TestNode = function TestNode(parent, message) {
  $traceurRuntime.superConstructor($TestNode).call(this, parent);
  this.message = message;
};
var $TestNode = TestNode;
($traceurRuntime.createClass)(TestNode, {toString: function() {
    return this.message;
  }}, {}, TreeNode);
Object.defineProperty(TestNode, "parameters", {get: function() {
    return [[TestNode], []];
  }});
function main() {
  var defaultPreBuiltObjects = new PreBuiltObjects(null, null, null, null);
  var appInjector = Injector.resolveAndCreate([]);
  function humanize(tree, names) {
    var lookupName = (function(item) {
      return ListWrapper.last(ListWrapper.find(names, (function(pair) {
        return pair[0] === item;
      })));
    });
    if (tree.children.length == 0)
      return lookupName(tree);
    var children = tree.children.map((function(m) {
      return humanize(m, names);
    }));
    return [lookupName(tree), children];
  }
  Object.defineProperty(humanize, "parameters", {get: function() {
      return [[], [List]];
    }});
  function injector(bindings) {
    var lightDomAppInjector = arguments[1] !== (void 0) ? arguments[1] : null;
    var shadowDomAppInjector = arguments[2] !== (void 0) ? arguments[2] : null;
    var preBuiltObjects = arguments[3] !== (void 0) ? arguments[3] : null;
    var attributes = arguments[4] !== (void 0) ? arguments[4] : null;
    if (isBlank(lightDomAppInjector))
      lightDomAppInjector = appInjector;
    var proto = new ProtoElementInjector(null, 0, bindings, isPresent(shadowDomAppInjector));
    proto.attributes = attributes;
    var inj = proto.instantiate(null);
    var preBuilt = isPresent(preBuiltObjects) ? preBuiltObjects : defaultPreBuiltObjects;
    inj.instantiateDirectives(lightDomAppInjector, null, shadowDomAppInjector, preBuilt);
    return inj;
  }
  function parentChildInjectors(parentBindings, childBindings) {
    var parentPreBuildObjects = arguments[2] !== (void 0) ? arguments[2] : null;
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
  function hostShadowInjectors(hostBindings, shadowBindings) {
    var hostPreBuildObjects = arguments[2] !== (void 0) ? arguments[2] : null;
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
  describe('TreeNodes', (function() {
    var root,
        firstParent,
        lastParent,
        node;
    beforeEach((function() {
      root = new TestNode(null, 'root');
      var p1 = firstParent = new TestNode(root, 'p1');
      var p2 = lastParent = new TestNode(root, 'p2');
      node = new TestNode(p1, 'c1');
      new TestNode(p1, 'c2');
      new TestNode(p2, 'c3');
    }));
    function walk(node, f) {
      if (isBlank(node))
        return f;
      f(node);
      ListWrapper.forEach(node.children, (function(n) {
        return walk(n, f);
      }));
    }
    function logWalk(node) {
      var log = '';
      walk(node, (function(n) {
        log += (log.length != 0 ? ', ' : '') + n.toString();
      }));
      return log;
    }
    it('should support listing children', (function() {
      expect(logWalk(root)).toEqual('root, p1, c1, c2, p2, c3');
    }));
    it('should support removing the first child node', (function() {
      firstParent.remove();
      expect(firstParent.parent).toEqual(null);
      expect(logWalk(root)).toEqual('root, p2, c3');
    }));
    it('should support removing the last child node', (function() {
      lastParent.remove();
      expect(logWalk(root)).toEqual('root, p1, c1, c2');
    }));
    it('should support moving a node at the end of children', (function() {
      node.remove();
      root.addChild(node);
      expect(logWalk(root)).toEqual('root, p1, c2, p2, c3, c1');
    }));
    it('should support moving a node in the beginning of children', (function() {
      node.remove();
      lastParent.addChildAfter(node, null);
      expect(logWalk(root)).toEqual('root, p1, c2, p2, c1, c3');
    }));
    it('should support moving a node in the middle of children', (function() {
      node.remove();
      lastParent.addChildAfter(node, firstParent);
      expect(logWalk(root)).toEqual('root, p1, c2, c1, p2, c3');
    }));
  }));
  describe("ProtoElementInjector", (function() {
    describe("direct parent", (function() {
      it("should return parent proto injector when distance is 1", (function() {
        var distance = 1;
        var protoParent = new ProtoElementInjector(null, 0, []);
        var protoChild = new ProtoElementInjector(protoParent, 1, [], false, distance);
        expect(protoChild.directParent()).toEqual(protoParent);
      }));
      it("should return null otherwise", (function() {
        var distance = 2;
        var protoParent = new ProtoElementInjector(null, 0, []);
        var protoChild = new ProtoElementInjector(protoParent, 1, [], false, distance);
        expect(protoChild.directParent()).toEqual(null);
      }));
      it("should allow for direct access using getDirectiveBindingAtIndex", function() {
        var binding = DirectiveBinding.createFromBinding(bind(SimpleDirective).toClass(SimpleDirective), null);
        var proto = new ProtoElementInjector(null, 0, [binding]);
        expect(proto.getDirectiveBindingAtIndex(0)).toBeAnInstanceOf(DirectiveBinding);
        expect((function() {
          return proto.getDirectiveBindingAtIndex(-1);
        })).toThrowError('Index -1 is out-of-bounds.');
        expect((function() {
          return proto.getDirectiveBindingAtIndex(10);
        })).toThrowError('Index 10 is out-of-bounds.');
      });
    }));
  }));
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
      describe("direct parent", (function() {
        it("should return parent injector when distance is 1", (function() {
          var distance = 1;
          var protoParent = new ProtoElementInjector(null, 0, []);
          var protoChild = new ProtoElementInjector(protoParent, 1, [], false, distance);
          var p = protoParent.instantiate(null);
          var c = protoChild.instantiate(p);
          expect(c.directParent()).toEqual(p);
        }));
        it("should return null otherwise", (function() {
          var distance = 2;
          var protoParent = new ProtoElementInjector(null, 0, []);
          var protoChild = new ProtoElementInjector(protoParent, 1, [], false, distance);
          var p = protoParent.instantiate(null);
          var c = protoChild.instantiate(p);
          expect(c.directParent()).toEqual(null);
        }));
      }));
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
      it("should not instantiate directives that depend on other directives in the containing component's ElementInjector", (function() {
        expect((function() {
          hostShadowInjectors([SomeOtherDirective, SimpleDirective], [NeedsDirective]);
        })).toThrowError('No provider for SimpleDirective! (NeedsDirective -> SimpleDirective)');
      }));
      it("should instantiate component directives that depend on app services in the shadow app injector", (function() {
        var shadowAppInjector = Injector.resolveAndCreate([bind("service").toValue("service")]);
        var inj = injector([NeedsService], null, shadowAppInjector);
        var d = inj.get(NeedsService);
        expect(d).toBeAnInstanceOf(NeedsService);
        expect(d.service).toEqual("service");
      }));
      it("should not instantiate other directives that depend on app services in the shadow app injector", (function() {
        var shadowAppInjector = Injector.resolveAndCreate([bind("service").toValue("service")]);
        expect((function() {
          injector([SomeOtherDirective, NeedsService], null, shadowAppInjector);
        })).toThrowError('No provider for service! (NeedsService -> service)');
      }));
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
        expect((function() {
          injector([SimpleDirective, NeedDirectiveFromParent]);
        })).toThrowError();
      });
      it("should get directives from ancestor", function() {
        var child = parentChildInjectors([SimpleDirective], [NeedDirectiveFromAncestor]);
        var d = child.get(NeedDirectiveFromAncestor);
        expect(d).toBeAnInstanceOf(NeedDirectiveFromAncestor);
        expect(d.dependency).toBeAnInstanceOf(SimpleDirective);
      });
      it("should throw when no SimpleDirective found", function() {
        expect((function() {
          return injector([NeedDirectiveFromParent]);
        })).toThrowError('No provider for SimpleDirective! (NeedDirectiveFromParent -> SimpleDirective)');
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
        expect((function() {
          return inj.getDirectiveAtIndex(-1);
        })).toThrowError('Index -1 is out-of-bounds.');
        expect((function() {
          return inj.getDirectiveAtIndex(10);
        })).toThrowError('Index 10 is out-of-bounds.');
      });
      it("should handle cyclic dependencies", function() {
        expect((function() {
          var bAneedsB = bind(A_Needs_B).toFactory((function(a) {
            return new A_Needs_B(a);
          }), [B_Needs_A]);
          var bBneedsA = bind(B_Needs_A).toFactory((function(a) {
            return new B_Needs_A(a);
          }), [A_Needs_B]);
          injector([DirectiveBinding.createFromBinding(bAneedsB, null), DirectiveBinding.createFromBinding(bBneedsA, null)]);
        })).toThrowError('Cannot instantiate cyclic dependency! ' + '(A_Needs_B -> B_Needs_A -> A_Needs_B)');
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
    describe("dynamicallyCreateComponent", (function() {
      it("should create a component dynamically", (function() {
        var inj = injector([]);
        inj.dynamicallyCreateComponent(SimpleDirective, null, null);
        expect(inj.getDynamicallyLoadedComponent()).toBeAnInstanceOf(SimpleDirective);
        expect(inj.get(SimpleDirective)).toBeAnInstanceOf(SimpleDirective);
      }));
      it("should inject parent dependencies into the dynamically-loaded component", (function() {
        var inj = parentChildInjectors([SimpleDirective], []);
        inj.dynamicallyCreateComponent(NeedDirectiveFromAncestor, null, null);
        expect(inj.getDynamicallyLoadedComponent()).toBeAnInstanceOf(NeedDirectiveFromAncestor);
        expect(inj.getDynamicallyLoadedComponent().dependency).toBeAnInstanceOf(SimpleDirective);
      }));
      it("should not inject the proxy component into the children of the dynamically-loaded component", (function() {
        var injWithDynamicallyLoadedComponent = injector([SimpleDirective]);
        injWithDynamicallyLoadedComponent.dynamicallyCreateComponent(SomeOtherDirective, null, null);
        var shadowDomProtoInjector = new ProtoElementInjector(null, 0, [NeedDirectiveFromAncestor], false);
        var shadowDomInj = shadowDomProtoInjector.instantiate(null);
        expect((function() {
          return shadowDomInj.instantiateDirectives(appInjector, injWithDynamicallyLoadedComponent, null, defaultPreBuiltObjects);
        })).toThrowError(new RegExp("No provider for SimpleDirective"));
      }));
      it("should not inject the dynamically-loaded component into directives on the same element", (function() {
        var proto = new ProtoElementInjector(null, 0, [NeedsDirective], false);
        var inj = proto.instantiate(null);
        inj.dynamicallyCreateComponent(SimpleDirective, null, null);
        expect((function() {
          return inj.instantiateDirectives(null, null, null, null);
        })).toThrowError();
      }));
      it("should inject the dynamically-loaded component into the children of the dynamically-loaded component", (function() {
        var injWithDynamicallyLoadedComponent = injector([]);
        injWithDynamicallyLoadedComponent.dynamicallyCreateComponent(SimpleDirective, null, null);
        var shadowDomProtoInjector = new ProtoElementInjector(null, 0, [NeedDirectiveFromAncestor], false);
        var shadowDomInjector = shadowDomProtoInjector.instantiate(null);
        shadowDomInjector.instantiateDirectives(appInjector, injWithDynamicallyLoadedComponent, null, defaultPreBuiltObjects);
        expect(shadowDomInjector.get(NeedDirectiveFromAncestor)).toBeAnInstanceOf(NeedDirectiveFromAncestor);
        expect(shadowDomInjector.get(NeedDirectiveFromAncestor).dependency).toBeAnInstanceOf(SimpleDirective);
      }));
      it("should remove the dynamically-loaded component when dehydrating", (function() {
        var inj = injector([]);
        inj.dynamicallyCreateComponent(DirectiveWithDestroy, new DummyDirective({lifecycle: [onDestroy]}), null);
        var dir = inj.getDynamicallyLoadedComponent();
        inj.clearDirectives();
        expect(inj.getDynamicallyLoadedComponent()).toBe(null);
        expect(dir.onDestroyCounter).toBe(1);
        inj.instantiateDirectives(null, null, null, null);
        expect(inj.getDynamicallyLoadedComponent()).toBe(null);
      }));
      it("should inject services of the dynamically-loaded component", (function() {
        var inj = injector([]);
        var appInjector = Injector.resolveAndCreate([bind("service").toValue("Service")]);
        inj.dynamicallyCreateComponent(NeedsService, null, appInjector);
        expect(inj.getDynamicallyLoadedComponent().service).toEqual("Service");
      }));
    }));
    describe('event emitters', (function() {
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
      it('should be injectable and callable', (function() {
        var called = false;
        var preBuildObject = createpreBuildObject('click', (function() {
          called = true;
        }));
        var inj = injector([NeedsEventEmitter], null, null, preBuildObject);
        inj.get(NeedsEventEmitter).click();
        expect(called).toEqual(true);
      }));
      it('should be injectable and callable without specifying param type annotation', (function() {
        var called = false;
        var preBuildObject = createpreBuildObject('click', (function() {
          called = true;
        }));
        var inj = injector([NeedsEventEmitterNoType], null, null, preBuildObject);
        inj.get(NeedsEventEmitterNoType).click();
        expect(called).toEqual(true);
      }));
      it('should be queryable through hasEventEmitter', (function() {
        var inj = injector([NeedsEventEmitter]);
        expect(inj.hasEventEmitter('click')).toBe(true);
        expect(inj.hasEventEmitter('move')).toBe(false);
      }));
      it('should be queryable through hasEventEmitter without specifying param type annotation', (function() {
        var inj = injector([NeedsEventEmitterNoType]);
        expect(inj.hasEventEmitter('click')).toBe(true);
        expect(inj.hasEventEmitter('move')).toBe(false);
      }));
    }));
    describe('property setter', (function() {
      var renderer,
          view;
      beforeEach((function() {
        renderer = new FakeRenderer();
        var protoView = new AppProtoView(renderer, null, null);
        view = new AppView(protoView, MapWrapper.create());
        view.render = new ViewRef();
      }));
      it('should be injectable and callable', (function() {
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
      }));
      it('should be injectable and callable without specifying param type annotation', (function() {
        var preBuildObject = new PreBuiltObjects(view, null, null, null);
        var inj = injector([NeedsPropertySetterNoType], null, null, preBuildObject);
        var component = inj.get(NeedsPropertySetterNoType);
        component.setProp('foobar');
        expect(renderer.log[0]).toEqual([view.render, 0, 'title', 'foobar']);
      }));
    }));
    describe('static attributes', (function() {
      it('should be injectable', (function() {
        var attributes = MapWrapper.create();
        MapWrapper.set(attributes, 'type', 'text');
        MapWrapper.set(attributes, 'title', '');
        var inj = injector([NeedsAttribute], null, null, null, attributes);
        var needsAttribute = inj.get(NeedsAttribute);
        expect(needsAttribute.typeAttribute).toEqual('text');
        expect(needsAttribute.titleAttribute).toEqual('');
        expect(needsAttribute.fooAttribute).toEqual(null);
      }));
      it('should be injectable without type annotation', (function() {
        var attributes = MapWrapper.create();
        MapWrapper.set(attributes, 'foo', 'bar');
        var inj = injector([NeedsAttributeNoType], null, null, null, attributes);
        var needsAttribute = inj.get(NeedsAttributeNoType);
        expect(needsAttribute.fooAttribute).toEqual('bar');
      }));
    }));
    describe("ElementRef", (function() {
      it("should inject ElementRef", (function() {
        var inj = injector([NeedsElementRef]);
        expect(inj.get(NeedsElementRef).elementRef).toBeAnInstanceOf(ElementRef);
      }));
    }));
    describe('directive queries', (function() {
      var preBuildObjects = defaultPreBuiltObjects;
      beforeEach((function() {
        _constructionCount = 0;
      }));
      function expectDirectives(query, type, expectedIndex) {
        var currentCount = 0;
        iterateListLike(query, (function(i) {
          expect(i).toBeAnInstanceOf(type);
          expect(i.count).toBe(expectedIndex[currentCount]);
          currentCount += 1;
        }));
      }
      it('should be injectable', (function() {
        var inj = injector([NeedsQuery], null, null, preBuildObjects);
        expect(inj.get(NeedsQuery).query).toBeAnInstanceOf(QueryList);
      }));
      it('should contain directives on the same injector', (function() {
        var inj = injector([NeedsQuery, CountingDirective], null, null, preBuildObjects);
        expectDirectives(inj.get(NeedsQuery).query, CountingDirective, [0]);
      }));
      it('should contain directives on the same and a child injector in construction order', (function() {
        var protoParent = new ProtoElementInjector(null, 0, [NeedsQuery, CountingDirective]);
        var protoChild = new ProtoElementInjector(protoParent, 1, [CountingDirective]);
        var parent = protoParent.instantiate(null);
        var child = protoChild.instantiate(parent);
        parent.instantiateDirectives(Injector.resolveAndCreate([]), null, null, preBuildObjects);
        child.instantiateDirectives(Injector.resolveAndCreate([]), null, null, preBuildObjects);
        expectDirectives(parent.get(NeedsQuery).query, CountingDirective, [0, 1]);
      }));
      it('should reflect unlinking an injector', (function() {
        var protoParent = new ProtoElementInjector(null, 0, [NeedsQuery, CountingDirective]);
        var protoChild = new ProtoElementInjector(protoParent, 1, [CountingDirective]);
        var parent = protoParent.instantiate(null);
        var child = protoChild.instantiate(parent);
        parent.instantiateDirectives(Injector.resolveAndCreate([]), null, null, preBuildObjects);
        child.instantiateDirectives(Injector.resolveAndCreate([]), null, null, preBuildObjects);
        child.unlink();
        expectDirectives(parent.get(NeedsQuery).query, CountingDirective, [0]);
      }));
      it('should reflect moving an injector as a last child', (function() {
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
      }));
      it('should reflect moving an injector as a first child', (function() {
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
      }));
      it('should support two concurrent queries for the same directive', (function() {
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
      }));
    }));
  });
}
var ContextWithHandler = function ContextWithHandler(handler) {
  this.handler = handler;
};
($traceurRuntime.createClass)(ContextWithHandler, {}, {});
var FakeRenderer = function FakeRenderer() {
  $traceurRuntime.superConstructor($FakeRenderer).call(this);
  this.log = [];
};
var $FakeRenderer = FakeRenderer;
($traceurRuntime.createClass)(FakeRenderer, {setElementProperty: function(viewRef, elementIndex, propertyName, value) {
    ListWrapper.push(this.log, [viewRef, elementIndex, propertyName, value]);
  }}, {}, Renderer);
//# sourceMappingURL=element_injector_spec.js.map

//# sourceMappingURL=./element_injector_spec.map
 main();