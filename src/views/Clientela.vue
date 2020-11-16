<template>
  <div class="about">
    <construcao/>
  </div>
</template>
<script>
import construcao from "@/components/construindo.vue"
export default {
  mounted: function (){
    document.title = 'Gabriel Serejo - Clientela'
  },
    components: {
    construcao
  },
}
</script>