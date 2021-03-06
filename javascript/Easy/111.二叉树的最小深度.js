/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 *
 * https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (36.97%)
 * Total Accepted:    11.1K
 * Total Submissions: 30K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，找出其最小深度。
 * 
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例:
 * 
 * 给定二叉树 [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 返回它的最小深度  2.
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (treeNode) {
    const tail = (treeNode, curHeight) => {
        if (treeNode == null) {
            return curHeight;
        }
        if (treeNode.left == null) {
            return tail(treeNode.right, curHeight + 1);
        }
        if (treeNode.right == null) {
            return tail(treeNode.left, curHeight + 1);
        }
        return Math.min(tail(treeNode.left, curHeight + 1), tail(treeNode.right, curHeight + 1));
    }
    return tail(treeNode, 0);
};

