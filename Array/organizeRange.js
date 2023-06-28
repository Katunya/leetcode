/**
 * @param {Number[]} arr
 * @returns {Number[][]}
 */
const organizeInRange = (arr) => {
    arr.sort((a, b) => a - b);

    const result = [];

    let firstSymbol = arr[0];

    for(let i = 0; i < arr.length; i++) {
        if( arr[i] + 1 !== arr[i+1]  ) {
            if(firstSymbol === arr[i]){
                result.push([arr[i]])
            }
            else result.push([firstSymbol, arr[i]])

            firstSymbol = arr[i+1]
        }
    }

    return result;
}



console.log(organizeInRange([1, 4, 5, 2, 3, 9, 8, 11, 0]));
// [[0, 5], [8, 9], [11]]

console.log(organizeInRange([1, 4, 3, 2]));
// [[1, 4]]

console.log(organizeInRange([1, 4]));
// [[1], [4]]
