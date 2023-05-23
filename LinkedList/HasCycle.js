/**
 * Definition for singly-linked list.
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */


function ListNode(val) {
    this.val = val;
    this.next = null;
}
var hasCycle = (head) => {
    let fast = head;
    while (fast && fast.next) {
        head = head.next;
        fast = fast.next.next;
        if (head === fast) return true;
    }
    return false;
};

let exmpl1 = () => {
    let node4 = new ListNode(-4)
    let node0 = new ListNode(0)
    let node2 = new ListNode(2)

    let node3 = new ListNode(3);

    node4.next = node2;
    node3.next = node2;
    node2.next = node0;
    node0.next = node4;


    return node3;
}

console.log(hasCycle(exmpl1()))
