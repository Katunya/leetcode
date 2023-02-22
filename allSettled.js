const delay = timeout => new Promise(resolve => setTimeout(resolve, timeout));

const promises = [
    delay(65).then(() => 10),
    delay(100).then(() => { throw 'my error'; })
];

function allSettled(promises) {
    const result = []

    return new Promise(() => {
        for(let i = 0 ; i < promises.length; i++) {
            promises[i]
                .then(
                    value => {
                        result[i] = {
                            status: 'resolved',
                            value
                        }})
                .catch(err => {
                    result[i] = {
                        status: 'rejected',
                        err
                    }
                })
        }
    })
}

console.log(allSettled(promises));
