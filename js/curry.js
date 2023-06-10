const join = (a, b, c) => {
    return `${a}_${b}_${c}`
}


const curry1 = (fn) => {
   return function curried(...args) {
       if(args.length >= fn.length) return fn.apply(this, args);
       return curried.bind(this, ...args)
   }
}

const curry = (fn) => {
    return function curried(...args) {
        if(args.length >= fn.length) return fn(...args);
        return function (...args2) {
            return curried(...args, ...args2)}
    }
}

const curriedJoin = curry(join)

console.log(curriedJoin(1, 2, 3)) // '1_2_3'

console.log(curriedJoin(1)(2) (3)) // '1_2_3'

curriedJoin(1, 2)(3) // '1_2_3'

