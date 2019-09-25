/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (matrix.length === 0) return [];
    const result = [];
    const readHeng_ = (line, from, to) => {
        if (from > to) return false;
        for (let i = from; i <= to; i++) {
            result.push(matrix[line][i]);
        }
        return true;
    }
    const readShu__ = (line, from, to) => {
        if (from > to) return false;
        for (let i = from; i <= to; i++) {
            result.push(matrix[i][line]);
        }
        return true;
    }
    const readHengR = (line, from, to) => {
        if (from < to) return false;
        for (let i = from; i >= to; i--) {
            result.push(matrix[line][i]);
        }
        return true;
    }
    const readShuR_ = (line, from, to) => {
        if (from < to) return false;
        for (let i = from; i >= to; i--) {
            result.push(matrix[i][line]);
        }
        return true;
    }
    const eachLen = matrix[0].length - 1;
    const totalLen = matrix.length - 1;
    let xxxx = 0;
    let yyyy = 0;
    let maxX = eachLen;
    let maxY = totalLen;
    while (true) {
        // console.log('before H', result);
        if (!readHeng_(yyyy, xxxx, maxX)) {
            return result;
        }
        yyyy++;

        // console.log('before S', result);
        if (!readShu__(maxX, yyyy, maxY)) {
            return result;
        }
        maxX--;

        // console.log('before HR', result);
        if (!readHengR(maxY, maxX, xxxx)) {
            return result;
        }
        maxY--;

        // console.log('before SR', result);
        if (!readShuR_(xxxx, maxY, yyyy)) {
            return result;
        }
        xxxx++;
    }
};

