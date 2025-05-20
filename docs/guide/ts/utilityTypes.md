# 实用程序类型 utility-type

- Partial\<T\> 将类型 T 的所有属性设置为可选
- Required\<T\> 将类型 T 的所有属性设置为必选
- Readonly\<T\> 将类型 T 的所有属性设置为只读
- Pick\<T, K\> 从类型 T 中选取一组属性 K 并返回一个新的类型
- Record\<K, T\> 将类型 K 中的所有属性的值转换为类型 T 并返回一个新的类型
- Omit\<T, K\> 从类型 T 中删除一组属性 K 并返回一个新的类型
- Exclude\<T, U\> 从类型 T 中排除可以赋值给类型 U 的所有属性并返回一个新的类型
- Extract\<T, U\> 从类型 T 中提取可以赋值给类型 U 的所有属性并返回一个新的类型
- NonNullable\<T\> 从类型 T 中排除 null 和 undefined 并返回一个新的类型
- Parameters\<T\> 获取函数类型 T 的参数类型并返回一个由它们组成的元组类型
- ConstructorParameters\<T\> 获取构造函数类型 T 的参数类型并返回一个由它们组成的元组类型
- ReturnType\<T\> 获取函数类型 T 的返回类型
- InstanceType\<T\> 获取构造函数类型 T 的实例类型
- ThisParameterType\<T\> 获取函数类型 T 的 this 参数类型
- OmitThisParameter\<T\> 从函数类型 T 中删除 this 参数并返回一个新的类型
- ThisType\<T\> 用于指定函数的 this 类型

## Partial\<T\>

将类型 T 的所有属性设置为可选

```ts
interface Todo {
    title: string;
    description: string;
}

type subTodo = Partial\<Todo\>

const todo1: subTodo = {
    title: 'This is a title'
}
```

## Required\<T\>

将类型 T 的所有属性设置为必选

```ts
interface Todo {
    title?: string;
    description?: string;
}

type subTodo = Required\<Todo\>

const todo1: subTodo = {
    title: 'This is a title',
    description: 'This is a description'
}
```

## Readonly\<T\>

将类型 T 的所有属性设置为只读

```ts
interface Todo {
    title: string;
    description: string;
}

type subTodo = Readonly\<Todo\>

const todo1: subTodo = {
    title: 'This is a title',
    description: 'This is a description'
}

todo1.title = 'This is a new title' // Cannot assign to 'title' because it is a read-only property.
```

## Pick\<T, K\>

从类型 T 中选取一组属性 K 并返回一个新的类型

```ts
interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type subTodo = Pick\<Todo, 'title' | 'completed'\>

const todo1: subTodo = {
    title: 'This is a title',
    completed: false
}
```

## Record\<K, T\>

将类型 K 中的所有属性的值转换为类型 T 并返回一个新的类型

```ts
type subTodo = Record\<'title' | 'completed', string\>

const todo1: subTodo = {
    title: 'This is a title',
    completed: 'false'
}
```

## Omit\<T, K\>

从类型 T 中删除一组属性 K 并返回一个新的类型

```ts
interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type subTodo = Omit\<Todo, 'title' | 'completed'\>

const todo1: subTodo = {
    description: 'This is a description'
}
```

## Exclude\<T, U\>

从类型 T 中排除可以赋值给类型 U 的所有属性并返回一个新的类型

```ts
type subTodo = Exclude\<'title' | 'completed', 'title'\>

const todo1: subTodo = 'completed'
```

## Extract\<T, U\>

从类型 T 中提取可以赋值给类型 U 的所有属性并返回一个新的类型

```ts
type subTodo = Extract\<'title' | 'completed', 'title'\>

const todo1: subTodo = 'title'
```

## NonNullable\<T\>

从类型 T 中排除 null 和 undefined 并返回一个新的类型

```ts
type subTodo = NonNullable\<'title' | 'completed' | null | undefined\>

const todo1: subTodo = 'title'
```

## Parameters\<T\>

获取函数类型 T 的参数类型并返回一个由它们组成的元组类型

```ts
type subTodo = Parameters\<(title: string, completed: boolean) =\> void\>

const todo1: subTodo = ['This is a title', false]
```

## ConstructorParameters\<T\>

获取构造函数类型 T 的参数类型并返回一个由它们组成的元组类型

```ts
type subTodo = ConstructorParameters\<typeof Todo\>

const todo1: subTodo = ['This is a title', 'This is a description', false]
```

## ReturnType\<T\>

获取函数类型 T 的返回类型

```ts
type subTodo = ReturnType\<(title: string, completed: boolean) =\> void\>

const todo1: subTodo = undefined
```

## InstanceType\<T\>

获取构造函数类型 T 的实例类型

```ts
type subTodo = InstanceType\<typeof Todo\>

const todo1: subTodo = {
    title: 'This is a title',
    description: 'This is a description',
    completed: false
}
```

## ThisParameterType\<T\>

获取函数类型 T 的 this 参数类型

```ts
type subTodo = ThisParameterType\<(title: string, completed: boolean) =\> void\>

const todo1: subTodo = undefined
```

## OmitThisParameter\<T\>

从函数类型 T 中删除 this 参数并返回一个新的类型

```ts
type subTodo = OmitThisParameter\<(title: string, completed: boolean) =\> void\>

const todo1: subTodo = (title: string, completed: boolean) =\> {
    console.log(title, completed)
}
```

## ThisType\<T\>

用于指定函数的 this 类型

```ts
type subTodo = ThisType\<{ title: string, completed: boolean }\>

const todo1: subTodo = {
    title: 'This is a title',
    completed: false,
    log() {
        console.log(this.title, this.completed)
    }
}
```
