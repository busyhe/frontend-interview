import type { DefaultTheme } from 'vitepress';

export function sidebarTypescript(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      base: '/typescript/introduction/',
      items: [
        { text: 'Getting Started', link: 'getting-started' }
      ],
    },
  ];
}
