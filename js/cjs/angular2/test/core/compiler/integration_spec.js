'use strict'; var parse5Adapter = require('angular2/src/dom/parse5_adapter'); parse5Adapter.Parse5DomAdapter.makeCurrent();
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_test_95_lib_47_test_95_bed__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_di__,
    $__angular2_47_change_95_detection__,
    $__angular2_47_src_47_core_47_annotations_47_annotations__,
    $__angular2_47_src_47_core_47_annotations_47_view__,
    $__angular2_47_src_47_core_47_annotations_47_visibility__,
    $__angular2_47_src_47_core_47_annotations_47_di__,
    $__angular2_47_src_47_core_47_compiler_47_dynamic_95_component_95_loader__,
    $__angular2_47_src_47_core_47_compiler_47_element_95_injector__,
    $__angular2_47_src_47_directives_47_if__,
    $__angular2_47_src_47_core_47_compiler_47_view_95_container__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    AsyncTestCompleter = $__0.AsyncTestCompleter,
    beforeEach = $__0.beforeEach,
    ddescribe = $__0.ddescribe,
    xdescribe = $__0.xdescribe,
    describe = $__0.describe,
    el = $__0.el,
    dispatchEvent = $__0.dispatchEvent,
    expect = $__0.expect,
    iit = $__0.iit,
    inject = $__0.inject,
    beforeEachBindings = $__0.beforeEachBindings,
    it = $__0.it,
    xit = $__0.xit;
var TestBed = ($__angular2_47_src_47_test_95_lib_47_test_95_bed__ = require("angular2/src/test_lib/test_bed"), $__angular2_47_src_47_test_95_lib_47_test_95_bed__ && $__angular2_47_src_47_test_95_lib_47_test_95_bed__.__esModule && $__angular2_47_src_47_test_95_lib_47_test_95_bed__ || {default: $__angular2_47_src_47_test_95_lib_47_test_95_bed__}).TestBed;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var $__3 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    Type = $__3.Type,
    isPresent = $__3.isPresent,
    BaseException = $__3.BaseException,
    assertionsEnabled = $__3.assertionsEnabled,
    isJsObject = $__3.isJsObject,
    global = $__3.global;
var PromiseWrapper = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}).PromiseWrapper;
var $__5 = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}),
    Injector = $__5.Injector,
    bind = $__5.bind;
var $__6 = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}),
    dynamicChangeDetection = $__6.dynamicChangeDetection,
    ChangeDetection = $__6.ChangeDetection,
    DynamicChangeDetection = $__6.DynamicChangeDetection,
    Pipe = $__6.Pipe,
    PipeRegistry = $__6.PipeRegistry,
    BindingPropagationConfig = $__6.BindingPropagationConfig,
    ON_PUSH = $__6.ON_PUSH;
var $__7 = ($__angular2_47_src_47_core_47_annotations_47_annotations__ = require("angular2/src/core/annotations/annotations"), $__angular2_47_src_47_core_47_annotations_47_annotations__ && $__angular2_47_src_47_core_47_annotations_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_47_annotations__}),
    Decorator = $__7.Decorator,
    Component = $__7.Component,
    Viewport = $__7.Viewport,
    DynamicComponent = $__7.DynamicComponent;
var View = ($__angular2_47_src_47_core_47_annotations_47_view__ = require("angular2/src/core/annotations/view"), $__angular2_47_src_47_core_47_annotations_47_view__ && $__angular2_47_src_47_core_47_annotations_47_view__.__esModule && $__angular2_47_src_47_core_47_annotations_47_view__ || {default: $__angular2_47_src_47_core_47_annotations_47_view__}).View;
var $__9 = ($__angular2_47_src_47_core_47_annotations_47_visibility__ = require("angular2/src/core/annotations/visibility"), $__angular2_47_src_47_core_47_annotations_47_visibility__ && $__angular2_47_src_47_core_47_annotations_47_visibility__.__esModule && $__angular2_47_src_47_core_47_annotations_47_visibility__ || {default: $__angular2_47_src_47_core_47_annotations_47_visibility__}),
    Parent = $__9.Parent,
    Ancestor = $__9.Ancestor;
var $__10 = ($__angular2_47_src_47_core_47_annotations_47_di__ = require("angular2/src/core/annotations/di"), $__angular2_47_src_47_core_47_annotations_47_di__ && $__angular2_47_src_47_core_47_annotations_47_di__.__esModule && $__angular2_47_src_47_core_47_annotations_47_di__ || {default: $__angular2_47_src_47_core_47_annotations_47_di__}),
    EventEmitter = $__10.EventEmitter,
    Attribute = $__10.Attribute;
