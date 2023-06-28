setTimeout(() => console.log('1'), 10000)
setTimeout(() => console.log('2'), 10000)
setTimeout(() => console.log('3'), 10000)

function clearAllTimeout() {
    // получаем самый большой таймер
    let timer = setTimeout(() => null, 0);
    while(timer) {
        clearTimeout(timer);
        timer--;
    }
}

// all 3 functions are scheduled 10 seconds later
clearAllTimeout()
