// 71. Simplify Path
function simplifyPath(path) {

    const splitting = path.split('/')

    const result = [];

    for(let word of splitting) {
        if(word === '.' || word === '') continue;
        if(word === '..') {
            result.pop();
        }
        else result.push(word)
    }

    return '/' + result .join('/')
}

console.log(simplifyPath("/home/")) // /home
console.log(simplifyPath("/home//foo/")) // /home/foo
console.log(simplifyPath("/../")) // /
