/*
66. Plus One

You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer.
The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
Increment the large integer by one and return the resulting array of digits.
 */

var plusOne = function(digits) {
    let index = digits.length - 1;

    while(digits[index] === 9) {
        digits[index] = 0;
        index --;

        if(index < 0) {
            digits.unshift(1);
        }
    }

    if(index >= 0) {
        digits[index]++;
    }

    return digits;
};

console.log([9, 9, 9]) // [1, 0, 0, 0]
