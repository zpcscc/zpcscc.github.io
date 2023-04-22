// @ts-check
/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: require.resolve('@dxsixpc/configs/eslint-config/react'),
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  overrides: [
    {
      files: ['**/*.js'],
      rules: {
        'no-console': 0,
        'global-require': 0,
      },
    },
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  rules: {
    'react/jsx-uses-react': 'error',
  },
};
