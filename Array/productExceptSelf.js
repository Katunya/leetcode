/**
 * @param {number[]} nums
 * @return {number[]}
 */

let random = () => {
    return Math.floor(Math.random() * 100);

}
var productExceptSelf1 = function(nums) {
    if( nums.length === 0) return nums;

    let map = new Map();
    for(let num of nums) {
        map.set(num + random(), nums.filter( function (i) {
            return i !== num
        }))
    }
    let result =  Array.from(map.values());
    const arr = [];
    for( let res of result) {
        if(res.length === 0) return nums;
        const reduceRes = res.reduce((acc, curr)=> {
            acc = curr * acc;
            return acc;
        }, 1)
        arr.push(reduceRes)
    }
    return arr;
};

var productExceptSelf = (nums) => {
    let result = [];

    let prefix = 1;
    for( let i = 0; i < nums.length; i++ ) {
        result[i] = prefix;
        prefix *= nums[i]
    }
    let postfix = 1;
    for(let j = nums.length - 1; j >= 0; j--) {
        result[j] *= postfix
        postfix *= nums[j]
    }
    return result
}

console.log(productExceptSelf([1,2,3,4])) // [24,12,8,6]
console.log(productExceptSelf( [-1,1,0,-3,3])) // [0,0,9,0,0]
console.log(productExceptSelf(  [0,0])) // [0,0]
console.log(productExceptSelf(  [0,4,0])) // [0,0,0]

var productExceptSelfFor = (nums) => {
    const res = []
    for( let i = 0; i < nums.length; i++) {
        let factor = 1;
        for( let j = 0; j < nums.length; j++) {
            if( i !== j) {
                factor = factor * nums[j]
            }
        }
        res.push(factor)
    }
    return res;
}

console.log(productExceptSelfFor([1,2,3,4])) // [24,12,8,6]
