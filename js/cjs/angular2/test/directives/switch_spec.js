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
    $__angular2_47_src_47_directives_47_switch__,
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
var Component = ($__angular2_47_src_47_core_47_annotations_47_annotations__ = require("angular2/src/core/annotations/annotations"), $__angular2_47_src_47_core_47_annotations_47_annotations__ && $__angular2_47_src_47_core_47_annotations_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_47_annotations__}).Component;
var View = ($__angular2_47_src_47_core_47_annotations_47_view__ = require("angular2/src/core/annotations/view"), $__angular2_47_src_47_core_47_annotations_47_view__ && $__angular2_47_src_47_core_47_annotations_47_view__.__esModule && $__angular2_47_src_47_core_47_annotations_47_view__ || {default: $__angular2_47_src_47_core_47_annotations_47_view__}).View;
var $__4 = ($__angular2_47_src_47_directives_47_switch__ = require("angular2/src/directives/switch"), $__angular2_47_src_47_directives_47_switch__ && $__angular2_47_src_47_directives_47_switch__.__esModule && $__angular2_47_src_47_directives_47_switch__ || {default: $__angular2_47_src_47_directives_47_switch__}),
    Switch = $__4.Switch,
    SwitchWhen = $__4.SwitchWhen,
    SwitchDefault = $__4.SwitchDefault;
var TestBed = ($__angular2_47_src_47_test_95_lib_47_test_95_bed__ = require("angular2/src/test_lib/test_bed"), $__angular2_47_src_47_test_95_lib_47_test_95_bed__ && $__angular2_47_src_47_test_95_lib_47_test_95_bed__.__esModule && $__angular2_47_src_47_test_95_lib_47_test_95_bed__ || {default: $__angular2_47_src_47_test_95_lib_47_test_95_bed__}).TestBed;
function main() {
  describe('switch', (function() {
    describe('switch value changes', (function() {
      it('should switch amongst when values', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
        var template = '<div>' + '<ul [switch]="switchValue">' + '<template [switch-when]="\'a\'"><li>when a</li></template>' + '<template [switch-when]="\'b\'"><li>when b</li></template>' + '</ul></div>';
        tb.createView(TestComponent, {html: template}).then((function(view) {
          view.detectChanges();
          expect(DOM.getText(view.rootNodes[0])).toEqual('');
          view.context.switchValue = 'a';
          view.detectChanges();
          expect(DOM.getText(view.rootNodes[0])).toEqual('when a');
          view.context.switchValue = 'b';
          view.detectChanges();
          expect(DOM.getText(view.rootNodes[0])).toEqual('when b');
          async.done();
        }));
      })));
      it('should switch amongst when values with fallback to default', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
        var template = '<div>' + '<ul [switch]="switchValue">' + '<li template="switch-when \'a\'">when a</li>' + '<li template="switch-default">when default</li>' + '</ul></div>';
        tb.createView(TestComponent, {html: template}).then((function(view) {
          view.detectChanges();
          expect(DOM.getText(view.rootNodes[0])).toEqual('when default');
          view.context.switchValue = 'a';
          view.detectChanges();
          expect(DOM.getText(view.rootNodes[0])).toEqual('when a');
          view.context.switchValue = 'b';
          view.detectChanges();
          expect(DOM.getText(view.rootNodes[0])).toEqual('when default');
          async.done();
        }));
      })));
      it('should support multiple whens with the same value', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
        var template = '<div>' + '<ul [switch]="switchValue">' + '<template [switch-when]="\'a\'"><li>when a1;</li></template>' + '<template [switch-when]="\'b\'"><li>when b1;</li></template>' + '<template [switch-when]="\'a\'"><li>when a2;</li></template>' + '<template [switch-when]="\'b\'"><li>when b2;</li></template>' + '<template [switch-default]><li>when default1;</li></template>' + '<template [switch-default]><li>when default2;</li></template>' + '</ul></div>';
        tb.createView(TestComponent, {html: template}).then((function(view) {
          view.detectChanges();
          expect(DOM.getText(view.rootNodes[0])).toEqual('when default1;when default2;');
          view.context.switchValue = 'a';
          view.detectChanges();
          expect(DOM.getText(view.rootNodes[0])).toEqual('when a1;when a2;');
          view.context.switchValue = 'b';
          view.detectChanges();
          expect(DOM.getText(view.rootNodes[0])).toEqual('when b1;when b2;');
          async.done();
        }));
      })));
    }));
    describe('when values changes', (function() {
      it('should switch amongst when values', inject([TestBed, AsyncTestCompleter], (function(tb, async) {
        var template = '<div>' + '<ul [switch]="switchValue">' + '<template [switch-when]="when1"><li>when 1;</li></template>' + '<template [switch-when]="when2"><li>when 2;</li></template>' + '<template [switch-default]><li>when default;</li></template>' + '</ul></div>';
        tb.createView(TestComponent, {html: template}).then((function(view) {
          view.context.when1 = 'a';
          view.context.when2 = 'b';
          view.context.switchValue = 'a';
          view.detectChanges();
          expect(DOM.getText(view.rootNodes[0])).toEqual('when 1;');
          view.context.switchValue = 'b';
          view.detectChanges();
          expect(DOM.getText(view.rootNodes[0])).toEqual('when 2;');
          view.context.switchValue = 'c';
          view.detectChanges();
          expect(DOM.getText(view.rootNodes[0])).toEqual('when default;');
          view.context.when1 = 'c';
          view.detectChanges();
          expect(DOM.getText(view.rootNodes[0])).toEqual('when 1;');
          view.context.when1 = 'd';
          view.detectChanges();
          expect(DOM.getText(view.rootNodes[0])).toEqual('when default;');
          async.done();
        }));
      })));
    }));
  }));
}
var TestComponent = function TestComponent() {
  this.switchValue = null;
  this.when1 = null;
  this.when2 = null;
};
($traceurRuntime.createClass)(TestComponent, {}, {});
Object.defineProperty(TestComponent, "annotations", {get: function() {
    return [new Component({selector: 'test-cmp'}), new View({directives: [Switch, SwitchWhen, SwitchDefault]})];
  }});
//# sourceMappingURL=switch_spec.js.map

//# sourceMappingURL=./switch_spec.map
 main();