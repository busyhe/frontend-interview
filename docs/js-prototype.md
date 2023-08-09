# 原型

每个对象拥有一个原型对象，对象以其原型为模板，从原型继承方法和属性。

## 原型链

原型对象也可能拥有原型，从而形成原型链。

## 总结

![原型](https://static.vue-js.com/6a742160-725e-11eb-ab90-d9ae814b240d.png)

```js
person1.__proto__ === Person.prototype

Person.__proto__ === Function.prototype

Person.prototype.__proto__ === Object.prototype

Object.__proto__ === Function.prototype

Object.prototype.__proto__ === null
```

- 一切对象都是继承自Object对象，Object 对象直接继承根源对象null
- 一切的函数对象（包括 Object 对象），都是继承自 Function 对象
- Object 对象直接继承自 Function 对象
- Function对象的__proto__会指向自己的原型对象，最终还是继承自Object对象
