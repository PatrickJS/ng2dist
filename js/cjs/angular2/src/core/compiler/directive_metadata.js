"use strict";
Object.defineProperties(module.exports, {
  DirectiveMetadata: {get: function() {
      return DirectiveMetadata;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_core_47_annotations_47_annotations__,
    $__angular2_47_di__;
var Type = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).Type;
var List = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).List;
var Directive = ($__angular2_47_src_47_core_47_annotations_47_annotations__ = require("angular2/src/core/annotations/annotations"), $__angular2_47_src_47_core_47_annotations_47_annotations__ && $__angular2_47_src_47_core_47_annotations_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_47_annotations__}).Directive;
var ResolvedBinding = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}).ResolvedBinding;
var DirectiveMetadata = function DirectiveMetadata(type, annotation, resolvedInjectables) {
  this.annotation = annotation;
  this.type = type;
  this.resolvedInjectables = resolvedInjectables;
};
($traceurRuntime.createClass)(DirectiveMetadata, {}, {});
Object.defineProperty(DirectiveMetadata, "parameters", {get: function() {
    return [[Type], [Directive], [$traceurRuntime.genericType(List, ResolvedBinding)]];
  }});
//# sourceMappingURL=directive_metadata.js.map

//# sourceMappingURL=./directive_metadata.map