"use strict";
Object.defineProperties(module.exports, {
  NonBindable: {get: function() {
      return NonBindable;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_core_47_annotations_47_annotations__;
var Decorator = ($__angular2_47_src_47_core_47_annotations_47_annotations__ = require("angular2/src/core/annotations/annotations"), $__angular2_47_src_47_core_47_annotations_47_annotations__ && $__angular2_47_src_47_core_47_annotations_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_47_annotations__}).Decorator;
var NonBindable = function NonBindable() {
  ;
};
($traceurRuntime.createClass)(NonBindable, {}, {});
Object.defineProperty(NonBindable, "annotations", {get: function() {
    return [new Decorator({
      selector: '[non-bindable]',
      compileChildren: false
    })];
  }});
//# sourceMappingURL=non_bindable.js.map

//# sourceMappingURL=./non_bindable.map