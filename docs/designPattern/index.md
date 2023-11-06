# 设计模式

设计模式是解决软件设计中常见问题的经验总结，它们是一些被广泛接受、经过测试的模板，用于解决在特定情况下经常出现的设计问题。以下是一些在前端开发中常见的设计模式：

1. **模块模式（Module Pattern）**：模块模式用于创建模块，每个模块都有自己的私有作用域。这样可以避免全局作用域被污染，提高代码的可维护性。在现代 JavaScript 开发中，ES6 的模块系统就是这种模式的体现。
   ```js
   // 在 JavaScript 中，可以使用立即执行函数表达式（IIFE）来创建模块。

   var myModule = (function () {
        var privateVar = 'Hello World';

        function privateMethod() {
            console.log(privateVar);
        }

        return {
            publicMethod: privateMethod
        };
    })();

    myModule.publicMethod();  // 输出: Hello World
   ```

2. **观察者模式（Observer Pattern）**：观察者模式用于创建一种一对多的依赖关系，当一个对象（被观察者）的状态改变时，所有依赖于它的对象（观察者）都会得到通知。这种模式在事件处理和数据绑定（如 React 和 Vue）中非常常见。
    ```js
    // 在 JavaScript 中，可以使用 Event Emitter 来实现观察者模式。
    class EventEmitter {
        constructor() {
            this.events = {};
        }

        subscribe(eventName, fn) {
            if (!this.events[eventName]) {
                this.events[eventName] = [];
            }
            this.events[eventName].push(fn);
        }

        emit(eventName, data) {
            const event = this.events[eventName];
            if (event) {
                event.forEach(fn => {
                    fn.call(null, data);
                });
            }
        }
    }

    const emitter = new EventEmitter();
    emitter.subscribe('saySomething', data => console.log(data));
    emitter.emit('saySomething', 'Hello!');  // 输出: Hello!
    ```

3. **发布/订阅模式（Publish/Subscribe Pattern）**：发布/订阅模式是观察者模式的一种变体，它引入了一个事件通道，发布者发布事件到这个通道，订阅者从这个通道订阅事件。这种模式可以解耦发布者和订阅者，使得他们可以独立改变。

4. **单例模式（Singleton Pattern）**：单例模式保证一个类只有一个实例，并提供一个全局访问点。这在需要全局状态管理（如 Redux 中的 store）时非常有用。

    ```js
    // 在 JavaScript 中，可以使用闭包来实现单例模式。
    var Singleton = (function () {
        var instance;

        function createInstance() {
            return {name: 'I am an instance'};
        }

        return {
            getInstance: function () {
                if (!instance) {
                    instance = createInstance();
                }
                return instance;
            }
        };
    })();

    var instance1 = Singleton.getInstance();
    var instance2 = Singleton.getInstance();
    console.log(instance1 === instance2);  // 输出: true
    ```

5. **工厂模式（Factory Pattern）**：工厂模式提供了一个创建对象的接口，但让子类决定实例化哪一个类。工厂方法让一个类的实例化延迟到其子类。

    ```js
    function CarMaker(model) {
        var car;

        if (model === 'Truck') {
            car = new Truck();
        } else if (model === 'Sedan') {
            car = new Sedan();
        } else {
            car = new SUV();
        }

        car.model = model;

        return car;
    }

    var truck = CarMaker('Truck');
    var sedan = CarMaker('Sedan');

    ```

6. **装饰器模式（Decorator Pattern）**：装饰器模式可以在运行时动态地添加额外的职责到对象上。在 JavaScript 中，装饰器可以用于扩展类、方法和属性。ES7 引入了装饰器语法。

    ```js
    function withLogging(fn) {
        return function(...args) {
            console.log(`Calling function with arguments: ${args}`);
            return fn(...args);
        }
    }

    function sum(a, b) {
        return a + b;
    }

    const sumWithLogging = withLogging(sum);
    sumWithLogging(3, 4);  // 输出: Calling function with arguments: 3,4
    ```

7. **策略模式（Strategy Pattern）**：策略模式定义了一系列的算法，并将每一个算法封装起来，使得它们可以互换。这种模式让算法的变化独立于使用算法的客户。

    ```js
    // 在 JavaScript 中，可以使用对象字面量来实现策略模式。
    var strategies = {
        'A': function (input) {
            return input * 2;
        },
        'B': function (input) {
            return input * 3;
        }
    };

    function executeStrategy(strategy, input) {
        return strategies[strategy](input);
    }

    executeStrategy('A', 5);  // 输出: 10
    executeStrategy('B', 5);  // 输出: 15
    ```

8. **中介者模式（Mediator Pattern）**：中介者模式用于降低多个对象和类之间的通信复杂性。这个模式提供了一个中介类，处理不同类之间的通信。

    ```js
    // 在 JavaScript 中，可以使用 Event Emitter 来实现中介者模式。
    
    class Mediator {
        constructor() {
            this.events = {};
        }

        subscribe(eventName, fn) {
            if (!this.events[eventName]) {
                this.events[eventName] = [];
            }
            this.events[eventName].push(fn);
        }

        emit(eventName, data) {
            const event = this.events[eventName];
            if (event) {
                event.forEach(fn => {
                    fn.call(null, data);
                });
            }
        }
    }
    ```

9.  **代理模式（Proxy Pattern）**：代理模式为一个对象提供一个替身或占位符以控制对这个对象的访问。在 JavaScript 中，ES6 引入了 Proxy 类，可以用于创建代理对象。

    ```js
    const target = {
        message1: 'hello',
        message2: 'everyone'
    };

    const handler = {
        get: function (target, prop, receiver) {
            return target[prop].toUpperCase();
        }
    };

    const proxy = new Proxy(target, handler);

    proxy.message1;  // 输出: HELLO
    proxy.message2;  // 输出: EVERYONE
    ```

以上只是一些常见的设计模式，实际上，设计模式的种类非常多，而且可以根据需要进行组合和变化。正确使用设计模式可以提高代码的可读性、可维护性和可复用性。