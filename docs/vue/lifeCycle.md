# Vue 生命周期的理解

- **beforeCreate**： 实例初始化之初，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。
- **created**: 实例创建完成，属性已绑定，但是 DOM 还未生成，$el 还不可用。
- **beforeMount**: 模板编译/挂载之前被调用。
- **mounted**: 实例已挂载到 DOM 上。
- **beforeUpdate**: 组件更新之前。
- **updated**: 组件更新之后，DOM 已更新。
- **activated**: keep-alive 激活。
- **deactivated**: keep-alive 停用。
- **beforeDestroy**: 实例销毁之前调用。实例仍然可用。
- **destroyed**: 实例销毁后调用。事件监听器、子实例被销毁。

## 整体流程

**beforeCreate -> created**

- 初始化vue实例，进行数据观测

**created**

- 完成数据观测，属性与方法的运算，watch、event事件回调的配置
- 可调用methods中的方法，访问和修改data数据触发响应式渲染dom，可通过computed和watch完成数据计算
- 此时vm.$el 并没有被创建

**created -> beforeMount**

- 判断是否存在el选项，若不存在则停止编译，直到调用vm.$mount(el)才会继续编译
- 优先级：render > template > outerHTML
- vm.el获取到的是挂载DOM的

**beforeMount**

- 在此阶段可获取到vm.el
- 此阶段vm.el虽已完成DOM初始化，但并未挂载在el选项上

**beforeMount -> mounted**

- 此阶段vm.el完成挂载，vm.$el生成的DOM替换了el选项所对应的DOM

**mounted**

- vm.el已完成DOM的挂载与渲染，此刻打印vm.$el，发现之前的挂载点及内容已被替换成新的DOM

**beforeUpdate**

- 更新的数据必须是被渲染在模板上的（el、template、render之一）
- 此时view层还未更新
- 若在beforeUpdate中再次修改数据，不会再次触发更新方法

**updated**

- 完成view层的更新
- 若在updated中再次修改数据，会再次触发更新方法（beforeUpdate、updated）

**beforeDestroy**

- 实例被销毁前调用，此时实例属性与方法仍可访问

**destroyed**

- 完全销毁一个实例。可清理它与其它实例的连接，解绑它的全部指令及事件监听器
- 并不能清除DOM，仅仅销毁实例

## created 和 mounted 的区别

放在mounted中的请求有可能导致页面闪动（因为此时页面dom结构已经生成），但如果在页面加载前完成请求，则不会出现此情况。建议对页面内容的改动放在created生命周期当中。