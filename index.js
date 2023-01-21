/*
Running Sum of 1d Array
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
Return the running sum of nums.

Example 1:
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

const runningSum = function(nums) {
    for(let i = 1; i < nums.length; i++) {
        nums[i] = nums[i - 1] + nums[i];
    }
    return nums;
};

console.log(runningSum([1,2,3,4]))
console.log(runningSum([1,5,1,2]))


/*
1342. Number of Steps to Reduce a Number to Zero

Given an integer num, return the number of steps to reduce it to zero.

In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

Example 1:

Input: num = 14
Output: 6
Explanation:
Step 1) 14 is even; divide by 2 and obtain 7.
Step 2) 7 is odd; subtract 1 and obtain 6.
Step 3) 6 is even; divide by 2 and obtain 3.
Step 4) 3 is odd; subtract 1 and obtain 2.
Step 5) 2 is even; divide by 2 and obtain 1.
Step 6) 1 is odd; subtract 1 and obtain 0.
*/

/**
 * @param {number} num
 * @return {number}
 */

var numberOfSteps = function(num) {
    let counter = 0;
    while(num > 0) {
        if(num % 2 == 0) {
            num = num/2;
        }
        else {
            num--;
        }
        counter++
    }
    return counter;
}

// time complexity = 0(logn)
// space complexity = 0(1)

console.log(numberOfSteps(14)) // 6
console.log(numberOfSteps(8)) // 4
console.log(numberOfSteps(123)) // 12



var fizzBuzz = function(n) {
    const newArray = [];
    for (let i = 1; i <= n; i++) {
        if((i % 3 == 0) && (i % 5 == 0)){
             newArray.push('FizzBuzz')
         }
        else if (i % 3 == 0) {
             newArray.push('Fizz')
         }
        else if (i % 5 == 0){
             newArray.push('Buzz')
         }
         else { newArray.push(i.toString())}
    }

    return newArray;
};

// time complexity = 0(n)
// space complexity = 0(1

console.log(fizzBuzz(3)) // ["1","2","Fizz"]
console.log(fizzBuzz(5)) // ["1","2","Fizz","4","Buzz"]
console.log(fizzBuzz(15)) // Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]



/*
1. Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.


Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
         for(let j = i + 1; j < nums.length; j++) {
             if(nums[i] + nums[j] === target) {
                 return [i, j]
             }
         }
    }
};


console.log(twoSum([2,7,11,15], 9)) // [0,1]
console.log(twoSum([3,2,4], 6)) // [1,2]
console.log(twoSum([3,3], 6)) // [0,1]


/*
 *
 * 2 вложенных цикла - On^2
 * Линейная сложность On - вне зависимости
 * 200n или 1n - сложность равна On
 *
 * Пространственная сложность - количество используемой памяти
 *
 * Дана строка в кодировке UTF-8
 *
 * Найти самый часто встречающийся в ней символ.
 * Если несколько символов встречаются одинаково часто, то можно вынести любой.
 */


/*
 * Решение №1
 *
 * Переберем все позиции и для каждой позиции в строке еще раз переберем все позиции
 * и в случае совпадение прибавим к счетчику единицу. Найдем максимальное значение счетчика.
 *
 * On^2
 */

const range = (n) => Array(n).fill().map((i, k) =>  k);

const frequentSymbolsOne = (symbols) => {
    let symbolsAnswer = ''
    let countAnswer = 0;
    for( i in range(symbols.length)) {
        let count = 0;
        for ( j in range(symbols.length)) {
            if(symbols[i] === symbols[j]) {
                count+=1
            }
        }
        if(count > countAnswer ) {
            symbolsAnswer = symbols[i];
            countAnswer = count;
        }
    }
    return symbolsAnswer;
}


console.log(frequentSymbolsOne('fddffd'));


/*
 * Решение №2
 *
 * Переберем все позиции и для каждой позиции в строке еще раз переберем все позиции
 * и в случае совпадение прибавим к счетчику единицу. Найдем максимальное значение счетчика.
 *
 * C помощью структуры данных - set() - представляет собой коллекцию, где значение может появляться лишь один раз
 * Где n - колво символов в строке, а k - колво различных букв. Итого: O(n*k)
 */


const frequentSymbolsTwo = (symbols) => {
    let symbolsAnswer = ''
    let countAnswer = 0;

    const set = new Set(symbols);

    for(let now in set) {
        let count = 0;
        for ( j in range(symbols.length)) {
            if(now === symbols[j]) {
                count+=1
            }
        }
        if(count > countAnswer ) {
            symbolsAnswer = now;
            countAnswer = count;
        }
    }
    return symbolsAnswer;
}

