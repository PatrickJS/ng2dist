"use strict";
Object.defineProperties(module.exports, {
  KeyValueChangesFactory: {get: function() {
      return KeyValueChangesFactory;
    }},
  KeyValueChanges: {get: function() {
      return KeyValueChanges;
    }},
  KVChangeRecord: {get: function() {
      return KVChangeRecord;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_lang__,
    $__pipe__;
var $__0 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    ListWrapper = $__0.ListWrapper,
    MapWrapper = $__0.MapWrapper,
    StringMapWrapper = $__0.StringMapWrapper;
var $__1 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    stringify = $__1.stringify,
    looseIdentical = $__1.looseIdentical,
    isJsObject = $__1.isJsObject;
var $__2 = ($__pipe__ = require("./pipe"), $__pipe__ && $__pipe__.__esModule && $__pipe__ || {default: $__pipe__}),
    NO_CHANGE = $__2.NO_CHANGE,
    Pipe = $__2.Pipe;
var KeyValueChangesFactory = function KeyValueChangesFactory() {
  ;
};
($traceurRuntime.createClass)(KeyValueChangesFactory, {
  supports: function(obj) {
    return KeyValueChanges.supportsObj(obj);
  },
  create: function(bpc) {
    return new KeyValueChanges();
  }
}, {});
var KeyValueChanges = function KeyValueChanges() {
  $traceurRuntime.superConstructor($KeyValueChanges).call(this);
  this._records = MapWrapper.create();
  this._mapHead = null;
  this._previousMapHead = null;
  this._changesHead = null;
  this._changesTail = null;
  this._additionsHead = null;
  this._additionsTail = null;
  this._removalsHead = null;
  this._removalsTail = null;
};
var $KeyValueChanges = KeyValueChanges;
($traceurRuntime.createClass)(KeyValueChanges, {
  supports: function(obj) {
    return $KeyValueChanges.supportsObj(obj);
  },
  transform: function(map) {
    if (this.check(map)) {
      return this;
    } else {
      return NO_CHANGE;
    }
  },
  get isDirty() {
    return this._additionsHead !== null || this._changesHead !== null || this._removalsHead !== null;
  },
  forEachItem: function(fn) {
    var record;
    for (record = this._mapHead; record !== null; record = record._next) {
      fn(record);
    }
  },
  forEachPreviousItem: function(fn) {
    var record;
    for (record = this._previousMapHead; record !== null; record = record._nextPrevious) {
      fn(record);
    }
  },
  forEachChangedItem: function(fn) {
    var record;
    for (record = this._changesHead; record !== null; record = record._nextChanged) {
      fn(record);
    }
  },
  forEachAddedItem: function(fn) {
    var record;
    for (record = this._additionsHead; record !== null; record = record._nextAdded) {
      fn(record);
    }
  },
  forEachRemovedItem: function(fn) {
    var record;
    for (record = this._removalsHead; record !== null; record = record._nextRemoved) {
      fn(record);
    }
  },
  check: function(map) {
    var $__3 = this;
    this._reset();
    var records = this._records;
    var oldSeqRecord = this._mapHead;
    var lastOldSeqRecord = null;
    var lastNewSeqRecord = null;
    var seqChanged = false;
    this._forEach(map, (function(value, key) {
      var newSeqRecord;
      if (oldSeqRecord !== null && key === oldSeqRecord.key) {
        newSeqRecord = oldSeqRecord;
        if (!looseIdentical(value, oldSeqRecord.currentValue)) {
          oldSeqRecord.previousValue = oldSeqRecord.currentValue;
          oldSeqRecord.currentValue = value;
          $__3._addToChanges(oldSeqRecord);
        }
      } else {
        seqChanged = true;
        if (oldSeqRecord !== null) {
          oldSeqRecord._next = null;
          $__3._removeFromSeq(lastOldSeqRecord, oldSeqRecord);
          $__3._addToRemovals(oldSeqRecord);
        }
        if (MapWrapper.contains(records, key)) {
          newSeqRecord = MapWrapper.get(records, key);
        } else {
          newSeqRecord = new KVChangeRecord(key);
          MapWrapper.set(records, key, newSeqRecord);
          newSeqRecord.currentValue = value;
          $__3._addToAdditions(newSeqRecord);
        }
      }
      if (seqChanged) {
        if ($__3._isInRemovals(newSeqRecord)) {
          $__3._removeFromRemovals(newSeqRecord);
        }
        if (lastNewSeqRecord == null) {
          $__3._mapHead = newSeqRecord;
        } else {
          lastNewSeqRecord._next = newSeqRecord;
        }
      }
      lastOldSeqRecord = oldSeqRecord;
      lastNewSeqRecord = newSeqRecord;
      oldSeqRecord = oldSeqRecord === null ? null : oldSeqRecord._next;
    }));
    this._truncate(lastOldSeqRecord, oldSeqRecord);
    return this.isDirty;
  },
  _reset: function() {
    if (this.isDirty) {
      var record;
      for (record = this._previousMapHead = this._mapHead; record !== null; record = record._next) {
        record._nextPrevious = record._next;
      }
      for (record = this._changesHead; record !== null; record = record._nextChanged) {
        record.previousValue = record.currentValue;
      }
      for (record = this._additionsHead; record != null; record = record._nextAdded) {
        record.previousValue = record.currentValue;
      }
      this._changesHead = this._changesTail = null;
      this._additionsHead = this._additionsTail = null;
      this._removalsHead = this._removalsTail = null;
    }
  },
  _truncate: function(lastRecord, record) {
    while (record !== null) {
      if (lastRecord === null) {
        this._mapHead = null;
      } else {
        lastRecord._next = null;
      }
      var nextRecord = record._next;
      this._addToRemovals(record);
      lastRecord = record;
      record = nextRecord;
    }
    for (var rec = this._removalsHead; rec !== null; rec = rec._nextRemoved) {
      rec.previousValue = rec.currentValue;
      rec.currentValue = null;
      MapWrapper.delete(this._records, rec.key);
    }
  },
  _isInRemovals: function(record) {
    return record === this._removalsHead || record._nextRemoved !== null || record._prevRemoved !== null;
  },
  _addToRemovals: function(record) {
    if (this._removalsHead === null) {
      this._removalsHead = this._removalsTail = record;
    } else {
      this._removalsTail._nextRemoved = record;
      record._prevRemoved = this._removalsTail;
      this._removalsTail = record;
    }
  },
  _removeFromSeq: function(prev, record) {
    var next = record._next;
    if (prev === null) {
      this._mapHead = next;
    } else {
      prev._next = next;
    }
  },
  _removeFromRemovals: function(record) {
    var prev = record._prevRemoved;
    var next = record._nextRemoved;
    if (prev === null) {
      this._removalsHead = next;
    } else {
      prev._nextRemoved = next;
    }
    if (next === null) {
      this._removalsTail = prev;
    } else {
      next._prevRemoved = prev;
    }
    record._prevRemoved = record._nextRemoved = null;
  },
  _addToAdditions: function(record) {
    if (this._additionsHead === null) {
      this._additionsHead = this._additionsTail = record;
    } else {
      this._additionsTail._nextAdded = record;
      this._additionsTail = record;
    }
  },
  _addToChanges: function(record) {
    if (this._changesHead === null) {
      this._changesHead = this._changesTail = record;
    } else {
      this._changesTail._nextChanged = record;
      this._changesTail = record;
    }
  },
  toString: function() {
    var items = [];
    var previous = [];
    var changes = [];
    var additions = [];
    var removals = [];
    var record;
    for (record = this._mapHead; record !== null; record = record._next) {
      ListWrapper.push(items, stringify(record));
    }
    for (record = this._previousMapHead; record !== null; record = record._nextPrevious) {
      ListWrapper.push(previous, stringify(record));
    }
    for (record = this._changesHead; record !== null; record = record._nextChanged) {
      ListWrapper.push(changes, stringify(record));
    }
    for (record = this._additionsHead; record !== null; record = record._nextAdded) {
      ListWrapper.push(additions, stringify(record));
    }
    for (record = this._removalsHead; record !== null; record = record._nextRemoved) {
      ListWrapper.push(removals, stringify(record));
    }
    return "map: " + items.join(', ') + "\n" + "previous: " + previous.join(', ') + "\n" + "additions: " + additions.join(', ') + "\n" + "changes: " + changes.join(', ') + "\n" + "removals: " + removals.join(', ') + "\n";
  },
  _forEach: function(obj, fn) {
    if (obj instanceof Map) {
      MapWrapper.forEach(obj, fn);
    } else {
      StringMapWrapper.forEach(obj, fn);
    }
  }
}, {supportsObj: function(obj) {
    return obj instanceof Map || isJsObject(obj);
  }}, Pipe);
Object.defineProperty(KeyValueChanges.prototype.forEachItem, "parameters", {get: function() {
    return [[Function]];
  }});
Object.defineProperty(KeyValueChanges.prototype.forEachPreviousItem, "parameters", {get: function() {
    return [[Function]];
  }});
Object.defineProperty(KeyValueChanges.prototype.forEachChangedItem, "parameters", {get: function() {
    return [[Function]];
  }});
Object.defineProperty(KeyValueChanges.prototype.forEachAddedItem, "parameters", {get: function() {
    return [[Function]];
  }});
Object.defineProperty(KeyValueChanges.prototype.forEachRemovedItem, "parameters", {get: function() {
    return [[Function]];
  }});
Object.defineProperty(KeyValueChanges.prototype._truncate, "parameters", {get: function() {
    return [[KVChangeRecord], [KVChangeRecord]];
  }});
Object.defineProperty(KeyValueChanges.prototype._isInRemovals, "parameters", {get: function() {
    return [[KVChangeRecord]];
  }});
Object.defineProperty(KeyValueChanges.prototype._addToRemovals, "parameters", {get: function() {
    return [[KVChangeRecord]];
  }});
Object.defineProperty(KeyValueChanges.prototype._removeFromSeq, "parameters", {get: function() {
    return [[KVChangeRecord], [KVChangeRecord]];
  }});
Object.defineProperty(KeyValueChanges.prototype._removeFromRemovals, "parameters", {get: function() {
    return [[KVChangeRecord]];
  }});
Object.defineProperty(KeyValueChanges.prototype._addToAdditions, "parameters", {get: function() {
    return [[KVChangeRecord]];
  }});
Object.defineProperty(KeyValueChanges.prototype._addToChanges, "parameters", {get: function() {
    return [[KVChangeRecord]];
  }});
Object.defineProperty(KeyValueChanges.prototype._forEach, "parameters", {get: function() {
    return [[], [Function]];
  }});
var KVChangeRecord = function KVChangeRecord(key) {
  this.key = key;
  this.previousValue = null;
  this.currentValue = null;
  this._nextPrevious = null;
  this._next = null;
  this._nextAdded = null;
  this._nextRemoved = null;
  this._prevRemoved = null;
  this._nextChanged = null;
};
var $KVChangeRecord = KVChangeRecord;
($traceurRuntime.createClass)(KVChangeRecord, {toString: function() {
    return looseIdentical(this.previousValue, this.currentValue) ? stringify(this.key) : (stringify(this.key) + '[' + stringify(this.previousValue) + '->' + stringify(this.currentValue) + ']');
  }}, {});
//# sourceMappingURL=keyvalue_changes.js.map

//# sourceMappingURL=./keyvalue_changes.map