"use strict";
Object.defineProperties(module.exports, {
  RenderProtoView: {get: function() {
      return RenderProtoView;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_facade_47_collection__,
    $__element_95_binder__,
    $___46__46__47_util__;
var isPresent = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).isPresent;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__2.List,
    Map = $__2.Map,
    ListWrapper = $__2.ListWrapper,
    MapWrapper = $__2.MapWrapper;
var ElementBinder = ($__element_95_binder__ = require("./element_binder"), $__element_95_binder__ && $__element_95_binder__.__esModule && $__element_95_binder__ || {default: $__element_95_binder__}).ElementBinder;
var NG_BINDING_CLASS = ($___46__46__47_util__ = require("../util"), $___46__46__47_util__ && $___46__46__47_util__.__esModule && $___46__46__47_util__ || {default: $___46__46__47_util__}).NG_BINDING_CLASS;
var RenderProtoView = function RenderProtoView($__6) {
  var $__7 = $__6,
      elementBinders = $__7.elementBinders,
      element = $__7.element,
      isRootView = $__7.isRootView;
  this.element = element;
  this.elementBinders = elementBinders;
  this.isTemplateElement = DOM.isTemplateElement(this.element);
  this.isRootView = isRootView;
  this.rootBindingOffset = (isPresent(this.element) && DOM.hasClass(this.element, NG_BINDING_CLASS)) ? 1 : 0;
};
var $RenderProtoView = RenderProtoView;
($traceurRuntime.createClass)(RenderProtoView, {mergeChildComponentProtoViews: function(componentProtoViews) {
    var componentProtoViewIndex = 0;
    for (var i = 0; i < this.elementBinders.length; i++) {
      var eb = this.elementBinders[i];
      if (isPresent(eb.componentId)) {
        eb.nestedProtoView = componentProtoViews[componentProtoViewIndex];
        componentProtoViewIndex++;
      }
    }
  }}, {});
Object.defineProperty(RenderProtoView.prototype.mergeChildComponentProtoViews, "parameters", {get: function() {
    return [[$traceurRuntime.genericType(List, RenderProtoView)]];
  }});
//# sourceMappingURL=proto_view.js.map

//# sourceMappingURL=./proto_view.map