/*
Счастливые числа
Число называется счастливым, если цифры расположены в неубывающем порядке и сумма значений цифр равна n.

Нужно написать функцию, которая на вход получает два числа:

n - сумма значений цифр
k - количество цифр в числе от 3 до 20
А возвращает массив с тремя значениями:

общее количество счастливых чисел
минимальное подходящее число приведенное к строке
максимальное подходящее число приведенное к строке
Если подходящих чисел нет, то нужно вернуть массив c одним элементом 0

Примечание
Исходный код нужно оформить следующим образом:

module.exports = function (n, k) {
    // ваше решение
}
Пример использования:

const findAll = require('..');
findAll(10, 3); // [8, 118, 334]
findAll(27, 3); // [1, 999, 999]
findAll(28, 3); // [0]

 */


function findAll2(n, k) {
    const results = [];
    let min = null;
    let max = null;

    function search(curNum, curSum, curDigit) {
        if (curSum > n) {
            return;
        }
        if (curDigit === k) {
            if (curSum === n) {
                const numStr = curNum.toString();
                if (min === null || numStr < min) {
                    min = numStr;
                }
                if (max === null || numStr > max) {
                    max = numStr;
                }
                results.push(curNum);
            }
            return;
        }
        const start = curDigit === 0 ? 1 : parseInt(curNum.toString().charAt(curDigit - 1));
        for (let i = start; i <= 9; i++) {
            search(parseInt(curNum.toString() + i), curSum + i, curDigit + 1);
        }
    }

    search(0, 0, 0);

    if (results.length === 0) {
        return [0];
    }
    return [results.length, min, max];
}


const reduceNumber = (number) => {
    return number.reduce((acc, currItem) => acc + Number(currItem), 0)
}

const findAll = (n, k) => {
    if( k < 3 || k > 20) return [];

    const min = Math.pow(10, k - 1);
    const max = Math.pow(10, k) - 1;
    const result = [];


    for(let currNum = min; currNum <= max; currNum++) {
        const digit = currNum.toString().split('')
        let isMark = false;
        let sum = reduceNumber(digit);
        for(let i = 0; i < digit.length; i++) {

            if(digit[i] > digit[i+1]) {
                isMark = true;
            }
        }

        if(isMark){
            continue;
        }

        if( n === sum) {
            result.push(currNum);
        }
    }

    if(!result.length) return [0]

    return [result.length, result[0], result[result.length-1]]
}


console.log(findAll(10, 3)); // [8, 118, 334]
console.log(findAll(27, 3)); // [1, 999, 999]
console.log(findAll(28, 3)); // [0]
