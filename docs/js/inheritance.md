# 继承

继承（inheritance）是面向对象软件技术当中的一个概念。

如果一个类别B“继承自”另一个类别A，就把这个B称为“A的子类”，而把A称为“B的父类别”也可以称“A是B的超类”

## 优点

- 继承可以使得子类具有父类别的各种属性和方法，而不需要再次编写相同的代码
- 在子类别继承父类别的同时，可以重新定义某些属性，并重写某些方法，即覆盖父类别的原有属性和方法，使其获得与父类别不同的功能

## 缺点：

1. **紧耦合性（Tight Coupling）**：继承关系使得子类和父类之间产生了紧密的耦合，子类的实现依赖于父类的实现细节。这种紧耦合性会增加代码的复杂性，并且当父类发生变化时，可能会影响到所有的子类。

2. **继承层次复杂性**：随着继承层次的增加，继承关系会变得更加复杂。如果继承层次设计不好，可能会导致继承关系的混乱和难以维护。

3. **单一继承限制**：大多数编程语言只支持单一继承，即一个子类只能继承自一个父类。这种限制可能会导致一些设计上的困扰，特别是在需要同时继承多个父类的情况下。

4. **继承关系的滥用**：继承是一种强大的工具，但滥用继承可能导致代码的复杂性和可读性下降。如果继承关系设计不当，可能会导致类之间的关系变得混乱，难以理解和维护。

5. **继承的细粒度控制困难**：继承会继承父类的所有属性和方法，无法灵活地选择性地继承某些特定的属性或方法。这可能导致子类获得了一些不必要的或不相关的功能，增加了代码的冗余和复杂性。

尽管继承存在一些缺点，但它仍然是面向对象编程中非常有用的概念。在设计和使用继承时，需要权衡利弊，合理地使用继承，并结合其他面向对象编程的原则和技术，以实现可维护、可扩展和可复用的代码。

## 实现方式

- **原型链继承**：将父类的实例作为子类的原型
- **构造函数继承**：在子类中调用父类的构造函数
- **组合继承**：原型链继承和构造函数继承的组合
- **原型式继承**: Object.create()
- **寄生式继承**：创建一个仅用于封装继承过程的函数，该函数在内部以某种方式来增强对象，最后再像真的是它做了所有工作一样返回对象
- **寄生组合式继承**：通过借用构造函数来继承属性，通过原型链的混成形式来继承方法

### 原型链继承

每一个构造函数都有一个原型对象，原型对象又包含一个指向构造函数的指针，而实例则包含一个原型对象的指针

```js
function Parent() {
    this.name = 'parent1';
    this.play = [1, 2, 3]
}

function Child() {
    this.type = 'child2';
}

Child1.prototype = new Parent();
console.log(new Child())
```

### 构造函数继承

借助 call调用Parent函数

```js
function Parent(){
    this.name = 'parent1';
}

Parent.prototype.getName = function () {
    return this.name;
}

function Child(){
    Parent1.call(this);
    this.type = 'child'
}

let child = new Child();
console.log(child);  // 没问题
console.log(child.getName());  // 会报错
```

### 组合继承

前面我们讲到两种继承方式，各有优缺点。组合继承则将前两种方式继承起来

```js
function Parent3 () {
    this.name = 'parent3';
    this.play = [1, 2, 3];
}

Parent3.prototype.getName = function () {
    return this.name;
}
function Child3() {
    // 第二次调用 Parent3()
    Parent3.call(this);
    this.type = 'child3';
}

// 第一次调用 Parent3()
Child3.prototype = new Parent3();
// 手动挂上构造器，指向自己的构造函数
Child3.prototype.constructor = Child3;
var s3 = new Child3();
var s4 = new Child3();
s3.play.push(4);
console.log(s3.play, s4.play);  // 不互相影响
console.log(s3.getName()); // 正常输出'parent3'
console.log(s4.getName()); // 正常输出'parent3'
```

### 原型式继承

这里主要借助Object.create方法实现普通对象的继承

```js
let parent4 = {
    name: "parent4",
    friends: ["p1", "p2", "p3"],
    getName: function() {
      return this.name;
    }
  };

  let person4 = Object.create(parent4);
  person4.name = "tom";
  person4.friends.push("jerry");

  let person5 = Object.create(parent4);
  person5.friends.push("lucy");

  console.log(person4.name); // tom
  console.log(person4.name === person4.getName()); // true
  console.log(person5.name); // parent4
  console.log(person4.friends); // ["p1", "p2", "p3","jerry","lucy"]
  console.log(person5.friends); // ["p1", "p2", "p3","jerry","lucy"]
```