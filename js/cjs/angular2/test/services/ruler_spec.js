'use strict'; var parse5Adapter = require('angular2/src/dom/parse5_adapter'); parse5Adapter.Parse5DomAdapter.makeCurrent();
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_core_47_compiler_47_ng_95_element__,
    $__angular2_47_src_47_services_47_ruler__,
    $__rectangle_95_mock__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    AsyncTestCompleter = $__0.AsyncTestCompleter,
    inject = $__0.inject,
    ddescribe = $__0.ddescribe,
    describe = $__0.describe,
    it = $__0.it,
    iit = $__0.iit,
    xit = $__0.xit,
    expect = $__0.expect,
    SpyObject = $__0.SpyObject;
var $__1 = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}),
    DOM = $__1.DOM,
    DomAdapter = $__1.DomAdapter;
var NgElement = ($__angular2_47_src_47_core_47_compiler_47_ng_95_element__ = require("angular2/src/core/compiler/ng_element"), $__angular2_47_src_47_core_47_compiler_47_ng_95_element__ && $__angular2_47_src_47_core_47_compiler_47_ng_95_element__.__esModule && $__angular2_47_src_47_core_47_compiler_47_ng_95_element__ || {default: $__angular2_47_src_47_core_47_compiler_47_ng_95_element__}).NgElement;
var $__3 = ($__angular2_47_src_47_services_47_ruler__ = require("angular2/src/services/ruler"), $__angular2_47_src_47_services_47_ruler__ && $__angular2_47_src_47_services_47_ruler__.__esModule && $__angular2_47_src_47_services_47_ruler__ || {default: $__angular2_47_src_47_services_47_ruler__}),
    Ruler = $__3.Ruler,
    Rectangle = $__3.Rectangle;
var createRectangle = ($__rectangle_95_mock__ = require("./rectangle_mock"), $__rectangle_95_mock__ && $__rectangle_95_mock__.__esModule && $__rectangle_95_mock__ || {default: $__rectangle_95_mock__}).createRectangle;
var DomAdapterMock = function DomAdapterMock(rect) {
  $traceurRuntime.superConstructor($DomAdapterMock).call(this);
  this.rect = rect;
};
var $DomAdapterMock = DomAdapterMock;
($traceurRuntime.createClass)(DomAdapterMock, {getBoundingClientRect: function(elm) {
    return this.rect;
  }}, {}, DomAdapter);
function assertDimensions(rect, left, right, top, bottom, width, height) {
  expect(rect.left).toEqual(left);
  expect(rect.right).toEqual(right);
  expect(rect.top).toEqual(top);
  expect(rect.bottom).toEqual(bottom);
  expect(rect.width).toEqual(width);
  expect(rect.height).toEqual(height);
}
Object.defineProperty(assertDimensions, "parameters", {get: function() {
    return [[Rectangle], [], [], [], [], [], []];
  }});
function main() {
  describe('ruler service', (function() {
    it('should allow measuring NgElements', inject([AsyncTestCompleter], (function(async) {
      var ruler = new Ruler(new DomAdapterMock(createRectangle(10, 20, 200, 100)));
      ruler.measure(new FakeNgElement(null)).then((function(rect) {
        assertDimensions(rect, 10, 210, 20, 120, 200, 100);
        async.done();
      }));
    })));
    it('should return 0 for all rectangle values while measuring elements in a document fragment', inject([AsyncTestCompleter], (function(async) {
      var ruler = new Ruler(DOM);
      ruler.measure(new FakeNgElement(DOM.createElement('div'))).then((function(rect) {
        assertDimensions(rect, 0, 0, 0, 0, 0, 0);
        async.done();
      }));
    })));
  }));
}
var FakeNgElement = function FakeNgElement(domElement) {
  $traceurRuntime.superConstructor($FakeNgElement).call(this, null, null);
  this._domElement = domElement;
};
var $FakeNgElement = FakeNgElement;
($traceurRuntime.createClass)(FakeNgElement, {get domElement() {
    return this._domElement;
  }}, {}, NgElement);
//# sourceMappingURL=ruler_spec.js.map

//# sourceMappingURL=./ruler_spec.map
 main();