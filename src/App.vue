<template lang="pug">

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
// header
//   margin 0
//   position absolute
//   top 0px
//   height 10vh
//   width 100%
//   background-color var(--vt-c-black)
//   z-index 1
// footer
//   margin 0
//   position absolute
//   bottom 0px
//   height 5vh
//   width 100%
//   background-color var(--vt-c-black)
//   display flex
//   justify-content center
//   align-items center
//   a
//     color white
//     text-decoration none
//     &:hover
//       color var(--vt-c-yellow)
//     &::after
//       content ' | '
</style>
