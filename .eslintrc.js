module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    'jest/globals': true
  },
  extends: ['standard'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'jest'],
  rules: {
    semi: [2, 'always'],
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': ['error']
  }
};
