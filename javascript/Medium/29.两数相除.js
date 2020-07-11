/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 *
 * https://leetcode-cn.com/problems/divide-two-integers/description/
 *
 * algorithms
 * Medium (17.36%)
 * Total Accepted:    9.2K
 * Total Submissions: 52.1K
 * Testcase Example:  '10\n3'
 *
 * 给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。
 * 
 * 返回被除数 dividend 除以除数 divisor 得到的商。
 * 
 * 示例 1:
 * 
 * 输入: dividend = 10, divisor = 3
 * 输出: 3
 * 
 * 示例 2:
 * 
 * 输入: dividend = 7, divisor = -3
 * 输出: -2
 * 
 * 说明:
 * 
 * 
 * 被除数和除数均为 32 位有符号整数。
 * 除数不为 0。
 * 假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−2^31,  2^31 − 1]。本题中，如果除法结果溢出，则返回 2^31 − 1。
 * 
 * 
 */
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    if (dividend <= -2147483648 && Math.abs(divisor) === 1) {
        return divisor > 0 ? -2147483648 : 2147483647;
    }
    if (dividend >= 2147483647 && Math.abs(divisor) === 1) {
        return divisor > 0 ? 2147483647 : -2147483647;
    }
    const sign = dividend > 0 ? 1 : -1;
    const sign2 = divisor > 0 ? 1 : -1;
    if (sign === -1) {
        dividend = -dividend;
    }
    if (sign2 === -1) {
        divisor = -divisor;
    }
    let ret = 0;
    while (dividend >= 0) {
        dividend -= divisor;
        ret++;
    }
    return sign + sign2 === 0 ? -(ret - 1) : (ret - 1);
};
// console.log(divide(-2147483648, -1));
