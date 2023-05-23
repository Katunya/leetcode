/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

const swap = (arr, indexFirst, indexSecond) => {
    let currentValue = arr[indexFirst]; //

    arr[indexFirst] = arr[indexSecond]; // o = o - h?
    arr[indexSecond] = currentValue; // o = o
}

const reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;

    while(left < right) {
        swap(s, left, right)

        left++;
        right--;
    }

    return s;
};

console.log(reverseString( ["h","e","l","l","o"])) //["o","l","l","e","h"]
console.log(reverseString( ["H","a","n","n","a","h"])) //["h","a","n","n","a","H"]

