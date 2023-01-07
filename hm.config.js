const path = require('path')
module.exports = {
  type: 'hummer',
  webpack: {
    // entries: "src/*/index.ts",
    entry: {
      Index:"./src/index/index.ts",
      ViewPager:'./src/ViewPager/index.ts'
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: "[name].js"
    },
    plugins: []
  }
}