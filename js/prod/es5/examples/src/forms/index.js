System.register(["angular2/angular2", "angular2/forms"], function($__export) {
  "use strict";
  var bootstrap,
      Component,
      Decorator,
      View,
      If,
      For,
      EventEmitter,
      FormBuilder,
      Validators,
      FormDirectives,
      ControlGroup,
      HeaderFields,
      SurveyQuestion,
      SurveyBuilder;
  function main() {
    bootstrap(SurveyBuilder);
  }
  $__export("main", main);
  return {
    setters: [function($__m) {
      bootstrap = $__m.bootstrap;
      Component = $__m.Component;
      Decorator = $__m.Decorator;
      View = $__m.View;
      If = $__m.If;
      For = $__m.For;
      EventEmitter = $__m.EventEmitter;
    }, function($__m) {
      FormBuilder = $__m.FormBuilder;
      Validators = $__m.Validators;
      FormDirectives = $__m.FormDirectives;
      ControlGroup = $__m.ControlGroup;
    }],
    execute: function() {
      HeaderFields = (function() {
        var HeaderFields = function HeaderFields() {
          ;
        };
        return ($traceurRuntime.createClass)(HeaderFields, {}, {});
      }());
      Object.defineProperty(HeaderFields, "annotations", {get: function() {
          return [new Component({
            selector: 'survey-header',
            properties: {"header": "header"}
          }), new View({
            template: "\n      <div [control-group]=\"header\">\n        <div>\n          <label>Title:</label> <br/>\n          <input type=\"text\" control=\"title\"/>\n          <div *if=\"! header.controls.title.valid && header.controls.title.dirty\">\n            Title is required\n          </div>\n        </div>\n\n        <div>\n          <label>Description:</label> <br/>\n          <textarea control=\"description\"></textarea>\n          <div *if=\"! header.controls.description.valid && header.controls.description.dirty\">\n            Description is required\n          </div>\n        </div>\n\n        <div>\n          <label>Publish Date:</label> <br/>\n          <input type=\"date\" control=\"date\"/>\n        </div>\n      </div>\n  ",
            directives: [FormDirectives, If]
          })];
        }});
      SurveyQuestion = (function() {
        var SurveyQuestion = function SurveyQuestion(onDelete) {
          this.onDelete = onDelete;
        };
        return ($traceurRuntime.createClass)(SurveyQuestion, {deleteQuestion: function() {
            this.onDelete();
          }}, {});
      }());
      Object.defineProperty(SurveyQuestion, "annotations", {get: function() {
          return [new Component({
            selector: 'survey-question',
            properties: {
              "question": "question",
              "index": "index"
            }
          }), new View({
            template: "\n      <h2>Question #{{index}}</h2>\n\n      <button (click)=\"deleteQuestion()\">Delete</button>\n\n      <div [control-group]=\"question\">\n        <div>\n          <label>Type:</label> <br/>\n          <select control=\"type\">\n            <option value=\"\"></option>\n            <option value=\"text\">Text</option>\n            <option value=\"checkbox\">Checkbox</option>\n            <option value=\"textarea\">Textarea</option>\n          </select>\n          <div *if=\"! question.controls.type.valid && question.controls.type.dirty\">\n            Type is required\n          </div>\n        </div>\n\n        <div>\n          <label>Question:</label> <br/>\n          <input type=\"text\" control=\"questionText\">\n          <div *if=\"! question.controls.questionText.valid && question.controls.questionText.dirty\">\n            Question is required\n          </div>\n        </div>\n\n        <div *if=\"question.contains('responseLength')\">\n          <label>Response Length:</label> <br/>\n          <input type=\"number\" control=\"responseLength\">\n          <div *if=\"! question.controls.responseLength.valid && question.controls.responseLength.dirty\">\n            Length is required\n          </div>\n        </div>\n      </div>\n  ",
            directives: [FormDirectives, If]
          })];
        }});
      Object.defineProperty(SurveyQuestion, "parameters", {get: function() {
          return [[Function, new EventEmitter("delete")]];
        }});
      SurveyBuilder = (function() {
        var SurveyBuilder = function SurveyBuilder(b) {
          this.builder = b;
          this.form = b.group({
            "header": b.group({
              "title": ["", Validators.required],
              "description": ["", Validators.required],
              "date": ""
            }),
            "questions": b.array([])
          });
        };
        return ($traceurRuntime.createClass)(SurveyBuilder, {
          addQuestion: function() {
            var newQuestion = this.builder.group({
              "type": ["", Validators.required],
              "questionText": ["", Validators.required],
              "responseLength": [100, Validators.required]
            }, {"optionals": {"responseLength": false}});
            newQuestion.controls.type.valueChanges.subscribe((function(v) {
              return v == 'text' || v == 'textarea' ? newQuestion.include('responseLength') : newQuestion.exclude('responseLength');
            }));
            this.form.controls.questions.push(newQuestion);
          },
          deleteQuestion: function(index) {
            this.form.controls.questions.removeAt(index);
          },
          submitForm: function() {
            console.log("Submitting a form");
            console.log("value", this.form.value, "valid", this.form.valid, "errors", this.form.errors);
          }
        }, {});
      }());
      Object.defineProperty(SurveyBuilder, "annotations", {get: function() {
          return [new Component({
            selector: 'survey-builder-app',
            injectables: [FormBuilder]
          }), new View({
            template: "\n    <h1>Create New Survey</h1>\n\n    <div [control-group]=\"form\">\n      <survey-header [header]=\"form.controls.header\"></survey-header>\n\n      <button (click)=\"addQuestion()\">Add Question</button>\n      <survey-question\n          *for=\"var q of form.controls.questions.controls; var i=index\"\n          [question]=\"q\"\n          [index]=\"i + 1\"\n          (delete)=\"deleteQuestion(i)\">\n      </survey-question>\n\n      <button (click)=\"submitForm()\">Submit</button>\n    </div>\n  ",
            directives: [FormDirectives, For, HeaderFields, SurveyQuestion]
          })];
        }});
      Object.defineProperty(SurveyBuilder, "parameters", {get: function() {
          return [[FormBuilder]];
        }});
      Object.defineProperty(SurveyBuilder.prototype.deleteQuestion, "parameters", {get: function() {
          return [[assert.type.number]];
        }});
    }
  };
});
//# sourceMappingURL=index.es6.map

//# sourceMappingURL=./index.js.map