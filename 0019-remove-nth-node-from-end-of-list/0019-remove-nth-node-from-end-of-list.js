/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // Step 1: Initialize dummy node and two pointers, first and second, at the dummy
    const dummy = new ListNode(0);
    dummy.next = head; // Connect dummy node to the head of the list
    let first = dummy;
    let second = dummy;

    // Step 2: Move the first pointer n+1 steps ahead so it's n nodes ahead of second
    for (let i = 0; i <= n; i++) {
        first = first.next;
    }

    // Step 3: Move first to the end of the list, with second following behind
    while (first !== null) {
        first = first.next;
        second = second.next;
    }

    // Step 4: Skip over the nth node from the end
    second.next = second.next.next;

    // Step 5: Return the head of the modified list, which is dummy.next
    return dummy.next;
};
