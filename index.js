'use strict'

module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    es2020: true,
    node: true
  },
  reportUnusedDisableDirectives: true,

  extends: ['eslint:recommended'],
  rules: {
    semi: ['error', 'never']
  }
}
