module.exports = {
  extends: '@ericbiewener/eslint-config',
  env: {
    node: true,
    es6: true,
    browser: false,
  },
  overrides: [
    {
      files: ['packages/**/*.{ts,tsx}'],
      extends: '@ericbiewener/eslint-config-typescript',
    },
  ],
}
