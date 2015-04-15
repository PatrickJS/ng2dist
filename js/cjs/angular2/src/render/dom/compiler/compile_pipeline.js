"use strict";
Object.defineProperties(module.exports, {
  CompilePipeline: {get: function() {
      return CompilePipeline;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__compile_95_element__,
    $__compile_95_control__,
    $__compile_95_step__,
    $___46__46__47_view_47_proto_95_view_95_builder__;
var isPresent = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).isPresent;
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__1.List,
    ListWrapper = $__1.ListWrapper;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var CompileElement = ($__compile_95_element__ = require("./compile_element"), $__compile_95_element__ && $__compile_95_element__.__esModule && $__compile_95_element__ || {default: $__compile_95_element__}).CompileElement;
var CompileControl = ($__compile_95_control__ = require("./compile_control"), $__compile_95_control__ && $__compile_95_control__.__esModule && $__compile_95_control__ || {default: $__compile_95_control__}).CompileControl;
var CompileStep = ($__compile_95_step__ = require("./compile_step"), $__compile_95_step__ && $__compile_95_step__.__esModule && $__compile_95_step__ || {default: $__compile_95_step__}).CompileStep;
var ProtoViewBuilder = ($___46__46__47_view_47_proto_95_view_95_builder__ = require("../view/proto_view_builder"), $___46__46__47_view_47_proto_95_view_95_builder__ && $___46__46__47_view_47_proto_95_view_95_builder__.__esModule && $___46__46__47_view_47_proto_95_view_95_builder__ || {default: $___46__46__47_view_47_proto_95_view_95_builder__}).ProtoViewBuilder;
var CompilePipeline = function CompilePipeline(steps) {
  this._control = new CompileControl(steps);
};
($traceurRuntime.createClass)(CompilePipeline, {
  process: function(rootElement) {
    var compilationCtxtDescription = arguments[1] !== (void 0) ? arguments[1] : '';
    var results = ListWrapper.create();
    var rootCompileElement = new CompileElement(rootElement, compilationCtxtDescription);
    rootCompileElement.inheritedProtoView = new ProtoViewBuilder(rootElement);
    rootCompileElement.isViewRoot = true;
    this._process(results, null, rootCompileElement, compilationCtxtDescription);
    return results;
  },
  _process: function(results, parent, current) {
    var compilationCtxtDescription = arguments[3] !== (void 0) ? arguments[3] : '';
    var additionalChildren = this._control.internalProcess(results, 0, parent, current);
    if (current.compileChildren) {
      var node = DOM.firstChild(DOM.templateAwareRoot(current.element));
      while (isPresent(node)) {
        var nextNode = DOM.nextSibling(node);
        if (DOM.isElementNode(node)) {
          var childCompileElement = new CompileElement(node, compilationCtxtDescription);
          childCompileElement.inheritedProtoView = current.inheritedProtoView;
          childCompileElement.inheritedElementBinder = current.inheritedElementBinder;
          childCompileElement.distanceToInheritedBinder = current.distanceToInheritedBinder + 1;
          this._process(results, current, childCompileElement);
        }
        node = nextNode;
      }
    }
    if (isPresent(additionalChildren)) {
      for (var i = 0; i < additionalChildren.length; i++) {
        this._process(results, current, additionalChildren[i]);
      }
    }
  }
}, {});
Object.defineProperty(CompilePipeline, "parameters", {get: function() {
    return [[$traceurRuntime.genericType(List, CompileStep)]];
  }});
Object.defineProperty(CompilePipeline.prototype.process, "parameters", {get: function() {
    return [[], [$traceurRuntime.type.string]];
  }});
Object.defineProperty(CompilePipeline.prototype._process, "parameters", {get: function() {
    return [[], [CompileElement], [CompileElement], [$traceurRuntime.type.string]];
  }});
//# sourceMappingURL=compile_pipeline.js.map

//# sourceMappingURL=./compile_pipeline.map