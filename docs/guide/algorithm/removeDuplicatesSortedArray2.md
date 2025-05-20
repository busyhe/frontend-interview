# 删除有序数组中的重复项 II

给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使得出现次数超过两次的元素只出现两次 ，返回删除后数组的新长度。

不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const n = nums.length;
    if( n <= 2 ) return n;

    let left = 2
    for( let i = 2; i < n; i++ ) {
        if( nums[left - 2] !== nums[i] ) {
            nums[left] = nums[i]
            left++
        }
    }

    return left
};
```