System.register(["rtts_assert/rtts_assert", "angular2/angular2", "angular2/src/core/annotations/annotations", "angular2/src/facade/collection", "angular2/src/facade/lang", "angular2/src/core/annotations/di"], function($__export) {
  "use strict";
  var assert,
      Component,
      View,
      onAllChangesDone,
      Parent,
      onDestroy,
      onChange,
      ListWrapper,
      CONST,
      isPresent,
      isString,
      NumberWrapper,
      PropertySetter,
      MdGridList,
      MdGridTile,
      TileStyle;
  return {
    setters: [function($__m) {
      assert = $__m.assert;
    }, function($__m) {
      Component = $__m.Component;
      View = $__m.View;
      onAllChangesDone = $__m.onAllChangesDone;
      Parent = $__m.Parent;
    }, function($__m) {
      onDestroy = $__m.onDestroy;
      onChange = $__m.onChange;
    }, function($__m) {
      ListWrapper = $__m.ListWrapper;
    }, function($__m) {
      CONST = $__m.CONST;
      isPresent = $__m.isPresent;
      isString = $__m.isString;
      NumberWrapper = $__m.NumberWrapper;
    }, function($__m) {
      PropertySetter = $__m.PropertySetter;
    }],
    execute: function() {
      MdGridList = $__export("MdGridList", (function() {
        var MdGridList = function MdGridList() {
          this.tiles = [];
        };
        return ($traceurRuntime.createClass)(MdGridList, {
          onAllChangesDone: function() {},
          onChange: function(_) {
            if (!isPresent(this.spaceTracker)) {
              if (isString(this.cols)) {
                this.cols = NumberWrapper.parseIntAutoRadix(this.cols);
              }
              this.spaceTracker = ListWrapper.createFixedSize(this.cols);
              ListWrapper.fill(this.spaceTracker, 0);
            }
          },
          addTile: function(tile) {
            assert.argumentTypes(tile, MdGridTile);
            ListWrapper.push(this.tiles, tile);
          },
          removeTile: function(tile) {
            assert.argumentTypes(tile, MdGridTile);
            ListWrapper.remove(this.tiles, tile);
          },
          performLayout: function() {},
          getBaseTileSize: function(sizePercent, gutterFraction) {
            assert.argumentTypes(sizePercent, assert.type.number, gutterFraction, assert.type.number);
            return assert.returnType(((sizePercent + "% - ( " + this.gutterSize + " * " + gutterFraction + " )")), assert.type.string);
          },
          getTilePosition: function(baseSize, offset) {
            assert.argumentTypes(baseSize, assert.type.string, offset, assert.type.number);
            return assert.returnType((("calc( (" + baseSize + " + " + this.gutterSize + ") * " + offset + " )")), assert.type.string);
          },
          getTileSize: function(baseSize, span) {
            assert.argumentTypes(baseSize, assert.type.string, span, assert.type.number);
            return assert.returnType((("calc( (" + baseSize + " * " + span + ") + (" + (span - 1) + " * " + this.gutterSize + ") )")), assert.type.string);
          },
          getTileStyle: function(tile, rowIndex, colIndex) {
            assert.argumentTypes(tile, MdGridTile, rowIndex, assert.type.number, colIndex, assert.type.number);
            var percentWidthPerTile = this.cols / 100;
            var gutterWidthFractionPerTile = (this.cols - 1) / this.cols;
            var baseTileWidth = getBaseTileSize(percentWidthPerTile, gutterWidthFractionPerTile);
            var tileStyle = new TileStyle();
            tileStyle.left = getTilePosition(baseTileWidth, colIndex);
            tileStyle.width = getTileSize(baseTileWidth, tile.colspan);
            switch (this.rowHeightMode) {
              case 'fixed':
                tileStyle.top = getTilePosition(this.fixedRowHeight, rowIndex);
                tileStyle.height = getTileSize(this.fixedRowHeight, tile.rowspan);
                break;
              case 'ratio':
                var percentHeightPerTile = percentWidthPerTile / this.rowHeightRatio;
                var baseTileHeight = getBaseTileSize(percentHeightPerTile, gutterWidthFractionPerTile);
                tileStyle.marginTop = getTilePosition(baseTileHeight, rowIndex);
                tileStyle.paddingTop = getTileSize(baseTileHeight, tile.rowspan);
                break;
              case 'fit':
                var percentHeightPerTile;
                break;
            }
            return assert.returnType((tileStyle), TileStyle);
          }
        }, {});
      }()));
      Object.defineProperty(MdGridList, "annotations", {get: function() {
          return [new Component({
            selector: 'md-grid-list',
            properties: {
              'cols': 'cols',
              'gutterSize': 'gutter-size'
            },
            lifecycle: [onChange]
          }), new View({templateUrl: 'angular2_material/src/components/grid_list/grid_list.html'})];
        }});
      Object.defineProperty(MdGridList.prototype.addTile, "parameters", {get: function() {
          return [[MdGridTile]];
        }});
      Object.defineProperty(MdGridList.prototype.removeTile, "parameters", {get: function() {
          return [[MdGridTile]];
        }});
      Object.defineProperty(MdGridList.prototype.getBaseTileSize, "parameters", {get: function() {
          return [[assert.type.number], [assert.type.number]];
        }});
      Object.defineProperty(MdGridList.prototype.getTilePosition, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.number]];
        }});
      Object.defineProperty(MdGridList.prototype.getTileSize, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.number]];
        }});
      Object.defineProperty(MdGridList.prototype.getTileStyle, "parameters", {get: function() {
          return [[MdGridTile], [assert.type.number], [assert.type.number]];
        }});
      MdGridTile = $__export("MdGridTile", (function() {
        var MdGridTile = function MdGridTile(gridList, heightSetter, widthSetter, topSetter, leftSetter, marginTopSetter, paddingTopSetter, roleSetter) {
          assert.argumentTypes(gridList, MdGridList, heightSetter, Function, widthSetter, Function, topSetter, Function, leftSetter, Function, marginTopSetter, Function, paddingTopSetter, Function, roleSetter, Function);
          this.gridList = gridList;
          this.heightSetter = heightSetter;
          this.widthSetter = widthSetter;
          this.topSetter = topSetter;
          this.leftSetter = leftSetter;
          this.marginTopSetter = marginTopSetter;
          this.paddingTopSetter = paddingTopSetter;
          roleSetter('listitem');
          this.rowspan = 1;
          this.colspan = 1;
          heightSetter((gridList.tiles.length * 100 + "px"));
        };
        return ($traceurRuntime.createClass)(MdGridTile, {
          onChange: function(_) {
            if (!this.isRegisteredWithGridList) {
              this.gridList.addTile(this);
              this.isRegisteredWithGridList = true;
            } else {
              this.gridList.performLayout();
            }
          },
          onDestroy: function() {
            this.gridList.removeTile(this);
          }
        }, {});
      }()));
      Object.defineProperty(MdGridTile, "annotations", {get: function() {
          return [new Component({
            selector: 'md-grid-tile',
            properties: {
              'rowspan': 'rowspan',
              'colspan': 'colspan'
            },
            lifecycle: [onDestroy, onChange]
          }), new View({template: "<figure><content></content></figure>"})];
        }});
      Object.defineProperty(MdGridTile, "parameters", {get: function() {
          return [[MdGridList, new Parent()], [Function, new PropertySetter('style.height')], [Function, new PropertySetter('style.width')], [Function, new PropertySetter('style.top')], [Function, new PropertySetter('style.left')], [Function, new PropertySetter('style.marginTop')], [Function, new PropertySetter('style.paddingTop')], [Function, new PropertySetter('role')]];
        }});
      TileStyle = (function() {
        var TileStyle = function TileStyle() {
          ;
        };
        return ($traceurRuntime.createClass)(TileStyle, {}, {});
      }());
    }
  };
});
//# sourceMappingURL=grid_list.es6.map

//# sourceMappingURL=./grid_list.js.map