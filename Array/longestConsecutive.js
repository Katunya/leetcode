/**
 * @param {number[]} nums
 * @return {number}
 *
 * 128. Longest Consecutive Sequence
 */
var longestConsecutive = function(nums) {
    if(nums.length === 0 ) return 0;

    const set = new Set(nums);
    let longest = 0;

    for( let num of set) {
        let length = 0;
        if(!set.has(num -  1)){
            while(set.has(num + length)){
                length = length + 1;
            }
            longest = Math.max(length,longest)
        }
    }

    return longest;
};

// console.log(longestConsecutive([100,4,200,1,3,2])) //  4 [1, 2, 3, 4]
// console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1])) //  9
// console.log(longestConsecutive([9,1,4,7,3,-1,0,5,8,-1,6])) //  7
// console.log(longestConsecutive([1,2,0,1])) //  3
// console.log(longestConsecutive([0])) // 1

var longestConsecutiveFor = function(nums) {
    nums.sort((a,b) => a - b);

    if(nums.length === 0) return 0;
    if(nums.length === 1) return 1;

    let maxLength = 0;
    let length = 1;

    for(let i = 0; i < nums.length - 1; i++) {
        if(nums[i] + 1 === nums[i + 1]) {
            length ++;
            maxLength = Math.max(length, maxLength);
        }
        else if (nums[i] === nums[i + 1]){
            maxLength = Math.max(length, maxLength);
        }
        else {
            length = 1;
            maxLength = Math.max(length, maxLength)
        }
    }
    return maxLength;
}

console.log(longestConsecutiveFor([100,4,200,1,3,2])) //  4 [1, 2, 3, 4]
console.log(longestConsecutiveFor([0,3,7,2,5,8,4,6,0,1])) //  9
console.log(longestConsecutiveFor([9,1,4,7,3,-1,0,5,8,-1,6])) //  7
console.log(longestConsecutiveFor([1,2,0,1])) //  3
console.log(longestConsecutiveFor([0])) // 1
