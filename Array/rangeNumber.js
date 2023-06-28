//Дан список интов, повторяющихся элементов в списке нет. Нужно преобразовать это множество в строку,
// сворачивая соседние по числовому ряду числа в диапазоны. Примеры:
// [1,4,5,2,3,9,8,11,0] => "0-5,8-9,11"
// [1,4,3,2] => "1-4"
// [1,4] => "1,4"


const task = (array) => {
    if(!array.length) return '';

    const sortedArray = array.sort((a, b) => a - b);
    let firstSymbol = array[0];
    const result = [];

    for(let i = 0; i < sortedArray.length; i++) {
            if (sortedArray[i] + 1 !== sortedArray[i + 1]) {
                if(sortedArray[i] === firstSymbol) { result.push(sortedArray[i]);}
                else {
                    result.push(`${firstSymbol}-${sortedArray[i]}`);
                    firstSymbol = sortedArray[i + 1];
                }

        }
    }

    return result.join(',');
}

//1, 2, 3, 4
// 1 const -> let
// 2 Проходилась в for по неотсортированному массиву
// 3 first symbol - неправильно записала
// 4 Не записала в result
// 5 Не учла последнее значение
console.log(task([1,4,5,2,3,9,8,11,0]))
