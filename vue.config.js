const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/baidu': {
        target: 'https://aip.baidubce.com',
        changeOrigin: true,
        pathRewrite: { '^/baidu': '' },
        secure: false,
      },
      '/api': {
        target: 'http://localhost:5000', // 假设你有其他后端服务在本地运行
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
        secure: false,
      },
    },
  },
})
