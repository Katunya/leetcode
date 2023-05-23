// 1.3 Напишите метод, заменяющий все пробелы в строке символами %20

const changeSpace = (str, num) => {
    const splitStr = str.slice(0,13).split('');

    let count = 0;
    for(let i = 0; i < splitStr.length; i++) {
            if(splitStr[i] === ' '){
                 count++;
            }
    }

    let newLength = splitStr.length + count * 2;

    for( let i = splitStr.length - 1;i >= 0; i--) {
        if(splitStr[i] === ' '){
            splitStr[newLength - 1] = '0';
            splitStr[newLength - 2] = '2';
            splitStr[newLength - 3] = '%';

            newLength = newLength - 3;
        }
        else {
            splitStr[newLength - 1] = splitStr[i];
            newLength = newLength - 1;
        }
    }
    return splitStr.join('');
}

console.log(changeSpace('Mr John Smith         ', 13))
