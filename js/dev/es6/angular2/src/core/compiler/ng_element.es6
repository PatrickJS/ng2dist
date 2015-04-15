import {assert} from "rtts_assert/rtts_assert";
import {DOM} from 'angular2/src/dom/dom_adapter';
import {normalizeBlank} from 'angular2/src/facade/lang';
import * as viewModule from '../compiler/view';
import {DirectDomViewRef} from 'angular2/src/render/dom/direct_dom_renderer';
export class NgElement {
  constructor(view, boundElementIndex) {
    this._view = view;
    this._boundElementIndex = boundElementIndex;
  }
  get domElement() {
    var domViewRef = assert.type(this._view.render, DirectDomViewRef);
    return domViewRef.delegate.boundElements[this._boundElementIndex];
  }
  getAttribute(name) {
    assert.argumentTypes(name, assert.type.string);
    return normalizeBlank(DOM.getAttribute(this.domElement, name));
  }
}
Object.defineProperty(NgElement.prototype.getAttribute, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
//# sourceMappingURL=ng_element.js.map

//# sourceMappingURL=./ng_element.map