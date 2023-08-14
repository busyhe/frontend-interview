# 内存泄漏

未能释放已不再使用的内存

## 垃圾回收机制

JS 具有自动垃圾回收机制，垃圾回收器会定期扫描所有对象，找出那些不再使用的对象，然后释放其占用的内存。

两种方式实现：

- 标记清除（最常用）：销毁所有不可达带标记的变量
- 引用计数：引用次数为0时销毁

## 常见的内存泄漏

- 意外的全局变量
- 被遗忘的计时器或回调函数
- 脱离 DOM 的引用


### 意外的全局变量

```js
function foo(arg) {
    bar = "this is a hidden global variable";
}
```

### 被遗忘的计时器或回调函数

```js
var someResource = getData();
setInterval(function() {
    var node = document.getElementById('Node');
    if(node) {
        node.innerHTML = JSON.stringify(someResource));
    }
}, 1000);
```

### 脱离 DOM 的引用

```js
var elements = {
    button: document.getElementById('button'),
    image: document.getElementById('image'),
    text: document.getElementById('text')
};
function doStuff() {
    image.src = 'http://some.url/image';
    button.click();
    console.log(text.innerHTML);
}
function removeButton() {
    document.body.removeChild(document.getElementById('button'));
    // 此时 button 元素仍然存在于 elements 对象中
}
```
