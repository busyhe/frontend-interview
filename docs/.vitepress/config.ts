import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FrontEnd-Interview",
  description: "frontend interview",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs' }
    ],

    sidebar: [
      {
        text: 'Vue',
        items: [
          { text: 'v-show & v-if 的理解', link: '/vue-v-show&v-if' },
          { text: 'vue 实例挂载的过程', link: '/vue-init' },
          { text: '生命周期', link: '/vue-lifeCycle' },
          { text: '首屏加载', link: '/vue-firstScreen' },
          { text: '双向绑定', link: '/vue-twoWayBinding' },
          { text: 'nextTick', link: '/vue-nextTick' },
          { text: 'observable', link: '/vue-observable' },
          { text: 'key', link: '/vue-key' },
          { text: '自定义指令', link: '/vue-customDirectives' },
        ]
      },
      {
        text: 'JS',
        items: [
          { text: '深拷贝浅拷贝', link: '/js-deepCopy' },
          { text: '闭包', link: '/js-closure' },
          { text: '严格模式', link: '/js-strictMode' },
          { text: '事件循环', link: '/js-eventLoop' },
          { text: '事件代理', link: '/js-eventProxy' },
          { text: '内存泄漏', link: '/js-memoryLeak' },
          { text: '作用域链', link: '/js-scopeChain' },
          { text: '原型', link: '/js-prototype' },
          { text: '继承', link: '/js-inheritance' },
        ]
      },
      {
        text: 'ES6',
        items: [
          { text: 'var、let、const', link: '/es6-letConst' },
          { text: 'Promise', link: '/es6-promise' },
        ]
      },
      {
        text: 'TS',
        items: [
          { text: 'TS 的理解', link: '/ts-introduce' },
          { text: '数据类型', link: '/ts-dataType' },
          { text: '实用程序类型', link: '/ts-utilityTypes' },
          { text: '装饰器', link: '/ts-decorators' },
        ]
      },
      {
        text: 'NodeJS',
        items: [
          { text: 'Stream', link: '/node-stream' },
          { text: 'Buffer', link: '/node-buffer' },
          { text: 'EventEmitter', link: '/node-eventEmitter' },
          { text: '事件循环', link: '/node-eventLoop' },
        ]
      },
      {
        text: 'Electron',
        items: [
          { text: '介绍', link: '/electron' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
