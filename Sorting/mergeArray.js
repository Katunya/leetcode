// Дано 2 отсортированных (по возрастанию) массива A и B длины M и N. Н
// ужно слить их в один отсортированный (по возрастанию) массив, состоящий из элементов первых двух.
// # Ввод
// [4, 7, 13]
// [3, 5, 5, 8, 9, 11]
// # Вывод
// [3, 4, 5, 5, 7, 8, 9, 11, 13]


const mergeArray = (array1, array2) => {

    const res = [];
    for(let i = 0; i < array1.length; i++) {
        for(let j = 0; j < array2.length; j++) {
            if(array1[i] > array2[j]) {
                res.push(array2[j]);
            }
            else if (array1[i] < array2[j]) {
                res.push(array1[i]);
            }
        }
    }

    return res;
}


console.log(mergeArray([4, 7, 13],[3, 5, 5, 8, 9, 11]))