var DynamicComponentLoader = ($__angular2_47_src_47_core_47_compiler_47_dynamic_95_component_95_loader__ = require("angular2/src/core/compiler/dynamic_component_loader"), $__angular2_47_src_47_core_47_compiler_47_dynamic_95_component_95_loader__ && $__angular2_47_src_47_core_47_compiler_47_dynamic_95_component_95_loader__.__esModule && $__angular2_47_src_47_core_47_compiler_47_dynamic_95_component_95_loader__ || {default: $__angular2_47_src_47_core_47_compiler_47_dynamic_95_component_95_loader__}).DynamicComponentLoader;
var ElementRef = ($__angular2_47_src_47_core_47_compiler_47_element_95_injector__ = require("angular2/src/core/compiler/element_injector"), $__angular2_47_src_47_core_47_compiler_47_element_95_injector__ && $__angular2_47_src_47_core_47_compiler_47_element_95_injector__.__esModule && $__angular2_47_src_47_core_47_compiler_47_element_95_injector__ || {default: $__angular2_47_src_47_core_47_compiler_47_element_95_injector__}).ElementRef;
var If = ($__angular2_47_src_47_directives_47_if__ = require("angular2/src/directives/if"), $__angular2_47_src_47_directives_47_if__ && $__angular2_47_src_47_directives_47_if__.__esModule && $__angular2_47_src_47_directives_47_if__ || {default: $__angular2_47_src_47_directives_47_if__}).If;
var ViewContainer = ($__angular2_47_src_47_core_47_compiler_47_view_95_container__ = require("angular2/src/core/compiler/view_container"), $__angular2_47_src_47_core_47_compiler_47_view_95_container__ && $__angular2_47_src_47_core_47_compiler_47_view_95_container__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view_95_container__ || {default: $__angular2_47_src_47_core_47_compiler_47_view_95_container__}).ViewContainer;
function main() {
  describe('integration tests', function() {
    var ctx;
    beforeEach((function() {
      ctx = new MyComp();
    }));
    describe('react to record changes', function() {
      it('should consume text node changes', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
        tb.overrideView(MyComp, new View({template: '<div>{{ctxProp}}</div>'}));
        tb.createView(MyComp, {context: ctx}).then((function(view) {
          ctx.ctxProp = 'Hello World!';
          view.detectChanges();
          expect(DOM.getInnerHTML(view.rootNodes[0])).toEqual('Hello World!');
          async.done();
        }));
      })));
      it('should consume element binding changes', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
        tb.overrideView(MyComp, new View({template: '<div [id]="ctxProp"></div>'}));
        tb.createView(MyComp, {context: ctx}).then((function(view) {
          ctx.ctxProp = 'Hello World!';
          view.detectChanges();
          expect(view.rootNodes[0].id).toEqual('Hello World!');
          async.done();
        }));
      })));
      it('should consume binding to aria-* attributes', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
        tb.overrideView(MyComp, new View({template: '<div [attr.aria-label]="ctxProp"></div>'}));
        tb.createView(MyComp, {context: ctx}).then((function(view) {
          ctx.ctxProp = 'Initial aria label';
          view.detectChanges();
          expect(DOM.getAttribute(view.rootNodes[0], 'aria-label')).toEqual('Initial aria label');
          ctx.ctxProp = 'Changed aria label';
          view.detectChanges();
          expect(DOM.getAttribute(view.rootNodes[0], 'aria-label')).toEqual('Changed aria label');
          async.done();
        }));
      })));
      it('should consume binding to property names where attr name and property name do not match', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
        tb.overrideView(MyComp, new View({template: '<div [tabindex]="ctxNumProp"></div>'}));
        tb.createView(MyComp, {context: ctx}).then((function(view) {
          view.detectChanges();
          expect(view.rootNodes[0].tabIndex).toEqual(0);
          ctx.ctxNumProp = 5;
          view.detectChanges();
          expect(view.rootNodes[0].tabIndex).toEqual(5);
          async.done();
        }));
      })));
      it('should consume binding to camel-cased properties using dash-cased syntax in templates', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
        tb.overrideView(MyComp, new View({template: '<input [read-only]="ctxBoolProp">'}));
        tb.createView(MyComp, {context: ctx}).then((function(view) {
          view.detectChanges();
          expect(view.rootNodes[0].readOnly).toBeFalsy();
          ctx.ctxBoolProp = true;
          view.detectChanges();
          expect(view.rootNodes[0].readOnly).toBeTruthy();
          async.done();
        }));
      })));
      it('should consume binding to inner-html', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
        tb.overrideView(MyComp, new View({template: '<div inner-html="{{ctxProp}}"></div>'}));
        tb.createView(MyComp, {context: ctx}).then((function(view) {
          ctx.ctxProp = 'Some <span>HTML</span>';
          view.detectChanges();
          expect(DOM.getInnerHTML(view.rootNodes[0])).toEqual('Some <span>HTML</span>');
          ctx.ctxProp = 'Some other <div>HTML</div>';
          view.detectChanges();
          expect(DOM.getInnerHTML(view.rootNodes[0])).toEqual('Some other <div>HTML</div>');
          async.done();
        }));
      })));
      it('should ignore bindings to unknown properties', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
        tb.overrideView(MyComp, new View({template: '<div unknown="{{ctxProp}}"></div>'}));
        tb.createView(MyComp, {context: ctx}).then((function(view) {
          ctx.ctxProp = 'Some value';
          view.detectChanges();
          expect(DOM.hasProperty(view.rootNodes[0], 'unknown')).toBeFalsy();
          async.done();
        }));
      })));
      it('should consume directive watch expression change.', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
        var tpl = '<div>' + '<div my-dir [elprop]="ctxProp"></div>' + '<div my-dir elprop="Hi there!"></div>' + '<div my-dir elprop="Hi {{\'there!\'}}"></div>' + '<div my-dir elprop="One more {{ctxProp}}"></div>' + '</div>';
        tb.overrideView(MyComp, new View({
          template: tpl,
          directives: [MyDir]
        }));
        tb.createView(MyComp, {context: ctx}).then((function(view) {
          ctx.ctxProp = 'Hello World!';
          view.detectChanges();
          expect(view.rawView.elementInjectors[0].get(MyDir).dirProp).toEqual('Hello World!');
          expect(view.rawView.elementInjectors[1].get(MyDir).dirProp).toEqual('Hi there!');
          expect(view.rawView.elementInjectors[2].get(MyDir).dirProp).toEqual('Hi there!');
          expect(view.rawView.elementInjectors[3].get(MyDir).dirProp).toEqual('One more Hello World!');
          async.done();
        }));
      })));
      describe('pipes', (function() {
        beforeEachBindings((function() {
          return [bind(ChangeDetection).toFactory((function() {
            return new DynamicChangeDetection(new PipeRegistry({"double": [new DoublePipeFactory()]}));
          }), [])];
        }));
        it("should support pipes in bindings and bind config", inject([TestBed, AsyncTestCompleter], (function(tb, async) {
          tb.overrideView(MyComp, new View({
            template: '<component-with-pipes #comp [prop]="ctxProp | double"></component-with-pipes>',
            directives: [ComponentWithPipes]
          }));
          tb.createView(MyComp, {context: ctx}).then((function(view) {
            ctx.ctxProp = 'a';
            view.detectChanges();
            var comp = view.rawView.locals.get("comp");
            expect(comp.prop).toEqual('aaaa');
            async.done();
          }));
        })));
      }));
      it('should support nested components.', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
        tb.overrideView(MyComp, new View({
          template: '<child-cmp></child-cmp>',
          directives: [ChildComp]
        }));
        tb.createView(MyComp, {context: ctx}).then((function(view) {
          view.detectChanges();
          expect(view.rootNodes).toHaveText('hello');
          async.done();
        }));
      })));
      it('should support different directive types on a single node', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
        tb.overrideView(MyComp, new View({
          template: '<child-cmp my-dir [elprop]="ctxProp"></child-cmp>',
          directives: [MyDir, ChildComp]
        }));
        tb.createView(MyComp, {context: ctx}).then((function(view) {
          ctx.ctxProp = 'Hello World!';
          view.detectChanges();
          var elInj = view.rawView.elementInjectors[0];
          expect(elInj.get(MyDir).dirProp).toEqual('Hello World!');
          expect(elInj.get(ChildComp).dirProp).toEqual(null);
          async.done();
        }));
      })));
      it('should support directives where a binding attribute is not given', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
        tb.overrideView(MyComp, new View({
          template: '<p my-dir></p>',
          directives: [MyDir]
        }));
        tb.createView(MyComp, {context: ctx}).then((function(view) {
          async.done();
        }));
      })));
      it('should support directives where a selector matches property binding', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
        tb.overrideView(MyComp, new View({
          template: '<p [id]="ctxProp"></p>',
          directives: [IdComponent]
        }));
        tb.createView(MyComp, {context: ctx}).then((function(view) {
          ctx.ctxProp = 'some_id';
          view.detectChanges();
          expect(view.rootNodes[0].id).toEqual('some_id');
          expect(view.rootNodes).toHaveText('Matched on id with some_id');
          ctx.ctxProp = 'other_id';
          view.detectChanges();
          expect(view.rootNodes[0].id).toEqual('other_id');
          expect(view.rootNodes).toHaveText('Matched on id with other_id');
          async.done();
        }));
      })));
      it('should support template directives via `<template>` elements.', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
        tb.overrideView(MyComp, new View({
          template: '<div><template some-viewport var-greeting="some-tmpl"><copy-me>{{greeting}}</copy-me></template></div>',
          directives: [SomeViewport]
        }));
        tb.createView(MyComp, {context: ctx}).then((function(view) {
          view.detectChanges();
          var childNodesOfWrapper = view.rootNodes[0].childNodes;
          expect(childNodesOfWrapper.length).toBe(3);
          expect(childNodesOfWrapper[1].childNodes[0].nodeValue).toEqual('hello');
          expect(childNodesOfWrapper[2].childNodes[0].nodeValue).toEqual('again');
          async.done();
        }));
      })));
      it('should support template directives via `template` attribute.', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
        tb.overrideView(MyComp, new View({
          template: '<div><copy-me template="some-viewport: var greeting=some-tmpl">{{greeting}}</copy-me></div>',
          directives: [SomeViewport]
        }));
        tb.createView(MyComp, {context: ctx}).then((function(view) {
          view.detectChanges();
          var childNodesOfWrapper = view.rootNodes[0].childNodes;
          expect(childNodesOfWrapper.length).toBe(3);
          expect(childNodesOfWrapper[1].childNodes[0].nodeValue).toEqual('hello');
          expect(childNodesOfWrapper[2].childNodes[0].nodeValue).toEqual('again');
          async.done();
        }));
      })));
      it('should assign the component instance to a var-', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
        tb.overrideView(MyComp, new View({
          template: '<p><child-cmp var-alice></child-cmp></p>',
          directives: [ChildComp]
        }));
        tb.createView(MyComp, {context: ctx}).then((function(view) {
          expect(view.rawView.locals).not.toBe(null);
          expect(view.rawView.locals.get('alice')).toBeAnInstanceOf(ChildComp);
          async.done();
        }));
      })));
      it('should assign two component instances each with a var-', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
        tb.overrideView(MyComp, new View({
          template: '<p><child-cmp var-alice></child-cmp><child-cmp var-bob></p>',
          directives: [ChildComp]
        }));
        tb.createView(MyComp, {context: ctx}).then((function(view) {
          expect(view.rawView.locals).not.toBe(null);
          expect(view.rawView.locals.get('alice')).toBeAnInstanceOf(ChildComp);
          expect(view.rawView.locals.get('bob')).toBeAnInstanceOf(ChildComp);
          expect(view.rawView.locals.get('alice')).not.toBe(view.rawView.locals.get('bob'));
          async.done();
        }));
      })));
      it('should assign the component instance to a var- with shorthand syntax', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
        tb.overrideView(MyComp, new View({
          template: '<child-cmp #alice></child-cmp>',
          directives: [ChildComp]
        }));
        tb.createView(MyComp, {context: ctx}).then((function(view) {
          expect(view.rawView.locals).not.toBe(null);
          expect(view.rawView.locals.get('alice')).toBeAnInstanceOf(ChildComp);
          async.done();
        }));
      })));
      it('should assign the element instance to a user-defined variable', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
        tb.overrideView(MyComp, new View({template: '<p><div var-alice><i>Hello</i></div></p>'}));
        tb.createView(MyComp, {context: ctx}).then((function(view) {
          expect(view.rawView.locals).not.toBe(null);
          var value = view.rawView.locals.get('alice');
          expect(value).not.toBe(null);
          expect(value.domElement.tagName.toLowerCase()).toEqual('div');
          async.done();
        }));
      })));
      it('should assign the element instance to a user-defined variable with camelCase using dash-case', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
        tb.overrideView(MyComp, new View({template: '<p><div var-super-alice><i>Hello</i></div></p>'}));
        tb.createView(MyComp, {context: ctx}).then((function(view) {
          expect(view.rawView.locals).not.toBe(null);
          var value = view.rawView.locals.get('superAlice');
          expect(value).not.toBe(null);
          expect(value.domElement.tagName.toLowerCase()).toEqual('div');
          async.done();
        }));
      })));
      describe("BindingPropagationConfig", (function() {
        it("can be used to disable the change detection of the component's template", inject([TestBed, AsyncTestCompleter], (function(tb, async) {
          tb.overrideView(MyComp, new View({
            template: '<push-cmp #cmp></push-cmp>',
            directives: [[[PushBasedComp]]]
          }));
          tb.createView(MyComp, {context: ctx}).then((function(view) {
            var cmp = view.rawView.locals.get('cmp');
            view.detectChanges();
            expect(cmp.numberOfChecks).toEqual(1);
            view.detectChanges();
            expect(cmp.numberOfChecks).toEqual(1);
            cmp.propagate();
            view.detectChanges();
            expect(cmp.numberOfChecks).toEqual(2);
            async.done();
          }));
        })));
        it('should not affect updating properties on the component', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
          tb.overrideView(MyComp, new View({
            template: '<push-cmp [prop]="ctxProp" #cmp></push-cmp>',
            directives: [[[PushBasedComp]]]
          }));
          tb.createView(MyComp, {context: ctx}).then((function(view) {
            var cmp = view.rawView.locals.get('cmp');
            ctx.ctxProp = "one";
            view.detectChanges();
            expect(cmp.prop).toEqual("one");
            ctx.ctxProp = "two";
            view.detectChanges();
            expect(cmp.prop).toEqual("two");
            async.done();
          }));
        })));
      }));
      it('should create a component that injects a @Parent', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
        tb.overrideView(MyComp, new View({
          template: '<some-directive><cmp-with-parent #child></cmp-with-parent></some-directive>',
          directives: [SomeDirective, CompWithParent]
        }));
        tb.createView(MyComp, {context: ctx}).then((function(view) {
          var childComponent = view.rawView.locals.get('child');
          expect(childComponent.myParent).toBeAnInstanceOf(SomeDirective);
          async.done();
        }));
      })));
      it('should create a component that injects an @Ancestor', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
        tb.overrideView(MyComp, new View({
          template: "\n            <some-directive>\n              <p>\n                <cmp-with-ancestor #child></cmp-with-ancestor>\n              </p>\n            </some-directive>",
          directives: [SomeDirective, CompWithAncestor]
        }));
        tb.createView(MyComp, {context: ctx}).then((function(view) {
          var childComponent = view.rawView.locals.get('child');
          expect(childComponent.myAncestor).toBeAnInstanceOf(SomeDirective);
          async.done();
        }));
      })));
      it('should create a component that injects an @Ancestor through viewport directive', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
        tb.overrideView(MyComp, new View({
          template: "\n            <some-directive>\n              <p *if=\"true\">\n                <cmp-with-ancestor #child></cmp-with-ancestor>\n              </p>\n            </some-directive>",
          directives: [SomeDirective, CompWithAncestor, If]
        }));
        tb.createView(MyComp, {context: ctx}).then((function(view) {
          view.detectChanges();
          var subview = view.rawView.viewContainers[1].get(0);
          var childComponent = subview.locals.get('child');
          expect(childComponent.myAncestor).toBeAnInstanceOf(SomeDirective);
          async.done();
        }));
      })));
      it('should support events via EventEmitter', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
        tb.overrideView(MyComp, new View({
          template: '<div emitter listener></div>',
          directives: [DecoratorEmitingEvent, DecoratorListeningEvent]
        }));
        tb.createView(MyComp, {context: ctx}).then((function(view) {
          var injector = view.rawView.elementInjectors[0];
          var emitter = injector.get(DecoratorEmitingEvent);
          var listener = injector.get(DecoratorListeningEvent);
          expect(emitter.msg).toEqual('');
          expect(listener.msg).toEqual('');
          emitter.fireEvent('fired !');
          expect(emitter.msg).toEqual('fired !');
          expect(listener.msg).toEqual('fired !');
          async.done();
        }));
      })));
      if (DOM.supportsDOMEvents()) {
        it('should support render events', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
          tb.overrideView(MyComp, new View({
            template: '<div listener></div>',
            directives: [DecoratorListeningDomEvent]
          }));
          tb.createView(MyComp, {context: ctx}).then((function(view) {
            var injector = view.rawView.elementInjectors[0];
            var listener = injector.get(DecoratorListeningDomEvent);
            dispatchEvent(view.rootNodes[0], 'domEvent');
            expect(listener.eventType).toEqual('domEvent');
            async.done();
          }));
        })));
        it('should support render global events', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
          tb.overrideView(MyComp, new View({
            template: '<div listener></div>',
            directives: [DecoratorListeningDomEvent]
          }));
          tb.createView(MyComp, {context: ctx}).then((function(view) {
            var injector = view.rawView.elementInjectors[0];
            var listener = injector.get(DecoratorListeningDomEvent);
            dispatchEvent(DOM.getGlobalEventTarget("window"), 'domEvent');
            expect(listener.eventType).toEqual('window_domEvent');
            listener = injector.get(DecoratorListeningDomEvent);
            dispatchEvent(DOM.getGlobalEventTarget("document"), 'domEvent');
            expect(listener.eventType).toEqual('document_domEvent');
            view.rawView.dehydrate();
            listener = injector.get(DecoratorListeningDomEvent);
            dispatchEvent(DOM.getGlobalEventTarget("body"), 'domEvent');
            expect(listener.eventType).toEqual('');
            async.done();
          }));
        })));
        it('should support render global events from multiple directives', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
          tb.overrideView(MyComp, new View({
            template: '<div *if="ctxBoolProp" listener listenerother></div>',
            directives: [If, DecoratorListeningDomEvent, DecoratorListeningDomEventOther]
          }));
          tb.createView(MyComp, {context: ctx}).then((function(view) {
            globalCounter = 0;
            ctx.ctxBoolProp = true;
            view.detectChanges();
            var subview = view.rawView.viewContainers[0].get(0);
            var injector = subview.elementInjectors[0];
            var listener = injector.get(DecoratorListeningDomEvent);
            var listenerother = injector.get(DecoratorListeningDomEventOther);
            dispatchEvent(DOM.getGlobalEventTarget("window"), 'domEvent');
            expect(listener.eventType).toEqual('window_domEvent');
            expect(listenerother.eventType).toEqual('other_domEvent');
            expect(globalCounter).toEqual(1);
            ctx.ctxBoolProp = false;
            view.detectChanges();
            dispatchEvent(DOM.getGlobalEventTarget("window"), 'domEvent');
            expect(globalCounter).toEqual(1);
            ctx.ctxBoolProp = true;
            view.detectChanges();
            dispatchEvent(DOM.getGlobalEventTarget("window"), 'domEvent');
            expect(globalCounter).toEqual(2);
            async.done();
          }));
        })));
      }
      describe("dynamic components", (function() {
        it('should support loading components dynamically', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
          tb.overrideView(MyComp, new View({
            template: '<dynamic-comp #dynamic></dynamic-comp>',
            directives: [DynamicComp]
          }));
          tb.createView(MyComp).then((function(view) {
            var dynamicComponent = view.rawView.locals.get("dynamic");
            expect(dynamicComponent).toBeAnInstanceOf(DynamicComp);
            dynamicComponent.done.then((function(_) {
              view.detectChanges();
              expect(view.rootNodes).toHaveText('hello');
              async.done();
            }));
          }));
        })));
        it('should inject dependencies of the dynamically-loaded component', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
          tb.overrideView(MyComp, new View({
            template: '<dynamic-comp #dynamic></dynamic-comp>',
            directives: [DynamicComp]
          }));
          tb.createView(MyComp).then((function(view) {
            var dynamicComponent = view.rawView.locals.get("dynamic");
            dynamicComponent.done.then((function(ref) {
              expect(ref.instance.dynamicallyCreatedComponentService).toBeAnInstanceOf(DynamicallyCreatedComponentService);
              async.done();
            }));
          }));
        })));
      }));
      it('should support static attributes', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
        tb.overrideView(MyComp, new View({
          template: '<input static type="text" title>',
          directives: [NeedsAttribute]
        }));
        tb.createView(MyComp, {context: ctx}).then((function(view) {
          var injector = view.rawView.elementInjectors[0];
          var needsAttribute = injector.get(NeedsAttribute);
          expect(needsAttribute.typeAttribute).toEqual('text');
          expect(needsAttribute.titleAttribute).toEqual('');
          expect(needsAttribute.fooAttribute).toEqual(null);
          async.done();
        }));
      })));
    });
    xdescribe('Missing directive checks', (function() {
      if (assertionsEnabled()) {
        var expectCompileError = function(tb, inlineTpl, errMessage, done) {
          tb.overrideView(MyComp, new View({template: inlineTpl}));
          PromiseWrapper.then(tb.createView(MyComp), (function(value) {
            throw new BaseException("Test failure: should not have come here as an exception was expected");
          }), (function(err) {
            expect(err.message).toEqual(errMessage);
            done();
          }));
        };
        it('should raise an error if no directive is registered for a template with template bindings', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
          expectCompileError(tb, '<div><div template="if: foo"></div></div>', 'Missing directive to handle \'if\' in <div template="if: foo">', (function() {
            return async.done();
          }));
        })));
        it('should raise an error for missing template directive (1)', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
          expectCompileError(tb, '<div><template foo></template></div>', 'Missing directive to handle: <template foo>', (function() {
            return async.done();
          }));
        })));
        it('should raise an error for missing template directive (2)', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
          expectCompileError(tb, '<div><template *if="condition"></template></div>', 'Missing directive to handle: <template *if="condition">', (function() {
            return async.done();
          }));
        })));
        it('should raise an error for missing template directive (3)', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
          expectCompileError(tb, '<div *if="condition"></div>', 'Missing directive to handle \'if\' in MyComp: <div *if="condition">', (function() {
            return async.done();
          }));
        })));
      }
    }));
  });
}
var DynamicallyCreatedComponentService = function DynamicallyCreatedComponentService() {
  ;
};
($traceurRuntime.createClass)(DynamicallyCreatedComponentService, {}, {});
var DynamicComp = function DynamicComp(loader, location) {
  this.done = loader.loadIntoExistingLocation(DynamicallyCreatedCmp, location);
};
($traceurRuntime.createClass)(DynamicComp, {}, {});
Object.defineProperty(DynamicComp, "annotations", {get: function() {
    return [new DynamicComponent({selector: 'dynamic-comp'})];
  }});
