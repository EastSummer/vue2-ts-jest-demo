module.exports = {
  // 前端Server和接口代理
  devServer: {
    host: 'localhost',
    port: 9090,
    proxy: {
      '/api/*': {
        target: 'http://lemall.futurefe.com/',
      },
    },
  },
  // 项目的基本路径
  // publicPath:'/',
  // 项目的生成目录
  outputDir: process.env.outputDir,
  // 文件名是否需要hash
  // filenameHashing:true,
  // 是否启用sourceMap
  // productionSourceMap:true,
  // 警告 webpack 的性能提示
  configureWebpack: {
    performance: {
      hints: 'warning',
      // 入口起点的最大体积 整数类型（以字节为单位）
      maxEntrypointSize: 50000000,
      // 生成文件的最大体积 整数类型（以字节为单位 300k）
      maxAssetSize: 30000000,
      // 只给出 js 文件的性能提示
      assetFilter(assetFilename) {
        return assetFilename.endsWith('.js');
      },
    },
  },
};
