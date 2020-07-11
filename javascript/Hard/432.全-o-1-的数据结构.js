/*
 * @lc app=leetcode.cn id=432 lang=javascript
 *
 * [432] 全 O(1) 的数据结构
 *
 * https://leetcode-cn.com/problems/all-oone-data-structure/description/
 *
 * algorithms
 * Hard (37.12%)
 * Total Accepted:    608
 * Total Submissions: 1.6K
 * Testcase Example:  '["AllOne","getMaxKey","getMinKey"]\n[[],[],[]]'
 *
 * 实现一个数据结构支持以下操作：
 * 
 * 
 * Inc(key) - 插入一个新的值为 1 的 key。或者使一个存在的 key 增加一，保证 key 不为空字符串。
 * Dec(key) - 如果这个 key 的值是 1，那么把他从数据结构中移除掉。否者使一个存在的 key 值减一。如果这个 key
 * 不存在，这个函数不做任何事情。key 保证不为空字符串。
 * GetMaxKey() - 返回 key 中值最大的任意一个。如果没有元素存在，返回一个空字符串""。
 * GetMinKey() - 返回 key 中值最小的任意一个。如果没有元素存在，返回一个空字符串""。
 * 
 * 
 * 挑战：以 O(1) 的时间复杂度实现所有操作。
 * 
 */
/**
 * Initialize your data structure here.
 */
var AllOne = function () {
    this.max = "";
    this.min = "";
    this.map = {};
};

/**
 * Inserts a new key <Key> with value 1. Or increments an existing key by 1. 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function (key) {
    this.map[key] = (this.map[key] || 0) + 1;
    if (!this.max) {
        this.max = key;
    } else {
        if (this.map[key] >= this.map[this.max]) {
            this.max = key;
        }
    }
    if (!this.min) {
        this.min = key;
    } else {
        if (key === this.min) {
            this.findMin();
        } else {
            if (this.map[key] === 1) {
                this.min = key;
            }
        }
    }
};

/**
 * Decrements an existing key by 1. If Key's value is 1, remove it from the data structure. 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function (key) {
    if (this.map[key] === 1) {
        delete this.map[key];
        if (key === this.min) {
            this.findMin();
        }
        if (key === this.max) {
            this.findMax();
        }
    } else {
        this.map[key] = this.map[key] - 1;
        if (key !== this.min) {
            if (this.map[this.min] >= this.map[key]) {
                this.min = key;
            }
        }
    }
};
AllOne.prototype.findMin = function () {
    let min = Infinity;
    for (let k in this.map) {
        if (this.map[k] <= min) {
            this.min = k;
            min = this.map[k];
        }
    }
}
AllOne.prototype.findMax = function () {
    let max = -Infinity;
    for (let k in this.map) {
        if (this.map[k] >= max) {
            this.max = k;
            max = this.map[k];
        }
    }
}
/**
 * Returns one of the keys with maximal value.
 * @return {string}
 */
AllOne.prototype.getMaxKey = function () {
    return this.max;
};

/**
 * Returns one of the keys with Minimal value.
 * @return {string}
 */
AllOne.prototype.getMinKey = function () {
    return this.min;
};

/**
 * Your AllOne object will be instantiated and called as such:
 * var obj = Object.create(AllOne).createNew()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */
// let obj = new AllOne();
// obj.inc("a");
// obj.inc("b");
// obj.inc("a");
// obj.dec("b");
// obj.inc("a");
// obj.inc("c");
// obj.dec("a");
// obj.dec("a");
// obj.dec("a");
// console.log(obj.getMaxKey());
// const t = (ms, args) => {
//     let ret = [null];
//     for (let i = 1; i < ms.length; i++) {
//         ret.push(obj[ms[i]](args[i][0]));
//     }
//     console.log(ret);
// }
// t(["AllOne", "inc", "inc", "inc", "inc", "inc", "inc", "getMaxKey", "inc", "dec", "getMaxKey", "dec", "inc", "getMaxKey", "inc", "inc", "dec", "dec", "dec", "dec", "getMaxKey", "inc", "inc", "inc", "inc", "inc", "inc", "getMaxKey", "getMinKey"],
//     [[], ["hello"], ["world"], ["leet"], ["code"], ["DS"], ["leet"], [], ["DS"], ["leet"], [], ["DS"], ["hello"], [], ["hello"], ["hello"], ["world"], ["leet"], ["code"], ["DS"], [], ["new"], ["new"], ["new"], ["new"], ["new"], ["new"], [], []])
