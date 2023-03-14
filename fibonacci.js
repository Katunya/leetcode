
const fibonacci = (val) => {
let a = 0, b = 1, next;
    for( let i = 1; i <= val; i++) {
         next = a + b;
         a = b;
         b = next;
    }
    return a;
}

console.log(fibonacci(77));

// recursion

const fibonacciRecurson = (val) => {
    return val <=1 ? val : fibonacciRecurson(val - 1) + fibonacciRecurson(val - 2)
}

console.log(fibonacciRecurson(3))
console.log(fibonacciRecurson(17))
