# type & interface

用interface描述**数据结构**，用type描述**类型关系**

## 相同点

- 都可以描述对象或者函数
- 拓展（extends）与 交叉类型（Intersection Types），interface 可以继承自（extends）interface 或对象结构的 type。type 也可以通过 & 做对象结构的继承；

## 不同点

- type 可以描述任何类型组合，interface 只能描述对象结构；
- 多次声明的同名 interface 会进行声明合并，type 则不允许多次声明

interface是接口，type是类型，本身就是两个概念。只是碰巧表现上比较相似。
希望定义一个变量类型，就用type，如果希望是能够继承并约束的，就用interface。
如果你不知道该用哪个，说明你只是想定义一个类型而非接口，所以应该用type。