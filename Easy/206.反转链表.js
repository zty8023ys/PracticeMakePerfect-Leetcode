/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 *
 * https://leetcode-cn.com/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (57.96%)
 * Total Accepted:    38.7K
 * Total Submissions: 66.1K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 反转一个单链表。
 * 
 * 示例:
 * 
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 * 
 * 进阶:
 * 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
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
 * @return {ListNode}
 */
var reverseList = function (head) {
    if (!head) return null;
    const markForSwap = (a, b, cb) => {
        return () => {
            b.next = a;
            if (cb) {
                cb();
            } else {
                a.next = null;
            }
            return b;
        }
    }
    let p1 = head;
    let p2 = head.next;
    let curFunc = null
    while (p2) {
        curFunc = markForSwap(p1, p2, curFunc);
        p1 = p2;
        p2 = p2.next;
    }
    if (curFunc){
        return curFunc();
    } else {
        return head;
    }
};
