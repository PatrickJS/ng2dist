import {bootstrap,
  Component,
  Decorator,
  View,
  If,
  For,
  EventEmitter} from 'angular2/angular2';
import {FormBuilder,
  Validators,
  FormDirectives,
  ControlGroup} from 'angular2/forms';
class HeaderFields {}
Object.defineProperty(HeaderFields, "annotations", {get: function() {
    return [new Component({
      selector: 'survey-header',
      properties: {"header": "header"}
    }), new View({
      template: `
      <div [control-group]="header">
        <div>
          <label>Title:</label> <br/>
          <input type="text" control="title"/>
          <div *if="! header.controls.title.valid && header.controls.title.dirty">
            Title is required
          </div>
        </div>

        <div>
          <label>Description:</label> <br/>
          <textarea control="description"></textarea>
          <div *if="! header.controls.description.valid && header.controls.description.dirty">
            Description is required
          </div>
        </div>

        <div>
          <label>Publish Date:</label> <br/>
          <input type="date" control="date"/>
        </div>
      </div>
  `,
      directives: [FormDirectives, If]
    })];
  }});
class SurveyQuestion {
  constructor(onDelete) {
    this.onDelete = onDelete;
  }
  deleteQuestion() {
    this.onDelete();
  }
}
Object.defineProperty(SurveyQuestion, "annotations", {get: function() {
    return [new Component({
      selector: 'survey-question',
      properties: {
        "question": "question",
        "index": "index"
      }
    }), new View({
      template: `
      <h2>Question #{{index}}</h2>

      <button (click)="deleteQuestion()">Delete</button>

      <div [control-group]="question">
        <div>
          <label>Type:</label> <br/>
          <select control="type">
            <option value=""></option>
            <option value="text">Text</option>
            <option value="checkbox">Checkbox</option>
            <option value="textarea">Textarea</option>
          </select>
          <div *if="! question.controls.type.valid && question.controls.type.dirty">
            Type is required
          </div>
        </div>

        <div>
          <label>Question:</label> <br/>
          <input type="text" control="questionText">
          <div *if="! question.controls.questionText.valid && question.controls.questionText.dirty">
            Question is required
          </div>
        </div>

        <div *if="question.contains('responseLength')">
          <label>Response Length:</label> <br/>
          <input type="number" control="responseLength">
          <div *if="! question.controls.responseLength.valid && question.controls.responseLength.dirty">
            Length is required
          </div>
        </div>
      </div>
  `,
      directives: [FormDirectives, If]
    })];
  }});
Object.defineProperty(SurveyQuestion, "parameters", {get: function() {
    return [[Function, new EventEmitter("delete")]];
  }});
class SurveyBuilder {
  constructor(b) {
    this.builder = b;
    this.form = b.group({
      "header": b.group({
        "title": ["", Validators.required],
        "description": ["", Validators.required],
        "date": ""
      }),
      "questions": b.array([])
    });
  }
  addQuestion() {
    var newQuestion = this.builder.group({
      "type": ["", Validators.required],
      "questionText": ["", Validators.required],
      "responseLength": [100, Validators.required]
    }, {"optionals": {"responseLength": false}});
    newQuestion.controls.type.valueChanges.subscribe((v) => v == 'text' || v == 'textarea' ? newQuestion.include('responseLength') : newQuestion.exclude('responseLength'));
    this.form.controls.questions.push(newQuestion);
  }
  deleteQuestion(index) {
    this.form.controls.questions.removeAt(index);
  }
  submitForm() {
    console.log("Submitting a form");
    console.log("value", this.form.value, "valid", this.form.valid, "errors", this.form.errors);
  }
}
Object.defineProperty(SurveyBuilder, "annotations", {get: function() {
    return [new Component({
      selector: 'survey-builder-app',
      injectables: [FormBuilder]
    }), new View({
      template: `
    <h1>Create New Survey</h1>

    <div [control-group]="form">
      <survey-header [header]="form.controls.header"></survey-header>

      <button (click)="addQuestion()">Add Question</button>
      <survey-question
          *for="var q of form.controls.questions.controls; var i=index"
          [question]="q"
          [index]="i + 1"
          (delete)="deleteQuestion(i)">
      </survey-question>

      <button (click)="submitForm()">Submit</button>
    </div>
  `,
      directives: [FormDirectives, For, HeaderFields, SurveyQuestion]
    })];
  }});
Object.defineProperty(SurveyBuilder, "parameters", {get: function() {
    return [[FormBuilder]];
  }});
Object.defineProperty(SurveyBuilder.prototype.deleteQuestion, "parameters", {get: function() {
    return [[assert.type.number]];
  }});
export function main() {
  bootstrap(SurveyBuilder);
}
//# sourceMappingURL=index.es6.map

//# sourceMappingURL=./index.map