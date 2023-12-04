# 跨域

跨域（Cross-Origin）是指在浏览器中，当一个网页的脚本试图访问不同源（Origin）的资源时，就会发生跨域请求。不同源是指协议、域名或端口号中任何一个不同的情况。

跨域请求是由浏览器的同源策略（Same-Origin Policy）所限制的。同源策略是一种安全机制，用于防止恶意网站通过脚本访问其他网站的敏感信息。同源策略要求网页中的脚本只能访问与其来源相同的资源，而不能直接访问其他源的资源。

跨域请求可以通过以下几种方式实现：

1. **JSONP（JSON with Padding）**：JSONP是一种在不同源之间进行跨域请求的方法。它利用了`<script>`标签的跨域特性，通过动态创建`<script>`标签来加载一个包含回调函数的脚本文件。服务器返回的脚本文件会在客户端执行，并通过回调函数将数据传递给页面。

2. **CORS（Cross-Origin Resource Sharing）**：CORS是一种在现代浏览器中支持的跨域解决方案。它通过在服务器端设置响应头来允许特定的跨域请求。服务器可以在响应中添加`Access-Control-Allow-Origin`头来指定允许访问的源，或者使用更细粒度的配置来控制跨域请求的行为。

3. **代理**：代理是一种常见的跨域解决方案。客户端通过向同源的服务器发送请求，然后由服务器代理转发请求到目标服务器，并将响应返回给客户端。这样客户端就可以绕过浏览器的同源策略限制，实现跨域请求。

需要注意的是，跨域请求可能会引发一些安全风险，因此在实施跨域请求时需要谨慎考虑安全性。对于不同的跨域请求场景，选择合适的跨域解决方案是很重要的。

## JSONP 实现原理

JSONP（JSON with Padding）是一种在不同源之间进行跨域请求的方法，它利用了`<script>`标签的跨域特性。下面是JSONP实现的基本原理：

1. 客户端（浏览器）创建一个`<script>`标签，并指定要请求的跨域资源的URL，同时在URL中添加一个回调函数的参数名，如`callback`。

2. 服务器接收到请求后，根据URL中的回调函数参数名，将要返回的数据包装在回调函数中，并作为响应内容返回给客户端。

3. 客户端接收到响应后，将返回的内容作为脚本执行。由于脚本是在全局作用域下执行的，因此可以调用回调函数，并将数据作为参数传递给回调函数。

4. 客户端定义一个全局的回调函数，该回调函数将处理服务器返回的数据。

通过以上步骤，JSONP实现了在不同源之间进行跨域请求和数据传递。

具体的实现过程如下：

客户端代码：
```javascript
function handleResponse(data) {
  // 处理服务器返回的数据
  console.log(data);
}

// 创建一个<script>标签，并设置src属性，指向跨域资源的URL
var script = document.createElement('script');
script.src = 'http://example.com/api?callback=handleResponse';
document.body.appendChild(script);
```

服务器端代码：
```javascript
// 根据请求中的callback参数名，将数据包装在回调函数中返回
var data = { name: 'John', age: 25 };
var callbackName = req.query.callback;
var response = callbackName + '(' + JSON.stringify(data) + ')';
res.send(response);
```

在上述例子中，客户端创建了一个`<script>`标签，指定了跨域资源的URL，并在URL中添加了回调函数的参数名`callback=handleResponse`。服务器端接收到请求后，根据`callback`参数名将数据包装在回调函数`handleResponse`中返回。客户端接收到响应后，将返回的内容作为脚本执行，从而调用了全局的`handleResponse`回调函数，并将数据作为参数传递给回调函数。

需要注意的是，JSONP只支持GET请求，因为`<script>`标签只能发起GET请求。此外，JSONP存在一定的安全风险，因为服务器返回的脚本会在客户端执行，所以需要确保从服务器返回的脚本是可信的。