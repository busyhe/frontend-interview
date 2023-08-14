# Vue 实例挂载的过程

new Vue() 做了什么

```js
initMixin(Vue);     // 定义 _init
stateMixin(Vue);    // 定义 $set $get $delete $watch 等
eventsMixin(Vue);   // 定义事件  $on  $once $off $emit
lifecycleMixin(Vue);// 定义 _update  $forceUpdate  $destroy
renderMixin(Vue);   // 定义 _render 返回虚拟dom
```

## 总结

- new Vue的时候调用会调用_init方法

  - 定义 $set、$get 、$delete、$watch 等方法
  - 定义 $on、$off、$emit、$off等事件
  - 定义 _update、$forceUpdate、$destroy生命周期
  - 调用 $mount 进行页面的挂载

- 挂载的时候主要是通过mountComponent方法

- 定义updateComponent更新函数

- 执行render生成虚拟DOM

- _update将虚拟DOM生成真实DOM结构，并且渲染到页面中