# Node Stream 的理解及应用场景

流（stream）是一种数据传输手段，有顺序的读取或者写入数据。它分为三个部分：

```html
source -> pipe -> dest
```

source.pipe(dest), 让数据从source流向dest。

## 种类

- 可写流：可写入数据的流。例如 fs.createWriteStream() 可以使用流将数据写入文件
- 可读流：可读取数据的流。例如 fs.createReadStream() 可以从文件中读取数据
- 双工流：既可以读取数据，又可以写入数据的流。例如 net.Socket
- 转换流：可以在数据写入和读取时修改或转换数据的流。例如，在文件压缩操作中，可以向文件写入压缩数据，并从文件中读取解压数据

## 应用场景

stream 的应用场景主要是处理 IO 操作，http 请求和文件操作属于 IO 操作

- get 请求返回文件给前端
- 文件操作
- 一些打包工具，例如 gulp

### get 请求返回文件给前端

```js
const server = http.createServer(function (req, res) {
    const method = req.method; // 获取请求方法
    if (method === 'GET') { // get 请求
        const fileName = path.resolve(__dirname, 'data.txt');
        let stream = fs.createReadStream(fileName);
        stream.pipe(res); // 将 res 作为 stream 的 dest
    }
});
server.listen(8000);
```

### 文件操作

```js
const fs = require('fs')
const path = require('path')

// 两个文件名
const fileName1 = path.resolve(__dirname, 'data.txt')
const fileName2 = path.resolve(__dirname, 'data-bak.txt')
// 读取文件的 stream 对象
const readStream = fs.createReadStream(fileName1)
// 写入文件的 stream 对象
const writeStream = fs.createWriteStream(fileName2)
// 通过 pipe执行拷贝，数据流转
readStream.pipe(writeStream)
// 数据读取完成监听，即拷贝完成
readStream.on('end', function () {
    console.log('拷贝完成')
})
```