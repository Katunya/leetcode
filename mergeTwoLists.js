

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function(list1, list2) {
    let res = {};
    while( list1.next !== null || list2.next !== null) {
    }
};


mergeTwoLists({val: 1, next: { val: 2, next: { val: 4, next: null}}}, {val: 1, next: { val: 3, next: { val: 4, next: null}}})
