import fetch from "node-fetch";

/**
 * @param {Array<any>} promises - notice that input might contains non-promises
 * @return {Promise<Array<{status: 'fulfilled', value: any} | {status: 'rejected', reason: any}>>}
 */

// c promise all
function allSettled(promises) {
    return Promise.all(promises.map((promis) => {
        Promise.resolve(promis).then(value => ({
            status: 'fulfilled',
            value: value
        }), error => ({
            status: 'rejected',
            reason: error
        }))
    }))
}


function allSettledWithoutAll(promises) {
    return Promise.all(promises.map((promis) => {
        Promise.resolve(promis).then(value => ({
            status: 'fulfilled',
            value: value
        }), error => ({
            status: 'rejected',
            reason: error
        }))
    }))
}

let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://no-such-url'
];

Promise.allSettled(urls.map(url => fetch(url)))
    .then(results => { // (*)
        results.forEach((result, num) => {
            if (result.status == "fulfilled") {
                console.log(`${urls[num]}: ${result.value.status}`);
            }
            if (result.status == "rejected") {
                console.log(`${urls[num]}: ${result.reason}`);
            }
        });
    });
