/**
 * Definition for singly-linked list.
 */


function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var removeNthFromEnd = function(head, n) {
    let value = head;
    let count = 1;

    while(value.next !== null) {
        value = value.next;
        count++;
    }

    let result = count - n;
    let resultcount = 1;
    while(value.next !== null) {
        if(resultcount === result) {
            value.next = value.next.next
            return head;
        }
        value = value.next;
        resultcount++;
    }

    return head;
};

const example1 = () => {
    let node5 = new ListNode(5);
    let node4 = new ListNode(4, node5);
    let node3 = new ListNode(3, node4);
    let node2 = new ListNode(2, node3);
    let node1 = new ListNode(1, node2);

    return node1;
}

console.log(removeNthFromEnd(example1(), 4))

