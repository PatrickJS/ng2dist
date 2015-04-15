import {assert} from "rtts_assert/rtts_assert";
import {Injectable} from 'angular2/di';
import {Type,
  isPresent} from 'angular2/src/facade/lang';
import {Map,
  MapWrapper} from 'angular2/src/facade/collection';
export class ComponentUrlMapper {
  getUrl(component) {
    assert.argumentTypes(component, Type);
    return assert.returnType(('./'), assert.type.string);
  }
}
Object.defineProperty(ComponentUrlMapper, "annotations", {get: function() {
    return [new Injectable()];
  }});
Object.defineProperty(ComponentUrlMapper.prototype.getUrl, "parameters", {get: function() {
    return [[Type]];
  }});
export class RuntimeComponentUrlMapper extends ComponentUrlMapper {
  constructor() {
    super();
    this._componentUrls = MapWrapper.create();
  }
  setComponentUrl(component, url) {
    assert.argumentTypes(component, Type, url, assert.type.string);
    MapWrapper.set(this._componentUrls, component, url);
  }
  getUrl(component) {
    assert.argumentTypes(component, Type);
    var url = MapWrapper.get(this._componentUrls, component);
    if (isPresent(url))
      return assert.returnType((url), assert.type.string);
    return assert.returnType((super.getUrl(component)), assert.type.string);
  }
}
Object.defineProperty(RuntimeComponentUrlMapper.prototype.setComponentUrl, "parameters", {get: function() {
    return [[Type], [assert.type.string]];
  }});
Object.defineProperty(RuntimeComponentUrlMapper.prototype.getUrl, "parameters", {get: function() {
    return [[Type]];
  }});
//# sourceMappingURL=component_url_mapper.js.map

//# sourceMappingURL=./component_url_mapper.map