module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@navigation': './src/navigation',
          '@localization': './src/localization',
          '@components': './src/components',
          '@assets': './src/assets',
          '@enums': './src/enums',
          '@configs': './src/configs',
          '@themes': './src/themes',
          '@interfaces': './src/interfaces',
          '@hooks': './src/hooks',
          '@validations': './src/validations',
          '@sheets': './src/sheets',
          '@zustands': './src/zustands',
          '@popups': './src/popups',
          '@services': './src/services',
          '@api': './src/api',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
