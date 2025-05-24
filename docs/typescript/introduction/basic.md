# 基本类型和注释

## 基本注释

### 函数参数注释

您将使用的最重要的注释之一是函数参数。例如，这里有一个logAlbumInfo函数，它接受一个title字符串、一个trackCount数字和一个isReleased布尔值：

```ts
const logAlbumInfo = (
  title: string,
  trackCount: number,
  isReleased: boolean,
) => {
  // implementation
};
```

### 变量注释

除了函数参数之外，您还可以注释变量。这是一些变量及其相关类型的示例。

```ts
let albumTitle: string = "Midnights";
let isReleased: boolean = true;
let trackCount: number = 13;
```

### 基本类型

TypeScript 有许多基本类型可用于注释代码。以下是一些最常见的类型：


```ts
let example1: string = "Hello World!";
let example2: number = 42;
let example3: boolean = true;
let example4: symbol = Symbol();
let example5: bigint = 123n;
let example6: null = null;
let example7: undefined = undefined;
```

### 类型 any

```ts
let anyVariable: any = "This can be anything!";

anyVariable(); // no error

anyVariable.deep.property.access; // no error
```

上面的代码在运行时会出错，但 TypeScript 并没有给我们警告！
因此，usingany可以用来关闭 TypeScript 中的错误。当类型过于复杂而难以描述时，它可以成为一个有用的逃生出口。
但过度使用any会违背使用 TypeScript 的目的，因此最好尽可能避免使用它——无论是隐式还是显式。