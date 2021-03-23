<template>
  <div>

        <div class="anim-institucional">
            <div class="overlay"></div>
            <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                <source :src="require('@/assets/videos/institucional.mp4')" type="video/mp4">
            </video>
            <div class="container h-100">
                <div class="d-flex h-100 text-center align-items-center">
                <div class="w-100 text-white">
                    <div class="row">
                        <div class="col-lg-4"></div>
                        <div class="col-lg-4"></div>
                        <div class="col-lg-4">
                            <div class="shadow bg-dark rounded p-5 text-left">
                                <div class="institucional">
                                    <h3 class="text-primary">A minha experiência</h3>
                                </div>
                                <p>
                                    Trabalhei como freelancer "Motion Designer" por muitos anos e
                                    desenvolvi websites para grandes e pequenas empresas, aprendi muito,
                                    inclusive valorizando as pequenas coisas e respeitando processos.
                                    Hoje tenho conseguido resultados frutíferos com o trabalho árduo e a
                                    dedicação entre os vários projetos, tenho procurado expandir o meu
                                    âmbito de trabalho e melhorar o meu processo de trabalho, hoje tenho
                                    segurança em dizer que sou bom nisso.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

  </div>
</template>

<script>
export default {};
</script>

<style>

.anim-institucional {
  position: relative;
  background-color: black;
  height: 75vh;
  min-height: 25rem;
  width: 100%;
  overflow: hidden;
}

.anim-institucional video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 0;
  -ms-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}

.anim-institucional .container {
  position: relative;
  z-index: 2;
}

.anim-institucional .overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0;
  z-index: 1;
}
</style>
