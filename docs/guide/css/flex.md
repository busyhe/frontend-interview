# flex

Flex 布局以后，子元素的`float`、`clear`和`vertical-align` 属性将失效

- 属性
  - `flex-direction` 主轴方向, 默认 `row`
    - `row` 主轴为水平方向，起点在左端
    - `row-reverse` 主轴为水平方向，起点在右端
    - `column` 主轴为垂直方向，起点在上沿
    - `column-reverse` 主轴为垂直方向，起点在下沿
  - `flex-wrap` 是否换行, 默认 `nowrap`
    - `nowrap` 不换行
    - `wrap` 换行
    - `wrap-reverse` 反向换行
  - `flex-flow`  `flex-direction` 和 `flex-wrap` 的简写, 默认 `row nowrap`
  - `justify-content` 主轴对齐方式, 默认 `flex-start`
    - `flex-start` 左对齐
    - `flex-end` 右对齐
    - `center` 居中
    - `space-between` 两端对齐，项目之间的间隔相等
    - `space-around` 每个项目两侧的间隔相等
  - `align-items` 交叉轴对齐方式, 默认 `stretch`
    - `flex-start` 交叉轴的起点对齐
    - `flex-end` 交叉轴的终点对齐
    - `center` 交叉轴的中点对齐
    - `baseline` 项目的第一行文字的基线对齐
    - `stretch` 默认值，如果项目未设置高度或设为auto，将占满整个容器的高度
  - `align-content` 多根轴线的对齐方式, 默认 `stretch`
    - `flex-start` 交叉轴的起点对齐
    - `flex-end` 交叉轴的终点对齐
    - `center` 交叉轴的中点对齐
    - `space-between` 与交叉轴两端对齐，轴线之间的间隔平均分布
    - `space-around` 每根轴线两侧的间隔都相等
    - `stretch` 默认值，轴线占满整个交叉轴
- 项目属性
  - `order` 项目的排列顺序
  - `flex-grow` 项目的放大比例
  - `flex-shrink` 项目的缩小比例
  - `flex-basis` 项目的占据空间
  - `flex` `flex-grow` `flex-shrink` `flex-basis` 的简写
  - `align-self` 单个项目的对齐方式

## flex

flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto，也是比较难懂的一个复合属性

```
.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
```

一些属性有：

- flex: 1 = flex: 1 1 0%
- flex: 2 = flex: 2 1 0%
- flex: auto = flex: 1 1 auto
- flex: none = flex: 0 0 auto，常用于固定尺寸不伸缩

flex:1 和 flex:auto 的区别，可以归结于flex-basis:0和flex-basis:auto的区别

当设置为0时（绝对弹性元素），此时相当于告诉flex-grow和flex-shrink在伸缩的时候不需要考虑我的尺寸

当设置为auto时（相对弹性元素），此时则需要在伸缩时将元素尺寸纳入考虑

注意：建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值

### flex: 1

CSS中的 `flex` 属性是 `flex-grow`、`flex-shrink` 和 `flex-basis` 这三个属性的简写。它是用于设置一个弹性盒子（flex item）如何分配和对齐空间的。

当你写 `flex: 1` 时，实际上你设置的是：

- `flex-grow: 1`
- `flex-shrink: 1`
- `flex-basis: 0`

解释一下这三个属性：

- `flex-grow`：定义了项目的放大比例，默认为 0，即如果存在剩余空间，也不放大。如果所有项目的 `flex-grow` 属性都为 1，则它们将等分剩余空间（如果有的话）。如果一个项目的 `flex-grow` 属性为 2，其他项目都为 1，则前者占据的剩余空间将比其他项多一倍。

- `flex-shrink`：定义了项目的缩小比例，默认为 1，即如果空间不足，该项目将缩小。如果所有项目的 `flex-shrink` 属性都为 1，当空间不足时，都将等比例缩小。如果一个项目的 `flex-shrink` 属性为 0，其他项目都为 1，则空间不足时，前者不缩小。

- `flex-basis`：定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。默认值为 `auto`，即项目的本来大小。

所以，`flex: 1` 的意思是，当有剩余空间时，该项目会根据自己的 `flex-grow` 比例来获取相应的空间；当空间不足时，该项目会根据自己的 `flex-shrink` 比例来缩小自己的大小。而 `flex-basis` 为 0 则意味着在分配多余空间之前，不预设定任何空间大小，完全根据内容来决定大小。