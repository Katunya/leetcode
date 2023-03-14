/*
    Яндекс.Академия
    Лекция 2
    Задача 8. RLE. Дана строка вида AAAAABBBBBBCCCCCDDDDDXXXXXZZZZ -> 5A6B5C5D5X4Z
 */

const counter = (symbol, n ) => {
    if (n > 1) {
        return symbol + n.toString()
    }
    return symbol
}

const RLE = (str) => {
    let lastSymbol = str[0];
    let lastPosition = 0;
    let ans = [];

    for( let i = 0; i< str.length; i++){
        if(lastSymbol !== str[i]) {
            ans.push(counter(lastSymbol, i - lastPosition))
            lastPosition = i;
            lastSymbol= str[i]
        }
    }

    return ans.join('')
}

console.log(RLE('AAAAABBBBBBCCCCCDDDDDXXXXXZZZZ')) //A5B6C5D5X5
console.log(RLE('AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB'))  //A4B3C2XYZD4E3F3A6

