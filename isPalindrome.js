
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = s.toLowerCase().replace(/[^A-Za-z0-9]/g, '')

    let right = 0;
    let left = str.length - 1;

    while(left > right) {
        if(str[right] !== str[left]) {
            return false;
        }
        else {
            right++;
            left--;
        }
    }
    return true;
};
console.log(isPalindrome("A man, a plan, a canal: Panama"))



/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome2 = function (str) {
let s = str.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
    for (let i = 0; i < s.length / 2; i++) {
        if (s[i] !== s[s.length - 1 - i]) {
            return false;
        }
    }
    return true;
};
