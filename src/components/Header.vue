<script setup>
import Button from 'primevue/button';
import { ref, onMounted } from "vue";
const darkIcon = "pi pi-moon";
const lightIcon = "pi pi-sun";
const overrideThemeKey = "theme-override";

let themeIcon = ref("");

let toggleTheme = () => {
    themeIcon.value = document.documentElement.classList.toggle('dark-mode') ? lightIcon : darkIcon;
    saveOverrideTheme();
}

let saveOverrideTheme = () => {
    localStorage.setItem(overrideThemeKey, document.documentElement.classList.contains('dark-mode') ? 'dark' : 'light');
}

onMounted(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    themeIcon.value = prefersDark ? lightIcon : darkIcon;
    if(prefersDark && localStorage.getItem(overrideThemeKey) === 'light') {
        toggleTheme();
    }
});
</script>
<template>
    <div class="fixed flex left-0 top-0 w-[100vw] backdrop-blur-md h-[5vh]">

    </div>
    <div class="font-roboto sticky top-0 left-0 z-50 px-2 py-4 flex items-center h-[5vh] justify-between w-full">
        <img src="../assets/logo2.svg" class="w-10" alt="">
        <div class="flex items-center justify-between w-[100px]">
            <Button rounded variant="text" @click="toggleTheme">
                <span :class="themeIcon"></span>
            </Button>
            <h2>Qilay</h2>
        </div>
    </div>
</template>
<style scoped></style>