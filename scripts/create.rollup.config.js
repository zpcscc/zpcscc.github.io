import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import eslint from '@rollup/plugin-eslint'
import path from 'path';

const outputDir = 'dist';

// 创建rollupConfig
export const createConfig = (pakg) => {
  return {
    input: path.resolve(__dirname, 'src/index.tsx'),
    output: [
      // 打包为commonJS模块
      {
        dir: path.resolve(__dirname, 'dist'),
        format: 'cjs'
      },
      // 打包为ES6模块
      {
        file: path.resolve(__dirname, `${outputDir}/index.esm.js`),
        format: 'esm'
      }
    ],
    watch: {
      include: 'src/**',
      exclude: 'src/__tests__/**'
    },
    external: pakg.dependencies && Object.keys(pakg.dependencies),
    plugins: [
      resolve({ browser: true }),
      postcss({
        modules: true, // 增加 css-module 功能
        extensions: ['.less', '.css'],
        use: [
          [
            'less',
            {
              javascriptEnabled: true
            }
          ]
        ],
        inject: true, // dev 环境下的 样式是入住到 js 中的，其他环境不会注入
        extract: false // 无论是 dev 还是其他环境这个配置项都不做 样式的抽离
      }),
      eslint(),
      commonjs(),
      typescript({
        declaration: true,
        declarationDir: outputDir
      }),
      // 将es6及以上转为es5
      babel({
        babelHelpers: 'bundled',
        // 排除node_modules 下的文件
        exclude: 'node_modules/**'
      })
    ]
  };
};
