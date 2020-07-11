/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 *
 * https://leetcode-cn.com/problems/swap-nodes-in-pairs/description/
 *
 * algorithms
 * Medium (57.07%)
 * Total Accepted:    13.3K
 * Total Submissions: 23.3K
 * Testcase Example:  '[1,2,3,4]'
 *
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
 * 
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 * 
 * 
 * 
 * 示例:
 * 
 * 给定 1->2->3->4, 你应该返回 2->1->4->3.
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
 * @param {ListNode} preNode
 * @returns {ListNode}
 */
let swapAfterNextTwoNode = (preNode) => {
    const node = preNode.next;
    if (!node) return null;
    let n2 = node.next;
    if (!n2) return null;
    node.next = n2.next;
    n2.next = node;
    preNode.next = n2;
    return node;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let ListNode = (v) => {
    return {
        val: v,
        next: null
    }
}
var swapPairs = function (head) {
    if (!head || !head.next) return head;
    let fakeHead = ListNode(0);
    fakeHead.next = head;
    let n = swapAfterNextTwoNode(fakeHead);
    while (n) {
        n = swapAfterNextTwoNode(n);
    }
    return fakeHead.next;
};


