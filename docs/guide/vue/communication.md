# 组件如何通信

- props/events 父子通信，子组件不能修改props，可以通过update事件通知父组件修改
- $emit/on 事件总线，兄弟组件通信。要注意解绑事件，难以追踪。
- parent/children 与 ref：父子组件通信，父组件通过ref获取子组件实例，子组件通过$parent获取父组件实例
- attrs 与 listeners：父子组件通信，父组件通过v-bind="$attrs"传递所有属性，子组件通过v-on="$listeners"传递所有事件
- provide/inject：祖先与后代通信，祖先通过provide提供数据，后代通过inject注入数据，用于开发高阶插件和组件库
- vuex：全局状态管理