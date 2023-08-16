# recoil

## Redux

Redux的使用有三大原则：单一数据源、state只读、纯函数执行修改。

单一数据源：指的是项目的全局状态State都存储在单个Store内的对象树中，提供读写操作；
State只读：Store内的状态不可直接修改，State唯一的修改方式，是发送一个Action，触发对应的修改操作；
纯函数执行：Action触发修改依靠的是Reducer纯函数，Reducer会接收State和对应Action，返回修改后的新State；

## Redux vs Recoil

Redux的缺点：

- 代码量大，需要编写大量的action、reducer、actionType等；
- 代码结构复杂，需要编写action、reducer、actionType等，还需要编写store、combineReducers、applyMiddleware等；
- 代码可读性差，需要编写大量的action、reducer、actionType等，代码结构复杂，可读性差；
- 代码维护成本高，需要编写大量的action、reducer、actionType等，代码结构复杂，可读性差，维护成本高；
- 代码性能差，每次修改state都会触发所有的reducer，性能差；

Recoil的优点：

- 代码量小，只需要编写atom、selector等；
- 代码结构简单，只需要编写atom、selector等；
- 代码可读性好，只需要编写atom、selector等，代码结构简单，可读性好；