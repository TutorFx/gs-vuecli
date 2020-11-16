<template id="portfolio">
  <div class="pt-5" id="section3">
    <div class="container">
      <h6 class="text-primary">MEU PORTFÓLIO</h6>
      <h4 class="text-light bold">
        Veja agora no Behance alguns de meus projetos
      </h4>
      <!-- <div id="filter">
        <a class="btn btn-third mr-2" data-filter="*">Tudo</a>
        <a class="btn btn-third mr-2" data-filter=".branding">Branding</a>
        <a class="btn btn-third mr-2" data-filter=".motion">Motion Design</a>
        <a v-for="item in portfolio" v-bind:key="item.key" class="btn btn-third mr-2">Motion Design</a>
      </div> -->

      <div class="grid text-primary projects-wrapper row py-5">
        <div
          v-for="item in portfolio"
          v-bind:key="item.key" 
          class="grid-item motion col-6 col-xs-12 col-sm-12 col-md-6 col-lg-4 p-1"
        >
          <div class="capa rounded overflow-hidden">
            <a v-bind:href="item.link">
            <img
              class="img-fluid"
              :src="item.capa"
              alt=""
            />
            </a>
          </div>
        </div>

      </div>
    </div>
    <div class="py-5 prova-social-bg">
      <div class="container">
        <div class="prova-social">
          <div class="my-5">
            <h6 class="text-primary">PROVA SOCIAL</h6>
            <h4 class="bold text-light">
              O que tem-se falado sobre o meu trabalho por aí
            </h4>
          </div>
        </div>
      </div>
      <!-- Swiper -->
      <div class="container">
        <div class="swiper-wrapper mb-5">
          <swiper
            :slides-per-view="1"
            :space-between="50"
            :pagination="{ clickable: true }"
            Autoplay
            @swiper="onSwiper"
            @slideChange="onSlideChange"
          >
            <swiper-slide>
              <div class="px-3">
                <div class="testi rounded p-5">
                  <p class="text-primary">SUPERVISORA</p>
                  <h4 class="text-light">
                    “Tive a oportunidade de trabalhar com o Gabriel um excelente
                    profissional! Super dedicado e competente. Sempre em busca
                    de qualificação e crescimento pessoal. Algumas palavras
                    resumem bem o Gabriel: Dedicação, comprometimento e
                    competência. Te desejo muito sucesso. Você vai longe.”
                  </h4>
                  <div class="testi-details d-flex pt-3">
                    <img
                      class="testi-img"
                      src="@/assets/img/testi/Jessica.webp"
                      alt=""
                    />
                    <div class="pl-4 testi-content">
                      <h5 class="text-white">
                        Jéssica Silvestre de Souza
                      </h5>
                      <h6 class="font-weight-normal text-warning">
                        Gerente de Marketing, Ledwave
                      </h6>
                    </div>
                  </div>
                </div>
              </div></swiper-slide
            >
            <swiper-slide
              ><div class="px-3">
                <div class="testi rounded p-5">
                  <p class="text-primary">SUPERVISOR</p>
                  <h4 class="text-light">
                    “O Gabriel é um profissional muito dedicado, atencioso e
                    está sempre comprometido em superar as expectativas. Possui
                    muita habilidade técnica e é muito criativo, além de se
                    interessar e aprender muito com os feedbacks que recebe. Foi
                    uma alegria trabalhar na mesma equipe que o Gabriel, ele é o
                    tipo de profissional que faz a diferença no mercado.”
                  </h4>
                  <div class="testi-details d-flex pt-3">
                    <img
                      class="testi-img"
                      src="@/assets/img/testi/Gui.webp"
                      alt=""
                    />
                    <div class="pl-4 testi-content">
                      <h5 class="text-white">
                        Guilherme Rosa Pedroso
                      </h5>
                      <h6 class="font-weight-normal text-warning">
                        Analista de Marketing, Ledwave
                      </h6>
                    </div>
                  </div>
                </div>
              </div></swiper-slide
            >
            <swiper-slide>
              <div class="px-3">
                <div class="testi rounded p-5">
                  <p class="text-primary">COLEGA DE TRABALHO</p>
                  <h4 class="text-light">
                    “Profissional talentoso e dedicado! Executa os projetos com
                    agilidade sempre visando qualidade e bons resultados. Além
                    disso, trabalha muito bem em equipe. Sucesso, Gabriel!”
                  </h4>
                  <div class="testi-details d-flex pt-3">
                    <img
                      class="testi-img"
                      src="@/assets/img/testi/breeze.webp"
                      alt=""
                    />
                    <div class="pl-4 testi-content">
                      <h5 class="text-white">
                        Breeze Mendes
                      </h5>
                      <h6 class="font-weight-normal text-warning">
                        Ilustradora, IRRA Studio
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              </swiper-slide>
          </swiper>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination mt-5"></div>
      </div>
    </div>
  </div>
</template>

<script>
// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


// Import Swiper styles
export default {
  data(){
    return {
    search: '',
    portfolio: [
       {nome: 'bh', tag:'', link: 'https://www.behance.net/gallery/88042209/Motion-Design-para-Ledwave-Promocao-Belo-Horizonte', capa: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/10a04388042209.Y3JvcCw4MDgsNjMyLDAsMA.png'},
       {nome: 'ciajob', tag:'', link: 'https://www.behance.net/gallery/94159179/CIAJOB-INSTITUTIONAL', capa: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/27d93a94159179.Y3JvcCw4MDgsNjMyLDAsMA.png'},
       {nome: 'trainees', tag:'', link: 'https://www.behance.net/gallery/94107149/TRAINEES-CHARACTER-ANIMATION', capa: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/410cac94107149.Y3JvcCw4MDgsNjMyLDAsMA.png'},
       {nome: 'logo', tag:'', link: 'https://www.behance.net/gallery/84353731/Logo-Gabriel-Serejo', capa: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/46736c84353731.Y3JvcCw4NzMsNjgyLDAsNDE.png'},
       {nome: 'motion', tag:'', link: 'https://www.behance.net/gallery/84137677/Motion-Designs-10', capa: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/ae681c84137677.Y3JvcCwxMjAwLDkzOCwwLDU5.png'},
    ],
  }},
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    onSwiper(swiper) {
    },
    onSlideChange() {
    }
  },
  mounted(){

  }
};
</script>

<style></style>
