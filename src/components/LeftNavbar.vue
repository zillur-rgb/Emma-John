<template>
  <div>
    <div
      class="d-flex flex-column bg-blue-darken-4 align-center"
      v-for="(icon, index) in leftNavIcons"
      :key="index"
    >
      <button class="py-1 my-1 blue-darken-4 w-100">
        <router-link :to="{ name: 'About', params: { link: icon.link } }">
          <v-icon :icon="icon.icon" />
          <div class="text-caption text-center">{{ icon.name }}</div>
          <v-divider></v-divider>
        </router-link>
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
      link?: string
    }[] = [
      {
        name: 'Dashboard',
        icon: 'mdi:mdi-view-dashboard',
        link: '123',
      },
      {
        name: 'Accounting',
        icon: 'mdi:mdi-text-box-outline',
        link: '123',
      },
      {
        name: 'Coudinary',
        icon: 'mdi:mdi-cloud-circle',
        link: '123',
      },
      {
        name: 'Data Hub',
        icon: 'mdi:mdi-axis-arrow',
        link: '123',
      },
      {
        name: 'Data Hub Importer',
        icon: 'mdi:mdi-axis-arrow',
        link: '123',
      },
      {
        name: 'Documents',
        icon: 'mdi:mdi-file-document',
        link: '123',
      },
      {
        name: 'ECM',
        icon: 'mdi:mdi-animation',
        link: '123',
      },
      {
        name: 'E-mail',
        icon: 'mdi:mdi-email',
        link: '123',
      },
      {
        name: 'Flux Workflow',
        icon: 'mdi:mdi-sitemap',
        link: '123',
      },
      {
        name: 'Freight Carrier',
        icon: 'mdi:mdi-label-variant',
        link: '123',
      },
      {
        name: 'Fulfillment',
        icon: 'mdi:mdi-check-decagram',
        link: '123',
      },
      {
        name: 'Omni-channel',
        icon: 'mdi:mdi-star-three-points',
        link: '123',
      },
      {
        name: 'Document List',
        icon: 'mdi:mdi-text-box-check',
        link: '123',
      },
      {
        name: 'Settings',
        icon: 'mdi:mdi-cog',
        link: 'about',
      },
      {
        name: 'payments',
        icon: 'mdi:mdi-credit-card-marker',
        link: '123',
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

a {
  color: #fff;
  text-decoration: none;
}
</style>
