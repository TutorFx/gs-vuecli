<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <div>
    <blacklivesmatter/>
    <hero v-show="true" />
    <navigation/>
      <router-view/>
    <tfooter/>
  </div>
</template>

<script>
import 'bootstrap';

import navigation from "@/components/navigation"
import hero from "@/components/hero"
import tfooter from "@/components/tfooter"
import blacklivesmatter from "@/components/blacklivesmatter.vue"


export default {
  components: {navigation, hero, tfooter, blacklivesmatter},
}

</script>

<style lang="scss">
  $body-font-family: 'Montserrat';
  $title-font: 'Montserrat';

  .v-application {
   font-family: $body-font-family, sans-serif !important;
    .title { // To pin point specific classes of some components
       font-family: $title-font, sans-serif !important;
    }
 }
 
</style>
