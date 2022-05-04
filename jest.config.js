module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  snapshotResolver: '<rootDir>/jest/custom-snapshot-resolver-native.js',
  setupFiles: ['<rootDir>/jest/jest.setup.js'],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native' +
      '|@react-navigation' +
      '|@react-native' +
      '|react-navigation' +
      '/(?!(lib)))',
  ],
  testRegex: '(?<!.web).(?:test|spec).(?:tsx?|js)$',
  testPathIgnorePatterns: [
    '\\.snap$',
    '\\.native-snap$',
    '\\.web-snap$',
    '<rootDir>/node_modules/',
  ],
  clearMocks: true,
};
