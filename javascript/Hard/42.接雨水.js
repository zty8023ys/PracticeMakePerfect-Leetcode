/*
 * @lc app=leetcode.cn id=42 lang=typescript
 *
 * [42] 接雨水
 */
// @lc code=start
function trap(height) {
    const maxHeight = Math.max.apply(Math, height);
    const sum = 0;
    for (let row = 0; row < maxHeight; row++) {
        let wallFlag = false;
        let subSum = 0;
        for (let col = 0; col < height.length; col++) {
            if (height[col] > row) {
                wallFlag = true;
                sum += subSum;
                subSum = 0;
                continue;
            }
            if (wallFlag) subSum += 1;
        }
    }
    return sum;
}
// @lc code=end
