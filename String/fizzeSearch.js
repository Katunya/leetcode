const fuzzysearch = (str, query) => {
    let index = 0;

    for(let s of str) {
        if(s === query[index]) {
            index++;
        }

        if(index === query.length){
            return true;
        }
    }

    return false;
}

console.log(fuzzysearch('крокодил', 'кроко')); // true
console.log(fuzzysearch('крокодил', 'ккдл')); // true
console.log(fuzzysearch('крокодил', 'кдил')); // true
console.log(fuzzysearch('крокодил', 'крокодил')); // true
console.log(fuzzysearch('крокодил', 'кодиил')); // false
console.log(fuzzysearch('крокодил', 'ид')); // false
