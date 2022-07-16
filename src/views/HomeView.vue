<template>
  <!-- <hello-world /> -->
  <app-bar />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// Components
import HelloWorld from '../components/HelloWorld.vue'
import AppBar from '../components/AppBar.vue'

export default defineComponent({
  name: 'HomeView',

  components: {
    HelloWorld,
    AppBar,
  },
})
</script>
