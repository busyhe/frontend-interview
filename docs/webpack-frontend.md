# Webpack 优化前端性能

- **JS代码压缩**：production模式下，默认使用 TerserPlugin 压缩JS代码
- **CSS代码压缩**：production模式下，默认使用 optimize-css-assets-webpack-plugin 压缩CSS代码
- **Html文件代码压缩**： production模式下，默认使用 html-webpack-plugin 压缩HTML代码
- **文件大小压缩**：production模式下，默认使用 compression-webpack-plugin 压缩文件大小
- **图片压缩**： production模式下，默认使用 image-webpack-loader 压缩图片
- **Tree Shaking**： production模式下，默认使用 UglifyJsPlugin 压缩JS代码
- **代码分离**： production模式下，默认使用 SplitChunksPlugin 代码分离
- **内联 chunk**： production模式下，默认使用 InlineChunkHtmlPlugin 内联chunk

