"use strict";
Object.defineProperties(module.exports, {
  NO_CHANGE: {get: function() {
      return NO_CHANGE;
    }},
  Pipe: {get: function() {
      return Pipe;
    }},
  __esModule: {value: true}
});
var NO_CHANGE = new Object();
var Pipe = function Pipe() {
  ;
};
($traceurRuntime.createClass)(Pipe, {
  supports: function(obj) {
    return false;
  },
  onDestroy: function() {},
  transform: function(value) {
    return null;
  }
}, {});
Object.defineProperty(Pipe.prototype.transform, "parameters", {get: function() {
    return [[$traceurRuntime.type.any]];
  }});
//# sourceMappingURL=pipe.js.map

//# sourceMappingURL=./pipe.map