"use strict";
Object.defineProperties(module.exports, {
  defaultPipes: {get: function() {
      return defaultPipes;
    }},
  DynamicChangeDetection: {get: function() {
      return DynamicChangeDetection;
    }},
  JitChangeDetection: {get: function() {
      return JitChangeDetection;
    }},
  dynamicChangeDetection: {get: function() {
      return dynamicChangeDetection;
    }},
  jitChangeDetection: {get: function() {
      return jitChangeDetection;
    }},
  __esModule: {value: true}
});
var $__proto_95_change_95_detector__,
    $__pipes_47_pipe_95_registry__,
    $__pipes_47_iterable_95_changes__,
    $__pipes_47_keyvalue_95_changes__,
    $__pipes_47_null_95_pipe__,
    $__constants__,
    $__interfaces__,
    $__pipes_47_pipe__;
var $__0 = ($__proto_95_change_95_detector__ = require("./proto_change_detector"), $__proto_95_change_95_detector__ && $__proto_95_change_95_detector__.__esModule && $__proto_95_change_95_detector__ || {default: $__proto_95_change_95_detector__}),
    DynamicProtoChangeDetector = $__0.DynamicProtoChangeDetector,
    JitProtoChangeDetector = $__0.JitProtoChangeDetector;
var PipeRegistry = ($__pipes_47_pipe_95_registry__ = require("./pipes/pipe_registry"), $__pipes_47_pipe_95_registry__ && $__pipes_47_pipe_95_registry__.__esModule && $__pipes_47_pipe_95_registry__ || {default: $__pipes_47_pipe_95_registry__}).PipeRegistry;
var IterableChangesFactory = ($__pipes_47_iterable_95_changes__ = require("./pipes/iterable_changes"), $__pipes_47_iterable_95_changes__ && $__pipes_47_iterable_95_changes__.__esModule && $__pipes_47_iterable_95_changes__ || {default: $__pipes_47_iterable_95_changes__}).IterableChangesFactory;
var KeyValueChangesFactory = ($__pipes_47_keyvalue_95_changes__ = require("./pipes/keyvalue_changes"), $__pipes_47_keyvalue_95_changes__ && $__pipes_47_keyvalue_95_changes__.__esModule && $__pipes_47_keyvalue_95_changes__ || {default: $__pipes_47_keyvalue_95_changes__}).KeyValueChangesFactory;
var NullPipeFactory = ($__pipes_47_null_95_pipe__ = require("./pipes/null_pipe"), $__pipes_47_null_95_pipe__ && $__pipes_47_null_95_pipe__.__esModule && $__pipes_47_null_95_pipe__ || {default: $__pipes_47_null_95_pipe__}).NullPipeFactory;
var DEFAULT = ($__constants__ = require("./constants"), $__constants__ && $__constants__.__esModule && $__constants__ || {default: $__constants__}).DEFAULT;
var $__6 = ($__interfaces__ = require("./interfaces"), $__interfaces__ && $__interfaces__.__esModule && $__interfaces__ || {default: $__interfaces__}),
    ChangeDetection = $__6.ChangeDetection,
    ProtoChangeDetector = $__6.ProtoChangeDetector;
var $__7 = ($__pipes_47_pipe__ = require("./pipes/pipe"), $__pipes_47_pipe__ && $__pipes_47_pipe__.__esModule && $__pipes_47_pipe__ || {default: $__pipes_47_pipe__}),
    Pipe = $__7.Pipe,
    NO_CHANGE = $__7.NO_CHANGE;
var AsyncPipe = function AsyncPipe() {
  $traceurRuntime.superConstructor($AsyncPipe).call(this);
  this.observable = null;
  this.latestValue = null;
};
var $AsyncPipe = AsyncPipe;
($traceurRuntime.createClass)(AsyncPipe, {
  supports: function(obj) {
    return this.observable === obj;
  },
  onDestroy: function() {
    if (this.subscription && this.subscription.dispose) {
      this.subscription.dispose();
    } else if (this.dispose) {
      this.dispose();
    }
  },
  transform: function(value) {
    var $__8 = this;
    if (!this.subscription) {
      this.observable = value;
      this.subscription = value.subscribe((function(x) {
        $__8.latestValue = x;
      }), (function(e) {
        throw e;
      }));
    }
    if (this.latestReturnedValue !== this.latestValue) {
      this.latestReturnedValue = this.latestValue;
      return this.latestValue;
    } else {
      return NO_CHANGE;
    }
  }
}, {}, Pipe);
var defaultPipes = {
  "iterableDiff": [new IterableChangesFactory(), new NullPipeFactory()],
  "keyValDiff": [new KeyValueChangesFactory(), new NullPipeFactory()],
  "async": [{
    supports: (function(obj) {
      return obj && obj.subscribe !== undefined;
    }),
    create: (function() {
      return new AsyncPipe();
    })
  }]
};
var DynamicChangeDetection = function DynamicChangeDetection(registry) {
  $traceurRuntime.superConstructor($DynamicChangeDetection).call(this);
  this.registry = registry;
};
var $DynamicChangeDetection = DynamicChangeDetection;
($traceurRuntime.createClass)(DynamicChangeDetection, {createProtoChangeDetector: function(name) {
    var changeControlStrategy = arguments[1] !== (void 0) ? arguments[1] : DEFAULT;
    return new DynamicProtoChangeDetector(this.registry, changeControlStrategy);
  }}, {}, ChangeDetection);
Object.defineProperty(DynamicChangeDetection, "parameters", {get: function() {
    return [[PipeRegistry]];
  }});
Object.defineProperty(DynamicChangeDetection.prototype.createProtoChangeDetector, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [$traceurRuntime.type.string]];
  }});
var JitChangeDetection = function JitChangeDetection(registry) {
  $traceurRuntime.superConstructor($JitChangeDetection).call(this);
  this.registry = registry;
};
var $JitChangeDetection = JitChangeDetection;
($traceurRuntime.createClass)(JitChangeDetection, {createProtoChangeDetector: function(name) {
    var changeControlStrategy = arguments[1] !== (void 0) ? arguments[1] : DEFAULT;
    return new JitProtoChangeDetector(this.registry, changeControlStrategy);
  }}, {}, ChangeDetection);
Object.defineProperty(JitChangeDetection, "parameters", {get: function() {
    return [[PipeRegistry]];
  }});
Object.defineProperty(JitChangeDetection.prototype.createProtoChangeDetector, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [$traceurRuntime.type.string]];
  }});
var _registry = new PipeRegistry(defaultPipes);
var dynamicChangeDetection = new DynamicChangeDetection(_registry);
var jitChangeDetection = new JitChangeDetection(_registry);
//# sourceMappingURL=change_detection.js.map

//# sourceMappingURL=./change_detection.map