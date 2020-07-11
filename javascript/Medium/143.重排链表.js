/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
 *
 * https://leetcode-cn.com/problems/reorder-list/description/
 *
 * algorithms
 * Medium (47.32%)
 * Total Accepted:    3.6K
 * Total Submissions: 7.5K
 * Testcase Example:  '[1,2,3,4]'
 *
 * 给定一个单链表 L：L0→L1→…→Ln-1→Ln ，
 * 将其重新排列后变为： L0→Ln→L1→Ln-1→L2→Ln-2→…
 * 
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 * 
 * 示例 1:
 * 
 * 给定链表 1->2->3->4, 重新排列为 1->4->2->3.
 * 
 * 示例 2:
 * 
 * 给定链表 1->2->3->4->5, 重新排列为 1->5->2->4->3.
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    if (!head || !head.next) return head;
    let cur = head;
    let arr = [];
    while (cur) {
        arr.push(cur);
        cur = cur.next;
    }
    let offset = 0;
    let maxIndex = arr.length - 1;
    while (offset < maxIndex - offset) {
        arr[offset].next = arr[maxIndex - offset];
        arr[maxIndex - offset].next = arr[offset + 1];
        offset++;
    }
    arr[offset].next = null;
    // console.log(JSON.stringify(head));
    return head;
};
// reorderList({
//     val: 1,
//     next: {
//         val: 2,
//         next: {
//             val: 3,
//             next: {
//                 val: 4,
//                 next: {
//                     val: 5,
//                     next: {
//                         val: 6,
//                         next: null
//                     }
//                 }
//             }
//         }
//     }
// })

