/*
    Яндекс.Академия
    Лекция 2
    Задача 4. Найти максимальное число в последовательности и второе по величине число
    (такое, которое будет максимальным, если вычеркнуть из последовательности одно максимальное число)
 */

const maxValueTwo = (arr) => {
    let maxValue1 = Math.max(arr[0], arr[1]);
    let maxValue2 = Math.min(arr[0], arr[1]);
    for( let i in range(arr.splice(0,2).length)) {
        if(arr[i] > maxValue1) {
            maxValue2 = maxValue1;
            maxValue1 = arr[i]
        }
        else if(arr[i] > maxValue2) {
            maxValue2 = arr[i]
        }
    }
    return `Числа: ${maxValue2} ${maxValue1} `
}

console.log(maxValueTwo([4,2,5,7,9,1]));
console.log(maxValueTwo( [5,9,7,8,1,7,4,1,7] ));
