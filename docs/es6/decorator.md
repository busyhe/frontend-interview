# Decorator

不改变原类和使用继承的情况下，扩展类属性和方法

- 代码可读性变强了，装饰器命名相当于一个注释
- 在不改变原有代码情况下，对原来功能进行扩展

## 用法

Decorator 修饰对象为下面两种：

- 类的装饰
- 类属性的装饰

### 类的装饰

当对类进行装饰的时候，能够接受一个参数，即类本身

### 类属性的装饰

当对类属性进行装饰的时候，能够接受三个参数：

- 类的原型对象
- 需要装饰的属性名
- 装饰属性名的描述对象