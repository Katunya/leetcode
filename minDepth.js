/*
111. Minimum Depth of Binary Tree
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.
 */


function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 *
 * DFS
 */
const minDepthDFS = function(root, count= 1, values = []) {
    if (root === null) return 0;

    if(!root.right && !root.left) {

        values.push(count)
    }

    if(root.left){
        minDepthDFS(root.left, ++count, values);
    }

    if(root.right){
        minDepthDFS(root.right, ++count, values)
    }
    return Math.min(...values)
}

const minDepthBFS = (root) => {
    const queue = [root];

    while(queue.length) {
        const size =queue.length;
        for(let i = 0; i < size; i++) {
            const node = queue.shift();
            if(node.left) {
                queue.push(node.left)
            }

            if(node.right) {
                queue.push(node.right)
            }

        }
    }
}



const funcTest = function() {
    const node15 = new TreeNode(15);
    const node7 = new TreeNode(7);

    const node9 = new TreeNode(9);
    const node20 = new TreeNode(20, node15, node7);

    const root = new TreeNode(3, node9, node20);

    return root
};


console.log(minDepthDFS(funcTest()));
console.log(minDepthDFS([0]));
console.log(minDepthDFS([]));
console.log(minDepthBFS(funcTest()));
