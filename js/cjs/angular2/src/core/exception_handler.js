"use strict";
Object.defineProperties(module.exports, {
  ExceptionHandler: {get: function() {
      return ExceptionHandler;
    }},
  __esModule: {value: true}
});
var $__angular2_47_di__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__;
var Injectable = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}).Injectable;
var $__1 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isPresent = $__1.isPresent,
    print = $__1.print;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    ListWrapper = $__2.ListWrapper,
    isListLikeIterable = $__2.isListLikeIterable;
var ExceptionHandler = function ExceptionHandler() {
  ;
};
($traceurRuntime.createClass)(ExceptionHandler, {call: function(error) {
    var stackTrace = arguments[1] !== (void 0) ? arguments[1] : null;
    var reason = arguments[2] !== (void 0) ? arguments[2] : null;
    var longStackTrace = isListLikeIterable(stackTrace) ? ListWrapper.join(stackTrace, "\n\n") : stackTrace;
    var reasonStr = isPresent(reason) ? ("\n" + reason) : '';
    print(("" + error + reasonStr + "\nSTACKTRACE:\n" + longStackTrace));
  }}, {});
Object.defineProperty(ExceptionHandler, "annotations", {get: function() {
    return [new Injectable()];
  }});
//# sourceMappingURL=exception_handler.js.map

//# sourceMappingURL=./exception_handler.map