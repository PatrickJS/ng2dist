import {AsyncTestCompleter,
  inject,
  ddescribe,
  describe,
  it,
  iit,
  xit,
  expect,
  SpyObject} from 'angular2/test_lib';
import {DOM,
  DomAdapter} from 'angular2/src/dom/dom_adapter';
import {NgElement} from 'angular2/src/core/compiler/ng_element';
import {Ruler,
  Rectangle} from 'angular2/src/services/ruler';
import {createRectangle} from './rectangle_mock';
class DomAdapterMock extends DomAdapter {
  constructor(rect) {
    super();
    this.rect = rect;
  }
  getBoundingClientRect(elm) {
    return this.rect;
  }
}
function assertDimensions(rect, left, right, top, bottom, width, height) {
  expect(rect.left).toEqual(left);
  expect(rect.right).toEqual(right);
  expect(rect.top).toEqual(top);
  expect(rect.bottom).toEqual(bottom);
  expect(rect.width).toEqual(width);
  expect(rect.height).toEqual(height);
}
Object.defineProperty(assertDimensions, "parameters", {get: function() {
    return [[Rectangle], [], [], [], [], [], []];
  }});
export function main() {
  describe('ruler service', () => {
    it('should allow measuring NgElements', inject([AsyncTestCompleter], (async) => {
      var ruler = new Ruler(new DomAdapterMock(createRectangle(10, 20, 200, 100)));
      ruler.measure(new FakeNgElement(null)).then((rect) => {
        assertDimensions(rect, 10, 210, 20, 120, 200, 100);
        async.done();
      });
    }));
    it('should return 0 for all rectangle values while measuring elements in a document fragment', inject([AsyncTestCompleter], (async) => {
      var ruler = new Ruler(DOM);
      ruler.measure(new FakeNgElement(DOM.createElement('div'))).then((rect) => {
        assertDimensions(rect, 0, 0, 0, 0, 0, 0);
        async.done();
      });
    }));
  });
}
class FakeNgElement extends NgElement {
  constructor(domElement) {
    super(null, null);
    this._domElement = domElement;
  }
  get domElement() {
    return this._domElement;
  }
}
//# sourceMappingURL=ruler_spec.js.map

//# sourceMappingURL=./ruler_spec.map