/*
    Яндекс.Академия
    Лекция 2
    Задача 8. RLE. Дана строка вида AAAAABBBBBBCCCCCDDDDDXXXXXZZZZ -> 5A6B5C5D5X4Z
 */
//
// const counter = (symbol, n ) => {
//     if (n > 1) {
//         return n.toString() + symbol
//     }
//     return symbol
// }

// const RLE = (str) => {
//     let lastSymbol = str[0];
//     let lastPosition = 0;
//     let ans = [];
//
//     for( let i = 0; i< str.length; i++){
//         if(lastSymbol !== str[i]) {
//             ans.push(counter(lastSymbol, i - lastPosition))
//             lastPosition = i;
//             lastSymbol = str[i]
//         }
//     }
//
//     ans.push(str.length - lastPosition, lastSymbol )
//
//     return ans.join('')
// }
//
// console.log(RLE('AAAAABBBBBBCCCCCDDDDDXXXXXZZZZ')) // 5A6B5C5D5X4Z
// console.log(RLE('AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB'))  //A4B3C2XYZD4E3F3A6
//
//
//


//rle

const counter = (symbol, count) => {
    if (count > 1) {
        return count.toString() + symbol ;
    }
    return symbol;
}

const RLE = (str) => {

    if(!str.length) return '';

    if((/[0-9]/g).test(str)) return 'ERROR';
    let prevSymbol = str[0];
    let prevPosition = 0;

    const result = [];

    for(let i = 0; i < str.length; i++) {
        if(prevSymbol !== str[i]) {
            result.push(counter(prevSymbol,  i - prevPosition));
            prevSymbol = str[i];
            prevPosition = i;
        }
    }


    result.push(counter(prevSymbol, str.length - prevPosition));

    return result.join('');
}

console.log(RLE('AAAAABBBBBBCCCCCDDDDDXXXXXZZZZ')) // 5A6B5C5D5X4Z
console.log(RLE('123213')) // 5A6B5C5D5X4Z
console.log(RLE('AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB'))  //A4B3C2XYZD4E3F3A6



//1
