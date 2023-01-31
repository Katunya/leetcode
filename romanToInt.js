/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
    const symbols = {'I': 1, 'IV': 4, 'V': 5, 'IX': 9, 'X': 10, 'XL': 40, 'L': 50, 'XC': 90, 'C': 100,'CD': 400, 'D': 500, 'CM': 900, 'M': 1000};
    let sum = 0;
    let count = 0;
    while( count <= s.length - 1) {
        if(symbols[s[count]+ s[count+1]]) {
            sum +=symbols[s[count]+ s[count+1]];
            count += 2;
        }
        else {
            sum += symbols[s[count]];
            count++
        }
    }
    return sum;

};

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));



const romanToInt2 = function(s) {
    const symbols = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
    let sum = 0;

    for(let i = 0; i <= s.length - 1; i++) {
        let current =symbols[s[i]];
        let next = symbols[s[i+1]];

        if(next > current) {
            sum += next - current;
            i++;
        }
        else sum += current;
    }
    return sum;
};


console.log(romanToInt2("III"));
console.log(romanToInt2("LVIII"));
console.log(romanToInt2("MCMXCIV"));

