<script setup>
import Button from 'primevue/button';
import { ref, onMounted } from "vue";
const darkIcon = "pi pi-moon";
const lightIcon = "pi pi-sun";
const darkIconQilay = new URL("../assets/logo2.svg", import.meta.url);
const lightIconQilay = new URL("../assets/logoleaf-light.svg", import.meta.url);
const overrideThemeKey = "theme-override";

let themeIcon = ref("");
let themeQilay = ref(null);

let toggleTheme = () => {
    themeIcon.value = document.documentElement.classList.toggle('dark-mode') ? lightIcon : darkIcon;
    themeQilay.value = themeIcon.value === lightIcon ? darkIconQilay : lightIconQilay;
    saveOverrideTheme();
}

let saveOverrideTheme = () => {
    localStorage.setItem(overrideThemeKey, document.documentElement.classList.contains('dark-mode') ? 'dark' : 'light');
}

onMounted(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    themeIcon.value = prefersDark ? lightIcon : darkIcon;
    themeQilay.value = prefersDark ? darkIconQilay : lightIconQilay;
    if(prefersDark && localStorage.getItem(overrideThemeKey) === 'light') {
        toggleTheme();
    }
});
</script>
<template>
    <div class="fixed flex z-100 left-0 top-0 w-[100vw] backdrop-blur-lg h-[10vh]">

    </div>
    <div class="font-roboto sticky top-0 left-0 z-100 px-2 py-4 flex items-center h-[10vh] justify-between w-full">
        <img :src="themeQilay" class="w-10" alt="">

        <div class="flex items-center justify-between w-[100px]">
            <Button rounded variant="text" @click="toggleTheme">
                <span :class="themeIcon"></span>
            </Button>
            <h2>Qilay</h2>
        </div>
    </div>
</template>
<style scoped></style>