# let const 和 var 的区别

- 变量提升
- 重复声明
- 暂时性死区
- 作用域
- let const 声明的全局变量不能挂载到window上
- const 声明常量

## 变量提升

```js
console.log(a) // undefined
var a = 1
```

```js
console.log(a) // Uncaught ReferenceError: a is not defined
let a = 1
```

```js
console.log(a) // Uncaught ReferenceError: a is not defined
const a = 1
```

var 声明的变量会提升到作用域的顶部，但是赋值不会提升，所以第一个例子会打印 undefined

## 重复声明

```js
var a = 1
var a = 2
console.log(a) // 2
```

```js
let a = 1
let a = 2
console.log(a) // Uncaught SyntaxError: Identifier 'a' has already been declared
```

```js
const a = 1
const a = 2
console.log(a) // Uncaught SyntaxError: Identifier 'a' has already been declared
```

let 和 const 声明的变量不能重复声明

## 暂时性死区

```js
var a = 1
if (true) {
  console.log(a) // undefined
  var a = 2
}
```

```js
let a = 1
if (true) {
  console.log(a) // Uncaught ReferenceError: Cannot access 'a' before initialization
  let a = 2
}
```

```js
const a = 1
if (true) {
  console.log(a) // Uncaught ReferenceError: Cannot access 'a' before initialization
  const a = 2
}
```

let 和 const 声明的变量在声明之前不能使用，否则会报错

## 作用域

```js
{
  var a = 10
}
console.log(a) // 10

{
  let b = 9 // es6的let: b变量只在花括号内有效
}
console.log(b) // Uncaught ReferenceError: b is not defined
```

## let const 声明的全局变量不能挂载到window上

```js
var a = 1
console.log(window.a) // 1
```

```js
let a = 1
console.log(window.a) // undefined
```

```js
const a = 1
console.log(window.a) // undefined
```
