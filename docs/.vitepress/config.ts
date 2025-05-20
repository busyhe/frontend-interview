import { defineConfig, type DefaultTheme } from 'vitepress';
import { sidebarGuide, sidebarTypescript } from './sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'FrontEnd-Interview',
  description: 'frontend interview',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    // Google Analytics
    [
      'script',
      {
        async: '',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-81BX4GWHHN',
      },
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-81BX4GWHHN');`,
    ],
  ],
  themeConfig: {
    logo: '/logo.jpg',
    search: {
      provider: 'local',
    },
    nav: nav(),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/busyhe/frontend-interview' },
    ],
    sidebar: {
      '/guide/': { base: '/guide/', items: sidebarGuide() },
      '/typescript/': { base: '/typescript/', items: sidebarTypescript() }
    },
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: 'Home', link: '/guide/', activeMatch: '/guide/' },
    { text: 'Typescript', link: '/typescript/', activeMatch: '/typescript/' },
    { text: 'blog', link: 'https://blog.busyhe.com/' },
    { text: 'wiki', link: 'https://wiki.busyhe.com/' },
    { text: 'me', link: 'https://www.busyhe.com/' },
  ];
}


