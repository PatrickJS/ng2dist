import {assert} from "rtts_assert/rtts_assert";
import {CompileElement} from './compile_element';
import * as compileControlModule from './compile_control';
export class CompileStep {
  process(parent, current, control) {
    assert.argumentTypes(parent, CompileElement, current, CompileElement, control, compileControlModule.CompileControl);
  }
}
Object.defineProperty(CompileStep.prototype.process, "parameters", {get: function() {
    return [[CompileElement], [CompileElement], [compileControlModule.CompileControl]];
  }});
//# sourceMappingURL=compile_step.js.map

//# sourceMappingURL=./compile_step.map