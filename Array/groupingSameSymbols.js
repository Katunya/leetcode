// Sample Input ["eat", "tea", "tan", "ate", "nat", "bat"]
// Sample Output [ ["ate", "eat", "tea"], ["nat", "tan"], ["bat"] ]
//
// Т.е. сгруппировать слова по "общим буквам".

const groupingSameSymbols = (arr) => {
    const obj = {};
    for( let el of arr) {
        let curr = el.split('').sort().join('');
        if( obj[curr]) {
            obj[curr].push(el)
        }
        else  obj[curr] = [el]
    }
return Object.values(obj)
}

console.log(groupingSameSymbols(["eat", "tan", "ate", "nat", "bat",  "tea"]))
