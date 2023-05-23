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
    let currValue = head
    let nextValue = null;
    let prevValue = null;

    while(currValue) {
        nextValue = currValue.next;
        currValue.next = prevValue;

        prevValue = currValue;

        currValue = nextValue
    }

    return prevValue

};

const linkExample1 = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: {
                    value: 5,
                    next: null
                }
            }
        }
    }
}

console.log(reverseList(linkExample1))
