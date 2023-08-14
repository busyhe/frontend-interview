# 事件循环机制的理解

JS 在 [浏览器的事件循环机制](https://github.com/febobo/web-interview/issues/73) 是根据 HTML 定义的规范来实现的，而 Node.js 的事件循环机制是基于 libuv 一个多平台支持的异步 I/O 库来实现的。

## 流程

事件循环分六个阶段：

- Timer：计时器阶段，这个阶段执行 setTimeout 和 setInterval 预定的 callback
- I/O callbacks：I/O 回调阶段，执行除了 close 事件的 callbacks、被 timers 设定的 callbacks、setImmediate() 设定的 callbacks 这些之外的 callbacks
- idle, prepare：准备阶段，仅 node 内部使用
- poll：轮询阶段，获取新的 I/O 事件，适当的条件下 node 将阻塞在这里
- check：检查阶段，执行 setImmediate() 设定的 callbacks
- close callbacks：关闭回调阶段，比如执行 socket 的 close 事件回调

除了六个阶段还有 process.nextTick() 阶段，不属于任何阶段，它的回调函数会在每个阶段结束后立即执行，类似插队。

## 事件循环的执行顺序

在 node 中同样存在宏任务和微任务

- 微任务：
  - process.nextTick
  - Promise.then、queueMicrotask

- 宏任务：
  - Timer queue：setTimeout、setInterval
  - Poll queue：I/O
  - check queue: setImmediate
  - close queue

事件循环的执行顺序如下：

1. nextTick queue
2. microtask queue
3. timer queue
4. poll queue
5. check queue
6. close queue