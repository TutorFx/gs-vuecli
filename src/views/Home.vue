<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <cases/>
    <!-- <portfolio/> -->
    <institucional/>
    <portfolio/>
    <contato/>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import contato from '@/components/contato.vue'
import portfolio from '@/components/portfolio.vue'
import cases from '@/components/cases.vue'
import institucional from '@/components/institucional.vue'

export default {
  name: 'Home',
  components: {
    contato, portfolio, cases, institucional
  }
}
</script>
