import {bootstrap,
  Component,
  View} from 'angular2/angular2';
import {KeyEventsPlugin} from 'angular2/src/render/dom/events/key_events';
import {reflector} from 'angular2/src/reflection/reflection';
import {ReflectionCapabilities} from 'angular2/src/reflection/reflection_capabilities';
class KeyEventsApp {
  constructor() {
    this.lastKey = '(none)';
    this.shiftEnter = false;
  }
  onKeyDown(event) {
    this.lastKey = KeyEventsPlugin.getEventFullKey(event);
    event.preventDefault();
  }
  onShiftEnter(event) {
    this.shiftEnter = true;
    event.preventDefault();
  }
  resetShiftEnter() {
    this.shiftEnter = false;
  }
}
Object.defineProperty(KeyEventsApp, "annotations", {get: function() {
    return [new Component({selector: 'key-events-app'}), new View({template: `Click in the following area and press a key to display its name:<br>
  <div (keydown)="onKeyDown($event)" class="sample-area" tabindex="0">{{lastKey}}</div><br>
  Click in the following area and press shift.enter:<br>
  <div
    (keydown.shift.enter)="onShiftEnter($event)"
    (click)="resetShiftEnter()"
    class="sample-area"
    tabindex="0"
  >{{shiftEnter ? 'You pressed shift.enter!' : ''}}</div>`})];
  }});
export function main() {
  reflector.reflectionCapabilities = new ReflectionCapabilities();
  bootstrap(KeyEventsApp);
}
//# sourceMappingURL=index.js.map

//# sourceMappingURL=./index.map