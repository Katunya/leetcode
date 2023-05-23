// Дано два ОТСОРТИРОВАННЫХ массива - необходимо слить в один

const merge = (arr1, arr2) => {
    const res = [];

    while( arr1.length && arr2.length) {
        if( arr1[0] > arr2[0]) {
            res.push(arr2[0]);
            arr2.shift();
        }

        else if (arr1[0] < arr2[0]) {
            res.push(arr1[0]);
            arr1.shift();
        }
    }

    return [...res, ...arr1, ...arr2];
}


console.log(merge([21, 23, 24, 40, 75], [10, 11, 41, 50, 65, 86]));

const mergeIntoOne = (arr) => {
    const pivot = arr.length / 2;

    if(arr.length < 2) return arr;

    const left = arr.splice(0, pivot);

    return merge(mergeIntoOne(left), mergeIntoOne(arr));

}
console.log(mergeIntoOne([10, 11, 21, 24, 23, 40, 41, 50, 65, 75, 86]));


const multiplicationTable = (arr, mult ) => {
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = 1; j < mult; j++) {
           console.log(i, arr[i] * j);
        }
    }
    return arr;
}


console.log(multiplicationTable([2, 3, 7, 8, 10], 7));
