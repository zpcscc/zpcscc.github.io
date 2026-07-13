// ESLint 9 Flat Config - 项目配置
// @ts-check
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import importXPlugin from 'eslint-plugin-import-x';
import unicornPlugin from 'eslint-plugin-unicorn';
import promisePlugin from 'eslint-plugin-promise';
import eslintCommentsPlugin from '@eslint-community/eslint-plugin-eslint-comments';
import globals from 'globals';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

export default tseslint.config(
  // ===== 基础推荐规则 =====
  js.configs.recommended,

  // ===== TypeScript =====
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: { jsx: true },
        project: ['./tsconfig.json'],
      },
    },
    settings: {
      'import-x/resolver': {
        typescript: true,
        node: true,
      },
    },
  },

  // ===== Import-X =====
  importXPlugin.flatConfigs.recommended,
  importXPlugin.flatConfigs.typescript,

  // ===== Unicorn =====
  unicornPlugin.configs['flat/recommended'],

  // ===== Promise =====
  promisePlugin.configs['flat/recommended'],

  // ===== ESLint Comments =====
  {
    plugins: {
      '@eslint-community/eslint-comments': eslintCommentsPlugin,
    },
    rules: {
      '@eslint-community/eslint-comments/disable-enable-pair': 'error',
      '@eslint-community/eslint-comments/no-aggregating-enable': 'error',
      '@eslint-community/eslint-comments/no-duplicate-disable': 'error',
      '@eslint-community/eslint-comments/no-unlimited-disable': 'error',
      '@eslint-community/eslint-comments/no-unused-enable': 'error',
    },
  },

  // ===== React =====
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],

  // React Hooks（使用 FlatCompat 兼容旧格式）
  ...compat.config(reactHooksPlugin.configs.recommended),

  // JSX A11y
  jsxA11yPlugin.flatConfigs.recommended,

  // ===== 全局变量 + 环境 =====
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.commonjs,
        ...globals.jest,
        // 自定义全局类型
        Any: 'readonly',
        AnyArray: 'readonly',
        AnyObject: 'readonly',
        AnyFunction: 'readonly',
        NodeJS: 'readonly',
      },
    },
  },

  // ===== 自定义 Rules =====
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // --- TypeScript 规则 ---
      '@typescript-eslint/array-type': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/consistent-type-assertions': 'off',
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { fixStyle: 'inline-type-imports' },
      ],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-confusing-void-expression': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/no-redeclare': 'error',
      '@typescript-eslint/no-unused-expressions': [
        'error',
        { allowShortCircuit: true, allowTernary: true },
      ],
      '@typescript-eslint/non-nullable-type-assertion-style': 'off',
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/prefer-nullish-coalescing': 'off',
      '@typescript-eslint/promise-function-async': 'off',
      '@typescript-eslint/restrict-plus-operands': 'off',
      '@typescript-eslint/restrict-template-expressions': 'off',
      '@typescript-eslint/return-await': 'off',
      '@typescript-eslint/strict-boolean-expressions': 'off',
      '@typescript-eslint/triple-slash-reference': 'off',

      // --- Import-X 规则 ---
      'import-x/named': 'off',
      'import-x/export': 'off',
      'import-x/extensions': 'off',
      'import-x/no-cycle': 'off',
      'import-x/no-extraneous-dependencies': 'off',
      'import-x/no-named-as-default': 'off',
      'import-x/no-relative-packages': 'off',
      'import-x/no-unresolved': 'off',
      'import-x/prefer-default-export': 'off',
      'import-x/no-duplicates': 'error',

      // --- Unicorn 规则 ---
      'unicorn/consistent-destructuring': 'off',
      'unicorn/consistent-function-scoping': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/new-for-builtins': 'off',
      'unicorn/no-array-callback-reference': 'off',
      'unicorn/no-array-for-each': 'off',
      'unicorn/no-array-reduce': 'off',
      'unicorn/no-new-array': 'off',
      'unicorn/no-null': 'off',
      'unicorn/numeric-separators-style': 'off',
      'unicorn/prefer-module': 'off',
      'unicorn/filename-case': 'off',

      // --- ESLint Comments 规则 ---
      'eslint-comments/disable-enable-pair': 'off',

      // --- Promise 规则 ---
      'promise/always-return': 'off',
      'promise/catch-or-return': 'off',

      // --- React 规则 ---
      'react/destructuring-assignment': 'off',
      'react/jsx-uses-react': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/self-closing-comp': 'warn',
      'react/sort-comp': 'off',
      'react/no-access-state-in-setstate': 'off',
      'react/no-unknown-property': ['error', { ignore: ['css'] }],
      'react-hooks/exhaustive-deps': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/interactive-supports-focus': 'off',

      // --- 基础规则 ---
      'arrow-body-style': 'off',
      curly: ['error', 'multi-line'],
      'default-param-last': 'off',
      'no-console': 'off',
      'no-continue': 'off',
      'no-implicit-coercion': ['error'],
      'no-return-await': 'off',
      'no-unused-expressions': 'off',
      'space-before-function-paren': 'off',
      'array-bracket-spacing': ['error', 'never'],
      'arrow-parens': ['error', 'always'],
      'arrow-spacing': ['error', { after: true, before: true }],
      camelcase: 'off',
      'consistent-return': 'off',
      'class-methods-use-this': 'off',
      'default-case-last': ['error'],
      'eol-last': ['error'],
      eqeqeq: 'error',
      'func-names': ['warn', 'never', { generators: 'as-needed' }],
      'func-style': ['error'],
      'keyword-spacing': ['error'],
      'lines-between-class-members': 'off',
      'max-classes-per-file': 'off',
      'max-len': 'off',
      'no-bitwise': ['error'],
      'no-class-assign': ['error'],
      'no-cond-assign': ['error', 'except-parens'],
      'no-const-assign': ['error'],
      'no-constructor-return': ['error'],
      'no-dupe-class-members': ['error'],
      'no-else-return': ['error'],
      'no-eval': ['error'],
      'no-inner-declarations': 'off',
      'no-labels': ['error'],
      'no-lonely-if': ['error'],
      'no-new': ['error'],
      'no-promise-executor-return': ['error'],
      'no-param-reassign': ['error', { props: false }],
      'no-plusplus': 'off',
      'no-return-assign': ['error', 'except-parens'],
      'no-shadow': 'off',
      'no-mixed-spaces-and-tabs': ['error'],
      'no-multi-assign': 'off',
      'no-multiple-empty-lines': ['error'],
      'no-nested-ternary': 'off',
      'no-spaced-func': 'error',
      'no-trailing-spaces': ['error'],
      'no-use-before-define': 'off',
      'no-useless-computed-key': ['error'],
      'no-useless-concat': ['error'],
      'no-useless-constructor': 'off',
      'no-useless-return': ['error'],
      'no-useless-rename': ['error'],
      'no-undef': ['error'],
      'no-unexpected-multiline': ['error'],
      'no-unreachable-loop': ['error'],
      'no-unneeded-ternary': ['error'],
      'no-unused-vars': ['error', { args: 'none', vars: 'all' }],
      'no-var': ['error'],
      'no-void': ['error'],
      'object-shorthand': ['error', 'always', { avoidQuotes: true, ignoreConstructors: false }],
      'prefer-arrow-callback': ['error', { allowNamedFunctions: false, allowUnboundThis: true }],
      'prefer-const': ['error'],
      'prefer-destructuring': 'off',
      'prefer-rest-params': ['error'],
      'prefer-template': ['error'],
      quotes: ['error', 'single'],
      'require-atomic-updates': ['error'],
      semi: ['error', 'always'],
      'space-before-blocks': ['error', 'always'],
      'space-in-parens': ['error', 'never'],
      'space-unary-ops': ['error', { nonwords: false, overrides: {} }],
      'symbol-description': ['error'],
      'template-curly-spacing': ['error', 'never'],
    },
  },

  // ===== 忽略文件 =====
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/docs-dist/**',
      '**/.dumi/**',
      '**/*.d.ts',
      '**/*.min.js',
      '**/*.build.js',
      '**/*.built.js',
      '**/*.config.js',
      '**/*.config.ts',
    ],
  },
);
