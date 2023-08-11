# TypeScript 中命名空间与模块的理解？区别？

## 模块

任何包含顶级 import 或者 export 的文件都被当成一个模块

如果一个文件不带有顶级的import或者export声明，那么它的内容被视为全局可见的

```ts
export const a = 1
export type Person = {
    name: String
}
```

```ts
import { a, Person } from './a'
```

## 命名空间

命名空间就是解决重名问题

命名空间定义了标识符的可见范围，一个标识符可在多个名字空间中定义，它在不同名字空间中的含义是互不相干的

```ts
namespace Letter {
  export let a = 1;
  export let b = 2;
  export let c = 3;
  // ...
  export let z = 26;
}
```