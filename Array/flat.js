function flat(arr, depth) {

    const result = [];

    for(let i = 0; i < arr.length; i++) {
        if( Array.isArray(arr[i])) {
            result.push(...flat(arr[i]))
        }

        else  result.push(arr[i]);
    }
    return result;
}

console.log(flat([[1,1], [[2, 1]], [[3, [4]],1]]));


