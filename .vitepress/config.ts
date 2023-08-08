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
          { text: 'v-show & v-if 的理解', link: '/v-show&v-if' },
          { text: 'vue 实例挂载的过程', link: '/vue-init' }
        ]
      },
      {
        text: 'JS',
        items: [
          { text: '深拷贝浅拷贝', link: '/deepcopy' },
        ]
      },
      {
        text: 'ES6',
        items: [
          { text: 'var、let、const', link: '/let-const' },
        ]
      },
      {
        text: 'TS',
        items: [
          { text: 'TS 的理解', link: '/ts-introduce' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
