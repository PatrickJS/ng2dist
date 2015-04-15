'use strict'; var parse5Adapter = require('angular2/src/dom/parse5_adapter'); parse5Adapter.Parse5DomAdapter.makeCurrent();
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_test_95_lib_47_test_95_bed__,
    $__angular2_47_src_47_core_47_compiler_47_query_95_list__,
    $__angular2_47_src_47_core_47_annotations_47_di__,
    $__angular2_47_angular2__,
    $__angular2_47_src_47_dom_47_browser_95_adapter__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    AsyncTestCompleter = $__0.AsyncTestCompleter,
    beforeEach = $__0.beforeEach,
    ddescribe = $__0.ddescribe,
    describe = $__0.describe,
    el = $__0.el,
    expect = $__0.expect,
    iit = $__0.iit,
    inject = $__0.inject,
    IS_NODEJS = $__0.IS_NODEJS,
    it = $__0.it,
    xit = $__0.xit;
var TestBed = ($__angular2_47_src_47_test_95_lib_47_test_95_bed__ = require("angular2/src/test_lib/test_bed"), $__angular2_47_src_47_test_95_lib_47_test_95_bed__ && $__angular2_47_src_47_test_95_lib_47_test_95_bed__.__esModule && $__angular2_47_src_47_test_95_lib_47_test_95_bed__ || {default: $__angular2_47_src_47_test_95_lib_47_test_95_bed__}).TestBed;
var QueryList = ($__angular2_47_src_47_core_47_compiler_47_query_95_list__ = require("angular2/src/core/compiler/query_list"), $__angular2_47_src_47_core_47_compiler_47_query_95_list__ && $__angular2_47_src_47_core_47_compiler_47_query_95_list__.__esModule && $__angular2_47_src_47_core_47_compiler_47_query_95_list__ || {default: $__angular2_47_src_47_core_47_compiler_47_query_95_list__}).QueryList;
var Query = ($__angular2_47_src_47_core_47_annotations_47_di__ = require("angular2/src/core/annotations/di"), $__angular2_47_src_47_core_47_annotations_47_di__ && $__angular2_47_src_47_core_47_annotations_47_di__.__esModule && $__angular2_47_src_47_core_47_annotations_47_di__ || {default: $__angular2_47_src_47_core_47_annotations_47_di__}).Query;
var $__4 = ($__angular2_47_angular2__ = require("angular2/angular2"), $__angular2_47_angular2__ && $__angular2_47_angular2__.__esModule && $__angular2_47_angular2__ || {default: $__angular2_47_angular2__}),
    Decorator = $__4.Decorator,
    Component = $__4.Component,
    View = $__4.View,
    If = $__4.If,
    For = $__4.For;
var BrowserDomAdapter = ($__angular2_47_src_47_dom_47_browser_95_adapter__ = require("angular2/src/dom/browser_adapter"), $__angular2_47_src_47_dom_47_browser_95_adapter__ && $__angular2_47_src_47_dom_47_browser_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_browser_95_adapter__ || {default: $__angular2_47_src_47_dom_47_browser_95_adapter__}).BrowserDomAdapter;
function main() {
  BrowserDomAdapter.makeCurrent();
  describe('Query API', (function() {
    it('should contain all directives in the light dom', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
      var template = '<div text="1"></div>' + '<needs-query text="2"><div text="3"></div></needs-query>' + '<div text="4"></div>';
      tb.createView(MyComp, {html: template}).then((function(view) {
        view.detectChanges();
        expect(view.rootNodes).toHaveText('2|3|');
        async.done();
      }));
    })));
    it('should reflect dynamically inserted directives', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
      var template = '<div text="1"></div>' + '<needs-query text="2"><div *if="shouldShow" [text]="\'3\'"></div></needs-query>' + '<div text="4"></div>';
      tb.createView(MyComp, {html: template}).then((function(view) {
        view.detectChanges();
        expect(view.rootNodes).toHaveText('2|');
        view.context.shouldShow = true;
        view.detectChanges();
        view.detectChanges();
        expect(view.rootNodes).toHaveText('2|3|');
        async.done();
      }));
    })));
    it('should reflect moved directives', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
      var template = '<div text="1"></div>' + '<needs-query text="2"><div *for="var i of list" [text]="i"></div></needs-query>' + '<div text="4"></div>';
      tb.createView(MyComp, {html: template}).then((function(view) {
        view.detectChanges();
        view.detectChanges();
        expect(view.rootNodes).toHaveText('2|1d|2d|3d|');
        view.context.list = ['3d', '2d'];
        view.detectChanges();
        view.detectChanges();
        expect(view.rootNodes).toHaveText('2|3d|2d|');
        async.done();
      }));
    })));
  }));
}
var NeedsQuery = function NeedsQuery(query) {
  this.query = query;
};
($traceurRuntime.createClass)(NeedsQuery, {}, {});
Object.defineProperty(NeedsQuery, "annotations", {get: function() {
    return [new Component({selector: 'needs-query'}), new View({
      directives: [For],
      template: '<div *for="var dir of query">{{dir.text}}|</div>'
    })];
  }});
Object.defineProperty(NeedsQuery, "parameters", {get: function() {
    return [[QueryList, new Query(TextDirective)]];
  }});
var _constructiontext = 0;
var TextDirective = function TextDirective() {};
($traceurRuntime.createClass)(TextDirective, {}, {});
Object.defineProperty(TextDirective, "annotations", {get: function() {
    return [new Decorator({
      selector: '[text]',
      properties: {'text': 'text'}
    })];
  }});
var MyComp = function MyComp() {
  this.shouldShow = false;
  this.list = ['1d', '2d', '3d'];
};
($traceurRuntime.createClass)(MyComp, {}, {});
Object.defineProperty(MyComp, "annotations", {get: function() {
    return [new Component({selector: 'my-comp'}), new View({directives: [NeedsQuery, TextDirective, If, For]})];
  }});
//# sourceMappingURL=query_integration_spec.js.map

//# sourceMappingURL=./query_integration_spec.map
 main();