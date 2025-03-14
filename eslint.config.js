import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: { globals: globals.browser },
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:prettier/recommended', // Добавляем поддержку Prettier
    ],
    rules: {
      'linebreak-style': ['error', 'windows'],
      'prettier/prettier': 'error',
    },
  },
  pluginJs.configs.recommended,
];
