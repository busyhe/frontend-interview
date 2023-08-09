# EventEmitter

EventEmitter 是 Node 实现事件驱动的基础，几乎所有的模块都继承了这个类

## 基本用法

events 提供了 EventEmitter 类，实现了 Node 异步事件驱动架构的观察者模式

```js
const EventEmitter = require('events')

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter()

function callback() {
    console.log('触发了event事件！')
}
myEmitter.on('event', callback)
myEmitter.emit('event')
myEmitter.removeListener('event', callback);
```

## 常见方法

- on(event, listener)：为指定事件注册一个监听器，接受一个字符串 event 和一个回调函数
- emit(event, [arg1], [arg2], [...])：发射 event 事件，传递若干可选参数到事件监听器的参数表
- once(event, listener)：为指定事件注册一个单次监听器，即监听器最多只会触发一次，触发后立即解除该监听器
- removeListener(event, listener)：移除指定事件的某个监听器，监听器必须是该事件已经注册过的监听器
- removeAllListeners([event])：移除所有事件的所有监听器，如果指定事件，则移除指定事件的所有监听器
- prependListener(event, listener)：添加一个监听器到监听器数组的开头