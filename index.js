const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      Object.entries(collection).forEach(el => callback(el[1]));
      return collection;
    },

    map: function(collection, callback) {
      return Object.entries(collection).map(el => callback(el[1]));
    },

    reduce: function(collection, callback, acc) {
      let total = !!acc ? acc : collection[0];
      let newArray = !!acc ? collection : collection.slice(1);
      newArray.forEach(el => total = callback(total, el))
      return total;
    },

    find: function (collection, predicate) {
      return collection.find(el => predicate(el));
    },

    filter: function (collection, predicate) {
      return collection.filter(el => predicate(el));
    },

    size: function (collection) {
      return Object.entries(collection).length;
    },

    first: function (array, n) {
      return !!n ? array.slice(0,n) : array.slice(0,1)[0];
    },

    last: function (array, n) {
      return !!n ? array.slice(-n) : array.slice(-1)[0];
    },

    compact: function (array) {
      return array.filter(elmt => !!elmt);
    },

    sortBy: function (array, callback) {
      return Object.values(array)
        .map(elmt => elmt)
        .sort((a, b) => callback(a) - callback(b));
    },

    flatten: function (array, shallow=false) {
      return !!shallow ? array.flat() : array.flat(Infinity);
    },

    uniq: function(collection, sorted=false, callback = (element) => element) {
      for (let j = 0; j < collection.length; j++) {
        for (let i=collection.length; i>0; i--) {
          if (callback(collection[i]) === callback(collection[j]) && i !== j){
            collection.splice(i, 1)
          }
        }
      }
      return collection
    },

    keys: function (object) {
      return Object.entries(object).map(el => el[0]);
    },

    values: function (object) {
      return Object.entries(object).map(el => el[1]);
    },

    functions: function(object) {
      return Object.entries(object).filter(a => typeof a[1] == "function");
    },

  }
})()

fi.libraryMethod()
