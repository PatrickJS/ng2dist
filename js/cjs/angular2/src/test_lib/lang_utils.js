"use strict";
Object.defineProperties(module.exports, {
  getTypeOf: {get: function() {
      return getTypeOf;
    }},
  instantiateType: {get: function() {
      return instantiateType;
    }},
  __esModule: {value: true}
});
function getTypeOf(instance) {
  return instance.constructor;
}
function instantiateType(type) {
  var params = arguments[1] !== (void 0) ? arguments[1] : [];
  var instance = Object.create(type.prototype);
  instance.constructor.apply(instance, params);
  return instance;
}
Object.defineProperty(instantiateType, "parameters", {get: function() {
    return [[Function], [Array]];
  }});
//# sourceMappingURL=lang_utils.es6.map

//# sourceMappingURL=./lang_utils.map