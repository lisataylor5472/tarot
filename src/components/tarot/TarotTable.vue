<template lang="pug">

.tarot-table
  .cover(:class="{'new-reading': newReading}")
    img.moth.vertical-flip(src="@/assets/vecteezy_vintage-butterfly-illustration.png", alt="Moth Art 2")
    img.moth(src="@/assets/vecteezy_vintage-butterfly-illustration.png", alt="Moth Art")



  transition(name="fade")
    .controls(v-if="!newReading")
      h1 Tarot
      button.new-reading-btn(@click="newReading = !newReading") Read the Cards

  transition(name="fade")
    .controls(v-if="newReading", :class="{'new-reading': newReading}")
      button(@click="onOneCard") One Card
      button(@click="onTwoCard") Three Card
      button(@click="onYesNoCard") Yes / No

    //- .controls
    //-   h1(v-if="!newReading") Tarot
    //-   button.new-reading-btn(v-if="!newReading", @click="newReading = !newReading") Read the Cards

    //-   template(v-if="newReading", :class="{'new-reading': newReading}")
    //-     button(@click="onOneCard") One Card
    //-     button(@click="onTwoCard") Three Card
    //-     button(@click="onYesNoCard") Yes / No

//- .tarot-table
//-   tarot-card(v-if="selectedCard", :card="selectedCard", :cardIsReversed="cardIsReversed")
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

.fade-enter-active
  transition all 1.2s ease-in
  transition-delay .3s


.fade-leave-active
  transition all .3s ease-out


.fade-enter-from ,
.fade-leave-to
  opacity 0

.tarot-table
  display flex
  justify-content center
  align-items center

.cover
  display flex
  justify-content space-between
  flex-direction column
  align-items center
  height 100vh
  position fixed

  // opacity 0
  .new-reading-btn
    margin 1em 0
    z-index 1

  .moth
    height 40vh

  .vertical-flip
    transform rotate(180deg)

  &.new-reading
    align-content space-between
    transform rotate(90deg)
    height 100vw
    border 1px solid red
    transition transform .9s ease-in, height .9s ease-in

    .moth
      transition height .9s ease-in
      height 50vh
      // margin-top 10em

.controls
  display flex
  flex-direction column
  justify-content center
  position absolute
  top 40%
  opacity 1
    // .moth
    //   margin 4em 0

  // .fade-enter-active,
  // .fade-leave-active
  //   transition opacity 0.5s ease

  // .fade-enter-from,
  // .fade-leave-to
  //   opacity 0




// .tarot-table
//   display flex
//   justify-content center
//   align-items center
//   flex-direction column
//   height 100vh

//   .reading-types
//     display none
//     opacity 0
//     transition-property display, opacity
//     transition-duration 3s
//     transition-behavior allow-discrete

//     &.new-reading
//       transition opacity 3s
//       transition display 3s
//       display flex
//       justify-content center
//       align-items center
//       flex-direction column
//       opacity 1



</style>







