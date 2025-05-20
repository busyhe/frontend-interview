# watch & computed

## computed

计算属性本身就是一个watcher，vue 有三种watcher：渲染watcher、用户watcher、计算属性watcher。计算属性watcher依赖的数据变化时，会重新计算，如果计算结果变化了，就会通知渲染watcher重新渲染。

计算属性的缓存，计算属性watcher的dirty属性为true时，会重新计算，计算完后，dirty属性为false，下次再访问计算属性时，就不会重新计算了。

### 原理实现



## watch

watch 是一个对象，key 是需要观察的数据，value 是回调函数，当 key 对应的数据变化时，会执行回调函数。

### $watch

$watch 是实例方法，用来观察实例上的数据变化，它返回一个取消观察的函数，用来停止触发回调函数。

### 参数

- deep: 深度观察，当被观察的数据是对象时，会递归观察对象内部的数据变化。
- immediate: 立即触发回调函数，当 immediate 为 true 时，回调函数会在侦听开始之后被立即调用。

## watch 和 computed 的区别

- computed 是计算属性，依赖的数据变化时，会重新计算，计算结果变化时，会通知渲染watcher重新渲染。
- watch 是观察数据，当数据变化时，执行回调函数。
- computed 有缓存，只有当计算属性依赖的数据变化时，才会重新计算，否则会使用缓存的计算结果。
- watch 没有缓存，当数据变化时，会立即执行回调函数。
- computed 适合计算结果会被多次使用的场景。
- watch 适合数据变化时，执行异步或开销较大的操作。
- watch 也可以实现 computed 的功能，但是 computed 不能实现 watch 的功能。