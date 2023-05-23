/*
    Яндекс.Академия
    Лекция 2

    Задача 1. Найти первое(левое) вхождение положительного числа x в неё или вывести -1, если число x не встречалось.
 */

const occurrenceNumber = (arr, x) => {
    let positionAnswer = -1;
    for( let i in range(arr.length)) {
        if(positionAnswer === -1 && arr[i] === x) {
            positionAnswer = i;
        }
    }
    return positionAnswer
}

console.log(occurrenceNumber(2, [1,2,3,2]))
