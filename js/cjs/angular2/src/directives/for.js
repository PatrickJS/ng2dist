"use strict";
Object.defineProperties(module.exports, {
  For: {get: function() {
      return For;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_core_47_annotations_47_annotations__,
    $__angular2_47_src_47_core_47_compiler_47_view_95_container__,
    $__angular2_47_src_47_core_47_compiler_47_view__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__;
var Viewport = ($__angular2_47_src_47_core_47_annotations_47_annotations__ = require("angular2/src/core/annotations/annotations"), $__angular2_47_src_47_core_47_annotations_47_annotations__ && $__angular2_47_src_47_core_47_annotations_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_47_annotations__}).Viewport;
var ViewContainer = ($__angular2_47_src_47_core_47_compiler_47_view_95_container__ = require("angular2/src/core/compiler/view_container"), $__angular2_47_src_47_core_47_compiler_47_view_95_container__ && $__angular2_47_src_47_core_47_compiler_47_view_95_container__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view_95_container__ || {default: $__angular2_47_src_47_core_47_compiler_47_view_95_container__}).ViewContainer;
var AppView = ($__angular2_47_src_47_core_47_compiler_47_view__ = require("angular2/src/core/compiler/view"), $__angular2_47_src_47_core_47_compiler_47_view__ && $__angular2_47_src_47_core_47_compiler_47_view__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view__ || {default: $__angular2_47_src_47_core_47_compiler_47_view__}).AppView;
var $__3 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isPresent = $__3.isPresent,
    isBlank = $__3.isBlank;
var ListWrapper = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).ListWrapper;
var For = function For(viewContainer) {
  this.viewContainer = viewContainer;
};
var $For = For;
($traceurRuntime.createClass)(For, {
  set iterableChanges(changes) {
    if (isBlank(changes)) {
      this.viewContainer.clear();
      return ;
    }
    var recordViewTuples = [];
    changes.forEachRemovedItem((function(removedRecord) {
      return ListWrapper.push(recordViewTuples, new RecordViewTuple(removedRecord, null));
    }));
    changes.forEachMovedItem((function(movedRecord) {
      return ListWrapper.push(recordViewTuples, new RecordViewTuple(movedRecord, null));
    }));
    var insertTuples = $For.bulkRemove(recordViewTuples, this.viewContainer);
    changes.forEachAddedItem((function(addedRecord) {
      return ListWrapper.push(insertTuples, new RecordViewTuple(addedRecord, null));
    }));
    $For.bulkInsert(insertTuples, this.viewContainer);
    for (var i = 0; i < insertTuples.length; i++) {
      this.perViewChange(insertTuples[i].view, insertTuples[i].record);
    }
  },
  perViewChange: function(view, record) {
    view.setLocal('\$implicit', record.item);
    view.setLocal('index', record.currentIndex);
  }
}, {
  bulkRemove: function(tuples, viewContainer) {
    tuples.sort((function(a, b) {
      return a.record.previousIndex - b.record.previousIndex;
    }));
    var movedTuples = [];
    for (var i = tuples.length - 1; i >= 0; i--) {
      var tuple = tuples[i];
      if (isPresent(tuple.record.currentIndex)) {
        tuple.view = viewContainer.detach(tuple.record.previousIndex);
        ListWrapper.push(movedTuples, tuple);
      } else {
        viewContainer.remove(tuple.record.previousIndex);
      }
    }
    return movedTuples;
  },
  bulkInsert: function(tuples, viewContainer) {
    tuples.sort((function(a, b) {
      return a.record.currentIndex - b.record.currentIndex;
    }));
    for (var i = 0; i < tuples.length; i++) {
      var tuple = tuples[i];
      if (isPresent(tuple.view)) {
        viewContainer.insert(tuple.view, tuple.record.currentIndex);
      } else {
        tuple.view = viewContainer.create(tuple.record.currentIndex);
      }
    }
    return tuples;
  }
});
Object.defineProperty(For, "annotations", {get: function() {
    return [new Viewport({
      selector: '[for][of]',
      properties: {'iterableChanges': 'of | iterableDiff'}
    })];
  }});
Object.defineProperty(For, "parameters", {get: function() {
    return [[ViewContainer]];
  }});
var RecordViewTuple = function RecordViewTuple(record, view) {
  this.record = record;
  this.view = view;
};
($traceurRuntime.createClass)(RecordViewTuple, {}, {});
//# sourceMappingURL=for.js.map

//# sourceMappingURL=./for.map