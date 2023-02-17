module.exports = {
  chainWebpack: config => config.resolve.symlinks(false),
  devServer: {
    proxy: 'https://service.dayvue.health',
  },
  transpileDependencies: [
    'vuetify'
  ]
}
