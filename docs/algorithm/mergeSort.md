# 实现将两个有序数组合并为一个新的有序数组

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