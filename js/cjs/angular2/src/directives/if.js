"use strict";
Object.defineProperties(module.exports, {
  If: {get: function() {
      return If;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_core_47_annotations_47_annotations__,
    $__angular2_47_src_47_core_47_compiler_47_view_95_container__,
    $__angular2_47_src_47_facade_47_lang__;
var Viewport = ($__angular2_47_src_47_core_47_annotations_47_annotations__ = require("angular2/src/core/annotations/annotations"), $__angular2_47_src_47_core_47_annotations_47_annotations__ && $__angular2_47_src_47_core_47_annotations_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_47_annotations__}).Viewport;
var ViewContainer = ($__angular2_47_src_47_core_47_compiler_47_view_95_container__ = require("angular2/src/core/compiler/view_container"), $__angular2_47_src_47_core_47_compiler_47_view_95_container__ && $__angular2_47_src_47_core_47_compiler_47_view_95_container__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view_95_container__ || {default: $__angular2_47_src_47_core_47_compiler_47_view_95_container__}).ViewContainer;
var isBlank = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).isBlank;
var If = function If(viewContainer) {
  this.viewContainer = viewContainer;
  this.prevCondition = null;
};
($traceurRuntime.createClass)(If, {set condition(newCondition) {
    if (newCondition && (isBlank(this.prevCondition) || !this.prevCondition)) {
      this.prevCondition = true;
      this.viewContainer.create();
    } else if (!newCondition && (isBlank(this.prevCondition) || this.prevCondition)) {
      this.prevCondition = false;
      this.viewContainer.clear();
    }
  }}, {});
Object.defineProperty(If, "annotations", {get: function() {
    return [new Viewport({
      selector: '[if]',
      properties: {'condition': 'if'}
    })];
  }});
Object.defineProperty(If, "parameters", {get: function() {
    return [[ViewContainer]];
  }});
//# sourceMappingURL=if.js.map

//# sourceMappingURL=./if.map