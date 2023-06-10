/*
49. Group Anagrams
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 */


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if(strs.length <= 1) return [strs];
    const hash = {};

    for(let str of strs) {
        let sorting = str.split('').sort().join();
        if(hash[sorting]) {
            hash[sorting].push(str)
        }
        else hash[sorting] = [str];
    }

    return Object.values(hash)
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))


var groupAnagramsMap = (strs) => {
    if(strs.length <= 1) return [strs];

    const map = new Map();

    for(let str of strs) {
        let sorting = str.split('').sort().join();
        if(map.has(sorting)){
            map.get(sorting).push(str)
        }
        else map.set(sorting, [str]);
    }

    return Array.from(map.values())
}

console.log(groupAnagramsMap(["eat","tea","tan","ate","nat","bat"]))