Object.defineProperty(DynamicComp, "parameters", {get: function() {
    return [[DynamicComponentLoader], [ElementRef]];
  }});
var DynamicallyCreatedCmp = function DynamicallyCreatedCmp(a) {
  this.greeting = "hello";
  this.dynamicallyCreatedComponentService = a;
};
($traceurRuntime.createClass)(DynamicallyCreatedCmp, {}, {});
Object.defineProperty(DynamicallyCreatedCmp, "annotations", {get: function() {
    return [new Component({
      selector: 'hello-cmp',
      injectables: [DynamicallyCreatedComponentService]
    }), new View({template: "{{greeting}}"})];
  }});
Object.defineProperty(DynamicallyCreatedCmp, "parameters", {get: function() {
    return [[DynamicallyCreatedComponentService]];
  }});
var MyDir = function MyDir() {
  this.dirProp = '';
};
($traceurRuntime.createClass)(MyDir, {}, {});
Object.defineProperty(MyDir, "annotations", {get: function() {
    return [new Decorator({
      selector: '[my-dir]',
      properties: {'dirProp': 'elprop'}
    })];
  }});
var PushBasedComp = function PushBasedComp(bpc) {
  this.numberOfChecks = 0;
  this.bpc = bpc;
};
($traceurRuntime.createClass)(PushBasedComp, {
  get field() {
    this.numberOfChecks++;
    return "fixed";
  },
  propagate: function() {
    this.bpc.shouldBePropagatedFromRoot();
  }
}, {});
Object.defineProperty(PushBasedComp, "annotations", {get: function() {
    return [new Component({
      selector: 'push-cmp',
      properties: {'prop': 'prop'},
      changeDetection: ON_PUSH
    }), new View({template: '{{field}}'})];
  }});
