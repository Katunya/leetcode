// 1.1 Реализуйте алгоритм, определяющий, все ли символы в строке встречаются только один раз. А если при этом запрещено использование дополнительных структур данных ?

const stringSet = (str) => {
    const set = new Set();

    if(!str) {
        return null
    }

    for(let current in str) {
        if(set.has(str[current])) {
            return false;
        }
        set.add(str[current])
    }

    return true;
}

console.log(stringSet('abcde'));
console.log(stringSet(''));
console.log(stringSet('aabbcc'));
