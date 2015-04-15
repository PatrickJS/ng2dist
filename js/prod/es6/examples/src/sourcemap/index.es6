import {BaseException,
  print,
  CONST} from 'angular2/src/facade/lang';
class TestAnnotation {
  constructor() {}
}
Object.defineProperty(TestAnnotation, "annotations", {get: function() {
    return [new CONST()];
  }});
class Test {
  run() {
    try {
      throw new BaseException('Sourcemap test');
    } catch (e) {
      print(e);
    }
  }
}
Object.defineProperty(Test, "annotations", {get: function() {
    return [new TestAnnotation()];
  }});
export function main() {
  new Test().run();
}
//# sourceMappingURL=index.js.map

//# sourceMappingURL=./index.map