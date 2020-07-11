/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
 *
 * https://leetcode-cn.com/problems/rotate-list/description/
 *
 * algorithms
 * Medium (37.14%)
 * Total Accepted:    9.5K
 * Total Submissions: 25.4K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。
 * 
 * 示例 1:
 * 
 * 输入: 1->2->3->4->5->NULL, k = 2
 * 输出: 4->5->1->2->3->NULL
 * 解释:
 * 向右旋转 1 步: 5->1->2->3->4->NULL
 * 向右旋转 2 步: 4->5->1->2->3->NULL
 * 
 * 
 * 示例 2:
 * 
 * 输入: 0->1->2->NULL, k = 4
 * 输出: 2->0->1->NULL
 * 解释:
 * 向右旋转 1 步: 2->0->1->NULL
 * 向右旋转 2 步: 1->2->0->NULL
 * 向右旋转 3 步: 0->1->2->NULL
 * 向右旋转 4 步: 2->0->1->NULL
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (!head) return head;
    let tail = head;
    let len = 1;
    while (tail.next) {
        len++;
        tail = tail.next;
    }
    tail.next = head;
    // * 输入: 1->2->3->4->5->NULL, k = 2
    // * 输出: 4->5->1->2->3->NULL
    let cur1 = head;
    let cur2 = head;
    k = k % len;
    for (let i = 0; i < k; i++) {
        cur2 = cur2.next;
    }
    while (cur2 !== tail) {
        cur2 = cur2.next;
        cur1 = cur1.next;
    }
    head = cur1.next;
    cur1.next = null;
    return head;
};

