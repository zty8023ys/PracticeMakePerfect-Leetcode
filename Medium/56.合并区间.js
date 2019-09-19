/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    const totalLen = intervals.length;
    if (totalLen < 2) return intervals;
    intervals.sort((a, b) => {
        return a[0] - b[0]
    })
    const ret = [];
    let head = intervals[0][0];
    let tail = intervals[0][1];
    for (let i = 1; i < totalLen; i++) {
        const area = intervals[i];
        if (area[0] > tail) {
            if (area[0] < head) {
                head = area[0];
            }
            ret.push([head, tail]);
            head = area[0];
            tail = area[1];
        } else {
            if (area[0] < head) {
                head = area[0];
            }
            if (area[1] > tail) {
                tail = area[1];
            }
        }
    }
    ret.push([head, tail]);
    return ret;
};
// console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]));
// console.log(merge([[1, 4], [0, 4]]));
// console.log(merge([[1, 4], [0, 0]]));
