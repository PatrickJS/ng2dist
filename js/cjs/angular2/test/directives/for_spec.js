'use strict'; var parse5Adapter = require('angular2/src/dom/parse5_adapter'); parse5Adapter.Parse5DomAdapter.makeCurrent();
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_core_47_annotations_47_annotations__,
    $__angular2_47_src_47_core_47_annotations_47_view__,
    $__angular2_47_src_47_directives_47_for__,
    $__angular2_47_src_47_test_95_lib_47_test_95_bed__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    AsyncTestCompleter = $__0.AsyncTestCompleter,
    beforeEach = $__0.beforeEach,
    beforeEachBindings = $__0.beforeEachBindings,
    ddescribe = $__0.ddescribe,
    describe = $__0.describe,
    el = $__0.el,
    expect = $__0.expect,
    iit = $__0.iit,
    inject = $__0.inject,
    it = $__0.it,
    xit = $__0.xit;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var ListWrapper = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).ListWrapper;
var Component = ($__angular2_47_src_47_core_47_annotations_47_annotations__ = require("angular2/src/core/annotations/annotations"), $__angular2_47_src_47_core_47_annotations_47_annotations__ && $__angular2_47_src_47_core_47_annotations_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_47_annotations__}).Component;
var View = ($__angular2_47_src_47_core_47_annotations_47_view__ = require("angular2/src/core/annotations/view"), $__angular2_47_src_47_core_47_annotations_47_view__ && $__angular2_47_src_47_core_47_annotations_47_view__.__esModule && $__angular2_47_src_47_core_47_annotations_47_view__ || {default: $__angular2_47_src_47_core_47_annotations_47_view__}).View;
var For = ($__angular2_47_src_47_directives_47_for__ = require("angular2/src/directives/for"), $__angular2_47_src_47_directives_47_for__ && $__angular2_47_src_47_directives_47_for__.__esModule && $__angular2_47_src_47_directives_47_for__ || {default: $__angular2_47_src_47_directives_47_for__}).For;
var TestBed = ($__angular2_47_src_47_test_95_lib_47_test_95_bed__ = require("angular2/src/test_lib/test_bed"), $__angular2_47_src_47_test_95_lib_47_test_95_bed__ && $__angular2_47_src_47_test_95_lib_47_test_95_bed__.__esModule && $__angular2_47_src_47_test_95_lib_47_test_95_bed__ || {default: $__angular2_47_src_47_test_95_lib_47_test_95_bed__}).TestBed;
function main() {
  describe('for', (function() {
    var TEMPLATE = '<div><copy-me template="for #item of items">{{item.toString()}};</copy-me></div>';
    it('should reflect initial elements', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
      tb.createView(TestComponent, {html: TEMPLATE}).then((function(view) {
        view.detectChanges();
        expect(DOM.getText(view.rootNodes[0])).toEqual('1;2;');
        async.done();
      }));
    })));
    it('should reflect added elements', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
      tb.createView(TestComponent, {html: TEMPLATE}).then((function(view) {
        view.detectChanges();
        ListWrapper.push(view.context.items, 3);
        view.detectChanges();
        expect(DOM.getText(view.rootNodes[0])).toEqual('1;2;3;');
        async.done();
      }));
    })));
    it('should reflect removed elements', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
      tb.createView(TestComponent, {html: TEMPLATE}).then((function(view) {
        view.detectChanges();
        ListWrapper.removeAt(view.context.items, 1);
        view.detectChanges();
        expect(DOM.getText(view.rootNodes[0])).toEqual('1;');
        async.done();
      }));
    })));
    it('should reflect moved elements', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
      tb.createView(TestComponent, {html: TEMPLATE}).then((function(view) {
        view.detectChanges();
        ListWrapper.removeAt(view.context.items, 0);
        ListWrapper.push(view.context.items, 1);
        view.detectChanges();
        expect(DOM.getText(view.rootNodes[0])).toEqual('2;1;');
        async.done();
      }));
    })));
    it('should reflect a mix of all changes (additions/removals/moves)', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
      tb.createView(TestComponent, {html: TEMPLATE}).then((function(view) {
        view.context.items = [0, 1, 2, 3, 4, 5];
        view.detectChanges();
        view.context.items = [6, 2, 7, 0, 4, 8];
        view.detectChanges();
        expect(DOM.getText(view.rootNodes[0])).toEqual('6;2;7;0;4;8;');
        async.done();
      }));
    })));
    it('should iterate over an array of objects', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
      var template = '<ul><li template="for #item of items">{{item["name"]}};</li></ul>';
      tb.createView(TestComponent, {html: template}).then((function(view) {
        view.context.items = [{'name': 'misko'}, {'name': 'shyam'}];
        view.detectChanges();
        expect(DOM.getText(view.rootNodes[0])).toEqual('misko;shyam;');
        ListWrapper.push(view.context.items, {'name': 'adam'});
        view.detectChanges();
        expect(DOM.getText(view.rootNodes[0])).toEqual('misko;shyam;adam;');
        ListWrapper.removeAt(view.context.items, 2);
        ListWrapper.removeAt(view.context.items, 0);
        view.detectChanges();
        expect(DOM.getText(view.rootNodes[0])).toEqual('shyam;');
        async.done();
      }));
    })));
    it('should gracefully handle nulls', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
      var template = '<ul><li template="for #item of null">{{item}};</li></ul>';
      tb.createView(TestComponent, {html: template}).then((function(view) {
        view.detectChanges();
        expect(DOM.getText(view.rootNodes[0])).toEqual('');
        async.done();
      }));
    })));
    it('should gracefully handle ref changing to null and back', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
      tb.createView(TestComponent, {html: TEMPLATE}).then((function(view) {
        view.detectChanges();
        expect(DOM.getText(view.rootNodes[0])).toEqual('1;2;');
        view.context.items = null;
        view.detectChanges();
        expect(DOM.getText(view.rootNodes[0])).toEqual('');
        view.context.items = [1, 2, 3];
        view.detectChanges();
        expect(DOM.getText(view.rootNodes[0])).toEqual('1;2;3;');
        async.done();
      }));
    })));
    it('should throw on ref changing to string', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
      tb.createView(TestComponent, {html: TEMPLATE}).then((function(view) {
        view.detectChanges();
        expect(DOM.getText(view.rootNodes[0])).toEqual('1;2;');
        view.context.items = 'whaaa';
        expect((function() {
          return view.detectChanges();
        })).toThrowError();
        async.done();
      }));
    })));
    it('should works with duplicates', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
      tb.createView(TestComponent, {html: TEMPLATE}).then((function(view) {
        var a = new Foo();
        view.context.items = [a, a];
        view.detectChanges();
        expect(DOM.getText(view.rootNodes[0])).toEqual('foo;foo;');
        async.done();
      }));
    })));
    it('should repeat over nested arrays', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
      var template = '<div>' + '<div template="for #item of items">' + '<div template="for #subitem of item">' + '{{subitem}}-{{item.length}};' + '</div>|' + '</div>' + '</div>';
      tb.createView(TestComponent, {html: template}).then((function(view) {
        view.context.items = [['a', 'b'], ['c']];
        view.detectChanges();
        view.detectChanges();
        view.detectChanges();
        expect(DOM.getText(view.rootNodes[0])).toEqual('a-2;b-2;|c-1;|');
        view.context.items = [['e'], ['f', 'g']];
        view.detectChanges();
        expect(DOM.getText(view.rootNodes[0])).toEqual('e-1;|f-2;g-2;|');
        async.done();
      }));
    })));
    it('should repeat over nested arrays with no intermediate element', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
      var template = '<div><template [for] #item [of]="items">' + '<div template="for #subitem of item">' + '{{subitem}}-{{item.length}};' + '</div></template></div>';
      tb.createView(TestComponent, {html: template}).then((function(view) {
        view.context.items = [['a', 'b'], ['c']];
        view.detectChanges();
        expect(DOM.getText(view.rootNodes[0])).toEqual('a-2;b-2;c-1;');
        view.context.items = [['e'], ['f', 'g']];
        view.detectChanges();
        expect(DOM.getText(view.rootNodes[0])).toEqual('e-1;f-2;g-2;');
        async.done();
      }));
    })));
    it('should display indices correctly', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
      var template = '<div><copy-me template="for: var item of items; var i=index">{{i.toString()}}</copy-me></div>';
      tb.createView(TestComponent, {html: template}).then((function(view) {
        view.context.items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        view.detectChanges();
        expect(DOM.getText(view.rootNodes[0])).toEqual('0123456789');
        view.context.items = [1, 2, 6, 7, 4, 3, 5, 8, 9, 0];
        view.detectChanges();
        expect(DOM.getText(view.rootNodes[0])).toEqual('0123456789');
        async.done();
      }));
    })));
  }));
}
var Foo = function Foo() {
  ;
};
($traceurRuntime.createClass)(Foo, {toString: function() {
    return 'foo';
  }}, {});
var TestComponent = function TestComponent() {
  this.items = [1, 2];
};
($traceurRuntime.createClass)(TestComponent, {}, {});
Object.defineProperty(TestComponent, "annotations", {get: function() {
    return [new Component({selector: 'test-cmp'}), new View({directives: [For]})];
  }});
//# sourceMappingURL=for_spec.js.map

//# sourceMappingURL=./for_spec.map
 main();