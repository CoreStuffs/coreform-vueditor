module.exports = {
<<<<<<< HEAD
  css:{
    extract:false
  },
  lintOnSave: true,
  filenameHashing: false,
  chainWebpack: config => {
    config.optimization.delete('splitChunks')
  }
};
=======
  publicPath: "",
  outputDir: "docs",
  pages: {
    index: {
      // entry for the page
      entry: "src/main.js",
      // the source template
      template: "public/index.html",
      // output as dist/index.html
      filename: "index.html",
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: "Test CoreForm Components",
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ["chunk-vendors", "chunk-common", "index"],
    },
  },
  css: {
    extract: false,
  },
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
  },
};
>>>>>>> cd7377feef2cf2a822deef1e2365253915e8f3d1
