import {Decorator} from 'angular2/angular2';
import {PropertySetter} from 'angular2/src/core/annotations/di';
export class MdInput {
  constructor() {}
}
Object.defineProperty(MdInput, "annotations", {get: function() {
    return [new Decorator({selector: 'md-input-container input'})];
  }});
export class MdInputContainer {}
Object.defineProperty(MdInputContainer, "annotations", {get: function() {
    return [new Decorator({selector: 'md-input-container'})];
  }});
//# sourceMappingURL=input.js.map

//# sourceMappingURL=./input.map