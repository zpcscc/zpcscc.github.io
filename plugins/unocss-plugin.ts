import type { Plugin } from '@docusaurus/types';

export default function unocssPlugin(): Plugin {
  return {
    name: 'docusaurus-unocss-plugin',
    configurePostCss(postcssOptions) {
      postcssOptions.plugins.push(
        require('@unocss/postcss').default(),
      );
      return postcssOptions;
    },
  };
}
