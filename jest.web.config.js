const base = require('./jest.config');

module.exports = {
  ...base,
  preset: 'react-native-web',
  testEnvironment: 'jest-environment-jsdom',
  snapshotResolver: '<rootDir>/jest/custom-snapshot-resolver-web.js',
  setupFiles: ['react-native-web/jest/setup.js', ...base.setupFiles],
  setupFilesAfterEnv: ['<rootDir>/jest/jest.web.setupAfterEnv.js'],
  testRegex: '(?<!.(?:native|ios|android)).(?:test|spec).(?:tsx?|js)$',
  moduleFileExtensions: [
    'web.tsx',
    'web.ts',
    'web.js',
    'web.jsx',
    ...base.moduleFileExtensions,
  ],
  moduleNameMapper: {
    ...base.moduleNameMapper,
    '^react-native$': 'react-native-web',
    '^react-native-svg$': 'react-native-svg-web',
    '^react-native-linear-gradient$': 'react-native-web-linear-gradient',
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>jest/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/jest/__mocks__/fileMock.js',
    'react-native-fast-image': '<rootDir>/__mocks__/fragmentMock.ts',
  },
  testPathIgnorePatterns: [
    ...base.testPathIgnorePatterns,
    '.*(/tests?/.*.(native|ios|android).(test|spec)).(tsx?)$',
  ],
  transform: {
    ...base.transform,
  },
  verbose: true,
  globals: {
    __DEV__: true,
  },
};
