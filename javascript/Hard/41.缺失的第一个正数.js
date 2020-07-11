/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 *
 * https://leetcode-cn.com/problems/first-missing-positive/description/
 *
 * algorithms
 * Hard (35.40%)
 * Total Accepted:    9.9K
 * Total Submissions: 28K
 * Testcase Example:  '[1,2,0]'
 *
 * 给定一个未排序的整数数组，找出其中没有出现的最小的正整数。
 * 
 * 示例 1:
 * 
 * 输入: [1,2,0]
 * 输出: 3
 * 
 * 
 * 示例 2:
 * 
 * 输入: [3,4,-1,1]
 * 输出: 2
 * 
 * 
 * 示例 3:
 * 
 * 输入: [7,8,9,11,12]
 * 输出: 1
 * 
 * 
 * 说明:
 * 
 * 你的算法的时间复杂度应为O(n)，并且只能使用常数级别的空间。
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    const max = nums.length;
    let holdNum = 0;
    let index = 0;
    while (index < max) {
        if (holdNum < 1) {
            const currentNum = nums[index];
            if (currentNum === index + 1 || currentNum < 1 || currentNum > max) {
            } else {
                holdNum = nums[currentNum - 1];
                nums[currentNum - 1] = currentNum;
            }
            index++;
        } else {
            const tmpNum = holdNum;
            holdNum = nums[holdNum - 1] === holdNum ? 0 : nums[holdNum - 1];
            nums[tmpNum - 1] = tmpNum;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }
    return nums.length + 1;
};
// console.log(firstMissingPositive([1, 3, 2, 4]));
