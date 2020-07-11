/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
 *
 * https://leetcode-cn.com/problems/merge-k-sorted-lists/description/
 *
 * algorithms
 * Hard (44.34%)
 * Total Accepted:    17.4K
 * Total Submissions: 39.2K
 * Testcase Example:  '[[1,4,5],[1,3,4],[2,6]]'
 *
 * 合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。
 * 
 * 示例:
 * 
 * 输入:
 * [
 * 1->4->5,
 * 1->3->4,
 * 2->6
 * ]
 * 输出: 1->1->2->3->4->4->5->6
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    const getSmall = () => {
        let ret = Infinity
        let index
        for (let i = 0; i < lists.length; i++) {
            if (lists[i] === null) continue;
            if (lists[i].val < ret) {
                index = i
                ret = lists[i].val
            }
        }
        if (ret !== Infinity) {
            const r = lists[index]
            lists[index] = lists[index].next
            return r
        }
        return null
    }
    let s = getSmall()
    const ret = s
    while (s) {
        s.next = getSmall()
        s = s.next
    }
    return ret
}
