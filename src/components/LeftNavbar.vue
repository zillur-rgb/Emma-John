<template>
  <div>
    <div
      class="d-flex flex-column bg-blue-darken-4 align-center"
      v-for="(icon, index) in leftNavIcons"
      :key="index"
    >
      <button class="py-1 my-1 blue-darken-4 w-100">
        <v-icon :icon="icon.icon" />
        <div class="text-caption text-center">{{ icon.name }}</div>
        <v-divider></v-divider>
      </button>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'LeftNavbar',
  setup() {
    const leftNavIcons: {
      name: string
      icon: string
    }[] = [
      {
        name: 'Dashboard',
        icon: 'mdi:mdi-view-dashboard',
      },
      {
        name: 'Accounting',
        icon: 'mdi:mdi-text-box-outline',
      },
      {
        name: 'Coudinary',
        icon: 'mdi:mdi-cloud-circle',
      },
      {
        name: 'Data Hub',
        icon: 'mdi:mdi-axis-arrow',
      },
      {
        name: 'Data Hub Importer',
        icon: 'mdi:mdi-axis-arrow',
      },
      {
        name: 'Documents',
        icon: 'mdi:mdi-file-document',
      },
      {
        name: 'ECM',
        icon: 'mdi:mdi-animation',
      },
      {
        name: 'E-mail',
        icon: 'mdi:mdi-email',
      },
      {
        name: 'Flux Workflow',
        icon: 'mdi:mdi-sitemap',
      },
      {
        name: 'Freight Carrier',
        icon: 'mdi:mdi-label-variant',
      },
      {
        name: 'Fulfillment',
        icon: 'mdi:mdi-check-decagram',
      },
      {
        name: 'Omni-channel',
        icon: 'mdi:mdi-star-three-points',
      },
      {
        name: 'Document List',
        icon: 'mdi:mdi-text-box-check',
      },
      {
        name: 'Settings',
        icon: 'mdi:mdi-cog',
      },
      {
        name: 'payments',
        icon: 'mdi:mdi-credit-card-marker',
      },
    ]
    return { leftNavIcons }
  },
}
</script>
<style scoped>
button {
  border-bottom: 1px solid black;
}

button:hover {
  opacity: 0.7;
}
</style>
