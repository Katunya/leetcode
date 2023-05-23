
/** Работа линейного алгоритма, On
   O(f) = сумма всех вычислений On
   Скорость быстрой сортировки + линейное время while = O(logn) + On, но тк On > O(logn), то отбрасывают O(logn)

*/

/* Two Sum
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums, target) => {
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

const twoSum2 = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while( left < right ) {
        if(nums[left] + nums[right] === target) {
            return [left, right];
        }

        if(nums[left] + nums[right] > target) {
            right --;
        }
        else left ++;
    }
};

console.log(twoSum2([2, 7, 11, 15], 9)) // [0,1]
console.log(twoSum2([2, 3, 4], 6)) // [0,2]
console.log(twoSum2([3, 3], 6)) // [0,1]
console.log(twoSum2([2, 3, 6, 9, 11, 13, 15, 17, 19] , 23)) // [2,7]
