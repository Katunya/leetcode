/**
 * @param {Array<any>} promises - notice input might have non-Promises
 * @return {Promise<any[]>}
 */
function all (promises) {
    const result = [];
    return new Promise((resolve, reject) => {
        if(promises.length === 0) resolve(result);


        for(let i = 0 ; i < promises.length; i++) {
            Promise.resolve(promises[i])
                .then((value) => {
                    result.push(value);
                    if(i === promises.length - 1) {
                        resolve(result)
                    }
                },reject)
            }
        })
}

const promises = [
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('1');
        }, 100);
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('2');
        }, 500);
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('3');
        }, 1000);
    })
]

all(promises)
    .then(res => {
        console.log(res);
    })

all([1,2,3, Promise.resolve(4)])
