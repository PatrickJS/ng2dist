import {assert} from "rtts_assert/rtts_assert";
import {ListWrapper} from 'angular2/src/facade/collection';
export class KeyModel {
  constructor(key) {
    assert.argumentTypes(key, assert.type.number);
    this._key = key;
  }
}
Object.defineProperty(KeyModel, "parameters", {get: function() {
    return [[assert.type.number]];
  }});
export class Todo extends KeyModel {
  constructor(key, theTitle, isCompleted) {
    assert.argumentTypes(key, assert.type.number, theTitle, assert.type.string, isCompleted, assert.type.boolean);
    super(key);
    this.title = theTitle;
    this.completed = isCompleted;
  }
}
Object.defineProperty(Todo, "parameters", {get: function() {
    return [[assert.type.number], [assert.type.string], [assert.type.boolean]];
  }});
export class TodoFactory {
  constructor() {
    this._uid = 0;
  }
  nextUid() {
    this._uid = this._uid + 1;
    return this._uid;
  }
  create(title, isCompleted) {
    assert.argumentTypes(title, assert.type.string, isCompleted, assert.type.boolean);
    return new Todo(this.nextUid(), title, isCompleted);
  }
}
Object.defineProperty(TodoFactory.prototype.create, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.boolean]];
  }});
export class Store {
  constructor() {
    this.list = [];
  }
  add(record) {
    assert.argumentTypes(record, KeyModel);
    this.list.push(record);
  }
  remove(record) {
    assert.argumentTypes(record, KeyModel);
    this.spliceOut(record);
  }
  removeBy(callback) {
    assert.argumentTypes(callback, Function);
    var records = ListWrapper.filter(this.list, callback);
    ListWrapper.removeAll(this.list, records);
  }
  spliceOut(record) {
    assert.argumentTypes(record, KeyModel);
    var i = this.indexFor(record);
    if (i > -1) {
      return this.list.splice(i, 1)[0];
    }
    return null;
  }
  indexFor(record) {
    assert.argumentTypes(record, KeyModel);
    return this.list.indexOf(record);
  }
}
Object.defineProperty(Store.prototype.add, "parameters", {get: function() {
    return [[KeyModel]];
  }});
Object.defineProperty(Store.prototype.remove, "parameters", {get: function() {
    return [[KeyModel]];
  }});
Object.defineProperty(Store.prototype.removeBy, "parameters", {get: function() {
    return [[Function]];
  }});
Object.defineProperty(Store.prototype.spliceOut, "parameters", {get: function() {
    return [[KeyModel]];
  }});
Object.defineProperty(Store.prototype.indexFor, "parameters", {get: function() {
    return [[KeyModel]];
  }});
//# sourceMappingURL=TodoStore.js.map

//# sourceMappingURL=./TodoStore.map