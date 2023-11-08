# 实现将两个有序数组合并为一个新的有序数组

## 题目一

在前端中，可以使用合并排序算法（Merge Sort）来实现将两个有序数组合并为一个新的有序数组。下面是一个实现的示例代码：

```javascript
function mergeSortedArrays(arr1, arr2) {
  const mergedArray = [];
  let i = 0; // 指向 arr1 的指针
  let j = 0; // 指向 arr2 的指针

  // 比较 arr1 和 arr2 的元素，将较小的元素添加到 mergedArray 中
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  // 将剩余的元素添加到 mergedArray 中
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
}

// 示例用法
const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
const merged = mergeSortedArrays(arr1, arr2);
console.log(merged); // 输出 [1, 2, 3, 4, 5, 6]
```

上述代码使用了两个指针 `i` 和 `j` 分别指向两个数组 `arr1` 和 `arr2` 的起始位置。通过比较指针所指向的元素，将较小的元素添加到 `mergedArray` 中，并移动相应的指针。最后，将剩余的元素添加到 `mergedArray` 中，即可得到合并后的有序数组。

这种合并排序算法的时间复杂度为 O(n)，其中 n 是两个数组的总长度。

## 题目二

给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。

请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。

注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。

### 方法一

```js
function merge( nums1,  nums2, m, n) {
  nums1.splice( m, nums1.length - m, ...nums2.slice(0, n));
  nums1.sort((a, b) => a - b);
}
```