"use strict";
Object.defineProperties(module.exports, {
  QueryList: {get: function() {
      return QueryList;
    }},
  __esModule: {value: true}
});
var $__base_95_query_95_list__;
var BaseQueryList = ($__base_95_query_95_list__ = require("./base_query_list"), $__base_95_query_95_list__ && $__base_95_query_95_list__.__esModule && $__base_95_query_95_list__ || {default: $__base_95_query_95_list__}).BaseQueryList;
var QueryList = function QueryList() {
  $traceurRuntime.superConstructor($QueryList).apply(this, arguments);
  ;
};
var $QueryList = QueryList;
($traceurRuntime.createClass)(QueryList, {
  onChange: function(callback) {
    return $traceurRuntime.superGet(this, $QueryList.prototype, "onChange").call(this, callback);
  },
  removeCallback: function(callback) {
    return $traceurRuntime.superGet(this, $QueryList.prototype, "removeCallback").call(this, callback);
  }
}, {}, BaseQueryList);
//# sourceMappingURL=query_list.js.map

//# sourceMappingURL=./query_list.map