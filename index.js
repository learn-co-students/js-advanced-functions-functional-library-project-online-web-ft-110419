const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, alert) {
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          alert(collection[i])
        }
      } else {
        let collect = Object.values(collection)
        for (let i = 0; i < collect.length; i++) {
          alert(collect[i])
        }
      }
      return collection
    },

    map: function(collection, callback) {
      let newCollection= []
      if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        newCollection.push(callback(collection[i]))
      }
    } else {
      let collect = Object.values(collection)
      for (let i = 0; i < collect.length; i++) {
        newCollection.push(callback(collect[i]))
      }
    }
      return newCollection
    },

    reduce: function(collection, callback, acc) {
      let value = 0
      let i = 0
      if (acc) {
        value = acc
        i = 0
      } else {
        value = collection[0]
        i = 1
      }
 
      for (i; i < collection.length; i++) {
        value = callback(value, collection[i])
      }
      return value
    },

    find: function(collection, predicate) {
      if (Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
          if(predicate(collection[i])){
           return collection[i]
          }
        } 
      } else {
        return undefined
      }
    },
  

    filter: function(collection, predicate) {
      let newCollection = []
      if (Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
          if(predicate(collection[i])){
            newCollection.push(collection[i])
          }
        } 
      } else {
        return undefined
      }
      return newCollection
    },

    size: function(collection) {
      if (Array.isArray(collection)){
        return collection.length
      } else {
        return Object.values(collection).length
      }
    },

    first: function(array, n) {
      if (n) {
        return array.slice(0,n)
      } else
      return array[0]
    },

    last: function(array, n) {
      if (n) {
        return array.slice(array.length-n)
      } else
      return array[array.length-1]
    },

    compact: function(array) {
      let newArray = []
      for (let i = 0; i < array.length; i++){
        if (array[i]) {
          newArray.push(array[i])
        }
      }
      return newArray
    },

    sortBy: function(array, callback) {
      let arrayCopy = [...array]
      return arrayCopy.sort(function(a,b) {
        return callback(a) - callback(b)
      })
    },

    flatten: function(array, shallow) {
      let newArray = []
      let joined
      if (!shallow) {
        return joined = array.join().split(",").map(e => parseInt(e))
      } else {
        return joined = array.flat(1)
      }
    },



    keys: function(object){
      return Object.keys(object)
    },

    values: function(object){
      return Object.values(object)
    },

// NOT WORKING
    unique: function(array, [isSorted], [callback]) {

    },

// NOT WORKING
    functions: function(object){
      let array = Object.values(object).sort()
    },

  }
})()

fi.libraryMethod()
