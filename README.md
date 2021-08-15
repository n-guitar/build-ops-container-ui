# build-ops-container-ui

> build-ops-container の nuxt ベースの ui

https://github.com/n-guitar/build-ops-container

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## Notice

- 以下のエラーが出た場合

```js
 ERROR  in ./pages/inspire.vue                                                                                                                                         friendly-errors 18:53:49

Module Error (from ./node_modules/eslint-loader/dist/cjs.js):                                                                                                          friendly-errors 18:53:49

/Users/haku-mai/github/build-ops-container-ui/pages/inspire.vue
  15:12  error  clear  vue/comment-directive

✖ 1 problem (1 error, 0 warnings)
```

- .eslintrc.js で無視する
  - `vue/comment-directive": 0` を追加

```json
(module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "node": true
  },
  "parserOptions": {
    "parser": "babel-eslint"
  },
  "extends": [
    "@nuxtjs",
    "prettier",
    "prettier/vue",
    "plugin:prettier/recommended",
    "plugin:nuxt/recommended"
  ],
  "plugins": ["prettier"],
  // add your custom rules here
  "rules": {
    "vue/comment-directive": 0
  }
})
```
