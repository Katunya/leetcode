//Вход: [1, 3] [100, 200] [2, 4]
// Выход: [1, 4] [100, 200]

const mergeLine = (arr) => {
    if(!arr) return [];

    let lastArr = arr[arr.length - 1];

    const result = [];


    for(let el of arr) {
        if(el[0] <= lastArr[1]){
            lastArr = (lastArr[0], Math.max(el[1], lastArr[1]) );
        }
        else {
            result.push(lastArr)
            lastArr = el;
        }

    }
    return result;

}

console.log(mergeLine([[1, 3], [100, 200], [2, 4]]));


