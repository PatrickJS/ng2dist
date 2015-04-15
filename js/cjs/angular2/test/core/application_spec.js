'use strict'; var parse5Adapter = require('angular2/src/dom/parse5_adapter'); parse5Adapter.Parse5DomAdapter.makeCurrent();
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_core_47_application__,
    $__angular2_47_src_47_core_47_application_95_tokens__,
    $__angular2_47_src_47_core_47_annotations_47_annotations__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_di__,
    $__angular2_47_src_47_core_47_annotations_47_view__,
    $__angular2_47_src_47_core_47_life_95_cycle_47_life_95_cycle__,
    $__angular2_47_src_47_core_47_testability_47_testability__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    AsyncTestCompleter = $__0.AsyncTestCompleter,
    beforeEach = $__0.beforeEach,
    ddescribe = $__0.ddescribe,
    describe = $__0.describe,
    expect = $__0.expect,
    iit = $__0.iit,
    inject = $__0.inject,
    it = $__0.it,
    xdescribe = $__0.xdescribe,
    xit = $__0.xit;
var bootstrap = ($__angular2_47_src_47_core_47_application__ = require("angular2/src/core/application"), $__angular2_47_src_47_core_47_application__ && $__angular2_47_src_47_core_47_application__.__esModule && $__angular2_47_src_47_core_47_application__ || {default: $__angular2_47_src_47_core_47_application__}).bootstrap;
var $__2 = ($__angular2_47_src_47_core_47_application_95_tokens__ = require("angular2/src/core/application_tokens"), $__angular2_47_src_47_core_47_application_95_tokens__ && $__angular2_47_src_47_core_47_application_95_tokens__.__esModule && $__angular2_47_src_47_core_47_application_95_tokens__ || {default: $__angular2_47_src_47_core_47_application_95_tokens__}),
    appDocumentToken = $__2.appDocumentToken,
    appElementToken = $__2.appElementToken;
var $__3 = ($__angular2_47_src_47_core_47_annotations_47_annotations__ = require("angular2/src/core/annotations/annotations"), $__angular2_47_src_47_core_47_annotations_47_annotations__ && $__angular2_47_src_47_core_47_annotations_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_47_annotations__}),
    Component = $__3.Component,
    Decorator = $__3.Decorator;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var ListWrapper = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).ListWrapper;
var PromiseWrapper = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}).PromiseWrapper;
var $__7 = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}),
    bind = $__7.bind,
    Inject = $__7.Inject;
var View = ($__angular2_47_src_47_core_47_annotations_47_view__ = require("angular2/src/core/annotations/view"), $__angular2_47_src_47_core_47_annotations_47_view__ && $__angular2_47_src_47_core_47_annotations_47_view__.__esModule && $__angular2_47_src_47_core_47_annotations_47_view__ || {default: $__angular2_47_src_47_core_47_annotations_47_view__}).View;
var LifeCycle = ($__angular2_47_src_47_core_47_life_95_cycle_47_life_95_cycle__ = require("angular2/src/core/life_cycle/life_cycle"), $__angular2_47_src_47_core_47_life_95_cycle_47_life_95_cycle__ && $__angular2_47_src_47_core_47_life_95_cycle_47_life_95_cycle__.__esModule && $__angular2_47_src_47_core_47_life_95_cycle_47_life_95_cycle__ || {default: $__angular2_47_src_47_core_47_life_95_cycle_47_life_95_cycle__}).LifeCycle;
var $__10 = ($__angular2_47_src_47_core_47_testability_47_testability__ = require("angular2/src/core/testability/testability"), $__angular2_47_src_47_core_47_testability_47_testability__ && $__angular2_47_src_47_core_47_testability_47_testability__.__esModule && $__angular2_47_src_47_core_47_testability_47_testability__ || {default: $__angular2_47_src_47_core_47_testability_47_testability__}),
    Testability = $__10.Testability,
    TestabilityRegistry = $__10.TestabilityRegistry;
