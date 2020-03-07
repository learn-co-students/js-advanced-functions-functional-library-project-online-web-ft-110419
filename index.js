const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          callback(collection[i])
        }
      } else {
        let values = Object.values(collection);
        for (let i = 0; i < values.length; i++) {
          callback(values[i])
        }
      }
      return collection
    },

    map: function(collection, callback) {
      let arr = [];
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          arr.push(callback(collection[i]))
        }
      } else {
        let values = Object.values(collection);
        for (let i = 0; i < values.length; i++) {
          arr.push(callback(values[i]))
        }
      }
      return arr
    },

    reduce: function(collection, callback, acc) {
      let total = 0;
      let i = 0;
      if (acc) {
        total = acc
      } else {
        total = collection[0];
        i = 1;
      }
      for (i; i < collection.length; i++) {
        total = callback(total, collection[i])
      }
      return total
    },
    
    find: function(collection, predicate) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i]
        }
      }
    },
    
    filter: function(collection, predicate) {
      let arr = [];
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          arr.push(collection[i])
        }
      }
      return arr
    },
    
    size: function(collection) {
      let total = 0;
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          ++total
        }
      } else {
        let values = Object.values(collection);
        for (let i = 0; i < values.length; i++) {
          ++total
        }
      }
      return total
    },
    
    first: function(array, n) {
      if (!n) {
        return array[0]
      } else {
        return array.slice(0, n)
      }
    },
    
    last: function(array, n) {
      if (!n) {
        return array[array.length - 1]
      } else {
        return array.slice(array.length - n)
      }
    },
    
    compact: function(array) {
      let arr = [];
      for (let i = 0; i < array.length; i++) {
        if (!!array[i]) {
          arr.push(array[i])
        }
      }
      return arr
    },
    
    sortBy: function(array, callback) {
      let arr = [...array]
      return arr.sort(function(a,b){ return callback(a) - callback(b) })
    },
    
    flatten: function(arr, shallow) {
      if (shallow) {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
          if (Array.isArray(arr[i])) {
            newArr.push(...arr[i])
          } else {
            newArr.push(arr[i])
          }
        }
        return newArr
      } else {
        return arr.join().split(",").map(e => parseInt(e))
      }
    },
    
    uniq: function(array, isSorted, callback) {
      if (!callback) {
        let newArr = [];
        for (let i = 0; i < array.length; i++) {
          if (!newArr.some(e => e === array[i])) {
            newArr.push(array[i])
          }
        }
        return newArr
      } else {
        let changedUniq = [];
        let originalUniq = [];
        for (let i = 0; i < array.length; i++) {
          if (!changedUniq.some(e => e === callback(array[i]))) {
            changedUniq.push(callback(array[i]));
            originalUniq.push(array[i]);
          }
        }
        return originalUniq
      }
    },
    
    keys: function(object) {
      let keys = [];
      for (let element in object) {
        keys.push(element)
      }
      return keys
    },
    
    values: function(object) {
      let values = [];
      for (let element in object) {
        values.push(object[element])
      }
      return values
    },

    functions: function(object) {
      let functions = [];
      for (let key in object) {
        if (typeof object[key] === "function") {
          functions.push(key);
        }
      }
      return functions;
    }

  }
})()

fi.libraryMethod()
