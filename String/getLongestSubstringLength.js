/*
  ДЛЯ ИНФОРМАЦИИ

  - другие не видят, что ты делаешь в этом Pen'e;
  - новый код не меняет шаблон для остальных;
  - при перезагрузке страницы все сброситься;
  - форкай, если хочешь сохранить

  УДАЧНОГО КОДИНГА
*/

/**
 * @param {String} str
 * @returns {Number}
 */
const getLongestSubstringLength = (str) => {
    let result = '';


    let max = 0;

    for(let s of str) {
        if(result.includes(s)) {
            let current = result.indexOf(s);
            result.slice(current, 1)
        }

        else {
            result+=s;

            max = Math.max(result.length, max)
        }

    }

    return max;
}

//
// console.log(getLongestSubstringLength('abcabcbb')); // 3
// console.log(getLongestSubstringLength('bbbbb')); // 1
console.log(getLongestSubstringLength('pwwkew')); // 3
// console.log(getLongestSubstringLength(' ')); // 1
// console.log(getLongestSubstringLength('dvdf')); // 3
