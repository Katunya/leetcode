

const times = (y) =>  (x) => x * y
const plus = (y) => (x) => x + y
const subtract = (y) =>  (x) => x - y
const divide = (y) => (x) => x / y

/**
 * @param {Array<(arg: any) => any>} funcs
 * @return {(arg: any) => any}
 */
function pipe(funcs) {
    return args => funcs.reduce((acc, fn) => fn(acc), args)
}

function pipeWithThis(funcs) {
    return function (args) {
        return funcs.reduce((acc, fn) => {
            return fn.call(this, acc)
        }, args)
    }
}




console.log(pipe([
    times(2),
    times(3)
]))
// x * 2 * 3

// pipe([
//     times(2),
//     plus(3),
//     times(4)
// ])
// // (x * 2 + 3) * 4
//
// pipe([
//     times(2),
//     subtract(3),
//     divide(4)
// ])
// (x * 2 - 3) / 4
