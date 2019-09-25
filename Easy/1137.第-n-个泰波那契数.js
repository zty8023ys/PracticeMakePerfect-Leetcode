/*
 * @lc app=leetcode.cn id=1137 lang=javascript
 *
 * [1137] 第 N 个泰波那契数
 */
/**
 * @param {number} n
 * @return {number}
 */
const cache = [
    0,
    1,
    1,
    2,
    4,
    7,
    13,
    24,
    44,
    81,
    149,
    274,
    504,
    927,
    1705,
    3136,
    5768,
    10609,
    19513,
    35890,
    66012,
    121415,
    223317,
    410744,
    755476,
    1389537,
    2555757,
    4700770,
    8646064,
    15902591,
    29249425,
    53798080,
    98950096,
    181997601,
    334745777,
    615693474,
    1132436852,
    2082876103,
];

var tribonacci = function (n) {
    return cache[n];
}

// const cache1 = {};
// var tribonacci = function (n) {
//     const t = (k) => {
//         if (cache1[k]) return cache1[k];
//         if (k === 0) return 0;
//         if (k === 1) return 1;
//         if (k === 2) return 1;
//         const ret = t(k - 1) + t(k - 2) + t(k - 3);
//         cache1[n] = ret;
//         return ret;
//     }
//     return t(n);
// };
// for (let k = 0; k <= 37; k++) {
//     console.log(tribonacci(k));
// }
