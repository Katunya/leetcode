const generateParenthesis = (n) => {
    const res = [];


    const backtracking = (left, right, str) => {

        if( left + right === n * 2 ) {
            res.push(str);
            return;
        }

        if(left < n) {
            backtracking(left + 1, right, str + '(' );
        }

        if(right < left) {
            backtracking(left, right + 1, str + ')' );
        }
    }

    backtracking(0, 0, '')

    return res;
}

console.log(generateParenthesis(3))
