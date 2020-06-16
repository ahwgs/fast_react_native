/*
 * eslint配置
 * @Author: ahwgs
 * @Date: 2020-04-04 23:52:13
 * @Last Modified by: ahwgs
 * @Last Modified time: 2020-04-23 23:49:48
 */
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  root: true,
  extends: ['@react-native-community'],
  plugins: ['react', '@typescript-eslint'],
  settings: {
    'import/resolver': {
      alias: {
        map: [['^@', './src/']],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      },
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  parser: '@typescript-eslint/parser',
  rules: {
    'linebreak-style': [0, 'error', 'windows'],
    'prettier/prettier': 0,
    'react/prefer-stateless-function': [0, {ignorePureComponents: false}],
    'react/jsx-indent': ['error', 2],
    'react/state-in-constructor': 0,
    'react/jsx-curly-newline': 0,
    'key-spacing': 1,
    'comma-spacing': 1,
    'object-curly-spacing': [1, 'always'],
    'arrow-spacing': 1,
    'react-hooks/exhaustive-deps': 0,
    'react-native/no-inline-styles': 0,
    'react/sort-comp': 0,
    'class-methods-use-this': 0,
    'react/static-property-placement': 0,
    'react/forbid-prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx']}],
    'react/prop-types': 'off',
    'react/destructuring-assignment': 'off',
    'max-len': 1,
    'react/no-unused-state': 2,
    'no-undef': 2, //不能有未定义的变量
    'no-use-before-define': 2, //未定义前不能使用
    'react/no-array-index-key': 2, //防止在数组中遍历中使用数组key做索引
    'no-unused-vars': [2, {vars: 'all', args: 'after-used'}], //不能有声明后未被使用的变量或参数
    'react/no-unused-state': 2,
    'no-nested-ternary': 1, //禁止使用嵌套的三目运算
    'react/jsx-filename-extension': [0, {extensions: ['.js', '.jsx']}],
  },
};
