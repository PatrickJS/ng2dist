'use strict'; var parse5Adapter = require('angular2/src/dom/parse5_adapter'); parse5Adapter.Parse5DomAdapter.makeCurrent();
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_core_47_annotations_47_view__,
    $__angular2_47_src_47_core_47_annotations_47_annotations__,
    $__angular2_47_src_47_test_95_lib_47_test_95_bed__,
    $__angular2_47_src_47_directives_47_class__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    AsyncTestCompleter = $__0.AsyncTestCompleter,
    beforeEach = $__0.beforeEach,
    beforeEachBindings = $__0.beforeEachBindings,
    ddescribe = $__0.ddescribe,
    xdescribe = $__0.xdescribe,
    describe = $__0.describe,
    el = $__0.el,
    expect = $__0.expect,
    iit = $__0.iit,
    inject = $__0.inject,
    it = $__0.it,
    xit = $__0.xit;
var StringMapWrapper = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).StringMapWrapper;
var View = ($__angular2_47_src_47_core_47_annotations_47_view__ = require("angular2/src/core/annotations/view"), $__angular2_47_src_47_core_47_annotations_47_view__ && $__angular2_47_src_47_core_47_annotations_47_view__.__esModule && $__angular2_47_src_47_core_47_annotations_47_view__ || {default: $__angular2_47_src_47_core_47_annotations_47_view__}).View;
var Component = ($__angular2_47_src_47_core_47_annotations_47_annotations__ = require("angular2/src/core/annotations/annotations"), $__angular2_47_src_47_core_47_annotations_47_annotations__ && $__angular2_47_src_47_core_47_annotations_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_47_annotations__}).Component;
var TestBed = ($__angular2_47_src_47_test_95_lib_47_test_95_bed__ = require("angular2/src/test_lib/test_bed"), $__angular2_47_src_47_test_95_lib_47_test_95_bed__ && $__angular2_47_src_47_test_95_lib_47_test_95_bed__.__esModule && $__angular2_47_src_47_test_95_lib_47_test_95_bed__ || {default: $__angular2_47_src_47_test_95_lib_47_test_95_bed__}).TestBed;
var CSSClass = ($__angular2_47_src_47_directives_47_class__ = require("angular2/src/directives/class"), $__angular2_47_src_47_directives_47_class__ && $__angular2_47_src_47_directives_47_class__.__esModule && $__angular2_47_src_47_directives_47_class__ || {default: $__angular2_47_src_47_directives_47_class__}).CSSClass;
function main() {
  describe('binding to CSS class list', (function() {
    it('should add classes specified in an object literal', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
      var template = '<div [class]="{foo: true, bar: false}"></div>';
      tb.createView(TestComponent, {html: template}).then((function(view) {
        view.detectChanges();
        expect(view.rootNodes[0].className).toEqual('ng-binding foo');
        async.done();
      }));
    })));
    it('should add and remove classes based on changes in object literal values', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
      var template = '<div [class]="{foo: condition, bar: !condition}"></div>';
      tb.createView(TestComponent, {html: template}).then((function(view) {
        view.detectChanges();
        expect(view.rootNodes[0].className).toEqual('ng-binding foo');
        view.context.condition = false;
        view.detectChanges();
        expect(view.rootNodes[0].className).toEqual('ng-binding bar');
        async.done();
      }));
    })));
    it('should add and remove classes based on changes to the expression object', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
      var template = '<div [class]="expr"></div>';
      tb.createView(TestComponent, {html: template}).then((function(view) {
        view.detectChanges();
        expect(view.rootNodes[0].className).toEqual('ng-binding foo');
        StringMapWrapper.set(view.context.expr, 'bar', true);
        view.detectChanges();
        expect(view.rootNodes[0].className).toEqual('ng-binding foo bar');
        StringMapWrapper.set(view.context.expr, 'baz', true);
        view.detectChanges();
        expect(view.rootNodes[0].className).toEqual('ng-binding foo bar baz');
        StringMapWrapper.delete(view.context.expr, 'bar');
        view.detectChanges();
        expect(view.rootNodes[0].className).toEqual('ng-binding foo baz');
        async.done();
      }));
    })));
    it('should retain existing classes when expression evaluates to null', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
      var template = '<div [class]="expr"></div>';
      tb.createView(TestComponent, {html: template}).then((function(view) {
        view.detectChanges();
        expect(view.rootNodes[0].className).toEqual('ng-binding foo');
        view.context.expr = null;
        view.detectChanges();
        expect(view.rootNodes[0].className).toEqual('ng-binding foo');
        view.context.expr = {
          'foo': false,
          'bar': true
        };
        view.detectChanges();
        expect(view.rootNodes[0].className).toEqual('ng-binding bar');
        async.done();
      }));
    })));
    it('should co-operate with the class attribute', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
      var template = '<div [class]="expr" class="init foo"></div>';
      tb.createView(TestComponent, {html: template}).then((function(view) {
        StringMapWrapper.set(view.context.expr, 'bar', true);
        view.detectChanges();
        expect(view.rootNodes[0].className).toEqual('init foo ng-binding bar');
        StringMapWrapper.set(view.context.expr, 'foo', false);
        view.detectChanges();
        expect(view.rootNodes[0].className).toEqual('init ng-binding bar');
        async.done();
      }));
    })));
    it('should co-operate with the class attribute and class.name binding', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
      var template = '<div class="init foo" [class]="expr" [class.baz]="condition"></div>';
      tb.createView(TestComponent, {html: template}).then((function(view) {
        view.detectChanges();
        expect(view.rootNodes[0].className).toEqual('init foo ng-binding baz');
        StringMapWrapper.set(view.context.expr, 'bar', true);
        view.detectChanges();
        expect(view.rootNodes[0].className).toEqual('init foo ng-binding baz bar');
        StringMapWrapper.set(view.context.expr, 'foo', false);
        view.detectChanges();
        expect(view.rootNodes[0].className).toEqual('init ng-binding baz bar');
        view.context.condition = false;
        view.detectChanges();
        expect(view.rootNodes[0].className).toEqual('init ng-binding bar');
        async.done();
      }));
    })));
  }));
}
var TestComponent = function TestComponent() {
  this.condition = true;
  this.expr = {
    'foo': true,
    'bar': false
  };
};
($traceurRuntime.createClass)(TestComponent, {}, {});
Object.defineProperty(TestComponent, "annotations", {get: function() {
    return [new Component({selector: 'test-cmp'}), new View({directives: [CSSClass]})];
  }});
//# sourceMappingURL=class_spec.js.map

//# sourceMappingURL=./class_spec.map
 main();