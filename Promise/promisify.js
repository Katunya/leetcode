function foo(callback) {
    setTimeout(function() {
        callback('A');
    }, Math.random()*100);
}

function bar(callback) {
    setTimeout(function() {
        callback('B');
    }, Math.random()*100);
}

function baz(callback) {
    setTimeout(function() {
        callback('C');
    }, Math.random()*100);
}


const promisify = (func) => {
    return new Promise( resolve => func(resolve) )
}

promisify(foo)
    .then(resolve => console.log(resolve))
    .then(() => promisify(bar))
    .then(resolve => console.log(resolve))
    .then(() => promisify(baz))
    .then(resolve => console.log(resolve))


async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return 10;
}

console.log(Promise.then(wait()))
