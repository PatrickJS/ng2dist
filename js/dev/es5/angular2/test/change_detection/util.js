System.register(["angular2/src/facade/lang"], function($__export) {
  "use strict";
  var isBlank;
  function iterableChangesAsString($__0) {
    var $__1 = $__0,
        collection = $__1.collection,
        previous = $__1.previous,
        additions = $__1.additions,
        moves = $__1.moves,
        removals = $__1.removals;
    if (isBlank(collection))
      collection = [];
    if (isBlank(previous))
      previous = [];
    if (isBlank(additions))
      additions = [];
    if (isBlank(moves))
      moves = [];
    if (isBlank(removals))
      removals = [];
    return "collection: " + collection.join(', ') + "\n" + "previous: " + previous.join(', ') + "\n" + "additions: " + additions.join(', ') + "\n" + "moves: " + moves.join(', ') + "\n" + "removals: " + removals.join(', ') + "\n";
  }
  function kvChangesAsString($__0) {
    var $__1 = $__0,
        map = $__1.map,
        previous = $__1.previous,
        additions = $__1.additions,
        changes = $__1.changes,
        removals = $__1.removals;
    if (isBlank(map))
      map = [];
    if (isBlank(previous))
      previous = [];
    if (isBlank(additions))
      additions = [];
    if (isBlank(changes))
      changes = [];
    if (isBlank(removals))
      removals = [];
    return "map: " + map.join(', ') + "\n" + "previous: " + previous.join(', ') + "\n" + "additions: " + additions.join(', ') + "\n" + "changes: " + changes.join(', ') + "\n" + "removals: " + removals.join(', ') + "\n";
  }
  $__export("iterableChangesAsString", iterableChangesAsString);
  $__export("kvChangesAsString", kvChangesAsString);
  return {
    setters: [function($__m) {
      isBlank = $__m.isBlank;
    }],
    execute: function() {
    }
  };
});
//# sourceMappingURL=util.es6.map

//# sourceMappingURL=./util.js.map