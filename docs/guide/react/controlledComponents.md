# 受控组件和非受控组件的理解？应用场景？

## 受控组件

组件的状态全程响应外部数据

```jsx
class TestComponent extends React.Component {
  constructor (props) {
    super(props);
    this.state = { username: 'lindaidai' };
  }
  render () {
    return <input name="username" value={this.state.username} />
  }
}
```

## 非受控组件

一般情况是在初始化的时候接受外部数据，然后自己在内部存储其自身状态

当需要时，可以使用ref 查询 DOM并查找其当前值


## 应用场景

![](https://static.vue-js.com/f28aed20-df2f-11eb-ab90-d9ae814b240d.png)