/*
 * @lc app=leetcode.cn id=164 lang=javascript
 *
 * [164] 最大间距
 *
 * https://leetcode-cn.com/problems/maximum-gap/description/
 *
 * algorithms
 * Hard (48.24%)
 * Total Accepted:    2.3K
 * Total Submissions: 4.9K
 * Testcase Example:  '[3,6,9,1]'
 *
 * 给定一个无序的数组，找出数组在排序之后，相邻元素之间最大的差值。
 * 
 * 如果数组元素个数小于 2，则返回 0。
 * 
 * 示例 1:
 * 
 * 输入: [3,6,9,1]
 * 输出: 3
 * 解释: 排序后的数组是 [1,3,6,9], 其中相邻元素 (3,6) 和 (6,9) 之间都存在最大差值 3。
 * 
 * 示例 2:
 * 
 * 输入: [10]
 * 输出: 0
 * 解释: 数组元素个数小于 2，因此返回 0。
 * 
 * 说明:
 * 
 * 
 * 你可以假设数组中所有元素都是非负整数，且数值在 32 位有符号整数范围内。
 * 请尝试在线性时间复杂度和空间复杂度的条件下解决此问题。
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */

var maximumGap = function (nums) {
    // 桶排序
    if (nums.length < 2) {
        return 0;
    }
    const len = nums.length;
    
    // 获取最大最小值
    let max = nums[0];
    let min = nums[0];
    for (let i = 1; i < len; i++) {
        max = Math.max(nums[i], max);
        min = Math.min(nums[i], min);
    }
    // 计算桶宽度，既最小间隔
    const minGap = Math.floor((max - min) / len) + 1;
    const maxBuckets = new Array(len).fill(-Infinity);
    const minBuckets = new Array(len).fill(Infinity);

    // 将元素填到桶中
    for (let i = 0; i < len; i++) {
        const index = Math.floor((nums[i] - min) / minGap);
        maxBuckets[index] = Math.max(maxBuckets[index], nums[i]);
        minBuckets[index] = Math.min(minBuckets[index], nums[i]);
    }

    // 计算相邻两个桶之间的间隔
    let ret = 0;
    let left = maxBuckets[0];
    for (let i = 1; i < len; i++) {
        if (minBuckets[i] !== Infinity) {
            ret = Math.max(minBuckets[i] - left, ret);
            left = maxBuckets[i];
        }
    }
    return ret;
};
