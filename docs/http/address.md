# 地址栏输入 URL 敲下回车后发生了什么?

- URL解析
- DNS 查询
- TCP 连接
- HTTP 请求
- 响应请求
- 页面渲染

## URL解析

首先判断你输入的是一个合法的URL 还是一个搜索的关键词，然后对内容进行解析

![http](https://static.vue-js.com/27a0c690-bdf4-11eb-ab90-d9ae814b240d.png)

- 协议：http 还是 https
- 域名：
- 端口号：默认是80，可以省略
- 路径：默认是 /，可以省略
- query：查询参数
- hash：锚点

## DNS查询

DNS解析是将域名解析成IP地址，DNS解析的过程是一个递归查询的过程，从根域名服务器开始，依次查询，直到找到对应的IP地址

### DNS缓存

- 浏览器缓存
- 系统缓存
- 路由器缓存
- ISP DNS 缓存
- 根域名服务器

### DNS污染

DNS污染是指在DNS服务器上篡改DNS记录，使得用户访问的域名被解析到错误的IP地址上，从而无法访问到正确的网站

## TCP连接

![TCP三次握手](https://static.vue-js.com/ad750790-bdf4-11eb-85f6-6fac77c0c9b3.png)

## HTTP请求

## 响应请求

## 页面渲染

## 四次挥手