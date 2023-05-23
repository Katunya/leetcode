// аналог lodash.invert
// { a: 1 } => { 1: 'a' }

function invert1(obj) {
    for (let key in obj) {
        let curr = key;
        key = obj[key]
        obj[key] = curr
        delete obj[curr]
    }
    return obj
}

console.log(invert1({ a: 1 }));


function invert2(obj) {
    const entries =  Object.entries(obj);

    return entries.reduce((acc, [key, item]) => {
        acc[item] = key
        return acc;
    }, {})

}

console.log(invert2({ a: 1 }));
