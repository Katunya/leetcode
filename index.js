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

console.log(numberOfSteps(14)) // 6
console.log(runningSum(8)) // 4
console.log(runningSum(123)) // 12
