/** @type {import('jest').Config} */
module.exports = {
  rootDir: './',
  modulePaths: ['<rootDir>'],
  testMatch: ['<rootDir>/src/utils/**/__test__/**/*.test.ts'],
  testEnvironment: 'node',
  verbose: true,
  // 是否开启测试报告。可以在这里开启，或者使用 jest --coverage
  collectCoverage: false,
  // 指定测试报告需要包含和排除的文件
  collectCoverageFrom: [
    './src/utils/**/*.ts',
    '!./src/utils/**/{type}.ts',
    '!./src/utils/{index,types,typings.d}.ts',
  ],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  transform: {
    '^.+\\.[cm]?[jt]sx?$': ['babel-jest', { configFile: './babel-jest.config.cjs' }],
  },
};
