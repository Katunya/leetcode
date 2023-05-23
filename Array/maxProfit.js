/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 *
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 *
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 *
 * @param {number[]} prices
 * @return {number}
 */

const maxProfit = function(prices) {

    if(prices.length === 0) return 0;

    let left = 0;
    let right = 1;
    let result  = 0;

    while(right < prices.length) {
        if(prices[left] < prices[right]) {
            let profit = prices[right] - prices[left];
            result = Math.max(profit, result);
        }
        else {
            left = right;
        }
        right++;
    }
    return result;
};

console.log(maxProfit([7,1,5,3,6,4])) // 5
console.log(maxProfit([7,6,4,3,1])) // 0
console.log(maxProfit([2,1,4])) // 3
console.log(maxProfit([1,4,2])) // 3

// минимальное значение

const maxProfitMinValue = function(prices) {
    let minValue = prices[0];
    let profit = 0;
    for(let i = 0; i < prices.length; i++) {
        minValue = Math.min(minValue, prices[i]);
        profit = Math.max(profit, prices[i] - minValue)
    }

    return profit;
}

console.log(maxProfitMinValue([7,1,5,3,6,4])) // 5
console.log(maxProfitMinValue([7,6,4,3,1])) // 0
console.log(maxProfitMinValue([2,1,4])) // 3
console.log(maxProfitMinValue([1,4,2])) // 3
