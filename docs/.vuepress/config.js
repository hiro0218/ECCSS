const path_layouts = 'docs/layouts';
const path_elements = 'docs/elements';
const path_components = 'docs/components';

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
        children: [`${path_layouts}/column`],
      },
      {
        title: 'Elements',
        collapsable: false,
        children: [`${path_elements}/typography`],
      },
      {
        title: 'Components',
        collapsable: false,
        children: [
          `${path_components}/alert`,
          `${path_components}/breadcrumb`,
          `${path_components}/button`,
          `${path_components}/list`,
          `${path_components}/table`,
          `${path_components}/form`,
        ],
      },
    ],
  },
};
