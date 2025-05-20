# Loader 和 Plugin

- loader 是文件加载器，能够加载资源文件，并对这些文件进行一些处理，诸如编译、压缩等，最终一起打包到指定的文件中
- plugin 赋予了 webpack 各种灵活的功能，例如打包优化、资源管理、环境变量注入等，目的是解决 loader 无法实现的其他事

## Loader

loader 用于对模块的"源代码"进行转换，在 import 或"加载"模块时预处理文件

### 特性

- loader 可以是同步的，也可以是异步的
- loader 运行在 Node.js 中，并且能够执行任何操作
- 除了常见的通过 package.json 的 main 来将一个 npm 模块导出为 loader，还可以在 module.rules 中使用 loader 字段直接引用一个模块
- 插件(plugin)可以为 loader 带来更多特性
- loader 能够产生额外的任意文件

### 常见的loader

- **style-loader**: 将css添加到DOM的内联样式标签style里
- **css-loader** :允许将css文件通过require的方式引入，并返回css代码
- **less-loader**: 处理less
- **sass-loader**: 处理sass
- **postcss-loader**: 用postcss来处理CSS
- **autoprefixer-loader**: 处理CSS3属性前缀，已被弃用，建议直接使用postcss
- **file-loader**: 分发文件到output目录并返回相对路径
- **url-loader**: 和file-loader类似，但是当文件小于设定的limit时可以返回一个Data Url
- **html-minify-loader**: 压缩HTML
- **babel-loader** :用babel来转换ES6文件到ES

## plugin

由于webpack基于发布订阅模式，在运行的生命周期中会广播出许多事件，插件通过监听这些事件，就可以在特定的阶段执行自己的插件任务