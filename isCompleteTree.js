/**
 * Definition for a binary tree node.
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

const isCompleteTree = (root) => {
    const queue = [root];

    let isNullFound = false;

    while(queue.length) {
        let node = queue.shift();

        if(node === null) {
            isNullFound =  true;
        }
        else {
            if(isNullFound) return false;
            queue.push(node.left);
            queue.push(node.right);
        }
    }

    return true;

}

const funcTest1 = function() {
    const node5 = new TreeNode(5);
    const node4 = new TreeNode(4);
    const node7 = new TreeNode(7);

    const node9 = new TreeNode(3, node5, node7);
    const node20 = new TreeNode(2, node4, node5 );

    const root = new TreeNode(1, node20, node9);

    return root
};

const funcTest2 = function() {
    const node5 = new TreeNode(5);
    const node4 = new TreeNode(4);
    const node7 = new TreeNode(7);

    const node9 = new TreeNode(3, null, node7);
    const node20 = new TreeNode(2, node4, node5 );

    const root = new TreeNode(1, node20, node9);

    return root
};

console.log(isCompleteTree(funcTest1())) // true
console.log(isCompleteTree(funcTest2())) // false
