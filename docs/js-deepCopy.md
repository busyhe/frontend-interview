# 深拷贝浅拷贝

## 浅拷贝

- Object.assign
- Array.concat
- Array.slice
- 扩展运算符

## 深拷贝

- JSON.parse(JSON.stringify())
- 递归
- lodash.cloneDeep
- jQuery.extend(true, {}, obj)

## 实现深拷贝

简单实现：

```js
function deepCopy(obj) {
    if (typeof obj !== 'object' || obj == null ) return obj;
    let newObj = obj instanceof Array ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
        }
    }
    return newObj;
}
```

考虑循环引用：

```js
function deepClone(obj, hash = new WeakMap()) {
    if (obj === null) return obj;
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof RegExp) return new RegExp(obj);
    if (typeof obj !== "object") return obj;
    if (hash.get(obj)) return hash.get(obj);
    let cloneObj = new obj.constructor();
    hash.set(obj, cloneObj);
  
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloneObj[key] = deepClone(obj[key], hash);
        }
    }
    
    return cloneObj;
}
```