<template lang="pug">
h1 Tarot Reading
.controls
  button(@click="onDrawCard") Draw Card
.tarot-table
  tarot-card(v-if="selectedCard", :card="selectedCard", :orientation="cardOrientation")
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
    const cardOrientation = ref<string>("up")

    const onDrawCard = function() {
      const randomIndex = Math.floor(Math.random() * tarotDeck.value.length)
      selectedCard.value = tarotDeck.value[randomIndex]
      cardOrientation.value = Math.random() > 0.5 ? "up" : "down"
    }

    return {
      tarotDeck,
      onDrawCard,
      selectedCard,
      cardOrientation
    }

  }
})
</script>

<style scoped lang="stylus">
.controls
  display: flex
  justify-content: center
  align-items: center
  button
    background-color: #FFC0CB
    border: 2px solid #422800
    border-radius: 30px
    box-shadow: #DC143C 4px 4px 0 0
    color: #422800
    cursor: pointer
    display: inline-block
    font-weight: 600
    font-size: 18px
    padding: 0 18px
    line-height: 50px
    text-align: center
    text-decoration: none
    user-select: none
    -webkit-user-select: none
    touch-action: manipulation

  button:hover
    background-color: #FFFFF0

  button:active
    box-shadow: #DC143C 2px 2px 0 0
    transform: translate(2px, 2px)

  @media (min-width: 768px)
    button
      min-width: 120px
      padding: 0 25px

.tarot-table
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  height: 100vh
  // button
  //   padding: 1rem
  //   margin: 1rem
  //   border: 1px solid red
  //   border-radius: 10px
  //   background-color: red
  //   color: white
  //   font-size: 1.5rem
  //   cursor: pointer
  //   &:hover
  //     background-color: white
  //     color: red
</style>



button
  background-color: #fbeee0
  border: 2px solid #422800
  border-radius: 30px
  box-shadow: #422800 4px 4px 0 0
  color: #422800
  cursor: pointer
  display: inline-block
  font-weight: 600
  font-size: 18px
  padding: 0 18px
  line-height: 50px
  text-align: center
  text-decoration: none
  user-select: none
  -webkit-user-select: none
  touch-action: manipulation


button:hover
  background-color: #fff


button:active
  box-shadow: #422800 2px 2px 0 0
  transform: translate(2px, 2px)


@media (min-width: 768px)
  button
    min-width: 120px
    padding: 0 25px






