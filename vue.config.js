// vue.config.js
module.exports = {
  //devServer: {
  //  https: true
  //}
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
}
