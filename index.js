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
    }


  }
})()

fi.libraryMethod()
