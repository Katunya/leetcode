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
