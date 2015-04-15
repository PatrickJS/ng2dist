'use strict'; var parse5Adapter = require('angular2/src/dom/parse5_adapter'); parse5Adapter.Parse5DomAdapter.makeCurrent();
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe_95_registry__,
    $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    ddescribe = $__0.ddescribe,
    describe = $__0.describe,
    it = $__0.it,
    iit = $__0.iit,
    xit = $__0.xit,
    expect = $__0.expect,
    beforeEach = $__0.beforeEach,
    afterEach = $__0.afterEach;
var PipeRegistry = ($__angular2_47_src_47_change_95_detection_47_pipes_47_pipe_95_registry__ = require("angular2/src/change_detection/pipes/pipe_registry"), $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe_95_registry__ && $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe_95_registry__.__esModule && $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe_95_registry__ || {default: $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe_95_registry__}).PipeRegistry;
var Pipe = ($__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__ = require("angular2/src/change_detection/pipes/pipe"), $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__ && $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__.__esModule && $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__ || {default: $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__}).Pipe;
function main() {
  describe("pipe registry", (function() {
    var firstPipe = new Pipe();
    var secondPipe = new Pipe();
    it("should return the first pipe supporting the data type", (function() {
      var r = new PipeRegistry({"type": [new PipeFactory(false, firstPipe), new PipeFactory(true, secondPipe)]});
      expect(r.get("type", "some object", null)).toBe(secondPipe);
    }));
    it("should throw when no matching type", (function() {
      var r = new PipeRegistry({});
      expect((function() {
        return r.get("unknown", "some object", null);
      })).toThrowError("Cannot find a pipe for type 'unknown' object 'some object'");
    }));
    it("should throw when no matching pipe", (function() {
      var r = new PipeRegistry({"type": []});
      expect((function() {
        return r.get("type", "some object", null);
      })).toThrowError("Cannot find a pipe for type 'type' object 'some object'");
    }));
  }));
}
var PipeFactory = function PipeFactory(shouldSupport, pipe) {
  this.shouldSupport = shouldSupport;
  this.pipe = pipe;
};
($traceurRuntime.createClass)(PipeFactory, {
  supports: function(obj) {
    return this.shouldSupport;
  },
  create: function(bpc) {
    return this.pipe;
  }
}, {});
Object.defineProperty(PipeFactory, "parameters", {get: function() {
    return [[$traceurRuntime.type.boolean], [$traceurRuntime.type.any]];
  }});
//# sourceMappingURL=pipe_registry_spec.js.map

//# sourceMappingURL=./pipe_registry_spec.map
 main();