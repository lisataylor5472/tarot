<template lang="pug">
| This is the Sunshine page
</template>

<script lang="ts">
  import { defineComponent, computed, ref, onMounted, watch } from "vue"
  import TierOne from "@/components/TierOne.vue"

  export default defineComponent({
    props: {},
    components: { TierOne },
    setup(props, ctx) {

      return {

      }
    }
  })
</script>
