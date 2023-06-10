/*
21. Merge Two Sorted Lists

You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.
*/

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists2 = function(list1, list2) {
    let dummy =  new ListNode();
    let tail = dummy;

    while(list1 && list2) {
        if(list2.val > list1.val) {
            tail.next = list1;
            list1 = list1.next;
        }
        else {
            tail.next = list2
            list2 = list2.next;
        }
        tail = tail.next
    }

    if(list1) return tail.next = list1
    if(list2) return tail.next = list2


    return dummy.next
};












/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function(list1, list2) {
    // фиктивный узел - для пустого узла
    let dummy = new ListNode();

    let tail = dummy;

    while(list1 && list2) {
        if( list1.val < list2.val) {
            tail.next = list1;
            list1 = list1.next;
        }
        else {
            tail.next = list2;
            list2 = list2.next
        }
        tail = tail.next
    }

    if(list1)  tail.next = list1
    else if(list2)  tail.next = list2


    return dummy.next;
};






const list1 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 4,
            next: null
        }
    }
}

const list2 = {
    val: 2,
    next: {
        val: 3,
        next: {
            val: 4,
            next: null
        }
    }
}

console.log(mergeTwoLists(list1, list2))



