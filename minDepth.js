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
// const minDepthDFS = function(root) {
//     if (!root) return 0;
//
//     if(!root.left) return minDepthDFS(root.right) + 1;
//     if(!root.right) return minDepthDFS(root.left) + 1
//
//     return Math.min(minDepthDFS(root.left), minDepthDFS(root.right)) + 1
// }


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
    const node15 = new TreeNode(5);
    const node7 = new TreeNode(4);

    const node9 = new TreeNode(3);
    const node20 = new TreeNode(2, node7, node15 );

    const root = new TreeNode(1, node20, node9);

    return root
};

console.log(funcTest())

console.log(minDepthDFS(funcTest()));
// console.log(minDepthDFS([0]));
// console.log(minDepthDFS([]));
// console.log(minDepthBFS(funcTest()));
