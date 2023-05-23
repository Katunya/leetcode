const fizzBuzz = function(n) {
    const newArray = [];
    for (let i = 1; i <= n; i++) {
        if((i % 3 === 0) && (i % 5 === 0)){
            newArray.push('FizzBuzz')
        }
        else if (i % 3 === 0) {
            newArray.push('Fizz')
        }
        else if (i % 5 === 0){
            newArray.push('Buzz')
        }
        else { newArray.push(i.toString())}
    }

    return newArray;
};

// time complexity = 0(n)
// space complexity = 0(1

console.log(fizzBuzz(3)) // ["1","2","Fizz"]
console.log(fizzBuzz(5)) // ["1","2","Fizz","4","Buzz"]
console.log(fizzBuzz(15)) // Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
