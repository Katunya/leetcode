const meanReduce = (numbers) => {
    const numbersLength = numbers.length;

    if(!numbers || numbers.length) return 0;

    const res = numbers.reduce((acc, currValue) => {
        acc += currValue;
        return acc;
    }, 0);

    return res;
};

console.log(meanReduce([1, 2, 3]));

// Дан массив чисел. Найти среднее арифметическое.

const meanFor = (numbers) => {
    const numbersLength = numbers.length;

    if(!numbers || numbers.length) return 0;

    let sum = 0;

    for(let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum ;
};

console.log(meanFor([1, 2, 3]));
