System.register(["angular2/angular2", "./services/TodoStore"], function($__export) {
  "use strict";
  var bootstrap,
      Component,
      View,
      For,
      Store,
      Todo,
      TodoFactory,
      TodoApp;
  function main() {
    bootstrap(TodoApp);
  }
  $__export("main", main);
  return {
    setters: [function($__m) {
      bootstrap = $__m.bootstrap;
      Component = $__m.Component;
      View = $__m.View;
      For = $__m.For;
    }, function($__m) {
      Store = $__m.Store;
      Todo = $__m.Todo;
      TodoFactory = $__m.TodoFactory;
    }],
    execute: function() {
      TodoApp = (function() {
        var TodoApp = function TodoApp(store, factory) {
          this.todoStore = store;
          this.todoEdit = null;
          this.factory = factory;
        };
        return ($traceurRuntime.createClass)(TodoApp, {
          enterTodo: function($event, inputElement) {
            if ($event.which === 13) {
              this.addTodo(inputElement.value);
              inputElement.value = '';
            }
          },
          editTodo: function(todo) {
            this.todoEdit = todo;
          },
          doneEditing: function($event, todo) {
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
          },
          addTodo: function(newTitle) {
            this.todoStore.add(this.factory.create(newTitle, false));
          },
          completeMe: function(todo) {
            todo.completed = !todo.completed;
          },
          deleteMe: function(todo) {
            this.todoStore.remove(todo);
          },
          toggleAll: function($event) {
            var $__0 = this;
            var isComplete = $event.target.checked;
            this.todoStore.list.forEach((function(todo) {
              todo.completed = isComplete;
              $__0.todoStore.save(todo);
            }));
          },
          clearCompleted: function() {
            this.todoStore.removeBy((function(todo) {
              return todo.completed;
            }));
          }
        }, {});
      }());
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
    }
  };
});
//# sourceMappingURL=index.es6.map

//# sourceMappingURL=./index.js.map