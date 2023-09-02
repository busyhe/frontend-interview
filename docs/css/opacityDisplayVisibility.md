# opacity: 0、visibility: hidden、display: none 优劣和适用场景

- display: none; 会让元素完全从渲染树中消失，渲染的时候不占据任何空间；
- visibility: hidden; 不会让元素从渲染树消失，渲染元素继续占据空间，只是内容不可见；
- opacity: 0; 不会让元素从渲染树消失，渲染元素继续占据空间，只是内容不可见，可以针对元素绑定事件。