<template lang="pug">
h1 Tarot
.cover
  button(v-if="!newReading", @click="newReading = !newReading") Read the Cards
  img.moth(src="@/assets/vecteezy_vintage-butterfly-illustration.png", alt="Moth Art", :class="{'new-reading': newReading}" )
.tarot-table
  .reading-types(:class="{'new-reading': newReading}")
    button(@click="onOneCard") One Card
    button(@click="onTwoCard") Three Card
    button(@click="onYesNoCard") Yes / No
  tarot-card(v-if="selectedCard", :card="selectedCard", :cardIsReversed="cardIsReversed")
</template>

<script lang="ts">
import { defineComponent, computed, ref, onMounted, watch } from "vue"
import TarotCard from "@/components/tarot/TarotCard.vue"
import cards from "@/assets/cards.json"
import { Card } from "@/components/tarot/card"

export default defineComponent({
  props: {},
  components: { TarotCard },
  setup(props, ctx) {

    const tarotDeck = ref<Card[]>(cards)
    const selectedCard = ref<Card | null>(null)
    const cardIsReversed = ref<boolean | null>(false)

    const newReading = ref<boolean>(false)


    const onOneCard = function() {
      // selectedReading.value = true
      const randomIndex = Math.floor(Math.random() * tarotDeck.value.length)
      selectedCard.value = tarotDeck.value[randomIndex]
      cardIsReversed.value = Math.random() > 0.5 ? true : false
    }

    return {
      newReading,
      tarotDeck,
      onOneCard,
      selectedCard,
      cardIsReversed
    }

  }
})
</script>

<style scoped lang="stylus">

.cover
  display flex
  justify-content center
  flex-direction column
  align-items center
  button
    // margin-top 50%
    margin-bottom 2em
    z-index 1
  .moth
    width 80%
    position absolute
    top 10em
    // background-color var(--vt-c-white-soft)

    &.new-reading
      transform translateY(-70%)
      transition transform 1s ease-in

.tarot-table
  display flex
  justify-content center
  align-items center
  flex-direction column
  height 100vh

  .reading-types
    display none
    opacity 0
    transition-property display, opacity
    transition-duration 3s
    transition-behavior allow-discrete

    &.new-reading
      transition opacity 3s
      transition display 3s
      display flex
      justify-content center
      align-items center
      flex-direction column
      opacity 1



</style>







