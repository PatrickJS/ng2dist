import {Component,
  View} from 'angular2/angular2';
import {PropertySetter,
  EventEmitter} from 'angular2/src/core/annotations/di';
import {onChange} from 'angular2/src/core/annotations/annotations';
import {isPresent,
  StringWrapper} from 'angular2/src/facade/lang';
export class MdButton {}
Object.defineProperty(MdButton, "annotations", {get: function() {
    return [new Component({selector: '[md-button]:not([href])'}), new View({templateUrl: 'angular2_material/src/components/button/button.html'})];
  }});
export class MdAnchor {
  constructor(tabIndexSetter) {
    this.tabIndexSetter = tabIndexSetter;
  }
  onClick(event) {
    if (isPresent(this.disabled) && this.disabled !== false) {
      event.preventDefault();
    }
  }
  onChange(_) {
    this.tabIndexSetter(this.disabled ? -1 : 0);
  }
}
Object.defineProperty(MdAnchor, "annotations", {get: function() {
    return [new Component({
      selector: '[md-button][href]',
      properties: {'disabled': 'disabled'},
      hostListeners: {'click': 'onClick($event)'},
      lifecycle: [onChange]
    }), new View({templateUrl: 'angular2_material/src/components/button/button.html'})];
  }});
Object.defineProperty(MdAnchor, "parameters", {get: function() {
    return [[Function, new PropertySetter('tabIndex')]];
  }});
//# sourceMappingURL=button.js.map

//# sourceMappingURL=./button.map