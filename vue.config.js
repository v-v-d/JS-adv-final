module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/sass/sassVariables.sass";`
      },
    },
  },
};