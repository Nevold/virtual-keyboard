module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'eslint:recommended', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-restricted-syntax': 'off',
    'no-unused-expressions': 'off',
    'no-plusplus': 'off',
    'no-console': 'warn',
    'no-multi-assign': 'off',
    'max-len': ['warn', { code: 120 }],
    indent: [
      'warn',
      2,
      {
        SwitchCase: 1,
      },
    ],
    'import/prefer-default-export': 'off',
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
  },
};
