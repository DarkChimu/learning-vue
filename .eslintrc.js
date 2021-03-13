module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'camelcase': 'off',
    'no-trailing-spaces': 'off',
    'strict': 'off',
    'no-tabs': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'indent': 'off',
    'semi': ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'space-before-function-paren': 'off',
    'class-methods-use-this': 'off',
    'global-require': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'no-param-reassign': ['error', { 'props': false }],
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/no-side-effects-in-computed-properties': 'off'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
