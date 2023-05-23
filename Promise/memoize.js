/*
Мемоизация №1
Функция getData ходит за данными и возвращает промис.
Напишите кеширующую функцию memoize со следующим поведением:
Если getData ещё не была вызвана, вызывает её и кеширует результат;
Если вызывалась раньше заданного в функции времени — возвращает сохранённый результат;
Если вызывалась позже заданного в функции времени, нужно заново сходить за данными.
Она принимает функцию, сигнатура которой описана в getData, и время жизни кеша. Возвращает мемоизированную функцию.
 */

const memoize = (func, timeout) => {
    let cache = null;
    let expire = Date.now + timeout;

    console.log(expire)
    return () => {
        if( !cache || Date.now() > expire){
            return func().then(data => {
                cache = data;
                expire = Date.now() + timeout;
                return data;
            })
        }
        return Promise.resolve(cache)
    }
}


function getData() {
    return new Promise(resolve => {
        setTimeout(() => resolve(42), 1000)
    })
}


const memoized = memoize(getData, 1000);

memoized()
    .then(data1 => console.log(data1)) // получаем долго
    .then(memoized)
    .then(data2 => console.log(data2)) // получаем быстро, из кеша
    .then(memoized)
    .then(data3 => console.log(data3)) // получаем быстро, из кеша
    .then(() => {
        setTimeout(() => {
            return memoized().then(data4 => console.log(data4)); // получаем долго, считается заново
        }, 5000);
    });



function generateKey(args) {
    return args.map(arg => `${typeof(arg)}<${String(arg)}>`).join(',');
}

function memoize2(fn, timeout) {
    const cache = {};

    return function (...args) {
        const key = generateKey(args);
        const result = cache[key];

        if (typeof result === 'undefined' || Date.now() > result.expire) {
            console.log('Execute fn');
            return Promise.resolve(fn(...args)).then(value => {
                cache[key] = { value, expire: Date.now() + timeout };
                console.log(cache)
                return value;
            });
        }

        console.log('From cache');

        console.log(cache)
        return Promise.resolve(result.value);
    };
}

function getData() {
    return new Promise(resolve => setTimeout(() => resolve(42), 1000));
}

const memoizedGetData = memoize2(getData, 1000);

memoizedGetData()
    .then(result => console.log(result)) // получаем долго
    .then(() => memoizedGetData())
    .then(result => console.log(result)) // получаем быстро, из кеша
    .then(() => memoizedGetData())
    .then(result => console.log(result)) // получаем быстро, из кеша
    .then(() => {
        // получаем долго, считается заново
        setTimeout(() => memoizedGetData().then(result => console.log(result)), 5000);
    });
