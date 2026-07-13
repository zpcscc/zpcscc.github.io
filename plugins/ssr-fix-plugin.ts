import type { Plugin } from '@docusaurus/types';
import path from 'path';
import webpack from 'webpack';

export default function ssrFixPlugin(): Plugin {
  const srcDir = path.resolve(__dirname, '..', 'src');

  const aliases: Record<string, string> = {
    '@': srcDir,
  };

  return {
    name: 'ssr-fix-plugin',
    configureWebpack(config, isServer) {
      if (isServer) {
        const threeNodeModules = path.resolve(__dirname, '..', 'node_modules', 'three');
        aliases['three/examples/jsm'] = path.join(threeNodeModules, 'examples/jsm');
      }

      if (isServer) {
        config.module = config.module || {};
        config.module.rules = config.module.rules || [];
        config.module.rules.push({ test: /\.s[ac]ss$/i, use: ['null-loader'] });
      }

      config.resolve = config.resolve || {};
      config.resolve.alias = { ...config.resolve.alias, ...aliases };

      if (isServer) {
        config.plugins = config.plugins || [];
        config.plugins.push(
          new webpack.NormalModuleReplacementPlugin(
            /clipboard/,
            require.resolve('./empty-module.js'),
          ),
        );
      }

      // For client build, disable minimization entirely
      if (!isServer) {
        return {
          optimization: {
            minimize: false,
          },
        };
      }

      return {};
    },
  };
}
