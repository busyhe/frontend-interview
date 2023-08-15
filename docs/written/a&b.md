# 没有第三变量的情况下 a、b 变量交换

## 算术计算

```js
var a = 1;
var b = 2;

a = a + b;
b = a - b;
a = a - b;

console.log(a, b); // 2, 1
```

## 对象属性

### 数组方式

```js
var a = 1;
var b = 2;

a = [a, b]
b = a[0]
a = a[1]

console.log(a, b); // 2, 1
```
### 对象方式

```js
var a = 1;
var b = 2;

a = {a: a, b: b}
b = a.a
a = a.b

console.log(a, b); // 2, 1
```

## 隐式转换

```js
var a = 1, b = 10;
a = [b, b = a][0];
// 数组不接受函数表达式， 所以会对赋值表达式进行隐式计算
console.log(a); // 10
console.log(b); // 1
```

## 解构赋值

```js
var a = 1, b = 10;

[a, b] = [b, a];

console.log(a); // 10
console.log(b); // 1
```

