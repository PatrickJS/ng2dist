import {assert} from "rtts_assert/rtts_assert";
import {Injectable} from 'angular2/di';
import {View} from 'angular2/src/core/annotations/view';
import {Type,
  stringify,
  isBlank,
  BaseException} from 'angular2/src/facade/lang';
import {Map,
  MapWrapper,
  List,
  ListWrapper} from 'angular2/src/facade/collection';
import {reflector} from 'angular2/src/reflection/reflection';
export class TemplateResolver {
  constructor() {
    this._cache = MapWrapper.create();
  }
  resolve(component) {
    assert.argumentTypes(component, Type);
    var view = MapWrapper.get(this._cache, component);
    if (isBlank(view)) {
      view = this._resolve(component);
      MapWrapper.set(this._cache, component, view);
    }
    return assert.returnType((view), View);
  }
  _resolve(component) {
    assert.argumentTypes(component, Type);
    var annotations = reflector.annotations(component);
    for (var i = 0; i < annotations.length; i++) {
      var annotation = annotations[i];
      if (annotation instanceof View) {
        return annotation;
      }
    }
    throw new BaseException(`No template found for ${stringify(component)}`);
  }
}
Object.defineProperty(TemplateResolver, "annotations", {get: function() {
    return [new Injectable()];
  }});
Object.defineProperty(TemplateResolver.prototype.resolve, "parameters", {get: function() {
    return [[Type]];
  }});
Object.defineProperty(TemplateResolver.prototype._resolve, "parameters", {get: function() {
    return [[Type]];
  }});
//# sourceMappingURL=template_resolver.js.map

//# sourceMappingURL=./template_resolver.map