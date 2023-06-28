

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

function sumStack (arr) {
    if(arr.length === 0) return [];
    const stack = [...arr];
    let result = 0;
    while(stack.length){
        let lastItem = stack.pop();

        if(Array.isArray(lastItem)) {
            stack.push(...lastItem);
        }
        else if(typeof lastItem === 'string'){
            result +=(+lastItem.replace(/\D/gm, ''))
        }
        else result+= lastItem
    }

    return result
}
console.log(sumStack([1, '2x', [1, 3, 4, [4, 6] ]]));


