"use strict";
Object.defineProperties(module.exports, {
  DirectiveMetadataReader: {get: function() {
      return DirectiveMetadataReader;
    }},
  __esModule: {value: true}
});
var $__angular2_47_di__,
    $__angular2_47_src_47_facade_47_lang__,
    $___46__46__47_annotations_47_annotations__,
    $__directive_95_metadata__,
    $__angular2_47_src_47_reflection_47_reflection__;
var $__0 = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}),
    Injectable = $__0.Injectable,
    Injector = $__0.Injector;
var $__1 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    Type = $__1.Type,
    isPresent = $__1.isPresent,
    BaseException = $__1.BaseException,
    stringify = $__1.stringify;
var $__2 = ($___46__46__47_annotations_47_annotations__ = require("../annotations/annotations"), $___46__46__47_annotations_47_annotations__ && $___46__46__47_annotations_47_annotations__.__esModule && $___46__46__47_annotations_47_annotations__ || {default: $___46__46__47_annotations_47_annotations__}),
    Directive = $__2.Directive,
    Component = $__2.Component;
var DirectiveMetadata = ($__directive_95_metadata__ = require("./directive_metadata"), $__directive_95_metadata__ && $__directive_95_metadata__.__esModule && $__directive_95_metadata__ || {default: $__directive_95_metadata__}).DirectiveMetadata;
var reflector = ($__angular2_47_src_47_reflection_47_reflection__ = require("angular2/src/reflection/reflection"), $__angular2_47_src_47_reflection_47_reflection__ && $__angular2_47_src_47_reflection_47_reflection__.__esModule && $__angular2_47_src_47_reflection_47_reflection__ || {default: $__angular2_47_src_47_reflection_47_reflection__}).reflector;
var DirectiveMetadataReader = function DirectiveMetadataReader() {
  ;
};
($traceurRuntime.createClass)(DirectiveMetadataReader, {read: function(type) {
    var annotations = reflector.annotations(type);
    if (isPresent(annotations)) {
      for (var i = 0; i < annotations.length; i++) {
        var annotation = annotations[i];
        if (annotation instanceof Directive) {
          var resolvedInjectables = null;
          if (annotation instanceof Component && isPresent(annotation.injectables)) {
            resolvedInjectables = Injector.resolve(annotation.injectables);
          }
          return new DirectiveMetadata(type, annotation, resolvedInjectables);
        }
      }
    }
    throw new BaseException(("No Directive annotation found on " + stringify(type)));
  }}, {});
Object.defineProperty(DirectiveMetadataReader, "annotations", {get: function() {
    return [new Injectable()];
  }});
Object.defineProperty(DirectiveMetadataReader.prototype.read, "parameters", {get: function() {
    return [[Type]];
  }});
//# sourceMappingURL=directive_metadata_reader.js.map

//# sourceMappingURL=./directive_metadata_reader.map