<template id="hero">
  <div id="subheader" class="subheader-size">
    <div class="animation-c" id="bodymovin"></div>
    <div class="subheader-base">
      <div class="container subheader-container">
        <div class="row subheader-row subheader-size py-5">
          <div
            class="mp-5 col-sm-12 col-md-8 col-xs-12 order-md-1 animation-text-container d-flex align-items-center"
          >
            <div>
              <h5 class="text-light">Sem rótulo, só Serejo.</h5>
              <h1 class="text-light h1">
                <b>
                  Olá, sou <span class="text-primary">Gabriel Serejo</span>,
                  seja bem-vindo.</b
                >
              </h1>
            </div>
          </div>
          <div
            class="col-md-4 col-sm-12 col-xs-12 order-md-2 d-flex align-items-center animation-text-container2"
          >
            <div class="circle overflow-hidden my-2 js-button">
              <img
                :src="require('@/assets/img/foto-pessoal/me.jpg')"
                alt="Foto pessoal do Gabriel Serejo"
                class=""
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import lottie from "lottie-web";

export default {
  mounted(){
    this.anim = lottie.loadAnimation({
      container: document.getElementById('bodymovin'), // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: `${this.publicPath}hero.json`, // the path to the animation json
    });
  },
  created(){
  },    
  data() {
        return {
            publicPath: process.env.BASE_URL,
        }
    }
}
</script>

<style>
svg{
    width: auto!important;
}
</style>
