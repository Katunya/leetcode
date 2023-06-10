var encode = (arr) => {

    let str = ''
    for(let i of arr) {
        str += i.length + '#' + i;
    }

    return str
}
var decode = (str) => {
    let res = [];
    let i = 0;

    for( let s of str) {
         i = s;
         while(str[i] !== '#') {

         }
    }
}

console.log(encode(["lint","code","love","you"]));
console.log(decode(encode(["lint","code","love","you"])));
