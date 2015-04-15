import * as app from './index_common';
import {reflector} from 'angular2/src/reflection/reflection';
import {ReflectionCapabilities} from 'angular2/src/reflection/reflection_capabilities';
export function main() {
  reflector.reflectionCapabilities = new ReflectionCapabilities();
  app.main();
}
//# sourceMappingURL=index.js.map

//# sourceMappingURL=./index.map