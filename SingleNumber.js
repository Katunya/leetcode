/*
136. Single Number

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
    let res = 0;

    for(let i of nums) {
        res = res ^ i;
    }
    return res

};

console.log(singleNumber([2,2,1]));
console.log(singleNumber([4,1,2,1,2]));
console.log(singleNumber([1]));
