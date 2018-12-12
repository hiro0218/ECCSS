const path_layouts = 'docs/layouts';
const path_elements = 'docs/elements';
const path_components = 'docs/components';

module.exports = {
  title: 'ECCSS',
  description: 'ECCSS Project Documentation System',
  themeConfig: {
    repo: 'hiro0218/ECCSS',
    docsDir: 'docs',
    editLinks: true,
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
          `${path_components}/badge`,
          `${path_components}/breadcrumb`,
          `${path_components}/button`,
          `${path_components}/card`,
          `${path_components}/list`,
          `${path_components}/list-group`,
          `${path_components}/menu`,
          `${path_components}/title-group`,
          `${path_components}/table`,
          `${path_components}/form`,
        ],
      },
    ],
  },
};
