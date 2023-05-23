function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}


const searchNthFromEnd = (head, n) => {
    let point1 = head;
    let point2 = head;

    for( let i = 0; i < n; i++) {
        if( point1 === null) return null;
        point1 = point1.next
    }

    while(point1 !== null) {
        point1 = point1.next;
        point2 = point2.next;
    }
    return point2
}

const example1 = () => {
    let node5 = new ListNode(5);
    let node4 = new ListNode(4, node5);
    let node3 = new ListNode(3, node4);
    let node2 = new ListNode(2, node3);
    let node1 = new ListNode(1, node2);

    return node1;
}

console.log(searchNthFromEnd(example1(), 1))

