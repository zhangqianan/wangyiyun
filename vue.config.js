const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "./",
  outputDir: "dist",
  lintOnSave: false,
  productionSourceMap: true,
  configureWebpack: {
    resolve: {
      alias: {
        "views": "@/views",
        "assets":"@/assets",
        "components":"@/components"
      }
    }
  }
})
