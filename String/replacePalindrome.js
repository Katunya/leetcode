// 1.4 Напишите функцию, которая проверяет, является ли заданная строка перестановкой палиндрома.

const replacePalindrome = (str) => {
    const lowerStr = str.toLowerCase().split(' ').join('');

    const dictionary = {};

    for (let current of lowerStr) {
        if(!(current in dictionary)) {
            dictionary[current] = 0;
        }
        dictionary[current] +=1;
    }

    let temp = false;
    let result = true;
    for(let now in dictionary) {
        if(dictionary[now] % 2 === 1){
            if(temp) {
                result = false
            }
            temp = true;
        }
    }
    return result;
}
console.log(replacePalindrome('Tact Coa')) // true -> taco cat, atco cta;
console.log(replacePalindrome('Tact sdfCoa')) // true -> taco cat, atco cta;
console.log(replacePalindrome('Tact FDCoa')) // true -> taco cat, atco cta;
