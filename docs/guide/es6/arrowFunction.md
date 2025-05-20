# 箭头函数 与普通函数的区别

- 箭头函数没有自己的this，它的this是从自己的作用域链的上一层继承而来的。因此无法使用call()、apply()、bind()这些方法去改变this的指向。
- 箭头函数没有arguments对象，但是可以用rest参数代替。
- 箭头函数不能用作构造函数，不能使用new命令，否则会抛出一个错误。
- 箭头函数没有原型，没有prototype属性
- 箭头函数不能使用yield命令，因此箭头函数不能用作Generator函数。

## 与普通函数的区别

### 没有自己的this

箭头函数的this在它被定义的时候就已经确定了，指向所处外层执行环境，之后永远不会改变。普通函数的this指向调用它的那个对象。

```js
const obj = {
  a: function () {
    console.log(this)
  },
}
obj.a() // 打印结果：obj对象

const obj = {
  a: () => {
    console.log(this)
  },
}
obj.a() // 打印结果： Window对象
```

箭头函数与最外层的this保持一致

### 没有arguments对象

```js
function func1(a, b) {
  console.log(arguments)
}
let func2 = (a, b) => {
  console.log(arguments)
}
func1(1, 2) // Arguments(2) [1, 2, callee: ƒ, Symbol(Symbol.iterator): ƒ]
func2(1, 2) // Uncaught ReferenceError: arguments is not defined
```

可以使用rest参数代替

```js
let func2 = (...args) => {
  console.log(args)
}

func2(1, 2) // [1, 2]
```

### 不能用作构造函数，不能使用new命令

```js
var Person = name => {
  this.name = name
}

// Uncaught TypeError: Person is not a constructor
var person = new Person('jacky')
```

箭头函数在创建时this就已经绑定了，不允许再次绑定，所以不能用作构造函数，也就是说不能使用new命令

### 没有prototype属性，没有原型

由于不能使用new命令，所以也就没有构造函数，也就没有prototype属性，也就没有原型

### 