Object.defineProperty(PushBasedComp, "parameters", {get: function() {
    return [[BindingPropagationConfig]];
  }});
var MyComp = function MyComp() {
  this.ctxProp = 'initial value';
  this.ctxNumProp = 0;
  this.ctxBoolProp = false;
};
($traceurRuntime.createClass)(MyComp, {}, {});
Object.defineProperty(MyComp, "annotations", {get: function() {
    return [new Component(), new View({directives: []})];
  }});
var ComponentWithPipes = function ComponentWithPipes() {
  ;
};
($traceurRuntime.createClass)(ComponentWithPipes, {}, {});
Object.defineProperty(ComponentWithPipes, "annotations", {get: function() {
    return [new Component({
      selector: 'component-with-pipes',
      properties: {"prop": "prop | double"}
    }), new View({template: ''})];
  }});
var ChildComp = function ChildComp(service) {
  this.ctxProp = service.greeting;
  this.dirProp = null;
};
($traceurRuntime.createClass)(ChildComp, {}, {});
Object.defineProperty(ChildComp, "annotations", {get: function() {
    return [new Component({
      selector: 'child-cmp',
      injectables: [MyService]
    }), new View({
      directives: [MyDir],
      template: '{{ctxProp}}'
    })];
  }});
Object.defineProperty(ChildComp, "parameters", {get: function() {
    return [[MyService]];
  }});
