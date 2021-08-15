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
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'vue/comment-directive': 0,
    'no-console': 'off', //console.log();OK
    'no-unused-vars': 'off', //使っていない変数あってもOK
    'vue/html-self-closing': 'off', //imgタグのようにタグが１つで完結してもOK
    'prettier/prettier': [
      'error',
      {
        htmlWhitespaceSensitivity: 'ignore' //aタグの羅列などで変な風にならないように追記
      }
    ]
  }
}
