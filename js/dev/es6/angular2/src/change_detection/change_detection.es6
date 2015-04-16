import {assert} from "rtts_assert/rtts_assert";
import {DynamicProtoChangeDetector,
  JitProtoChangeDetector} from './proto_change_detector';
import {PipeRegistry} from './pipes/pipe_registry';
import {IterableChangesFactory} from './pipes/iterable_changes';
import {KeyValueChangesFactory} from './pipes/keyvalue_changes';
import {NullPipeFactory} from './pipes/null_pipe';
import {DEFAULT} from './constants';
import {ChangeDetection,
  ProtoChangeDetector} from './interfaces';
import {Pipe,
  NO_CHANGE} from './pipes/pipe';
class AsyncPipe extends Pipe {
  constructor() {
    super();
    this.observable = null;
    this.latestValue = null;
  }
  supports(obj) {
    return this.observable === obj;
  }
  onDestroy() {
    if (this.subscription && this.subscription.dispose) {
      this.subscription.dispose();
    } else if (this.dispose) {
      this.dispose();
    }
  }
  transform(value) {
    if (!this.subscription) {
      this.observable = value;
      this.subscription = value.subscribe((x) => {
        this.latestValue = x;
      }, (e) => {
        throw e;
      });
    }
    if (this.latestReturnedValue !== this.latestValue) {
      this.latestReturnedValue = this.latestValue;
      return this.latestValue;
    } else {
      return NO_CHANGE;
    }
  }
}
export var defaultPipes = {
  "iterableDiff": [new IterableChangesFactory(), new NullPipeFactory()],
  "keyValDiff": [new KeyValueChangesFactory(), new NullPipeFactory()],
  "async": [{
    supports: (obj) => obj && obj.subscribe !== undefined,
    create: () => new AsyncPipe()
  }]
};
export class DynamicChangeDetection extends ChangeDetection {
  constructor(registry) {
    assert.argumentTypes(registry, PipeRegistry);
    super();
    this.registry = registry;
  }
  createProtoChangeDetector(name, changeControlStrategy = DEFAULT) {
    assert.argumentTypes(name, assert.type.string, changeControlStrategy, assert.type.string);
    return assert.returnType((new DynamicProtoChangeDetector(this.registry, changeControlStrategy)), ProtoChangeDetector);
  }
}
Object.defineProperty(DynamicChangeDetection, "parameters", {get: function() {
    return [[PipeRegistry]];
  }});
Object.defineProperty(DynamicChangeDetection.prototype.createProtoChangeDetector, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string]];
  }});
export class JitChangeDetection extends ChangeDetection {
  constructor(registry) {
    assert.argumentTypes(registry, PipeRegistry);
    super();
    this.registry = registry;
  }
  createProtoChangeDetector(name, changeControlStrategy = DEFAULT) {
    assert.argumentTypes(name, assert.type.string, changeControlStrategy, assert.type.string);
    return assert.returnType((new JitProtoChangeDetector(this.registry, changeControlStrategy)), ProtoChangeDetector);
  }
}
Object.defineProperty(JitChangeDetection, "parameters", {get: function() {
    return [[PipeRegistry]];
  }});
Object.defineProperty(JitChangeDetection.prototype.createProtoChangeDetector, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string]];
  }});
var _registry = new PipeRegistry(defaultPipes);
export var dynamicChangeDetection = new DynamicChangeDetection(_registry);
export var jitChangeDetection = new JitChangeDetection(_registry);
//# sourceMappingURL=change_detection.js.map

//# sourceMappingURL=./change_detection.map