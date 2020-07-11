/*
 * @lc app=leetcode.cn id=223 lang=javascript
 *
 * [223] 矩形面积
 *
 * https://leetcode-cn.com/problems/rectangle-area/description/
 *
 * algorithms
 * Medium (40.70%)
 * Total Accepted:    1.6K
 * Total Submissions: 4K
 * Testcase Example:  '-3\n0\n3\n4\n0\n-1\n9\n2'
 *
 * 在二维平面上计算出两个由直线构成的矩形重叠后形成的总面积。
 * 
 * 每个矩形由其左下顶点和右上顶点坐标表示，如图所示。
 * 
 * 
 * 
 * 示例:
 * 
 * 输入: -3, 0, 3, 4, 0, -1, 9, 2
 * 输出: 45
 * 
 * 说明: 假设矩形面积不会超出 int 的范围。
 * 
 */
/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function (A, B, C, D, E, F, G, H) {
    let area1 = (C - A) * (D - B);
    let area2 = (G - E) * (H - F);
    let left = Math.max(A, E);
    let right = Math.min(C, G);
    let bottom = Math.max(B, F);
    let top = Math.min(D, H);
    let reduceArea = (left >= right || bottom >= top) ? 0 : (right - left) * (top - bottom);
    return area1 + area2 - reduceArea;
};

