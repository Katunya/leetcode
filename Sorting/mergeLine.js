//Вход: [1, 3] [100, 200] [2, 4]
// Выход: [1, 4] [100, 200]

const mergeLine = (array) => {
    if(array.length < 2) return array;

    array.sort((itemA, itemB) => itemA[0] - itemB[0])

    const result = [array[0]];


    for( let arr of array) {
        let recent = result[result.length - 1]
        if(recent[1] >= arr[0]) {
            recent[1] = Math.max(recent[1], arr[1])
        }
        else result.push(arr)
    }

    return result
}

// console.log(mergeLine([[1, 3], [100, 200], [2, 4], [2, 5]])); // [1, 3], [2, 5], [100, 200]
console.log(mergeLine([[1, 3], [100, 200], [2, 4]])); // [1, 4] [100, 200]
// console.log(mergeLine([[1, 3], [2, 6], [8, 10], [15, 18]])); // [1, 6], [8, 10], [15, 18]
// console.log(mergeLine([[1, 4], [4, 5]])); // [1, 5]


