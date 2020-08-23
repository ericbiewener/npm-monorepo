module.exports = {
  extends: ['plugin:react/recommended', '@ericbiewener/eslint-config-typescript'],
  plugins: ['@typescript-eslint', 'react-hooks'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // packages glob supports monorepo
    project: ['./tsconfig.json', './packages/**/tsconfig.json'],
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
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
    '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false }],
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'no-unused-expressions': 0,
    '@typescript-eslint/no-unused-expressions': 2,
    '@typescript-eslint/ban-ts-comment': 0,

    // React
    'react/prop-types': 0,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 2,
  },
  overrides: [
    {
      files: ['**/*.test.{ts,tsx}', '**/testUtils.{ts,tsx}'],
      env: {
        jest: true,
      },
      rules: {
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-object-literal-type-assertion': 0,
      },
    },
  ],
}