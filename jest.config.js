module.exports = {
  roots: ['<rootDir>/src'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleDirectories: ['node_modules', 'src'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/index.tsx'],
  setupTestFrameworkScriptFile: '<rootDir>/src/setupTests.js',
};
