module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './src',
        },
      },
    ],
    ['import', { libraryName: '@ant-design/react-native' }], // 与 Web 平台的区别是不需要设置 style
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
};
