<template>
  <div class="portfolio">
    <construcao />
  </div>
</template>
<script>
  import construcao from '@/components/construcao.vue'

export default {
  mounted: function (){
    document.title = 'Gabriel Serejo - Portfólio'
  },
  components: {
    construcao
  }
}
</script>