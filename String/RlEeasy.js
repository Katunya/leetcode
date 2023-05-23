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
