/**
 * Definition for a binary tree node.
 /**
 * @param {TreeNode} root
 * @return {number}
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


const sumNumbers = (node, res = 0) => {
    if(!node) return null;

    res = res * 10 + node.val;

    if(!node.right && !node.left) return res;

    return sumNumbers(node.left, res) + sumNumbers(node.right, res)
};

const dataFunc = () => {
    return new TreeNode(1, 2, 3);
}

console.log(sumNumbers(dataFunc()))


// Рекурсии, разделяй и властвуй

const sumNum = (arr) => {
    let res = 0;
    for ( let i of arr) {
        res+= i
    }
    return res;
}

console.log(sumNum([1, 2, 3, 4, 5]))


const sumNumRecursion = (arr) => {
    if (!arr.length) return 0;
    if( arr.length === 1 ) return arr[0];

   return arr[0] + sumNumRecursion(arr.slice(1))
}

console.log(sumNumRecursion([1, 2, 3, 4, 5]))

const countNumRecursion = (arr) => {

    if(!arr.length) return 0;

    return 1 + countNumRecursion(arr.slice(1))
}


console.log(countNumRecursion([1, 2, 3, 4, 5]))

const maxNumRecursive = (arr, max = 0) => {
    if( arr.length === 0) return max;

    return maxNumRecursive(arr.splice(1), arr[0] > max ? arr[0] : max);
}

console.log(maxNumRecursive([1, 2, 55, 3, 4, 5, 22]))
