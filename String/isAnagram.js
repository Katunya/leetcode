var isAnagram = function(s, t) {
    if( s.length !== t.length ) return false;

    const sortingS = s.split('').sort().join();
    const sortingT = t.split('').sort().join()

    return sortingS === sortingT;
};


console.log(isAnagram('anagram', 'nagaram'))
