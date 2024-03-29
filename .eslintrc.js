module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  rules: {
    'no-console': 0,
    'no-unused-vars': 1
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
