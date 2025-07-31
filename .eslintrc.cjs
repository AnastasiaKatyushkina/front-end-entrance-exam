module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'vue'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/essential',
    'prettier',
  ],
  env: {
    browser: true,
    es2021: true,
  },
  rules: {
    'no-console': 'error',
    'no-debugger': 'error',
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'no-var': 'error',
    'prefer-const': 'warn',
    eqeqeq: ['error', 'always'],

    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'only-multiline'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'space-before-function-paren': ['error', 'never'],

    curly: ['error', 'all'],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'max-len': ['warn', { code: 100 }],
    'arrow-parens': ['error', 'always'],
    'no-trailing-spaces': 'error',

    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',

    'vue/multi-word-component-names': 'off',
    'vue/html-indent': ['error', 2],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 3,
        multiline: 1,
      },
    ],
  },
};
