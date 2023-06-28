//* 2625. Flatten Deeply Nested Array
// while
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
// console.log(flat([1,[2], [3, [4]]], 1))
// console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 0)) // [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
// console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1)) // [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]
// console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 2) )// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

function flatIteration (array) {
    if(array.length === 0) return array;
    let result = [];
    for(let i = 0; i < array.length; i++) {

        if(array[i].length > 1){
            for(let j = 0; j < array[i].length; j++) {
                if(Array.isArray(array[i][j])){
                    result.push(...array[i][j])
                }
                else if(typeof array[i][j] === 'number') {
                  result.push(array[i][j])
                }

            }
        }

        else if(Array.isArray(array[i]) ) {
            result.push(...array[i])
        }
        else result.push(array[i])
    }

    return result
}

console.log(flatIteration([1,[2], [3, [4]]]))
console.log(flatIteration([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 0)) // [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
console.log(flatIteration([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1)) // [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]
console.log(flatIteration([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 2) )// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
console.log(flatIteration([1, [10, 12], [[2, 4], 7], 190]))



/**
 * @param {Number[][]} arr
 * @returns {Number[]}
 */
const flattenArray = (arr) => {
    if(arr.length === 0 ) return [];

    const stack = [...arr];
    const result = [];

    while(stack.length) {
        let lastItem = stack.pop();
        if(Array.isArray(lastItem)) {
            stack.push(...lastItem);
        }

        else result.push(lastItem);
    }

    return result.reverse();
};



console.log(flattenArray([1, [10, 12], [[2, 4], 7], 190]));
console.log(flattenArray([1, 22, [1, 3, 4, [4, 6] ]]));