var SomeDirective = function SomeDirective() {
  ;
};
($traceurRuntime.createClass)(SomeDirective, {}, {});
Object.defineProperty(SomeDirective, "annotations", {get: function() {
    return [new Decorator({selector: 'some-directive'})];
  }});
var CompWithParent = function CompWithParent(someComp) {
  this.myParent = someComp;
};
($traceurRuntime.createClass)(CompWithParent, {}, {});
Object.defineProperty(CompWithParent, "annotations", {get: function() {
    return [new Component({selector: 'cmp-with-parent'}), new View({
      template: '<p>Component with an injected parent</p>',
      directives: [SomeDirective]
    })];
  }});
Object.defineProperty(CompWithParent, "parameters", {get: function() {
    return [[SomeDirective, new Parent()]];
  }});
var CompWithAncestor = function CompWithAncestor(someComp) {
  this.myAncestor = someComp;
};
($traceurRuntime.createClass)(CompWithAncestor, {}, {});
Object.defineProperty(CompWithAncestor, "annotations", {get: function() {
    return [new Component({selector: 'cmp-with-ancestor'}), new View({
      template: '<p>Component with an injected ancestor</p>',
      directives: [SomeDirective]
    })];
  }});
Object.defineProperty(CompWithAncestor, "parameters", {get: function() {
    return [[SomeDirective, new Ancestor()]];
  }});
