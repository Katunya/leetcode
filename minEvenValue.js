/*
    Яндекс.Академия
    Лекция 2
    Задача 5. Найти минимальное четное число в последовательности или вынести -1, если такого не существует.
 */

const minEvenValue = (arr) => {
    let ans = -1;
    let flag = false
    for( let i in range(arr.length)) {
        if(arr[i] % 2 === 0 && ( !flag || ans > arr[i] )) {
            ans =  arr[i]
            flag = true;
        }
    }
    return ans;
}

console.log(minEvenValue([4,5,7,9,1,2]));
