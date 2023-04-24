// Алгоритм БЫСТРОЙ сортировки с помощью рекурсии
// O(n log n) - среднее время выполнения быстрой сортировки

const quickSort = (arr) => {
    if(arr.length < 2) return arr;

    const pivot = arr[Math.floor((arr.length - 1)/2)];

    const less = [];
    const greater = [];

    for( let i = 0; i < arr.length; i++) {
        if(pivot > arr[i]) {
            less.push(arr[i])
        }
        if(pivot < arr[i]){
            greater.push(arr[i])
        }
    }
    return quickSort(less).concat(pivot).concat(quickSort(greater))
}

console.log(quickSort([ 3, 5, 2, 1, 4]));
