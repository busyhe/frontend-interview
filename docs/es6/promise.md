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

## Promise.all() 实现

```js
Promise.all = function (promises) {
  if (!Array.isArray(promises)) {
    throw new Error("arguments must be an array");
  }

  return new Promise((resolve, reject) => {
    let result = [];
    let count = 0;
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(
        (data) => {
          result[i] = data;
          if (++count === promises.length) {
            resolve(result);
          }
        },
        (err) => {
          reject(err);
        }
      );
    }
  });
};
```

## Promise.race() 实现

```js
Promise.race = function (promises) {
  if (!Array.isArray(promises)) {
    throw new Error("arguments must be an array");
  }

  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(
        (data) => {
          resolve(data);
        },
        (err) => {
          reject(err);
        }
      );
    }
  });
};
```
