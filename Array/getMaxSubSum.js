//*
// Подмассив наибольшей суммы
// *

function getMaxSubSum (arr) {
    let max = 0;
    let partialMax = 0;
    for(let i = 0; i < arr.length; i++) {
        partialMax+= arr[i];
        max = Math.max(partialMax, max);
        if(partialMax <= 0) partialMax = 0;
    }
    return max;
}

console.log(getMaxSubSum([2, -1, 2, 3, -9]))

