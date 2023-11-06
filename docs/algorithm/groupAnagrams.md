# 字母异位词组合

```js
const mStrs = ["eat", "tea", "tan", "ate", "nat", "bat"];

const groupAnagrams = function (strs) {
    const map = new Map(); // 存储异位词

    // 遍历 strs
    for (const str of strs) {
        const sortedStr = str.split('').sort().join('');

        // 哈希表中是否已经存在该键
        if (map.has(sortedStr)) {
            map.get(sortedStr).push(str);
        } else {
            map.set(sortedStr, [str]);
        }
    }

    return Array.from(map.values());
};

console.log(groupAnagrams(mStrs));
```