var ChildComp2 = function ChildComp2(service) {
  this.ctxProp = service.greeting;
  this.dirProp = null;
};
($traceurRuntime.createClass)(ChildComp2, {}, {});
Object.defineProperty(ChildComp2, "annotations", {get: function() {
    return [new Component({
      selector: '[child-cmp2]',
      injectables: [MyService]
    })];
  }});
Object.defineProperty(ChildComp2, "parameters", {get: function() {
    return [[MyService]];
  }});
var SomeViewport = function SomeViewport(container) {
  container.create().setLocal('some-tmpl', 'hello');
  container.create().setLocal('some-tmpl', 'again');
};
($traceurRuntime.createClass)(SomeViewport, {}, {});
Object.defineProperty(SomeViewport, "annotations", {get: function() {
    return [new Viewport({selector: '[some-viewport]'})];
  }});
Object.defineProperty(SomeViewport, "parameters", {get: function() {
    return [[ViewContainer]];
  }});
var MyService = function MyService() {
  this.greeting = 'hello';
};
($traceurRuntime.createClass)(MyService, {}, {});
var DoublePipe = function DoublePipe() {
  $traceurRuntime.superConstructor($DoublePipe).apply(this, arguments);
  ;
};
var $DoublePipe = DoublePipe;
($traceurRuntime.createClass)(DoublePipe, {
  supports: function(obj) {
    return true;
  },
  transform: function(value) {
    return ("" + value + value);
  }
}, {}, Pipe);
var DoublePipeFactory = function DoublePipeFactory() {
  ;
};
($traceurRuntime.createClass)(DoublePipeFactory, {
  supports: function(obj) {
    return true;
  },
  create: function(bpc) {
    return new DoublePipe();
  }
}, {});
var DecoratorEmitingEvent = function DecoratorEmitingEvent(emitter) {
  this.msg = '';
  this.emitter = emitter;
};
($traceurRuntime.createClass)(DecoratorEmitingEvent, {
  fireEvent: function(msg) {
    this.emitter(msg);
  },
  onEvent: function(msg) {
    this.msg = msg;
  }
}, {});
Object.defineProperty(DecoratorEmitingEvent, "annotations", {get: function() {
    return [new Decorator({
      selector: '[emitter]',
      hostListeners: {'event': 'onEvent($event)'}
    })];
  }});
