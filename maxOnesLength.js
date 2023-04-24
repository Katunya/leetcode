//Дан массив из нулей и единиц. Нужно определить, какой максимальный по длине подинтервал единиц можно получить, удалив ровно один элемент массива.
// [0, 0, 1, 1, 0, 1, 1, 0]

const maxOnesLength = (arr) => {
    let max_ones_length = 0;
    let subranges = [];
    let last_el = arr[0];

    for (let el of arr ) {
        if (last_el !== el) {
            if( el === 0) {
                last_el = subranges[1]
                max_ones_length = Math.max(last_el, max_ones_length)
            }
            subranges.push(el);
        }
    else {
        subranges[-1] = el;
        last_el = el
        }
    }

    console.log(subranges, last_el, max_ones_length)

}

console.log(maxOnesLength([0, 0, 1, 1, 0, 1, 1, 0]));
console.log(maxOnesLength([0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1]));

