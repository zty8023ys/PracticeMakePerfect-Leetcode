/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 *
 * https://leetcode-cn.com/problems/longest-valid-parentheses/description/
 *
 * algorithms
 * Hard (25.37%)
 * Total Accepted:    6.8K
 * Total Submissions: 26.7K
 * Testcase Example:  '"(()"'
 *
 * 给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。
 * 
 * 示例 1:
 * 
 * 输入: "(()"
 * 输出: 2
 * 解释: 最长有效括号子串为 "()"
 * 
 * 
 * 示例 2:
 * 
 * 输入: ")()())"
 * 输出: 4
 * 解释: 最长有效括号子串为 "()()"
 * 
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    let ret = 0;
    let cur = 0;
    let stack = [];
    let shell = [];
    let prev = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            if (stack.length !== shell.length) {
                shell.push(cur);
                cur = 0;
            }
            stack.push(1);
        } else {
            if (!stack.pop()) {
                cur = 0;
            } else {
                if (prev === ')') {
                    cur += 2;
                    cur += shell.pop();
                } else {
                    cur += 2;
                }
                ret = Math.max(ret, cur);
            }
        }
        prev = s[i];
    }
    return ret;
};
// console.log(longestValidParentheses("()(()"));
