import {isPresent} from 'angular2/src/facade/lang';
import {ListWrapper} from 'angular2/src/facade/collection';
import {ddescribe,
  describe,
  it,
  iit,
  expect,
  beforeEach} from 'angular2/test_lib';
import {DirectiveMetadataReader} from 'angular2/src/core/compiler/directive_metadata_reader';
import {Decorator,
  Component,
  Viewport} from 'angular2/src/core/annotations/annotations';
import {DirectiveMetadata} from 'angular2/src/core/compiler/directive_metadata';
import {Injectable,
  Injector} from 'angular2/di';
class SomeInjectable {}
Object.defineProperty(SomeInjectable, "annotations", {get: function() {
    return [new Injectable()];
  }});
class SomeDecorator {}
Object.defineProperty(SomeDecorator, "annotations", {get: function() {
    return [new Decorator({selector: 'someDecorator'})];
  }});
class SomeComponent {}
Object.defineProperty(SomeComponent, "annotations", {get: function() {
    return [new Component({
      selector: 'someComponent',
      injectables: [SomeInjectable]
    })];
  }});
class SomeViewport {}
Object.defineProperty(SomeViewport, "annotations", {get: function() {
    return [new Viewport({selector: 'someViewport'})];
  }});
class SomeDirectiveWithoutAnnotation {}
export function main() {
  describe("DirectiveMetadataReader", () => {
    var reader;
    beforeEach(() => {
      reader = new DirectiveMetadataReader();
    });
    it('should read out the Decorator annotation', () => {
      var directiveMetadata = reader.read(SomeDecorator);
      expect(directiveMetadata).toEqual(new DirectiveMetadata(SomeDecorator, new Decorator({selector: 'someDecorator'}), null));
    });
    it('should read out the Viewport annotation', () => {
      var directiveMetadata = reader.read(SomeViewport);
      expect(directiveMetadata).toEqual(new DirectiveMetadata(SomeViewport, new Viewport({selector: 'someViewport'}), null));
    });
    it('should read out the Component annotation', () => {
      var m = reader.read(SomeComponent);
      expect(m.type).toEqual(SomeComponent);
      expect(m.annotation).toEqual(new Component({
        selector: 'someComponent',
        injectables: [SomeInjectable]
      }));
      var resolvedList = ListWrapper.reduce(m.resolvedInjectables, function(prev, elem) {
        if (isPresent(elem)) {
          ListWrapper.push(prev, elem);
        }
        return prev;
      }, []);
      expect(resolvedList.length).toBe(1);
      expect(resolvedList[0].key.token).toBe(SomeInjectable);
    });
    it('should throw if not matching annotation is found', () => {
      expect(() => {
        reader.read(SomeDirectiveWithoutAnnotation);
      }).toThrowError('No Directive annotation found on SomeDirectiveWithoutAnnotation');
    });
  });
}
//# sourceMappingURL=directive_metadata_reader_spec.js.map

//# sourceMappingURL=./directive_metadata_reader_spec.map