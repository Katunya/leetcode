/*
206. Reverse Linked List

Given the head of a singly linked list, reverse the list, and return the reversed list.
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const reverseList = function(head) {
    let curr = head
    let prev = null;
    while(curr) {
        let nxt = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nxt;
    }

    return prev;
};

const linkExample1 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null
                }
            }
        }
    }
}

const linkExample2 = {
    val: 1,
    next: {
        val: 2,
        next: null
    }
}

console.log(reverseList(linkExample1))
console.log(reverseList(linkExample2))
//console.log(reverseList({}))
