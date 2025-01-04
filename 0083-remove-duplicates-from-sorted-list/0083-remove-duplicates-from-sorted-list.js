/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
     if (!head) return null;
    const seen = new Set();
    let curr = head
    seen.add(curr.val)
    while(curr && curr.next){
        if(seen.has(curr.next.val)){
            curr.next = curr.next.next
        }else{
            seen.add(curr.next.val)
            curr = curr.next;
        }
    }
    return head
};