newspaper.factory("UtilitiesFactory", function() {
  return {
    findById: function(collection, id) {
      for(var index = 0; index < collection.length; index++) {
        if (collection[index].id == id) {
          return collection[index];
        }
      }
      return null;
    }
  };
});
