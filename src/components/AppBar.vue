<template>
  <v-app-bar>
    <v-app-bar-title>Actindo Core</v-app-bar-title>
    <v-spacer></v-spacer>
    <v-app-bar-title class="font-weight-black"
      >OMS - Document List</v-app-bar-title
    >
    <v-spacer></v-spacer>

    <v-icon v-for="({ name }, index) in icons" :icon="name" :key="index" />
  </v-app-bar>
</template>
<script lang="ts">
import { Ref, ref } from 'vue'

export default {
  setup() {
    const icons: { name: string }[] = [
      { name: 'mdi:mdi-check-circle-outline' },
      { name: 'mdi:mdi-help-circle' },
      { name: 'mdi:mdi-circle-outline' },
      { name: 'mdi:mdi-bell' },
      { name: 'mdi:mdi-cog' },
      { name: 'mdi:mdi-account-circle' },
    ]

    return { icons }
  },
}
</script>
<style scoped>
.v-icon {
  margin: 0 10px;
  cursor: pointer;
}

.v-icon:hover {
  opacity: 0.7;
}
</style>
