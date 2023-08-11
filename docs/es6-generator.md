# Generator

Generator 函数是 ES6 提供的一种异步编程解决方案

## Generator 函数的定义

执行 Generator 函数会返回一个遍历器对象，可以依次遍历 Generator 函数内部的每一个状态, 有两个特征：

- function 关键字与函数名之间有一个星号
- 函数体内部使用 yield 表达式，定义不同的内部状态

```js
function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

var hw = helloWorldGenerator();
```