/**
 * You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins.
 * The last row of the staircase may be incomplete.
 *
 * Given the integer n, return the number of complete rows of the staircase you will build.
 *
 */
/**
 * @param {number} n
 * @return {number}
 */

var arrangeCoins = function(n) {
    let left = 1;
    let right = n;
    let res = 0;
    while(left <= right) {
        let middle = Math.round((left + right) / 2);
        let coins = Math.round((middle/2) * (middle + 1));

        if(coins > n) {
            right--;
        }
        else {
            left++;
            res = Math.max(middle)
        }
    }

    return res;
}

console.log(arrangeCoins(5))
console.log(arrangeCoins(8))
console.log(arrangeCoins(1))
console.log(arrangeCoins(3))
