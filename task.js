// Дано 2 отсортированных (по возрастанию) массива A и B длины M и N. Нужно слить их в один отсортированный (по возрастанию) массив, состоящий из элементов первых двух.
// # Ввод
// [4, 7, 13]
// [3, 5, 5, 8, 9, 11]
// # Вывод
// [3, 4, 5, 5, 7, 8, 9, 11, 13]

[1,1,1,1,1]
    [5,5,5,5,5,5]

    [1,1,1,1,1,5,5,5,5,5]
i 0 0 1
j 0 1 1 2
const mergeArrayFor = (arr1, arr2) => {
    const res = [];
    let i =0;
    let j =0;

    while(arr1[i] && arr2[j]) {
        if(arr1[i] > arr2[j]) {
            res.push(arr2[j]);
            j++;
        } else if(arr1[i] < arr2[j]) {
            res.push(arr1[i]);
            i++;
        } else if(arr1[i] === arr2[j]) {
            res.push(arr1[i], arr2[j]);
            j++;
            i++;
        }
    }

    return res;
}

//Дан список целых неповторяющихся чисел и целое число.
// Необходимо найти все пары в списке, сумма которых равна заданному числу.
// Перестановки (i, j) и (j, i) считаются одной и той же парой, нужно вывести только одну из них (любую).
// Вход:
// [2, 4, 5, 3],
// 7
// Вывод:
// [ [2, 5], [4, 3] ]


const coupleNumbers = (arr, num) => {
    const sortArray = arr.sort((a, b) => b - a);

    let left = 0;
    let right = arr.length - 1;

    const res = []


    while(left < right) {
        if( sortArray[left] + sortArray[right] === num) {
            res.push([sortArray[left], sortArray[right]]);
            left++;
            right--;
        }

        if(sortArray[left] +  sortArray[right] < num) {
            left --;
        }

        if(sortArray[left] +  sortArray[right] > num) {
            right++;
        }
    }

    return res;
}



