const path = require('path')

const globTs = basePath => path.join(basePath, '**/*.{ts,tsx}')

module.exports = {
  extends: '@ericbiewener/eslint-config',
  env: {
    node: true,
    es6: true,
    browser: false,
  },
  overrides: [
    {
      files: [globTs('packages'), globTs('scripts')],
      extends: '@ericbiewener/eslint-config-typescript',
    },
    {
      files: ['**/*.test.{ts,tsx}'],
      env: {
        jest: true,
      },
    },
  ],
}
