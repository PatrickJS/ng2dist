'use strict'; var parse5Adapter = require('angular2/src/dom/parse5_adapter'); parse5Adapter.Parse5DomAdapter.makeCurrent();
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_render_47_dom_47_view_47_property_95_setter_95_factory__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    describe = $__0.describe,
    ddescribe = $__0.ddescribe,
    it = $__0.it,
    iit = $__0.iit,
    xit = $__0.xit,
    xdescribe = $__0.xdescribe,
    expect = $__0.expect,
    beforeEach = $__0.beforeEach,
    el = $__0.el;
var setterFactory = ($__angular2_47_src_47_render_47_dom_47_view_47_property_95_setter_95_factory__ = require("angular2/src/render/dom/view/property_setter_factory"), $__angular2_47_src_47_render_47_dom_47_view_47_property_95_setter_95_factory__ && $__angular2_47_src_47_render_47_dom_47_view_47_property_95_setter_95_factory__.__esModule && $__angular2_47_src_47_render_47_dom_47_view_47_property_95_setter_95_factory__ || {default: $__angular2_47_src_47_render_47_dom_47_view_47_property_95_setter_95_factory__}).setterFactory;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
function main() {
  var div;
  beforeEach((function() {
    div = el('<div></div>');
  }));
  describe('property setter factory', (function() {
    it('should return a setter for a property', (function() {
      var setterFn = setterFactory('title');
      setterFn(div, 'Hello');
      expect(div.title).toEqual('Hello');
      var otherSetterFn = setterFactory('title');
      expect(setterFn).toBe(otherSetterFn);
    }));
    it('should return a setter for an attribute', (function() {
      var setterFn = setterFactory('attr.role');
      setterFn(div, 'button');
      expect(DOM.getAttribute(div, 'role')).toEqual('button');
      setterFn(div, null);
      expect(DOM.getAttribute(div, 'role')).toEqual(null);
      expect((function() {
        setterFn(div, 4);
      })).toThrowError("Invalid role attribute, only string values are allowed, got '4'");
      var otherSetterFn = setterFactory('attr.role');
      expect(setterFn).toBe(otherSetterFn);
    }));
    it('should return a setter for a class', (function() {
      var setterFn = setterFactory('class.active');
      setterFn(div, true);
      expect(DOM.hasClass(div, 'active')).toEqual(true);
      setterFn(div, false);
      expect(DOM.hasClass(div, 'active')).toEqual(false);
      var otherSetterFn = setterFactory('class.active');
      expect(setterFn).toBe(otherSetterFn);
    }));
    it('should return a setter for a style', (function() {
      var setterFn = setterFactory('style.width');
      setterFn(div, '40px');
      expect(DOM.getStyle(div, 'width')).toEqual('40px');
      setterFn(div, null);
      expect(DOM.getStyle(div, 'width')).toEqual('');
      var otherSetterFn = setterFactory('style.width');
      expect(setterFn).toBe(otherSetterFn);
    }));
    it('should return a setter for a style with a unit', (function() {
      var setterFn = setterFactory('style.height.px');
      setterFn(div, 40);
      expect(DOM.getStyle(div, 'height')).toEqual('40px');
      setterFn(div, null);
      expect(DOM.getStyle(div, 'height')).toEqual('');
      var otherSetterFn = setterFactory('style.height.px');
      expect(setterFn).toBe(otherSetterFn);
    }));
    it('should return a setter for innerHtml', (function() {
      var setterFn = setterFactory('innerHtml');
      setterFn(div, '<span></span>');
      expect(DOM.getInnerHTML(div)).toEqual('<span></span>');
      var otherSetterFn = setterFactory('innerHtml');
      expect(setterFn).toBe(otherSetterFn);
    }));
  }));
}
//# sourceMappingURL=property_setter_factory_spec.js.map

//# sourceMappingURL=./property_setter_factory_spec.map
 main();