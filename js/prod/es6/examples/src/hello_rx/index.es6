import {bootstrap,
  Component,
  Decorator,
  View,
  NgElement} from 'angular2/angular2';
import {For} from 'angular2/directives';
import {LifeCycle} from 'angular2/src/core/life_cycle/life_cycle';
import {bind} from 'angular2/di';
import {Observable,
  BehaviorSubject} from 'rx/dist/rx.all';
class HelloCmp {
  constructor(lc) {
    var x = [Observable.timer(100, 1000).timeInterval().map((v) => v.value), Observable.timer(100, 2000).timeInterval().map((v) => v.value), Observable.timer(100, 3000).timeInterval().map((v) => v.value)];
    this.timers = new BehaviorSubject(x);
    Observable.timer(100, 1000).timeInterval().map((v) => v.value).subscribe((x) => {
      lc.tick();
    });
  }
}
Object.defineProperty(HelloCmp, "annotations", {get: function() {
    return [new Component({selector: 'hello-app'}), new View({
      template: `<timers-cmp [timers]="timers">`,
      directives: [TimersCmp]
    })];
  }});
Object.defineProperty(HelloCmp, "parameters", {get: function() {
    return [[LifeCycle]];
  }});
class TimersCmp {}
Object.defineProperty(TimersCmp, "annotations", {get: function() {
    return [new Component({
      selector: 'timers-cmp',
      properties: {timers: 'timers'}
    }), new View({
      template: `
    <timer-cmp *for="var t of timers|async" [timer]="t"></timer-cmp>
  `,
      directives: [TimerCmp, For]
    })];
  }});
class TimerCmp {}
Object.defineProperty(TimerCmp, "annotations", {get: function() {
    return [new Component({
      selector: 'timer-cmp',
      properties: {timer: 'timer | async'}
    }), new View({
      template: `<div>Time {{timer}}</div>`,
      directives: []
    })];
  }});
export function main() {
  bootstrap(HelloCmp);
}
//# sourceMappingURL=index.js.map

//# sourceMappingURL=./index.map