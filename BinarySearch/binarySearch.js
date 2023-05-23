// Функция получает отсортированный массив и значение. Если значение есть, то возвращается его позиция.

// ([1, 3, 5, 8, 9], 9) -> 1
// ([1, 1, 1, 3, 3,  5, 8, 9, 9, 9], 3) -> 1


const binarySearch = (array, num) => {

    let left = 0;
    let right = array.length - 1;

    while( left <= right){
        let middle = Math.round((left + right)/2);

        if(array[middle] === num) {
            return middle;
        }

        else if (array[middle] > num) {
            right--;
        }

        else if (array[middle] < num) {
            left++;
        }
    }
}

console.log(binarySearch([1, 2, 3, 5, 7, 8, 9], 9)) // 6
console.log(binarySearch([1, 3, 4, 5, 8, 9, 11], 9)) // 5


const binarySearchRecursion = (arr, curr, index = 0) => {
    if(arr.length === 0) return index;

    const middle = Math.floor(arr.length/2);
    if (arr[middle] !== curr) {
        binarySearchRecursion((arr[middle] > curr) ? arr.slice(0, middle) : arr.slice(middle+1), curr);
    }

    else return arr[middle];
}

console.log(binarySearchRecursion([1, 2, 3, 5, 7, 8, 9], 9)) // 6
