# http 缓存

资源不是每次都去服务端获取，而是第一次获取之后缓存下来。下次再请求时，直接读取本地缓存，而不再去服务端请求。

## 缓存策略

### 强制缓存-客户端缓存

**Cache-Control** (response headers 中) 表示该资源，被再次请求时的缓存情况。

- `max-age:31536000` 单位是 s ，该资源被强制缓存 1 年
- `no-cache` 不使用强制缓存，但不妨碍使用协商缓存（下文会讲）
- `no-store` 禁用一起缓存，每次都从服务器获取最新的资源
- `private` 私有缓存（浏览器级缓存）
- `public` 共享缓存（代理级缓存）

### 协商缓存（对比缓存），服务端缓存

当强制缓存失效，请求会被发送到服务端。此时，服务端也不一定每次都要返回资源，如果客户端资源还有效的话。

第一，**Last-Modified**（Response Headers）和 **If-Modified-Since**（Request Headers）

- Last-Modified 服务端返回资源的最后修改时间
- If-Modified-Since 再次请求时带着最后修改时间
- 服务器根据时间判断资源是否被修改（如未被修改则返回 304，失败则返回新资源和新的缓存规则）

第二，**Etag**（Response Headers）和 **If-None-Match**（Request Headers）

- Etag 服务端返回的资源唯一标识（类似人的指纹，唯一，生成规则由服务器端决定，结果就是一个字符串）
- If-None-Match 再次请求时带着这个标识
- 服务端根据资源和这个标识是否 match （成功则返回 304，失败则返回新资源和新的缓存规则）

如果两者一起使用，则**优先使用 Etag** 规则。因为 Last-Modified 只能精确到秒级别。