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

    // uniq: function(col, sorted = false, iteratee = false) {
    //   let obj = {};
    //   let newCol = col.map(obj => Object.values(obj)).flat();
    //   let collection = typeof col[0] == "object" ? newCol : col;
    //   collection.forEach(n => (obj[n] = null));
    //   return sorted ? Object.keys(obj).sort() : Object.keys(obj);
    // },
    uniqSorted: function(collection, iteratee) {
      const sorted = [collection[0]];
      for (let idx = 1; idx < collection.length; idx++) {
        if (sorted[idx - 1] !== collection[idx]) sorted.push(collection[idx]);
      }
      return sorted;
    },

    uniq: function(collection, sorted = false, iteratee = false) {
      if (sorted) {
        return fi.uniqSorted(collection, iteratee);
      } else if (!iteratee) {
        return Array.from(new Set(collection));
      } else {
        const modifiedVals = new Set();
        const uniqVals = new Set();
        for (let val of collection) {
          const moddedVal = iteratee(val);
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal);
            uniqVals.add(val);
          }
        }
        return Array.from(uniqVals);
      }
    },

    keys: function(obj) {
      return Object.keys(obj);
    },

    values: function(obj) {
      return Object.values(obj);
    },

    functions: function(obj) {
      let fncObjs = Object.entries(obj).filter(a => typeof a[1] == "function");
      return fncObjs.map(a => a[0]).sort();
    }
  };
})();
fi.libraryMethod();
