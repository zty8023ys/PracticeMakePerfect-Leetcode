/*
 * @lc app=leetcode.cn id=9 lang=rust
 *
 * [9] 回文数
 */

// @lc code=start
impl Solution {
    pub fn is_palindrome(x: i32) -> bool {
        if x >= 0 && x < 10 { return true }
        if x < 0 || x % 10 == 0 { return false }
        
        let mut x1:i32 = x;
        let mut half:i32 = 0;
       
        while true {
            if x1 <= half {
                break;
            }
            half = half * 10 + x1 % 10;
            x1 = x1 / 10;
            
        }
        x1 == half || x1 == half / 10
    }
}
// @lc code=end

