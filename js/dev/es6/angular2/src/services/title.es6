import {assert} from "rtts_assert/rtts_assert";
import {DOM} from 'angular2/src/dom/dom_adapter';
export class Title {
  getTitle() {
    return assert.returnType((DOM.getTitle()), assert.type.string);
  }
  setTitle(newTitle) {
    assert.argumentTypes(newTitle, assert.type.string);
    DOM.setTitle(newTitle);
  }
}
Object.defineProperty(Title.prototype.setTitle, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
//# sourceMappingURL=title.js.map

//# sourceMappingURL=./title.map