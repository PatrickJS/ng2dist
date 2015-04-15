import {assert} from "rtts_assert/rtts_assert";
import {Promise,
  PromiseWrapper} from 'angular2/src/facade/async';
import {DomAdapter} from 'angular2/src/dom/dom_adapter';
import {NgElement} from 'angular2/src/core/compiler/ng_element';
export class Rectangle {
  constructor(left, top, width, height) {
    this.left = left;
    this.right = left + width;
    this.top = top;
    this.bottom = top + height;
    this.height = height;
    this.width = width;
  }
}
export class Ruler {
  constructor(domAdapter) {
    assert.argumentTypes(domAdapter, DomAdapter);
    this.domAdapter = domAdapter;
  }
  measure(el) {
    assert.argumentTypes(el, NgElement);
    var clntRect = this.domAdapter.getBoundingClientRect(el.domElement);
    return assert.returnType((PromiseWrapper.resolve(new Rectangle(clntRect.left, clntRect.top, clntRect.width, clntRect.height))), assert.genericType(Promise, Rectangle));
  }
}
Object.defineProperty(Ruler, "parameters", {get: function() {
    return [[DomAdapter]];
  }});
Object.defineProperty(Ruler.prototype.measure, "parameters", {get: function() {
    return [[NgElement]];
  }});
//# sourceMappingURL=ruler.js.map

//# sourceMappingURL=./ruler.map