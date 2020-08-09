/**
 * Can't extend the actual package (@ericbiewener/eslint-config) since ESLint give us no way to link
 * that to the local version inside `packages`.
 */

module.exports = {
  // Main config is just for normal *.js files
  extends: './packages/eslint-js/index.js', // Must start with `.` for eslint to recognize it as a path rather than a module
  env: {
    node: true,
    es6: true,
    browser: false,
  },
  overrides: [
    // Typescript Config
    {
      files: ['packages/**/*{ts,tsx}', 'scripts/**/*{ts,tsx}'],
      extends: './packages/eslint-ts/index.js',
    },
    // Test Config
    {
      files: ['**/*.test.{ts,tsx}'],
      env: {
        jest: true,
      },
    },
  ],
}
