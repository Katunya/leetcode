/*
338. Counting Bits
Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n),
ans[i] is the number of 1's in the binary representation of i.
 */

const countBits = (n) => {
    let res = [];
    for(let i = 0; i <= n; i++ ) {
        const val = i.toString(2).split('').reduce((curr, acc) => {
            return +acc + +curr
        } , 0)
        res.push(val)
    }
    return res;
}

console.log(countBits(2)) // [0,1,1]
console.log(countBits(5)) // [0,1,1,2,1,2]
