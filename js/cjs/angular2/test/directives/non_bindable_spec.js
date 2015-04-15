'use strict'; var parse5Adapter = require('angular2/src/dom/parse5_adapter'); parse5Adapter.Parse5DomAdapter.makeCurrent();
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_core_47_annotations_47_annotations__,
    $__angular2_47_src_47_core_47_annotations_47_view__,
    $__angular2_47_src_47_core_47_compiler_47_ng_95_element__,
    $__angular2_47_src_47_directives_47_non_95_bindable__,
    $__angular2_47_src_47_test_95_lib_47_test_95_bed__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    AsyncTestCompleter = $__0.AsyncTestCompleter,
    beforeEach = $__0.beforeEach,
    ddescribe = $__0.ddescribe,
    describe = $__0.describe,
    el = $__0.el,
    expect = $__0.expect,
    iit = $__0.iit,
    inject = $__0.inject,
    it = $__0.it,
    xit = $__0.xit;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var $__2 = ($__angular2_47_src_47_core_47_annotations_47_annotations__ = require("angular2/src/core/annotations/annotations"), $__angular2_47_src_47_core_47_annotations_47_annotations__ && $__angular2_47_src_47_core_47_annotations_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_47_annotations__}),
    Decorator = $__2.Decorator,
    Component = $__2.Component;
var View = ($__angular2_47_src_47_core_47_annotations_47_view__ = require("angular2/src/core/annotations/view"), $__angular2_47_src_47_core_47_annotations_47_view__ && $__angular2_47_src_47_core_47_annotations_47_view__.__esModule && $__angular2_47_src_47_core_47_annotations_47_view__ || {default: $__angular2_47_src_47_core_47_annotations_47_view__}).View;
var NgElement = ($__angular2_47_src_47_core_47_compiler_47_ng_95_element__ = require("angular2/src/core/compiler/ng_element"), $__angular2_47_src_47_core_47_compiler_47_ng_95_element__ && $__angular2_47_src_47_core_47_compiler_47_ng_95_element__.__esModule && $__angular2_47_src_47_core_47_compiler_47_ng_95_element__ || {default: $__angular2_47_src_47_core_47_compiler_47_ng_95_element__}).NgElement;
var NonBindable = ($__angular2_47_src_47_directives_47_non_95_bindable__ = require("angular2/src/directives/non_bindable"), $__angular2_47_src_47_directives_47_non_95_bindable__ && $__angular2_47_src_47_directives_47_non_95_bindable__.__esModule && $__angular2_47_src_47_directives_47_non_95_bindable__ || {default: $__angular2_47_src_47_directives_47_non_95_bindable__}).NonBindable;
var TestBed = ($__angular2_47_src_47_test_95_lib_47_test_95_bed__ = require("angular2/src/test_lib/test_bed"), $__angular2_47_src_47_test_95_lib_47_test_95_bed__ && $__angular2_47_src_47_test_95_lib_47_test_95_bed__.__esModule && $__angular2_47_src_47_test_95_lib_47_test_95_bed__ || {default: $__angular2_47_src_47_test_95_lib_47_test_95_bed__}).TestBed;
function main() {
  describe('non-bindable', (function() {
    it('should not interpolate children', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
      var template = '<div>{{text}}<span non-bindable>{{text}}</span></div>';
      tb.createView(TestComponent, {html: template}).then((function(view) {
        view.detectChanges();
        expect(DOM.getText(view.rootNodes[0])).toEqual('foo{{text}}');
        async.done();
      }));
    })));
    it('should ignore directives on child nodes', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
      var template = '<div non-bindable><span id=child test-dec>{{text}}</span></div>';
      tb.createView(TestComponent, {html: template}).then((function(view) {
        view.detectChanges();
        var span = DOM.querySelector(view.rootNodes[0], '#child');
        expect(DOM.hasClass(span, 'compiled')).toBeFalsy();
        async.done();
      }));
    })));
    it('should trigger directives on the same node', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
      var template = '<div><span id=child non-bindable test-dec>{{text}}</span></div>';
      tb.createView(TestComponent, {html: template}).then((function(view) {
        view.detectChanges();
        var span = DOM.querySelector(view.rootNodes[0], '#child');
        expect(DOM.hasClass(span, 'compiled')).toBeTruthy();
        async.done();
      }));
    })));
  }));
}
var TestComponent = function TestComponent() {
  this.text = 'foo';
};
($traceurRuntime.createClass)(TestComponent, {}, {});
Object.defineProperty(TestComponent, "annotations", {get: function() {
    return [new Component({selector: 'test-cmp'}), new View({directives: [NonBindable, TestDecorator]})];
  }});
var TestDecorator = function TestDecorator(el) {
  DOM.addClass(el.domElement, 'compiled');
};
($traceurRuntime.createClass)(TestDecorator, {}, {});
Object.defineProperty(TestDecorator, "annotations", {get: function() {
    return [new Decorator({selector: '[test-dec]'})];
  }});
Object.defineProperty(TestDecorator, "parameters", {get: function() {
    return [[NgElement]];
  }});
//# sourceMappingURL=non_bindable_spec.js.map

//# sourceMappingURL=./non_bindable_spec.map
 main();