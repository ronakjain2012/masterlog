module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/masterlog/'
  : '/',
  transpileDependencies: [
    'vuetify'
  ],
  runtimeCompiler: true,
  pwa: {
    name: '@ronakjain2012'
  }
}
