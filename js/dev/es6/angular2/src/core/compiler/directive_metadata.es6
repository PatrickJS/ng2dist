import {assert} from "rtts_assert/rtts_assert";
import {Type} from 'angular2/src/facade/lang';
import {List} from 'angular2/src/facade/collection';
import {Directive} from 'angular2/src/core/annotations/annotations';
import {ResolvedBinding} from 'angular2/di';
export class DirectiveMetadata {
  constructor(type, annotation, resolvedInjectables) {
    assert.argumentTypes(type, Type, annotation, Directive, resolvedInjectables, assert.genericType(List, ResolvedBinding));
    this.annotation = annotation;
    this.type = type;
    this.resolvedInjectables = resolvedInjectables;
  }
}
Object.defineProperty(DirectiveMetadata, "parameters", {get: function() {
    return [[Type], [Directive], [assert.genericType(List, ResolvedBinding)]];
  }});
//# sourceMappingURL=directive_metadata.js.map

//# sourceMappingURL=./directive_metadata.map