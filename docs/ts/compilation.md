# 编译过程

- **预处理器 Pre-processor：** 根据 **待编译文件** 计算参与编译的文件，生成 **源文件** 列表，生成 **编译上下文** 和 **program**
  - **待编译文件：** 默认为项目目录下所有的 .ts、.tsx、.d.ts 为待编译文件
    - 默认 node_modules 是通过 exclude 排除在外
    - 如果制定 allowJs 为true，.js和.jsx 也包含在内
    - 影响待编译文件配置有：files、include、exclude
  - **需计算的文件：** 根据待编译文件中一下方式引入的文件
    - \<reference path="" \/> 标签引入的依赖声明文件
    - import 表达式引入的文件
  - **默认包含的应用** 所有可见的 **@type** 目录下所有的文件
- **语法分析器 Parser：** 将 **预处理器** 得到的源文件列表中的文件解析生成抽象语法树（AST）Node 的 SourceFile 对象（SourceFile对象 = 源文件 AST + 额外信息 (如文件名及文件信息等)
- **联合器 Binder：** 联合器遍历并处理语法分析器生成的 AST，并将 AST 中的声明结合放到一个 Symbol 中
  - 此时的 Symobl 仅表示单个文件的声明信息
- **类型解析/检查器 Type resolve/checker：**
  - 生成 Program
  - 生成 TypeChecker 进行处理
- **生成器 Emitter：** 通过 Program 创建一个 Emitter，Emitter 将给定的 SourceFile 生成编译后文件（.js，.jsx，.d.ts和.js.map）

