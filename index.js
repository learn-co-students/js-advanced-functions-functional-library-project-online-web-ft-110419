const fi = (function() {
  return {
    libraryMethod: function() {
      return "Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0";
    },
    
    each: function(collection, callback) {
      const newCollection = collection instanceof Array ? collection.slice() : Object.values(collection);
      for (let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i]);
      }
      return collection;
    },
    
    map: function(collection, callback) {
      const newCollection = [];
      let tempCollection = [];
      if (collection instanceof Array === false) {
        tempCollection = Object.values(collection);
      }
      for (let i = 0; i < tempCollection.length; i++) {
        newCollection.push(callback(tempCollection[i]));
      }
      return newCollection;
    },
    
    reduce: function(collection, callback, acc) {
      let tempCollection = collection.slice();
      if (!acc) {
        acc = collection[0];
        tempCollection = collection.slice(1);
      }
      for (let i = 0; i < tempCollection.length; i++) {
        acc = callback(acc, tempCollection[i], tempCollection);
      }
      return acc;
    },
    
    find: function(collection, predicate) {
      const tempCollection = collection instanceof Array ? collection.slice() : Object.values(collection);
      for (let i = 0; i < tempCollection.length; i++) {
        if (predicate(tempCollection[i])) {
          return tempCollection[i];
        }
      }
      return undefined;
    },
    
    filter: function(collection, predicate) {
      const newCollection = [];
      const tempCollection = collection instanceof Array ? collection.slice() : Object.values(collection);
      for (let i = 0; i < tempCollection.length; i++) {
        if (predicate(tempCollection[i])) {
          newCollection.push(tempCollection[i]);
        }
      }
      return newCollection;
    },
    
    size: function(collection) {
      return collection instanceof Array ? collection.length : Object.values(collection).length;
    },
    
    first: function(array, n) {
      if (!n) {
        return array[0];
      }
      const newArray = [];
      for (let i = 0; i < n; i++) {
        newArray.push(array[i]);
      }
      return newArray;
    },
    
    last: function(array, n) {
      if (!n) {
        return array[array.length - 1];
      }
      const newArray = [];
      for (let i = 0; i < n; i++) {
        newArray.unshift(array[array.length - (i + 1)]);
      }
      return newArray;
    },
    
    compact: function(array) {
      const newArray = [];
      for (let i = 0; i < array.length; i++) {
        if (array[i]) {
          newArray.push(array[i]);
        }
      }
      return newArray;
    },
    
    sortBy: function(array, callback) {
      const newArray = array.slice();
      return newArray.sort(function(value1, value2) {
        return callback(value1) - callback(value2);
      });
    },
    
    flatten: function(collection, shallow, newArray=[]) {
      if (Array.isArray(collection) === false) {
        return newArray.push(collection);
      }
      if (shallow) {
        for (let element of collection) {
          if (Array.isArray(element)) {
            for (let elementOfElement of element) {
              newArray.push(elementOfElement);
            }
          }
          else {
            newArray.push(element);
          }
        }
      }
      else {
        for (let element of collection) {
          this.flatten(element, false, newArray);
        }
      }
      return newArray;
    },
    
    uniq: function(array, sorted, callback) {
      if (sorted) {
        return function(array, callback) {
          const sortedArray = [array[0]];
          for (let i = 1; i < collection.length; i++) {
            if (sortedArray[i - 1] !== array[i])
              sortedArray.push(array[i]);
          }
        };
      }
      else if (callback) {
        const newValues = new Set();
        const uniqueValues = new Set();
        for (let element of array) {
          const newValue = callback(element);
          if (newValues.has(newValue) === false) {
            newValues.add(newValue);
            uniqueValues.add(element);
          }
        }
        return Array.from(uniqueValues);
      }
      else {
        return Array.from(new Set(array));
      }
    },
    
    keys: function(object) {
      const keys = [];
      for (const key in object) {
        keys.push(key);
      }
      return keys;
    },
    
    values: function(object) {
      const values = [];
      for (const key in object) {
        values.push(object[key]);
      }
      return values;
    },
    
    functions: function(object) {
      const functions = [];
      for (const key in object) {
        if (typeof object[key] === "function") {
          functions.push(key);
        }
      }
      return functions;
    }
  };
})();

fi.libraryMethod();
