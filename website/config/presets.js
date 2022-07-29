// @ts-check

const presets = [
  [
    'classic',
    /** @type {import('@docusaurus/preset-classic').Options} */
    ({
      docs: {
        sidebarPath: require.resolve('./sidebars.js'),
        // 是否使用面包屑导航
        breadcrumbs: true,
        // Please change this to your repo.
        // Remove this to remove the "edit this page" links.
        editUrl:
          'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/'
      },
      theme: {
        customCss: require.resolve('../src/css/custom.scss')
      }
    })
  ]
];

module.exports = presets;
