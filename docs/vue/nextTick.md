# $nextTick

 DOM 更新循环结束之后执行延迟回调。在修改数据之后使用这个方法，获取更新后的 DOM

 ## 用法

```js
    Vue.nextTick([callback, context])
```

## 原理

实现原理也是利用事件循环来进行异步操作，然后等 vue 的事件循环结束之后，再执行回调函数。

会通过 Promise.then()，然后将回调函数添加入微任务队列。同时，还设置了 pedding 锁，来判断队列是否已经存在任务，避免多次执行nextTick。

timerFunc函数定义，这里是根据当前环境支持什么方法则确定调用哪个，分别有：

Promise.then、MutationObserver、setImmediate、setTimeout

