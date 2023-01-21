/*
    Яндекс.Академия
    Лекция 2

    Задача 3. Максимальное число в последовательности
 */

const maxValue = (arr) => {
    let ans = arr[0];
    for (let i in range(arr.length - 1)) {
        if(arr[i] > ans) {
            ans = arr[i]
        }
    }
    return ans;
}

console.log(maxValue([1,2,3,2]));
