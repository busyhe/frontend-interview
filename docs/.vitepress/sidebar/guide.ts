import type { DefaultTheme } from 'vitepress';

export function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Css',
      collapsed: false,
      base: '/guide/css/',
      items: [
        { text: 'BFC', link: 'BFC' },
        { text: 'flex', link: 'flex' },
        { text: '重绘回流', link: 'redrawReflow' },
      ],
    },
    {
      text: 'Vue',
      collapsed: false,
      base: '/guide/vue/',
      items: [
        { text: '组件通信', link: 'communication' },
        { text: 'v-show & v-if 的理解', link: 'v-show&v-if' },
        { text: 'vue 实例挂载的过程', link: 'init' },
        { text: '生命周期', link: 'lifeCycle' },
        { text: '首屏加载', link: 'firstScreen' },
        { text: '双向绑定', link: 'twoWayBinding' },
        { text: 'watch&computed', link: 'watch&computed' },
        { text: 'nextTick', link: 'nextTick' },
        { text: 'KeepAlive', link: 'keepalive' },
        { text: 'observable', link: 'observable' },
        { text: 'key', link: 'key' },
        { text: '自定义指令', link: 'customDirectives' },
        { text: 'vuex', link: 'vuex' },
        { text: 'diff', link: 'diff' },
        { text: 'mixin', link: 'mixin' },
      ],
    },
    {
      text: 'Vue3',
      collapsed: false,
      base: '/guide/vue3/',
      items: [
        { text: 'vue2', link: 'vue2' },
        { text: 'Proxy', link: 'proxy' },
      ],
    },
    {
      text: 'React',
      collapsed: false,
      base: '/guide/react/',
      items: [
        { text: '生命周期', link: 'lifeCycle' },
        { text: 'state&props', link: 'state&props' },
        { text: '类组件和函数组件', link: 'components' },
        { text: '受控组件&非受控组件', link: 'controlledComponents' },
        { text: 'Hooks', link: 'hook' },
      ],
    },
    {
      text: 'JS',
      collapsed: false,
      base: '/guide/js/',
      items: [
        { text: 'null&undefined', link: 'null&undefined' },
        { text: '深拷贝浅拷贝', link: 'deepCopy' },
        { text: 'EventEmitter', link: 'EventEmitter' },
        { text: '防抖节流', link: 'debounce&throttle' },
        { text: '闭包', link: 'closure' },
        { text: '严格模式', link: 'strictMode' },
        { text: '事件循环', link: 'eventLoop' },
        { text: '事件代理', link: 'eventProxy' },
        { text: '内存泄漏', link: 'memoryLeak' },
        { text: '作用域链', link: 'scopeChain' },
        { text: '原型', link: 'prototype' },
        { text: '继承', link: 'inheritance' },
        { text: 'this', link: 'this' },
        { text: 'new', link: 'new' },
        { text: 'typeof&instanceof', link: 'typeof&instanceof' },
        { text: '本地储存', link: 'localStorage' },
        { text: '模块化', link: 'modularization' },
        { text: 'set&map', link: 'setMap' },
        { text: 'call&apply&bind', link: 'callApplyBind' },
        { text: '攻击', link: 'attack' },
        { text: 'ajax', link: 'ajax' },
      ],
    },
    {
      text: 'ES6',
      collapsed: false,
      base: '/guide/es6/',
      items: [
        { text: 'var、let、const', link: 'letConst' },
        { text: '箭头函数', link: 'arrowFunction' },
        { text: 'Promise', link: 'promise' },
        { text: 'Generator', link: 'generator' },
        { text: 'Proxy', link: 'proxy' },
        { text: '装饰器', link: 'decorator' },
      ],
    },
    {
      text: 'TS',
      collapsed: false,
      base: '/guide/ts/',
      items: [
        { text: 'TS 的理解', link: 'introduce' },
        { text: '编译过程', link: 'compilation' },
        { text: 'type&interface', link: 'type&interface' },
        { text: '实用程序类型', link: 'utilityTypes' },
        { text: '装饰器', link: 'decorators' },
        { text: '命名空间与模块', link: 'namespace' },
      ],
    },
    {
      text: 'NodeJS',
      collapsed: false,
      base: '/guide/node/',
      items: [
        { text: '框架对比', link: 'framework' },
        { text: 'Stream', link: 'stream' },
        { text: 'Buffer', link: 'buffer' },
        { text: 'EventEmitter', link: 'eventEmitter' },
        { text: '事件循环', link: 'eventLoop' },
        { text: 'JWT', link: 'JWT' },
        { text: 'koa', link: 'koa' },
      ],
    },
    {
      text: 'Http',
      collapsed: false,
      base: '/guide/http/',
      items: [
        { text: '地址栏', link: 'address' },
        { text: 'DNS', link: 'dns' },
        { text: 'CDN', link: 'cdn' },
        { text: 'TCP&UDP', link: 'TCP&UDP' },
        { text: '2.0', link: '2' },
        { text: '状态码', link: 'status' },
        { text: '缓存', link: 'cache' },
        { text: '跨域', link: 'cross' },
        { text: 'https', link: 'https' },
        { text: 'Websocket', link: 'websocket' },
      ],
    },
    {
      text: 'Webpack',
      collapsed: false,
      base: '/guide/webpack/',
      items: [
        { text: '介绍', link: 'index' },
        { text: 'Loader&plugin', link: 'loader&plugin' },
        { text: '构建流程', link: 'build' },
        { text: '优化前端性能', link: 'frontend' },
        { text: '构建速度', link: 'speed' },
        { text: '热更新', link: 'hot' },
        { text: 'vite', link: 'vite' },
      ],
    },
    {
      text: 'Electron',
      collapsed: false,
      base: '/guide/electron/',
      items: [{ text: '介绍', link: 'index' }],
    },
    {
      text: '设计模式',
      collapsed: false,
      base: '/guide/designPattern/',
      items: [{ text: '介绍', link: 'index' }],
    },
    {
      text: '数据结构和算法',
      collapsed: false,
      base: '/guide/algorithm/',
      items: [
        { text: '算法复杂度', link: 'complexity' },
        { text: '数据结构', link: 'dataStructure' },
        { text: '变量互换', link: 'reverseString' },
        { text: '反转字符串', link: 'variableSwapping' },
        { text: '两数之和', link: 'sumOfTwoNumbers' },
        { text: '发红包算法', link: 'redPacket' },
        { text: 'tree节点状态', link: 'tree' },
        { text: '字母异位词组合', link: 'groupAnagrams' },
        { text: '有效数独', link: 'isValidSudoku' },
        { text: '排序', link: 'sort' },
        { text: '移除元素', link: 'removeElement' },
        {
          text: '删除有序数组中的重复项',
          link: 'removeDuplicatesSortedArray',
        },
        {
          text: '删除有序数组中的重复项2',
          link: 'removeDuplicatesSortedArray2',
        },
      ],
    },
  ];
}
