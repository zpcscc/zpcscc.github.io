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
      },
      theme: {
        customCss: require.resolve('../src/css/custom.scss')
      }
    })
  ]
];

module.exports = presets;
