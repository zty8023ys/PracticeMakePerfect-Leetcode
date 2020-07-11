/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 *
 * https://leetcode-cn.com/problems/remove-linked-list-elements/description/
 *
 * algorithms
 * Easy (39.16%)
 * Total Accepted:    16.2K
 * Total Submissions: 41.3K
 * Testcase Example:  '[1,2,6,3,4,5,6]\n6'
 *
 * 删除链表中等于给定值 val 的所有节点。
 * 
 * 示例:
 * 
 * 输入: 1->2->6->3->4->5->6, val = 6
 * 输出: 1->2->3->4->5
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
let ListNode = (v) => {
    return {
        val: v,
        next: null
    }
}
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    let fakeHead = ListNode(null);
    fakeHead.next = head;
    let cur = fakeHead;
    while (cur && cur.next) {
        while (cur.next && cur.next.val === val) {
            cur.next = cur.next.next;
        }
        cur.next && (cur = cur.next);
    }
    return fakeHead.next;
};

