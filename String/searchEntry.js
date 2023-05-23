
const searchEntry = (pattern, text) => {

    let indexPatter = 0;

    if(!pattern.length || !text.length) return '';

    for (let i = 0; i < text.length - 1; i++) {
        if(text[i] === pattern[indexPatter]) {
            indexPatter++;
        }
        if(indexPatter === pattern.length) {
            return true
        }
    }
    return false;
};

console.log(searchEntry('car', 'cartiiind')) // true
console.log(searchEntry('car', 'cpppalllrpppd')) // true
console.log(searchEntry('car', 'cpd')) // false
console.log(searchEntry('car', 'сra')) // false
