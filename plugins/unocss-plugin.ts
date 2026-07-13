import type { Plugin } from '@docusaurus/types';
import path from 'path';

export default function unocssPlugin(): Plugin {
  return {
    name: 'docusaurus-unocss-plugin',
    configurePostCss(postcssOptions) {
      const unocssPostcss = require('@unocss/postcss');
      const plugin = unocssPostcss.default || unocssPostcss;

      postcssOptions.plugins.push(plugin({
        configOrPath: path.resolve(__dirname, '..', 'uno.config.ts'),
      }));

      return postcssOptions;
    },
  };
}