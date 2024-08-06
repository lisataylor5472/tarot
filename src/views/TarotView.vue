<template lang="pug">

tarot-table
</template>

<script lang="ts">
import { defineComponent, computed, ref, onMounted, watch } from "vue"
import TarotTable from "@/components/tarot/TarotTable.vue"

export default defineComponent({
  props: {},
  components: { TarotTable },
  setup(props, ctx) {




    return {

    }
  }


})
</script>

<style scoped lang="stylus">
.tarot-table
  display: flex
  justify-content: center
  align-items: center
  height: 100vh
  background-color: #FFC0CB
  color: #422800
  font-size: 24px
  font-weight: 600
  text-align: center
  user-select: none


 </style>
