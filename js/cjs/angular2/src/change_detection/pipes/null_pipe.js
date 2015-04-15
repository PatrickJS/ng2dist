"use strict";
Object.defineProperties(module.exports, {
  NullPipeFactory: {get: function() {
      return NullPipeFactory;
    }},
  NullPipe: {get: function() {
      return NullPipe;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_lang__,
    $__pipe__;
var isBlank = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).isBlank;
var $__1 = ($__pipe__ = require("./pipe"), $__pipe__ && $__pipe__.__esModule && $__pipe__ || {default: $__pipe__}),
    Pipe = $__1.Pipe,
    NO_CHANGE = $__1.NO_CHANGE;
var NullPipeFactory = function NullPipeFactory() {
  ;
};
($traceurRuntime.createClass)(NullPipeFactory, {
  supports: function(obj) {
    return NullPipe.supportsObj(obj);
  },
  create: function(bpc) {
    return new NullPipe();
  }
}, {});
var NullPipe = function NullPipe() {
  $traceurRuntime.superConstructor($NullPipe).call(this);
  this.called = false;
};
var $NullPipe = NullPipe;
($traceurRuntime.createClass)(NullPipe, {
  supports: function(obj) {
    return $NullPipe.supportsObj(obj);
  },
  transform: function(value) {
    if (!this.called) {
      this.called = true;
      return null;
    } else {
      return NO_CHANGE;
    }
  }
}, {supportsObj: function(obj) {
    return isBlank(obj);
  }}, Pipe);
//# sourceMappingURL=null_pipe.js.map

//# sourceMappingURL=./null_pipe.map