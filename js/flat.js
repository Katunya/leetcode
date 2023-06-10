//* 2625. Flatten Deeply Nested Array
/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
    if( n === 0 ) return arr;
    if( arr.length === 0 ) return arr;
    const result = [];

    const recursionFlat = (arr, depth) => {
        for( let num of arr) {
            if( Array.isArray(num) && depth < n) {
                recursionFlat(num, depth + 1)
            }
            else result.push(num);
        }
        return result
    }

    return recursionFlat(arr, 0)
};
console.log(flat([1,[2], [3, [4]]], 1))
console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 0)) // [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1)) // [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]
console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 2) )// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

