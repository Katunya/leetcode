
function ListNode (val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : val;
}

const example1 = () => {
    let node1 = new ListNode(1);
    let node2 = new ListNode(2);
    let node3 = new ListNode(2);
    let node4 = new ListNode(3);
    let node5 = new ListNode(5)

    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;

    return node1;
}


const removeDuplicate = (head) => {
    let value = head;

    while(value.next !== null) {
        if(value.val === value.next.val) {
            value.next = value.next.next;
        }
        else value = value.next
    }
    return head;
}


console.log(removeDuplicate(example1()))

const removeDuplicatePointer = (head) => {
    let value = head;
    while(value !== null) {
        let fast = value;
        while (fast.next !== null) {
            if (fast.next.val === value.val) {
                fast.next = fast.next.next;
            } else fast = fast.next
        }
        value = value.next
    }

    return head;
}

console.log(removeDuplicatePointer(example1()))