Object.defineProperty(DecoratorEmitingEvent, "parameters", {get: function() {
    return [[Function, new EventEmitter('event')]];
  }});
Object.defineProperty(DecoratorEmitingEvent.prototype.fireEvent, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
Object.defineProperty(DecoratorEmitingEvent.prototype.onEvent, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
var DecoratorListeningEvent = function DecoratorListeningEvent() {
  this.msg = '';
};
($traceurRuntime.createClass)(DecoratorListeningEvent, {onEvent: function(msg) {
    this.msg = msg;
  }}, {});
Object.defineProperty(DecoratorListeningEvent, "annotations", {get: function() {
    return [new Decorator({
      selector: '[listener]',
      hostListeners: {'event': 'onEvent($event)'}
    })];
  }});
Object.defineProperty(DecoratorListeningEvent.prototype.onEvent, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
var DecoratorListeningDomEvent = function DecoratorListeningDomEvent() {
  this.eventType = '';
};
($traceurRuntime.createClass)(DecoratorListeningDomEvent, {
  onEvent: function(eventType) {
    this.eventType = eventType;
  },
  onWindowEvent: function(eventType) {
    this.eventType = "window_" + eventType;
  },
  onDocumentEvent: function(eventType) {
    this.eventType = "document_" + eventType;
  },
  onBodyEvent: function(eventType) {
    this.eventType = "body_" + eventType;
  }
}, {});
Object.defineProperty(DecoratorListeningDomEvent, "annotations", {get: function() {
    return [new Decorator({
      selector: '[listener]',
      hostListeners: {
        'domEvent': 'onEvent($event.type)',
        'window:domEvent': 'onWindowEvent($event.type)',
        'document:domEvent': 'onDocumentEvent($event.type)',
        'body:domEvent': 'onBodyEvent($event.type)'
      }
    })];
  }});
Object.defineProperty(DecoratorListeningDomEvent.prototype.onEvent, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
Object.defineProperty(DecoratorListeningDomEvent.prototype.onWindowEvent, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
Object.defineProperty(DecoratorListeningDomEvent.prototype.onDocumentEvent, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
Object.defineProperty(DecoratorListeningDomEvent.prototype.onBodyEvent, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
var globalCounter = 0;
var DecoratorListeningDomEventOther = function DecoratorListeningDomEventOther() {
  this.eventType = '';
};
($traceurRuntime.createClass)(DecoratorListeningDomEventOther, {onEvent: function(eventType) {
    globalCounter++;
    this.eventType = "other_" + eventType;
  }}, {});
Object.defineProperty(DecoratorListeningDomEventOther, "annotations", {get: function() {
    return [new Decorator({
      selector: '[listenerother]',
      hostListeners: {'window:domEvent': 'onEvent($event.type)'}
    })];
  }});
Object.defineProperty(DecoratorListeningDomEventOther.prototype.onEvent, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
var IdComponent = function IdComponent() {
  ;
};
($traceurRuntime.createClass)(IdComponent, {}, {});
Object.defineProperty(IdComponent, "annotations", {get: function() {
    return [new Component({
      selector: '[id]',
      properties: {'id': 'id'}
    }), new View({template: '<div>Matched on id with {{id}}</div>'})];
  }});
var NeedsAttribute = function NeedsAttribute(typeAttribute, titleAttribute, fooAttribute) {
  this.typeAttribute = typeAttribute;
  this.titleAttribute = titleAttribute;
  this.fooAttribute = fooAttribute;
};
($traceurRuntime.createClass)(NeedsAttribute, {}, {});
Object.defineProperty(NeedsAttribute, "annotations", {get: function() {
    return [new Decorator({selector: '[static]'})];
  }});
Object.defineProperty(NeedsAttribute, "parameters", {get: function() {
    return [[$traceurRuntime.type.string, new Attribute('type')], [$traceurRuntime.type.string, new Attribute('title')], [$traceurRuntime.type.string, new Attribute('foo')]];
  }});
//# sourceMappingURL=integration_spec.js.map

//# sourceMappingURL=./integration_spec.map
 main();