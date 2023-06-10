//Дан массив из нулей и единиц. Нужно определить, какой максимальный по длине подинтервал единиц можно получить, удалив ровно один элемент массива.
// [0, 0, 1, 1, 0, 1, 1, 0]

const maxOnesLength = (arr) => {
    let maxLength = 0;
    let length = 0;
    let lastZeroIndex = 0;
    let missedZero = false;

    for( let i = 0; i < arr.length ; i++) {
        if (arr[i] === 0) {
            if (missedZero) {
                if (maxLength < length) maxLength = length;
                length = 0;
                i = lastZeroIndex
                missedZero = false;
            } else {
                lastZeroIndex = i;
                missedZero = true;
            }
        } else length = length + 1;
    }

    if( length > maxLength) maxLength = length
    if(arr.length === length) return length - 1;

    return maxLength
}
//
console.log(maxOnesLength([0, 0, 1, 1, 0, 1, 1, 0])); // 4
console.log(maxOnesLength([0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1]));// 5
console.log(maxOnesLength([0]));// 0
console.log(maxOnesLength([1, 1, 1]));// 2
console.log(maxOnesLength([0, 0, 0]));// 0
console.log(maxOnesLength([1, 0, 1, 1]));// 3
console.log(maxOnesLength([0, 1, 1, 0]));// 2
console.log(maxOnesLength([1, 0, 1, 1, 0]));// 3
console.log(maxOnesLength([1, 0, 0, 1, 0]));// 1


