import {assert} from "rtts_assert/rtts_assert";
import {bootstrap,
  Component,
  Decorator,
  View,
  NgElement} from 'angular2/angular2';
import {Injectable} from 'angular2/di';
class HelloCmp {
  constructor(service) {
    assert.argumentTypes(service, GreetingService);
    this.greeting = service.greeting;
  }
  changeGreeting() {
    this.greeting = 'howdy';
  }
}
Object.defineProperty(HelloCmp, "annotations", {get: function() {
    return [new Component({
      selector: 'hello-app',
      injectables: [GreetingService]
    }), new View({
      template: `<div class="greeting">{{greeting}} <span red>world</span>!</div>
           <button class="changeButton" (click)="changeGreeting()">change greeting</button><content></content>`,
      directives: [RedDec]
    })];
  }});
Object.defineProperty(HelloCmp, "parameters", {get: function() {
    return [[GreetingService]];
  }});
class RedDec {
  constructor(el) {
    assert.argumentTypes(el, NgElement);
    el.domElement.style.color = 'red';
  }
}
Object.defineProperty(RedDec, "annotations", {get: function() {
    return [new Decorator({selector: '[red]'})];
  }});
Object.defineProperty(RedDec, "parameters", {get: function() {
    return [[NgElement]];
  }});
class GreetingService {
  constructor() {
    this.greeting = 'hello';
  }
}
Object.defineProperty(GreetingService, "annotations", {get: function() {
    return [new Injectable()];
  }});
export function main() {
  bootstrap(HelloCmp);
}
//# sourceMappingURL=index_common.js.map

//# sourceMappingURL=./index_common.map