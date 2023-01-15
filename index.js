/*
Running Sum of 1d Array
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
Return the running sum of nums.

Example 1:
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

const runningSum = function(nums) {
    for(let i = 1; i < nums.length; i++) {
        nums[i] = nums[i - 1] + nums[i];
    }
    return nums;
};

console.log(runningSum([1,2,3,4]))
console.log(runningSum([1,5,1,2]))


/*
1342. Number of Steps to Reduce a Number to Zero

Given an integer num, return the number of steps to reduce it to zero.

In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

Example 1:

Input: num = 14
Output: 6
Explanation:
Step 1) 14 is even; divide by 2 and obtain 7.
Step 2) 7 is odd; subtract 1 and obtain 6.
Step 3) 6 is even; divide by 2 and obtain 3.
Step 4) 3 is odd; subtract 1 and obtain 2.
Step 5) 2 is even; divide by 2 and obtain 1.
Step 6) 1 is odd; subtract 1 and obtain 0.
*/

/**
 * @param {number} num
 * @return {number}
 */

var numberOfSteps = function(num) {
    let counter = 0;
    while(num > 0) {
        if(num % 2 == 0) {
            num = num/2;
        }
        else {
            num--;
        }
        counter++
    }
    return counter;
}

// time complexity = 0(logn)
// space complexity = 0(1)

console.log(numberOfSteps(14)) // 6
console.log(numberOfSteps(8)) // 4
console.log(numberOfSteps(123)) // 12



var fizzBuzz = function(n) {
    const newArray = [];
    for (let i = 1; i <= n; i++) {
        if((i % 3 == 0) && (i % 5 == 0)){
             newArray.push('FizzBuzz')
         }
        else if (i % 3 == 0) {
             newArray.push('Fizz')
         }
        else if (i % 5 == 0){
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



/*
1. Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.


Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
         for(let j = i + 1; j < nums.length; j++) {
             if(nums[i] + nums[j] === target) {
                 return [i, j]
             }
         }
    }
};


console.log(twoSum([2,7,11,15], 9)) // [0,1]
console.log(twoSum([3,2,4], 6)) // [1,2]
console.log(twoSum([3,3], 6)) // [0,1]


/**
 *
 * 2 вложенных цикла - On^2
 * Линейная сложность On - вне зависимости
 * 200n или 1n - сложность равна On
 *
 * Пространственная сложность - количество используемой памяти
 *
 * Дана строка в кодировке UTF-8
 *
 * Найти самый часто встречающийся в ней символ.
 * Если несколько символов встречаются одинаково часто, то можно вынести любой.
 */


/**
 * Решение №1
 *
 * Переберем все позиции и для каждой позиции в строке еще раз переберем все позиции
 * и в случае совпадение прибавим к счетчику единицу. Найдем максимальное значение счетчика.
 *
 * On^2
 */

const range = n => Array(n).fill().map((i, k) =>  k);

const frequentSymbols = (symbols) => {
    let symbolsAnswer = ''
    let countAnswer = 0;
    for( i in range(symbols.length)) {
        let count = 0;
        for ( j in range(symbols.length)) {
            if(symbols[i] === symbols[j]) {
                count+=1
            }
        }
        if(count > countAnswer ) {
            symbolsAnswer = symbols[i];
            countAnswer = count;
        }
    }
    return symbolsAnswer;
}


console.log(frequentSymbols('aaffffffffbabba'));
