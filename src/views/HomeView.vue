<template>
  <!-- <hello-world /> -->
  <app-bar />
  <div class="h-screen d-flex">
    <LeftNavbar />
    <Homepage />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// Components
import HelloWorld from '../components/HelloWorld.vue'
import AppBar from '../components/AppBar.vue'
import Homepage from '../components/Homepage.vue'
import LeftNavbar from '../components/LeftNavbar.vue'

export default defineComponent({
  name: 'HomeView',

  components: {
    HelloWorld,
    AppBar,
    Homepage,
    LeftNavbar,
  },
})
</script>

<style>
body {
  font-family: 'Inter', sans-serif !important;
}
</style>
