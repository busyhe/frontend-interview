# Vuex

## action 和 mutation 的区别

- action 提交的是 mutation，而不是直接变更状态。mutation可以直接变更状态。
- action 可以包含任意异步操作。mutation只能是同步操作。

## 监听组件中提交mutation和action？

- 用Vuex.Store的实例方法subscribe监听组件中提交mutation
- 用Vuex.Store的实例方法subscribeAction监听组件中提交action 在store/plugin.js文件中写入

```js
export default function createPlugin(param) {
    return store => {
        store.subscribe((mutation, state) => {
            console.log(mutation.type)//是那个mutation
            console.log(mutation.payload)
            console.log(state)
        })
        // store.subscribeAction((action, state) => {
        //     console.log(action.type)//是那个action
        //     console.log(action.payload)//提交action的参数
        // })
        store.subscribeAction({
            before: (action, state) => {//提交action之前
                console.log(`before action ${action.type}`)
            },
            after: (action, state) => {//提交action之后
                console.log(`after action ${action.type}`)
            }
        })
    }
}
```

在store/index.js中引入

```js
import createPlugin from './plugin'
export default new Vuex.Store({
    plugins: [createPlugin()]
})
```

