// vue.config.js
module.exports = {
    pwa: {
        name: "Gabriel Serejo - Portfolio",
        short_name: "Gabriel Serejo",
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