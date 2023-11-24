import { defineConfig, type DefaultTheme } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FrontEnd-Interview",
  description: "frontend interview",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    // Google Analytics
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-81BX4GWHHN' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-81BX4GWHHN');`
    ]
  ],
  themeConfig: {
    logo: '/logo.jpg',
    search: {
      provider: 'local'
    },
    nav: nav(),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/busyhe/frontend-interview' }
    ],
    sidebar: sidebar()
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: 'Home', link: '/' },
    { text: 'blog', link: 'https://blog.busyhe.com/' },
    { text: 'wiki', link: 'https://wiki.busyhe.com/' },
    { text: 'me', link: 'https://www.busyhe.com/' }
  ]
}

function sidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Css',
      items: [
        { text: 'BFC', link: '/css/BFC' },
        { text: 'opacity、display、visibility', link: '/css/opacityDisplayVisibility' },
      ]
    },
    {
      text: 'Vue',
      items: [
        { text: 'v-show & v-if 的理解', link: '/vue/v-show&v-if' },
        { text: 'vue 实例挂载的过程', link: '/vue/init' },
        { text: 'vue渲染原理', link: '/vue/render' },
        { text: '生命周期', link: '/vue/lifeCycle' },
        { text: '首屏加载', link: '/vue/firstScreen' },
        { text: '双向绑定', link: '/vue/twoWayBinding' },
        { text: 'watch&computed', link: '/vue/watch&computed' },
        { text: 'nextTick', link: '/vue/nextTick' },
        { text: 'observable', link: '/vue/observable' },
        { text: 'key', link: '/vue/key' },
        { text: '自定义指令', link: '/vue/customDirectives' },
        { text: 'vuex', link: '/vue/vuex' },
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
        { text: '类组件和函数组件', link: '/react/components' },
        { text: '受控组件&非受控组件', link: '/react/controlledComponents' },
        { text: 'Hooks', link: '/react/hook' },
      ]
    },
    {
      text: 'JS',
      items: [
        { text: 'null&undefined', link: '/js/null&undefined' },
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
        { text: '模块化', link: '/js/modularization' },
        { text: 'set&map', link: '/js/setMap' },
        { text: 'call&apply&bind', link: '/js/callApplyBind' },
        { text: '攻击', link: '/js/attack' },
      ]
    },
    {
      text: 'ES6',
      items: [
        { text: 'var、let、const', link: '/es6/letConst' },
        { text: '箭头函数', link: '/es6/arrowFunction' },
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
        { text: '编译过程', link: '/ts/compilation' },
        { text: 'type&interface', link: '/ts/type&interface' },
        { text: '实用程序类型', link: '/ts/utilityTypes' },
        { text: '装饰器', link: '/ts/decorators' },
        { text: '命名空间与模块', link: '/ts/namespace' },
      ]
    },
    {
      text: 'NodeJS',
      items: [
        { text: '框架对比', link: '/node/framework' },
        { text: 'Stream', link: '/node/stream' },
        { text: 'Buffer', link: '/node/buffer' },
        { text: 'EventEmitter', link: '/node/eventEmitter' },
        { text: '事件循环', link: '/node/eventLoop' },
        { text: 'JWT', link: '/node/JWT' },
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
        { text: '缓存', link: '/http/cache' },
        { text: 'https', link: '/http/https' },
        { text: 'Websocket', link: '/http/https/websocket' },
      ]
    },
    {
      text: 'Webpack',
      items: [
        { text: '介绍', link: '/webpack/index' },
        { text: 'Loader&plugin', link: '/webpack/loader&plugin' },
        { text: '构建流程', link: '/webpack/build' },
        { text: '优化前端性能', link: '/webpack/frontend' },
        { text: '构建速度', link: '/webpack/speed' },
        { text: '热更新', link: '/webpack/hot' },
        { text: 'vite', link: '/webpack/vite' },
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
    },
    {
      text: 'build',
      items: [
        { text: '性能优化', link: '/build/performance' },
      ]
    },
    {
      text: '算法',
      items: [
        { text: '数据结构', link: '/algorithm/dataStructure' },
        { text: '变量互换', link: '/algorithm/reverseString' },
        { text: '反转字符串', link: '/algorithm/variableSwapping' },
        { text: "两数之和", link: '/algorithm/sumOfTwoNumbers' },
        { text: "发红包算法", link: '/algorithm/redPacket' },
        { text: "tree节点状态", link: '/algorithm/tree' },
        { text: "字母异位词组合", link: '/algorithm/groupAnagrams' },
        { text: "有效数独", link: '/algorithm/isValidSudoku' },
        { text: "排序", link: '/algorithm/sort' },
      ]
    }
  ]
}
