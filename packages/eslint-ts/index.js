module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'ericbiewener',
    'prettier/@typescript-eslint',
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'no-undef': 0, // TS reports this itself
    'interface-over-type-literal': 0,
    'require-array-sort-compare': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars-experimental': [
      'error',
      { ignoreArgsIfArgsAfterAreUsed: true },
    ],
    '@typescript-eslint/prefer-interface': 0,
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: false },
    ],
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      { accessibility: 'no-public' },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'no-unused-expressions': 0,
    '@typescript-eslint/no-unused-expressions': 2,
    '@typescript-eslint/ban-ts-comment': 0,
  },
  overrides: [
    {
      files: ['**/*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 0,
      },
    },
  ],
}
