<template>
  <div class="mb-5">
      <div class="emconstrucao-guia text-center">
          <div id="emconstrucao"></div>
      </div>
      <div>
          <h4 class="text-center"> <b> A página que você acessou está sendo construída,</b><br>novidades em breve!</h4>
      </div>
  </div>
</template>

<script>
import lottie from "lottie-web";

export default { 

    created: function(){
    this.anim = lottie.loadAnimation({
      container: document.getElementById('emconstrucao'), // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://assets4.lottiefiles.com/packages/lf20_g4briscn.json' // the path to the animation json
    });
    window.scrollTo(document.getElementById('emconstrucao').offsetLeft,document.getElementById('emconstrucao').offsetTop);
    }
}
</script>

<style>

</style>