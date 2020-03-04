const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let keys = Object.keys(collection)
      for (let i =0; i < keys.length; i++){
        callback(collection[keys[i]], keys[i], collection)
      }
      return collection
    },

    map: function(collection, callback) {
      let newArray = []
      let keys = Object.keys(collection)
      for (let i = 0; i < keys.length; i++){
        newArray.push(callback(collection[keys[i]], keys[i], collection))
      }
      return newArray
    },

    reduce: function(collection, callback, total=0) {
      if (typeof((callback(total, collection[0]))) === "boolean"){
        total = true
      }
      for (let i = 0; i < collection.length; i++){
        total = callback(total, collection[i], collection)
      }
      return total
    },

    find: function(collection, callback) {
      for (let i = 0; i < collection.length; i++){
        if (callback(collection[i]) === true){
          return collection[i]
        }
      }
      return undefined
    },

    filter: function(collection, callback) {
      let newArray = []
      for (let i = 0; i < collection.length; i++) {
        if (callback(collection[i]) === true) {
          newArray.push(collection[i])
        }
      }
      return newArray
    },

    size: collection => Object.keys(collection).length,

    first: (collection, number=1) => {
      let sliced = collection.slice(0, number)
      if (sliced.length === 1) {
        return sliced[0]
      }
      else {
        return sliced
      }
    },

    last: (collection, number=1) => {
      let sliced = collection.slice(collection.length - number, collection.length)
      if (sliced.length === 1) {
        return sliced[0]
      }
      else {
        return sliced
      }
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

    flatten: function(collection, shallow) {
      let newArray = collection.slice()
      let shallowArray = []
      for (let i = 0; i < collection.length; i++){
        if (shallow) {
          if (Array.isArray(newArray[i])) {
            shallowArray = shallowArray.concat(newArray[i])
          }
          else {
            shallowArray.push(newArray[i])
          }
        }
        else {
          while (Array.isArray(newArray[i])) {
            let array = newArray[i]
            newArray.splice(i, 1)
            newArray.splice(i, 0, ...array)
          } 
        }
      }
      if (shallow){
        return shallowArray
      }
      return newArray
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

    keys: object => Object.keys(object),

    values: function(object){
      return this.map(object, key => key)
    },

    functions: function(object){
      let keys = this.keys(object)
      return this.filter(keys, key => typeof(object[key]) === "function").sort()
    }


  }
})()




fi.libraryMethod()
