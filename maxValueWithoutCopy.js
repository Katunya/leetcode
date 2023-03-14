/*
    Яндекс.Академия
    Лекция 2

    Задача 3. Максимальное число в последовательности (решение 2, без копирования)
 */

const maxValueWithoutCopy = (arr) => {
    let ansIndex = 0;
    for (let i in range(arr.length - 1)) {
        if(arr[i] > arr[ansIndex]) {
            ansIndex = i
        }
    }
    return arr[ansIndex];
}

console.log(maxValueWithoutCopy([1,2,3,2, 88]));
