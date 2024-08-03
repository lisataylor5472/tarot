<template lang="pug">
header
  nav
    router-link(to="/") Home
    router-link(to="/sunshine") Sunshine
    router-link(to="/tarot") Tarot

  router-view
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
  },
  setup(){
    const thing = ref('thing')
    return {

    }
  }
})
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

</style>
