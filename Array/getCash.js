

/**
 * @param {Number[]} bills
 * @param {Number} total
 * @returns {Number[]} порядок не важен
 */

const getCash = (bills, total) => {
    const result = [];

    let i = bills.length - 1;

    while(true) {
        if(total === 0){
            break;
        }

        if(bills[i] > total) {
            i-=1;
            continue;
        }

        total-=bills[i]
        result.push(bills[i])

    }

    return result;
};





console.log(getCash([1, 2, 5, 10, 20, 50], 91)); // [ 50, 20, 20, 1 ]
console.log(getCash([1, 2, 5, 10, 20, 50], 82)); // [ 50, 20, 10, 2 ]
console.log(getCash([1, 2, 5, 10, 20, 50], 73)); // [ 50, 20, 2, 1 ]
console.log(getCash([1, 2, 5, 10, 20, 50], 40)); // [ 20, 20 ]
console.log(getCash([1, 2, 5, 10, 20, 50], 12)); // [ 10, 2 ]
console.log(getCash([1, 2, 5, 10, 20, 50], 3)); // [ 2, 1 ]
console.log(getCash([1, 2, 5, 10, 20, 50], 1)); // [ 1 ]
