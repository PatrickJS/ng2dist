import {assert} from "rtts_assert/rtts_assert";
import {isBlank} from 'angular2/src/facade/lang';
import {Pipe,
  NO_CHANGE} from './pipe';
export class NullPipeFactory {
  supports(obj) {
    return assert.returnType((NullPipe.supportsObj(obj)), assert.type.boolean);
  }
  create(bpc) {
    return assert.returnType((new NullPipe()), Pipe);
  }
}
export class NullPipe extends Pipe {
  constructor() {
    super();
    this.called = false;
  }
  static supportsObj(obj) {
    return assert.returnType((isBlank(obj)), assert.type.boolean);
  }
  supports(obj) {
    return NullPipe.supportsObj(obj);
  }
  transform(value) {
    if (!this.called) {
      this.called = true;
      return null;
    } else {
      return NO_CHANGE;
    }
  }
}
//# sourceMappingURL=null_pipe.js.map

//# sourceMappingURL=./null_pipe.map