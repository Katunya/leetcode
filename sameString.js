// 1.2 Для двух строк напишите метод, определяющий, является ли одна строка перестановкой другой

const sameString = (a, b) => {
    const listA = a.toLowerCase().split('').sort();
    const listB = b.toLowerCase().split('').sort();
    console.log(listA, listB)
    return listA === listB;
}

console.log(sameString('acebd', 'acdeb'));
console.log(sameString('aaaaa', 'eeeeee'));
console.log(sameString('aabbcc', 'acbabc'));
