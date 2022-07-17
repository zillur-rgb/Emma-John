<template>
  <!-- <hello-world /> -->
  <app-bar />
  <Homepage />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// Components
import HelloWorld from '../components/HelloWorld.vue'
import AppBar from '../components/AppBar.vue'
import Homepage from '../components/Homepage.vue'

export default defineComponent({
  name: 'HomeView',

  components: {
    HelloWorld,
    AppBar,
    Homepage,
  },
})
</script>

<style>
body {
  font-family: 'Inter', sans-serif !important;
}
</style>
