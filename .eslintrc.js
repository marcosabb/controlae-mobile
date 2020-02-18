module.exports = {
  env: {
    es6: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'standard-react'
  ],
  globals: {
    __DEV__: true,
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/display-name': 0,
    'react/prop-types': [2, {
      ignore: ['tintColor']
    }]
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathSuffix: 'src'
      }
    }
  }
}
