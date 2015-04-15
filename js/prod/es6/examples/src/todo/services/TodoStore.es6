import {ListWrapper} from 'angular2/src/facade/collection';
export class KeyModel {
  constructor(key) {
    this._key = key;
  }
}
Object.defineProperty(KeyModel, "parameters", {get: function() {
    return [[assert.type.number]];
  }});
export class Todo extends KeyModel {
  constructor(key, theTitle, isCompleted) {
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
    this.list.push(record);
  }
  remove(record) {
    this.spliceOut(record);
  }
  removeBy(callback) {
    var records = ListWrapper.filter(this.list, callback);
    ListWrapper.removeAll(this.list, records);
  }
  spliceOut(record) {
    var i = this.indexFor(record);
    if (i > -1) {
      return this.list.splice(i, 1)[0];
    }
    return null;
  }
  indexFor(record) {
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