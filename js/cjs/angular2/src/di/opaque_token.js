"use strict";
Object.defineProperties(module.exports, {
  OpaqueToken: {get: function() {
      return OpaqueToken;
    }},
  __esModule: {value: true}
});
var OpaqueToken = function OpaqueToken(desc) {
  this._desc = ("Token(" + desc + ")");
};
($traceurRuntime.createClass)(OpaqueToken, {toString: function() {
    return this._desc;
  }}, {});
Object.defineProperty(OpaqueToken, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
//# sourceMappingURL=opaque_token.js.map

//# sourceMappingURL=./opaque_token.map