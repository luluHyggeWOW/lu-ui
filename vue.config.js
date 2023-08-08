// vue.config.js
const path = require('path')
module.exports = {
  lintOnSave: false,
  pages: {
    index: {
      entry: 'examples/main.ts',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  // 扩展webpack配置，使packages加入编译
  chainWebpack: config => {
    config.module
      .rule('js')
      .include.add(path.resolve(__dirname, 'packages')).end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        return options
      })
  }
}
