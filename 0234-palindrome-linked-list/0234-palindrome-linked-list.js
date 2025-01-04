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
var isPalindrome = function(head) {
    if (!head || !head.next) {
      console.log("it is a palindrome");
      return true;
    }
    let slow = head
    let fast = head
    let prev = null
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
    }
    while(slow){
        let nextNode = slow.next;
        slow.next = prev;
        prev = slow;
        slow = nextNode;
    }
    let left = head
    let right = prev
    while(right){
        if(left.val !==right.val){
            return false
        }
        left = left.next
        right = right.next
    }
    return true
};