import {assert} from "rtts_assert/rtts_assert";
export function getTypeOf(instance) {
  return instance.constructor;
}
export function instantiateType(type, params = []) {
  assert.argumentTypes(type, Function, params, Array);
  var instance = Object.create(type.prototype);
  instance.constructor.apply(instance, params);
  return instance;
}
Object.defineProperty(instantiateType, "parameters", {get: function() {
    return [[Function], [Array]];
  }});
//# sourceMappingURL=lang_utils.es6.map

//# sourceMappingURL=./lang_utils.map