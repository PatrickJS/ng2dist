import {ddescribe,
  describe,
  it,
  iit,
  expect,
  beforeEach} from 'angular2/test_lib';
import {DirectiveMetadataReader} from 'angular2/src/core/compiler/directive_metadata_reader';
import {DynamicComponentLoader} from 'angular2/src/core/compiler/dynamic_component_loader';
import {Decorator,
  Viewport} from 'angular2/src/core/annotations/annotations';
class SomeDecorator {}
Object.defineProperty(SomeDecorator, "annotations", {get: function() {
    return [new Decorator({selector: 'someDecorator'})];
  }});
class SomeViewport {}
Object.defineProperty(SomeViewport, "annotations", {get: function() {
    return [new Viewport({selector: 'someViewport'})];
  }});
export function main() {
  describe("DynamicComponentLoader", () => {
    var loader;
    beforeEach(() => {
      loader = new DynamicComponentLoader(null, new DirectiveMetadataReader(), null, null);
    });
    describe("loadIntoExistingLocation", () => {
      describe('Load errors', () => {
        it('should throw when trying to load a decorator', () => {
          expect(() => loader.loadIntoExistingLocation(SomeDecorator, null)).toThrowError("Could not load 'SomeDecorator' because it is not a component.");
        });
        it('should throw when trying to load a viewport', () => {
          expect(() => loader.loadIntoExistingLocation(SomeViewport, null)).toThrowError("Could not load 'SomeViewport' because it is not a component.");
        });
      });
    });
  });
}
//# sourceMappingURL=dynamic_component_loader_spec.js.map

//# sourceMappingURL=./dynamic_component_loader_spec.map