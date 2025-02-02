<script setup>

import { ref } from "vue";
import Menubar from 'primevue/menubar';


const bottomNavItems = ref([
    {
        label: 'Home',
        icon: 'pi pi-home'
    },
    {
        label: 'Features',
        icon: 'pi pi-star'
    },
    {
        label: 'Projects',
        icon: 'pi pi-search',
        
    },
    {
        label: 'Contact',
        icon: 'pi pi-envelope'
    }
]);
</script>
<template>
    <div class="bottom-nav-bar">
      <Menubar :model="bottomNavItems" />
    </div>
</template>

<style scoped>

.bottom-nav-bar {
  position: fixed;
  bottom: 0;
  width: 100%;
  justify-self: center;
  align-content: center;
  max-width: fit-content;
  padding: 1rem;
}
</style>