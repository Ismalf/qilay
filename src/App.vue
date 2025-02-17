<script setup >
import { RouterView } from 'vue-router'
import { ref } from "vue";
import DockNav from './components/DockNav.vue';
import Header from './components/Header.vue';
import OverlayPage from './components/OverlayPage.vue';

const drawerWrapper = ref(null);
const setComponent = (component) => {
  drawerWrapper.value.openDrawer(component);
};
</script>

<template>
  <Header />
  <RouterView />
  <DockNav @loadComponent="setComponent" />
  <OverlayPage ref="drawerWrapper" />
</template>

<style scoped></style>
