<template lang="pug">
.tarot-card
  img(:src="cardImage" alt="Tarot Card", :class="{ 'reversed': cardIsReversed }")
.tarot-details
  h3 {{ selectedCard?.name }}
  p {{ cardIsReversed ? 'Reversed' : 'Upright' }}
  p {{ selectedCard?.meaning_up }}
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
    cardIsReversed: {
      type: Boolean,
      required: true
    }
  },
  components: {  },
  setup(props, ctx) {

    const selectedCard = computed(() => {
      return props.card
    })


    const cardImage = computed(() => {
      return `https://sacred-texts.com/tarot/pkt/img/${selectedCard.value.name_short}.jpg`
    })

    return {
      selectedCard,
      cardImage
    }
  }


})
</script>

<style scoped lang="stylus">
.tarot-card
  img
    border-style solid
    border-width 5px
    border-color var(--vt-c-white-soft)
    background-size 4px 3px
    border-radius 25px
    box-shadow 0 0 10px 0 rgba(0, 0, 0, 0.5)
    margin-bottom 3em
    &.reversed
      transform rotate(180deg)

</style>