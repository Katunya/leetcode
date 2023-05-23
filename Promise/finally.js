/*
Реализуйте полифилл для Promise.prototype.finally.
 */


Promise.prototype.finally = function (fn) {
    const onFinally = (callback) =>  Promise.resolve(fn()).then(callback);

    return this.then(
        result => onFinally(() => result),
        error => onFinally(() => Promise.reject(error))
    )
}

const resolvedPromise = Promise.resolve()
    .finally(() => console.log('cleanup')); // Сработает

// reject
const rejectedPromise = Promise.reject('Error')
    .finally(() => console.log('cleanup')); // Сработает

const promise = Promise.reject('Error')
    .finally(() => { throw 'foo'; })
    .catch(e => console.log(e)) // => 'foo'


console.log(resolvedPromise)
console.log(rejectedPromise)
console.log(promise)
