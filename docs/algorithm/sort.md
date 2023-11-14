# 排序

## 负数数组排序

给定一个整数数组，编写一个函数来重新排列数组，使得所有的负数都在所有的正数前面。你的函数应该在原地修改数组，并且不需要保持负数和正数的原有顺序。例如，对于数组 [-1, 2, -3, 4, 5, -6]，你的函数可能返回 [-1, -3, -6, 2, 4, 5] 或者其他满足条件的排列。请提供你的解决方案，并用代码实现它。

```js
function rearrange(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        // 如果左边的数是负数，继续向右移动
        if (nums[left] < 0) {
            left++;
        }
        // 如果右边的数是正数，继续向左移动
        else if (nums[right] >= 0) {
            right--;
        }
        // 如果左边是正数，右边是负数，交换
        else {
            let temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;

            left++;
            right--;
        }
    }

    return nums;
}
```

好的，让我们来举一个例子说明这个算法是如何工作的。

假设我们有一个数组 `nums = [2, -3, 1, -5, 6, -4]`，我们希望将所有的负数移动到前面，所有的正数移动到后面。

我们首先定义两个指针，`left` 和 `right`，分别指向数组的第一个元素和最后一个元素。然后我们开始遍历数组。

1. 在第一步中，`left` 指向的是 `2`，它是一个正数，所以我们停止移动 `left`。`right` 指向的是 `-4`，它是一个负数，所以我们停止移动 `right`。我们找到了一个正数在负数前面的情况，所以我们交换这两个数。数组变为 `[-4, -3, 1, -5, 6, 2]`，`left` 和 `right` 的位置向中间移动一位。

2. 在第二步中，`left` 指向的是 `-3`，它是一个负数，所以我们继续移动 `left`。`right` 指向的是 `6`，它是一个正数，所以我们继续移动 `right`。我们没有找到正数在负数前面的情况，所以我们不需要交换。

3. 在第三步中，`left` 指向的是 `1`，它是一个正数，所以我们停止移动 `left`。`right` 指向的是 `-5`，它是一个负数，所以我们停止移动 `right`。我们找到了一个正数在负数前面的情况，所以我们交换这两个数。数组变为 `[-4, -3, -5, 1, 6, 2]`，`left` 和 `right` 的位置向中间移动一位。

4. 在第四步中，`left` 指向的是 `1`，它是一个正数，所以我们停止移动 `left`。`right` 指向的是 `6`，它是一个正数，所以我们继续移动 `right`。我们没有找到正数在负数前面的情况，所以我们不需要交换。

5. 在第五步中，`left` 指向的是 `1`，它是一个正数，所以我们停止移动 `left`。`right` 指向的是 `1`，它是一个正数，所以我们继续移动 `right`。我们没有找到正数在负数前面的情况，所以我们不需要交换。

现在，`left` 和 `right` 重合，我们结束遍历。最终的数组是 `[-4, -3, -5, 1, 6, 2]`，所有的负数都在前面，所有的正数都在后面。

注意这个算法并不保证负数和正数的原有顺序不变，如果需要保持原有顺序，那么需要使用不同的算法。

## 合并两个有序数组

在前端中，可以使用合并排序算法（Merge Sort）来实现将两个有序数组合并为一个新的有序数组。下面是一个实现的示例代码：

```js
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

上述代码使用了两个指针 i 和 j 分别指向两个数组 arr1 和 arr2 的起始位置。通过比较指针所指向的元素，将较小的元素添加到 mergedArray 中，并移动相应的指针。最后，将剩余的元素添加到 mergedArray 中，即可得到合并后的有序数组。

这种合并排序算法的时间复杂度为 O(n)，其中 n 是两个数组的总长度。