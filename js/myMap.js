


Array.prototype.myMap = function(callback, thisObj) {
    const result = [];

    this.forEach((...args) => {
        let index = args[1];
        result[index] = callback.apply(thisObj, args)
    })

    return result
}



[1,2,3].myMap(num => num * 2)
