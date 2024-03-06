# ajax、fetch 与 axios

## 三者都用于发送异步请求，但是有一些区别。

- ajax 是一种传统的异步请求方式，通过 XMLHttpRequest 对象来发送请求和接收响应。
- fetch 是 ES6 新增的一种异步请求方式，使用 Promise 对象来处理请求和响应。
- axios 是一个基于 Promise 的 HTTP 客户端，可以用在浏览器和 node.js 中。

## 实现

### ajax

```javascript
var xhr = new XMLHttpRequest();
xhr.open('GET', '/api', true);
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText);
  }
};
xhr.send();
```

### fetch

```javascript
fetch('/api')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

### axios

```javascript
axios.get('/api')
  .then(response => console.log(response.data))
  .catch(error => console.error(error));
```