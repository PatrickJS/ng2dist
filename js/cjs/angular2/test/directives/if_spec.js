'use strict'; var parse5Adapter = require('angular2/src/dom/parse5_adapter'); parse5Adapter.Parse5DomAdapter.makeCurrent();
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_test_95_lib_47_test_95_bed__,
    $__angular2_47_src_47_core_47_annotations_47_annotations__,
    $__angular2_47_src_47_core_47_annotations_47_view__,
    $__angular2_47_src_47_directives_47_if__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    AsyncTestCompleter = $__0.AsyncTestCompleter,
    beforeEach = $__0.beforeEach,
    ddescribe = $__0.ddescribe,
    describe = $__0.describe,
    el = $__0.el,
    expect = $__0.expect,
    iit = $__0.iit,
    inject = $__0.inject,
    IS_DARTIUM = $__0.IS_DARTIUM,
    it = $__0.it,
    xit = $__0.xit;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var TestBed = ($__angular2_47_src_47_test_95_lib_47_test_95_bed__ = require("angular2/src/test_lib/test_bed"), $__angular2_47_src_47_test_95_lib_47_test_95_bed__ && $__angular2_47_src_47_test_95_lib_47_test_95_bed__.__esModule && $__angular2_47_src_47_test_95_lib_47_test_95_bed__ || {default: $__angular2_47_src_47_test_95_lib_47_test_95_bed__}).TestBed;
