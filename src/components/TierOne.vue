<template lang="pug">
  tier-two
    template(v-slot:icon)
      documentation-icon
    template(v-slot:heading="scope") Documentation {{ scope.t }}
    | Vue’s
    a(href="https://vuejs.org/" target="_blank" rel="noopener") official documentation
    | provides you with all information you need to get started.


  tier-two
    template(v-slot:icon)
      tooling-icon
    template(v-slot:heading) Tooling
    | This project is served and bundled with
    | <a href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener">Vite</a>. The
    | recommended IDE setup is
    | <a href="https://code.visualstudio.com/" target="_blank" rel="noopener">VSCode</a> +
    | <a href="https://github.com/johnsoncodehk/volar" target="_blank" rel="noopener">Volar</a>. If
    | you need to test your components and web pages, check out
    | <a href="https://www.cypress.io/" target="_blank" rel="noopener">Cypress</a> and

    | More instructions are available in <code>README.md</code>.

  tier-two
    template(v-slot:icon)
      support-icon
    template(v-slot:heading) Support Vue
    template(v-slot:default)
      | As an independent project, Vue relies on community backing for its sustainability. You can help
      | us by
      | <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">becoming a sponsor</a>.

</template>

<script lang="ts">
import TierTwo from './TierTwo.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import SupportIcon from './icons/IconSupport.vue'

import { defineComponent, computed, ref, onMounted, watch } from "vue"

export default defineComponent({
  props: {},
  components: { TierTwo, DocumentationIcon, ToolingIcon, SupportIcon },
  setup(props, ctx) {
    return {

    }
  }
})
</script>

