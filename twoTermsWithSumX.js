/**
 * Дана последовательность положительных чисел длиной N и число X
 *
 * Нужно найти два РАЗЛИЧНЫХ числа A и B из последовательности, таких что бы A + B = X или вернуть 0,0, если такой пары чисел нет
 */


const twoTermsWithSumX = (nums, x) => {

    const previous = new Set();

    for (let current of nums) {
        previous.add(current)

        if (previous.has(x - current) && !(x - current === current)) {
            return `${current}, ${x - current}`
        }
    }
}

console.log(twoTermsWithSumX([4, 4, 5, 3], 8))