console.log(frequentSymbolsTwo('aabbhabba'));


/*
 * Решение №3
 *
 * Переберем все позиции и для каждой позиции в строке еще раз переберем все позиции
 * и в случае совпадение прибавим к счетчику единицу. Найдем максимальное значение счетчика.
 *
 * Создаем словарь, где ключ - символ, а значение сколько раз символ встретился
 * Где O(n+k)
 *
 * Set - O1
 */

const frequentSymbolsThree = (symbols) => {
    let symbolsAnswer = ''
    let countAnswer = 0;

    const dictionary = {}
    const set = new Set(symbols);

    for( let now in set) {
        console.log(dictionary[now])
        if( !(now in dictionary)) {
            dictionary[now]+=0
        }
        dictionary[now]+=1

        if(dictionary[now] > countAnswer) {
            symbolsAnswer = now;
            countAnswer = dictionary[now]
        }
    }
    return symbolsAnswer;
}

console.log(frequentSymbolsThree('aaffffffffbabba'));

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

console.log(maxValueWithoutCopy([1,2,3,2]));


/*
    Яндекс.Академия
    Лекция 2
    Задача 4. Найти максимальное число в последовательности и второе по величине число(такое, которое будет максимальным, если вычеркнуть из последовательности одно максимальное число)
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

/*
    Яндекс.Академия
    Лекция 2
    Задача 6. Дана последовательность слов. Вывести все самые короткие слова, через пробел.
 */

const shortWord = (words) => {
    let minLength = words[0].length;
    for(let word of words) {
        if(minLength > word.length) {
            minLength = word.length
        }
    }

    let ansWords = ' ';
    for (let word of words) {
        if( word.length === minLength) {
            ansWords = ansWords.concat(' ', word);
        }
    }
    return ansWords
}

console.log(shortWord(['aaaa', 'bbb', 'cc', 'dd', 'ccccc', 'aaa', 'ej', 'aaewa','ww']));

/*
    Яндекс.Академия
    Лекция 2
    Задача 7. Игра PitCraft происходит в двумерном мире, который состоит из блоков размером 1х1. Над островом прошел сильный дождь, определите сколько блоков было затоплено.
 */

/* const waterCraft = (h) => {
    let maxPosition = 0;
    for( let i in range(h.length)) {
        if(h[i] > maxPosition) {
            maxPosition = i
        }
    }
    let maxNow = 0;
    let ans = 0;

    for( let i in range(maxPosition)){
        if( h[i] > maxNow){
            maxNow = h[i]
        }
        ans += maxNow - h[i]
    }
    // обнуляем, так как дошли до максимального правого значения
    maxNow = 0;
    for( let i in range(h.splice(0, maxPosition).length)){
        if( h[i] > maxNow){
            maxNow = h[i]
        }
        ans += maxNow - h[i]
    }
    return ans;

}

console.log(waterCraft(3,1,4,3,5,1,1,3,1))

*/


/*
    Яндекс.Академия
    Лекция 2
    Задача 8 * Упрощенная. Дана строка вида AAAAABBBBBBCCCCCDDDDDXXXXXZZZZ -> ABCDXZ
 */

const RLEeasy = (newString) => {
    let symbol = '';
    let ans = '';
    for( let i in range(newString.length)){
        if(symbol !== newString[i])  {
            ans += newString[i]
        }
        symbol = newString[i]
    }
    return ans;
}

console.log(RLEeasy('AAAAABBBBBBCCCCCDDDDDXXXXXZZZZ'))

/*
    Яндекс.Академия
    Лекция 2
    Задача 8. RLE. Дана строка вида AAAAABBBBBBCCCCCDDDDDXXXXXZZZZ -> 5A6B5C5D5X4Z
 */

const counter = (symbol, n ) => {
    if (n > 1) {
        return n + symbol
    }
    return symbol
}

const RLE = (str) => {
    let lastSymbol = str[0];
    let lastPosition = 0;
    let ans = [];

    for( let i in range(str.length)){
        if(lastSymbol !== str[i]) {
            ans.push(counter(lastSymbol, i - lastPosition))
            lastPosition = i;
            lastSymbol= str[i]
        }
    }

    return ans.join('')
}

console.log(RLE('AAAAABBBBBBCCCCCDDDDDXXXXXZZZZ'))

