import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: { globals: globals.browser },
    rules: {
      'linebreak-style': ['error', 'windows'],
      'operator-linebreak': 'off',
    },
  },
  pluginJs.configs.recommended,
];
