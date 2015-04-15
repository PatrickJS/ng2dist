import {assert} from "rtts_assert/rtts_assert";
import {int,
  isBlank,
  BaseException} from 'angular2/src/facade/lang';
import * as eiModule from './element_injector';
import {DirectiveBinding} from './element_injector';
import {List,
  StringMap} from 'angular2/src/facade/collection';
import * as viewModule from './view';
export class ElementBinder {
  constructor(index, parent, distanceToParent, protoElementInjector, componentDirective, viewportDirective) {
    assert.argumentTypes(index, int, parent, ElementBinder, distanceToParent, int, protoElementInjector, eiModule.ProtoElementInjector, componentDirective, DirectiveBinding, viewportDirective, DirectiveBinding);
    if (isBlank(index)) {
      throw new BaseException('null index not allowed.');
    }
    this.protoElementInjector = protoElementInjector;
    this.componentDirective = componentDirective;
    this.viewportDirective = viewportDirective;
    this.parent = parent;
    this.index = index;
    this.distanceToParent = distanceToParent;
    this.hostListeners = null;
    this.nestedProtoView = null;
  }
}
Object.defineProperty(ElementBinder, "parameters", {get: function() {
    return [[int], [ElementBinder], [int], [eiModule.ProtoElementInjector], [DirectiveBinding], [DirectiveBinding]];
  }});
//# sourceMappingURL=element_binder.js.map

//# sourceMappingURL=./element_binder.map