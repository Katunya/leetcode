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

var arrangeCoins = function(n, count = 1, num = 0) {

    if( n - count >= 0) {
        return arrangeCoins(n - count, count + 1, num + 1)
    }
    else return num
};

console.log(arrangeCoins(5))
console.log(arrangeCoins(8))
console.log(arrangeCoins(1))
console.log(arrangeCoins(3))
