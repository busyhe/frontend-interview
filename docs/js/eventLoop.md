# 事件循环的理解

首先，JS 是一门单线程的语言，实现单线程非阻塞的方法就是事件循环机制。

js 中任务分为：

- 同步任务：立即执行任务，一般直接进入到主线程
- 异步任务：异步执行的任务，比如 ajax 请求，setTimeout 定时函数等

## 宏任务和微任务

异步任务分宏任务和微任务：

微任务是一个需要异步执行的函数，执行时机是在主函数执行结束后、当前宏任务结束前。
宏任务的时间粒度相对较大，执行的时间不能精确控制。

- 微任务：Promise.then、process.nextTick、MutationObserver、Object.observe（已废弃、Proxy代替）
- 宏任务：script、setTimeout、setInterval、setImmediate、I/O、UI rendering