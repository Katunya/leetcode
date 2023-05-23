// Сортировка ВЫБОРОМ или ВСТАВКАМИ неотсортированного массива - O(n^2)


const findSmall = (arr) => {
    let smallValue = arr[0];
    let smallIndex = 0;

    for(let i = 1; i < arr.length ; i++) {
        if(arr[i] < smallValue) {
            smallValue = arr[i];
            smallIndex = i;
        }
    }
    return smallIndex
}

const selectionSort = (arr) => {
    const res = [];

    const length = arr.length;
    for( let i = 0; i < length ; i++) {
        let smallIndex = findSmall(arr);
        res.push(arr.splice(smallIndex, 1)[0])
    }
    return res;
}

console.log(selectionSort([5, 3, 6, 2, 10]));



const selectionSortRecursion = (arr) => {
    if(!arr.length ) return []

    const smallIndex = arr.splice( findSmall(arr), 1)
    return smallIndex.concat(selectionSortRecursion(arr))
}

console.log(selectionSortRecursion([5, 3, 6, 2, 10]));
