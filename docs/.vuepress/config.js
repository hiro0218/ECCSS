module.exports = {
  title: 'ECCSS',
  description: 'ECCSS Project Documentation System',
  themeConfig: {
    repo: 'https://github.com/hiro0218/ECCSS',
    docsDir: 'docs',
    nav: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Documentation',
        link: '/docs/',
      },
    ],
    '/': {
      sidebar: false,
    },
    sidebar: [
      {
        title: 'Layouts',
        collapsable: false,
        children: ['docs/layouts/column'],
      },
      {
        title: 'Elements',
        collapsable: false,
        children: ['docs/elements/typography'],
      },
      {
        title: 'Components',
        collapsable: false,
        children: ['docs/components/list', 'docs/components/table'],
      },
    ],
  },
};
