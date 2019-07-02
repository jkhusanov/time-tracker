module.exports = {
  extends: ['airbnb', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: {
    fetch: false,
  },
  plugins: ['react', 'jsx-a11y', 'import', 'react-hooks'],
  rules: {
    'no-use-before-define': 0,
    'react/jsx-filename-extension': 0,
    'react/prefer-stateless-function': 0,
    'no-mixed-operators': 0,
    'arrow-parens': 0,
    'object-curly-newline': 0,
    'comma-dangle': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-unused-vars': ['error', { varsIgnorePattern: '[set]' }],
  },
};
