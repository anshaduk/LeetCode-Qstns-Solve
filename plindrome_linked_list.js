/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}
var isPalindrome = function(head) {
    const values = [];
    let current = head;
    while (current) {
        values.push(current.val);
        current = current.next;
    }

    
    let start = 0;
    let end = values.length - 1;
    while (start < end) {
        if (values[start] !== values[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
    
};