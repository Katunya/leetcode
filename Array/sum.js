

const sumReduce = (arr, sum = 0) => {
    if(!arr.length) return [];
    for( let num of arr) {
        if(Array.isArray(num)) {
            return sumReduce([...num], sum);
        }
        if (typeof (num) === "string") sum += +num.replace(/\D/gm,'');
        else sum += +num
    }

    return sum;
}


console.log(sumReduce([1, '2x', [1, 3, 4, [4, 6] ]]));
