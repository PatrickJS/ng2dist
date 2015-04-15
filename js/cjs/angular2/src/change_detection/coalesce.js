"use strict";
Object.defineProperties(module.exports, {
  coalesce: {get: function() {
      return coalesce;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__proto_95_record__;
var isPresent = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).isPresent;
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__1.List,
    ListWrapper = $__1.ListWrapper,
    Map = $__1.Map,
    MapWrapper = $__1.MapWrapper;
var $__2 = ($__proto_95_record__ = require("./proto_record"), $__proto_95_record__ && $__proto_95_record__.__esModule && $__proto_95_record__ || {default: $__proto_95_record__}),
    RECORD_TYPE_SELF = $__2.RECORD_TYPE_SELF,
    ProtoRecord = $__2.ProtoRecord;
function coalesce(records) {
  var res = ListWrapper.create();
  var indexMap = MapWrapper.create();
  for (var i = 0; i < records.length; ++i) {
    var r = records[i];
    var record = _replaceIndices(r, res.length + 1, indexMap);
    var matchingRecord = _findMatching(record, res);
    if (isPresent(matchingRecord) && record.lastInBinding) {
      ListWrapper.push(res, _selfRecord(record, matchingRecord.selfIndex, res.length + 1));
      MapWrapper.set(indexMap, r.selfIndex, matchingRecord.selfIndex);
    } else if (isPresent(matchingRecord) && !record.lastInBinding) {
      MapWrapper.set(indexMap, r.selfIndex, matchingRecord.selfIndex);
    } else {
      ListWrapper.push(res, record);
      MapWrapper.set(indexMap, r.selfIndex, record.selfIndex);
    }
  }
  return res;
}
Object.defineProperty(coalesce, "parameters", {get: function() {
    return [[$traceurRuntime.genericType(List, ProtoRecord)]];
  }});
function _selfRecord(r, contextIndex, selfIndex) {
  return new ProtoRecord(RECORD_TYPE_SELF, "self", null, [], r.fixedArgs, contextIndex, selfIndex, r.bindingRecord, r.expressionAsString, r.lastInBinding, r.lastInDirective);
}
Object.defineProperty(_selfRecord, "parameters", {get: function() {
    return [[ProtoRecord], [$traceurRuntime.type.number], [$traceurRuntime.type.number]];
  }});
function _findMatching(r, rs) {
  return ListWrapper.find(rs, (function(rr) {
    return rr.mode === r.mode && rr.funcOrValue === r.funcOrValue && rr.contextIndex === r.contextIndex && ListWrapper.equals(rr.args, r.args);
  }));
}
Object.defineProperty(_findMatching, "parameters", {get: function() {
    return [[ProtoRecord], [$traceurRuntime.genericType(List, ProtoRecord)]];
  }});
function _replaceIndices(r, selfIndex, indexMap) {
  var args = ListWrapper.map(r.args, (function(a) {
    return _map(indexMap, a);
  }));
  var contextIndex = _map(indexMap, r.contextIndex);
  return new ProtoRecord(r.mode, r.name, r.funcOrValue, args, r.fixedArgs, contextIndex, selfIndex, r.bindingRecord, r.expressionAsString, r.lastInBinding, r.lastInDirective);
}
Object.defineProperty(_replaceIndices, "parameters", {get: function() {
    return [[ProtoRecord], [$traceurRuntime.type.number], [Map]];
  }});
function _map(indexMap, value) {
  var r = MapWrapper.get(indexMap, value);
  return isPresent(r) ? r : value;
}
Object.defineProperty(_map, "parameters", {get: function() {
    return [[Map], [$traceurRuntime.type.number]];
  }});
//# sourceMappingURL=coalesce.js.map

//# sourceMappingURL=./coalesce.map