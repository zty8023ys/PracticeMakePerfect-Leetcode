/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 *
 * https://leetcode-cn.com/problems/insert-interval/description/
 *
 * algorithms
 * Hard (33.82%)
 * Total Accepted:    3.9K
 * Total Submissions: 11.5K
 * Testcase Example:  '[[1,3],[6,9]]\n[2,5]'
 *
 * 给出一个无重叠的 ，按照区间起始端点排序的区间列表。
 * 
 * 在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。
 * 
 * 示例 1:
 * 
 * 输入: intervals = [[1,3],[6,9]], newInterval = [2,5]
 * 输出: [[1,5],[6,9]]
 * 
 * 
 * 示例 2:
 * 
 * 输入: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
 * 输出: [[1,2],[3,10],[12,16]]
 * 解释: 这是因为新的区间 [4,8] 与 [3,5],[6,7],[8,10] 重叠。
 * 
 * 
 */
/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function (intervals, newInterval) {
    if (intervals.length < 1) return [newInterval];
    let left = newInterval.start;
    let right = newInterval.end;
    if (intervals[0].start > right) {
        intervals.reverse();
        intervals.push(newInterval);
        intervals.reverse();
        return intervals;
    }
    if (intervals[intervals.length - 1].end < left) {
        intervals.push(newInterval);
        return intervals;
    }
    // console.log(left, right)
    const ret = []
    let start = null;
    let end = null;
    for (let i = 0; i < intervals.length; i++) {
        if (start !== null && end !== null) {
            ret.push(intervals[i]);
            continue;
        }
        if (start === null) {
            if (left <= intervals[i].end) {
                if (left < intervals[i].start) {
                    start = left;
                } else {
                    start = intervals[i].start;
                }
                i--;
            } else {
                ret.push(intervals[i]);
            }
        } else {
            if (right < intervals[i].end) {
                if (right < intervals[i].start) {
                    end = right;
                    ret.push({ start, end });
                    i--;
                } else {
                    end = intervals[i].end;
                    ret.push({ start, end });
                }
            }
        }
    }
    if (start !== null && end === null) {
        ret.push({ start, end: right });
    }
    return ret;
};
// const mod = (a, b) => {
//     const m = (c) => {
//         return { start: c[0], end: c[1] };
//     }
//     return insert(a.map(m), { start: b[0], end: b[1] });
// }
// console.log(mod([[1, 5]], [0, 5]))

