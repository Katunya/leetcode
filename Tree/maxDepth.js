//104. Maximum Depth of Binary Tree

/**
 * Definition for a binary tree node.
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */


function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var maxDepth = function(root) {
    return root;
};

let example = () => {

    let root15 = new TreeNode(15, null, null)
    let root7 = new TreeNode(7, null, null)
    let root9 = new TreeNode(9, null, null);
    let root20 = new TreeNode(20, root15, root7);
    return new TreeNode(3, root9, root20);
}

console.log(maxDepth(example()))
