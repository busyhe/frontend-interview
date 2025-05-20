# 模块化

模块化主要是用来抽离公共代码，隔离作用域，避免变量冲突等。

**IIFE：** 使用自执行函数来编写模块化，特点：**在一个单独的函数作用域中执行代码，避免变量冲突。**

```js
(function(window, undefined) {
    // code
})(window);
```

**AMD：** 使用异步模块定义，特点：**异步加载模块，模块的加载不影响后面语句的运行。**

```js
// 定义模块
define('module', ['dep'], function(dep) {
    return exports;
});

// 加载模块
require(['module'], function(module) {
    // code
});
```

**CMD：** 使用通用模块定义，特点：**依赖就近，延迟执行。**

```js
// 定义模块
define(function(require, exports, module) {
    var $ = require('jquery');
    var Spinning = require('./spinning');
    exports.doSomething = ...
    module.exports = ...
});

// 加载模块
seajs.use(['jquery', './spinning'], function($, Spinning) {
    ...
});
```

**CommonJS：** 使用同步的方式加载模块，特点：**模块的加载是同步的，模块间的依赖是确定的。**

nodejs 中自带的模块化。

输出：common 输出的是一个值的拷贝。模块可以多次加载，但是只会在第一次加载时运行一次，结果被缓存，再加载直接读取缓存结果。
加载方式：common 运行时加载。因为 CommonJS 加载的是一个对象（即module.exports属性），该对象只有在脚本运行完才会生成

```js
// 导出模块
var math = require('math');

// 导入模块
exports.increment = function(val) {
    return math.add(val, 1);
};
```

**ES6：** 使用import和export关键字导入导出模块，特点：**ES6语法，静态分析，可以进行静态优化。**

```js
// 导出模块
export function foo() {}

// 导入模块
import { foo } from 'modules';
```

**UMD：** 通用模块定义，特点：**兼容AMD和CommonJS，同时还支持老式的全局变量规范。**

```js
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // 浏览器全局变量(root 即 window)
        root.returnExports = factory(root.jQuery);
    }
}(this, function($) {
    //    方法
    function myFunc(){};

    //    暴露公共方法
    return myFunc;
}));
```

## ES6模块与CommonJS模块的差异

- CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
- CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
- CommonJS 模块的require()是同步加载模块，ES6 模块的import命令是异步加载，有一个独立的模块依赖的解析阶段。
- CommonJS 模块的this指向当前模块，ES6 模块的顶层this指向undefined。

## 阶段

### 无模块化

将所有的js文件放在一起，代码执行的顺序就是文件的顺序
缺点就是污染全局作用域，容易引起变量冲突，手动处理各种依赖关系。

### commonjs

nodejs中自带的模块化，使用require导入模块，使用module.exports导出模块。
同步加载模块，模块间的依赖是确定的。但是浏览器上需要把模块都加载完才能执行，会阻塞页面的渲染。

### AMD

requirejs 异步模块定义，使用require导入模块，使用define定义模块。
异步加载模块，模块的加载不影响后面语句的运行。但是需要提前加载所有的依赖。

### CMD

sea.js 通用模块定义，使用require导入模块，使用define定义模块。
按需加载的方式，而不是提前加载所有的依赖。

### ES6

export导出模块，import导入模块。
缺点是浏览器不支持，需要使用babel转换成ES5。

### UMD

通用模块定义，兼容AMD和CommonJS，同时还支持老式的全局变量规范。
