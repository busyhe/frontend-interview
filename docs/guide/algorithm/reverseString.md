# 反转字符串

## 简单

```js
function reverseString(str) {
  return str.split('').reverse().join('');
}

const input = 'Hello, World!';
const reversed = reverseString(input);
console.log(reversed); // Output: '!dlroW ,olleH'
```

## 复杂度

在时间复杂度上，还有一种更优的解法是使用双指针法，它的时间复杂度为 O(n)，其中 n 是字符串的长度。以下是使用双指针法反转字符串的最优解答：

```javascript
function reverseString(str) {
  let left = 0;
  let right = str.length - 1;
  let reversed = str.split('');

  while (left < right) {
    const temp = reversed[left];
    reversed[left] = reversed[right];
    reversed[right] = temp;
    left++;
    right--;
  }

  return reversed.join('');
}

const input = 'Hello, World!';
const reversed = reverseString(input);
console.log(reversed); // Output: '!dlroW ,olleH'
```

在这个解答中，我们使用了两个指针 `left` 和 `right`，初始时分别指向字符串的首尾字符。然后，我们交换这两个指针所指向的字符，并向中间移动指针，直到 `left` 指针超过 `right` 指针。

这种双指针法的解法不需要额外的空间，只需要对原始字符串进行字符交换即可。它是一种原地修改字符串的方法，因此在空间复杂度上也是最优的解法。