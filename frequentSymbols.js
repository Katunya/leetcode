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