var Component = ($__angular2_47_src_47_core_47_annotations_47_annotations__ = require("angular2/src/core/annotations/annotations"), $__angular2_47_src_47_core_47_annotations_47_annotations__ && $__angular2_47_src_47_core_47_annotations_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_47_annotations__}).Component;
var View = ($__angular2_47_src_47_core_47_annotations_47_view__ = require("angular2/src/core/annotations/view"), $__angular2_47_src_47_core_47_annotations_47_view__ && $__angular2_47_src_47_core_47_annotations_47_view__.__esModule && $__angular2_47_src_47_core_47_annotations_47_view__ || {default: $__angular2_47_src_47_core_47_annotations_47_view__}).View;
var If = ($__angular2_47_src_47_directives_47_if__ = require("angular2/src/directives/if"), $__angular2_47_src_47_directives_47_if__ && $__angular2_47_src_47_directives_47_if__.__esModule && $__angular2_47_src_47_directives_47_if__ || {default: $__angular2_47_src_47_directives_47_if__}).If;
function main() {
  describe('if directive', (function() {
    it('should work in a template attribute', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
      var html = '<div><copy-me template="if booleanCondition">hello</copy-me></div>';
      tb.createView(TestComponent, {html: html}).then((function(view) {
        view.detectChanges();
        expect(DOM.querySelectorAll(view.rootNodes[0], 'copy-me').length).toEqual(1);
        expect(DOM.getText(view.rootNodes[0])).toEqual('hello');
        async.done();
      }));
    })));
    it('should work in a template element', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
      var html = '<div><template [if]="booleanCondition"><copy-me>hello2</copy-me></template></div>';
      tb.createView(TestComponent, {html: html}).then((function(view) {
        view.detectChanges();
        expect(DOM.querySelectorAll(view.rootNodes[0], 'copy-me').length).toEqual(1);
        expect(DOM.getText(view.rootNodes[0])).toEqual('hello2');
        async.done();
      }));
    })));
    it('should toggle node when condition changes', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
      var html = '<div><copy-me template="if booleanCondition">hello</copy-me></div>';
      tb.createView(TestComponent, {html: html}).then((function(view) {
        view.context.booleanCondition = false;
        view.detectChanges();
        expect(DOM.querySelectorAll(view.rootNodes[0], 'copy-me').length).toEqual(0);
        expect(DOM.getText(view.rootNodes[0])).toEqual('');
        view.context.booleanCondition = true;
        view.detectChanges();
        expect(DOM.querySelectorAll(view.rootNodes[0], 'copy-me').length).toEqual(1);
        expect(DOM.getText(view.rootNodes[0])).toEqual('hello');
        view.context.booleanCondition = false;
        view.detectChanges();
        expect(DOM.querySelectorAll(view.rootNodes[0], 'copy-me').length).toEqual(0);
        expect(DOM.getText(view.rootNodes[0])).toEqual('');
        async.done();
      }));
    })));
    it('should handle nested if correctly', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
      var html = '<div><template [if]="booleanCondition"><copy-me *if="nestedBooleanCondition">hello</copy-me></template></div>';
      tb.createView(TestComponent, {html: html}).then((function(view) {
        view.context.booleanCondition = false;
        view.detectChanges();
        expect(DOM.querySelectorAll(view.rootNodes[0], 'copy-me').length).toEqual(0);
        expect(DOM.getText(view.rootNodes[0])).toEqual('');
        view.context.booleanCondition = true;
        view.detectChanges();
        expect(DOM.querySelectorAll(view.rootNodes[0], 'copy-me').length).toEqual(1);
        expect(DOM.getText(view.rootNodes[0])).toEqual('hello');
        view.context.nestedBooleanCondition = false;
        view.detectChanges();
        expect(DOM.querySelectorAll(view.rootNodes[0], 'copy-me').length).toEqual(0);
        expect(DOM.getText(view.rootNodes[0])).toEqual('');
        view.context.nestedBooleanCondition = true;
        view.detectChanges();
        expect(DOM.querySelectorAll(view.rootNodes[0], 'copy-me').length).toEqual(1);
        expect(DOM.getText(view.rootNodes[0])).toEqual('hello');
        view.context.booleanCondition = false;
        view.detectChanges();
        expect(DOM.querySelectorAll(view.rootNodes[0], 'copy-me').length).toEqual(0);
        expect(DOM.getText(view.rootNodes[0])).toEqual('');
        async.done();
      }));
    })));
    it('should update several nodes with if', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
      var html = '<div>' + '<copy-me template="if numberCondition + 1 >= 2">helloNumber</copy-me>' + '<copy-me template="if stringCondition == \'foo\'">helloString</copy-me>' + '<copy-me template="if functionCondition(stringCondition, numberCondition)">helloFunction</copy-me>' + '</div>';
      tb.createView(TestComponent, {html: html}).then((function(view) {
        view.detectChanges();
        expect(DOM.querySelectorAll(view.rootNodes[0], 'copy-me').length).toEqual(3);
        expect(DOM.getText(view.rootNodes[0])).toEqual('helloNumberhelloStringhelloFunction');
        view.context.numberCondition = 0;
        view.detectChanges();
        expect(DOM.querySelectorAll(view.rootNodes[0], 'copy-me').length).toEqual(1);
        expect(DOM.getText(view.rootNodes[0])).toEqual('helloString');
        view.context.numberCondition = 1;
        view.context.stringCondition = "bar";
        view.detectChanges();
        expect(DOM.querySelectorAll(view.rootNodes[0], 'copy-me').length).toEqual(1);
        expect(DOM.getText(view.rootNodes[0])).toEqual('helloNumber');
        async.done();
      }));
    })));
    if (!IS_DARTIUM) {
      it('should not add the element twice if the condition goes from true to true (JS)', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
        var html = '<div><copy-me template="if numberCondition">hello</copy-me></div>';
        tb.createView(TestComponent, {html: html}).then((function(view) {
          view.detectChanges();
          expect(DOM.querySelectorAll(view.rootNodes[0], 'copy-me').length).toEqual(1);
          expect(DOM.getText(view.rootNodes[0])).toEqual('hello');
          view.context.numberCondition = 2;
          view.detectChanges();
          expect(DOM.querySelectorAll(view.rootNodes[0], 'copy-me').length).toEqual(1);
          expect(DOM.getText(view.rootNodes[0])).toEqual('hello');
          async.done();
        }));
      })));
      it('should not recreate the element if the condition goes from true to true (JS)', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
        var html = '<div><copy-me template="if numberCondition">hello</copy-me></div>';
        tb.createView(TestComponent, {html: html}).then((function(view) {
          view.detectChanges();
          DOM.addClass(view.rootNodes[0].childNodes[1], "foo");
          view.context.numberCondition = 2;
          view.detectChanges();
          expect(DOM.hasClass(view.rootNodes[0].childNodes[1], "foo")).toBe(true);
          async.done();
        }));
      })));
    }
    if (IS_DARTIUM) {
      it('should not create the element if the condition is not a boolean (DART)', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
        var html = '<div><copy-me template="if numberCondition">hello</copy-me></div>';
        tb.createView(TestComponent, {html: html}).then((function(view) {
          expect((function() {
            return view.detectChanges();
          })).toThrowError();
          expect(DOM.querySelectorAll(view.rootNodes[0], 'copy-me').length).toEqual(0);
          expect(DOM.getText(view.rootNodes[0])).toEqual('');
          async.done();
        }));
      })));
    }
  }));
}
var TestComponent = function TestComponent() {
  this.booleanCondition = true;
  this.nestedBooleanCondition = true;
  this.numberCondition = 1;
  this.stringCondition = "foo";
  this.functionCondition = function(s, n) {
    return s == "foo" && n == 1;
  };
};
($traceurRuntime.createClass)(TestComponent, {}, {});
Object.defineProperty(TestComponent, "annotations", {get: function() {
    return [new Component({selector: 'test-cmp'}), new View({directives: [If]})];
  }});
//# sourceMappingURL=if_spec.js.map

//# sourceMappingURL=./if_spec.map
 main();