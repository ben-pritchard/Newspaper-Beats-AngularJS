newspaper.factory("BeatsFactory", function BeatsFactory() {
  var factory = {};
  factory.beats = [];
  factory.addBeat = function() {
    factory.beats.push({ id: factory.beats.length + 1, name: factory.beatName, reporters: [] });
    factory.beatName = null;
  };
  return factory;
});
