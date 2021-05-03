module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  collectCoverageFrom: [
    'src/components/**/*.{js,jsx}',
    'src/containers/**/*.{js,jsx}',
    'src/pages/**/*.{js,jsx}',
  ],
  coverageThreshold: {
    global: {
      statements: 50,
      branches: 50,
      functions: 50,
      lines: 50,
    },
  },
  coverageDirectory: 'coverage',
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '.*\\.(css|less|styl|scss|sass)$': '<rootDir>/internals/mocks/cssModule.js',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/internals/mocks/image.js',
  },
  // Indicates whether each individual test should be reported during the run
  verbose: false,
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/js-jest"
  },
  setupFilesAfterEnv: ['<rootDir>src/setupTests.js'],
  setupFiles: ['raf/polyfill'],
  testRegex: 'tests/.*\\.test\\.js$',
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
