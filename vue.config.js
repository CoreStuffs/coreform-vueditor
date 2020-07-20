module.exports = {
  css: {
    extract: true,
  },
  lintOnSave: true,
  filenameHashing: false,
  chainWebpack: (config) => {
    config.optimization.delete("splitChunks");
  },
};
