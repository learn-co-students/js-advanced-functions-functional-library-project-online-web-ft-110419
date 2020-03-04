const fi = (function() {
  return {
    libraryMethod: function() {
      return "Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0";
    },

    each: function(collectionType, alert) {
      Object.entries(collectionType).forEach(type => alert(type[1]));
      return collectionType;
    },

    map: function(collectionType, alert) {
      return Object.entries(collectionType).map(type => alert(type[1]));
    },

    reduce: function(arry, callback, startingPoint) {
      let total = startingPoint || arry[0];
      if (!startingPoint) {
        arry = arry.slice(1);
      }
      for (let i = 0; i < arry.length; i++) {
        total = callback(total, arry[i]);
      }
      return total;
    },

    find: function(collection, predicate) {
      return collection.find(elmt => predicate(elmt));
    },

    filter: function(collection, predicate) {
      return collection.filter(elmt => predicate(elmt));
    },

    size: function(collection) {
      return Object.entries(collection).length;
    },

    first: function(collection, num) {
      return num ? collection.slice(0, num) : collection[0];
    },

    last: function(collection, num) {
      return num
        ? collection.slice(parseInt(`-${num}`))
        : collection.slice(-1)[0];
    },

    compact: function(arry) {
      return arry.filter(elmt => !!elmt);
    },

    sortBy: function(collection, callback) {
      return Object.values(collection)
        .map(elmt => elmt)
        .sort((a, b) => callback(a) - callback(b));
    },

    flatten: function(arry, boolean = false) {
      return boolean
        ? arry.flat()
        : arry
            .flat()
            .flat()
            .flat();
    },

    uniq: function(collection) {
      let obj = {};
      let iCollection =
        typeof collection[0] == "object"
          ? collection.map(obj => Object.values(obj)).flat()
          : collection;
      iCollection.forEach(n => (obj[n] = null));
      return Object.keys(obj);
    },

    keys: function(obj) {
      return Object.keys(obj);
    },

    values: function(obj) {
      return Object.values(obj);
    },

    functions: function(obj) {
      fncObjs = Object.entries(obj).filter(a => typeof a[1] == "function");
      return fncObjs.map(a => a[0]).sort();
    }
  };
})();
fi.libraryMethod();
