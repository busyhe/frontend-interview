# Webpack 构建流程

webpack 的运行流程是一个串行的过程，它的工作流程就是将各个插件串联起来，让数据一步步的进行转换，最后输出结果。

三大步骤：

- **初始化流程**：从配置文件和 Shell 语句中读取与合并参数，并初始化需要使用的插件和配置插件等执行环境所需要的参数
- **编译构建流程**：从 Entry 发出，针对每个 Module 串行调用对应的 Loader 去翻译文件内容，再找到该 Module 依赖的 Module，递归地进行编译处理
- **输出流程**：对编译后的 Module 组合成 Chunk，把 Chunk 转换成文件，输出到文件系统

![webpack-build](https://static.vue-js.com/b566d400-a658-11eb-85f6-6fac77c0c9b3.png)

## 初始化流程

从配置文件和 Shell 语句中读取与合并参数，得出最终的参数

配置文件默认下为webpack.config.js，也或者通过命令的形式指定配置文件，主要作用是用于激活webpack的加载项和插件

```js