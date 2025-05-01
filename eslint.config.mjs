import globals from 'globals'
import js from '@eslint/js'
import stylisticJs from '@stylistic/eslint-plugin-js'
import reactPlugin from 'eslint-plugin-react'
import jestPlugin from 'eslint-plugin-jest'

export default [
  {
    ignores: ['dist/**', 'build/**', 'coverage/**'],
  },
  js.configs.recommended,
  reactPlugin.configs.recommended,
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.browser,
        ...jestPlugin.environments.globals,
      },
      ecmaVersion: 'latest',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@stylistic/js': stylisticJs,
      react: reactPlugin,
      jest: jestPlugin,
    },
    rules: {
      '@stylistic/js/indent': ['error', 2],
      '@stylistic/js/linebreak-style': ['error', 'unix'],
      '@stylistic/js/quotes': ['error', 'single'],
      '@stylistic/js/semi': ['error', 'never'],
      eqeqeq: 'error',
      '@stylistic/js/no-trailing-spaces': 'error',
      '@stylistic/js/object-curly-spacing': ['error', 'always'],
      '@stylistic/js/arrow-spacing': ['error', { before: true, after: true }],
      'no-console': 'error',
      'react/prop-types': 0,
    },
  },
  {
    files: ['app.js', 'server/**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
    },
  },
]
