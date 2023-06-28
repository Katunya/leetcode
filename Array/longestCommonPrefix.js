/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return '';

    let result ='';

    for(let i = 0; i < strs[0].length; i++) {
        if(strs.every((item) => item[i] === strs[0][i])){
            result+=strs[0][i]
        }
        else break;
    }

    return result;
};

console.log(longestCommonPrefix(["flower","flow","flight"])) // fl
console.log(longestCommonPrefix(["dog","racecar","car"])) // ''
console.log(longestCommonPrefix( ['flower', 'apple', 'app'])) // ''
console.log(longestCommonPrefix( ["cir","car"])) // ''
console.log(longestCommonPrefix( [""])) // ''
