module.exports = {
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/_var.scss";`
      }
    }
  },
  devServer:{
    host: 'localhost'
  }
};