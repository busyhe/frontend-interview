# EventEmitter

EventEmitter是一个常见的事件发布-订阅模式的实现，你可以手动实现一个简单的EventEmitter类。下面是一个基本的手写EventEmitter的示例：

```javascript
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  emit(eventName, ...args) {
    const eventCallbacks = this.events[eventName];
    if (eventCallbacks) {
      eventCallbacks.forEach((callback) => {
        callback.apply(null, args);
      });
    }
  }

  off(eventName, callback) {
    const eventCallbacks = this.events[eventName];
    if (eventCallbacks) {
      this.events[eventName] = eventCallbacks.filter(
        (cb) => cb !== callback
      );
    }
  }
}
```

在上述代码中，EventEmitter类有三个主要的方法：

- `on(eventName, callback)`: 用于订阅事件。将指定事件名和回调函数添加到事件列表中。

- `emit(eventName, ...args)`: 用于触发事件。根据指定的事件名，执行对应事件的所有回调函数，并传递参数。

- `off(eventName, callback)`: 用于取消订阅事件。根据指定的事件名和回调函数，从事件列表中移除对应的回调函数。

你可以使用以下代码来测试手写的EventEmitter：

```javascript
const emitter = new EventEmitter();

// 订阅事件
emitter.on('event1', (arg1, arg2) => {
  console.log('event1 triggered:', arg1, arg2);
});

// 触发事件
emitter.emit('event1', 'Hello', 'World');

// 取消订阅事件
const callback = (arg1, arg2) => {
  console.log('event1 triggered:', arg1, arg2);
};
emitter.on('event1', callback);
emitter.off('event1', callback);

emitter.emit('event1', 'Hello', 'World');
```

运行上述代码，你将看到以下输出：

```js
event1 triggered: Hello World
```

这个简单的EventEmitter类允许你订阅事件、触发事件和取消订阅事件。你可以根据需要扩展该类，添加更多的功能和方法。