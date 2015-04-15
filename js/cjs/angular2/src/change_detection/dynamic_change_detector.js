"use strict";
Object.defineProperties(module.exports, {
  DynamicChangeDetector: {get: function() {
      return DynamicChangeDetector;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__abstract_95_change_95_detector__,
    $__binding_95_record__,
    $__directive_95_record__,
    $__pipes_47_pipe_95_registry__,
    $__change_95_detection_95_util__,
    $__proto_95_record__,
    $__exceptions__;
var $__0 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isPresent = $__0.isPresent,
    isBlank = $__0.isBlank,
    BaseException = $__0.BaseException,
    FunctionWrapper = $__0.FunctionWrapper;
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__1.List,
    ListWrapper = $__1.ListWrapper,
    MapWrapper = $__1.MapWrapper,
    StringMapWrapper = $__1.StringMapWrapper;
var AbstractChangeDetector = ($__abstract_95_change_95_detector__ = require("./abstract_change_detector"), $__abstract_95_change_95_detector__ && $__abstract_95_change_95_detector__.__esModule && $__abstract_95_change_95_detector__ || {default: $__abstract_95_change_95_detector__}).AbstractChangeDetector;
var BindingRecord = ($__binding_95_record__ = require("./binding_record"), $__binding_95_record__ && $__binding_95_record__.__esModule && $__binding_95_record__ || {default: $__binding_95_record__}).BindingRecord;
var DirectiveRecord = ($__directive_95_record__ = require("./directive_record"), $__directive_95_record__ && $__directive_95_record__.__esModule && $__directive_95_record__ || {default: $__directive_95_record__}).DirectiveRecord;
var PipeRegistry = ($__pipes_47_pipe_95_registry__ = require("./pipes/pipe_registry"), $__pipes_47_pipe_95_registry__ && $__pipes_47_pipe_95_registry__.__esModule && $__pipes_47_pipe_95_registry__ || {default: $__pipes_47_pipe_95_registry__}).PipeRegistry;
var $__6 = ($__change_95_detection_95_util__ = require("./change_detection_util"), $__change_95_detection_95_util__ && $__change_95_detection_95_util__.__esModule && $__change_95_detection_95_util__ || {default: $__change_95_detection_95_util__}),
    ChangeDetectionUtil = $__6.ChangeDetectionUtil,
    uninitialized = $__6.uninitialized;
var $__7 = ($__proto_95_record__ = require("./proto_record"), $__proto_95_record__ && $__proto_95_record__.__esModule && $__proto_95_record__ || {default: $__proto_95_record__}),
    ProtoRecord = $__7.ProtoRecord,
    RECORD_TYPE_SELF = $__7.RECORD_TYPE_SELF,
    RECORD_TYPE_PROPERTY = $__7.RECORD_TYPE_PROPERTY,
    RECORD_TYPE_LOCAL = $__7.RECORD_TYPE_LOCAL,
    RECORD_TYPE_INVOKE_METHOD = $__7.RECORD_TYPE_INVOKE_METHOD,
    RECORD_TYPE_CONST = $__7.RECORD_TYPE_CONST,
    RECORD_TYPE_INVOKE_CLOSURE = $__7.RECORD_TYPE_INVOKE_CLOSURE,
    RECORD_TYPE_PRIMITIVE_OP = $__7.RECORD_TYPE_PRIMITIVE_OP,
    RECORD_TYPE_KEYED_ACCESS = $__7.RECORD_TYPE_KEYED_ACCESS,
    RECORD_TYPE_PIPE = $__7.RECORD_TYPE_PIPE,
    RECORD_TYPE_BINDING_PIPE = $__7.RECORD_TYPE_BINDING_PIPE,
    RECORD_TYPE_INTERPOLATE = $__7.RECORD_TYPE_INTERPOLATE;
var $__8 = ($__exceptions__ = require("./exceptions"), $__exceptions__ && $__exceptions__.__esModule && $__exceptions__ || {default: $__exceptions__}),
    ExpressionChangedAfterItHasBeenChecked = $__8.ExpressionChangedAfterItHasBeenChecked,
    ChangeDetectionError = $__8.ChangeDetectionError;
var DynamicChangeDetector = function DynamicChangeDetector(changeControlStrategy, dispatcher, pipeRegistry, protoRecords, directiveRecords) {
  $traceurRuntime.superConstructor($DynamicChangeDetector).call(this);
  this.dispatcher = dispatcher;
  this.pipeRegistry = pipeRegistry;
  this.values = ListWrapper.createFixedSize(protoRecords.length + 1);
  this.pipes = ListWrapper.createFixedSize(protoRecords.length + 1);
  this.prevContexts = ListWrapper.createFixedSize(protoRecords.length + 1);
  this.changes = ListWrapper.createFixedSize(protoRecords.length + 1);
  ListWrapper.fill(this.values, uninitialized);
  ListWrapper.fill(this.pipes, null);
  ListWrapper.fill(this.prevContexts, uninitialized);
  ListWrapper.fill(this.changes, false);
  this.locals = null;
  this.directives = null;
  this.protos = protoRecords;
  this.directiveRecords = directiveRecords;
  this.changeControlStrategy = changeControlStrategy;
};
var $DynamicChangeDetector = DynamicChangeDetector;
($traceurRuntime.createClass)(DynamicChangeDetector, {
  hydrate: function(context, locals, directives) {
    this.mode = ChangeDetectionUtil.changeDetectionMode(this.changeControlStrategy);
    this.values[0] = context;
    this.locals = locals;
    this.directives = directives;
  },
  dehydrate: function() {
    this._destroyPipes();
    ListWrapper.fill(this.values, uninitialized);
    ListWrapper.fill(this.changes, false);
    ListWrapper.fill(this.pipes, null);
    ListWrapper.fill(this.prevContexts, uninitialized);
    this.locals = null;
  },
  _destroyPipes: function() {
    for (var i = 0; i < this.pipes.length; ++i) {
      if (isPresent(this.pipes[i])) {
        this.pipes[i].onDestroy();
      }
    }
  },
  hydrated: function() {
    return this.values[0] !== uninitialized;
  },
  detectChangesInRecords: function(throwOnChange) {
    var protos = this.protos;
    var changes = null;
    for (var i = 0; i < protos.length; ++i) {
      var proto = protos[i];
      var change = this._check(proto);
      if (isPresent(change)) {
        if (throwOnChange)
          ChangeDetectionUtil.throwOnChange(proto, change);
        this._updateDirectiveOrElement(change, proto.bindingRecord);
        changes = this._addChange(proto.bindingRecord, change, changes);
      }
      if (proto.lastInDirective && isPresent(changes)) {
        this._directive(proto.bindingRecord.directiveRecord).onChange(changes);
        changes = null;
      }
    }
  },
  callOnAllChangesDone: function() {
    var dirs = this.directiveRecords;
    for (var i = dirs.length - 1; i >= 0; --i) {
      var dir = dirs[i];
      if (dir.callOnAllChangesDone) {
        this._directive(dir).onAllChangesDone();
      }
    }
  },
  _updateDirectiveOrElement: function(change, bindingRecord) {
    if (isBlank(bindingRecord.directiveRecord)) {
      this.dispatcher.notifyOnBinding(bindingRecord, change.currentValue);
    } else {
      bindingRecord.setter(this._directive(bindingRecord.directiveRecord), change.currentValue);
    }
  },
  _addChange: function(bindingRecord, change, changes) {
    if (bindingRecord.callOnChange()) {
      return ChangeDetectionUtil.addChange(changes, bindingRecord.propertyName, change);
    } else {
      return changes;
    }
  },
  _directive: function(directive) {
    return this.directives.directive(directive);
  },
  _check: function(proto) {
    try {
      if (proto.mode === RECORD_TYPE_PIPE || proto.mode === RECORD_TYPE_BINDING_PIPE) {
        return this._pipeCheck(proto);
      } else {
        return this._referenceCheck(proto);
      }
    } catch (e) {
      throw new ChangeDetectionError(proto, e);
    }
  },
  _referenceCheck: function(proto) {
    if (this._pureFuncAndArgsDidNotChange(proto)) {
      this._setChanged(proto, false);
      return null;
    }
    var prevValue = this._readSelf(proto);
    var currValue = this._calculateCurrValue(proto);
    if (!isSame(prevValue, currValue)) {
      this._writeSelf(proto, currValue);
      this._setChanged(proto, true);
      if (proto.lastInBinding) {
        return ChangeDetectionUtil.simpleChange(prevValue, currValue);
      } else {
        return null;
      }
    } else {
      this._setChanged(proto, false);
      return null;
    }
  },
  _calculateCurrValue: function(proto) {
    switch (proto.mode) {
      case RECORD_TYPE_SELF:
        return this._readContext(proto);
      case RECORD_TYPE_CONST:
        return proto.funcOrValue;
      case RECORD_TYPE_PROPERTY:
        var context = this._readContext(proto);
        return proto.funcOrValue(context);
      case RECORD_TYPE_LOCAL:
        return this.locals.get(proto.name);
      case RECORD_TYPE_INVOKE_METHOD:
        var context = this._readContext(proto);
        var args = this._readArgs(proto);
        return proto.funcOrValue(context, args);
      case RECORD_TYPE_KEYED_ACCESS:
        var arg = this._readArgs(proto)[0];
        return this._readContext(proto)[arg];
      case RECORD_TYPE_INVOKE_CLOSURE:
        return FunctionWrapper.apply(this._readContext(proto), this._readArgs(proto));
      case RECORD_TYPE_INTERPOLATE:
      case RECORD_TYPE_PRIMITIVE_OP:
        return FunctionWrapper.apply(proto.funcOrValue, this._readArgs(proto));
      default:
        throw new BaseException(("Unknown operation " + proto.mode));
    }
  },
  _pipeCheck: function(proto) {
    var context = this._readContext(proto);
    var pipe = this._pipeFor(proto, context);
    var newValue = pipe.transform(context);
    if (!ChangeDetectionUtil.noChangeMarker(newValue)) {
      var prevValue = this._readSelf(proto);
      this._writeSelf(proto, newValue);
      this._setChanged(proto, true);
      if (proto.lastInBinding) {
        return ChangeDetectionUtil.simpleChange(prevValue, newValue);
      } else {
        return null;
      }
    } else {
      this._setChanged(proto, false);
      return null;
    }
  },
  _pipeFor: function(proto, context) {
    var storedPipe = this._readPipe(proto);
    if (isPresent(storedPipe) && storedPipe.supports(context)) {
      return storedPipe;
    }
    if (isPresent(storedPipe)) {
      storedPipe.onDestroy();
    }
    var bpc = proto.mode === RECORD_TYPE_BINDING_PIPE ? this.bindingPropagationConfig : null;
    var pipe = this.pipeRegistry.get(proto.name, context, bpc);
    this._writePipe(proto, pipe);
    return pipe;
  },
  _readContext: function(proto) {
    return this.values[proto.contextIndex];
  },
  _readSelf: function(proto) {
    return this.values[proto.selfIndex];
  },
  _writeSelf: function(proto, value) {
    this.values[proto.selfIndex] = value;
  },
  _readPipe: function(proto) {
    return this.pipes[proto.selfIndex];
  },
  _writePipe: function(proto, value) {
    this.pipes[proto.selfIndex] = value;
  },
  _setChanged: function(proto, value) {
    this.changes[proto.selfIndex] = value;
  },
  _pureFuncAndArgsDidNotChange: function(proto) {
    return proto.isPureFunction() && !this._argsChanged(proto);
  },
  _argsChanged: function(proto) {
    var args = proto.args;
    for (var i = 0; i < args.length; ++i) {
      if (this.changes[args[i]]) {
        return true;
      }
    }
    return false;
  },
  _readArgs: function(proto) {
    var res = ListWrapper.createFixedSize(proto.args.length);
    var args = proto.args;
    for (var i = 0; i < args.length; ++i) {
      res[i] = this.values[args[i]];
    }
    return res;
  }
}, {}, AbstractChangeDetector);
Object.defineProperty(DynamicChangeDetector, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [$traceurRuntime.type.any], [PipeRegistry], [$traceurRuntime.genericType(List, ProtoRecord)], [List]];
  }});
Object.defineProperty(DynamicChangeDetector.prototype.hydrate, "parameters", {get: function() {
    return [[$traceurRuntime.type.any], [$traceurRuntime.type.any], [$traceurRuntime.type.any]];
  }});
Object.defineProperty(DynamicChangeDetector.prototype.detectChangesInRecords, "parameters", {get: function() {
    return [[$traceurRuntime.type.boolean]];
  }});
Object.defineProperty(DynamicChangeDetector.prototype._addChange, "parameters", {get: function() {
    return [[BindingRecord], [], []];
  }});
Object.defineProperty(DynamicChangeDetector.prototype._directive, "parameters", {get: function() {
    return [[DirectiveRecord]];
  }});
Object.defineProperty(DynamicChangeDetector.prototype._check, "parameters", {get: function() {
    return [[ProtoRecord]];
  }});
Object.defineProperty(DynamicChangeDetector.prototype._referenceCheck, "parameters", {get: function() {
    return [[ProtoRecord]];
  }});
Object.defineProperty(DynamicChangeDetector.prototype._calculateCurrValue, "parameters", {get: function() {
    return [[ProtoRecord]];
  }});
Object.defineProperty(DynamicChangeDetector.prototype._pipeCheck, "parameters", {get: function() {
    return [[ProtoRecord]];
  }});
Object.defineProperty(DynamicChangeDetector.prototype._pipeFor, "parameters", {get: function() {
    return [[ProtoRecord], []];
  }});
Object.defineProperty(DynamicChangeDetector.prototype._readContext, "parameters", {get: function() {
    return [[ProtoRecord]];
  }});
Object.defineProperty(DynamicChangeDetector.prototype._readSelf, "parameters", {get: function() {
    return [[ProtoRecord]];
  }});
Object.defineProperty(DynamicChangeDetector.prototype._writeSelf, "parameters", {get: function() {
    return [[ProtoRecord], []];
  }});
Object.defineProperty(DynamicChangeDetector.prototype._readPipe, "parameters", {get: function() {
    return [[ProtoRecord]];
  }});
Object.defineProperty(DynamicChangeDetector.prototype._writePipe, "parameters", {get: function() {
    return [[ProtoRecord], []];
  }});
Object.defineProperty(DynamicChangeDetector.prototype._setChanged, "parameters", {get: function() {
    return [[ProtoRecord], [$traceurRuntime.type.boolean]];
  }});
Object.defineProperty(DynamicChangeDetector.prototype._pureFuncAndArgsDidNotChange, "parameters", {get: function() {
    return [[ProtoRecord]];
  }});
Object.defineProperty(DynamicChangeDetector.prototype._argsChanged, "parameters", {get: function() {
    return [[ProtoRecord]];
  }});
Object.defineProperty(DynamicChangeDetector.prototype._readArgs, "parameters", {get: function() {
    return [[ProtoRecord]];
  }});
function isSame(a, b) {
  if (a === b)
    return true;
  if (a instanceof String && b instanceof String && a == b)
    return true;
  if ((a !== a) && (b !== b))
    return true;
  return false;
}
//# sourceMappingURL=dynamic_change_detector.js.map

//# sourceMappingURL=./dynamic_change_detector.map