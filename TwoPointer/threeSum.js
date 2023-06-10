/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    if( nums.length === 0) return [];

    const res = [];
    for(let i = 0; i < nums.length; i++) {

        if( nums[i] === nums[i - 1]) continue;
        let left = i + 1;
        let right = nums.length - 1;
        while( left < right) {

            if (nums[left] + nums[right] + nums[i] === 0) {
                res.push([nums[left], nums[right], nums[i]]);
                left++;
                while(nums[i] === nums[i - 1] && left < right) {
                    left++;
                }
            } else if (nums[left] + nums[right] + nums[i] < 0) {
                left++
            } else if (nums[left] + nums[right] + nums[i] > 0) {
                right--;
            }
        }
    }
    return res
};

console.log(threeSum([-1,0,1,2,-1,-4])) //[[-1,-1,2],[-1,0,1]]
console.log(threeSum([0,1,1])) // []
console.log(threeSum([0,0,0])) // []
