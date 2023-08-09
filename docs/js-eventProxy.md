# 事件代理及使用场景

就是把元素的响应事件委托到另一个元素上去，父层或者更外层。事件响应会通过冒泡机制触发外层元素的事件响应函数。

## 应用场景

如果我们有一个列表，列表之中有大量的列表项，我们需要在点击列表项的时候响应一个事件,如果给每个列表项一一都绑定一个函数，那对于内存消耗是非常大的,这时候就可以事件委托，把点击事件绑定在父级元素ul上面，然后执行事件的时候再去匹配目标元素，这样就可以大大减少内存消耗。

```js
<ul id="list">
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
  ......
  <li>item n</li>
</ul>
```

```js
// 给父层元素绑定事件
document.getElementById('list').addEventListener('click', function (e) {
    // 兼容性处理
    var event = e || window.event;
    var target = event.target || event.srcElement;
    // 判断是否匹配目标元素
    if (target.nodeName.toLocaleLowerCase === 'li') {
        console.log('the content is: ', target.innerHTML);
    }
});
```