const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, alert) {
      Object.entries(collection).forEach(type => alert(type[1]))
      return collection
    },

    map: function(collection, alert) {
      return Object.entries(collection).map(type => alert(type[1]))

    },

    reduce: function(array, callback, acc) {
      let total = acc || array[0]
      if(!acc){
      array = array.slice(1)
      }
      for(let i = 0; i < array.length; i++){
        total = callback(total,array[i])
      }
      return total
    },

    find: function(collection, predicate){
      return collection.find(element => predicate(element))
    },

    filter: function(collection, predicate){
      return collection.filter(element => predicate(element))
    },

    size: function(collection){
      return Object.entries(collection).length
    },

    first: function(collection, num){
      return num ? collection.slice(0, num) : collection[0]
    },

    last: function(collection, num){
      return num ? collection.slice(parseInt(`-${num}`)) : collection.slice(-1)[0]
    },

    compact: function(array){
      return array.filter(element => !!element)
    },

    sortBy: function(collection, callback){
      return Object.values(collection).map(element => element).sort((a, b) => callback(a) - callback(b))
    },

    flatten: function(array, boolean = false){
      return boolean ? array.flat() : array.flat().flat().flat()
    },

    uniqSorted: function(collection, iteratee) {
      const sorted = [collection[0]]
      for (let idx = 1; idx < collection.length; idx++) {
        if (sorted[idx-1] !== collection[idx])
          sorted.push(collection[idx])
      }
      return sorted
    },

    uniq: function(collection, sorted=false, iteratee=false) {
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

    keys: function(obj){
      return Object.keys(obj)
    },

    values: function(obj){
      return Object.values(obj)
    },


    functions: function(obj) {
      let functionObj = Object.entries(obj).filter(a => typeof a [1] == 'function')
      return functionObj.map(a => a[0].sort)
    }
  }
})()

fi.libraryMethod()
