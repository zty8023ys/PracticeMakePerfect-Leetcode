/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
 *
 * https://leetcode-cn.com/problems/partition-list/description/
 *
 * algorithms
 * Medium (44.57%)
 * Total Accepted:    5.8K
 * Total Submissions: 12.5K
 * Testcase Example:  '[1,4,3,2,5,2]\n3'
 *
 * 给定一个链表和一个特定值 x，对链表进行分隔，使得所有小于 x 的节点都在大于或等于 x 的节点之前。
 * 
 * 你应当保留两个分区中每个节点的初始相对位置。
 * 
 * 示例:
 * 
 * 输入: head = 1->4->3->2->5->2, x = 3
 * 输出: 1->2->2->4->3->5
 * 
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    if (!head) return head;
    let p1 = { next: null }  // 小于 x
    let p2 = { next: null }  // 大于 x
    let p1head = p1;
    let p2head = p2;
    let cur = head;
    while (cur) {
        if (cur.val < x) {
            p1.next = cur;
            p1 = cur;
        } else {
            p2.next = cur;
            p2 = cur;
        }
        cur = cur.next;
    }
    p2.next = null;
    p1.next = p2head.next;
    return p1head.next;
};
// console.log(JSON.stringify(partition({
//     val: 1,
//     next: {
//         val: 4,
//         next: {
//             val: 3,
//             next: {
//                 val: 2,
//                 next: {
//                     val: 5,
//                     next: {
//                         val: 2,
//                         next: null
//                     }
//                 }
//             }
//         }
//     }
// }, 3)))

