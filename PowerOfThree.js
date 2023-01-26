
/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = function(n) {
  if(n === 1) return true;

  if(!Number.isInteger(n) || n <= 0) return false;

  return isPowerOfThree(n/3);
};

console.log(isPowerOfThree(27))
console.log(isPowerOfThree(0))
console.log(isPowerOfThree(-1))
console.log(isPowerOfThree(45))
