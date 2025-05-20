# 防抖和节流

节流：当多次执行某一动作，每隔一段时间，只执行一次函数。 区别： 函数节流不管事件触发有多频繁，都会保证在规定时间内一定会执行一次真正的事件处理函数，而函数防抖只是在最后一次事件后才触发一次函数。

相同点：

- 都可以通过使用 setTimeout 实现
- 目的都是，降低回调执行频率。节省计算资源

不同点：

- 函数防抖，在一段连续操作结束后，处理回调，利用clearTimeout和 setTimeout实现。函数节流，在一段连续操作中，每一段时间只执行一次，频率较高的事件中使用来提高性能
- 函数防抖关注一定时间连续触发的事件，只在最后执行一次，而函数节流一段时间内只执行一次


## 实现

### 防抖

```js
function debounce(func, wait) {
    let timeout;

    return function () {
        let context = this; // 保存this指向
        let args = arguments; // 拿到event对象

        clearTimeout(timeout)
        timeout = setTimeout(function(){
            func.apply(context, args) // 用apply改变this指向,
        }, wait);
    }
}
```

当 fn 函数被包含在对象或其他函数内部时，其执行上下文中的 this 指向将会受到调用方式的影响。默认情况下，在非严格模式下，定时器内部的 this 指向全局对象 window，而不是 fn 原本所在的作用域对象。
这就意味着，如果直接调用 fn()，可能会导致 this 的错误绑定，从而导致代码无法按预期执行。
为了避免这个问题，我们使用 fn.apply(context, args) 或 fn.call(context, ...args) 来确保在执行 fn 函数时，明确指定函数内部的 this 指向为 context，从而保持函数在其原始作用域内正确执行。

### 节流

```js
function throttled1(fn, delay = 500) {
    let oldtime = Date.now()
    return function (...args) {
        let newtime = Date.now()
        if (newtime - oldtime >= delay) {
            fn.apply(null, args)
            oldtime = Date.now()
        }
    }
}
```

```js
function throttled(fn, delay) {
    let timer = null
    let starttime = Date.now()
    return function () {
        let curTime = Date.now() // 当前时间
        let remaining = delay - (curTime - starttime)  // 从上一次到现在，还剩下多少多余时间
        let context = this
        let args = arguments
        clearTimeout(timer)
        if (remaining <= 0) {
            fn.apply(context, args)
            starttime = Date.now()
        } else {
            timer = setTimeout(fn, remaining);
        }
    }
}
```
