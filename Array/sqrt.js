const memoize = (fn) => {
    let cache = {};

    return (...args) => {
        let n = args[0];

        if( n in cache) {
            console.log('Fetching from cache', n);
            return cache[n];
        }
        else {
            console.log('Calculating result', n);
            let result = fn(n);
            cache[n] = result;
            return result;
        }
    }
}

const sqrt = memoize((n) => {
    if (n <= 1) {
        return n;
    }
    if(n === ( 2**31 -1)) {
        return n
    }

    for(let i = 0; i < n; i++) {
        if( i * i === n ) {
            return i;
        }
    }
    return sqrt(n - 1)
});


const simpleSqrt = (x) => {
    if( x <= 1) return x
    for(let i = 0; i < x + 1; i++) {
       if ( i*i > x ) return i-1;
    }
}

console.log(simpleSqrt(4));
console.log(simpleSqrt(2));
console.log(simpleSqrt(8));
console.log(simpleSqrt(9));
console.log(simpleSqrt(2147483647));
console.log(simpleSqrt(2147395599));
