# Proxy

Proxy的监听是针对一个对象的，所有操作会进入监听操作，代理所有属性

## 对比 Object.defineProperty

- Object.defineProperty无法监控到数组下标的变化，导致通过数组下标添加元素，不能实时响应；
- Object.defineProperty只能劫持对象的属性，从而需要对每个对象，每个属性进行遍历，如果，属性值是对象，还需要深度遍历。Proxy可以劫持整个对象，并返回一个新的对象。
- Proxy不仅可以代理对象，还可以代理数组。还可以代理动态增加的属性。

### 为什么能实现响应式

通过defineProperty 两个属性，get及set

- Proxy 不兼容IE，也没有 polyfill, defineProperty 能支持到IE9
- Object.defineProperty只能遍历对象属性进行劫持
- Proxy 可以直接监听数组的变化