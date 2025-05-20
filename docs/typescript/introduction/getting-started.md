# 快速开始

## TypeScript 简介

TypeScript 是由微软开发的自由开源的编程语言，它是 JavaScript 的超集，添加了可选的静态类型系统和基于类的面向对象编程等特性。TypeScript 设计目标是开发大型应用，通过为 JavaScript 提供更好的工具支持，提高代码的可维护性和开发效率。

## TypeScript 核心优势

- **静态类型检查** - 在编译时捕获错误，减少运行时错误
- **增强代码可读性和可维护性** - 类型声明使代码意图更加清晰
- **更好的工具支持** - 智能感知、代码导航、自动完成等IDE功能更强大
- **严格的空值检查** - 避免空引用错误，编写更健壮的代码
- **使用最新的JavaScript特性** - 支持最新ECMAScript标准，并向下兼容

## 安装配置

### 全局安装TypeScript

```bash
npm install -g typescript
```

### 创建TypeScript项目

```bash
mkdir my-ts-project
cd my-ts-project
npm init -y
npm install typescript --save-dev
npx tsc --init
```

## 第一个TypeScript程序

创建一个`hello.ts`文件：

```typescript
function greet(name: string): string {
  return `Hello, ${name}!`;
}

const user = "TypeScript开发者";
console.log(greet(user));
```

编译并运行：

```bash
npx tsc hello.ts
node hello.js
```

## 基本类型

TypeScript支持以下基本类型：

```typescript
// 布尔值
let isDone: boolean = false;

// 数字
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// 字符串
let color: string = "blue";

// 数组
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3]; // 泛型数组类型

// 元组
let x: [string, number] = ["hello", 10]; 

// 枚举
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

// any - 可以是任何类型
let notSure: any = 4;

// void - 没有任何类型
function warnUser(): void {
  console.log("This is a warning message");
}

// null 和 undefined
let u: undefined = undefined;
let n: null = null;

// never - 永不存在的值的类型
function error(message: string): never {
  throw new Error(message);
}
```

## 接口和类型别名

### 接口

```typescript
interface User {
  id: number;
  name: string;
  email?: string; // 可选属性
  readonly createdAt: Date; // 只读属性
}

function createUser(user: User): void {
  console.log(`Created user: ${user.name}`);
}
```

### 类型别名

```typescript
type Point = {
  x: number;
  y: number;
};

type ID = string | number;
```

## 下一步学习

本指南只是TypeScript的简单入门，请继续浏览后续章节深入学习以下内容：

- 高级类型系统
- 类和接口
- 泛型编程
- 模块系统
- 装饰器
- TypeScript工具类型 