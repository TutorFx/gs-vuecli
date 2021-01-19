// vue.config.js
module.exports = {
    pwa: {
        name: "ITH Pós Graduação",
        short_name: "ITH Pós Graduação",
        appleMobileWebAppCapable: true,
        themeColor: "#001400",
        msTileColor: "#001400",
        manifestOptions: {
          background_color: "#FFF"
        },
        start_url: "./index.html",
        display: "standalone",
      },
      //devServer: {
      //  https: true
      //}
  }