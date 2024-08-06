<template lang="pug">
header
  //- nav
  //-   router-link(to="/") Home
  //-   router-link(to="/sunshine") Sunshine
  //-   router-link(to="/tarot") Tarot

  router-view

footer
  a(href="https://www.vecteezy.com/free-vector/tarot") Tarot Vectors by Vecteezy
  a(target="_blank" href="https://icons8.com/icon/WYnYFTZznuoz/tarot") Tarot
  | icon by
  a(target="_blank" href="https://icons8.com") Icons8
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'App',
  components: {
  },
  setup(){

    return {

    }
  }
})
</script>

<style scoped lang="stylus">
</style>
