/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    if (tokens.length === 0) return 0;
    const stack = [];


    for (let i = 0; i <= tokens.length ; i++) {
            switch (tokens[i]) {
                case '-':
                    let a = stack.pop();
                    let b = stack.pop();

                    stack.push(b - a);
                    break;
                case '+':
                    stack.push(stack.pop() + stack.pop());
                    break;
                case '/':
                    let c = stack.pop();
                    let d = stack.pop();

                    stack.push(d/c <= 0 ? Math.ceil(d/c) : Math.floor(d/c));
                    break;
                case '*':
                    stack.push(stack.pop() * stack.pop());
                    break;
                default:
                    stack.push(Number(tokens[i]))
            }
        }
    return stack[0]
}

console.log(evalRPN(["2","1","+","3","*"])) // 9
console.log(evalRPN(["4","13","5","/","+"])) // 6
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"])) // 22
console.log(evalRPN(["4","-2","/","2","-3","-","-"])) // -7
