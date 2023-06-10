/*
347. Top K Frequent Elements
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 *
 */
var topKFrequent = function(nums, k) {
    if(nums.length === 1) return nums;
    const map = new Map();

    for(let num of nums) {
        if(map.has(num)){
            map.set(num, map.get(num) +1)
        }
        else map.set(num, 1);
    }
    let arr = [];

    let sortable = Array.from(map.entries()).sort(([,a],[,b]) => b - a)

    for( let i =0 ; i < sortable.length; i++) {
        if(arr.length === k) break;
        arr.push(sortable[i])
    }

    return Object.keys(Object.fromEntries(arr)).map((item) => Number(item));

};

console.log(topKFrequent([1,1,1,2,3,3], 2))
