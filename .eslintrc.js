module.exports = {
  extends: require.resolve('@dxsixpc/configs/eslint-config'),
  overrides: [
    {
      files: ['**/*.js'],
      rules: {
        'no-console': 0,
        'global-require': 0
      }
    }
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  }
};
