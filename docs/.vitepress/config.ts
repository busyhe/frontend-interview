import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FrontEnd-Interview",
  description: "frontend interview",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: [
      {
        text: 'Vue',
        items: [
          { text: 'v-show & v-if 的理解', link: '/vue/v-show&v-if' },
          { text: 'vue 实例挂载的过程', link: '/vue/init' },
          { text: '生命周期', link: '/vue/lifeCycle' },
          { text: '首屏加载', link: '/vue/firstScreen' },
          { text: '双向绑定', link: '/vue/twoWayBinding' },
          { text: 'nextTick', link: '/vue/nextTick' },
          { text: 'observable', link: '/vue/observable' },
          { text: 'key', link: '/vue/key' },
          { text: '自定义指令', link: '/vue/customDirectives' },
        ]
      },
      {
        text: 'Vue3',
        items: [
          { text: 'Proxy', link: '/vue3/proxy' },
        ]
      },
      {
        text: 'React',
        items: [
          { text: '生命周期', link: '/react/lifeCycle' },
          { text: 'state&props', link: '/react/state&props' },
          { text: 'setState', link: '/react/setState' },
          { text: '类组件和函数组件', link: '/react/components' },
          { text: '受控组件&非受控组件', link: '/react/controlledComponents' },
          { text: 'Hooks', link: '/react/hook' },
        ]
      },
      {
        text: 'JS',
        items: [
          { text: '深拷贝浅拷贝', link: '/js/deepCopy' },
          { text: '防抖节流', link: '/js/debounce&throttle' },
          { text: '闭包', link: '/js/closure' },
          { text: '严格模式', link: '/js/strictMode' },
          { text: '事件循环', link: '/js/eventLoop' },
          { text: '事件代理', link: '/js/eventProxy' },
          { text: '内存泄漏', link: '/js/memoryLeak' },
          { text: '作用域链', link: '/js/scopeChain' },
          { text: '原型', link: '/js/prototype' },
          { text: '继承', link: '/js/inheritance' },
          { text: 'this', link: '/js/this' },
          { text: 'typeof&instanceof', link: '/js/typeof&instanceof' },
          { text: '本地储存', link: '/js/localStorage' },
          { text: '交换a&b', link: '/js/a&b' },
        ]
      },
      {
        text: 'ES6',
        items: [
          { text: 'var、let、const', link: '/es6/letConst' },
          { text: 'Promise', link: '/es6/promise' },
          { text: 'Generator', link: '/es6/generator' },
          { text: 'Proxy', link: '/es6/proxy' },
          { text: '装饰器', link: '/es6/decorator' },
        ]
      },
      {
        text: 'TS',
        items: [
          { text: 'TS 的理解', link: '/ts/introduce' },
          { text: '数据类型', link: '/ts/dataType' },
          { text: '实用程序类型', link: '/ts/utilityTypes' },
          { text: '装饰器', link: '/ts/decorators' },
          { text: '命名空间与模块', link: '/ts/namespace' },
        ]
      },
      {
        text: 'NodeJS',
        items: [
          { text: 'Stream', link: '/node/stream' },
          { text: 'Buffer', link: '/node/buffer' },
          { text: 'EventEmitter', link: '/node/eventEmitter' },
          { text: '事件循环', link: '/node/eventLoop' },
        ]
      },
      {
        text: 'Http',
        items: [
          { text: '地址栏', link: '/http/address' },
          { text: 'DNS', link: '/http/dns' },
          { text: 'CDN', link: '/http/cdn' },
          { text: '2.0', link: '/http/2' },
          { text: '状态码', link: '/http/status' },
        ]
      },
      {
        text: '算法',
        items: [
          { text: '数据结构', link: '/algorithm/dataStructure' },
        ]
      },
      {
        text: 'Webpack',
        items: [
          { text: '介绍', link: '/webpack/index' },
          { text: 'Loader', link: '/webpack/loader' },
          { text: '构建流程', link: '/webpack/build' },
          { text: '优化前端性能', link: '/webpack/frontend' },
          { text: '构建速度', link: '/webpack/speed' },
        ]
      },
      {
        text: 'Electron',
        items: [
          { text: '介绍', link: '/electron/index' },
        ]
      },
      {
        text: '设计模式',
        items: [
          { text: '介绍', link: '/designPattern/index' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
