# http 缓存

- 降低服务器的请求压力，让服务器更快地响应
- 减少了冗余的数据传输，节省了网络带宽

## 原理

1. 服务器加载资源，根据请求头Expires和Cache-Control判断是否命中强缓存，如果命中则直接返回200和资源
2. 如果没有命中强缓存，则根据请求头Last-Modified/If-Modified-Since和ETag/If-None-Match判断是否命中协商缓存，如果命中则返回304和资源
3. 如果没有命中协商缓存，则直接请求服务器返回200和资源

缓存的文件一般存到内存中，因为内存的读取速度比硬盘快很多

## 缓存策略

### 强缓存-客户端缓存

强缓存通过设置两种 HTTP Header 实现：Expires 和 Cache-Control

> 浏览器在加载资源的时候会通过这两个字段判断是否命中强缓存，如果命中则直接从缓存中加载资源，不会向服务器发送请求，反之则发送请求。

#### Expires

是 HTTP/1 的产物，表示资源过期的时间，描述的是一个绝对时间，由服务器返回。如果小于这个时间则请求缓存数据。

```js
app.get('/test.js', (req, res) => {
  let sourcePath = path.resolve(__dirname, '../public/test.js')
  let result = fs.readFileSync(sourcePath)
  res.setHeader(
    'Expires',
    moment().utc().add(1, 'm').format('ddd, DD MMM YYYY HH:mm:ss') + ' GMT' // 设置1分钟后过期
  )
  res.end(result)
})
```

第一次像服务器请求资源，服务器返回资源的同时，在响应头中添加 Expires 字段，再次请求时，浏览器会先获取本地时间，然后和 Expires 字段进行对比，如果本地时间小于或等于 Expires 的值，则命中强缓存，直接从缓存中加载资源，不会向服务器发送请求。

缺点：

- 服务器时间和浏览器时间可能存在误差，如果修改了本地时间，可能会导致缓存失效。
- 现在浏览器大部分使用http1.1，基本靠Cache-Control作为主要的依据

#### Cache-Control

HTTP/1.1 加入的字段，利用 max-age 判断资源是否过期，描述的是一个相对时间，单位是秒。如果小于这个时间则请求缓存数据。

```js


### 协商缓存-服务端缓存

协商缓存是利用的是 Last-Modified/If-Modified-Since 和 ETag/If-None-Match 这两对 Header 来管理的。

#### Last-Modified/If-Modified-Since

Last-Modified 表示本地文件最后修改日期，If-Modified-Since 会将 Last-Modified 的值发送给服务器，询问服务器在该日期后资源是否有更新，有更新的话就会将新的资源发送回来。

#### ETag/If-None-Match

ETag 类似于文件指纹，If-None-Match 会将当前 ETag 发送给服务器，询问该资源 ETag 是否变动，有变动的话就将新的资源发送回来。


