const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    // Iterates over a collection of elements, passing each element to a callback function.
    // Each invocation of callback is called with three arguments: (element, index, collection).
    //If collection is a JavaScript object, callback's arguments will be (value, key, collection). 
    //Returns the original collection for chaining.
    each: function(collection, callback) {
      let keys = Object.keys(collection)
      for (let i = 0; i < keys.length; i++){
        callback(collection[keys[i]], keys[i], collection)
      }
      return collection
    },

    // Produces a new array of values by mapping each value in collection through a transformation function (callback). 
    // The callback is passed three arguments: the value, then the index (or key) of the iteration, and finally a reference to the entire collection. 
    // Returns a new collection for chaining without modifying the original.
    map: function(collection, callback) {
      let newArray = []
      let keys = Object.keys(collection)
      for (let i = 0; i < keys.length; i++){
        newArray.push(callback(collection[keys[i]], keys[i], collection))
      }
      return newArray
    },

    // Reduce boils down a collection of values into a single value.
    // Acc (short for accumulator) starts as the initial state of the reduction, and with each successive step it should be accumulate the return value of callback. 
    // The callback is passed three arguments: the acc, the current value in our iteration (the element in the array), and finally a reference to the entire collection.

    reduce: function(collection, callback, startingPoint) {
      let total = startingPoint || collection[0];
      if (!startingPoint) {
        collection = collection.slice(1);
      }
      for (let i = 0; i < collection.length; i++) {
        total = callback(total, collection[i], collection);
      }
      return total;
    },

    // Looks through each value in the collection, 
    // returning the first one that passes a truth test (predicate), or undefined if no value passes the test. 
    // The function returns as soon as it finds an acceptable element, and doesn't traverse the entire collection.
    find: function(collection, callback) {
      for (let i = 0; i < collection.length; i++){
        if(callback(collection[i]) === true){
          return collection[i]
        }
      }
      return undefined 
    },

    // Looks through each value in the collection, returning an array of all the values that pass a truth test (predicate).
    filter: function(collection, callback) {
      let newArray = []
      for (let i = 0; i < collection.length; i++){
        if (callback(collection[i]) === true) {
          newArray.push(collection[i])
        }
      }
      return newArray
    },

    // Return the number of values in the collection.
    size: function(collection) {
      return Object.entries(collection).length;
    },

    // Returns the first element of an array. Passing n will return the first n elements of the array.
    first: (collection, number=1) => {
      let sliced = collection.slice(0, number)
      if (sliced.length === 1) {
        return sliced[0]
      }
      else {
        return sliced
      }
    },

    // first: function(collection, num) {
    //   return num ? collection.slice(0, num) : collection[0];
    // },

    // Returns the last element of an array. Passing n will return the last n elements of the array.
    last: (collection, number=1) => {
      let sliced = collection.slice(collection.length - number, collection.length)
      if (sliced.length === 1) {
        return sliced[0]
      }
      else {
        return sliced
      }
    },

    // Returns a copy of the array with all falsy values removed. In JavaScript, false, null, 0, "", undefined and NaN are all falsy.
    compact: function(array){
      let newArray = []
      for (let i = 0; i < array.length; i++){
        if (array[i]) {
          newArray.push(array[i])
        }
      }
      return newArray
    },

    compact: function(collection) {
      let newArray = []
      for (let i = 0; i < collection.length; i++){
        if (collection[i]) {
          newArray.push(collection[i])
        }
      }
      return newArray
    },

    // Returns a sorted copy of array, ranked in ascending order by the results of running each value through callback. The values from the original array should be retained within the sorted copy, just in ascending order.    
    sortBy: function(collection, callback){
      let original = collection.slice()
      let array = collection.slice()
      for (let j = 1; j < original.length+1; j++) {
        let index = 0
        let max = array[0]
        for (let i = 1; i < array.length; i++) {
          if (callback(array[i]) > callback(max)) {
            max = array[i]
            index = i
          }
        }
        original.push(max)
        // let index = original.indexOf(max)
        original.splice(index, 1)
        array = original.slice(0, original.length-j)
      }
    return original.reverse()
    },

    // Flattens a nested array (the nesting can be to any depth). If you pass true for the second argument, the array will only be flattened a single level.
    // flatten: function(collection, shallow) {
    //   let newArray = collection.slice()
    //   let shallowArray = []
    //   for (let i = 0; i < collection.length; i++){
    //     if (shallow) {
    //       if (Array.isArray(newArray[i])) {
    //         shallowArray = shallowArray.concat(newArray[i])
    //       }
    //       else {
    //         shallowArray.push(newArray[i])
    //       }
    //     }
    //     else {
    //       while (Array.isArray(newArray[i])) {
    //         let array = newArray[i]
    //         newArray.splice(i, 1)
    //         newArray.splice(i, 0, ...array)
    //       } 
    //     }
    //   }
    //   if (shallow){
    //     return shallowArray
    //   }
    //   return newArray
    // },

    flatten: function(arry, boolean = false) {
      return boolean
        ? arry.flat()
        : arry
            .flat()
            .flat()
            .flat();
    },

    // Produces a duplicate-free version of the array, using === to test object equality. In particular only the first occurrence of each value is kept.
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

    // Retrieve all the names of the object's own enumerable properties.
    keys: object => Object.keys(object),

    // Return all of the values of the object's own properties.
    values: function(object){
      return this.map(object, key => key)
    },

    // Returns a sorted collection of the names of every function in an object — that is to say, the name of every property whose value is a function.
    functions: function(object){
      let keys = this.keys(object)
      return this.filter(keys, key => typeof(object[key]) === "function").sort()
    }
  }
})()

fi.libraryMethod()
