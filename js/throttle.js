
// Пример: мы скролим и каждые 100 миллисекунд нужно данные снизу доскроливать
// Каждые 100 миллисекунд проверять надо или не надо
// ЭТО ОБЕРТКА
// Для подгрузки информации!

/**
 * @param {(...args:any[]) => any} func
 * @param {number} wait
 * @returns {(...args:any[]) => any}
 */

let currentTime = 0

function throttle(func, wait) {
    let isWaiting = false;
    let savedThis = null;
    let savedArgs = null;
    return function waiting(...args) {
        if(isWaiting) {
            savedThis = this;
            savedArgs = args;
            return;
        }
        isWaiting = true;
        func.apply(this, args)

        setTimeout(() =>{

            if(savedThis) {
                waiting.apply(savedThis, savedArgs)
                savedThis = null;
                savedArgs = null
            }
            isWaiting = false

        }, wait)
    }
}




const run = (input) => {
    currentTime = 0
    const calls = []

    const func = (arg) => {
        calls.push(`${arg}@${currentTime}`)
    }

    const throttled = throttle(func, 1000)
    input.forEach((call) => {
        const [arg, time] = call.split('@')
        setTimeout(() => throttled(arg), time)
    })
    return calls
}

console.log(run(['A@0', 'B@2', 'C@3']))

const f = throttle(console.log, 500);
f(1);
f(2);
setTimeout(() => f(3), 100)
setTimeout(() => f(4), 500)
setTimeout(() => f(5), 900)
