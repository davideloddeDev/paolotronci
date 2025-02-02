module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2020: true
  },
  overrides: [
    {
      files: ['vite.config.js'], // Applica le regole solo al file vite.config.js
      rules: {
        'no-undef': 'off', // Disabilita la regola 'no-undef' per questo file
      },
    },
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
