/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

const checkPosition = (nums, position) => {
    if (position === 0) return true;
    for (let k = position - 1; k >= 0; k--) {
        if (k + nums[k] >= position) {
            return checkPosition(nums, k);
        }
    }
    return false;
}
// console.log(checkPosition([1, 2, 3], 2));
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    if (nums.length <= 1) return true;
    const lastPosition = nums.length - 1;
    // console.log(checkPosition(nums, lastPosition));
    return checkPosition(nums, lastPosition);
};

