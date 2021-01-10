module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/vue'
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'no-console': 'off',
    'prettier/prettier': [
      'error',
      { singleQuote: true, parser: 'flow', endOfLine: 'auto' },
      {
        usePrettierrc: false
      }
    ],
    'comma-dangle': ['error', 'ignore'],
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'vue/comment-directive': 0
  }
}
