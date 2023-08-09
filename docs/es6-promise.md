# Promise

- 链式操作减低了编码难度
- 代码可读性明显增强

## 状态

- pending
- resolve
- reject

## 原型方法

- then
- catch
- finally

## 静态方法

- all: 所有都 resolve 才 resolve，有一个 reject 就 reject
- race: 有一个 resolve 或 reject 就 resolve 或 reject
- resolve: 返回一个 resolve 的 Promise
- reject: 返回一个 reject 的 Promise
- allSettled: 返回一个包含所有结果的数组