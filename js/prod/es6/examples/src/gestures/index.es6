import {bootstrap,
  Component,
  View} from 'angular2/angular2';
import {reflector} from 'angular2/src/reflection/reflection';
import {ReflectionCapabilities} from 'angular2/src/reflection/reflection_capabilities';
class GesturesCmp {
  constructor() {
    this.swipeDirection = '-';
    this.pinchScale = 1;
    this.rotateAngle = 0;
  }
  onSwipe(event) {
    this.swipeDirection = event.deltaX > 0 ? 'right' : 'left';
  }
  onPinch(event) {
    this.pinchScale = event.scale;
  }
  onRotate(event) {
    this.rotateAngle = event.rotation;
  }
}
Object.defineProperty(GesturesCmp, "annotations", {get: function() {
    return [new Component({selector: 'gestures-app'}), new View({templateUrl: 'template.html'})];
  }});
export function main() {
  reflector.reflectionCapabilities = new ReflectionCapabilities();
  bootstrap(GesturesCmp);
}
//# sourceMappingURL=index.js.map

//# sourceMappingURL=./index.map