//Даны два массива: [1, 2, 3, 2, 0] и [5, 1, 2, 7, 3, 2]
// Надо вернуть [1, 2, 2, 3] (порядок неважен)
// С повтором


const intersectionOfMany = (arr1, arr2) => {
    const res = [];
    for (let i = 0; i < arr1.length; i++) {
        if(arr2.includes(arr1[i])) {
            res.push(arr1[i])
        }
    }

    return res;
}

console.log(intersectionOfMany([1, 2, 3, 2, 0, 5],[5, 1, 2, 7, 3, 2])) // [1, 2, 2, 3]
console.log(intersectionOfMany([1, 2, 3, 2, 0], [5, 1, 2, 7, 3, 2])) // [1, 2, 2, 3]

// без повтора
const intersect = (arr1, arr2) => {
    const setArr1 = new Set(arr1);
    return [... new Set(arr2.filter(num => setArr1.has(num)))]
}

console.log(intersect([1, 2, 3, 2, 0, 5],[5, 1, 2, 7, 3, 2])) // [5, 1, 2, 3]
