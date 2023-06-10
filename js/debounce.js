


// Проблема: в инпуте при вводе значений каждый раз отправляется запрос, что перегружает рендеринг
// что бы такого не было, лучше понабрать запросов и выполнить последний полученный запрос
//  ─ A ─ B ─ C ─ ─ D ─ ─ ─ ─ ─ ─ E ─ ─ F ─ G  ->  ─ ─ ─ ─ ─ ─ ─ ─ D ─ ─ ─ ─ ─ ─ ─ ─ ─ G
// debounce возвращает функцию, но немного замедленную
// схлопывает функцию до меньшего количества вызовов
// ЭТО ОБЕРТКА
/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @returns {(...args: any[]) => any}
 */
function debounce(func, wait) {
    let timer;
    //вытаскиваем аргументы функции
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(() => {
            // this верхней функции, так как у стрелочных их нет
            func(...args)
        }, wait)
    }
}



let currentTime = 0

const run = (input) => {
    currentTime = 0
    const calls = []

    const func = (arg) => {
        calls.push(`${arg}@${currentTime}`)
    }

    const debounced = debounce(console.log, 3)
    input.forEach((call) => {
        const [arg, time] = call.split('@')
        setTimeout(() => debounced(arg), time)
    })
    return calls
}

const f = debounce(console.log, 1000);
f(1);
f(2);
setTimeout(() => f(3), 100)
setTimeout(() => f(4), 500)
setTimeout(() => f(5), 1500)
run(['A@0', 'B@2', 'C@3', 'D@4', 'E@5'])