var HelloRootCmp = function HelloRootCmp() {
  this.greeting = 'hello';
};
($traceurRuntime.createClass)(HelloRootCmp, {}, {});
Object.defineProperty(HelloRootCmp, "annotations", {get: function() {
    return [new Component({selector: 'hello-app'}), new View({template: '{{greeting}} world!'})];
  }});
var HelloRootCmpContent = function HelloRootCmpContent() {};
($traceurRuntime.createClass)(HelloRootCmpContent, {}, {});
Object.defineProperty(HelloRootCmpContent, "annotations", {get: function() {
    return [new Component({selector: 'hello-app'}), new View({template: 'before: <content></content> after: done'})];
  }});
var HelloRootCmp2 = function HelloRootCmp2() {
  this.greeting = 'hello';
};
($traceurRuntime.createClass)(HelloRootCmp2, {}, {});
Object.defineProperty(HelloRootCmp2, "annotations", {get: function() {
    return [new Component({selector: 'hello-app-2'}), new View({template: '{{greeting}} world, again!'})];
  }});
var HelloRootCmp3 = function HelloRootCmp3(appBinding) {
  this.appBinding = appBinding;
};
($traceurRuntime.createClass)(HelloRootCmp3, {}, {});
Object.defineProperty(HelloRootCmp3, "annotations", {get: function() {
    return [new Component({selector: 'hello-app'}), new View({template: ''})];
  }});
Object.defineProperty(HelloRootCmp3, "parameters", {get: function() {
    return [[new Inject("appBinding")]];
  }});
var HelloRootCmp4 = function HelloRootCmp4(lc) {
  this.lc = lc;
};
($traceurRuntime.createClass)(HelloRootCmp4, {}, {});
Object.defineProperty(HelloRootCmp4, "annotations", {get: function() {
    return [new Component({selector: 'hello-app'}), new View({template: ''})];
  }});
Object.defineProperty(HelloRootCmp4, "parameters", {get: function() {
    return [[new Inject(LifeCycle)]];
  }});
var HelloRootMissingTemplate = function HelloRootMissingTemplate() {
  ;
};
($traceurRuntime.createClass)(HelloRootMissingTemplate, {}, {});
Object.defineProperty(HelloRootMissingTemplate, "annotations", {get: function() {
    return [new Component({selector: 'hello-app'})];
  }});
var HelloRootDirectiveIsNotCmp = function HelloRootDirectiveIsNotCmp() {
  ;
};
($traceurRuntime.createClass)(HelloRootDirectiveIsNotCmp, {}, {});
Object.defineProperty(HelloRootDirectiveIsNotCmp, "annotations", {get: function() {
    return [new Decorator({selector: 'hello-app'})];
  }});
