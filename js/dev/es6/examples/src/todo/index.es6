import {assert} from "rtts_assert/rtts_assert";
import {bootstrap,
  Component,
  View,
  For} from 'angular2/angular2';
import {Store,
  Todo,
  TodoFactory} from './services/TodoStore';
class TodoApp {
  constructor(store, factory) {
    assert.argumentTypes(store, Store, factory, TodoFactory);
    this.todoStore = store;
    this.todoEdit = null;
    this.factory = factory;
  }
  enterTodo($event, inputElement) {
    if ($event.which === 13) {
      this.addTodo(inputElement.value);
      inputElement.value = '';
    }
  }
  editTodo(todo) {
    assert.argumentTypes(todo, Todo);
    this.todoEdit = todo;
  }
  doneEditing($event, todo) {
    assert.argumentTypes($event, assert.type.any, todo, Todo);
    var which = $event.which;
    var target = $event.target;
    if (which === 13) {
      todo.title = target.value;
      this.todoStore.save(todo);
      this.todoEdit = null;
    } else if (which === 27) {
      this.todoEdit = null;
      target.value = todo.title;
    }
  }
  addTodo(newTitle) {
    assert.argumentTypes(newTitle, assert.type.string);
    this.todoStore.add(this.factory.create(newTitle, false));
  }
  completeMe(todo) {
    assert.argumentTypes(todo, Todo);
    todo.completed = !todo.completed;
  }
  deleteMe(todo) {
    assert.argumentTypes(todo, Todo);
    this.todoStore.remove(todo);
  }
  toggleAll($event) {
    var isComplete = $event.target.checked;
    this.todoStore.list.forEach((todo) => {
      todo.completed = isComplete;
      this.todoStore.save(todo);
    });
  }
  clearCompleted() {
    this.todoStore.removeBy((todo) => todo.completed);
  }
}
Object.defineProperty(TodoApp, "annotations", {get: function() {
    return [new Component({
      selector: 'todo-app',
      injectables: [Store, TodoFactory]
    }), new View({
      templateUrl: 'todo.html',
      directives: [For]
    })];
  }});
Object.defineProperty(TodoApp, "parameters", {get: function() {
    return [[Store], [TodoFactory]];
  }});
Object.defineProperty(TodoApp.prototype.editTodo, "parameters", {get: function() {
    return [[Todo]];
  }});
Object.defineProperty(TodoApp.prototype.doneEditing, "parameters", {get: function() {
    return [[], [Todo]];
  }});
Object.defineProperty(TodoApp.prototype.addTodo, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
Object.defineProperty(TodoApp.prototype.completeMe, "parameters", {get: function() {
    return [[Todo]];
  }});
Object.defineProperty(TodoApp.prototype.deleteMe, "parameters", {get: function() {
    return [[Todo]];
  }});
export function main() {
  bootstrap(TodoApp);
}
//# sourceMappingURL=index.js.map

//# sourceMappingURL=./index.map