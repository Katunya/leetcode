
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */


function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const isMirror = (leftNode, rightNode) => {
    if(leftNode === null && rightNode === null) return true;
    if(leftNode === null || rightNode === null) return false;
    if(leftNode.val !== rightNode.val ) return false;

    return isMirror(leftNode.left, rightNode.right) && isMirror(leftNode.right, rightNode.left)
}


const isSymmetric = function(root) {

    if(root === null) return false;

    return isMirror(root.left, root.right)
};


const funcTest = function() {
    const node4 = new TreeNode(4);
    const node3 = new TreeNode(3);

    const node2 = new TreeNode(2, node4, node3);
    const node2_s = new TreeNode(2, node3, node4 );

    const root = new TreeNode(1, node2, node2_s);

    return root
};


console.log(isSymmetric(funcTest()))