function main() {
  var fakeDoc,
      el,
      el2,
      testBindings,
      lightDom;
  beforeEach((function() {
    fakeDoc = DOM.createHtmlDocument();
    el = DOM.createElement('hello-app', fakeDoc);
    el2 = DOM.createElement('hello-app-2', fakeDoc);
    lightDom = DOM.createElement('light-dom-el', fakeDoc);
    DOM.appendChild(fakeDoc.body, el);
    DOM.appendChild(fakeDoc.body, el2);
    DOM.appendChild(el, lightDom);
    DOM.setText(lightDom, 'loading');
    testBindings = [bind(appDocumentToken).toValue(fakeDoc)];
  }));
  describe('bootstrap factory method', (function() {
    it('should throw if no View found', inject([AsyncTestCompleter], (function(async) {
      var refPromise = bootstrap(HelloRootMissingTemplate, testBindings, (function(e, t) {
        throw e;
      }));
      PromiseWrapper.then(refPromise, null, (function(reason) {
        expect(reason.message).toContain('No template found for HelloRootMissingTemplate');
        async.done();
      }));
    })));
    it('should throw if bootstrapped Directive is not a Component', inject([AsyncTestCompleter], (function(async) {
      var refPromise = bootstrap(HelloRootDirectiveIsNotCmp, testBindings, (function(e, t) {
        throw e;
      }));
      PromiseWrapper.then(refPromise, null, (function(reason) {
        expect(reason.message).toContain("Could not load 'HelloRootDirectiveIsNotCmp' because it is not a component.");
        async.done();
      }));
    })));
    it('should throw if no element is found', inject([AsyncTestCompleter], (function(async) {
      var refPromise = bootstrap(HelloRootCmp, [], (function(e, t) {
        throw e;
      }));
      PromiseWrapper.then(refPromise, null, (function(reason) {
        expect(reason.message).toContain('The app selector "hello-app" did not match any elements');
        async.done();
      }));
    })));
    it('should create an injector promise', (function() {
      var refPromise = bootstrap(HelloRootCmp, testBindings);
      expect(refPromise).not.toBe(null);
    }));
    it('should resolve an injector promise and contain bindings', inject([AsyncTestCompleter], (function(async) {
      var refPromise = bootstrap(HelloRootCmp, testBindings);
      refPromise.then((function(ref) {
        expect(ref.injector.get(appElementToken)).toBe(el);
        async.done();
      }));
    })));
    it('should provide the application component in the injector', inject([AsyncTestCompleter], (function(async) {
      var refPromise = bootstrap(HelloRootCmp, testBindings);
      refPromise.then((function(ref) {
        expect(ref.injector.get(HelloRootCmp)).toBeAnInstanceOf(HelloRootCmp);
        async.done();
      }));
    })));
    it('should display hello world', inject([AsyncTestCompleter], (function(async) {
      var refPromise = bootstrap(HelloRootCmp, testBindings);
      refPromise.then((function(ref) {
        expect(ref.injector.get(appElementToken)).toHaveText('hello world!');
        async.done();
      }));
    })));
    it('should support multiple calls to bootstrap', inject([AsyncTestCompleter], (function(async) {
      var refPromise1 = bootstrap(HelloRootCmp, testBindings);
      var refPromise2 = bootstrap(HelloRootCmp2, testBindings);
      PromiseWrapper.all([refPromise1, refPromise2]).then((function(refs) {
        expect(refs[0].injector.get(appElementToken)).toHaveText('hello world!');
        expect(refs[1].injector.get(appElementToken)).toHaveText('hello world, again!');
        async.done();
      }));
    })));
    it("should make the provided bindings available to the application component", inject([AsyncTestCompleter], (function(async) {
      var refPromise = bootstrap(HelloRootCmp3, [testBindings, bind("appBinding").toValue("BoundValue")]);
      refPromise.then((function(ref) {
        expect(ref.injector.get(HelloRootCmp3).appBinding).toEqual("BoundValue");
        async.done();
      }));
    })));
    it("should avoid cyclic dependencies when root component requires Lifecycle through DI", inject([AsyncTestCompleter], (function(async) {
      var refPromise = bootstrap(HelloRootCmp4, testBindings);
      refPromise.then((function(ref) {
        expect(ref.injector.get(HelloRootCmp4).lc).toBe(ref.injector.get(LifeCycle));
        async.done();
      }));
    })));
    it("should support shadow dom content tag", inject([AsyncTestCompleter], (function(async) {
      var refPromise = bootstrap(HelloRootCmpContent, testBindings);
      refPromise.then((function(ref) {
        expect(ref.injector.get(appElementToken)).toHaveText('before: loading after: done');
        async.done();
      }));
    })));
    it('should register each application with the testability registry', inject([AsyncTestCompleter], (function(async) {
      var refPromise1 = bootstrap(HelloRootCmp, testBindings);
      var refPromise2 = bootstrap(HelloRootCmp2, testBindings);
      PromiseWrapper.all([refPromise1, refPromise2]).then((function(refs) {
        var registry = refs[0].injector.get(TestabilityRegistry);
        PromiseWrapper.all([refs[0].injector.asyncGet(Testability), refs[1].injector.asyncGet(Testability)]).then((function(testabilities) {
          expect(registry.findTestabilityInTree(el)).toEqual(testabilities[0]);
          expect(registry.findTestabilityInTree(el2)).toEqual(testabilities[1]);
          async.done();
        }));
      }));
    })));
  }));
}
//# sourceMappingURL=application_spec.js.map

//# sourceMappingURL=./application_spec.map
 main();