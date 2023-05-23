/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    for(let i = 0; i < strs.length; i++) {
        const currentValue = strs[0][i]
        console.log(currentValue)
        for(let j = 0; j < strs[i].length; j++) {
            // console.log(i, j)
            // console.log(strs[i][j])
        }
    }
};

console.log(longestCommonPrefix(["flower","flow","flight"])) // fl
console.log(longestCommonPrefix(["dog","racecar","car"])) // ''
