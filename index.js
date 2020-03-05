const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCollection = collection instanceof Array ? collection.slice() : Object.values(collection);
      for (let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i]);
      }
      return collection;
    },

    map: function(collection, callback) {
      if (!(collection instanceof Array))
      collection = Object.values(collection)
      let newArr = []
      for (let i = 0; i < collection.length ; i++){
        newArr.push(callback(collection[i]));
      }
      return newArr;
    },

    reduce: function(arr, callback, acc) {
      let collection = arr.slice(0);
      if (!acc) {
        acc = collection[0];
        collection = arr.slice(1);
      }
      for (let i = 0; i < collection.length; i++){
        acc = callback(acc, collection[i], collection)
      }
      return acc;
    },

    find: function(collection, predicate) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)

      for (let idx = 0; idx < collection.length; idx++)
        if (predicate(collection[idx])) return collection[idx]

      return undefined
    },

    // find: function(collection, callback) {
    //   if (!(collection instanceof Array))
    //     collection = Object.values(collection)
    //   for (let i = 0; i < collection.length; i++){
    //     if (callback(collection[i])){
    //       return collection[i];
    //     } else {
    //       return undefined;
    //     }
    //   };
    // },

    filter: function(collection, predicate){
      const newCollection = [];
      const tempCollection = collection instanceof Array ? collection.slice() : Object.values(collection);
      for (let i = 0; i < tempCollection.length; i++) {
        if (predicate(tempCollection[i])) {
          newCollection.push(tempCollection[i]);
        }
      }
      return newCollection;
    },

    size: function(collection){
      // return collection instanceof Array ? collection.length : Object.values(collection).length;
      if (collection instanceof Array){
        return collection.length
      } else {
        return Object.values(collection).length
      }


    },

    first: function(arr, n){
      if (!n){
        return arr[0];
      } else {
        return arr.slice(0, n)
      }
    },

    last: function(arr, n){
      if (!n){
        // let x = arr.length - 1
        return arr[arr.length - 1];
      } else {
        // let x = arr.length - n
        return arr.slice(arr.length - n)
      }
    },

    compact: function(arr){
      return arr.filter(v => !!v);
    },

    sortBy: function(arr, callback){
      let newArr = arr.slice();
      return newArr.sort(function(x, y){
        return callback(x) - callback(y);
      })
    },
    
    flatten: function(arr, boolean = false){
    return boolean
      ? arr.flat()
      : arr
          .flat()
          .flat()
          .flat();
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

    keys: function(obj){
      return Object.keys(obj);

    },

    values: function(obj){
      return Object.values(obj);
      // return this.map(object, key => key)
    },
    
    functions: function(obj){
      let collection = [];
      for (const key in obj){
        if (typeof obj[key] === "function"){
          collection.push(key);
        }
      }
      return collection;
    }

  }
})()

fi.libraryMethod()

