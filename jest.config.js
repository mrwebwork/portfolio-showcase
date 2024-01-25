const nextJest = require('next/jest');
const { defaults } = require('jest-config');

/** @type {import('jest').Config} */
const createJestConfig = nextJest({
  dir: './',
});

const config = {
  coverageProvider: 'babel',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
  },
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: [...defaults.moduleFileExtensions],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};

module.exports = createJestConfig(config);
