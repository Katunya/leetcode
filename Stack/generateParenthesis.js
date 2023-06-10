/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const stack = [];
    const result = [];

    const backtracking = (open, close) => {
        if( open === n && close === n ) {
            result.push(stack.join(''))
        }
        if(open > close) {
            stack.push(')');
            backtracking(open, close + 1);
            //return backtracking
            stack.pop();
        }
        if( open < n) {
            stack.push('(');
            backtracking(open + 1, close);
            //return backtracking
            stack.pop();
        }

    }
    backtracking(0, 0);
    return result;

};

console.log(generateParenthesis(3)) //["((()))","(()())","(())()","()(())","()()()"]
console.log(generateParenthesis(1)) //["()"]
