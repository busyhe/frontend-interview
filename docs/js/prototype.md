# 原型

JS中每个对象内部都会包含一个隐藏的[[Prototype]]属性，这个属性就是原型，它指向它的构造函数的prototype属性，即原型对象为构造函数的[[prototype]]属性。

## 原型链

JS中每个对象都有一个[[Protype]]或__proto__属性指向它的构造函数的prototype属性也就是原型，原型对象也是个普通对象，它也有自己的原型即__proto__属性，也指向到它的构造函数的prototype属性，就这样层层向上，直到Object的原型null，也称为原型链的顶端，这就是原型链。

## 总结

原型就是某个实例的构造函数的prototype属性；原型链就是原型的原型，prototype对象也是某个构造函数的实例，所以它也有原型，也就是实例的构造函数的prototype属性的构造函数的prototye属性

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

![Alt text](image-1.png)