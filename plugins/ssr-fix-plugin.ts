import type { Plugin } from '@docusaurus/types';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import webpack from 'webpack';

const pluginDirectory = path.dirname(fileURLToPath(import.meta.url));
const zipCodecRegistryWarning = {
  module: /@zip\.js[\\/]zip\.js[\\/]lib[\\/]core[\\/]codec-registry\.js/,
  message: /Critical dependency: the request of a dependency is an expression/,
};

export default function ssrFixPlugin(): Plugin {
  const srcDir = path.resolve(pluginDirectory, '..', 'src');
  const cesiumBuildDir = path.resolve(
    pluginDirectory,
    '..',
    'node_modules',
    'cesium',
    'Build',
    'Cesium',
  );

  const aliases: Record<string, string> = {
    '@': srcDir,
  };

  return {
    name: 'ssr-fix-plugin',
    configureWebpack(config, isServer) {
      // zip.js 支持通过运行时 URL 注册自定义编解码器，该变量导入无法在构建期静态枚举。
      // 这里只忽略对应第三方模块的已知警告，其他动态依赖警告仍会正常报告。
      config.ignoreWarnings = [...(config.ignoreWarnings || []), zipCodecRegistryWarning];

      if (isServer) {
        const threeNodeModules = path.resolve(pluginDirectory, '..', 'node_modules', 'three');
        aliases['three/examples/jsm'] = path.join(threeNodeModules, 'examples/jsm');
      }

      if (isServer) {
        config.module = config.module || {};
        config.module.rules = config.module.rules || [];
        config.module.rules.push({ test: /\.s[ac]ss$/i, use: ['null-loader'] });
      }

      config.resolve = config.resolve || {};
      config.resolve.alias = { ...config.resolve.alias, ...aliases };

      config.plugins = config.plugins || [];
      config.plugins.push(
        new webpack.DefinePlugin({
          CESIUM_BASE_URL: JSON.stringify('/cesium/'),
        }),
      );

      if (!isServer) {
        config.plugins.push(
          new CopyWebpackPlugin({
            patterns: ['Assets', 'ThirdParty', 'Widgets', 'Workers'].map((directory) => ({
              from: path.join(cesiumBuildDir, directory),
              to: path.join('cesium', directory),
            })),
          }),
        );
      }

      if (isServer) {
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
