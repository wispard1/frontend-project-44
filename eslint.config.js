import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: { globals: globals.browser },

    rules: {
      'linebreak-style': ['error', 'windows'],
      'object-curly-newline': [
        'error',
        {
          ObjectExpression: { minProperties: 2, multiline: true }, // Требовать перенос только для объектов с 2+ свойствами
          ObjectPattern: { minProperties: 2, multiline: true },
        },
      ],
    },
  },
  pluginJs.configs.recommended,
];
