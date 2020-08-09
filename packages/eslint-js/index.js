module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  plugins: ['react-hooks'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    indent: [2, 2, { SwitchCase: 1 }],
    'linebreak-style': [2, 'unix'],
    quotes: [2, 'single', { avoidEscape: true }],
    semi: [2, 'never'],
    'no-console': 0,
    'prefer-const': 2,
    'object-curly-spacing': [2, 'always'],
    'comma-dangle': [2, 'always-multiline'],
    'no-cond-assign': 0,
    'no-throw-literal': 2,
    'no-unused-vars': [2, { ignoreRestSiblings: true }],
    'no-unused-expressions': 2,
    'no-unexpected-multiline': 2,
    'no-prototype-builtins': 0,
    'max-len': [
      2,
      {
        code: 100,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],

    // React
    'react/prop-types': 0,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 2,
  },
  overrides: [
    {
      files: ['**/*.test.{js,jsx,ts,tsx}', '**/testUtils.{js,jsx,ts,tsx}'],
      env: {
        jest: true,
      },
      rules: {
        'no-empty': 0,
        'max-nested-callbacks': 0,
      },
    },
  ],
}
