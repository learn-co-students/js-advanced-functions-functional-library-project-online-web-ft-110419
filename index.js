const fi = (function () {
  return {
    libraryMethod: function () {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function (c, callback) {
      const collection = typeof c === "object" ?
        Object.values(c) : [...c];

      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }

      return c;
    },

    map: function (c, callback) {
      const collection = typeof c === "object" ?
        Object.values(c) : [...c];
      const newCollection = [];

      for (let i = 0; i < collection.length; i++) {
        newCollection.push(callback(collection[i]));
      }

      return newCollection;
    },

    reduce: function (c, callback, acc) {
      const collection = [...c];

      let total;
      let i;
      if (acc) {
        total = acc;
        i = 0;
      } else {
        total = collection[0];
        i = 1;
      }

      for (i; i < collection.length; i++) {
        total = callback(total, collection[i], collection);
      }
      return total;
    },

    find: function (c, predicate) {
      const collection = typeof c === "object" ?
        Object.values(c) : [...c];

      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) return collection[i];
      }
    },

    filter: function (c, predicate) {
      const collection = typeof c === "object" ?
        Object.values(c) : [...c];
      const newCollection = [];
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) newCollection.push(collection[i]);
      }

      return newCollection;
    },

    size: function (c) {
      const collection = typeof c === "object" ?
        Object.values(c) : [...c];

      return collection.length;
    },
    first: function (c, n) {
      return n ? c.slice(0, n) : c[0];
    },
    last: function (c, n) {
      return n ? c.slice(n * -1) : c[c.length - 1];
    },
    compact: function (array) {
      return array.filter(value => value);
    },
    sortBy: function (array, callback) {
      const copy = [...array];
      return copy.sort(function (a, b) { return callback(a) - callback(b) })
    },
    flatten: function (array, shallow = false) {
      return !!shallow ? array.flat() : array.flat(Infinity);
    },
    uniq: function (collection, sorted = false, iteratee = false) {
      if (sorted) {
        return fi.uniqSorted(collection, iteratee)
      } else if (!iteratee) {
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of collection) {
          const moddedVal = iteratee(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },
    keys: function (obj) {
      const keys = []
      for (let key in obj) {
        keys.push(key)
      }
      return keys;
    },
    values: function (obj) {
      const values = []
      for (let key in obj) {
        values.push(obj[key])
      }
      return values;
    },
    functions: function (obj) {
      const functionNames = []

      for (let key in obj) {
        if (typeof obj[key] === "function") {
          functionNames.push(key)
        }
      }

      return functionNames.sort();
    }
  }
})()

fi.libraryMethod()
fi.each()
