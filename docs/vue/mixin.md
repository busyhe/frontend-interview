# mixin

提供局部混入和全局混入的方法，使组件的功能可复用。

本身就是一个对象，可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被混入进入该组件本身的选项。

## 全局混入

```js
Vue.mixin({
  created: function () {
      console.log("全局混入")
    }
})
```

## 局部混入

```js
var mixin = {
  created: function () {
      console.log("局部混入")
    }
}
new Vue({
  mixins: [mixin]
})
```

## 结论

- 替换型策略有props、methods、inject、computed，就是将新的同名参数替代旧的参数
- 合并型策略是data, 通过set方法进行合并和重新赋值
- 队列型策略有生命周期函数和watch，原理是将函数存入一个数组，然后正序遍历依次执行
- 叠加型有component、directives、filters，通过原型链进行层层的叠加