# Proxy

Proxy的监听是针对一个对象的，所有操作会进入监听操作，代理所有属性

## 对比 Object.defineProperty

Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象

### 为什么能实现响应式

通过defineProperty 两个属性，get及set

- Proxy 不兼容IE，也没有 polyfill, defineProperty 能支持到IE9
- Object.defineProperty只能遍历对象属性进行劫持
- Proxy 可以直接监听数组的变化