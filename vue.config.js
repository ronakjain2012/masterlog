module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/masterlog-vue/'
  : '/',
  transpileDependencies: [
    'vuetify'
  ],
  runtimeCompiler: true,
  pwa: {
    name: '@ronakjain2012'
  }
}
