# React中的key有什么作用？

跟Vue一样，React 也存在 Diff算法，而元素key属性的作用是用于判断元素是新创建的还是被移动的元素，从而减少不必要的元素渲染
因此key的值需要为每一个元素赋予一个确定的标识.
