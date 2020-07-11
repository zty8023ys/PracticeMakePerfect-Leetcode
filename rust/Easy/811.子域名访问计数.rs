/*
 * @lc app=leetcode.cn id=811 lang=rust
 *
 * [811] 子域名访问计数
 */


// @lc code=start
impl Solution {
    pub fn subdomain_visits(cpdomains: Vec<String>) -> Vec<String> {
        fn split<'a>(content: &'a str, spliter: &str) -> Vec<&'a str> {
            content.split(spliter).collect()
        }
        fn string_to_static_str(s: String) -> &'static str {
            Box::leak(s.into_boxed_str())
        }
        let mut map: std::collections::HashMap<&str, i32> = std::collections::HashMap::new();
        for i in 0..cpdomains.len() {
            let str_arr: Vec<&str> = split(&cpdomains[i], " ");
            let times = str_arr[0].parse::<i32>().unwrap();
            let domains_string = str_arr[1];
            let domains = split(domains_string, ".");
            let max_len = domains.len();
            for k in 0..max_len {
                let sub_domain = &domains[k..max_len].to_owned();
                let domain = sub_domain.join(".");
                let domain_str = string_to_static_str(domain);
                let stat: &mut i32 = map.entry(domain_str).or_insert(0);
                *stat += times;
            }
        }
        let mut ret = vec![];
        for (key, value) in &map {
            ret.push(format!("{} {}", value, key))
        }
        ret
    
    }

}
// @lc code=end

