<template lang="pug">
.tarot-card
  img(:src="cardImage" alt="Tarot Card", :class="{ 'up': cardOrientation === 'up', 'down': cardOrientation === 'down' }")
.tarot-details
  h3 {{ selectedCard?.name }}
  p {{ selectedCard?.meaning_up }}
  p {{ cardOrientation }}
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue"
import { Card } from "@/components/tarot/card"

export default defineComponent({
  props: {
    card: {
      type: Object as () => Card,
      required: true
    },
    orientation: {
      type: String,
      required: true
    }
  },
  components: {  },
  setup(props, ctx) {

    const selectedCard = computed(() => {
      return props.card
    })

    const cardOrientation = computed(() => {
      return props.orientation
    })

    const cardImage = computed(() => {
      return `https://sacred-texts.com/tarot/pkt/img/${selectedCard.value.name_short}.jpg`
    })

    return {
      selectedCard,
      cardImage,
      cardOrientation
    }
  }


})
</script>

<style scoped lang="stylus">
.tarot-card
  img
    border: 6px solid white
    border-radius: 25px
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2)
    &.down
      transform: rotate(180deg)

</style>