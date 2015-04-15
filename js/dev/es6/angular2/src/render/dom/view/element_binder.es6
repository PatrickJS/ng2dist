import {assert} from "rtts_assert/rtts_assert";
import {AST} from 'angular2/change_detection';
import {SetterFn} from 'angular2/src/reflection/types';
import {List,
  ListWrapper} from 'angular2/src/facade/collection';
import * as protoViewModule from './proto_view';
export class ElementBinder {
  constructor({textNodeIndices,
    contentTagSelector,
    nestedProtoView,
    componentId,
    eventLocals,
    localEvents,
    globalEvents,
    parentIndex,
    distanceToParent,
    propertySetters}) {
    this.textNodeIndices = textNodeIndices;
    this.contentTagSelector = contentTagSelector;
    this.nestedProtoView = nestedProtoView;
    this.componentId = componentId;
    this.eventLocals = eventLocals;
    this.localEvents = localEvents;
    this.globalEvents = globalEvents;
    this.parentIndex = parentIndex;
    this.distanceToParent = distanceToParent;
    this.propertySetters = propertySetters;
  }
}
export class Event {
  constructor(name, target, fullName) {
    assert.argumentTypes(name, assert.type.string, target, assert.type.string, fullName, assert.type.string);
    this.name = name;
    this.target = target;
    this.fullName = fullName;
  }
}
Object.defineProperty(Event, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string], [assert.type.string]];
  }});
//# sourceMappingURL=element_binder.js.map

//# sourceMappingURL=./element_binder.map