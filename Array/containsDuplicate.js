// 217. Contains Duplicate
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.



var containsDuplicateSet = function(nums) {
    if(nums.length === 0) return false;
    const set = new Set();

    for( let num of nums) {
        if(set.has(num)){return true}
        set.add(num)
    }

    return false;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicateHash = function(nums) {
    if(nums.length === 0) return false;

    const hash = {};
    for( let i = 0; i < nums.length; i++) {
        if(hash[nums[i]] || hash[nums[i]] === 0){
            return true;
        }
        hash[nums[i]] = nums[i];
    }
    return false;
};


console.log(containsDuplicateHash[1,2,3,1])
console.log(containsDuplicateSet[1,2,3,1])
