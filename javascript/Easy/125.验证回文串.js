/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 *
 * https://leetcode-cn.com/problems/valid-palindrome/description/
 *
 * algorithms
 * Easy (38.63%)
 * Total Accepted:    28.3K
 * Total Submissions: 73.4K
 * Testcase Example:  '"A man, a plan, a canal: Panama"'
 *
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 * 
 * 说明：本题中，我们将空字符串定义为有效的回文串。
 * 
 * 示例 1:
 * 
 * 输入: "A man, a plan, a canal: Panama"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: "race a car"
 * 输出: false
 * 
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    // a-z 97-122
    // A-Z 65-90
    // 0-9 48-57
    let i = 0;
    let j = s.length - 1;
    let asciiI = 0;
    let asciiJ = 0;
    const valid = (ascii) => {
        if (48 <= ascii && ascii <= 57) {
            return 1;
        }
        if (65 <= ascii && ascii <= 90) {
            return 2;
        }
        if (97 <= ascii && ascii <= 122) {
            return 3;
        }
        return 0;
    }
    const checkSame = (a, b) => {
        if (!valid(a) || !valid(b)){
            debugger;
        }
        if (48 <= a && a <= 57) {
            return b === a;
        }
        if (65 <= a && a <= 90) {
            return a === b || a === b - 32;
        }
        if (97 <= a && a <= 122) {
            return a === b || a === b + 32;
        }
        return false;
    }
    while (i < j) {
        if (!asciiI) {
            asciiI = s[i].charCodeAt();
            if (!valid(asciiI)) {
                i++;
                asciiI = 0;
                continue;
            }
        }
        if (!asciiJ) {
            asciiJ = s[j].charCodeAt();
            if (!valid(asciiJ)) {
                j--;
                asciiJ = 0;
                continue;
            }
        }
        if (checkSame(asciiI, asciiJ)) {
            i++;
            j--;
            asciiI = 0;
            asciiJ = 0;
        } else {
            return false;
        }
    }
    return true;
};

