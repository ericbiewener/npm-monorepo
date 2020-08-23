module.exports = {
  extends: ['eslint:recommended', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': [2, 'unix'],
    quotes: [2, 'single', { avoidEscape: true }],
    semi: [2, 'never'],
    'no-console': 0,
    'prefer-const': 2,
    'object-curly-spacing': [2, 'always'],
    'comma-dangle': [
      2,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
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
