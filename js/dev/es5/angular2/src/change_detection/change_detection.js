System.register(["rtts_assert/rtts_assert", "./proto_change_detector", "./pipes/pipe_registry", "./pipes/iterable_changes", "./pipes/keyvalue_changes", "./pipes/null_pipe", "./constants", "./interfaces", "./pipes/pipe"], function($__export) {
  "use strict";
  var assert,
      DynamicProtoChangeDetector,
      JitProtoChangeDetector,
      PipeRegistry,
      IterableChangesFactory,
      KeyValueChangesFactory,
      NullPipeFactory,
      DEFAULT,
      ChangeDetection,
      ProtoChangeDetector,
      Pipe,
      NO_CHANGE,
      AsyncPipe,
      defaultPipes,
      DynamicChangeDetection,
      JitChangeDetection,
      _registry,
      dynamicChangeDetection,
      jitChangeDetection;
  return {
    setters: [function($__m) {
      assert = $__m.assert;
    }, function($__m) {
      DynamicProtoChangeDetector = $__m.DynamicProtoChangeDetector;
      JitProtoChangeDetector = $__m.JitProtoChangeDetector;
    }, function($__m) {
      PipeRegistry = $__m.PipeRegistry;
    }, function($__m) {
      IterableChangesFactory = $__m.IterableChangesFactory;
    }, function($__m) {
      KeyValueChangesFactory = $__m.KeyValueChangesFactory;
    }, function($__m) {
      NullPipeFactory = $__m.NullPipeFactory;
    }, function($__m) {
      DEFAULT = $__m.DEFAULT;
    }, function($__m) {
      ChangeDetection = $__m.ChangeDetection;
      ProtoChangeDetector = $__m.ProtoChangeDetector;
    }, function($__m) {
      Pipe = $__m.Pipe;
      NO_CHANGE = $__m.NO_CHANGE;
    }],
    execute: function() {
      AsyncPipe = (function($__super) {
        var AsyncPipe = function AsyncPipe() {
          $traceurRuntime.superConstructor(AsyncPipe).call(this);
          this.observable = null;
          this.latestValue = null;
        };
        return ($traceurRuntime.createClass)(AsyncPipe, {
          supports: function(obj) {
            return this.observable === obj;
          },
          onDestroy: function() {
            this.subscription.dispose();
          },
          transform: function(value) {
            var $__0 = this;
            if (!this.subscription) {
              this.observable = value;
              this.subscription = value.subscribe((function(x) {
                $__0.latestValue = x;
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
        }, {}, $__super);
      }(Pipe));
      defaultPipes = $__export("defaultPipes", {
        "iterableDiff": [new IterableChangesFactory(), new NullPipeFactory()],
        "keyValDiff": [new KeyValueChangesFactory(), new NullPipeFactory()],
        "async": [{
          supports: (function(obj) {
            return obj.subscribe !== undefined;
          }),
          create: (function() {
            return new AsyncPipe();
          })
        }]
      });
      DynamicChangeDetection = $__export("DynamicChangeDetection", (function($__super) {
        var DynamicChangeDetection = function DynamicChangeDetection(registry) {
          assert.argumentTypes(registry, PipeRegistry);
          $traceurRuntime.superConstructor(DynamicChangeDetection).call(this);
          this.registry = registry;
        };
        return ($traceurRuntime.createClass)(DynamicChangeDetection, {createProtoChangeDetector: function(name) {
            var changeControlStrategy = arguments[1] !== (void 0) ? arguments[1] : DEFAULT;
            assert.argumentTypes(name, assert.type.string, changeControlStrategy, assert.type.string);
            return assert.returnType((new DynamicProtoChangeDetector(this.registry, changeControlStrategy)), ProtoChangeDetector);
          }}, {}, $__super);
      }(ChangeDetection)));
      Object.defineProperty(DynamicChangeDetection, "parameters", {get: function() {
          return [[PipeRegistry]];
        }});
      Object.defineProperty(DynamicChangeDetection.prototype.createProtoChangeDetector, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.string]];
        }});
      JitChangeDetection = $__export("JitChangeDetection", (function($__super) {
        var JitChangeDetection = function JitChangeDetection(registry) {
          assert.argumentTypes(registry, PipeRegistry);
          $traceurRuntime.superConstructor(JitChangeDetection).call(this);
          this.registry = registry;
        };
        return ($traceurRuntime.createClass)(JitChangeDetection, {createProtoChangeDetector: function(name) {
            var changeControlStrategy = arguments[1] !== (void 0) ? arguments[1] : DEFAULT;
            assert.argumentTypes(name, assert.type.string, changeControlStrategy, assert.type.string);
            return assert.returnType((new JitProtoChangeDetector(this.registry, changeControlStrategy)), ProtoChangeDetector);
          }}, {}, $__super);
      }(ChangeDetection)));
      Object.defineProperty(JitChangeDetection, "parameters", {get: function() {
          return [[PipeRegistry]];
        }});
      Object.defineProperty(JitChangeDetection.prototype.createProtoChangeDetector, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.string]];
        }});
      _registry = new PipeRegistry(defaultPipes);
      dynamicChangeDetection = $__export("dynamicChangeDetection", new DynamicChangeDetection(_registry));
      jitChangeDetection = $__export("jitChangeDetection", new JitChangeDetection(_registry));
    }
  };
});
//# sourceMappingURL=change_detection.es6.map

//# sourceMappingURL=./change_detection.js.map